import{g as At,n as lt,d as rt,c as ot}from"./common.f371ec22.js";import{a as _t,r as j,m as z,q as pt,A as st,e as vt,o as E,f as Z,I as Nt,M as Tt,h as Y,N as ht,x as gt,u as bt,G as Q,c as xt,p as Pt,k as It,O as Lt,a0 as Ct,w as kt,j as Mt,P as Ft}from"./entry.acdca605.js";/* empty css              */import{s as it,m as qt,l as $t,b as Bt,a as zt}from"./transform.c672907f.js";import"./decimal.a2826370.js";import{u as wt,b as Ot}from"./index.694816b3.js";import{D as v}from"./decimal.765d8738.js";/* empty css              */import{u as Ht}from"./farms.f24fbd50.js";function yt(t,w,N){const F=new v(10).pow(w-N);return new v(1.0001).pow(t).mul(F)}const Ut=_t({props:{poolInfo:{type:Object,default:()=>({chartLoading:!1,token_a:{decimal:6},token_b:{decimal:6},currentLiquity:"50000000"})},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},direction:{type:Boolean,default:!0},tickList:{type:Array,default:()=>[]},currentTick:{type:Number,default:0},chartLoading:{type:Boolean,default:!1},currentPriceTab:{type:String,default:""},before7dContractPriceLowest:{type:String,default:""},before7dContractPriceHighest:{type:String,default:""},zoom:{type:Number,default:1}},setup(t,w){const N=j(""),F=j(""),T=z(()=>{var e,a,n,f,d,b;return(e=t.poolInfo)!=null&&e.current_sqrt_price&&((a=t.poolInfo)!=null&&a.coinA)&&((n=t.poolInfo)!=null&&n.coinB)?x.sqrtPriceX64ToPrice((f=t.poolInfo)==null?void 0:f.current_sqrt_price,(d=t.poolInfo)==null?void 0:d.coinA.decimals,(b=t.poolInfo)==null?void 0:b.coinB.decimals).toString():"0"}),O=z(()=>{let e=0;return t.direction?e=(Number(t.minPrice)/Number(T.value)-1)*100:e=(Number(t.minPrice)/Number(1/Number(T.value))-1)*100,e=e>0&&e<.1?.1:e,e=e<0&&e>-.1?-.1:e,e}),A=z(()=>{let e=0;return t.direction?e=(Number(t.maxPrice)/Number(T.value)-1)*100:e=(Number(t.maxPrice)/Number(1/Number(T.value))-1)*100,e=e>0&&e<.1?.1:e,e=e<0&&e>-.1?-.1:e,e}),G=wt(),q=z(()=>G),V=z(()=>q.value.chainName?Ot(q.value.chainName):{}),{TickMath:x,getNearestTickByTick:J}=V.value,H=(e=[])=>{let a=6;const n=Math.abs(Number(e[0])-Number(e[e.length-1]));return n>=6?a=0:n>=1?a=1:n>=.1?a=2:n>=.01?a=3:n>=.001?a=4:n>=1e-4?a=5:n>=1e-5?a=6:n>=1e-6?a=7:n>=1e-7&&(a=8),a},P=(e,a=1)=>{if(e&&e.token_a&&!t.chartLoading&&t.minPrice&&t.maxPrice){const n=Number(t.poolInfo.current_tick_index);let f=n+100*a,d=n-100*a,b,k;if(t.maxPrice==="∞")k=V.value.TickUtil.getMaxIndex(Number(t.poolInfo.tickSpacing));else try{t.direction?k=x.priceToTickIndex(new v(t.maxPrice),t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals):k=x.priceToTickIndex(new v(1).div(t.minPrice),t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals)}catch{k=443636}if(t.minPrice==="0")b=V.value.TickUtil.getMinIndex(Number(t.poolInfo.tickSpacing));else try{t.direction?b=x.priceToTickIndex(new v(t.minPrice),t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals):b=x.priceToTickIndex(new v(1).div(t.maxPrice),t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals)}catch{b=-443636}let S=0;if(t.currentPriceTab!=="full range"){if(n>=b&&n<=k){const o=n-b,g=k-n;S=Math.max(Math.abs(o),Math.abs(g))}else n<b?S=Math.abs(k-n):S=Math.abs(n-b);f=n+S+100*a,d=n-S-100*a}else{const o=(Math.abs(n)>5e3,2e4);f=n+o*a,d=n-o*a}d<-443636&&(d=-443636),f>443636&&(f=443636);const h=new v(e.liquidity).div(Math.pow(10,8)).toString(),l=t.tickList,c=[],$=[];let I={};for(let o=0;o<l.length;o++){if(I=l[o],I.index<=n&&I.index>=d){if(c.length<1&&o!==0){const g=l[o-1];c.unshift({...g,index:d,source:"left"})}c.unshift(I)}else if(I.index>n&&I.index<=f&&($.push(I),c.length<1&&o!==0)){const g=l[o-1];c.push({...g,index:d,source:"left"})}if(I.index>f){const g=l[o];if($.push({...g,index:f,source:"right"}),c.length<1&&o!==0){const nt=l[o-1];c.push({...nt,index:d,source:"left"})}break}}let L="0";for(let o=c.length-1;o>=0;o--)L=new v(L).plus(new v(c[o].liquidityNet.toString()).div(Math.pow(10,8))).toString(),c[o].liquityAmount=L;let u=h;for(let o=0;o<$.length;o++)u=new v(u).plus(new v($[o].liquidityNet.toString()).div(Math.pow(10,8))).toString(),$[o].liquityAmount=u;let m=[];const s=l&&l.length>0?{index:n,liquityAmount:Number(h)}:{index:n,liquityAmount:0};(c.length>0||$.length>0)&&(m=[...c.reverse(),s,...$],t.direction||(m=m.reverse()));const X=[];l.forEach(o=>{X.push({...o,liquidityGross:o.liquidityGross.toString(),liquidityNet:o.liquidityNet.toString()})}),D(m,d,f,b,k,n)}};let p=j(!1);const K=j(!1);pt(()=>{const e=document.body.clientWidth;K.value=!0,e<750?p.value=!1:p.value=!0,window.onresize=()=>{document.body.clientWidth<750?p.value=!1:p.value=!0,P(t.poolInfo,t.zoom)}});const D=(e,a,n,f,d,b)=>{let k,S;t.direction?(k=Number(t.before7dContractPriceLowest)!==0?x.priceToTickIndex(new v(t.before7dContractPriceLowest),t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals):"",S=Number(t.before7dContractPriceHighest)!==0?x.priceToTickIndex(new v(t.before7dContractPriceHighest),t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals):""):(k=Number(t.before7dContractPriceLowest)!==0?x.priceToTickIndex(new v(1).div(t.before7dContractPriceLowest),t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals):"",S=Number(t.before7dContractPriceHighest)!==0?x.priceToTickIndex(new v(1).div(t.before7dContractPriceHighest),t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals):"");const h={top:30,right:35,bottom:20,left:80};let l,c;p.value?(l=460-h.left-h.right,c=205-h.top-h.bottom):(l=340-h.left-h.right,c=205-h.top-h.bottom);const $=n-a,I=parseInt(String($/4));let L=[a+I/4,a+I,a+2*I,n-I,n-I/4];const u=a,m=n,s=l/(m-u);t.currentPriceTab==="full range"&&(L=[a,a+2*I,n]);const X=L.map(r=>t.direction?yt(r,t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals).toString():new v(1).div(yt(r,t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals)).toString()),o=H(X);it("#chart").selectAll("*").remove();const g=it("#chart").attr("width",l+h.left+h.right).attr("height",c+h.top+h.bottom).append("g").attr("transform",`translate(${h.left},${h.right})`),nt=qt(e,function(r){return Number(Math.abs(r.liquityAmount))})||0,U=$t().range([0,c]).domain([nt,0]);Bt().rangeRound([0,l]).padding(.1);const ut=g.append("g").attr("id","barsBox").selectAll("rect").data(e).enter().append("rect");q.value.theme=="default"?ut.attr("x",function(r,i){return i===0?0:t.direction?Math.abs(r.index-u)*s:Math.abs(m-r.index)*s}).attr("y",function(r,i){return t.direction?i===e.length-1?0:U(r.liquityAmount):i===e.length-1?0:U(e[i+1].liquityAmount)}).attr("width",function(r,i){return i===0&&e.length===1&&r.liquityAmount>0?l:(t.direction,i!==e.length-1?Math.abs(e[i+1].index-r.index)*s:0)}).attr("height",function(r,i){return i===0&&e.length===1&&r.liquityAmount>0?c:t.direction?i===e.length-1?0:c-U(r.liquityAmount):i===e.length-1?0:c-U(e[i+1].liquityAmount)}).attr("fill","#279477").attr("class","bars").attr("stroke-width",1).attr("stroke","#279477"):ut.attr("x",function(r,i){return i===0?0:t.direction?Math.abs(r.index-u)*s:Math.abs(m-r.index)*s}).attr("y",function(r,i){return t.direction?i===e.length-1?0:U(Math.abs(r.liquityAmount)):i===e.length-1?0:U(Math.abs(e[i+1].liquityAmount))}).attr("width",function(r,i){return i===0&&e.length===1&&r.liquityAmount>0?l:(t.direction,i!==e.length-1?Math.abs(e[i+1].index-r.index)*s:0)}).attr("height",function(r,i){if(i===0&&e.length===1&&r.liquityAmount>0)return c;if(t.direction)return i===e.length-1?0:Number(r.liquityAmount)?c-U(Math.abs(r.liquityAmount)):0;{if(i===e.length-1)return 0;const B=c-U(Math.abs(e[i+1].liquityAmount));return Number(e[i+1].liquityAmount)?B:0}}).attr("fill",function(r,i){return"#417494"}).attr("class","bars").attr("stroke-width",1).attr("stroke",function(r,i){return"#417494"});const dt=g.append("g");dt.append("line").attr("x1",0).attr("y1",155).attr("x2",l).attr("y2",155).attr("stroke-width",1).attr("stroke","#50535D");const ft=dt.append("g");let at=0;if(t.direction){for(let r=0;r<L.length;r++){const i=rt(X[r],o)||"0";X.push(i);const B=Math.abs(L[r]-u)*s;let y=0;for(let _=0;_<i.length;_++)i[_]==="1"?y+=4.02:i[_]==="."?y+=2.64:i[_]==="7"?y+=5.48:y+=6;ft.append("text").text(i).attr("x",B-y/2).attr("y",168).attr("fill","rgba(255, 255, 255, 0.5").style("font-size","10")}at=Math.abs(b-u)*s}else{for(let r=L.length-1;r>=0;r--){const i=rt(X[r],o)||0;X.push(i);const B=Math.abs(L[r]-m)*s;let y=0;for(let _=0;_<i.length;_++)i[_]==="1"?y+=4.02:i[_]==="."?y+=2.64:i[_]==="7"?y+=5.48:y+=6;ft.append("text").text(i).attr("x",B-y/2).attr("y",168).attr("fill","rgba(255, 255, 255, 0.5").style("font-size","10")}at=Math.abs(b-m)*s}(q.value.theme=="default"?g.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",155).attr("stroke-width",2).attr("stroke","#68FFD8"):g.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",155).attr("stroke-width",2).attr("stroke","#76C8FF")).attr("transform","translate("+at+", 0)");let W,R,tt,et;t.direction?(W=f<u?-100:parseInt(String(Math.abs(f-u)*s)),R=d<u?-100:parseInt(String(Math.abs(d-u)*s)),tt=k<u?-100:Math.abs(k-u)*s,et=S<u?-100:Math.abs(S-u)*s):(R=f<u?-100:Math.abs(m-f)*s,W=d<u?-100:Math.abs(m-d)*s,et=k>m?-100:Math.abs(m-k)*s,tt=S>m?-100:Math.abs(m-S)*s),t.minPrice==="0"&&(W=0),t.maxPrice==="∞"&&(R=l),p.value?N.value=l-W+94+"px":N.value=l-W+87+"px",F.value=R+98+"px",k&&tt<l&&g.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",155).attr("stroke-width",1).attr("stroke-dasharray","5, 5").attr("stroke","rgba(255, 255, 255, 0.5)").attr("transform","translate("+tt+", 0)"),S&&et<l&&g.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",155).attr("stroke-width",1).attr("stroke-dasharray","5, 5").attr("stroke","rgba(255, 255, 255, 0.5)").attr("transform","translate("+et+", 0)");const C=g.append("g").attr("id","left-handle"),M=g.append("g").attr("id","right-handle");q.value.theme=="default"?(C.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",155).attr("stroke-dasharray","5, 5").attr("stroke-width",2).attr("stroke","#68FFD8"),C.append("path").attr("d","M0 0 L12 0 L12 20 L0 20 Z").attr("fill","#23252C").attr("stroke","#23252C").attr("transform","translate(-1, 20) rotate(180)"),C.append("rect").attr("width",1).attr("height",7).attr("x",-9).attr("y",6).attr("fill","#68FFD8"),C.append("rect").attr("width",1).attr("height",10).attr("x",-7).attr("y",4.5).attr("fill","#68FFD8"),M.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",155).attr("stroke-dasharray","5, 5").attr("stroke-width",2).attr("stroke","#68FFD8"),M.append("path").attr("d","M0 0 L12 0 L12 20 L0 20 Z").attr("fill","#23252C").attr("stroke","#23252C").attr("transform","translate(1, 0)"),M.append("rect").attr("width",1).attr("height",7).attr("x",7).attr("y",6).attr("fill","#68FFD8"),M.append("rect").attr("width",1).attr("height",10).attr("x",5).attr("y",4.5).attr("fill","#68FFD8")):(C.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",155).attr("stroke-dasharray","5, 5").attr("stroke-width",2).attr("stroke","#76C8FF"),C.append("path").attr("d","M0 0 L12 0 L12 24 L0 24 Z").attr("fill","#23252C").attr("stroke","#23252C").attr("transform","translate(-1, 24) rotate(180)"),C.append("rect").attr("width",1).attr("height",7).attr("x",-9).attr("y",8).attr("fill","#76C8FF"),C.append("rect").attr("width",1).attr("height",10).attr("x",-7).attr("y",6.5).attr("fill","#76C8FF"),M.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",155).attr("stroke-dasharray","5, 5").attr("stroke-width",2).attr("stroke","#76C8FF"),M.append("path").attr("d","M0 0 L12 0 L12 24 L0 24 Z").attr("fill","#23252C").attr("stroke","#23252C").attr("transform","translate(1, 0)"),M.append("rect").attr("width",1).attr("height",7).attr("x",7).attr("y",8).attr("fill","#76C8FF"),M.append("rect").attr("width",1).attr("height",10).attr("x",5).attr("y",6.5).attr("fill","#76C8FF")),C.attr("transform","translate("+W+", 0)"),M.attr("transform","translate("+R+", 0)");const mt=zt().extent([[0,0],[l,c]]).handleSize(30).on("end",St);g.append("g").attr("class","brush").call(mt).call(mt.move,[W,R]);function St(r){if(!r.sourceEvent||!r.selection)return;C.attr("transform","translate("+r.selection[0]+", 0)"),M.attr("transform","translate("+r.selection[1]+", 0)"),p.value,N.value=l-r.selection[0]+87+"px",F.value=r.selection[1]+74+"px";let i,B,y=0,_=0;t.direction?(y=J(parseInt(String(r.selection[0]/s+u)),Number(t.poolInfo.tickSpacing)),i=x.tickIndexToPrice(y,t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals).toString(),_=J(parseInt(String(r.selection[1]/s+u)),Number(t.poolInfo.tickSpacing)),B=x.tickIndexToPrice(_,t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals).toString()):(_=J(m-r.selection[0]/s,Number(t.poolInfo.tickSpacing)),i=1/x.tickIndexToPrice(_,t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals).toString(),y=J(m-r.selection[1]/s,Number(t.poolInfo.tickSpacing)),B=1/x.tickIndexToPrice(y,t.poolInfo.token_a.decimals,t.poolInfo.token_b.decimals).toString()),w.emit("onChangeMinPrice",String(rt(String(i),6))),w.emit("onChangeMaxPrice",String(rt(String(B),6)))}q.value.theme=="default"?it(".selection").attr("stroke","rgba(255, 255, 255, 0)").attr("fill","#15322C"):it(".selection").attr("stroke","rgba(255, 255, 255, 0)").attr("fill","#152632")};return j(""),st(()=>[t.poolInfo,t.minPrice,t.maxPrice,t.currentPriceTab,t.zoom,t.tickList],([e,a,n,f,d,b])=>{e&&a&&n&&(e!=null&&e.liquidity)&&P(e,d)},{immediate:!0}),{store:q,loading:K,rangeSizeLower:O,rangeSizeUpper:A,rangeSizeLowerPosition:N,rangeSizeUpperPosition:F,decimalFormat:At,numberformat:lt}}});const jt=t=>(Pt("data-v-85e63e79"),t=t(),It(),t),Et={class:"chart-box"},Xt={class:"chart"},Wt=jt(()=>Y("svg",{id:"chart"},null,-1));function Rt(t,w,N,F,T,O){const A=Lt;return E(),Z("div",Et,[Nt(Y("div",Xt,[t.currentPriceTab!=="full range"&&t.minPrice!=="0"&&t.maxPrice!=="∞"?(E(),Z("div",{key:0,class:"range-size range-size-lower",style:ht({right:t.rangeSizeLowerPosition})},gt(("numberformat"in t?t.numberformat:bt(lt))(t.rangeSizeLower.toFixed(1),1))+"% ",5)):Q("",!0),t.currentPriceTab!=="full range"&&t.minPrice!=="0"&&t.maxPrice!=="∞"?(E(),Z("div",{key:1,class:"range-size range-size-upper",style:ht({left:t.rangeSizeUpperPosition})},gt(("numberformat"in t?t.numberformat:bt(lt))(t.rangeSizeUpper.toFixed(1),1))+"% ",5)):Q("",!0),Wt],512),[[Tt,!t.chartLoading]]),t.chartLoading?(E(),xt(A,{key:0})):Q("",!0)])}const fe=vt(Ut,[["render",Rt],["__scopeId","data-v-85e63e79"]]),Zt=_t({props:{poolInfo:{type:Object,default:()=>({})},isActive:{type:Boolean,default:!0}},setup(t,w){const N=Ht(),F=z(()=>N),T=j(!1),O=j(),A=j(!0),G=wt(),q=z(()=>G),V=z(()=>q.value.newTopPoolsObj);z(()=>F.value.farmsPoolList);const x=H=>{var K,D,e,a;const P=H[(K=t==null?void 0:t.poolInfo)==null?void 0:K.poolAddress]||{};let p=0;P&&!ot(P)&&((e=(D=P==null?void 0:P.stable_farming)==null?void 0:D.stable_rewarder)==null||e.forEach(n=>{n.amount_second>0&&(p+=n.amount_second)}),p>0?(T.value=!0,O.value={id:P.stable_farming.stable_farming_pool,clmm_pool_id:(a=t==null?void 0:t.poolInfo)==null?void 0:a.poolAddress},w.emit("sendFarmsPoolInfo",A.value&&t.isActive?O.value:"")):(T.value=!1,w.emit("sendFarmsPoolInfo","")))};return st(()=>[V.value,t.poolInfo],([H,P])=>{H&&!ot(H)&&P&&!ot(P)&&x(H)},{immediate:!0}),st(()=>[t.isActive,A.value,O.value],([H,P,p])=>{w.emit("sendFarmsPoolInfo",P&&t.isActive?p:"")},{immediate:!0}),{isShowAutoStake:T,changeIsOpen:()=>{A.value=!A.value,w.emit("sendFarmsPoolInfo",A.value&&t.isActive?O.value:"")},isOpen:A}}}),Gt=""+globalThis.__publicAssetsURL("sui-image/farming_huo.png"),Vt=""+globalThis.__publicAssetsURL("sui-image/icon_sel@2x.png");const ct=t=>(Pt("data-v-20c0ad07"),t=t(),It(),t),Jt={key:0,class:"farms-auto-stake"},Kt=ct(()=>Y("img",{class:"farms-icon",src:Gt,alt:""},null,-1)),Qt=ct(()=>Y("div",{class:"desc"},"Automatically stake your position into the farm to enjoy higher yield.",-1)),Yt={key:0,src:Vt,alt:""},Dt=ct(()=>Y("div",{class:"check-box"},null,-1));function te(t,w,N,F,T,O){const A=Ft;return t.isShowAutoStake?(E(),Z("div",Jt,[Kt,Qt,t.isActive?(E(),Z("div",{key:0,class:"check-box-active",onClick:w[0]||(w[0]=(...G)=>t.changeIsOpen&&t.changeIsOpen(...G))},[t.isOpen?(E(),Z("img",Yt)):Q("",!0)])):(E(),xt(A,{key:1,"overlay-style":{"min-width":"200px"}},Ct({default:kt(()=>[Dt]),_:2},[t.isActive?void 0:{name:"title",fn:kt(()=>[Mt("Farming rewards only available for active positions.")]),key:"0"}]),1024))])):Q("",!0)}const me=vt(Zt,[["render",te],["__scopeId","data-v-20c0ad07"]]);export{fe as _,me as a};
