import{_ as S,a as k,b as T,c as y}from"./stats-echarts-aptos.5eed7a61.js";import{i as N}from"./import-icon.de3e6c66.js";import{a as b,m as a,b as g,y as P,e as x,M as n,o,f as s,i as e,h as c,v as $,z as C}from"./entry.60f21e23.js";import{a as E}from"./pool.4cb0c8ff.js";import{T as w}from"./top-pools.7c629640.js";import{T as B}from"./top-tokens.5ae3bcc0.js";import D from"./stats-sui.043b0b41.js";import"./index.faaa0495.js";import"./index.d6b37ace.js";import"./decimal.765d8738.js";import"./decimal.a2826370.js";/* empty css              */import"./index.3fe8d329.js";import"./index.30b34d4c.js";import"./install.1c3aa9f9.js";import"./lodash.1dfa9290.js";import"./back.b7bb8c44.js";import"./apr-tips.3437ccf2.js";import"./farms.05bda3f0.js";import"./icon_fee_2x.7205104d.js";import"./icon_rewards_2x.f65ce0ee.js";import"./upgrade-loading.6152b287.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";/* empty css              */import"./precision.a7a6c57b.js";import"./token-warning.4fed7355.js";import"./token-warning-modal.b1152c2f.js";import"./icon-selected_3x.873560ed.js";import"./stats.b3fd5993.js";import"./formatter.ef9c6108.js";import"./to-add.89da78e7.js";/* empty css              */import"./coin-img.79922eb3.js";import"./token-warning_2x.c68500a4.js";import"./token.963904d7.js";import"./token-warning-new.d0f63220.js";import"./nuxt-link.08a31be5.js";import"./icon_farms_2x.e800a7ef.js";import"./farms.2d63a8d9.js";import"./icon_autopools_2x.49b028e5.js";import"./icon_autopools_2x.d9d59681.js";import"./icon-tooltip.6742db1d.js";import"./useToken.b2055bb4.js";import"./fetchFun.ac294a6c.js";import"./pool.8ddc5695.js";import"./h5-table-card.4cb26c4d.js";import"./select-tab.fdd1a09c.js";import"./useStatsData.bf5be94c.js";const I=b({components:{TopPools:w,StatsSuiPage:D,TopTokens:B},setup(){const t=E(),i=a(()=>t),r=g(),m=a(()=>i.value.chainName);P(async()=>{t.getStatsData(i.value.chainName,i.value.filterCoinsObj)});const p=a(()=>i.value.theme);return{chainName:m,theme:p,store:i,importIcon:N,router:r}}});const z={key:0},M={key:1,class:"stats-container"},V={key:0,class:"select-mask select-mask-sui"},j={key:1,class:"select-mask"},A={key:2,class:"sui-banner"},O={class:"echart-box"},R={key:3,class:"sui-banner"};function q(t,i,r,m,p,F){const _=n("StatsSuiPage"),l=S,u=k,d=T,v=y,h=n("TopPools"),f=n("TopTokens");return o(),s("div",null,[t.chainName==="Sui"?(o(),s("div",z,[e(_)])):(o(),s("div",M,[t.chainName=="Sui"?(o(),s("div",V)):(o(),s("div",j)),c("div",{class:C(["title",t.chainName=="Sui"?"title-sui":""])},$(t.$t("menu.stats")),3),t.chainName=="Sui"?(o(),s("div",A,[c("div",O,[e(l,{class:"title-overview"}),e(u,{class:"title-overview"})]),e(d)])):(o(),s("div",R,[e(v,{class:"title-overview"})])),e(h),e(f)]))])}const At=x(I,[["render",q],["__scopeId","data-v-043fa59a"]]);export{At as default};
