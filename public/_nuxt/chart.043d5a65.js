import{e as p,a as j}from"./sha256.230676d8.js";import"./index.710d6b47.js";import{u as L}from"./launchpad.fe511cfa.js";import{u as T,j as n}from"./pool.8137dec4.js";import{a as E,l as x,r as W,H as B,a9 as H,e as U,o as q,f as D}from"./entry.05bbbdc0.js";import"./decimal.0bdeb344.js";const G=E({setup(){const w=L();x(()=>w);let e=W(!1);B(()=>{document.body.clientWidth<750?e.value=!1:e.value=!0,window.onresize=()=>{document.body.clientWidth<750?e.value=!1:e.value=!0},setTimeout(()=>{k()},1e3)});const C=W({}),F=T();x(()=>F);const o=x(()=>({symbol:"SUI",decimals:9})),_=f=>{var h,c;if(f<1){let r=(h=f.toString().split(".")[1])==null?void 0:h.length;return{isdecimal:!0,num:r||0}}else{let r=(c=f.toString().split(".")[0])==null?void 0:c.length;return{isdecimal:!1,num:r?r<=2?0:r-1:0}}},k=()=>{var P,$,M,O,A;const f=document.getElementById("myChart"),h=H(f);document.body.clientWidth;let c=[],r=1e4,b=1030,g=1e4,m=1020;const l=_(m);console.log("hardCarpNumInfo",l);let N=p(m/g,o.value.decimals),z=p(r/g,o.value.decimals),a=Number(l.isdecimal?Number(n(b).times(Math.pow(10,l.num)).toString()):Number(n(b).div(Math.pow(10,l.num)).toString())),y=Number(l.isdecimal?Number(n(g).times(Math.pow(10,l.num)).toString()):Number(n(g).div(Math.pow(10,l.num)).toString())),t=Math.ceil(l.isdecimal?n(r).times(Math.pow(10,l.num)).toString():n(r).div(Math.pow(10,l.num)).toString()),u=Math.ceil(l.isdecimal?n(m).times(Math.pow(10,l.num)).toString():n(m).div(Math.pow(10,l.num)).toString()),i,d=p(u/y,o.value.decimals),v=p(t/y,o.value.decimals);console.log(t,a,u,t,l,"90090999");for(var s=0;s<=t;s++)s<=u?c.push([s,d]):s<=t?c.push([s,s/y]):c.push([s,v]);Number(a)<=Number(u)?i=d:Number(a)<=Number(t)?i=p(a/y,o.value.decimals):i=v,console.log(i,m,r,u,t,"currentPrice");let S;Number(b)<=Number(m)?S=N:Number(b)<=Number(r)?S=p(b/g,o.value.decimals):S=z;var I={tooltip:{trigger:"axis",show:!1,triggerOn:"none",axisPointer:{type:"none"}},xAxis:{show:!1,axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},splitArea:{show:!1},min:0,max:t},yAxis:{show:!1,min:Number(d)-Number(d)/10,max:Number(v)+Number(d)/10,axisLine:{show:!1},splitArea:{show:!1}},grid:{left:e.value?30:5,top:40,bottom:40,right:e.value?30:5},visualMap:{show:!1,min:0,max:t+1,dimension:0,pieces:[{lte:0,color:"#76C8FF"},{gt:0,lte:a,color:"#76C8FF"},{gt:a,lte:t,color:"#364f5f"},{gt:t+1,color:"#364f5f"}]},series:[{data:c,type:"line",smooth:!1,axisTick:{show:!1},markLine:{symbol:["none","none"],data:[{xAxis:u,symbol:"none",silent:!1,name:"警戒线",lineStyle:{type:"dashed",width:1,color:"#999"},emphasis:{lineStyle:{width:1}},label:{position:"end",formatter:["{a|Soft Cap}",`{b|${m} ${o.value&&((P=o.value)==null?void 0:P.symbol)}}`].join(" "),rotate:0,offset:0,align:e.value?"center":"right",color:"rgba(255, 255, 255, 0.5)",rich:{a:{fontSize:e.value?14:12},b:{fontSize:e.value?14:12,color:"#76C8FF"}}}},{xAxis:0,symbol:"none",silent:!1,name:"警戒线",lineStyle:{type:"dashed",color:"transparent"},label:{position:"start",formatter:["{a|Floor Price}",`{b|${N} ${o.value&&(($=o.value)==null?void 0:$.symbol)}}`].join(" "),rotate:0,offset:0,align:"left",color:"rgba(255, 255, 255, 0.5)",rich:{a:{fontSize:e.value?14:12},b:{fontSize:e.value?14:12,color:"#76C8FF"}}}},{xAxis:t,symbol:"none",silent:!1,name:"警戒线",lineStyle:{type:"dashed",color:"transparent"},label:{position:"end",formatter:["{a|Hard Cap}",`{b|${r} ${o.value&&((M=o.value)==null?void 0:M.symbol)}}`].join(" "),rotate:0,offset:0,align:"right",color:"rgba(255, 255, 255, 0.5)",rich:{a:{fontSize:e.value?14:12},b:{fontSize:e.value?14:12,color:"#76C8FF"}}}},{xAxis:t,symbol:"none",silent:!1,name:"警戒线",lineStyle:{type:"dashed",color:"transparent"},label:{position:"start",formatter:["{a|Max.Price}",`{b|${z} ${o.value&&((O=o.value)==null?void 0:O.symbol)}}`].join(" "),rotate:0,offset:0,align:"right",color:"rgba(255, 255, 255, 0.5)",rich:{a:{fontSize:e.value?14:12},b:{fontSize:e.value?14:12,color:"#76C8FF"}}}}]},markPoint:{data:[{itemStyle:{color:"transparent"},coord:[a,a>3*t/4?3*i/4:i],label:{formatter:[`{a|${C.value.pool_status=="Ended"?"End Price":C.value.pool_status=="Live"?"Current Price":"Price"}}`,`{b|${S} ${o.value&&((A=o.value)==null?void 0:A.symbol)}}`].join(`
`),rotate:0,offset:0,backgroundColor:"#191919",align:a>t/2?"right":"left",color:"rgba(255, 255, 255, 1)",padding:[6,12],borderWidth:1,borderColor:"#355C76",lineHeight:18,rich:{a:{fontSize:e.value?14:12,color:"rgba(255, 255, 255, 0.5)",align:"left"},b:{fontSize:e.value?14:12,align:"left",color:"rgba(255, 255, 255, 1)"}}}},{symbol:"circle",symbolSize:5,itemStyle:{color:"#76C8FF"},coord:[a,i]},{symbol:"circle",symbolSize:14,itemStyle:{color:"#76C8FF",opacity:"0.15"},coord:[Number(a)-1e-7,i]},{symbol:"circle",symbolSize:5,itemStyle:{color:"#76C8FF"},coord:[0,d]},{symbol:"circle",symbolSize:5,itemStyle:{color:"#76C8FF"},coord:[t,v]},{symbol:"circle",symbolSize:5,itemStyle:{color:"#76C8FF"},coord:[u,d]}]},lineStyle:{width:3},showSymbol:!1,grid:{show:!1}}]};h.setOption(I)};return{addCommom:j}}});const J={id:"myChart",class:"echart-box"};function K(w,e,C,F,o,_){return q(),D("div",J)}const ee=U(G,[["render",K],["__scopeId","data-v-d2093c17"]]);export{ee as default};
