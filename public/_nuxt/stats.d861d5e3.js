import{_ as T,a as k,b as S,c as N}from"./stats-echarts-aptos.d069f33e.js";import{i as y}from"./import-icon.de3e6c66.js";import{a as b,l as a,b as x,H as P,r as $,e as C,Q as _,o as e,f as n,h as l,v as E,A as g,i as s}from"./entry.05bbbdc0.js";import{u as w}from"./sha256.230676d8.js";import{T as B}from"./top-pools.8e7fac4c.js";import{T as D}from"./top-tokens.1238346f.js";/* empty css              */import"./index.be94cb96.js";import"./index.710d6b47.js";import"./lodash.851d987a.js";import"./decimal.0bdeb344.js";import"./back.441d12b7.js";import"./apr-tips.145e3d73.js";import"./farms.c46355d3.js";import"./pool.8137dec4.js";import"./icon_rewards_2x.de577eba.js";import"./upgrade-loading.e64e6639.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./token-warning.43735aa4.js";/* empty css              */import"./precision.a7a6c57b.js";const I=b({components:{TopPools:B,TopTokens:D},setup(){const t=w(),o=a(()=>t),i=x(),c=a(()=>o.value.chainName);P(()=>{t.getStatsData(o.value.chainName,o.value.filterCoinsObj)});let p=$(null);const m=a(()=>o.value.topPoolsList),r=a(()=>o.value.theme);return{chainName:c,theme:r,store:o,importIcon:y,topPoolsList:m,currentTopPoolsList:p,router:i}}});const L={class:"stats-container"},A={key:0,class:"select-mask select-mask-sui"},V={key:1,class:"select-mask"},j={key:2,class:"sui-banner"},z={class:"echart-box"},H={key:3,class:"sui-banner"};function M(t,o,i,c,p,m){const r=T,u=k,d=S,v=N,h=_("TopPools"),f=_("TopTokens");return e(),n("div",L,[t.chainName=="Sui"?(e(),n("div",A)):(e(),n("div",V)),l("div",{class:g(["title",t.chainName=="Sui"?"title-sui":""])},E(t.$t("menu.stats")),3),t.chainName=="Sui"?(e(),n("div",j,[l("div",z,[s(r,{class:"title-overview"}),s(u,{class:"title-overview"})]),s(d)])):(e(),n("div",H,[s(v,{class:"title-overview"})])),s(h),s(f)])}const pt=C(I,[["render",M],["__scopeId","data-v-0450032d"]]);export{pt as default};
