import{c as a}from"./common.7b3188ac.js";import{u as r}from"./token.738b956f.js";import{e as l,a as p,u,o as c,f as i,N as f,G as d}from"./entry.8c071894.js";const k=p({props:{styleParams:{type:Object,default:()=>({width:"16px",height:"16px",left:"",bottom:""})},token:{type:Object,default:()=>null}},setup(e){const t=r(),{allTokensObj:n}=t;return{checkNullObj:a,allTokensObj:n}}});function m(e,t,n,_,b,y){var o,s;return!("checkNullObj"in e?e.checkNullObj:u(a))(e.allTokensObj)&&!((s=e.allTokensObj[(o=e.token)==null?void 0:o.address])!=null&&s.is_trusted)?(c(),i("div",{key:0,class:"token-warning",style:f(e.styleParams)},null,4)):d("",!0)}const N=l(k,[["render",m],["__scopeId","data-v-fa548f78"]]);export{N as T};
