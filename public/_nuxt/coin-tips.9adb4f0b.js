import{i as v}from"./import-icon.de3e6c66.js";import{e as S,a as y,l as a,s as w,o as h,f,t as $,h as i,v as k,z as b,p as C,k as B}from"./entry.a6654d09.js";import{u as D}from"./pool.58e56ed3.js";import{u as j,h as N}from"./sha256.91c60824.js";const O=y({props:{coinInfo:{type:Object,default:()=>({})}},setup(o){const n=D(),d=a(()=>n),t=j(),r=a(()=>t),p=s=>{var e;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((e=d.value.tokensObj[s==null?void 0:s.address])==null?void 0:e.logo_url)||(r.value.theme==="default"?v("/image/coins/unknown.png"):v("/image/coins/sui-unknown.png"))},c=a(()=>N[r.value.chainName]);return{getCoinIcon:p,store:t,config:c}}}),z=o=>(C("data-v-181cd124"),o=o(),B(),o),E={class:"coin-tips"},M={alt:""},P={class:"address"},R=z(()=>i("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),T=[R];function U(o,n,d,t,r,p){var s,e,u,l,_,m,I;const c=w("image");return h(),f("div",E,[$(i("img",M,null,512),[[c,o.getCoinIcon(o.coinInfo)]]),i("div",P,k(((s=o.coinInfo)==null?void 0:s.address)&&((u=(e=o.coinInfo)==null?void 0:e.address)==null?void 0:u.substr(0,6)))+" ... "+k(((l=o.coinInfo)==null?void 0:l.address)&&((I=o.coinInfo)==null?void 0:I.address.substr(((m=(_=o.coinInfo)==null?void 0:_.address)==null?void 0:m.length)-6,6))),1),(h(),f("svg",{class:"icon","aria-hidden":"true",onClick:n[0]||(n[0]=b(V=>{var g;return o.store.copy(o.coinInfo&&((g=o.coinInfo)==null?void 0:g.address))},["stop"]))},T))])}const H=S(O,[["render",U],["__scopeId","data-v-181cd124"]]);export{H as _};
