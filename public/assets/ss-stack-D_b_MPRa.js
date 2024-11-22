import{S as u}from"./ss-linked-list-DvGVIzph.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function c(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var o=r.call(e),n,i=[],a;try{for(;(t===void 0||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(p){a={error:p}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i}function s(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}var l=function(){function e(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];this.stack=new(u.bind.apply(u,s([void 0],t)))}return Object.defineProperty(e.prototype,"length",{get:function(){return this.stack.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"peek",{get:function(){return this.stack.tail},enumerable:!0,configurable:!0}),e.prototype.isEmpty=function(){return this.stack.isEmpty()},e.prototype.push=function(t){return this.stack.append(t)},e.prototype.pop=function(){var t=this.stack.removeTail();return typeof t<"u"?t:void 0},e.prototype.popBottom=function(){var t=this.stack.removeHead();return typeof t<"u"?t:void 0},e.prototype.toArray=function(){return this.stack.toArray()},e}();export{l as s};
//# sourceMappingURL=ss-stack-D_b_MPRa.js.map
