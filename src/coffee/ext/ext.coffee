#
#* Copyright (c) 2012, Interactive Advertising Bureau
#* All rights reserved.
#
#Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
#
#Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
#
#THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
#
#

###
@fileOverview This file contains JavaScript code that handles the HTML document where HTML is rendered for a SafeFrame, as well as defining the External Vendor/Client API.
@author <a href="mailto:ssnider@yahoo-inc.com">Sean Snider</a>
@author <a href="mailto:ccole[AT]emination.com">Chris Cole</a>
@version 1.0.3
###

###
@namespace $sf.ext The external vendor / client API for functionality inside a SafeFrame
@name $sf.ext
###

###
@ignore
###
sf = require "../shared/base"

module.exports = (isExternal)->
  return do (window,sf)->

    win = window
    LOAD = "load"
    ON_STR = "on"
    MSG = "message"
    UNLOAD = "un" + LOAD
    ONUNLOAD = ON_STR + UNLOAD
    ONMSG = ON_STR + MSG
    ONLOAD = ON_STR + LOAD
    DG = "__defineGetter__"
    DS = "__defineSetter__"
    DP = "__defineProperty__"
    W3C_ATTACH = "addEventListener"
    W3C_DETACH = "removeEventListener"
    IE_ATTACH = "attachEvent"
    IE_DETACH = "detachEvent"
    TOLOWERCASE = "toLowerCase"
    EXPAND_COMMAND = "exp-ovr"
    COLLAPSE_COMMAND = "collapse"
    ERROR_COMMAND = "error"
    NOTIFY_GEOM_UPDATE = "geom-update"
    NOTIFY_EXPAND = "expand"
    NOTIFY_FOCUS_CHANGE = "focus-change"
    NOTIFY_COLLAPSE = COLLAPSE_COMMAND
    NOTIFY_COLLAPSED = (NOTIFY_COLLAPSE + "d")
    NOTIFY_FAILURE = "failed"
    NOTIFY_READ_COOKIE = "read-cookie"
    NOTIFY_WRITE_COOKIE = "write-cookie"
    NOTIFY_CLICKED = "clicked"
    NOTIFY_VIEWED = "viewed"
    NOTIFY_UNVIEWED = "unviewed"
    NOTIFY_LOADED = "loaded"
    NOTIFY_REQUESTED = "requested"
    NOTIFY_RELOAD = "reload"
    STATUS_COLLAPSED = NOTIFY_COLLAPSED
    STATUS_EXPANDED = NOTIFY_EXPAND + "ed"
    STATUS_COLLAPSING = "collapsing"
    STATUS_EXPANDING = NOTIFY_EXPAND + "ing"
    OUR_TAG_CLS_NAME = "sf"
    MAX_MSG_WAIT_TIME = 4000
    DOM_WATCH_INTERVAL = 3000
    GUID_VALID_TIME = 30000
    OBJ = "object"
    d = (win and win.document)
    par = (win and win.parent)
    lib = sf.lib
    env = sf.env
    lang =  lib.lang
    ParamHash =  lang.ParamHash
    dom = lib.dom
    iframes = dom.iframes
    msgclient_fb = dom.msgclient_fb
    isIE = env.isIE
    _ue = win.unescape
    _cstr = lang.cstr
    _cnum = lang.cnum
    _append = dom.append
    _tags = dom.tags
    _elt = (dom and dom.elt)
    _purge = (dom and dom.purge)
    _attach = (dom and dom.attach)
    _detach = (dom and dom.detach)
    _attr = (dom and dom.attr)
    hasLoaded = false
    is_expanded = false
    force_collapse = false
    is_registered = false
    init_width = 0
    init_height = 0
    sandbox_cb = null
    pending_msg = null
    geom_info = null
    pos_meta = null
    win_has_focus = false
    guid = ""
    host_cname = ""
    can_use_html5 = false
    frame_id = ""
    pos_id = ""
    err_msg_timer_id = 0
    orphan_timer_id = 0
    inline_handler_timer_id = 0
    err_msgs = []
    unload_handlers = []
    render_params = undefined
    render_conf = undefined
    ie_old_attach = undefined
    w3c_old_attach = undefined
    ie_old_detach = undefined
    w3c_old_detach = undefined
    isAdShown =false


    #
    #	 * --BEGIN-Intenral HTML Document handling
    #	 *
    #

    ###
    Creates and appends a style sheet for any custom CSS passed

    @name $sf.ext-_create_stylesheet
    @function
    @static
    @private
    @param {String} cssText A string of CSS rules, or a URL string
    @param {String} [id] The id attribute of the tag created and appended
    ###
    _create_stylesheet = (cssText, id) ->
      oHead = undefined
      oSS = undefined
      oTxt = undefined
      e = undefined
      try
        oHead = _tags("head")[0]
        if cssText.search(/\{[^\}]*}/g) is -1
          oSS = dom.make("link")
          oSS.type = "text/css"
          oSS.rel = "stylesheet"
          oSS.href = cssText
        else
          oSS = dom.make("style")
          oSS.type = "text/css"
          if isIE
            oSS.styleSheet.cssText = cssText
          else
            oTxt = d.createTextNode(cssText)
            _append oSS, oTxt
        oSS.id = id  if id
        _append oHead, oSS
      return

    #log

    ###
    Fires of unload event handlers and performs the necessary clean up when a SafeFrame is destroyed

    @name $sf.ext-_destruction
    @function
    @static
    @private
    @param {HTMLEvent} [evt] The raw dom event object if it exists
    ###
    _destruction = (evt) ->

      #note we are re-grabbing the window ref, b/c in IE sometimes unload doesn't fire when the iframe
      #is removed from the dom (usually do to references hanging), and the window object has now changed
      handler = undefined
      w = window
      success = 1
      e = undefined
      try
        evt = evt or w.event or {}
      catch e
        evt = type: UNLOAD
      while handler = unload_handlers.shift()
        try
          handler evt
      try
        if ie_old_attach
          w[IE_ATTACH] = ie_old_attach
          w[IE_DETACH] = ie_old_detach
      try
        if w3c_old_attach
          w[W3C_ATTACH] = w3c_old_attach
          w[W3C_DETACH] = w3c_old_detach
      _detach w, LOAD, _handle_load  unless hasLoaded
      _detach w, UNLOAD, _handle_unload
      try
        w.onerror = null
      try
        if err_msg_timer_id
          clearTimeout err_msg_timer_id
          err_msg_timer_id = 0
      try
        if orphan_timer_id
          clearTimeout orphan_timer_id
          orphan_timer_id = 0
      try
        if inline_handler_timer_id
          clearTimeout inline_handler_timer_id
          inline_handler_timer_id = 0
      w = ie_old_attach = w3c_old_attach = ie_old_detach = w3c_old_detach = d = _ue = par = handler = grand_par = null
      success

    ###
    Maintains that the window.onmessage property remains unset.
    We don't want content in our document listening to HTML5 messages.
    We override attaching to listeners below to maintain that functionality,
    however IE won't let you override properties directly hangning off of the
    window object, so we have a timer as a fallback for that purpose

    @name $sf.ext-_reset_inline_handlers
    @function
    @static
    @private
    ###
    _reset_inline_handlers = ->
      e = undefined
      try
        if inline_handler_timer_id
          clearTimeout inline_handler_timer_id
          inline_handler_timer_id = 0
      try
        win.onmessage = null  if isIE and win.onmessage
      try
        win.onerror = _handle_err
      inline_handler_timer_id = setTimeout(_reset_inline_handlers, DOM_WATCH_INTERVAL)
      return

    ###
    Clears out the HTML document (which will force an unload event as well).

    @name $sf.ext-_nuke_doc
    @function
    @static
    @private
    ###
    _nuke_doc = ->
      e = undefined
      try
        document.open "text/html", "replace"
        document.write ""
        document.close()
      return

    ###
    Iteratively checks to see if the IFRAME HTML document is no longer
    attached to the main dom, doing this by checking that our internal
    window reference is still valid. . .as well as running the checks to make
    sure invalid iframes (iframes from origin) are not created.

    If we detect that the IFRAME has been removed from the main dom of the
    publisher, then we call to destroy the HTML document, forcing onunload
    event and subsquent cleanup

    @name $sf.ext-_check_orphaned
    @function
    @static
    @private
    ###
    _check_orphaned = ->
      is_orphaned = false
      e = undefined
      _detect_bad_iframe()

      #
      #		 * This method checks to see if the win reference has become the top level frame
      #		 * /window refrence.  In IE when calling parNode.removeChild(iframeNode), the
      #		 * underlying iframe document is not unloaded right away, or potentially ever.
      #		 * This causes the JS code inside the frame to continue running. However, when
      #		 * an iframe is removed from the main DOM, the window reference changes to point
      #		 * at the top level, eventhough it was nested in the main dom.  So we can detect
      #		 * this change, and swap the location of the frame to force the document to unload
      #		 * properly. Note this method runs in a timer continually, but only in
      #		 * IE browsers.
      #		 *
      #
      return  unless isIE
      try
        if orphan_timer_id and orphan_timer_id isnt -1
          clearTimeout orphan_timer_id
          orphan_timer_id = 0
      try
        is_orphaned = (win is top and orphan_timer_id isnt -1)
      catch e
        is_orphaned = false
      if is_orphaned
        orphan_timer_id = -1
        _destruction()
        _nuke_doc()
        return
      try
        orphan_timer_id = setTimeout(_check_orphaned, DOM_WATCH_INTERVAL)  unless orphan_timer_id
      return

    ###
    Detect whether or not an IFRAME tag has been inserted into the DOM that has the same
    origin / cname as the publisher, which should not be allowed as it's a security issue
    If said IFRAME tag(s) are found, remove them.

    @name $sf.ext-_detect_bad_iframe
    @function
    @static
    @private
    ###
    _detect_bad_iframe = ->

      # detect iframe policy files that may be created by ad-interax and/or double click and nuke them
      iframes = _tags("iframe")
      idx = 0
      srcHost = ""
      written = false
      tag = undefined
      if host_cname
        while tag = iframes[idx++]
          srcHost = _attr(tag, "src")
          srcHost = (if (srcHost and srcHost.length >= 9) then srcHost.substring(0, srcHost.indexOf("/", 9))[TOLOWERCASE]() else "")
          if srcHost and srcHost is host_cname and tag.className isnt OUR_TAG_CLS_NAME
            try
              _purge tag
      return

    ###
    Make sure that all hyperlinks in the document are set with the property "target" attribute
    such that links will navigate to the right window properly.

    @name $sf.ext-_set_hyperlink_targets
    @function
    @static
    @private
    ###
    _set_hyperlink_targets = ->
      idx = 0
      ttgt = ((render_conf and render_conf.tgt) or "_top")
      ln = undefined
      atgt = undefined
      lns = undefined
      lns = _tags("a")
      ttgt = "_top"  if ttgt is "_self"
      while ln = lns[idx++]
        atgt = _attr(ln, "target")
        _attr ln, "target", ttgt  unless atgt is ttgt
        break  if idx > 10
      return

    ###
    Handle the onunload event from the HTML document of the IFRAME, which in turn will trigger clean up

    @name $sf.ext-_handle_unload
    @function
    @static
    @private
    @param {HTMLEvent} evt The raw DOM event object
    ###
    _handle_unload = (evt) ->
      _destruction evt
      _nuke_doc()
      return

    ###
    Handle the load event from the HTML document of the IFRAME, which will also setup
    to make sure link targets are set properly

    @name $sf.ext-_handle_load
    @function
    @static
    @private
    ###
    _handle_load = ->
      return  if loaded
      hasLoaded = true
      _detach win, LOAD, _handle_load
      _set_hyperlink_targets()
      return

    ###
    Handle onmessage HTML5 x-domain events. We always cancel the event
    never allowing it to go to other listeners besides our own, as we don't allow HTML5 messaging
    beyond us and the publisher / host.

    @name $sf.ext-_handle_msg
    @function
    @static
    @private
    ###
    _handle_msg = (evt) ->
      str = undefined
      src = undefined
      org = undefined
      e = undefined
      msg_params = undefined
      msg_guid = undefined
      msg_obj = undefined

      ###
      TODO, also validate origin
      ###
      try
        str = evt.data
        src = evt.source
        org = evt.origin
      dom.evtCncl evt
      if str and src and src is top
        msg_params = ParamHash(str, null, null, true, true)
        msg_guid = msg_params.guid
        msg_obj = msg_params.msg
        if guid is msg_guid and msg_obj and typeof msg_obj is OBJ
          try
            setTimeout (->
              _receive_msg msg_obj, evt
              msg_params = evt = msg_guid = msg_obj = null
              return
            ), 1
      return

    ###
    This SafeFrames implementation internally handles all event attachment to maintain that the listener order
    for events that it cares about (onload, onunload, onbeforeunload, onmessage).
    This is done to make sure that proper clean up and intialization happens, as well as to enforce
    security.

    For events that it SafeFrames does not care about we allow the attachment listeners
    to proceed as normal, so we call the raw attachEvent / addEventListener functions.

    @name $sf.ext-_call_raw_evt_func
    @function
    @static
    @private
    @param {String} type The name of the event for which to attach/detach a listener
    @param {Function} f The callback function to use as a listener for said event
    @param {Boolean} [remove] If set to true, remove/detach this function as a listener, otherwise add
    ###
    _call_raw_evt_func = (type, f, remove) ->
      bOK = false
      ie_f = undefined
      w3c_f = undefined
      e = undefined
      if remove
        ie_f = ie_old_detach or w3c_old_detach
        w3c_f = w3c_old_detach
      else
        ie_f = ie_old_attach or w3c_old_attach
        w3c_f = w3c_old_attach
      if ie_f
        try
          ie_f type, f
          bOK = true
        catch e
          bOK = false
        unless bOK
          try
            ie_f.call win, type, f
            bOK = true
          catch e
            bOK = false
      if w3c_f and not bOK
        try
          w3c_f.call win, type, f, false
      return

    ###
    Override default event attachment, and send load, beforeunload, and unload handlers into our
    own ques, so that we can enforce the proper firing order.  if message event is passed in,
    we do not allow attachment, since we do not want n-party code listening to HTML5 messages

    @name $sf.ext-_attach_override
    @function
    @static
    @private
    @param {String} type the event name to listen too
    @param {Function} f The function to be called whenever the event fires
    ###
    _attach_override = (type, f) ->
      bDoDefault = false
      type = _cstr(type)[TOLOWERCASE]()
      switch type
        when UNLOAD, ONUNLOAD
          unload_handlers.push f
        when MSG, ONMSG
          true
        else
          bDoDefault = true
      _call_raw_evt_func type, f  if bDoDefault
      return

    ###
    Override default event detachment, and remove load, beforeunload, and unload handlers
    from our own que.  if message event is passed in, we do nothing (since we don't alllow
    attachment either).  If not one of those event types, then we call the default event detachment

    @name $sf.ext-_detach_override
    @function
    @static
    @private
    @param {String} type the event name to unlisten too
    @param {Function} f The function to no longer be called for the specific event
    ###
    _detach_override = (type, f) ->
      idx = 0
      handler = undefined
      handlers = undefined
      type = _cstr(type)[TOLOWERCASE]()
      switch type
        when UNLOAD, ONUNLOAD
          handlers = unload_handlers
        when MSG, ONMSG
          true
      if handlers?.length
        while handler = handlers[idx]
          if handler is f
            handlers.splice idx, 1
            break
          idx++
      else
      _call_raw_evt_func type, f, true
      return

    ###
    Report any internal uncaught JavaScript errors up to the publisher / host

    @name $sf.ext-_report_errs
    @static
    @function
    @private
    ###
    _report_errs = ->
      e = undefined
      errs = undefined
      try
        if err_msgs.length > 0
          errs = err_msgs[0] # todo - fix
          cmd_str = [
            "cmd="
            ERROR_COMMAND
            "&pos="
            pos_id
            "&errors="
            errs
          ]
          _send_msg _cstr(cmd_str), ERROR_COMMAND
        if err_msg_timer_id
          clearTimeout err_msg_timer_id
          err_msg_timer_id = 0
      err_msgs = [] # clear the error queue
      return

    ###
    Handle any uncaught JavaScript errors

    @name $sf.ext-_handle_err
    @static
    @function
    @private
    @param {String} a The the error message / description string
    @param {String} b The URL / file that the JavaScript error occured within
    @param {Number} c The line number that the error occured on. . .
    ###
    _handle_err = (a, b, c) ->
      e = undefined
      err_msgs.push _cstr([
        "Error occurred inside SafeFrame:\nMessage: "
        a
        "\nURL:"
        b
        "\nLine:"
        c
      ])
      try
        if err_msg_timer_id
          clearTimeout err_msg_timer_id
          err_msg_timer_id = 0
        err_msg_timer_id = setTimeout(_report_errs, DOM_WATCH_INTERVAL)
      true

    ###
    Override native window methods and properties so that we can control
    how the events that we need to manage

    @name $sf.ext-_setup_win_evt_props
    @static
    @function
    @private
    @param {Object} obj The window object / prototype
    ###
    _setup_win_evt_props = (obj) ->
      n = lang.noop
      O = Object
      nobj =
        get: n
        set: n

      ret = false
      if obj
        if ie_old_attach
          obj[IE_ATTACH] = _attach_override
          obj[IE_DETACH] = _detach_override
        if w3c_old_attach
          obj[W3C_ATTACH] = _attach_override
          obj[W3C_DETACH] = _detach_override
        if obj[DG]
          try
            obj[DG] ONLOAD, n
            obj[DS] ONLOAD, n
            obj[DG] ONUNLOAD, n
            obj[DS] ONUNLOAD, n
            obj[DG] ONMSG, n
            obj[DS] ONMSG, n
            ret = true
          catch e
            ret = false
        if not ret and O[DP]
          try
            O[DP] obj, ONLOAD, nobj
            O[DP] obj, ONUNLOAD, nobj
            O[DP] obj, ONMSG, nobg
            ret = true
          catch e
            ret = false
      ret

    ###
    Intialize / setup the safeframe, the environment according to the configuration found within the serialized
    window.name property.

    @name $sf.ext-_construction
    @param {Object} [details] An optional object to pass in status / error information into
    @static
    @private
    @function
    ###
    _construction = (details) ->
      cont = false
      ret = true
      el = undefined
      nm = undefined
      temp = undefined
      cur_time = undefined
      guid_time = undefined
      time_delta = undefined
      e = undefined
      details = (if (details and (details instanceof Object)) then details else {})

      # 1st read window.name property
      try
        nm = win.name

      # 2nd, erase property so that it cannot be abused
      try
        win.name = ""
      unless nm
        details.status = 500.101
        return cont

      # now check the following
      #		 *
      #		 * a.) This code MUST be run in the context of a child window, only 1 level down from the top
      #		 * b.) The string from window.name must deserialize into our ParamHash object properly
      #		 *  i.) a "guid", "conf", "html" set of properties must exist
      #		 *  ii.) a guid property must consist of a unique string, where a section includes a time stamp from the epoch, which much be within 5 secs of the current time
      #		 *       otherwise someone could just be trying to abuse us
      #		 *
      #		 * we cannot truly validate the guid per-se, b/c we cannot message back up to the publisher in a synchronous way, and
      #		 * we need to stay synchronous here so that the content in question is allowed to do document.write calls etc.
      #		 * but the time/format check is pretty solid
      #		 *
      #
      try
        if top is par
          render_params = ParamHash(nm, null, null, true, true)
          cur_time = lang.time()
          guid = render_params.guid
          guid_time = _cnum(guid.replace(/[^_]*_(\d+)_\d+_\d+/g, "$1"), 0)
          time_delta = cur_time - guid_time
          cont = (guid and guid_time and time_delta > 0 and time_delta < GUID_VALID_TIME)

          # Decode the publisher uri
          render_params.loc = unescape(render_params.loc)  if render_params.loc
          details.status = 500.104  unless cont
        else
          details.status = 500.102
      catch e
        render_params = guid = null
        cont = false
        details.status = 500.103
      if cont
        try
          render_conf = render_params.conf
          frame_id = win.name = render_conf.dest
          pos_id = render_conf.id
          pos_meta = render_params.meta
          host_cname = render_params.host
          geom_info = render_params.geom
          can_use_html5 = lang.cbool(render_params.html5)
          win_has_focus = lang.cbool(render_params.has_focus)
          temp = render_conf.bg
          if geom_info
            geom_info = ParamHash(_ue(geom_info), null, null, true, true)
            geom_info = null  if not geom_info.self or not geom_info.exp
          unless host_cname
            host_cname = d.referrer
            host_cname = host_cname.substring(0, host_cname.indexOf("/", 9))
          if temp
            _create_stylesheet _cstr([
              "#sf_body { background-color: "
              temp
              "; }"
            ]), "sf_bg_css"
          temp = render_conf.tgt
          render_conf.tgt = "_top"  if temp is "_self"
          render_conf.tgt = "_top"  unless temp
          unless temp is "_top"
            while _purge(_tags("base")[0])
              true
          el = dom.make("base")
          _attr el, "target", temp
          _append _tags("head")[0], el
          if isIE
            ie_old_attach = win[IE_ATTACH]
            ie_old_detach = win[IE_DETACH]
          w3c_old_attach = win[W3C_ATTACH]
          w3c_old_detach = win[W3C_DETACH]

          #
          #				 * Here we setup unload handlers of our own to make sure
          #				 * unload / before unload events are fired in order, and that
          #				 * we clean up all our own intenral stuff
          #				 * Also since we are in an iframe, we don't want navigation
          #				 * to ever occur within this frame, so we also write / replace
          #				 * the document on unload as a precaution against some one tryint
          #				 * to navigate us
          #				 *
          #
          _attach win, UNLOAD, _handle_unload
          _attach win, LOAD, _handle_load
          _attach win, MSG, _handle_msg
          _setup_win_evt_props win
          _setup_win_evt_props win.__proto__
          _setup_win_evt_props win.Window and win.Window::
        catch e
          details.status = 500.105
          render_params = render_conf = guid = null
          ret = false
      else
        render_params = guid = null
        ret = false
      ret
    _wrapiFrame = (html,cbName)->
      """
        <iframe style="width:100%;height:100%;" allowtransparency="true"
        scrolling="no" marginwidth="0" marginheight="0" frameborder="0" onload='#{cbName}()'>
        <html><head><base target="_top"></head><body style="margin: 0; padding: 0">
        <script>
          $ad = window.parent.$ad
          $sf = window.parent.$sf
        </script>
          #{html}
        </html>
        </iframe>
      """


    originalWrite = document.write
    ###
    Render the HTML and CSS content passed in through the window.name message via a document.write

    @name $sf.ext-_render
    @function
    @static
    @private
    ###
    _render =(callback=->) ->

      # The internal method that does the document.write of ad content
      cbName = lib.lang.guid("load_cb")
      otherCallbackApplied = false
      window[cbName] = (fromFrame)->
        (sf.lib.lang.wrap callback,()->
          if fromFrame || !otherCallbackApplied
            callback.apply(sf,arguments)
#            _reattach_messaging() #dealing with a bug I couldn't find in this
            #hack to deal with safeframes lack of a message queue
            #todo create safeframe msg queue
            if pending_msg
              setTimeout =>
                _handle_load()
                loaded()
              ,300
            else
              _handle_load()
              loaded()

            document.write = originalWrite
            delete window[cbName])()
      document.write = (str)->
        unless hasLoaded or otherCallbackApplied
          domElem = document.createElement("div")
          domElem.innerHTML = "_"+str #add something visible at the beginning to deal with ie<9 bug
          for iframe in domElem.getElementsByTagName("iframe")
            if _cnum(_attr(iframe,"width"),0)>1
              otherCallbackApplied = true
              if oldOnload = _attr(iframe,"onload")
                _attr(iframe,"onload","#{cbName}(true);#{oldOnload};")
              else
                _attr(iframe,"onload","#{cbName}(true);")
              break
          str = domElem.innerHTML.substring(1) if otherCallbackApplied
        originalWrite.call(this,str)
      html = undefined
      css = undefined
      isAdShown = true
      css = _cstr(render_conf and render_conf.css)
      html = _cstr(render_params and render_params.html)
      if css
        css = _ue(css)
        _create_stylesheet css, "sf_custom_css"
      if html
        html = _ue(html)
        try
          _reattach_messaging()
          _requested()
          document.write html + "<scr"+"ipt> #{cbName}() ;</scr"+"ipt>"
          _check_orphaned()
          _reset_inline_handlers()
        catch e
          _handle_err "Error while rendering content: " + e[MSG]
      return

    #
    #	 * --END-Internal HTML Document handling
    #	 *
    #

    #
    #	 * --BEGIN-External Vendor/Client API
    #	 *
    #

    ###
    Call into the fallback x-msging library client if possible when no HTML5 style messaging
    exists

    @name $sf.ext-_call_client_fb
    @function
    @private
    @static
    @param {String} methName The name of the message in the library to call
    @param {*} [arg1] An arbitrary argument to hand into the library
    @param {*} [arg2] An arbitrary argument to hand into the library
    ###
    _call_client_fb = (methName, arg1, arg2) ->
      msg_clientfb = dom.msgclient_fb  if msgclient_fb
      methName and msgclient_fb and msgclient_fb[methName] and msgclient_fb[methName](arg1, arg2)

    ###
    Process a validated message to notify the contents of the SafeFrame of state updates

    @name $sf.ext-_receive_msg
    @function
    @private
    @static
    @param {$sf.lib.lang.ParamHash} params The message parameter hash object containing information about what has occured
    @param {HTMLEvent} [evt] The raw DOM event from the x-domain message
    @return {Boolean} Whether or not the message received could be handled
    ###
    _receive_msg = (params, evt) ->
      ret = false
      msg = undefined
      cmd = undefined
      g = undefined
      e = undefined
      data = {}
      if params
        g = params.geom or ""
        cmd = params.cmd
        geom_info = ParamHash(_ue(g), null, null, true, true)  if g
      data.cmd = cmd
      data.value = data.info = params and params.value
      data.reason = params and params.reason

      #OK firefox is doing really weird stuff with switch statements and I can't seem to figure
      #it out so i'm switching to if / else
      if cmd is NOTIFY_COLLAPSED

        #collapse happened from outside, rather thant by virture of API
        #close the channel now. . .
        ret = true
        if is_expanded
          pending_msg = null
          is_expanded = false
          force_collapse = true
          _collapse()
          force_collapse = false
          _fire_sandbox_callback NOTIFY_COLLAPSED
      else if cmd is NOTIFY_COLLAPSE

        #Y.SandBox.vendor.collapse was called, notify
        ret = true
        if is_expanded
          pending_msg = null
          is_expanded = false
          _fire_sandbox_callback NOTIFY_COLLAPSED
      else if cmd is NOTIFY_EXPAND
        ret = true
        if pending_msg
          pending_msg = null
          is_expanded = true
          _fire_sandbox_callback NOTIFY_EXPAND + "ed"
      else if cmd is NOTIFY_GEOM_UPDATE
        _fire_sandbox_callback NOTIFY_GEOM_UPDATE
      else if cmd is NOTIFY_FOCUS_CHANGE
        data.info = data.value = lang.cbool(data.value)
        win_has_focus = data.value
        _fire_sandbox_callback NOTIFY_FOCUS_CHANGE, data
      else if cmd is NOTIFY_READ_COOKIE
        ret = true
        if pending_msg
          pending_msg = null
          data = params and params.value
          _fire_sandbox_callback NOTIFY_READ_COOKIE, data
      else if [NOTIFY_WRITE_COOKIE,NOTIFY_FAILURE,
               NOTIFY_CLICKED,NOTIFY_VIEWED,NOTIFY_UNVIEWED,NOTIFY_LOADED,NOTIFY_REQUESTED,NOTIFY_RELOAD].indexOf(cmd) > -1
        ret = true
        pending_msg = null if pending_msg
        _fire_sandbox_callback cmd, data
      else
        ret = true
        pending_msg = null if pending_msg
        _fire_sandbox_callback cmd, data

      params = null
      ret



    cmdRetries = {}
    ###
    Send a command message up to the SafeFrames publisher / host code

    @name $sf.ext-_send_msg
    @private
    @function
    @static
    @param {String} str An encoded string (query-string/$sf.lib.lang.ParamHash format) that contains the command message to send
    @param {String} cmd The command to be sent itself (note that this string should also be present in the 1st argument)
    ###
    _send_msg = (str, cmd) ->
      id = lang.guid("sf_pnd_cmd")
      frame_id = render_params.dest
      sent = false
      sent_time = lang.time()
      params = undefined
      if not str or not cmd or pending_msg
        #        cmdRetries[cmd] or=0
        #        if pending_msg && cmdRetries[cmd] <3
        #          cmdRetries[cmd]++
        #          setTimeout((->_send_msg(str,cmd)),5)
        return
        #      else
        #        delete cmdRetries[cmd]
      params = ParamHash(
        msg: str
        id: frame_id
        guid: guid
        cmd: cmd
      )
      pending_msg =
        id: id
        sent: sent_time
        cmd: cmd

      setTimeout (->
        if pending_msg and pending_msg.id is id
          if cmd is EXPAND_COMMAND or cmd is "exp-push"
            force_collapse = true
            _collapse()
            force_collapse = false
          _fire_sandbox_callback NOTIFY_FAILURE + ":" + cmd + ":timeout"
        id = sent = sent_time = cmd = str = pending_msg = params = null
        return
      ), MAX_MSG_WAIT_TIME
      if can_use_html5
        try
          top.postMessage params.toString(), ((if (host_cname is "file" or host_cname is "") then "*" else host_cname))
          sent = true
        catch e
          sent = false
      _call_client_fb "send", params  unless sent
      return

    ###
    Fire a notification off to the SafeFrame contents if a callback function was specified

    @name $sf.ext-_fire_sandbox_callback
    @private
    @function
    @static
    @param {String} msg The status update / message to send
    @param {Object} data The data from the response
    ###
    _fire_sandbox_callback = (msg, data) ->
      e = undefined
      try
        sandbox_cb? msg, data
      return

    ###
    Set the alignment of our internal DIV whenever expansion occurs uni-directionaly

    @name $sf.ext-_set_alignment
    @private
    @function
    @static
    @param {Boolean} xn Whether or not horizontal axis is growing to the left or right (xn == true == left)
    @param {Boolean} yn Whether or not vertical axis is growing to the top or bottom (yn == true == top)
    ###
    _set_alignment = (xn, yn) ->
      fcDiv = _elt("sf_align")
      fcDivStyle = fcDiv.style
      xTxt = undefined
      yTxt = undefined
      preTxt = "position:absolute;"

      #
      #		 * Previously we had a CSS style sheet with a rule that said "#fcDiv {position:absolute;left:0px;top:0px}"
      #		 * This caused an issue where although we are setting the alignment properly, it doesn't seem
      #		 * to work / take effect in all cases (this was true in ALL browsers btw, which is odd).
      #		 *
      #		 * Now in our HTML template, we removed the CSS rule, and simply added the style inline.
      #		 * Then here we change it to exactly what we want, which seems to resolve the problem
      #		 *
      #		 * However, I think the flaky-ness is more due to the fact that we are using "right/bottom"
      #		 * CSS positioning rather than, just left / top
      #		 *
      #		 * We could also just change it to have left == _initWidth when xn is true
      #		 * And/Or top == _initHeight when yn is true
      #		 *
      #		 * But for now we will just set the x/y to what we want exactly and remove the other items
      #		 *
      #		 *
      #
      if xn
        xTxt = "right:0px;"
      else
        xTxt = "left:0px;"
      if yn
        yTxt = "bottom:0px;"
      else
        yTxt = "top:0px;"
      fcDivStyle.cssText = (preTxt + xTxt + yTxt)
      fcDiv = fcDivStyle = null
      return

    ###
    Internal function for collapsing the SafeFrame, which checks that there is
    not some other pending state which may get in the way

    @name $sf.ext._collapse
    @private
    @function
    @static
    ###
    _collapse = ->
      return false  if not force_collapse and (not is_registered or not is_expanded or pending_msg)
      _set_alignment 0, 0
      true
    #hack to deal with bug...
    _reattach_messaging = ->
      if ie_old_attach
        ie_old_detach ONMSG,_handle_msg
        ie_old_attach ONMSG,_handle_msg
      else if w3c_old_attach
        w3c_old_detach MSG,_handle_msg
        w3c_old_attach MSG,_handle_msg


    ###
    Intialize the SafeFrame external vendor/client API, so that other features may be used
    This method MUST be called prior to using any other rich-media functionality (like expansion).

    @name $sf.ext.register
    @public
    @function
    @static
    @param {Number} initWidth The initial width (in pixels) expected of the content within the SafeFrame container
    @param {Number} initHeight The initial height (in pixels) expected of the content within the SafeFrame container
    @param {Function} [notify] A callback function that content can specify to be notified of status updates
    ###
    register = (initWidth, initHeight, notify) ->
      return  if is_registered  or not guid
      initWidth = _cnum(initWidth, 0, 0)
      initHeight = _cnum(initHeight, 0, 0)
      init_width = initWidth
      init_height = initHeight
      is_registered = true
      if lang.callable(notify)
        sandbox_cb = notify
      else
        sandbox_cb = null
      return

    ###
    Make a request to expand the SafeFrame container to a certain size. Note that you may only call $sf.ext.expand
    to expand to the largest size needed, followed by calling collapse (and then repeat the same process if needed).
    Tweening or animation done, should be reserved for your own content, and you cannot make multiple calls to expand
    without a corresponding collapse.

    Note that when setting t, l, b, and r offset values, expansion will not cause the content inside the SafeFrame
    to hold it's current alignment, whereas using dx/dy or only setting partial offfsets (e.g {t:100,l:100} ==  dx:-100,dy:-100) will cause expansion to
    hold it's current alignment.

    @name $sf.ext.expand
    @public
    @static
    @function
    @param {Number|Object} deltaXorDesc If a number is specifed, SafeFrame will grow in size by this amount in pixels along the horizontal axis. Specifiy a negative value to grow to the left, and a postive value to grow to the right. <br />
    If an object is specified, it should contain "t","l","r","b" properties (top,left,bottom,right) for the amount in pixels to grow the container in each dimension
    @param {Number} deltaXorDesc.t Specifies to shift the top position of the SafeFrame container by the number of pixels specified, relative to original location (negative values not allowed).
    @param {Number} deltaXorDesc.l Specifies to shift the left position of the SafeFrame container by the number of pixels specified, relative to original location (negative values not allowed).
    @param {Number} deltaXorDesc.b Specifies to shift the bottom position of the SafeFrame container by the number of pixels specified, relative to the original location (negative values not allowed).
    @param {Number} deltaXorDesc.r Specifies to shift the left position of the SafeFrame container by the number of pixels specified, relative to the original location (negative values not allowed).
    @param {Boolean}deltaXorDesc.push  When expanding, push other page content rather than doing an overlay.  Note that setting this value to true will only work if the publisher / host explicitly allows push expansion
    Check $sf.ext.supports("exp-push"), ahead of time to verify

    @param {Number} deltaY If a number is specifed, SafeFrame will grow in size by this amount in pixels along the vertical axis. Specifiy a negative value to grow to the top, and a postive value to grow to the bottom. <br />
    Note that this value is ignored if deltaXorDesc is passed in as an object.

    @param {Boolean} push When expanding, push other page content rather than doing an overlay.  Note that setting this value to true will only work if the publisher / host explicitly allows push expansion
    Check $sf.ext.supports("exp-push"), ahead of time to verify


    @return {Boolean} true/false if the request to expand the container was sent. This does not mean that expansion is complete as expansion is an asynchronous process. Pass in a callback function to $sf.ext.register to get status updates.
    ###

    #
    #     * TODO, only supprting deltaX/Y as numbers right now. . .need to enable object mode
    #     *
    #
    expand = (deltaXorDesc, deltaY, p) ->
      xn = false
      yn = false
      doAlign = false
      cmd_nm = (if (p) then "exp-push" else EXPAND_COMMAND)
      cmd_str = [
        "cmd="
        cmd_nm
        "&pos="
        pos_id
      ]
      dx = 0
      dy = 0
      r = undefined
      b = undefined
      t = undefined
      l = undefined
      align_el = undefined
      align_el_st = undefined
      align_buffer = undefined
      return  if not is_registered or pending_msg
      return  if p and not supports("exp-push")
      if deltaXorDesc and typeof deltaXorDesc is OBJ
        r = _cnum(deltaXorDesc.r, 0, 0)
        b = _cnum(deltaXorDesc.b, 0, 0)
        t = _cnum(deltaXorDesc.t, 0, 0)
        l = _cnum(deltaXorDesc.l, 0, 0)
        if deltaXorDesc.push
          return  unless supports("exp-push")
          cmd_nm = "exp-push"
          cmd_str[1] = cmd_nm
        if not r and l
          xn = true
          dx = -1 * l
        dx = r  if r and not l
        if not b and t
          yn = true
          dy = -1 * t
        dy = b  if b and not t
        if (t and b) or (l and r)
          doAlign = false
        else
          doAlign = true
        if doAlign
          _set_alignment xn, yn
          cmd_str.push "&dx=", dx, "&dy=", dy
          _send_msg _cstr(cmd_str), cmd_nm
        else

          #
          #				 * We may want to remove this. . . its my attempt
          #				 * at setting the alignment in a omni-directional expansion
          #				 * case
          #				 *
          #
          align_el = _elt("sf_align")
          align_el_st = (align_el and align_el.style)
          align_buffer = ["position:absolute;"]
          if t and b
            align_buffer.push "top:", t, "px;"
          else if t
            align_buffer.push "bottom:0px;"
          else align_buffer.push "top:0px;"  if b
          if l and r
            align_buffer.push "left:", l, "px;"
          else if l
            align_buffer.push "right:0px;"
          else align_buffer.push "left:0px;"  if b
          align_el_st.cssText = _cstr(align_buffer)  if align_el_st
          cmd_str.push "&exp_obj=", escape(ParamHash(deltaXorDesc))
          _send_msg _cstr(cmd_str), cmd_nm
      else
        deltaXorDesc = _cnum(deltaXorDesc, 0)
        deltaY = _cnum(deltaY, 0)
        return  if deltaXorDesc <= 0 and deltaY <= 0
        xn = (deltaXorDesc <= 0)
        yn = (deltaY <= 0)
        _set_alignment xn, yn
        cmd_str.push "&dx=", deltaXorDesc, "&dy=", deltaY
        _send_msg _cstr(cmd_str), cmd_nm
      true

    ###
    Collapse the SafeFrame container after having called to expand. If no previous call to expand has been made, this call will do nothing.

    @name $sf.ext.collapse
    @public
    @static
    @function
    ###
    collapse = ->
      if _collapse()
        _send_msg _cstr([
          "cmd="
          COLLAPSE_COMMAND
          "&pos="
          pos_id
        ]), COLLAPSE_COMMAND
      return
    click = ->
      _send_cmd NOTIFY_CLICKED
    viewed = ->
      _send_cmd NOTIFY_VIEWED
    loaded =->
      _send_cmd NOTIFY_LOADED
    unviewed =->
      _send_cmd NOTIFY_UNVIEWED
    reload = ->
      _send_cmd NOTIFY_RELOAD
    _requested =->
      _fire_sandbox_callback NOTIFY_REQUESTED
      _send_cmd NOTIFY_REQUESTED



    _send_cmd =(cmd)->
      _send_msg _cstr([
        "cmd="
        cmd
        "&pos="
        pos_id
      ]),cmd

    ###
    Return geometric information about the SafeFrame container and it's status within a page

    @name $sf.ext.geom
    @public
    @static
    @function
    @return {Object} geom_info
    ###
    geom = ->
      geom_info

    ###
    Return meta-data information that may have been specified by the publisher / host.

    @name $sf.ext.meta
    @public
    @static
    @function
    @param {String} propName the key name of the meta-data value to be retrieved
    @param {String} [owner_key] the super key name of the data to be retrieved
    @return {String} The value of some meta-data that may have been specified by the publisher / host or "".
    ###
    meta = (propName, owner_key) ->
      ret = ""
      shared = undefined
      if pos_meta
        if owner_key
          if owner_key of pos_meta
            ret = _cstr(pos_meta[owner_key][propName])
          else ret = _cstr(pos_meta.non_shared[owner_key][propName])  if pos_meta.non_shared and owner_key of pos_meta.non_shared
        else
          shared = pos_meta.shared
          ret = _cstr(shared[propName])  if shared and typeof shared is OBJ
      ret
    deleteMeta = (propName,owner_key)->
      shared = undefined
      if pos_meta
        if owner_key
          if owner_key of pos_meta
            delete pos_meta[owner_key][propName]
          else delete pos_meta.non_shared[owner_key][propName]  if pos_meta.non_shared and owner_key of pos_meta.non_shared
        else
          shared = pos_meta.shared
          delete shared[propName]  if shared and typeof shared is OBJ


    ###
    Return the current status of the SafeFrame container, in cases where
    a command may be pending. If an empty string is returned ("") container is idle.

    @name $sf.ext.status
    @public
    @static
    @function
    @return {String} of any pending status, otherwise empty string.
    ###
    status = ->
      if pending_msg
        if pending_msg.cmd is EXPAND_COMMAND
          return STATUS_EXPANDING
        else return STATUS  if pending_msg.cmd is COLLAPSE_COMMAND
      if is_expanded
        STATUS_EXPANDED
      else
        STATUS_COLLAPSED

    ###
    Requests the host read or write a cookie to the host domain.
    The host domain must grant permission for the cookie to be written.

    @name $sf.ext.cookie
    @public
    @static
    @function
    @param {String} [cookieName] The name of the cookie to set or read
    @param {Object} [cookieData] An object hash containing the value and an optional expires
    @return {Number}
    ###
    cookie = (cookieName, cookieData) ->
      isRead = (not (cookieData?))
      cmd_nm = (if isRead then "read-cookie" else "write-cookie")
      cmd_str = [
        "cmd="
        cmd_nm
        "&pos="
        pos_id
        "&cookie="
        cookieName
      ]
      unless isRead
        cmd_str.push "&value="
        cmd_str.push cookieData.value
      _send_msg _cstr(cmd_str), cmd_nm
      return

    ###
    Send a message to the host

    @name $sf.ext.message
    @public
    @static
    @function
    ###
    message = (content) ->
      _send_msg _cstr([
        "cmd="
        "msg"
        "&pos="
        pos_id
        "&msg="
        content
      ]), "msg"
      return

    ###
    Return the percentage that the SafeFrame container is viewable within the browser window

    @name $sf.ext.inViewPercentage
    @public
    @static
    @function
    @return {Number}
    ###
    inViewPercentage = ->
      iv = _cnum(geom_info and geom_info.self and geom_info.self.iv, -1, 0)
      tv = undefined
      tv = Math.floor(iv * 100)  if iv >= 0
      tv
    winHasFocus = ->
      win_has_focus

    ###
    Return whether or not a particular feature is supported, or an object containing
    key/value pairs denoting all features and whether or not they are supported

    By default SafeFrames version 1 supports the following feature:

    "exp-ovr": Expansion of the container by overlaying on top of other content

    Later in other versions there are expexted to be more feature with their own
    string name, that can be checked by the content in the SafeFrame, so that
    it knows what things can be done.

    @name $sf.ext.supports
    @public
    @static
    @function
    @param {String} [key] If specifed, checks to see if that specific feature has been enabled
    @return {Boolean|Object}
    ###
    supports = (key) ->
      conf = render_params.conf
      sup = (conf and conf.supports) or false
      if sup
        key = _cstr(key)
        if key
          sup = sup[key] or false
          sup = false  if sup is "0"
        else
          sup = lang.mix({}, sup)
      sup
    # for our version that integrates with advertiser.ad.js
    render = (showAd,cb)->
      err_info = {}
      if _construction(err_info)
        if showAd
          _render(cb)

    showAd = (cb)->
      unless isAdShown
        _render(cb)
    adShown = ()->
      isAdShown



    #
    #	 * --END-External Vendor/Client API
    #	 *
    #
    lang.mix sf.ext,
      register: register
      expand: expand
      collapse: collapse
      geom: geom
      meta: meta
      deleteMeta: deleteMeta
      status: status
      supports: supports
      cookie: cookie
      message: message
      inViewPercentage: inViewPercentage
      winHasFocus: winHasFocus
      click: click
      viewed: viewed
      unviewed: unviewed
      showAd: showAd
      adShown: adShown
      reload: reload


    if !isExternal
      window.$sf = sf
      render()
    else
      window.$sf = sf
      sf.ext.render = render
    return sf