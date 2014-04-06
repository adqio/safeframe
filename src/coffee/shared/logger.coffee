module.exports = do (window)->
  win = window

  ###
  Write an entry to the console log and fire any log listeners

  @message  The log message
  ###
  logInfo = (message) ->
    console.log message  if win.console and console.log
    return

  ###
  Write an entry to the console error log and fire any log listeners

  @message  The log message
  ###
  logError = (message) ->
    if win.console and console.error
      console.error message
    else console.log message  if win.console and console.log
    return
  info: logInfo
  error: logError