!function n(o,i,a){function u(t,e){if(!i[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(s)return s(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=i[t]={exports:{}},o[t][0].call(r.exports,function(e){return u(o[t][1][e]||e)},r,r.exports,n,o,i,a)}return i[t].exports}for(var s="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=(e=e("./storage.js"))&&e.__esModule?e:{default:e};var e=/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(window.navigator.userAgent),o=/^(zh)/i.test(window.navigator.browserLanguage||window.navigator.language||"zh"),i=Object.assign({closeDrawer:e,closeAside:!1,skin:"default",langshift:!o,night:!1,transfigure:!1,lyride:!0,autoplay:!1},n.default.get("config"));r.default={get:function(e){return i[e]},set:function(e,t){Object.keys(i).includes(e)&&(i[e]=t,n.default.set("config",i))}}},{"./storage.js":2}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=window.localStorage;r.default={self:n,get:function(t){t=n.getItem(t);if(t)try{t=JSON.parse(t)}catch(e){isNaN(t)||(t=parseFloat(t))}return t},set:function(t,r){try{n.setItem(t,JSON.stringify(r))}catch(e){n.setItem(t,r)}},clear:function(e){n.clear()}}},{}]},{},[1]);