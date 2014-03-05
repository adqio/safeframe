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
((win) ->
  _log = (msg, is_err) ->
    head_el = undefined
    err_tag = undefined
    try
      lib = (sf and sf.lib)  unless lib # insure we have lib
      if lib and lib.logger and win is top
        if is_err
          lib.logger.error msg
        else
          lib.logger.log msg
      else
        
        # Append error message as comment to header
        head_el = d.getElementsByTagName("head")[0]
        err_tag = d.createElement("script")
        err_tag.type = "text/plain"
        err_tag.text = "<!-- SafeFrame " + ((if (is_err) then "error" else "log")) + ": " + (msg or "unknown") + " -->"
        head_el.appendChild head_el, err_tag
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
    _cstr [
      "<scr"
      "ipt type='text/javascript', src='"
      src
      "'></scr"
      "ipt>"
    ]
  _auto_boot = ->
    do_auto = TRUE
    config = undefined
    sf_host = undefined
    host_file = undefined
    head = undefined
    scr_tag = undefined
    return  if has_booted
    sf_host = sf and sf.host
    if win is top
      sf_host.boot = boot  if sf_host and not sf_host.boot
      try
        config = sf_host and sf_host.Config()
      catch e
        config = NULL
      unless config
        try
          config = sf_host and sf_host.conf
        catch e
          config = NULL
      if config
        do_auto = FALSE  if ("auto" of config) and config.auto is FALSE
        if not sf_host.render or not sf_host.Config
          host_file = config.hostFile
          if host_file
            head = _tags("head")[0]
            scr_tag = dom.make("script")
            scr_tag.id = "sf_host_lib"
            scr_tag.type = "text/javascript"
            scr_tag.className = "sf_lib"
            scr_tag.src = host_file
            if win.ActiveXObject
              scr_tag.onreadystatechange = ->
                rs = scr_tag.readyState
                if rs is "loaded" or rs is "complete"
                  doing_auto_boot = FALSE
                  boot()  if do_auto
                  scr_tag.onreadystatechange = NULL
                  scr_tag = head = sf_host = config = NULL
                return
            else
              scr_tag.onload = ->
                doing_auto_boot = FALSE
                boot()  if do_auto
                scr_tag.onload = NULL
                scr_tag = head = sf_host = config = NULL
                return
            doing_auto_boot = TRUE
            head.appendChild scr_tag
            return
      if do_auto
        if config
          doing_auto_boot = TRUE
          boot()
          doing_auto_boot = FALSE
        else
          setTimeout _auto_boot, 50  if boot_retries++ <= AUTO_BOOT_MAX_RETRIES
    else
      boot()
    return
  
  ###
  Go through and remove any inline script tags that are our data-islands , which have already been boostrapped
  
  @name $sf.host-_clean_up_booted_tags
  @private
  @function
  @static
  ###
  _clean_up_booted_tags = ->
    script_tag_id = undefined
    script_tag = undefined
    if dom
      for script_tag_id of inline_tags_processed
        script_tag = _elt(script_tag_id)
        if script_tag
          _purge script_tag
          delete inline_tags_processed[script_tag_id]
    return
  
  ###
  Search for SafeFrames tags and render them. This function is called
  automatically whenever the SafeFrames publisher library is loaded. However a configuration
  can be applied to not have SafeFrames tags automatically be rendered, requiring a controlled
  call to this function.
  
  @name $sf.host.boot
  @public
  @function
  @static
  ###
  boot = ->
    script_tags = (_tags and _tags("script")) or []
    boot_positions = []
    idx = 0
    ret = FALSE
    errMsg = undefined
    sf_host = sf and sf.host
    sf_inline_conf = sf_host and sf_host.conf
    script_tag = undefined
    script_tag_par = undefined
    script_tag_id = undefined
    data = undefined
    html = undefined
    pos_obj = undefined
    pos_conf = undefined
    pos_dest_el = undefined
    pos_meta = undefined
    pos_meta_item = undefined
    typ = undefined
    shared_meta = undefined
    prv_meta = undefined
    prv_meta_key = undefined
    meta_key = undefined
    sf_ocnf = undefined
    err = undefined
    if not sf or not lang or not dom
      _log "SafeFrame base library not found", TRUE
      return ret
    lib = (sf and sf.lib)  unless lib # insure we have lib
    if doing_auto_boot and has_booted
      _log "Automatic boot already invoked"
      return ret
    if win is top
      try
        sf_conf = sf_host.Config()
      catch err
        sf_conf = NULL
      if sf_inline_conf and not sf_conf
        try
          sf_conf = sf_host.Config(sf_inline_conf)
        catch e
          sf_conf = NULL
      unless sf_conf
        _log "No configuration found"
        return ret
    while script_tag = script_tags[idx++]
      if script_tag.className is SF_DATATAG_CLASS or _attr(script_tag, "type") is SF_TAG_TYPE
        has_booted = TRUE
        script_tag_id = _attr(script_tag, "id")
        unless script_tag_id
          script_tag_id = _guid("sf_data_element")
          _attr script_tag, "id", script_tag_id
        
        # ignore the tag if we already booted it 
        continue  if inline_tags_processed[script_tag_id]
        data = script_tag.text or script_tag.innerHTML or script_tag.innerText
        try
          data = lang.trim(data)
          data = new Function("return " + data)
          data = data()
        catch err
          data = NULL
          errMsg = "Error parsing tag configuration " + (err and err.message or "")
          _log errMsg, TRUE
          continue
        if data and data.id and (data.html or data.src)
          unless win is top
            html = data.html or ""
            html = html or _create_pos_markup(data.src)
            unless _ready()
              d.write html
            else
              _log "cannot write html content into already loaded document"
          else
            script_tag_par = _par(script_tag)
            unless script_tag_par
              _log "can't find parent element for script tag", TRUE
              continue
            
            #
            #            * Check for an existing position config
            #            *
            #           
            pos_conf = (sf_conf and sf_conf.positions[data.id])
            unless pos_conf
              
              #
              #              * No position config defined already so check for an inline config
              #              *
              #             
              pos_conf = data.conf
              pos_conf.id = data.id
              pos_conf = new sf_host.PosConfig(pos_conf)  if pos_conf
            unless pos_conf
              _log "no position conf found pre-defined or inline for position " + data.id, TRUE
              continue
            
            #
            #              * we are going to auto create a destination element
            #              *
            #             
            pos_conf = new sf_host.PosConfig(pos_conf, _guid(SF_POSELEM_WRAPPER_CLASS))  unless pos_conf.dest
            if data.meta
              pos_meta = data.meta
              meta_key = ""
              shared_meta = {}
              
              #
              #              * Process meta data to be shared
              #              * The 1st key that points to an object of its own, is considered
              #              * private / owned data.  Any other keys are considered shared data
              #              *
              #              * You can't have more than one set of private / owner information unless
              #              * its nested so having anything other than a structure of key = [some primtive value]
              #              * or key = [obj] (1) time only, is all that makes sense
              #              *
              #             
              for meta_key of pos_meta
                pos_meta_item = pos_meta[meta_key]
                typ = typeof pos_meta_item
                if not prv_meta and typ is "object" and pos_meta_item
                  prv_meta = pos_meta_item
                  prv_meta_key = meta_key
                shared_meta[meta_key] = pos_meta_item  if typ isnt "object" and typ isnt "function"
              pos_meta = new sf_host.PosMeta(shared_meta, prv_meta_key or "", (if (prv_meta_key and prv_meta) then prv_meta else NULL))
            pos_obj = new sf_host.Position(data, NULL, pos_meta, pos_conf)
            
            #
            #            * OK we built the position and are ready to render
            #            * We set a custom attribute on the script tag so that we can ignore it
            #            * in case someone else calls boot again
            #            *
            #            * We will remove these tags from the dom later, but we don't want to do that
            #            * now b/c the page might be in the process of loading
            #            *
            #           
            inline_tags_processed[script_tag_id] = script_tag_id
            pos_dest_el = _elt(pos_conf.dest)
            unless pos_dest_el
              if _ready()
                pos_dest_el = dom.make("div")
                _attr pos_dest_el, "id", pos_conf.dest
                try
                  script_tag_par.insertBefore pos_dest_el
                catch err
                  _log "failed auto-adding destination element " + err.message, TRUE
                  continue
              else
                d.write "<div id='", pos_conf.dest, "'></div>"
            boot_positions.push pos_obj
        else
          _log "no content or id property found in the inline position object", TRUE
    
    # end boot loop 
    if boot_positions.length
      try
        sf_host.render boot_positions
      catch e
        _log "failed during rendering " + e.message
    else
      _log "no positions to boot"
    
    #
    #    * now we set a timer and go through and clean up any already processed tags
    #    *
    #   
    dom.wait _clean_up_booted_tags
    return
  FALSE = false
  TRUE = true
  NULL = null
  SF_DATATAG_CLASS = "sf_data"
  SF_TAG_TYPE = "text/x-safeframe"
  AUTO_BOOT_MAX_RETRIES = 100
  SF_POSELEM_WRAPPER_CLASS = "sf_position"
  d = (win and win.document)
  sf = (win and win.$sf)
  lib = (sf and sf.lib)
  lang = (lib and lib.lang)
  dom = (lib and lib.dom)
  _cstr = (lang and lang.cstr)
  _guid = (lang and lang.guid)
  _elt = (dom and dom.elt)
  _par = (dom and dom.par)
  _tags = (dom and dom.tags)
  _attr = (dom and dom.attr)
  _purge = (dom and dom.purge)
  _ready = (dom and dom.ready)
  inline_tags_processed = {}
  boot_retries = 0
  has_booted = FALSE
  doing_auto_boot = FALSE
  setTimeout _auto_boot, 50
) window