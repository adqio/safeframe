sf = require("./ext/ext")(false)

module.exports = do (window,sf) ->
  window["$sf"] = sf unless window["$sf"]
  window["_$sf_adjs"] = sf
  sf
