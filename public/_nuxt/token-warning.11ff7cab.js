import{u as r,c as o}from"./pool.ec7155de.js";import{e as a,a as l,l as t,u as c,o as p,f as u,O as i,x as d}from"./entry.99d20ac2.js";const _=l({props:{styleParams:{type:Object,default:()=>({width:"16px",height:"16px",left:"",bottom:""})},address:{type:String,default:""}},setup(){const e=r(),n=t(()=>e);return{tokensWarningObj:t(()=>n.value.tokensWarningObj),checkNullObj:o}}});function m(e,n,s,f,k,b){return e.address&&e.tokensWarningObj&&!("checkNullObj"in e?e.checkNullObj:c(o))(e.tokensWarningObj)&&!e.tokensWarningObj[e.address]?(p(),u("div",{key:0,class:"token-warning",style:i(e.styleParams)},null,4)):d("",!0)}const j=a(_,[["render",m],["__scopeId","data-v-7bc05f0e"]]);export{j as _};
