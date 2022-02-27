!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VDFValidator",[],e):"object"==typeof exports?exports.VDFValidator=e():t.VDFValidator=e()}(self,(function(){return function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=s;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return F()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=L(i,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?d:v,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s="suspendedStart",v="suspendedYield",h="executing",d="completed",p={};function y(){}function m(){}function g(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(V([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=g.prototype=y.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,u){var c=f(t[o],t,a);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function V(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}return m.prototype=g,c(E,"constructor",g),c(g,"constructor",m),m.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},k(S.prototype),c(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),c(E,u,"Generator"),c(E,a,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=V,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:V(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var n={};return function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}function o(r){return function(e){if(Array.isArray(e))return t(e)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||e(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}r.d(n,{default:function(){return g}});var l=r(757),f=r.n(l);function s(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function h(t,e,r,n){return m(t,e),p(r,"set"),function(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}(t,r,n),n}function d(t,e,r){return m(t,e),p(r,"get"),function(t,e){return e.get?e.get.call(t):e.value}(t,r)}function p(t,e){if(void 0===t)throw new TypeError("attempted to "+e+" private static field before its declaration")}function y(t,e,r){return m(t,e),r}function m(t,e){if(t!==e)throw new TypeError("Private static access of wrong provenance")}var g=function(){function t(){i(this,t)}var r,n;return c(t,null,[{key:"registerForm",value:function(e){y(t,t,E).call(t,e),y(t,t,k).call(t,e)}},{key:"executeValidation",value:(r=f().mark((function e(r){var n,a,i,u,c,l,v,h,d,p;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Array.isArray(r),a=n?r:o(r.querySelectorAll("[class*=vfield-]")),i={},u=s(a),e.prev=4,u.s();case 6:if((c=u.n()).done){e.next=36;break}l=c.value,v=t.getVDFValidators(l),h=s(v),e.prev=10,h.s();case 12:if((d=h.n()).done){e.next=26;break}return p=d.value,e.prev=14,e.next=17,t.validate(l,p);case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(14),console.log(e.t0),i.hasOwnProperty(l.name)||(i[l.name]=[]),i[l.name].push(p);case 24:e.next=12;break;case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(10),h.e(e.t1);case 31:return e.prev=31,h.f(),e.finish(31);case 34:e.next=6;break;case 36:e.next=41;break;case 38:e.prev=38,e.t2=e.catch(4),u.e(e.t2);case 41:return e.prev=41,u.f(),e.finish(41);case 44:if(!Object.keys(i).length){e.next=46;break}throw new Error(JSON.stringify(i));case 46:case"end":return e.stop()}}),e,null,[[4,38,41,44],[10,28,31,34],[14,19]])})),n=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function u(t){a(i,n,o,u,c,"next",t)}function c(t){a(i,n,o,u,c,"throw",t)}u(void 0)}))},function(t){return n.apply(this,arguments)})},{key:"getVDFValidators",value:function(t){return t.className.split(" ").filter((function(t){return/^vfield-/.test(t)})).map((function(t){return t.replace("vfield-","")}))}},{key:"validate",value:function(e,r){return this.resetError(e),new Promise((function(n,o){var a=t.parseValidator(r),i=a.validatorName,u=a.params;"function"==typeof F[i]?F[i](e,u,n,o):o('Undefined validator "'.concat(i,'"'))}))}},{key:"resetError",value:function(t){t.style.removeProperty("border");var e=t.parentNode.querySelector(".verrormsg");e&&e.remove();var r=t.name.replace(/[^a-zA-Z]/,"");(e=o(t.form.querySelectorAll("[class*=verror-".concat(r,"]")))).length&&e.map((function(t){return t.style.display="none"}))}},{key:"showErrors",value:function(t){for(var r=JSON.parse(t),n=0,o=Object.entries(r);n<o.length;n++){var a=(p=o[n],y=2,function(t){if(Array.isArray(t))return t}(p)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(p,y)||e(p,y)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1],c=document.querySelector("[name=".concat(i,"]"));if(c){var l;c.style.border="1px solid red";var f=null!==(l=c.getAttribute("data-verror-".concat(u[0].split("-")[0])))&&void 0!==l?l:c.getAttribute("data-verror");if(f){var s=document.createElement("span");s.className="verrormsg",s.style.color="red",s.innerHTML=f,c.parentNode.insertBefore(s,c.nextSibling)}else{var v=c.name.replace(/[^a-zA-Z]/,""),h=c.form.querySelector(".verror-".concat(v));if(!h){var d=u[0].split("-")[0];h=c.form.querySelector(".verror-".concat(v,"-").concat(d))}h&&(h.style.display="inline")}}}var p,y}},{key:"parseValidator",value:function(e){var r=e.split("-");return{validatorName:r.shift(),params:r.map((function(e){return/^#/.test(e)?d(t,t,j)[e.substring(1)]:e}))}}},{key:"defineFunction",value:function(t,e){F[t]=e}},{key:"defineVariable",value:function(e,r){d(t,t,j)[e]=r}},{key:"onBeforeValidation",value:function(e){d(t,t,S).push(e)}},{key:"resetOnBeforeValidation",value:function(){h(t,t,S,[])}},{key:"onValidated",value:function(e){d(t,t,L).push(e)}},{key:"resetOnValidated",value:function(){h(t,t,L,[])}},{key:"onFailure",value:function(e){d(t,t,A).push(e)}},{key:"resetOnFailure",value:function(){h(t,t,A,[])}},{key:"onCompletion",value:function(e){d(t,t,O).push(e)}},{key:"resetOnCompletion",value:function(){h(t,t,O,[])}}]),t}();function b(t,e,r){var n={onBeforeValidation:d(g,g,S),onValidated:d(g,g,L),onFailure:d(g,g,A),onCompletion:d(g,g,O)};n[t]&&n[t].map((function(t){return t(e,r)}))}function w(t){o(t.querySelectorAll("input[type=submit], button")).map((function(t){return t.setAttribute("disabled",!0)}))}function x(t){o(t.querySelectorAll("input[type=submit], button")).map((function(t){return t.removeAttribute("disabled")}))}function E(t){t.addEventListener("submit",(function e(r){r.preventDefault(),y(g,g,w).call(g,t),y(g,g,b).call(g,"onBeforeValidation",r.target),g.executeValidation(r.target).then((function(){console.log("VDFValidator: form validation succeeded!"),y(g,g,b).call(g,"onValidated",r.target),t.removeEventListener("submit",e),t.submit(),t.addEventListener("submit",e)})).catch((function(t){console.log("VDFValidator: form validation failed!"),g.showErrors(t.message),y(g,g,b).call(g,"onFailure",r.target,t)})).finally((function(){y(g,g,x).call(g,t),y(g,g,b).call(g,"onCompletion",r.target)}))}))}function k(t){var e=function(t){var e=t.target;d(g,g,V).includes(e.name)||d(g,g,V).push(e.name)},r=function(t){d(g,g,V).includes(t.target.name)&&g.executeValidation([t.target]).then((function(){var e=d(g,g,V).findIndex((function(e){return e===t.target.name}));e>=0&&d(g,g,V).splice(e,1)})).catch((function(t){g.showErrors(t.message)}))};o(document.querySelectorAll("[class*=vfield-]")).map((function(t){return t.addEventListener("change",e)})),o(document.querySelectorAll("[class*=vfield-]")).map((function(t){return t.addEventListener("blur",r)}))}var S={writable:!0,value:[]},L={writable:!0,value:[]},A={writable:!0,value:[]},O={writable:!0,value:[]},j={writable:!0,value:{}},V={writable:!0,value:[]},F=function(){function t(){i(this,t)}return c(t,null,[{key:"required",value:function(t,e,r,n){t.value.trim()?r():n('Required value for "'.concat(t.name,'" is missing'))}},{key:"email",value:function(t,e,r,n){var o=t.value.trim();!o.length||/^\S+@\S+$/.test(o)?r():n("Invalid e-mail address")}},{key:"min",value:function(t,e,r,n){var o=t.value.trim().length,a=parseInt(e[0]);!o||o>=a?r():n("Required minimum characters of ".concat(a))}},{key:"max",value:function(t,e,r,n){var o=t.value.trim().length,a=parseInt(e[0]);o<=a?r():n("Required maximum characters of ".concat(a))}},{key:"equalto",value:function(t,e,r,n){var o=t.value.trim(),a=t.form.querySelector("[name=".concat(e[0],"]"));if(a){var i=a.value.trim();o.length&&i||r(),o===i?r():n("Field value (".concat(t.name,") not equal to the target's value (").concat(a.name,")"))}n("Target field (".concat(a.name,") is not defined"))}}]),t}();window.addEventListener("load",(function(){o(document.querySelectorAll("form.vform")).forEach((function(t){return g.registerForm(t)}))}))}(),n.default}()}));