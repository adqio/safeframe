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
@namespace $sf.host Defines the Publisher side api, and helper functions
@name $sf.host
@author <a href="mailto:ssnider@yahoo-inc.com">Sean Snider</a>
@author <a href="mailto:ccole[AT]emination.com">Chris Cole</a>
@version 1.0.2
###

###
@ignore
###
define ["./boot"],(sf)->
  win = if window? then window else @
  DEFAULT_RENDER_TIMEOUT = 60000
  POS_ID_AUTO_PREFIX = "sf_pos"
  POS_REL_BOX_ID_PREFIX = "sf_pos_rel_el"
  SF_DATATAG_CLASS = "sf_data"
  SF_POSELEM_WRAPPER_CLASS = "sf_position"
  AUTO_BOOT_MAX_RETRIES = 100
  GEOM_UPDATE_INTRVAL = 750
  XCOM_RESP_DELAY = 1
  IE_BORDER_ADJ = 2
  INTERSECT_FACTOR = 10
  BF_POS_MSG = "onBeforePosMsg"
  POS_MSG = "onPosMsg"
  SUPPORTS_FEATURES =
    "exp-ovr": 1
    "exp-push": 0
    bg: 0
    pin: 0
    "read-cookie": 0
    "write-cookie": 0

  EXPAND_COMMAND = "exp-ovr"
  COLLAPSE_COMMAND = "collapse"
  ERROR_COMMAND = "error"
  NOTIFY_EXPAND = "expand"
  NOTIFY_GEOM_UPDATE = "geom-update"
  NOTIFY_COLLAPSE = COLLAPSE_COMMAND
  NOTIFY_FOCUS_CHANGE = "focus-change"
  DEFAULT_ZINDEX = 3000
  OBJ = "object"
  FUNC = "function"
  STR = "string"
  ST = "style"
  PROTO = "prototype"
  LEN = "length"
  WIDTH = "width"
  HEIGHT = "height"
  PX = "PX"
  CLIP = "clip"
  SCROLL = "scroll"
  ONSCROLL = "onscroll"
  COMPAT_MODE = "compatMode"
  DOC_EL = "documentElement"
  DOC = "document"
  NODE_TYPE = "nodeType"
  CONTAINS = "contains"
  COMPARE_DOC_POS = "compareDocumentPosition"
  EL_FROM_PT = "elementFromPoint"
  AUTO = "auto"
  HIDDEN = "hidden"
  OVER = "overflow"
  TFXD = "toFixed"
  ATTACH = "attach"
  DETACH = "detach"
  MSG = "message"
  PMSG = "postMessage"
  GUID = "guid"
  FLASH_MIME = "application/x-shockwave-flash"
  VERSION = sf.ver
  env = sf.env
  ua =  env.ua
  lib = sf.lib
  lang = lib.lang
  dom = lib.dom
  iframes = dom.iframes
  _cbool = lang.cbool
  _cnum = lang.cnum
  _cstr = lang.cstr
  _callable = lang.callable
  _noop = lang.noop
  _guid = lang[GUID]
  _mix = lang.mix
  _elt = dom.elt
  _par = dom.par
  _tags = (dom.tags)
  _attr = (dom.attr)
  _doc = (dom.doc)
  _tagName = (dom.tagName)
  _view = (dom.view)
  _ifr_view = (iframes and iframes.view)
  _purge = (dom.purge)
  _ready = (dom.ready)
  _es = (win and win.escape)
  M = (win and win.Math)
  _max = (M and M.max)
  _min = (M and M.min)
  _round = (M and M.round)
  _rect = null
  ParamHash = (lang and lang.ParamHash)
  dc = (win and win[DOC])
  isIE = (env and env.isIE)
  ieVer = ((ua and ua.ie) or 0)
  wbVer = ((ua and ua.webkit) or 0)
  geckVer = ((ua and ua.gecko) or 0)
  operaVer = ((ua and ua.opera) or 0)
  loc = (win and win.location)
  locHost = (loc and ((loc.protocol + "//" + (loc.host or loc.hostname)) or ""))
  rendered_ifrs = {}
  msg_pipes = {}
  ifr_dest_id_map = {}
  pending_ifrs = {}
  complete_ifrs = {}
  scroll_parents_attached = {}
  mgr_bounds_details = false
  canUseHTML5 = false
  html5Bound = false
  win_events_attached = false
  geom_update_timer = 0
  focus_update_timer = 0
  current_status = null
  msghostfb = null
  flash_ver = null
  config = null
  flashActiveXVersions = [
    "ShockwaveFlash.ShockwaveFlash.11"
    "ShockwaveFlash.ShockwaveFlash.8"
    "ShockwaveFlash.ShockwaveFlash.7"
    "ShockwaveFlash.ShockwaveFlash.6"
    "ShockwaveFlash.ShockwaveFlash"
  ]
  initID =undefined
  # missing the port number

  # --BEGIN-SafeFrames publisher data class definitions 

  ###
  Configure the base-level settings for the SafeFrames library
  Note that only one configuration can be active at a given time.
  Therefore you cannot change the configuration by creating a new $sf.host.Config while
  the SafeFrames library is busy (however you can add new position configurations).
  Instatiating a new config, when the library is not busy will destroy / remove all currently
  managed positions and there configurations.
  
  @name $sf.host.Config
  @constructor
  @public
  @param {Object} conf An object containing properties for configuration
  @param {Boolean} [conf.auto] Whether or not to have SafeFrames automatically boostrap an render any SafeFrames tags within the page
  @param {String} conf.cdn The protocol,host name, and port parts of a URI, that is a 2ndary origin, used with SafeFrames to render content. For example JS files would be loaded from conf.cdn+"/"+conf.root+"/"+conf.version+"/[filename]"
  @param {Boolean} [conf.debug] Whether or not debug mode is on or off
  @param {String} conf.root The root path part of the URI that is a 2ndary origin, used with SafeFrames to render content. For example the HTML file for rendering content into would beloaded from conf.cdn+"/"+conf.root+"/"+conf.version+"/"+conf.renderFile
  @param {String} conf.renderFile The filename (may also include path info), for which to render content into via a SafeFrame.
  @param {String} [conf.msgFile] The filename (may also include path info), for which to use as a proxy for x-domain messaging whenever HTML5 messaging is not available. Only required if supporting older browsers.
  @param {Number} [conf.to] The maximum amount of time in milliseconds to wait for a SafeFrame to finish rendering, defaults to 60 seconds.
  @param {Function} [conf.onBeforePosMsg] A callback function that gets fired before any cancellable action is requested to be peformed from a a SafeFrame, such as expansion, etc.  Return true out of this callback function to cancel/disallow the action in question.
  @param {Function} [conf.onPosMsg] A callback function that gets fired when an action requested by a SafeFrame is performed
  @param {Function} [conf.onStartPosRender] A callback function that gets fired when a SafeFrame starts to render 3rd party content.
  @param {Function} [conf.onEndPosRender] A callback function that gets fired when a SafeFrame finishes rendering 3rd party content.
  @param {Object} [conf.positions] A map of positions to automatically configure, where each key equals the id of the $sf.host.PosConfig object, and the value is an object containing said object's settings.
  ###
  Config = (conf) ->
    me = this
    pos_map = undefined
    conf_pos_map = undefined
    posID = undefined
    pos_conf = undefined
    pos_id = undefined
    boot_up = undefined
    return (if (config) then _mix({}, config) else null)  unless arguments.length
    return new Config(conf)  unless me instanceof Config
    unless conf
      config = null
      return null
    boot_up = !!(config)
    me.auto = (if ("auto" of conf) then _cbool(conf.auto) else true)
    me.cdn = _cstr(conf.cdn)
    me.debug = _cbool(conf.debug)
    me.root = _cstr(conf.root)
    me.renderFile = _cstr(conf.renderFile)
    me.msgFile = _cstr(conf.msgFile)
    me.to = _cnum(conf.to, DEFAULT_RENDER_TIMEOUT)
    me.ver = _cstr(conf.ver) or VERSION
    me.onBeforePosMsg = (if _callable(conf.onBeforePosMsg) then conf.onBeforePosMsg else _noop)
    me.onPosMsg = (if _callable(conf.onPosMsg) then conf.onPosMsg else _noop)
    me.onStartPosRender = (if _callable(conf.onStartPosRender) then conf.onStartPosRender else _noop)
    me.onEndPosRender = (if _callable(conf.onEndPosRender) then conf.onEndPosRender else _noop)
    me.onFailure = (if _callable(conf.onFailure) then conf.onFailure3 else _noop)
    conf_pos_map = conf.positions
    me.positions = pos_map = {}
    if conf_pos_map
      for posID of conf_pos_map
        pos_conf = conf_pos_map[posID]
        if pos_conf and typeof pos_conf is OBJ
          pos_id = posID or pos_conf.id or _guid(POS_ID_AUTO_PREFIX)
          pos_map[pos_id] = new PosConfig(pos_conf)
    config = me
    boot_up = !!(boot_up and me.auto and sf.host.boot?)
    try
      sf.host.boot()  if boot_up
    _mix {}, config

  ###
  Configure a particualar position for rendering a SafeFrame
  Each $sf.host.PosConfig object has an id property that should be unique.  Creating a new $sf.host.PosConfig with an id, that has already been
  used results in changing the old $sf.host.PosConfig settings, and can only be done if the SafeFrames library is not busy.
  Automatically ads to the position map of the $sf.host.Config object if said config has already been created.
  
  @name $sf.host.PosConfig
  @public
  @constructor
  @param {Object|String} posIDorObj The id of the $sf.host.PosConfig instance, or an object containing all settings that are to be used for the instance.
  @param {String} [posIDorObj.id] The id of the $sf.host.PosConfig instance, if not specified one will be generated automatically.
  @param {String} [posIDorObj.dest] The HTML element id attribute of the HTML element in the document where a SafeFrame will be rendered. Said element MUST exist within the page prior to a render.
  @param {String} [posIDorObj.bg] The color of the background to be used inside the SafeFrame. Default equals "transparent".
  @param {String} [posIDorObj.tgt] The name of the target window where hyperlinks inside a SafeFrame will navigate too...Note that "_self" is not allowed and always converted to "_top". Allowed values are any string value not prefixed with "_", or "_top" or "_blank".
  @param {String} [posIDorObj.css] A string of CSS rules, or a URL that points to a CSS style sheet to be used inside the SafeFrame
  @param {Number} [posIDorObj.w] The width of the SafeFrame, specified in pixels. Cannot be specified in em, % or another values.
  @param {Number} [posIDorObj.h] The height of the SafeFrame, specified in pixels. Cannot be specified in em, % or another values.
  @param {String} [posIDorObj.size] A string formated as "widthXheight", that defines the width and height of the SafeFrame. The delimiter character "X" is can be specified as lower or upper case.
  @param {String} [posIDorObj.z] The z-index of the SafeFrame.
  @param {Object} [posIDorObj.supports] An object containing key/value pairs for what features/actions are supported by the SafeFrame, and its corresponding value represents a boolean detereming whether that feature can be used.  Currently supported keys are "exp-ovr" == SafeFrame can expand in overlay mode, "exp-push" == SafeFrame can expand in push mode, and "bg" == SafeFrame can change the background of the publisher / host.
  @param {String} [destID] The HTML element id attribute of the HTML element in the document where a SafeFrame will be rendered. Said element MUST exist within the page prior to a render.
  @param {Object} [baseConf] An object representing a $sf.host.Config object to automatically use / create for the SafeFrames library. Note that baseConf can only be used one time, otherwise you have to use the $sf.host.Config object directly.
  ###
  PosConfig = (posIDorObj, destID, baseConf) ->
    me = this
    typ = (posIDorObj and typeof posIDorObj) or ""
    sz = undefined
    sz_split = undefined
    return new PosConfig(posIDorObj, destID, baseConf)  unless me instanceof PosConfig
    if typ is OBJ
      me.id = _cstr(posIDorObj.id)
      me.dest = _cstr(posIDorObj.dest or destID)
      me.bg = _cstr(posIDorObj.bg) or "transparent"
      me.tgt = _cstr(posIDorObj.tgt) or "_top"
      me.css = _cstr(posIDorObj.css)
      me.w = _cnum(posIDorObj.w, 0)
      me.h = _cnum(posIDorObj.h, 0)
      me.z = _cnum(posIDorObj.z, 0)
      me.supports = _mix({}, posIDorObj.supports or SUPPORTS_FEATURES, true, true, true)
      if not me.w or not me.h
        sz = _cstr(posIDorObj.size)
        if sz
          sz_split = sz.split(/x/g)
          me.w = _cnum(sz_split[0], 0)
          me.h = _cnum(sz_split[1], 0)
          me.size = sz
        else
          me.size = ""
      else
        me.size = me.w + "x" + me.h
    else if typ is "string"
      me.id = _cstr(posIDorObj)
      me.dest = _cstr(posIDorObj.dest)
    else
      me.dest = ""
      me.bg = "transparent"
      me.tgt = "_top"

      me.css = ""
      me.w = 0
      me.h = 0
      me.size = ""
      me.z = 0
      me.supports = {}
    me.id = me.id or _guid(POS_ID_AUTO_PREFIX)
    Config baseConf  if not config and baseConf
    config.positions[me.id] = me  if config
    _mix {}, me

  ###
  Construct a set of dynamic key/value pairs that can be shared as meta-data with the 3rd party content inside a SafeFrame.
  All data is treated as protected, and can only be specfied during construction of this object.
  
  @exports PosMeta as $sf.host.PosMeta#
  @public
  @constructor
  @class
  @param {Object} shared_object An object containing keys and values to be shared as meta-data inside the SafeFrame
  @param {String} [owner_key] A key name to be used to hold pseudo private keys / values of meta data.
  @param {Object} [owned_obj] An object containing psuedo private keys and values to be shared as meta-data inside the SafeFrame.
  @example
  var shared_data 		 = {content_id:8978098,partner_id:99},
  private_data_key	 = "rmx",
  private_data      = {section_id:2342,site_id:23904},
  meta_data		 = new $sf.host.PosMeta(shared_data, private_data_key, private_data);
  
  //show section id on host side
  alert(meta_data.value("rmx", "site_id")); //== 23904
  
  @example
  //now retrieve this information inside the safe frame
  
  var content_id = $sf.vend.meta("content_id"); //== 8978098
  
  var rmx_section_id = $sf.vend.meta("rmx", "section_id") //== 2342, but note that vendor side code must know the "owner_key" upfront.
  ###
  PosMeta = (shared_obj, owner_key, owned_obj) ->

    ###
    A method retrieves a meta data value from this object.
    
    @exports get_value as $sf.host.PosMeta#value
    @param {String} propKey The name of the value to retrieve
    @param {String} [owner_key] The name of the owner key of the meta data value. By default, it is assumed to be shared, so nothing needs to be passed in unless looking for a specific proprietary value
    @return {String|Number|Boolean}
    @default {String} ""
    @public
    @function
    ###
    get_value = (propKey, owner_key) ->
      ret = ""
      return ret  if not propKey or typeof propKey isnt STR
      owner_key = "shared"  if not owner_key or typeof owner_key isnt STR
      if owner_key is "shared"
        ret = shared[propKey] or ""
      else
        ret = (if (propKey of non_shared) then (non_shared[prop_key] or "") else "")
      ret

    ###
    Return a serialized string representation (in url query string format) of the meta data object
    
    @exports serialize as $sf.host.PosMeta#toString
    @function
    @public
    ###
    serialize = ->
      obj = new ParamHash()
      obj.shared = shared
      obj.non_shared = non_shared

      #json.stringify
      obj.toString()
    me = this
    shared = undefined
    non_shared = undefined
    old = undefined
    posConf = undefined
    return new PosMeta(key, owned_obj, pos, shared_obj)  unless me instanceof PosMeta
    shared = {}
    non_shared = {}
    return me  if not owner_key or typeof owner_key isnt STR
    shared = _mix(shared, shared_obj)  if shared_obj and typeof shared_obj is OBJ
    non_shared[owner_key] = owned_obj  if owned_obj and typeof owned_obj is OBJ
    me.toString = serialize
    me.value = get_value
    return

  ###
  Create the HTML markup for a position if a src property was used
  
  @name $sf.host-_create_pos_markup
  @function
  @private
  @static
  @return {String}
  ###
  _create_pos_markup = (src) ->
    if src

      # TODO: Macro expansion within src url
      # Spec section 4.6
      # $(sf_ver}
      # $(ck_on}
      # $(flash_ver}
      src = src.replace(/\${sf_ver}/g, $sf.ver)  if src.indexOf("${sf_ver}") > -1
      if src.indexOf("${ck_on}") > -1
        ckVal = (if _cookies_enabled_test() then "1" else "0")
        src = src.replace(/\${ck_on}/g, ckVal)
      if src.indexOf("${flash_ver}") > -1
        fVer = _get_flash_version()
        src = src.replace(/\${flash_ver}/g, fVer)
    _cstr [
      "<scr"
      "ipt type='text/javascript', src='"
      src
      "'></scr"
      "ipt>"
    ]

  ###
  Get the falsh version number
  ###
  _get_flash_version = ->
    return flash_ver  if flash_ver isnt null
    if navigator.plugins and navigator.plugins.length > 0
      mimeTypes = navigator.mimeTypes
      flash_ver = mimeTypes[FLASH_MIME].enabledPlugin.version  if mimeTypes and mimeTypes[FLASH_MIME] and mimeTypes[FLASH_MIME].enabledPlugin and mimeTypes[FLASH_MIME].enabledPlugin.description
    else if sf.env.isIE

      # ActiveX detect
      i = undefined
      obj = undefined
      tmpVer = undefined
      p = undefined
      i = 0
      while i < flashActiveXVersions.length
        try
          obj = new ActiveXObject(flashActiveXVersions[i])
          tmpVer = obj.GetVariable("$version")
          p = tmpVer.indexOf(" ")
          if p > -1
            flash_ver = tmpVer.substr(p + 1).replace(/,/g, ".")
          else
            flash_ver = tmpVer.replace(/,/g, ".")
          break

        # "WIN 11,3,378,5"
        catch err
          obj = null
          flash_ver = 0
          continue
        i++
    else
      flash_ver = 0
    return flash_ver
    getActiveXVersion = (activeXObj) ->
      version = -1
      try
        version = activeXObj.GetVariable("$version")
      version

    return

  ###
  Test to see if cookies are enabled
  ###
  _cookies_enabled_test = ->
    cookieEnabled = (if (navigator.cookieEnabled) then true else false)
    if typeof navigator.cookieEnabled is "undefined" and not cookieEnabled
      document.cookie = "testcookie"
      cookieEnabled = (if (document.cookie.indexOf("testcookie") isnt -1) then true else false)
      navigator.cookieEnabled = cookieEnabled  if navigator
    cookieEnabled

  ###
  Construction a postion content object that contains HTML, optionally meta-data, and optionally a position configuration to use.
  The id specified must match an id for a $sf.host.PosConfig (although said config could be specfied directly here via arguments).
  
  @name $sf.host.Position
  @constructor
  @public
  @param {Object|String} posIDorObj The id of the position which maps to its configuration, or an object represeting the various values of an $sf.host.Position instance.
  @param {String} [posIDorObj.id] The id of the position which maps to its configuration.
  @param {String} [posIDorObj.html] The HTML content to be rendered inside the SafeFrame. Note that HTML strings which have SCRIPT tags or other special characters may need to be properly escaped in order to avoid JavaScript syntax errors.
  @param {String} [posIDorObj.src] An optional URL to be used for redering inside the SafeFrame which will automatically generate a SCRIPT tag with the specified URL.
  @param {$sf.host.PosMeta} [posIDorObj.meta] An optional instance of the $sf.host.PosMeta object to be passed along into the SafeFrame
  @param {Object} [posIDorObj.conf] An optional representation of an $sf.host.PosConfig object to be used as the configuration for the SafeFrame position.
  @param {String} [html] The HTML content to be rendered inside the SafeFrame. Note that HTML strings which have SCRIPT tags or other special characters may need to be properly escaped in order to avoid JavaScript syntax errors.
  @param {$sf.host.PosMeta} [meta] An optional instance of the $sf.host.PosMeta object to be passed along into the SafeFrame
  @param {Object} [conf] An optional representation of an $sf.host.PosConfig object to be used as the configuration for the SafeFrame position.
  ###

  #
  #	 * This is a data objet constructor, and we don't want dom interactions placed inside here
  #	 *
  #	
  Position = (posIDorObj, html, meta, conf) ->
    me = this
    typ = (posIDorObj and typeof posIDorObj)
    origHtml = html
    id = undefined

    # the reason for this check is so that some one doesn't have to do "new $sf.host.Position", they
    # can just do "$sf.host.Position"
    return new Position(posIDorObj, html, meta, conf)  unless me instanceof Position

    # Insure config is initialized
    unless config?
      msg = "Publisher Config not initialized - abort"
      sf.lib.logger.error msg
      sf.info.errs.push msg
      return
    if typ is OBJ
      _mix me, posIDorObj
    else
      id = me.id = _cstr(posIDorObj) or _guid(POS_ID_AUTO_PREFIX)
    unless html
      if me.src
        me.html = _create_pos_markup(me.src)
      else
        me.html = me.html or ""
        me.src = ""
    else
      me.html = html
      me.src = ""
    me.html = ""  unless me.html
    me.meta = meta or me.meta or {}
    me.conf = conf or me.conf or {}
    if id
      if config and config.positions[id]
        me.conf = config.positions[id]
      else
        if conf
          conf.id = id
          me.conf = new PosConfig(conf)
    return

  # --END-SafeFrames publisher data class definitions 

  # --BEGIN--SafeFrames publisher side dom helper functions 

  # removed the concept of needing a "host" file and put all that logic to keep the file sturcture simple 

  ###
  @namespace $sf.lib.dom.msghost Contains functionality to reside in the top level page for sending and receiving x-domain messages to SafeFrame containers
  @name $sf.lib.dom.msghost
  ###

  ###
  Returns the root document HTMLElement / node
  @name $sf.lib.dom-_docNode
  @private
  @static
  @function
  @param {HTMLElement} [el] An HTMLElement to use as a reference for finding the root document element.
  @returns {HTMLElement}
  ###
  _docNode = (el) ->
    d = (el and _doc(el)) or dc
    compatMode = d[COMPAT_MODE]
    root = d[DOC_EL]
    root = d.body  if compatMode and not operaVer and compatMode isnt "CSS1Compat"
    root

  ###
  Returns whether or not a value is specified in pixels
  @name $sf.lib.dom-_isPX
  @private
  @static
  @function
  @param {String} val A css value of size
  @returns {Boolean}
  ###
  _isPX = (val) ->
    val = _cstr(val)
    return true  if val and val.search(/\D+/g) is -1
    true  if val and val.search(/px/g) isnt -1

  ###
  Return an array of values of clipping region information. Array represents top, right, bottom, left values respectively.
  If values are not specified in pixels, or no clip region is defined for that element, -1 is returned for each value.
  
  @name $sf.lib.dom-_getClip
  @private
  @function
  @static
  @param {HTMLStyleObject} curSt The current style object of an HTMLElement
  @return {Array}
  ###
  _getClip = (curSt) ->
    ret = [
      -1
      -1
      -1
      -1
    ]
    props = [
      CLIP + "Top"
      CLIP + "Right"
      CLIP + "Bottom"
      CLIP + "Left"
    ]
    idx = 0
    clipVal = undefined
    prop = undefined
    val = undefined
    len = undefined
    return ret  unless curSt
    if ieVer
      while prop = props[idx]
        clipVal = curSt[prop]
        if _isPX(clipVal)
          clipVal = _cnum(clipVal, -1)
          ret[idx] = clipVal  if clipVal >= 0
        idx++
    else
      clipVal = curSt[CLIP]
      if clipVal and clipVal.search(/\d+/g) isnt -1
        clipVal = clipVal.replace(/\w+\(([^\)]*?)\)/g, "$1")
        ret = clipVal.split(" ")
        ret = (if (ret[LEN] <= 1) then ret.split(",") else ret)
        len = ret[LEN]
        idx = 0
        while len--
          val = ret[idx]
          unless _isPX(val)
            ret[idx] = -1
          else
            ret[idx] = _cnum(val, -1)
          idx++
    ret

  ###
  Returns border values in pixels if possible to help calculate geometry of an element
  
  @name $sf.lib.dom-_calcBorders
  @private
  @static
  @function
  @param {HTMLElement} el The HTMLElement for which to look at. . .
  @param {Object} rect The rect object generated for the HTMLElement in question to be adjusted
  @returns {Object} rect
  ###
  _calcBorders = (el, rect) ->
    t = 0
    l = 0
    st = undefined
    re = /^t(?:able|d|h|r|head|foot)$/i
    st = currentStyle(el)
    if st
      t = st["borderTopWidth"]
      l = st["borderLeftWidth"]
      t = (if (_isPX(t)) then _cnum(t, 0) else 0)
      l = (if (_isPX(l)) then _cnum(l, 0) else 0)
      #getBrowserVersion should already be called since this method is only called from getRectNonIE
      t = l = 0  if geckVer and re.test(_tagName(el))
    rect = rect or
    t: 0
    l: 0

    rect.t += t
    rect.l += l
    rect

  ###
  Retrieve scroll values of a document
  
  @name $sf.lib.dom-_get_doc_scroll
  @private
  @static
  @function
  @param {HTMLElement} [el] An HTMLElement to use as a reference document rather than the default main document
  @return {Object} Contains x, y, w, h properties for scrolling
  ###
  _get_doc_scroll = (el) ->
    pos =
      x: 0
      y: 0
      w: 0
      h: 0

    def =
      scrollLeft: 0
      scrollTop: 0
      scrollWidth: 0
      scrollHeight: 0

    d = undefined
    de = undefined
    dv = undefined
    db = undefined
    offsetX = 0
    offsetY = 0
    d = _doc(el) or dc
    de = d[DOC_EL] or def
    db = d.body or def
    dv = d.defaultView #only for non-ie
    if dv
      offsetX = _cnum(dv.pageXOffset, 0)
      offsetY = _cnum(dv.pageYOffset, 0)
    pos.x = _max(de.scrollLeft, db.scrollLeft, offsetX)
    pos.y = _max(de.scrollTop, db.scrollTop, offsetY)
    pos.w = _max(de.scrollWidth, db.scrollWidth, 0)
    pos.h = _max(de.scrollHeight, db.scrollHeight, 0)
    pos

  ###
  Calculate a geometric rectangle for a given element. Note that for IE browsers
  we can use the "getBoundingClientRect" function which saves us some time / increases
  peformance. . however it really can only be called if the DOM is completely loaded,
  and if that is the case we fallback to the brute-force / non-IE method.
  
  @name $sf.lib.dom-_getRectIE
  @private
  @static
  @function
  @param {HTMLElement} el  The element for which to derive a rectangle object
  @returns {Object} An object representing the rectangle for the given HTMLElement
  ###
  _getRectIE = (el) ->
    rect =
      t: 0
      l: 0
      r: 0
      b: 0
      w: 0
      h: 0
      z: 0

    _back = "BackCompat"
    scroll = undefined
    box = undefined
    d = undefined
    de = undefined
    compatMode = undefined
    st = undefined
    adjustX = undefined
    adjustY = undefined
    bLeft = undefined
    bTop = undefined
    if el and el[NODE_TYPE] is 1
      try
        d = _doc(el) or dc
        return _getRectNonIE(el)  unless dom.ready()
        scroll = _get_doc_scroll(el)
        box = el.getBoundingClientRect()
        rect.t = box.top
        rect.l = box.left
        adjustX = adjustY = IE_BORDER_ADJ
        compatMode = d[COMPAT_MODE]
        de = d[DOC_EL]
        st = currentStyle(de)
        bLeft = st["borderLeftWidth"]
        bTop = st["borderTopWidth"]
        adjustX = adjustY = 0  unless compatMode is _back  if ieVer is 6
        if compatMode is _back
          bLeft = (if (_isPX(bLeft)) then _cnum(bLeft, 0) else 0)
          adjustX = bLeft
          bTop = (if (_isPX(bTop)) then _cnum(bTop, 0) else 0)
          adjustY = bTop
          rect.t -= adjustX
          rect.l -= adjustY
        rect.t += scroll.y
        rect.l += scroll.x
        rect.b = rect.t + el.offsetHeight
        rect.r = rect.l + el.offsetWidth
        rect.w = _max((rect.r - rect.l), 0)
        rect.h = _max((rect.b - rect.t), 0)
        rect.z = currentStyle(el, "zIndex")
      catch e
        rect =
          t: 0
          l: 0
          r: 0
          b: 0
          w: 0
          h: 0
          z: 0
    rect

  ###
  Calculate a geometric rectangle for a given element. For non-IE browsers, we must use
  brute-force and walk up the offsetParent tree. Also takes in consideration for some
  other slight variations in browsers.
  
  @name $sf.lib.dom-_getRectNonIE
  @private
  @static
  @function
  @param {HTMLElement} el  The element for which to derive a rectangle object
  @returns {Object} An object representing the rectangle for the given HTMLElement
  ###
  _getRectNonIE = (el) ->
    rect =
      t: 0
      l: 0
      r: 0
      b: 0
      w: 0
      h: 0
      z: 0

    scrollTop = 0
    scrollLeft = 0
    bCheck = false
    root = _docNode(el)
    scroll = _get_doc_scroll(el)
    parentNode = undefined
    w = undefined
    h = undefined
    if el and el[NODE_TYPE] is 1
      try
        rect.l = el.offsetLeft or 0
        rect.t = el.offsetTop or 0
        parentNode = el
        bCheck = (geckVer or wbVer > 519)
        while parentNode = parentNode.offsetParent
          rect.t += parentNode.offsetTop or 0
          rect.l += parentNode.offsetLeft or 0
          _calcBorders parentNode, rect  if bCheck
          break  if parentNode is root
        parentNode = el
        unless currentStyle(parentNode, "position") is "fixed"
          parentNode = el
          while parentNode = _par(parentNode)
            if parentNode[NODE_TYPE] is 1
              scrollTop = parentNode.scrollTop or 0
              scrollLeft = parentNode.scrollLeft or 0

              #Firefox does something funky with borders when overflow is not visible.
              _calcBorders parentNode, rect  if geckVer and currentStyle(parentNode, OVER) isnt "visible"
              rect.l -= scrollLeft
              rect.t -= scrollTop
            break  if parentNode is root
          rect.t += scroll.y
          rect.l += scroll.x
        else
          rect.t += scroll.y
          rect.l += scroll.x
        if not ieVer and el is _docNode(el)
          h = el.clientHeight
          w = el.clientWidth
        else
          h = el.offsetHeight
          w = el.offsetWidth
        rect.b = rect.t + h
        rect.r = rect.l + w
        rect.w = _max((rect.r - rect.l), 0)
        rect.h = _max((rect.b - rect.t), 0)
        rect.z = currentStyle(el, "zIndex")
      catch e
        rect =
          t: 0
          l: 0
          r: 0
          b: 0
          w: 0
          h: 0
          z: 0
    rect

  ###
  Returns an object that represents a rectangle with the geometric information of an HTMLDocument
  (includes scroll width / height)
  
  @name $sf.lib.dom.docRect
  @public
  @static
  @function
  @param {HTMLElement} [el] An HTMLElement to use as the reference for an HTMLDocument
  @returns {Object}
  ###
  docRect = (el) ->
    root = _docNode(el)
    w = 0
    h = 0
    if root
      w = root.scrollWidth or 0
      h = root.scrollHeight or 0
    t: 0
    l: 0
    b: h
    r: w
    w: w
    h: h

  ###
  Returns an object that represents a rectangle with the geometric information of an HTMLWindow
  (does not include scroll width / height)
  
  @name $sf.lib.dom.winRect
  @public
  @static
  @function
  @param {HTMLElement} [el] An HTMLElement to use as the references for an HTMLWindow
  @returns {Object}
  ###
  winRect = (el) ->
    wi = (el and _view(el)) or win
    h = wi.innerHeight or 0
    w = wi.innerWidth or 0
    t = wi.screenY or wi.screenTop or 0
    b = h + t
    l = wi.screenX or wi.screenLeft or 0
    r = w + l
    root = _docNode(el)
    if not h and not w and root
      h = root.clientHeight or 0
      w = root.clientWidth or 0
      r = l + w
      b = t + h
    t: t
    l: l
    b: b
    r: r
    w: w
    h: h

  ###
  Returns whether or not an HTMLElement is contained within another HTMLElement
  
  @name $sf.lib.dom.contains
  @public
  @static
  @function
  @param {HTMLElement} element The HTMLElement reference to search within
  @param {HTMLElement} needle The HTMLElement for which you want to check if its contained by the 1st parameter
  @returns {Boolean}
  ###
  contains = (element, needle) ->
    ret = false
    el_node_type = ((element and element[NODE_TYPE]) or -1)
    needle_node_type = ((needle and needle[NODE_TYPE]) or -1)
    if el_node_type is 1 and needle_node_type isnt -1
      if element[CONTAINS]
        if operaVer or needle_node_type is 1
          ret = element[CONTAINS](needle)
        else
          while needle
            if element is needle
              ret = true
              break
            needle = needle.parentNode
      else ret = (element is needle or !!(element[COMPARE_DOC_POS](needle) & 16))  if element[COMPARE_DOC_POS]
    ret

  ###
  Returns the current value of a style attribute, or the current style object in its entirety depending on whether an attribute parameter is specified
  
  @name $sf.lib.dom.currentStyle
  @public
  @static
  @function
  @param {HTMLElement} el The HTMLElement for which to retrieve style information
  @param {String} [attr] The style attribute (in JavaScript notation, e.g. 'backgroundColor' rather than 'background-color') to fetch.
  @return {HTMLStyleObject} An HTMLStyleObject containing all current style attribute values
  @return {String} The value of an style attribute (only if attr parameter is specified).
  ###
  currentStyle = (el, attr) ->
    val = ""
    hasAttr = !!(arguments.length and attr)
    comp = "getComputedStyle"
    e = undefined
    if hasAttr
      if ieVer
        try
          val = el.currentStyle[attr]
        catch e
          val = ""
      else
        try
          val = _view(el)[comp](el, null)[attr]
        catch e
          val = ""
    else
      if ieVer
        try
          val = el.currentStyle
        catch e
          val = null
      else
        try
          val = _view(el)[comp](el, null)
        catch e
          val = null
    val

  ###
  Calculate the surrounding boundaries of an HTMLElement, and whether or not the HTMLElement is "in-view" of the user
  
  @name $sf.lib.dom.bounds
  @public
  @static
  @function
  @param {HTMLElement} el The element for which to calculate information
  @param {Object} [details] An object reference used as an output parameter in which further details about the boundaries of the element are specified
  @param {Boolean} [check_3D] Check the element within 3 dimensional space such that any elements covering said element are also take into consideration
  @returns {Object} info An object containing information about the element boundaries
  ###
  bounds = (el, details, check_3D) ->
    par = el and _par(el)
    root = _docNode(el)
    el_rect = _rect(el)
    root_rect = _rect(root)
    root_scroll = _get_doc_scroll(root)
    doc_rect = docRect(el)
    clip_rect =
      t: 0
      l: 0
      r: 0
      b: 0
      w: 0
      h: 0

    exp_rect =
      t: 0
      l: 0
      r: 0
      b: 0
      xs: 0
      ys: 0
      xiv: 0
      yiv: 0
      iv: 0
      w: 0
      h: 0

    xsb_h = 0
    ysb_w = 0
    is_scroll_node = false
    is_using_doc_root_r = false
    is_using_doc_root_b = false
    cur_st = undefined
    w = undefined
    h = undefined
    t = undefined
    l = undefined
    r = undefined
    b = undefined
    scroll_width = undefined
    offset_width = undefined
    client_width = undefined
    scroll_height = undefined
    offset_height = undefined
    client_height = undefined
    over_x_val = undefined
    scroll_left = undefined
    scroll_top = undefined
    over_y_val = undefined
    clip = undefined
    x_hidden = undefined
    y_hidden = undefined
    ref_node = undefined
    temp_rect = undefined
    is_scroll_node = false
    details = (if (details and typeof details is OBJ) then details else {})
    if par

      #
      #    		 * Here we are looping through parent nodes to check if any of them have clip / overflow
      #    		 * settings which would create a new boundary point (as opposed to the body of the document)
      #    		 *
      #    		 * Ideally I would have liked to break the logic out that finds said reference node, away
      #    		 * from the calculation part. . however during optimization phases, it was quick to store
      #    		 * off variables for from dom properties for width / height
      #    		 *
      #    		
      while cur_st = currentStyle(par)
        if cur_st["display"] is "block" or cur_st["position"] is "absolute" or cur_st["float"] isnt "none" or cur_st["clear"] isnt "none"
          over_x_val = cur_st[OVER + "X"]
          over_y_val = cur_st[OVER + "Y"]
          clip = _getClip(cur_st)
          if par is root
            scroll_width = root_scroll.w
            scroll_height = root_scroll.h
          else
            scroll_width = par.scrollWidth
            scroll_height = par.scrollHeight
          offset_width = par.offsetWidth
          offset_height = par.offsetHeight
          client_width = par.clientWidth
          client_height = par.clientHeight
          if over_x_val is HIDDEN or clip[1] > 0 or clip[3] > 0
            unless ref_node
              x_hidden = 1
              ref_node = par
          if over_y_val is HIDDEN or clip[0] > 0 or clip[2] > 0
            unless ref_node
              y_hidden = 1
              ref_node = par
          if over_x_val is SCROLL
            ref_node = par
            xsb_h = offset_height - client_height
            is_scroll_node = true
          if over_y_val is SCROLL
            ref_node = par  unless ref_node
            ysb_w = offset_width - client_width
            is_scroll_node = true
          if over_x_val is AUTO
            ref_node = par  unless ref_node

            #scrolling is on
            xsb_h = offset_height - client_height  if scroll_width > client_width
            is_scroll_node = true
          if over_y_val is AUTO
            ref_node = par  unless ref_node
            ysb_w = offset_width - client_width  if scroll_height > client_height
            is_scroll_node = true
          break  if ref_node
        if par is root
          if scroll_width > client_width

            #scrolling is on
            h = (win.innerHeight or 0) or offset_height
            xsb_h = h - client_height
          if scroll_height > client_height
            w = (win.innerWidth or 0) or offset_width
            ysb_w = w - client_width
          is_scroll_node = true
        par = _par(par)
        break  if not par or par[NODE_TYPE] isnt 1
    if el_rect.w and el_rect.h

      #
      #    		 * Now look at the element dimensions vs the ref node dimensions
      #    		 *
      #    		
      if not ref_node or ref_node is root

        #
        #	    		 * if ref node is the root node we need a bit of special processing
        #	    		 *
        #	    		
        exp_rect.t = _max(el_rect.t, 0)
        exp_rect.l = _max(el_rect.l, 0)
        if ieVer and dc[COMPAT_MODE] is "BackCompat" and _attr(root, SCROLL) is "no"
          y_hidden = x_hidden = 1
        else
          cur_st = currentStyle(root)
          if cur_st
            x_hidden = (cur_st[OVER + "X"] is HIDDEN)
            y_hidden = (cur_st[OVER + "Y"] is HIDDEN)
        if root_scroll.h > root.clientHeight
          if y_hidden
            exp_rect.b = 0
          else
            is_using_doc_root_b = true
            exp_rect.b = _max(((doc_rect.h - el_rect.h) - xsb_h) - el_rect.t, 0)
        else
          exp_rect.b = _max(((root_rect.h - el_rect.h) - xsb_h) - el_rect.t, 0)
        if root_scroll.w > root.clientWidth
          if x_hidden
            exp_rect.r = 0
          else
            is_using_doc_root_r = true
            exp_rect.r = _max(((doc_rect.w - el_rect.w) - ysb_w) - el_rect.l, 0)
        else
          exp_rect.r = _max(((root_rect.r - el_rect.w) - ysb_w) - el_rect.l, 0)
      else
        cur_st = currentStyle(ref_node)

        # In standards mode, body's offset and client numbers will == scroll numbers which is not what we want 
        if _tagName(ref_node) is "body"
          ref_node = root
          t = el_rect.t
          l = el_rect.l
        else
          t = l = 0
        clip_rect = _rect(ref_node)
        if clip[1] > 0
          clip_rect.w = clip[1]
          clip_rect.r = clip_rect.l + clip_rect.w
        if clip[3] > 0
          clip_rect.l = clip_rect.l + clip[3]
          clip_rect.w = clip_rect.w - clip[3]
        if clip[2] > 0
          clip_rect.h = clip[2]
          clip_rect.b = clip_rect.t + clip_rect.h
        if clip[0] > 0
          clip_rect.t = clip_rect.t + clip[0]
          clip_rect.h = clip_rect.h - clip[0]
        t = el_rect.t - clip_rect.t  if el_rect.t > clip_rect.t and clip_rect.t > 0
        l = el_rect.l - clip_rect.l  if el_rect.l > clip_rect.l and clip_rect.l > 0
        scroll_top = ref_node.scrollTop
        scroll_left = ref_node.scrollLeft
        scroll_height = ref_node.scrollHeight
        scroll_width = ref_node.scrollWidth
        exp_rect.t = _max(t, 0)
        exp_rect.l = _max(l, 0)
        if cur_st
          x_hidden = (cur_st[OVER + "X"] is HIDDEN or clip[1] > 0 or clip[3] > 0)
          y_hidden = (cur_st[OVER + "Y"] is HIDDEN or clip[0] > 0 or clip[2] > 0)
        if el_rect.t >= clip_rect.b
          exp_rect.b = 0
        else
          y_hidden = 1  if not y_hidden and el_rect.t >= clip_rect.b
          if scroll_height > ref_node.clientHeight
            if y_hidden
              exp_rect.b = 0
            else
              exp_rect.b = _max(((scroll_height - el_rect.h) - xsb_h) - t, 0)
          else
            exp_rect.b = _max(((clip_rect.h - el_rect.h) - xsb_h) - t, 0)
        if el_rect.l >= clip_rect.r
          exp_rect.r = 0
        else
          x_hidden = 1  if not x_hidden and el_rect.l >= clip_rect.r
          if scroll_width > ref_node.clientWidth
            if x_hidden
              exp_rect.r = 0
            else
              exp_rect.r = _max(((scroll_width - el_rect.w) - ysb_w) - l, 0)
          else
            exp_rect.r = _max(((clip_rect.w - el_rect.w) - ysb_w) - l, 0)
      exp_rect.xs = (if (xsb_h) then 1 else 0)
      exp_rect.ys = (if (ysb_w) then 1 else 0)
      exp_rect.w = exp_rect.r + exp_rect.l
      exp_rect.h = exp_rect.t + exp_rect.b
      if not ref_node or ref_node is root
        temp_rect = root_rect
        ref_node = root
      else
        temp_rect = clip_rect
      l = _max(el_rect.l, temp_rect.l)
      r = _min(el_rect.r, (if (is_using_doc_root_r) then _min(doc_rect.r, temp_rect.r) else temp_rect.r))
      w = _max(r - l, 0)
      t = _max(el_rect.t, temp_rect.t)
      b = _min(el_rect.b, (if (is_using_doc_root_b) then _min(doc_rect.b, temp_rect.b) else temp_rect.b))
      h = _max(b - t, 0)
      exp_rect.xiv = _cnum((w / el_rect.w)[TFXD](2))
      exp_rect.yiv = _cnum((h / el_rect.h)[TFXD](2))
      exp_rect.iv = _cnum(((w * h) / (el_rect.w * el_rect.h))[TFXD](2))
    details.refNode = ref_node or root
    details.isRoot = (ref_node is root)
    details.canScroll = is_scroll_node
    details.refRect = (if (not ref_node or ref_node is root) then root_rect else clip_rect)
    details.expRect = exp_rect
    details.rect = el_rect
    if check_3D
      (->
        idx = 0
        len = 0
        arOvrlaps = undefined
        el_w = undefined
        el_h = undefined
        el_area = undefined
        ovr_node = undefined
        ovr_node_rect = undefined
        t = undefined
        b = undefined
        l = undefined
        r = undefined
        h = undefined
        w = undefined
        ovr_area = undefined
        new_iv = undefined
        new_xiv = undefined
        new_yiv = undefined
        if exp_rect.iv > .5
          mgr_bounds_details = details
          arOvrlaps = overlaps(el, _cnum(check_3D, 1, 1))
          mgr_bounds_details = null
          len = arOvrlaps[LEN]
          el_w = el_rect.w
          el_h = el_rect.h
          el_area = el_w * el_h

          if len
            while ovr_node = arOvrlaps[idx++]
              ovr_node_rect = _rect(ovr_node)
              l = _max(el_rect.l, ovr_node_rect.l)
              r = _min(el_rect.r, ovr_node_rect.r)
              t = _max(el_rect.t, ovr_node_rect.t)
              b = _min(el_rect.b, ovr_node_rect.b)
              w = r - l
              h = b - t
              ovr_area = w * h
              new_xiv = (1 - (w / el_w))[TFXD](2)
              new_yiv = (1 - (h / el_h))[TFXD](2)
              new_iv = (1 - (ovr_area / el_area))[TFXD](2)
              if (new_xiv > 0 and new_xiv < exp_rect.xiv) or (new_yiv > 0 and new_yiv < exp_rect.yiv)
                exp_rect.xiv = new_xiv
                exp_rect.yiv = new_yiv
                exp_rect.iv = new_iv
        return
      )()
    exp_rect

  ###
  Find any HTMLElements that are covering a given HTMLElement.
  
  @name $sf.lib.dom.overlaps
  @public
  @static
  @function
  @param {HTMLElement} el The HTMLElement for which to find any other elements that may be covering it.
  @param {Number} [limit] The maximum number of covering elements to return
  @returns {Array} An array of elements that are covering the given element
  ###
  overlaps = (el, limit) ->
    rect = _rect(el)
    doc = _doc(el)
    root = _docNode(doc)
    t = rect.t
    l = rect.l
    w = rect.r - rect.l
    h = rect.b - rect.t
    factor = INTERSECT_FACTOR
    ret = []
    baseW = _round(w / factor)
    baseH = _round(h / factor)
    curW = baseW
    curH = baseH
    seen = {}
    par_details = {}
    points = []
    idx = 0
    x = undefined
    y = undefined
    pt = undefined
    id = undefined
    checkEl = undefined
    ref_par_node = undefined
    ref_par_rect = undefined
    maxX = undefined
    maxY = undefined
    if mgr_bounds_details
      par_details = mgr_bounds_details
    else
      bounds el, par_details, true
    ref_par_node = par_details.refNode
    ref_par_rect = par_details.refRect
    if ref_par_rect and ref_par_node and ref_par_node isnt root
      maxX = ref_par_rect.r
      maxY = ref_par_rect.b
    else
      maxX = l + w
      maxY = t + h
    if doc and root and doc[EL_FROM_PT]
      while curW < w
        curH = baseH
        while curH < h
          x = l + curW
          y = t + curH
          if x < maxX and y < maxY
            points.push [
              x
              y
            ]
          curH += baseH
        curW += baseW
      limit = _cnum(limit, points[LEN])
      while pt = points[idx++]
        checkEl = doc[EL_FROM_PT](pt[0], pt[1])
        try
          if checkEl and checkEl.nodeType is 1 and checkEl isnt root and checkEl isnt el and not contains(el, checkEl)
            id = _attr(checkEl, "id")
            unless id
              id = lang.guid("geom_inter")
              _attr checkEl, "id", id
            if not seen[id] and ret[LEN] < limit
              seen[id] = 1
              ret.push checkEl
    id = ""
    for id of seen
      if id.indexOf("geom_inter") is 0
        checkEl = _elt(id)
        _attr checkEl, "id", null  if checkEl
    ret

  # --END--SafeFrames publisher side dom helper functions 

  # --BEGIN--SafeFrames publisher side dom msg host helper functions 

  ###
  A proxy wrapper for calling into the cross-domain messaging host fall back library
  Looks for namespace will be $sf.lib.dom.msghost_fb
  Said library is used in cases where there is not HTML5 style messaging (i.e. no postMessage method available).
  
  @name $sf.lib.dom.msghost-_call_xmsg_host_fb
  @private
  @static
  @function
  @param {String} methName The method name in the msg host library to call
  @param {*} arg1 An arbitrary argument to pass to said method as the 1st arg
  @param {*} arg2 An arbitrary argument to pass to said method as the 2nd arg
  @param {*} arg3 An arbitrary argument to pass to said method as the 3rd arg
  @returns {*} whatever comes back from the method
  ###
  _call_xmsg_host_fb = (methName, arg1, arg2, arg3) ->
    msghostfb = dom.msghost_fb  unless msghostfb
    methName and msghostfb and msghostfb[methName] and msghostfb[methName](arg1, arg2, arg3)

  ###
  Listen for an initial HTML5 postMessage event, to validate that HTML5 style
  messaging can be used
  
  @name $sf.lib.dom.msghost-_check_html5_init
  @private
  @static
  @function
  @param {HTMLEvent} evt The raw HTML event object received from the postMessage call
  ###
  _check_html5_init = (evt) ->
    if not canUseHTML5 and evt and evt.data is initID
      canUseHTML5 = true
      dom.evtCncl evt
      dom[DETACH] win, MSG, _check_html5_init
    return

  ###
  Listen for onmessage events in the main window. Validate that message is for us, and if so
  pass it through to the rest of the code and cancel further handling.
  
  @name $sf.lib.dom.msghost-_handle_msg_from_outside
  @private
  @static
  @function
  @param {HTMLEvent} evt The raw HTML event object received from the postMessage call
  ###
  _handle_msg_from_outside = (evt) ->
    data = evt and evt.data
    msg_win = evt and evt.source
    params = data and (data.indexOf(GUID) isnt -1) and ParamHash(data)
    tgtID = params and params.id
    ifr = tgtID and _elt(tgtID)
    fr_win = ifr and _ifr_view(ifr)
    pipe = tgtID and msg_pipes[tgtID]
    dataGUID = params and params[GUID]
    pipeGUID = pipe and pipe[GUID]
    cb = pipe and pipe._xmsgcb
    ret = false
    if pipeGUID and dataGUID and dataGUID is pipeGUID and msg_win and fr_win and fr_win is msg_win
      try
        ret = cb(params.msg)
      catch e
        ret = false
    dom.evtCncl evt  if ret
    ret

  ###
  Send a message to a child iframe.
  
  @name $sf.lib.dom.msghost.send
  @public
  @static
  @function
  @param {String} tgtID The HTML id attribute of the iframe element for which to send a message
  @param {String} data The string of data to send to the given iframe
  @returns {Boolean} Whether or not message was send succesfully (note that this does not mean message was handled / recevied, only that sending was ok).
  ###
  send_msg_to_child_iframe = (tgtID, data) ->
    pipe = tgtID and msg_pipes[tgtID]
    success = false
    msgObj = undefined
    w = undefined
    el = undefined
    e = undefined
    unless pipe
      success = _call_xmsg_host_fb("send", tgtID, data)
    else
      if pipe
        msgObj = ParamHash()
        msgObj.msg = data
        msgObj.guid = pipe.guid
        if usingHTML5()
          el = _elt(tgtID)
          w = _ifr_view(el)
          try
            w[PMSG] _cstr(msgObj), pipe.srcHost or "*"
            success = true
          catch e
            success = false
        else
          success = _call_xmsg_host_fb("send", tgtID, data)
    msgObj = w = el = null
    success

  ###
  Get whether or not HTML5 style messaging can be used
  
  @name $sf.lib.dom.msghost.usingHTML5
  @public
  @static
  @function
  @returns {Boolean}
  ###
  usingHTML5 = ->
    canUseHTML5

  ###
  Gets a location of the hosting page, stripped of the search hash,
  but leaving query parameters, port, host, path, etc.
  ###
  _strippedEncodedLocation = ->
    cleaned = undefined
    pos = loc.href.indexOf("#")
    if pos > -1
      cleaned = loc.href.substr(0, pos)
    else
      cleaned = loc.href
    pos = cleaned.indexOf("?")
    cleaned = cleaned.substr(0, pos)  if pos > -1
    escape cleaned

  ###
  Prepare an iframe in the top level window to be able to send / receive cross-domain messages
  Generally this method is called from $sf.lib.iframes.  The attrs object in question should
  represent key/value pairs of HTML attributes for the iframe. Note that the attrs object passed
  in will be modified with a new "name" property, to send information into the iframe and setup
  messaging.
  
  @name $sf.lib.dom.msghost.prep
  @public
  @static
  @function
  @param {Object} attrs Information required to set up the cross-domain messaging channel
  @param {String} attrs.id The IFRAME HTML id attribute
  @param {String} attrs.src The URL / src attribute of the IFRAME
  @param {String} [attrs.guid] The guid / signature to use to validate that messages sent/ received can be accepted. If not specified, one will be created automatically.
  @param {String} [attrs.name] The IFRAME HTML name attribute which will be used to send an intial message to the HTML document inside the IFRAME.
  @returns {Object} An object with various properties detailing the messaging pipe-line.
  ###
  prep_iframe_msging = (attrs) ->
    pipe = null
    iframeName = undefined
    nameParams = undefined
    src = undefined
    srcHost = undefined
    newPipe = undefined
    locStripped = _strippedEncodedLocation()
    if attrs
      iframeName = attrs.name
      nameParams = ParamHash(iframeName)
      src = _cstr(attrs.src)
      srcHost = src and src.substring(0, src.indexOf("/", 9))
      srcHost = (if (srcHost.search(/http/g) isnt 0) then "" else srcHost)
      pipe = ParamHash(nameParams)
      pipe.id = attrs.id or ("iframe_" + _guid())
      pipe.src = src
      pipe.srcHost = srcHost
      pipe[GUID] = pipe[GUID] or _guid()
      pipe.host = locHost
      pipe.loc = locStripped
      pipe.proxyID = ""
      if usingHTML5()
        pipe.html5 = 1
        pipe.proxyPath = ""
      else
        newPipe = _call_xmsg_host_fb("prep", pipe)
        pipe = newPipe  if newPipe
      attrs.name = pipe
    pipe

  ###
  Listen for messages from an IFRAME. Note that on the host / publisher side
  this library only allows for one message handler to be attached to a given
  IFRAME.
  
  @name $sf.lib.dom.msghost.attach
  @public
  @static
  @function
  @param {HTMLElement} el The IFRAME reference to attach a listener callback too. .
  @param {Object} pipe The message pipe object created from $sf.lib.dom.msghost.prep
  @param {Function} cb The callback function to fire when a message is received
  ###
  attach_iframe_msging = (el, pipe, cb) ->
    tgtID = undefined
    if _tagName(el) is "iframe"
      tgtID = _attr(el, "id")
      if tgtID and pipe and (pipe instanceof ParamHash) and tgtID is pipe.id
        if usingHTML5()
          msg_pipes[tgtID] = pipe
          pipe._xmsgcb = cb
          unless html5Bound
            dom[ATTACH] win, MSG, _handle_msg_from_outside
            html5Bound = true
        else
          _call_xmsg_host_fb ATTACH, el, pipe, cb
    return

  ###
  Detach listening for messages from an IFRAME
  
  @name $sf.lib.dom.msghost.detach
  @public
  @static
  @function
  @param {HTMLElement} el The IFRAME reference to detach a listener
  ###
  detach_iframe_msging = (el) ->
    id = _attr(el, "id")
    pipe = id and msg_pipes[id]
    w = null
    empty = true
    unless pipe
      _call_xmsg_host_fb DETACH, el
      return
    if pipe
      pipe._xmsgcb = msg_pipes[id] = null
      pipe = null
      delete msg_pipes[id]
    id = ""
    for id of msg_pipes
      pipe = msg_pipes[id]
      if pipe and pipe[GUID]
        empty = false
        break
    if empty and usingHTML5() and html5Bound
      html5Bound = false
      dom[DETACH] win, MSG, _handle_msg_from_outside
    el = w = pipe = null
    return

  # --END--SafeFrames publisher side dom msg host helper functions 

  ###
  Fire the specifed callback out to the publisher. Note that other arguments beyond the 1st argument are passed throug to the callback.
  
  @name $sf.host-_fire_pub_callback
  @static
  @private
  @function
  @param {String} cb_name The callback name to fire
  ###
  _fire_pub_callback = (cb_name) -> # args to call back
    cb_args = []
    args = arguments
    len = args[LEN]
    idx = 0
    f = undefined
    ret = false
    e = undefined
    a = undefined
    if config
      f = config[cb_name]
      if f
        while len--
          a = args[idx++]
          cb_args.push a  unless a is cb_name
        try
          ret = f.apply(null, cb_args)
        catch e
          ret = false
    ret #ADDED BY SEAN

  ###
  Nuke the position an report that said position took too long to render
  
  @name $sf.host-_handle_render_timeout
  @static
  @private
  @function
  @param {String} pos_id The position id that has taken too long
  ###
  _handle_render_timeout = (pos_id) ->
    pend = pos_id and pending_ifrs[pos_id]
    if pend
      clearTimeout pend
      nuke pos_id
      _fire_pub_callback POS_MSG, "render-timeout", pos_id
    current_status = ""  unless _has_pending_renders()
    return

  ###
  Clear the timer that fires every so often to update the geometry in side
  of SafeFrames
  
  @name $sf.host-_clear_geom_update_timer
  @static
  @private
  @function
  ###
  _clear_geom_update_timer = ->
    if geom_update_timer
      clearTimeout geom_update_timer
      geom_update_timer = 0
    return

  ###
  +	 * Clear the timer that fires every so often to update the geometry in side
  +	 * of SafeFrames
  +	 *
  +	 * @name $sf.host-_clear_geom_update_timer
  +	 * @static
  +	 * @private
  +	 * @function
  +	 *
  +
  ###
  _clear_focus_update_timer = ->
    if focus_update_timer
      clearTimeout focus_update_timer
      focus_update_timer = 0
    return
  _set_focus_update_timer = (in_focus) ->
    _clear_focus_update_timer()
    focus_update_timer = setTimeout(->
      _update_focus in_focus
      return
    , 2)
    return

  ###
  Set up the timer function that updates each SafeFrame with up to date geometric information
  
  @name $sf.host-_set_geom_update_timer
  @static
  @private
  @function
  ###
  _set_geom_update_timer = (is_win_scroll) ->
    _clear_geom_update_timer()
    if is_win_scroll
      geom_update_timer = setTimeout(_update_geom_win_scroll, GEOM_UPDATE_INTRVAL)
    else
      geom_update_timer = setTimeout(_update_geom_win_resize, GEOM_UPDATE_INTRVAL)
    return

  ###
  Update all SafeFrames with updated geometric information
  
  @name $sf.host-_update_geom
  @static
  @private
  @function
  @param {Boolean} is_win_scroll Whether or not we are updating due to the main window being scrolled
  ###
  _update_geom = (is_win_scroll) ->
    posID = undefined
    params = undefined
    msgObj = undefined
    id = undefined
    ifr = undefined
    g = undefined
    for posID of rendered_ifrs
      continue  if is_win_scroll and (posID of scroll_parents_attached)
      params = rendered_ifrs[posID]
      id = (params and params.dest)
      ifr = (id and _elt(id))
      if ifr and params
        g = _build_geom(posID, ifr, true)
        msgObj = ParamHash()
        msgObj.pos = posID
        msgObj.cmd = NOTIFY_GEOM_UPDATE
        msgObj.geom = _es(g)
        _fire_pub_callback POS_MSG, posID, NOTIFY_GEOM_UPDATE, g
        _send_response params, msgObj
    _clear_geom_update_timer()
    return

  ###
  Update all SafeFrames with updated geometric information due to a window resize
  event.
  
  @name $sf.host-_update_geom_win_resize
  @static
  @private
  @function
  ###
  _update_geom_win_resize = ->
    _update_geom()
    return

  ###
  Update all SafeFrames with updated geometric information due to a window scroll event
  
  @name $sf.host-_update_geom_win_scroll
  @static
  @private
  @function
  ###
  _update_geom_win_scroll = ->
    _update_geom true
    return

  ###
  Update a SafeFrame that has new geometric information due to its parent HTML element
  scrolling.
  
  @name $sf.host-_handle_node_scroll
  @static
  @private
  @function
  ###
  _handle_node_scroll = (evt, posID, node) ->
    scr_handle = scroll_parents_attached[posID]
    g = undefined
    if scr_handle
      if scr_handle.tID
        clearTimeout scr_handle.tID
        delete scr_handle.tID
      scr_handle.tID = setTimeout(->
        params = rendered_ifrs[posID]
        id = (params and params.dest)
        ifr = (id and _elt(id))
        g = undefined
        msgObj = undefined
        if ifr and params
          g = _build_geom(posID, ifr, true)
          msgObj = ParamHash()
          msgObj.pos = posID
          msgObj.cmd = NOTIFY_GEOM_UPDATE
          msgObj.geom = _es(g)
          _fire_pub_callback POS_MSG, posID, NOTIFY_GEOM_UPDATE, g
          _send_response params, msgObj
        delete scr_handle.tID

        return
      , GEOM_UPDATE_INTRVAL)
    return

  ###
  Handle the window onscroll event, eventually leading to a geometric update
  
  @name $sf.host-_handle_win_geom_scroll
  @static
  @private
  @function
  @param {HTMLEvent} evt The raw event object
  ###
  _handle_win_geom_scroll = (evt) ->
    _set_geom_update_timer 1
    return

  ###
  Handle the window onresize event, eventually leading to a geometric update
  once the window events are slowed down
  
  @name $sf.host-_handle_win_geom_resize
  @static
  @private
  @function
  @param {HTMLEvent} evt The raw event object
  ###
  _handle_win_geom_resize = (evt) ->
    _set_geom_update_timer()
    return

  ###
  Update all SafeFrames with updated focus information
  
  @name $sf.host-_update_focus
  @static
  @private
  @function
  @param {Boolean} in_focus True when the window has gained focus
  ###
  _update_focus = (in_focus) ->
    posID = undefined
    params = undefined
    msgObj = undefined
    id = undefined
    ifr = undefined
    for posID of rendered_ifrs
      params = rendered_ifrs[posID]
      id = (params and params.dest)
      ifr = (id and _elt(id))
      if ifr and params
        msgObj = ParamHash()
        data = ParamHash()
        msgObj.pos = posID
        msgObj.cmd = data.cmd = NOTIFY_FOCUS_CHANGE
        msgObj.value = in_focus
        _fire_pub_callback POS_MSG, posID, NOTIFY_FOCUS_CHANGE, in_focus
        _send_response params, msgObj
    _clear_focus_update_timer()
    return

  ###
  Handle the window focus event, which notifies ads of the change
  ###
  _handle_win_focus = (evt) ->
    _set_focus_update_timer true
    return

  ###
  Handle the window blur event, which notifies ads of the change
  ###
  _handle_win_blur = (evt) ->
    _set_focus_update_timer false
    return

  ###
  Handle the window unload event, clearing up our state
  
  @name $sf.host-_handle_unload
  @static
  @private
  @function
  @param {HTMLEvent} evt The raw event object
  ###
  _handle_unload = (evt) ->
    prop = undefined
    scr_handle = undefined
    e = undefined
    _clear_geom_update_timer()
    try
      dom.detach win, SCROLL, _handle_win_geom_scroll
      dom.detach win, "resize", _handle_win_geom_resize
      dom.detach win, "unload", _handle_unload
      dom.detach win, "focus", _handle_win_focus
      dom.detach win, "blur", _handle_win_blur
      for prop of scroll_parents_attached
        scr_handle = scroll_parents_attached[prop]
        if scr_handle
          clearTimeout scr_handle.tID  if scr_handle.tID
          dom.detach scroll_parents_attached[prop], SCROLL, scr_handle[ONSCROLL]
          scr_handle[ONSCROLL] = scr_handle.node = null
        scroll_parents_attached[prop] = null
        delete scroll_parents_attached[prop]
      win_events_attached = false
    return

  ###
  Handle the window message event, passed from raw event handling of the msghost code.
  Pass through the data to our format handling functions for expand, etc.
  
  @name $sf.host-_handle_msg_evt
  @static
  @private
  @function
  @param {String|Object} data the message to be handled
  @return {Boolean} return whether or not the message was handled
  ###
  _handle_msg_evt = (data) ->
    msgObj = undefined
    ret = false
    info = undefined
    msgObj = ParamHash(data, null, null, true, true)
    if msgObj and msgObj.pos
      info = rendered_ifrs[msgObj.pos]

      if info
        ret = switch msgObj.cmd
          when "exp-push"
            _expand_safeframe msgObj, true
            true
          when "exp-ovr"
            _expand_safeframe msgObj
            true
          when "collapse"
            _collapse_safeframe msgObj
            true
          when "msg"
            _fire_pub_callback POS_MSG, msgObj.pos, "msg", msgObj.msg
            true
          when ERROR_COMMAND
            _record_error msgObj
            true
          when NOTIFY_GEOM_UPDATE
            sf.lib.logger.log "Geom update complete: " + msgObj.pos
            true
          when "read-cookie"
            canRead = info.conf and info.conf.supports and info.conf.supports[msgObj.cmd] and info.conf.supports[msgObj.cmd] isnt "0"
            if canRead
              _read_cookie msgObj
              true
            else
              false
          when "write-cookie"
            canWrite = info.conf and info.conf.supports and info.conf.supports[msgObj.cmd] and info.conf.supports[msgObj.cmd] isnt "0"
            if canWrite
              _write_cookie msgObj
              true
            else
              false
    ret

  ###
  Check whether or not there are any SafeFrames being rendered
  
  @name $sf.host-_has_pending_renders
  @static
  @private
  @function
  ###
  _has_pending_renders = ->
    all_renders_done = true
    pos_id = undefined
    for pos_id of pending_ifrs
      all_renders_done = false
      break
    all_renders_done

  ###
  Send a response back down to the SafeFrame after a message was handled
  
  @name $sf.host-_send_response
  @private
  @static
  @function
  @param {$sf.lib.lang.ParamHash} params The parameters object stored for a rendered SafeFrame holding state information
  @param {$sf.lib.lang.ParamHash} msgObj The message to send back down into the SafeFrame
  ###
  _send_response = (params, msgObj) ->

    ###
    @ignore
    ###

    # we use a timeout here so that sending a response is asynchronus,just in case we got ping-pong messages 
    current_status = "sending-msg-down-" + msgObj.cmd
    setTimeout (->
      id = params and params.dest
      send_msg_to_child_iframe id, msgObj.toString()  if id and msgObj
      current_status = ""
      msgObj = id = params = null
      return
    ), XCOM_RESP_DELAY
    return

  ###
  Handle the onload event from the IFRAME tag created for a SafeFrame.
  Note that b/c we used our own library to create the IFRAME ($sf.lib.dom.iframes),
  the "this" keyword will now properly point to the IFRAME in question.
  
  @name $sf.host-_handle_frame_load
  @private
  @static
  @function
  ###
  _handle_frame_load = ->
    el = this
    pos_id = dom.attr(el, "_pos_id")
    all_renders_done = true
    if pending_ifrs[pos_id]
      clearTimeout pending_ifrs[pos_id]
      delete pending_ifrs[pos_id]

      complete_ifrs[pos_id] = pos_id
      dom.attr el, "_pos_id", null
      dom.attr el, "name", null
      el[ST].visibility = "inherit"
      el[ST].display = "block"
      _fire_pub_callback "onEndPosRender", pos_id
    current_status = ""  unless _has_pending_renders()
    return

  ###
  Build an extra IFRAME to put behind any iframe that is expanding, to protect
  against painting issues in IE with window'd mode flash.
  
  @name $sf.host-_shim_frame
  @private
  @static
  @function
  ###
  _shim_frame = (id, showIt, w, h, z) ->
    return  unless isIE
    ifr = _elt(id)
    shmID = "shm_" + id
    shmFrm = _elt(shmID)
    if showIt
      if shmFrm
        shmFrm[ST].visibility = "visible"
        return
      shmFrm = iframes.clone(ifr,
        id: shmID
        src: ""
        name: shmID
      , [
          WIDTH
          ":"
          w
          PX
          ";position:absolute;"
          HEIGHT
          ":"
          h
          PX
          ";z-index:"
          z - 1
          ";filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
        ])
      dom.append _par(ifr), shmFrm
    else shmFrm[ST].visibility = "hidden"  if not showIt and shmFrm
    return

  ###
  Build a geometry info object for a particular SafeFrame position, and also
  may attach an onscroll event listener to a parent HTML element if said parent element
  is scrollable but not the root document node / body
  
  @name $sf.host-_build_geom
  @private
  @static
  @function
  @return {Object} With information about the geometry around a given SafeFrame
  ###
  _build_geom = (posID, dest, dont_attach_scroll_evt) ->
    bounds = undefined
    info = ParamHash()
    details = {}
    scr_handle = undefined
    node = undefined
    new_ref_node = undefined
    ex = undefined
    s = undefined
    e = undefined
    try
      bounds = dom.bounds(dest, details, true)
      if not dont_attach_scroll_evt and not details.isRoot and details.canScroll
        ex = details.expRect
        if ex.xs or ex.ys
          scr_handle = scroll_parents_attached[posID]
          new_ref_node = details.refNode
          if scr_handle and scr_handle.node isnt new_ref_node
            clearTimeout scr_handle.tID  if scr_handle.tID
            dom.detach node, SCROLL, scr_handle[ONSCROLL]
            scr_handle.node = scr_handle[ONSCROLL] = null
            scroll_parents_attached[posID] = null
            delete scroll_parents_attached[posID]
          unless scroll_parents_attached[posID]
            scr_handle = {}
            scr_handle.node = new_ref_node

            ###
            @ignore
            ###
            scr_handle[ONSCROLL] = (evt) ->
              _handle_node_scroll evt, posID
              return

            scroll_parents_attached[posID] = scr_handle
            dom.attach new_ref_node, SCROLL, scr_handle[ONSCROLL]
    catch e
      info = null
    try
      if info
        info.win = ParamHash(dom.winRect())
        info.par = ParamHash(details.refRect)
        ex = ParamHash(details.expRect)
        s = ParamHash(details.rect)
        s.iv = ex.iv
        s.xiv = ex.xiv
        s.yiv = ex.yiv
        delete ex.iv

        delete ex.xiv

        delete ex.yiv

        info.exp = ex
        info.self = s
    catch e
      info = null
    info

  ###
  Expands a given SafeFrame based on a command from the 3rd party content
  
  @name $sf.host-_expand_safeframe
  @private
  @static
  @function
  @param {$sf.lib.lang.ParamHash} msgObj Details about how to do the expansion
  
  TODO, handle omni-directional and push
  ###
  _expand_safeframe = (msgObj, push) ->
    xn = false
    yn = false
    posID = (msgObj and msgObj.pos)
    params = undefined
    params_conf = undefined
    ifr = undefined
    par = undefined
    ifrSt = undefined
    parSt = undefined
    orWd = undefined
    orHt = undefined
    dx = undefined
    dy = undefined
    nWd = undefined
    nHt = undefined
    id = undefined
    t = undefined
    l = undefined
    r = undefined
    b = undefined
    exp = undefined
    z = undefined
    delta = undefined
    scr_handle = undefined
    return  unless posID
    params = rendered_ifrs[posID]
    params_conf = (params and params.conf)
    return  if not params or not params_conf
    id = params.dest
    ifr = _elt(id)
    par = _elt(POS_REL_BOX_ID_PREFIX + "_" + posID)
    return  if not ifr or not par
    ifrSt = ifr[ST]
    parSt = par[ST]
    return  unless ifrSt
    scr_handle = scroll_parents_attached[posID]
    clearTimeout scr_handle.tID  if scr_handle and scr_handle.tID
    _clear_geom_update_timer()
    exp = msgObj.exp_obj
    orWd = params_conf.w
    orHt = params_conf.h
    unless exp
      dx = params.dx = _cnum(msgObj.dx)
      dy = params.dy = _cnum(msgObj.dy)
      xn = (dx < 0)
      yn = (dy < 0)
      nWd = (if (xn) then (orWd + (dx * -1)) else (orWd + dx))
      nHt = (if (yn) then (orHt + (dy * -1)) else (orHt + dy))
    else
      t = _cnum(exp.t, 0, 0)
      l = _cnum(exp.l, 0, 0)
      r = _cnum(exp.r, 0, 0)
      b = _cnum(exp.b, 0, 0)
      nWd = _cnum(orWd + l + r, 0, 0)
      nHt = _cnum(orHt + t + b, 0, 0)
      if t
        dy = t * -1
        yn = true
      else
        dy = 0
      if l
        dx = l * -1
        xn = true
      else
        dx = 0
    return  if nWd <= orWd and nHt <= orHt
    return  if _fire_pub_callback(BF_POS_MSG, posID, EXPAND_COMMAND, dx, dy) #event canceled
    ifrSt[WIDTH] = nWd + PX
    ifrSt[HEIGHT] = nHt + PX
    ifrSt.left = dx + PX  if xn
    ifrSt.top = dy + PX  if yn
    z = _cnum(params.z, 0)
    z = DEFAULT_ZINDEX  unless z
    ifrSt.zIndex = z

    #Create Shim Iframe to avoid overlapping issues with controls in IE.
    _shim_frame id, true, nWd, nHt, z - 1
    if push
      parSt[WIDTH] = nWd + PX
      parSt[HEIGHT] = nHt + PX
    else
      parSt[WIDTH] = orWd + PX
      parSt[HEIGHT] = orHt + PX
    params.expanded = true
    msgObj.dx = dx
    msgObj.dy = dy
    msgObj.w = nWd
    msgObj.h = nHt
    msgObj.cmd = "expand"
    msgObj.geom = _es(_build_geom(posID, ifr, true))
    _fire_pub_callback POS_MSG, posID, EXPAND_COMMAND, dx, dy
    _send_response params, msgObj
    ifrSt = par = ifr = params = msgObj = null
    return

  ###
  Collapse a SafeFrame after it has been expanded
  
  @name $sf.host-_collapse_safeframe
  @private
  @static
  @function
  @param {$sf.lib.lang.ParamHash} msgObj The details about the message send from the SafeFrame to collapse
  @param {Boolean} [isOutside] Whether or not the collapse command came from the publisher
  @param {Boolean} [noMsging] Whether or not to send a message of response back to the SafeFrame being collapsed
  ###
  _collapse_safeframe = (msgObj, isOutside, noMsging) ->
    posID = (msgObj and msgObj.pos)
    params = (posID and rendered_ifrs[posID])
    params_conf = (params and params.conf)
    id = (params_conf and params_conf.dest)
    ifr = (id and _elt(id))
    par = (ifr and _elt(POS_REL_BOX_ID_PREFIX + "_" + posID))
    ifrSt = (ifr and ifr[ST])
    parSt = (par and par[ST])
    scr_handle = undefined
    return  if not posID or not params or not ifr or not par
    return  unless params.expanded
    scr_handle = scroll_parents_attached[posID]
    clearTimeout scr_handle.tID  if scr_handle and scr_handle.tID
    _clear_geom_update_timer()
    return  if _fire_pub_callback(BF_POS_MSG, posID, COLLAPSE_COMMAND, 0, 0)  unless noMsging
    ifrSt.left = ifrSt.top = "0px"
    parSt[WIDTH] = ifrSt[WIDTH] = params_conf.w + PX
    parSt[HEIGHT] = ifrSt[HEIGHT] = params_conf.h + PX
    ifrSt.zIndex = params.dx = params.dy = 0
    _shim_frame id
    unless noMsging
      _fire_pub_callback POS_MSG, posID, COLLAPSE_COMMAND, 0, 0
      msgObj.cmd = (if (isOutside) then "collapsed" else "collapse")
      msgObj.geom = _es(_build_geom(posID, ifr, true))
      _send_response params, msgObj
    ifr = ifrSt = par = parSt = params = msgObj = null
    return

  ###
  Records a reported error message to $sf.info.errors and fires any listeners
  
  @name $sf.host-_record_error
  @private
  @static
  @function
  @param {$sf.lib.lang.ParamHash} msgObj The details about the message send from the SafeFrame having an error
  ###
  _record_error = (msgObj) ->
    posID = (msgObj and msgObj.pos)
    params = (posID and rendered_ifrs[posID])
    params_conf = (params and params.conf)
    id = (params_conf and params_conf.dest)
    ifr = (id and _elt(id))
    par = (ifr and _elt(POS_REL_BOX_ID_PREFIX + "_" + posID))
    ifrSt = (ifr and ifr[ST])
    parSt = (par and par[ST])
    scr_handle = undefined
    sf.info.errs.push msgObj  if sf and sf.info and sf.info.errs
    _fire_pub_callback POS_MSG, posID, ERROR_COMMAND, msgObj
    return

  ###
  Returns the current document cookies as a hash
  @name $sf.lib._cookieHash
  @private
  @static
  @function
  @returns {Object}
  ###
  _cookieHash = ->
    cooks = undefined
    key = undefined
    i = undefined
    cookies = {}
    c = undefined
    cooks = document.cookie.split("; ")
    i = cooks.length - 1
    while i >= 0
      c = cooks[i].split("=")
      cookies[c[0]] = c[1]
      i--
    cookies

  ###
  Read a host domain cookie
  
  @name $sf.host-_read_cookie
  @private
  @static
  @function
  @param {$sf.lib.lang.ParamHash} msgObj The details about the message send from the SafeFrame
  @param {Boolean} [isOutside] Whether or not the read-cookie command came from the publisher
  ###
  _read_cookie = (msgObj, isOutside) ->
    posID = (msgObj and msgObj.pos)
    params = (posID and rendered_ifrs[posID])
    params_conf = (params and params.conf)
    id = (params_conf and params_conf.dest)
    ifr = (id and _elt(id))
    key = undefined
    cookies = undefined
    command = "read-cookie"
    canRead = params_conf.supports and params_conf.supports[command] and params_conf.supports[command] isnt "0"
    return  unless canRead
    return  if not posID or not params or not ifr
    key = msgObj.cookie
    return  unless key
    cookies = _cookieHash()
    _fire_pub_callback POS_MSG, command, posID, 0, 0
    msgObj.cmd = command
    msgObj.geom = _es(_build_geom(posID, ifr, true))
    msgObj.value = cookies[key]
    _send_response params, msgObj
    ifr = params = msgObj = null
    return

  ###
  Write a host domain cookie
  
  @name $sf.host-_write_cookie
  @private
  @static
  @function
  @param {$sf.lib.lang.ParamHash} msgObj The details about the message send from the SafeFrame
  @param {Boolean} [isOutside] Whether or not the write-cookie command came from the publisher
  ###
  _write_cookie = (msgObj, isOutside) ->
    posID = (msgObj and msgObj.pos)
    params = (posID and rendered_ifrs[posID])
    params_conf = (params and params.conf)
    id = (params_conf and params_conf.dest)
    ifr = (id and _elt(id))
    key = undefined
    newValue = undefined
    cookies = undefined
    newCookies = undefined
    command = "write-cookie"
    canRead = params_conf.supports and params_conf.supports[command] and params_conf.supports[command] isnt "0"
    return  unless canRead
    return  if not posID or not params or not ifr
    key = msgObj.cookie
    return  unless key
    newValue = escape(msgObj.value)
    exdate = new Date()
    exdate.setDate exdate.getDate() + 1
    c_value = newValue + "; expires=" + exdate.toUTCString()
    document.cookie = key + "=" + c_value
    _fire_pub_callback POS_MSG, command, posID, 0, 0
    msgObj.cmd = command
    msgObj.geom = _es(_build_geom(posID, ifr, true))
    msgObj.info = newValue
    msgObj.value = ""
    _send_response params, msgObj
    ifr = params = msgObj = null
    return

  ###
  Remove / destroy one or more SafeFrames from the publisher page
  
  @name $sf.host.nuke
  @static
  @function
  @public
  @param {String} pos_id* One or more position ids to remove from the page. If no arguments are specifed, all positions currently rendered are removed.
  ###
  nuke = ->
    idx = 0
    empty = true
    args = arguments
    pos_id = undefined
    pos = undefined
    el_id = undefined
    el = undefined
    sb_rel = undefined
    par = undefined
    if not args[LEN] or args[idx] is "*"
      args = []
      for pos_id of rendered_ifrs
        args.push pos_id
    while pos_id = args[idx++]
      pos = rendered_ifrs[pos_id]
      if pos
        if pos_id of pending_ifrs
          clearTimeout pending_ifrs[pos_id]
          delete pending_ifrs[pos_id]
        delete complete_ifrs[pos_id]  if pos_id of complete_ifrs
        el_id = pos.dest
        el = (el_id and _elt(el_id))
        par = (el and _par(el))
        unless dom.attr(par, "id").indexOf(POS_REL_BOX_ID_PREFIX) is -1
          sb_rel = par
          par = _par(sb_rel)
        dom.purge el
        dom.purge sb_rel  if sb_rel
        rendered_ifrs[pos_id] = null
        delete rendered_ifrs[pos_id]

        el = dom.make("div")
        dom.attr el, "id", el_id
        dom.append par, el
    pos_id = ""
    for pos_id of rendered_ifrs
      empty = false
      break
    if empty
      current_status = ""
      _handle_unload()
    return

  ###
  Render one or more $sf.host.Position objects into the page
  
  @name $sf.host.render
  @public
  @static
  @function
  @param {$sf.host.Position} pos* An instance of an $sf.host.Position object to render. Note that said object must have a corresponding $sf.host.PosConfig, as well as $sf.host.Config must have been set
  ###
  render = ->
    idx = 0
    args = arguments
    firstCSSPos = "relative"
    finalCSSPos = "absolute"
    finalCSSEnd = "top:0px;left:0px;visibility:hidden;display:none;"
    pos = undefined
    pos_id = undefined
    pos_conf = undefined
    dest_el = undefined
    new_dest_el = undefined
    rel_el = undefined
    par_el = undefined
    name_params = undefined
    dest_id = undefined
    dest_rel_id = undefined
    css_txt = undefined
    w = undefined
    h = undefined
    st = undefined
    e = undefined
    pend = undefined
    return false  unless config
    unless dom.ready()
      dom.wait ->
        render.apply null, args
        args = null
        return

      return null

    # if an array of positions is handed in use that instead 
    args = args[0]  if (args[0] instanceof Array) and args[LEN] is 1
    while pos = args[idx++]
      pos_id = pos.id
      pos_conf = (if (pos_id) then config.positions[pos_id] else null)
      if pos_conf
        dest_id = pos_conf.dest
        dest_el = dest_id and _elt(dest_id)
        if dest_el
          w = pos_conf.w
          h = pos_conf.h
          unless w
            try
              w = dest_el.offsetWidth
            catch e
              w = 0
            pos_conf.w = w  if w
          unless h
            try
              h = dest_el.offsetHeight
            catch e
              h = 0
            pos_conf.h = h  if h
          if w and h
            name_params = new ParamHash()
            dest_rel_id = POS_REL_BOX_ID_PREFIX + "_" + pos_id
            rel_el = _elt(dest_rel_id)
            par_el = _par(dest_el)
            par_el = _par(rel_el)  if rel_el and par_el is rel_el
            _shim_frame dest_id

            ###
            @ignore
            ###
            pend = pending_ifrs[pos_id]
            clearTimeout pend  if pend
            pend = complete_ifrs[pos_id]
            delete complete_ifrs[pos_id]  if pend
            pending_ifrs[pos_id] = setTimeout(->
              _handle_render_timeout pos_id
              return
            , config.to)
            current_status = "rendering"
            _fire_pub_callback "onStartPosRender", pos_id, pos_conf, pos
            css_txt = [
              "position:"
              ""
              ";z-index:0;"
              WIDTH
              ":"
              w
              PX
              ";"
              HEIGHT
              ":"
              h
              PX
              ";"
              "visibility:inherit;"
            ]
            unless rel_el
              css_txt[1] = firstCSSPos
              rel_el = dom.make("div")
              rel_el.id = dest_rel_id
              rel_el.className = "iab_sf"
              new_dest_el = dest_el.cloneNode(false)
              dom.css new_dest_el, css_txt
              rel_el.appendChild new_dest_el
              dom.css rel_el, css_txt
              par_el.replaceChild rel_el, dest_el
              dest_el = _elt(dest_id)
            else

              #Make sure to set container to right geometry in case the pos config changed
              st = rel_el[ST]
              st.width = w + PX
              st.height = h + PX
              st = (dest_el and dest_el[ST])
              st.width = w + PX
              st.height = h + PX
            name_params.id = pos_id
            name_params.dest = dest_id
            name_params.conf = ParamHash(pos_conf)
            name_params.meta = pos.meta.toString()
            name_params.html = _es(pos.html)
            name_params.geom = _es(_build_geom(pos_id, dest_el))
            name_params.src = config.renderFile
            name_params.has_focus = lang.cstr(document.hasFocus())
            css_txt[1] = finalCSSPos
            css_txt[13] = finalCSSEnd
            unless win_events_attached
              dom.attach win, SCROLL, _handle_win_geom_scroll
              dom.attach win, "resize", _handle_win_geom_resize
              dom.attach win, "unload", _handle_unload
              dom.attach win, "focus", _handle_win_focus
              dom.attach win, "blur", _handle_win_blur
              win_events_attached = true
            iframes.replace
              id: dest_id
              name: name_params
              src: config.renderFile
              _pos_id: pos_id
            , css_txt, rel_el, _handle_frame_load, _handle_msg_evt
            rendered_ifrs[pos_id] = name_params
    return

  ###
  Gets a copy of the Position configuration, content, and meta data for a given SafeFrame
  
  @name $sf.host.get
  @public
  @function
  @static
  @return {Object}
  ###
  get = (positionId) ->
    obj = rendered_ifrs[positionId]
    return null  unless obj
    _mix {}, obj

  ###
  Returns a string as to whether or not the library is busy, empty string is returned on idle
  
  @name $sf.host.status
  @public
  @function
  @static
  @return {String}
  ###
  status = ->
    current_status


  if lang
    if win is top

      #
      #			 * We got rid of the concept of a "host" file, and just put everything library wise for the host
      #			 * side into the main host file since it will save us some bytes
      #			 *
      #			
      _rect = (if (ieVer) then _getRectIE else _getRectNonIE)
      _mix dom,
        rect: _rect
        currentStyle: currentStyle
        contains: contains
        docRect: docRect
        winRect: winRect
        bounds: bounds
        overlaps: overlaps

      ###
      @ignore
      ###
      (->
        e = undefined
        dom.msghost =
          prep: prep_iframe_msging
          attach: attach_iframe_msging
          detach: detach_iframe_msging
          usingHTML5: usingHTML5
          send: send_msg_to_child_iframe
        dom[ATTACH] win, MSG, _check_html5_init
        initID = "xdm-html5-init-" + _guid()
        locHost = (if (locHost.indexOf("file") is 0) then locHost = "file" else locHost)
        try
          win[PMSG] initID, (if (locHost is "file") then "*" else locHost)
        catch e
          dom[DETACH] win, MSG, _check_html5_init
        return
      )()
      _mix sf.host,
        Config: Config
        PosConfig: PosConfig
        PosMeta: PosMeta
        Position: Position
        nuke: nuke
        get: get
        render: render
        status: status
  sf