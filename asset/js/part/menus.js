!function r(o,u,a){function i(t,e){if(!u[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=u[t]={exports:{}},o[t][0].call(n.exports,function(e){return i(o[t][1][e]||e)},n,n.exports,r,o,u,a)}return u[t].exports}for(var s="function"==typeof require&&require,e=0;e<a.length;e++)i(a[e]);return i}({1:[function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(t){if(t.method&&t.url){var e=new XMLHttpRequest;if(e.open(t.method,t.url+"?"+function(e){if("object"!==o(e))return"";var t,n,r=[];for(t in e)e.hasOwnProperty(t)&&(n=e[t],r.push(window.encodeURIComponent(t)+"="+window.encodeURIComponent(n)));return r.join("&")}(t.data)),e.timeout=3e4,"post"===t.method.toLowerCase()&&e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.headers)for(var n in t.headers)t.headers.hasOwnProperty(n)&&e.setRequestHeader(n,t.headers[n]);t.timeout&&(e.timeout=t.timeout),t.dataType&&(e.responseType=t.dataType),e.addEventListener("readystatechange",function(){4===e.readyState&&200===e.status&&e.response?t.success&&t.success(e.response):400<e.status&&t.error(e.status)}),t.error&&(e.addEventListener("error",function(e){t.error(e)}),e.addEventListener("timeout",function(e){t.error(e)})),e.send(t.data||null)}}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e,t,n){var r,o=3<arguments.length&&void 0!==arguments[3]&&arguments[3],u=4<arguments.length&&void 0!==arguments[4]?arguments[4]:5e3,a=document.createElement("script"),i="",s=null,c=null,f=!0,d=!0;if(t)for(var l in t)t.hasOwnProperty(l)&&(r=t[l],i+=""===i?"?"+l+"="+r:"&"+l+"="+r,/(jsonp|callback)/.test(l.toLowerCase()))&&(s=r);s&&(window[s]=function(e){c=e}),a.onload=function(){c&&d&&(f=!1,n)&&n(c),o&&a.remove()},a.onerror=function(e){d&&(f=!1,n)&&n(e),o&&a.remove()},window.setTimeout(function(e){f&&(d=!1,n)&&n(null)},u),a.src=e+i,document.head.appendChild(a)}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){var n=document.querySelector(".p-".concat(e));n?(t&&t(n),n.classList.remove("HIDE")):(0,r.default)({url:"/asset/part/".concat(e,".html"),method:"get",dataType:"document",success:function(e){t&&t(e.body.firstElementChild)}})};var r=(n=e("./ajax.js"))&&n.__esModule?n:{default:n}},{"./ajax.js":1}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("./fetch.js"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(0,r(e("../plugin/md5.min.js")).default)();var u=/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;n.default={delay:function(e,t){window.setTimeout(t,e)},run:function(e,t,n){e(function(e){t&&(u.test(window.navigator.userAgent)?t.mobile&&t.mobile(n):t.desktop&&t.desktop(n))})},runOnMobile:function(e){u.test(window.navigator.userAgent)&&e&&e(window.navigator.userAgent)},runOnDesktop:function(e){u.test(window.navigator.userAgent)||e&&e(window.navigator.userAgent)},getPageKey:function(e){var t="",n=window.location.pathname;return/^\/(archives|categories|tags)\//.test(n)?t="archive":/^(\/|\/index.html)$/.test(n)?t="home":2===(n=n.match(/^\/([a-zA-Z0-9_\-]+)/)).length&&(t=n[1]),t},forEach:function(e,t){if("object"===o(e)&&e.length)for(var n=0;n<e.length&&(!t||!t(e[n],n));n++);},forIn:function(e,t){if("object"===o(e))for(var n in e)if(e.hasOwnProperty(n)&&t&&t(e[n],n))break},layoutParts:function(t){var e=document.querySelector('meta[name="layout-parts"]');if(e){e=e.getAttribute("content");try{t&&t(JSON.parse(e))}catch(e){t&&t([])}}},decodePass:function(e,t){if(isNaN(t))return{appid:"",appkey:""};var n="",r=e.split(":");if(r[1])for(var o=r[1].substr(0,parseInt(r[0])).split(""),u=r[1].substr(parseInt(r[0])).split(""),a=0;a<r[1].length;a++)n+=(a%2==0?o:u).shift();return{appid:n.substr(0,t),appkey:n.substr(t)}},baiduTranslate:function(e,t,n,r){var o,u,a;return"function"==typeof r&&("string"!=typeof t||"string"!=typeof n?r({error:"PARAMS ERROR / 参数错误"}):(o="//api.fanyi.baidu.com/api/trans/vip/translate",window.location.protocol.includes("https")&&(o="//fanyi-api.baidu.com/api/trans/vip/translate"),u=Date.now(),a=md5(e.appid+t+u+e.appkey),void(0===t.length?r({error:'<p class="error">EMPTY QUERY / 空查询</p>'}):t.length<100?(0,i.default)(o,{q:t,appid:e.appid,salt:u,from:"auto",to:n,sign:a,callback:"baiduTranslate"+u},function(e){e&&e.trans_result?r({result:'<p class="result">RESULT / 翻译结果：</p><p class="content">'+e.trans_result[0].dst+"</p>"}):r({error:'<p class="error">WRONG QUERY / 错查询</p>'})},!0):r({error:'<p class="error">HUGE QUERY / 巨查询</p>'}))))},getChromeVersion:function(e){var t;return/Chrome/i.test(window.navigator.userAgent)?1<(t=window.navigator.userAgent.match(/Chrome\/([0-9.]+)/i)).length?parseInt(t[1]):void 0:0}}},{"../plugin/md5.min.js":6,"./fetch.js":2}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("../common/part.js")),o=u(e("../common/util.js"));function u(e){return e&&e.__esModule?e:{default:e}}var a="menus",i=null;n.default={tag:a,init:function(e,t){(0,r.default)(a,function(e){i=e,document.querySelector(a)&&document.querySelector(a).replaceWith(i),t&&t(i)})},update:function(e){var t,n;i&&((t=i.querySelector("[data-menu-key].active"))&&t.classList.remove("active"),n=o.default.getPageKey(),o.default.forEach(i.querySelectorAll("[data-menu-key]"),function(e){if(n===e.getAttribute("data-menu-key"))return e.classList.add("active"),!0}))}}},{"../common/part.js":3,"../common/util.js":4}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default=void 0,n.default=function(e){function d(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function i(e,t,n,r,o,u){return d((t=d(d(t,e),d(r,u)))<<o|t>>>32-o,n)}function l(e,t,n,r,o,u,a){return i(t&n|~t&r,e,t,o,u,a)}function p(e,t,n,r,o,u,a){return i(t&r|n&~r,e,t,o,u,a)}function m(e,t,n,r,o,u,a){return i(t^n^r,e,t,o,u,a)}function y(e,t,n,r,o,u,a){return i(n^(t|~r),e,t,o,u,a)}function a(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n,r,o,u,a=1732584193,i=-271733879,s=-1732584194,c=271733878,f=0;f<e.length;f+=16)i=y(i=y(i=y(i=y(i=m(i=m(i=m(i=m(i=p(i=p(i=p(i=p(i=l(i=l(i=l(i=l(r=i,s=l(o=s,c=l(u=c,a=l(n=a,i,s,c,e[f],7,-680876936),i,s,e[f+1],12,-389564586),a,i,e[f+2],17,606105819),c,a,e[f+3],22,-1044525330),s=l(s,c=l(c,a=l(a,i,s,c,e[f+4],7,-176418897),i,s,e[f+5],12,1200080426),a,i,e[f+6],17,-1473231341),c,a,e[f+7],22,-45705983),s=l(s,c=l(c,a=l(a,i,s,c,e[f+8],7,1770035416),i,s,e[f+9],12,-1958414417),a,i,e[f+10],17,-42063),c,a,e[f+11],22,-1990404162),s=l(s,c=l(c,a=l(a,i,s,c,e[f+12],7,1804603682),i,s,e[f+13],12,-40341101),a,i,e[f+14],17,-1502002290),c,a,e[f+15],22,1236535329),s=p(s,c=p(c,a=p(a,i,s,c,e[f+1],5,-165796510),i,s,e[f+6],9,-1069501632),a,i,e[f+11],14,643717713),c,a,e[f],20,-373897302),s=p(s,c=p(c,a=p(a,i,s,c,e[f+5],5,-701558691),i,s,e[f+10],9,38016083),a,i,e[f+15],14,-660478335),c,a,e[f+4],20,-405537848),s=p(s,c=p(c,a=p(a,i,s,c,e[f+9],5,568446438),i,s,e[f+14],9,-1019803690),a,i,e[f+3],14,-187363961),c,a,e[f+8],20,1163531501),s=p(s,c=p(c,a=p(a,i,s,c,e[f+13],5,-1444681467),i,s,e[f+2],9,-51403784),a,i,e[f+7],14,1735328473),c,a,e[f+12],20,-1926607734),s=m(s,c=m(c,a=m(a,i,s,c,e[f+5],4,-378558),i,s,e[f+8],11,-2022574463),a,i,e[f+11],16,1839030562),c,a,e[f+14],23,-35309556),s=m(s,c=m(c,a=m(a,i,s,c,e[f+1],4,-1530992060),i,s,e[f+4],11,1272893353),a,i,e[f+7],16,-155497632),c,a,e[f+10],23,-1094730640),s=m(s,c=m(c,a=m(a,i,s,c,e[f+13],4,681279174),i,s,e[f],11,-358537222),a,i,e[f+3],16,-722521979),c,a,e[f+6],23,76029189),s=m(s,c=m(c,a=m(a,i,s,c,e[f+9],4,-640364487),i,s,e[f+12],11,-421815835),a,i,e[f+15],16,530742520),c,a,e[f+2],23,-995338651),s=y(s,c=y(c,a=y(a,i,s,c,e[f],6,-198630844),i,s,e[f+7],10,1126891415),a,i,e[f+14],15,-1416354905),c,a,e[f+5],21,-57434055),s=y(s,c=y(c,a=y(a,i,s,c,e[f+12],6,1700485571),i,s,e[f+3],10,-1894986606),a,i,e[f+10],15,-1051523),c,a,e[f+1],21,-2054922799),s=y(s,c=y(c,a=y(a,i,s,c,e[f+8],6,1873313359),i,s,e[f+15],10,-30611744),a,i,e[f+6],15,-1560198380),c,a,e[f+13],21,1309151649),s=y(s,c=y(c,a=y(a,i,s,c,e[f+4],6,-145523070),i,s,e[f+11],10,-1120210379),a,i,e[f+2],15,718787259),c,a,e[f+9],21,-343485551),a=d(a,n),i=d(i,r),s=d(s,o),c=d(c,u);return[a,i,s,c]}function s(e){for(var t="",n=32*e.length,r=0;r<n;r+=8)t+=String.fromCharCode(e[r>>5]>>>r%32&255);return t}function c(e){var t=[];for(t[(e.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;for(var n=8*e.length,r=0;r<n;r+=8)t[r>>5]|=(255&e.charCodeAt(r/8))<<r%32;return t}function r(e){for(var t,n="",r=0;r<e.length;r+=1)t=e.charCodeAt(r),n+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return n}function f(e){return unescape(encodeURIComponent(e))}function o(e){return s(a(c(e=f(e)),8*e.length))}function u(e,t){var n,e=f(e),t=f(t),r=c(e),o=[],u=[];for(o[15]=u[15]=void 0,16<r.length&&(r=a(r,8*e.length)),n=0;n<16;n+=1)o[n]=909522486^r[n],u[n]=1549556828^r[n];return e=a(o.concat(c(t)),512+8*t.length),s(a(u.concat(e),640))}window.md5=function(e,t,n){return t?n?u(t,e):r(u(t,e)):n?o(e):r(o(e))}}},{}]},{},[5]);