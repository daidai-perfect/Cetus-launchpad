import{k as P,b as d,g as l,i as I}from"./index.33b6d0c7.js";import{a as k,r as t,G as C,e as D,o as f,f as h,h as o,v as i,u as n,O as U,p as $,k as R,i as w}from"./entry.7dcfbd3d.js";import{D as _}from"./decimal.0bdeb344.js";const A=k({props:{poolInfo:{type:Object,default:()=>({})},usePropsDirect:{type:Boolean,require:!1,default:!1},propDirect:{type:Boolean,require:!1,default:!1}},setup(e,r){const c=t(!0),m=t(e.usePropsDirect),p=t(e.propDirect);C(()=>e.propDirect,s=>{p.value=s},{immediate:!0});const u=t(),a=t();return C(()=>e.poolInfo,s=>{s&&!I(s)&&(s.maxPrice!=="∞"&&(u.value=new _(1).div(new _(s.maxPrice)).toString()),s.minPrice>0&&(a.value=new _(1).div(new _(s.minPrice)).toString()))},{immediate:!0}),{sFixD:P,direct:c,isUsepropsDirect:m,propsDirect:p,clickChange:()=>{c.value=!c.value,m.value&&r.emit("clickChange")},minPriceResever:u,maxPriceResever:a,decimalUi:d,addCommom:l}}}),b=""+globalThis.__publicAssetsURL("sui-image/range.png");const g=e=>($("data-v-f8324430"),e=e(),R(),e),B={class:"range"},S={key:0},O={class:"num"},V=g(()=>o("img",{src:b,alt:""},null,-1)),j={class:"num"},E={class:"per"},N={key:1},q={class:"num"},F=g(()=>o("img",{src:b,alt:""},null,-1)),G={class:"num"},L={class:"per"},M=g(()=>o("div",null,[o("svg",{class:"icon icon-up","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),T=g(()=>o("div",null,[o("svg",{class:"icon icon-down","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),z=[M,T];function H(e,r,c,m,p,u){var a,v,s,y;return f(),h("div",B,[(e.isUsepropsDirect?e.propsDirect:e.direct)?(f(),h("p",S,[o("span",O,i(("addCommom"in e?e.addCommom:n(l))(("decimalUi"in e?e.decimalUi:n(d))(e.poolInfo.minPrice,6)))+" ",1),V,o("span",j," "+i(("addCommom"in e?e.addCommom:n(l))(("decimalUi"in e?e.decimalUi:n(d))(e.poolInfo.maxPrice,6)))+" ",1),o("span",E,i((a=e.poolInfo.coinB)==null?void 0:a.symbol)+" per "+i((v=e.poolInfo.coinA)==null?void 0:v.symbol),1)])):(f(),h("p",N,[o("span",q,i(e.poolInfo.maxPrice!=="∞"?("addCommom"in e?e.addCommom:n(l))(("decimalUi"in e?e.decimalUi:n(d))(e.minPriceResever,6)):"0")+" ",1),F,o("span",G," "+i(e.poolInfo.minPrice>0?("addCommom"in e?e.addCommom:n(l))(("decimalUi"in e?e.decimalUi:n(d))(e.maxPriceResever,6)):"∞")+" ",1),o("span",L,i((s=e.poolInfo.coinA)==null?void 0:s.symbol)+" per "+i((y=e.poolInfo.coinB)==null?void 0:y.symbol),1)])),o("div",{class:"icon-change",onClick:r[0]||(r[0]=U(()=>e.clickChange(),["stop"]))},z)])}const J=D(A,[["render",H],["__scopeId","data-v-f8324430"]]),K=k({props:{poolInfo:{type:Object,default:()=>({})},platform:{type:String,default:""}},setup(){const e=t(!0);return{sFixD:P,direct:e}}});const Q={class:"valid-range"},W={class:"title"};function X(e,r,c,m,p,u){const a=J;return f(),h("div",Q,[o("div",W,i(e.platform=="position"?"Price Range":"Valid Range"),1),w(a,{"pool-info":e.poolInfo},null,8,["pool-info"])])}const ee=D(K,[["render",X],["__scopeId","data-v-66be3805"]]);export{ee as _,J as a};
