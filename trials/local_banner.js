//copy(unescape(dataJson.adSrc))

function loadAd(container,reqJson){
	var adContainer = container ? container: "mizu-ad";
	var extCss = "";
	var adJSContent = "";
	var adCss ="";
	var adHtml = "";
	//console.log('ad.js - starts');
		
	adHtml = "<div data-id=\"nsuc\" 0=\"\" class=\"ad-page loading\" commonid=\"nsuc\" sequenceid=\"1\" orientation=\"0\" name=\"Banner 1\" pageheight=\"100\" pagewidth=\"640\" pagetype=\"banner\" bg-prop=\"{&quot;opacity&quot;:&quot;1&quot;,&quot;background-color&quot;:&quot;#15e8b6&quot;}\" style=\"width: 640px; height: 100px; display: block;\"><img name=\"Comic-Strip.png\" class=\"adelem\" data-id=\"eqq4\" src=\"\" adtype=\"image\" data-asseturl=\"086825ab-ebb7-4ff0-b599-00ed4e99184a.png\" style=\"width: 99.5313%; height: 99%; left: 0%; top: 0%; z-index: 0;\"></img><button checked=\"checked\" src=\"\" srcduration=\"\" srcformat=\"\" srcsize=\"0\" tagname=\"BUTTON\" domstyle=\"[object Object]\" name=\"button 1\" class=\"button adelem\" data-id=\"5js1\" adtype=\"button\" style=\"width: 29.6875%; height: 48%; left: 70.1563%; top: 52%; z-index: 1;\">Expand Me</button></div><div data-id=\"on2f\" 1=\"\" class=\"ad-page loading\" commonid=\"on2f\" sequenceid=\"2\" orientation=\"0\" name=\"Expandable 1\" pageheight=\"960\" pagewidth=\"640\" pagetype=\"full-screen\" bg-prop=\"{&quot;opacity&quot;:&quot;1&quot;,&quot;background-color&quot;:&quot;#8f0e0e&quot;}\" style=\"width: 640px; height: 960px; display: none;\"><img name=\"closebutton 1\" class=\"adelem\" data-id=\"65y3\" src=\"\" adtype=\"closebutton\" data-asseturl=\"321c646f-ca68-4c50-97d0-8d6e51494021.png?rd=12\" style=\"width: 10.9375%; height: 7.29167%; left: 89.0625%; top: 0%; z-index: 200000;\"></img></div><div class=\"progressBarCont\" isportrait=\"true\" orientation=\"0\" style=\"display: none; width: 70%; height: 2.60417%; left: 15%; top: 75%; z-index: 2000;\"><div class=\"progress-bar color shine\" style=\"width: 100%; height: 100%; top: 0px; left: 0px; overflow: hidden; opacity: 1; border-radius: 5px; background-image: none; background-color: rgb(0, 0, 0);\"><span class=\"progress\" style=\"border-radius: 5px; background-color: rgb(52, 194, 227);\"></span></div></div><div data-id=\"6okk\" 0=\"\" class=\"ad-page loading\" commonid=\"6okk\" sequenceid=\"1\" orientation=\"0\" name=\"loading page\" pageheight=\"960\" pagewidth=\"640\" pagetype=\"loading-page\" bg-prop=\"{&quot;opacity&quot;:&quot;1&quot;,&quot;background-color&quot;:&quot;#ffffff&quot;}\" style=\"width: 640px; height: 960px; display: none;\"></div>";
	//console.log('ad.js - adHtml set');
	
	adCss += "<style type=\"text/css\">div.ad-page[data-id=\'nsuc\']{width:640px;height:100px;background-color:rgba(21,232,182,1);background-color:rgba(21,232,182,1);background-image:none;background-image:none;-webkit-opacity:1;-webkit-opacity:1;-moz-opacity:1;-moz-opacity:1;-ms-opacity:1;-ms-opacity:1;-o-opacity:1;-o-opacity:1;opacity:1}img[data-id=\'eqq4\']{left:0%;top:0%;width:99.53125%;height:99%;color:rgb(51, 51, 51);-webkit-opacity:1;-webkit-opacity:1;-moz-opacity:1;-moz-opacity:1;-ms-opacity:1;-ms-opacity:1;-o-opacity:1;-o-opacity:1;opacity:1;visibility:visible;font-weight:normal;font-weight:normal;font-style:normal;font-style:normal;font-family:Arial;font-family:Arial;font-size:0.875em;font-size:0.875em;text-align:center;text-align:center;-webkit-transform:none;-webkit-transform:none;-moz-transform:none;-moz-transform:none;-ms-transform:none;-ms-transform:none;-o-transform:none;-o-transform:none;transform:none;background-color:rgba(0, 0, 0, 0);background-color:rgba(0, 0, 0, 0);background-position:0% 0%;background-position:0% 0%;-webkit-background-size:auto;-webkit-background-size:auto;-moz-background-size:auto;-moz-background-size:auto;-ms-background-size:auto;-ms-background-size:auto;-o-background-size:auto;-o-background-size:auto;background-size:auto;background-size:auto;background-repeat:repeat;background-repeat:repeat;background-attachment:scroll;background-attachment:scroll;background-image:none;background-image:none;display:block;-webkit-justify-content:flex-start;-webkit-justify-content:flex-start;-moz-justify-content:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;-ms-justify-content:flex-start;-o-justify-content:flex-start;-o-justify-content:flex-start;justify-content:flex-start;justify-content:flex-start;-webkit-align-items:stretch;-webkit-align-items:stretch;-moz-align-items:stretch;-moz-align-items:stretch;-ms-align-items:stretch;-ms-align-items:stretch;-o-align-items:stretch;-o-align-items:stretch;align-items:stretch;align-items:stretch;letter-spacing:normal;letter-spacing:normal}button.button[data-id=\'5js1\']{left:70.15625%;top:52%;width:29.6875%;height:48%;z-index:1;z-index:1;color:rgb(235, 255, 251);-webkit-opacity:1;-webkit-opacity:1;-moz-opacity:1;-moz-opacity:1;-ms-opacity:1;-ms-opacity:1;-o-opacity:1;-o-opacity:1;opacity:1;visibility:visible;font-weight:bold;font-weight:bold;font-style:normal;font-style:normal;font-family:Arial;font-family:Arial;font-size:1.6875em;font-size:1.6875em;text-align:center;text-align:center;-webkit-transform:none;-webkit-transform:none;-moz-transform:none;-moz-transform:none;-ms-transform:none;-ms-transform:none;-o-transform:none;-o-transform:none;transform:none;background-color:rgb(221, 221, 221);background-color:rgb(221, 221, 221);background-position:0% 0%;background-position:0% 0%;-webkit-background-size:auto;-webkit-background-size:auto;-moz-background-size:auto;-moz-background-size:auto;-ms-background-size:auto;-ms-background-size:auto;-o-background-size:auto;-o-background-size:auto;background-size:auto;background-size:auto;background-repeat:repeat;background-repeat:repeat;background-attachment:scroll;background-attachment:scroll;background-color:rgb(20, 114, 214.5);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#0284d2\', endColorstr=\'#2660db\',GradientType=0 );background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, from(rgb(2, 132, 210)), to(rgb(38, 96, 219)));background-image:-moz-linear-gradient(top, rgb(2,132,210) 0%, rgb(38,96,219) 100%);background-image:-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgb(2,132,210)), color-stop(100%,rgb(38,96,219)));background-image:-webkit-linear-gradient(top, rgb(2,132,210) 0%, rgb(38,96,219) 100%);background-image:-ms-linear-gradient(top, rgb(2,132,210) 0%, rgb(38,96,219) 100%);background-image:linear-gradient(to bottom, rgb(2,132,210) 0%, rgb(38,96,219) 100%);background-color:rgb(20, 114, 214.5);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#0284d2\', endColorstr=\'#2660db\',GradientType=0 );background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, from(rgb(2, 132, 210)), to(rgb(38, 96, 219)));background-image:-moz-linear-gradient(top, rgb(2,132,210) 0%, rgb(38,96,219) 100%);background-image:-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgb(2,132,210)), color-stop(100%,rgb(38,96,219)));background-image:-webkit-linear-gradient(top, rgb(2,132,210) 0%, rgb(38,96,219) 100%);background-image:-ms-linear-gradient(top, rgb(2,132,210) 0%, rgb(38,96,219) 100%);background-image:linear-gradient(to bottom, rgb(2,132,210) 0%, rgb(38,96,219) 100%);display:block;-webkit-justify-content:flex-start;-webkit-justify-content:flex-start;-moz-justify-content:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;-ms-justify-content:flex-start;-o-justify-content:flex-start;-o-justify-content:flex-start;justify-content:flex-start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-align-items:flex-start;-moz-align-items:flex-start;-moz-align-items:flex-start;-ms-align-items:flex-start;-ms-align-items:flex-start;-o-align-items:flex-start;-o-align-items:flex-start;align-items:flex-start;align-items:flex-start;letter-spacing:normal;letter-spacing:normal}div.ad-page[data-id=\'on2f\']{width:640px;height:960px;background-color:rgba(143,14,14,1);background-color:rgba(143,14,14,1);background-image:none;background-image:none;-webkit-opacity:1;-webkit-opacity:1;-moz-opacity:1;-moz-opacity:1;-ms-opacity:1;-ms-opacity:1;-o-opacity:1;-o-opacity:1;opacity:1}div[data-id=\'65y3\']{left:89.0625%;top:0%;width:10.9375%;height:7.291666666666667%;z-index:2001;z-index:2001;font-size:NaNem;font-size:NaNem;background-color:rgba(0, 0, 0, 0);background-color:rgba(0, 0, 0, 0);-webkit-background-size:100% 100%;-webkit-background-size:100% 100%;-moz-background-size:100% 100%;-moz-background-size:100% 100%;-ms-background-size:100% 100%;-ms-background-size:100% 100%;-o-background-size:100% 100%;-o-background-size:100% 100%;background-size:100% 100%;background-size:100% 100%;background-repeat:repeat;background-repeat:repeat;background-attachment:scroll;background-attachment:scroll;background-image:none;background-image:none;letter-spacing:normal;letter-spacing:normal}div.ad-page[data-id=\'6okk\']{width:640px;height:960px;background-color:rgba(255,255,255,1);background-color:rgba(255,255,255,1);-webkit-opacity:1;-webkit-opacity:1;-moz-opacity:1;-moz-opacity:1;-ms-opacity:1;-ms-opacity:1;-o-opacity:1;-o-opacity:1;opacity:1}.frameElement {margin: 0em;overflow: auto;color:#fff;font-weight:normal;cursor: pointer;}.frameElement .ad-page > *{position: absolute;}.frameElement .ad-page{position: absolute;}.frameElement .ad-page {  background-color: white; }.frameElement .ad-page.loading {  opacity:0; }.frameElement .frmIframe{border:none; width:100%; height:100%;}.frameElement textarea.val::-webkit-input-placeholder { color:#555; font-size:0.8em;text-align:center; }.frameElement .label {background: rgba(0,0,0,0);color: #272727;width: 110px; height:32px;border:none; text-align:left;}.frameElement .label.wrapDivTxtContent{overflow:hidden;}.frameElement .textBox { border: 0px;padding : 0px; margin:0px;}.dvc{width:100%;height:35px;position:absolute;z-index:4;left:0px;bottom:0px;}.dvcContBttn{width:100%;height:30px;}.dvcCltrBG{height:32px;width:100%;position:absolute;left:0px;top:3px;background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAgCAYAAADT5RIaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUyODA1RTJDNjZBRDExRTU5MzM3QTMwOTUyRTBFOTM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUyODA1RTJENjZBRDExRTU5MzM3QTMwOTUyRTBFOTM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTI4MDVFMkE2NkFEMTFFNTkzMzdBMzA5NTJFMEU5MzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTI4MDVFMkI2NkFEMTFFNTkzMzdBMzA5NTJFMEU5MzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4QcBZKAAAAYElEQVR42jyOXQ7AIAiDSXGby1x2/8t5DoN/AzXy0HxtCYF678QxxgdEdCPn7KETICIBKaXP6EWtdUhAKcVPaa1dljnoldMyN60WQ3jTstqyLR9mYcSzUHLbrkIfwi/AAKD4VrsBBsM6AAAAAElFTkSuQmCC\');}.dvcVidDuration {position: absolute;top: 13px;right: 32px;font-size: 11px;  font-family: sans-serif;  color:#f8f8f8;}.dvcSeekBarCont{  height: 3px;  background-color: #353535;  position: absolute;  left: 10px;  right: 10px;}.dvcVolumeCont{left: 37px;width: 103px;height: 43px;position: absolute;top: -4px;}.dvc-sound-SeekBarCont{  position: absolute;  height: 10px;width: 50px;  top: 13px;  left: 75px;  display:none;}.dvcSeekBar{    width:100%;    margin:auto;    height:100%;    background-color:#5f5f5f;    border: 1px solid #454545;    position:absolute;    overflow:visible;    background-repeat: no-repeat;    background-position:center;    cursor:pointer;}.dvc-sound-SeekBar{    width:100%;    margin:auto;    height:3px;    top:4px;    background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiUAAAADAgMAAAAxaZd6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADFBMVEUAAAAAAAAAAAAAAAA16TeWAAAAA3RSTlMoS03XyHhlAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAB9JREFUGNNjkFo1OMBKBoasgXYDDDgwSA20E6BgJQMAhegP3Nx7WWoAAAAASUVORK5CYII=\');position:absolute;overflow:visible;background-repeat:no-repeat;background-position:center;cursor:pointer;}.dvcProgress{background-color:#7f7f7f;height:100%;position:absolute;top:0;left:0;bottom:0;margin:auto;z-index:1;}.dvc-sound-Progress{background-color:#7f7f7f;height:100%;position:absolute;top:0;left:0;bottom:0;margin:auto;z-index:1;}.dvcPlayProgress{background-color:white;height:100%;position:absolute;top:0;left:0;bottom:0;margin:auto;z-index:2;}.dvc-sound-PlayProgress{background-color:white;height:100%;position:absolute;top:0;left:0;bottom:0;margin:auto;z-index:2;}.dseeker{background-repeat: no-repeat;background-position:center;background:white;border-radius:5px;height:11px;width:11px;position:absolute;z-index:3;top:-2px;cursor:pointer;display:none;}.d-sound-seeker{background-repeat:no-repeat;background-position:center;background:white;height:11px;width:3px;position:absolute;z-index:3;top:0px;cursor:pointer;}.dvcPlayCont{height:100%;width:30px;cursor:pointer;position:absolute;left:10px;}.dvcMuteCont{height:80%;width:30px;cursor:pointer;position:absolute;top:10%;left:45px;}.dvcPlay,.dvcPause{height:100%;width:100%;background-repeat:no-repeat;background-position:center;}.dvcPlay{background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAY1BMVEUAAAA4OTc4OTc4OTc4OTdERUM4OTfn5+fj4+Pe3t7V1dXNzc3ExMO6urqvr6+jo6OWl5Z/gH5vcG9hYWBTVFM4OTc4OTc4OTc4OTc4OTc4OTc4OTc4OTfBwcE4OTc4OTfr6+usjcy1AAAAIHRSTlMAgGJGT4Uy+fTu49rRyL+2rZ+XkIprXFc9KyEPAs8ZGKz2ZMMAAABuSURBVCjPrZHHDoMwEAUzhpDQe2/+/68ETkZaSz7AHHe02vI+L+Mpb7HWgXawCEVUggqEAK3jCtQoxUlSQzcJcZE20O8WoX/ZF/xZiJN/fqmbMIQFBEbcWfGdHXKGeytzx+a4XPzK+V2Zh0zwMQdiSg9eiE3OuwAAAABJRU5ErkJggg==\');}.dvcPause{background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAFVBMVEUAAAA4OTfS0tI4OTc4OTc4OTfr6+tpoZZwAAAABnRSTlMAgOBiQhZ093GjAAAAK0lEQVQY02MgGgQLCpo4CwqagjmGgmAgDOYIpqUpCqWlCQ5hDsw/qD7FAwAiuiC+oenkEgAAAABJRU5ErkJggg==\');}.dvcMute,.dvcUnMute{height:100%;width:100%;background-repeat:no-repeat;background-position:center;}.dvcFullscreen{position:absolute;top:12px;right:-7px;width:30px;height:30px;background-repeat:no-repeat;background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADTElEQVQoz03Tb2wTdQDG8ed3117/bp7B4jlh11gcOmc73uzubOKUpFiZIsORjHfoEtFE40LCEjRByTBlOOnmatS+IBJjAskcGzLdrJSgI20TzNQXbZaNPy7F1m2wru21vd5655u+8PX31ZMnHyJKQjsAH4AWADUAFgA6gEg8lvhOlITeemcAyABoAHcBRCBKwrGJiYl7siwrGxsb5Wq1ulksFtXu7v3XRUnwdL2y95e1tTVFVdVaPp8vy7KsRCKRrCgJHxoAPOX3+x0Wi8WYzWbVCxcv3G5sbKyVK2UZwH2GYSqXf7h8q1wqU11dXU6e5xmv1/swgCcoAKqqqpsrKyuq3W6nk8mkMjo6MpzL5d6KxxLpTCbTFw5//dnN32+WWZY1ZjIZtVKp1AAoFACb1Wplpqen7w4ODqZOfnyybfeLuwcIIUFRErYCGNvVvuto8GywPRQaW5yamlyy2WxGAFYKgF4qlWCxWmq//nY9GAgEFk+d+qTF/5K/jaKoUEeHsDMU+qI1HA7fuTJ9ZRQgaq1WIwBoetv2bfZr0eiWZCq5WigURpaX//ZkMxlK1/XNpaVbq06eZxcWFgqXJif+1DQtfC+d9v40M/NvLpcbJwAgSsKzANbjsURalIQtAHyEkG5d198khJzTdf3H+nX/iJLAAeDiscQfRJSEXpfL1ffg/oPKem69D8CYJD23k6Zp7caNuUW32+N8jONssz/PpnRd77fZ7F82N2+3plKpcxQA39DpM529hw65ALzqdnvahj8d9jQ1NdkJIcTxiMN24sRHz3R2vuAB4H9t377moaEzzwPwGQCYOI6jFUWhPG7Pu4HA6dZg8OydyanJvzRNOxqNXg1qmmYcODbQsqmq/QAh7EMsBYAyACgUi0Vlj28P3/N6D3P+/DcL49+Pj9Q3pkVJeD967erLRqOx//jxD57O5/OqLMtVADIFgGEYhuZ53lytVmuPcpx25Mjb7zgcWz8XJYFjWfarw4ffeM+1w0UKhYLqdDrNJpOJBmAyALg9Nze37vV6WavVqh3oPvCkpmlkdnZmY3UVj5vNZtvBnoOtDQ0NVKVSqZZKJWV+fj4PYJmIktBRV+OsqzLV5UTiscS3/1NlAFCutzSAyH9uAHWlejRAnAAAAABJRU5ErkJggg==\');}.dvcMute{background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAbFBMVEUAAAA4OTc4OTc4OTdCQ0E4OTfe3t44OTelpaTl5eXa29rT1NNVVlRQUU84OTc4OTc4OTeqqqmZmpk4OTc4OTc4OTc4OTfp6eno6OfExMNzc3Jpami8vLy5ubmxsrE4OTc4OTfr6+v////q6upOnNyYAAAAIXRSTlMAqGM6qxHrL9Tv6eWxsIBHIdbOcmdaDfHx3bu34N/aVVKDTiZnAAAAmUlEQVQoz73Q2w6DIAwG4EorKOD5rDvZvf87boy5LAtLvLKX/0fzp8CR09/6cC4SEQRRr9Gf3EHZlgCqUT6MO9HWdwe4TKSQzIz+dXU5r6uDXLIh0izzF0TP0APagbXk0eIPQJGlzGlWwF5AO7LUPNitvDp9yjWR2crjrmsSvzEbQkXT4ja8icSBu+195ZeEvsSLgLBcYzh6HstIDUdB4wLQAAAAAElFTkSuQmCC\');}.dvcUnMute{background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAk1BMVEUAAAA4OTc4OTc4OTc4OTelpaQ4OTdGR0XX19eqqqlAQT84OTc4OTc4OTf19fXs7ezc3NvMzczIyMiYmZiXl5ZaW1lRUlA9Pjw4OTc4OTc4OTc4OTc4OTc4OTf8/Pz4+Pjo6Ofh4eHR0dHPz868vLy5ubmxsrGzs7KkpaScnJs4OTc4OTc4OTc4OTc4OTfr6+v///96pgKyAAAAL3RSTlMAqGMPBdQTrOfWq3BaCvjz6eLfzsmzsKqOg2pTSDX9+vHt5OPg39rVz8+fm3o3Kq7VIDcAAACdSURBVCjPvdDHEoMgFEBRQQUFe9doem/w/1+XDAySCbqVFXPPgsezljz2yp7sDnThdL8xIC72X8+ZgDep+rGiAHY5E+DQdNuECqB/PjEBA64KfsVKwDdKeHoeiHetZUCXcZJu7ibQ/bo+RA8Tmjiro6TVj/tHCX2JL7wo0ThuQF05LgKJB9DvoqArP/jCZJBJiwArdFTSAufXvvT5AB9OEADaUuTTAAAAAElFTkSuQmCC\');}.mvc{height:100%;width:100%;top:0px;left:0px;position:absolute;z-index:100;}.mvcPlay{width:75px;height:75px;position:absolute;top:50%;left:50%;margin:-37.5px 0 0 -37.5px;background-repeat:no-repeat;background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkNDRjMzMTE2NkIzMTFFNTlERTU4RDhGRDgxMjQ1MUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkNDRjMzMTA2NkIzMTFFNTlERTU4RDhGRDgxMjQ1MUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0MyQjc0Nzk2MkI0MTFFNTgxMkI5RjlGMjMzMzgyNDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0MyQjc0N0E2MkI0MTFFNTgxMkI5RjlGMjMzMzgyNDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7UA6MkAAAGQUlEQVR42uSc+U9cVRTHzwzUMrRWmMGhassiLS6NgB1/qksjQmlSE1wiEgbQX42pLWB/ajRmIlD7B9hAIQHb2Aopyl4w/lKLhao1GgVaoIW2yBJRwLJvnjO9TIZxgHnDW+6dOck3r4H2vXs/vfeec+6mA5UtJjJyGz52osJRJlQIagsqCLUZpUMtomZRk6gJ1ChqBDWIutPT1zehZpl1KkDZhI/d9EdUNMoow2uHUTeZehDagpCQEE4kPiyoJ1EPKFiHKdTvqGsIa4B7SAiG3rcH9TzqEVDfelGXEVY3l5AQEHWpZJQZtLe7qIsI6y4XkBDOQ/g4hIoF/uxXVBPCmtQMEgLai4+DCo85GzUCVI2grqsKCeEQlFQ2/ohibahmbzyhzgtAFNdYUQ+DeHYbdV5q99NJBEQeK5MFf6IaBaVnEdQ/skNCQDvwkcWiYtFtHFWGoP725C/rJbQgXwFERqnRu2zo2Dgk9qJMHwLkDCoL62fYECTmxayCj0FrGSXYb2M99RtpSa8J6sWkWBQqyStILFB8GvzD9mF9d0mCxFKNg+Bflor13iylJb3KeaqhhD3IEvT1ISFNSlR3g3+aBesfviYkNh+UrGQpzOHhEBMTwyskt/V3bUl7lPZmJpMJquvrITM7G3Q6HY+gdrHsYlVIL6hRiqCgIPjEZoPSsjIwm808gnrRLSSkR/HCdjVL8tL+/dDQ1AQHUlJ4gxSLPIzuWpJFi9KEhIbC50VFUHjyJARv4Sawp3Hg2RWQWPrxlJaleistDeobG2GvxcILqDjmyBwtidx+oNal2hkRAecrKyEnLw8CAzUvDgXUjzlD4sYn6/V6eP/wYaisqoLo6GjNPZ0zpGjgzJ6Ji4OahgbIsFq1DBWi7JDYfFEIcGgGgwFs+flQXFoKYWFhWhRhBy3TU0uK4D1XeDkxERqbm+GV5GS1P00D46MEKVyEpCrUaISi06eh4MQJtUMFM0EyiZSBpqWnQy2mNfEJCWp90qTndTxayyKjoqDiwgX44OhRCFA+VAghSFtFnNMICAiwQyJYUcqGClsJkgEEtvj4eHv3S8/IUMzJEqQAENwMwcHwaUEBFJeUgNFolL3R6sGHLDEpCc5VVNinYuQMA3wK0veXLkEWRujT09NyvnaeXMOC6F1uZmYGPisshDPl5bC0tCT36xcJ0pSoHo6so70dco4cge6uLqU+MUnd7Z6IcBYXF6Ho1Cl4IzVVSUBkE9SSaCP5dpEA9ff3w4c5OfDj1atqfG6UWtKISIC+qaqCQykpagEiG6GWNCwCnLGxMfjo+HFoqKtT+9NDBOkO74B+aGmBY3l5MDQ4qPanyfP/qWdb4kZ5hDM7Owv5Nhu8k5mpBSD78Id85pZT6F5UAk+AOjo6IBdde9eNG1oWgw74OOa4b/ICh4LBkuJieBNdu8aAHFyWWxLtlp8HjZeVBgYG7K69rbWVh/+vf5fHa3tLwn43w0BpZjXV1XbXzgkgst+QyxK4tJyfQYNjEOPj4/Axuva62lre/MY1xzSA0w9vsZhJtW0erVeuwLHcXHs348y6sBU5gmzHVAlrWi1qlGBubg4K8/Mh22rlERC4clixNMr2M78HCm7kop1uxtBQ6Ozs5DV2vYUNptz5Bysm3fCXdIr6OyVLMDw0xDMg6k3Nrj/838wkgqIa9IB/2i/uDjuvNn1LWeScnwGiebVv3f3CLSR2FqzZzyDVYL2nPIbE7CdUp58AakNAq+ZAq0JiIcHXINiknBd2e71es+aSEktXvoT7J6J90WhY+Wq9w8vrrruxyJNAzfgYIEpgz3hyOYxHi5PspoZzPgSKPNlZT8/gSj3NTccJaGdCsMCAaBb2C08BSYbEQJkYKJOAgKhH0L0AktYavb1hgnYkvI56QiBANBXUiIDmpf5Dr/f+st3yz6EOoDZxDIcCxDqE84e3L5Dj1hvaEEQnLR/nEBBdPnVRaveSHZITLDqbQnuIjRzAoSSVrgTqleNlct/ERSFFHGofaHPZFA3Ml1HXl+enuYPkMl5R97OwwV3J/U90i2A7DcwIRpHVaDVuByRPGMugkbbJ8FqKcWhOnu5u66ZVViXroPrJFjbQu7tnMtglA1hgOeM9FgD+BfcXKvoQyriaZf5PgAEAEIzZqTXjLAMAAAAASUVORK5CYII=\');}.progress-bar{background-color:#1a1a1a;-moz-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;-webkit-box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444; display:inline-block;padding:2px;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;position:absolute;}.progress-bar span{display:block;height:100%;background-color:#777;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;-moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;-webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;-webkit-transition: width .4s ease-in-out;-moz-transition: width .4s ease-in-out;-ms-transition: width .4s ease-in-out;-o-transition: width .4s ease-in-out;transition: width .4s ease-in-out;} .color span {background-color: #34c2e3;}.shine span {position: relative;}.shine span::after{content:'';opacity:0;position:absolute;top:0;right:0;bottom:0;left:0;background:\'#fff\';-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;-webkit-animation:animate-shine 2s ease-out infinite;-moz-animation: animate-shine 2s ease-out infinite;}@-webkit-keyframes animate-shine { 0% {opacity: 0; width: 0;} 50% {opacity: .5;} 100% {opacity: 0; width: 95%;}}@-moz-keyframes animate-shine { 0% {opacity: 0; width: 0;} 50% {opacity: .5;} 100% {opacity: 0; width: 95%;} }.frameElement button { outline: none !important}.frameElement button[domVal=bold],.frameElement button[domVal=left],.frameElement button[domVal=center],.frameElement button[domVal=right],.frameElement button[domVal=\"400\"]  { background: #3e3e3e;background: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNlM2UzZSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEzJSIgc3RvcC1jb2xvcj0iIzIwMjAyMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjE0JSIgc3RvcC1jb2xvcj0iIzI0MjQyNCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+\');background: -moz-linear-gradient(top,  #3e3e3e 0%, #202020 13%, #242424 14%, #000000 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#3e3e3e), color-stop(13%,#202020), color-stop(14%,#242424), color-stop(100%,#000000)); background: -webkit-linear-gradient(top,  #3e3e3e 0%,#202020 13%,#242424 14%,#000000 100%);background: -o-linear-gradient(top,  #3e3e3e 0%,#202020 13%,#242424 14%,#000000 100%);background: -ms-linear-gradient(top,  #3e3e3e 0%,#202020 13%,#242424 14%,#000000 100%);background: linear-gradient(to bottom,  #3e3e3e 0%,#202020 13%,#242424 14%,#000000 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#3e3e3e\', endColorstr=\'#000000\',GradientType=\'0\');border:\'1px solid #000\';border-radius:\'5px;color:#fff;\'}.frameElement button[domVal=normal] { background:\'#3e3e3e\';border:\'1px solid #000\';border-radius:\'5px\';color:\'#fff;\'}.frameElement .button {border-radius:\'5px\';border: none;}</style>";
	//console.log('ad.js - adCss set');
	
	adJSContent += `<scr`;
	//console.log('ad.js - adJS = '+adJSContent);
	adJSContent += `ipt type=\"text/javascript\">
	    alert(12); 
		var isNonIframeAd = (window.requestJson && window.requestJson.contTyp && window.requestJson.contTyp[0] == \"div\"); 
		console.log(isNonIframeAd); 
		if(!window.adContainer){
			window.adContainer = window.frameElement.getAttribute(\"adContainer\")
		}; 
		window[window.adContainer] = {}; `;
	
	adJSContent += `var mainModule =  window[window.adContainer]; 
	(function(flgNonIframeAd,adContainer){
		var adtype = \'expandable_fullscr\';
		var adLoadStrategy = \'loadSmart\';
		var asUrl = \'http://collector.bonzai.mobi/rec\';
		var assetS3BucketUrl = \'http://d3m98duogo0w61.cloudfront.net/\';
		var formatJson = \'{\"isCustom\":true,\"pages\":{\"banner\":{\"isCustom\":false,\"type\":\"banner\"},\"full-screen\":{\"isCustom\":false,\"type\":\"full-screen\"},\"loading-page\":{\"isCustom\":false,\"type\":\"full-screen\"}},\"pageProps\":{\"nsuc\":{},\"on2f\":{},\"6okk\":{}}}\'; 
		var adaptorObj;
		var previewExecution = \'true\';
		var richVideoData = \'{}\';
		var isCrossScreenFormat = false;
		var urlTweenLiteCss = \'//cdnjs.cloudflare.com/ajax/libs/gsap/1.13.2/plugins/CSSPlugin.min.js\';
		var urlTweenLiteScript = \'//cdnjs.cloudflare.com/ajax/libs/gsap/1.13.2/TweenLite.min.js\';
		var miscPageAssets = \'{}\';
		var bonzai = {};`;

		adJSContent += `
bonzai.NS = function (nsStr, obj) {
    var nsArr = nsStr.split('.');
    if (nsArr && nsArr.length > 0) {
        var ns = bonzai;
        for (var i = 0; i < nsArr.length; i++) {
            var str = nsArr[i];
            if (typeof ns[str] != "object") {
                ns[str] = (i == nsArr.length - 1 && obj) ? obj : {};
            }
            ns = ns[str];
        }
    }
}

var AdUTilAPI = {
    //Get Element By ID
	
	isIE9: function(){
		console.log(\'isIE9 called\');
		var d = document.createElement(\"DIV\");
		d.innerHTML = \"<!--[if IE 9]><i></i><![endif]-->\";
		return d.getElementsByTagName(\"i\").length == 1;
	},
	
    getElementById: function (id) {
        var self = this;
        var elements = self.querySelectorAll(\"*[data-id='\" + id + \"']\");
        var element = null;
        if (elements && elements.length > 0) {
            element = elements[0];
        }

        return element;
    },

    getElementInParentById: function (id) {
        var mainDiv = getAdOverlayDiv();
        var element = mainDiv.querySelector(\'#\' + id);
        return element;
    },

    //Get First Element By className
    getElementByClassName: function (className) {
        var body = getAdBody();
        var element = body.querySelector(\'.\' + className);
        return element;
    },

    //Get All Element By Class Name
    getAllElementsByClassName: function (className) {
        var self = this;
        var body = getAdBody();
        var elements = self.querySelectorAll(\'.\' + className);
        return elements;
    },

    querySelectorAll: function (criteria) {
        var body = getAdBody();
        var elements = body.querySelectorAll(criteria);
        return elements;
    },
    
    querySelectorAllByParent: function (parent,criteria) {
        var elements = parent.querySelectorAll(criteria);
        return elements;
    },

    getElementsByTagName: function (tagName) {
        var body = getAdBody();
        var elements = body.getElementsByTagName(tagName);
        return elements;
    },

    getElementId: function (elem) {
        var id = null;
        if (elem) {
            id = elem.getAttribute(\'data-id\');
        }
        return id;
    },
    getAdditionalMacro: function (keyName) {
        var val = null;
        if (keyName) {
            val = getAddiMacroByKeyName(keyName);
        }
        return val;
    },
    getTrackers: function (keyName) {
        var val = null;
        if (keyName) {
            val = getMacroTrs(keyName);
        }
        return val;
    },

    getElementByName: function (name) {
        var self = this;
        var elements = self.querySelectorAll(\"*[name='\" + name + \"']\");
        var element = null;
        if (elements && elements.length > 0) {
            element = elements[0];
        }
        return element;
    },
    getAdId: function () {
        var adId = \"\";
        if (hasProperty(requestJson, \"adid\")) {
            if (requestJson.adid && requestJson.adid.length > 0) {
                adId = requestJson.adid[0];
            } else {
                adId = requestJson.adid;
            }
        } else if (getWindowParent().adid) {
            adId = getWindowParent().adid;
        }
        return adId;
    },
    sendAnalyticsCall: function (pageId, eventType, xtraIn, isPgDims) {
        adAnalyticsObject.sendInfoToAnalytics(pageId, eventType, xtraIn, isPgDims);
    },

    getParentWrapElementId: function (elemId) {
        var wrapElemId = elemId;
        if (AdUTilAPI.getElementById(elemId)) {
            var parentElem = AdUTilAPI.getElementById(elemId).parentNode;
            while (parentElem) {
                var parentId = AdUTilAPI.getElementId(parentElem);
                if (parentId && parentId.indexOf(\"animWrapper\") != -1) {
                    wrapElemId = parentId;
                    parentElem = parentElem.parentNode;
                }
                else if(AdUTilAPI.getElementById(elemId).getAttribute(\"tagname\")==\"video\") {
                    wrapElemId = parentId;
                    break;
                }
                else {
                    break;
                }
            }
        }
        return wrapElemId;
    },
    hideCloseButtons : function(pageId){
    	
    	var self = this;
    	
    	var closeBtns = null;
    	
    	if(pageId){
    		var pageElem = self.getElementById(pageId);
    		closeBtns = pageElem.querySelectorAll(\'*[adtype = \"closebutton\"]\');
    	}else{
    		closeBtns = self.querySelectorAll(\'*[adtype = \"closebutton\"]\');
    	}
    	if(closeBtns){
    		for(var i=0;i<closeBtns.length;i++){
    			var closeBtn = closeBtns[i];
    			closeBtn.style.display = \'none\';
    		}
    	}
    },
    
    //finds all the elements of the given adType in the given pageId
    getElementsByTypeInPage: function(pageId, elemType){
    	var self = this;    	
    	var elems = null;
    	
    	if(pageId){
    		var pageElem = self.getElementById(pageId);
    		elems = pageElem.querySelectorAll(\'*[adtype=\"'+ elemType +'\"]\');
    	}else{
    		elems = self.querySelectorAll(\'*[adtype=\"'+ elemType +'\"]\');
    	}
    	return elems;
    },
    
    //this method finds if any videos are playing in fullscreen and exits fullscreen
    exitVideoFromFullScreen: function(pageId){
    	if(!pageId){
    		return;
    	}
    	var self = this;
    	var elemType = 'video';
    	var videos = self.getElementsByTypeInPage(pageId, elemType);
    	for(i=0, l = videos.length; i<l; i++){
    		//this can be done better once we find a working fullscreen check for iOS
    		exitFullscreen(null, videos[i]);
    	}
    },
    
    getFormatUtilsObj: function () {
        return glbFormatObj;
    },
    getPreviewEnvObj: function () {
        return previewEnvObj;
    },
    isIE9Browser : function(){
    	if(navigator.appName.indexOf(\"Internet Explorer\")!=-1 &&  navigator.appVersion.indexOf(\"MSIE 9\") !=-1 ){
    		return true;
    	}
    	return false;
    },
    handleDimensionsForAdPage : function(page, ispreview,isDimSet){
    handleDimensionsForAdPage(page, ispreview, !isDimSet);
    },
    getCurrentPageId : function(){
    	return currentPageId;
    },
    getOverlayDiv : function() {
    	var overlayDiv = getAdOverlayDiv();
    	return overlayDiv;
    },
    getSettingProp : function(prop,defaultVal){
        if (adTagJson) {
            var propVal = getPropertyVal(adTagJson.settings, prop, defaultVal);
            return propVal;
        }
    },
    checkMraidState : function(){
    	var self = this,stateChkVal = self.getSettingProp(\"chekMraidState\",\"Y\");
    	if(stateChkVal && stateChkVal.toLowerCase() == \"n\"){
    		return false;
    	}
    	return true;
    },
    checkMraidViewable : function(){
    	var self = this,viewChkVal = self.getSettingProp(\"chekMraidView\",\"Y\");
    	if(viewChkVal && viewChkVal.toLowerCase() == \"n\"){
    		return false;
    	}
    	return true;
    },
	isIE11: function(){
		var isIE11Browser = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
		return isIE11Browser
	},
	detectIE : function(){
	    var ua = window.navigator.userAgent;
	    var msie = ua.indexOf(\'MSIE \');
	    var trident = ua.indexOf(\'Trident/\');
	    if (msie > 0) {
	        // IE 10 or older => return version number
	        return parseInt(ua.substring(msie + 5, ua.indexOf(\'.\', msie)), 10);
	    }

	    if (trident > 0) {
	        // IE 11 (or newer) => return version number
	        var rv = ua.indexOf(\'rv:\');
	        return parseInt(ua.substring(rv + 3, ua.indexOf(\'.\', rv)), 10);
	    }
	    // other browser
	    return false;
	},
	attachVideoClick : function(compId){
		var self = this;
		var actObj = this.videoClickMap ? this.videoClickMap[compId] : null;
		var bonzaiVideoEngine = this.videoBehaviourMap ? this.videoBehaviourMap[compId]?this.videoBehaviourMap[compId].player : null: null; 
		var video = self.getElementById(compId);
		var callback = function(e){
			exitFullscreen();
			if(!video.paused){
				video.pause();
        		assignAction(e,actObj.comp,actObj.actionStr);
        	}
		};
		var vroomCallback = function(e){
			bonzaiVideoEngine.pause();
			assignAction(e,actObj.comp,actObj.actionStr);
		};
		if(actObj){
			video.addEventListener(\'click\', callback);
			// Video is playing again on video click because of touch end. we are commenting this. MIZU-4942
		//	video.addEventListener('touchend', callback);
			video.style.setProperty (\"-webkit-tap-highlight-color\", \"transparent\", null);
			
			if(bonzaiVideoEngine){
				bonzaiVideoEngine.attachVideoClick(vroomCallback);
			}
		}
	},
	exitFullScreenOnVideoEnd : function(video){
		video.addEventListener(\"ended\", exitFullscreen);
	},
	gotoPageByPageID: function (pageId) {
        var self = this;
		var pageToShow = self.getElementById(pageId);
		goToPageAction(pageToShow);	
   },
   
   getAdFormatType: function(){
   		return adtype;
   },
   getAdInvocationElem : function(){
	   return getAdInvocationElem();
   },
   getParentWindow : function(){
	   return getWindowParent();
   },
   
   applyFallbackImage : function(page){
		var fallbackImagePlugin =  bonzai.plugin.fallbackImgUtils();
		var fallBackImgPropsJson = fallBackImgProps?fallBackImgProps : {};
		var inVocationElem = getAdInvocationElem();
		var appendTo = getAdOverlayDiv();
		var options = {
				\'height\' : page.getAttribute(\"pageHeight\"),
				\'width\' : page.getAttribute(\"pageWidth\"),
				\'fallbackImgProps\' : fallBackImgPropsJson,
				\'invocationElem\' : inVocationElem,
				\'appendTo\' : appendTo
		};
		fallbackImagePlugin.init(options);
   },
    getHostNameFromURL :function (assetS3Url){
		var self = this;
		var i = self.getNthIndexOf(assetS3Url, \"/\", 3)+1;
		var url = assetS3Url.substr(0, i);
		return url;
	},
	getNthIndexOf : function (targetStr, patternStr, n) {
		return targetStr.split(patternStr, n).join(patternStr).length;
	},
	closeAd : function(adPageId){
		var self = this;
		var firstPageId = self.getFirstBannerTypePage();
		closeAdCb(adPageId,firstPageId);
	},
   getFirstBannerTypePage : function(){
	   var self = this,firstPageId;
	   var firstBanner = getFirstExpandblePage(\'banner\');
	   if(!firstBanner){
		   firstBanner = getFirstExpandblePage(\'grid\');
	   }
	   if(firstBanner){
		   firstPageId =  self.getElementId(firstBanner)
	   }
	   return firstPageId;
   },

   saveScreenDimsByOrientation : function(orienatationType,pageType,dims){
		
		if(typeof globalScreenDimsByOrientation == \"undefined\"){
			globalScreenDimsByOrientation = {};
		}
		if(!orienatationType || !dims){
			return;
		}
		
		var prevEnvObj = this.getPreviewEnvObj();
		
		if(prevEnvObj.isFromPreview()){
			var adIdentifier = prevEnvObj.getPreviewParam(\"adId\");
		}else{
			var adIdentifier = getAdScriptId();
		}		
		
		if(!globalScreenDimsByOrientation[adIdentifier]){
			globalScreenDimsByOrientation[adIdentifier] = {};
		}
		
		if(!globalScreenDimsByOrientation[adIdentifier][pageType]){
			globalScreenDimsByOrientation[adIdentifier][pageType] = {};
		}
		
		if(!globalScreenDimsByOrientation[adIdentifier][pageType][orienatationType]){
			globalScreenDimsByOrientation[adIdentifier][pageType][orienatationType] = dims;
		}
	},
   getSavedDimsByOrientation : function(orienatationType,pageType){
	    
	   	if(typeof globalScreenDimsByOrientation == \"undefined\"){
			return null;
	   	}
		var prevEnvObj = this.getPreviewEnvObj();
		
		if(prevEnvObj.isFromPreview()){
			var adIdentifier = prevEnvObj.getPreviewParam(\"adId\");
		}else{
			var adIdentifier = getAdScriptId();
		}
		
		if(!globalScreenDimsByOrientation[adIdentifier] || !globalScreenDimsByOrientation[adIdentifier][pageType]){
			return null;
		}
		var dims = globalScreenDimsByOrientation[adIdentifier][pageType][orienatationType];
		return dims;
	},
	restartVideo : function(video){
		var self = this;
		var videoParent = video.parentNode;
		if (video && video.played && video.played.length && videoParent) {
			var duration = video.getAttribute(\'videoduration\');
			var currentTime = parseFloat(duration) / 100;
			self.setVideoCurrentTime(video, currentTime);				
		}
	},
	setVideoCurrentTime : function(video, currentTime){
		var videoParent = video.parentNode;
		try {
			video.currentTime = currentTime;
			videoParent.pause && videoParent.pause();
		// Mobile Safari's quicktime player will error if this doesn't work.
		} catch(error) {
			if (error.code === 11) { // Invalid State Error
				try {

				}
				catch(error1) {

				}
			}
		}
	
	},
 isDocumentFullScreen : function(){
		if (document.fullscreenElement ||    // alternative standard method
				document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
			return true;
		}
		return false;
 },
 getRichVideo : function(videoElem) {
		var self = this, richVideoId, richVideo;
		if (!videoElem)
			return;
		if(self.isRichVideo(videoElem)){
			return videoElem;
		}
		if (!videoElem.nodeType) {
			videoElem = self.getElementById(videoElem);
		}
		richVideoId = videoElem.getAttribute(\"childRichVideoId\");
		if (richVideoId) {
			richVideo = self.getElementById(richVideoId);
		}
		return richVideo
	},
 handleRichVideoEndActions : function(richVideo){
	 var self = this;
	 var richVideoObj = self.getRichVideoData();
 	if(!richVideoObj) return;
 	var richVideoId = self.getElementId(richVideo);
 	var richVideoObj = richVideoObj[richVideoId]? richVideoObj[richVideoId]:{};
 	var actionData = richVideoObj.richVideoAction;
 	 	var  videoEndActions = bonzai.plugin.videoEndActions(richVideo);
 	       videoEndActions.init(actionData);
 },
 getRichVideoData : function() {
		var self = this;
		if (typeof richVideoData == \"undefined\") {
			return;
		}
		if (typeof richVideoData == \"string\") {
			// richVideoData --- this object contains rich video end actions
			// data. This object is passed from CG.
			richVideoData = JSON.parse(richVideoData);
		}
		return richVideoData;
 },
 isRichVideo : function(video){
	 if(video && video.getAttribute(\"subType\") == \"richVideo\"){
		 return true;
	 }
	 return false;
 },
logMessage : function(){
		var self = this,isLogEnabled = self.getSettingProp(\"isLogEnabled\",\"N\");
		if(isLogEnabled && isLogEnabled.toUpperCase() === \"Y\"){
			var args = Array.prototype.slice.call(arguments);
			console.log.apply(console, args);
		}
		return;
	}
}; //AdUTilAPI ends



//Exposed apis for exeternal use.
mainModule.AdUTilAPI = AdUTilAPI;
//To support legacy ads, we are making references available as per the old references. We will depricate this later on.
window.AdUTilAPI = AdUTilAPI;
(function (GN) {
    var formatData = null;
    var adFormatUtils = function (formatJson) {
        formatData = formatJson;
        consts = {
    		IFRAME:\'iframe\',
    		HEADER:\'header\'
    	};
        var getPages = function () {
            return formatData ? formatData.pages : null;
        }

        var isCustomPageType = function (pageType) {
            var pages = getPages();
            var page = pages[pageType];
            return page?page.isCustom:false;
        }
        //New formats will be handled in different way to that of old formats.
        var isNewFormat = function(){
        	var isNewFormat = formatData.isNewFormat;
        	return isNewFormat;
        }
        var disableAdPlacementCheck = function(){
        	var disAdFmtChk = formatData.disableAdPlacementCheck;
        	return disAdFmtChk;
        }
        //Gets all adPagetypes present in the format 
        var getAdPageTypes = function(){
        	var keys =  Object.keys(formatData.pages);
        	return keys;
        }
        
        var getPageTypeProps = function(pageType){
        	var pageTypeProps = getPages()[pageType];
        	return pageTypeProps;
        }
        
        var getContainerTypeByPageType = function(pageType){
        	var cntrType = getPageTypeProps(pageType).containerType;
        	return cntrType;
        }
        
        var canCreateContainer = function(pageType){
        	var crCntr = getPageTypeProps(pageType).createContainer;
        	return crCntr;
        }
        
        var getPlacementByPageType = function(pageType){
        	var plcmt = getPageTypeProps(pageType).placement;
        	return plcmt;
        }
        
        var getPlacementPropValue =  function(pageType,prop){
        	var value = getPlacementByPageType(pageType)[prop];
        	return value;
        }
        
        var getPagePlacementByPageType = function(pageType){
        	var plcmt = getPageTypeProps(pageType).pagePlacement;
        	return plcmt;
        }
        
        var getPagePlacementPropValue =  function(pageType,prop){
        	var value = getPagePlacementByPageType(pageType)[prop];
        	return value;
        }
        var createNewObject = function(oldJsonObj){
        	
        	var newObj = JSON.parse(JSON.stringify(oldJsonObj));
        	
        	return newObj;
        }
        var prepareContainerProperties =  function(pageType){
        	
        	var plcmt = formatUtilObject.getPlacementByPageType(pageType);
        	
        	var cntrProps = createNewObject(plcmt);
        	
        	var adFormat = AdUTilAPI.getAdFormatType();
        	
        	cntrProps.adFormat = adFormat;
        	
        	var top = plcmt.top;
    		if(top){
    			cntrProps.top = top.value;	
    		}

            var scrollingTop = plcmt.scrollingTop;
            if(scrollingTop){
                cntrProps.scrollingTop = scrollingTop.value;  
            }

            var website = plcmt.website;
            if(website){
                cntrProps.website = website.value;
            }

    		var bottom = plcmt.bottom;
    		if(bottom){
    			cntrProps.bottom = bottom.value;	
    		}
    		
    		var centerOffset = plcmt.centerOffset;
    		if(centerOffset){
    			cntrProps.centerOffset = centerOffset.value;
    		}
        	
        	return cntrProps;
        }
        var isIframeContainer = function(pageType){
        	var isIfrmCntr = (getContainerTypeByPageType(pageType) == consts.IFRAME);
        	
        	return isIfrmCntr;
        }
        var isHeaderPageType = function(pageType){
        	var subType = getPageTypeProps(pageType).subType;
        	var isHeaderPT = (subType == consts.HEADER);
        	return isHeaderPT;
        }
        var getAllPageProps = function(){
        	var pageProps = formatData.pageProps; 
        	return pageProps;
        }
        var getPagePropsById = function(pageId){
        	
        	var allPageProps = getAllPageProps();
        	if(!allPageProps){
        		return;
        	}
        	var pageProps =  allPageProps[pageId];
        	
        	return pageProps;
        }
        function updateSkinPropsWithSiteDetails(skinProperties){
        	
        	var host =  window.top.location.host;
        	
        	if(host.indexOf(\"vogue.\") > -1){
        		skinProperties.website = \"Vogue\";
        	}else if(host.indexOf(\"gq.\") > -1){
        		skinProperties.website = \"GQ\";
        	}
        }
        
        this.isFixedPage = isCustomPageType;
        this.isNewFormat = isNewFormat;
        this.getAdPageTypes = getAdPageTypes;
        this.getPageTypeProps = getPageTypeProps;
        this.getContainerTypeByPageType = getContainerTypeByPageType;
        this.canCreateContainer = canCreateContainer;
        this.getPlacementByPageType = getPlacementByPageType;
        this.getPlacementPropValue = getPlacementPropValue;
        this.getPagePlacementByPageType = getPagePlacementByPageType;        
        this.getPagePlacementPropValue = getPagePlacementPropValue;
        this.isIframeContainer = isIframeContainer;   
        this.isHeaderPageType = isHeaderPageType;
        this.prepareContainerProperties = prepareContainerProperties;
        this.getPagePropsById = getPagePropsById;
        this.updateSkinPropsWithSiteDetails = updateSkinPropsWithSiteDetails;
        this.disableAdPlacementCheck = disableAdPlacementCheck;
        
    } //adFormatUtils ends

    GN.NS(\"obj.adFormatUtils\", adFormatUtils);
})(bonzai);

var glbFormatObj = new bonzai.obj.adFormatUtils(JSON.parse(formatJson));
var sdkObject = function createSdkObject() {
	var self = this;
	self.mraidObj = new adMraidObj();
};
sdkObject.prototype = {
	expandAd : function(pw, ph,pageToShowDims) {
		var self = this;
			self.mraidObj.expandAd(pw, ph,pageToShowDims);
	},

	isCustomSdk : function() {
		var self = this;
		if (self.mraidObj.getMraid()) {
			return true;
		}
		return false;
	},

	getMriadObj : function() {
		var self = this;
		return self.mraidObj;
	},

	registerSdkHandlers : function() {
		var self = this;
		if (self.mraidObj.getMraid()) {
			self.mraidObj.registerMraidHandlers();
		}
	},

	showAd : function(callback) {
		var self = this;
		self.mraidObj.showAd(callback);
	},

	closeSdkObj : function() {
		var self = this;
		self.mraidObj.closeMraid();
	},

	getOrientationBySdk : function() {
		var self = this;
		return self.mraidObj.getOrientationByMraid();
	},

	getScreenSizeBySdk : function() {
		var self = this;
		return self.mraidObj.getScreenSize();
	},

	getDefaultPositionBySdk : function() {
		var self = this;
		return self.mraidObj.getDefaultPosition();
	},
	getExpandProperties : function(){
		var self = this;
		var expanProps = null;
		if(self.mraidObj.isGetExpandPropertiesAvail()){
			expanProps = self.mraidObj.getExpandProperties();
		}
		// as few of the app is not giving dimension for getExpandProperties so we are taking screen size by sdk.
		 if(!expanProps || expanProps.width <= 0){
			expanProps = self.getScreenSizeBySdk();
		 }
		return expanProps;
	},
	isAdMobSdk : function(){
		 var parentWin = getWindowParent(),isAdMob = parentWin && typeof parentWin[\'admob\'] !== \'undefined\' && parentWin[\'admob\'].isAdMobSdk();
		 if(isAdMob){
			 return true;
		 }
		 return false;
	}

}; //sdkObject.prototype ends


(function (GN) {
    //AdAssetLoaderNew STARTS
    var AdAssetLoaderNew = function () {
        var adPages = [];
        var initialized = false;
        var linkedPageMap = null;
        var isFirstInteractionOccured = false;
        var progressBar = new bonzai.obj.adloadprogressbar();
        var allPagesLoaded = false;
        var adLoadStrategy = null;
        var progressBarInterval = null;
        var deviceResolution = \"\";

        var init = function (linkPageMap, loadStrategy) {

            linkedPageMap = linkPageMap;

            if (loadStrategy === \"undefined\")
                adLoadStrategy = \"loadSmart\";
            else
                adLoadStrategy = loadStrategy;

            var adPageFactory = new bonzai.obj.adpagefactory();

            try {
                adPages = adPageFactory.createAdPagesFromDom();
                initialized = true;

                setAdLoadStrategy();

                //setDeviceResolution();

            }
            catch (e) {
                initialized = false;
            }

        };

        var animationLibrary = {
            loadedLite: false,
            loadedCss: false,
            loaded: false,
            tweenCssScript: urlTweenLiteCss, // FROM CG
            tweenLiteScript: urlTweenLiteScript, // FROM CG
            // tweenLiteScript: atob("aHR0cDovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9nc2FwLzEuMTMuMi9Ud2Vlbk1heC5taW4uanM="), // Max
            exec: function (th, args) {
                var scriptLite = document.createElement(\"SCRIPT\"),
					scriptCss = document.createElement(\"SCRIPT\");

                function loadCheck() {
                    if (animationLibrary.loadedCss && animationLibrary.loadedLite) {
                        animationLibrary.loaded = true;
                        loadPage.apply(th, args);
                    }
                }

                scriptLite.onload = function () {
                    animationLibrary.loadedLite = true;
                    loadCheck();
                };
                scriptCss.onload = function () {
                    animationLibrary.loadedCss = true;
                    loadCheck();
                };

                if (!AdUTilAPI.isIE9() || !isCrossScreenFormat) { // @TODO: remove " && false" in production, only for dev purpose
                    scriptLite.onload();
                    scriptCss.onload();
                    return;
                }

                scriptLite.src = this.tweenLiteScript;
                scriptCss.src = this.tweenCssScript;
                document.head.appendChild(scriptLite);
                document.head.appendChild(scriptCss);
            }
        };

        var loadPage = function (pageId, cbOnAdPageLoad) {
            var th = this;
            if (!animationLibrary.loaded) {
                animationLibrary.exec(th, arguments);
                return;
            }
            if (adLoadStrategy === \"loadAll\") {
                loadPagesForLoadAllStrategy(pageId, cbOnAdPageLoad);
                return;
            }


            if (false === isFirstInteractionOccured) {
                if (adLoadStrategy === \"loadExtraSmart\") {
                    loadPagesForExtraSmartStrategy(pageId, cbOnAdPageLoad);
                    adLoadStrategy = \"loadSmart\";
                }
                else {
                    loadPagesForLoadSmartStrategy(pageId, cbOnAdPageLoad);
                }
                return;
            }

            if (adLoadStrategy === \"loadSmart\" || adLoadStrategy === \"loadExtraSmart\") {
                loadPagesForLoadSmartStrategy(pageId, cbOnAdPageLoad);
                return;
            }

            if (adLoadStrategy === \"loadEngagement\") {
                loadPagesForLoadEngagementStrategy(pageId, cbOnAdPageLoad);
                return;
            }
        };

        var loadPagesForLoadAllStrategy = function (pageId, cbOnAllPageLoad) {

            if (allPagesLoaded) {
                hideProgressBar();
                cbOnAllPageLoad();
                return;
            }

            var allPages = [];
            for (var i = 0; i < adPages.length; i++) {
                if (adPages[i].pageType !== \"loading-page\") {
                    allPages.push(adPages[i]);
                }
            }

            var totalPageCnt = allPages.length;
            var loadedPageCnt = 0;

            var adPage = getAdPageById(pageId);
            var bManualProgressUpdate = totalPageCnt === 1;

            initProgressBar(adPage, false);

            function onAdPageLoad(loadedPage) {

                ++loadedPageCnt;
                var loadPercent = (loadedPageCnt / totalPageCnt) * 100;
                progressBar.updateProgress(loadPercent);

                if (loadedPageCnt === totalPageCnt) {
                    allPagesLoaded = true;
                    hideProgressBar();
                    cbOnAllPageLoad();
                }

            }

            for (var j = 0; j < allPages.length; j++) {
                allPages[j].load(onAdPageLoad);
            }

            if (bManualProgressUpdate) {
                var repeatCnt = 1;

                function dummyUpdateProgressBar() {
                    progressBar.updateProgress(repeatCnt * 25);
                    repeatCnt++;
                    if (repeatCnt < 4) {
                        setTimeout(dummyUpdateProgressBar, 200);
                    }
                }

                dummyUpdateProgressBar();
            }
        };

        var loadPagesForExtraSmartStrategy = function (pageId, cbOnAllPageLoad) {

            //fetch the page using pageId
            var adPage = getAdPageById(pageId);
            //get DOB pages for the sequenceId of the current page, we call this allPages
            var allPages = getAdPagesByCommonId(adPage.commonId);
            //get an array of all the linked pages of the currentPage
            var linkedPageArr = getLinkedPagesForPageId(pageId);
            //parse the linked pages and add its DOB also to the allPages
            for (var i = 0; i < linkedPageArr.length; i++) {
                var adPg = getAdPageById(linkedPageArr[i]);
                if (adPg) {
                    var dobPages = getAdPagesByCommonId(adPg.commonId);
                    for (var j = 0; j < dobPages.length; j++) {
                        allPages.push(dobPages[j]);
                    }
                }
            }

            //parse adPages and ad all banner pages to allPages
            for (var i = 0; i < adPages.length; i++) {
                if (adPages[i].pageType === \"banner\") {
                    if (allPages.indexOf(adPages[i]) < 0)
                        allPages.push(adPages[i]);
                }
            }

            var totalPageCnt = allPages.length;
            var loadedPageCnt = 0;
            var bManualProgressUpdate = totalPageCnt === 1;

            initProgressBar(adPage, true, true);

            //callback for the individual page load
            //update the count as well as progressbar
            function onAdPageLoad(loadedPage) {

                ++loadedPageCnt;
                var loadPercent = (loadedPageCnt / totalPageCnt) * 100;
                progressBar.updateProgress(loadPercent);

                if (loadedPageCnt === totalPageCnt) {
                    hideProgressBar();
                    cbOnAllPageLoad();
                }

            }

            //parse allPages array and start loading each page
            for (var j = 0; j < allPages.length; j++) {
                allPages[j].load(onAdPageLoad);
            }

            if (bManualProgressUpdate) {
                var repeatCnt = 1;

                function dummyUpdateProgressBar() {
                    progressBar.updateProgress(repeatCnt * 25);
                    repeatCnt++;
                    if (repeatCnt < 4) {
                        setTimeout(dummyUpdateProgressBar, 200);
                    }
                }

                dummyUpdateProgressBar();
            }
        };

        var loadPagesForLoadSmartStrategy = function (pageId, cbOnAdPageLoad) {
            var adPage = getAdPageById(pageId);
            function onAdPageLoad() {
                hideProgressBar();
                cbOnAdPageLoad();
            }

            pauseLoading(pageId);

            if (adPage) {

                initProgressBar(adPage, true);
                adPage.load(onAdPageLoad);
            }
        };

        var loadPagesForLoadEngagementStrategy = function (pageId, cbOnAllPageLoad) {
            // *** VERY IMPORTANT :  page loading already started on first iteration, all wee need to do is
            // *** VERY IMPORTANT :  to wait for loading to complete and just update the load percent in this method

            if (allPagesLoaded) {
                hideProgressBar();
                cbOnAllPageLoad();
                return;
            }

            var totalPageCnt = adPages.length;
            var adPage = getAdPageById(pageId);
            initProgressBar(adPage, false);

            function updateLoadPercent() {
                var loaded = 0;
                for (var i = 0; i < adPages.length; i++) {
                    if (adPages[i].isLoaded()) {
                        loaded++;
                    }
                }
                var percent = (loaded / totalPageCnt) * 100;
                progressBar.updateProgress(percent);

                if (loaded >= totalPageCnt) {
                    allPagesLoaded = true;
                }
            }

            updateLoadPercent();

            function waitForAllPageLoad() {
                if (false === allPagesLoaded) {
                    updateLoadPercent();
                    setTimeout(waitForAllPageLoad, 300);
                }
                else {
                    hideProgressBar();
                    cbOnAllPageLoad();
                }
            }

            waitForAllPageLoad();
        };

        var pauseLoading = function (currentPageId) {

            function pause() {
                for (var i = 0; i < adPages.length; i++) {

                    if (adPages[i].id !== currentPageId) {

                        adPages[i].pauseLoading();
                    }
                }
            }

            if (progressBarInterval) {
                clearInterval(progressBarInterval);
                hideProgressBar();
            }

            setTimeout(pause, 100);
        };

        var getAdAssetPages = function () {
            return adPages;
        };

        var getAdPageById = function (pageId) {
            for (var i = 0; i < adPages.length; i++) {
                if (adPages[i].id === pageId)
                    return adPages[i];
            }

            return null;
        };

        var getAdPagesBySequenceId = function (sequenceId) {

            var adPgs = [];
            for (var i = 0; i < adPages.length; i++) {
                if (adPages[i].sequenceId === sequenceId)
                    adPgs.push(adPages[i]);
            }

            return adPgs;
        };

        var getAdPagesByCommonId = function (commonId) {

            var adPgs = [];
            for (var i = 0; i < adPages.length; i++) {
                if (adPages[i].commonId === commonId)
                    adPgs.push(adPages[i]);
            }
            return adPgs;
        };

        var getAdPageByType = function (pageType) {
            for (var i = 0; i < adPages.length; i++) {
                if (adPages[i].pageType === pageType)
                    return adPages[i];
            }

            return null;
        };

        var startLoadingOfLinkedPages = function (currentPageId) {

            if (!isFirstInteractionOccured)
                return;

            if (adLoadStrategy === \"loadSmart\" || adLoadStrategy === \"loadExtraSmart\")
                loadLinkedPagesForSmartLoad(currentPageId);

            function onAllLoad() {
                return;
            }

            if (adLoadStrategy === \"loadEngagement\")
                loadLinkedPagesForEngagementLoad(currentPageId, onAllLoad);


        };

        var loadLinkedPagesForSmartLoad = function (currentPageId) {

            var currAdPage = getAdPageById(currentPageId);

            function onLinkedPageLoad(loadedPage) {
            }

            var linkedPageArr = getLinkedPagesForPageId(currentPageId);

            for (var i = 0; i < linkedPageArr.length; i++) {

                var adPage = getAdPageById(linkedPageArr[i]);

                if (adPage) {
                    var dobPages = getAdPagesByCommonId(adPage.commonId);

                    for (var j = 0; j < dobPages.length; j++) {
                        dobPages[j].load(onLinkedPageLoad);
                    }
                }

            }
        };

        var loadLinkedPagesForEngagementLoad = function (currentPageId, cbOnAllLoad) {

            var loadCnt = 0;

            var arrPagesToLoad = [];

            for (var i = 0; i < adPages.length; i++) {
                if (adPages[i].id !== currentPageId) {
                    arrPagesToLoad.push(adPages[i]);
                }
            }

            var maxCnt = arrPagesToLoad.length;

            function onPageLoad(adPage) {
                ++loadCnt;

                if (loadCnt >= maxCnt) {
                    cbOnAllLoad();
                }
            }

            for (var i = 0; i < arrPagesToLoad.length; i++) {

                arrPagesToLoad[i].load(onPageLoad);
            }

            function waitForAllLoad() {
                if (loadCnt < maxCnt) {
                    setTimeout(waitForAllLoad, 50);
                }
                else {
                    return;
                }
            }

            waitForAllLoad();
        };

        var loadLinkedPagesOnFirstInterac = function (currentPageId) {

            if (!isFirstInteractionOccured) {
                isFirstInteractionOccured = true;
                startLoadingOfLinkedPages(currentPageId);
            }
        };

        var getLinkedPagesForPageId = function (pageId) {

            var linkedPageArr = [];
            if (linkedPageMap && linkedPageMap[pageId]) {
                linkedPageArr = linkedPageMap[pageId];
            }
            return linkedPageArr;
        };

        var loadLoadingPage = function (onLoadingPageLoad) {
            var loadingPage = getCurrentLoadingPage();
            if (loadingPage) {
                var loadElem = AdUTilAPI.getElementById(loadingPage.id);
                loadElem.style.display = \"\";
                var dimObj = handleDimensionsForAdPage(loadElem, false, false);
                onLoadingPageLoad();
                loadingPage.load(function(){});
            }
        };

        var getCurrentLoadingPage = function () {
            var loadingPage = getAdPageByType(\'loading-page\');
            if (loadingPage) {
                var loadElem = AdUTilAPI.getElementById(loadingPage.id);
                loadElem = getPageElementBasedOnOrientation(loadElem);
                loadingPage = getAdPageById(AdUTilAPI.getElementId(loadElem));
            }
            return loadingPage;
        };

        var handleLoadingPageOnOrientation = function (pp) {
            var currLoadedPage = getAdPageById(AdUTilAPI.getElementId(pp));
            if (!currLoadedPage.isLoaded()) {
            	progressBar.hideProgressBarCont();
            	if (currLoadedPage.pageType != \'banner\' && currLoadedPage.pageType != \'grid\') {
            		progressBar.showProgressBarCont();
                    loadLoadingPage(function () {
                        progressBar.showLoadingPage();
                    });
                }
            }
        };

        //We are again setting the frame src on page load because in case of 'load all' strategy the actual dimensions of the fbactivity frame parent 
        //will not be available at asset loading time, which is actually available at page load time only.

        var setSrcOnPageFbActivityElems = function (pageId) {
            var adPage = getAdPageById(pageId);

            if (!adPage) {
                return;
            }

            var fbElems = adPage.getAllAssetElementsOfType(\"fbactivity\");
            if (fbElems.length === 0)
                return;

            var fbHelper = new bonzai.obj.fbactivity();
            fbHelper.setSrcOnFbActivityElems(fbElems);
        };

        var initProgressBar = function (adPage, bAutoProgressUpdate, ignoreAutoProgress) {
            // Added check 'bAutoProgressUpdate' below because in loadonengagement stratergy, sometimes ad was not able to show progress bar as it was getting flag true whenever second page was loaded.
            // This issue was for smartload as well as for loadall stratergy as well wheren video or audio present in ad.
            if ((adPage.isLoaded() || adPage.hasOnlyCloseImageAsset) && bAutoProgressUpdate)
                return;

            var pageHeight = AdUTilAPI.getElementById(adPage.id).clientHeight;
            //here spot page is also added to ignore progress bar
            var isBanner = adPage.pageType === \"banner\" || adPage.pageType === \"spot\" || adPage.pageType === \"adhesion-banner\" || adPage.pageType === \"grid\";

            progressBar.init(pageHeight, isBanner);

            if (bAutoProgressUpdate && !ignoreAutoProgress)
                updateProgressBar(adPage);
        };

        var updateProgressBar = function (adPage) {

            function update() {
                if (adPage.getLoadedElemCnt() >= adPage.adAssetElements.length) {
                    clearInterval(progressBarInterval);
                    progressBarInterval = null;
                    progressBar.updateProgress(100);
                    hideProgressBar();
                }
                else {
                    progressBar.updateProgress(adPage.getLoadPercent());
                }
            }

            progressBarInterval = setInterval(update, 750);
        };

        var hideProgressBar = function () {
            progressBar.hideProgressBarCont();
        };

        var getAllAssetElementsOfType = function (type) {

            var allAssetElements = [];

            for (var i = 0; i < adPages.length; i++) {
                allAssetElements = allAssetElements.concat(adPages[i].getAllAssetElementsOfType(type));
            }

            return allAssetElements;
        };

        var setAdLoadStrategy = function () {


            //*********Please note "loadAll" with video elements will never work on iOS devices and banner itself will neven load*****************

            //This is a hack for iOS only devices for loading strategies "loadAll" & "loadSmart"
            //Here we need to load all the videos in ad on first interaction irrespective of user defined loading strategy
            //So explicitly setting the loading strategy = "loadEngagement" for iOS devices with user defined load strategy = "loadAll/loadSmart"
            //of course if they HAVE VIDEO ELEMENTS
            // Removed video elements as we are loading video elements politely now.
            if (devicePlatform.iOS()) {
                if ((adLoadStrategy === \"loadSmart\")) {

                    for (var i = 0; i < adPages.length; i++) {
                        var audioElems = adPages[i].getAllAssetElementsOfType(\"audio\");

                        if (audioElems.length > 0) {
                            adLoadStrategy = \"loadEngagement\";
                            return;
                        }
                    }
                }
            }
        };

        var setDeviceResolution = function () {
            var a = document.documentElement.clientWidth;  // hack on devices screen.width works once we call this
            var b = document.documentElement.clientHeight; // hack on devices screen.height works once we call this

            var scrW = screen.width;
            var scrH = screen.height;
            var dpr = window.devicePixelRatio;

            scrW = Math.min(scrW, scrH);
            scrH = Math.max(scrW, scrH);

            if (devicePlatform.iOS()) {
                scrW = scrW * dpr;
                scrH = scrH * dpr;
            }

            var arrResolutionWidths = [640, 720, 768];

            var diff = 0;
            var min = 9999;
            var resW = 0;

            if (scrW > arrResolutionWidths[arrResolutionWidths.length - 1]) {
                deviceResolution = "";
            }
            else {
                for (var i = 0; i < arrResolutionWidths.length; i++) {

                    diff = Math.abs(arrResolutionWidths[i] - scrW);

                    if (diff < min) {
                        min = diff;
                        resW = arrResolutionWidths[i];
                    }
                    else {
                        break;
                    }
                }

                switch (resW) {
                    case 640: deviceResolution = \"-640x960\"; break;
                    case 720: deviceResolution = \"-720x1280\"; break;
                    case 768: deviceResolution = \"-768x1024\"; break;
                    default: deviceResolution = \"\";
                }
            }
        };

        var updateAdLoadStratergy = function (laodStratergy) {
            adLoadStrategy = laodStratergy;
        };

        this.getAdPageById = getAdPageById;
        this.startLoadingOfLinkedPages = startLoadingOfLinkedPages;
        this.loadPage = loadPage;
        this.init = init;
        this.hideProgressBar = hideProgressBar;
        this.pauseLoading = pauseLoading;
        this.loadLinkedPagesOnFirstInterac = loadLinkedPagesOnFirstInterac;
        this.setSrcOnPageFbActivityElems = setSrcOnPageFbActivityElems;
        this.getAdAssetPages = getAdAssetPages;
        this.getAllAssetElementsOfType = getAllAssetElementsOfType;
        this.handleLoadingPageOnOrientation = handleLoadingPageOnOrientation;
        this.loadLoadingPage = loadLoadingPage;
        this.allPagesLoaded = function () { return allPagesLoaded; };
        this.adLoadStrategy = function () { return adLoadStrategy; };
        this.hasDeviceResolution = function () { return deviceResolution && deviceResolution.length > 5; };
        this.getDeviceResolution = function () { return deviceResolution; };
        this.resetDeviceResolution = function () { deviceResolution = \"\"; };
        this.updateAdLoadStratergy = updateAdLoadStratergy;
    };
    //AdAssetLoaderNew ENDS


    //AdPage STARTS

    var AdPage = function (pageJson) {
        var id = pageJson.id;
        var sequenceId = pageJson.sequenceId;
        var isLoaded = false;
        var isLoading = false;
        var adAssetElements = pageJson.adAssetElements;
        var pageType = pageJson.pageType;
        var loadedElemCnt = 0;
        var loadPercent = 0;
        var hasOnlyCloseImageAsset = pageJson.hasOnlyCloseImageAsset;
        var isPaused = false;
        var isShow = false;
        var self = this;

        var load = function (cbOnAdPageLoad) {
            isPaused = false;
            if (adAssetElements.length === 0 || isLoaded) {
                isLoaded = true;
                cbOnAdPageLoad(this);
                return;
            }

            function onAdAssetElementLoad(assetLoadData, isElemLoaded) {
                if (isElemLoaded) {
                    ++loadedElemCnt;
                    loadPercent = (loadedElemCnt / adAssetElements.length) * 100;
                }
                if (loadedElemCnt >= adAssetElements.length && !isPaused) {
                    isLoaded = true;
                    isLoading = false;
                    cbOnAdPageLoad(this);
                }
            }

            if (!isLoading) {
                isLoading = true;
                for (var i = 0; i < adAssetElements.length; i++) {
                    try {

                        adAssetElements[i].load(onAdAssetElementLoad, self);
                    }
                    catch (assetElemException) {
                    }
                }
            }
            else {
                waitAndReturnOnLoad(cbOnAdPageLoad);
            }
        };

        var onPageShow = function () {
            // check once this flag made shown then after showing another page..this should be false.Made this flag false in show ad page. check condition on gotoPageAction.
            isShow = true;
            for (var i = 0, len = adAssetElements.length; i < len; i++) {
                try {
                    var adElement = adAssetElements[i];
                    adElement.setReadyToRender();
                    adElement.onPageShow();
                }
                catch (assetElemException) {
                }
            }

        };


        var waitAndReturnOnLoad = function (cbOnAdPageLoad) {

            function wait() {
                if (isLoading) {
                    setTimeout(wait, 100);
                }
                else
                    cbOnAdPageLoad(this);
            }

            wait();
        };

        var pauseLoading = function () {

            if (isLoaded)
                return;

            isLoading = false;
            isPaused = true;
            for (var i = 0; i < adAssetElements.length; i++) {
                adAssetElements[i].pauseLoading();
            }
        };


        var getAllAssetElementsOfType = function (type) {
            var elems = [];
            for (var i = 0; i < adAssetElements.length; i++) {
                if (adAssetElements[i].adType === type) {
                    elems.push(adAssetElements[i]);
                }
            }
            return elems;
        };

        var showVideosForiOS = function () {
            if (!devicePlatform.iOS())
                return;

            var videos = getAllAssetElementsOfType(\"video\"),
            	appendVideo, videoLoader;
            if (videos.length > 0) {
                videoLoader = new bonzai.obj.advideoloader();
            }
            for (var i = 0; i < videos.length; i++) {
                //appendVideo = videoLoader.appendRequired(videos[i]);
                var elem = AdUTilAPI.getElementById(videos[i].id);
                if (elem) {
                    //                    if (true) {
                    //                        //videos[i].videoParentElem.appendChild(videos[i].videoElem);
                    //                        if (!(isCarSalesNetworkFlg && isApp)) {
                    //                            var elem = AdUTilAPI.getElementById(videos[i].id);
                    //                            videos[i].videoElem.style.top = '0px';
                    //                            elem.style.display = 'block';
                    //                            elem.style.top = '0px';
                    //                            videos[i].videoElem.load();
                    //                            elem.load();
                    //                        }
                    //                    }
                    elem.setAttribute(\"webkit-playsinline\", \"\");
                }
            }
        };

        this.id = id;
        this.sequenceId = sequenceId;
        this.isLoaded = function () { return isLoaded; };
        this.pageType = pageType;
        this.adAssetElements = adAssetElements;
        this.getLoadedElemCnt = function () { return loadedElemCnt; };
        this.getLoadPercent = function () { return loadPercent; };
        this.hasOnlyCloseImageAsset = hasOnlyCloseImageAsset;
        this.load = load;
        this.pauseLoading = pauseLoading;
        this.showVideosForiOS = showVideosForiOS;
        this.getAllAssetElementsOfType = getAllAssetElementsOfType;
        this.commonId = pageJson.commonId;
        this.onPageShow = onPageShow;
        this.isShow = function () { return isShow; };
        this.setPageHide = function () { isShow = false; };
    };
    //AdPage ENDS

    //AdAssetElement STARTS
    var AdAssetElement = function (elemJson) {
        var id = elemJson.id;
        var parentPageId = elemJson.parentPageId;
        var name = elemJson.name;
        var adType = elemJson.adType;
        var assets = elemJson.assets;
        var isLoaded = false;
        var isPaused = false;
        var isYoutubeElement = elemJson.adType === \"youtubevideo\";
        var ytPlayerObj = \"\";
        var videoElem = null;
        var videoParentElem = null;
        var audioContext = null;
        var audioAnalyser = null;
        var soundBuffer = null;
        var videoPosterUrl = elemJson.videoPosterUrl;
        var isReadyToRender = false;
        var isPoliteLoad = true;
        var isLoading = false;
        var lazyLoad = elemJson.lazyLoad;


        var pauseLoading = function () {
            if (isLoaded)
                return;
            var restrictedElements = [\"video\", \"wistiavideo\", \"audio\", \"youtubevideo\", \"fbactivity\", \"twittertimeline\", \"closeimage\", \"bgImage\"];
            if (restrictedElements.indexOf(adType) !== -1)
                return;

            var adAssetElement = AdUTilAPI.getElementById(id);

            if (adAssetElement) {
                var srcAtb = adAssetElement.getAttribute(\"src\");

                if (srcAtb && srcAtb.length > 0) {
                    adAssetElement.setAttribute(\"src\", \"\");
                    isPaused = true;
                }

                var allElems = [\"img\", \"iframe\"];

                for (var i = 0; i < allElems.length; i++) {
                    var lst = adAssetElement.getElementsByTagName(allElems[i]);

                    for (var j = 0; j < lst.length; j++) {
                        lst[j].setAttribute(\"src\", \"\");
                        isPaused = true;
                    }
                }
            }
        };
        var addLoadingDiv = function (el) {
            var loadDiv = document.createElement(\'div\');
            loadDiv.className = \"elspinner\";
            el.appendChild(loadDiv);
        };
        var removeLoadingDiv = function (el) {
            var loadingDiv = null;
            for (var i = 0; i < el.childNodes.length; i++) {
                if (el.childNodes[i].className && el.childNodes[i].className.indexOf(\"elspinner\") >= 0) {
                    loadingDiv = el.childNodes[i];
                    el.removeChild(loadingDiv);
                    break;
                }
            }
        };
        var onPageShow = function () {
            if (isReadyToRender && isLoaded) {
                var adAssetElement = AdUTilAPI.getElementById(id), page = AdUTilAPI.getElementById(parentPageId);
                postPageLoadExecutor.showElementAfterLoad(adAssetElement, page);
            }
        };
        var onBeforeElementLoad = function (el) {
            el = el ? el : AdUTilAPI.getElementById(id);
            addLoadingDiv(el);
            updateChildElementsDisProp(el, \"none\", \"\");
        };
        var onElementLoaded = function (el, elStyle) {
            el = el ? el : AdUTilAPI.getElementById(id);
            //        	isReadyToRender = true;
            isLoaded = true;
            if (elStyle) {
                var keys = Object.keys(elStyle);
                for (var i = 0, len = keys.length; i < len; i++) {
                    el.style[keys[i]] = elStyle[keys[i]];
                }
            }
            updateChildElementsDisProp(el, \"\", \"none\");
            removeLoadingDiv(el);
            if (!isPoliteLoad) {
                return;
            }
            onPageShow();
        };

        var updateChildElementsDisProp = function (el, disStr, lStr) {
            var childEles = el.childNodes;
            for (var i = 0, childElStyle, len = childEles.length; i < len; i++) {
                childElStyle = childEles[i].style;
                if (childEles[i].getAttribute(\"isHidden\") == \"true\") {
                    childEles[i].style.display = \"none\";
                } else {
                    childElStyle ? childElStyle.display = disStr : \"\";
                }
                if (childEles[i].className && childEles[i].className.indexOf(\"elspinner\") >= 0) {
                    childElStyle ? childElStyle.display = lStr : \"\";
                }
            }
        };
        var load = function (cbOnElementLoad) {
        	if (assets.length == 0 || isLoaded || lazyLoad) {
                isLoaded = true;
                cbOnElementLoad(adType,isLoaded);
            }
            else {
                function onElementLoad(isEleLoading) {
                	if(adType == \"video\"){
                		if(AdUTilAPI.videoBehaviourMap){
                			if(AdUTilAPI.videoBehaviourMap[id]){
	                			var autoPlay = AdUTilAPI.videoBehaviourMap[id][\"autoplay\"];
	                			var mutevideo = AdUTilAPI.videoBehaviourMap[id][\"mutevideo\"];
//	                			if(landscapeVideo && autoPlay)
//	                				videoAutoPlayObj.updateLandscapeAutoPlayElementIds([id]);
	                			if(autoPlay){
	                				videoAutoPlayObj.updateVroomElementIds([id]);
//	                				videoAutoPlayObj.playVroomVideo(id);
	                			}
                			}
                		}
                	}
                    if (!isEleLoading) {
                        isLoaded = !isPaused;
                        cbOnElementLoad(adType, isLoaded);
                    } else {
                        cbOnElementLoad(adType, !isLoading);
                    }
                }

                isPaused = false;
                switch (adType) {
                    case \"image\":
                    case \"expandimage\":loadImage(onElementLoad); break;
                    case \"closebutton\": loadImage(onElementLoad); break;
                    case \"closeimage\": loadCloseImage(onElementLoad); break;
                    case \"sprite\": loadSprite(onElementLoad); break;
                    case \"swipegallery\": loadGallery(onElementLoad); break;
                    case \"coverflow\": loadGallery(onElementLoad); break;
                    case \"imagestack\": loadGallery(onElementLoad); break;
                    case \"view360\": loadGallery(onElementLoad); break;
                    case \"gallery\": loadGallery(onElementLoad); break;
                    case \"wipey\": loadWipey(onElementLoad); break;
                    case \"frame\": loadFrame(this, onElementLoad); break;
                    case \"video\": loadVideo(this, onElementLoad); break;
                    case \"wistiavideo\": loadWistiaVideo(onElementLoad); break;
                    case \"audio\": loadAudio(this, onElementLoad); break;
                    case \"fbactivity\": loadFbActivity(this, onElementLoad); break;
                    case \"twittertimeline\": loadTwtlWidget(this, onElementLoad); break;
                    case \"youtubevideo\": loadYtVideo(this, onElementLoad); break;
                    case \"fbshare\": loadImage(onElementLoad); break;
                    case \"tweet\": loadImage(onElementLoad); break;
                    case \"jigsaw\": loadJigsaw(onElementLoad); break;
                    case \"feedtext\": loadFeedText(this, onElementLoad); break;
                    case \"feedimage\": loadFeedImage(this, onElementLoad); break;
                    case \"storelocator\": loadStoreLocatorJS(this, onElementLoad); break;
                    case \"bgImage\": loadImage(onElementLoad, true); break;
                    case \"style\": loadStyleSheet(onElementLoad); break;
                }
            }
        };

        var loadStyleSheet = function (onload) {
            var URL = assets[0];
            var element = document.createElement(\'link\');
            element.type = \'text/css\';
            element.rel = \'stylesheet\';
            element.href = URL;
            element.onload = function () {
                onload();
            }
            document.head.appendChild(element);
        };

        var loadImage = function (onLoad, flgNotSet) {

            function onImgLoad(imgSrc) {
                assets[0] = imgSrc;
                if (!flgNotSet)
                    AdUTilAPI.getElementById(id).setAttribute(\"src\", assets[0]);
                onLoad();
            }
            loadImageFromSrc(assets[0], onImgLoad);
        };



        var loadImageFromSrc = function (imgSrc, onLoad, isAdCloseImg) {

            var img = new Image();

            loadResolutionImgFromSrc(img, imgSrc, onLoad, isAdCloseImg);

        };

        var loadGalleryImageFromSrc = function (imgEle, imgSrc, cbOnLoad) {

            loadResolutionImgFromSrc(imgEle, imgSrc, cbOnLoad, false);
        };

        var loadResolutionImgFromSrc = function (imgEle, imgSrc, cbOnLoad, isAdCloseImg) {

            function onImgLoadFromSrc(e) {
                this.onload = null;
                cbOnLoad(this.src);
            }

            imgEle.onload = onImgLoadFromSrc;
            // MIZU-2930 - Ad was getting stuck for 360. image onerror event was getting trigered. it Worked finr after setting src directly and commenting onerror event listener.
            imgEle.src = imgSrc; //getResolutionImgSrc(imgSrc, isAdCloseImg); //to turn off resoultion just comment this line and use imgEle.src = imgSrc
        };

        var getResolutionImgSrc = function (imgSrc, isAdCloseImage) {

            var srcR = imgSrc;

            var bSanity = !isAdCloseImage &&
                           adAssetLoaderNew.hasDeviceResolution();

            if (bSanity) {

                var ext = imgSrc.substr(imgSrc.lastIndexOf(\".\"), imgSrc.length - 1);
                var resolution = adAssetLoaderNew.getDeviceResolution();
                srcR = imgSrc.replace(ext, resolution + ext);
            }

            return srcR;
        };


        var loadCloseImage = function (onLoad) {

            function onImgLoad() {
                var pageElem = AdUTilAPI.getElementById(parentPageId);

                var lst = pageElem.getElementsByClassName(\'dummyCloseAd\');

                if (lst && lst.length > 0) {
                    lst[0].setAttribute(\"src\", assets[0]);
                }
                onLoad();
            }

            loadImageFromSrc(assets[0], onImgLoad, true);
        };

        var loadSprite = function (onLoad) {
            if (isPoliteLoad) {
                onLoad(true);
                isLoading = true;
            }
            var spriteEle = AdUTilAPI.getElementById(id),
       	    originalStyle = removeBackgroundStyle(spriteEle);
            removeCSSClass(spriteEle, \"spritePH\");
            onBeforeElementLoad(spriteEle);
            function onImgLoad(imgSrc) {
                addCSSClass(spriteEle, \"spritePH\");
                if (!isPoliteLoad) {
                    onLoad();
                }
                onElementLoaded(spriteEle, originalStyle);
                assets[0] = imgSrc;
                AdUTilAPI.getElementById(id).style.backgroundImage = \"url(\'\" + assets[0] + \"\')\";
            }

            loadImageFromSrc(assets[0], onImgLoad);
        };
        var loadAdvanceGallery = function(onLoad){
        	
            var galleryEle = AdUTilAPI.getElementById(id),
        	 originalStyle = removeBackgroundStyle(galleryEle);
            onBeforeElementLoad(galleryEle);

            var arrGalImgElems = galleryEle.getElementsByTagName(\"img\");

            for (var i = 0; i < arrGalImgElems.length; i++) {

                loadGalleryImageFromSrc(arrGalImgElems[i], assets[i], onGalleryImgLoad);
            }
        }
        var loadGallery = function (onLoad) {
            if (isPoliteLoad) {
                onLoad(true);
                isLoading = true;
            }
            var galleryEle = AdUTilAPI.getElementById(id),
        	 originalStyle = removeBackgroundStyle(galleryEle);
            onBeforeElementLoad(galleryEle);

            var arrGalImgElems = galleryEle.getElementsByTagName(\"img\");

            var iCtr = 0;

            function onGalleryImgLoad(imgSrc) {

                iCtr++;

                if (iCtr >= assets.length) {
                    if (!isPoliteLoad) {
                        onLoad();
                    }
                    onElementLoaded(galleryEle, originalStyle);
                }
            }

            for (var i = 0; i < arrGalImgElems.length; i++) {

                loadGalleryImageFromSrc(arrGalImgElems[i], assets[i], onGalleryImgLoad);
            }

        };
        var removeBackgroundStyle = function (galleryEle) {
            var originalStyle = {};
            var eleStyle = galleryEle.style;

            return originalStyle;
        };
        var loadWipey = function (onLoad) {

            function onWipeyImgLoad(imgSrc) {
                assets[0] = imgSrc;
                AdUTilAPI.getElementById(id).setAttribute(\"data-asseturl\", assets[0]);
                onLoad();
            }
            loadImageFromSrc(assets[0], onWipeyImgLoad);
        };

        var loadJigsaw = function (onLoad) {

            function onJigsawImgLoad(imgSrc) {
                assets[0] = imgSrc;
                AdUTilAPI.getElementById(id).setAttribute(\"imgSrc\", assets[0]);
                onLoad();
            }

            loadImageFromSrc(assets[0], onJigsawImgLoad);
        };

        var loadFrame = function (adAssetFrameElement, onLoad) {

            var frameLoader = new bonzai.obj.frameloader();

            frameLoader.load(adAssetFrameElement, onLoad);
        };

        var loadVideo = function (adAssetVideoElement, onLoad) {
            var videoLoader = new bonzai.obj.advideoloader();
            videoLoader.load(adAssetVideoElement, onLoad);
        };

        var loadWistiaVideo = function (onLoad) {
            if (isPoliteLoad) {
                onLoad(true);
                isLoading = true;
            }
            var wistiaEle = AdUTilAPI.getElementById(id),
         	 originalStyle = removeBackgroundStyle(wistiaEle);
            //console.log(wistiaEle);
            onBeforeElementLoad(wistiaEle);
            function onWistiaLoad() {
                if (!isPoliteLoad) {
                    onLoad();
                }
                onElementLoaded(wistiaEle, originalStyle);
                onLoad();
            }
            var frame = AdUTilAPI.getElementById(id);
            frame.onload = onWistiaLoad;
            setTimeout(function () {
                frame.setAttribute(\"src\", assets[0]);
            }, 3000);
        };

        var loadFbActivity = function (adAssetFbActivityElement, onLoad) {

            var frameLoader = new bonzai.obj.fbactivity();

            frameLoader.load(adAssetFbActivityElement, onLoad);
        };

        var loadTwtlWidget = function (adAssetTwtElement, onLoad) {

            var twtLoader = new bonzai.obj.twitterloader();

            twtLoader.load(adAssetTwtElement, onLoad);
        };


        var loadYtVideo = function (adAssetYtElement, onLoad) {

            var ytLoader = new bonzai.obj.youtubeloader();

            ytLoader.load(adAssetYtElement, onLoad);
        };

        var loadFeedText = function (adAssetFeedElement, onLoad) {

            var feedLoader = new bonzai.obj.feedloader();

            feedLoader.loadFeedText(adAssetFeedElement, onLoad);
        };

        var loadFeedImage = function (adAssetFeedElement, onLoad) {

            var feedLoader = new bonzai.obj.feedloader();

            feedLoader.loadFeedImage(adAssetFeedElement, onLoad);
        };

        var loadAudio = function (adAssetAudioElement, onLoad) {

            var audioLoader = new bonzai.obj.adaudioloader();

            audioLoader.load(adAssetAudioElement, onLoad);

        };

        var loadStoreLocatorJS = function (adAsssetSLElement, onElementLoad) {
            if (isPoliteLoad) {
                onElementLoad(true);
                isLoading = true;
            }
            var storLoc = AdUTilAPI.getElementById(id),
       	 originalStyle = removeBackgroundStyle(storLoc);
            onBeforeElementLoad(storLoc);
            function onStoreLocatorLoad() {
                if (!isPoliteLoad) {
                    onElementLoad();
                }
                onElementLoaded(storLoc, originalStyle);
            }
            storeLocator.loadJS(onStoreLocatorLoad, adAsssetSLElement.assets[0]);
        };

        var playAudio = function () {

            var audioLoader = new bonzai.obj.adaudioloader();

            audioLoader.playAudio(this);
        };

        var pauseAudio = function () {

            var audioLoader = new bonzai.obj.adaudioloader();

            audioLoader.pauseAudio(this);

        };

        var pauseWistiaVideoPlay = function () {

            if (adType !== \"wistiavideo\")
                return;

            var wistiaApiObj = AdUTilAPI.getElementById(id).wistiaApi;

            if (wistiaApiObj) {
                wistiaApiObj.pause();
            }


        };


        this.id = id;
        this.parentPageId = parentPageId;
        this.adType = adType;
        this.assets = assets;
        this.load = load;
        this.pauseLoading = pauseLoading;
        this.isYoutubeElement = isYoutubeElement;
        this.videoElem = videoElem;
        this.videoParentElem = videoParentElem;
        this.pauseWistiaVideoPlay = pauseWistiaVideoPlay;
        this.playAudio = playAudio;
        this.pauseAudio = pauseAudio;
        this.audioContext = audioContext;
        this.audioAnalyser = audioAnalyser;
        this.soundBuffer = soundBuffer;
        this.audioStatus = {};
        this.videoPosterUrl = videoPosterUrl;
        this.isReadyToRender = function () { return isReadyToRender; };
        this.setReadyToRender = function () { isReadyToRender = true; };
        this.onPageShow = onPageShow;
        this.lazyLoad = lazyLoad;

    };
    //AdAssetElement ENDS

    //AdPageFactory STARTS
    var AdPageFactory = function () {

        var createAdPagesFromDom = function () {
            var adPages = [];
            var pageDomElems = getAllAdPageElements();
            for (var i = 0; i < pageDomElems.length; i++) {

                var adPageJson = {};

                adPageJson.id = pageDomElems[i].getAttribute(\"data-id\");
                adPageJson.sequenceId = parseInt(pageDomElems[i].getAttribute(\"sequenceid\"));
                adPageJson.pageType = pageDomElems[i].getAttribute(\"pagetype\");
                adPageJson.commonId = pageDomElems[i].getAttribute(\"commonid\");
                adPageJson.adAssetElements = createAdAssetElementsOnPage(adPageJson);
                var adPage = new bonzai.obj.adassetpage(adPageJson);
                adPages.push(adPage);
            }
            return adPages;
        };

        var handleMiscAssetsForPage = function (adPage, adAssetElements) {
            if (typeof miscPageAssets == \'string\') {
                miscPageAssets = JSON.parse(miscPageAssets);
            }

            if (miscPageAssets && miscPageAssets[adPage.id]) {
                var assetObj = miscPageAssets[adPage.id];
                for (var i = 0; i < assetObj.length; i++) {
                    var adAssetElementJson = {
                        id: assetObj[i].id,
                        parentPageId: adPage.id,
                        adType: assetObj[i].type,
                        assets: [assetS3BucketUrl + atob(assetObj[i].url)]
                    };
                    var adAssetElement = new bonzai.obj.adassetelement(adAssetElementJson);
                    adAssetElements.push(adAssetElement);
                }
            }
        };

        var createAdAssetElementsOnPage = function (adPage) {
        	var pageElem = AdUTilAPI.getElementById(adPage.id);
            var adAssetElements = [];
            handleMiscAssetsForPage(adPage, adAssetElements);
            //some assets like background image are directly applied to the page.
            if (pageElem.getAttribute(\"bg-src\")) {
            	var bgSrcURL = getAssetURL(pageElem.getAttribute(\"bg-src\"),pageElem);
            	pageElem.setAttribute(\"bg-src\",bgSrcURL);
                var adAssetElementJson = {
                    id: \'bgImageId\',
                    parentPageId: adPage.id,
                    adType: \"bgImage\",
                    assets: [bgSrcURL]
                };
                var adAssetElement = new bonzai.obj.adassetelement(adAssetElementJson);
                adAssetElements.push(adAssetElement);
            }

            var adElems = pageElem.getElementsByClassName(\"adelem\");
            for (var i = 0; i < adElems.length; i++) {

                var assetChildElems = adElems[i].querySelectorAll(\"*[data-asseturl]:not([data-asseturl=\'\'])\");
                var assetOnSelf = adElems[i].getAttribute(\"data-asseturl\");

                if (isValidElement(adElems[i].getAttribute(\"adtype\"))) {
                	
                	if (adElems[i].getAttribute(\"bg-src\")) {
                    	var bgSrcURLForElem = getAssetURL(adElems[i].getAttribute(\"bg-src\"),adElems[i]);
                    	adElems[i].setAttribute(\"bg-src\",bgSrcURLForElem);
                        var adAssetElementJson = {
                            id: \'bgImageId\',
                            parentPageId: adPage.id,
                            adType: \"bgImage\",
                            assets: [bgSrcURLForElem]
                        };
                        var adAssetElement = new bonzai.obj.adassetelement(adAssetElementJson);
                        adAssetElements.push(adAssetElement);
                    }
                	
                	var bS3AssetElement = isS3AssetElement(adElems[i].getAttribute(\"adtype\"));

                    if (assetOnSelf && assetOnSelf.length > 0) {

                        var adAssetElementJson = {};
                        adAssetElementJson.id = adElems[i].getAttribute(\"data-id\");
                        adAssetElementJson.parentPageId = adPage.id;
                        adAssetElementJson.adType = adElems[i].getAttribute(\"adtype\");
                        adAssetElementJson.assets = [];
                        var assetS3Url = bS3AssetElement ? assetS3BucketUrl + assetOnSelf : assetOnSelf;
                        if (adAssetElementJson.adType === \"video\") {
                            assetS3Url = assetOnSelf;
                            assetS3Url = getAssetURL(adElems[i].getAttribute(\'data-asseturl\'),adElems[i]);
                        	var videoPosterUrl = getAssetURL(adElems[i].getAttribute(\'data-posterurl\'),adElems[i]) || \'\';
                        	pageElem.setAttribute(\"data-posterurl\",videoPosterUrl);
                        	
                            adAssetElementJson.videoPosterUrl = videoPosterUrl;

                            var srcArray = [];
                            if (adElems[i].getAttribute(\'data-asseturl-webm\') && adElems[i].getAttribute(\'data-asseturl-mp4\')) {
                                var assetURLWebm = getAssetURL(adElems[i].getAttribute(\'data-asseturl-webm\'),adElems[i]);
                                var assetURLMp4 =getAssetURL(adElems[i].getAttribute(\'data-asseturl-mp4\'),adElems[i]);
                                adElems[i].setAttribute(\'data-asseturl-webm\',assetURLWebm);
                                adElems[i].setAttribute(\'data-asseturl-mp4\',assetURLMp4);
                                srcArray.push({
                                    src: assetURLWebm,
                                    type: \"video/webm\"
                                });
                                srcArray.push({
                                    src: assetURLMp4,
                                    type: \"video/mp4\"
                                });
                            }
                            else {
                                srcArray.push({
                                    src: assetS3Url,
                                    type: \"video/mp4\"
                                });
                            }
                            adAssetElementJson.assets = srcArray;
                        }
                        adAssetElementJson.assets.push(assetS3Url);
                        var adAssetElement = new bonzai.obj.adassetelement(adAssetElementJson);
                        adAssetElements.push(adAssetElement);
                    }

                    if (assetChildElems && assetChildElems.length > 0) {

                        var adAssetElementJson = {};

                        adAssetElementJson.id = adElems[i].getAttribute(\"data-id\");
                        adAssetElementJson.parentPageId = adPage.id;
                        adAssetElementJson.adType = adElems[i].getAttribute(\"adtype\");
                        adAssetElementJson.assets = [];
                        adAssetElementJson.lazyLoad = adElems[i].getAttribute(\"lazy-load\");
                        
                        for (var j = 0; j < assetChildElems.length; j++) {
                            var assetS3Url = bS3AssetElement ? assetS3BucketUrl + assetChildElems[j].getAttribute(\"data-asseturl\") : assetChildElems[j].getAttribute(\"data-asseturl\");
                            adAssetElementJson.assets.push(assetS3Url);
                        }

                        var adAssetElement = new bonzai.obj.adassetelement(adAssetElementJson);
                        adAssetElements.push(adAssetElement);

                    }

                }
                else {
                    removeElementFromDom(adElems[i]);
                }

            }

            return adAssetElements;
        };
        var getAssetURL = function(relativePath,adElem){
        	var videoCDNUrl=\"\";
        	if(adElem.getAttribute(\"adtype\") == \"video\"){
        		videoCDNUrl = assetS3BucketUrlForVideo;
        	}
        	//If relativePath already has actual final url, return 
    		if(relativePath && ((videoCDNUrl && relativePath.indexOf(videoCDNUrl) > -1) ||(assetS3BucketUrl &&  relativePath.indexOf(assetS3BucketUrl) >-1))){
        		return relativePath;
        	}
	        	
        	var bS3AssetElement = isS3AssetElement(adElem.getAttribute(\"adtype\"));
            var assetS3Url = bS3AssetElement ? (videoCDNUrl? videoCDNUrl + relativePath:assetS3BucketUrl + relativePath): relativePath;
            return assetS3Url;
        };
        var removeElementFromDom = function (elem) {
            if (elem && elem.parentNode) {
                elem.parentNode.removeChild(elem);
            }
        };

        var isValidElement = function (elemType) {
            var iframeElems = [\'wistiavideo\', \'fbactivity\', \'twittertimeline\'];
            if (isNonIframeAd()) {
                if (iframeElems.indexOf(elemType) != -1) {
                    return false;
                }
            }
            return true;
        };

        var isS3AssetElement = function (elemType) {
            var iframeElems = [\'wistiavideo\', \'fbactivity\', \'twittertimeline\', \'youtubevideo\', \"frame\", \'sprite\', \'storelocator\'];
            if (iframeElems.indexOf(elemType) != -1) {
                return false;
            }
            return true;
        };

        this.createAdPagesFromDom = createAdPagesFromDom;
    };
    //AdPageFactory ENDS

    //AdLoadProgressBar STARTS
    var AdLoadProgressBar = function () {

        var init = function (pageHeight, isBannerPage) {
            hideProgressBarCont();
            handlePositionOfProgressBarCont(pageHeight);
            resetProgressBar();
            hideLoadingPage();
            handleWidthOfProgressBar();
            if (!isBannerPage) {
                showProgressBarCont();
                adAssetLoaderNew.loadLoadingPage(function () {
                    var adLoadStrategy = adAssetLoaderNew.adLoadStrategy();
                    if (!((currentPageId && adAssetLoaderNew.getAdPageById(currentPageId).isLoaded()) && (adLoadStrategy === \"loadSmart\" || adLoadStrategy === \"loadExtraSmart\"))) {
                        showLoadingPage();
                    }
                    // Added this check because sometimes loading page loads after current page so for some time loading page shown up along with current page, it seems like changing background color if background colors are dirrerent.
                    // Now if current page is loaded then restricting to show up loading page in case of loadsmart and loadextrasmart stratergy.
                    // Suresh 22/9/14
                });
            }
        };

        var getProgressBarCont = function () {
            var searchEles = getAdBody().children;
            var progressBars = [];
            for (var i = 0; i < searchEles.length; i++) {
                if (searchEles[i].tagName == \'DIV\' && searchEles[i].className && searchEles[i].className.indexOf(\'progressBarCont\') > -1) {
                    progressBars.push(searchEles[i]);
                }
            }
            return progressBars;
        };

        var getProgressBar = function () {
            var progressBarConts = getProgressBarCont();
            var progressBars = [];
            if (progressBarConts && progressBarConts.length > 0) {
                for (var j = 0; j < progressBarConts.length; j++) {
                    var searchEles = progressBarConts[j].children;
                    for (var i = 0; i < searchEles.length; i++) {
                        if (searchEles[i].tagName == \'DIV\' && searchEles[i].className && searchEles[i].className.indexOf(\'progress-bar\') > -1) {
                            progressBars.push(searchEles[i]);
                        }
                    }
                }
            }

            return progressBars;
        };

        var getProgress = function () {
            var progressBars = getProgressBar();
            var progressConts = [];
            if (progressBars && progressBars.length > 0) {
                for (var j = 0; j < progressBars.length; j++) {
                    var searchEles = progressBars[j].children;
                    for (var i = 0; i < searchEles.length; i++) {
                        if (searchEles[i].tagName == \'SPAN\' && searchEles[i].className && searchEles[i].className.indexOf(\'progress\') > -1) {
                            progressConts.push(searchEles[i]);
                        }
                    }
                }
            }

            return progressConts;
        };

        var hideProgressBarCont = function () {
            var progressBarCont = getProgressBarCont();
            if (progressBarCont && progressBarCont.length > 0) {
                for (var i = 0; i < progressBarCont.length; i++) {
                    progressBarCont[i].style.display = \'none\';
                }
            }
            hideLoadingPage();
        };

        var getProgressBarBasedOnOrientation = function () {
            var progressBars = getProgressBarCont();
            var progressBarWithCurrentOrientation = null;
            var orientationType = getOrientTypeBasedOnOrient(currentOrientation);
            if (progressBars && progressBars.length) {
                for (var i = 0; i < progressBars.length; i++) {
                    var orientation = progressBars[i].getAttribute(\'orientation\');
                    if (orientation && parseInt(orientation) == 2) {
                        var isPortrait = progressBars[i].getAttribute(\'isPortrait\');
                        if ((!orientationType && isPortrait == \'true\') || (orientationType == \'PORTRAIT\' && (isPortrait == \'true\')) || (orientationType == \'LANDSCAPE\' && (isPortrait == \'false\'))) {
                            return progressBars[i];
                        }
                    }
                    else {
                        return progressBars[0];
                    }
                }
            }
            return null;
        };

        var showProgressBarCont = function () {
            var progressBarCont = getProgressBarBasedOnOrientation();
            if (progressBarCont) {
                progressBarCont.style.display = \'block\';
            }
        };

        var handlePositionOfProgressBarCont = function (pageHeight) {
            var progressBars = getProgressBarCont();
            pageHeight = pageHeight.toString().replace(\'px\', \'\');
            pageHeight = parseFloat(pageHeight);
            var overlayDiv = getAdOverlayDiv();
            if (progressBars && progressBars.length > 0) {
                for (var i = 0; i < progressBars.length; i++) {
                    var progressBarCont = progressBars[i];
                    if (progressBarCont) {
                        //progressBarCont.style.width = \'100%\';
                        //progressBarCont.style.height = \'10px\';
                        // progressBarCont.style.top = (overlayDiv.offsetTop + pageHeight * 0.7) + \'px\';
                        // progressBarCont.style.left = \"0px\";
                        progressBarCont.style.position = \'absolute\';
                        // progressBarCont.style[\'test-align\'] = \'center\';
                        progressBarCont.style[\'z-index\'] = \'1000\';
                    }
                }
            }
        };

        var handleWidthOfProgressBar = function () {
            var progressBar = getProgressBar();
            if (progressBar) {
                //progressBar.style.width = \'70%\';
            }
        };

        var resetProgressBar = function () {
            var progress = getProgress();
            if (progress && progress.length > 0) {
                for (var i = 0; i < progress.length; i++) {
                    progress[i].style.width = \'0%\';
                }
            }
        };

        var updateProgress = function (widthPrec) {
            if (widthPrec < 0) {
                widthPrec = 0;
            }

            if (widthPrec > 100) {
                widthPrec = 100;
            }

            var progress = getProgress();
            if (progress && progress.length > 0) {
                for (var i = 0; i < progress.length; i++) {
                    progress[i].style.width = widthPrec + \'%\';
                }
            }
        };

        var getLoadingPage = function () {
            var loadingPages = AdUTilAPI.querySelectorAll(\"*[pagetype=\'loading-page\']\");
            var loadingPage = null;
            if (loadingPages && loadingPages.length > 0) {
                var lp = getPageElementBasedOnOrientation(loadingPages[0]);
                if (!lp.getAttribute(\'isloaded\')) {
                    loadingPage = lp;
                }
            }
            return loadingPage;
        };

        var showLoadingPage = function () {
            var page = getLoadingPage();
            if (page) {
                //currentPageId = AdUTilAPI.getElementId(page);
                removeCSSClass(page, \"loading\");
                page.style.display = \"block\";
                page.style.fontSize = (page.offsetWidth / parseFloat(page.getAttribute(\"pageWidth\")) * 100) + \"%\";
            }
        };

        var hideLoadingPage = function () {
            var loadingPages = AdUTilAPI.querySelectorAll(\"*[pagetype=\'loading-page\']\");
            var loadingPage = null;
            if (loadingPages && loadingPages.length > 0) {
                for (var i = 0; i < loadingPages.length; i++) {
                    var page = loadingPages[i];
                    if (page) {
                        addCSSClass(page, \"loading\");
                        page.style.display = \"none\";
                    }
                }
            }
        };

        this.updateProgress = updateProgress;
        this.init = init;
        this.hideProgressBarCont = hideProgressBarCont;
        this.getLoadingPage = getLoadingPage;
        this.showProgressBarCont = showProgressBarCont;
        this.showLoadingPage = showLoadingPage;
        this.getProgressBarCont = getProgressBarCont;

    };
    //AdLoadProgressBar ENDS

    GN.NS(\"obj.adloadprogressbar\", AdLoadProgressBar);
    GN.NS(\"obj.adassetelement\", AdAssetElement);
    GN.NS(\"obj.adassetpage\", AdPage);
    GN.NS(\"obj.adpagefactory\", AdPageFactory);
    GN.NS(\"obj.adassetloader\", AdAssetLoaderNew);


})(bonzai);

(function(gl){
	var flags = {},
		tokenAnimWraper = \"animWrapper_\",
		tokenAnimWraperOpacity = \"animWrapper_opacity_\",
		slideInDirectionMap = {
			left: \"left\",
			right: \"left\",
			top: \"top\",
			bottom: \"top\"
		},
		customEased = false,
		easeMap = {
			\'linear\'	: \'Linear\',
			\'ease-in\'	: \'Cubic\',
			\'ease-out\'	: \'Cubic\',
			\'overshoot\'	: \'Back\',
			\'elastic\'	: \'Elastic\',
			\'bounce\'	: \'Bounce\'
		},
		tokenLastAnimCountRemained = \'data-last-anim-count-remained\',
		tokenAnimWrapper = \'animWrapper_\',
		tokenAnimWrapperOpacity = \'animWrapper_opacity_\';
	
	var animQueue,
		jsonParams = {},
		tweenStacks = {},
		pageCache = {};
	
	var getElByAnim = function(anim){
		if(anim.animeType == \'opacity\') {
			return AdUTilAPI.getElementById(tokenAnimWraperOpacity + anim.compId);
		} else {
			return AdUTilAPI.getElementById(tokenAnimWraper + anim.animId);
		}
	};


	var initCustomEased = function(){
		if(customEased) return;
		else customEased = true;

		var gs = (_gsScope.GreenSockGlobals || _gsScope).com.greensock,
			_class = gs._class,
			_2PI = Math.PI * 2,
			_easeReg = Ease.register || function(){}
			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
				var C = _class(\"easing.\"+name, {
					easeOut:new EaseOut(),
					easeIn:new EaseIn(),
					easeInOut:new EaseInOut()
				}, true);
				_easeReg(C, name);
				return C;
			},
			_create = function(n, f) {
				var C = _class(\"easing.\" + n, function(){}, true),
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				return C;
			},
			_createElastic = function(n, f, def) {
				var C = _class(\"easing.\" + n, function(amplitude, period) {
						this._p1 = amplitude || 1;
						this._p2 = period || def;
						this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
					}, true),
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(amplitude, period) {
					return new C(amplitude, period);
				};
				return C;
			},
			_createBack = function(n, f) {
				var C = _class(\"easing.\" + n, function(overshoot) {
						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
						this._p2 = this._p1 * 1.525;
					}, true), 
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(overshoot) {
					return new C(overshoot);
				};
				return C;
			};
			
			_wrap(\"Elastic\",
				_createElastic(\"ElasticOut\", function(p) {
					return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * _2PI / this._p2 ) + 1;
				}, 0.3),
				_createElastic(\"ElasticIn\", function(p) {
					return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * _2PI / this._p2 ));
				}, 0.3),
				_createElastic(\"ElasticInOut\", function(p) {
					return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * _2PI / this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * _2PI / this._p2 ) *0.5 + 1;
				}, 0.45)
			);
			
			_wrap(\"Back\",
				_createBack(\"BackOut\", function(p) {
					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
				}),
				_createBack(\"BackIn\", function(p) {
					return p * p * ((this._p1 + 1) * p - this._p1);
				}),
				_createBack(\"BackInOut\", function(p) {
					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
				})
			);
			
			_wrap(\"Bounce\",
				_create(\"BounceOut\", function(p) {
					if (p < 1 / 2.75) {
						return 7.5625 * p * p;
					} else if (p < 2 / 2.75) {
						return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
					} else if (p < 2.5 / 2.75) {
						return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
					}
					return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}),
				_create(\"BounceIn\", function(p) {
					if ((p = 1 - p) < 1 / 2.75) {
						return 1 - (7.5625 * p * p);
					} else if (p < 2 / 2.75) {
						return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
					} else if (p < 2.5 / 2.75) {
						return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
					}
					return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
				}),
				_create(\"BounceInOut\", function(p) {
					var invert = (p < 0.5);
					if (invert) {
						p = 1 - (p * 2);
					} else {
						p = (p * 2) - 1;
					}
					if (p < 1 / 2.75) {
						p = 7.5625 * p * p;
					} else if (p < 2 / 2.75) {
						p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
					} else if (p < 2.5 / 2.75) {
						p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
					} else {
						p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
					}
					return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
				})
			);
		
	};
	
	var evalTraverseBounds = function(anim, elem, animParam){
		var direction = (parseInt(anim.properties.direction) * (Math.PI / 180)), // converting to radian
			displacement = parseInt(anim.properties.length),
			tarvX, tarvY, elemX, elemY;
		
		elemX = elem.offsetWidth;
		elemY = elem.offsetHeight;
		
		travX = displacement * Math.cos(direction);
		travY = displacement * Math.sin(direction);
		
		animParam.to.x = (travX < 0 ? \"-=\" : \"+=\") + ((Math.abs(travX)));
		animParam.to.y = (travY < 0 ? \"-=\" : \"+=\") + ((Math.abs(travY)));
		
		animParam.from.x = 0; 
		animParam.from.y = 0;
	};
	
	var evalTransformOrigin = function(anim, animParam){
		var origin;
		origin = anim.properties.fromOrigin,
		regVertOriginKey = new RegExp(\'^(top|middle|bottom)\', \'i\');
		
		animParam.from.transformOrigin = animParam.to.transformOrigin = (origin.replace(regVertOriginKey, \"$1 \").replace(\'middle\', \'center\'));
	};
	
	var evalAnimEasing = function(anim, animParam){
		var easeEnd = \'easeOut\';
		initCustomEased();
		
		if(anim.properties.easeType == \'ease-in\') {
			easeEnd = \'easeIn\';
		}
		animParam.from.ease = animParam.to.ease = window[easeMap[anim.properties.easeType]][easeEnd];
	};
	
	var prepareAnimProps = function(anim){
		var animParam = {
			handler: \'fromTo\',
			from: {
				ease: Linear.easeOut
			},
			to: {
				ease: Linear.easeOut
			},
			init: {},
			postAnim: {},
			elem: null
		}, direction, fromParam, elem, temp;
		
		elem = AdUTilAPI.getElementById(tokenAnimWraper + anim.animId);
		evalTransformOrigin(anim, animParam);
		evalAnimEasing(anim, animParam);
		switch(anim.animeType) {
			case \"slideOut\":
			case \"slideIn\":
				direction = anim.properties.direction;
				fromParam = direction == \'right\' || direction == \'bottom\' ? \'100%\' : (\"-\" + (direction == \'left\' ? elem.offsetWidth: elem.offsetHeight) + \"px\");
				direction = slideInDirectionMap[direction];
				
				animParam.from[direction] = fromParam;
				animParam.to.left = anim.properties.init.left;
				animParam.to.top = anim.properties.init.top;
				animParam.init.opacity = \'1\';
				
				if(anim.animeType == \"slideOut\") {
					animParam.handler = \'fromTo\';
					animParam.to[direction] = animParam.from[direction];
					
					elem.style[direction] = \'\';
					animParam.from[direction] = anim.properties.init[direction];
				
					animParam.init.display = \'\';
					
					animParam.postAnim.display = \'none\';
				}
				break;
			case \"spin\":
				var baseElem, dummyBgSpan, valignSpan, baseComputedStyles, baseComputedFilter;
				
				animParam.to.rotation = (anim.properties.direction == \"C\" ? \"+\" : \"-\") + anim.properties.rotateby + \"deg\";
				animParam.from.rotation = \"0deg\";
				
				baseElem = elem.children[0];
				while(baseElem && baseElem.children.length) baseElem = baseElem.children[0];
				
				baseComputedStyles = getComputedStyle(baseElem);
				baseComputedFilter = baseComputedStyles.getPropertyValue(\'filter\');

				if(baseComputedFilter) { // IE9 HACK : Filter style in rotating element causing flickering. - Vivek

					dummyBgSpan = document.createElement(\"SPAN\");
					valignSpan = document.createElement(\"SPAN\");

					dummyBgSpan.style.cssText = \'display: table; width: 100%; height: 100%;left: 0; top: 0; vertical-align: middle\';
					valignSpan.style.cssText = \'display: table-cell; vertical-align: middle\';
					
					dummyBgSpan.style.padding = baseComputedStyles.getPropertyValue(\'padding\');
					baseElem.style.padding = \'0\';
					baseElem.style.border = \'0\';
					
					valignSpan.innerHTML = baseElem.innerHTML;
					baseElem.innerHTML = \'\';
					dummyBgSpan.style.filter = baseComputedFilter;
					
					baseElem.style.filter = \'\';;

					dummyBgSpan.appendChild(valignSpan);
					baseElem.appendChild(dummyBgSpan);
				}

				animParam.init = {
					webkitBackfaceVisibility: \'visible\',
					webkitTransform: \'\',
					mozTransform: \'\',
					msTransform: \'\',
					oTransform: \'\',
					transform: \'\'
				};
				break;
			case \"fadeIn\":
				animParam.to.opacity = \'1\';
				animParam.from.opacity = \'0\';
				break;
			case \"fadeOut\":
				animParam.to.opacity = \'0\';
				animParam.from.opacity = \'1\';
				
				animParam.init.display = \'\';
				
				animParam.postAnim.display = \'none\';
				break;
			case \"opacity\":
				elem = AdUTilAPI.getElementById(tokenAnimWraperOpacity + anim.compId);
				animParam.to.opacity = parseFloat(anim.properties.opacity)/100;
				animParam.from.opacity = parseFloat(anim.properties.fromPerc)/100;
				break;
			case \"scaling\":
				animParam.from.scale = parseInt(anim.properties.fromPerc)/100;
				animParam.to.scale = parseInt(anim.properties.amount)/100;
				break;
			case \"traverse\":
				evalTraverseBounds(anim, elem, animParam);
				console.info(\"LEFT TOP >>>\");
				AdUTilAPI.logMessage(animParam.from.left);
				AdUTilAPI.logMessage(animParam.from.top);
				break;
		}
		animParam.elem = elem;
		animParam.from.delay = animParam.to.delay = parseFloat(anim.properties.startTime);
		animParam.from.repeat = animParam.to.repeat = parseInt(anim.properties.repeat);
		
		return animParam;
	};
	
	var postAnimFixes = function(animProps, anim){
		var elem = animProps.elem, i;
		
		if(tweenStacks[anim.animId]) {
			tweenStacks[anim.animId].kill && tweenStacks[anim.animId].kill();
			delete tweenStacks[anim.animId];
		}
		for(i in animProps.postAnim) {
			if(animProps.postAnim.hasOwnProperty(i)) {
				elem.style[i] = animProps.postAnim[i];
			}
		}
	};
	
	var repeatPageLevelAnimation = function(anim, extraProps){
		var page, jsonParam, el, countRemained;
		
		if(!(jsonParam = jsonParams[anim.animId])) return;
		
		el = getElByAnim(anim);
		page = pageCache[jsonParam.pageElemId] || (pageCache[jsonParam.pageElemId] = AdUTilAPI.getElementById(jsonParam.pageElemId));
		
		if(el.hasAttribute(tokenLastAnimCountRemained)) {
			count = parseInt(el.getAttribute(tokenLastAnimCountRemained));
			el.setAttribute(tokenLastAnimCountRemained, (count-1).toString());
		} else {
			overrides.resetAllAnimationsOnPage(page);
			// console.info(\"EL#2.2 ----------- %s\", el.getAttribute(tokenLastAnimCountRemained));
			count = parseInt(jsonParam.maxRepeatVal);
			el.setAttribute(tokenLastAnimCountRemained, (count-1).toString());
		}
		
		if(page) {
			if(count > 0) {
				setTimeout(function(){
					extraProps.applyAllAnimationsOnPage(page);
				}, (parseFloat(jsonParam.animRepeatDelay)*1000 || 10));
			} else {
				// console.info(\"EL#4.2 ----------- %s\", el.getAttribute(tokenLastAnimCountRemained));
				el.removeAttribute(tokenLastAnimCountRemained);
			}
		}
	};
	
	var execAnimation = function(anim, extraProps){
		var animProps = prepareAnimProps(anim),
			animArgs,
			th = this,
			pageRepeatArgs;
		
		
		animArgs = [animProps.elem, parseFloat(anim.properties.duration)];
		if(animProps.handler == \'fromTo\' || animProps.handler == \'from\')
			animArgs.push(animProps.from);
		if(animProps.handler == \'fromTo\' || animProps.handler == \'to\')
			animArgs.push(animProps.to);
		
		TweenLite.set(animProps.elem, animProps.init);
		
		(function(repeat){
			var args = arguments,
				onCompTargKey = 2; // animArgs<arguments> == [element, duration, *FROM*, *TO*] // that's y either 2 or 3(if present)
			if(animArgs[3]) onCompTargKey = 3;
			animArgs[onCompTargKey].onComplete = function(){
				if(repeat > 1)
					args.callee.call(null, --repeat);
				else {
					postAnimFixes(animProps ,anim);
					repeatPageLevelAnimation.apply(null, [anim, extraProps]); // @DESC: Page-level repeate/delay animaition handler
				}
			};
			tweenStacks[anim.animId] && delete tweenStacks[anim.animId];
			tweenStacks[anim.animId] = TweenLite[animProps.handler].apply(th[0], animArgs);
			
		})(parseInt(anim.properties.repeat));
	};
	
	var overrides = {
		\"applyWebKitAnimationOnElement\": function(anim){
			execAnimation.apply([null], arguments);
		},
		\"applyAminationsOnTrigger\": function(anims){
			var i = anims.length, anim;
			
			while(i--)
				execAnimation.apply([null], [anims[i].src]);
		},
		\"addAnimationQueueEndEventListner\": function(jsnPrms){
			jsonParams[jsnPrms.longestAnimId] = jsnPrms;
		},
		\"resetAllAnimationsOnPage\": function(page){
			var i, tween;
			for(i in tweenStacks) {
				if(tweenStacks.hasOwnProperty(i)) {
					tween = tweenStacks[i];
					tween.target.removeAttribute(tokenLastAnimCountRemained);
					tween.kill && tween.totalProgress && tween.totalProgress(1).kill();
					delete tween;
				}
			}
			
			var animQ = arguments[arguments.length-1], anims, anim, j, resets, elem;
			animQ = animQ.animQueue;
			if(!animQ) return;
			for(i in animQ) {
				if(!animQ.hasOwnProperty(i)) return;
				anims = animQ[i];
				for(j = 0; j<anims.length; j++) {
					anim = anims[j];
					resets = anim.src ? anim.src.properties.init : (anim.properties ? anim.properties.init : null);
					elem = getElByAnim(anim);
					if(resets && anim.animeType!=\'slideIn\') {
						TweenLite.set(elem, JSON.parse(JSON.stringify(resets)));
					} else if(anim.animeType == \'slideIn\') {
						elem.style.opacity = \'0\';
					}
					TweenLite.set(elem, {transform: \'\', display: \'\'});
				}
			}
		}
	};
	
	var methods = function(name){
		return overrides[name];
	};
	
	gl.NS(\'ie9.flags\', flags);
	gl.NS(\'ie9.methods\', methods);
})(bonzai);



(function (GN, AdUTilAPI) {
	
    var animQueue = {},
		dummyApplyAllAnimationOnPage;
    var ie9 = GN.ie9; // AdAnimUtils.ie9.js
    // AdUTilAPI.logMessage(ie9);
	var ie9handler = function(){
        var method, args, bypassTweenlite;
		
		if(!AdUTilAPI.isIE9()) { // @TODO #L11 [DEFCON 1]: Commented only for debugging. UNCOMMENT for PRODUCTION
            return false;
        }
        bypassTweenlite = this[2] ? this[2].bypassTweenlite : false;
		
        args = [].slice.call(arguments);
        args.push({
            animQueue: animQueue,
            applyAllAnimationsOnPage: dummyApplyAllAnimationOnPage
        });
		
		if(!ie9.flags.tweenLite) ie9.flags.tweenLite = !(typeof TweenLite == \'undefined\');
		if(!ie9.flags.tweenLite && !bypassTweenlite) return false;
		
        method = ie9 ? ie9.methods(this[1]) : null;
		if(method) {
            method.apply(this[0], args);
            return true;
        } else {
            console.error(\"IE9 Animation Handler: Method \'\" + this[1] + \"\' not found.\");
            return false;
        }
    };

    var AdAnimUtils = function () {
        var animStyleAttrib = getBrowserPrefix(\"animation\");
        var tokenAnimWrapper = \'animWrapper_\';
        var tokenAnimWrapperOpacity = \'animWrapper_opacity_\';
        var tokenWebkitAnimationEnd = \'webkitAnimationEnd\';
        var tokenAnimationEnd = getEventPrefix(\'AnimationEnd\');
        var tokenOpacity = \"opacity\";
        var tokenCurrAnimRepeat = \'curranimrepeatval\';
        var lastAnimObj = {};

        var getEl = function (id) {
            return AdUTilAPI.getElementById(id);
        };
		var getElByAnimType = function(aid, cid, type){
			if(type == \'opacity\') {
                return getEl(tokenAnimWrapperOpacity + cid);
            } else {
                return getEl(tokenAnimWrapper + aid);
            }
        };

        var init = function (animationQueue) {
            animQueue = animationQueue;
        };

        var removeWebKitAnimationOnElement = function (animId, compId) {
            var animeWrapperElem = \"\";
            if (animId.indexOf(tokenOpacity) == -1) {
                animeWrapperElem = getEl(tokenAnimWrapper + animId);
            } else {
                animeWrapperElem = getEl(tokenAnimWrapperOpacity + compId);
            }
            if (animeWrapperElem) {
                animeWrapperElem.style[animStyleAttrib] = \"\";

                //HACK for MIZU-1613 - Animation
                //varun 19 Dec 2013
                animeWrapperElem.offsetWidth = animeWrapperElem.offsetWidth;
            }
        };

		var removePageLevelRepeatAnim = function(page, avoidPageLevelReset){
            var i, el, lastAnim;
			if(avoidPageLevelReset) return;
			
            i = clearTimeoutAnimations.length;
			while(i--){
                window.clearTimeout(clearTimeoutAnimations[i]);
            }
            clearTimeoutAnimations.length = 0;
			
			for(i in lastAnimObj) {
				if(lastAnimObj.hasOwnProperty(i)) {
                    lastAnim = lastAnimObj[i];
					if(lastAnim.maxRepeatVal) {
                        el = getElByAnimType(lastAnim.longestAnimId, lastAnim.lastAnimElement, lastAnim.animType);
                        el.setAttribute(tokenCurrAnimRepeat, \'0\');
                    }
                }
            }
        };
        var resetAllAnimationsOnPage = function (page, avoidPageLevelReset) {
        	if(ie9handler.apply([this, \"resetAllAnimationsOnPage\"], arguments)) {
                return;
            }
            removePageLevelRepeatAnim(page, avoidPageLevelReset);
            for (var comId in animQueue) {
                resetAllAnimationOnComponent(comId);
            }
        };

        var applyVisibilityBasedOnAnimType = function (animId, animType, scalingType, flgVisible) {
            if (!flgVisible) {
                flgVisible = false;
            }
            //while resetting animation set visibility to hidden for anime type slideIn,fadeIn scaleup.
            var visibility = getVisibilityBasedOnAnimType(animType, scalingType, false);
            resetVisibilityOfAnim(animId, visibility);
        };

        var resetAllAnimationOnComponent = function (comId, isVisible, animationId) {
            var compAnims = animQueue[comId];
            if (compAnims && compAnims.length > 0) {
                for (var k = 0, len = compAnims.length; k < len; k++) {
                    var animId = compAnims[k].animId;
                    if (animationId) {
                        if (animationId == animId) {
                            removeWebKitAnimationOnElement(animId, comId);
                        }
                    }
                    else {
                        removeWebKitAnimationOnElement(animId, comId);
                    }
                    if (!isVisible && animId.indexOf(tokenOpacity) == -1) {
                        applyVisibilityBasedOnAnimType(animId, compAnims[k].animeType, compAnims[k].scaleType);
                    }
                }
                //Handle to show the element on slide/fadeout anim
                // MIZU-1540 -- fix Varun - 09/dec/2013
                var elem = getEl(comId);
                if (elem) {
                    //Handle to show the element on reset animations
                    var outherMostWrapper = getEl(getParentWrapElementId(comId));
                    outherMostWrapper.style.display = \'block\';                    
                }
            }
        };

        //This is written to for issue MIZU-1874
        //varun 04-feb-2014
        var resetAnimationForShowElement = function (comId) {
            var compAnims = animQueue[comId];
            if (compAnims && compAnims.length > 0) {
                for (var k = 0, len = compAnims.length; k < len; k++) {
                    var anim = compAnims[k];
                    var animId = compAnims[k].animId;
                    if (animId.indexOf(tokenOpacity) == -1) {
                        animeWrapperElem = getEl(tokenAnimWrapper + animId);
                    } else {
                        animeWrapperElem = getEl(tokenAnimWrapperOpacity + comId);
                    }

                    var flgVisible = false;
                    if (animeWrapperElem.style[animStyleAttrib] != \'\') {
                        if (anim.animeType == \"fadeIn\" || anim.animeType === \"fadeOut\" || anim.animeType === tokenOpacity) {
                            flgVisible = false;
                        }
                        else {
                            flgVisible = true;
                        }
                    }

                    if (anim.animeType != \'traverse\') {
                        removeWebKitAnimationOnElement(animId, comId);
                    }
                    applyVisibilityBasedOnAnimType(animId, anim.animeType, anim.scaleType, flgVisible);

                }
                //Handle to show the element on slide/fadeout anim
                //MIZU-1540 -- fix Varun - 09/dec/2013
                var elem = getEl(comId);
                if (elem) {
                    //Handle to show the element on reset animations
                    var outherMostWrapper = getEl(getParentWrapElementId(comId));
                    outherMostWrapper.style.display = \'block\';
                    outherMostWrapper.style.opacity = 1;
                }
            }
        };

        var applyWebKitAnimationOnElement = function (anim) {
        	if(ie9handler.apply([this, \"applyWebKitAnimationOnElement\"], arguments)) {
                return;
            }
            var animeWrapperElem = \"\";
            if (anim.animId.indexOf(tokenOpacity) == -1) {
                animeWrapperElem = getEl(tokenAnimWrapper + anim.animId);
            } else {
                animeWrapperElem = getEl(tokenAnimWrapperOpacity + anim.compId);
            }
            //	var index = self.opacityAnimArr.indexOf(anim);
            // applyWebKitAnimationCSSOnElement(anim,animeWrapperElem);
            // adding opacity animations on same wrapper if we used different wrappers then it is taking relative opacity which make element disappear when opacity is less
            applyWebKitAnimationCSSOnElement(anim, animeWrapperElem);
        };

        var pageMap = {};
		var pageHasElem = function(page, elemId){
            var pageId = page.getAttribute(\'data-id\'),
				children,
				regElemId = new RegExp(elemId.substr(-4) + \"#\", \'i\');
			
			if(!pageMap[pageId]) {
				children = [].map.call(page.getElementsByClassName(\'adelem\'), function(v, i){
                    return v.getAttribute(\'data-id\');
                });
                pageMap[pageId] = children.join(\'#\') + \"#\";
            }
			
            return regElemId.test(pageMap[pageId]);
        };

        var applyAllAnimationsOnPage = function (page) {
            for (var comId in animQueue) {
				if(pageHasElem(page, comId)) { // Only allowing animation of current page. - Vivek
                    applyAllAnimationsOnComp(comId);
                }
            }
        };
        dummyApplyAllAnimationOnPage = applyAllAnimationsOnPage;

        var applyAllAnimationsOnComp = function (comId) {
            var comAnims = animQueue[comId];

            if (comAnims && comAnims.length > 0) {
                var flgHideAnim = false;
                var animId = \'\';
                for (var i = 0; i < comAnims.length; i++) {
                    var anim = comAnims[i];
                    if (anim.isTriggerType == false) {
                        applyWebKitAnimationOnElement(anim);
                    };
                    if (anim.animeType == \"slideOut\" || anim.animeType === \"fadeOut\") {
                        animId = anim.animId;
                        flgHideAnim = true;
                    }
                }
                //Handle to hide the element on slide/fadeout anim
                // MIZU-1540 -- fix Varun - 09/dec/2013
                if (flgHideAnim) {
                    var animeWrapperElem = getEl(tokenAnimWrapper + animId);
                    var elem = getEl(comId);
                    if (elem) {
                        // $cb(animeWrapperElem).one(tokenAnimationEnd, function(ev){
                        // if (ev.animationName == animId) {
                        // var outherMostWrapper = getEl(getParentWrapElementId(comId));
                        // outherMostWrapper.style.display = \'none\';
                        // }
                        // });
                        animeWrapperElem.addEventListener(tokenAnimationEnd, function (ev) {
                            if (ev.animationName == animId) {
                                var outherMostWrapper = getEl(getParentWrapElementId(comId));
                                outherMostWrapper.style.display = \'none\';
                                this.removeEventListener(tokenWebkitAnimationEnd, arguments.callee, false);
                            }
                        });
                    }
                }

            }
        };

		var assignSrcToTriggeredAnims = function(triggeredAnim, index){
            var anim = triggeredAnim[index || 0],
				compId = anim.compId,
				compAnims = animQueue[compId],
				i = compAnims.length;
			
			while(!anim.src && i--)
				if(compAnims[i].animId == anim.animId) {
                    anim.src = compAnims[i];
					i=0;
                }
			
			if(triggeredAnim[(index || 0) + 1]) assignSrcToTriggeredAnims(triggeredAnim, (index || 0) + 1);
        };

        var clearTimeoutAnimations = [];
        var applyAminationsOnTrigger = function (triggerAnimId) {
            resetAnimationOnTriggeredComp(triggerAnimId, true);
            var lastWrapper = \"\";
            var lastAnimType = \"\";
            var animeWrapperElem = \"\";
            var compId = \"\";
            var q = animQueue[triggerAnimId];
            var uniqueCompArr = {};
            var wrapperArr = {};
            
            assignSrcToTriggeredAnims(q);
			if(ie9handler.apply([this, \"applyAminationsOnTrigger\"], [q])) { // @TODO #L259: Comment till Triggered based animation is ready [Ready now]
                return;
            }
            
            if (q && q.length > 0) {
                for (var j = 0; j < q.length; j++) {
                    var item = q[j];
                    var anim = item.css[\'-webkit-animation\'];
                    var domElem = getEl(item.compId);
                    if (!uniqueCompArr[item.compId]) {
                        uniqueCompArr[item.compId] = {};
                        wrapperArr[item.compId] = [];
                    }
                    compId = item.compId;
                    if (item.animeType == tokenOpacity) {
                        animeWrapperElem = getEl(tokenAnimWrapperOpacity + compId);
                    } else {
                        animeWrapperElem = getEl(tokenAnimWrapper + item.animId);
                    }
                    setAnime(domElem, animeWrapperElem, anim, item.animeType, true, item);
                    wrapperArr[item.compId].push(animeWrapperElem);
                    uniqueCompArr[item.compId] = {
                        lastWrapper: animeWrapperElem,
                        lastAnimType: item.animeType,
                        scaleType: item.scaleType,
                        compId: item.compId
                    };
                }
                clearTimeoutAnimations.push(setTimeout(function () { showAnimeWrap(uniqueCompArr); }, 100));
                for (var compId in uniqueCompArr) {
                    var obj = uniqueCompArr[compId];
                    //Added webkitAnimationEnd event. Removing animation and reseting visibility of wrappers on this event.
                    // $cb(obj.lastWrapper).on(tokenAnimationEnd, (function (obj) {
                    // return function (ev) {
                    // animeEndCallBack(ev, obj, wrapperArr);
                    // };
                    // })(obj));
                    obj.lastWrapper.addEventListener(tokenAnimationEnd, (function (obj) {
                        return function (ev) {
                            animeEndCallBack(ev, obj, wrapperArr);
                        };
                    })(obj), false);
                }
            }
        };

        var removeWrapperAnimation = function (obj, wrapperArr) {
            var animeWrappers = wrapperArr[obj.compId];
            for (var j = 0; j < animeWrappers.length; j++) {
                if (animeWrappers[j]) {
                    if (!(obj.lastAnimType == \"traverse\" || obj.lastAnimType == \'slideIn\' || obj.lastAnimType == \'fadeIn\' || obj.lastAnimType == tokenOpacity || obj.lastAnimType == \"scaling\" || obj.lastAnimType == \"spin\")) {
                        animeWrappers[j].style[animStyleAttrib] = \"\";
                    }
                }
            }
            //While removing all animation applied, hide the last wrapper which has anime type like slideOut,fadeOut,scaleDown.
            obj.lastWrapper.style.opacity = getVisibilityBasedOnAnimType(obj.lastAnimType, obj.scaleType, true);
        };

        var animeEndCallBack = function (ev, obj, wrapperArr) {
            var callee = arguments.callee;
            if (AdUTilAPI.getElementId(ev.target) == obj.lastWrapper.id) {
                clearTimeoutAnimations.push(setTimeout(function () {
                    removeWrapperAnimation(obj, wrapperArr);
                    ev.target.removeEventListener(tokenAnimationEnd, callee, false);
                    // $cb(ev.target).off(tokenAnimationEnd, callee);
                }, 10));
            }
        };

        var resetAnimationOnTriggeredComp = function (triggerAnimId, isVisible) {
            var q = animQueue[triggerAnimId];
            if (q && q.length > 0) {
                for (var j = 0; j < q.length; j++) {
                    resetAllAnimationOnComponent(q[j].compId, isVisible, q[j].animId);
                }
            }
        };

        var showAnimeWrap = function (uniqueCompArr) {
            for (var compId in uniqueCompArr) {
                var children = animQueue[compId];
                if (children && children.length > 0) {
                    for (var i = 0; i < children.length; i++) {
                        if (children[i].animId.indexOf(tokenOpacity) == -1) {
                            animeWrapperElem = getEl(tokenAnimWrapper + children[i].animId);
                            animeWrapperElem.style.visibility = \"\";
                        }
                    }
                }
                var obj = uniqueCompArr[compId];
                // While showing all animation wrappers, hide the the wrappers of animation type slideIn,fadeIn,scaleUp.
                obj.lastWrapper.style.opacity = getVisibilityBasedOnAnimType(obj.lastAnimType, obj.scaleType, false);
            }
        };

        var resetVisibilityForAnimsOnComp = function (comId, visibility) {
            var comAnims = animQueue[comId];
            if (comAnims && comAnims.length > 0) {
                for (var i = 0; i < comAnims.length; i++) {
                    var anim = comAnims[i];
                    resetVisibilityOfAnim(anim.animId, visibility);
                }
            }
        };

        var resetVisibilityOfAnim = function (animId, visibility) {
            var animeWrapperElem = getEl(tokenAnimWrapper + animId);
            if (animeWrapperElem) {
                animeWrapperElem.style.opacity = visibility;
            }
        };

        var getVisibilityBasedOnAnimType = function (animType, scalType, isVisible) {
            var visibility = \"\";
            if (isVisible) {
                if (animType === \"slideOut\" || animType === \"fadeOut\") {
                    visibility = \"0\";
                } else {
                    visibility = \"\";
                }
            } else {
                if (animType === \"slideIn\" || animType === \"fadeIn\" || (animType === \"scaling\" && scalType == \"up\")) {
                    visibility = \"0\";
                }
            }
            return visibility;
        };

        var applyOpacAnimFrmTrigger = function (triggeredOpacAnims, applyOpacAnimArr) {
            for (var j = 0; j < triggeredOpacAnims.length; j++) {
                var animArr = applyOpacAnimArr[triggeredOpacAnims[j].animId];
                if (animArr) {
                    for (var i = 0; i < animArr.length; i++) {
                        // Applying webkit animations to the time based animation
                        // wrapper when it has low opacity.
                        var animeEl = getEl(tokenAnimWrapper
							+ animArr[i].animId);
                        animeEl.style[animStyleAttrib] = animeEl.style[animStyleAttrib]
							+ \",\"
							+ triggeredOpacAnims[j].css[animStyleAttrib];
                    }
                }
            }
        };

        var setBackfaceVisibility = function (el) {
            //Important check. Removing this page repeat anim will not work in android
            if (!el) {
                return;
            }
            if (!devicePlatform.Android() || devicePlatform.isChrome()) {
                //These settings are added to handle the flicker issues
                el.style[getBrowserPrefix(\"perspective\")] = 400;
                //if (animeType === \"slideIn\" || animeType === \"slideOut\" || animeType === \"spin\" || animeType === \"scaling\" || animeType === \"fadeIn\" || animeType === \"fadeOut\" || animeType === \"traverse\") {
                el.style[getBrowserPrefix(\"backface-visibility\")] = \"hidden\";
                el.style[getBrowserPrefix(\"transform-style\")] = \'preserve-3d\';
            }
            //}
        };
        //function addAnimationQueueEndEventListner(pageElemId, lastAnimElement, maxRepeatVal, animRepeatDelay, animType, longestAnimId) {
        var addAnimationQueueEndEventListner = function (jsonParams) {
			if(ie9handler.apply([this, \"addAnimationQueueEndEventListner\", {bypassTweenlite: true}], arguments)) {
                return;
            }
            lastAnimObj[jsonParams.longestAnimId] = jsonParams;
            var longestAnimElement = \"\";
            if (jsonParams.animType == tokenOpacity) {
                longestAnimElement = getEleById(tokenAnimWrapperOpacity + jsonParams.lastAnimElement);
            } else {
                longestAnimElement = getEleById(tokenAnimWrapper + jsonParams.longestAnimId);
            }
            
            var currVal = getEleById(jsonParams.lastAnimElement).getAttribute(tokenCurrAnimRepeat);
            longestAnimElement.setAttribute(tokenCurrAnimRepeat, \'0\');
            longestAnimElement.addEventListener(tokenAnimationEnd, function (ev) {
                clearTimeoutAnimations.push(setTimeout(onAnimationQueueEnd(ev, jsonParams.pageElemId, AdUTilAPI.getElementId(longestAnimElement), jsonParams.maxRepeatVal,
                                      jsonParams.animRepeatDelay, jsonParams.animType, jsonParams.longestAnimId, jsonParams.animationElementCheck), 100));
            }, false);
        };

        var onAnimationQueueEnd = function (ev, pageElemId, lastAnimElement, maxRepeatVal, animRepeatDelay, animType, longestAnimId, flgElemCheck) {
            var delayRemove = 1;
            var delayAttach = 100, elPage;
            
            elPage = AdUTilAPI.getElementById(pageElemId);
            if(elPage && elPage.style.display == \'none\') {
                AdUTilAPI.logMessage(\"Ignoring hidden page level repeat.\");
                return;
            }

            if (animRepeatDelay > 0) {
                delayRemove = (animRepeatDelay * 1000) - 100;
                delayAttach = delayRemove + 100;
            }
          
            function checkLongestAnimation() {
                if (flgElemCheck == 1) {                  
                    var flg = AdUTilAPI.getElementId(ev.target) == lastAnimElement;                  
                    return flg;
                }
                else {
                    return ev.animationName == longestAnimId;
                }
                return false;
            }

            //only execute if longest anim is current completed anim
            if (checkLongestAnimation()) {
                var currVal = getEleById(lastAnimElement).getAttribute(tokenCurrAnimRepeat);
                if (parseInt(currVal) < maxRepeatVal && -1 != ev.animationName.indexOf(animType)) {
                    var el = getEleById(pageElemId);

                    function removeAnimation() {
                        adAnimeObj.resetAllAnimationsOnPage(el,true);
                    }

                    function reattachAnimation() {
                        adAnimeObj.applyAllAnimationsOnPage(el);
                    }

                    clearTimeoutAnimations.push(setTimeout(removeAnimation, delayRemove));

                    clearTimeoutAnimations.push(setTimeout(reattachAnimation, delayAttach));

                    AdUTilAPI.getElementById(lastAnimElement).setAttribute(tokenCurrAnimRepeat, parseInt(currVal) + 1);
                } else { // Fix : Repeat page level animation was not working 2nd time onward on page (-Vivek)
                    AdUTilAPI.getElementById(lastAnimElement).setAttribute(tokenCurrAnimRepeat, \'0\');
                }
            }
        };

        var setAnime = function (el, animeEl, animeStyleVal, animeType, triger, item) {
            var animeStyleAttrib = animStyleAttrib;
            function removeWebkitAnim() {
                if (animeEl) {
                    animeEl.style[animeStyleAttrib] = \"\";
                }
            }
            function setStyle() {
                if (item && animeEl) {
                    applyWebKitAnimationCSSOnElement(item, animeEl);
                }
            }

            //used setTimeout function as remove or add animation style is working without it.
            if (animeType != tokenOpacity) {
                clearTimeoutAnimations.push(setTimeout(removeWebkitAnim, 1));
            }
            clearTimeoutAnimations.push(setTimeout(setStyle, 10));

            //Important check. Removing this page repeat anim will not work in android
            if (!devicePlatform.Android()) {
                setBackfaceVisibility(animeEl);
            }

        };

        var hideElAnimeStart = function (el) {
            function hideEl(el) {
                el.style.opacity = \"0\";
            }
            hideEl(el);
        };

        var applyWebKitAnimationCSSOnElement = function (anim, animeWrapperElem) {
            // console.info(\"APPLY WEBKIT ANIM CSS ON ELEM >>> 543\");
            // AdUTilAPI.logMessage(anim);
            // adding opacity animations on same wrapper if we used different wrappers then it is taking relative opacity which make element disappear when opacity is less 
            if (anim.animeType == tokenOpacity) {
                var cssStr = animeWrapperElem.style[animStyleAttrib]; //getCssStrForOpacAnim(self.opacityAnimArr,index);
                if (cssStr) {
                    animeWrapperElem.style[animStyleAttrib] = cssStr + \",\" + anim.css[animStyleAttrib];
                } else {
                    animeWrapperElem.style[animStyleAttrib] = anim.css[animStyleAttrib];
                }
            } else {
                animeWrapperElem.style[animStyleAttrib] = anim.css[animStyleAttrib];
            }
        };

        this.init = init;
        this.resetAllAnimationsOnPage = resetAllAnimationsOnPage;
        this.resetAnimationForShowElement = resetAnimationForShowElement;
        this.applyAllAnimationsOnPage = applyAllAnimationsOnPage;
        this.addAnimationQueueEndEventListner = addAnimationQueueEndEventListner;
        this.setAnime = setAnime;
        this.setBackfaceVisibility = setBackfaceVisibility;
        this.hideElAnimeStart = hideElAnimeStart;
        this.applyAminationsOnTrigger = applyAminationsOnTrigger;
        this.clearTimeoutAnimations =  clearTimeoutAnimations;
    };

    GN.NS(\"obj.adanimutils\", AdAnimUtils);
})(bonzai, AdUTilAPI);

function addAnimationQueueEndEventListner(jsonParams) {
    adAnimeObj.addAnimationQueueEndEventListner(jsonParams);
}

function setAnime(el, animeEl, animeStyleVal, animeType, triger, item) {
    adAnimeObj.setAnime(el, animeEl, animeStyleVal, animeType, triger, item);
}

function setBackfaceVisibility(el) {
    adAnimeObj.setBackfaceVisibility(el);
}

function hideElAnimeStart(el) {
    adAnimeObj.hideElAnimeStart(el);
}

(function (GN) {

    var ExecuteEvent = function () {

        var isEventsTracked = false;
        
        var privateAssignEvents = function (e, comp, actionsJSON) {
            var eventStr = unescape(actionsJSON);
            var event = JSON.parse(eventStr);
            handleInteractionWithPages(e, event);
            if (event) {
                var type = event.type;
                if (type == \"submit\") {
                    handleSubmitEventActions(event, e);
                }
            }
        };

        var privateAssignAction = function (e, comp, escapedActionsStr, isAcceptDropAction) {
            var actionsStr = unescape(escapedActionsStr);
            var event = JSON.parse(actionsStr);
            var actions = event.actions || event;
            isEventsTracked = false;
            for (var i = 0; i < actions.length; i++) {
                var action = actions[i];
                handleAllActionsForElement(action, event, e, action.actionProps.platForm, isAcceptDropAction);
            }
        };
        
        var isThirdPartyClickByPassEvent = function(event){
        	if(event && event.type == \'videoplay\' ||
        			event.type == \'videoend\')
        		return true;
        	else 
        		return false;
        };

        var handleInteractionWithPages = function (e, event, isAcceptDropAction) {
            var prevPage = getEleById(currentPageId);
            if (event && e && !isAcceptDropAction && event.type !== \"swipe\") {
                adAnalyticsObject.registerEvtsWithAnalytics(event, e);
            }
            // Removed first interaction page view for interstitial and landing page ads because we are registering page \'view\' events directly for these type of ads.
            
            // Do not fire third party click trackers when events are video
            if(!isThirdPartyClickByPassEvent(event))
            	adAnalyticsObject.registerThirdPartyClickTrackers();
            //assetLoader.loadLinkedPagesOnFirstInterac(currentPageId);
            adAssetLoaderNew.loadLinkedPagesOnFirstInterac(currentPageId);
        };
        
        

        var handleSubmitEventActions = function (event, e) {

            function onSubmitEventSuccess(action) {
                handleAllActionsForElement(action, event, e, action.actionProps.platForm);
            }

            var submitEventHlpr = new bonzai.obj.submitevent();
            submitEventHlpr.handleSubmitEventActions(event, e, onSubmitEventSuccess)
        };

        var handleAllActionsForElement = function (action, event, e, platform, isAcceptDropAction) {
            if (!isEventsTracked && action.type != \'gotopg\' && event.type != \'pageload\' && event.type != \'submit\' && event.type != \"swipe\") {
            	handleInteractionWithPages(e, event, isAcceptDropAction);
                isEventsTracked = true;
            }
            if (!action) {
                return;
            }
            if (typeof platform != \'undefined\') {
                if (platform == \'IOS\' && !devicePlatform.iOS()) {
                    return;
                } else if (platform == \'Android\' && !devicePlatform.Android()) {
                    return;
                } else if (platform == \'Desktop\' && !devicePlatform.Desktop()) {
                    return;
                }
            }
            switch (action.type) {
                case \"animation\": execAnimation(action, event, e, platform, isAcceptDropAction); break;
                case \"gotopg\": execGotopage(action, event, e, platform, isAcceptDropAction); break;
                case \"closeAdPage\": closeAdPage(action, event, e, platform, isAcceptDropAction); break;
                case \"replaypg\": execReplayPage(action, event, e, platform, isAcceptDropAction); break;
                case \"hideele\": execHideElement(action, event, e, platform, isAcceptDropAction); break;
                case \"showele\": execShowElement(action, event, e, platform, isAcceptDropAction); break;
                case \"openurl\": executeOpenUrl(action, event, e, platform, isAcceptDropAction); break;
                case \"msg\": executeMessage(action, event, e, platform, isAcceptDropAction); break;
                case \"addcalevent\": execAddCalEvent(action, event, e, platform, isAcceptDropAction); break;
                case \"call\": execCall(action, event, e, platform, isAcceptDropAction); break;
                case \"email\": execEmail(action, event, e, platform, isAcceptDropAction); break;
                case \"executeJS\": execJS(action, event, e, platform, isAcceptDropAction); break;
                case \"playvideo\": execPlayVideo(action, event, e, platform, isAcceptDropAction); break;
                case \"stopvideo\": execStopVideo(action, event, e, platform, isAcceptDropAction); break;
                case \"playaudio\": execPlayAudio(action, event, e, platform, isAcceptDropAction); break;
                case \"starttimer\": execStartTimer(action, event, e, platform, isAcceptDropAction); break;
                case \"stoptimer\": execStopTimer(action, event, e, platform, isAcceptDropAction); break;
                case \"customtracker\": execCustomTracker(action, event, e, platform, isAcceptDropAction); break;
                case \"closeAd\" : execCloseAd(action, event, e, platform, isAcceptDropAction); break;
                case \"fullscreen\" : execFullScreen(action, event, e, platform, isAcceptDropAction); break;
                case \"loadRichVideo\" : execLoadRichVideo(action, event, e, platform, isAcceptDropAction); break;
            }
            
            
            var parentWindow = GN.plugin.envUtils().getTopWindow();
            parentWindow.top.postMessage(JSON.stringify({
                event: \'SHOW:ACTIONUI\',
                data: {event: action.type, data: action}
            }), \"*\");
        };
        

        var execAnimation = function (action, event, e, platform, isAcceptDropAction) {
            animId = action.actionProps.animId;
            adAnimeObj.applyAminationsOnTrigger(animId);
        };

        var execGotopage = function (action, event, e, platform, isAcceptDropAction) {
            var prevPage = getEleById(currentPageId);
            var pageId = action.actionProps.pageId;
            var pageToShow = getEleById(pageId);
            setPrevPageDimensionsForAnalytics(prevPage);
            adAnalyticsObject.registerExpEvent(prevPage, pageToShow, event, e);
            handleInteractionWithPages(e, event, isAcceptDropAction);
            isEventsTracked = true;
            // adaptorObj.goToPageAction(pageToShow);
            
            //Id of element which call the gotopage event
            var callerId;
            if(e && e.currentTarget){
             callerId = e.currentTarget.getAttribute(\'data-id\');
            }
            //Input parameters are for pageToShow,CurrentPage,elementId that is clicked
            adaptorObj ? adaptorObj.goToPageAction(pageToShow) : goToPageAction(pageToShow, null, callerId);
        };
        var closeAdPage = function(action, event, e, platform, isAcceptDropAction){
        	if(typeof closePageAction == \'function\') {
        		closePageAction(currentPageId);
        	} else {
        		AdUTilAPI.closeAd(currentPageId);   		
        	}
        };
        var execReplayPage = function (action, event, e, platform, isAcceptDropAction) {
            var pageId = action.actionProps.pageId;
            var pp = getAllAdPageElements();

            for (var j = 0; j < pp.length; j++) {
                var p = pp[j];
                if (AdUTilAPI.getElementId(p) == pageId) {
                    p = reattachDomNode(p);
                }
            }
        };

        var execHideElement = function (action, event, e, platform, isAcceptDropAction) {
            var ee = action.actionProps.eleId;
            for (var j = 0; j < ee.length && ee; j++) {
                var elem = getEleById(ee[j]);
                if (elem) {
                	//iOS hide/show video Bug Fix
                	if(devicePlatform.iOS() && elem.getAttribute(\"tagname\")==\"video\"){
                         var elem = AdUTilAPI.getElementById(AdUTilAPI.getParentWrapElementId(ee[j]));
                		 elem.setAttribute(\"data-top\",elem.style.top);
                		 elem.style.position=\'absolute\';
                         elem.style.top=\'-9999px\';
                	}
                    else {
						//Change for MIZU-3135
						//Varun 05-09-2014
                        var parentWrap = AdUTilAPI.getParentWrapElementId(ee[j]);
                        if (!parentWrap) {
                            parentWrap = ee[j];
                        }
                        var wrapElem = AdUTilAPI.getElementById(parentWrap);
                        wrapElem.style.display = \'none\';
                    }
                }
            }
        };

        var execShowElement = function (action, event, e, platform, isAcceptDropAction) {
            var ee = action.actionProps.eleId;
            for (var j = 0; j < ee.length && ee; j++) {
                var elem = getEleById(ee[j]);
                if (elem) {
                	//iOS hide/show video Bug Fix
                	if(devicePlatform.iOS() && elem.getAttribute(\"tagname\")==\"video\"){
                        var elem = AdUTilAPI.getElementById(AdUTilAPI.getParentWrapElementId(ee[j]));
                        elem.style.position=null;
                        elem.style.top=elem.getAttribute(\"data-top\");
                	}
                    else {
						//Change for MIZU-3135
						//Varun 05-09-2014
                        var parentWrap = AdUTilAPI.getParentWrapElementId(ee[j]);
                        if (!parentWrap) {
                            parentWrap = ee[j];
                        }
                        var wrapElem = AdUTilAPI.getElementById(parentWrap);
                        wrapElem.style.display = \'block\';
                    }
                    //earlier show was used to show the element irrespective animation is done or not.
                    //handled the same : MIZU-1874  varun 04-02-1014
                    adAnimeObj.resetAnimationForShowElement(ee[j]);
                }
            }
        };
        
        var triggerOpenUrlCustomEvent = function(e){
        	var openUrlCustEvnt = createCustomEvent && createCustomEvent(openUrlEvtName);
            if (document.createEvent) {
            	e.target.dispatchEvent(openUrlCustEvnt);
            } 
            else {
            	e.target.fireEvent(\"on\" + openUrlCustEvnt.eventType, openUrlCustEvnt);
            }
        };
        var isAndoid = function(){
        	 var agent = navigator.userAgent;
             var n = agent.match(/Android/gi);
        	if(n){
        		return true;
        	}
        	return false;
        };
     var executeOpenUrl = function (action, event, e, platform, isAcceptDropAction) {
            var currentPage = getEleById(currentPageId);
            setPrevPageDimensionsForAnalytics(currentPage);
            // This event triggered open url and after this spot is closed and leave behind is showed up.
        	var url = action.actionProps.url;
        	if (url.indexOf(\'http://\') != 0 && url.indexOf(\'https://\') != 0) {
                url = \"http://\" + url;
            }
            var newWin = action.actionProps.new_win != \"false\";
            //TODO mraid code is not required for WAP. we will removed it for WAP when we will separate out js. Now keeping this because mraid check will be false for WAP and code won\'t execute.
            var mraid = isApp ? (window.mraid || getWindowParent().mraid) : \"\";
            var agent = navigator.userAgent;
            var n = agent.match(/Android/gi);
            var eURL = encodeURI(url);
            if (newWin) {
            	var sn = getServiceNetwork();
            	sn=sn && sn[0]?sn[0]:\'\';
                if (mraid && n) {
                	if(networkCheck(admarverNetworks,sn)){
                		eURL = admarvelUrlPrefixStr+eURL;
                	}
                    if (openURLObject && openURLObject.prototype.openAdURL) {
                        openURLObject.prototype.openAdURL(eURL);
                    } else {
                        mraid.open(eURL);
                    }
                } else {
                	//the following code to add a prefix to the url is done for the admarvel/opera IOS app only
                	if(mraid && devicePlatform.iOS() && networkCheck(admarverNetworks,sn)){
                		eURL = admarvelUrlPrefixStr+eURL;
                	}
                    fireEvent(eURL, \'_blank\');
                }
            } else {
                if (mraid) {
                    mraid.open(eURL);
                } else {
                    fireEvent(eURL, \'_top\');
                }
            }
            triggerOpenUrlCustomEvent(e);
        };

        var executeMessage = function (action, event, e, platform, isAcceptDropAction) {
        	var isPreviewOnDesktop = isPreviewingOnDesktop();
            if(!isPreviewOnDesktop){
	            var to = action.actionProps.to;
	            var msg = action.actionProps.msg;
	            //TODO mraid code is not required for WAP. we will removed it for WAP when we will separate out js. Now keeping this because mraid check will be false for WAP and code won\'t execute.
	            var mraid = isApp ? (window.mraid || getWindowParent().mraid) : \"\";
	            var ismraidfnSupported = (mraid && typeof mraid.sendSMS == \'function\');
	
	            if (ismraidfnSupported && devicePlatform.iOS()) {
	                for (var j = 0; j < to.length; j++) {
	                    var sendto = to[j];
	                    mraid.sendSMS(sendto, msg);
	                }
	            } else {
	                for (var j = 0; j < to.length; j++) {
	                    var sendto = to[j];
	                    var smsString = \"sms:\" + sendto + \"?body=\" + msg;
	                    if (devicePlatform.iOS()) {
	                        smsString = \"sms:\" + sendto;
	                    }
	                    fireEvent(smsString);
						//handlefireEventWithIOS9(smsString);
	                }
	            }
            
            }
            
        };
        
		 var prepareDtString = function(dtArr,separator,tm){
			var str  = dtArr[1] + separator + dtArr[0] + separator + dtArr[2] + \" \" + tm;
			return str;
		 };
		 
		 var get24HRTime = function(timeStr){
		    var tm = null;
		    
		    var hrs = Number(timeStr.match(atob(\"XihcZCsp\"))[1]);
		    var mnts = Number(timeStr.match(atob(\"OihcZCsp\"))[1]);
		    var format = timeStr.match(atob(\"XHMoLiopJA==\"))[1];
		    if (format == \"PM\" && hrs < 12) hrs = hrs + 12;
		    if (format == \"AM\" && hrs == 12) hrs = hrs - 12;
		    var hours = hrs.toString();
		    var minutes = mnts.toString();
		    if (hrs < 10) hours = \"0\" + hours;
		    if (mnts < 10) minutes = \"0\" + minutes;
		    
		    tm = hours + \":\" + minutes;
		    	 
		    return tm;
		 };
		 
         var execAddCalEvent = function (action, event, e, platform, isAcceptDropAction) {
        	var isPreviewOnDesktop = isPreviewingOnDesktop();
            if(!isPreviewOnDesktop){
	        	var actProps = action.actionProps;
	        	
	        	var title = actProps.title;
	            var location = actProps.loc;
	            
	            var startDtArr = actProps.stdate.split(\'/\');
	            var startTm = get24HRTime(actProps.sttime);
	            var endDtArr = actProps.endate.split(\'/\');
	            var endTm = get24HRTime(actProps.entime);
	            var tzIdArr = actProps.timezone.split(\'/\');
	            var tzId = tzIdArr[0];
	            if(tzIdArr[1]){
	            	tzId +=\"-\"+tzIdArr[1];
	            }
	            var desc = actProps.description;
	            
	            //TODO mraid code is not required for WAP. we will removed it for WAP when we will separate out js. Now keeping this because mraid check will be false for WAP and code won\'t execute.
	            var mraid = isApp ? (window.mraid || getWindowParent().mraid) : \"\";
	            var ismraidfnSupported = (mraid && typeof mraid.createEvent == \'function\');
	            
	            var ismraidCrCalfnSupported = (mraid && typeof mraid.createCalendarEvent == \'function\');
	            
	           if(ismraidCrCalfnSupported){
	        	   	var calJson = {};
	            	var stdt = prepareDtString(startDtArr,\"/\",startTm);
	                var startDate = new Date(stdt);
	                
	                var endDt = prepareDtString(endDtArr,\"/\",endTm);
	                var endDate = new Date(endDt);
	                
	            	calJson.description = desc;
	            	calJson.location = location;
	            	calJson.start = startDate;
	            	calJson.end = endDate;
	            	calJson.summary = title;
	            	mraid.createCalendarEvent(calJson);
	            	
	            }else if (ismraidfnSupported) {
	            	var stdt = prepareDtString(startDtArr,\"/\",startTm);
	                var startDate = new Date(stdt);
	                
	                var endDt = prepareDtString(endDtArr,\"/\",endTm);
	                var endDate = new Date(endDt);
	                
	                mraid.createEvent(startDate, title, location);
	            }else if(isAndoid()){
	            	var calString = actProps.url;
	            	if(!calString){
	            		AdUTilAPI.logMessage(\'No caledar url, falling back to original\');
	            		var stdt = prepareDtString(startDtArr,\"-\",startTm);
	                	var endDt = prepareDtString(endDtArr,\"-\",endTm);
	            		calString = \"http://\" + createCalUrl + stdt + \"/\"+ endDt + \"/\" + tzId +\"/\"+ title + \"/\" + location + \"/\" + desc;
	            	}
	            	fireEvent(calString);
	                
	            }else {
	                var calString = actProps.url;
	            	if(!calString){
	            		AdUTilAPI.logMessage(\'No caledar url, falling back to original\');
	            		var stdt = prepareDtString(startDtArr,\"-\",startTm);
	                	var endDt = prepareDtString(endDtArr,\"-\",endTm);
	            		calString = \"webcal:\" + createCalUrl + stdt + \"/\"+ endDt + \"/\" + tzId +\"/\"+ title + \"/\" + location + \"/\" + desc;
	            	}
	                fireEvent(calString);
					//handlefireEventWithIOS9(calString);
	            }
            }
            
           
           
        };
        var isPreviewingOnDesktop = function(){
        	var isPreviewOnDesktop = bonzai.plugin.previewEnv().isPreviewingOnDesktop();
        	return isPreviewOnDesktop;
        }
        var execCall = function (action, event, e, platform, isAcceptDropAction) {
        	var isPreviewOnDesktop = isPreviewingOnDesktop();
            if(!isPreviewOnDesktop){
	            var to = action.actionProps.to;
	            //TODO mraid code is not required for WAP. we will removed it for WAP when we will separate out js. Now keeping this because mraid check will be false for WAP and code won\'t execute.
	            var mraid = isApp ? (window.mraid || getWindowParent().mraid) : \"\";
	            var ismraidfnSupported = (mraid && typeof mraid.makeCall == \'function\');
	            if (ismraidfnSupported) {
	                for (var j = 0; j < to.length; j++) {
	                    var callto = to[j];
	                    mraid.makeCall(callto);
	                }
	            } else {
	                for (var j = 0; j < to.length; j++) {
	                    var callto = to[j];
	                    var calStr = \'tel:\' + callto;
	                    //handlefireEventWithIOS9(calStr);
						fireEvent(calStr);
	                }
	            }
	       }
	       
           
        };

        var execEmail = function (action, event, e, platform, isAcceptDropAction) {
           var isPreviewOnDesktop = isPreviewingOnDesktop();
           if(!isPreviewOnDesktop){
	            var to = action.actionProps.to;
	            var recepient = \"\";
	            for (var j = 0; j < to.length; j++) {
	                recepient = recepient + to[j] + \";\";
	            }
	            recepient = recepient.substring(0, recepient.length - 1);
	            var subject = action.actionProps.sub;
	            var body = action.actionProps.msg;
	            //TODO mraid code is not required for WAP. we will removed it for WAP when we will separate out js. Now keeping this because mraid check will be false for WAP and code won\'t execute.
	            var mraid = isApp ? (window.mraid || getWindowParent().mraid) : \"\";
	            var ismraidfnSupported = (mraid && typeof mraid.sendMail == \'function\');
	
	            if (ismraidfnSupported) {
	                mraid.sendMail(recepient, subject, body);
	            } else {
	                var mailString = \"mailto:\" + recepient + \"?subject=\" + subject + \"&body=\" + body;
	                fireEvent(mailString);
	            }
            }
           
        };

        var execJS = function (action, event, e, platform, isAcceptDropAction) {
            var jsCode = unescape(action.actionProps.srcCode);
            if (jsCode) {
                evalJS(jsCode);
            }
        };

        var execPlayVideo = function (action, event, e, platform, isAcceptDropAction) {
            var ee = action.actionProps.eleId;
            videoAutoPlayObj.updateElementIds(ee);
        }

        var execStopVideo = function (action, event, e, platform, isAcceptDropAction) {
            var video = AdUTilAPI.getElementById(action.actionProps.eleId);
            if (video) {
                video.pause();
            }
        };

        var execPlayAudio = function (action, event, e, platform, isAcceptDropAction) {
            var adAssetPage = adAssetLoaderNew.getAdPageById(currentPageId);

            if (adAssetPage) {

                var audioElems = adAssetPage.getAllAssetElementsOfType(\"audio\");

                for (var i = 0; i < audioElems.length; i++) {

                    if (audioElems[i].id === action.id) {

                        audioElems[i].playAudio();
                    }
                }
            }
        };

        var execStartTimer = function (action, event, e, platform, isAcceptDropAction) {
            var timer = timerManager.getTimer(action.actionProps.eleId[0]);
            timer.start();
        };

        var execStopTimer = function (action, event, e, platform, isAcceptDropAction) {
            var timer = timerManager.getTimer(action.actionProps.eleId[0]);
            timer.stop(false);
        };

        var execCustomTracker = function (action, event, e, platform, isAcceptDropAction) {
            customTracker(action.actionProps.url);
        };

        var customTracker = function (url) {
            var trackerScriptTag = AdUTilAPI.getElementById(\"customTrackerScript\");
            if (trackerScriptTag) {
                trackerScriptTag.parentNode.removeChild(trackerScriptTag);
            }
            var ct = document.createElement(\'script\'); ct.type = \'text/javascript\';
            ct.id = \"customTrackerScript\";
            ct.async = true;
            var url = encodeURI(url);
            if (url.indexOf(\'http://\') == -1 && url.indexOf(\'https://\') == -1) {
                url = \"http://\" + url;
            }
            if (url.indexOf(\'?\') == -1) {
                ct.src = url + \"?rnd=\" + Math.random();
            } else {
                ct.src = url + \"&rnd=\" + Math.random();
            }

            var s = document.getElementsByTagName(\'script\')[0];
            s.parentNode.insertBefore(ct, s);
        };
        var execCloseAd = function(action, event, e, platform, isAcceptDropAction){
        	AdUTilAPI.closeAd(currentPageId);
        };
        var getEleByAction = function(action,e){
        	var elem;
        	var eleId = action && action.actionProps ?action.actionProps.eleId[0] : \"\";
        	var videoElem = AdUTilAPI.getElementById(eleId);
        	videoElem  =  videoElem ? videoElem : e.target;
        	return videoElem;
        };
        var execFullScreen = function(action, event, e, platform, isAcceptDropAction){
        	 var videoElem  =  getEleByAction(action,e);
        	
        	if(typeof handleFullScreenWithRV == \"function\"){
        		handleFullScreenWithRV(videoElem);
        	}
        };
        var execLoadRichVideo = function(action, event, e, platform, isAcceptDropAction){
        	var videoElem  =  getEleByAction(action,e);
        	if(typeof handleLoadRichVideo == \"function\"){
        		handleLoadRichVideo(videoElem);
        	}
        };
        // PUBLIC APIs
        this.assignEvents = privateAssignEvents;
        this.assignAction = privateAssignAction;
    };

    GN.NS(\"obj.execevent\", ExecuteEvent);
})(bonzai);

	
var eventExecutor = new bonzai.obj.execevent();

function assignEvents(e, comp, actionsJSON) {
    eventExecutor.assignEvents(e, comp, actionsJSON);
}

function assignAction(e, comp, escapedActionsStr, isAcceptDropAction) {
    eventExecutor.assignAction(e, comp, escapedActionsStr, isAcceptDropAction);
}

var devicePlatform = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
	isAndroidDefaultBrowser: function () {
        return this.Android() && (navigator.userAgent.match(/Version/i));
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
	iOSVersion: function () {
		var s = navigator.userAgent.split(\"_\"),	s0= s[0],v =s0.slice(-1);
		return v;		
	},
	isAndroidNonChromimumDefaultBrowser:function(){
		return this.isAndroidDefaultBrowser() && !navigator.userAgent.match(/Chrome/i);
	},
    isChrome: function () {
        return (navigator.userAgent.match(/Chrome/i) || navigator.userAgent.match(/CriOS/i)) && (!navigator.userAgent.match(/Version/i));
    },
    Desktop: function () {
        return !navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)|(IEMobile)|(mobile)/i);
    },
    firefox: function () {
        return (navigator.userAgent.indexOf(\"Firefox\") >= 0);
    },
	isIE: function() {
        var ie = navigator.userAgent.indexOf(\'MSIE \');
        var ie11 = navigator.userAgent.indexOf(\'Trident/\');
        if(ie>0 || ie11 >0) return true;

        return false;
    }
};

function handlefireEventWithIOS9(eURL, target) { 
	if(devicePlatform.iOS() && parseInt(devicePlatform.iOSVersion()) >= 9){	
		AdUTilAPI.logMessage(\"IOS Version:\" + devicePlatform.iOSVersion());
		AdUTilAPI.logMessage(\"UserAgent:\" + navigator.userAgent);
		var href = window.top.document.location.href;
		window.top.document.location.href=eURL;
		var ios9timer = setTimeout(function () {
			window.top.document.location.href = href;
			clearTimeout(ios9timer);
		}, 100);	
	}
	fireEvent(eURL, target);	
}

function fireEvent(eURL, target) {
	var a = document.createElement(\'a\');
	a.setAttribute(\'href\', eURL);
	a.setAttribute(\'target\', target);
	if (devicePlatform.Android() || devicePlatform.iOS()) {
		var evnobj = document.createEvent(\'HTMLEvents\');
		evnobj.initEvent(\'click\', true, true);
		a.dispatchEvent(evnobj);
	}
	else {
		a.style.cssText = \"visibility:hidden;position:absolute;z-index:0;\";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
};

function fireCustomEvent(eventName, eventObject) {
    var pageEvnobj = document.createEvent(\'HTMLEvents\');
    pageEvnobj.initEvent(eventName, true, true);
    eventObject.dispatchEvent(pageEvnobj);
};

var createCLKEvent = function () { };
createCLKEvent.prototype = {
    pageCLK: \"\",
    init: function () {
        var self = this;
        if (document.createEvent) {
            self.pageCLK = document.createEvent(\"HTMLEvents\");
            self.pageCLK.initEvent(\"CLK\", true, true);
        } else {
            self.pageCLK = document.createEventObject();
            self.pageCLK.eventType = \"CLK\";
        }
        self.pageCLK.eventName = \"CLK\";
    },
    dispatchCLKEvent: function (page, cords) {
        var self = this;
        self.pageCLK.clientX = cords.x;
        self.pageCLK.clientY = cords.y;
        if (document.createEvent) {
            page.dispatchEvent(self.pageCLK);
        } else {
            page.fireEvent(\"on\" + self.pageCLK.eventType, self.pageCLK);
        }
    }
};

var videoAutoPlayObj = {
    videoElemIds: {},
    vroomVideoElemIds: {},
    updateElementIds: function (elemIds) {
        var self = this;
        if (elemIds && elemIds.length > 0) {
            for (var i = 0; i < elemIds.length; i++) {
                self.videoElemIds[elemIds[i]] = true;
            }
        }
        self.handleVideoAutoPlayAction();
    },
    
    updateVroomElementIds: function (elemIds) {
    	var self = this;
        if (elemIds && elemIds.length > 0) {
            for (var i = 0; i < elemIds.length; i++) {
                self.vroomVideoElemIds[elemIds[i]] = true;
            }
        }
    },

    getElementsInPage: function (page, elemId) {
        var self = this,
        	vidEl = page.querySelectorAll(\"[data-id =\'\" + elemId + \"\']\");
        if (!vidEl[0]) {
            vidEl = page.querySelectorAll(\"[data-id =\'outer_\" + elemId + \"\']\");
        }
        return vidEl;
    },
    
    playVroomVideo: function (vId){
    	var vidEl = AdUTilAPI.getElementById(vId);
    	var parent = vidEl.parentElement;
    	if(AdUTilAPI.videoBehaviourMap){
    		if(AdUTilAPI.videoBehaviourMap[vId]){
    			if(AdUTilAPI.videoBehaviourMap[vId].autoplay){
    				var vroomConfig = AdUTilAPI.videoBehaviourMap[vId].spriteData,
    					vroomContainer = parent.getElementsByClassName(\"vroom-wrp\")[0];      	
    	        	vroomContainer.style.display = \"block\";
    	        	vidEl.style.display=\"none\";
    	        	vidEl.style.top = \"10000px\";
    	        	if(AdUTilAPI.videoBehaviourMap[vId].player){
    	        		if(AdUTilAPI.videoBehaviourMap[vId].playWhenInView)
    	        			AdUTilAPI.videoBehaviourMap[vId].observer.start();
    	        		else
    	        			AdUTilAPI.videoBehaviourMap[vId].player.play();
    	        		var soundEleId = AdUTilAPI.videoBehaviourMap[vId].sound_bttn_id;
        				var soundEle = AdUTilAPI.getElementById(soundEleId);
        				if(soundEle)
        					soundEle.style.display = \"block\";
    	        	}
    			}
    		}
    	}
    },

    handleVideoAutoPlayAction: function () {
        var page = getEleById(currentPageId);
        var self = this;
        for (var elemId in self.videoElemIds) {
            var nodeList = self.getElementsInPage(page, elemId);
            if (nodeList && nodeList.length > 0) {
                var eleType = nodeList[0].getAttribute(\"adtype\");
                if (eleType == \'youtubevideo\') {
                    self.handleYoutubeVideoPlay(currentPageId, elemId);
                } else {
                    nodeList[0].style.display = \'block\';
                    nodeList[0].style.top = \'0px\';
                    AdUTilAPI.logMessage(\"video element \",nodeList[0]);
                    self.handleVideoPlayAction(nodeList[0]);
                }
                delete self.videoElemIds[elemId];
            }
            else {
                var elem = AdUTilAPI.getElementById(elemId);
                if (elem) {
                    elem.load();
                }
            }
        }
    },
    handleVideoPlayAction : function(videoNode){
        AdUTilAPI.logMessage(\"video element \",videoNode);
        var adId = AdUTilAPI.getAdId();
        // We are removing setTimeout for spot expander mobile formats because video play action was not working from spot page in IOS.
        if(AdUTilAPI.getAdFormatType() == \"spot_expander\"){
        	videoNode.play();
        }else{
    	setTimeout(function () {
    		videoNode.play();
        }, 1000);
        }
    },
    // This handle is used to handle video autoplay set by autoplay property
    handleVroomVideoAction: function () {
        var page = getEleById(currentPageId);
        var self = this;
        for (var elemId in self.vroomVideoElemIds) {
            var nodeList = self.getElementsInPage(page, elemId);
            if (nodeList && nodeList.length > 0) {
                var eleType = nodeList[0].getAttribute(\"adtype\");
                if (eleType == \'youtubevideo\') {
                    self.handleYoutubeVideoPlay(currentPageId, elemId);
                } else {
                    postStatsData(\'debug_autoplay_video\', elemId, true);
                    if(!devicePlatform.Desktop())
                    	self.playVroomVideo(elemId);
                    else{
                    	// show sound button if the user visits the page again
                    	var soundEleId = AdUTilAPI.videoBehaviourMap[elemId].sound_bttn_id;
        				var soundEle = AdUTilAPI.getElementById(soundEleId);
        				
                    	if(!AdUTilAPI.videoBehaviourMap[elemId].mutevideo){
                    		if(soundEle)
                    			soundEle.style.display = \"none\";
    					}else{
    						if(soundEle)
    							soundEle.style.display = \"block\";	
//	        				nodeList[0].muted = true;
	        				nodeList[0].removeAttribute(\"controls\");
    					}
                    	if(AdUTilAPI.videoBehaviourMap[elemId].playWhenInView && AdUTilAPI.videoBehaviourMap[elemId].observer)
                    		AdUTilAPI.videoBehaviourMap[elemId].observer.start();
                    	else{
                    		nodeList[0].style.display = \'block\';
                    		nodeList[0].style.top = \'0px\';
                    		
                    		var playVideo = function(vidEle){
                    			//Fix for issue MIZU-4609 - changed timer from 1000 milliseconds to 100 milliseconds
                        		setTimeout(function () {
                                  vidEle.play();
                              }, 100);
                    		};
                    		playVideo(nodeList[0]);
                    	}
                    }
                }
            }
//            else {
//                var elem = AdUTilAPI.getElementById(elemId);
//                if (elem) {
//                    elem.load();
//                }
//            }
        }
    },    
    handleYoutubeVideoPlay: function (currentPageId, elemId) {
        var pageYtVideos = adAssetLoaderNew.getAdPageById(currentPageId).getAllAssetElementsOfType(\"youtubevideo\");
        if (pageYtVideos && pageYtVideos.length > 0) {
            for (var i = 0; i < pageYtVideos.length; i++) {
                var ytVideo = pageYtVideos[i];
                if (ytVideo && ytVideo.elementId == elemId) {
                    var ytPlayer = ytVideo.player;
                    if (ytPlayer && typeof ytPlayer.playVideo == \'function\')
                        ytPlayer.playVideo();
                }
            }
        }
    }
};

function evalJS(jsStr) {
    eval(jsStr);
}

(function (GN) {
    var envUtils = function () {
        var getTopWindow = function () {
            return topIframe ? window.top : getWindowParent();
        }

        this.getTopWindow = getTopWindow;
        return this;
    }
    GN.NS(\"plugin.envUtils\", envUtils);
})(bonzai);(function (GN) {
    var prevUtils = function () {
        var isFromPreview = function () {
            var topWindow = GN.plugin.envUtils().getTopWindow();
            return topWindow.isBonzaiPreview;
        }

        var isPreviewExecutionFromCanvas = function () {
            var isPreviewEx = false;
            if (typeof previewExecution == \'string\') {
                isPreviewEx = previewExecution === \'true\' ? true : false;
            }
            return isPreviewEx;
        }

        var isNewPreview = function () {

        }

        var isAdPixelPreview = function () {
            var parentWindow = GN.plugin.envUtils().getTopWindow();
            if (parentWindow && parentWindow.parent && parentWindow.parent.document.getElementsByClassName(\'actual-size\').length > 0) {
                return true;
            }
            return false;
        }

        //Preview related APIS\'s : Start
        //function isPreviewExecution(){
        //	var isPreviewEx = false;
        //	if (typeof previewExecution == \'string\') {
        //		isPreviewEx = previewExecution === \'true\' ? true : false;
        //    }
        //	return isPreviewEx;
        //	//Use this for new preview screen:
        //	var val = getPreviewParam(\'isPreview\');
        //	if (val) {
        //        return true;
        //    }
        //    return false;
        //}
        ////Set actual height and width of the page if ad is viewed in \'1:1 actual pixel\' of priview ode 
        //function isAdPixelPreview() {
        //	var parentWindow = getWindowParent();
        //	if (parentWindow && parentWindow.parent && parentWindow.parent.document.getElementsByClassName(\'actual-size\').length > 0) {
        //        return true;
        //    }
        //    return false;
        //}

        function getPreviewDataJson(){
        	var dataJSON = window.top.dataJson;
        	//console.log(\"previewDataJson:\"+dataJSON);
        	AdUTilAPI.logMessage(\"previewDataJson:\"+dataJSON);
        	return dataJSON;
        }
        function getPreviewParam(attr){
        	var dataJson = getPreviewDataJson();
        	var value = \"\";
        	if(dataJson){
        		value = dataJson[attr];
        	}
        	return value;
        }
        function getPagePlacement(){
        	var dataJson = getPreviewDataJson();
        	var value = \"\";
        	if(dataJson){
        		value = dataJson[\"adPlacementObj\"];
        	}
        	return value;
        }
        //If desktop spot is views on mobile skins, then making left to \'0\' makes the spot to be visible
        function getDesktopSpotLeftPropValue(defaultValue){
        	if(isFromPreview() && !isDesktopSkinPreview()){
        		return \"0px\";
        	}
        	return defaultValue;
        }
        //This method is for preview in desktop with desktop skin. Desktop preview has skins for IOS devices, Android, Desktop and 1:1 
        function isDesktopSkinPreview(){
        	if(getPreviewParam(\"skin\") == \"desktop-size-tab\"){
        		return true;
        	}
        	return false;
        }

        function isPreviewingOnDesktop() {
        	var val = getPreviewParam(\'previewedOn\');
        	if (val && val == \"Desktop\") {
                return true;
            }
            return false;
        }
        //Device include device skins of desktop and actual devices
        function isPreviewingOnDevice() {
        	
        	if(isPreviewingOnActualDevice()){
        		return true;
        	}
        	
        	var val = getPreviewParam(\'skin\');
        	
        	if (isPreviewingOnDesktop() && val && val == \"ios\" || val == \"android\") {
                return true;
            }
            return false;
        }
        function isPreviewingOnActualDevice() {
        	var val = getPreviewParam(\'previewedOn\');
        	if (val && val == \"ActualDevice\") {
                return true;
            }
            return false;
        }
        function isPreviewBasedOnVersion() {
            var val = getPreviewParam(\'urlFlag\');
            if (val) {
                return true;
            }
            return false;
        }
        //Preview related APIS\'s : End

        this.isFromPreview = isFromPreview;
        this.isAdPixelPreview = isAdPixelPreview;
        this.getPreviewParam = getPreviewParam;
        this.getPagePlacement = getPagePlacement;
        this.isDesktopSkinPreview = isDesktopSkinPreview;
        this.getDesktopSpotLeftPropValue = getDesktopSpotLeftPropValue;
        this.isPreviewFromCanvas = isPreviewExecutionFromCanvas;
        this.isPreviewingOnActualDevice = isPreviewingOnActualDevice;
        this.isPreviewingOnDesktop = isPreviewingOnDesktop;
        this.isPreviewBasedOnVersion = isPreviewBasedOnVersion;
        this.isPreviewingOnDevice = isPreviewingOnDevice;
        return this;
    }
    GN.NS(\"plugin.previewEnv\", prevUtils);
})(bonzai);

var previewEnvObj = new bonzai.plugin.previewEnv();var showTimeProps = \'{\"flagShowTime\":false,\"showTime\":\"\"}\';

//* The function \"assignAnimQueue\" assigns the specified animation queue with all the animations inside it. 

var mizuAdDivleft = \"\";
var mizuAdTop = \"\";
var currentPageId = \"\";
var isBannerPage = false;
var adAnimeObj = new bonzai.obj.adanimutils();
var expanded = false;
var eventId = \"\";
var compId = \"\";
var firstInteraction = true;
var currentOrientation = \'\';
var c = \"\";
var flgForFrstPg = true;
var spinnerClass = \"spinner\";
// assign adnetwork name to an. 
//var an = getWindowParent().an || \"bonzai\";
var sdkObj;
var mediaElements = [\"VIDEO\"];
var ispreview = \"\";
var requestJson = {};
var adTagJson = {};
var adAssetLoaderNew = new bonzai.obj.adassetloader();
//var adManager = new bonzai.obj.adManager();
var isLoadPageCloseAction = false;
var prePageHeigth = 0;
var prePageWidth = 0;
var dragDropExecutor = null;
var postPageLoadExecutor = null;
var isApp = false;
var adNetworks = { \"airpush\": \"airpush\",\"xads\":\"xads\"};
var isIframeBurst = false;
var topIframe = null;
var topIframProps = null;
var adFormats = [\"nc_expandable_300x50\",\"nc_expandable_320x50\",\"fullpage_interstitial\",\"first_imp_interstitial\",\"inside_out\",\"buro_247\",\"first_imp_interstitial_generic\"];
var formatsUsingGlblDimsByOrientation = [\"first_imp_interstitial_generic\"];
var adFormatArrFormValidation = [\"bb_pushdown_970x40\"];
var openUrlEvtName = \"openUrlEvent\";
var admarverNetworks = [\"opera\",\"admarvel\"];
var admarvelUrlPrefixStr = \"admarvelexternal\";
var otplvFormat = \"nc_otp_and_lvbhnd\";
var spotExpanderFormat = [\"spot_expander\",\"spot_expander_web\"];
var isScreenShot;
var isIntAdClosed;
var isCarSalesNetworkFlg = false;
var defaultEvents = {};
var pagePosition;
var formatUtilObject = AdUTilAPI.getFormatUtilsObj();
var prvEnvObj = AdUTilAPI.getPreviewEnvObj();

var pageTypes = {
		BANNER : \'banner\',
		GRID : \'grid\',
		LEFTSIDESKIN : \'leftsideskin\',
		RIGHTSIDESKIN : \'rightsideskin\',
   };
function isDebugMode() {
    if (hasProperty(requestJson, \"debug\")) {
        return true;
    }
    if (adTagJson) {
        var debug = getPropertyVal(adTagJson.settings, \"debug\", false);
        return debug;
    }
    return false;
}
function addCSSClass(el, className) {
    var currClass = el.className;
    if (currClass) {
        if (currClass.indexOf(className) < 0) {
            el.className += \" \" + className;
        }
    } else {
        el.className = className;
    }
}

function isCarSalesAdNetwork(){
	var carSalesVal =  getPropertyVal(requestJson, \"carsales\",\"\"),isCarSalesSn=false;
	if(carSalesVal == \"true\"){
		isCarSalesSn = true;
	}else{
        carSalesVal = getPropertyVal(adTagJson.settings, \"isSAS\", \"\"); //This will work for all SAS tags
		if(carSalesVal && carSalesVal.toLowerCase() == \"y\"){
			isCarSalesSn = true;
		}
	}
    return isCarSalesSn;
}

function setRequestJson() {
    var jsonStr = getAdInvocationElem().getAttribute(\"requestJson\");    
    requestJson = (jsonStr && jsonStr != \'undefined\') ? JSON.parse(jsonStr) : \"\";
    var bonzaiData = getAdInvocationElem().getAttribute(\"bonzaiData\");
    if (bonzaiData) {
        adTagJson = JSON.parse(bonzaiData).network;
    }
}
function hasProperty(json, prop) {
    if (json && json.hasOwnProperty(prop)) {
        return true;
    }
    return false;
}

function getPropertyVal(json, prop, defaultVal) {
    var val = hasProperty(json, prop) ? json[prop] : defaultVal;
    return val;
}

function getAdEnvi() {
    if (adTagJson) {
        var env = getPropertyVal(adTagJson.settings, \"env\", \"wap\");
        return env;
    }
}
function getCloseBtnVal() {
    if (adTagJson) {
        var env = getPropertyVal(adTagJson.settings, \"closeBtn\", \"Y\");
        return env;
    }
}
var useAdCloseButton = function(){
	
	var closeBtnVal = getCloseBtnVal();
	
	var adEnv = getAdEnvi();
	
	if(closeBtnVal == \"N\" && adEnv == \'app\'){
		return false;
	}
	
	return true;
}

function getSettingsPropVal(prop,defaultVal) {
    if (adTagJson) {
        var env = getPropertyVal(adTagJson.settings, prop, defaultVal);
        return env;
    }
}

function getZIndexFromTag() {
    if (adTagJson) {
        var zIndex = getPropertyVal(adTagJson.settings, \"zIndex\");
        return zIndex;
    }
}

function getZindex() {
	var zIndex = getZIndexFromTag();
	//console.log(\"Z-index form tag:\"+zIndex);
	//console.log(\"pagePosition\"+pagePosition);
	AdUTilAPI.logMessage(\"Z-index form tag:\"+zIndex);
	AdUTilAPI.logMessage(\"pagePosition\"+pagePosition);
	if(!zIndex && pagePosition){
		var pagePositionJson = JSON.parse(pagePosition);
	    zIndex = pagePositionJson.zindex ? pagePositionJson.zindex : 99999;
	    AdUTilAPI.logMessage(\"Z-index form ad:\"+zIndex);
	}
	
	zIndex = zIndex ? zIndex : 99999;
	//console.log(\"Final Z-index:\"+zIndex);
	AdUTilAPI.logMessage(\"Final Z-index:\"+zIndex);
	
    return zIndex;
    
}

function getAdScriptId() {
    var scriptId = getPropertyVal(requestJson, \"scriptid\");
    return scriptId;
}
function getAddiMacroByKeyName(keyName) {
    if (adTagJson && adTagJson.macros) {
        var val = getPropertyVal(adTagJson.macros.addiTr, keyName);
        return val;
    }
}
function getMacroTrs(keyName) {
    if (adTagJson) {
        var val = getPropertyVal(adTagJson.macros, keyName);
        return val;
    }
}
function getMaxOfNumberString(arg1,arg2){
	var val1 = parseInt(arg1);
	var val2 = parseInt(arg2);
	
	if(val1 && val2){
		return val1 > val2 ? val1 : val2;
		
	}else if(val1){
		
		return val1;
		
	}else if(val2){
		
		return val2;
		
	}
	
}
function getAdNetwork() {
    var sn = getPropertyVal(adTagJson, \"name\", \"bonzai\");
    return sn;
    //var sn = hasProperty(requestJson, \"sn\") ? (requestJson.sn || \"bonzai\") : \"bonzai\";
    //return sn;
}

function getServiceNetwork() {
    var sn =  getPropertyVal(requestJson, \"sn\",\"\");//hasProperty(requestJson, \"sn\") ? (requestJson.sn || \"bonzai\") : \"bonzai\";
    return sn;
}

// We set this flag to check whether ad is running to take screen shot.
function setScreenShotMode() {
	var isScreenShotVal =  getPropertyVal(requestJson, \"screenshotmode\",\"\");//hasProperty(requestJson, \"sn\") ? (requestJson.sn || \"bonzai\") : \"bonzai\";
	if(isScreenShotVal == \"true\"){
		isScreenShot = true;
	}else{
		isScreenShot = false;
	}
    return isScreenShot;
}

// We use this flag to change few functionalities to take screen shot. Changed functionalities are video,autoexpand,autoclose and page change on orientation.
function getScreenShotMode(){
	return isScreenShot;
}

function networkCheck(checkArray,checkVal){
	var check = false;
	if(checkVal){
		for(var i=0,len = checkArray.length;i<len;i++){
			var value = checkArray[i];
			if(checkVal.toLowerCase().indexOf(value)>=0){
				check = true;
				break;
			}
		}
	}
	return check;
}
function getPublisher() {
	setRequestJson();
	var pub = getPropertyVal(requestJson, \"pub\",\"\");
    
	return pub;
}

function isExpectedNetwork(networkName) {
    var isExpNetwork = false;
    var adNetwork = getAdNetwork();
    if (adNetwork && networkName && adNetwork.toString().toLowerCase() == networkName.toString().toLowerCase()) {
        isExpNetwork = true;
    }
    return isExpNetwork;
}
function getAuthTkn() {
    var tk = \"\";
    if (hasProperty(requestJson, \"tk\")) {
        if (requestJson.tk && requestJson.tk.length > 0) {
            tk = requestJson.tk[0];
        } else {
            tk = requestJson.tk;
        }
    } else if (getWindowParent().tk) {
        tk = getWindowParent().tk;
    }
    return tk;
}
function getAnalyticsurl() {
    var aurl = \"\";
    if (hasProperty(requestJson, \"aurl\")) {
        aurl = requestJson.aurl;
    } else if (getWindowParent().aurl) {
        aurl = getWindowParent().aurl;
    }
    return aurl;
}

function getClickUrls() {
    var clkTrks = {};
    if (adTagJson) {
        clkTrks = getPropertyVal(adTagJson.macros, \"clkTr\", \"\");
    }
    return clkTrks;
}

function isNonIframeAd() {
    if (flgNonIframeAd) {
        return true;
    }
    else {
        return false;
    }
}

function getWindowParent() {
    if (isNonIframeAd()) {
        return window;
    }
    else {
        return window.parent;
    }
}
function getContainerName() {
    //var contName = getAdInvocationElem().getAttribute(\"adContainer\");    
    return adContainer; //global varibale passed from global namespace
}
function getAdInvocationElem() {
    var invocation = null;    
    if (isNonIframeAd()) {
        var overLayDiv = getAdOverlayDiv();
        if (overLayDiv) {
            var mainInvocArr = overLayDiv.querySelectorAll(\'.frameElement\');
            if (mainInvocArr && mainInvocArr.length > 0) {
                invocation = mainInvocArr[0];
            }
        }
    }
    else {       
        invocation = window.frameElement;
    }

    return invocation;
}

function getAdBody() {
    if (isNonIframeAd()) {
        return getAdInvocationElem();
    }
    else {
        return document.body;
    }
}

//This div is the main div from which elements are referenced
function getAdOverlayDiv() {
    var overlayDiv = getWindowParent().document.getElementsByClassName(getContainerName())[0];
    return overlayDiv;
}

function removeCSSClass(el, className) {
    el.className = el.className.replace(new RegExp(className), \"\");
}

function showAdPage(page, isLoadComplete, pageAnimes) {
    //Method to reset any thing on page after its unloaded
    resetPageToItsDefaultState();
    if (page) {
        currentPageId = AdUTilAPI.getElementId(page);
    }
    if (page.style.display === \"none\") {
        page.style.display = \"\";
    }
    var pageCSS = page.className;
    var pageEls = page.getElementsByTagName(\"*\"), pageAnimes = pageAnimes || [];
    if (isLoadComplete) {
        	var ifrm = getAdInvocationElem();
            var pw = page.clientWidth; //parseFloat(p.style.width);
            var ph = page.clientHeight; //parseFloat(p.style.height);

            ifrm.style.width = pw + \"px\";
            ifrm.style.height = ph + \"px\";
            //fire page level events
            handleDimensionsForAdPage(page, ispreview, false);  
            adAssetLoaderNew.getAdPageById(AdUTilAPI.getElementId(page)).showVideosForiOS();

            postStatsData(\'debug_pageload_eventfire\', currentPageId,true); 
            fireCustomEvent(\'pageload\', page);
            postPageLoadExecutor.socialMediaContainer(page);
            page.style.fontSize = (page.offsetWidth / parseFloat(page.getAttribute(\"pageWidth\")) * 100) + \"%\";
            getAdBody().style.fontSize = \'16px\';
            
            //this is intentionally kept on top of removing css class.
            handlePageBg(page);
            
            removeCSSClass(getAdInvocationElem(), spinnerClass);
            removeCSSClass(getAdInvocationElem(), \"loading\");
            removeCSSClass(page, spinnerClass);
            removeCSSClass(page, \"dummyLoading\");
            removeCSSClass(page, \"loading\");
            page.style.display = \'\';
            
            adAnalyticsObject.registerViewableMetric();
            var setOpacity = page.getAttribute(\"origOpacity\");
            if (setOpacity) {
                page.style.opacity = setOpacity;
            }           
           
            
            //setOverlayBackground(page);
      
            adAnimeObj.applyAllAnimationsOnPage(page);

            resetDragDropObj();
            videoAutoPlayObj.handleVideoAutoPlayAction();
            postStatsData(\'debug_postpage_loaded\'); 
            postPageLoadExecutor.execute({ \"page\": page, \"currentPageId\": currentPageId });           

            postStatsData(\'PAGELOADEND\', currentPageId);
            handleInteractions(page);
            adAssetLoaderNew.startLoadingOfLinkedPages(currentPageId);

            if (typeof afterPageLoad != \'undefined\') {
                afterPageLoad();
            }
            if(typeof AdECFHandler == \'object\') {
	            var firstExpPage = getPageToExpand();
	            AdECFHandler.touchAdCloseAction(adClose);
	            AdECFHandler.registerECFExpand(goToPageAction, [firstExpPage], [AdUTilAPI.getElementId(firstExpPage), currentPageId]);
            }
            handleFormatFunctionality();
            return;
    }
    else {
        adAnimeObj.resetAllAnimationsOnPage(page);
    }

    function loadPageAssetNew() {
        var pageId = AdUTilAPI.getElementId(page);
        function onAssetPageLoad() {
            var DOBPage = getPageElementBasedOnOrientation(page);
            var rtPage = AdUTilAPI.getElementId(DOBPage) == AdUTilAPI.getElementId(page);
            if (false === isLoadPageCloseAction && rtPage) {
                handleShowTimeout(page, function () {
                    postStatsData(\'debug_assetLoad_complete\', pageId);
                    afterAssetLoad(function(){                        
                        showAdPage(page, true, pageAnimes);
                        postStatsData(\'debug_pageView\', pageId);
                    });
                });
            }
        }
        postStatsData(\'debug_beforeAssetLoad\', pageId);
        adAssetLoaderNew.loadPage(pageId, onAssetPageLoad);
    }
    if (!isLoadComplete)
        setTimeout(loadPageAssetNew, 10);

    adAnalyticsObject.registerPageView(page);

    postPageLoadExecutor.stopMediaAndTimers();
}

function afterAssetLoad(callback) {
    if (callback) {
        callback();
    }
}

function handleFormatFunctionality(){
	
}

function getPageToExpand(){
	var firstExpPage = getFirstExpandblePage(\'full-screen\');
	return firstExpPage;
}

function isFirstPage(page) {
    var seqId = getFirstPageSeqId();
    if (page.getAttribute(\"sequenceid\") == seqId) {
        return true;
    }
    return false;
}

function getAllAdPageElements() {
    var pp = AdUTilAPI.getAllElementsByClassName(\'ad-page\');
    return pp;
}

function getFirstPageSeqId() {
    var pp = getAllAdPageElements();
    var _seqArr = new Array();
    for (var j = 0; j < pp.length; j++) {
        _seqArr.push(pp[j].getAttribute(\"sequenceid\"));
    }
    var seqId = Math.min.apply(Math, _seqArr);
    return seqId;
}
function reattachDomNode(node) {
	adAnimeObj.resetAllAnimationsOnPage(node); //to ensure that the triggered animations do not occur
    node.parentNode.appendChild(node.parentNode.removeChild(node));
    adAnimeObj.applyAllAnimationsOnPage(node);
    return node;
}


// onAdLoad will be called on the \"onload\" event of the ad iframe
//mainModule.onAdLoad = function (ibody, flgStopAdLoad) {
window.onAdLoad = function(ibody, flgStopAdLoad) {
    /*if (window.top.location && window.top.location.protocol == \"https:\") {
    	//TODO get this URL from db instead of hard coded. 
        assetS3BucketUrl = \"https://d306vfj3mhm2bb.cloudfront.net/\";
        assetS3BucketUrlForVideo = \"https://d306vfj3mhm2bb.cloudfront.net/\";
    	// assetS3BucketUrl = \"https://d3cjywc9gywo2r.cloudfront.net/\";
    	// assetS3BucketUrlForVideo = \"https://d3cjywc9gywo2r.cloudfront.net/\";
        asUrl = \"https://collector.bonzai.ad/rec\";
    }*/
    alert(090);
	
    // Exposed apis for execute js. Overriding goToPageAction reference because we are overriding goToPageAction for different ad formats.
    mainModule.goToPageAction = goToPageAction;
    window.goToPageAction = goToPageAction;
    setRequestJson();
    isCarSalesNetworkFlg = isCarSalesAdNetwork();
    setScreenShotMode();
    postStatsData(\'debug_adLoad_start\');
    initIFrmBurst();
    if (loadEvents) {
        loadEvents();
    }
    loadDragDropEvents();
    //create Ad Anim Object
    adAnimeObj.init(animQueue);
    //TODO below objects are only for apps.
    if (!postPageLoadExecutor)
        postPageLoadExecutor = new bonzai.obj.postpageload();

    //assetLoader.init();
    adAssetLoaderNew.init(linkedPageMap, adLoadStrategy);

    sdkObj = new sdkObject();
    if (bindOrientationChangeEvents) {
        bindOrientationChangeEvents();
    }
    var hasDeviceMotion = \'ondevicemotion\' in window;

    if (hasDeviceMotion && shakeEventObjects && shakeEventObjects.hasValues) {
        bindDeviceMotionEvent();
    }

    if (isNonIframeAd()) {
        removeAllIframeElements();
    }

    var ifrm = getAdInvocationElem();
    ifrm.style.display = \"none\";
    //	if(mraidObj.getMraid()){
    //mraidObj.registerMraidHandlers();
    //}
    // When we will implement separate js for wap and app, then setRequestJson() will be moved to showMyAd function again.

    function getTagGenType() {
        var isAppflg = false;
        if (AdUTilAPI.getSettingProp(\'env\', \'wap\') == \'app\') {
            isAppflg = true;
        }
        return isAppflg;
    }

    function getFirstPageWidth() {
        var pp = getAllAdPageElements(), page = pp && pp.length > 0 ? pp[0] : \"\", width = \"device-width\";
        width = page ? page.getAttribute(\"pageWidth\") : width;
        return width;
    }

    // Below function won\'t be there when we separate out app and wap js.
    function addViewPortTag(id, name, content) {
        var topWindow = window.parent || window;
        var element = topWindow.document.querySelector(\"meta[name=viewport]\");
        if(!element){
            var viewPortTag = document.createElement(\'meta\'), viewPortWidth = \"width=device-width,\", viewPortVal = AdUTilAPI.getSettingProp(\'viewport\');
            viewPortTag.id = \"viewport\";
            viewPortTag.name = \"viewport\";
            if (isCarSalesNetworkFlg || (sdkObj.isAdMobSdk())) {
                viewPortVal = \"1\";
            }
            switch (viewPortVal) {
                // 1. Viewport will be set as width of first page. 2. width will be not set in viewport. default - viewport will be device width              
                case \"1\":
                    var width = getFirstPageWidth();
                    viewPortWidth = \"width=\" + width + \",\";
                    break;
                case \"2\":
                    viewPortWidth = \"\";
                    break;
                default:
                    viewPortWidth = \"width=device-width,\";
                    break;
            }
            viewPortTag.content = viewPortWidth + \"initial-scale=1.0,user-scalable=no,maximum-scale=1.0,minium-scale=1.0\";
            appendMetaTagToHead(viewPortTag);
        }
    }
    function appendMetaTagToHead(viewPortTag) {
        var win = window.parent || window;
        if (win) {
            win.document.getElementsByTagName(\'head\')[0].appendChild(viewPortTag);
        }
    }
    function addEncodingTag() {
        var encodingTag = document.createElement(\'meta\');
        encodingTag.charset = \"utf-8\"
        appendMetaTagToHead(encodingTag);
    }
    function handleAdCloseBtns(){
    	
    	var useAdCloseBtn = useAdCloseButton();
    	
    	if(!useAdCloseBtn){
    		AdUTilAPI.hideCloseButtons();
    	}
    }
    function showAdOnDocReady(isApp) {
        if (isApp) {
            // adding viewport meta tag for apps.
            addViewPortTag();
            addEncodingTag();       
            showAdForApp();
            handleAdCloseBtns();
        } else {
            postStatsData(\'debug_wap_showad\');
            if (!flgStopAdLoad) {
                setTimeout(showMyAd, 100);
            }
        }        
    }
    
    function bindDocReadyEvnt(isApp) {
        postStatsData(\'debug_nonIframe_docReady\');
        if (document.readyState == \"complete\") {
            postStatsData(\'debug_nonIframe_docAlreadyReady\');
            showAdOnDocReady(isApp);
        } else {
            document.onreadystatechange = function () {
                if (document.readyState == \"complete\") {
                    postStatsData(\'debug_nonIframe_docReadyFire\');
                    showAdOnDocReady(isApp);
                }
            };
        }
    }
    //<meta charset=\"utf-8\">
    // This flag is used to add viewport, to register undetermined viewability tracker for app.
    
    isApp = getTagGenType();
    if (isNonIframeAd()) {
        postStatsData(\'debug_nonIframe_START\');
        // We are checking dom ready only for nonIframe ads because we are showing iframe ads on onLoad event of iframe.
        bindDocReadyEvnt(isApp);
    } else {
        postStatsData(\'debug_iframe_START\');
        showAdOnDocReady(isApp);
    }
    //	mraidObj.showAd();

};


function showAdForApp(){
    sdkObj.registerSdkHandlers();
    postStatsData(\'debug_app_showad\');
    sdkObj.showAd();
};

//** Below are the functions \"getHttpRequestObject\" and \"doAjax\" that help performing the ajax request in plain javascript. 
// Common function to initialize XML Http Request object 
function getHttpRequestObject() {
    // Define and initialize as false
    var xmlHttpRequst = false;

    // Mozilla/Safari/Non-IE
    if (window.XMLHttpRequest) {
        xmlHttpRequst = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        xmlHttpRequst = new ActiveXObject(\"Microsoft.XMLHTTP\");
    }
    return xmlHttpRequst;
}

// Does the AJAX call to URL specific with rest of the parameters
function doAjax(url, method, async, responseHandler, data) {
    // Set the variables
    url = url || \"\";
    method = method || \"GET\";
    async = async || true;
    data = data || null;

    if (url == \"\") {
        throw \"URL can not be null/blank\";
        //return false;
    }
    var xmlHttpRequst = getHttpRequestObject();

    // If AJAX supported
    if (xmlHttpRequst != false) {
        // Open Http Request connection
        if (method == \"GET\") {
            url = url + \"?\" + data;
            data = null;
        }
        xmlHttpRequst.open(method, url, async);
        // Set request header (optional if GET method is used)
        if (method == \"POST\") {
            xmlHttpRequst.setRequestHeader(\'Content-Type\', \'application/json; charset=utf-8\');
            //xmlHttpRequst.setRequestHeader(\'Content-Type\', \'application/x-www-form-urlencoded\');
        }
        // Assign (or define) response-handler/callback when ReadyState is changed.
        //xmlHttpRequst.onreadystatechange = responseHandler;
        xmlHttpRequst.onreadystatechange = function () {
            if (xmlHttpRequst.readyState == 4 && xmlHttpRequst.status == 200) {
                responseHandler(xmlHttpRequst.responseText);
            }
        };
        // Send data
        xmlHttpRequst.send(data);
    } else {
        throw \"Please use browser with Ajax support.!\";
    }
}

var customCLKEvent = new createCLKEvent();
customCLKEvent.init();


var showTimeObj;

function initShowTime(){
	try{
		showTimeObj = JSON.parse(showTimeProps);
		showTimeObj.firstTime = true;
	}catch(e){
		return false;
	}
}

function handleSpinnerAdding(){
	if(showTimeObj && showTimeObj.flagShowTime!=null){
		 if(showTimeObj.flagShowTime==false)
				addCSSClass(getAdInvocationElem(), spinnerClass);
	}
	else
		addCSSClass(getAdInvocationElem(), spinnerClass);
}

function handleShowTimeout(page, callback){
	if(showTimeObj && showTimeObj.flagShowTime!=null && showTimeObj.flagShowTime==true){
		var timeout = parseInt(showTimeObj.showTime)*1000;
		page.style.display = \'none\';
		setTimeout(function(){
			page.style.display = \'\';
			if(typeof callback == \'function\')
				callback();
			showTimeObj.flagShowTime=false;
		},timeout);
	}
	else{
		if(typeof callback == \'function\')
			callback();
	}
}

function showMyAd() {
	
	initShowTime();
	ispreview = isAdPixelPreview();
    if (ispreview) {
        isCustomSizeAd = true;
    }
    var pp = getAllAdPageElements();
    var firstPage = pp[0];
    if (typeof getFirstPageForAd != \'undefined\') {
        firstPage = getFirstPageForAd();
    }
    firstPage.style.display = \"none\"; //Since portrait /Landscape page, displaying none

    var pageToShow = getPageElementBasedOnOrientation(firstPage);
    pageToShow.style.display = \"block\"; // display block again which ever type of page to shown   
    var pageType = getPageType(pageToShow);
    addCSSClass(pageToShow, \'dummyLoading\');
    if (pageType && (pageType == \"banner\" ||  pageType == \"grid\")) {
    	handleSpinnerAdding();
    	addCSSClass(getAdInvocationElem(), \"loading\");
    }
    else {
        removeCSSClass(getAdInvocationElem(), spinnerClass);
        removeCSSClass(getAdInvocationElem(), \"loading\");
    }
    //Analytics call for impression.
    adAnalyticsObject.registerImpressions(AdUTilAPI.getElementId(pageToShow));
    var iframe = getAdInvocationElem();
    if (iframe) {
        iframe.style.overflow = \"hidden\";
        iframe.style.visibility = \"hidden\";
        iframe.style.display = \"\";
        iframe.style[\'z-index\'] = \"1\";
    }
   
    // to add overlay div to interstitial ad.
    if (isFullScreenPage(pageToShow)) {
        setOverlayProps(pageToShow);
    }
    var adContainer = iframe.parentNode;
    bindClkToPage(pp);

    iframe.style.visibility = \"visible\";
    //var ispreview = (adContainer.className.indexOf(\"adPreview\") >= 0);

    if (pageType && (pageType == \"banner\" ||  pageType == \"grid\")) {
        var dims = handleDimensionsForAdPage(pageToShow, ispreview, false);
        addCSSClass(iframe, \"staticPos\");
    }
    else {
        if (pageToShow.clientWidth) {
            if (!isSdk()) {
                handleDimensionsForAdPage(pageToShow, ispreview, false);
            } else {
                handleDimensionsForAdPage(pageToShow, false, false);
            }
        }
    }
    postStatsData(\'debug_showAdPage\');
    //progressBar.init(pageToShow.style.height, pageType == \"banner\");
    //setPageIframeDims(dims, p);
    if(formatUtilObject.isNewFormat() && !formatUtilObject.disableAdPlacementCheck()){
    	handleAdFormat(pageToShow);
    }else{
    	showAdPage(pageToShow, \'\', \'\');	
    }
}
function isBannerType(pageType){
	
	if (pageType && (pageType == pageTypes.BANNER || pageType === pageTypes.GRID)) {
		return true;
	}
	return false;
}
function isContainerCreationAllowed(pageType){
	
	 if(formatUtilObject.isIframeContainer(pageType)){
		 
		 if(prvEnvObj.isPreviewingOnDevice() && (pageType == pageTypes.LEFTSIDESKIN || pageType == pageTypes.RIGHTSIDESKIN)){
			 return false;
		 }
		 if(!devicePlatform.Desktop() && (pageType == pageTypes.LEFTSIDESKIN || pageType == pageTypes.RIGHTSIDESKIN)){
			 return false;
		 }
		 if(formatUtilObject.isHeaderPageType(pageType) && isFromPreview()){
			 return false;
		 }
     	return true;
     }
	 return false;
}

function setPageTypeAttributesOnElem(elem,pageType){
	
	var pagetypeProps = formatUtilObject.getPageTypeProps(pageType);
	
	var pageSubType = pagetypeProps.subType;
	
	elem.setAttribute(\'pageType\',pageType);
	
	if(pageSubType){
		elem.setAttribute(\'pageSubType\',pageSubType);
	}
}
function handleBannerPageType(pageType,currentPage){
	
	var createContainerForBannerPageType = false;
	
	var iframe = getAdInvocationElem();
	
	setPageTypeAttributesOnElem(iframe,pageType);
	
	if(formatUtilObject.isIframeContainer(pageType) && formatUtilObject.isHeaderPageType(pageType) && !isFromPreview()){
		//Hide actual ad in case we are creating banner as iframe
    	iframe.style.display = \"none\";
    	createContainerForBannerPageType = true;
	}else{		
		handlePageTypeContainerPosition(iframe,pageType);
		showAdPage(currentPage, \'\', \'\');
	}
	
	return createContainerForBannerPageType;
    
}

function handleAdFormatPageType(pageType,currentPage){
	
	var createContainerForPageType = false;
	switch(pageType){
		case pageTypes.BANNER:
		case pageTypes.GRID:
			createContainerForPageType = handleBannerPageType(pageType,currentPage);
			break;
		default :
			createContainerForPageType = isContainerCreationAllowed(pageType);
			break;
	}
	
	if(createContainerForPageType){		
		var pageId = AdUTilAPI.getElementId(currentPage);
		createContainer(pageType,pageId);
	}
}

//if there\'s no banner, hide container.
function handleAdContainer(formatPageTypes){
	var hasBanner = false;
	for(var i=0,l=formatPageTypes.length; i<l; i++){		
		var pageType = formatPageTypes[i];		
		if(isBannerType(pageType)){
			hasBanner = true;
			break;
		}
	}
	
	if(!hasBanner){
		var iframe = getAdInvocationElem();
		iframe.style.display = \"none\";
	}
}

function handleAdFormat(currentPage){
	var formatPageTypes = formatUtilObject.getAdPageTypes();
	handleAdContainer(formatPageTypes);
	for(var i=0,l=formatPageTypes.length;i<l;i++){		
		var pageType = formatPageTypes[i];		
		handleAdFormatPageType(pageType,currentPage);
	}
}

function prepareContainerOptions(pageType, ifrmProps){
	
	var pagetypeProps =  formatUtilObject.getPageTypeProps(pageType);
	
	var options = {};
	
	if(formatUtilObject.isHeaderPageType(pageType)){
		var firstBanner = getFirstExpandblePage(\"banner\");
		options = {
				\'isHeader\': true,
				\'pageType\': pagetypeProps.subType,
				 pageHeight : firstBanner.getAttribute(\"pageHeight\"),
				 pageWidth : firstBanner.getAttribute(\"pageWidth\")
		};
	}else{
		options = {
				\'pageType\': pageType,
				topOffset: parseFloat(ifrmProps.top),
				bottomOffset: parseFloat(ifrmProps.bottom),
				centerOffset: parseFloat(ifrmProps.centerOffset),
            	scrollingTopOffset: parseFloat(ifrmProps.scrollingTop),
            	website: ifrmProps.website
		};
	}
	return options;
}

function createContainer(pageType, pageId){
	
	var cntrProps = formatUtilObject.prepareContainerProperties(pageType);
	
	if(formatUtilObject.isIframeContainer(pageType)){
		if(pageId){
			cntrProps[\"pageId\"] = pageId;
		}
		createIframe(pageType, pageId, cntrProps);
	}
	
}
function createIframe(pageType, pageId, ifrmProps){
	
	var requiredIframe = new bonzai.obj.externalIframe();
	var cntrOptions = prepareContainerOptions(pageType, ifrmProps);
	
	requiredIframe.createNewIframeContainer(
			function (iframe) {
				//iframe.setAttribute(\"ifrmProps\", JSON.stringify(ifrmProps));
				requiredIframe.handleMessageSend(\'LOADPAGES\', { \'pageId\': pageId });
				requiredIframe.handleMessageSend(\'SHOWPAGE\', ifrmProps);
			}, cntrOptions);
}
function handlePageTypeContainerPosition(elem, pageType){
	
	var elemPageType = elem.getAttribute(\'pageType\');
	
	elemPageType = elemPageType ? elemPageType : pageType;
	
	if(!elemPageType){
		return;
	}
	var cntrProps =  formatUtilObject.prepareContainerProperties(elemPageType);
	
	if(cntrProps){
		var elemPosition = cntrProps.position;
		
		if(elemPosition){
			elem.style.position = elemPosition;
		}
		
		if(cntrProps.type == \'sticky\'){			
			var isFixedPosition = (elemPosition == \'fixed\');
			
			var isStickyToHeader = false;
			var formatType = AdUTilAPI.getAdFormatType();
			if(formatType == \'scroll_side_skin_no_header\'){
				AdUTilAPI.logMessage(formatType);
				isStickyToHeader = true;
			}
			
			
			var obj = createAdhesionJson(elem, cntrProps, isFixedPosition, isStickyToHeader);
			bonzai.plugin.adhBuilder().init(obj);
		}
	}
}
function createAdhesionJson(elem, pageStickypropsJson, isFixedPosition, isStickyToHeader) {
    
	if (pageStickypropsJson) {
		
        var options = {
            elem: elem,
            // adhPos: pageStickypropsJson.position,
            // adhTime: pageStickypropsJson.stickyTime * 1000, //ms
            // scrollDir: pageStickypropsJson.scrollDirection,
            // freqType: pageStickypropsJson.appearFrequency,
            // freqNo: pageStickypropsJson.appearances, //No of time to appear. In case freq Always then this will not come into picture
            // appearType: pageStickypropsJson.appearType,
            // appearAfter: {
            //     \'VAL\': pageStickypropsJson.appearUnit.VAL,
            //     \'UNIT\': pageStickypropsJson.appearUnit.UNIT // px or %
            // },

            //add top and bottom for scrolling formats
            isAlwaysFixed: isFixedPosition,
            isStickyToHeader: isStickyToHeader,
            top: parseFloat(pageStickypropsJson.top),
            bottom: parseFloat(pageStickypropsJson.bottom),
            scrollingTop: parseFloat(pageStickypropsJson.scrollingTop),
            website: pageStickypropsJson.website
        };
        return options;
    }
    return null;
}
function handleShowOfHeader(page){
	showAdPage(page, \"\", \"\");
}
function bindClkToPage(pp){
	var isClkReg = false;
	pp= pp?pp:getAllAdPageElements();
    for (var j = 0, len = pp.length, p; j < len; j++) {
        pp[j].addEventListener(\'click\', function (curPageId) {
            return function (evt) {
                evt = (evt) ? evt : ((window.event) ? window.event : \"\");
                evt.stopPropagation();
            	if(isClkReg){
            		isClkReg=false;
            		evt.preventDefault();
            		this.removeEventListener(\"click\", arguments.callee, false);
            	}else{
                adAnalyticsObject.pageEvtHandlerForAnaytics(evt, curPageId);
            	}
            };
        } (AdUTilAPI.getElementId(pp[j])), false);
        p = pp[j];
    }
}
function getPageType(page) {
    var pageType = page.getAttribute(\"pageType\");
    return pageType;
}

function isFullScreenPage(page) {
    return (getPageType(page) === \"full-screen\");
}

function isBanner(page) {
    return (getPageType(page) === \"banner\");
}

function isOverlayRequired(page) {
	var pageType = getPageType(page);
	return (pageType === \"full-screen\" || pageType === \"loading-page\" || pageType === \"teaser\");
}

function disableScrollForFullScreenPages(page) {
    if (isFullScreenPage(page)) {
        page.addEventListener(\"touchmove\", function (e) { e.preventDefault(); }, false);
    }
}

function reportError(msg, action) {
    // removed code from here as campaign was getting rejected  in pocketMath.
}

function getStandardHeight(ph, pw, containerEl, isResizeHeight) {
    ph = ph || 100;
    pw = pw || 640;
    return getDimsForAdPage(ph, pw, containerEl, isResizeHeight);
}

function getHeightForExpPage(ph, pw, containerEl, isResizeHeight) {
    ph = ph || 960;
    pw = pw || 640;
    return getDimsForAdPage(ph, pw, containerEl, isResizeHeight);
}

//param <isResizeHeight> is used forcibly have width as 100% and adjust the height according to that. Used only in banner for now. If the requirement
//changes, just stop passing this variable. It will revert back to old functionality.
function getDimsForAdPage(ph, pw, containerEl, isResizeHeight) {
    var h = containerEl.offsetHeight, w = containerEl.offsetWidth;
    if (isCustomSizeAd) {
        h = ph;
        w = pw;
    } else {
        if (h <= 0 && w <= 0) {
            return null;
        }
        function isSetWidth(ph, pw, h, w) {
            if (!isResizeHeight && h > 0) {
                return (ph / h > pw / w);
            }
            return false;
        }
        if (isSetWidth(ph, pw, h, w)) {
            w = (pw / ph) * h;
        } else {
            h = (ph / pw) * w;
        }
    }
    return { height: h, width: w };
}

// For app no need to bind close event.
function bindAdCloseEvent(adPageId, firstPageId, closeId) {
    var pageElem = AdUTilAPI.getElementById(adPageId);
    var closeButton = pageElem.querySelectorAll(\"*[data-id = \'\" + closeId + \"\']\");
    if (closeButton && closeButton.length == 1) {
        var closebtn = closeButton[0];
        var isCloseTriggered = false;
        closebtn.addEventListener(\"click\", function () {
        	if(isCloseTriggered){
        		isCloseTriggered=false;
            	this.removeEventListener(\"click\", arguments.callee, false);
            	return;
           }
        	closeAdCb(adPageId,firstPageId);
        });
}
};

function closeAdCb(adPageId,firstPageId){
	var comp = adPageId?AdUTilAPI.getElementById(adPageId):AdUTilAPI.getElementById(currentPageId);
    setPrevPageDimensionsForAnalytics(comp);
	resetTopIfmStyleOnCloseInPreview();
    adClose(adPageId, firstPageId);

};

function resetTopIfmStyleOnCloseInPreview(){
	if(isPreviewingOnActualDevice() && topIframe){
		setTimeout(function(){
			topIframe.style.width=\"\";
			topIframe.style.height=screen.height+\"px\";
			topIframe.style.removeProperty(\"top\");
			topIframe.style.removeProperty(\"left\");
		},10);
	}
}
function isSdk() {
    var isSdk = false;
    if (isApp) {
        isSdk = sdkObj ? sdkObj.isCustomSdk() : false; //mraidObj.getMraid();
    }
    return isSdk;
}
function registerUserInteraction(){
	if(typeof AdECFHandler == \'object\') {
		AdECFHandler.registerInteraction();
	}	
}
var adClose = function (adPageId, firstPageId,isAutoClose) {
    if (!isSdk() && !isAutoClose) {
        adAnalyticsObject.registerAdClose(adPageId);
    }
    registerUserInteraction();
    resetDimensionOnAdInvocationElem();
    resetTFrmStyle(topIframe);
    postPageLoadExecutor.stopMediaAndTimers();
    pauseAssetLoading(adPageId);

    var comp = getEleById(adPageId);
    comp.style.display = \"none\";
    if (!isSdk() && firstPageId) {
        var firstPage = getEleById(firstPageId);
        adCloseToDefault(firstPage);
    } else {
        if (!isApp) {
            closeIntestitialAd();
        } else {
            sdkObj.closeSdkObj();
        }
    }
};

function trackAdClose() {
    var page = getEleById(currentPageId);
    if (getPageType(page) != \"banner\") {
        adAnalyticsObject.registerAdClose(currentPageId);
    }
}
function pauseAssetLoading(pageId) {
    adAssetLoaderNew.hideProgressBar();
    if (adAssetLoaderNew.getAdPageById(pageId).pageType === \"loading-page\") {
        isLoadPageCloseAction = true;
        adAssetLoaderNew.pauseLoading(\"\");
    }
}
function showDefaultBaner() {
    trackAdClose();
    pauseAssetLoading(currentPageId);
    var comp = AdUTilAPI.getElementById(currentPageId);
    setPrevPageDimensionsForAnalytics(comp);
    var pp = getAllAdPageElements();
    var pageToShow = \"\";
    var _seqArr = new Array();
    for (var j = 0; j < pp.length; j++) {
        _seqArr.push(pp[j].getAttribute(\"sequenceid\"));
    }
    var seqId = Math.min.apply(Math, _seqArr);
    for (var j = 0; j < pp.length; j++) {
        if (pp[j].getAttribute(\"sequenceid\") == seqId && pp[j].getAttribute(\"pagetype\") == \"banner\") {
            pageToShow = pp[j];
            adCloseToDefault(pageToShow);
        } else {
            pp[j].style.display = \"none\";
        }
    }
    return pageToShow;
}

function isClassPresent(el, cssClass) {
    return (el.className.indexOf(cssClass) >= 0);
}

function getPositionForTheAdContainer() {
    return \'fixed\';
}

function setOverlayProps(pageToShow) {
    var overlayDiv = getAdOverlayDiv();
    if (overlayDiv) {
        overlayDiv.style.visibility = \"visible\";
        if (!ispreview && pageToShow.getAttribute(\'pagetype\') != \'banner\') {
            overlayDiv.style.position = getPositionForTheAdContainer();
            overlayDiv.style.overflow = \'auto\';
            overlayDiv.style[\"-webkit-overflow-scrolling\"] = \'touch\';
        } else {
            overlayDiv.style.position = \'\';
            overlayDiv.style.overflow = \'\';
            overlayDiv.style[\"-webkit-overflow-scrolling\"] = \'\';
        }
        //overlayDiv.setAttribute(\"id\", \"overlay\");
        if (overlayDiv.className.indexOf(\" overlay\") == -1) {
            overlayDiv.className += \" \" + \"overlay\";
        }
        overlayDiv.style.top = \"0px\";
        overlayDiv.style.left = \"0px\";
        if (ispreview) {
            //        	var iframe = getAdInvocationElem();
            //            var adContainer = iframe.parentNode;
            //            var dimObj = getHeightForExpPage(\'\', \'\', adContainer);
            //            AdUTilAPI.logMessage(getWindowParent().pixelContainer);
            //            if (getWindowParent().pixelContainer) {
            //                getWindowParent().pixelContainer.style.height = (dimObj.height + 4) + \"px\";
            //                getWindowParent().pixelContainer.style.width = (dimObj.width + 4) + \"px\";
            //            }
            //        	overlayDiv.style.height =  dimObj.height + \"px\";
            //        	overlayDiv.style.width = dimObj.width + \"px\";
        } else {
            overlayDiv.style.height = getWindowParent().window.innerHeight + \"px\";
            overlayDiv.style.width = \"100%\";
        }

        if(!adAssetLoaderNew.getAdPageById(AdUTilAPI.getElementId(pageToShow)).isLoaded()){
        	var progressBarNew = new bonzai.obj.adloadprogressbar();
        	var loadingPage = progressBarNew.getLoadingPage();
        	if(loadingPage){
        		handlePageBg(loadingPage);
        		//setOverlayBackground(loadingPage);
        	}
        }
        else {
        	handlePageBg(pageToShow);
        	//setOverlayBackground(pageToShow);
        }

    }
}

function bindDeviceMotionEvent() {
    window.addEventListener(\'devicemotion\', function (e) {
        handleDevicemotionEvent(e);
    }, false);
}

function bindOrientationChangeEvents() {
    var sg = this;
    currentOrientation = getOrientation();
    var parentObj = topIframe ? topIframe.contentWindow.parent : getWindowParent();
    // For IOS orientation change is fired after resize
    // For andriod ,resize is fired after orientationChange.
    // So correct orientation value can be get from the event fired later
    parentObj.addEventListener(\'resize\', function (e) {
        // for admob sdk, ad is not rendering expected on orientation change in
        // MOTOG , so added setTimeout.
        setTimeout(function () {
            handleOrientationChangeEvent();
        }, 100);
    }, false);

    parentObj.document.addEventListener(\"orientationchange\",
			function (e) {
			    handleOrientationChangeEvent();
			}, false);
}

function getOrientation() {
    var orientation = \"\";
    if (isApp) {
        orientation = sdkObj ? sdkObj.getOrientationBySdk() : \"\";
    }
    if (!orientation) {
        orientation = getWindowParent().orientation;
        if (!orientation && getWindowParent() && getWindowParent().parent) {
            orientation = getWindowParent().parent.orientation;
        }
        if (isIframeBurst && topIframe) {
            orientation = topIframe.contentWindow.parent.orientation;
        }
    }
    return orientation;
}

function handleDevicemotionEvent(e) {
    var sg = this;
    var pp = getEleById(currentPageId);
    if (pp && shakeEventObjects[currentPageId]) {
        shake.devicemotion(e, shakeEventObjects[currentPageId]);
    }
}

//Handle orientation change event
function handleOrientationChangeEvent() {
	if(isIntAdClosed){
		return;
	}
    if (getOrientation() != currentOrientation) {
        currentOrientation = getOrientation();
        var pp = getEleById(currentPageId);
        pp = getPageElementBasedOnOrientation(pp);        
        if (pp.getAttribute(\'data-id\') == currentPageId) { // In case orientation change, page is changing            
            var pW = pp.clientWidth;
            var dimObj = handleDimensionsForAdPage(pp);                      
            adAssetLoaderNew.handleLoadingPageOnOrientation(pp);
            adjustFontSizeOnOrientationChange(pW, dimObj.width); 
            handlePageBg(pp);
        }
        else {                    
            //Go To that page in case, page is different for orientation
            //exit fullscreeen videos before changing page
            AdUTilAPI.exitVideoFromFullScreen(currentPageId)
            goToPageAction(pp);
        }
        setTimeout(function () {
            //self.changefbActSrc(pp);
            postPageLoadExecutor.socialMediaContainer(pp);
        }, 200);

        postPageLoadExecutor.resetSwipeGalToItsDefaultState(pp, true);
        if(typeof handleOrientationChangeForFormat!=\"undefined\"){
        	handleOrientationChangeForFormat();
    	}
    }
}


//Handle dimensions of add - Based on configured properties
function handleDimensionsForAdPage(adPage, flgPreview, flgNotSetDims) {
    var iframe = getAdInvocationElem();
    var isCustomSdk = \"\";
    var isFullScrPag = isFullScreenPage(adPage) || adPage.getAttribute(\'pagetype\') == \'loading-page\';
    var overlayDiv = getAdOverlayDiv();
    if (isApp) {
        isCustomSdk = sdkObj.isCustomSdk();
    }
    if (typeof handleParentContainer != \'undefined\') {
        handleParentContainer();
    }    
    var dimObj = getDimensionsForThePage(adPage, flgPreview, isCustomSdk);
    if (isFullScrPag) {
    	setDimensionOnAdInvocationElem();
        setDimensionOfOuterIframe(dimObj.screenWidth, dimObj.screenHeight);
    }
    if (!flgNotSetDims) {
        adPage.style.height = dimObj.height + \"px\";
        adPage.style.width = dimObj.width + \"px\";
        iframe.style.height = dimObj.height + \"px\";
        iframe.style.width = dimObj.width + \"px\";
        if (isFullScrPag) {
            if (overlayDiv) {
                if (typeof handleWebViewBodyForInterstitialAds != \'undefined\') {
                    handleWebViewBodyForInterstitialAds(dimObj);
                }
                overlayDiv.style.height = dimObj.screenHeight + \"px\";
                // Making overlay width to 100% to make page centre align and made overlay width as screen width.
                if(isApp){
                    overlayDiv.style.width = \'100%\';
                }
            }
        }
    }
    if (adPage.getAttribute(\'pagetype\') == \'banner\') {
        if (overlayDiv) {
            overlayDiv.style.height = dimObj.height + \"px\";
        }
        iframe.style.top = \'0px\';
    }
    else {
        setTopPosForVerticalCenter(iframe, dimObj.height, dimObj.screenHeight, dimObj.screenWidth);
    }
    //Since for noniframe Ad left needs tp be set

    //TODO remove below code for app when wap and app have separate js.
    if (ispreview) {
        var iframe = getAdInvocationElem();
        var adContainer = iframe.parentNode;
        if (getWindowParent().pixelContainer) {
            getWindowParent().pixelContainer.style.height = (parseFloat(dimObj.height)) + \"px\";
            getWindowParent().pixelContainer.style.width = (parseFloat(dimObj.width)) + \"px\";
            if (overlayDiv) {
            	overlayDiv.style.width = \"100%\";
                overlayDiv.style.height = \"100%\";
        }
    }
    }
    
    // Suresh  - When we check preview in device then banner is going up in landscape mode. To avoid this we are setting its position fixed. We are not changing it in p.htm because it has big impact.
	if(isPreviewingOnActualDevice() && topIframe){
			topIframe.style.position=\"fixed\";
     }
    return dimObj;
}

//Get Dimensions of the page, based on current  page size and available screen size
function getDimensionsForThePage(pp, flgPreview, mraid) {
    var pH = pp.getAttribute(\"pageHeight\"), pW = pp.getAttribute(\"pageWidth\");
    var pOrientation = getOrientationTypeForThePage(pp);
    pOrientation = changeOrientationCustom(pOrientation, pp);
    var pageType = pp.getAttribute(\"pageType\");
    var iframe = getAdInvocationElem();
    var adContainer = iframe.parentNode;
    var dimObj = null;
    var orienatationType = getOrientTypeBasedOnOrient(currentOrientation);
    var dims = getScreenAvaibaleWidthAndHeight(mraid, orienatationType, pageType, pp);
    var screenHeight = dims.height;
    var screenWidth = dims.width;

    var tFrm = topIframe;
    if (pageType === \'banner\' && (adContainer.className && flgPreview)) {
        adContainer = iframe;
    }
    if (flgPreview) {
        dimObj = getDimsForAdPage(pH, pW, adContainer, !flgPreview);
    }
    else {
//        if (!isCustomSizeAd) {
//            pH = pp.clientHeight;
//            pW = pp.clientWidth;
        //        }
           //Commented for this issue with orientation.. as clientheight, clientwidth keep on changing and everytime giving different dimensions
           //Varun 12-Aug-2014
        var h = screenHeight, w = screenWidth;
        if (pageType === \'banner\' && !isPageFixedSize(pageType)) {
            // for \'Relod to fit\' taking width and height of the available container otherwise it would be original page height and width
            h = getContHForBanner(adContainer, tFrm, pH);
            // On orientation change ad was taking width of devices insted of container width, so added below code for appnexus app.
            w = getContWForBanner(adContainer, tFrm, pW);
            // if div is available to show ad then getting it\'s width and height for banner. we use below code because when banner is rendering in div whose width or height is small than screenwidth then banner was cutting after closing expandable page. 
            var calWidth = pp.getAttribute(\"calcwidth\");
            var calHeight = pp.getAttribute(\"calcheight\");
            var prevOrienatationType = pp.getAttribute(\"orientationType\");
            if (!calWidth || (prevOrienatationType != orienatationType) || !calHeight) {
                calWidth = w;
                calHeight = h;
                pp.setAttribute(\"calcheight\", calHeight);
                pp.setAttribute(\"calcwidth\", calWidth);
                pp.setAttribute(\"orientationType\", orienatationType);
            }
            w = calWidth;
            h = calHeight;
            // Below check added to fix munich and LG ad issue.(14-02-14)
            if (w > screenWidth && isApp) {
                w = screenWidth;
            }
        }
        switch (pOrientation) {
            case \"0\": //Reload To Fit
            case \"2\": //DOB 
                //Its difficult to get the available screen size in which expandable ad is
                //Same cause issue on orientation change
                //So setting the overlay  100% , so that we can get height and width
                //then adjust the ad               
                if (isApp && pageType != \'banner\' && !isPageFixedSize(pageType)) {
                    var overlayDiv = getAdOverlayDiv();
                    overlayDiv.style.height = \'100%\';
                    overlayDiv.style.width = \'100%\';
                    //        we have added this check because it was working fine in airpush app but causing problem in inmobi,pubmatic and millenium media app. 
                    //        So we are checking that if overlay div\'s height/width is greater than 50% of screen\'s height/width then we are using overlay div\'s dimensions. 
                    screenHeight = overlayDiv.offsetHeight < screenHeight / 2 ? screenHeight : overlayDiv.offsetHeight;
                    screenWidth = overlayDiv.offsetWidth < screenWidth / 2 ? screenWidth : overlayDiv.offsetWidth;
                    var h = screenHeight, w = screenWidth;
                }
                dimObj = getPageDimsForReloadToFit(pH, pW, h, w, pageType);
                break;
            case \"1\": //Relaod To Fill
                if (pageType === \'banner\') {
                    w = screenWidth;
                }
                dimObj = getPageDimsForReloadToFill(pH, pW, h, w,pageType);
                break;
            case \"-1\": //In case we are not supporting oriantation changes for example in desktop formats
            	if (formatUtilObject.isNewFormat()) {
            		dimObj = { height: pH, width: pW };
            	}
            default:
                break;
        }
		AdUTilAPI.saveScreenDimsByOrientation(orienatationType,pageType,{\"height\":screenHeight,\"width\":screenWidth});
        //alert(\"before pageType:[\"+pageType+\"],Orintation:[\"+orienatationType+\"]\");
        //alert(\"screenHeight:[\"+screenHeight+\"]\");
        if(useSavedGlblOrientationDims()){
        	var savedDimsByOrientation = AdUTilAPI.getSavedDimsByOrientation(orienatationType,pageType);
        	if(savedDimsByOrientation){
        		screenHeight = savedDimsByOrientation.height;
        	}
        }
        //alert(\"after screenHeight:[\"+screenHeight+\"]\");
        dimObj.screenWidth = screenWidth;
        dimObj.screenHeight = screenHeight;
        dimObj.orienatationType = orienatationType;
        //enable and diable scroll on the page, based on height
        enableDisableScrollOnOrientationChange(pp, screenHeight, dimObj.height, screenWidth, dimObj.width);
    }
    return dimObj;
}

//enable and disable scroll on the page, based on height
function enableDisableScrollOnOrientationChange(page, screenHeight, pageHeight, screenWidth, pageWidth) {
    var pageType = page.getAttribute(\'pageType\');
    // MIZU-3662 - Scrollbar is displaying in the Mobile screen even if the ad is responsive. we have moved style related to overlay from this function because this is required in case of preview. This is fix for MIZU-4487.
      disableScrollbarForPreview(page, screenHeight, pageHeight, screenWidth, pageWidth);
    if (pageHeight <= screenHeight && pageWidth <= screenWidth && pageType != \'banner\') {
        page.ontouchmove = function (e) {
            e.preventDefault();
            return false;
        };
    }
    else {
        page.ontouchmove = function (e) {
            return true;
        };
    }
    if (pageType == \'banner\') {
        page.style.overflow = \'hidden\';
    }
}

function disableScrollbarForPreview(page, screenHeight, pageHeight, screenWidth, pageWidth){
	if(!isFromPreview()) return;
	 var pageType = page.getAttribute(\'pageType\');
	 var overlayDiv = getAdOverlayDiv();
	 if (pageHeight <= screenHeight && pageWidth <= screenWidth && pageType != \'banner\') {
		 overlayDiv.style.overflow = \'hidden\';
	 }else if(pageType != \'banner\'){
		 overlayDiv.style.overflow = \'auto\';
	 }
	    // In preview for ipad minni,desktop and 1:1 wre showing horizontal scrollbar, so overflow-x hidden;
	    	overlayDiv.style[\"overflow-x\"] = \'hidden\';
}
function getAvailableScreenHeight(parent) {
    var height;
    if (topIframe) {
        var topIframeParent = topIframe.parent;
        height = topIframe.contentWindow.parent.innerHeight;
    } else {
        height = parent.innerHeight != null ? parent.innerHeight
				: parent.document.documentElement
						&& parent.document.documentElement.clientHeight ? parent.document.documentElement.clientHeight
						: parent.document.body != null ? parent.document.body.clientHeight
								: null;
    }
    return height;
}


function getAvailableScreenWidth(parent) {
    var width;
    if (topIframe) {
        width = topIframe.contentWindow.parent.innerWidth;
    } else {
        width = parent.innerWidth != null ? parent.innerWidth
				: parent.document.documentElement
						&& parent.document.documentElement.clientWidth ? parent.document.documentElement.clientWidth
						: parent.document.body != null ? parent.document.body.clientWidth
								: null;

    }
    return width;
}
function getScreenAvaibaleWidthAndHeight(mraid, orienatationType, pageType, page) {
    var screenHeight = \'\';
    var screenWidth = \'\';
    if (!isApp) {
        screenHeight = getAvailableScreenHeight(getWindowParent());
        screenWidth = getAvailableScreenWidth(getWindowParent());
    }
    else {
        // if width is not available for banner then getting screen width. for other pages it will always execute.
        var screenDims = sdkObj.getExpandProperties();
        // Added check screenDims.width > 0 because for some the app like inmobi getExpandProperties does not return width and height.
        if (screenDims && screenDims.width > 0) {            
            screenWidth = screenDims.width;
            screenHeight = screenDims.height; 
        } else {
            screenWidth = getWindowParent().innerWidth;
            screenHeight = getWindowParent().innerHeight;
        }
    }
    switch (orienatationType) {
        case \'PORTRAIT\': // Portrait           
            if (screenWidth > screenHeight) { //in IOS these are always same but for android it comes based on orientation
                var temp = screenHeight;
                screenHeight = screenWidth;
                screenWidth = temp;
            }
            break;
        case \'LANDSCAPE\': // Landscape: turned 90 degrees clockwise
            if (screenHeight > screenWidth) { //in IOS these are always same but for android it comes based on orientation
                var temp = screenHeight;
                screenHeight = screenWidth;
                screenWidth = temp;
            }
            break;
    }
    return { width: screenWidth, height: screenHeight };
}

//Gives dimension when the page needs to fill entire width of screen
function getPageDimsForReloadToFill(pageH, pageW, viewPortH, viewPortW,pageType) {
	// cheking ad type here. if ad type is Fixed banner and respnsibe expand then returninng defined dimension for banner.
    var isFixedPage = isPageFixedSize(pageType);
    if (isFixedPage) {
        return { height: pageH, width: pageW };
    } else {
        var newPageWidth = viewPortW;
        var newPageHeight = pageH / pageW * viewPortW;
        return { height: newPageHeight, width: newPageWidth };
    }
}

function isPageFixedSize(pageType) {
    var formatUtilObject = AdUTilAPI.getFormatUtilsObj();
    if (formatUtilObject.isFixedPage(pageType) || isAdPixelPreview()) {
        return true;
    }
    return false;
}
 
//Gives dimension when page needs to fit in required screen area
function getPageDimsForReloadToFit(pageH, pageW, viewPortH, viewPortW,pageType) {
	// cheking ad type here. if ad type is Fixed banner and respnsibe expand then returninng defined dimension for banner.
    var isFixedPage = isPageFixedSize(pageType);
    if (isFixedPage) {
        return { height: pageH, width: pageW }
    } else {
        var newPageWidth = null;
        var newPageHeight = null;

        var tempPageHeight = pageH / pageW * viewPortW;
        var tempPageWidth = pageW / pageH * viewPortH;

        tempPageHeight = tempPageHeight > viewPortH ? viewPortH : tempPageHeight;
        tempPageWidth = tempPageWidth > viewPortW ? viewPortW : tempPageWidth;

        if (tempPageHeight / viewPortH > tempPageWidth / viewPortW) {
            newPageHeight = pageH / pageW * tempPageWidth;
            newPageWidth = tempPageWidth;
        }
        else {
            newPageWidth = pageW / pageH * tempPageHeight;
            newPageHeight = tempPageHeight;
        }
        return { height: newPageHeight, width: newPageWidth };
    }
}

//Adjust size of font on orientation change
function adjustFontSizeOnOrientationChange(oldWidth, newWidth) {
    var fontSize = getAdBody().style.fontSize;
    fontSize = parseFloat(fontSize.replace(/px/, \'\'));
    fontSize = fontSize * newWidth / oldWidth;
    getAdBody().style.fontSize = fontSize + \'px\';
}

function getOrientTypeBasedOnOrient(orientVal) {	
	var orientType = \'PORTRAIT\';
	var adId = AdUTilAPI.getAdId();
    if (devicePlatform.Android() && !isApp) {
	     var screenDims = getScreenHeightWidth();
        orientType = screenDims.screenWidth > screenDims.screenHeight ? \"LANDSCAPE\" : \'PORTRAIT\';
	}
	else {       
        if (typeof orientVal == \'string\') {
            orientVal = parseInt(orientVal);
        }
        switch (orientVal) {
            case 0: // Portrait
            case 180: // Upside-down Portrait            
                break;
            case -90: // Landscape: turned 90 degrees counter-clockwise
            case 90: // Landscape: turned 90 degrees clockwise
            case 270: //For mraid                        
            case -270: //For mraid
                orientType = \"LANDSCAPE\"
                break;
            default:
                orientType = null;
                break;
        }
    }
    return orientType;
}

function getScreenHeightWidth() {
    var screenHeight = \'\';
    var screenWidth = \'\';
    if (!isApp) {
        screenHeight = getAvailableScreenHeight(getWindowParent());
        screenWidth = getAvailableScreenWidth(getWindowParent());
    }
    else {
        // if width is not available for banner then getting screen width. for other pages it will always execute.
        var screenDims = sdkObj.getExpandProperties();
        // Added check screenDims.width > 0 because for some the app like inmobi getExpandProperties does not return width and height.
        if (screenDims && screenDims.width > 0) {
            screenWidth = screenDims.width;
            screenHeight = screenDims.height;
        } else {
            screenWidth = getWindowParent().innerWidth;
            screenHeight = getWindowParent().innerHeight;
        }
    }

    return { \'screenWidth\': screenWidth, \'screenHeight\': screenHeight }
}


function adCloseToDefault(defaultAdPage) {
    var ifrm = getAdInvocationElem();
    postStatsData(\'debug_adClose_Page\');
    
    defaultAdPage = getPageElementBasedOnOrientation(defaultAdPage);   
    
    var pp = getAllAdPageElements();
    for (var j = 0, len = pp.length, p; j < len; j++) {
        p = pp[j];
        p.style.display = \"none\";
        addCSSClass(p, \"dummyLoading\");
        addCSSClass(p, \"loading\");
    }

    ifrm.style.visibility = \"hidden\";
    defaultAdPage.style.display = \"block\";
    if (isApp && !isNonIframeAd()) {
        var position = sdkObj.getDefaultPositionBySdk();
        if (position) {
            defaultAdPage.style.left = position.x;
            defaultAdPage.style.top = position.y;
        }
    }
    var adContainer = ifrm.parentNode;
    //var ispreview = (adContainer.className.indexOf(\"adPreview\") >= 0);
    //var ispreview = isAdPixelPreview();
    var pageType = getPageType(defaultAdPage);
    var pageToShowDims = null;
    pageToShowDims = handleDimensionsForAdPage(defaultAdPage, ispreview, true);

    //   defaultAdPage.style.height = pageToShowDims.height + \"px\";
    //  defaultAdPage.style.width = pageToShowDims.width + \"px\";

    var pw = defaultAdPage.clientWidth;
    var ph = defaultAdPage.clientHeight;
    ifrm.style.visibility = \"visible\";
    // For Bonzai sdk in android, if we don\'t apply below style then iframe\'s clientWidth and clientHeight will be zero so it is not showing banner after expandable page closed. To fix this issue we are applying below style.(18/02/2014)
    if (ifrm.style.display == \"none\") {
        ifrm.style.display = \"\";
    }
    if (pageType === \'banner\') {
        addCSSClass(ifrm, \"staticPos\");
    }
    else {
        removeCSSClass(ifrm, \"staticPos\");
    }
    if (false === isLoadPageCloseAction) {
        showAdPage(defaultAdPage, \'\', \'\');
    }
    else {
        //   defaultAdPage.style.display = \"\";
        removeCSSClass(defaultAdPage, \"loading\");
        showAdPage(defaultAdPage, true, \'\');
    }

    var overlayDiv = getAdOverlayDiv();
    if (overlayDiv) {
        //overlayDiv.removeAttribute(\"id\");
        overlayDiv.className = overlayDiv.className.replace(\' overlay\', \'\');
        if (mizuAdDivleft) {
            overlayDiv.style.left = mizuAdDivleft;
        }
        if (mizuAdTop) {
            overlayDiv.style.top = mizuAdTop;
        }
        overlayDiv.style.height = defaultAdPage.style.height;
        if(isCarSalesNetworkFlg && isApp){
            overlayDiv.style.width = defaultAdPage.style.width;
        }
        overlayDiv.style.position = \'\';
        overlayDiv.style.overflow = \'\';
        // below code changes are done for same reason given above for iframe.
        if (overlayDiv.style.display == \"none\") {
            overlayDiv.style.display = \'\';
        }
    }
}

function resetPageToItsDefaultState(pageId) {
    if (!pageId) {
        pageId = currentPageId;
    }
    if (pageId) {
        var page = getEleById(pageId);
        postPageLoadExecutor.resetSwipeGalToItsDefaultState(page, false);
    }
}


function getEleById(id) {
    var ele = AdUTilAPI.getElementById(id);
    return ele;
}

function isFrstInterstitalPage(page) {
    if (isFirstPage(page) && isFullScreenPage(page)) {
        return true;
    }
    return false;
}

//Get page Element based on orientation
function getPageElementBasedOnOrientation(pageObj) {
	if(getScreenShotMode()){
		return pageObj;
	}
    var commonId = pageObj.getAttribute(\"commonId\");
    var orienatationType = getOrientTypeBasedOnOrient(currentOrientation);

    if (!orienatationType) {
        orienatationType = \'PORTRAIT\';
    }
    var pOrientation = getOrientationTypeForThePage(pageObj);
    if (pOrientation == \'2\') {
        var pp = getAllAdPageElements();
        for (var j = 0; j < pp.length; j++) {
            if (pp[j].getAttribute(\"commonId\") && pp[j].getAttribute(\"commonId\") == commonId) {
                if (orienatationType == \'PORTRAIT\') {
                    if (isPortraitPage(pp[j])) {
                        return pp[j];
                    }
                }
                else {
                    if (!isPortraitPage(pp[j])) {
                        return pp[j];
                    }
                }
            }
        }
    }
    return pageObj;
}

function isPortraitPage(pageObj) {
    var id = pageObj.getAttribute(\'data-id\');
    var commonId = pageObj.getAttribute(\'commonId\');
    if (!commonId) {
        commonId = id;
    }
    if (id == commonId) {
        return true;
    }
    else {
        return false;
    }
}

function getPageIdsBasedOnPage(pageObj) {
    var commonId = pageObj.getAttribute(\'commonId\');
    var pageIds = [];
    var pOrientation = getOrientationTypeForThePage(pageObj);
    if (pOrientation == \'2\') { // DOB
        var pp = getAllAdPageElements();
        for (var j = 0; j < pp.length; j++) {
            if (pp[j].getAttribute(\"commonId\") && pp[j].getAttribute(\"commonId\") == commonId) {
                pageIds.push(pp[j].getAttribute(\'data-id\'));
            }
        }
    }
    else {
        pageIds.push(pageObj.getAttribute(\'data-id\'));
    }
    return pageIds;
}

function goToPageAction(pageToShow, src) {
	
	if(typeof AdECFHandler == \'object\') {
		AdECFHandler.registerInteraction(src);
	}
	
    var currentPage = AdUTilAPI.getElementById(currentPageId);
    isLoadPageCloseAction = false;
    postStatsData(\'PAGELOADSTART\', pageToShow.getAttribute(\'data-id\'));
    var overlayDiv = getAdOverlayDiv();
    pageToShow = getPageElementBasedOnOrientation(pageToShow);
    if (overlayDiv) {
        overlayDiv.style.visibility = \"visible\";
        mizuAdDivleft = overlayDiv.offsetLeft;
        mizuAdTop = overlayDiv.offsetTop;
        // Moved to showAdPage method, since its stopping the exp page to load when overlay style position is set to \'fixed\' 
        if (pageToShow && isFullScreenPage(pageToShow)) {
            setOverlayProps(pageToShow);
        }
    }
    var pp = getAllAdPageElements();
    var ifrm = getAdInvocationElem();
    var isBannerPage = false;
    for (var j = 0; j < pp.length; j++) {
        if (pp[j].getAttribute(\"pageType\") == \'banner\') {
            isBannerPage = true;
            break;
        }
    }

    var iFrameCurrH = ifrm.style.height || ifrm.offsetHeight + \"px\", iFrameCurrW = ifrm.style.width || ifrm.offsetWidth + \"px\";
    for (var j = 0, len = pp.length, p; j < len; j++) {
        p = pp[j];
        p.style.display = \"none\";
        addCSSClass(p, \"dummyLoading\");
        addCSSClass(p, \"loading\");

    }

    // For \'Load on engegement\' stratergy, sometimes loading page and secodn page were showed up at same time. to fix this we have added below check.
    if (adAssetLoaderNew.getAdPageById(AdUTilAPI.getElementId(pageToShow)).isLoaded() && (adAssetLoaderNew.adLoadStrategy() != \"loadEngagement\" || adAssetLoaderNew.allPagesLoaded())) {
        removeCSSClass(pageToShow, \"loading\");
    }

    pageToShow.style.display = \"\";
    var pageToShowDims = \'\';
    var adContainer = ifrm.parentNode;
    var pageType = pageToShow.getAttribute(\"pageType\");
    //var ispreview = (adContainer.className.indexOf(\"adPreview\") >= 0);
    //var ispreview = isAdPixelPreview();
    
    //clear all Delay Animation functions on goto page action
    var clearTimeoutAnimations = adAnimeObj.clearTimeoutAnimations;
    for (var i = 0; i < clearTimeoutAnimations.length; i++) {
        clearTimeout(clearTimeoutAnimations[i]);
    }
    pageToShowDims = handleDimensionsForAdPage(pageToShow, ispreview, true, isSdk());
    if (pageType === \'banner\') {
        addCSSClass(ifrm, \"staticPos\");
        addCSSClass(ifrm, spinnerClass);
        addCSSClass(ifrm, \"loading\");
    }
    else {
        removeCSSClass(ifrm, \"staticPos\");
        removeCSSClass(ifrm, spinnerClass);
        removeCSSClass(ifrm, \"loading\");
    }
    //Instead of setting height in handleDimensionsForAdPage, we are setting expicilty
    //Some how setting the width outside the function is not working correctly   
    pageToShow.style.height = pageToShowDims.height + \"px\";
    pageToShow.style.width = pageToShowDims.width + \"px\";

    var pw = pageToShow.clientWidth; //parseFloat(p.style.width);
    var ph = pageToShow.clientHeight; //parseFloat(p.style.height);

    ifrm.style.width = pw + \"px\";
    ifrm.style.height = ph + \"px\";
    var currPageType = getPageType(currentPage);
    var toShowPageType = getPageType(pageToShow);
    var isPageSizeTransitioned = currPageType === toShowPageType ? false : true;    
    if (isPageSizeTransitioned && isTransitionRequired()) {
        pageToShow.style.display = \"none\";
        ifrm.addEventListener(\'webkitTransitionEnd\', function (e) {
            loadNewPage(pageType);
            this.removeEventListener(\'webkitTransitionEnd\', arguments.callee, false);
        }, false);
        addCSSClass(ifrm, \"animeLoad\");
    } else {
        loadNewPage(pageType);
    }

    function loadNewPage(pageType) {
        //progressBar.init(ph, pageType == \'banner\');
        removeCSSClass(ifrm, \"animeLoad\");
        showAdPage(pageToShow);
    }
    // keep the this at the end as after expanded state mraid won\'t allow execute any javascript code.
    if (isBannerPage && pageType != \'banner\') {
        if (overlayDiv) {
        	setOverLayPropsWhenMraidExpand(overlayDiv, pageToShowDims.screenWidth, pageToShowDims.height, pageToShowDims.orienatationType);
        }
        if (isApp) {
            sdkObj.expandAd(pw, ph, pageToShowDims);
        }
    }
}


function setOverLayPropsWhenMraidExpand(overlayDiv, pw, ph, orienatationType) {
    if (overlayDiv && isSdk()) {
        switch (orienatationType) {
            case \'PORTRAIT\': // Portrait  
                overlayDiv.style.height = ph + \"px\";
                overlayDiv.style.width = pw + \"px\";
                break;
            case \'LANDSCAPE\': // Landscape: turned 90 degrees clockwise        	
                overlayDiv.style.width = pw + \"px\";
                overlayDiv.style.height = ph + \"px\";
                break;
        }
    }
}
function getOrientationTypeForThePage(pageObj) {
    var pOrientation = pageObj.getAttribute(\"orientation\");
    if (!pOrientation || pOrientation == \'\') {
        pOrientation = \'0\';
    }
    return pOrientation;
}

function closeIntestitialAd() {
	isIntAdClosed = true;
    var overlayDiv = getAdOverlayDiv();
    overlayDiv.style.display = \"none\";
    var ifrm = getAdInvocationElem();
    ifrm.style.display = \"none\";
}

function loadDragDropEvents() {

    if (dragDropObjs && bonzai.obj && bonzai.obj.dragdrop) {
        dragDropExecutor = new bonzai.obj.dragdrop(dragDropObjs);
        dragDropExecutor.init();
    }

}

var getParentWrapElementId = function (elemId) {
    var wrapElemId = AdUTilAPI.getParentWrapElementId(elemId);
    return wrapElemId;
};

function postStatsData(eventName, pageId,flgDims) {
    adAnalyticsObject.sendInfoToAnalyticsForDebug(eventName, pageId, flgDims);
}

function resetDragDropObj() {
    if (dragDropObjs && bonzai.obj && bonzai.obj.dragdrop) {
        dragDropExecutor.resetDragDropObj();
    }
}

function removeAllIframeElements() {
    if (!isNonIframeAd()) {
        return;
    }
    var allIframeElements = AdUTilAPI.querySelectorAll(\'iframe\');
    if (allIframeElements && allIframeElements.length > 0) {
        for (var i = 0, len = allIframeElements.length; i < len; i++) {
            //var elemId = AdUTilAPI.getElementId(allIframeElements[i]);
            //var elem = getParentWrapElementId(elemId);
            if (allIframeElements[i] && allIframeElements[i].parentNode) {
                allIframeElements[i].parentNode.removeChild(allIframeElements[i]);
            }
        }
    }
}

function setTopPosForVerticalCenter(parentFrame, childHeight, scrHeight, scrWidth) {
    //    var scrHeight = getWindowParent().innerHeight;
    //    var scrWidth = getWindowParent().innerWidth;
    var orientationType = getOrientTypeBasedOnOrient(currentOrientation);
    if ((orientationType == \'PORTRAIT\' && scrWidth > scrHeight) || (orientationType == \'LANDSCAPE\' && scrHeight > scrWidth)) {
        scrHeight = scrWidth;
    }   
    //handled the case for reload to fill
    if ((scrHeight - childHeight) < 0) {
        parentFrame.style.top = \'0px\';
    }
    else {
        parentFrame.style.top = (scrHeight - childHeight) / 2 + \'px\';
    }
}

function getCookie() {
    var raw = document.cookie,
		arrCoo = raw.split(\';\'),
		cookie = {},
		i, x;
    for (i = 0; x = arrCoo[i]; i++)
        cookie[x.split(\'=\')[0] || \'\'] = x.split(\'=\')[1] || \'\';
    return cookie;
}
function setCookie(key, value, options) {
    if (!key || !value) return false;
    var domain = options.domain || window.location.hostname,
		path = options.path || atob(\'XC8=\'),
		expiry;
    if (options.duration) {
        expiry = (new Date).getTime() + (options.duration);
    } else if (options.expiry) {
        expiry = options.expiry;
    }

    document.cookie = key + \'=\' + value + (!isNaN(expiry) ? (\';expires=\' + (new Date(expiry)).toGMTString()) : \'\') + (domain ? (\';domain=\' + domain) : \'\') + (path ? (\';path=\' + path) : \'\');
}

// code for ifram bursting 
function isIFrmBursEnabled() {
    //TODO 
    var isBurst = false; burstVal = getPropertyVal(adTagJson.settings, \"iFrmBust\", \"N\");
    if ((burstVal && burstVal.toString().toLowerCase() == \"y\") || (isPreviewingOnActualDevice() && bonzai.plugin.previewEnv().isPreviewBasedOnVersion())) {
        isBurst = true;
    }
    return isBurst;
}

// code for ifram parent bursting 
function isIFrmParentBursEnabled() {
    //TODO 
    var isBurst = false; burstVal = getPropertyVal(adTagJson.settings, \"iFrmParentBust\", \"N\");
    if (burstVal && burstVal.toString().toLowerCase() == \"y\") {
        isBurst = true;
    }
    return isBurst;
}

//Get the top window
var getTopIframeWindow = function () {
    var topWindow;   
    var i = window; //window.top.document.getElementsByTagName(\"iframe\");
    var rootIframe = \"\";
    while (i && i.frameElement) {
        rootIframe = i.frameElement;       
        i = i.parent;
    }
    return { topWindow: i};
};

function getRootIframe() {
    var i = getWindowParent(); //window.top.document.getElementsByTagName(\"iframe\");
    var rootIframe = \"\";
    while (i && i.frameElement) {
        rootIframe = i.frameElement;
        i = i.parent
    }
    return rootIframe;
}
function setStyleForTFrmBody(tFrm) {
    if (tFrm) {
        var iBody, doc = tFrm.contentWindow.document;
        setOuterFrmBdyStyle(doc);
        var i, childFrmDoc, childEle = doc.getElementsByTagName(\"iframe\");
        while (childEle && childEle.length > 0) {
            for (i = 0; i < childEle.length; i++) {
                childFrmDoc = childEle[i].contentWindow.document;
                if (childFrmDoc && childFrmDoc.body.className.indexOf(\"frameElement\") != -1) {
                    return;
                }
                childEle[i].style.height = \"100%\";
                childEle[i].style.width = \"100%\";
                childEle[i].style.position = \"absolute\";
                childEle[i].style.top = \"0px\";
                childEle[i].style.left = \"0px\";
                setOuterFrmBdyStyle(childFrmDoc);
                childEle = childFrmDoc.getElementsByTagName(\"iframe\");
            }
        }
    }
}
function setAllowFullscreenToAllFrm(){
	var tFrm = getRootIframe();
	if (tFrm) {
		tFrm.setAttribute(\"allowfullscreen\", true);
        var iBody, doc = tFrm.contentWindow.document;
        setOuterFrmBdyStyle(doc);
        var i, childFrmDoc, childEle = doc.getElementsByTagName(\"iframe\");
        while (childEle && childEle.length > 0) {
            for (i = 0; i < childEle.length; i++) {
                childFrmDoc = childEle[i].contentWindow.document;
                if (childFrmDoc && childFrmDoc.body.className.indexOf(\"frameElement\") != -1) {
                    return;
                }
                childEle[i].setAttribute(\"allowfullscreen\", true);
            }
            childEle = childFrmDoc.getElementsByTagName(\"iframe\");
        }
    }
}

function exitFullscreen(evt, video){
	//debugger;
	if(evt && evt.target){
		video = evt.target;
	}
	 
	
	if (document.fullscreenElement ||    // alternative standard method
		document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {  // current working methods
		if (document.exitFullscreen) {
	      document.exitFullscreen();
	    } else if (document.msExitFullscreen) {
	      document.msExitFullscreen();
	    } else if (document.mozCancelFullScreen) {
	      document.mozCancelFullScreen();
	    } else if (document.webkitExitFullscreen) {
	      document.webkitExitFullscreen();
	    }
	    
	}
	
	//document.webkitExitFullscreen doesn\'t work for iOS Safari, hence this fix
	//Ideally, this should be called in the \'if\' block above, but the fullscreen check doesn\'t work for iOS Safari either, so...
		if (video && video.webkitExitFullscreen) {
	      video.webkitExitFullscreen();
	    }
}

function setOuterFrmBdyStyle(doc) {
    iBody = doc.body;
    iBody.style.margin = \"0px\";
    iBody.style.overflow = \"hidden\";
}
function initIFrmBurst() {
    isIframeBurst = isIFrmBursEnabled();
    if (isIframeBurst) {
        topIframe = getRootIframe();
    }
    if (topIframe) {
        setStyleForTFrmBody(topIframe);
        getInitDimsForIframe(topIframe);
    }
}

function resetTFrmStyle(tFrm) {
    if (tFrm && topIframProps) {
    	if(tFrm.style){
    		tFrm.style = {};
    	}
        resetTopIframeParentPos();
        var iFrmProps = topIframProps;
        tFrm.style.left = iFrmProps.left + \"px\";
        tFrm.style.top = iFrmProps.top + \"px\";
        tFrm.style.width = iFrmProps.width + \"px\";
        tFrm.style.height = iFrmProps.height + \"px\";
        tFrm.style.position = \"\";
        tFrm.style[\'z-index\'] = iFrmProps.zindex ? iFrmProps.zindex : \"\";
    }
}

function getInitDimsForIframe(topIframe) {
    if (topIframe) {
        if (!topIframProps) {
            topIframProps = {};
            var iFrmProps = topIframProps;
            iFrmProps.left ? iFrmProps.left : iFrmProps.left = topIframe.clientLeft;
            iFrmProps.top ? iFrmProps.top : iFrmProps.top = topIframe.clientTop;
            iFrmProps.height ? iFrmProps.height : iFrmProps.height = topIframe.clientHeight;
            iFrmProps.width ? iFrmProps.width : iFrmProps.width = topIframe.clientWidth;
            iFrmProps.zindex = topIframe.style? topIframe.style[\'z-index\'] : \"\";
        }
    }
}
function setDimensionOnAdInvocationElem(){
	
	var iframe = getAdInvocationElem();
	
	iframe.style[\'z-index\'] = getZindex();
	
}
function resetDimensionOnAdInvocationElem(){
	
	var iframe = getAdInvocationElem();
	
	iframe.style[\'z-index\'] = \"1\";
	
}
function setDimensionOfOuterIframe(iframWidth, iframeHeight) {
if(topIframe){
        changeTopIframeParentPos();
        //	topIframePosition = topIframePosition ? topIframePosition : topIframe.style.position;
        topIframe.style.width = iframWidth + \"px\";
        topIframe.style.height = iframeHeight + \"px\";
        topIframe.style.position = getPositionForTheAdContainer();
        topIframe.style.top = \"0px\";
        topIframe.style.left = \"0px\";
        topIframe.style[\'z-index\'] = getZindex();
        var overlayDiv = getAdOverlayDiv();
        if (overlayDiv) {
            overlayDiv.style.height = iframeHeight + \"px\";
        }
    }
}

function getContHForBanner(adContainer, tFrm, pH) {
    var h = tFrm ? tFrm.clientHeight : adContainer && adContainer.parentNode
			&& adContainer.parentNode.parentNode
			&& adContainer.parentNode.parentNode.offsetHeight == 0 ? pH
			: adContainer.parentNode.parentNode.offsetHeight;
    return h;
}
function getContWForBanner(adContainer, tFrm, pW) {
    var w = tFrm ? tFrm.clientWidth : adContainer && adContainer.parentNode
			&& adContainer.parentNode.parentNode
			&& adContainer.parentNode.parentNode.offsetWidth == 0 ? pW
			: adContainer.parentNode.parentNode.offsetWidth;
    return w;
}

function setOverlayBackground(page){
	var overlayDiv = getAdOverlayDiv();
	if(page){
		if (overlayDiv.style.removeProperty) {
			overlayDiv.style.removeProperty(\'background-size\');
			overlayDiv.style.removeProperty(\'background-position\');
			overlayDiv.style.removeProperty(\'background-repeat\');
		} else {
			overlayDiv.style.removeAttribute(\'background-size\');
			overlayDiv.style.removeAttribute(\'background-position\');
			overlayDiv.style.removeAttribute(\'background-repeat\');
		}
		if(page.getAttribute(\"pageType\")!=\"banner\"){
			var computedStyle;
			if (window.getComputedStyle) {
		      computedStyle = getComputedStyle(page, null)
		    } else {
		      computedStyle = page.currentStyle;
		    }
			if(!page.getAttribute(\"data-background-color\")){
				page.setAttribute(\"data-background-color\",computedStyle.backgroundColor);
			}
			if(!page.getAttribute(\"data-background-image\")){
				page.setAttribute(\"data-background-image\",computedStyle.backgroundImage);
			}
			if(!page.getAttribute(\"data-background-image\") && !page.getAttribute(\"data-background-color\")){
				page.setAttribute(\"data-background-color\",\"#FFFFFF\");
			}
			overlayDiv.style.backgroundColor = page.getAttribute(\"data-background-color\");
			overlayDiv.style.backgroundImage = page.getAttribute(\"data-background-image\");
			page.style.backgroundColor = \"transparent\";
			page.style.backgroundImage = \"none\";
		}
		else{
			if (overlayDiv.style.removeProperty) {
				overlayDiv.style.removeProperty(\'background-color\');
				overlayDiv.style.removeProperty(\'background-image\');
			} else {
				overlayDiv.style.removeAttribute(\'background-color\');
				overlayDiv.style.removeAttribute(\'background-image\');
			}
		}
	}

}
function useSavedGlblOrientationDims(){
	if(formatsUsingGlblDimsByOrientation.indexOf(adtype) != -1){
		return true;
	}
	return false;
	
}
function isTransitionRequired(){
	if(adFormats.indexOf(adtype) != -1){
		return false;
	}
	return true;
}
function getFirstExpandblePage(pageType){
    var pp = getAllAdPageElements();
    var pageToShow = \"\";
    var _seqArr = new Array();
    for (var j = 0; j < pp.length; j++) {
    	if(pp[j].getAttribute(\"pagetype\") == pageType){
        _seqArr.push(pp[j].getAttribute(\"sequenceid\"));
    	}
    }
    var seqId = Math.min.apply(Math, _seqArr);
    for (var j = 0; j < pp.length; j++) {
        if (pp[j].getAttribute(\"sequenceid\") == seqId && pp[j].getAttribute(\"pagetype\") == pageType) {
        	pageToShow = pp[j];
        	return pageToShow;
        } 
    }
    return pageToShow;
}
function createCustomEvent(eventName){
	// var cleanWipe = new CustomEvent(\"wipe\");
	var customEvent;
	if (document.createEvent) {
		customEvent = document.createEvent(\"HTMLEvents\");
		customEvent.initEvent(eventName, true, true);
	} else {
		customEvent = document.createEventObject();
		customEvent.eventType = eventName;
	}
	customEvent.eventName =eventName;
	
	return customEvent;
}
function setPrevPageDimensionsForAnalytics(currentPage){
	if(currentPage){
    prePageHeigth = currentPage.clientHeight;
    prePageWidth = currentPage.clientWidth;
	}
} 
//function to change the orientation to reload to fill for
 //* ad format : full page interstitial
 //* page type : full screen
 //* landscape page
 //
function changeOrientationCustom(pOrientation, page){
	
	var pageId = page.getAttribute(\"data-id\");
	var commonId = page.getAttribute(\"commonid\");
	var pageType = page.getAttribute(\"pagetype\");
	if(adtype === \"fullpage_interstitial\" && pageType === \"full-screen\" && (pageId !== commonId)){
		return \"1\"; //reload to fill
	}
	return pOrientation;
}
function handleInteractions(page){
	function interactionDetected(){
		if(typeof AdECFHandler == \'object\') {
			AdECFHandler.registerInteraction();
		}
	}
	if(page && page.nodeType) {
		page.removeEventListener(\'mousedown\', interactionDetected);
		page.removeEventListener(\'touchstart\', interactionDetected);

		page.addEventListener(\'mousedown\', interactionDetected, false);
		page.addEventListener(\'touchstart\', interactionDetected, false);
	}
}

function isAdPixelPreview() {
    return bonzai.plugin.previewEnv().isAdPixelPreview();
}
function isFromPreview() {
    return bonzai.plugin.previewEnv().isFromPreview();
}
function isPreviewingOnActualDevice(){
	return bonzai.plugin.previewEnv().isPreviewingOnActualDevice();
}
function handlePageBg(page,appendToPage,frcSrc){
	var parentDiv;
	var overlayDiv = getAdOverlayDiv();
	if(isOverlayRequired(page) && !appendToPage)
		parentDiv = overlayDiv;
	else
		parentDiv = page;
	var firstChild = parentDiv.firstElementChild;
	if(!firstChild || firstChild.getAttribute(\"class\")!==\"bgWrapElem\"){
		firstChild = document.createElement(\"div\");
		if(!firstChild.style){
			firstChild.style = {};
		}
		firstChild.setAttribute(\"class\",\"bgWrapElem\");
		firstChild.style.position = \"absolute\";
		firstChild.style.width = \"100%\";
		firstChild.style.height = \"100%\";
		// In S3 default browser, background image was coming rectangular, so added border-radius for android default browser only.
		if(devicePlatform.Android() && !devicePlatform.isChrome() && getPageType(page) ==\'spot\'){
		firstChild.style[\'border-radius\'] = \'50%\';
		}
		//console.log(\"before appending to first child\");
		AdUTilAPI.logMessage(\"before appending to first child\");
		//parentDiv.insertBefore(firstChild,parentDiv.childNodes[0]);
		// In IE9 if child is not present in parent div then we must pass null, so we are checking childNodes.
		parentDiv.insertBefore(firstChild,(parentDiv.hasChildNodes())
                ? parentDiv.childNodes[0]
                : null);
		//console.log(\"after appending to first child\");
		AdUTilAPI.logMessage(\"after appending to first child\");
	}
	if(isOverlayRequired(page) && !appendToPage){
		firstChild.style.height = \"100%\";
		firstChild.style.width = \"100%\";
		var oHeight = overlayDiv.offsetHeight;
		var pHeight = page.offsetHeight;

		if(parseFloat(pHeight) > parseFloat(oHeight))
			firstChild.style.height = pHeight+\"px\";
		if (typeof isfixedBGHeight != \'undefined\' && isfixedBGHeight()) {
		    firstChild.style.height = pHeight + \"px\";
		}
        
		var oWidth = overlayDiv.offsetWidth;
		var pWidth = page.offsetWidth;
		if(parseFloat(pWidth) > parseFloat(oWidth))
		    firstChild.style.width = pWidth + \"px\";
	}
	if (firstChild.style.removeProperty) {
		firstChild.style.removeProperty(\'background-size\');
		firstChild.style.removeProperty(\'background-position\');
		firstChild.style.removeProperty(\'background-repeat\');
		firstChild.style.removeProperty(\'background-image\');
		firstChild.style.removeProperty(\'background-color\');
	} else {
		firstChild.style.removeAttribute(\'background-size\');
		firstChild.style.removeAttribute(\'background-position\');
		firstChild.style.removeAttribute(\'background-repeat\');
		firstChild.style.removeAttribute(\'background-image\');
		firstChild.style.removeAttribute(\'background-color\');
	}
	
	if (window.getComputedStyle) {
      computedStyle = getComputedStyle(page, null);
    }else {
      computedStyle = page.currentStyle;
    }
	if(!page.getAttribute(\"data-background-image\") && computedStyle){
		var filterVal = computedStyle.getPropertyValue(\"filter\");
		if(filterVal && filterVal != \"none\"){
			page.setAttribute(\"data-background-val\",\"filter\");
			page.setAttribute(\"data-background-image\",filterVal);
			page.style.filter = \"none\";
		}else{
			page.setAttribute(\"data-background-val\",\"backgroundImage\");
			page.setAttribute(\"data-background-image\",computedStyle.backgroundImage);
		}
	}
	var bgObj = page.getAttribute(\"bg-prop\");
	bgObj =  JSON.parse(bgObj);
	var pageBgSrc = frcSrc || page.getAttribute(\'bg-src\');
	if(pageBgSrc){
		applyStyle(firstChild,{
			\"background-image\" : \"url(\"+pageBgSrc+\")\",
			\"background-size\" : bgObj[\"background-size\"],
			\"background-position\" : bgObj[\"background-position\"],
			\"background-repeat\" : bgObj[\"background-repeat\"]
		});
	}
	applyStyle(firstChild,{
		\"opacity\" : bgObj[\"opacity\"],
		\"background-color\" : bgObj[\"background-color\"]
	});
	if(page.getAttribute(\"data-background-image\") && page.getAttribute(\"data-background-image\") !== \"none\"){
		var bgImageVal = page.getAttribute(\"data-background-val\");
		applyStyle(firstChild,{
			\"opacity\" : \"1\",
			\"background-color\" : \"transparent\",
			\"background-position\" : bgObj[\"background-position\"]
		});
		firstChild.style[bgImageVal] = page.getAttribute(\"data-background-image\");
		if(bgImageVal==\"filter\"){
			// put here way to apply opacity for IE9
		}
	}
		
	applyStyle(page,{
		\"background-color\" : \"transparent\",
		\"background-image\" : \"none\"
	});
    if (overlayDiv && overlayDiv.firstElementChild.getAttribute(\"class\") === \"bgWrapElem\") {
		if(!isOverlayRequired(page) || appendToPage)
			overlayDiv.firstElementChild.style.display = \"none\";
		else
			overlayDiv.firstElementChild.style.display = \"block\";
	}
	applyStyle(overlayDiv,{\"background-color\" : \"transparent\"});
}
function applyStyle(elem, style) {
    if (!elem) {
        return;
    }
	if(typeof $cb !== \"undefined"){
		$cb([elem]).css(style);
		return;
	}
	for(var prop in style){
		elem.style[prop] = style[prop];
	}
}
function setGoogleIframeMargin(){
	setRequestJson();
	var iBurstingReq = isIFrmBursEnabled(), gIfrm;
	if (!iBurstingReq) {
		return false;
	}
	var parentWin = getWindowParent();
	gIfrm =parentWin?parentWin.frameElement:\"\";	
	if(!gIfrm || !gIfrm.id.match(new RegExp(\'google_ads\'))) {
		return true;
	}	

	gIfrm.style.marginLeft=\"0px\";
}


function changeTopIframeParentPos() {
    if (topIframe) {
        var pNode = topIframe.parentNode;
        var isPosChanged, zindexChanged;
        for (var i = 0; i < 6; i++) {
            if (pNode) {
                var cNames = pNode.className;
                if (cNames) {
                    var cNameArr = cNames.split(\" \");
                    //if(cNameArr.indexOf(\"ad\") >= 0){
                    for (var j = 0; j < cNameArr.length; j++) {
                        if (!isPosChanged && (cNameArr[j] == \"ad\" || cNameArr[j] == \"expanding-ad\")) {
                            pNode.style.position = \"static\";
                            isPosChanged = true;
                            break;
                        }

                        if (!zindexChanged && cNameArr[j] == \"expanding-ad\") {
                            pNode.style[\'z-index\'] = getZindex();
                            zindexChanged = true;
                            break;
                        }
                        //}
                    }
                }
                if (isPosChanged && zindexChanged) {
                    break;
                }
                pNode = pNode.parentNode;
            }
        }
    }
}

function resetTopIframeParentPos() {
    if (topIframe) {
        var pNode = topIframe.parentNode;
        for (var i = 0; i < 6; i++) {
            if (pNode) {
                var cNames = pNode.className, isPosChanged;
                if (cNames) {
                    var cNameArr = cNames.split(\" \");
                    for (var j = 0; j < cNameArr.length; j++) {
                        if (cNameArr[j] == \"ad\" || cNameArr[j] == \"expanding-ad\") {
                            pNode.style.position = \"relative\";

                            isPosChanged = true;
                            break;
                        }
                    }
                }
                if (isPosChanged) {
                    break;
                }
                pNode = pNode.parentNode;
            }
        }
    }
} 

function mouseOutEventHandler(e,comp,escapedItemStr){
	if(AdUTilAPI.isIE11()){
	setTimeout(function(){assignAction(e,comp,escapedItemStr);},1)
	}else{
		assignAction(e,comp,escapedItemStr);
	}
}

function bindDefaultEvent(compId, eventType, evtId, actType){
	var comp = getEleById(compId);
	if(eventType==\"youtube\")
		comp = getEleById(\"youtube_\"+compId);
	var event = defaultEvents[eventType];
	if(!event){
		event = document.createEvent(\'HTMLEvents\');
	    event.initEvent(eventType, true, true);
		defaultEvents[eventType] = event;
	}
	
	comp.addEventListener(eventType,function(e){
		var extraInfo = \"\";
		if(e && e.detail && e.detail.coords)
			extraInfo = e.detail.coords;
		extraInfo += \"&comid=\"+compId;
		extraInfo += \"&evtid=\"+evtId;
		extraInfo += \"&act=\"+actType;
		adAnalyticsObject.handleDefaultEventAnalytics(eventType, extraInfo);
	});
}

function triggerCustomEvent(eventType, comp, coords){
	var event = defaultEvents[eventType];
	event.detail = {};
	if(event){
		if(coords)
			event.detail.coords = coords;
		comp.dispatchEvent(event);
	}
}
function isIframeBusterFileRequired(){
    var isBurstFileRequired = false; burstVal = getPropertyVal(adTagJson.settings, \"iFrameBustFile\", \"N\");
    if (burstVal && burstVal.toString().toLowerCase() == \"y\") {
    	isBurstFileRequired = true;
    }
    return isBurstFileRequired;
};
function isVideoRestartFlgEnabled(){
	var isVideoRestartRequire=false,
	isVideoRestartRequireVal=  getPropertyVal(requestJson, \"vst\",\"N\");
	if(isVideoRestartRequireVal && isVideoRestartRequireVal.toLowerCase() == \"y\"){
		isVideoRestartRequire = true;
	}else{
		isVideoRestartRequireVal =  getPropertyVal(adTagJson.settings, \"vst\",\"N\");
		if(isVideoRestartRequireVal && isVideoRestartRequireVal.toLowerCase() == \"y\"){
			isVideoRestartRequire = true;
		}
	}
    return isVideoRestartRequire;
};
function handlePhInPreviewForSafari(){
	if(devicePlatform.iOS() && !devicePlatform.isChrome() && isPreviewingOnActualDevice()){
		if(topIframe){
			topIframe.setAttribute(\"scrolling\" ,\"no\");
			topIframe.style.height = (screen.availHeight -80) + \"px\";
		}
	}
	if(devicePlatform.isChrome() && isPreviewingOnActualDevice()){
		topIframe.style.height = (screen.availHeight -90) + \"px\";
	}
}

function handlePhInPreviewForSafari(){
	if(devicePlatform.iOS() && !devicePlatform.isChrome() && isPreviewingOnActualDevice()){
		if(topIframe){
			topIframe.setAttribute(\"scrolling\" ,\"no\");
			topIframe.style.height = (screen.availHeight -80) + \"px\";
		}
	}
	if(devicePlatform.isChrome() && isPreviewingOnActualDevice()){
		topIframe.setAttribute(\"scrolling\" ,\"no\");
		topIframe.style.height = (screen.availHeight -90) + \"px\";
	}
}

function handleOrientationChaneInDevicePreview(){
	//if(getOrientation() != currentOrientation){
		if(isPreviewingOnActualDevice()){
			var dims = getScreenDimsForPreview();
			if(topIframe){
				topIframe.setAttribute(\"scrolling\" ,\"no\");
				topIframe.style.height = dims.height + \"px\";
			}
		}
	//}
	
}

function getScreenDimsForPreview(){
	 var orienatationType = getOrientTypeBasedOnOrient(getOrientation());
	var dims = getScreenAvaibaleWidthAndHeight(orienatationType);
	if(devicePlatform.iOS() && !devicePlatform.isChrome()){
	    var screenHeight = (screen.availHeight -80);
	    var screenWidth = (screen.availWidth);
	    switch (orienatationType) {
        case \'PORTRAIT\': // Portrait           
        	
            break;
        case \'LANDSCAPE\': // Landscape: turned 90 degrees clockwise
                var temp = screenHeight;
                screenHeight = screenWidth;
                screenWidth = temp;
            break;
     }
	    if(!dims) dims = {};
	    dims.width =screenWidth;
	    dims.height =screenHeight;  
	}
	//console.log(\"dims height \",dims.height,\" width \",dims.width);
	AdUTilAPI.logMessage(\"dims height \",dims.height,\" width \",dims.width);
	return dims;
}
// Exposed apis for exeternal use.
mainModule.goToPageAction = goToPageAction;
// To support legacy ads, we are making references available as per the old references. We will depricate this later on.
window.goToPageAction = goToPageAction;
window.adAssetLoaderNew = adAssetLoaderNew;var isOrmmaSupported = false;
var adMraidObj = function createMraidObject() {
	var self = this;
	self.mraid = window.mraid || getWindowParent().mraid;
	if(!self.mraid){
		self.mraid = window.ormma || getWindowParent().ormma;
		if(self.mraid){
			isOrmmaSupported = true;
		}
	}
};
adMraidObj.prototype = {
	isReadyEventTriggered : false,
	redyStateTimeout:null,
	readyEvtListener:null,
	viewableEvtListener:null,
	viewableInterval:null,
	readyInterval : null,
	isExpanded: false,
    registerMraidHandlers: function () {
        var self = this;
        var mraid = self.getMraid();
        mraid.addEventListener(\"stateChange\", function (state) {
            switch (state) {
                case \"hidden\":
                    closeIntestitialAd();
                    trackAdClose();
                    break;
                case \"default\":
                //sometimes app trigger default state at the start of ad load, to avoid execution of this code checking whether its coming from expanded state.
                	if(self.isExpanded){
                		self.isExpanded = false;
                        showDefaultBaner();
                	}
                    break;
                case \"expanded\":
                	self.isExpanded = true;
                    break;
            }

        });
        mraid.addEventListener(\"error\", function (message, action) {
        	adAnalyticsObject.registerMraidError();
        });
    },
    fixAdOrientation: function(orientation){
    	var self = this;
    	var mraid = self.getMraid();
    	var orientationProperties = {
                \"allowOrientationChange\" : true,
                \"forceOrientation\" : orientation
            };
    	mraid.setOrientationProperties(orientationProperties);
    },
    expandAd: function (pw, ph, pageToShowDims) {
        var self = this;
        var mraid = self.getMraid();
        var screenDims = self.getScreenSize();
        ph = pageToShowDims.screenHeight; //self.getHeight();
        pw = pageToShowDims.screenWidth;
        if (mraid && mraid.getState() != \'expanded\') {
            var expandProps = {};
            if (self.isGetExpandPropertiesAvail()) {
                expandProps = self.mraid.getExpandProperties();
            } else {
                expandProps = {
                    width: pw,
                    height: ph
                }
            }
            var useAdCloseBtn = useAdCloseButton();
            expandProps.useCustomClose = useAdCloseBtn;
            self.mraid.setExpandProperties(expandProps);
            if (typeof self.mraid.expand == \'function\') {
                self.mraid.expand();
            }
        }
    },
    isGetExpandPropertiesAvail: function () {
        var self = this;
        var isSupport = false;
        if (self.mraid && typeof self.mraid.getExpandProperties == \'function\') {
            isSupport = true;
        }
        return isSupport;
    },
    getHeight: function () {
        return screen.height;
    },
    
    // viewability trackers code.
    showAd: function () {
        var self = this;
        var mraid = self.getMraid();
        if (mraid) {
            postStatsData(\'debug_app_mraidcheckStart\');
            if(isCarSalesNetworkFlg){
            	self.showAdForCarSales(mraid);
            }else{
            self.waitForViewableStateChng(mraid);
            }
        }
        else {
            postStatsData(\'debug_app_nomraid\');
            setTimeout(showMyAd, 100);
        }
    }, 
    showAdForCarSales : function(mraid){
    	var useAdCloseBtn = useAdCloseButton();
        mraid.useCustomClose(useAdCloseBtn);
            postStatsData(\'debug_app_showmyad\');
            showMyAd();
    },
    checkMraidState: function (mraid) {
    	var self = this,chkStateFlg = AdUTilAPI.checkMraidState();
    	if(!chkStateFlg){
    		self.checkViewabilityStatus(mraid);
    		return;
    	}
    	 var state = self.getState();
         postStatsData(\'debug_app_mraidState_\' + state);
         switch (state) {
             case \"loading\":
                 mraid.addEventListener(\"ready\", function () {
                     postStatsData(\'debug_app_mraidReadyEvent\');
                     self.checkViewabilityStatus(mraid);                          
                 });
                 break;
         default : 
                 postStatsData(\'debug_app_mraidAlreadyready\');
                 self.checkViewabilityStatus(mraid);
                 break;
         }
    },
  checkViewabilityStatus : function(mraid){
	  var self = this;
	  var viewableFlag = self.isViewable(),ckhViewFlag = AdUTilAPI.checkMraidViewable();
	  if(!ckhViewFlag){
		  self.renderAd();
		  return;
	  }
	  if (viewableFlag || isExpectedNetwork(adNetworks.airpush) || isCarSalesNetworkFlg) {
		   adAnalyticsObject.registerViewableImpsApps(viewableFlag);
		  self.renderAd(viewableFlag);
		  } else {  
			  if(self.isAPIAvailable(mraid.isViewable) && !viewableFlag){
			  adAnalyticsObject.registerViewableImpsApps(self.isViewable());
			  }
			  mraid.addEventListener(\'viewableChange\',
					  function(viewable) {
				  if(viewable){
					  adAnalyticsObject.registerViewableEventChange();
					  adAnalyticsObject.registerViewableImpsApps(viewable);
					  mraid.removeEventListener(\'viewableChange\', arguments.callee);
					  self.renderAd(viewable);
				  }
			  });
		  }
      // If isViewable api is not supported then tracking it as undetermined.
      var isViewableSupport = self.isAPIAvailable(mraid.isViewable);
      if(!isViewableSupport){
      adAnalyticsObject.registerViewableImpsApps(false,!isViewableSupport,true);
      }
  },
  cbViewableChange : function(viewable){
	  var self = this;
	  if(viewable){
		 self.renderAd();
	  }
  },
  renderAd : function(viewableFlag){
	//  setTimeout(function () {
          postStatsData(\'debug_app_showmyad\');
          showMyAd();
  //    }, 1000); 
  },
  waitForViewableStateChng: function (mraid) {
      var self = this;
      var viewableStateInter = setInterval(function () {
          if ((mraid.isViewable && mraid.isViewable()) || isExpectedNetwork(adNetworks.airpush) || isCarSalesNetworkFlg) {
              clearInterval(viewableStateInter);
              var useAdCloseBtn = useAdCloseButton();
              mraid.useCustomClose(useAdCloseBtn);
              var state = self.getState();
              postStatsData(\'debug_app_mraidState_\' + state);
              switch (state) {
                  case \"loading\":
                      mraid.addEventListener(\"ready\", function () {
                          postStatsData(\'debug_app_mraidReadyEvent\');
                          setTimeout(function () {
                              postStatsData(\'debug_app_showmyad\');
                              showMyAd();
                          }, 1000);                            
                      });
                      break;
                  case \"default\":
                      postStatsData(\'debug_app_mraidAlreadyready\');
                      setTimeout(function () {
                          postStatsData(\'debug_app_showmyad\');
                          showMyAd();
                      }, 1000);
                      break;
              }
          }
      }, 10);
  },    
    isViewable : function(){
    	var self=this,isViewableFlg = false;
    	if(self.mraid && self.mraid.isViewable && self.mraid.isViewable()){
    		isViewableFlg=true;
    	}
    	return isViewableFlg;
    },
    getDefaultPosition: function () {
        var self = this;
        var position = \"\";
        var mraid = self.getMraid();
        if (mraid && typeof mraid.getDefaultPosition == \'function\') {
            position = mraid.getDefaultPosition();
        }
        return position;
    },

    getOrientationByMraid: function () {
        var self = this;
        var orientation = \"\";
        var mraid = self.getMraid();
        if (mraid && typeof mraid.getOrientation == \'function\') {
            orientation = mraid.getOrientation();
        }
        return orientation;
    },

    getMraid: function () {
        var self = this;
        return self.mraid;
    },

    getState: function () {
        var self = this;
        return self.getMraid().getState();
    },

    closeMraid: function () {
        var self = this;
        var mraid = self.getMraid();
        if (mraid) {
            mraid.close();
        }
    },

    getScreenSize: function () {
        var self = this;
        var screenDims = \"\";
        var mraid = self.getMraid();
        if (mraid && typeof mraid.getScreenSize == \'function\') {
            screenDims = mraid.getScreenSize();
        }
        return screenDims;
    },
    getExpandProperties: function () {
        var self = this;
        var expandProps = null;
        var mraid = self.getMraid();
        if (mraid && typeof mraid.getExpandProperties == \'function\') {
            expandProps = mraid.getExpandProperties();
        }
        return expandProps;
    },
    isAPIAvailable: function (apiName) {
        var self = this;
        var isSupport = false;
        if (self.mraid && typeof apiName == \'function\') {
            isSupport = true;
        }
        return isSupport;
    },
    // implementation of interval and ready event time out.
    mraidStateCheck: function (mraid) {
    	var self = this,chkStateFlg = AdUTilAPI.checkMraidState();
    	if(!chkStateFlg){
    		self.viewableStateCheck(mraid);
    		return;
    	}
    	 var state = self.getState();
         postStatsData(\'debug_app_mraidState_\' + state);
         switch (state) {
             case \"loading\":
            	 self.bindReadyStateChngEvnt(mraid);
            	 self.mraidReadyInterval();
                 break;
         default : 
                 postStatsData(\'debug_app_mraidAlreadyready\');
                 self.viewableStateCheck(mraid);
                 break;
         }
    },
    mraidReadyInterval : function(){
    	var self = this;
   	 self.readyInterval = setInterval(function () {
		 var state = self.getState();
		 if(state == \"default\"){
     	self.cbReadyEvntChange(true);
		 }
    }, 10);
    },
    viewableStateCheck : function(mraid){
  	  var self = this,mraid = mraid || self.mraid;
	  var ckhViewFlag = AdUTilAPI.checkMraidViewable();
	  // If checkviewable flag is false then bypassing viewable staet check.
	  if(!ckhViewFlag){
		  self.renderAd();
		  return;
	  }
	  var viewableFlag = self.isViewable();
  	  if (viewableFlag || isExpectedNetwork(adNetworks.airpush) || isCarSalesNetworkFlg) {
    		// registering viewable true.
 		     adAnalyticsObject.registerViewableImpsApps(viewableFlag);
 		      self.renderAd(viewableFlag);
 		      return;
 		  } else if(self.isAPIAvailable(mraid.isViewable) && !viewableFlag){
 			  // registering viewable false.
 			  adAnalyticsObject.registerViewableImpsApps(self.isViewable());
 		  }
	      // If isViewable api is not supported then tracking it as undetermined.
	      var isViewableSupport = self.isAPIAvailable(mraid.isViewable);
	      if(!isViewableSupport){
	       self.clearIntervals(viewableStateInter);
	       adAnalyticsObject.registerViewableImpsApps(false,!isViewableSupport,true);
	       // if viewable api support is not there then there is no user of binding viewable change event.
	       return;
	      }
	 // setInterval and viewable state change event binding.
	   self.viewableInterval = setInterval(function () {
        	var isViewableFlg = self.isViewable();
        	self.cbViewableStateChange(isViewableFlg,true);
        }, 10);
      self.bindViewableStateChngEvnt(mraid);
    },
    clearIntervals : function(interval){
    	clearInterval(interval);
    	interval = null;
    },
    cbViewableStateChange : function(viewable,isCalledFrmInterval){
    	var viewableflg = evt.target.viewable,self = this;
		  if(viewable){
			  // check whether it\'s true by event change or by interval.
			  if(isCalledFrmInterval){
				  postStatsData(\'mraidViewableEvent_interval\');
			  }else{
				  adAnalyticsObject.registerViewableEventChange();
			  }
		      // Unbind change event when viewable flag is true by interval.
	          self.unBindViewableStateChngEvnt();
	      	// Clear interval when viewable state is changed by event.
	      	  self.clearIntervals(self.viewableInterval);
			  adAnalyticsObject.registerViewableImpsApps(viewable);
			  self.renderAd(viewable);
		  }
    },
    bindViewableStateChngEvnt : function(mraid){
    	var self = this;mraid = mraid || self.getMraid();
		  mraid.addEventListener(\'viewableChange\',self.viewableEvtListener =  function(viewable) { self.cbViewableStateChange(viewable)});
    },
    unBindViewableStateChngEvnt : function(mraid){
    	var self = this;mraid = mraid || self.getMraid();
		mraid.removeEventListener(\'viewableChange\',self.viewableEvtListener);
    	self.viewableEvtListener = null;
    },
    bindReadyStateChngEvnt : function(mraid){
    	var self = this;mraid = mraid || self.getMraid();
		  mraid.addEventListener(\'ready\',function(){self.cbReadyEvntChange();});
    },
    unBindReadyStateChngEvnt : function(mraid){
    	var self = this;mraid = mraid || self.getMraid();
		mraid.removeEventListener(\'ready\',self.readyEvtListener);
    },
    cbReadyEvntChange : function(isTimeOut){
    	var self = this;
    	self.unBindReadyStateChngEvnt();
    	self.clearIntervals(self.readyInterval);
    	self.redyStateTimeout = null;
    	if(self.isReadyEventTriggered){
    		return;
    	}
    	// We have changed timeout to interval for mraid ready check. we are using below tracker for interval.
    	if(isTimeOut){ postStatsData(\'debug_app_mraidReadyEvent_timeout\');}
    	else {postStatsData(\'debug_app_mraidReadyEvent\');}
    	self.isReadyEventTriggered = true;
        self.viewableStateCheck();                           
    }
};

(function(GN) {
	var PostPageLoad = function() {
		var privateExecute = function(jsonParams) {
			var page = jsonParams.page;
			var pageId = AdUTilAPI.getElementId(page);
			var currentPageId = jsonParams.currentPageId;
			var mediaElements = [ \"VIDEO\" ];
			adAssetLoaderNew.getAdPageById(pageId).onPageShow();
			// storeLocatorContainer(page);
			jigsawContainer(page);
			videoAutoPlayObj.handleVideoAutoPlayAction();
			videoAutoPlayObj.handleVroomVideoAction();
			checkAndPlayLiveFeeds(pageId);
			wipeyContainer(page);
			sketchContainer(page);
			// checkAndPlayLiveFeeds(page);
		}

		var view360Container = function(page) {
			var view360Els = page.getElementsByClassName(\"view360Container\");
			for (var i = 0, len = view360Els.length, view360El; i < len; i++) {
				view360El = view360Els[i];
				if (selectImg360) {
					selectImg360(
							parseInt(view360El.getAttribute(\"startIndex\")),
							AdUTilAPI.getElementId(view360El));
				}
			}
		}

		var privateResetSwipeGalToItsDefaultState = function(page, flgSetDims) {
			var slideGalls = page.getElementsByClassName(\"swipeGallIcon\");
			for (var i = 0, len = slideGalls.length, gallId, el; i < len; i++) {
				el = slideGalls[i], gallId = AdUTilAPI.getElementId(el);
				if (setDimsForSwipeGall && flgSetDims) {
					setDimsForSwipeGall(gallId);
				}
				if (selectImgSwipeGall) {
					selectImgSwipeGall(
							parseInt(el.getAttribute(\"startIndex\")) - 1, gallId
									+ \"_imgContainer\");
				}
			}
		}
		var handlePageFbActivityElems = function(page) {
			var pageId = AdUTilAPI.getElementId(page);
			adAssetLoaderNew.setSrcOnPageFbActivityElems(pageId);
		}
		var handlePageTwitterTlElems = function(page) {

			var twtlDivs = page.getElementsByClassName(\"twittertimelinePH\");

			if (!twtlDivs || twtlDivs.length == 0) {
				return;
			}

			for (var i = 0, len = twtlDivs.length; i < len; i++) {
				// need to use an anonymous inner function, otherwise results in
				// conflict between twitter elements
				(function(i, twtlDiv) {
					var isTwtlLoaded = twtlDiv.getAttribute(\"isTwltlLoaded\");
					if (!isTwtlLoaded || isTwtlLoaded != \'true\') {
						return;
					}
					var iframe = twtlDiv
							.getElementsByClassName(\"twitter-timeline-rendered\")[0];
					if (iframe) {
						var iframParentNode = iframe.parentNode;
						var actualFrmParentOpacity = iframParentNode.style.opacity;
						iframParentNode.style.opacity = \'0\';

						var actualHeight = iframParentNode.offsetHeight;
						var actualWidth = iframParentNode.offsetWidth;
						// Height,width needs to be set for twitter iframe,
						// because the twitter js sets a default
						// height and width, if they are below some threshold
						// values.
						iframe.setAttribute(\"height\", actualHeight + \"px\");
						iframe.setAttribute(\"width\", \"100%\");
						iframe.style.minWidth = \"\";
						var innerDoc = iframe.contentDocument
								|| iframe.contentWindow.document;
						var headerDiv = innerDoc
								.getElementsByClassName(\'timeline-header\')[0];
						var contentDiv = innerDoc
								.getElementsByClassName(\'stream\')[0];
						var footer = innerDoc
								.getElementsByClassName(\'timeline-footer\')[0];

						if (!(headerDiv && contentDiv && footer)) {
							iframParentNode.style.opacity = actualFrmParentOpacity;
							return;
						}
						// if twitter has not put the height on content element
						// wait for some time
						if (!contentDiv.style.height) {
							var count = 0;
							var interval_timeline = setInterval(
									function() {
										if (contentDiv.style.height
												|| count == 10) {
											var parent = headerDiv.parentNode;
											// There is difference between the
											// iframe height and its immediate
											// child div which is loaded by
											// iframe,
											// this is being done by twitter js,
											// hence overriding them
											parent.style.height = (actualHeight)
													+ \"px\";
											// The height of actual twitter
											// content is an absolute value
											// calculated by the twitter js and
											// it assaigns the value at run
											// time.
											// This does not consider the
											// paddings and margins space taken
											// by header, footer. Hence needed
											// to recalculate them and override
											// the
											// values set by twitter js.
											var ifrmHt = parseFloat(parent.offsetHeight);
											var footerHt = parseFloat(footer.offsetHeight);
											var headerHt = parseFloat(headerDiv.offsetHeight);
											var contentHt = ifrmHt - footerHt
													- headerHt;
											contentDiv.style.height = contentHt
													+ \'px\';
											// iframe.style.height =
											// actualHeight + \"px\";
											// iframe.style.opacity =
											// actualOpacity;
											iframParentNode.style.opacity = actualFrmParentOpacity;
											clearInterval(interval_timeline);
										}
										count++;
									}, 100);
						} else {
							iframParentNode.style.opacity = actualFrmParentOpacity;
						}
					}
				})(i, twtlDivs[i]);
			}
		}
		var privateSocialMediaContainer = function(page) {
			var ad = this;
			handlePageFbActivityElems(page);
			handlePageTwitterTlElems(page);
		}

		var coverflowContainer = function(page) {
			var ad = this;
			var coverflowEls = page
					.getElementsByClassName(\"dummyCoverFlowContainer\");
			for (var i = 0, len = coverflowEls.length, gallId, el; i < len; i++) {
				el = coverflowEls[i];
				coverflow.init(el);
			}
		}

		var imageStackContainer = function(page) {
			var ad = this;
			var imageStackEls = page
					.getElementsByClassName(\"dummyImageStackContainer\");
			for (var i = 0, len = imageStackEls.length; i < len; i++) {
				var el = imageStackEls[i];
				imageStack.init(el);
			}
		}
		var advGalleryContainer = function(page) {
			var ad = this;
			var advGalEls = page.getElementsByClassName(\"dADVG\");
			for (var i = 0, len = advGalEls.length; i < len; i++) {
				var el = advGalEls[i];
				(new bonzai.obj.galleryBuilder()).init(el);
			}
		}

		var computeAbsValueFromPerc = function(perc, absVal) {
			var percVal = parseFloat(perc.substring(0, perc.length - 1));
			var finVal = percVal * parseFloat(absVal) / 100;
			return parseInt(finVal);
		}

		var pauseAllMediaPlay = function() {

			pauseAllYoutubeEle();
			pauseAllVideoPlay();
			pauseAllWistiaVideoPlay();
			pauseAllAudioPlay();
		}

		var pauseAllVideoPlay = function() {
			var bonzaiVideoEngine = undefined;
			for (var j = 0; j < mediaElements.length; j++) {
				var videos = AdUTilAPI.getElementsByTagName(mediaElements[j]);
				if (videos && videos.length > 0) {
					for (var i = 0; i < videos.length; i++) {
						var vId = videos[i].getAttribute(\'data-id\');
						if (AdUTilAPI.videoBehaviourMap) {
							if (AdUTilAPI.videoBehaviourMap[vId]
									&& AdUTilAPI.videoBehaviourMap[vId].player)
								bonzaiVideoEngine = AdUTilAPI.videoBehaviourMap[vId].player;
//							if (AdUTilAPI.videoBehaviourMap[vId]
//									&& videos[i].customControls)
//								videos[i].customControls.removeControls();
							if (AdUTilAPI.videoBehaviourMap[vId]
									&& AdUTilAPI.videoBehaviourMap[vId].observer)
								AdUTilAPI.videoBehaviourMap[vId].observer
										.stop();
						}
						if (isVideoRestartFlgEnabled()) {
							if (bonzaiVideoEngine) {
								bonzaiVideoEngine.reset();
								// AdUTilAPI.videoBehaviourMap[vId].player =
								// undefined;
							}
							restartVideo(videos[i]);
						} else {
							if (bonzaiVideoEngine) {
								bonzaiVideoEngine.pause();
							}
							videos[i].pause();
						}
					}
				}
			}
		}
		var restartVideo = function(video) {
			AdUTilAPI.restartVideo(video);
		}
		var pauseAllWistiaVideoPlay = function() {
			var adPages = adAssetLoaderNew.getAdAssetPages();

			for (var i = 0; i < adPages.length; i++) {

				var wistiaVideos = adPages[i]
						.getAllAssetElementsOfType(\"wistiavideo\");

				for (var j = 0; j < wistiaVideos.length; j++) {

					wistiaVideos[j].pauseWistiaVideoPlay();
				}
			}
		}

		var pauseAllAudioPlay = function() {

			var adAssetPages = adAssetLoaderNew.getAdAssetPages();

			for (var i = 0; i < adAssetPages.length; i++) {

				var audioElems = adAssetPages[i]
						.getAllAssetElementsOfType(\"audio\");

				for (var j = 0; j < audioElems.length; j++) {

					audioElems[j].pauseAudio();
				}
			}
		}

		var storeLocatorContainer = function(page) {
			if (!storeLocatorObjects || storeLocatorObjects.hasValues === false)
				return;
			var storeLocElems = page
					.getElementsByClassName(\"dummyStoreLocatorContainer\");
			for (var i = 0, len = storeLocElems.length; i < len; i++) {
				storeLocElems[i].setAttribute(\'id\', getContainerName()
						+ AdUTilAPI.getElementId(storeLocElems[i]));
				storeLocator.showMap(storeLocElems[i],
						storeLocatorObjects[AdUTilAPI
								.getElementId(storeLocElems[i])],
						storeLocatorObjects.API_KEY);
			}

		}

		var wipeyContainer = function(page) {
			var wipeyDivs = page.getElementsByClassName(\"wipeyPH\");

			for (var i = 0; i < wipeyDivs.length; i++) {
				loadWipey(AdUTilAPI.getElementId(wipeyDivs[i]), wipeyDivs[i]
						.getAttribute(\"data-asseturl\"), null);
			}
		}

		var sketchContainer = function(page) {
			var sketchDivs = page.getElementsByClassName(\"sketchPH\");

			for (var i = 0; i < sketchDivs.length; i++) {

				var sketchEl = sketchDivs[i];

				loadSketch(AdUTilAPI.getElementId(sketchEl), sketchEl
						.getAttribute(\"sketchColor\"), sketchEl
						.getAttribute(\"bgcolor\"), sketchEl
						.getAttribute(\"radius\"));
			}
		}
		var jigsawContainer = function(page) {
			var ad = this;
			var jigsawEls = page.getElementsByClassName(\"jigsawPH\");
			for (var i = 0, len = jigsawEls.length; i < len; i++) {
				var el = jigsawEls[i];
				var display = el.style.display;
				var height = el.clientHeight, width = el.clientWidth;
				if (display === \'none\') {
					el.style.opacity = \'0\';
					el.style.display = \'block\';
					height = el.clientHeight;
					width = el.clientWidth;
					el.style.display = \'none\';
					el.style.opacity = \'1\'
				}
				var jigsawPuzzle = new puzzle(height, width, el
						.getAttribute(\"rows\"), el.getAttribute(\"columns\"), el
						.getAttribute(\"imgSrc\"), el);
				jigsawPuzzle.init();
			}
		}

		var stopAllTimers = function() {
			try {

				if (timerManager)
					timerManager.stopAllTimers();

			} catch (e) {

			}

		}

		var checkAndPlayLiveFeeds = function(currentPageId) {
			var pageElem = AdUTilAPI.getElementById(currentPageId);
			if (pageElem) {

				var allFeedElems = pageElem
						.getElementsByClassName(\"dummyFeedElement\");

				if (allFeedElems.length > 0) {

					var feedPlayer = new FeedPlayer();

					setTimeout(function() {
						feedPlayer.renderFeedsForPage(currentPageId);
					}, 100);
				}
			}
		};

		var pauseAllYoutubeEle = function() {
			var ytVideos = adAssetLoaderNew
					.getAllAssetElementsOfType(\"youtubevideo\");
			if (ytVideos && ytVideos.length > 0) {
				for (var j = 0; j < ytVideos.length; j++) {
					var ytPlayerObj = ytVideos[j].ytPlayerObj;
					if (ytPlayerObj) {
						if (devicePlatform.iOS()) {
							ytPlayerObj.resetIframeSrc();
						}
						var playerObj = ytPlayerObj.player;
						if (playerObj
								&& typeof playerObj.pauseVideo == \'function\' && typeof playerObj.getPlayerState == \'function\' && playerObj.getPlayerState() == 1)
							playerObj.pauseVideo();
					}
				}
			}
		}

		var privateStopMediaAndTimers = function() {
			pauseAllMediaPlay();
			stopAllTimers();
		}

		var showElementAfterLoad = function(el, page) {
			var eleType = el.getAttribute(\"adtype\");
			switch (eleType) {
			case \"swipegallery\":
				showSwipeGallery(el, true);
				break;
			case \"imagestack\":
				showImageStack(el);
				break;
			case \"gallery\":
				showAdvGallery(el);
				break;
			case \"coverflow\":
				showCoverFlow(el);
				break;
			case \"view360\":
				showView360(el);
				break;
			case \"storelocator\":
				showStoreLocator(el);
				break;
			}

		}
		var bindEleLoaderEvent = function(page) {
			var self = this;
			var slideGalls = page.getElementsByClassName(\"adelem\");
			for (var i = 0, len = slideGalls.length, gallId, el; i < len; i++) {
				if (slideGalls && slideGalls.length > 0) {
					el = slideGalls[i], gallId = AdUTilAPI.getElementId(el);
					el.addEventListener(gallId, function(e) {
						// setTimeout(function(){
						showElementAfterLoad(e.target, page);
						// },10);
					});
				}
			}
		}

		var showSwipeGallery = function(el, flgSetDims) {
			if (!el) {
				return;
			}
			var gallId = AdUTilAPI.getElementId(el);
			if (resetAnFlagSwipe) {
				resetAnFlagSwipe(gallId);
			}
			if (selectImgSwipeGall) {
				selectImgSwipeGall(parseInt(el.getAttribute(\"startIndex\")) - 1,
						gallId + \"_imgContainer\");
			}
			if (setDimsForSwipeGall && flgSetDims) {
				setDimsForSwipeGall(gallId);
			}
		}

		var showView360 = function(el) {
			if (selectImg360) {
				selectImg360(parseInt(el.getAttribute(\"startIndex\")), AdUTilAPI
						.getElementId(el));
			}
		}

		var showCoverFlow = function(el) {
			if (el) {
				coverflow.init(el);
			}
		}
		var showImageStack = function(el) {
			if (el) {
				imageStack.init(el);
			}
		}
		var showAdvGallery = function(el) {
			if (el) {
				(new bonzai.obj.galleryBuilder()).init(el);
			}
		}
		var showStoreLocator = function(el) {
			el.setAttribute(\'id\', getContainerName()
					+ AdUTilAPI.getElementId(el));
			storeLocator.showMap(el, storeLocatorObjects[AdUTilAPI
					.getElementId(el)], storeLocatorObjects.API_KEY);
		}
		this.execute = privateExecute;
		this.socialMediaContainer = privateSocialMediaContainer;
		this.stopMediaAndTimers = privateStopMediaAndTimers;
		this.resetSwipeGalToItsDefaultState = privateResetSwipeGalToItsDefaultState;
		this.bindEleLoaderEvent = bindEleLoaderEvent;
		this.showElementAfterLoad = showElementAfterLoad;
	};

	GN.NS(\"obj.postpageload\", PostPageLoad);

})(bonzai);

// JavaScript Document
var browserPrefix;

function detectPrefix(){
	if(browserPrefix) return;
	
	var styleLists = [].slice.call(getComputedStyle(document.documentElement)).join(\'\'),
		prefix = styleLists.match(new RegExp(\"-(webkit|moz)-\"));
	
	browserPrefix = {
		css: prefix && prefix[1] ? (\'-\' + prefix[1] + \'-\') : \'\',
		toString: function(){
			return this.css;
		},
		event: prefix && prefix[1] ? prefix[1] : \'\'
	};
}
function normalize(val){
	return val.toString().replace(/-([a-z]{1})/g, function(_, group){
		return group.toUpperCase();
	});
}
function getBrowserPrefix(str, forcedPrefix, forcedCammelCase) {
	
	if (typeof forcedPrefix == \'string\') {
		if(forcedCammelCase)
			return normalize(forcedPrefix + str);
		else
			return forcedPrefix + str;
	}

	detectPrefix();
	if(browserPrefix == \'-webkit-\')
		return (browserPrefix + str);
	else if(browserPrefix == \'-moz-\')
		return normalize(browserPrefix + str);
	else
    	return normalize(str);
}
function getEventPrefix(str){
	var styleLists, prefix;
	
	if(browserPrefix == \'-webkit-\') {
		return (browserPrefix.event + str);
	} else {
		return str.toString().toLowerCase();
	}
};
var animQueue = {};
var isCustomSizeAd = {\"isNew\":true,\"pages\":{\"banner\":{\"isCustom\":false,\"dims\":{\"portrait\":{\"height\":\"100px\",\"width\":\"640px\"},\"landscape\":{\"height\":\"640px\",\"width\":\"100px\"}}},\"full-screen\":{\"isCustom\":false,\"dims\":{\"portrait\":{\"height\":\"960px\",\"width\":\"640px\"},\"landscape\":{\"height\":\"640px\",\"width\":\"960px\"}}},\"loading-page\":{\"isCustom\":false,\"dims\":{\"portrait\":{\"height\":\"960px\",\"width\":\"640px\"},\"landscape\":{\"height\":\"640px\",\"width\":\"960px\"}}}}};var adAnalyticsObject = {
    IMP: \"imp\",
    CLK: \"clk\",
    VIEW: \"view\",
    AUTOVIEW: \"autoview\",
    EXP: \"exp\",
    CLOSE: \"close\",
    VIEWTRACK: \"vimp\",
    AUTOEXP: \"autoexp\",
    AUTOCLOSE: \"autoclose\",
    OTPVIEW: \"otpview\",
    SPOTVIEW: \"sview\",
    ADHESIONVIEW: \"adview\",
    VIDEO_INTERACTION: \"vidintr\",
    tk: \"\",
    aurl: \"\",
    isActViewTrack: false,
    isWAPInVisibleTracked : false,
    isAppVisibleTracked : false,
    isAppInVisibleTracked : false,
    eventTypes: [\"timerend\", \"win\", \"wipe\"],
    eventTypesTosend: {
        timerend: \'timer\',
        wipe: \'wipe\',
        paint: \'paint\',
        win: \'jigsaw\'
    },
    customXYEvents: [\"taphold\", \"swipe\", \"win\", \"wipe\"],
    eventStates: {
        start: \'start\',
        complete: \'complete\',
        released: \'released\'
    },
    viewabilityTrackers : {
    	WAP : {
    		VIEWTRACK: \"vimp\",
    		INVIEWTRACK : \"fvimp\",
    		UDVIEWTRACK:\"udvimp\"
    	},
    	APP : {
    		VIEWTRACK: \"avimp\",
    		INVIEWTRACK : \"favimp\",
    		UDVIEWTRACK:\"audvimp\",
    		NTVIEWTRACK:\"noview\",
    		NTSUPPORT : \"nomraid\",
    		VIEWEVENT : \"avimpevent\"
    	}
    },
    ormmaViewabilityTrackers : {
    	APP : {
    		VIEWTRACK: \"omavimp\",
    		INVIEWTRACK : \"omfavimp\",
    		UDVIEWTRACK:\"omaudvimp\",
    		NTVIEWTRACK:\"omnoview\",
    		NTSUPPORT : \"nomraid\"
    	}
    },
    defaultEventMap : {
    	\'timerStart\' : {type:\'timer\',state:\'start\',isPgDims:false},
     	\'wipeStart\' : {type:\'wipe\',state:\'start\'},
     	\'paintStart\' : {type:\'paint\',state:\'start\'},
     	\'gallery\' : {type:\'gallery\'},
     	\'jigsawStart\' : {type:\'jigsaw\',state:\'start\'},
     	\'youtube\' : {type:\'youtube\'},
     	\'360Click\' : {type:\'click\'},
     	\'storeLoad\' : {type:\'store\',state:\'load\',isPgDims:false},
     	\'storeClick\' : {type:\'store\',state:\'click\'}
    },
    handleDefaultEventAnalytics: function(eventType, extraInfo){
    	var self  = this;
    	var state = \"\";
        var evtType = \"\";
        var isPgDims = true;
        var eventObj = self.defaultEventMap[eventType];
        if(eventObj){
        	if(eventObj.type)
        		evtType = eventObj.type;
        	if(eventObj.state){
        		state = eventObj.state;
        		extraInfo += \"&state=\" + state;
        	}
        	if(eventObj.isPgDims!== undefined && typeof eventObj.isPgDims == \"boolean\")
        		isPgDims = eventObj.isPgDims;
        }
        self.sendInfoToAnalytics(currentPageId, evtType, extraInfo, isPgDims);
    },
    sendInfoToAnalytics: function (compId, eventType, xtraIn, isPgDims) {
        var self = this;
        if (!self.tk) {
            //self.tk= getWindowParent().tk;
            self.tk = getAuthTkn();
        }
        if (!self.aurl) {
            if (getAnalyticsurl()) {
                self.aurl = getAnalyticsurl();
            } else {
                self.aurl = asUrl;
            }
        }
        var date = new Date();
        if (isPgDims) {
            xtraIn += self.getPageDimensions(compId);
        }
        if (!xtraIn) {
            xtraIn = \"\";
        }
        xtraIn = self.addAdIdToInfo(xtraIn);
        var callUrl = self.aurl + \"?tk=\" + self.tk + \"&pageid=\" + compId + \"&evt=\"
				+ eventType + xtraIn + \"&cts=\" + date;
        self.createBeacon(callUrl);
        
        var previewEnv = bonzai.plugin.previewEnv();
        if(previewEnv.isFromPreview()){
        	self.sendMsgToInteractionTab(compId, eventType, xtraIn);
        }            
    },
    
    sendMsgToInteractionTab: function(compId, eventType, xtraIn){
    	 var analyticsObj = {};
        
        var page = AdUTilAPI.getElementById(compId);
        var pageName = page.getAttribute(\"name\");
        var elementTemp = xtraIn.split(\'comid=\')[1];
        if(elementTemp){
        	var elementId = elementTemp.split(\'&px\')[0];
        	if(elementId){
        		var element = AdUTilAPI.getElementById(elementId);
        		var elName=\"\";
        		if(element){
        			elName = element.getAttribute(\"name\");
        		}
		        analyticsObj.elName = elName;
        	}	        
        }
        
        analyticsObj.interaction = eventType;        
        //analyticsObj.elName = elName;
        analyticsObj.pageName = pageName;
        
        var parentWindow = bonzai.plugin.envUtils().getTopWindow();
        parentWindow.top.postMessage(JSON.stringify({
            event: \'SHOW:INTERACTIONROW\',
            data: {event: eventType, data: analyticsObj}
        }), \"*\");
    },

    createBeacon: function (callUrl) {
        var el = AdUTilAPI.getElementById(\'anImage\');
        if (el) {
            el.parentNode.removeChild(el);
        }
        var beacon = document.createElement(\'img\');
        beacon.setAttribute(\"data-id\", \"anImage\");
        beacon.setAttribute(\"src\", callUrl);
        beacon.setAttribute(\"style\", \"display:none;width:0px;height:0px\");
        var body = getAdBody();
        body.appendChild(beacon);
    },
    createScript: function (callUrl) {
        var script = document.createElement(\"script\");
        script.src = callUrl;
        document.head.appendChild(script);
    },

    pageEvtHandlerForAnaytics: function (evt, currentPageId) {
    	// Registering user interaction to avoid auto expand and auto close after user interaction.
    	registerUserInteraction();
        var self = this;
        var elemx = \"\";
        var curPgId = currentPageId;
        var currPage = AdUTilAPI.getElementById(curPgId);
        if (evt) {
            elemx = (evt.target) ? evt.target : evt.srcElement;
        }
        var pageId = curPgId;
		var exrtaInfo  = self.getCoordsForTouch(evt);
        // if currentpage is first page then sending clk event for analytics
        // with click of page element.
		if(!exrtaInfo){
			 exrtaInfo = \"&px=\" + evt.clientX + \"&py=\" + evt.clientY
			}
        if (elemx && currPage && isFirstPage(currPage) && AdUTilAPI.getElementId(elemx) != \"closeAd\") {
            if (expanded) {
                exrtaInfo = exrtaInfo + \"&evtid=\" + eventId + \"&comid=\"
						+ compId;
                expanded = false;
                eventId = \"\";
                compId = \"\";
            }
        }
        exrtaInfo = self.addInfoForPageClose(elemx,exrtaInfo);
        self.sendInfoToAnalytics(pageId, self.CLK, exrtaInfo, true);
    },

    registerEvtsWithAnalytics: function (event, e, dir) {
        var self = this;
        if (event && e) {
            var eventType = event.type;
            var coords = \"\";
            if (e.type == \"click\") {
                coords = \"&px=\" + e.clientX + \"&py=\" + e.clientY;
            } else if (self.customXYEvents.indexOf(eventType) >= 0) {
                coords = \"&px=\" + e.memo.x + \"&py=\" + e.memo.y;
            } else {
                coords = self.getCoordsForTouch(e);
            }
            var exrtaInfo = \"&evtid=\" + event.id + \"&comid=\" + AdUTilAPI.getElementId(e.target)
					+ coords;
            if (self.eventTypes.indexOf(event.type) >= 0) {
                exrtaInfo += \"&state=\" + self.eventStates.complete;
                eventType = self.eventTypesTosend[event.type];
            }
            if(dir){
            	 exrtaInfo += \"&dir=\" + dir;
            }
            if(event.actType)
            	exrtaInfo += \"&act=\" + event.actType;
            self.sendInfoToAnalytics(currentPageId, eventType, exrtaInfo, true);
        }
    },
    
    registerSwipeEvent : function(e,eventString,dir){
    	var self = this;
    	var event = JSON.parse(unescape(eventString));
    	self.registerEvtsWithAnalytics(event,e,dir);
    	self.registerThirdPartyClickTrackers();
    	adAssetLoaderNew.loadLinkedPagesOnFirstInterac(currentPageId);
    },
    
    registerThirdPartyClickTrackers : function() {
		var self = this;
		if (firstInteraction) {
			 AdUTilAPI.logMessage(\"registerThirdPartyClickTrackers\");
			 firstInteraction = false;
			 self.registerClicksForThirdParty();
		}
	},
    registerExpEvent: function (prevPage, pageToShow, event, e, isAutoExp, frcToReg) {
        var self = this;
        var eventName = isAutoExp ? self.AUTOEXP : self.EXP,
			pageType = prevPage ? getPageType(prevPage) : null,
			isBanner = [\"banner\", \"spot\", \"adhesion-banner\",\"grid\"].indexOf(pageType) >= 0;
        if (frcToReg || (isBanner && isFullScreenPage(pageToShow))) {
            expanded = true;
            eventId = event ? event.id : \"\";
            if (e && e.target) {
                compId = AdUTilAPI.getElementId(e.target);
            }
            self.sendInfoToAnalytics(currentPageId, eventName, \"\");
        }
    },

    registerPageView: function (page, viewEvent, byPassFlag) {
        var self = this;
        var event = viewEvent ? viewEvent : self.VIEW;
        if (!isFirstPage(page) || byPassFlag || isFrstInterstitalPage(page)) {
            self.sendInfoToAnalytics(AdUTilAPI.getElementId(page), event, \"\");
        }
    },

    registerAdClose: function (pageId, isAutoClose) {
        var self = this;
        var eventName = isAutoClose ? self.AUTOCLOSE : self.CLOSE
        self.sendInfoToAnalytics(pageId, eventName, \"\");
    },

    registerImpressions: function (pageId) {
        var self = this;
        self.sendInfoToAnalytics(pageId, self.IMP, \"\");
    },
    
    registerVideoInteraction: function () {
        var self = this;
        self.sendInfoToAnalytics(currentPageId, self.VIDEO_INTERACTION, \"\");
    },

    setCBaseOnAdNetwork: function () {
        // Currently it will work for DFP and bonzai ad networks. later on we can add network specific code here. 
        //c = getWindowParent().c || getWindowParent().parent.c;
        c = getClickUrls();
    },

    registerClicksForThirdParty: function () {
        var self = this;
        if (!c) {
            self.setCBaseOnAdNetwork();
        }
        if (c) {
            self.fireClickTrackers(c);
        }
    },
    fireClickTrackers: function (c) {
        var self = this;
        var clkTrImages = c.img;
        var clkTrScripts = c.scr;
        if (clkTrImages && clkTrImages.length > 0) {
            for (var i = 0; i < clkTrImages.length; i++) {
                self.createBeacon(clkTrImages[i]);
            }
        }
        if (clkTrScripts && clkTrScripts.length > 0) {
            for (var i = 0; i < clkTrScripts.length; i++) {
                self.createScript(clkTrScripts[i]);
            }
        }
    },
    getPageDimensions: function (pageId) {
        var pageDimensions = \"\";
        if (pageId) {
            var currPage = AdUTilAPI.getElementById(pageId);
            var pageHeight = currPage ? currPage.clientHeight : \"\";
            var pageWidth = currPage ? currPage.clientWidth : \"\";
            if (pageHeight == 0 || pageWidth == 0) {
                pageHeight = prePageHeigth;
                pageWidth = prePageWidth;
            }
            pageDimensions = \"&adh=\" + pageHeight + \"&adw=\"
				+ pageWidth;
        }
        return pageDimensions;
    },
    registerDragAndAcceptDropwithAnalytics: function (eventType, eventId,
			comId, pos, e, actType) {
        var self = this;
        var coords = \"\";
        var state = \"\";
        var exrtaInfo = \"\";
        if (eventId) {
            exrtaInfo += \"&evtid=\" + eventId;
        }
        if (actType) {
            exrtaInfo += \"&act=\" + actType;
        }
        if (pos) {
            coords = \"&px=\" + pos.X + \"&py=\" + pos.Y;
        }
        if (eventType == \"drag\") {
            state = self.eventStates.start;
        } else {
            state = self.eventStates.released;
        }
        exrtaInfo += \"&comid=\" + comId + coords + \"&state=\" + state;
        self.sendInfoToAnalytics(currentPageId, eventType, exrtaInfo, true);
    },
    registerVideowithAnalytics: function (comId, eventType, posVideo, watch, offset, mute, autoplay) {
        var self = this;
        var coords = \"\";
        var state = \"\";
        var extraInfo = \"\";
        if (comId) {
            extraInfo += \"&comid=\" + comId;
        }
        if (posVideo) {
            extraInfo += \"&pos=\" + posVideo;
        }
        if (watch) {
            extraInfo += \"&watch=\" + watch;
        }
        if (offset) {
            extraInfo += \"&offset=\" + offset;
        }
        if(mute) {
        	extraInfo += \"&mute=\" + true;
        }else
        	extraInfo += \"&mute=\" + false;
        if(autoplay){
        	extraInfo += \"&auto=\" + true;
        }else
        	extraInfo += \"&auto=\" + false;
        self.sendInfoToAnalytics(currentPageId, eventType, extraInfo, false);
    },
    registerTimerStart: function (comId) {
        var self = this;
        var exrtaInfo = \"&comid=\" + comId + \"&state=\" + self.eventStates.start;
        self.sendInfoToAnalytics(currentPageId, self.eventTypesTosend.timerend,
				exrtaInfo);
    },
    registerWipeyPaintStart: function (comId, e, compType) {
        var self = this;
        var eventType = self.eventTypesTosend.wipe;
        var exrtaInfo = \"&comid=\" + comId + \"&state=\" + self.eventStates.start;
        var coords = self.getXYCoordsByEvent(e);
        if (coords) {
            exrtaInfo += coords;
        }
        if (compType == \"paint\") {
            eventType = self.eventTypesTosend.paint;
        }
        self.sendInfoToAnalytics(currentPageId, eventType, exrtaInfo, true);
    },
    getXYCoordsByEvent: function (e) {
        var self = this;
        var eventType = e.type;
        var coords = \"\";
        if (eventType && (eventType.indexOf(\"mouse\") >= 0 || eventType==\"click\")) {
            coords = \"&px=\" + e.clientX + \"&py=\" + e.clientY;
        } else {
            coords = self.getCoordsForTouch(e);
        }
        return coords
    },
    getCoordsForTouch: function (e) {
        var coords = \"\";
        if (e && e.originalEvent && e.originalEvent.currentTouch) {
            coords = \"&px=\" + e.originalEvent.currentTouch.x + \"&py=\"
					+ e.originalEvent.currentTouch.y;
        } else if (e) {
            var evtTouches = e.touches;
            if (evtTouches && evtTouches.length === 1) {
                var touch = evtTouches[0];
                coords = \"&px=\" + touch.clientX + \"&py=\" + touch.clientY;
            }
        }
        return coords;
    },
    registerJigsawStart: function (comId, e) {
        var self = this;
        var coords = \"\";
        var exrtaInfo = \"&comid=\" + comId + \"&state=\" + self.eventStates.start;
        if (e && e.type == \"click\") {
            coords = \"&px=\" + e.clientX + \"&py=\" + e.clientY;
        } else {
            coords = self.getCoordsForTouch(e);
        }
        exrtaInfo += coords;
        self.sendInfoToAnalytics(currentPageId, self.eventTypesTosend.win,
				exrtaInfo, true);
    },
    sendInfoToAnalyticsForDebug: function (eventName, pageId,flgDims) {
        var self = this;
        var isdebug = isDebugMode();
        if (isdebug) {
            if (!pageId) {
                pageId = currentPageId;
            }
            self.sendInfoToAnalytics(pageId, eventName, \'\', flgDims);
        }
    },
    // frcUndeter - This flag is passed because in one case where isUdetermined is false and isViewable is also false but there favimp should not be fire. To handle this case we have added this  we have added falg.
    registerViewableImpsApps : function(isViewable,isUndetermined,frcUndeter){
    	var self = this,viewTrackers = isOrmmaSupported?self.ormmaViewabilityTrackers:self.viewabilityTrackers;
    	if(self.isAppVisibleTracked) return;
    	if(!frcUndeter && isViewable){
    		self.isAppVisibleTracked =true;
    		self.sendInfoToAnalytics(\"\", viewTrackers.APP.VIEWTRACK, \'\', true);
    	}else if(!frcUndeter && !isViewable && !self.isAppInVisibleTracked){
    		self.isAppInVisibleTracked =true;
    		self.sendInfoToAnalytics(\"\", viewTrackers.APP.INVIEWTRACK, \'\', true);
    	}else if(isUndetermined){
    		// Tracking udetermined both time when viewable api support is not there and when mraid/ormma support is not available.
    		self.sendInfoToAnalytics(\"\", viewTrackers.APP.UDVIEWTRACK, \'\', true);
    		self.sendInfoToAnalytics(\"\", viewTrackers.APP.NTVIEWTRACK, \'\', true);
    	}else if(frcUndeter && !isUndetermined){
    		// Tracking udetermined both time when viewable api support is not there and when mraid/ormma support is not available.
    		self.sendInfoToAnalytics(\"\", viewTrackers.APP.UDVIEWTRACK, \'\', true);
    		self.sendInfoToAnalytics(\"\", viewTrackers.APP.NTSUPPORT, \'\', true);
    	}
    },
    getPosRelativeToPage : function (el) {
        for (var ly=0;
             el != null;
             ly += el.offsetTop, el = el.offsetParent);
        return {y: ly};
    },
    registerViewableMetric: function () {
        var self = this;
        // Tracking only for WAP. If already tracked then returning.
        if (isApp || self.isActViewTrack) return;
        var adContainer = isIframeBurst && topIframe ? topIframe : getAdInvocationElem();
        var adPosObj =  self.getPosRelativeToPage(adContainer);
        var adContainerPos = adPosObj.y;
        var viewableHeight = 0;
        var adHeight = (adContainer.style.height.slice(0, -2) * 1);
        if (adHeight > 50) {
            viewableHeight = (adHeight * 0.3);
        } else {
            viewableHeight = (adHeight * 0.5);
        }
        var isTimerOn = false;
        var intervalCtr = setInterval(function () {
        	try{
            if (((adContainerPos + adHeight) - viewableHeight) >= window.top.pageYOffset && (adContainerPos + viewableHeight) <= (window.top.pageYOffset + window.top.innerHeight)) {
                if (isTimerOn) return;
                isTimerOn = true;
                setTimeout(function () {
                    if (((adContainerPos + adHeight) - viewableHeight) >= window.top.pageYOffset && (adContainerPos + viewableHeight) <= (window.top.pageYOffset + window.top.innerHeight)) {
                        self.sendInfoToAnalytics(currentPageId, self.viewabilityTrackers.WAP.VIEWTRACK, \'\', true);
                        self.isActViewTrack = true;
                        clearInterval(intervalCtr);
                    }
                    isTimerOn = false;
                }, 1000);
            }else{
            	// If ad is showed but ad is not visible for user then tracking it as invisibale tracker. we are tracking viewable tracker again when ad is visible for user. 
            	// But ad is visible first and then become invisible for user then we are not tracking invisible tracker.
            	if(!self.isWAPInVisibleTracked){
            		self.isWAPInVisibleTracked = true;
            	   self.sendInfoToAnalytics(currentPageId, self.viewabilityTrackers.WAP.INVIEWTRACK, \'\', true);
            	}
            }
        	}catch(e){
            	AdUTilAPI.logMessage(e);
            	clearInterval(intervalCtr);
            }
        }, 200);
        
    },
    registerViewableEventChange : function(){
    	var self = this;
    	self.sendInfoToAnalytics(\"\", self.viewabilityTrackers.APP.VIEWEVENT, \'\', true);
    },
    registerMraidError : function(){
    	var self = this;
    	self.sendInfoToAnalytics(\"\", \"mraiderror\", \'\', true);
    },
    registerCubeEvtsWithAnalytics: function (event, e) {
        var self = this;
        if (event && e) {
            var eventType = event.type;
            var coords = \"\";
            if (e.type == \"click\") {
                coords = \"&px=\" + e.clientX + \"&py=\" + e.clientY;
            } else {
                coords = self.getCoordsForTouch(e);
            }
            var exrtaInfo = \"&evtid=\" + event.id + \"&comid=\" + event.compId
					+ coords;
            self.sendInfoToAnalytics(currentPageId, eventType, exrtaInfo, false);
        }
    },
	addInfoForPageClose: function(elem, extraInfo) {
		if(!elem){
			return;
		}
		var closeQS = \"&close=true\";
		var adType = elem.getAttribute(\"adtype\");
		if (adType == \"closebutton\") {
			extraInfo += closeQS;
			return extraInfo;
		}
		
		var clazz = elem.getAttribute(\"class\");
		clazz ? null : clazz = \"\";
		if (clazz.indexOf(\"dummyCollapseArrow\") >-1 && adType == \"image\") {
			extraInfo += closeQS;
		}
		return extraInfo;
	},
	addAdIdToInfo : function(extraInfo) {
		var adId = AdUTilAPI.getAdId();
		extraInfo += \"&ad=\" + adId;
		return extraInfo
	}
};

//To support legacy ads, we are making references available as per the old references. We will depricate this later on.
window.adAnalyticsObject = adAnalyticsObject; 
function loadEvents(){ 
	comp = AdUTilAPI.getElementById(\"eqq4\");
	comp = AdUTilAPI.getElementById(\"eqq4\");
	setBackfaceVisibility(comp);
	comp = AdUTilAPI.getElementById(\"5js1\");
	comp.addEventListener(\"click\", function(e){assignAction(e,comp, \'%7B%22id%22%3A%22l3ql%22%2C%22type%22%3A%22click%22%2C%22isDefault%22%3Afalse%2C%22eventProps%22%3A%7B%22checkPlatform%22%3Afalse%7D%2C%22actions%22%3A%5B%7B%22id%22%3A%226uu9%22%2C%22type%22%3A%22gotopg%22%2C%22name%22%3A%22Action%201%22%2C%22dropElemId%22%3A%22%22%2C%22eventDir%22%3A%22%22%2C%22actionProps%22%3A%7B%22pageId%22%3A%22on2f%22%7D%7D%5D%2C%22actType%22%3A%22engm%22%7D\' );});
	comp = AdUTilAPI.getElementById(\"5js1\");setBackfaceVisibility(comp);
	comp = AdUTilAPI.getElementById(\"nsuc\"); 
	bindAdCloseEvent(\"on2f\",\"nsuc\",\"65y3\");comp = AdUTilAPI.getElementById(\"65y3\");
	comp = AdUTilAPI.getElementById(\"on2f\"); pagePosition = \'{\"zindex\":1010000}\';
	comp = AdUTilAPI.getElementById(\"dztv\");
	setBackfaceVisibility(comp); 
	gridViewObject = \'null\'; }
	var createCalUrl = \'172.19.139.111:8080/mizu/rest/url/gen/cal/\';
	var linkedPageMap = {\"nsuc\":[\"on2f\"],\"on2f\":[],\"6okk\":[\"\"]};
	var dragDropObjs = {\"dropObjects\":{},\"dragObjects\":{}};
	var storeLocatorObjects = {\"hasValues\":false,\"API_KEY\":\"f80506341bfd4600b65f9726ed0afdaa\"};
	var shakeEventObjects = {\"hasValues\":false};
	
	(function (GN) {
    //Audio Loader STARTS
    var AdAudioLoader = function () {

        var loadAudioDefault = function (adAssetAudioElement, cbOnAudioLoad) {

            var audio = AdUTilAPI.getElementById(adAssetAudioElement.id);

            setTimeout(function () {
                audio.src = adAssetAudioElement.assets[0];
                audio.load();
                audio.addEventListener(\'loadeddata\', function () {
                    audio.setAttribute(\"isloaded\", true);
                    cbOnAudioLoad();
                    this.removeEventListener(\'loadeddata\', arguments.callee, false);
                }, false);

            }, 10);
        }

        var loadAudioiOS = function (adAssetAudioElement, cbOnAudioLoad) {

            var audio = AdUTilAPI.getElementById(adAssetAudioElement.id);

            var audioContext, audioAnalyser;

            if (\'webkitAudioContext\' in window) {

                audioContext = new webkitAudioContext();

                audioAnalyser = audioContext.createAnalyser();

                audioAnalyser.smoothingTimeConstant = 0.85;

                audioAnalyser.connect(audioContext.destination);

                adAssetAudioElement.audioContext = audioContext;
                adAssetAudioElement.audioAnalyser = audioAnalyser;

                fetchSounds(adAssetAudioElement, cbOnAudioLoad);
            }
            else {
                cbOnAudioLoad();
            }
        }

        var fetchSounds = function (adAssetAudioElement, cbOnAudioLoad) {

            function bufferSound(event) {

                var request = event.target;

                adAssetAudioElement.soundBuffer = adAssetAudioElement.audioContext.createBuffer(request.response, false);

                cbOnAudioLoad();
            }

            var request = getHttpRequestObject();

            //request.open(\'GET\', adAssetAudioElement.assets[0], true);
            //Using query string for GET request. Fix for Issue: MIZU-4941 
            request.open(\'GET\', adAssetAudioElement.assets[0]+\"?q=1\", true);

            request.responseType = \'arraybuffer\';

            request.addEventListener(\'load\', bufferSound, false);

            request.send();
        }

        var load = function (adAssetAudioElement, onLoad) {

            if (devicePlatform.iOS())
                loadAudioiOS(adAssetAudioElement, onLoad);
            else
                loadAudioDefault(adAssetAudioElement, onLoad);
        }

        var pauseAudio = function (adAssetAudioElement) {

            if (devicePlatform.iOS()) {
            	
            	//MIZU-5017 : Condition to avoid audio pause, if its already paused. 
            	if (adAssetAudioElement.source && adAssetAudioElement.audioStatus[adAssetAudioElement.id]){
                	adAssetAudioElement.source.noteOff(0);
                }
                    
                adAssetAudioElement.audioStatus[adAssetAudioElement.id] = false;
            }
            else {

                var audio = AdUTilAPI.getElementById(adAssetAudioElement.id);
                audio.pause();
            }
        }

        var playAudio = function (adAssetAudioElement) {


            if (devicePlatform.iOS()) {

                playAudioiOS(adAssetAudioElement);
            }
            else {

                var audio = AdUTilAPI.getElementById(adAssetAudioElement.id);
                audio.play();
            }


        }
        var playAudioiOS = function (adAssetAudioElement) {

            var audio = AdUTilAPI.getElementById(adAssetAudioElement.id);
            var source = adAssetAudioElement.audioContext.createBufferSource();
            if (!adAssetAudioElement.audioStatus[adAssetAudioElement.id]) {

                source.buffer = adAssetAudioElement.soundBuffer;

                source.loop = false;

                source = rotateSound(adAssetAudioElement, source);

                source.noteOn(0);

                adAssetAudioElement.source = source;
                adAssetAudioElement.audioStatus[adAssetAudioElement.id] = true;
            }
            else {
                pauseAudio(adAssetAudioElement);
                playAudioiOS(adAssetAudioElement);
            }
        }

        var rotateSound = function (adAssetAudioElement, source) {

            var nodes = {};

            nodes.filter = adAssetAudioElement.audioContext.createBiquadFilter();
            nodes.panner = adAssetAudioElement.audioContext.createPanner();
            nodes.volume = adAssetAudioElement.audioContext.createGainNode();

            nodes.filter.type = 1;
            nodes.filter.frequency.value = \"482\";
            nodes.panner.setPosition(\"0\", 0, 0);
            nodes.volume.gain.value = \"1\";


            source.connect(nodes.filter);

            nodes.filter.connect(nodes.panner);
            nodes.panner.connect(nodes.volume);
            nodes.volume.connect(adAssetAudioElement.audioAnalyser);

            return source;
        }

        this.load = load;
        this.pauseAudio = pauseAudio;
        this.playAudio = playAudio;

    }
    //Audio Loader ENDS
    GN.NS(\"obj.adaudioloader\", AdAudioLoader);

})(bonzai);


var otplbSettings = \'{\"flagAutoClose\":false,\"flagAutoExpand\":false,\"flagFrequencyCap\":false,\"fcapTimeout\":\"\",\"autocloseTimeout\":\"\",\"autoExpandTimeout\":\"\"}\';

(function(window){
	var config = {
			//TODO make frequency cap URL configurable.
		ecfScriptUrl: AdUTilAPI.getHostNameFromURL(asUrl) + \"expfreq\",//atob(\"aHR0cDovL2NvbGxlY3Rvci5ib256YWkubW9iaS9leHBmcmVx\"), // http://collector.bonzai.mobi/expfreq\")
		rxExpClosTime: new RegExp(atob(\'XihcZCspKHN7MX0pJA==\')), // ^(\d+)(s{1})$
		rxFreqTime: new RegExp(atob(\'XihcZCspKFtkaF17MX0pJA==\')) // ^(\d+)([dh]{1})$
	};
	
	var CONST = {
		paramType: { AC: 1, AE: 2, FC: 3}, // Auto close | Auto expand | Frequency cap
		extTriggerSrc: \"ECF:TRIGGERED\"
	};
	
	var REGISTERED = {
		interacted: false,
		firstRan: false,
		starTime: 0,
		adCloseAction: null,
		delegated: false
	};
	
	var ecfParam = null,
		defaultECFParam = {
			flagAutoClose		: false,
			flagFrequencyCap	: false,
			flagAutoExpand		: false,
			autocloseTimeout	: \"7s\",
			fcapTimeout			: \"\",
			autoExpandTimeout	: \"0s\"
		};
	
	var parseECFJson = function () {
		var i,x;
		
		try {
			ecfParam = JSON.parse(otplbSettings);
		} catch (e) {
			ecfParam = defaultECFParam;
		}
		
		for (i in defaultECFParam)
			if (defaultECFParam.hasOwnProperty(i) && !ecfParam[i])
				ecfParam[i] = defaultECFParam[i];
	};
	
	var extractECFVals = function(valStr, paramType){
		var regx,
			matReslt;
		
		if(valStr===undefined || paramType===undefined)
			throw new Error(\"lECF50: Missing parameters.\");
		
		switch(paramType) {
			case CONST.paramType.AC:
			case CONST.paramType.AE:
				regx = config.rxExpClosTime;
				break;
			case CONST.paramType.FC:
				regx = config.rxFreqTime;
				break;
		}
		
		matReslt = valStr.match(regx);
		
		return matReslt ? [].splice.call(matReslt, 1) : [0, \'s\'];
	};
	
	var getQueryStringJSON = function(){
		var qsJSON = {},
			auto, valMatch;
		
		if (!ecfParam.flagAutoExpand)
			return null;
		
		valMatch = extractECFVals(ecfParam.fcapTimeout, CONST.paramType.FC);
		setRequestJson();
		window.top.ad = AdUTilAPI;
		
		qsJSON.hours = valMatch  ? (valMatch[0] * (valMatch[1]==\'d\' ? 24 : 1)) : 0;
		qsJSON.adId = AdUTilAPI.getAdId();
		qsJSON.sn = getAdNetwork();
		qsJSON.pub = getPublisher();
		qsJSON.freq = 1;
		
		return qsJSON;
	};
	
	var queryBuilder = function(opts, delimeter){
		delimeter = delimeter || \'&\';
		
		var keyVals = [],
			i;
		
		for (i in opts) {
			if(opts.hasOwnProperty(i))
				keyVals.push(i + \'=\' + opts[i]);
		}
		
		return keyVals.join(delimeter);
	};
	

		var pullECFScript = function(cb){
		var scr = document.createElement(\'SCRIPT\'),
			qString, opts;
		
		if (!ecfParam.flagAutoExpand) { // AE not required
			return false;
		}
		
		if (ecfParam.flagAutoExpand && !ecfParam.flagFrequencyCap) { // IF !FC , AUTO EXPAND AFTER AE TIMEOUT
			var expAfter = extractECFVals(ecfParam.autoExpandTimeout, CONST.paramType.AE);
			
			setTimeout(function(){
				cb && cb();
			}, (parseInt(expAfter[0]) || 0) * 1000);

			return false;
		}
		
		scr.onload = function(){
			if (!openPage) {
				return;
			}
			
			var timeEclapsed = (new Date).getTime() - REGISTERED.starTime,
				aeVals = extractECFVals(ecfParam.autoExpandTimeout, CONST.paramType.AE),
				aeTimeout = parseInt(aeVals[0]) || 0,
				timeRemains = (aeTimeout * 1000) - timeEclapsed;
			
			if(timeRemains < 0) timeRemains = 0;
			
			// Auto expand only if \"openPage\" is true
			if (timeRemains) {
				setTimeout(function(){
						cb();
				}, timeRemains);
			} else {
				cb();
			}
		};
		
		opts = getQueryStringJSON();
		
		if (opts) {
			qString = queryBuilder(opts);
			
			scr.type = \'text/javascript\';
			scr.src = config.ecfScriptUrl + \"?\" + qString;
			
			if(opts)
				document.head.appendChild(scr);
		} else {
			cb();
		}
	};
	
	var initiateCloseSequence = function(cb){
		var acVals = extractECFVals(ecfParam.autocloseTimeout, CONST.paramType.AC);
		
		setTimeout(function(){
				cb();
		}, parseInt(acVals[0]) * 1000);
	};
	
	var registerECFExpand = function(fnGotoPageAction, args, killArgs){
		if(REGISTERED.delegated) return false;
		else REGISTERED.delegated = true;
		
		REGISTERED.starTime = (new Date).getTime();
		
		parseECFJson();
		args.push(CONST.extTriggerSrc);
		
		pullECFScript(function() {
			if (!REGISTERED.firstRan && !REGISTERED.interacted) {
				registerAutoExpand(killArgs[0]);
				if(getScreenShotMode())
					return;
				fnGotoPageAction.apply(null, args);
				if (ecfParam.flagAutoClose) {
					initiateCloseSequence(function(){
						if(!REGISTERED.interacted){
							registerAutoClose(killArgs[0]);
							// adding argument to check autoclose.
							killArgs.push(true);
							REGISTERED.adCloseAction.apply(null, killArgs);
						}
					});
				}
			}
		});
	};
	
	var touchAdCloseAction = function (adClose) {
		REGISTERED.adCloseAction = adClose;
	};
	
	var registerInteraction = function(src){
		if(src == CONST.extTriggerSrc)
			REGISTERED.firstRan = true;
		else
			REGISTERED.interacted = true;
			
	};
	
	var AdECFHandler = function(){
		this.registerECFExpand = registerECFExpand;
		this.registerInteraction = registerInteraction;
		this.touchAdCloseAction = touchAdCloseAction;
	};
	var registerAutoExpand = function(pageId){
		var prevPage = getEleById(currentPageId);
		var pageToShow = getEleById(pageId);
		if(adtype != otplvFormat){
		adAnalyticsObject.registerExpEvent(prevPage,pageToShow,null,null,true);
		}
	};
	var registerAutoClose = function(pageId){
		adAnalyticsObject.registerAdClose(pageId,true);
	};
	if(typeof $ == \'function\' && $.ns)
		$.ns(\'AdECFHandler\', new AdECFHandler);
	else
		window.AdECFHandler = new AdECFHandler;
})(window);

})(isNonIframeAd,window.adContainer);<\/scr\";
`;
//	adJSContent += `alert(234);}) //(function(flgNonIframeAd,adContainer){ ends
//	(true,null)`;
/*
*/
//Todo - remove bottom line
//adJSContent += "<\/scr";
adJSContent += `ipt>`;
console.log('ad.js - adJSContent - ends');

var cssLinkTag = "";
window.requestJson = (reqJson && reqJson != "undefined") ? JSON.parse(reqJson) : "";
window.adContainer = adContainer; 

/*
console.log('ad.js - adVariables - starts');
var adVariables = "<scr";
adVariables += "ipt type=\"text/javascript\">window.adContainer = window.frameElement.getAttribute(\"adContainer\"); window.requestJson = window.frameElement.getAttribute(\"reqJson\");</scr";
adVariables += "ipt>";
console.log('ad.js - adVariables - ends'); 
*/

/*
console.log('ad.js - iframe - starts');
var iframe = document.createElement("iframe");
iframe.width ="640px";
iframe.height ="100px";
iframe.style.border ="none";
iframe.style.visibility ="hidden";
iframe.scrolling ="no";
iframe.style.position = "relative";
iframe.setAttribute("adContainer",adContainer);
iframe.setAttribute("requestJson",reqJson);
iframe.setAttribute("allowfullscreen",true);
console.log('ad.js - iframe - ends');
*/

function handleScriptAddition(scriptStr) {
	console.log("scr addition");
    var div = document.createElement("div");
    div.innerHTML = scriptStr;
    var script = null;
    if (div.childNodes && div.childNodes.length == 1) {
        script = div.childNodes[0];
    }
    var script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.text = script.text;
    return script1
};
function test(){
	//debugger;
	alert(111);
	var tempdiv = document.getElementsByClassName("frameElement")[0];
	console.log('tempdiv='+tempdiv);
	console.log('tempdiv.window='+tempdiv.window);
	tempdiv.window.onAdLoad();
}
console.log("non iframe 1");
		var nonIFrame = document.createElement("div");
		nonIFrame.setAttribute("class","frameElement");
		nonIFrame.style.margin = "auto";
		nonIFrame.style["font-size"]="16px";
	    nonIFrame.style.width ="100%";
        nonIFrame.style.height ="100px";

        nonIFrame.setAttribute("adContainer",adContainer); 
        nonIFrame.setAttribute("requestJson",reqJson);
		console.log("non iframe 2");
        var scriptId = window.requestJson.scriptid && window.requestJson.scriptid.length > 0?window.requestJson.scriptid[0]:0;
        if(window.bonzaiObj && window.bonzaiObj[scriptId]){
			console.log("non iframe 3");
              nonIFrame.setAttribute("bonzaiData",window.bonzaiObj[scriptId]);
        }
		var elements = document.getElementsByClassName(adContainer); 
		console.log("non iframe 4");
		if(elements && elements[0]){
			console.log("non iframe 5");
			elements[0].appendChild(nonIFrame);  
		}
		nonIFrame.innerHTML += unescape(extCss); 
		nonIFrame.innerHTML += unescape(adCss); 
		nonIFrame.innerHTML += unescape(adHtml);
		nonIFrame.appendChild(handleScriptAddition(unescape((adJSContent))));
		console.log("non iframe 6");
		setTimeout(function(){test();},500);
			
		// window[window.adContainer].onAdLoad();
		console.log("non iframe 7");
}
		 
/*	 
// IFRAME IMPLEMENTATION STARTS
console.log('ad.js - scriptId - starts');
var scriptId = window.requestJson.scriptid && window.requestJson.scriptid.length > 0?window.requestJson.scriptid[0]:0;
if(window.bonzaiObj && window.bonzaiObj[scriptId]){      
	iframe.setAttribute("bonzaiData",window.bonzaiObj[scriptId]);
}
console.log('ad.js - scriptId - ends');

var elements = document.getElementsByClassName(adContainer);
function isIE10(){
	console.log('ad.js - isIE10() - starts');
	return navigator.appName.indexOf("Internet Explorer")!=-1 &&  navigator.appVersion.indexOf("MSIE 10") !=-1 
}

if(elements && elements[0]){
	console.log('ad.js - if(elements && elements[0]) - inside');
	elements[0].appendChild(iframe);
	if(window.actDomain && isIE10()){
		iframe.src = "javascript:document.write(\"<script>document.domain='"+window.actDomain+"'</script>\")"
	}
}
	//iframe.src = "javascript:document.write(\"<scr"+"ipt>setTimeout(function(){onAdLoad();},500)</scr"+"ipt>\")";
	console.log('ad.js - preparing idocument');
	var idocument = iframe.contentDocument;
	console.log('ad.js - idocument = '+idocument);
	idocument.open();
	idocument.write("<!DOCTYPE html>");
	idocument.write("<html><head>");
	console.log('ad.js - idocument.html+head written');
	idocument.write(unescape(extCss));
	console.log('ad.js - idocument.extCss written');
	idocument.write(unescape(adCss));
	console.log('ad.js - idocument.adCss written');
	//idocument.write("</head><body class=\"frameElement\" style=\"margin: 0px; padding:0px;font-size:16px;overflow:hidden;\" onload=\"window[adContainer].onAdLoad(this);\">");
	idocument.write("</head><body class=\"frameElement\" style=\"margin: 0px; padding:0px;font-size:16px;overflow:hidden;\" onload=\"mainModule.onAdLoad(this);\">");
	//idocument.write("</head><body class=\"frameElement\" style=\"margin: 0px; padding:0px;font-size:16px;overflow:hidden;\" >");
	idocument.write(unescape(adVariables));
	console.log('ad.js - idocument.adVariables written');
	idocument.write(unescape(adHtml));
	console.log('ad.js - idocument.adHtml written');
	idocument.write(unescape(adJSContent));
	console.log('ad.js - idocument.adJSContent written');
	idocument.write("</body></html>");
	idocument.close();
	console.log('ad.js - idocument.close');
	iframe.setAttribute("class", "iframe-939.317973330617");
	console.log('ad.js - iframe.setAttribute');
}
// IFRAME IMPLEMENTATION ENDS
*/