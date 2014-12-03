
sf = require("./host/host")(false)

do (window,sf) ->

  window["$sf"] = sf unless window["$sf"]
  window["_$sf_adjs"] = sf
module.exports = sf