require ["../../src/coffee/shared/lang"],(lang)->
  #  ParamHash: ParamHash
  #  cstr: cstr
  #  cnum: cnum
  #  cbool: cbool
  #  noop: noop
  #  trim: trim
  #  callable: callable
  #  guid: guid
  #  mix: mix
  #  time: time
  #  rand: rand
  #  def: def
  #  ns: ns
  #  jssafe_html: jssafe_html
  #  isArray: isArray
  describe "$sf.lang", ->
    describe ".cstr",->
      #wtf is the point of this...
      it "should turn any number into a 0",->
        expect(lang.cstr(1000)).toEqual("1000")
    describe ".cnum",->
      it "should turn a string into a number",->
        expect(lang.cnum("100")).toEqual(100)
    describe ".cbool",->
      it "should turn a falsy or truthy value or string into a boolean",->
        expect(lang.cbool("false")).toEqual(false)
        expect(lang.cbool("true")).toEqual(true)
    describe ".noop",->
    describe ".trim",->
      it "should trim  a string", ->
        expect(lang.trim("   trim    ")).toEqual("trim")
    describe ".callable",->
      it "should decide whether an obj is callable",->
        expect(lang.callable(()->))toEqual(true)
        expect(lang.callable(null))toEqual(false)
    describe ".guid",->
      it "should generate a globally unique identifier",->
        expect(lang.guid())toEqual(lang.guid())
    describe ".mix",->
      it "should mix 2 js objs",->
        result = lang.mix({one:"1"},{two:"2"})
        expect(result).toEqual({one:"1",two:"2"})
    describe ".time",->
      it "should return time",->


    describe ".rand",->
      it "should return a random number",->

    describe ".def",->#think this is gone
    describe ".ns",->
    describe ".jssafe_html",->
      it "should js safe html",->
    describe ".isArray", ->

