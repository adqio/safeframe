var tk = '7f7ac481e1698846f91d117b03c854e';
var adid = '61c8b143-8e3c-4279-9cc5-241293bca3c3';
if (typeof bonzai_testadid != 'undefined' && bonzai_testadid != "") {
    tk += "&adid=" + bonzai_testadid;
}(function() {
    var fr = 'ck';
    var mode = 'live';
    //var cUrl = (window.top.location.protocol == 'https:') ? 'https://collector.bonzai.ad' : 'http://collector.bonzai.ad';
	var cUrl = 'http://collector.bonzai.ad';
    var asPath = "http://massets.bonzai.ad";
    //if (window.top.location.protocol == "https:") {
        //asPath = "https://d306vfj3mhm2bb.cloudfront.net";
		//asPath = "http://d306vfj3mhm2bb.cloudfront.net";
    //}
    var scriptLoaded = false;

	var scripts = document.getElementsByTagName('script'); 
	for(var i = scripts.length-1; i >= 0; i--) { 
		var s = scripts[i]; 
		if (s){
			break;
		}
	}
	//var script = document.getElementById('');
	var script = s;
	//alert('step 1.2');

    var adDiv = document.createElement('div');
	//alert('step 1.3');
    adDiv.className = 'mizu-ad';
    adDiv.className += ' ' + '';
    var adHtml = "";
    adDiv.innerHTML = adHtml;
    var c = '{clickurl}';
    var sticky = '';
    var me = script;
	//alert('step 1.6');
    
	try{
		script.parentNode.insertBefore(adDiv, script.nextSibling);
		console.log('step 1.7');
	} catch (e) {
		console.log('step 1.7.1');
		console.log('error: '+e); //error: TypeError: Cannot read property 'parentNode' of null
	}
	
    var prepreimp = new Image();
    prepreimp.src = cUrl + '/rec?evt=pre-preimp&tk=' + tk + '&ad=' + adid;
	//alert('step 1.8');
    var winBonzaiObj = undefined;
    //alert('step 2');
	if (window.bonzaiObj != undefined) winBonzaiObj = window.bonzaiObj[''];
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
	//alert('step 3');
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
	//alert('step 4');
    var req = document.createElement('script');
    req.id = 'mizu-' + (Math.random() + '').slice(2);
    var iescriptready = false;
    req.onreadystatechange = function() {
        if ((req.readyState == 'loaded' || req.readyState == 'complete') && !iescriptready) {
            iescriptready = true;
            scriptLoaded = true;
            if (typeof(loadAd) === "function") loadAd('', '{"adid":["61c8b143-8e3c-4279-9cc5-241293bca3c3"],"contTyp":["div"],"q":["1299740195"],"tk":["7f7ac481e1698846f91d117b03c854e"]}');
            var preimp = new Image();
            preimp.src = cUrl + '/rec?evt=preimp&tk=' + tk + '&ad=' + adid;
			console.log('preimp.src='+preimp.src);
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
	//alert('step 5');
    req.onload = function() {
	//function scriptOnLoadCallback() {
		console.log('scriptOnLoadCallback - 1');
        scriptLoaded = true;
		console.log('scriptOnLoadCallback - 2');
        if (typeof(loadAd) === "function") loadAd('', '{"adid":["61c8b143-8e3c-4279-9cc5-241293bca3c3"],"contTyp":["div"],"q":["1299740195"],"tk":["7f7ac481e1698846f91d117b03c854e"]}');
        var preimp = new Image();
        preimp.src = cUrl + '/rec?evt=preimp&tk=' + tk + '&ad=' + adid;
		console.log('preimp.src='+preimp.src);
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
    };
	//alert('step 6');
    //var surl = "http://massets.bonzai.ad/61c8b143-8e3c-4279-9cc5-241293bca3c3_1449219683490_script.js";
	var surl = "../../trials/61c8b143-8e3c-4279-9cc5-241293bca3c3_1449219683490_script.js";
	//var surl = "../../trials/local_banner.js";
    
	//try {
		//if (window.top.location.protocol == "https:") {
			//surl = surl.replace("http://massets.bonzai.ad", "https://d306vfj3mhm2bb.cloudfront.net");
			//surl = surl.replace("http://d3cjywc9gywo2r.cloudfront.net", "https://d3cjywc9gywo2r.cloudfront.net");
			surl = surl.replace("http://massets.bonzai.ad", "http://d306vfj3mhm2bb.cloudfront.net");
			surl = surl.replace("http://d3cjywc9gywo2r.cloudfront.net", "http://d3cjywc9gywo2r.cloudfront.net");
		//}
	//} catch {
	//	console.log('error when checking: window.top.location.protocol == https:');
	//}
	//alert('step 7');
    req.src = surl + '?c=' + encodeURIComponent(c) + '&scriptId=' + 'jsad' + '&sticky=' + sticky;
	var u = surl + '?c=' + encodeURIComponent(c) + '&scriptId=' + 'jsad' + '&sticky=' + sticky;
	console.log('u: '+u);
    adDiv.appendChild(req);
	//alert('step 7.1');
	
	document.write("<SCR" + "IPT LANGUAGE=JavaScript" + " SRC=" + req.src + " onload=scriptOnLoadCallback()" + "></SCR" + "IPT>");
	//document.write('<SCR' + 'IPT LANGUAGE="JavaScript" ' + 'SRC="' + req.src + '" onload="alert(\'loaded ad.js\');">' + '</SCR' + 'IPT>');
	//alert('step 7.2');
	//document.write('<SCR' + 'IPT LANGUAGE="JavaScript">setTimeout(\'document.getElementById("div").src="' + u + '"\',1)' + '</SCR' + 'IPT>');
	//alert('step 8');
	
})();