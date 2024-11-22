import{S as a}from"./ss-linked-list-DvGVIzph.js";/*! *****************************************************************************
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
***************************************************************************** */function f(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),u,i=[],o;try{for(;(r===void 0||r-- >0)&&!(u=n.next()).done;)i.push(u.value)}catch(p){o={error:p}}finally{try{u&&!u.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return i}function l(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(f(arguments[r]));return e}var c=function(){function e(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this.queue=new(a.bind.apply(a,l([void 0],r)))}return Object.defineProperty(e.prototype,"length",{get:function(){return this.queue.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"peek",{get:function(){return this.queue.head},enumerable:!0,configurable:!0}),e.prototype.isEmpty=function(){return this.queue.isEmpty()},e.prototype.enqueue=function(r){return this.queue.append(r)},e.prototype.dequeue=function(){var r=this.queue.removeHead();return typeof r<"u"?r:void 0},e.prototype.toArray=function(){return this.queue.toArray()},e}();export{c as Q};
