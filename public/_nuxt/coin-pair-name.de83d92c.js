import{_ as b}from"./token-warning.cb1558fb.js";import{i as C}from"./import-icon.de3e6c66.js";import{a as y,m as a,z as I,e as j,C as O,o as i,f as l,h as n,I as d,G as p,i as h,M as k,x as m}from"./entry.8c071894.js";import{u as U,a as w}from"./index.a960bb3c.js";const $=y({props:{fromCoin:{type:Object,default:null},toCoin:{type:Object,default:null},feeTier:{type:Number,default:0}},setup(o){const _=U(),u=a(()=>_),{t:g}=I(),f=w(),s=a(()=>f),t=a(()=>s.value.tokensObj&&o.fromCoin.address&&s.value.tokensObj[o.fromCoin.address]&&s.value.tokensObj[o.fromCoin.address].logoURI),r=a(()=>s.value.tokensObj&&o.toCoin.address&&s.value.tokensObj[o.toCoin.address]&&s.value.tokensObj[o.toCoin.address].logoURI);return{t:g,store:u,importIcon:C,fromCoinUrl:t,toCoinUrl:r,getCoinIcon:e=>{var v;return(e==null?void 0:e.logoURI)||(e==null?void 0:e.logo_url)||((v=s.value.tokensObj[e==null?void 0:e.address])==null?void 0:v.logo_url)||(u.value.theme==="default"?C("/image/coins/unknown.png"):C("/image/coins/sui-unknown.png"))}}}});const N={class:"coin-logo"},S={class:"img-box"},T={class:"token-a"},B={key:0},D={class:"token-b"},P={key:0},R={key:0};function V(o,_,u,g,f,s){var c,e;const t=b,r=O("image");return i(),l("div",N,[n("div",S,[n("div",T,[o.fromCoin?d((i(),l("img",B,null,512)),[[r,o.fromCoinUrl?o.fromCoinUrl:o.getCoinIcon(o.fromCoin)]]):p("",!0),h(t,{address:o.fromCoin&&o.fromCoin.address,"style-params":{width:"8px",height:"8px",left:"15px",bottom:"0px"}},null,8,["address"])]),n("div",D,[o.toCoin?d((i(),l("img",P,null,512)),[[r,o.toCoinUrl?o.toCoinUrl:o.getCoinIcon(o.toCoin)]]):p("",!0),h(t,{address:o.toCoin&&o.toCoin.address,"style-params":{width:"8px",height:"8px",left:"15px",bottom:"0px"}},null,8,["address"])])]),d(n("span",{class:"coin-name"},m(o.$t("common.selectPool")),513),[[k,!o.fromCoin||!o.toCoin]]),d(n("span",{class:"coin-name"},m((c=o.fromCoin)==null?void 0:c.symbol)+" - "+m((e=o.toCoin)==null?void 0:e.symbol),513),[[k,o.fromCoin&&o.toCoin]]),o.feeTier?(i(),l("p",R,m(o.feeTier)+"%",1)):p("",!0)])}const W=j($,[["render",V],["__scopeId","data-v-eef540d7"]]);export{W as _};
