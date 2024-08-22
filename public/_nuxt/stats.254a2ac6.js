import{_ as S,a as k,b as T,c as y}from"./stats-echarts-aptos.a6bd376c.js";import{i as N}from"./import-icon.de3e6c66.js";import{a as b,m as a,b as g,y as P,e as x,M as n,o,f as s,i as e,h as c,v as $,z as C}from"./entry.d2fe8287.js";import{a as E}from"./pool.b77853f9.js";import{T as w}from"./top-pools.34a07c4a.js";import{T as B}from"./top-tokens.e0134d6f.js";import D from"./stats-sui.cc77db9f.js";import"./index.3377e62e.js";import"./decimal.0bdeb344.js";/* empty css              */import"./index.d8949e41.js";import"./index.bd72cdfd.js";import"./install.4b42e2f2.js";import"./lodash.18157aa3.js";import"./back.f5a6cf9e.js";import"./apr-tips.ae7b4b72.js";import"./farms.6f521e37.js";import"./icon_fee_2x.df7c3b7a.js";import"./icon_rewards_2x.46ff0182.js";import"./upgrade-loading.bfe69123.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./token-warning.ab8629d3.js";/* empty css              */import"./precision.a7a6c57b.js";import"./token-warning-modal.c1f01024.js";import"./icon-selected_3x.09e9a6f0.js";import"./stats.7b115bd0.js";import"./formatter.8cf5e14c.js";import"./to-add.6fa0a117.js";/* empty css              */import"./coin-img.4bdff3b2.js";import"./token-warning_2x.328e713e.js";import"./token.926b420c.js";import"./token-warning-new.d0bebf83.js";import"./nuxt-link.8498053b.js";import"./icon_farms_2x.32d2f596.js";import"./farms.80752b1f.js";import"./icon_autopools_2x.ed85067a.js";import"./icon_autopools_2x.04093a97.js";import"./useToken.3776f25c.js";import"./fetchFun.8ebdc33e.js";import"./pool.8a6bece7.js";import"./h5-table-card.5657a006.js";import"./select-tab.4a0254b3.js";import"./useStatsData.b7f299a5.js";const I=b({components:{TopPools:w,StatsSuiPage:D,TopTokens:B},setup(){const t=E(),i=a(()=>t),r=g(),m=a(()=>i.value.chainName);P(async()=>{t.getStatsData(i.value.chainName,i.value.filterCoinsObj)});const p=a(()=>i.value.theme);return{chainName:m,theme:p,store:i,importIcon:N,router:r}}});const z={key:0},M={key:1,class:"stats-container"},V={key:0,class:"select-mask select-mask-sui"},j={key:1,class:"select-mask"},A={key:2,class:"sui-banner"},O={class:"echart-box"},R={key:3,class:"sui-banner"};function q(t,i,r,m,p,F){const _=n("StatsSuiPage"),l=S,u=k,d=T,v=y,h=n("TopPools"),f=n("TopTokens");return o(),s("div",null,[t.chainName==="Sui"?(o(),s("div",z,[e(_)])):(o(),s("div",M,[t.chainName=="Sui"?(o(),s("div",V)):(o(),s("div",j)),c("div",{class:C(["title",t.chainName=="Sui"?"title-sui":""])},$(t.$t("menu.stats")),3),t.chainName=="Sui"?(o(),s("div",A,[c("div",O,[e(l,{class:"title-overview"}),e(u,{class:"title-overview"})]),e(d)])):(o(),s("div",R,[e(v,{class:"title-overview"})])),e(h),e(f)]))])}const Mt=x(I,[["render",q],["__scopeId","data-v-043fa59a"]]);export{Mt as default};
