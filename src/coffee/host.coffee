
sf = require("./host/host")(false)

do (window,sf) ->

  window["$sf"] = sf
module.exports = sf