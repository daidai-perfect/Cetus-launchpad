import{a as E,r as b,m as T,A as q,q as K,s as Ae,o as d,f as k,h as s,x as V,F as se,E as ae,i,G as Y,v as He,d0 as Re,O as xe,y as ne,e as M,u as Ue,c as F,S as We,l as N,w as G,p as le,k as re,b as ze,t as Ee}from"./entry.8e75b3ab.js";/* empty css              */import"./index.3262999c.js";import{u as ie}from"./index.4ed5b0c4.js";import{c as oe}from"./index.91fc242d.js";import{l as Me}from"./lodash.6f79ae30.js";import{q as z,c as O,s as Be}from"./common.26dbc61a.js";import{u as Q}from"./stats.ba3e1eae.js";import{f as Ye}from"./formatter.a7b38663.js";import"./index.abd2f5b0.js";import{i as Fe}from"./import-icon.de3e6c66.js";import{R as ce,A as Oe,P as je}from"./to-add.13d011a5.js";import{u as ue}from"./useToken.fef31a36.js";import{T as pe,H as de,a as Je}from"./h5-table-card.051ca4b8.js";import{N as me}from"./no-data.b250fa45.js";import{u as ve}from"./token.ebb2586c.js";import{S as qe}from"./select-tab.ad9e011f.js";import{u as Ge}from"./useStatsData.019fe045.js";import"./install.0c190e2b.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";/* empty css              */import"./token-warning_2x.0f0ae6ce.js";import"./coin-img-warning.a4e33e8e.js";import"./coin-img.6109f284.js";import"./nuxt-link.821e814d.js";import"./icon_farms_2x.9af88e3f.js";import"./farms.92bc6368.js";import"./icon_autopools_2x.825738f9.js";import"./icon_autopools_2x.4a0f7198.js";import"./icon-tooltip.9c059160.js";import"./icon_fee_2x.b9271b4c.js";import"./icon_rewards_2x.05e06a19.js";import"./pool.33cf711b.js";import"./fetchFun.ff4aae28.js";import"./useSDK.c220472c.js";const Ke={class:"stats-chart-container"},Qe={class:"chart-top"},Xe={class:"trading-vol"},Ze={class:"title"},et={class:"text"},tt=["innerHTML"],ot={class:"time-list"},st=["onClick"],at={key:0,class:"loading-box"},nt={class:"chart-content"},lt=["id"];var Z=(e=>(e.D="day",e.W="wek",e.M="mon",e))(Z||{}),_e=(e=>(e[e.D=40]="D",e[e.W=30]="W",e[e.M=20]="M",e))(_e||{}),U=(e=>(e[e.Jan=1]="Jan",e[e.Feb=2]="Feb",e[e.Mar=3]="Mar",e[e.Apr=4]="Apr",e[e.May=5]="May",e[e.Jun=6]="Jun",e[e.Jul=7]="Jul",e[e.Aug=8]="Aug",e[e.Sep=9]="Sep",e[e.Oct=10]="Oct",e[e.Nov=11]="Nov",e[e.Dec=12]="Dec",e))(U||{}),he=(e=>(e[e.D=1]="D",e[e.W=4]="W",e[e.M=12]="M",e))(he||{}),fe=(e=>(e[e.D=1]="D",e[e.W=2]="W",e[e.M=4]="M",e))(fe||{});const rt=E({__name:"stats-sui-chart",props:{chartType:{type:String,default:"tvl"}},setup(e){const c=e,n=b("D"),w=["D","W","M"],h=b(""),D=b("24H"),m=ie();T(()=>m);const v=b(),a=b(),$=b(""),u=b(!1),H=Q(),S=T(()=>H),C=T(()=>S.value.overallStatistics);q(()=>[C.value,c.chartType],([l,p])=>{O(l)||($.value=p=="tvl"?l.totalValueLockedDisplay:l.volInUsd24h)},{immediate:!0});const r=async()=>{u.value=!0;try{const l=_e[n.value],{data:p}=c.chartType=="tvl"?await fetch(`${oe.Sui.api}/v2/sui/histogram/all?date_type=${Z[n.value]}&typ=pure_tvl`).then(g=>g.json()):await fetch(`${oe.Sui.api}/v2/sui/histogram/all?date_type=${Z[n.value]}&typ=vol`).then(g=>g.json());console.log("🚀 ~ getHistogram ~ data:",p);const P=p.list.map(g=>g.num),I=p.list.map(g=>g.date);v.value=P,a.value=I,_(P,I,l),console.log("🚀🚀🚀 ~ file: pool-list-chart.vue:70 ~ getHistogram ~ data:",p)}catch(l){console.info("🚀🚀🚀 ~ file: pool-list-chart.vue:50 ~ getHistogram ~ error:",l)}},f=b(),_=(l,p,P)=>{const I=document.getElementById(`stats-chart-${c.chartType}`),g=He(I);f.value=g;let R={animation:!1,tooltip:{trigger:"axis",position:function(A,B,x,W,j){return[A[0]-50,"10%"]},backgroundColor:"#28353F",borderColor:"transparent",formatter:function(A){L(A)},padding:0,axisPointer:{type:"line",lineStyle:{width:n.value=="D"?1:n.value=="W"?2:4,type:"solid",color:"#456D89"}}},xAxis:{type:"category",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},splitArea:{show:!1},data:p.reverse(),inverse:!0,axisLabel:{interval:parseInt(Number(l.length)/6),formatter:(A,B)=>{const x=z(Date.parse(A)-288e5,"YMD")||"";let W,j=x.slice(5,7),X=U[Number(j)];return n.value=="M"?W=X:W=x.slice(8,10),`${W}`}}},yAxis:{show:!1,max:function(A){return Math.ceil(A.max)}},series:[{data:l.reverse(),inverse:!0,type:c.chartType=="tvl"?"line":"bar",symbol:"none",itemStyle:{normal:{barBorderRadius:1,color:"#72C1F7"}},areaStyle:{color:new Re(0,0,0,1,[{offset:0,color:"rgba(0, 128, 255, 0.3)"},{offset:1,color:"rgba(0, 128, 255, 0)"}])},barWidth:y.value?he[n.value]:fe[n.value]}],grid:{left:20,top:5,bottom:24,right:20}};u.value=!1,R&&g.setOption(R),g&&g.resize(),g.on("globalout",A=>{$.value=c.chartType=="tvl"?C.value.totalValueLockedDisplay:C.value.volInUsd24h,D.value="24H",o()})};q(()=>n.value,(l,p)=>{(!p||l!==p)&&r()},{immediate:!0});const y=b(!0),t=Me.debounce(()=>{document.body.clientWidth>750?y.value=!0:y.value=!1,!v.value&&!a.value?r():f.value&&f.value.resize()},300);K(()=>{window.addEventListener("resize",t),o()}),Ae(()=>{window.removeEventListener("resize",t)});const o=()=>{const l=z(Date.parse(new Date().toUTCString()),"YMD")||"";let p=l.slice(5,7),P=U[Number(p)];const I=l.slice(8,10),g=P,R=l.slice(0,4);h.value=g+"&nbsp;"+I+",&nbsp;"+R+"&nbsp;(UTC)"},L=l=>{$.value=Ye(l[0].value,2),D.value=n.value=="D"?"24H":n.value=="W"?"7D":"30D";const p=Date.parse(l[0].axisValue),P=new Date(p);P.setDate(P.getDate()+7);const I=new Date(p);I.setDate(I.getDate()+31);const g=P.toUTCString(),R=I.toUTCString(),A=z(Date.parse(R),"YMD")||"",B=z(Date.parse(new Date().toUTCString()),"YMD")||"",x=Date.parse(g)>Date.parse(new Date().toUTCString())?z(Date.parse(new Date().toUTCString()),"YMD")||"":z(Date.parse(g),"YMD")||"";let W=B.slice(5,7),j=U[Number(W)];const X=B.slice(8,10),Te=j,ke=B.slice(0,4);let ee=l[0].axisValue.slice(5,7),De=U[Number(ee)];const te=l[0].axisValue.slice(8,10),J=De,$e=l[0].axisValue.slice(0,4);let we=x.slice(5,7),Ce=U[Number(we)];const Le=x.slice(8,10),Ie=Ce,Ve=x.slice(0,4),Ne=U[Number(ee)+1],Pe=A.slice(0,4);n.value=="D"?h.value=J+"&nbsp;"+te+",&nbsp;"+$e+"&nbsp;(UTC)":n.value=="W"?h.value=te+"&nbsp;"+J+"-"+Le+"&nbsp;"+Ie+"&nbsp;,&nbsp;"+Ve+"&nbsp;(UTC)":h.value=Date.parse(R)>=Date.parse(new Date().toUTCString())?J+"&nbsp;01-"+Te+"&nbsp;"+X+",&nbsp;"+ke+"&nbsp;(UTC)":J+"&nbsp;01-"+Ne+"&nbsp;01,&nbsp;"+Pe+"&nbsp;(UTC)"};return(l,p)=>{const P=xe;return d(),k("div",Ke,[s("div",Qe,[s("div",Xe,[s("div",Ze,V(e.chartType=="tvl"?"Total Value Locked":`Trading Volume  (${D.value})`),1),s("div",et," $"+V($.value===""?"--":Number($.value)==0?0:$.value),1),s("span",{innerHTML:h.value},null,8,tt)]),s("div",ot,[(d(),k(se,null,ae(w,I=>s("div",{key:I,class:ne(["time-item",I==n.value?"time-item-active":""]),onClick:g=>n.value=I},V(I),11,st)),64))])]),u.value?(d(),k("div",at,[i(P)])):Y("",!0),s("div",nt,[s("div",{id:`stats-chart-${e.chartType}`,class:"stats-chart"},null,8,lt)])])}}});const ge=M(rt,[["__scopeId","data-v-69b2fb4f"]]),it=E({setup(){const e=Q(),c=T(()=>e),n=T(()=>c.value.overallStatistics),w=T(()=>[{img_url:"/sui-image/icon_cumulativevolume@2x.png",label:"Cumulative Volume",symbol:"$",value:n.value.cumulativeVolumeDisplay},{img_url:"/sui-image/icon_totalvaluelocked@2x.png",label:"Total Value Locked",symbol:"$",value:n.value.totalValueLockedDisplay},{img_url:"/sui-image/icon_cumulativetransactions@2x.png",label:"Cumulative Transactions",symbol:"",value:n.value.cumulativeTransactionsDisplay},{img_url:"/sui-image/icon_accounts@2x.png",label:"Total Accounts",symbol:"",value:n.value.totalAccountsDisplay}]);return{checkNullObj:O,overallStatistics:n,statisticsList:w}}});const ct={class:"stats-sui-statistics"},ut={class:"img-label"},pt=["src"],dt={class:"label"},mt={key:1,class:"value"};function vt(e,c,n,w,h,D){const m=We;return d(),k("div",ct,[(d(!0),k(se,null,ae(e.statisticsList,v=>(d(),k("div",{key:v.label,class:"item"},[s("div",ut,[s("img",{src:v.img_url},null,8,pt),s("div",dt,V(v.label),1)]),("checkNullObj"in e?e.checkNullObj:Ue(O))(e.overallStatistics)?(d(),F(m,{key:0,class:"upgrade-text-skeleton",active:"",paragraph:!1})):(d(),k("div",mt,V(v.symbol)+V(v.value),1))]))),128))])}const be=M(it,[["render",vt],["__scopeId","data-v-a6a15f4f"]]),_t=E({components:{RankIcon:ce,StatsAprTips:Oe,TableLoading:pe,StatsNoData:me,H5TableCard:de},setup(){const{getToken:e}=ue(),c=Q(),n=T(()=>c),w=ve(),h=T(()=>w.allTokensObj),D=T(()=>n.value.poolsStatsList),m=b(!0),v=b(null);K(()=>{window.scroller=v.value});const a=b([]),$=T(()=>a.value.map(f=>Object.assign({},{random:Math.random()},f))),u=b({label:"Volume (24H)",sort:"desc"}),H=r=>{u.value=r,S(D.value)},S=async r=>{let f=[];for(let t=0;t<r.length;t++){const o=r[t],L=await e(r[t].displayTokenAAddress),l=await e(r[t].displayTokenBAddress),p=[];L!=null&&L.labels&&p.push(...L.labels),l!=null&&l.labels&&p.push(...l.labels);const P={...o,tokenA:L,tokenB:l,labels:[...new Set(p)]};f.push(P)}let _=f,y=[];u.value.label=="Volume (24H)"&&(y=u.value.sort=="desc"?_.sort((t,o)=>o.volume24-t.volume24):_.sort((t,o)=>t.volume24-o.volume24)),u.value.label=="Volume (7D)"&&(y=u.value.sort=="desc"?_.sort((t,o)=>o.volume7d-t.volume7d):_.sort((t,o)=>t.volume7d-o.volume7d)),u.value.label=="Liquidity"&&(y=u.value.sort=="desc"?_.sort((t,o)=>o.tvl-t.tvl):_.sort((t,o)=>t.tvl-o.tvl)),u.value.label=="Fees (24H)"&&(y=u.value.sort=="desc"?_.sort((t,o)=>o.fees24-t.fees24):_.sort((t,o)=>t.fees24-o.fees24)),u.value.label=="APR (24H)"&&(y=u.value.sort=="desc"?_.sort((t,o)=>o.totalApr-t.totalApr):_.sort((t,o)=>t.totalApr-o.totalApr)),a.value=y,console.log("🚀 ~ buildPoolList ~ pageList:",a.value,y),m.value=!1};return q(()=>[D.value,h.value],([r,f])=>{r&&r.length>0&&f&&!O(f)&&S(r)},{immediate:!0}),{pageList:a,tableColumns:[{title:"Pools",hasSort:!1,tdWidth:"330px",isNotShowTitle:!0,component:"pool-name-block"},{title:"Liquidity",hasSort:!0,tdWidth:"200px",value:"tvlDisplay"},{title:"Volume (24H)",hasSort:!0,tdWidth:"200px",value:"volume24Display"},{title:"Volume (7D)",hasSort:!0,tdWidth:"200px",value:"volume7dDisplay"},{title:"Fees (24H)",hasSort:!0,tdWidth:"175px",value:"fees24Display"},{title:"APR (24H)",hasSort:!0,toolTip:"Estimated according to trading activity in the past 24 hours",tdWidth:"175px",component:"apr-tips"}],scroller:v,list:$,isPoolLoading:m,sortInfo:u,changeSort:H}}});const ht=e=>(le("data-v-b1d82ea6"),e=e(),re(),e),ft={class:"stats-sui-pools-table"},gt={class:"h5-table"},bt={class:"pc-table"},St={key:1,class:"virtual-table"},yt=ht(()=>s("th",null,"Pool",-1));function Tt(e,c,n,w,h,D){const m=N("H5TableCard"),v=N("TableLoading"),a=N("RankIcon"),$=je,u=N("StatsAprTips"),H=N("RecycleScroller"),S=N("StatsNoData");return d(),k("div",ft,[s("div",gt,[i(m,{"h5-title":"Pools","key-field":"poolAddress","sort-info":e.sortInfo,"item-size":258,"data-source-length":10,loading:e.isPoolLoading,columns:e.tableColumns,"data-source":e.pageList,onChangeSort:e.changeSort},null,8,["sort-info","loading","columns","data-source","onChangeSort"])]),s("div",bt,[e.isPoolLoading?(d(),F(v,{key:0,columns:e.tableColumns,"data-source-length":10},null,8,["columns"])):(d(),k("table",St,[i(H,{ref:"scroller",class:"scroller",items:e.list,"item-size":86,"key-field":"poolAddress","page-mode":"",full:"",page:"",prerender:20,buffer:500},{before:G(()=>[s("thead",null,[yt,i(a,{label:"Liquidity","sort-info":e.sortInfo,onSort:e.changeSort},null,8,["sort-info","onSort"]),i(a,{label:"Volume (24H)","sort-info":e.sortInfo,onSort:e.changeSort},null,8,["sort-info","onSort"]),i(a,{label:"Volume (7D)","sort-info":e.sortInfo,onSort:e.changeSort},null,8,["sort-info","onSort"]),i(a,{label:"Fees (24H)","sort-info":e.sortInfo,onSort:e.changeSort},null,8,["sort-info","onSort"]),i(a,{label:"APR (24H)","tool-tip":"Estimated according to trading activity in the past 24 hours","sort-info":e.sortInfo,onSort:e.changeSort},null,8,["sort-info","onSort"])])]),default:G(({item:C})=>[(d(),k("tr",{key:C==null?void 0:C.poolAddress},[s("td",null,[i($,{"pool-info":C},null,8,["pool-info"])]),s("td",null,V(C.tvlDisplay||"--"),1),s("td",null,V(C.volume24Display||"--"),1),s("td",null,V(C.volume7dDisplay||"--"),1),s("td",null,V(C.fees24Display||"--"),1),s("td",null,[i(u,{"pool-info":C},null,8,["pool-info"])])]))]),_:1},8,["items"])]))]),!e.isPoolLoading&&e.pageList&&e.pageList.length==0?(d(),F(S,{key:0,url:"/sui-image/img-no-Positions@2x.png",text:"No pools found"})):Y("",!0)])}const Se=M(_t,[["render",Tt],["__scopeId","data-v-b1d82ea6"]]),kt=E({components:{TokenBlock:Je,RankIcon:ce,TableLoading:pe,NoDataStats:me,H5TableCard:de},setup(){const{getToken:e}=ue(),c=Q(),n=T(()=>c),w=T(()=>n.value.tokensStatsList),h=b(!0),D=b(null);K(()=>{window.scroller=D.value});const m=b([]),v=T(()=>m.value.map(f=>Object.assign({},{random:Math.random()},f))),a=b({label:"Volume (24H)",sort:"desc"}),$=r=>{a.value=r,u(w.value)},u=async r=>{let f=[];for(let t=0;t<r.length;t++){const o=r[t],L=await e(o==null?void 0:o.address),l=[];L!=null&&L.labels&&l.push(...L.labels);const p={...o,logoURI:L==null?void 0:L.logo_url,labels:[...new Set(l)]};f.push(p)}let _=f,y=[];a.value.label=="Price"&&(y=a.value.sort=="desc"?_.sort((t,o)=>o.price-t.price):_.sort((t,o)=>t.price-o.price)),a.value.label=="Price Change"&&(y=a.value.sort=="desc"?_.sort((t,o)=>o.priceChange-t.priceChange):_.sort((t,o)=>t.priceChange-o.priceChange)),a.value.label=="Volume (24H)"&&(y=a.value.sort=="desc"?_.sort((t,o)=>o.volume24-t.volume24):_.sort((t,o)=>t.volume24-o.volume24)),a.value.label=="TVL"&&(y=a.value.sort=="desc"?_.sort((t,o)=>o.tvl-t.tvl):_.sort((t,o)=>t.tvl-o.tvl)),m.value=y,h.value=!1},H=ve(),S=T(()=>H.allTokensObj);return q(()=>[w.value,S.value],([r,f])=>{r&&r.length>0&&f&&!O(f)&&u(r)},{immediate:!0}),{pageList:m,tableColumns:[{title:"Token",hasSort:!1,tdWidth:"370px",isNotShowTitle:!0,component:"token-block"},{title:"Price",hasSort:!0,tdWidth:"240px",value:"priceDisplay"},{title:"Price Change",hasSort:!0,tdWidth:"215px",value:"priceChangeDisplay"},{title:"Volume (24H)",hasSort:!0,tdWidth:"240px",value:"volume24Display"},{title:"TVL",hasSort:!0,tdWidth:"215px",value:"tvlDisplay"}],scroller:D,list:v,isTokenLoading:h,sortInfo:a,changeSort:$}}});const Dt=e=>(le("data-v-5b2739ad"),e=e(),re(),e),$t={class:"aptos-stats-sui-tokens-table"},wt={class:"h5-table"},Ct={class:"pc-table"},Lt={key:1,class:"virtual-table"},It=Dt(()=>s("th",null,"Token",-1));function Vt(e,c,n,w,h,D){const m=N("H5TableCard"),v=N("TableLoading"),a=N("RankIcon"),$=N("TokenBlock"),u=N("RecycleScroller"),H=N("NoDataStats");return d(),k("div",$t,[s("div",wt,[i(m,{"h5-title":"Tokens","key-field":"address","sort-info":e.sortInfo,"item-size":218,"data-source-length":10,loading:e.isTokenLoading,columns:e.tableColumns,"data-source":e.pageList,onChangeSort:e.changeSort},null,8,["sort-info","loading","columns","data-source","onChangeSort"])]),s("div",Ct,[e.isTokenLoading?(d(),F(v,{key:0,columns:e.tableColumns,"data-source-length":10},null,8,["columns"])):(d(),k("table",Lt,[i(u,{ref:"scroller",class:"scroller",items:e.list,"item-size":86,"key-field":"address","page-mode":"",full:"",page:"",prerender:20,buffer:500},{before:G(()=>[s("thead",null,[It,i(a,{label:"Price","sort-info":e.sortInfo,onSort:e.changeSort},null,8,["sort-info","onSort"]),i(a,{label:"Price Change","sort-info":e.sortInfo,onSort:e.changeSort},null,8,["sort-info","onSort"]),i(a,{label:"Volume (24H)","sort-info":e.sortInfo,onSort:e.changeSort},null,8,["sort-info","onSort"]),i(a,{label:"TVL","sort-info":e.sortInfo,onSort:e.changeSort},null,8,["sort-info","onSort"])])]),default:G(({item:S})=>[(d(),k("tr",{key:S==null?void 0:S.address},[s("td",null,[i($,{"token-info":S,"justify-content":"flex-start","is-have-label":!0},null,8,["token-info"])]),s("td",null,"$"+V(S.priceDisplay||"--"),1),s("td",null,[s("span",{class:ne(S.priceChangeDisplay.includes("-")?"redecue-change-price":"add-change-price")},V(S.priceChangeDisplay||"--"),3)]),s("td",null,V(S.volume24Display||"--"),1),s("td",null,V(S.tvlDisplay||"--"),1)]))]),_:1},8,["items"])]))]),!e.isTokenLoading&&e.pageList&&e.pageList.length==0?(d(),F(H,{key:0,url:"/sui-image/img-no-Positions@2x.png",text:"No tokens found"})):Y("",!0)])}const ye=M(kt,[["render",Vt],["__scopeId","data-v-5b2739ad"]]),Nt=E({components:{StatsTab:qe,StatsPoolsTable:Se,StatsTokensTable:ye},setup(){const e=[{name:"Pools",logo:"/sui-image/icon_pools@2x.png"},{name:"Tokens",logo:"/sui-image/icon_tokens@2x.png"}];return{currentTab:b("Pools"),tabList:e}}});const Pt={class:"pools-tokens-transitions"},At={class:"tab-box"},Ht={key:0,class:"table-box"},Rt={key:1,class:"table-box"};function xt(e,c,n,w,h,D){const m=N("StatsTab"),v=Se,a=ye;return d(),k("div",Pt,[s("div",At,[i(m,{"tab-list":e.tabList,"current-tab":e.currentTab,onOnClick:c[0]||(c[0]=$=>{e.currentTab=$.name})},null,8,["tab-list","current-tab"])]),e.currentTab=="Pools"?(d(),k("div",Ht,[i(v)])):Y("",!0),e.currentTab=="Tokens"?(d(),k("div",Rt,[i(a)])):Y("",!0)])}const Ut=M(Nt,[["render",xt],["__scopeId","data-v-44b8cbc0"]]),Wt=E({components:{StatsSuiChart:ge,StatsSuiStatistics:be,PoolsTokensTransitions:Ut},setup(){const e=ie(),c=T(()=>e),n=ze(),w=T(()=>c.value.chainName),h=b(!1),{getStatusData:D}=Ge();K(async()=>{await Be(1e3),h.value=!0}),Ee(()=>{h.value&&(console.log("🚀 ~ watchEffect ~ isMounted.value:",h.value),D())});const m=T(()=>c.value.theme);return{chainName:w,theme:m,store:c,importIcon:Fe,router:n}}});const zt={class:"stats-sui-container"},Et={class:"title"},Mt={class:"chart-box"};function Bt(e,c,n,w,h,D){const m=ge,v=be,a=N("PoolsTokensTransitions");return d(),k("div",zt,[s("div",Et,V(e.$t("menu.stats")),1),s("div",Mt,[i(m,{"chart-type":"tvl"}),i(m,{"chart-type":"vol"})]),i(v),i(a)])}const Co=M(Wt,[["render",Bt],["__scopeId","data-v-8785ec0a"]]);export{Co as default};
