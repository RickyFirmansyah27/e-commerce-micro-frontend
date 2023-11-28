/*! For license information please see 999.js.LICENSE.txt */
(self.webpackChunkproduct=self.webpackChunkproduct||[]).push([[999,600],{137:(t,e,r)=>{"use strict";function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}r.d(e,{Z:()=>o})},391:(t,e,r)=>{"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,s=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(s.push(n.value),s.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:()=>o})},591:(t,e,r)=>{var n=r(8).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),s=new O(n||[]);return a(i,"_invoke",{value:_(t,r,s)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p={};function x(){}function y(){}function m(){}var v={};f(v,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==r&&i.call(b,c)&&(v=b);var w=m.prototype=x.prototype=Object.create(v);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,a,s,c){var l=h(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=L(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:y,configurable:!0}),y.displayName=f(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},j(N.prototype),f(N.prototype,l,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new N(d(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(w),f(w,u,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},757:(t,e,r)=>{var n=r(591)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},600:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>i});var n=r(52),o=r(893);const i=function(t){var e=t.options;return(0,o.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,o.jsx)("div",{className:"flex items-center space-x-2 text-gray-400 text-sm",children:e.map((function(t,e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Link,{to:"/",className:"hover:underline hover:text-gray-600",children:t}),(0,o.jsx)("span",{children:(0,o.jsx)("svg",{className:"h-5 w-5 leading-none text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,o.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})})})," "]})}))})})}},999:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>h});var n=r(137),o=r(391),i=r(757),a=r.n(i),s=r(52),c=r(600),l=r(416),u=r(879),f=r.n(u),d=r(893);const h=function(t){t.loading,t.setLoading;var e=(0,s.useParams)().productId,r=(0,l.useState)({}),i=(0,o.Z)(r,2),u=i[0],h=i[1];function p(){return(p=(0,n.Z)(a().mark((function t(){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("https://fakestoreapi.com/products/"+e);case 2:r=t.sent,n=r.data,h(n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,l.useEffect)((function(){Object.keys(u).length||function(){p.apply(this,arguments)}()}),[u]),(0,d.jsx)("div",{className:"antialiased",children:(0,d.jsxs)("div",{className:"py-6",children:[(0,d.jsx)(c.default,{options:["Home"]}),(0,d.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6",children:(0,d.jsxs)("div",{className:"flex flex-col md:flex-row -mx-4",children:[(0,d.jsx)("div",{className:"md:flex-1 px-4",children:(0,d.jsxs)("div",{"x-data":"{ image: 1 }","x-cloak":!0,children:[(0,d.jsx)("div",{className:"h-64 md:h-80 rounded-lg bg-gray-100 mb-4",children:(0,d.jsx)("div",{"x-show":"image === 1",className:"h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center",children:(0,d.jsx)("img",{src:u.image,alt:"Product",className:"h-72 w-full object-contain object-center"})})}),(0,d.jsx)("div",{className:"flex -mx-2 mb-4"})]})}),(0,d.jsxs)("div",{className:"md:flex-1 px-4",children:[(0,d.jsx)("h2",{className:"mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl",children:null==u?void 0:u.title}),(0,d.jsxs)("p",{className:"text-gray-500 text-sm",children:["By ",(0,d.jsx)("a",{href:"#",className:"text-indigo-600 hover:underline",children:null==u?void 0:u.category})]}),(0,d.jsxs)("div",{className:"flex items-center space-x-4 my-4",children:[(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"rounded-lg bg-gray-100 flex py-2 px-3",children:[(0,d.jsx)("span",{className:"text-indigo-400 mr-1 mt-1",children:"$"}),(0,d.jsx)("span",{className:"font-bold text-indigo-600 text-3xl",children:null==u?void 0:u.price})]})}),(0,d.jsxs)("div",{className:"flex-1",children:[(0,d.jsx)("p",{className:"text-green-500 text-xl font-semibold",children:"Save 12%"}),(0,d.jsx)("p",{className:"text-gray-400 text-sm",children:"Inclusive of all Taxes."})]})]}),(0,d.jsxs)("p",{className:"text-gray-500",children:[null==u?void 0:u.description,"."]}),(0,d.jsxs)("div",{className:"flex py-4 space-x-4",children:[(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)("div",{className:"text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold",children:"Qty"}),(0,d.jsxs)("select",{className:"cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1",children:[(0,d.jsx)("option",{children:"1"}),(0,d.jsx)("option",{children:"2"}),(0,d.jsx)("option",{children:"3"}),(0,d.jsx)("option",{children:"4"}),(0,d.jsx)("option",{children:"5"})]})]}),(0,d.jsx)(s.Link,{to:"/orders/checkout/".concat(e),state:{product:u},children:(0,d.jsx)("button",{type:"button",className:"h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white",children:"Buy Now"})})]})]})]})})]})})}},251:(t,e,r)=>{"use strict";var n=r(416),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)a.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:o,type:t,key:l,ref:u,props:i,_owner:s.current}}e.Fragment=i,e.jsx=l,e.jsxs=l},893:(t,e,r)=>{"use strict";t.exports=r(251)}}]);