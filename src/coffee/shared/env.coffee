define ["lang"],(lang) ->
  win = window
  navigator = window.navigator
  theDocument = window.document
  userAgent	= navigator?.userAgent || ""
  isIE11 						= !(window.ActiveXObject) && "ActiveXObject" in window
  isIE						= !isIE11 && (win && ("ActiveXObject" in win))
  cached_ua					= null

  ua = (->
    ###
    Convert a version string into a numeric value

    @name $sf.env.ua-_numberify
    @static
    @private
    @function
    @param {String} s The string representing a version number (e.g. 'major.minor.revision')
    @returns {Number}
    ###
    _numberify = (s) ->
      c = 0
      parseFloat s.replace(/\./g, ->
        (if (c++ is 1) then "" else ".")
      )

    ###
    Wrapper method for returning values from a regular expression match safely.

    @name $sf.env.ua-_matchIt
    @static
    @private
    @function
    @param {String} str The string to match against
    @param {RegExp} regEx The regular expression to use for matching
    @param {Number} [idx] The index number of a match to pull from
    @returns {String}
    ###
    _matchIt = (str, regEx, idx) ->
      m = str and str.match(regEx)
      (if (not (idx?)) then m else ((m and m[idx]) or null))

    ###
    Wrapper method for testing a string against a regular expression

    @name $sf.env.ua-_testIt
    @static
    @private
    @function
    @param {RegExp} regEx The regular expression to test with
    @param {String} str The string to test against
    @param {Boolean}
    ###
    _testIt = (regEx, str) ->
      regEx.test str

    ###
    Parse a user-agent string from the browser and gather pertinent browser, and OS information

    @name $sf.env.ua.parse
    @static
    @public
    @function
    @param {String} [subUA] An alternate user-agent string to parse. If no valid string is passed in, function will return an object based on the known user-agent
    @returns {Object} <b>parsed</b> Browser and OS information<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.ie  The major version number of the Internet Explorer browser being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.opera The major version number of the Opera browser being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.gecko The major version number of the Gecko (Firefox) browser being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.webkit The major version number of the WebKit browser being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.safari The major version number of the Safari browser being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.chrome The major version number of the Chrome browser being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.air The major version number of the AIR SDK being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.ipod Whether or not an iPod device is being used 1 for true, 0 for false.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.ipad Whether or not an iPad device is being used 1 for true, 0 for false.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.iphone Whether or not an iPhone device is being used 1 for true, 0 for false.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.android The major version number of the Android OS being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.webos The major version number of the WebOS being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.silk The major version number of the Silk browser being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.nodejs The major version number of the NodeJS environment being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.phantomjs The major version number of the PhantomJS environment being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {String} <b>parsed</b>.mobile A string representing whether or not the browser / os is a mobile device  and it's type. Possible values are 'windows', 'android', 'symbos', 'linux', 'macintosh', 'rhino', 'gecko', 'Apple', 'chrome'.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.ios The major version number of the iOS being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Boolean} <b>parsed</b>.accel Whether or not the browser / environment in question is hardware accelerated.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @returns {Number} <b>parsed</b>.cajaVersion The major version number of the CAJA environment or 0 if not.
    ###
    parse_ua = (subUA) ->
      ret = {}
      date = new Date()
      return cached_ua  if not subUA and cached_ua
      ret.ie = ret.opera = ret.gecko = ret.webkit = ret.safari = ret.chrome = ret.air = ret.ipod = ret.ipad = ret.iphone = ret.android = ret.webos = ret.silk = ret.nodejs = ret.phantomjs = 0
      ret.mobile = ret.ios = ret.os = null
      ret.accel = false
      ret.caja = navigator and navigator.cajaVersion
      ret.cks = false
      subUA = subUA or userAgent or ""
      if subUA
        if _testIt(/windows|win32/i, subUA)
          ret.os = "windows"
        else if _testIt(/macintosh|mac_powerpc/i, subUA)
          ret.os = "macintosh"
        else if _testIt(/android/i, subUA)
          ret.os = "android"
        else if _testIt(/symbos/i, subUA)
          ret.os = "symbos"
        else if _testIt(/linux/i, subUA)
          ret.os = "linux"
        else ret.os = "rhino"  if _testIt(/rhino/i, subUA)

        # Modern KHTML browsers should qualify as Safari X-Grade
        ret.webkit = 1  if _testIt(/KHTML/, subUA)
        ret.mobile = "windows"  if _testIt(/IEMobile|XBLWP7/, subUA)
        ret.mobile = "gecko"  if _testIt(/Fennec/, subUA)

        # Modern WebKit browsers are at least X-Grade
        match = _matchIt(subUA, /AppleWebKit\/([^\s]*)/, 1)
        if match
          ret.webkit = _numberify(match)
          ret.safari = ret.webkit
          if _testIt(/PhantomJS/, subUA)
            match = _matchIt(subUA, /PhantomJS\/([^\s]*)/, 1)
            ret.phantomjs = _numberify(match)  if match

          # Mobile browser check
          if _testIt(RegExp(" Mobile\\/"), subUA) or _testIt(/iPad|iPod|iPhone/, subUA)
            ret.mobile = "Apple" # iPhone or iPod Touch
            match = _matchIt(subUA, /OS ([^\s]*)/, 1)
            match = match and _numberify(match.replace("_", "."))
            ret.ios = match
            ret.ipad = ret.ipod = ret.iphone = 0
            match = _matchIt(subUA, /iPad|iPod|iPhone/, 0)
            ret[match.toLowerCase()] = ret.ios  if match
          else
            match = _matchIt(subUA, /NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/, 0)

            # Nokia N-series, Android, webOS, ex: NokiaN95
            ret.mobile = match  if match
            if _testIt(/webOS/, subUA)
              ret.mobile = "WebOS"
              match = _matchIt(subUA, /webOS\/([^\s]*);/, 1)
              ret.webos = _numberify(match)  if match
            if _testIt(RegExp(" Android"), subUA)
              ret.mobile = "Android"
              match = _matchIt(subUA, /Android ([^\s]*);/, 1)
              ret.android = _numberify(match)  if match
            if _testIt(/Silk/, subUA)
              match = _matchIt(subUA, /Silk\/([^\s]*)\)/, 1)
              ret.silk = _numberify(match)  if match
              unless ret.android
                ret.android = 2.34 #Hack for desktop mode in Kindle
                ret.os = "Android"
              ret.accel = true  if _testIt(/Accelerated=true/, subUA)
          match = subUA.match(/(Chrome|CrMo)\/([^\s]*)/)
          if match and match[1] and match[2]
            ret.chrome = _numberify(match[2]) # Chrome
            ret.safari = 0 #Reset safari back to 0
            ret.mobile = "chrome"  if match[1] is "CrMo"
          else
            match = _matchIt(subUA, /AdobeAIR\/([^\s]*)/)
            ret.air = match[0]  if match # Adobe AIR 1.0 or better
        unless ret.webkit
          match = _matchIt(subUA, /Opera[\s\/]([^\s]*)/, 1)
          if match
            ret.opera = _numberify(match)
            match = _matchIt(subUA, /Opera Mini[^;]*/, 0)
            ret.mobile = match  if match # ex: Opera Mini/2.0.4509/1316
          else # not opera or webkit
            match = _matchIt(subUA, /MSIE\s([^;]*)/, 1)
            if match
              ret.ie = _numberify(match)
            else # not opera, webkit, or ie
              match = _matchIt(subUA, /Gecko\/([^\s]*)/)
              if match
                ret.gecko = 1 # Gecko detected, look for revision
                match = _matchIt(subUA, /rv:([^\s\)]*)/, 1)
                ret.gecko = _numberify(match)  if match
      try
        date.setTime date.getTime() + 1000
        theDocument.cookie = cstr([
          "sf_ck_tst=test; expires="
          date.toGMTString()
          "; path=/"
        ])
        ret.cks = true  unless theDocument.cookie.indexOf("sf_ck_tst") is -1
      catch e
        ret.cks = false
      try
        if typeof process is "object"
          if process.versions and process.versions.node

            #NodeJS
            ret.os = process.platform
            ret.nodejs = numberify(process.versions.node)
      catch e
        ret.nodejs = 0
      ret

    ###
    The major version number of the Internet Explorer browser being used, or 0 if not.

    @name $sf.env.ua.ie
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the Opera browser being used, or 0 if not.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @name $sf.env.ua.opera
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the Gecko (Firefox) browser being used, or 0 if not.
    @name $sf.env.ua.gecko
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the WebKit browser being used, or 0 if not.
    @name $sf.env.ua.webkit
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the Safari browser being used, or 0 if not.
    @name $sf.env.ua.safari
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the Chrome browser being used, or 0 if not.
    @name $sf.env.ua.chrome
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the AIR SDK being used, or 0 if not.
    @name $sf.env.ua.air
    @type {Number}
    @public
    @static
    ###

    ###
    Whether or not an iPod device is being used, 0 for false, &gt; 0 == true
    @name $sf.env.ua.ipod
    @type {Number}
    @public
    @static
    ###

    ###
    Whether or not an iPad device is being used, 0 for false, &gt; 0 == true
    @name $sf.env.ua.ipad
    @type {Number}
    @public
    @static
    ###

    ###
    Whether or not an iPhone device is being used, 0 for false, &gt; 0 == true
    @name $sf.env.ua.iphone
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the Android OS being used, or 0 if not.
    @name $sf.env.ua.android
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the WebOS being used, or 0 if not.
    @name $sf.env.ua.webos
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the Silk browser being used, or 0 if not.
    @name $sf.env.ua.silk
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the NodeJS environment being used, or 0 if not.
    @name $sf.env.ua.nodejs
    @type {Number}
    @public
    @static
    ###

    ###
    The major version number of the PhantomJS environment being used, or 0 if not.
    @name $sf.env.ua.phantomjs
    @type {Number}
    @public
    @static
    ###

    ###
    A string representing whether or not the browser / os is a mobile device  and it's type. Possible values are 'windows', 'android', 'symbos', 'linux', 'macintosh', 'rhino', 'gecko', 'Apple', 'chrome'.

    @name $sf.env.ua.mobile
    @type {String}
    @public
    @static
    ###

    ###
    The major version number of the iOS being used, or 0 if not.
    @name $sf.env.ua.ios
    @type {Number}
    @public
    @static
    ###

    ###
    Whether or not the browser / environment in question is hardware accelerated.
    @name $sf.env.ua.accel
    @type {Boolean}
    @public
    @static
    ###

    ###
    The major version number of the CAJA environment or 0 if not
    @name $sf.env.ua.cajaVersion
    @type {Number}
    @public
    @static
    ###
    cached_ua = parse_ua()
    cached_ua.parse = parse_ua
    cached_ua
  )()

  ua:ua
  isIE:isIE