import{_ as S,a as k,b as T,c as y}from"./stats-echarts-aptos.7d0e954d.js";import{i as N}from"./import-icon.de3e6c66.js";import{a as b,m as a,b as g,y as P,e as x,M as n,o,f as s,i as e,h as c,v as $,z as C}from"./entry.8daddd9b.js";import{a as E}from"./pool.029ead56.js";import{T as w}from"./top-pools.2421a0b7.js";import{T as B}from"./top-tokens.bff3c74a.js";import D from"./stats-sui.3eaf1ac6.js";import"./index.972d2d7e.js";import"./decimal.0bdeb344.js";/* empty css              */import"./index.081f2cdc.js";import"./index.74d53e7e.js";import"./install.6e3cb109.js";import"./lodash.3450cd8f.js";import"./back.32f9e286.js";import"./apr-tips.f835f97a.js";import"./farms.e577a1db.js";import"./icon_fee_2x.3a3bc9c0.js";import"./icon_rewards_2x.3786e05e.js";import"./upgrade-loading.b5d29917.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";/* empty css              */import"./precision.a7a6c57b.js";import"./token-warning.be305078.js";import"./token-warning-modal.2b038ba9.js";import"./icon-selected_3x.873560ed.js";import"./stats.8db468ce.js";import"./formatter.20652e63.js";import"./to-add.d24e4502.js";/* empty css              */import"./coin-img.7227b549.js";import"./token-warning_2x.59c79289.js";import"./token.d38b3881.js";import"./token-warning-new.07317638.js";import"./nuxt-link.827a3b32.js";import"./icon_farms_2x.5ea04cb0.js";import"./farms.3538ae64.js";import"./icon_autopools_2x.b6687a94.js";import"./icon_autopools_2x.b01459f9.js";import"./useToken.81bafbb2.js";import"./fetchFun.33e1ba30.js";import"./pool.3b92882f.js";import"./h5-table-card.44e599e6.js";import"./select-tab.0a0269b1.js";import"./useStatsData.c2bcba50.js";const I=b({components:{TopPools:w,StatsSuiPage:D,TopTokens:B},setup(){const t=E(),i=a(()=>t),r=g(),m=a(()=>i.value.chainName);P(async()=>{t.getStatsData(i.value.chainName,i.value.filterCoinsObj)});const p=a(()=>i.value.theme);return{chainName:m,theme:p,store:i,importIcon:N,router:r}}});const z={key:0},M={key:1,class:"stats-container"},V={key:0,class:"select-mask select-mask-sui"},j={key:1,class:"select-mask"},A={key:2,class:"sui-banner"},O={class:"echart-box"},R={key:3,class:"sui-banner"};function q(t,i,r,m,p,F){const _=n("StatsSuiPage"),l=S,u=k,d=T,v=y,h=n("TopPools"),f=n("TopTokens");return o(),s("div",null,[t.chainName==="Sui"?(o(),s("div",z,[e(_)])):(o(),s("div",M,[t.chainName=="Sui"?(o(),s("div",V)):(o(),s("div",j)),c("div",{class:C(["title",t.chainName=="Sui"?"title-sui":""])},$(t.$t("menu.stats")),3),t.chainName=="Sui"?(o(),s("div",A,[c("div",O,[e(l,{class:"title-overview"}),e(u,{class:"title-overview"})]),e(d)])):(o(),s("div",R,[e(v,{class:"title-overview"})])),e(h),e(f)]))])}const Mt=x(I,[["render",q],["__scopeId","data-v-043fa59a"]]);export{Mt as default};
