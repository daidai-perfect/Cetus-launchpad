import{_ as b}from"./token-warning.fec2d20c.js";import{i as p}from"./import-icon.de3e6c66.js";import{a as y,m as a,l as I,e as j,q as O,o as i,f as l,h as n,t as d,x as C,i as h,G as k,v as m}from"./entry.a00a8559.js";import{u as U}from"./pool.8ac244d9.js";import{u as w}from"./sha256.3f9dd0c2.js";const N=y({props:{fromCoin:{type:Object,default:null},toCoin:{type:Object,default:null},feeTier:{type:Number,default:0}},setup(o){const _=w(),u=a(()=>_),{t:g}=I(),v=U(),s=a(()=>v),t=a(()=>s.value.tokensObj&&o.fromCoin.address&&s.value.tokensObj[o.fromCoin.address]&&s.value.tokensObj[o.fromCoin.address].logoURI),r=a(()=>s.value.tokensObj&&o.toCoin.address&&s.value.tokensObj[o.toCoin.address]&&s.value.tokensObj[o.toCoin.address].logoURI);return{t:g,store:u,importIcon:p,fromCoinUrl:t,toCoinUrl:r,getCoinIcon:e=>{var f;return(e==null?void 0:e.logoURI)||(e==null?void 0:e.logo_url)||((f=s.value.tokensObj[e==null?void 0:e.address])==null?void 0:f.logo_url)||(u.value.theme==="default"?p("/image/coins/unknown.png"):p("/image/coins/sui-unknown.png"))}}}});const S={class:"coin-logo"},$={class:"img-box"},T={class:"token-a"},B={key:0},D={class:"token-b"},P={key:0},R={key:0};function V(o,_,u,g,v,s){var c,e;const t=b,r=O("image");return i(),l("div",S,[n("div",$,[n("div",T,[o.fromCoin?d((i(),l("img",B,null,512)),[[r,o.fromCoinUrl?o.fromCoinUrl:o.getCoinIcon(o.fromCoin)]]):C("",!0),h(t,{address:o.fromCoin&&o.fromCoin.address,"style-params":{width:"8px",height:"8px",left:"15px",bottom:"0px"}},null,8,["address"])]),n("div",D,[o.toCoin?d((i(),l("img",P,null,512)),[[r,o.toCoinUrl?o.toCoinUrl:o.getCoinIcon(o.toCoin)]]):C("",!0),h(t,{address:o.toCoin&&o.toCoin.address,"style-params":{width:"8px",height:"8px",left:"15px",bottom:"0px"}},null,8,["address"])])]),d(n("span",{class:"coin-name"},m(o.$t("common.selectPool")),513),[[k,!o.fromCoin||!o.toCoin]]),d(n("span",{class:"coin-name"},m((c=o.fromCoin)==null?void 0:c.symbol)+" - "+m((e=o.toCoin)==null?void 0:e.symbol),513),[[k,o.fromCoin&&o.toCoin]]),o.feeTier?(i(),l("p",R,m(o.feeTier)+"%",1)):C("",!0)])}const A=j(N,[["render",V],["__scopeId","data-v-747c398d"]]);export{A as _};
