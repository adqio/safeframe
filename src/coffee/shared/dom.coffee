define ["./lang","./env"],(lang,env)->
  _lang = lang
  _env = env
  win = if window? then window else this
  IFRAME					= "iframe"
  GC						= "CollectGarbage"
  ie_attach				= "attachEvent"
  w3c_attach				= "addEventListener"
  ie_detach				= "detachEvent"
  w3c_detach				= "removeEventListener"
  use_attach				= ""
  use_detach				= ""
  use_ie_old_attach		= false
  IE_GC_INTERVAL			= 3000
  EVT_CNCL_METHODS		=
  {
    "preventDefault": 				0,
    "stopImmediatePropagation":		0,
    "stopPropagation":				0,
    "preventBubble":				0
  }
  isIE						= env.isIE
  useOldStyleAttrMethods		= false
  gc_timer_id					= 0
  dom_is_ready				= null
  dom_last_known_tag_count	= 0
  dom_last_known_child_node	= null
  dom_ready_chk_max_tries		= 300
  dom_ready_chk_try_interval	= 50
  dom_ready_chk_tries			= 0
  dom_ready_chk_timer_id		= 0
  iframe_next_id				= 0
  iframe_cbs_attached			= {}
  evt_tgt_prop_a				= ""
  evt_tgt_prop_b				= ""
  iframe_msg_host_lib			= null
  theDocument						= win.document
  BLANK_URL				= "about:blank"
  _cstr = lang.cstr
  _callable = lang.callable




  ###
  Clear out the timer function used as a fallback when ready state of the DOM
  cannot be directly detected

  @name $sf.lib.dom-_clear_ready_timer_check
  @private
  @static
  @function
  ###
  _clear_ready_timer_check = ->
    if dom_ready_chk_timer_id
      clearTimeout dom_ready_chk_timer_id
      dom_ready_chk_timer_id = 0
    return
  _handle_dom_load_evt = (evt) ->
    detach win, "load", _handle_dom_load_evt
    detach win, "DOMContentLoaded", _handle_dom_load_evt
    dom_is_ready = true
    return

  ###
  Checks to see if the DOM is ready to be manipulated, without the need for event hooking.
  Often times you'll see folks use the onload event or DOMContentLoaded event.  However
  the problem with those, is that your JavaScript code may have been loaded asynchronously,
  after either one of those events have fired, and in which case you still don't know if the DOM is really
  ready.  Most modern browsers (including IE), implement a document.readyState property that we can
  check, but not all.  In the case where this property is not implemented, we do a series of node
  checks and tag counts via timers.  Of course this means that on the very 1st call, we will always
  appear to be not ready eventhough the DOM itself may be in a ready state, but our timeout interval
  is small enough that this is OK.

  @name $sf.lib.dom-_ready_state_check
  @private
  @static
  @function
  ###
  _ready_state_check = ->
    _clear_ready_timer_check()
    if dom_ready_chk_tries >= dom_ready_chk_max_tries
      dom_last_known_child_node = null
      dom_is_ready = true
    if dom_is_ready is null
      try
        b = (theDocument and theDocument.body)
        kids = (b and tags("*", b))
        tag_cnt = (kids and kids[LEN])
        lst = (b and b.lastChild)
      catch e
        dom_last_known_tag_count = 0
        dom_last_known_child_node = null
      if dom_last_known_tag_count and tag_cnt is dom_last_known_tag_count and lst is dom_last_known_child_node
        dom_last_known_child_node = null
        dom_is_ready = true
      else
        dom_last_known_tag_count = tag_cnt
        dom_last_known_child_node = lst
        dom_ready_chk_tries += 1
        dom_ready_chk_timer_id = setTimeout(_ready_state_check, dom_ready_chk_try_interval)
    else
      dom_last_known_child_node = null
    return

  ###
  Detach onload handlers on iframes that we have created

  @name $sf.lib.dom.iframes-_unbind_iframe_onload
  @private
  @static
  @function
  @param {HTMLElement} el the iframe element to unbind from
  ###
  _unbind_iframe_onload = (el) ->
    id = attr(el, "id")
    oldCB = undefined
    oldCB = (id and iframe_cbs_attached[id])
    if oldCB
      detach el, "load", oldCB
      iframe_cbs_attached[id] = null
      delete iframe_cbs_attached[id]
    return

  ###
  A default onload event handler for IFrames. We don't
  want to attach to onload events for IFrames via attributes
  b/c we don't want others to see what handlers are there.
  In turn we also make sure the "this" reference for the outside
  handle gets set properly, and it allows us to make sure
  that unbinding of the event handler also gets handled always
  so as not to create memory leak issues.

  @name $sf.lib.dom.iframes-_bind_iframe_onload
  @private
  @static
  @function
  @param {HTMLElement} el the iframe element to bind too
  @param {Function} cb The onload handler from the outside
  ###
  _bind_iframe_onload = (el, cb) ->
    newCB = undefined
    id = undefined
    if _callable(cb)

      ###
      @ignore
      ###
      newCB = (evt) ->
        tgt = evtTgt(evt)
        e = undefined
        _unbind_iframe_onload tgt
        if tgt and cb
          try
            cb.call tgt, evt
        tgt = el = cb = newCB = id = null
        return

      id = attr(el, "id")
      _unbind_iframe_onload el
      iframe_cbs_attached[id] = newCB  if id
      attach el, "load", newCB
    newCB = null
    return

  ###
  Return the element reference passed in, and if its a string value passed
  in use that to lookup the element by id attribute.

  @name $sf.lib.dom-_byID
  @private
  @static
  @function
  @param {HTMLElement|String} el  the element id / element reference
  @return {HTMLElement|el}
  ###
  _byID = (el) ->
    (if (el and typeof el is "string") then elt(el) or el else el)

  ###
  A proxy wrapper for calling into the cross-domain messaging host library

  @name $sf.lib.dom.iframes-_call_xmsg_host
  @private
  @static
  @function
  @param {String} methName The method name in the msg host library to call
  @param {*} arg1 An arbitrary argument to pass to said method as the 1st arg
  @param {*} arg2 An arbitrary argument to pass to said method as the 2nd arg
  @param {*} arg3 An arbitrary argument to pass to said method as the 3rd arg
  @return {*} whatever comes back from the method
  ###
  _call_xmsg_host = (methName, arg1, arg2, arg3) ->
    e = undefined
    try
      iframe_msg_host_lib = dom.msghost  unless iframe_msg_host_lib
    catch e
      iframe_msg_host_lib = null
    return  unless win is top
    methName and iframe_msg_host_lib and iframe_msg_host_lib[methName] and iframe_msg_host_lib[methName](arg1, arg2, arg3)

  ###
  Retrieve a document for a given HTML Element

  @memberOf $sf.lib.dom
  @exports doc as $sf.lib.dom.doc
  @static
  @public
  @function
  @param {HTMLElement} el the HTML element for which you wish to find it's parent document
  @return {Document|null} null if nothing found
  ###
  doc = (el) ->
    d = null
    try
      if el
        if el.nodeType is 9
          d = el
        else
          d = el.document or el.ownerDocument or null
    catch e
      d = null
    d

  ###
  Retrieve the host window object for a given HTML Element/document. Note that this is NOT the same as $sf.lib.dom.iframes.view, which
  returns the window reference INSIDE the IFRAME element.

  @memberOf $sf.lib.dom
  @exports view as $sf.lib.dom.view
  @public
  @static
  @function
  @param {HTMLElement|HTMLDocument} el the HTML element/document for which you wish to find it's parent window
  @return {Document|null} null if nothing found
  ###
  view = (el) ->
    w = null
    d = undefined
    prop1 = "parentWindow"
    prop2 = "defaultView"
    try
      if el
        w = el[prop1] or el[prop2] or null
        unless w
          d = doc(el)
          w = (d and (d[prop1] or d[prop2])) or null
    catch e
      w = null
    w

  ###
  Retrieve an element by its ID. . basically a short hand wrapper around document.getElementById.

  @memberOf $sf.lib.dom
  @exports elt as $sf.lib.dom.elt
  @public
  @static
  @function
  @param {String} id (Required) the id of the HTML element to find
  @param {HTMLElement|HTMLWindow|HTMLDocument} [par] The parent element,document,window to look for the given element
  @return {HTMLElement|null} null if nothing found
  ###
  elt = (id) ->
    args = arguments
    len = args.length
    dc = undefined
    if len > 1
      dc = doc(args[1])
    else
      dc = theDocument
    (dc and dc.getElementById(id)) or null

  ###
  A wrapper around retrieving the tagName of an HTML element (normalizes values to lower case strings).

  @memberOf $sf.lib.dom
  @exports tagName as $sf.lib.dom.tagName
  @static
  @public
  @function
  @param {HTMLElement} el The HTML element for which to get the tag name.
  @return {String} The tag name in all lower case of an HTML element, if it cannot be successfully retrieved, alwasys returns an empty string (which will evaluate to false).
  ###
  tagName = (el) ->
    (el and el.nodeType is 1 and el.tagName.toLowerCase()) or ""

  ###
  A wrapper around retrieving a list of tags by name.

  @memberOf $sf.lib.dom
  @exports tags as $sf.lib.dom.tags
  @static
  @public
  @function
  @param {String} name The name of the tags that you wish to look for, note that you can pass in "*" to find all.
  @param {HTMLElement|Document} [parNode] the parent node that you wish to look in
  @return {HTMLElementCollection} List of tags found. Note that is NOT a real JavaScript Array
  ###
  tags = (name, parNode) ->
    ret = []
    e = undefined
    try
      if parNode and parNode.getElementsByTagName
        ret = parNode.getElementsByTagName(name) or ret
      else
        ret = theDocument.getElementsByTagName(name) or ret
    catch e
      ret = []
    ret

  ###
  Retrive the parent element of an HTML element

  @memberOf $sf.lib.dom
  @exports par as $sf.lib.dom.par
  @public
  @static
  @function
  @param {HTMLElement} el the HTML element to check
  return {HTMLElement} the new reference to the parent element or null
  ###
  par = (el) ->
    el and (el.parentNode or el.parentElement)

  ###
  Retrieve/Set/Delete an element's attribute. Note that this handle's
  slight differences in the way HTML attributes are handled across browsers
  as well as being shorthand

  @memberOf $sf.lib.dom
  @exports attr as $sf.lib.dom.attr
  @static
  @public
  @function
  @param {HTMLElement} el the HTML element to manipulate
  @param {String} attrName the attribute to set/get
  @param {String} [attrVal], if specified will set the value of the attribute for this element.  Passing null will remove the attribute completely
  @return {String} the value of the attribute normalized to a string (may be empty)
  ###

  #
  #		 * Note that we probably could have 2 differnet functions here instead of forking internally
  #		 * but the functions are essentially the same, and it just creates a lot of dead code
  #		 *
  #
  attr = (el, attrName, attrVal) ->
    e = undefined
    try
      if arguments.length > 2
        if attrVal is null
          if useOldStyleAttrMethods
            el.removeAttribute attrName, 0
          else
            el.removeAttribute attrName
        else
          attrVal = _cstr(attrVal)
          if attrName.toLowerCase() is "class"
            el.className = attrVal
          else
            if useOldStyleAttrMethods
              el.setAttribute attrName, attrVal, 0
            else
              el.setAttribute attrName, attrVal
      else
        if useOldStyleAttrMethods
          attrVal = _cstr(el.getAttribute(attrName, 0))
        else
          attrVal = _cstr(el.getAttribute(attrName))
    catch e
      attrVal = ""
    attrVal

  ###
  Set/Get the CSS text of an HTML element

  @memberOf $sf.lib.dom
  @exports css as $sf.lib.dom.css
  @public
  @static
  @function
  @param {HTMLElement} el the HTML element to manipulate
  @param {String} [val] the CSS string to set if specified (e.g. "background-color:transparent;position:absolute;top:0px;left:0px").
  @return {String} the value of the attribute normalized to a string (may be empty)
  ###
  css = (el, val) ->
    st = undefined
    try
      st = el.style
      if arguments.length > 1
        st.cssText = _cstr(val)
      else
        val = st.cssText
    catch e
      val = ""
    val

  ###
  Make a new element

  @name $sf.lib.dom.make
  @exports make_element as $sf.lib.dom.make
  @static
  @public
  @function
  @param {String} tagName
  @param {Document|HTMLElement|Window} [parent] element, document, or window to make the tag in, optional.
  @return {HTMLElement}
  ###
  make_element = (tagName, par) ->
    ((arguments.length > 1 and doc(par)) or theDocument).createElement tagName

  ###
  Append and HTMLElement to another HTMLElement

  @memberOf $sf.lib.dom
  @exports append as $sf.lib.dom.append
  @public
  @static
  @function
  @param {HTMLElement} parNode the HTML element to manipulate
  @param {HTMLElement} child (Required) the new HTML element to add to the parent
  return {HTMLElement|Boolean} the new reference to the child element that was appended, or false if failure
  ###
  append = (parNode, child) ->
    success = false
    e = undefined
    try
      success = parNode.appendChild(child)  if parNode
    catch e
      success = false
    success

  ###
  A wrapper method for removing elements from a document rather than calling parentNode.removeChild raw.
  Has special processing to ensure that contents of IFRAME tags gets released from memory as well

  @memberOf $sf.lib.dom
  @exports purge as $sf.lib.dom.purge
  @static
  @public
  @function
  @param {HTMLElement} node The HTML element to be removed from the dom
  @return {Boolean} Whether or not the element was successfully removed
  ###
  purge = (node) ->
    success = false
    parNode = undefined
    isIFrame = (tagName(node) is IFRAME)
    e = undefined
    if isIFrame

      #
      #				 * If it's an iframe we want to make sure to call into
      #				 * our other internal libraries and unbind anything that
      #				 * we might have attached.
      #
      _call_xmsg_host "detach", node
      _unbind_iframe_onload node

      #
      #				 * We also want to unload / nuke the contents
      #				 * but with IE unfornately we cannot set the "src"
      #				 * attribute b/c that will lead to the annoying click / navigation sound
      #				 *
      #
      attr node, "src", BLANK_URL  unless isIE
    try
      parNode = par(node)
      if parNode
        parNode.removeChild node
        success = true

        #
        #					 * Since we can't set the "src" attribute for IE,
        #					 * we just call into the garbage collector
        #					 *
        #
        gc()  if isIE and isIFrame
    node = parNode = null
    success

  ###
  Attach an event handler to an HTMLElement.  Note normalize event names to lower case / w3c standards.
  See example.

  @memberOf $sf.lib.dom
  @exports attach as $sf.lib.dom.attach
  @public
  @static
  @function
  @param {HTMLElement} el the HTML element to attach an event handler too
  @param {String} name the name of the event to listen too
  @param {Function} cb the function used to handle the particular event

  @example
  var el = $sf.lib.dom.elt("my_element");
  function handle_click(evt)
  {
  alert('i was clicked');
  }

  $sf.lib.dom.attach(el,"click",handle_click);
  ###

  #
  #		 * It seems a shame to have to fork at run time, but again, it would add a fair amount
  #		 * of function body weight just to change one line of code.
  #		 *
  #
  attach = (obj, name, cb) ->
    try
      if use_ie_old_attach
        obj[use_attach] "on" + name, cb
      else
        obj[use_attach] name, cb, false
    obj = cb = null
    return

  ###
  Detach an event handler to an HTMLElement

  @memberOf $sf.lib.dom
  @exports detach as $sf.lib.dom.detach
  @public
  @static
  @function
  @param {HTMLElement} el the HTML element to attach an event handler too
  @param {String} namethe name of the event to listen too
  @param {Function} cb the function used to handle the particular event
  ###
  detach = (obj, name, cb) ->
    try
      if use_ie_old_attach
        obj.detachEvent "on" + name, cb
      else
        obj.removeEventListener name, cb, false
    obj = cb = null
    return

  ###
  Returns whether or not the DOM is ready to be manipulated

  @memberOf $sf.lib.dom
  @exports ready as $sf.lib.dom.ready
  @public
  @static
  @function
  @return {Boolean}
  ###
  ready = ->
    rs = undefined
    _clear_ready_timer_check()
    if dom_is_ready
      dom_last_known_child_node = null
      return true
    rs = theDocument.readyState
    if rs
      dom_last_known_child_node = null
      if rs is "loaded" or rs is "complete"
        dom_is_ready = true
      else
        dom_is_ready = false

    #
    #			 * there is no document.readyState property available, so kick off our timer function
    #			 * that will check.
    #			 *
    #
    dom_last_known_child_node = null
    dom_ready_chk_tries = dom_last_known_tag_count = 0
    _ready_state_check()
    !!(dom_is_ready)

  ###
  Fire off a particular function when it is detected that the DOM is ready
  Useful when you don't know for sure if the DOM of the browser is ready or not, so this will detect and fire
  your function for you.

  @memberOf $sf.lib.dom
  @exports wait as $sf.lib.dom.wait
  @public
  @static
  @function
  @param {Function} cb A function reference to be called when the DOM is ready
  ###
  wait = (cb) ->
    rdy = ready()
    e = undefined
    if rdy
      try
        cb()  if lang.callable(cb)
      catch e
        e = null
      return
    setTimeout (->
      wait cb
      cb = null
      return
    ), dom_ready_chk_try_interval + 1
    return

  ###
  Cancel the the default action of a particular DOM event

  @memberOf $sf.lib.dom
  @exports evtCncl as $sf.lib.dom.evtCncl
  @public
  @static
  @function
  @param {HTMLEvent} evt  The raw HTML event
  ###
  evtCncl = (evt) ->
    prop = ""
    e = undefined
    evt = evt or win.event
    if evt

      # old school ie, cancel event and bubble
      #				   however we also use this for when event handling overrides
      #				   take place so that we can cancel things
      #
      try
        evt.returnValue = false
      try
        evt.cancelBubble = true
      try
        evt.stopped = true #custom
      for prop of EVT_CNCL_METHODS
        if EVT_CNCL_METHODS[prop]
          try
            evt[prop]()
    false

  ###
  Return the target/srcElement of an event from an HTML element

  @memberOf $sf.lib.dom
  @exports evtTgt as $sf.lib.dom.evtTgt
  @public
  @static
  @function
  @param {HTMLEvent} evt The raw HTML event
  ###
  evtTgt = (evt) ->
    tgt = null
    try
      evt = evt or win.event
      tgt = (if (evt) then (evt[evt_tgt_prop_a] or evt[evt_tgt_prop_b]) else null)
    catch e
      tgt = null
    tgt

  ###
  @namespace $sf.lib.dom.iframes Defines helper functions for dealing specifically with IFRAME tags, which is key to SafeFrames tech in a browser.
  @name $sf.lib.dom.iframes
  @requires $sf.lib.lang
  ###

  ###
  Clones an iframe. . .
  This code creates / clones iframe tags in a very specific way to ensure both optimal performance and stability.
  We use string buffers to build markup internally, which is typically faster than using all DOM APIs.  Also
  we allow the usage of the "name" attribute as a data pipeline, which in turn allows for synchronous downward
  x-domain messaging.

  @name $sf.lib.dom.iframes.clone
  @static
  @public
  @function
  @param {HTMLElement/String} el  An iframe element or id of an iframe element to clone
  @param {Object} [attrs]  A hash map of other attributes to be set on the iframe.  Do not set style properties for the frame here, see the next argument for that.
  @param {String} [cssText]  The style string (as in what you would use in HTML markup, e.g. "background-color:red;border:solid 3px blue;"), to use for this iframe
  @param {Function} [cb]  An optional callback function to specify for when the iframe loads.
  @param {Function} [xmsgCB] An optional call back for receiving messages from the iframe
  @return {HTMLElement}  the iframe node if succesfully created or null.  Note that this does not insert the iframe into the document for you. . .
  ###
  clone_iframe = (el, attrs, cssText, cb, xmsgCB) ->
    _clone_iframe el, attrs, cssText, cb, xmsgCB

  ###
  @ignore
  ###
  _clone_iframe = (el, attrs, cssText, cb, xmsgCB, iframe_skip_clone) ->
    bufferHTML = [
      "<"
      IFRAME
      " "
    ]
    xmsgPipe = ""
    prop = undefined
    temp = undefined
    cl = undefined
    newCl = undefined
    html = undefined
    attrStr = undefined
    unless iframe_skip_clone
      el = _byID(el)
      return null  unless tagName(el) is IFRAME
      cl = el.cloneNode(false)
    else
      cl = el
    attrs = attrs or {}
    if "src" of attrs
      attr cl, "src", null
    else
      attrs.src = attr(el, "src") or BLANK_URL
    if "name" of attrs
      attr cl, "name", null
    else
      attrs.name = attr(el, "name")
    attrs.src = BLANK_URL  unless attrs.src
    xmsgPipe = xmsgCB and _call_xmsg_host("prep", attrs)
    unless iframe_skip_clone
      attr cl, "width", null
      attr cl, "height", null
    if cssText

      #Lucky for us that duplicate style props will override each other so long as i put mine after. .
      temp = css(cl)
      temp += ";"  if temp and temp.charAt(temp.length - 1) isnt ";"
      css cl, [
        temp
        _cstr(cssText)
      ]
    temp = make_element("div")
    append temp, cl
    html = temp.innerHTML
    attrStr = html.replace(/<iframe(.*?)>(.*?)<\/iframe>/g, "$1")
    bufferHTML.push "name=\"", attrs.name, "\" ", attrStr, "></", IFRAME, ">"
    delete attrs.name #delete it so that we are not calling setAttribute with "name" since IE doesn't like that

    temp.innerHTML = _cstr(bufferHTML)
    newCl = temp.firstChild
    for prop of attrs
      attr newCl, prop, attrs[prop]
    unless attr(newCl, "id")
      attr newCl, "id", "sf_" + IFRAME + "_" + iframe_next_id
      iframe_next_id++
    attr newCl, "FRAMEBORDER", "no"
    attr newCl, "SCROLLING", "no"
    attr newCl, "ALLOWTRANSPARENCY", true
    attr newCl, "HIDEFOCUS", true
    attr newCl, "TABINDEX", -1
    attr newCl, "MARGINWIDTH", 0
    attr newCl, "MARGINHEIGHT", 0
    _bind_iframe_onload newCl, cb
    _call_xmsg_host "attach", newCl, xmsgPipe, xmsgCB  if xmsgPipe
    xmsgPipe = xmsgCB = cl = cb = el = temp = null
    newCl

  ###
  Make a new iframe

  @name $sf.lib.dom.iframes.make
  @static
  @public
  @function
  @param {Object} attrs  A hash map of other attributes to be set on the iframe.  Do not set style properties for the frame here, see the next argument for that.
  @param {String} [cssText]  The style string (as in what you would use in HTML markup, e.g. "background-color:red;border:solid 3px blue;"), to use for this iframe
  @param {Function} [cb]  An callback function to specify for when the iframe loads.
  @param {Function} [xmsgCB] An call back for receiving messages from the iframe
  @return {HTMLElement}  the iframe node if succesfully created or null.  Note that this does not insert the iframe into the document for you. . .
  ###
  make_iframe = (attrs, cssText, cb, xmsgCB) ->
    _clone_iframe make_element(IFRAME), attrs, cssText, cb, xmsgCB, true

  ###
  A method to insert or replace an HTML tag with an IFRAME tag, with a new URL and attributes.

  Used for 3 reasons:
  <ol>
  <li>It avoids click sounds on IE.</li>
  <li>It allows always resetting the window.name property of the iframes underlying HTMLWindow object, unforunately IE will not let you set this attribute on a clone.</li>
  <li>It ensures that event handlers in the underlying document for unloading are executed.</li>
  <li>Changing the src attribute directly will result in a browser history update, which we do not want.</li>
  </ol>

  We could just change location.href property or call location.replace, however that is not always  possible since
  the frame could be x-domain.

  @name $sf.lib.dom.iframes.replace
  @function
  @static
  @public
  @param {Object} attrs  A hash map of other attributes to be set on the iframe.  Do not set style properties for the frame here, see the next argument for that.
  @param {String} [cssText]  The style string (as in what you would use in HTML markup, e.g. "background-color:red;border:solid 3px blue;"), to use for this iframe
  @param {HTMLElement|String} [parRef]  An parent element or parent element id, to be used only if a new iframe is created, the iframe will be append to that parent, if not specified document body is used
  @param {Function} [cb]  An callback function to specify for when the iframe loads.
  @param {Function} [xmsgCB] An call back for receiving messages from the iframe

  @return {HTMLElement} a reference to the newly created iframe element if successfully inserted, otherwise null.
  ###
  replace_iframe = (attrs, cssText, parRef, cb, xmsgCB) ->
    cl = undefined
    el = undefined
    frameEl = undefined
    elID = undefined
    tgn = undefined
    parNode = undefined
    e = undefined
    attrs = attrs or {}
    elID = attrs.id
    el = elID and _byID(elID)
    tgn = tagName(el)
    el = (if (tgn) then el else null)
    frameEl = (if (tgn is IFRAME) then el else null)
    if frameEl
      _call_xmsg_host "detach", frameEl
      _unbind_iframe_onload frameEl
      parNode = par(frameEl)
      cl = clone_iframe(frameEl, attrs, cssText, cb, xmsgCB)

      #remove these attrs, since they will be reset
      attr cl, "onload", null
      attr cl, "onreadystatechange", null
    else
      if parRef
        parRef = _byID(parRef)
        parNode = parRef  if tagName(parRef)
      parNode = par(el)  if not parNode and el
      cssText = _cstr(cssText) or css(el) or ""
      cl = make_iframe(attrs, cssText, cb, xmsgCB)
    try
      unless parNode
        append theDocument.body, cl
      else
        if frameEl
          parNode.replaceChild cl, frameEl
        else
          if el
            parNode.replaceChild cl, el
          else
            append parNode, cl
    cl = el = attrs = frameEl = parNode = cb = null
    elt elID

  ###
  Retrieve the window reference inside of an IFRAME. Not to be confused with $sf.lib.dom.view which
  returns the parent window reference of an element.

  Note that even in cross-domain scenarios, you are supposed to able to get access to the window reference.
  In a cross-domain scenario, you would not be able to then acesss most properties / methods / objects of that
  window, but the reference itself is allowed.

  @name $sf.lib.dom.iframes.view
  @public
  @static
  @function
  @param {HTMLElement} el The iframe element to safely get back the window
  @return {HTMLWindow} the window reference inside the iframe.
  ###
  iframe_view = (el) ->
    win = undefined
    elWin = undefined
    elDoc = undefined
    frame_list = undefined
    frame = undefined
    fe = undefined
    idx = 0
    e = undefined
    err = undefined
    try
      win = el.contentWindow or null

      #
      #				 * We are allowed access, but sometimes, non-ie browser will report null
      #				 * so in this case we loop through the window frames to see if that is really
      #				   the case
      #
      unless win
        elDoc = doc(el)
        elWin = (elDoc and view(elDoc))
        frame_list = (elWin and elWin.frames) or []
        while frame = frame_list[idx++]
          try
            fe = frame.frameElement
          catch err
            fe = null
          if fe and fe is el
            win = frame
            break
    catch e
      win = null
    win


  #
  #		 * Do some internal intialization below.  Some variable aren't really used beyond this intialization phase, hence
  #		 * why we have a 2ndary inner function.  We also want to have some functions defined differently based on the browser
  #		 * for run-time performance reasons (however we only do this if the function body is significantly different, otherwise
  #		 * we just fork internally inside a functional wrapper).
  #		 *
  #

  ###
  @ignore
  ###
  gc = _lang.noop
  (->
    obj = undefined
    ATTR_NAME = "SCROLLING"
    CREATE_EVENT = "createEvent"
    EVT_TYPE = "UIEvent"
    prop = undefined
    err = undefined
    if isIE
      evt_tgt_prop_a = "srcElement"
      evt_tgt_prop_b = "target"
      obj = make_element(IFRAME)
      attr obj, ATTR_NAME, "no"
      useOldStyleAttrMethods = (attr(obj, ATTR_NAME) isnt "no")
      if GC of win

        #
        #					 * While this method is technically public, we do not document it.
        #					 * IE has a super-secret method to call the garbage collector.  It was implemented
        #					 * b/c IE, due to its own issues with internal reference counting, did not always trigger
        #					 * garabage collection properly.  This happens to be the case often when dealing with one
        #					 * or more IFRAMEs.  Often times you will find that an IFRAME that is removed from the dom
        #					 * actually never gets unloaded (and thereby never fires the onunload event either).
        #					 *
        #					 * Calling IE's internal method helps make sure this happens.
        #					 *
        #

        ###
        @ignore
        ###
        gc = ->
          clearTimeout gc_timer_id  if gc_timer_id
          gc_timer_id = setTimeout(->
            try
              win[GC]()
            return
          , IE_GC_INTERVAL)
          return
      else
        gc = _lang.noop
    else
      evt_tgt_prop_a = "target"
      evt_tgt_prop_b = "currentTarget"
    if win[w3c_attach] and not isIE
      use_attach = w3c_attach
      use_detach = w3c_detach
    else if isIE
      use_ie_old_attach = true
      use_attach = ie_attach
      use_detach = ie_detach

    #
    #			 * We have a method for cancelling event propagation / bubbling
    #			 * which will even work in cases where cancelling is typically not allowed
    #			 * so long as we have control over the handlers
    #			 *
    #			 * In turn we want to be able to call the proper supported methods
    #			 * regardless of browser type, so we look at the w3c style of creating
    #			 * events and if that can be used, then we want to make sure and call those
    #			 * cancelling methods that are supported
    #			 *
    #
    obj = null
    try
      obj = theDocument[CREATE_EVENT](EVT_TYPE)
    catch err
      obj = null
    unless obj
      try
        obj = theDocument[CREATE_EVENT](EVT_TYPE + "s")
      catch err
        obj = null
    if obj
      for prop of EVT_CNCL_METHODS
        EVT_CNCL_METHODS[prop] = 1  if obj[prop]
    obj = null

    # we attach load event handlers to also allow us to know as soon as
    #			 * possible when dom is ready.  this script may have been loaded async
    #			 * though, which is why our ready check does some other things to check for
    #			 * certain
    #			 *
    #
    attach win, "load", _handle_dom_load_evt
    attach win, "DOMContentLoaded", _handle_dom_load_evt
#    dom = lang.def(IAB_LIB + ".dom",
#
#      # DOM Query function
#      doc: doc
#      view: view
#      elt: elt
#      tagName: tagName
#      tags: tags
#      par: par
#
#    # DOM manipulate functions
#      make: make_element
#      css: css
#      attr: attr
#      gc: gc
#      append: append
#      purge: purge
#
#    # DOM event functions
#      attach: attach
#      detach: detach
#      ready: ready
#      wait: wait
#      evtCncl: evtCncl
#      evtTgt: evtTgt
#    , null, true)
#    return
#  )()
  )()
  doc: doc
  view: view
  elt: elt
  tagName: tagName
  tags: tags
  par: par
  make: make_element
  css: css
  attr: attr
  gc: gc
  append: append
  purge: purge
  attach: attach
  detach: detach
  ready: ready
  wait: wait
  evtCncl: evtCncl
  evtTgt: evtTgt
  iframes:
    make: make_iframe
    clone: clone_iframe
    replace: replace_iframe
    view: iframe_view