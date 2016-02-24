var tk = 'd0871ec478fd12b158f5e77972d58ac3';
var adid = '4508314510610295326';
if (typeof bonzai_testadid != 'undefined' && bonzai_testadid != "") {
    tk += "&adid=" + bonzai_testadid;
}(function() {
    var fr = 'ck';
    var mode = 'live';
    //var cUrl = (window.location.protocol == 'https:') ? 'https://collector.bonzai.ad' : 'http://collector.bonzai.ad';
	var cUrl = 'http://collector.bonzai.ad';
    var asPath = "http://massets.bonzai.ad";
    var scriptLoaded = false;
    
	//added by PG
	var scripts = document.getElementsByTagName('script'); 
	for(var i = scripts.length-1; i >= 0; i--) { 
		var s = scripts[i]; 
		if (s){
			break;
		}
	}
	//var script = document.getElementById('bonzai_script_0');
	var script = s;
	//end of addition by PG
	
    var adDiv = document.createElement('div');
    adDiv.className = 'mizu-ad';
    adDiv.className += ' ' + '1663d075-656a-48de-a4d1-2cbbe2b4044d_0';
    
	var adHtml = "<div class='progressBarCont' style='display:none'><div class='progress-bar color shine' style='text-align:left;'><span class='progress' style='width: 0%;'></span></div></div><div id='progressBarCont' style='display:none'><div id='progressBar' class='progress-bar color shine' style='text-align:left;'><span id='progress' style='width: 0%;'></span></div></div><style>.progress-bar {background-color: #1a1a1a;height: 25px;width: 350px;padding: 2px;margin: 50px 0;-moz-border-radius: 5px;-webkit-border-radius: 5px; border-radius: 5px; -moz-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444; -webkit-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444; box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444; display: inline-block;} .progress-bar span { display: inline-block; height: 100%; background-color: #777; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset; -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset; box- shadow: 0 1px 0 rgba(255, 255, 255, .5) inset; -webkit-transition: width .4s ease-in-out; -moz-transition: width .4s ease-in-out; -ms-transition: width .4s ease-in-out; -o-transition: width .4s ease-in-out; transition: width .4s ease-in-out; } .color span { background-color: #34c2e3; } .shine span { position: relative;} .shine span::after {content: ''; opacity: 0; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: #fff; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; -webkit-animation: animate-shine 2s ease-out infinite; -moz-animation: animate-shine 2s ease-out infinite; } @-webkit-keyframes animate-shine { 0% {opacity: 0; width: 0;} 50% {opacity: .5;} 100% {opacity: 0; width: 95%;} } @-moz-keyframes animate-shine { 0% {opacity: 0; width: 0;} 50% {opacity: .5;} 100% {opacity: 0; width: 95%;} } #overlay {text-align: center; visibility: hidden; background-color: black; opacity: 1; position: absolute; z-index: 100000; width: 100%; height: 100%;} .overlay {text-align: center; visibility: hidden; background-color: black; opacity: 1; position: absolute; z-index: 100000; width: 100%; height: 100%;} .mizu-ad {text-align: center;} .mizu-ad div.animeLoad {-webkit-transition: width 0.5s, height 0.5s;} .mizu-ad div.spinner {background:transparent url('http://massets.bonzai.ad/e08bf79a-c47c-4723-88f5-80281f89e537.gif') no-repeat center;}</style>";
    adDiv.innerHTML = adHtml;
    var c = '{clickurl}';
    var sticky = '';
    var me = script;
	try{
		script.parentNode.insertBefore(adDiv, script.nextSibling);
	} catch (e) {
		console.log('error: '+e); //error: TypeError: Cannot read property 'parentNode' of null
	}
	//console.log('2');
    
	var prepreimp = new Image();
    prepreimp.src = cUrl + '/rec?evt=pre-preimp&tk=' + tk;
    var winBonzaiObj = undefined;
    if (window.bonzaiObj != undefined) winBonzaiObj = window.bonzaiObj['bonzai_script_0'];
    if (winBonzaiObj != undefined && winBonzaiObj != "") {
        winBonzaiObj = JSON.parse(winBonzaiObj);
        if (winBonzaiObj['network'] != undefined && winBonzaiObj['network']['macros'] != undefined && winBonzaiObj['network']['macros']['imprTr'] != undefined) {
            var impTrackers = winBonzaiObj['network']['macros']['imprTr'];
            if (impTrackers.img.length != 0) {
                var imgTrk = impTrackers.img;
                for (itr = 0; itr < imgTrk.length; itr++) {
                    (new Image()).src = imgTrk[itr];
                }
            }
            if (impTrackers.scr.length != 0) {
                var srcTrk = impTrackers.scr;
                for (itr = 0; itr < srcTrk.length; itr++) {
                    var srcObj = document.createElement('script');
                    srcObj.src = srcTrk[itr];
                    adDiv.appendChild(srcObj);
                }
            }
        }
    }
	//console.log('3');
    if (typeof m_trackers != 'undefined' && m_trackers.a != undefined && m_trackers.a.length > 0) {
        for (i = 0; i < m_trackers.a.length; i++) {
            if (m_trackers.a[i]["t"] == "img") {
                (new Image()).src = m_trackers.a[i]["l"];
            } else if (m_trackers.a[i]["t"] == "script") {
                var mScript = document.createElement('script');
                mScript.src = m_trackers.a[i]["l"];
                adDiv.appendChild(mScript);
            }
        }
    }
	//console.log('4');
    var req = document.createElement('script');
    req.id = 'mizu-' + (Math.random() + '').slice(2);
    var iescriptready = false;
    req.onreadystatechange = function() {
		console.log('req.onreadystatechange starts');
        if ((req.readyState == 'loaded' || req.readyState == 'complete') && !iescriptready) {
            iescriptready = true;
            scriptLoaded = true;
            if (typeof(loadAd) === "function") loadAd('1663d075-656a-48de-a4d1-2cbbe2b4044d_0', '{"sn":["wap_bonzai"],"adid":["1663d075-656a-48de-a4d1-2cbbe2b4044d"],"scriptid":["bonzai_script_0"],"contTyp":["div"],"tk":["d0871ec478fd12b158f5e77972d58ac3"]}');
            var preimp = new Image();
            preimp.src = cUrl + '/rec?evt=preimp&tk=' + tk;
            if (typeof m_trackers != 'undefined' && m_trackers.b != undefined && m_trackers.b.length > 0) {
                for (i = 0; i < m_trackers.b.length; i++) {
                    if (m_trackers.b[i]["t"] == "img") {
                        (new Image()).src = m_trackers.b[i]["l"];
                    } else if (m_trackers.b[i]["t"] == "script") {
                        var mScript = document.createElement('script');
                        mScript.src = m_trackers.b[i]["l"];
                        adDiv.appendChild(mScript);
                    }
                }
            }
        }
    };
    req.onload = function() {
		//console.log('req.onload starts');
        scriptLoaded = true;
		//console.log('req.onload 1');
        if (typeof(loadAd) === "function") {
			//console.log('typeof(loadAd) is function');
			loadAd('1663d075-656a-48de-a4d1-2cbbe2b4044d_0', '{"sn":["wap_bonzai"],"adid":["1663d075-656a-48de-a4d1-2cbbe2b4044d"],"scriptid":["bonzai_script_0"],"contTyp":["div"],"tk":["d0871ec478fd12b158f5e77972d58ac3"]}');
		}
        console.log('req.onload 2');
		var preimp = new Image();
        preimp.src = cUrl + '/rec?evt=preimp&tk=' + tk;
		console.log('req.onload 3');
        if (typeof m_trackers != 'undefined' && m_trackers.b != undefined && m_trackers.b.length > 0) {
			console.log('req.onload 3.1');
            for (i = 0; i < m_trackers.b.length; i++) {
                if (m_trackers.b[i]["t"] == "img") {
                    (new Image()).src = m_trackers.b[i]["l"];
                } else if (m_trackers.b[i]["t"] == "script") {
                    var mScript = document.createElement('script');
                    mScript.src = m_trackers.b[i]["l"];
                    adDiv.appendChild(mScript);
                }
            }
        }
		console.log('req.onload 4');
    };
    //var surl = "http://d3m98duogo0w61.cloudfront.net/1663d075-656a-48de-a4d1-2cbbe2b4044d_1456152586362_script.js";
	var surl = "../../trials/local_banner.js";
    //if (window.location.protocol == "https:") {
        surl = surl.replace("http://massets.bonzai.ad", "https://d306vfj3mhm2bb.cloudfront.net");
    //}

    req.src = surl + '?c=' + encodeURIComponent(c) + '&scriptId=' + 'jsad' + '&sticky=' + sticky;
	//console.log('req.src: '+req.src);
    adDiv.appendChild(req);
	
	//document.write("<SCR" + "IPT LANGUAGE=JavaScript" + " SRC=" + req.src + "></SCR" + "IPT>");
	document.write("<SCR" + "IPT LANGUAGE=JavaScript" + " SRC=" + req.src + " onload=scriptOnLoadCallback()" + "></SCR" + "IPT>");
})();