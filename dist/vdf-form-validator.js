!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VDFValidator",[],e):"object"==typeof exports?exports.VDFValidator=e():t.VDFValidator=e()}(self,(function(){return function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=V(i,r);if(l){if(l===h)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?p:v,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",v="suspendedYield",d="executing",p="completed",h={};function y(){}function m(){}function g(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=g.prototype=y.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,l){var c=s(t[o],t,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,l)}))}l(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function V(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,V(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=g,c(E,"constructor",g),c(g,"constructor",m),m.displayName=c(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},k(S.prototype),c(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),c(E,l,"Generator"),c(E,a,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return l.type="throw",l.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},523:function(t){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var r,n=t.HTMLElement||t.Element,o={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},a=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(r=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?p.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):o.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?o.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;p.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var r=v(this),n=r.getBoundingClientRect(),a=this.getBoundingClientRect();r!==e.body?(p.call(this,r,r.scrollLeft+a.left-n.left,r.scrollTop+a.top-n.top),"fixed"!==t.getComputedStyle(r).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function s(e,r){var n=t.getComputedStyle(e,null)["overflow"+r];return"auto"===n||"scroll"===n}function f(t){var e=u(t,"Y")&&s(t,"Y"),r=u(t,"X")&&s(t,"X");return e||r}function v(t){for(;t!==e.body&&!1===f(t);)t=t.parentNode||t.host;return t}function d(e){var r,n,o,i,l=(a()-e.startTime)/468;i=l=l>1?1:l,r=.5*(1-Math.cos(Math.PI*i)),n=e.startX+(e.x-e.startX)*r,o=e.startY+(e.y-e.startY)*r,e.method.call(e.scrollable,n,o),n===e.x&&o===e.y||t.requestAnimationFrame(d.bind(t,e))}function p(r,n,i){var c,u,s,f,v=a();r===e.body?(c=t,u=t.scrollX||t.pageXOffset,s=t.scrollY||t.pageYOffset,f=o.scroll):(c=r,u=r.scrollLeft,s=r.scrollTop,f=l),d({scrollable:c,method:f,startTime:v,startX:u,startY:s,x:n,y:i})}}}}()}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var n={};return function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}function o(r){return function(e){if(Array.isArray(e))return t(e)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||e(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e,r,n,o,a,i){try{var l=t[a](i),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function l(t){a(i,n,o,l,c,"next",t)}function c(t){a(i,n,o,l,c,"throw",t)}l(void 0)}))}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}r.d(n,{default:function(){return I}});var s=r(757),f=r(523);function v(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e,r,n){return g(t,e),y(r,"set"),function(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}(t,r,n),n}function h(t,e,r){return g(t,e),y(r,"get"),function(t,e){return e.get?e.get.call(t):e.value}(t,r)}function y(t,e){if(void 0===t)throw new TypeError("attempted to "+e+" private static field before its declaration")}function m(t,e,r){return g(t,e),r}function g(t,e){if(t!==e)throw new TypeError("Private static access of wrong provenance")}var b=function(){function t(){l(this,t)}var r,n;return u(t,null,[{key:"run",value:(n=i(s.mark((function e(r){var n,o,a,i,l,c,u,f=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},o=r.form,a=n.autoHandleButtons,i=void 0===a||a,l=n.silent,c=void 0!==l&&l,i&&m(t,t,x).call(t,o),m(t,t,w).call(t,"onBeforeValidation",r),u={isValid:!1,data:{}},e.prev=6,e.next=9,t.executeValidation(o);case 9:console.log("VDFValidator: form validation succeeded!"),m(t,t,w).call(t,"onValidated",r),u.isValid=!0,e.next=20;break;case 14:e.prev=14,e.t0=e.catch(6),console.log("VDFValidator: form validation failed!"),c||(t.showErrors(e.t0.message),t.scrollToFirstErrorField(e.t0.message)),m(t,t,w).call(t,"onFailure",r,e.t0),u.data=JSON.parse(e.t0.message);case 20:return e.prev=20,i&&m(t,t,E).call(t,o),m(t,t,w).call(t,"onCompletion",r),e.finish(20);case 24:return e.abrupt("return",u);case 25:case"end":return e.stop()}}),e,null,[[6,14,20,24]])}))),function(t){return n.apply(this,arguments)})},{key:"init",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&(f.polyfill(),o(document.querySelectorAll("form.vform")).forEach((function(e){return m(t,t,S).call(t,e)})))}},{key:"registerForm",value:function(e){m(t,t,k).call(t,e),m(t,t,S).call(t,e)}},{key:"executeValidation",value:(r=i(s.mark((function e(r){var n,a,i,l,c,u,f,d,p,h,y,m;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Array.isArray(r),a=n?r:o(r.querySelectorAll("[class*=vfield-]")),i={},l=v(a),e.prev=4,l.s();case 6:if((c=l.n()).done){e.next=38;break}u=c.value,f=t.getVDFValidators(u),d=v(f),e.prev=10,d.s();case 12:if((p=d.n()).done){e.next=28;break}return h=p.value,e.prev=14,e.next=17,t.validate(u,h);case 17:e.next=26;break;case 19:return e.prev=19,e.t0=e.catch(14),console.log('"'.concat(u.name,'" not valid')),i.hasOwnProperty(u.name)||(i[u.name]=[]),y=t.parseValidator(h),m=y.validatorName,i[u.name].push((s={},g=m,b=e.t0,g in s?Object.defineProperty(s,g,{value:b,enumerable:!0,configurable:!0,writable:!0}):s[g]=b,s)),e.abrupt("break",28);case 26:e.next=12;break;case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(10),d.e(e.t1);case 33:return e.prev=33,d.f(),e.finish(33);case 36:e.next=6;break;case 38:e.next=43;break;case 40:e.prev=40,e.t2=e.catch(4),l.e(e.t2);case 43:return e.prev=43,l.f(),e.finish(43);case 46:if(!Object.keys(i).length){e.next=48;break}throw new Error(JSON.stringify(i));case 48:case"end":return e.stop()}var s,g,b}),e,null,[[4,40,43,46],[10,30,33,36],[14,19]])}))),function(t){return r.apply(this,arguments)})},{key:"getVDFValidators",value:function(t){return t.className.split(" ").filter((function(t){return/^vfield-/.test(t)})).map((function(t){return t.replace("vfield-","")}))}},{key:"validate",value:function(e,r){return this.resetError(e),new Promise((function(n,o){var a=t.parseValidator(r),i=a.validatorName,l=a.params;if("function"==typeof F[i]){var c=F[i];if(c.length<4){var u=c(e,l);!0===u?n(!0):o(u)}else c(e,l,n,o)}else o('Undefined validator "'.concat(i,'"'))}))}},{key:"resetError",value:function(t){t.classList.remove("verror"),t.style.removeProperty("border");var e=t.parentNode.querySelector(".verrormsg");e&&e.remove();var r=t.name.replace(/[^a-zA-Z]/,"");(e=o(t.form.querySelectorAll("[class*=verror-".concat(r,"]")))).length&&e.map((function(t){return t.style.display="none"}))}},{key:"showErrors",value:function(t){for(var r=JSON.parse(t),n=0,o=Object.entries(r);n<o.length;n++){var a=(m=o[n],g=2,function(t){if(Array.isArray(t))return t}(m)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){l=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(m,g)||e(m,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],l=a[1],c=document.querySelector("[name=".concat(i,"]"));if(c){var u,s;c.classList.add("verror"),c.style.borderColor="red";var f=Object.keys(l[0])[0],v=l[0][f],d=c.name.replace(/[^a-zA-Z]/,""),p=c.form.querySelector(".verror-".concat(d));p||(p=c.form.querySelector(".verror-".concat(d,"-").concat(f)));var h=null!==(u=null!==(s=c.getAttribute("data-verror-".concat(f)))&&void 0!==s?s:c.getAttribute("data-verror"))&&void 0!==u?u:v;if(h&&!p){var y=document.createElement("span");y.className="verrormsg",y.style.color="red",y.style.display="block",y.innerHTML=h,c.parentNode.appendChild(y)}else p&&(p.style.display="inline")}}var m,g}},{key:"parseValidator",value:function(e){var r=e.split("-");return{validatorName:r.shift(),params:r.map((function(e){return/^#/.test(e)?h(t,t,j)[e.substring(1)]:e}))}}},{key:"defineFunction",value:function(t,e){F[t]=e}},{key:"defineVariable",value:function(e,r){h(t,t,j)[e]=r}},{key:"onBeforeValidation",value:function(e){h(t,t,V).push(e)}},{key:"resetOnBeforeValidation",value:function(){p(t,t,V,[])}},{key:"onValidated",value:function(e){h(t,t,L).push(e)}},{key:"resetOnValidated",value:function(){p(t,t,L,[])}},{key:"onFailure",value:function(e){h(t,t,O).push(e)}},{key:"resetOnFailure",value:function(){p(t,t,O,[])}},{key:"onCompletion",value:function(e){h(t,t,T).push(e)}},{key:"resetOnCompletion",value:function(){p(t,t,T,[])}},{key:"scrollToFirstErrorField",value:function(t){if((t=Object.keys(JSON.parse(t))).length){var e=document.querySelector("[name=".concat(t[0],"]"));window.scrollTo({top:e.parentNode.offsetTop,behavior:"smooth"});var r=null;window.addEventListener("scroll",(function t(){null!==r&&clearTimeout(r),r=setTimeout((function(){e.focus(),window.removeEventListener("scroll",t)}),150)}),!1)}}}]),t}();function w(t,e,r){var n={onBeforeValidation:h(b,b,V),onValidated:h(b,b,L),onFailure:h(b,b,O),onCompletion:h(b,b,T)};n[t]&&n[t].map((function(t){return t(e,r)}))}function x(t){o(t.querySelectorAll("input[type=submit], button")).map((function(t){return t.setAttribute("disabled",!0)}))}function E(t){o(t.querySelectorAll("input[type=submit], button")).map((function(t){return t.removeAttribute("disabled")}))}function k(t){f.polyfill(),t.addEventListener("submit",(function(e){m(b,b,x).call(b,t),m(b,b,w).call(b,"onBeforeValidation",e),b.executeValidation(e.target).then((function(){console.log("VDFValidator: form validation succeeded!"),m(b,b,w).call(b,"onValidated",e)})).catch((function(t){console.log("VDFValidator: form validation failed!"),b.showErrors(t.message),b.scrollToFirstErrorField(t.message),m(b,b,w).call(b,"onFailure",e,t),e.preventDefault()})).finally((function(){m(b,b,E).call(b,t),m(b,b,w).call(b,"onCompletion",e)}))}))}function S(t){var e=function(t){b.executeValidation([t]).then((function(){var e=h(b,b,A).findIndex((function(e){return e===t.name}));e>=0&&h(b,b,A).splice(e,1)})).catch((function(t){b.showErrors(t.message)}))},r=function(t){var r=t.target;h(b,b,A).includes(r.name)||h(b,b,A).push(r.name),"checkbox"!==t.target.type&&"radio"!==t.target.type||e(t.target)},n=function(t){h(b,b,A).includes(t.target.name)&&e(t.target)};o(t.querySelectorAll("[class*=vfield-]")).map((function(t){return t.addEventListener("change",r)})),o(t.querySelectorAll("[class*=vfield-]")).map((function(t){return t.addEventListener("blur",n)}))}var V={writable:!0,value:[]},L={writable:!0,value:[]},O={writable:!0,value:[]},T={writable:!0,value:[]},j={writable:!0,value:{}},A={writable:!0,value:[]},F=function(){function t(){l(this,t)}return u(t,null,[{key:"required",value:function(t,e,r,n){var o=t.value.trim(),a="checkbox"==t.type||"radio"==t.type;a&&t.checked||!a&&o?r():n("Required field")}},{key:"email",value:function(t,e,r,n){var o=t.value.trim();!o.length||/^\S+@\S+$/.test(o)?r():n("Invalid e-mail address")}},{key:"min",value:function(t,e,r,n){var o=t.value.trim().length,a=parseInt(e[0]);!o||o>=a?r():n("Minimum of ".concat(a," characters"))}},{key:"max",value:function(t,e,r,n){var o=t.value.trim().length,a=parseInt(e[0]);o<=a?r():n("Maximum of ".concat(a," characters"))}},{key:"equalto",value:function(t,e,r,n){var o=t.value.trim(),a=t.form.querySelector("[name=".concat(e[0],"]"));if(a)return o===a.value.trim()?r():(console.log("Field value (".concat(t.name,") not equal to the target's value (").concat(a.name,")")),n("Value not valid"));console.log("Target field (".concat(a.name,") is not defined")),n("Value not valid")}}]),t}();"undefined"!=typeof window&&(console.log("VDFValidator is imported on browser"),window.addEventListener("load",(function(){console.log("VDFValidator is registering the forms"),o(document.querySelectorAll("form.vform")).forEach((function(t){return b.registerForm(t)}))})));var I=b}(),n.default}()}));