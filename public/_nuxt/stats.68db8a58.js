import{_ as S,a as k,b as T,c as y}from"./stats-echarts-aptos.29a86b28.js";import{i as N}from"./import-icon.de3e6c66.js";import{a as b,m as a,b as g,y as P,e as x,M as n,o,f as s,i as e,h as c,v as $,z as C}from"./entry.0caab9e0.js";import{a as E}from"./pool.e34b56ac.js";import{T as w}from"./top-pools.22a2398d.js";import{T as B}from"./top-tokens.17c15c3e.js";import D from"./stats-sui.ff206591.js";import"./index.98582d64.js";import"./decimal.0bdeb344.js";/* empty css              */import"./index.d2b47555.js";import"./index.e1313b29.js";import"./install.34b84fb0.js";import"./lodash.f526601f.js";import"./back.054b59e0.js";import"./apr-tips.6dec8ab3.js";import"./farms.cb506725.js";import"./icon_fee_2x.1b1f0dda.js";import"./icon_rewards_2x.f4af5f96.js";import"./upgrade-loading.0c1dc335.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./token-warning.68c422cb.js";/* empty css              */import"./precision.a7a6c57b.js";import"./token-warning-modal.43c16b05.js";import"./icon-selected_3x.09e9a6f0.js";import"./stats.a56c8c60.js";import"./formatter.17d1ad1c.js";import"./to-add.812f6274.js";/* empty css              */import"./coin-img.917fccf4.js";import"./token-warning_2x.5b1c434d.js";import"./token.0cd1db4c.js";import"./token-warning-new.3218fc05.js";import"./nuxt-link.e445b979.js";import"./icon_farms_2x.e2b5c79d.js";import"./farms.325a2823.js";import"./icon_autopools_2x.ae082f9c.js";import"./icon_autopools_2x.43519267.js";import"./useToken.5965e83e.js";import"./fetchFun.e459003e.js";import"./pool.ad26182a.js";import"./h5-table-card.393d80e2.js";import"./select-tab.24cd0dcc.js";import"./useStatsData.e528d9d4.js";const I=b({components:{TopPools:w,StatsSuiPage:D,TopTokens:B},setup(){const t=E(),i=a(()=>t),r=g(),m=a(()=>i.value.chainName);P(async()=>{t.getStatsData(i.value.chainName,i.value.filterCoinsObj)});const p=a(()=>i.value.theme);return{chainName:m,theme:p,store:i,importIcon:N,router:r}}});const z={key:0},M={key:1,class:"stats-container"},V={key:0,class:"select-mask select-mask-sui"},j={key:1,class:"select-mask"},A={key:2,class:"sui-banner"},O={class:"echart-box"},R={key:3,class:"sui-banner"};function q(t,i,r,m,p,F){const _=n("StatsSuiPage"),l=S,u=k,d=T,v=y,h=n("TopPools"),f=n("TopTokens");return o(),s("div",null,[t.chainName==="Sui"?(o(),s("div",z,[e(_)])):(o(),s("div",M,[t.chainName=="Sui"?(o(),s("div",V)):(o(),s("div",j)),c("div",{class:C(["title",t.chainName=="Sui"?"title-sui":""])},$(t.$t("menu.stats")),3),t.chainName=="Sui"?(o(),s("div",A,[c("div",O,[e(l,{class:"title-overview"}),e(u,{class:"title-overview"})]),e(d)])):(o(),s("div",R,[e(v,{class:"title-overview"})])),e(h),e(f)]))])}const Mt=x(I,[["render",q],["__scopeId","data-v-043fa59a"]]);export{Mt as default};
