!function n(o,u,a){function i(t,e){if(!u[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(c)return c(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=u[t]={exports:{}},o[t][0].call(r.exports,function(e){return i(o[t][1][e]||e)},r,r.exports,n,o,u,a)}return u[t].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)i(a[e]);return i}({1:[function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(t){if(t.method&&t.url){var e=new XMLHttpRequest;if(e.open(t.method,t.url+"?"+function(e){if("object"!==o(e))return"";var t,r,n=[];for(t in e)e.hasOwnProperty(t)&&(r=e[t],n.push(window.encodeURIComponent(t)+"="+window.encodeURIComponent(r)));return n.join("&")}(t.data)),e.timeout=3e4,"post"===t.method.toLowerCase()&&e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.headers)for(var r in t.headers)t.headers.hasOwnProperty(r)&&e.setRequestHeader(r,t.headers[r]);t.timeout&&(e.timeout=t.timeout),t.dataType&&(e.responseType=t.dataType),e.addEventListener("readystatechange",function(){4===e.readyState&&200===e.status&&e.response?t.success&&t.success(e.response):400<e.status&&t.error(e.status)}),t.error&&(e.addEventListener("error",function(e){t.error(e)}),e.addEventListener("timeout",function(e){t.error(e)})),e.send(t.data||null)}}},{}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){var r=document.querySelector(".p-".concat(e));r?(t&&t(r),r.classList.remove("HIDE")):(0,n.default)({url:"/asset/part/".concat(e,".html"),method:"get",dataType:"document",success:function(e){t&&t(e.body.firstElementChild)}})};var n=(r=e("./ajax.js"))&&r.__esModule?r:{default:r}},{"./ajax.js":1}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=(e=e("../common/part.js"))&&e.__esModule?e:{default:e};var u="page",a=null;r.default={tag:u,init:function(t,o){(0,n.default)(u,function(e){var r,n;a=e,document.querySelector(u)&&document.querySelector(u).replaceWith(a),t&&(t.title&&(a.querySelector(".p-page-title").innerText=t.title),t.content&&""!==t.content.trim()?a.querySelector(".p-page-main").innerHTML=t.content:(a.querySelector(".p-page-title").style.borderWidth=0,a.querySelector(".p-page-main").style.display="none"),r=a.querySelectorAll("script"),n=0,function t(){var e;n<r.length&&(e=document.createElement("script"),""===r[n].src?(e.innerHTML=r[n].innerHTML,r[n].parentElement.append(e),r[n].remove(),n+=1,t()):(e.async=!0,e.src=r[n].src,e.onload=function(e){n+=1,t()},r[n].parentElement.append(e),r[n].remove()))}(),a.querySelectorAll('link[rel~="stylesheet"]').forEach(function(e){var t=document.createElement("link");t.ref="stylesheet",t.href=e.href,e.parentElement.append(t),e.remove()})),o&&o(a)})}}},{"../common/part.js":2}]},{},[3]);