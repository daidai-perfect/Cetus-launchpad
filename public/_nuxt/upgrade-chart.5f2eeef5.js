import{z as Z,b as x,i as M,g as D,c as Y}from"./index.b02d129f.js";import{a as K,r as i,m as R,y as Q,G as F,a1 as X,E as ee,C as te,a9 as ae,e as oe,o as h,f as y,h as r,u as g,c as se,v as $,x as J,z as L,i as ne,Y as le,S as ie,p as re,k as ue}from"./entry.f1d335d0.js";/* empty css              */import"./index.206efd4d.js";import{b as de}from"./pool.73243d89.js";import{l as ce}from"./lodash.686df7b1.js";const me=K({props:{mode:{type:String,required:!1,default:"vol"},address:{type:String,required:!1,default:""},poolInfo:{type:Object,required:!1,default:()=>({})}},setup(e){const d=de(),k=i(!0),o=R(()=>d),z=t=>{switch(t){case"vol":return"Volume (24H)";case"tvl":return"TVL";case"fee":return"Fees (24H)"}},C=R(()=>Y[o.value.chainName]),S=i(0),E=i(0),V=i(0),P=i(0),N=i(""),A=i("--"),j=i(!1);Q(async()=>{window.addEventListener("resize",q),setTimeout(()=>{document.body.clientWidth<750?c(40,100,4,e.mode,"day"):c(40,100,8,e.mode,"day")},100),H.value=window.setInterval(()=>{B(_.value)},12e4),await Z(1e3),j.value=!0});const W=i(!0),q=ce.debounce(()=>{document.body.clientWidth>750?W.value=!0:W.value=!1},300);F(()=>e.mode,(t,n)=>{t!==n&&(k.value=!0,B(_.value))}),F(()=>e.address,(t,n)=>{t!==n&&(k.value=!0,B(_.value))});const H=i(null);X(()=>{window.clearInterval(H.value)}),ee(()=>{window.removeEventListener("resize",q)}),te(()=>{if(j.value&&!M(o.value.statsData||{})&&o.value.chainName){const t=o.value.chainName=="Sui"?o.value.statsData.vol_in_usd_24h:o.value.statsData.vol_in_usd_24h_sum_v1;o.value.chainName=="Sui"?o.value.statsData.tvl_in_usd:o.value.statsData.tvl_in_usd_sum_v1,S.value=t,N.value=t,E.value=o.value.statsData.vol_in_usd,V.value=o.value.statsData.pure_tvl_in_usd,P.value=o.value.statsData.tx_num}});const _=i("D"),u=i({}),G=t=>{_.value=t,B(t)},B=(t,n="")=>{t=="D"?document.body.clientWidth<750?c(40,100,4,e.mode,"day",n):c(40,100,8,e.mode,"day",n):t=="W"?document.body.clientWidth<750?c(20,100,6,e.mode,"wek",n):c(30,100,12,e.mode,"wek",n):t=="M"&&(document.body.clientWidth<750?c(20,100,12,e.mode,"mon",n):c(20,100,18,e.mode,"mon",n))};F(()=>W.value,(t,n)=>{t!==n&&B(_.value,"changeSize")});const c=async(t,n,I,w,m,p="")=>{if(console.log("🚀🚀🚀 ~ file: upgrade-chart.vue:200 ~ getPhan ~ getPhan:"),p)return U(t,n,I),!1;try{const a=w=="tvl"?"pure_tvl":w,{data:f}=e.address!==""?o.value.theme=="default"?await fetch(`${C.value.api}/v2/histogram?date_type=${m}&typ=${w}&limit=${t}&swap_account=${e.address}`).then(s=>s.json()):await fetch(`${C.value.api}/v2/sui/histogram?date_type=${m}&typ=${a}&limit=${t}&address=${e.address}`).then(s=>s.json()):o.value.theme=="default"?await fetch(`${C.value.api}/v2/histogram?date_type=${m}&typ=${w}&limit=${t}`).then(s=>s.json()):await fetch(`${C.value.api}/v2/sui/histogram?date_type=${m}&typ=${a}&limit=${t}`).then(s=>s.json());let v=f.list;const l={categoryData:[],valueData:[],wheelBase:[]};v&&v.forEach(s=>{l.categoryData.push(s.date.slice(0,10)),l.valueData.push(s.num)}),k.value=!1,u.value=l,U(t,n,I)}catch(a){console.log("🚀🚀🚀 ~ file: upgrade-chart.vue:234 ~ getPhan ~ error:",a)}},T=i({day:"",month:"",year:"",current:""}),O=t=>t==1?"Jan":t==2?"Feb":t==3?"Mar":t==4?"Apr":t==5?"May":t==6?"Jun":t==7?"Jul":t==8?"Aug":t==9?"Sep":t==10?"Oct":t==11?"Nov":"Dec",U=(t,n,I)=>{const w=document.getElementById("echartsBox"),m=ae(w);let p=e.address==""||e.mode!=="tvl"?{tooltip:{trigger:"axis",position:function(a,f,v,l,s){return[a[0]-50,"10%"]},backgroundColor:"#28353F",borderColor:"transparent",extraCssText:"height:24px;",formatter:function(a){let f=a[0].axisValue.slice(5,7),v=O(f);const l=a[0].axisValue.slice(8,10),s=v,b=a[0].axisValue.slice(0,4);return T.value={day:l,month:s,year:b,current:""},N.value=a[0].value,A.value=a[0].value,o.value.theme=="default","&nbsp;&nbsp;&nbsp;"+l+"&nbsp;"+s+"&nbsp;"+b+"&nbsp;&nbsp;&nbsp;"},textStyle:{color:"#909DB4",innerHeight:"24",lineHeight:"24"},padding:0,axisPointer:{type:"line",lineStyle:{width:4,type:"solid",color:o.value.theme=="default"?"#14B88E":"#76C8FF"}}},xAxis:{show:!1,max:u.value.categoryData.length>Number(t)?Number(t):u.value.categoryData.length-1,type:"category",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},splitArea:{show:!1},data:u.value.categoryData},yAxis:{show:!1,max:function(a){return a.max},splitArea:{show:!1}},dataZoom:[{type:"inside",start:0,end:n,zoomLock:!0}],series:[{data:u.value.valueData,type:"bar",itemStyle:{normal:{barBorderRadius:1,color:a=>o.value.theme=="default"?"#00A57B":"#0B70B9"}},barWidth:I}],grid:{left:5,top:0,bottom:0,right:20}}:{tooltip:{trigger:"axis",position:function(a,f,v,l,s){return[a[0]-50,"10%"]},backgroundColor:"#28353F",borderColor:"transparent",extraCssText:"height:24px;",formatter:function(a){let f=a[0].axisValue.slice(5,7),v=O(f);const l=a[0].axisValue.slice(8,10),s=v,b=a[0].axisValue.slice(0,4);return T.value={day:l,month:s,year:b,current:""},N.value=a[0].value,A.value=a[0].value,o.value.theme=="default","&nbsp;&nbsp;&nbsp;"+l+"&nbsp;"+s+"&nbsp;"+b+"&nbsp;&nbsp;&nbsp;"},textStyle:{color:"#909DB4",innerHeight:"24",lineHeight:"24"},padding:0,axisPointer:{type:"line",lineStyle:{width:4,type:"solid",color:o.value.theme=="default"?"#14B88E":"#76C8FF"}}},xAxis:{show:!1,boundaryGap:!1,max:u.value.categoryData.length>Number(t)?Number(t):u.value.categoryData.length-1,type:"category",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},splitArea:{show:!1},data:u.value.categoryData},yAxis:{type:"value",show:!1,max:function(a){return a.max},splitArea:{show:!1}},dataZoom:[{type:"inside",start:0,end:n,zoomLock:!0}],series:[{data:u.value.valueData,type:"line",areaStyle:{normal:{color:"#0B70B9"}},lineStyle:{normal:{color:"#76C8FF"}},itemStyle:{normal:{barBorderRadius:1,color:a=>o.value.theme=="default"?"#00A57B":"#0B70B9"}},barWidth:I}],grid:{left:5,top:20,bottom:5,right:20}};document.body.clientWidth<750&&(p.grid={left:4,top:10,bottom:20,right:4}),o.value.theme=="default"&&(p.tooltip.backgroundColor="#293F38"),p&&m.setOption(p),p&&m.resize(),m.on("globalout",a=>{T.value={day:"",month:"",year:"",current:""},N.value=o.value.statsData.vol_in_usd_24h_sum_v1,A.value="--"})};return{currentVal:A,loading:k,getModeLabel:z,decimalUi:x,checkNullObj:M,store:o,addCommom:D,vol_in_usd_24h:S,vol_in_usd:E,tvl_in_usd:V,tx_num:P,changeEchart:G,echartVal:_,volTime:T,TradingVolume:N}}});const ve=e=>(re("data-v-6f88b8bb"),e=e(),ue(),e),he={class:"upgrade-chart-container"},pe={class:"echarts-content-box"},fe={class:"echarts-content"},be={class:"echarts-content-top"},ye={class:"left"},ge={key:1},_e={key:2},we={key:3},$e={key:4},De={key:5},ke={class:"echarts-tab"},Ce={key:0,class:"echarts-content-bottom echarts-content-bottom-loading"},Ve=ve(()=>r("div",{id:"echartsBox",class:"echarts-content-bottom"},null,-1));function Ne(e,d,k,o,z,C){const S=le,E=ie;return h(),y("div",he,[r("div",pe,[r("div",fe,[r("div",be,[r("div",ye,[("checkNullObj"in e?e.checkNullObj:g(M))(e.store.statsData||{})?(h(),se(S,{key:0,class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})):e.address==""?(h(),y("p",ge,"$"+$(e.TradingVolume===""?"--":Number(e.TradingVolume)==0?0:("addCommom"in e?e.addCommom:g(D))(("decimalUi"in e?e.decimalUi:g(x))(e.TradingVolume,2))),1)):e.currentVal!=="--"?(h(),y("p",_e,"$"+$(Number(e.currentVal)!==0&&Number(e.currentVal)<.01?"<0.01":("addCommom"in e?e.addCommom:g(D))(e.currentVal,2)),1)):e.mode=="vol"?(h(),y("p",we,"$"+$(Number(e.poolInfo.vol)!==0&&Number(e.poolInfo.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:g(D))(e.poolInfo.vol,2)),1)):e.mode=="tvl"?(h(),y("p",$e,"$"+$(Number(e.poolInfo.liqidity)!==0&&Number(e.poolInfo.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:g(D))(e.poolInfo.liqidity,2)),1)):e.mode=="fee"?(h(),y("p",De,$(Number(e.poolInfo.fee_24_h)!==0&&Number(e.poolInfo.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:g(D))(e.poolInfo.fee_24_h,2)}`),1)):J("",!0),r("span",null,$(e.address!==""?e.getModeLabel(e.mode):e.$t("common.tradingVal24h")),1)]),r("div",ke,[r("div",{class:L(["title-day",e.echartVal=="D"?"title-active":""]),onClick:d[0]||(d[0]=V=>e.changeEchart("D"))}," D ",2),r("div",{class:L(["title-week",e.echartVal=="W"?"title-active":""]),onClick:d[1]||(d[1]=V=>e.changeEchart("W"))}," W ",2),r("div",{class:L(["title-mouth",e.echartVal=="M"?"title-active":""]),onClick:d[2]||(d[2]=V=>e.changeEchart("M"))}," M ",2)])]),e.loading?(h(),y("div",Ce,[ne(E)])):J("",!0),Ve])])])}const We=oe(me,[["render",Ne],["__scopeId","data-v-6f88b8bb"]]);export{We as _};
