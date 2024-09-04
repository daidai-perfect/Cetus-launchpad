import{c as le,b as Q,d as Z,s as ue,m as Fe,g as Oe,o as re}from"./index.5e61be46.js";import{a as Re,r as f,m as F,D as U,q as ke,o as i,c as ie,w as ge,L as Le,h as t,f as s,F as J,t as H,v as g,s as me,x as P,p as pe,k as Ce,e as be,a2 as De,a3 as Ne,M as Se,i as ye,z as Y,j as de,u as ce,J as Be,S as Me,a1 as Te}from"./entry.431efe71.js";import"./index.a86a85b0.js";/* empty css              */import{C as Pe,u as je,g as $e,a as xe,_ as Ee,b as Ue,d as qe}from"./confetti.module.b81d409e.js";import{u as we,a as Ae,f as ze,b as Ge,A as He,e as Ke}from"./pool.99bcacdb.js";import"./decimal.a2826370.js";import{i as ae}from"./import-icon.de3e6c66.js";import{c as We}from"./index.3f649e82.js";/* empty css              */import{D as k}from"./decimal.765d8738.js";import{i as Xe}from"./install.611a6375.js";const se=e=>(pe("data-v-06e8b8a9"),e=e(),Ce(),e),Ye={class:"price-impact-tips"},Je=se(()=>t("div",{class:"text"}," The difference between the market price and estimated price due to trade size. ",-1)),Qe={class:"market-price-rate"},Ze=se(()=>t("div",null,"Market Price Rate",-1)),Ve={key:0},eo=se(()=>t("svg",{class:"icon","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),oo=[eo],to={key:1,class:"price-unknown"},no={key:0,class:"market-price-sources"},io=se(()=>t("span",null,"Market price sources:",-1)),ao=se(()=>t("svg",{class:"icon tips-icon","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_tips"})],-1)),so=Re({__name:"price-impact-tooltip",props:{fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},impact:{type:String,defualt:"",requires:!0}},setup(e){const l=e,a=f([]),n=f(),O=f(),D=f(!0),j=we(),C=F(()=>j),y=r=>{switch(r){case"pyth":return{name:"Pyth Network",logo:"/image/logo_pyth.png"};case"coingecko":return{name:"CoinGecko",logo:"/image/logo_CoinGecko@2x.png"};case"birdeye":return{name:"Birdeye",logo:"/image/birdeye-logo.png"};case"Cetus":return{name:"Cetus",logo:"/sui-image/logo_cetus@2x.png"}}},L=r=>{var $,M,T,S,x,K,h,_,I,c;const b=((M=r[($=l==null?void 0:l.fromCoin)==null?void 0:$.address])==null?void 0:M.price)||0,m=((S=r[(T=l==null?void 0:l.toCoin)==null?void 0:T.address])==null?void 0:S.price)||0,w=(K=r[(x=l==null?void 0:l.fromCoin)==null?void 0:x.address])==null?void 0:K.market,B=(_=r[(h=l==null?void 0:l.toCoin)==null?void 0:h.address])==null?void 0:_.market;n.value=Q(Z(new k(b).div(new k(m)).toString(),(I=l.toCoin)==null?void 0:I.decimals)),O.value=Q(Z(new k(m).div(new k(b)).toString(),(c=l.fromCoin)==null?void 0:c.decimals)),a.value=w==B?[y(w)]:[y(w),y(B)],console.log("🚀🚀🚀 ~ file: swap-info.vue:725 ~ getTokenMarketPrice ~ marketPriceA2B.value:",n.value,O.value,a.value)};U(()=>[C.value.RATES,l.fromCoinAmount,l.toCoinAmount,l.fromCoin,l.toCoin],([r])=>{r&&!le(r)&&L(r)},{immediate:!0});const q=Ae(),N=r=>{var b;return(r==null?void 0:r.logoURI)||(r==null?void 0:r.logo_url)||((b=C.value.tokensObj[r==null?void 0:r.address])==null?void 0:b.logo_url)||(q.theme==="default"?ae("/image/coins/unknown.png"):ae("/image/coins/sui-unknown.png"))};return(r,b)=>{const m=Le,w=ke("image");return i(),ie(m,{"overlay-class-name":"price-impact-tooltip"},{title:ge(()=>{var B,$,M,T;return[t("div",Ye,[Je,t("div",Qe,[Ze,e.impact!=="Incalculable"?(i(),s("div",Ve,[D.value?(i(),s(J,{key:0},[H(t("img",null,null,512),[[w,N(e.fromCoin)]]),t("span",null,"1 "+g((B=e.fromCoin)==null?void 0:B.symbol)+" = "+g(n.value)+" "+g(($=e.toCoin)==null?void 0:$.symbol),1),H(t("img",null,null,512),[[w,N(e.toCoin)]])],64)):(i(),s(J,{key:1},[H(t("img",null,null,512),[[w,N(e.toCoin)]]),t("span",null,"1 "+g((M=e.toCoin)==null?void 0:M.symbol)+" = "+g(O.value)+" "+g((T=e.fromCoin)==null?void 0:T.symbol),1),H(t("img",null,null,512),[[w,N(e.fromCoin)]])],64)),t("div",{class:"right",onClick:b[0]||(b[0]=S=>D.value=!D.value)},oo)])):(i(),s("div",to,"Price is unknown"))]),a.value&&a.value.length>0&&e.impact!=="Incalculable"?(i(),s("div",no,[io,(i(!0),s(J,null,me(a.value,S=>(i(),s("span",{key:S==null?void 0:S.name},g(S==null?void 0:S.name),1))),128))])):P("",!0)])]}),default:ge(()=>[ao]),_:1})}}});const ro=be(so,[["__scopeId","data-v-06e8b8a9"]]);const co=Re({components:{PriceImpactTooltip:ro,CurrentPrice:Pe},props:{swapLoading:{type:Boolean,default:!1},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},fixedFromCoin:{type:Boolean,default:!0},impact:{type:String,default:""},insufficientLiquidity:{type:Boolean,default:!1},oneToAmount:{type:String,default:""},oneFromAmount:{type:String,default:""},suiPreSwapdata:{type:Object,default:()=>({})},suiSwapFee:{type:String,default:""},swapRouterLoading:{type:Boolean,default:!1},formCoinMarket:{type:String,default:""},toCoinMarket:{type:String,default:""}},setup(e){const{getTokenInfo:l}=je(),a=ze(),n=F(()=>a==null?void 0:a.tokensObj),O=De(Ne,{style:{fontSize:"20px",color:"#75C8FF"},spin:!0}),D=f(!1),j=Ae(),C=F(()=>j),y=F(()=>{var o;return(o=C==null?void 0:C.value)==null?void 0:o.liquiditySourceObj}),L=F(()=>C.value.slippage),q=F(()=>C.isShowRouterModal),N=we(),r=F(()=>N);Ge("Sui");const b=f(0),m=f([]),w=f({}),B=f(""),$=async o=>{var d,u,v,p,A,R,ee,oe,te,ne;if(((d=o==null?void 0:o.routes)==null?void 0:d.length)===1)if(console.log("🚀🚀🚀 ~ file: swap-info.vue:462 ~ getOnlyOneRouteText ~ suiPreSwapdata?.routes:",o==null?void 0:o.routes),((p=(v=(u=o==null?void 0:o.routes)==null?void 0:u[0])==null?void 0:v.path)==null?void 0:p.length)>1){const z=[(A=e==null?void 0:e.fromCoin)==null?void 0:A.symbol],X=(ee=(R=o==null?void 0:o.routes)==null?void 0:R[0])==null?void 0:ee.path;for(let G=0;G<X.length;G++){const E=X[G];console.log("🚀🚀🚀 ~ file: swap-info.vue:467 ~ getOnlyOneRouteText ~ path[i]:",X[G]);const _e=((oe=n==null?void 0:n.value)==null?void 0:oe[E==null?void 0:E.target])||await l(E==null?void 0:E.target);z.push(_e==null?void 0:_e.symbol)}B.value=z==null?void 0:z.join(" > ")}else B.value=`${(te=e==null?void 0:e.fromCoin)==null?void 0:te.symbol} > ${(ne=e==null?void 0:e.toCoin)==null?void 0:ne.symbol}`};U(()=>e.suiPreSwapdata,async o=>{var d;if(o&&!le(o)){let u=[];(d=o==null?void 0:o.routes)==null||d.forEach(A=>{A==null||A.path.forEach(async R=>{R.provider.indexOf("KRIYA")>-1?u.push("KRIYA"):R.provider==="AFTERMATH"||R.provider==="AFSUI"?u.push("AFTERMATH"):R.provider.indexOf("FLOWX")>-1?u.push("FLOWX"):u.push(R.provider)})});const{routes:v}=o,p=v&&v[0]&&v[0].path;if(v&&v.length==1&&p&&p.length==2){const A=p[0].toCoin=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":p[0].target;w.value=r.value.tokensObj[A]||await l(A)}else w.value="";m.value=Array.from(new Set(u)),b.value=m.value.length,$(o)}},{immediate:!0}),U(()=>m.value,o=>{console.log("sourcesArr newValue: ",o)});const M=f(0),T=f(0);U(()=>[e.fromCoinAmount,e.toCoinAmount,e.fromCoin,e.toCoin,e.fixedFromCoin,L.value],([o,d,u,v,p,A])=>{if(o&&d&&u&&v&&A)if(p){const R=new k(d).mul(new k(A/100));T.value=new k(d).sub(R).toString()}else{const R=new k(o).mul(new k(A/100));M.value=new k(o).add(R).toString()}},{immediate:!0});const S=o=>{var d;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((d=r.value.tokensObj[o==null?void 0:o.address])==null?void 0:d.logo_url)||(C.theme==="default"?ae("/image/coins/unknown.png"):ae("/image/coins/sui-unknown.png"))},x=f(""),K=async()=>{const o=r.value.tokenExternalPriceObj[e.fromCoin.address],d=r.value.tokenExternalPriceObj[e.toCoin.address];if(o&&d){const u=new k(o).div(new k(d)),v=new k(e.oneToAmount.replace(new RegExp(/,/g),"")).sub(u).div(u).mul(100);let p=Math.abs(ue(v,2));u.toNumber()<Number(e.oneToAmount.replace(new RegExp(/,/g),""))?x.value="":(x.value=v>0&&v<=.01?"0.01":p,console.log(o,d,v.toString(),"##367"))}else x.value=""},h=o=>{if(o<5)return"color-s";if(o>=5&&o<10)return"color-w";if(o>=10)return"color-e"};U(()=>[e.oneToAmount,r.value.tokenExternalPriceObj],([o,d])=>{o&&d&&!le(d)&&K()},{immediate:!0,deep:!0});const _=f([]),I=f(),c=f(),fe=f(!0),W=o=>{switch(o){case"pyth":return{name:"Pyth Network",logo:"/image/logo_pyth.png"};case"coingecko":return{name:"CoinGecko",logo:"/image/logo_CoinGecko@2x.png"};case"birdeye":return{name:"Birdeye",logo:"/image/birdeye-logo.png"};case"Cetus":return{name:"Cetus",logo:"/sui-image/logo_cetus@2x.png"}}},he=o=>{var A,R,ee,oe,te,ne,z,X,G,E;const d=((R=o[(A=e==null?void 0:e.fromCoin)==null?void 0:A.address])==null?void 0:R.price)||0,u=((oe=o[(ee=e==null?void 0:e.toCoin)==null?void 0:ee.address])==null?void 0:oe.price)||0,v=(ne=o[(te=e==null?void 0:e.fromCoin)==null?void 0:te.address])==null?void 0:ne.market,p=(X=o[(z=e==null?void 0:e.toCoin)==null?void 0:z.address])==null?void 0:X.market;I.value=Z(new k(d).div(new k(u)).toString(),(G=e.toCoin)==null?void 0:G.decimals),c.value=Z(new k(u).div(new k(d)).toString(),(E=e.fromCoin)==null?void 0:E.decimals),_.value=v==p?[W(v)]:[W(v),W(p)],console.log("🚀🚀🚀 ~ file: swap-info.vue:725 ~ getTokenMarketPrice ~ marketPriceA2B.value:",I.value,c.value,_.value)};return U(()=>[r.value.RATES,e.fromCoinAmount,e.toCoinAmount],([o])=>{o&&!le(o)&&he(o)},{immediate:!0}),{isOpen:f(!0),sFixD:ue,getCoinIcon:S,indicator:O,rateChange:D,slippage:L,isShowRouterModal:q,indexStore:j,maximumSold:M,minimumReceived:T,addCommom:Q,pathLength:b,sourcesArr:m,coinTypeB:w,priceExangeRate:x,getTextColor:h,liquiditySourceObj:y,onlyOneRouteText:B,marketPriceA2B:I,marketPriceA2BResever:c,marketPriceSource:_,isA2B:fe,AggregatorDexLogo:He}}}),V=e=>(pe("data-v-da34e7d3"),e=e(),Ce(),e),lo={key:0,class:"swap-info"},mo={class:"loading-swap"},uo={class:"loading-swap-content"},go={key:1,class:"price"},fo={key:2,class:"best-route"},ho={key:0,class:"price-impact"},vo=V(()=>t("use",{"xlink:href":"#icon-icon-warning1"},null,-1)),_o=[vo],yo=V(()=>t("use",{"xlink:href":"#icon-icon-warning1"},null,-1)),ko=[yo],po=V(()=>t("div",null,"Be cautious before submitting your order.",-1)),Co={key:1,class:"price-impact-info"},bo={class:"label"},wo=V(()=>t("span",null,"Price Impact",-1)),Ao={key:0,class:"text impact-w"},So=["src"],Ro={class:"trade-info"},Lo={class:"trade-block"},Io={class:"label"},Fo={key:0,class:"text"},Oo={key:0,class:"trade-block"},Do=V(()=>t("div",{class:"label"},"Route",-1)),No={key:0,class:"text text-box"},Bo=["alt"],Mo={key:1,class:"text text-box"},To=["alt"],Po=V(()=>t("svg",{class:"icon route-icon","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_expand"})],-1));function jo(e,l,a,n,O,D){var N,r,b;const j=Be,C=Se("CurrentPrice"),y=Se("PriceImpactTooltip"),L=Me,q=ke("image");return e.swapLoading||Number(e.fromCoinAmount)&&Number(e.toCoinAmount)&&!e.insufficientLiquidity?(i(),s("div",lo,[t("div",mo,[t("div",uo,[e.swapLoading||e.swapRouterLoading?(i(),ie(j,{key:0,size:"small",indicator:e.indicator},null,8,["indicator"])):P("",!0),!e.swapRouterLoading&&e.fromCoinAmount&&e.toCoinAmount&&e.oneToAmount&&e.fromCoinAmount?(i(),s("div",go,[ye(C,{"from-coin":e.fromCoin,"to-coin":e.toCoin,"one-to-amount":e.oneToAmount,"one-from-amount":e.oneFromAmount},null,8,["from-coin","to-coin","one-to-amount","one-from-amount"])])):e.swapLoading||e.swapRouterLoading?(i(),s("span",fo,"Best route and price")):P("",!0)]),e.isOpen&&e.impact>=10&&e.fromCoinAmount&&e.toCoinAmount&&!e.swapLoading&&!e.swapRouterLoading?(i(),s("div",ho,[(i(),s("svg",{class:Y(["icon warning-icon pc-impact-tips",e.impact>=10&&e.impact<30?"impact-w":e.impact>=30?"impact-e":""]),"ria-hidden":"true"},_o,2)),t("span",{class:Y(["pc-impact-tips",e.impact>=10&&e.impact<30?"impact-w":e.impact>=30?"impact-e":""])},"Price Impact Alert. Be cautious before submitting your order.",2),t("span",{class:Y(["h5-impact-tips",e.impact>=10&&e.impact<30?"impact-w":e.impact>=30?"impact-e":""])},[t("div",null,[(i(),s("svg",{class:Y(["icon warning-icon",e.impact>=10&&e.impact<30?"impact-w":e.impact>=30?"impact-e":""]),"ria-hidden":"true"},ko,2)),de(" Price Impact Alert. ")]),po],2)])):P("",!0),e.isOpen?(i(),s("div",Co,[t("div",bo,[wo,ye(y,{"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,to:e.toCoinAmount,impact:e.impact},null,8,["from-coin","to-coin","from-coin-amount","to","impact"])]),!e.swapRouterLoading&&e.impact==="Incalculable"?(i(),s("div",Ao,g(e.impact),1)):e.swapRouterLoading?(i(),ie(L,{key:2,paragraph:!1,active:""})):(i(),s("div",{key:1,class:Y(["text",e.impact<10?"impact-s":e.impact<30&&e.impact>=10?"impact-w":"impact-e"])},[de(g(e.impact>0&&e.impact<.01?"<0.01":e.impact>100?">100":e.impact>0?`-${e.impact}`:`+${(N=e.impact)==null?void 0:N.replace("-","")}`)+"% ",1),(i(!0),s(J,null,me(e.marketPriceSource,m=>(i(),s("img",{key:m,src:m==null?void 0:m.logo},null,8,So))),128))],2))])):P("",!0)]),t("div",Ro,[t("div",Lo,[t("div",Io,g(e.fixedFromCoin?e.$t("common.minimumReceived"):e.$t("common.maximumSold")),1),e.swapRouterLoading?(i(),ie(L,{key:1,paragraph:!1,active:""})):(i(),s("div",Fo,g(e.fixedFromCoin?("addCommom"in e?e.addCommom:ce(Q))(("sFixD"in e?e.sFixD:ce(ue))(e.minimumReceived,e.toCoin.decimals)):("addCommom"in e?e.addCommom:ce(Q))(("sFixD"in e?e.sFixD:ce(ue))(e.maximumSold,e.fromCoin.decimals)))+" "+g(e.fixedFromCoin?e.toCoin.symbol:e.fromCoin.symbol),1))]),e.insufficientLiquidity?P("",!0):(i(),s("div",Oo,[Do,e.swapRouterLoading?(i(),ie(L,{key:1,paragraph:!1,active:""})):(i(),s("div",{key:0,class:"text text-bg",onClick:l[0]||(l[0]=m=>e.indexStore.setIsShowRouterModal(!e.isShowRouterModal))},[!e.swapRouterLoading&&e.suiPreSwapdata&&e.suiPreSwapdata.routes&&e.suiPreSwapdata.routes.length==1?(i(),s("div",No,[t("span",null,g(e.onlyOneRouteText),1),(i(!0),s(J,null,me(e.sourcesArr,m=>H((i(),s("img",{key:m,alt:m},null,8,Bo)),[[q,e.AggregatorDexLogo[m]]])),128))])):e.swapRouterLoading?P("",!0):(i(),s("div",Mo,[de(g((b=(r=e.suiPreSwapdata)==null?void 0:r.routes)==null?void 0:b.length)+" Streams ",1),(i(!0),s(J,null,me(e.sourcesArr,m=>H((i(),s("img",{key:m,alt:m},null,8,To)),[[q,e.AggregatorDexLogo[m]]])),128))])),Po]))]))])])):P("",!0)}const St=be(co,[["render",jo],["__scopeId","data-v-da34e7d3"]]),$o={props:{coin:{type:Object,default:()=>({})},refresh:{type:Boolean,default:!1},id:{type:String,default:""},market:{type:String,default:""}},setup(e,l){const{$echarts:a}=Te(),n=Ke();let O=null,D;const j=f(!0),C=Ae(),y=F(()=>C),L=F(()=>y.value.chainName),q=F(()=>We[L.value]),N=we(),r=F(()=>N),b=(h,_,I)=>{D={xAxis:{type:"category",boundaryGap:!1,show:!1,data:_},yAxis:{type:"value",show:!1,min:function(c){return c.min-c.min*.1},max:function(c){return c.max+c.max*.1}},grid:{top:1,right:1,bottom:1,left:1},tooltip:{trigger:"axis",borderWidth:0,padding:0,backgroundColor:"transparent",axisPointer:{lineStyle:{color:y.value.chainName=="Aptos"?"#68FFD8":"#76C8FF"}},formatter:function(c){return`<div class="chart-tip">
              <div>${c&&c[0]&&c[0].name}</div>
              <div>$${Z(c&&c[0]&&c[0].value,4)}</div>
            </chart-tip>`}},color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:y.value.chainName=="Aptos"?"#0C4535":"transparent"},{offset:1,color:y.value.chainName=="Aptos"?"#151817":"transparent"}]},series:[{data:h,type:"line",smooth:y.value.chainName!="Aptos",showSymbol:!1,areaStyle:{},lineStyle:y.value.chainName=="Aptos"?"#68FFD8":{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#75C8FF"},{offset:1,color:"#68FFD8"}]},width:2,type:"solid"}}]},D&&O.clear(),D&&O.setOption(D,!0),O.resize(),j.value=!1},m=f(""),w=f(""),B=async h=>{var ve,o,d;const _=[],I=[],{price:c,daily_rate:fe}=L.value==="Aptos"?await $e(h):await xe(h,e.market);L.value=="Sui"&&N.setTokenExternalPrice(e.coin.address,(ve=c[c.length-1])==null?void 0:ve.price),m.value=fe;const W=c&&c.length>=1&&c[c.length-1].price;w.value=W,n.setCurrentCoinPairRate({[h]:W}),L.value==="Aptos"?c.forEach(u=>{_.push(u.price);const v=re(Number(u.timestamp),"MD"),p=re(Number(u.timestamp),"HM");I.push(v+" "+p)}):c.forEach(u=>{_.push(u.price);const v=re(new k(u.timestamp).mul(1e3).toNumber(),"MD"),p=re(new k(u.timestamp).mul(1e3).toNumber(),"HM");I.push(v+" "+p)});let he=document.getElementById(`main${(o=e.coin)==null?void 0:o.name}`);O=a.init(he),a.use([Xe]),b(_,I,(d=e.coin)==null?void 0:d.name)};U(()=>e.id,(h,_)=>{h&&(m.value="",w.value="",setTimeout(()=>{B(h)},1e3))},{immediate:!0});const $=f(""),M=f(""),T=f(""),S=f("");U(()=>[r.value.tokensObj,e.coin],([h,_])=>{var I,c;h&&_&&h[_.address]&&(M.value=((I=h[_.address])==null?void 0:I.labels)&&((c=h[_.address])==null?void 0:c.labels[0]),$.value=h[_.address].name,T.value=h[_.address].symbol,S.value=h[_.address].address)},{immediate:!0,deep:!0}),U(()=>e.refresh,h=>{h&&B(e.id)});const x=F(()=>y.value.theme),K=F(()=>y.value.currentExplorer);return{getExplorerUrl:Fe,currentExplorer:K,theme:x,store:C,importIcon:ae,fixD:Oe,config:q,price_rate_24h:m,nowPrice:w,coinName:$,coinLabels:M,coinSymbol:T,address:S,decimalUi:Z,addCommom:Q}}};const Ie=e=>(pe("data-v-5f0e9a37"),e=e(),Ce(),e),xo={class:"token-info"},Eo={class:"token-info-padding"},Uo={class:"token-info-header"},qo={class:"left"},zo=["onerror"],Go={class:"name"},Ho={class:"desc"},Ko={key:0},Wo={class:"right"},Xo={class:"new-style-tooltip-text"},Yo={class:"price-info"},Jo={key:0,src:Ee,alt:""},Qo={key:1,src:Ue,alt:""},Zo={key:2,src:qe,alt:""},Vo={class:"token-info-footer"},et={class:"left"},ot={class:"address"},tt={key:0,class:"pc-address"},nt={key:1,class:"pc-address"},it={class:"h5-address"},at=Ie(()=>t("use",{"xlink:href":"#icon-icon_copy2"},null,-1)),st=[at],rt=["href"],ct=Ie(()=>t("svg",{class:"icon","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_link"})],-1)),lt=[ct],mt={class:"right"},dt=["id"];function ut(e,l,a,n,O,D){var y;const j=Le,C=ke("image");return i(),s("div",xo,[t("div",Eo,[t("div",Uo,[t("div",qo,[H(t("img",{onerror:n.theme=="default"?n.importIcon("/image/coins/unknown.png"):n.importIcon("/image/coins/sui-unknown.png")},null,8,zo),[[C,a.coin.logoURI||n.importIcon(`/image/coins/${a.coin.symbol.toLowerCase()}.png`)]]),t("div",null,[t("div",Go,g(n.coinSymbol),1),t("div",Ho,[t("span",null,[de(g(n.coinName)+" ",1),n.theme!=="sui"?(i(),s("span",Ko,g(n.coinLabels?`(${n.coinLabels})`:""),1)):P("",!0)])])])]),t("div",Wo,[ye(j,{"overlay-class-name":"new-style-tooltip",placement:"top","arrow-point-at-center":""},{title:ge(()=>[t("div",Xo,g(a.market==="pyth"?"Data source: Pyth Network":a.market==="coingecko"?"Data source: CoinGecko":"Data source: Birdeye"),1)]),default:ge(()=>[t("div",Yo,[a.market==="pyth"?(i(),s("img",Jo)):a.market==="coingecko"?(i(),s("img",Qo)):a.market==="birdeye"?(i(),s("img",Zo)):P("",!0),t("span",null,"$"+g(n.nowPrice?Number(n.nowPrice)<1?n.decimalUi(n.nowPrice,4):n.addCommom(n.fixD(n.nowPrice,2)):"--"),1),n.price_rate_24h?(i(),s("i",{key:3,class:Y(n.price_rate_24h>0?"up":n.price_rate_24h<0?"down":"up")},g(n.price_rate_24h>0?`+ ${n.fixD(n.price_rate_24h,2)}`:n.price_rate_24h<0?+`${n.fixD(n.price_rate_24h,2)}`:`+${n.fixD(n.price_rate_24h,2)}`)+"%",3)):P("",!0)])]),_:1})])]),t("div",Vo,[t("div",et,[t("div",ot,[a.coin&&n.address!=="0x2::sui::SUI"?(i(),s("span",tt,g(a.coin&&a.coin.address.substr(0,8))+" ... "+g(a.coin&&a.coin.address.substr(a.coin.address.length-8,8)),1)):(i(),s("span",nt,g(a.coin&&a.coin.address),1)),t("span",it,g(a.coin&&a.coin.address.substr(0,4))+" ... "+g(a.coin&&a.coin.address.substr(a.coin.address.length-4,4)),1),(i(),s("svg",{class:"icon","aria-hidden":"true",onClick:l[0]||(l[0]=L=>n.store.copy(a.coin&&a.coin.address))},st)),t("a",{href:n.getExplorerUrl(n.currentExplorer,"coin",a.coin&&a.coin.address),target:"_blank"},lt,8,rt)])]),t("div",mt,[t("div",{id:`main${(y=a.coin)==null?void 0:y.name}`,class:"main"},null,8,dt)])])])])}const Rt=be($o,[["render",ut],["__scopeId","data-v-5f0e9a37"]]);export{ro as P,St as _,Rt as a};
