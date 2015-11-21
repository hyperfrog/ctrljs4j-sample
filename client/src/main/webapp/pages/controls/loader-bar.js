/*!
 * Controls.js - loader-bar.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 * This version of Controls.js is licensed under the terms of GNU General Public License v3.
 * http://www.gnu.org/licenses/gpl-3.0.html
 *
 * The commercial license can be purchased at Controls.js website.
 */








var ngLibsURL=typeof ngLibsURL!=="undefined"?ngLibsURL:"controls/libs/";if(typeof ngLib==="undefined")ngLib=[];if(typeof ngLib.ng_controls==="undefined")ngLib.ng_controls={path:"ng_controls/"};if(typeof ngLib.ng_basic==="undefined")ngLib.ng_basic={path:"ng_basic/"};if(typeof ngLib.ng_winxp==="undefined")ngLib.ng_winxp={path:"ng_winxp/"};if(typeof ngLib.ng_winwineight==="undefined")ngLib.ng_wineight={path:"ng_wineight/"};if(typeof ngLib.ng_wireframe==="undefined")ngLib.ng_wireframe={path:"ng_wireframe/"};
if(typeof ngLib.lib_knockout==="undefined")ngLib.lib_knockout={path:"lib_knockout/"};if(typeof ngLib.lib_hammerjs==="undefined")ngLib.lib_hammerjs={path:"lib_hammerjs/"};var ngOnAppLoading=typeof ngOnAppLoading==="undefined"?null:ngOnAppLoading,ngOnAppLoaded=typeof ngOnAppLoaded==="undefined"?null:ngOnAppLoaded,ngOnAppCreated=typeof ngOnAppCreated==="undefined"?null:ngOnAppCreated,ngOnAppLoadProgress=typeof ngOnAppLoadProgress==="undefined"?null:ngOnAppLoadProgress,ngOnAppFileLoad=typeof ngOnAppFileLoad==="undefined"?null:ngOnAppFileLoad,ngOnAppFileLoaded=typeof ngOnAppFileLoaded==="undefined"?null:ngOnAppFileLoaded;
function ngCreateHTMLFragment(f){var c=document.createDocumentFragment();if(c){var d=document.createElement("div");for(d.innerHTML=f;d.firstChild;)c.appendChild(d.firstChild)}return c}
function ngLoadApplication(f,c,d){function j(a){var b,k,m;for(var h in a){if(typeof a[h]==="string")a[h]={File:a[h]};if(typeof a[h].Type==="undefined"){b=q(a[h].File);k=b.lastIndexOf("/");if(k<0)k=b.lastIndexOf("\\");m=b.lastIndexOf(".");if(m>k){b=b.substring(m+1).toLowerCase();switch(b){case "js":a[h].Type=1;break;case "css":a[h].Type=0;break;case "png":case "jpg":case "gif":case "jpeg":case "bmp":a[h].Type=2;break}}}switch(a[h].Type){case 0:ngLoadAppCSS(a[h].File,a[h]);break;case 2:ngLoadAppImg(a[h].File,
a[h]);break}}for(h in a)a[h].Type===1&&ngLoadAppScript(a[h].File,a[h],null,a[h].Async)}function g(a){var b=a.indexOf("://");if(b<0)return window.location.hostname;a=a.substring(b+3,a.length);b=a.indexOf("/");if(b>=0)a=a.substring(0,b);b=a.indexOf(":");if(b>=0)a=a.substring(0,b);return a}function q(a){var b=a.indexOf("?");if(b>=0)a=a.substr(0,b);b=a.indexOf("#");if(b>=0)a=a.substr(0,b);return a}function z(a){return U&&V&&g(a)==window.location.hostname?q(a):a}function t(a){if(typeof Windows!=="undefined")MSApp.execUnsafeLocalFunction(function(){window.eval.call(window,
a)});else window.execScript?window.execScript(a):window.eval.call(window,a)}function s(a,b,k,m){w++;if(n&&typeof ngOnAppLoadProgress==="function"){var h=e>0?Math.round(w*100/e):0;if(h>G){ngOnAppLoadProgress(h);G=h}}m||D(a,b,k)}function D(a,b,k){p++;a>=0&&typeof ngOnAppFileLoaded==="function"&&ngOnAppFileLoaded(a,b,k);if(p===e){ngInitializeAppUnits();if(n&&p===e)var m=setTimeout(function(){clearTimeout(m);typeof ngOnAppLoaded==="function"&&ngOnAppLoaded();if(p<e)ngOnAppLoaded=null;else{n=0;if(typeof ngApplication===
"function"){new ngApplication(typeof ngStartParams==="function"?new ngStartParams:{},f&&(typeof f==="object"||f!="")?f:"ngApp",false);if(ngApp&&l!="")ngApp.AppPath=l;typeof ngOnAppCreated==="function"&&ngOnAppCreated(ngApp)}c&&!c(ngApp)||ngApp&&ngApp.Run()}},100)}}if(typeof ngOnAppLoading==="function"&&!ngOnAppLoading())return false;var E=document.getElementsByTagName("head").item(0);if(!E)return false;var u,G=0,F=0,n=1,e=1,w=0,p=0,l="",y="",i={},A=[];u=navigator.userAgent.toLowerCase();var U=typeof window.cordova!==
"undefined",V=u.indexOf("windows phone")!=-1,O=u.indexOf("opera")!=-1,P;if(O)P=parseFloat(window.opera.version());u=document.getElementsByTagName("script");var H,r;H="";for(var J=0;J<u.length;J++)if(typeof u[J].src!=="undefined"){H=u[J].src;r=H.indexOf("apploader=");if(r>=0){r=H.indexOf("?");if(r>=0){l=H.substring(0,r);r=l.lastIndexOf("/");l=r<=0?"":l.substring(0,r+1);break}}}if(l!=""){r=l.indexOf("://");if(r>=0)for(r+=3;r<l.length;r++)if(l.charAt(r)=="/"){y=l.substring(0,r);break}if(l.charAt(l.length-
1)!="/")l+="/"}window.ngInitializeAppUnits=function(){if(typeof ngAppUnits==="object"){for(var a in ngAppUnits)if(typeof ngAppUnits[a].LoadOrder==="undefined")ngAppUnits[a].LoadOrder=F++;ngAppUnits.sort(function(b,k){if(typeof b.Priority==="undefined")b.Priority=0.5;if(typeof k.Priority==="undefined")k.Priority=0.5;if(b.Priority<0)b.Priority=0;if(k.Priority<0)k.Priority=0;if(b.Priority>1)b.Priority=1;if(k.Priority>1)k.Priority=1;if(b.Priority>k.Priority)return-1;if(b.Priority<k.Priority)return 1;
return b.LoadOrder-k.LoadOrder});for(a in ngAppUnits)if(!ngAppUnits[a].Initialized){ngAppUnits[a].Initialized=true;typeof ngAppUnits[a].OnInit==="function"&&ngAppUnits[a].OnInit()}}};window.ngAppURL=function(a){a=z(a);if(a.indexOf("://")>=0||a=="")return a;if(a.charAt(0)=="/")return y+a;return l+a};window.ngLoadAppCSS=function(a,b){if(!(typeof ngOnAppFileLoad==="function"&&!ngOnAppFileLoad(0,a,b))){b=document.createElement("link");b.setAttribute("rel","stylesheet");b.setAttribute("type","text/css");
b.setAttribute("href",ngAppURL(a));E.appendChild(b)}};window.ngLoadAppScript=function(a,b,k,m){function h(I,M,Q,B){function R(K){var v=typeof console!=="undefined"?console:null;v&&v.error('Script "'+I+'" was not loaded!');L(K)}function L(K,v){if(!S){S=true;if(m){typeof v!=="undefined"&&v!==""&&t(v);typeof Q==="function"&&Q(1,I,M);s(1,I,M)}else{K===true&&s(1,I,M,true);var o=A[0];if(!o.Async){if(K===true)return;A.splice(0,1);typeof o.LoadCallback==="function"&&o.LoadCallback(1,o.URL,o.Data);s(1,o.URL,
o.Data)}for(;A.length;){o=A[0];if(!o.Async){h(o.URL,o.Data,o.LoadCallback,false);break}v=o.code;if(typeof v==="undefined")break;v!==""&&t(v);A.splice(0,1);typeof o.LoadCallback==="function"&&o.LoadCallback(1,o.URL,o.Data);D(1,o.URL,o.Data)}}}}var S=false,T=ngAppURL(I);if(B){var x=new XMLHttpRequest;x.onreadystatechange=function(){if(x.readyState==4)if(x.status==200||x.status==304||x.status==0){if(!m)N.code=x.responseText;L(true,x.responseText)}else{if(!m)N.code="";R(true)}};x.open("GET",T,true);x.send()}else{B=
document.createElement("script");B.onload=L;B.onerror=R;B.onreadystatechange=function(){this.readyState!="loaded"&&this.readyState!="complete"||L()};B.setAttribute("src",T);E.appendChild(B)}}var C=window.XMLHttpRequest&&(typeof ngDEBUG==="undefined"||!ngDEBUG)&&(!O||P>=11.1&&window.location.protocol!="file:")&&(typeof Windows!=="undefined"||g(a)==window.location.hostname&&window.location.hostname!="");if(!(typeof ngOnAppFileLoad==="function"&&!ngOnAppFileLoad(1,a,b))){e++;if(!m){var N={URL:a,Data:b,
Async:C,LoadCallback:k};A.push(N);if(!C&&A.length>1)return}h(a,b,k,C)}};window.ngLoadAppImg=function(a,b,k){if(typeof ngOnAppFileLoad==="function"&&!ngOnAppFileLoad(2,a,b))return null;var m=i[a];if(typeof m==="undefined"){m=new Image;e++;var h=false,C=function(){if(!h){h=true;typeof k==="function"&&k(2,a,b);s(2,a,b)}};m.onload=C;m.onfailure=C;m.onerror=C;i[a]=m;m.src=ngAppURL(a)}return m};var W=setTimeout(function(){clearTimeout(W);if(!d){d=[];if(ngAppFiles)for(var a in ngAppFiles)d.push(ngAppFiles[a]);
if(typeof ngDetectDevice==="function"){if(typeof ngDevice==="undefined")ngDevice=ngDetectDevice();if(typeof ngDevice!=="undefined"&&typeof ngAppDeviceFiles!=="undefined"){var b=ngAppDeviceFiles[ngDevice];if(typeof b!=="undefined")for(a in b)d.push(b[a])}}}d&&j(d);s(-1)},100);return true};function ngDeviceReset(f){if(typeof ngDevices==="object"&&ngDevices)if(typeof f==="undefined"||typeof ngDevices[f]==="object"){var c=window.location.href,d=c.indexOf("?"),j=c.indexOf("#"),g="",q="";if(j>=0){q=c.substr(j);c=c.substr(0,j)}if(d>=0){g=c.substr(d+1);c=c.substr(0,d)}d=g.indexOf("appdevice=");if(d>=0){j=g.indexOf("&",d);j=j>=0?g.substr(j+1):"";g=g.substr(0,d);if(typeof f!=="undefined")g+="appdevice="+f;else if(d>0)g=g.substr(0,d-1);if(j!=""){if(g!="")g+="&";g+=j}}else if(typeof f!=="undefined"){if(g!=
"")g+="&";g+="appdevice="+f}if(g!="")c+="?"+g;c+=q;if(window.location.href==c)window.location.reload();else window.location.href=c}}
function ngGetDeviceInfo(){var f=0,c=0;if(typeof window.innerWidth=="number"){f=window.innerWidth;c=window.innerHeight}else if(document.documentElement&&document.documentElement.clientWidth){f=document.documentElement.clientWidth;c=document.documentElement.clientHeight}else if(document.body&&document.body.clientWidth){f=document.body.clientWidth;c=document.body.clientHeight}var d=window.screen.colorDepth;if(typeof d==="undefined")d=24;var j=screen.width;if(typeof j==="undefined")j=f;var g=screen.height;
if(typeof g==="undefined")g=c;var q=window.orientation;if(typeof q==="undefined")q=j>g?90:0;var z=f>c?90:0,t=z==90,s=Math.abs(q%180)==90;return{ScreenWidth:j,ScreenHeight:g,ScreenOrientation:q,ScreenLandscape:s,ScreenPortrait:!s,Width:f,Height:c,Orientation:z,Landscape:t,Portrait:!t,ColorDepth:d,SupportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.msMaxTouchPoints?true:false}}
function ngDetectDevice(){var f;if(typeof ngDevices==="object"&&ngDevices){var c=ngGetDeviceInfo(),d=0,j=1E4,g,q=navigator.userAgent.toLowerCase(),z=function(u,G){var F,n,e,w,p,l=0,y=0;for(var i in G){e=G[i];y++;w=i.substr(0,3);if(w=="Opt"){i=i.substring(3,i.length);w=i.substr(0,3);F=false}else F=true;if(w=="Not"){i=i.substring(3,i.length);w=i.substr(0,3);n=true}else n=false;p=false;switch(w){case "Min":i=i.substring(3,i.length);if(!n&&c[i]>=e||n&&c[i]<e)p=true;break;case "Max":i=i.substring(3,i.length);
if(!n&&c[i]<e||n&&c[i]>=e)p=true;break;default:switch(i){case "IsMobile":F=false;y--;break;case "IExplorer":e=eval("/*@cc_on!@*/false")==e;if(!n==e)p=true;break;case "FireFox":e=q.indexOf("firefox")!=-1==e;if(!n==e)p=true;break;case "Chrome":e=q.indexOf("chrome")!=-1==e;if(!n==e)p=true;break;case "Safari":e=q.indexOf("safari")!=-1==e;if(!n==e)p=true;break;case "Opera":e=q.indexOf("opera")!=-1==e;if(!n==e)p=true;break;case "UserAgent":e=navigator.userAgent.indexOf(e)!=-1;if(!n==e)p=true;break;case "UserAgentIC":e=
q.indexOf(e.toLowerCase())!=-1;if(!n==e)p=true;break;default:if(!n&&c[i]==e||n&&c[i]!=e)p=true;break}break}if(p)l++;else if(F){l=-10000;break}}if(y){if(l>=0&&(l>d||l==d&&y<j)){d=l;j=y;f=u}}else if(typeof g==="undefined")g=u},t,s;for(var D in ngDevices){t=ngDevices[D];s=false;for(var E in t)if(typeof t[E]==="object"){s=true;z(D,t[E])}s||z(D,t)}if(typeof f==="undefined")f=g}return f}function ngLoadAppDeviceCSS(f,c,d){if(!(typeof ngDevice==="undefined"||ngDevice!=f))return ngLoadAppCSS(c,d)}
function ngLoadAppDeviceScript(f,c,d,j,g){if(!(typeof ngDevice==="undefined"||ngDevice!=f))return ngLoadAppScript(c,d,j,g)}function ngLoadAppDeviceImg(f,c,d,j){if(!(typeof ngDevice==="undefined"||ngDevice!=f))return ngLoadAppImg(c,d,j)};(function(){function f(){if(d)d.style.width=c*2+"px"}var c=0,d=null;ngOnAppLoadProgress=function(j){d||(d=document.getElementById("ngLoadProgress"));c=j;d&&setTimeout(f,1)}})();
