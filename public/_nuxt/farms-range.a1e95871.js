import{s as n}from"./pool.b1ddb447.js";import{a as v,r as d,q as I,e as k,o as u,f,h as o,v as e,u as t,z as y,p as b,k as A}from"./entry.833e9675.js";const F=v({props:{poolInfo:{type:Object,default:()=>({})},usePropsDirect:{type:Boolean,require:!1,default:!1},propDirect:{type:Boolean,require:!1,default:!1}},setup(s,i){const a=d(!0),p=d(s.usePropsDirect),l=d(s.propDirect);return I(()=>s.propDirect,r=>{l.value=r},{immediate:!0}),{sFixD:n,direct:a,isUsepropsDirect:p,propsDirect:l,clickChange:()=>{a.value=!a.value,p.value&&i.emit("clickChange")}}}}),g=""+globalThis.__publicAssetsURL("sui-image/range.png");const c=s=>(b("data-v-1fbaf879"),s=s(),A(),s),P={class:"range"},B={key:0},C={class:"num"},w=c(()=>o("img",{src:g,alt:""},null,-1)),x={class:"num"},R={class:"per"},S={key:1},$={class:"num"},q=c(()=>o("img",{src:g,alt:""},null,-1)),E={class:"num"},U={class:"per"},j=c(()=>o("div",null,[o("svg",{class:"icon icon-up","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),z=c(()=>o("div",null,[o("svg",{class:"icon icon-down","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),L=[j,z];function M(s,i,a,p,l,D){var r,h,_,m;return u(),f("div",P,[(s.isUsepropsDirect?s.propsDirect:s.direct)?(u(),f("p",B,[o("span",C,e(("sFixD"in s?s.sFixD:t(n))(s.poolInfo.minPrice,6))+" ",1),w,o("span",x," "+e(("sFixD"in s?s.sFixD:t(n))(s.poolInfo.maxPrice,6))+" ",1),o("span",R,e((r=s.poolInfo.coinB)==null?void 0:r.symbol)+" per "+e((h=s.poolInfo.coinA)==null?void 0:h.symbol),1)])):(u(),f("p",S,[o("span",$,e(s.poolInfo.maxPrice!=="∞"?("sFixD"in s?s.sFixD:t(n))(1/s.poolInfo.maxPrice,6):"0")+" ",1),q,o("span",E," "+e(s.poolInfo.minPrice!=="0"?("sFixD"in s?s.sFixD:t(n))(1/s.poolInfo.minPrice,6):"∞")+" ",1),o("span",U,e((_=s.poolInfo.coinA)==null?void 0:_.symbol)+" per "+e((m=s.poolInfo.coinB)==null?void 0:m.symbol),1)])),o("div",{class:"icon-change",onClick:i[0]||(i[0]=y(()=>s.clickChange(),["stop"]))},L)])}const T=k(F,[["render",M],["__scopeId","data-v-1fbaf879"]]);export{T as R};
