import{a as y,d as x}from"./common.99f6d7f1.js";import{a as P,r as C,o as c,f as n,h as o,x as s,u as a,p as b,k as B,e as g}from"./entry.92a44973.js";const k=e=>(b("data-v-5585a37c"),e=e(),B(),e),S={class:"pos-current-price"},w=k(()=>o("span",{class:"tit"},"Current Price",-1)),A={class:"price"},R={class:"left"},j={key:0},D={class:"value"},E={class:"text"},N={key:1},O={class:"value"},U={class:"text"},V=k(()=>o("use",{"xlink:href":"#icon-icon_swap_change"},null,-1)),$=[V],q=P({__name:"pos-current-price",props:{poolInfo:{type:Object,default:()=>null}},setup(e){const t=C(!0);return(z,i)=>{var r,l,d,_,p,u,f,v,h,m,I;return c(),n("div",S,[w,o("div",A,[o("div",R,[((r=e.poolInfo)!=null&&r.isReverse?!t.value:t.value)?(c(),n("div",j,[o("span",D,s(a(y)(a(x)((l=e.poolInfo)==null?void 0:l.currentPrice,6))),1),o("span",E,s((_=(d=e.poolInfo)==null?void 0:d.coinB)==null?void 0:_.symbol)+" per "+s((u=(p=e.poolInfo)==null?void 0:p.coinA)==null?void 0:u.symbol),1)])):(c(),n("div",N,[o("span",O,s(a(y)(a(x)((f=e.poolInfo)==null?void 0:f.currentPriceReverse,6))),1),o("span",U,s((h=(v=e.poolInfo)==null?void 0:v.coinA)==null?void 0:h.symbol)+" per "+s((I=(m=e.poolInfo)==null?void 0:m.coinB)==null?void 0:I.symbol),1)]))]),(c(),n("svg",{class:"coin-rate","aria-hidden":"true",onClick:i[0]||(i[0]=F=>t.value=!t.value)},$))])])}}});const J=g(q,[["__scopeId","data-v-5585a37c"]]);export{J as P};
