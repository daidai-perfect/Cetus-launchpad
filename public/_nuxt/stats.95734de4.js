import{_ as S,a as k,b as T,c as y}from"./stats-echarts-aptos.dc20d54c.js";import{i as N}from"./import-icon.de3e6c66.js";import{a as b,m as a,b as g,y as P,e as x,M as n,o,f as s,i as e,h as c,v as $,z as C}from"./entry.4f036a85.js";import{a as E}from"./pool.01002111.js";import{T as w}from"./top-pools.60daa98c.js";import{T as B}from"./top-tokens.86e9650f.js";import D from"./stats-sui.49497990.js";import"./index.f094823b.js";import"./decimal.0bdeb344.js";/* empty css              */import"./index.84953f6f.js";import"./index.69108d2e.js";import"./install.1d50dbfd.js";import"./lodash.a20af136.js";import"./back.9fa05e45.js";import"./apr-tips.1ed473da.js";import"./farms.e1c66453.js";import"./icon_fee_2x.e06fc0b4.js";import"./icon_rewards_2x.666fbb7e.js";import"./upgrade-loading.cee4427a.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";/* empty css              */import"./precision.a7a6c57b.js";import"./token-warning.392f686f.js";import"./token-warning-modal.5d6f7ef7.js";import"./icon-selected_3x.09e9a6f0.js";import"./stats.b5066fe7.js";import"./formatter.ba4f6587.js";import"./to-add.8d2cf301.js";/* empty css              */import"./coin-img.adb58d5e.js";import"./token-warning_2x.2c244dba.js";import"./token.87aa018c.js";import"./token-warning-new.2aa6763b.js";import"./nuxt-link.7abb2d34.js";import"./icon_farms_2x.907773c2.js";import"./farms.bec24a90.js";import"./icon_autopools_2x.9e2f7efe.js";import"./icon_autopools_2x.11cf2f88.js";import"./useToken.954b6ffa.js";import"./fetchFun.6c77ee5b.js";import"./pool.875cae82.js";import"./h5-table-card.6584ee37.js";import"./select-tab.7e84129e.js";import"./useStatsData.f1a67416.js";const I=b({components:{TopPools:w,StatsSuiPage:D,TopTokens:B},setup(){const t=E(),i=a(()=>t),r=g(),m=a(()=>i.value.chainName);P(async()=>{t.getStatsData(i.value.chainName,i.value.filterCoinsObj)});const p=a(()=>i.value.theme);return{chainName:m,theme:p,store:i,importIcon:N,router:r}}});const z={key:0},M={key:1,class:"stats-container"},V={key:0,class:"select-mask select-mask-sui"},j={key:1,class:"select-mask"},A={key:2,class:"sui-banner"},O={class:"echart-box"},R={key:3,class:"sui-banner"};function q(t,i,r,m,p,F){const _=n("StatsSuiPage"),l=S,u=k,d=T,v=y,h=n("TopPools"),f=n("TopTokens");return o(),s("div",null,[t.chainName==="Sui"?(o(),s("div",z,[e(_)])):(o(),s("div",M,[t.chainName=="Sui"?(o(),s("div",V)):(o(),s("div",j)),c("div",{class:C(["title",t.chainName=="Sui"?"title-sui":""])},$(t.$t("menu.stats")),3),t.chainName=="Sui"?(o(),s("div",A,[c("div",O,[e(l,{class:"title-overview"}),e(u,{class:"title-overview"})]),e(d)])):(o(),s("div",R,[e(v,{class:"title-overview"})])),e(h),e(f)]))])}const Mt=x(I,[["render",q],["__scopeId","data-v-043fa59a"]]);export{Mt as default};
