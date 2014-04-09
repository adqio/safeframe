sf = require("./ext/ext")(false)

module.exports = do (window,sf) ->
  window["$sf"] = sf
  sf
