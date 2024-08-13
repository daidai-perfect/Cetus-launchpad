import{_ as S,a as k,b as T,c as y}from"./stats-echarts-aptos.c71fd2e3.js";import{i as N}from"./import-icon.de3e6c66.js";import{a as b,m as a,b as g,y as P,e as x,M as n,o,f as s,i as e,h as c,v as $,z as C}from"./entry.6fece5f9.js";import{a as E}from"./pool.7cb19b71.js";import{T as w}from"./top-pools.ddda00cf.js";import{T as B}from"./top-tokens.cf5e3d8f.js";import D from"./stats-sui.7be623e5.js";/* empty css              */import"./index.6fb2c779.js";import"./index.e0510e5d.js";import"./install.b2f1e5e4.js";import"./index.723f7524.js";import"./decimal.765d8738.js";import"./lodash.2cdb693e.js";import"./decimal.a2826370.js";import"./back.b9a9dde6.js";import"./apr-tips.64a7871e.js";import"./farms.d8b5aeab.js";import"./icon_fee_2x.9019525b.js";import"./icon_rewards_2x.06fc0728.js";import"./upgrade-loading.c3ae94d9.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./token-warning.a25c1939.js";/* empty css              */import"./precision.a7a6c57b.js";import"./token-warning-modal.09ee6958.js";import"./icon-selected_3x.09e9a6f0.js";import"./stats.28babfcc.js";import"./formatter.3be22401.js";import"./no-data.8e9b6d78.js";import"./apr-tips.20d13160.js";/* empty css              */import"./coin-img.808f3f05.js";import"./token-warning_2x.edd59b82.js";import"./token.a208ca56.js";import"./token-warning-new.2fbfd9a4.js";import"./nuxt-link.23c4e35d.js";import"./icon_farms_2x.1a9236c6.js";import"./farms.75ba582d.js";import"./icon_autopools_2x.22ed2241.js";import"./icon_autopools_2x.5d7406a0.js";import"./useToken.64c2f487.js";import"./useSDK.4d215c7d.js";import"./no-data.02548140.js";import"./coin-single.e8ee9a24.js";import"./select-tab.e9e40dea.js";import"./useStatsData.8eca2cc8.js";const I=b({components:{TopPools:w,StatsSuiPage:D,TopTokens:B},setup(){const t=E(),i=a(()=>t),r=g(),m=a(()=>i.value.chainName);P(async()=>{t.getStatsData(i.value.chainName,i.value.filterCoinsObj)});const p=a(()=>i.value.theme);return{chainName:m,theme:p,store:i,importIcon:N,router:r}}});const z={key:0},M={key:1,class:"stats-container"},V={key:0,class:"select-mask select-mask-sui"},j={key:1,class:"select-mask"},A={key:2,class:"sui-banner"},O={class:"echart-box"},R={key:3,class:"sui-banner"};function q(t,i,r,m,p,F){const _=n("StatsSuiPage"),l=S,u=k,d=T,v=y,h=n("TopPools"),f=n("TopTokens");return o(),s("div",null,[t.chainName==="Sui"?(o(),s("div",z,[e(_)])):(o(),s("div",M,[t.chainName=="Sui"?(o(),s("div",V)):(o(),s("div",j)),c("div",{class:C(["title",t.chainName=="Sui"?"title-sui":""])},$(t.$t("menu.stats")),3),t.chainName=="Sui"?(o(),s("div",A,[c("div",O,[e(l,{class:"title-overview"}),e(u,{class:"title-overview"})]),e(d)])):(o(),s("div",R,[e(v,{class:"title-overview"})])),e(h),e(f)]))])}const jt=x(I,[["render",q],["__scopeId","data-v-3ff08620"]]);export{jt as default};
