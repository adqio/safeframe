define ["./lang","./env","./dom","./logger"],(lang,env,dom,logger)->

  ver:"1-1-0"
  specVersion: "1.1"
  lib:
    lang: lang
    dom: dom
    logger: logger
  env: env
  host: {}
  ext: {}
  info:
    errs: []
    list: []
