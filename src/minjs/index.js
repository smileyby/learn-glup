!function(t){t.Ta=t.Ta||{},Ta.hack=function(){return{params:"",conf:{sid:58495963,pf:1,logo:255,hot:{}}}}}(this),function(t,e){function a(t){var e,a,n,o,r,i;for(n=(t+="").length,a=0,e="";a<n;){if(o=255&t.charCodeAt(a++),a==n){e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o>>2),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((3&o)<<4),e+="==";break}if(r=t.charCodeAt(a++),a==n){e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o>>2),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((3&o)<<4|(240&r)>>4),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((15&r)<<2),e+="=";break}i=t.charCodeAt(a++),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o>>2),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((3&o)<<4|(240&r)>>4),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((15&r)<<2|(192&i)>>6),e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63&i)}return e}function n(t){return(t=document.cookie.match(new RegExp("(?:^|;\\s)"+t+"=(.*?)(?:;\\s|$)")))?t[1]:""}function o(t,e,a){var n=window.location.host,o=n.split(".");2<o.length&&(n=({"com.cn":1,"net.cn":1,"gov.cn":1,"com.hk":1,"co.nz":1,"org.cn":1,"edu.cn":1}[o.slice(-2).join(".")]?o.slice(-3):o.slice(-2)).join(".")),document.cookie=t+"="+e+";path=/;domain="+n+(a?";expires="+a:"")}function r(t){var e,a,n,o={};if(void 0===t?(n=window.location,t=n.host,e=n.pathname,a=n.search.substr(1),n=n.hash):(n=t.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i)||[],t=n[1],e=n[2],a=n[3],n=n[4]),void 0!==n&&(n=encodeURI(n.replace(/\"|\'|\<|\>/gi,"M"))),a)for(var r=a.split("&"),i=0,c=r.length;i<c;i++)if(-1!=r[i].indexOf("=")){var d=r[i].indexOf("="),s=r[i].slice(0,d),d=r[i].slice(d+1);o[s]=d}return{host:t,path:e,search:a,hash:n,param:o}}function i(t){return(t||"")+Math.round(2147483647*(Math.random()||.5))*+new Date%1e10}function c(t,e){var a=document.createElement("script"),n=document.getElementsByTagName("script")[0];a.src=t,a.type="text/javascript",a.onload=a.onerror=a.onreadystatechange=function(){/ loaded | complete | undefined /.test(a.readyState)&&(a.onload=a.onerror=a.onreadystatechange=null,a.parentNode.removeChild(a),a=void 0,e())},n.parentNode.insertBefore(a,n)}function d(){var t=r(),e={dm:t.host,pvi:"",si:"",url:t.path,arg:encodeURIComponent(t.search||""),ty:1};return e.pvi=function(){var t=n("pgv_pvi");return t||(e.ty=0,t=i(),o("pgv_pvi",t,"Sun, 18 Jan 2038 00:00:00 GMT;")),t}(),e.si=function(){var t=n("pgv_si");return t||(t=i("s"),o("pgv_si",t)),t}(),e}function s(){var t=r(document.referrer),e=r();return{rdm:t.host,rurl:t.path,rarg:encodeURIComponent(t.search||""),adt:e.param.ADTAG||e.param.adtag}}function h(){try{var t=navigator,e=screen||{width:"",height:"",colorDepth:""},a=document.body,n=e.width+"x"+e.height,o=e.colorDepth+"-bit",r=(t.language||t.userLanguage).toLowerCase(),i=t.javaEnabled()?1:0,c=(new Date).getTimezoneOffset()/60,e="";a&&a.addBehavior&&(a.addBehavior("#default#clientCaps"),e=a.connectionType);var d,s,h,p,a={fl:"",scr:n,scl:o,lg:r,jv:i,tz:c,ct:e};if((d=t.plugins)&&(s=d.length))for(t=0;t<s;t++)(h=d[t].description.match(/Shockwave Flash ([\d\.]+) \w*/))&&(a.fl=h[1]);else p=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"),a.fl=p.replace(/^.*\s+(\d+)\,(\d+).*$/,"$1.$2")}catch(t){return{}}return a}function p(){var t={};if("undefined"!=typeof _taadHolders&&0<_taadHolders.length)for(var e=0,a=_taadHolders,n=a.length;e<n;e++)t[a[e]]=t[a[e]]?t[a[e]]+1:1;var o,e=[];for(o in t)t.hasOwnProperty(o)&&e.push(o+"*"+t[o]);return{ext:"adid="+e.join(":")}}function f(){var t,e=[];for(t in g){var a,i=n(g[t].c_id);"afs"==t?a=(a=/ssid=([^&]*)/i.exec(r().hash))&&a[1]?a[1]:"":(a=r().param,a=a[g[t].id]?a[g[t].id]:""),a?(e.push("ty="+g[t].key+";ck=0;id="+a),(i=new Date).setTime(i.getTime()+2592e6),o(g[t].c_id,a,i.toGMTString())):i&&e.push("ty="+g[t].key+";ck=1;id="+i)}return{pf:e.join("|")}}function l(e){if((e=e||{}).conf&&function(){var a,n=e.conf;for(a in n)n.hasOwnProperty(a)&&(t[a]=n[a])}(),t.sid&&!Ta[t.sid]){for(var a=[],n=0,o=[d(),s(),{r2:t.sid,r3:"undefined"==typeof _speedMark?"-1":new Date-_speedMark,r4:t.pf||1},h(),p(),f(),{random:+new Date}],r=o.length;n<r;n++)for(var i in o[n])o[n].hasOwnProperty(i)&&a.push(i+"="+(o[n][i]||""));e.params&&a.push(e.params);var a=Ta.src=("https:"==document.location.protocol?"https://pingtas.qq.com/webview":"http://pingtcss.qq.com")+"/pingd?"+a.join("&"),c=new Image;Ta[t.sid]=c,c.onload=c.onerror=c.onabort=function(){c=c.onload=c.onerror=c.onabort=null,Ta[t.sid]=!0},c.src=a,(1*!t.pf||t.hot.isValid)&&u(a),t.logo&&255!=t.logo&&v(t.logo)}}function u(e){var n=window.location,o=n.host+n.pathname,r=n.pathname,i=function(){c(("https:"==document.location.protocol?"https://":"http://")+"tajs.qq.com/ping_hotclick_min.js",function(){window.hotclick&&new hotclick(e).watchClick()})};1*t.pf?new RegExp(o).test(t.hot.url)&&i():(n=t.sid,c("http://tcss.qq.com/heatmap/"+n%100+"/"+a(n)+".js?random="+ +new Date,function(){var t;if(window._Cnf&&(t=window._Cnf.url)){t=t.split("|");for(var e=0;e<t.length;e++)if(t[e]==r){i();break}}}))}function v(t){var e={9:"腾讯分析",10:"网站统计",df:'<img src="'+("https:"==document.location.protocol?"https:":"http:")+"//tajs.qq.com/icon/toss_"+t+'.gif" border="0" />'};document.write(['<a href="http://ta.qq.com?ADTAG=FROUM.FOOTER.CLICK.ICON" title="腾讯分析" target="_blank">',e[t]||e.df,"</a>"].join(""))}var g={afs:{key:1,id:"ssid",c_id:"pgv_afsid",fr:"hash"},afc:{key:2,id:"__tacid",c_id:"pgv_afcid",fr:"param"},gdt:{key:11,id:"qz_gdt",c_id:"pgv_gdtid",fr:"param"}};e.taClick=function(t,e){var a=Ta.src.replace(/ext=[^&]*/,function(){return"ext="+("evtid"==e?"ty=0;evtid=":"clickid"==e?"ty=1;clickid=":"adid=")+t}).replace(/r2=([^&]*)/,function(t,a){return"r2="+("clickid"==e?"b":"a")+a});new Image(1,1).src=a},e.Ta=e.Ta||{},Ta.pgv=l,!Ta.async&&l(Ta.hack?Ta.hack():"")}({sid:"",pf:"",hot:{url:"",isValid:!1}},this);