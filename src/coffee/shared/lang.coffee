define ->

  next_id = 0
  win = window #one reference to win
  backSlash = String.fromCharCode(92)
  scrip_str				= 'scr"+"ipt'
  _es     					=  win.escape
  _ue     					= win.unescape
  ###
  A function reference that does nothing.

  @memberOf $sf.lib.lang
  @exports noop as $sf.lib.lang.noop
  @static
  @function
  @public
  @return undefined
  ###
  noop = ->

    ###
    Forces type conversion of any JavaScript variable to a string value.
    Note that "falsy" values or values that cannot be converted will be returned
    as an empty string ("").

    @memberOf $sf.lib.lang
    @exports cstr as $sf.lib.lang.cstr
    @static
    @public
    @function
    @param {*} str  Any object that needs to be converted to a string value.
    @return {String}  The normalized string value.
    ###
  cstr = (str) ->
    typ = typeof str
    return str  if typ is "string"
    return "0"  if typ is "number" and not str
    return str.join("")  if typ is "object" and str and str.join
    (if (str) then String(str) else "")

  ###
  Forces type conversion of any JavaScript variable to a boolean.
  "Falsy" values such as "", 0, null, and undefined all return false
  String values of  "0", "false", "no", "undefined", "null" also return false

  @memberOf $sf.lib.lang
  @exports cbool as $sf.lib.lang.cbool
  @static
  @public
  @function
  @param {*} val Any JavaScript reference / value
  @return {Boolean} The normalized boolean value
  ###
  cbool = (val) ->
    not val or [undefined,"0","false","no","undefined","null",null].indexOf(val)>=0


  ###
  Forces type conversion of any JavaScript variable to a number.
  Values / objects that cannot be converted, will be returned as NaN, unless
  a default value is specified, in which case the default value is used.

  @memberOf $sf.lib.lang
  @exports cnum as $sf.lib.lang.cnum
  @static
  @public
  @function
  @param {*} val Any JavaScript reference / value
  @param {*} [defVal] use this value if original value cannot be converted to a number, or if value is less than min value, or if value is less than max value.
  @param {Number} [minVal] specifies the lowest numerical value, if original value is less than this value, the defVal will be returned.
  @param {Number} [maxVal] specifies the greatest numerical value, if original value is greater than this value, the defVal will be returned.
  @return {Number|NaN|*} the converted value, otherwise NaN or default value
  ###
  cnum = (val, defVal, minVal, maxVal) ->
    unless typeof val is "number"
      try
        unless val
          val = Number.NaN
        else
          val = parseFloat(val)
      catch e
        val = Number.NaN
    maxVal = Number.MAX_VALUE  unless maxVal?
    minVal = -Number.MAX_VALUE  unless minVal?
    (if ((isNaN(val) or val < minVal or val > maxVal) and defVal?) then defVal else val)

  ###
  Checks that a function reference can be called safely.  Sometimes function references are part
  of objects that may have been garbage collected (such as a function reference from another window or dom element).
  This method checks the reference by making sure it has a constructor and toString properties.

  Note that this doesn't mean that the function itself when called (or its subsquent call stack), can't throw an error. . .
  simply that you are able to call it. . .

  this can problem be removed in lieu of func?() in cs

  @memberOf $sf.lib.lang
  @exports callable as $sf.lib.lang.callable
  @static
  @public
  @function
  @param {Function} A reference to a JavaScript function
  @return {Boolean} true if function can be called safely, otherwise false.
  ###
  callable = (f) ->
    try
      f = (if (f and typeof f is "function" and f.toString() and (new f.constructor())) then f else null)
    catch e
      f = null
    !!(f)

  ###
  Generate a unique id string

  @memberOf $sf.lib.lang
  @exports guid as $sf.lib.lang.guid
  @static
  @public
  @function
  @param {String} [prefix] a substring to use a prefix
  @return {String} unique id string
  ###
  guid = (prefix) ->
    cstr [
      prefix or ""
      "_"
      time()
      "_"
      rand()
      "_"
      next_id++
    ]

  ###
  Mixed the properties of one object into another object.
  Note that this function is recursive



  @memberOf $sf.lib.lang
  @exports mix as $sf.lib.lang.mix
  @static
  @public
  @function
  @param {Object}  r  The object that will receive properties
  @param {Object}  s  The object that will deliever properties
  @param {Boolean} [owned] Whether or not to skip over properties that are part of the object prototype
  @param {Boolean} [skipFuncs] Whether or not to skip over function references
  @param {Boolean} [no_ovr] Whether or not to overwrite properties that may have already been filled out
  @return {Object} The receiver object passed in with potentially new properties added
  ###
  mix = (r, s, owned, skipFuncs, no_ovr) ->
    return r  if not s or not r
    for p of s
      item = s[p]
      typ = typeof item
      continue  if owned and not s.hasOwnProperty(p)
      continue  if no_ovr and (p of r)
      continue  if skipFuncs and typ is "function"
      if typ is "object" and item
        if item.slice
          item = mix([], item)
        else
          item = mix({}, item)
      r[p] = item
    r

  ###
  Return the current time in milliseconds, from the epoch

  @memberOf $sf.lib.lang
  @exports time as $sf.lib.lang.time
  @public
  @function
  @static
  @return {Number} current time
  ###
  time = ->
    (new Date()).getTime()

  ###
  Return a random integer anywhere from 0 to 99

  @memberOf $sf.lib.lang
  @exports rand as $sf.lib.lang.rand
  @public
  @static
  @function
  @return {Number} random number
  ###
  rand = ->
    Math.round Math.random() * 100

  ###
  Trim the begining and ending whitespace from a string.
  Note that this function will convert an argument to a string first
  for type safety purposes. If string cannot be converted, and empty string is returned

  @memberOf $sf.lib.lang
  @exports trim as $sf.lib.lang.trim
  @return {String} trimmed string
  @public
  @function
  @static
  ###
  trim = (str) ->
    ret = cstr(str)
    ret and ret.replace(/^\s\s*/, "").replace(/\s\s*$/, "")


  #may want to get rid of this....
  ###
  Define a JavaScript Namespace within a given context

  @memberOf $sf.lib.lang
  @exports def as $sf.lib.lang.def
  @param {String} str_ns  The name of the namespace in dot notation as a string (e.g. "Foo.bar")
  @param {Object} [aug] defines the object at the end of the namespace.  If namespace is already specified, and this object is provided, the namespace will be augmented with properties from this object. If nothing is passed in, defaults to using an empty object.
  @param {Object} [root] the root object from which the namespace is defined.  If not passed in defaults to the global/window object
  @param {Boolean} [no_ovr] if true, properties already defined on root with the same name will be ignored
  @public
  @function
  @static
  @return {Object} The object at the end of the namespace
  ###
  def = (str_ns, aug, root, no_ovr) ->
    obj = (if (root and typeof root is "object") then root else win)
    idx = 0
    per = "."
    ret = null
    if str_ns
      str_ns = cstr(str_ns)
      aug = (if (aug and typeof aug is "object") then aug else null)
      if str_ns.indexOf(per)
        ar = str_ns.split(per)
        while item = ar[idx++]
          item = trim(item)
          if idx is ar.length
            if obj[item] and aug
              ret = obj[item] = mix(obj[item], aug, false, null, no_ovr)
            else
              if no_ovr and (item of obj)
                ret = obj[item]
              else
                ret = obj[item] = obj[item] or aug or {}
          else
            if no_ovr and (item of obj)
              ret = obj[item]
            else
              ret = obj[item] = obj[item] or {}
          obj = obj[item]
      else
        if obj[str_ns] and aug
          ret = obj[str_ns] = mix(obj[str_ns], aug, false, null, no_ovr)
        else
          ret = obj[str_ns] = obj[str_ns] or aug or {}
    ret

  ###
  Checks for the existence of a JavaScript namespace
  as opposed to def, which will automatically define the namespace
  with a given context.

  @memberOf $sf.lib.lang
  @exports ns as $sf.lib.lang.ns
  @param {String} str_ns  A string with . or [] notation of a JavaScript namesace (e.g. "foo.bar.show", or "foo['bar']['show']").
  @param {Object} [root] the root object to check within. .defaults to global / window
  @return {*} The endpoint reference of the namespace or false if not found
  @public
  @function
  @static
  ###
  ns = (str_ns, root) ->
    exp = /(\[(.{1,})\])|(\.\w+)/g
    exp2 = /\[(('|")?)((\s|.)*?)(('|")?)\]/g
    exp3 = /(\[.*)|(\..*)/g
    exp4 = /\./g
    idx = 0
    rootStr = ""
    exists = true
    obj = root = root or win
    if str_ns
      str_ns = cstr(str_ns)
      if str_ns
        str_ns = trim(str_ns)
        matches = str_ns.match(exp)
        if matches
          rootStr = str_ns.replace(exp3, "")
          matches.unshift rootStr
          while prop = matches[idx++]
            prop = prop.replace(exp2, "$3").replace(exp4, "")
            unless obj[prop]
              exists = false
              break
            obj = obj[prop]
        else
          prop = str_ns
          obj = obj[prop]
      else
        exists = false
    else
      exists = false
    (exists and obj) or false

  ###
  @function
  Tests to see if the object passed in is an array
  ###
  isArray = (obj) ->
    return false  unless obj?
    return false  if typeof obj is "string"
    return true  if obj.length? and obj.constructor is Array
    false


  ###
  Returns an escaped backslash for processing strings with HTML or JavaScript content

  @name $sf.lib.lang-_escaped_backslash
  @function
  @static
  @private
  ###
  _escaped_backslash = ->
    backSlash + backSlash

  ###
  Returns an escaped double-quote for processing strings with HTML or JavaScript content

  @name $sf.lib.lang-_escaped_dbl_quote
  @function
  @static
  @private
  ###
  _escaped_dbl_quote = ->
    backSlash + '"'

  ###
  Returns an escaped return character for processing strings with HTML or JavaScript content

  @name $sf.lib.lang-_escaped_return
  @function
  @static
  @private
  ###
  _escaped_return = ->
    "\\r"

  ###
  Returns an escaped new line character for processing strings with HTML or JavaScript content

  @name $sf.lib.lang-_escaped_new_line
  @function
  @static
  @private
  ###
  _escaped_new_line = ->
    "\\n"

  ###
  Returns a seperated SCRIPT tag ("<script>" becomes "<scr"+"ipt>") for processing strings with HTML or JavaScript content
  Assumes a regular expression of: /<(\/)*script([^>]*)>/gi

  @name $sf.lib.lang-_escaped_new_line
  @function
  @static
  @private
  ###
  _safe_script_tag = (main_match, back_slash, attrs) ->
    cstr [
      "<"
      back_slash
      scrip_str
      attrs
      ">"
    ]

  ###
  Given a string of HTML escape quote marks and seperate script tags so that browsers don't get tripped up
  during processing.

  @memberOf $sf.lib.lang
  @exports jssafe_html as $sf.lib.lang.jssafe_html
  @param {String} str A string of HTML markup to be processed
  @return {String}
  @function
  @static
  @public
  ###
  jssafe_html = (str) ->
    new_str = cstr(str)
    if new_str
      new_str = new_str.replace(/(<noscript[^>]*>)(\s*?|.*?)(<\/noscript>)/g, "")
      new_str = new_str.replace(/\\/g, _escaped_backslash)
      new_str = new_str.replace(/\"/g, _escaped_dbl_quote)
      new_str = new_str.replace(/\n/g, _escaped_new_line)
      new_str = new_str.replace(/\r/g, _escaped_return)
      new_str = new_str.replace(/<(\/)*script([^>]*)>/g, _safe_script_tag)
      new_str = new_str.replace(/\t/g, " ")
      new_str = cstr([
        dbl_quote
        new_str
        dbl_quote
      ])
      new_str = dbl_quote + new_str + dbl_quote
    new_str

  #todo refactor this to json

  ###
  @class Intantiable class used to convert a delimited string into an object.<br />
  For example querystrings: "name_1=value_1&name_2=value_2" ==> {name_1:value_1,name_2:value_2};<br/><br />

  Note that property values could also contain the same sPropDelim and sValueDelim strings.  Proper string encoding should occur
  to not trip up the parsing of the string.  Said values may be ascii escaped, and in turn, along with the <i><b>bRecurse</b></i> constructor parameter set to true, will cause nested ParamHash objects to be created.

  @constructor
  @memberOf $sf.lib.lang
  @exports ParamHash as $sf.lib.lang.ParamHash
  @param {String} [sString]  The delimited string to be converted
  @param {String} [sPropDelim="&"]  The substring delimiter used to seperate properties. Default is "&".
  @param {String} [sValueDelim="="]  The substring delimited used to seperate values.  Default is "=".
  @param {Boolean} [bNoOverwrite=false]  If true, when a name is encountered more than 1 time in the string it will be ignored.
  @param {Boolean} [bRecurse=false]  If true, when a value of a property that is parsed also has both the sPropDelim and sValueDelim inside, convert that value to another ParamHash object automatically
  @example
  var ph = new $sf.lib.lang.ParamHash("x=1&y=1&z=1");
  alert(ph.x); // == 1
  alert(ph.y); // == 1
  alert(ph.z); // == 1

  @example
  var ph = new $sf.lib.lang.ParamHash("x:1;y:2;z:3", ";", ":");
  alert(ph.x); // == 1
  alert(ph.y); // == 2
  alert(ph.z); // == 3

  @example
  var ph = new $sf.lib.lang.ParamHash("x=1&y=1&z=1&z=2");
  alert(ph.x); // == 1
  alert(ph.y); // 1
  alert(ph.z); //Note that z == 2 b/c of 2 properties with the same name

  @example
  var ph = new $sf.lib.lang.ParamHash("x=1&y=1&z=1&z=2",null,null,true); //null for sPropDelim and sValueDelim == use default values of "&" and "=" respectively
  alert(ph.x); // == 1
  alert(ph.y); // 1
  alert(ph.z); //Note that z == 1 b/c bNoOverwrite was set to true

  @example
  //You can also do recursive processing if need be
  var points	= new $sf.lib.lang.ParamHash(),
  point_1	= new $sf.lib.lang.ParamHash(),
  point_2	= new $sf.lib.lang.ParamHash();

  point_1.x = 100;
  point_1.y = 75;

  point_2.x = 200;
  point_2.y = 150;

  points.point_1	= point_1;
  points.point_2	= point_2;

  var point_str	= points.toString();  // == "point_1=x%3D100%26y%3D75%26&point_2=x%3D200%26y%3D150%26&";
  var points_copy	= new $sf.lib.lang.ParamHash(point_str, null, null, true, true); //note passing true, b/c we want to recurse

  alert(points_copy.point_1.x) // == "100";
  ###
  ParamHash = (sString, sPropDelim, sValueDelim, bNoOverwrite, bRecurse) ->
    me = this
    io = "indexOf"
    ss = "substring"
    doAdd = false
    return new ParamHash(sString, sPropDelim, sValueDelim, bNoOverwrite, bRecurse)  unless me instanceof ParamHash
    return me  unless arguments.length
    return mix(new ParamHash("", sPropDelim, sValueDelim, bNoOverwrite, bRecurse), sString)  if sString and typeof sString is "object"
    sString = cstr(sString)
    sPropDelim = cstr(sPropDelim) or "&"
    sValueDelim = cstr(sValueDelim) or "="
    return me  unless sString
    sString = sString[ss](1)  if sPropDelim isnt "?" and sValueDelim isnt "?" and sString.charAt(0) is "?"
    idx = sString[io]("?")
    idx2 = sString[io](sValueDelim)
    if idx isnt -1 and idx2 isnt -1 and idx > idx2
      sTemp = _es(sString[ss](idx2 + 1))
      sTemp2 = sString.substr(0, idx2 + 1)
      sString = sTemp2 + sTemp
    else unless idx is -1
      sString = sString[ss](idx + 1)
      return new ParamHash(sString, sPropDelim, sValueDelim, bNoOverwrite)
    sString = sString[ss](1)  if sString.charAt(0) is sPropDelim
    pairs = sString.split(sPropDelim)
    cnt = pairs.length
    idx = 0
    while cnt--
      sTemp = pairs[idx++]
      added = false
      doAdd = false
      if sTemp
        nv = sTemp.split(sValueDelim)
        len = nv.length
        if len > 2
          nm = _ue(nv[0])
          nv.shift()
          if bRecurse

            # Its possible that someone screws up and doesn't have a value encoded properly and but have multiple delimiters
            #							 * As if recursion was going to take place. So here we know that's the case and try to handle it if we can detect
            #							 * the end points as well
            #
            sTemp2 = nm + sValueDelim
            idx2 = sString[io](sTemp2)
            len = sTemp2[LEN]
            sTemp3 = sString[ss](idx2 + len)
            sTemp2 = sPropDelim + sPropDelim
            len2 = sTemp2[LEN]
            idx3 = sTemp3[io](sTemp2)
            unless idx3 is -1
              sTemp3 = sString.substr(idx2 + len, idx3 + len2)
              obj = new ParamHash(sTemp3, sPropDelim, sValueDelim, bNoOverwrite, bRecurse)
              sTemp3 = ""
              len = 0
              for sTemp3 of obj
                continue
              idx += (len - 1)  if len > 0
              sTemp = obj
            else
              sTemp = _ue(nv.join(sValueDelim))
          else
            sTemp = _ue(nv.join(sValueDelim))
          doAdd = true
        else if len is 2
          nm = _ue(nv[0])
          sTemp = _ue(nv[1])
          doAdd = true
        if doAdd
          if bNoOverwrite
            unless nm of me
              me[nm] = sTemp
              added = true
          else
            me[nm] = sTemp
            added = true
          me[nm] = new ParamHash(sTemp, sPropDelim, sValueDelim, bNoOverwrite, bRecurse)  if bRecurse and added and nm and sTemp and typeof sTemp isnt "object" and (sTemp[io](sPropDelim) >= 0 or sTemp[io](sValueDelim) >= 0)
    return

  #
  #		 * This internal function is used for the valueOf / toString methods of our ParamHash class.
  #		 *
  #

  ###
  Converts a ParamHash object back into a string using the property and value delimiters specifed (defaults to "&" and "=").
  Again this method works recursively.  If an object is found as a property, it will convert that object into a ParamHash string
  and then escape it. Note also that this class's valueOf method is equal to this method.

  @methodOf ParamHash#
  @public
  @function
  @param {String} [sPropDelim="&"]  The substring delimiter used to seperate properties. Default is "&".
  @param {String} [sValueDelim="="]  The substring delimited used to seperate values.  Default is "=".
  @param {Boolean} [escapeProp=false] Whether or not to ascii escape the name of a property
  @param {Boolean} [dontEscapeValue=false] Do not escape values or properties automatically
  @return {String} the encoded string representation of the object.
  ###
  toString = (sPropDelim, sValueDelim, escapeProp, dontEscapeValue) ->
    prop = undefined
    buffer = []
    me = this
    itemType = undefined
    item = undefined
    sPropDelim = sPropDelim or "&"
    sValueDelim = sValueDelim or "="
    for prop of me
      item = me[prop]
      itemType = typeof item
      continue  if item and itemType is "function"
      if item and itemType is "object"
        item = toString.apply(item, [
          sPropDelim
          sValueDelim
          escapeProp
          dontEscapeValue
        ])
      prop = _es(prop)  if escapeProp
      item = _es(item)  unless dontEscapeValue
      buffer.push prop, sValueDelim, item, sPropDelim
    cstr buffer
  proto = ParamHash::

  ###
  @ignore
  ###
  proto.toString = proto.valueOf = toString


  ParamHash: ParamHash
  cstr: cstr
  cnum: cnum
  cbool: cbool
  noop: noop
  trim: trim
  callable: callable
  guid: guid
  mix: mix
  time: time
  rand: rand
  def: def
  ns: ns
  jssafe_html: jssafe_html
  isArray: isArray
