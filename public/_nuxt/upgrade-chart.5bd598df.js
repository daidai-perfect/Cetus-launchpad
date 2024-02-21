import{d as P,c as L,a as $}from"./pool.ec7155de.js";import{a as J,r as n,l as H,q as O,H as Z,X as G,K,R as X,aa as Q,e as Y,o as p,f as y,h as l,u as g,c as ee,v as D,x as U,A as F,i as ae,M as te,S as oe,p as se,k as ne}from"./entry.99d20ac2.js";/* empty css              *//* empty css              */import{u as le,c as ie}from"./sha256.f7311d31.js";import"./index.6d928ef2.js";import{l as re}from"./lodash.afd737e1.js";const ue=J({props:{mode:{type:String,required:!1,default:"vol"},address:{type:String,required:!1,default:""},poolInfo:{type:Object,required:!1,default:()=>({})}},setup(e){const c=le(),k=n(!1),t=H(()=>c),W=a=>{switch(a){case"vol":return"Volume (24H)";case"tvl":return"TVL";case"fee":return"Fees (24H)"}},C=H(()=>ie[t.value.chainName]),S=n(0),I=n(0),N=n(0),M=n(0),V=n(""),E=n("--"),T=re.debounce(()=>{B(_.value)},300);O(()=>e.mode,(a,h)=>{a!==h&&(k.value=!0,B(_.value))}),O(()=>e.address,(a,h)=>{a!==h&&(k.value=!0,B(_.value))});const j=n(null);Z(()=>{window.addEventListener("resize",T),setTimeout(()=>{document.body.clientWidth<750?m(40,100,4,e.mode,"day"):m(40,100,8,e.mode,"day")},100),j.value=window.setInterval(()=>{B(_.value)},12e4)}),G(()=>{window.clearInterval(j.value)}),K(()=>{window.removeEventListener("resize",T)}),X(()=>{if(!L(t.value.statsData||{})&&t.value.chainName){console.log(t.value.statsData,"===>store.statsData");const a=t.value.chainName=="Sui"?t.value.statsData.vol_in_usd_24h:t.value.statsData.vol_in_usd_24h_sum_v1;t.value.chainName=="Sui"?t.value.statsData.tvl_in_usd:t.value.statsData.tvl_in_usd_sum_v1,S.value=a,V.value=a,I.value=t.value.statsData.vol_in_usd,N.value=t.value.statsData.pure_tvl_in_usd,M.value=t.value.statsData.tx_num}});const _=n("D"),i=n({}),R=a=>{_.value=a,B(a)},B=a=>{a=="D"?document.body.clientWidth<750?m(40,100,4,e.mode,"day"):m(40,100,8,e.mode,"day"):a=="W"?document.body.clientWidth<750?m(20,100,6,e.mode,"wek"):m(30,100,12,e.mode,"wek"):a=="M"&&(document.body.clientWidth<750?m(20,100,12,e.mode,"mon"):m(20,100,18,e.mode,"mon"))},m=async(a,h,z,w,v)=>{const{data:f}=e.address!==""?t.value.theme=="default"?await fetch(`${C.value.api}/v2/histogram?date_type=${v}&typ=${w}&limit=${a}&swap_account=${e.address}`).then(s=>s.json()):await fetch(`${C.value.api}/v2/sui/histogram?date_type=${v}&typ=${w}&limit=${a}&address=${e.address}`).then(s=>s.json()):t.value.theme=="default"?await fetch(`${C.value.api}/v2/histogram?date_type=${v}&typ=${w}&limit=${a}`).then(s=>s.json()):await fetch(`${C.value.api}/v2/sui/histogram?date_type=${v}&typ=${w}&limit=${a}`).then(s=>s.json());let o=f.list;const r={categoryData:[],valueData:[],wheelBase:[]};o&&o.forEach(s=>{r.categoryData.push(s.date.slice(0,10)),r.valueData.push(s.num)}),k.value=!1,i.value=r,x(a,h,z)},A=n({day:"",month:"",year:"",current:""}),q=a=>a==1?"Jan":a==2?"Feb":a==3?"Mar":a==4?"Apr":a==5?"May":a==6?"Jun":a==7?"Jul":a==8?"Aug":a==9?"Sep":a==10?"Oct":a==11?"Nov":"Dec",x=(a,h,z)=>{const w=document.getElementById("echartsBox"),v=Q(w);let f=e.address==""||e.mode!=="tvl"?{tooltip:{trigger:"axis",position:function(o,r,s,u,d){return[o[0]-50,"10%"]},backgroundColor:"#28353F",borderColor:"transparent",extraCssText:"height:24px;",formatter:function(o){let r=o[0].axisValue.slice(5,7),s=q(r);const u=o[0].axisValue.slice(8,10),d=s,b=o[0].axisValue.slice(0,4);return A.value={day:u,month:d,year:b,current:""},V.value=o[0].value,E.value=o[0].value,t.value.theme=="default","&nbsp;&nbsp;&nbsp;"+u+"&nbsp;"+d+"&nbsp;"+b+"&nbsp;&nbsp;&nbsp;"},textStyle:{color:"#909DB4",innerHeight:"24",lineHeight:"24"},padding:0,axisPointer:{type:"line",lineStyle:{width:4,type:"solid",color:t.value.theme=="default"?"#14B88E":"#76C8FF"}}},xAxis:{show:!1,max:i.value.categoryData.length>Number(a)?Number(a):i.value.categoryData.length-1,type:"category",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},splitArea:{show:!1},data:i.value.categoryData},yAxis:{show:!1,max:function(o){return o.max},splitArea:{show:!1}},dataZoom:[{type:"inside",start:0,end:h,zoomLock:!0}],series:[{data:i.value.valueData,type:"bar",itemStyle:{normal:{barBorderRadius:1,color:o=>t.value.theme=="default"?"#00A57B":"#0B70B9"}},barWidth:z}],grid:{left:5,top:0,bottom:0,right:20}}:{tooltip:{trigger:"axis",position:function(o,r,s,u,d){return[o[0]-50,"10%"]},backgroundColor:"#28353F",borderColor:"transparent",extraCssText:"height:24px;",formatter:function(o){let r=o[0].axisValue.slice(5,7),s=q(r);const u=o[0].axisValue.slice(8,10),d=s,b=o[0].axisValue.slice(0,4);return A.value={day:u,month:d,year:b,current:""},V.value=o[0].value,E.value=o[0].value,t.value.theme=="default","&nbsp;&nbsp;&nbsp;"+u+"&nbsp;"+d+"&nbsp;"+b+"&nbsp;&nbsp;&nbsp;"},textStyle:{color:"#909DB4",innerHeight:"24",lineHeight:"24"},padding:0,axisPointer:{type:"line",lineStyle:{width:4,type:"solid",color:t.value.theme=="default"?"#14B88E":"#76C8FF"}}},xAxis:{show:!1,boundaryGap:!1,max:i.value.categoryData.length>Number(a)?Number(a):i.value.categoryData.length-1,type:"category",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},splitArea:{show:!1},data:i.value.categoryData},yAxis:{type:"value",show:!1,max:function(o){return o.max},splitArea:{show:!1}},dataZoom:[{type:"inside",start:0,end:h,zoomLock:!0}],series:[{data:i.value.valueData,type:"line",areaStyle:{normal:{color:"#0B70B9"}},lineStyle:{normal:{color:"#76C8FF"}},itemStyle:{normal:{barBorderRadius:1,color:o=>t.value.theme=="default"?"#00A57B":"#0B70B9"}},barWidth:z}],grid:{left:5,top:20,bottom:5,right:20}};document.body.clientWidth<750&&(f.grid={left:4,top:10,bottom:20,right:4}),t.value.theme=="default"&&(f.tooltip.backgroundColor="#293F38"),f&&v.setOption(f),f&&v.resize(),v.on("globalout",o=>{A.value={day:"",month:"",year:"",current:""},V.value=t.value.statsData.vol_in_usd_24h_sum_v1,E.value="--"})};return{currentVal:E,loading:k,getModeLabel:W,decimalUi:P,checkNullObj:L,store:t,addCommom:$,vol_in_usd_24h:S,vol_in_usd:I,tvl_in_usd:N,tx_num:M,changeEchart:R,echartVal:_,volTime:A,TradingVolume:V}}});const de=e=>(se("data-v-08c85abe"),e=e(),ne(),e),ce={class:"upgrade-chart-container"},me={class:"echarts-content-box"},he={class:"echarts-content"},ve={class:"echarts-content-top"},pe={class:"left"},fe={key:1},be={key:2},ye={key:3},ge={key:4},_e={key:5},we={class:"echarts-tab"},De={key:0,class:"echarts-content-bottom echarts-content-bottom-loading"},$e=de(()=>l("div",{id:"echartsBox",class:"echarts-content-bottom"},null,-1));function ke(e,c,k,t,W,C){const S=te,I=oe;return p(),y("div",ce,[l("div",me,[l("div",he,[l("div",ve,[l("div",pe,[("checkNullObj"in e?e.checkNullObj:g(L))(e.store.statsData||{})?(p(),ee(S,{key:0,class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})):e.address==""?(p(),y("p",fe,"$"+D(Number(e.TradingVolume)==0?0:("addCommom"in e?e.addCommom:g($))(("decimalUi"in e?e.decimalUi:g(P))(e.TradingVolume,2))),1)):e.currentVal!=="--"?(p(),y("p",be,"$"+D(Number(e.currentVal)!==0&&Number(e.currentVal)<.01?"<0.01":("addCommom"in e?e.addCommom:g($))(e.currentVal,2)),1)):e.mode=="vol"?(p(),y("p",ye,"$"+D(Number(e.poolInfo.vol)!==0&&Number(e.poolInfo.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:g($))(e.poolInfo.vol,2)),1)):e.mode=="tvl"?(p(),y("p",ge,"$"+D(Number(e.poolInfo.liqidity)!==0&&Number(e.poolInfo.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:g($))(e.poolInfo.liqidity,2)),1)):e.mode=="fee"?(p(),y("p",_e,D(Number(e.poolInfo.fee_24_h)!==0&&Number(e.poolInfo.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:g($))(e.poolInfo.fee_24_h,2)}`),1)):U("",!0),l("span",null,D(e.address!==""?e.getModeLabel(e.mode):e.$t("common.tradingVal24h")),1)]),l("div",we,[l("div",{class:F(["title-day",e.echartVal=="D"?"title-active":""]),onClick:c[0]||(c[0]=N=>e.changeEchart("D"))}," D ",2),l("div",{class:F(["title-week",e.echartVal=="W"?"title-active":""]),onClick:c[1]||(c[1]=N=>e.changeEchart("W"))}," W ",2),l("div",{class:F(["title-mouth",e.echartVal=="M"?"title-active":""]),onClick:c[2]||(c[2]=N=>e.changeEchart("M"))}," M ",2)])]),e.loading?(p(),y("div",De,[ae(I)])):U("",!0),$e])])])}const Ae=Y(ue,[["render",ke],["__scopeId","data-v-08c85abe"]]);export{Ae as _};
