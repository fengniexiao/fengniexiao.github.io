!function r(o,a,u){function i(t,e){if(!a[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=a[t]={exports:{}},o[t][0].call(n.exports,function(e){return i(o[t][1][e]||e)},n,n.exports,r,o,a,u)}return a[t].exports}for(var s="function"==typeof require&&require,e=0;e<u.length;e++)i(u[e]);return i}({1:[function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(t){if(t.method&&t.url){var e=new XMLHttpRequest;if(e.open(t.method,t.url+"?"+function(e){if("object"!==o(e))return"";var t,n,r=[];for(t in e)e.hasOwnProperty(t)&&(n=e[t],r.push(window.encodeURIComponent(t)+"="+window.encodeURIComponent(n)));return r.join("&")}(t.data)),e.timeout=3e4,"post"===t.method.toLowerCase()&&e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.headers)for(var n in t.headers)t.headers.hasOwnProperty(n)&&e.setRequestHeader(n,t.headers[n]);t.timeout&&(e.timeout=t.timeout),t.dataType&&(e.responseType=t.dataType),e.addEventListener("readystatechange",function(){4===e.readyState&&200===e.status&&e.response?t.success&&t.success(e.response):400<e.status&&t.error(e.status)}),t.error&&(e.addEventListener("error",function(e){t.error(e)}),e.addEventListener("timeout",function(e){t.error(e)})),e.send(t.data||null)}}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e,t,n){var r,o=3<arguments.length&&void 0!==arguments[3]&&arguments[3],a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:5e3,u=document.createElement("script"),i="",s=null,c=null,l=!0,d=!0;if(t)for(var f in t)t.hasOwnProperty(f)&&(r=t[f],i+=""===i?"?"+f+"="+r:"&"+f+"="+r,/(jsonp|callback)/.test(f.toLowerCase()))&&(s=r);s&&(window[s]=function(e){c=e}),u.onload=function(){c&&d&&(l=!1,n)&&n(c),o&&u.remove()},u.onerror=function(e){d&&(l=!1,n)&&n(e),o&&u.remove()},window.setTimeout(function(e){l&&(d=!1,n)&&n(null)},a),u.src=e+i,document.head.appendChild(u)}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){var n=document.querySelector(".p-".concat(e));n?(t&&t(n),n.classList.remove("HIDE")):(0,r.default)({url:"/asset/part/".concat(e,".html"),method:"get",dataType:"document",success:function(e){t&&t(e.body.firstElementChild)}})};var r=(n=e("./ajax.js"))&&n.__esModule?n:{default:n}},{"./ajax.js":1}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("./fetch.js"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(0,r(e("../plugin/md5.min.js")).default)();var a=/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;n.default={delay:function(e,t){window.setTimeout(t,e)},run:function(e,t,n){e(function(e){t&&(a.test(window.navigator.userAgent)?t.mobile&&t.mobile(n):t.desktop&&t.desktop(n))})},runOnMobile:function(e){a.test(window.navigator.userAgent)&&e&&e(window.navigator.userAgent)},runOnDesktop:function(e){a.test(window.navigator.userAgent)||e&&e(window.navigator.userAgent)},getPageKey:function(e){var t="",n=window.location.pathname;return/^\/(archives|categories|tags)\//.test(n)?t="archive":/^(\/|\/index.html)$/.test(n)?t="home":2===(n=n.match(/^\/([a-zA-Z0-9_\-]+)/)).length&&(t=n[1]),t},forEach:function(e,t){if("object"===o(e)&&e.length)for(var n=0;n<e.length&&(!t||!t(e[n],n));n++);},forIn:function(e,t){if("object"===o(e))for(var n in e)if(e.hasOwnProperty(n)&&t&&t(e[n],n))break},layoutParts:function(t){var e=document.querySelector('meta[name="layout-parts"]');if(e){e=e.getAttribute("content");try{t&&t(JSON.parse(e))}catch(e){t&&t([])}}},decodePass:function(e,t){if(isNaN(t))return{appid:"",appkey:""};var n="",r=e.split(":");if(r[1])for(var o=r[1].substr(0,parseInt(r[0])).split(""),a=r[1].substr(parseInt(r[0])).split(""),u=0;u<r[1].length;u++)n+=(u%2==0?o:a).shift();return{appid:n.substr(0,t),appkey:n.substr(t)}},baiduTranslate:function(e,t,n,r){var o,a,u;return"function"==typeof r&&("string"!=typeof t||"string"!=typeof n?r({error:"PARAMS ERROR / 参数错误"}):(o="//api.fanyi.baidu.com/api/trans/vip/translate",window.location.protocol.includes("https")&&(o="//fanyi-api.baidu.com/api/trans/vip/translate"),a=Date.now(),u=md5(e.appid+t+a+e.appkey),void(0===t.length?r({error:'<p class="error">EMPTY QUERY / 空查询</p>'}):t.length<100?(0,i.default)(o,{q:t,appid:e.appid,salt:a,from:"auto",to:n,sign:u,callback:"baiduTranslate"+a},function(e){e&&e.trans_result?r({result:'<p class="result">RESULT / 翻译结果：</p><p class="content">'+e.trans_result[0].dst+"</p>"}):r({error:'<p class="error">WRONG QUERY / 错查询</p>'})},!0):r({error:'<p class="error">HUGE QUERY / 巨查询</p>'}))))},getChromeVersion:function(e){var t;return/Chrome/i.test(window.navigator.userAgent)?1<(t=window.navigator.userAgent.match(/Chrome\/([0-9.]+)/i)).length?parseInt(t[1]):void 0:0}}},{"../plugin/md5.min.js":6,"./fetch.js":2}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("../common/part.js")),o=a(e("../common/util.js"));function a(e){return e&&e.__esModule?e:{default:e}}var u="translater",i=null,s={},c=null,l=null,d={isInside:!1,isPathIn:function(e,t){var n=!1;if(e)for(var r=0;r<e.length;r++)if(e[r]===t){n=!0;break}return n},setMousedown:null,setMouseup:null},f=function(e,t){var n;i&&(n=i.querySelector(".p-translater-result"),e?(n.style.display="block",n.innerHTML=t,i.classList.add("active")):(n.style.display="none",n.innerHTML="",i.classList.remove("active")))};n.default={tag:u,init:function(t,n){(0,r.default)(u,function(e){i=e,document.querySelector(u)&&document.querySelector(u).replaceWith(i),t&&(s=o.default.decodePass(t.baidu_translate.pass,t.baidu_translate.pointer),t.onstart&&(c=t.onstart),t.onended&&(l=t.onended),(e=document.querySelector(".m-main")).removeEventListener("mousedown",d.setMousedown),d.setMousedown=function(e){d.isInside=!0,f(!1);e=e.path||e.composedPath&&e.composedPath();d.isPathIn(e,i)||window.getSelection().empty()},e.addEventListener("mousedown",d.setMousedown),document.removeEventListener("mouseup",d.setMouseup),d.setMouseup=function(e){var t,n=window.getSelection().toString().trim();d.isInside&&0<n.length?(e=e.path||e.composedPath&&e.composedPath(),t=window.getSelection().getRangeAt(0).getBoundingClientRect(),i.classList.add("moved"),i.style.transform="translateY("+(window.scrollY+t.y+t.height-i.offsetTop+16)+"px)",d.isPathIn(e,i.querySelector(".p-translater-bar-copy"))&&0<n.length?document.execCommand("copy")&&f(!0,"<p>Copied! 复制成功！</p>"):d.isPathIn(e,i.querySelector(".p-translater-bar-zh"))?(c(i),o.default.baiduTranslate(s,n,"zh",function(e){l(i),e.error?f(!0,e.error):e.result&&f(!0,e.result)})):d.isPathIn(e,i.querySelector(".p-translater-bar-en"))?(c(i),o.default.baiduTranslate(s,n,"en",function(e){l(i),e.error?f(!0,e.error):e.result&&f(!0,e.result)})):d.isPathIn(e,i.querySelector(".p-translater-bar-jp"))?(c(i),o.default.baiduTranslate(s,n,"jp",function(e){l(i),e.error?f(!0,e.error):e.result&&f(!0,e.result)})):f(!1)):(i.classList.remove("moved"),i.style.transform="translateY(0)",f(!1)),d.isInside=!1},document.addEventListener("mouseup",d.setMouseup)),n&&n(i)})}}},{"../common/part.js":3,"../common/util.js":4}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default=void 0,n.default=function(e){function d(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function i(e,t,n,r,o,a){return d((t=d(d(t,e),d(r,a)))<<o|t>>>32-o,n)}function f(e,t,n,r,o,a,u){return i(t&n|~t&r,e,t,o,a,u)}function p(e,t,n,r,o,a,u){return i(t&r|n&~r,e,t,o,a,u)}function m(e,t,n,r,o,a,u){return i(t^n^r,e,t,o,a,u)}function h(e,t,n,r,o,a,u){return i(n^(t|~r),e,t,o,a,u)}function u(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n,r,o,a,u=1732584193,i=-271733879,s=-1732584194,c=271733878,l=0;l<e.length;l+=16)i=h(i=h(i=h(i=h(i=m(i=m(i=m(i=m(i=p(i=p(i=p(i=p(i=f(i=f(i=f(i=f(r=i,s=f(o=s,c=f(a=c,u=f(n=u,i,s,c,e[l],7,-680876936),i,s,e[l+1],12,-389564586),u,i,e[l+2],17,606105819),c,u,e[l+3],22,-1044525330),s=f(s,c=f(c,u=f(u,i,s,c,e[l+4],7,-176418897),i,s,e[l+5],12,1200080426),u,i,e[l+6],17,-1473231341),c,u,e[l+7],22,-45705983),s=f(s,c=f(c,u=f(u,i,s,c,e[l+8],7,1770035416),i,s,e[l+9],12,-1958414417),u,i,e[l+10],17,-42063),c,u,e[l+11],22,-1990404162),s=f(s,c=f(c,u=f(u,i,s,c,e[l+12],7,1804603682),i,s,e[l+13],12,-40341101),u,i,e[l+14],17,-1502002290),c,u,e[l+15],22,1236535329),s=p(s,c=p(c,u=p(u,i,s,c,e[l+1],5,-165796510),i,s,e[l+6],9,-1069501632),u,i,e[l+11],14,643717713),c,u,e[l],20,-373897302),s=p(s,c=p(c,u=p(u,i,s,c,e[l+5],5,-701558691),i,s,e[l+10],9,38016083),u,i,e[l+15],14,-660478335),c,u,e[l+4],20,-405537848),s=p(s,c=p(c,u=p(u,i,s,c,e[l+9],5,568446438),i,s,e[l+14],9,-1019803690),u,i,e[l+3],14,-187363961),c,u,e[l+8],20,1163531501),s=p(s,c=p(c,u=p(u,i,s,c,e[l+13],5,-1444681467),i,s,e[l+2],9,-51403784),u,i,e[l+7],14,1735328473),c,u,e[l+12],20,-1926607734),s=m(s,c=m(c,u=m(u,i,s,c,e[l+5],4,-378558),i,s,e[l+8],11,-2022574463),u,i,e[l+11],16,1839030562),c,u,e[l+14],23,-35309556),s=m(s,c=m(c,u=m(u,i,s,c,e[l+1],4,-1530992060),i,s,e[l+4],11,1272893353),u,i,e[l+7],16,-155497632),c,u,e[l+10],23,-1094730640),s=m(s,c=m(c,u=m(u,i,s,c,e[l+13],4,681279174),i,s,e[l],11,-358537222),u,i,e[l+3],16,-722521979),c,u,e[l+6],23,76029189),s=m(s,c=m(c,u=m(u,i,s,c,e[l+9],4,-640364487),i,s,e[l+12],11,-421815835),u,i,e[l+15],16,530742520),c,u,e[l+2],23,-995338651),s=h(s,c=h(c,u=h(u,i,s,c,e[l],6,-198630844),i,s,e[l+7],10,1126891415),u,i,e[l+14],15,-1416354905),c,u,e[l+5],21,-57434055),s=h(s,c=h(c,u=h(u,i,s,c,e[l+12],6,1700485571),i,s,e[l+3],10,-1894986606),u,i,e[l+10],15,-1051523),c,u,e[l+1],21,-2054922799),s=h(s,c=h(c,u=h(u,i,s,c,e[l+8],6,1873313359),i,s,e[l+15],10,-30611744),u,i,e[l+6],15,-1560198380),c,u,e[l+13],21,1309151649),s=h(s,c=h(c,u=h(u,i,s,c,e[l+4],6,-145523070),i,s,e[l+11],10,-1120210379),u,i,e[l+2],15,718787259),c,u,e[l+9],21,-343485551),u=d(u,n),i=d(i,r),s=d(s,o),c=d(c,a);return[u,i,s,c]}function s(e){for(var t="",n=32*e.length,r=0;r<n;r+=8)t+=String.fromCharCode(e[r>>5]>>>r%32&255);return t}function c(e){var t=[];for(t[(e.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;for(var n=8*e.length,r=0;r<n;r+=8)t[r>>5]|=(255&e.charCodeAt(r/8))<<r%32;return t}function r(e){for(var t,n="",r=0;r<e.length;r+=1)t=e.charCodeAt(r),n+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return n}function l(e){return unescape(encodeURIComponent(e))}function o(e){return s(u(c(e=l(e)),8*e.length))}function a(e,t){var n,e=l(e),t=l(t),r=c(e),o=[],a=[];for(o[15]=a[15]=void 0,16<r.length&&(r=u(r,8*e.length)),n=0;n<16;n+=1)o[n]=909522486^r[n],a[n]=1549556828^r[n];return e=u(o.concat(c(t)),512+8*t.length),s(u(a.concat(e),640))}window.md5=function(e,t,n){return t?n?a(t,e):r(a(t,e)):n?o(e):r(o(e))}}},{}]},{},[5]);