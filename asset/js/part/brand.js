!function o(n,u,a){function s(t,e){if(!u[t]){if(!n[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(i)return i(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=u[t]={exports:{}},n[t][0].call(r.exports,function(e){return s(n[t][1][e]||e)},r,r.exports,o,n,u,a)}return u[t].exports}for(var i="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(t){if(t.method&&t.url){var e=new XMLHttpRequest;if(e.open(t.method,t.url+"?"+function(e){if("object"!==n(e))return"";var t,r,o=[];for(t in e)e.hasOwnProperty(t)&&(r=e[t],o.push(window.encodeURIComponent(t)+"="+window.encodeURIComponent(r)));return o.join("&")}(t.data)),e.timeout=3e4,"post"===t.method.toLowerCase()&&e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.headers)for(var r in t.headers)t.headers.hasOwnProperty(r)&&e.setRequestHeader(r,t.headers[r]);t.timeout&&(e.timeout=t.timeout),t.dataType&&(e.responseType=t.dataType),e.addEventListener("readystatechange",function(){4===e.readyState&&200===e.status&&e.response?t.success&&t.success(e.response):400<e.status&&t.error(e.status)}),t.error&&(e.addEventListener("error",function(e){t.error(e)}),e.addEventListener("timeout",function(e){t.error(e)})),e.send(t.data||null)}}},{}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){var r=document.querySelector(".p-".concat(e));r?(t&&t(r),r.classList.remove("HIDE")):(0,o.default)({url:"/asset/part/".concat(e,".html"),method:"get",dataType:"document",success:function(e){t&&t(e.body.firstElementChild)}})};var o=(r=e("./ajax.js"))&&r.__esModule?r:{default:r}},{"./ajax.js":1}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=(e=e("../common/part.js"))&&e.__esModule?e:{default:e};var n="brand",u=null;r.default={tag:n,init:function(t,r){(0,o.default)(n,function(e){u=e,document.querySelector(n)&&document.querySelector(n).replaceWith(u),t&&(u.querySelector(".p-brand-posts-count").innerText=t.numOfPosts,u.querySelector(".p-brand-categories-count").innerText=t.numOfCategories,u.querySelector(".p-brand-tags-count").innerText=t.numOfTags),r&&r(u)})}}},{"../common/part.js":2}]},{},[3]);