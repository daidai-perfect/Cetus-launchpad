import{c as t}from"./sha256.91c60824.js";import{u as r}from"./pool.58e56ed3.js";import{e as a,a as l,l as o,u as p,o as c,f as u,O as i,x as d}from"./entry.a6654d09.js";const m=l({props:{styleParams:{type:Object,default:()=>({width:"16px",height:"16px",left:"",bottom:""})},address:{type:String,default:""}},setup(){const e=r(),n=o(()=>e);return{tokensWarningObj:o(()=>n.value.tokensWarningObj),checkNullObj:t}}});function _(e,n,s,f,k,b){return e.address&&e.tokensWarningObj&&!("checkNullObj"in e?e.checkNullObj:p(t))(e.tokensWarningObj)&&!e.tokensWarningObj[e.address]?(c(),u("div",{key:0,class:"token-warning",style:i(e.styleParams)},null,4)):d("",!0)}const y=a(m,[["render",_],["__scopeId","data-v-7bc05f0e"]]);export{y as _};
