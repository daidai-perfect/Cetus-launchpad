import{_ as S,a as k,b as T,c as y}from"./stats-echarts-aptos.91bf39fb.js";import{i as N}from"./import-icon.de3e6c66.js";import{a as b,m as a,b as g,y as P,e as x,M as n,o,f as s,i as e,h as c,v as $,z as C}from"./entry.df2bb8e6.js";import{a as E}from"./pool.85d37113.js";import{T as w}from"./top-pools.037829c2.js";import{T as B}from"./top-tokens.40b30430.js";import D from"./stats-sui.5027b113.js";import"./index.8d5ec892.js";import"./decimal.0bdeb344.js";/* empty css              */import"./index.cf47b817.js";import"./index.2dd88cb4.js";import"./install.78f8e2fa.js";import"./lodash.579c1cea.js";import"./back.fd23e5b6.js";import"./apr-tips.10adfe7b.js";import"./farms.c086b749.js";import"./icon_fee_2x.ade0ab1a.js";import"./icon_rewards_2x.0b5754f5.js";import"./upgrade-loading.64998dd0.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./token-warning.71f85e08.js";/* empty css              */import"./precision.a7a6c57b.js";import"./token-warning-modal.1449e535.js";import"./icon-selected_3x.09e9a6f0.js";import"./stats.1537920d.js";import"./formatter.ce8d9614.js";import"./to-add.6dbd8916.js";/* empty css              */import"./coin-img.c50cab98.js";import"./token-warning_2x.4fde43d9.js";import"./token.ae9cfd3e.js";import"./token-warning-new.220aa824.js";import"./nuxt-link.63c83f3b.js";import"./icon_farms_2x.ef31ebe4.js";import"./farms.c566bbfc.js";import"./icon_autopools_2x.cf17e412.js";import"./icon_autopools_2x.1d16feca.js";import"./useToken.378893ea.js";import"./fetchFun.997a5e94.js";import"./pool.1eff9c24.js";import"./h5-table-card.9b9be05c.js";import"./select-tab.e1227c68.js";import"./useStatsData.a25e48ca.js";const I=b({components:{TopPools:w,StatsSuiPage:D,TopTokens:B},setup(){const t=E(),i=a(()=>t),r=g(),m=a(()=>i.value.chainName);P(async()=>{t.getStatsData(i.value.chainName,i.value.filterCoinsObj)});const p=a(()=>i.value.theme);return{chainName:m,theme:p,store:i,importIcon:N,router:r}}});const z={key:0},M={key:1,class:"stats-container"},V={key:0,class:"select-mask select-mask-sui"},j={key:1,class:"select-mask"},A={key:2,class:"sui-banner"},O={class:"echart-box"},R={key:3,class:"sui-banner"};function q(t,i,r,m,p,F){const _=n("StatsSuiPage"),l=S,u=k,d=T,v=y,h=n("TopPools"),f=n("TopTokens");return o(),s("div",null,[t.chainName==="Sui"?(o(),s("div",z,[e(_)])):(o(),s("div",M,[t.chainName=="Sui"?(o(),s("div",V)):(o(),s("div",j)),c("div",{class:C(["title",t.chainName=="Sui"?"title-sui":""])},$(t.$t("menu.stats")),3),t.chainName=="Sui"?(o(),s("div",A,[c("div",O,[e(l,{class:"title-overview"}),e(u,{class:"title-overview"})]),e(d)])):(o(),s("div",R,[e(v,{class:"title-overview"})])),e(h),e(f)]))])}const Mt=x(I,[["render",q],["__scopeId","data-v-043fa59a"]]);export{Mt as default};
