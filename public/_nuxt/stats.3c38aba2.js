import{_ as S,a as k,b as T,c as y}from"./stats-echarts-aptos.65711ba6.js";import{i as N}from"./import-icon.de3e6c66.js";import{a as b,m as a,b as g,y as P,e as x,M as n,o,f as s,i as e,h as c,v as $,z as C}from"./entry.969cd3b1.js";import{a as E}from"./pool.ce255c47.js";import{T as w}from"./top-pools.b4b808d2.js";import{T as B}from"./top-tokens.855530a4.js";import D from"./stats-sui.ea732bde.js";import"./index.694cb687.js";import"./decimal.0bdeb344.js";/* empty css              */import"./index.d1735250.js";import"./index.35e95b4f.js";import"./install.754eb403.js";import"./lodash.5a876562.js";import"./back.80c852f2.js";import"./apr-tips.e557b22f.js";import"./farms.3c646e86.js";import"./icon_fee_2x.861f7bd5.js";import"./icon_rewards_2x.184776f8.js";import"./upgrade-loading.522c68ed.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";/* empty css              */import"./precision.a7a6c57b.js";import"./token-warning.42df246e.js";import"./token-warning-modal.a1fe14c5.js";import"./icon-selected_3x.09e9a6f0.js";import"./stats.d9e5ee0d.js";import"./formatter.ac2a4faa.js";import"./to-add.426e4d9a.js";/* empty css              */import"./coin-img.4f9414df.js";import"./token-warning_2x.5e57fa7a.js";import"./token.93418b41.js";import"./token-warning-new.03d43915.js";import"./nuxt-link.85880d0f.js";import"./icon_farms_2x.28ef7d0d.js";import"./farms.39edbe7d.js";import"./icon_autopools_2x.0ab6bfa1.js";import"./icon_autopools_2x.bdac2ca7.js";import"./useToken.6c5461d3.js";import"./fetchFun.3536bfb9.js";import"./pool.4ab806b9.js";import"./h5-table-card.a6f6e03e.js";import"./select-tab.097bd45f.js";import"./useStatsData.8806d25d.js";const I=b({components:{TopPools:w,StatsSuiPage:D,TopTokens:B},setup(){const t=E(),i=a(()=>t),r=g(),m=a(()=>i.value.chainName);P(async()=>{t.getStatsData(i.value.chainName,i.value.filterCoinsObj)});const p=a(()=>i.value.theme);return{chainName:m,theme:p,store:i,importIcon:N,router:r}}});const z={key:0},M={key:1,class:"stats-container"},V={key:0,class:"select-mask select-mask-sui"},j={key:1,class:"select-mask"},A={key:2,class:"sui-banner"},O={class:"echart-box"},R={key:3,class:"sui-banner"};function q(t,i,r,m,p,F){const _=n("StatsSuiPage"),l=S,u=k,d=T,v=y,h=n("TopPools"),f=n("TopTokens");return o(),s("div",null,[t.chainName==="Sui"?(o(),s("div",z,[e(_)])):(o(),s("div",M,[t.chainName=="Sui"?(o(),s("div",V)):(o(),s("div",j)),c("div",{class:C(["title",t.chainName=="Sui"?"title-sui":""])},$(t.$t("menu.stats")),3),t.chainName=="Sui"?(o(),s("div",A,[c("div",O,[e(l,{class:"title-overview"}),e(u,{class:"title-overview"})]),e(d)])):(o(),s("div",R,[e(v,{class:"title-overview"})])),e(h),e(f)]))])}const Mt=x(I,[["render",q],["__scopeId","data-v-043fa59a"]]);export{Mt as default};
