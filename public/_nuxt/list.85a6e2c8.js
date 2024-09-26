import{_ as so}from"./pool-position-tab.f8ddd60c.js";import{P as ao}from"./pool-filter-block.3148f2fc.js";import{R as C,a as io,A as no,T as ro,b as uo,P as co}from"./to-add.14092bd8.js";import{a as po,r as N,m as c,A as I,q as Q,b as vo,l as mo,o as b,f as R,h as a,i,c as J,w as K,D as fo,u as ho,x as M,G as _o,p as go,k as Po,e as bo,s as So}from"./entry.c44b21e1.js";import{u as Ao}from"./useToken.e4fb5d46.js";import{u as X}from"./pool.92b0f03d.js";import{u as Lo}from"./stats.30e9a582.js";import{c as D,s as yo}from"./common.2e5eaeac.js";import{H as ko,T as To}from"./h5-table-card.c966df30.js";import{S as wo}from"./sui-no-data.36854712.js";import{u as Y}from"./token.1f9d0593.js";import"./index.556eb1a4.js";import{u as xo}from"./usePoolList.34844b99.js";import"./select-tab.03319cb2.js";import"./useWindowWidth.ffc0ce8b.js";import"./index.c5a5bd81.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";import"./filter-pool-by-coin.0dbe7363.js";import"./coin-select.daadd68b.js";import"./import-icon.de3e6c66.js";/* empty css              *//* empty css              */import"./icon-tooltip.3cfdbd2d.js";import"./token-warning_2x.e34d7e22.js";import"./img-no-Positions_2x.104e09b5.js";import"./img-no-Positions_2x.6290f511.js";import"./coin-img-warning.535e3e69.js";import"./coin-img.71f49c95.js";import"./is-all-pool.9b9fe22d.js";/* empty css              */import"./icon-selected_3x.873560ed.js";import"./address-copy-link.599b3d81.js";import"./nuxt-link.0941ebd0.js";import"./icon_farms_2x.0dc8465b.js";import"./farms.695ed6af.js";import"./icon_autopools_2x.512cc379.js";import"./icon_autopools_2x.23eaf200.js";import"./icon_fee_2x.3ecbfb00.js";import"./icon_rewards_2x.0a89836e.js";import"./fetchFun.ff4aae28.js";import"./useSDK.2d03cc91.js";import"./index.4c764fc8.js";const E=S=>(go("data-v-c6c378cf"),S=S(),Po(),S),Co={class:"h5-table"},No={class:"pc-table"},Ro={key:1,class:"virtual-table"},Bo=E(()=>a("th",null,"Pool",-1)),Fo=E(()=>a("th",null,"Mining Rewards",-1)),Ho=E(()=>a("th",null,"Actions",-1)),Mo=["onClick"],Io={class:"action"},Do=po({__name:"pool-list-table",setup(S){const p=N([]),w=c(()=>p.value.map(u=>Object.assign({},{random:Math.random()},u)));I(()=>w.value,r=>{console.log("pool-list-table 虚拟dom list: ",r)});const{getTokenList:V,getToken:x}=Ao(),A=X(),n=c(()=>A),B=c(()=>(console.log("🚀 ~ poolList ~ suiPool.value.poolList:",n.value.poolList),n.value.poolList)),L=c(()=>n.value.isAllPool),f=c(()=>n.value.incentiveTypeList),y=c(()=>n.value.selectLabel),d=c(()=>n.value.filterPoolCoinList),Z=Lo(),W=c(()=>Z),$=c(()=>W.value.poolsStatsObj),oo=c(()=>W.value.isStatsApiError),q=async(r,u)=>{console.log("🚀🚀🚀 ~ file: pools.vue:181 ~ buildPoolList ~ statsInfo, list:",r,u);let h=[];for(let o=0;o<u.length;o++){const t=u[o],_=r[t.address],g=await x(u[o].displayTokenAAddress),P=await x(u[o].displayTokenBAddress),H=[];g!=null&&g.labels&&H.push(...g.labels),P!=null&&P.labels&&H.push(...P.labels);let O=!1,G=!1;_&&_.stableFarming&&_.stableFarming.length>0&&(O=!0),_&&_.autoPool&&_.autoPool.clmm_pool&&(G=!0);const U={...t,tvl:0,fees24:0,totalApr:0,volume24:0,..._,tokenA:g,tokenB:P,labels:[...new Set(H)],isFarming:O,isVaults:G};(!L.value&&g.is_trusted&&P.is_trusted||L.value)&&h.push(U)}let s=[];f.value.length>0?h.forEach(o=>{(f.value.includes("Mining")&&o.haveMining||f.value.includes("Farming")&&o.isFarming||f.value.includes("No incentives")&&!o.haveMining&&!o.isFarming)&&s.push(o)}):s=[],console.log("🚀🚀🚀 ~ file: pools.vue:259 ~ buildPoolList ~ incentivePool:",s);let e=[];y.value!=="All"?s.forEach(o=>{o.labels.includes(y.value)&&e.push(o)}):e=s;let T=[];d.value&&d.value.length>0?(console.log("🚀🚀🚀 ~ file: pools.vue:282 ~ buildPoolList ~ filterPoolCoinList.value.length:",d.value.length),e.forEach(o=>{d.value.length==2&&(d.value[0]==o.displayTokenAAddress||d.value[0]==o.displayTokenBAddress)&&(d.value[1]==o.displayTokenAAddress||d.value[1]==o.displayTokenBAddress)&&T.push(o),d.value.length==1&&(d.value[0]==o.displayTokenAAddress||d.value[0]==o.displayTokenBAddress)&&T.push(o)})):T=e;let v=T,m=[];l.value.label=="Volume (24H)"&&(m=l.value.sort=="desc"?v.sort((o,t)=>t.volume24-o.volume24):v.sort((o,t)=>o.volume24-t.volume24)),l.value.label=="Liquidity"&&(m=l.value.sort=="desc"?v.sort((o,t)=>t.tvl-o.tvl):v.sort((o,t)=>o.tvl-t.tvl)),l.value.label=="Fees (24H)"&&(m=l.value.sort=="desc"?v.sort((o,t)=>t.fees24-o.fees24):v.sort((o,t)=>o.fees24-t.fees24)),l.value.label=="APR (24H)"&&(m=l.value.sort=="desc"?v.sort((o,t)=>t.totalApr-o.totalApr):v.sort((o,t)=>o.totalApr-t.totalApr)),A.setPoolListNum(m&&m.length),p.value=m,A.setPoolListLoading(!1),console.log("🚀🚀🚀 ~ file: pools.vue:194 ~ buildPoolList ~ pageList.value:",m)},l=N({label:"Volume (24H)",sort:"desc"}),k=r=>{l.value=r,q($.value,B.value),console.log("🚀🚀🚀 ~ file: pools.vue:234 ~ changeSort ~ sortInfo.value:",l.value)},F=c(()=>(console.log("🚀🚀🚀 ~ file: pool-list-table.vue:265 ~ isPoolLoading ~ suiPool.value.isPoolLoading:",n.value.isPoolLoading),n.value.isPoolLoading)),eo=Y(),to=c(()=>eo.allTokensObj);I(()=>[$.value,B.value,oo.value,to.value,L.value,f.value,y.value,d.value],([r,u,h,s])=>{console.log("🚀 ~ watch ~ poolsStatsObj:",u,r,s),(r&&!D(r)||h)&&u&&u.length>0&&s&&!D(s)&&(console.log("🚀🚀🚀 ~ file: pool-list-table.vue:276 ~ buildPoolList:",s),q(r,u))},{immediate:!0});const j=N(null);Q(()=>{console.log("🚀 ~ file: pools.vue:20 ~ onMounted ~ onMounted start"),window.scroller=j.value});const z=[{title:"Pools",hasSort:!1,tdWidth:"370px",isNotShowTitle:!0,component:"pool-name-block"},{title:"Liquidity",hasSort:!0,tdWidth:"150px",value:"tvlDisplay"},{title:"Volume (24H)",hasSort:!0,tdWidth:"150px",value:"volume24Display"},{title:"Fees (24H)",hasSort:!0,tdWidth:"150px",value:"fees24Display"},{title:"Mining Rewards",hasSort:!1,tdWidth:"150px",component:"reward-coin"},{title:"APR (24H)",hasSort:!0,toolTip:"Estimated according to trading activity in the past 24 hours",tdWidth:"130px",component:"apr-tips"},{title:"Actions",hasSort:!1,tdWidth:"180px",isNotShowTitle:!0,component:"swap-add"}],lo=vo();return(r,u)=>{const h=co,s=mo("RecycleScroller");return b(),R("div",null,[a("div",Co,[i(ko,{"h5-title":"Pools","page-name":"pools","key-field":"poolAddress","sort-info":l.value,"item-size":325,"data-source-length":10,loading:F.value,columns:z,"data-source":p.value,"card-action":"swap-add",onChangeSort:k},null,8,["sort-info","loading","data-source"])]),a("div",No,[F.value?(b(),J(To,{key:0,columns:z,"data-source-length":10})):(b(),R("table",Ro,[i(s,{ref_key:"scroller",ref:j,class:"scroller",items:w.value,"item-size":86,"key-field":"address","page-mode":"",full:"",page:"",prerender:20,buffer:500},{before:K(()=>[a("thead",null,[Bo,i(C,{label:"Liquidity","sort-info":l.value,onSort:k},null,8,["sort-info"]),i(C,{label:"Volume (24H)","sort-info":l.value,onSort:k},null,8,["sort-info"]),i(C,{label:"Fees (24H)","sort-info":l.value,onSort:k},null,8,["sort-info"]),Fo,i(C,{label:"APR (24H)","tool-tip":"Estimated according to trading activity in the past 24 hours","sort-info":l.value,onSort:k},null,8,["sort-info"]),Ho])]),default:K(({item:e})=>[(b(),R("tr",{key:e.address,onClick:fo(T=>ho(lo).push(`/liquidity/deposit?poolAddress=${e==null?void 0:e.poolAddress}`),["stop"])},[a("td",null,[i(h,{"pool-info":e},null,8,["pool-info"])]),a("td",null,M(e.tvlDisplay||"$0"),1),a("td",null,M(e.volume24Display||"$0"),1),a("td",null,M(e.fees24Display||"$0"),1),a("td",null,[i(io,{"reward-list":e.miningRewardList||[]},null,8,["reward-list"])]),a("td",null,[i(no,{"pool-info":e},null,8,["pool-info"])]),a("td",null,[a("div",Io,[i(ro,{"from-coin-address":e.tokenAAddress,"to-coin-address":e.tokenBAddress},null,8,["from-coin-address","to-coin-address"]),i(uo,{"pool-address":e.address},null,8,["pool-address"])])])],8,Mo))]),_:1},8,["items"])]))]),!F.value&&p.value&&p.value.length==0?(b(),J(wo,{key:0,url:"/sui-image/img-no-Positions@2x.png",text:"No pools found"})):_o("",!0)])}}});const Eo=bo(Do,[["__scopeId","data-v-c6c378cf"]]),Vo={class:"pools-list-container"},Ce={__name:"list",setup(S){const p=X(),w=N(!1),{getPoolList:V}=xo(),x=Y(),A=c(()=>x.allTokensObj);return Q(async()=>{await yo(1e3),w.value=!0}),I(()=>A.value,n=>{console.log("🚀🚀🚀 ~ file: list.vue:47 ~ watch ~ allTokensObj:",n),n&&!D(n)&&V()}),So(()=>{p.setIncentiveTypeList(""),p.setPoolListNum(""),p.setIsAllPool(!0),p.setLabel("All"),p.setFilterPoolCoinList([])}),(n,B)=>{const L=so,f=ao,y=Eo;return b(),R("div",Vo,[i(L,{"current-tab":"Pools"}),i(f),i(y)])}}};export{Ce as default};
