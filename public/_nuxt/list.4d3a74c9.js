import{_ as te}from"./pool-position-tab.54ccd6ac.js";import{u as le,P as se}from"./pool-filter-block.8593a80c.js";import{R as w,a as ae,A as ie,T as ne,b as re,P as ue}from"./to-add.8d2cf301.js";import{u as ce}from"./useToken.954b6ffa.js";import{u as X}from"./pool.875cae82.js";import{u as de}from"./stats.b5066fe7.js";import{c as pe}from"./index.f094823b.js";import{u as ve}from"./useStatsData.f1a67416.js";import{H as me,T as fe,N as _e}from"./h5-table-card.6584ee37.js";import{a as he,r as D,m as u,D as J,y as Y,M as ge,o as P,f as x,h as s,i as a,c as K,w as Q,v as I,x as be,p as Pe,k as Se,e as Z,C as ye}from"./entry.4f036a85.js";import"./select-tab.7e84129e.js";import"./pool.01002111.js";import"./decimal.0bdeb344.js";import"./filter-pool-by-coin.54907d1a.js";import"./coin-select.dc86729c.js";import"./import-icon.de3e6c66.js";/* empty css              *//* empty css              */import"./token-warning_2x.2c244dba.js";import"./img-no-Positions_2x.0f61abfb.js";import"./img-no-Positions_2x.4a37b723.js";import"./coin-img.adb58d5e.js";import"./token-warning-new.2aa6763b.js";import"./token.87aa018c.js";import"./is-all-pool.a6ef0969.js";/* empty css              */import"./icon-selected_3x.09e9a6f0.js";import"./fetchFun.6c77ee5b.js";import"./nuxt-link.7abb2d34.js";import"./icon_farms_2x.907773c2.js";import"./farms.bec24a90.js";import"./icon_autopools_2x.9e2f7efe.js";import"./icon_autopools_2x.11cf2f88.js";import"./icon_fee_2x.e06fc0b4.js";import"./icon_rewards_2x.666fbb7e.js";import"./formatter.ba4f6587.js";import"./index.84953f6f.js";const M=S=>(Pe("data-v-41c9649d"),S=S(),Se(),S),Ae={class:"h5-table"},Le={class:"pc-table"},ke={key:1,class:"virtual-table"},Te=M(()=>s("th",null,"Pool",-1)),we=M(()=>s("th",null,"Mining Rewards",-1)),xe=M(()=>s("th",null,"Actions",-1)),Ce={class:"action"},Ne=he({__name:"pool-list-table",setup(S){const{getPoolList:_}=le(),{getStatusData:E}=ve(),h=D([]),L=u(()=>h.value.map(n=>Object.assign({},{random:Math.random()},n)));J(()=>L.value,i=>{console.log("pool-list-table 虚拟dom list: ",i)});const{getTokenList:C,getToken:k}=ce(),N=X(),v=u(()=>N),V=u(()=>(console.log("🚀 ~ poolList ~ suiPool.value.poolList:",v.value.poolList),v.value.poolList)),B=u(()=>v.value.isAllPool),y=u(()=>v.value.incentiveTypeList),F=u(()=>v.value.selectLabel),r=u(()=>v.value.filterPoolCoinList),ee=de(),W=u(()=>ee),$=u(()=>W.value.poolsStatsObj),oe=u(()=>W.value.isStatsApiError),q=async(i,n)=>{console.log("🚀🚀🚀 ~ file: pools.vue:181 ~ buildPoolList ~ statsInfo, list:",i,n);let m=[];for(let e=0;e<n.length;e++){const o=n[e],f=i[o.address],g=await k(n[e].displayTokenAAddress),b=await k(n[e].displayTokenBAddress),R=[];g!=null&&g.labels&&R.push(...g.labels),b!=null&&b.labels&&R.push(...b.labels);let O=!1,U=!1;f&&f.stableFarming&&f.stableFarming.length>0&&(O=!0),f&&f.autoPool&&f.autoPool.clmm_pool&&(U=!0);const G={...o,tvl:0,fees24:0,totalApr:0,volume24:0,...f,tokenA:g,tokenB:b,labels:[...new Set(R)],isFarming:O,isVaults:U};(!B.value&&g.is_trusted&&b.is_trusted||B.value)&&m.push(G)}let c=[];y.value.length>0?m.forEach(e=>{(y.value.includes("Mining")&&e.haveMining||y.value.includes("Farming")&&e.isFarming||y.value.includes("No incentives")&&!e.haveMining&&!e.isFarming)&&c.push(e)}):c=[],console.log("🚀🚀🚀 ~ file: pools.vue:259 ~ buildPoolList ~ incentivePool:",c);let l=[];F.value!=="All"?c.forEach(e=>{e.labels.includes(F.value)&&l.push(e)}):l=c;let T=[];r.value&&r.value.length>0?(console.log("🚀🚀🚀 ~ file: pools.vue:282 ~ buildPoolList ~ filterPoolCoinList.value.length:",r.value.length),l.forEach(e=>{r.value.length==2&&(r.value[0]==e.displayTokenAAddress||r.value[0]==e.displayTokenBAddress)&&(r.value[1]==e.displayTokenAAddress||r.value[1]==e.displayTokenBAddress)&&T.push(e),r.value.length==1&&(r.value[0]==e.displayTokenAAddress||r.value[0]==e.displayTokenBAddress)&&T.push(e)})):T=l;let d=T,p=[];t.value.label=="Volume (24H)"&&(p=t.value.sort=="desc"?d.sort((e,o)=>o.volume24-e.volume24):d.sort((e,o)=>e.volume24-o.volume24)),t.value.label=="Liquidity"&&(p=t.value.sort=="desc"?d.sort((e,o)=>o.tvl-e.tvl):d.sort((e,o)=>e.tvl-o.tvl)),t.value.label=="Fees (24H)"&&(p=t.value.sort=="desc"?d.sort((e,o)=>o.fees24-e.fees24):d.sort((e,o)=>e.fees24-o.fees24)),t.value.label=="APR (24H)"&&(p=t.value.sort=="desc"?d.sort((e,o)=>o.totalApr-e.totalApr):d.sort((e,o)=>e.totalApr-o.totalApr)),N.setPoolListNum(p&&p.length),h.value=p,N.setPoolListLoading(!1),console.log("🚀🚀🚀 ~ file: pools.vue:194 ~ buildPoolList ~ pageList.value:",p)},t=D({label:"Volume (24H)",sort:"desc"}),A=i=>{t.value=i,q($.value,V.value),console.log("🚀🚀🚀 ~ file: pools.vue:234 ~ changeSort ~ sortInfo.value:",t.value)},H=u(()=>v.value.isPoolLoading);J(()=>[$.value,V.value,oe.value,B.value,y.value,F.value,r.value],([i,n,m])=>{console.log("🚀 ~ watch ~ poolsStatsObj:",n,i),(i&&!pe(i)||m)&&n&&n.length>0&&q(i,n)},{immediate:!0});const j=D(null);Y(()=>{console.log("🚀 ~ file: pools.vue:20 ~ onMounted ~ onMounted start"),_(),C(),E(),window.scroller=j.value});const z=[{title:"Pools",hasSort:!1,tdWidth:"370px",isNotShowTitle:!0,component:"pool-name-block"},{title:"Liquidity",hasSort:!0,tdWidth:"150px",value:"tvlDisplay"},{title:"Volume (24H)",hasSort:!0,tdWidth:"150px",value:"volume24Display"},{title:"Fees (24H)",hasSort:!0,tdWidth:"150px",value:"fees24Display"},{title:"Mining Rewards",hasSort:!1,tdWidth:"150px",component:"reward-coin"},{title:"APR (24H)",hasSort:!0,toolTip:"Estimated according to trading activity in the past 24 hours",tdWidth:"130px",component:"apr-tips"},{title:"Actions",hasSort:!1,tdWidth:"180px",isNotShowTitle:!0,component:"swap-add"}];return(i,n)=>{const m=ue,c=ge("RecycleScroller");return P(),x("div",null,[s("div",Ae,[a(me,{"h5-title":"Pools","key-field":"poolAddress","sort-info":t.value,"item-size":300,"data-source-length":10,loading:H.value,columns:z,"data-source":h.value,"card-action":"swap-add",onChangeSort:A},null,8,["sort-info","loading","data-source"])]),s("div",Le,[H.value?(P(),K(fe,{key:0,columns:z,"data-source-length":10})):(P(),x("table",ke,[a(c,{ref_key:"scroller",ref:j,class:"scroller",items:L.value,"item-size":86,"key-field":"address",prerender:20,buffer:200},{before:Q(()=>[s("thead",null,[Te,a(w,{label:"Liquidity","sort-info":t.value,onSort:A},null,8,["sort-info"]),a(w,{label:"Volume (24H)","sort-info":t.value,onSort:A},null,8,["sort-info"]),a(w,{label:"Fees (24H)","sort-info":t.value,onSort:A},null,8,["sort-info"]),we,a(w,{label:"APR (24H)","tool-tip":"Estimated according to trading activity in the past 24 hours","sort-info":t.value,onSort:A},null,8,["sort-info"]),xe])]),default:Q(({item:l})=>[(P(),x("tr",{key:l.address},[s("td",null,[a(m,{"pool-info":l},null,8,["pool-info"])]),s("td",null,I(l.tvlDisplay||"$0"),1),s("td",null,I(l.volume24Display||"$0"),1),s("td",null,I(l.fees24Display||"$0"),1),s("td",null,[a(ae,{"reward-list":l.miningRewardList||[]},null,8,["reward-list"])]),s("td",null,[a(ie,{"pool-info":l},null,8,["pool-info"])]),s("td",null,[s("div",Ce,[a(ne,{"from-coin-address":l.tokenAAddress,"to-coin-address":l.tokenBAddress},null,8,["from-coin-address","to-coin-address"]),a(re,{"pool-address":l.address},null,8,["pool-address"])])])]))]),_:1},8,["items"])]))]),!H.value&&h.value&&h.value.length==0?(P(),K(_e,{key:0,url:"/sui-image/img-no-Positions@2x.png",text:"No pools found"})):be("",!0)])}}});const Be=Z(Ne,[["__scopeId","data-v-41c9649d"]]);const Fe={class:"pools-list-container"},He={__name:"list",setup(S){const _=X();return Y(()=>{}),ye(()=>{_.setIncentiveTypeList(""),_.setIsAllPool(!0),_.setLabel("All"),_.setFilterPoolCoinList([])}),(E,h)=>{const L=te,C=se,k=Be;return P(),x("div",Fe,[a(L,{"current-tab":"Pools"}),a(C),a(k)])}}},go=Z(He,[["__scopeId","data-v-9106b858"]]);export{go as default};
