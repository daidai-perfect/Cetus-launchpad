import{_ as S,a as k,b as T,c as y}from"./stats-echarts-aptos.441946be.js";import{i as N}from"./import-icon.de3e6c66.js";import{a as b,m as a,b as g,y as P,e as x,M as n,o,f as s,i as e,h as c,v as $,z as C}from"./entry.8c3aca72.js";import{a as E}from"./pool.e919edfa.js";import{T as w}from"./top-pools.3ae7e566.js";import{T as B}from"./top-tokens.57175a82.js";import D from"./stats-sui.75c59e0a.js";import"./index.42f87ad9.js";import"./index.0ff538b4.js";import"./decimal.765d8738.js";import"./decimal.a2826370.js";/* empty css              */import"./index.227dcf44.js";import"./index.a6c04bb7.js";import"./install.e399140f.js";import"./lodash.9b2ebe68.js";import"./back.7e53da18.js";import"./apr-tips.b32dabad.js";import"./farms.94522298.js";import"./icon_fee_2x.dd916907.js";import"./icon_rewards_2x.73ba766d.js";import"./upgrade-loading.32b1d0e1.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";/* empty css              */import"./precision.a7a6c57b.js";import"./token-warning.c152cff2.js";import"./token-warning-modal.356e92d6.js";import"./icon-selected_3x.873560ed.js";import"./stats.db4be533.js";import"./formatter.23ea5ad2.js";import"./to-add.0bd6ab8a.js";/* empty css              */import"./coin-img.01fdb047.js";import"./token-warning_2x.7b17e33a.js";import"./token.8b3bad60.js";import"./token-warning-new.d12d6e01.js";import"./nuxt-link.40febc58.js";import"./icon_farms_2x.b3821891.js";import"./farms.6c02329d.js";import"./icon_autopools_2x.e6e8d789.js";import"./icon_autopools_2x.41736302.js";import"./icon-tooltip.4ec8e714.js";import"./useToken.a63e4469.js";import"./fetchFun.d7529dbd.js";import"./pool.4c757e2f.js";import"./h5-table-card.c255db3a.js";import"./select-tab.c0da625c.js";import"./useStatsData.0eb1c38a.js";const I=b({components:{TopPools:w,StatsSuiPage:D,TopTokens:B},setup(){const t=E(),i=a(()=>t),r=g(),m=a(()=>i.value.chainName);P(async()=>{t.getStatsData(i.value.chainName,i.value.filterCoinsObj)});const p=a(()=>i.value.theme);return{chainName:m,theme:p,store:i,importIcon:N,router:r}}});const z={key:0},M={key:1,class:"stats-container"},V={key:0,class:"select-mask select-mask-sui"},j={key:1,class:"select-mask"},A={key:2,class:"sui-banner"},O={class:"echart-box"},R={key:3,class:"sui-banner"};function q(t,i,r,m,p,F){const _=n("StatsSuiPage"),l=S,u=k,d=T,v=y,h=n("TopPools"),f=n("TopTokens");return o(),s("div",null,[t.chainName==="Sui"?(o(),s("div",z,[e(_)])):(o(),s("div",M,[t.chainName=="Sui"?(o(),s("div",V)):(o(),s("div",j)),c("div",{class:C(["title",t.chainName=="Sui"?"title-sui":""])},$(t.$t("menu.stats")),3),t.chainName=="Sui"?(o(),s("div",A,[c("div",O,[e(l,{class:"title-overview"}),e(u,{class:"title-overview"})]),e(d)])):(o(),s("div",R,[e(v,{class:"title-overview"})])),e(h),e(f)]))])}const At=x(I,[["render",q],["__scopeId","data-v-043fa59a"]]);export{At as default};
