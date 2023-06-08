import{a as se,r as F,m as k,E as ae,D as te,e as le,o as n,f as t,h as i,j as ee,v as o,i as z,w as H,u as s,x as a,F as Ce,L as ve,p as de,k as me,M as ge,l as ye,y as he,K as ke,q as be,c as ie,t as G,H as pe,O as Se,B as Ie}from"./entry.32f5b492.js";import{_ as Ae}from"./token-warning.1a1af849.js";import{_ as Pe}from"./status-block.9bdcf6b9.js";import{D as v,u as ce,a as we,e as d,k as oe,c as Re,h as ne,d as l}from"./pool.2189873e.js";/* empty css              */import{u as ue,_ as Ne}from"./index.34edcc56.js";/* empty css              */import{i as re}from"./import-icon.de3e6c66.js";import{u as Te}from"./notifi.ddaf828b.js";const Bi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAngAAABUBAMAAADjSFdtAAAAMFBMVEVHcEwlW04lW04mW04lWUwmW04mXE4lW04mW04SHx4gPzclWk1o/9gVKyhSyKs8jnpksmsVAAAACXRSTlMA6xZ3ykwulK7bAIv/AAAEOUlEQVR42u2dTU8TURSGh7YUEjeISkxm04pREzZoJC66qR8Ji9lgiNGkm2LcsSGKKzZo4qq/YCyFtTQmjC1YevEHEEf2FdE1CX+AhYlt7xk6t3PvnSld2JD33QxluumTOee899yPMQzoAio2v/zQdK7OzqTAold0zy1Gct4CX08aLjBnduZlKnZrftlktTkQia5Jkz3Oex+S95lzD0yi6rZZFWhNWuw1qERT3Kzlxf8kC840uETKd1Y3uxa9CsBE0UpVUh+Gm3F7A2zCdJMpIvQVuwY6IUFrTshvJM3LDJZFr1xNYYlHakYmCz7aSsuWFHeGdoyhLwCkU0ZZVRPbxtQWAOkyni+tJR+0GgNvPNsSd55ZqyCky3idB++FSX2BD9QqsJiTByG1YqaX8WJ3GdtsNEqlTcau8BISf4Ixmk6JWodd3SaVPXpNfohbzeBinP54yj7bZ/p55o4TX8FIXS4oqY2wb7ZPh55/ScImq6O24tWGui2oXKXAzYyBksrk0QhigTVEeCU2IeKFgrV2jkaxu3aXiuRShp0UOKlGr22l63ZAZSolhSVwkiq9w6/WbhBescrvLY6DkzzlrVKpJWB/Tlz34C99oII7iqQnl8nzWo5sStFtix7Dw22eDx1wkro8ikzzE6+wewdNiocn3zm8j1QqLDg9mSgi4xS1Jfe0ddlwybZQdz6DEZpMU7zVmaao3Tjg15NTittx/7cgUTlukTM8au11ite9Y4pb/mAmtkFK1hXgcWlSmK794Ndf+xTGvFTE0RuQycrz5gB5k7V98WrzpgDKrXRwxqmM1lXwyrxUmBigKZ3K0K4KXnEMXkUlSmaLang7/tQICW2BilBsg/Co3GbQGgiKPMiKGh5/NHNwyc2y+e56XoDHo9JqqOCVeFJczIKdscCYsKSH1lKYani8HE+NgZ1ReH+nJoNnq+DZgwcvsfmfxFIxwe9e2mpfmBoe839vAH5BdlDhuYIGFd6Ahq0MHnJeaMEgeP4JDBcFI5pVKTSU8GBVIppkCTzPJANe2PCM8/p97IeH4VnExoDrtykuGgM9taRk8NCSUkpshkrgoRmqkdCGl8CjNnwVpCQSJoA4r3VfwcAEkE7C1GPQqmDqUSdh0jsID5PeOgnLLYLwsNwigleJtRf6BBoDWOijl3+JWQAelpjp1b24URAWN+qFZbX9tAawoLuPARq2EvST9LhNxiaW8yjC9qksKKmcHjbu9dMbCNkymkZXQBO3Z5OR8s3KBUStrt56TqS9Tf7Ito862+Sb0Yxaq5PmgIZWuUA7Sl8yOhWh62gQ8SYks3qV892DDN1xSE3/Mg0+IVlPdRBXrICMF5r1VEfALTjIeKFSHD4YZ4/AJsIwQ3rspYXBRaTAlR64WkXQRqu4OOq3DwUPmXZwgFlk4XjzvvIeDtbvQ75XOlTxSofe8eFlIhda/wAfMfQ7ksgW2wAAAABJRU5ErkJggg==",qi=""+new URL("img-lock_2x.693ff210.png",import.meta.url).href;v.config({precision:64,rounding:v.ROUND_DOWN,toExpNeg:-64,toExpPos:64});const Ue=se({props:{minPrice:{type:String,default:""},maxPrice:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fixedFromCoin:{type:Boolean,default:!0},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},slippage:{type:Number,default:0},currentPrice:{type:Number,default:0},currentPriceReverse:{type:Number,default:0},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},positionTotalAmount:{type:Number,default:0},tickLower:{type:Number,default:0},tickUpper:{type:Number,default:0}},setup(e){const y=F(""),$=F(""),b=ue(),K=k(()=>b);k(()=>K.value.chainName);const J=ce(),p=k(()=>J),E=k(()=>K.value.chainName?we(K.value.chainName):{});console.log(e,"props====>");const w=ae(),Q=async()=>{var Y;if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:u,TickMath:S,getNearestTickByTick:h}=E.value,B=e.poolInfo.token_a.decimals,I=e.poolInfo.token_b.decimals;let R,N,f,C,A,T,g,r=1,c=1;const P=e.poolInfo.current_tick_index;console.log(P,"==>currentTickIndex");let q=p.value.poolPriceConfigObj&&p.value.poolPriceConfigObj[e.poolInfo.address]&&p.value.poolPriceConfigObj[e.poolInfo.address].recommend_ranges||{};if(console.log(e.poolInfo.token_a.address,e.fromCoin.address,e.poolInfo.token_b.address,e.toCoin.address,"164===>"),e.poolInfo.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&e.poolInfo.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?g=!0:g=!1,console.log(g,"===>directs178"),e.minPrice==="0"&&e.maxPrice==="∞")f=u.getMinIndex(e.poolInfo.tickSpacing),C=u.getMaxIndex(e.poolInfo.tickSpacing);else if(e.currentPriceTab=="custom"||(Y=w==null?void 0:w.query)!=null&&Y.action){g?(R=Number(e.minPrice),N=Number(e.maxPrice)):(R=new v(1).div(e.maxPrice).toString(),N=new v(1).div(e.minPrice).toString()),console.log(R,N,"min===>");try{A=S.priceToTickIndex(new v(R),B,I)}catch{A=-443636}try{T=S.priceToTickIndex(new v(N),B,I)}catch{T=443636}R==0&&(A=-443636),console.log(e.poolInfo.tickSpacing,"===>props.poolInfo.tickSpacing"),f=w.name=="increase-liquidity"?e.tickLower:h(A,Number(e.poolInfo.tickSpacing)),C=w.name=="increase-liquidity"?e.tickUpper:h(T,Number(e.poolInfo.tickSpacing)),console.log(f,C,"===>tick_upper")}else f=q&&q[e.currentPriceTab]&&q[e.currentPriceTab].lower,C=q&&q[e.currentPriceTab]&&q[e.currentPriceTab].upper;if(e.maxPrice==="∞"||P>f&&P<C){let L;if(e.fixedFromCoin){const Z=new v(e.fromCoinAmount||1).mul(Math.pow(10,e.fromCoin.decimals)).toString();L=new ne(Z)}else{const Z=new v(e.toCoinAmount||1).mul(Math.pow(10,e.toCoin.decimals)).toString();L=new ne(Z)}const{tokenMaxA:U,tokenMaxB:D}=await E.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:e.poolInfo.token_a,tokenB:e.poolInfo.token_b,lowerTick:f,upperTick:C,coinAmount:L,iscoinA:g?e.fixedFromCoin:!e.fixedFromCoin,roundUp:!0,slippage:Number(e.slippage)/100,curSqrtPrice:new ne(e.poolInfo.current_sqrt_price)});console.log(U,D,"===>tokenMaxA, tokenMaxB"),g?e.fixedFromCoin?(c=Number(D)>0?D:"",r=Number(U)>0?U:""):(r=Number(U)>0?U:"",c=Number(D)>0?D:""):(e.fixedFromCoin,c=U,r=D)}else P>=C?g?(c=1,r=0):(r=1,c=0):P<=f&&(g?(c=0,r=1):(c=1,r=0));const j=r?Number(r):0,X=c?Number(c):0;console.log(j,X,"amountA===>amountB"),console.log(g,e.currentPrice,e.currentPriceReverse,"===>currentPriceReverse");const O=new v(X).add(new v(g?new v(j*e.currentPrice):new v(j*e.currentPriceReverse)));console.log(O,"===>totalAmount");const _=new v(j).mul(new v(g?e.currentPrice:e.currentPriceReverse)).div(O).mul(100).toNumber().toFixed(2),x=new v(X).div(O).mul(100).toNumber().toFixed(2);y.value=O.toNumber()?_:"--",$.value=O.toNumber()?x:"--"};te(()=>[e.poolInfo,e.minPrice,e.maxPrice,e.fromCoinAmount,e.toCoinAmount],([u,S,h])=>{console.log("0421####ratio###watch###poolInfo###",u),console.log("0421####ratio###watch###minPrice###",S),console.log("0421####ratio###watch###maxPrice###",h),S&&h&&u&&!Re(u)&&(S!=="0"||h!=="0")?(console.log(111,"====>1111"),Q()):(console.log("0421####ratio###watch###clear###"),y.value="",$.value="")},{immediate:!0,deep:!0});let m={};te(()=>p.value.RATES,u=>{u&&(m=u)},{immediate:!0});const W=k(()=>{const u=m&&m[e.fromCoin.address]&&m[e.fromCoin.address].price,S=m&&m[e.toCoin.address]&&m[e.toCoin.address].price,h=Number(e.fromCoinAmount)*Number(m&&m[e.fromCoin.address]&&m[e.fromCoin.address].price),B=Number(e.toCoinAmount)*Number(m&&m[e.toCoin.address]&&m[e.toCoin.address].price);if(u&&S){const I=Number(h)+Number(B);return console.log(I,"==>total"),I>0&&I<.01?"<0.01":d(oe(I,2))}else return"--"});return{positionAmount:k(()=>W.value!=="--"?(console.log(e,"props377===>"),new v(e.positionTotalAmount).add(new v(W.value)).toString()):0),fromCoinRatio:y,toCoinRatio:$,totalAmount:W,fixD:oe,addCommom:d,route:w}}});const De=e=>(de("data-v-a64c238e"),e=e(),me(),e),Be={class:"deposit-ratio"},qe={class:"lebal"},Fe=De(()=>i("svg",{class:"icon","aria-hidden":"true"},[i("use",{"xlink:href":"#icon-icon-information"})],-1)),$e={key:0,class:"text"},Ee={key:1},Me={key:0,class:"deposit-ratio totalAmount"},Oe={class:"lebal"},Le={class:"text"},Ke={key:0,class:"liquidity-update"},We={key:1};function je(e,y,$,b,K,J){const p=ve;return n(),t(Ce,null,[i("div",Be,[i("div",qe,[ee(o(e.$t("newAdd.depositRatio"))+" ",1),z(p,{placement:"bottom","arrow-point-at-center":""},{title:H(()=>[i("span",null,o(e.$t("newAdd.depositRatioTips")),1)]),default:H(()=>[Fe]),_:1})]),e.currentPriceTab!=="full range"?(n(),t("div",$e,o(e.fromCoinRatio!=="--"?e.fromCoinRatio+"%":"--")+" "+o(e.fromCoinRatio!=="--"?e.fromCoin&&e.fromCoin.symbol:"")+" / "+o(e.toCoinRatio!=="--"?e.toCoinRatio+"%":"--")+" "+o(e.toCoinRatio!=="--"?e.toCoin&&e.toCoin.symbol:""),1)):(n(),t("div",Ee," 50% "+o(e.fromCoin&&e.fromCoin.symbol)+" / 50% "+o(e.toCoin&&e.toCoin.symbol),1))]),e.totalAmount!==0?(n(),t("div",Me,[i("div",Oe,o(e.$t("newAdd.totalAmount")),1),i("div",Le,[e.route.name=="increase-liquidity"?(n(),t("div",Ke,[i("span",null," $"+o(("addCommom"in e?e.addCommom:s(d))(("fixD"in e?e.fixD:s(oe))(e.totalAmount,2),2))+" → ",1),i("span",null,"$"+o(("addCommom"in e?e.addCommom:s(d))(("fixD"in e?e.fixD:s(oe))(e.positionAmount,2),2)),1)])):(n(),t("div",We," $"+o(e.totalAmount),1))])])):a("",!0)],64)}const ze=le(Ue,[["render",je],["__scopeId","data-v-a64c238e"]]),Ve=se({components:{Modal:ge},props:{title:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:"1245566.008946"},toCoinAmount:{type:String,default:"11111111111"},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},isIncrease:{type:Boolean,default:!1},fixedFromCoin:{type:Boolean,default:!0},currentPriceTab:{type:String,default:""},currentPrice:{type:String,default:""},currentPriceReverse:{type:String,default:""},showFromCoinLock:{type:Boolean,default:!1},showToCoinLock:{type:Boolean,default:!1},currentDirect:{type:Boolean,default:!0},positionTotalAmount:{type:Number,default:0},tickLower:{type:Number,default:0},tickUpper:{type:Number,default:0}},setup(e,y){const{t:$}=ye(),b=k(()=>{var r,c,P;return((r=e==null?void 0:e.poolInfo)==null?void 0:r.needReverse)||((P=(c=e==null?void 0:e.poolInfo)==null?void 0:c.poolInfo)==null?void 0:P.needReverse)}),K=ce(),J=k(()=>K),p=ue(),E=k(()=>p),w=r=>{var c;return(r==null?void 0:r.logoURI)||(r==null?void 0:r.logo_url)||((c=J.value.tokensObj[r==null?void 0:r.address])==null?void 0:c.logo_url)||(E.value.theme==="default"?re("/image/coins/unknown.png"):re("/image/coins/sui-unknown.png"))},Q=F(!1),m=F(!0);function W(r){m.value=r}const M=k(()=>E.value.slippage),u=Te(),S=k(()=>u),h=k(()=>S.value.status),B=k(()=>E.value.chainName),I=k(()=>Ne[B.value].hasNotifi),R=ae(),N=F(!1),f=F(""),C=F(""),A=F(""),T=F("");he(()=>{f.value=String(l(String(e.minPrice),6)),C.value=String(l(String(e.maxPrice),6)),A.value=e.currentPrice,T.value=e.currentPriceReverse,e.isIncrease&&(f.value=b.value?String(l(String(1/e.maxPrice),6)):String(l(String(e.minPrice),6)),C.value=b.value?String(l(String(1/e.minPrice),6)):String(l(String(e.maxPrice),6)),A.value=b.value?e.currentPriceReverse:e.currentPrice,T.value=b.value?e.currentPrice:e.currentPriceReverse),console.log(A,"===>currentPrice"),console.log("0421###onMounted###poolInfo####",e.poolInfo)}),te(m,r=>{!e.isIncrease&&r||e.isIncrease&&!b.value&&r?(console.log("0517####add-liquidity###direct###11111###val###",r),f.value=String(l(String(e.minPrice),6)),C.value=String(l(String(e.maxPrice),6))):!e.isIncrease&&!r||e.isIncrease&&!b.value&&!r?(console.log("0517####add-liquidity###direct###22222###val####",r),f.value=String(l(String(1/Number(e.maxPrice)),6)),C.value=String(l(String(1/Number(e.minPrice)),6))):e.isIncrease&&b.value&&(e.currentDirect?r:!r)?(console.log("0517####add-liquidity###direct###3333###val###",r),f.value=String(l(String(1/Number(e.maxPrice)),6)),C.value=String(l(String(1/Number(e.minPrice)),6))):e.isIncrease&&b.value&&(e.currentDirect?!r:r)&&(console.log("0517####add-liquidity###direct###44444###val###",r),f.value=String(l(String(e.minPrice),6)),C.value=String(l(String(e.maxPrice),6))),A.value=e.currentPrice,T.value=e.currentPriceReverse});const g=()=>{e.isIncrease?y.emit("toAdd"):e.title==$("newAdd.perview")?y.emit("createPool"):y.emit("toAdd",N.value&&h.value=="authenticated")};return console.log(e,"props451"),{needReverse:b,getCoinIcon:w,addCommom:d,rateChange:Q,changeDirect:W,direct:m,t:$,slippage:M,notifiStatus:h,hasNotifi:I,route:R,checked:N,min:f,max:C,decimalUi:l,clickSubmit:g}}});const V=e=>(de("data-v-d14b9268"),e=e(),me(),e),Xe=V(()=>i("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[i("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Ze={class:"modal-content"},Je={class:"pool-info"},Qe={class:"left"},Ye={alt:""},Ge={alt:""},He={class:"pool-name"},_e={class:"right"},xe={class:"coin-info"},eo={class:"from-coin-info"},oo={class:"left"},io={class:"coin-amount"},no={class:"coin-symbol"},to={class:"right"},ro={class:"to-coin-info"},so={class:"left"},ao={class:"coin-amount"},lo={class:"coin-symbol"},mo={class:"right"},co=V(()=>i("div",{class:"to-swap-logo"},null,-1)),uo={class:"select-range"},fo=V(()=>i("div",{class:"select-range-title"},"Selected Range",-1)),Co={class:"price-conent"},vo={class:"current-price"},go={class:"left"},yo={key:0,class:"current-price-title"},ho={key:1,class:"current-price-title"},ko={key:2,class:"a2b"},bo={key:0},po={key:1},So={key:2},Io={key:3},Ao={key:4},Po={key:5},wo={key:6},Ro={key:7},No={key:3,class:"a2b"},To={key:0},Uo={key:1},Do={key:2},Bo={key:3},qo={key:4},Fo={key:5},$o={key:6},Eo={key:7},Mo={key:4,class:"a2b"},Oo={key:0},Lo={key:1},Ko={key:2},Wo={key:3},jo={key:5,class:"a2b"},zo={key:0},Vo={key:1},Xo={key:2},Zo={key:3},Jo={class:"right"},Qo={alt:""},Yo={class:"coin-rate"},Go=V(()=>i("div",null,[i("svg",{class:"icon icon-up","aria-hidden":"true"},[i("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Ho=V(()=>i("div",null,[i("svg",{class:"icon icon-down","aria-hidden":"true"},[i("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),_o=[Go,Ho],xo={class:"price-range-block-content"},ei={class:"price-range-block"},oi={class:"price-item"},ii={class:"title"},ni={class:"price"},ti={key:0,class:"text"},ri={key:1,class:"text"},si={key:2,class:"text"},ai={key:3,class:"text"},li={class:"note"},di={class:"price-item"},mi={class:"title"},ci={class:"price"},ui={key:0,class:"text"},fi={key:1,class:"text"},Ci={key:2,class:"text"},vi={key:3,class:"text"},gi={class:"note"},yi={class:"deposit-ratio-content"},hi={key:0,class:"range-alerts"},ki={class:"range-alerts-top"},bi=V(()=>i("div",{class:"title"}," Range alerts for this position ",-1)),pi=V(()=>i("div",{class:"range-alerts-bottom"}," Subscribe to receive alerts on email, SMS, or Telegram when the price for this pool moves out of your selected range. ",-1));function Si(e,y,$,b,K,J){const p=Ae,E=Pe,w=ze,Q=Se,m=Ie,W=ke("Modal"),M=be("image");return n(),ie(W,{width:"440px",visible:!0,footer:null,title:e.title,onCancel:y[2]||(y[2]=u=>e.$emit("onClose"))},{closeIcon:H(()=>[Xe]),default:H(()=>{var u,S,h,B,I,R,N,f,C,A,T,g,r,c,P,q,j,X,O,_,x,Y,L,U,D,Z;return[i("div",Ze,[i("div",Je,[i("div",Qe,[i("div",null,[G(i("img",Ye,null,512),[[M,e.needReverse?(B=(h=e.poolInfo)==null?void 0:h.token_b)==null?void 0:B.logo_url:(S=(u=e.poolInfo)==null?void 0:u.token_a)==null?void 0:S.logo_url]]),z(p,{address:e.needReverse?(f=(N=e.poolInfo)==null?void 0:N.token_b)==null?void 0:f.address:(R=(I=e.poolInfo)==null?void 0:I.token_a)==null?void 0:R.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),i("div",null,[G(i("img",Ge,null,512),[[M,e.needReverse?(g=(T=e.poolInfo)==null?void 0:T.token_a)==null?void 0:g.logo_url:(A=(C=e.poolInfo)==null?void 0:C.token_b)==null?void 0:A.logo_url]]),z(p,{address:e.needReverse?(q=(P=e.poolInfo)==null?void 0:P.token_a)==null?void 0:q.address:(c=(r=e.poolInfo)==null?void 0:r.token_b)==null?void 0:c.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),i("div",He,[i("span",null,o(e.needReverse?(_=(O=e.poolInfo)==null?void 0:O.token_b)==null?void 0:_.symbol:(X=(j=e.poolInfo)==null?void 0:j.token_a)==null?void 0:X.symbol),1),ee(" - "),i("span",null,o(e.needReverse?(U=(L=e.poolInfo)==null?void 0:L.token_a)==null?void 0:U.symbol:(Y=(x=e.poolInfo)==null?void 0:x.token_b)==null?void 0:Y.symbol),1)])]),i("div",_e,[ee(" Fee tier "),i("span",null,o(e.poolInfo&&e.poolInfo.fee*100)+"%",1)])]),i("div",xe,[i("div",eo,[i("div",oo,[i("div",io,o(("addCommom"in e?e.addCommom:s(d))(e.fromCoinAmount)||0),1),i("div",no,o(e.fromCoin&&e.fromCoin.symbol),1)]),i("div",to,[G(i("img",null,null,512),[[M,e.fromCoin&&e.fromCoin.logoURI||e.getCoinIcon(e.fromCoin)]]),z(p,{address:e.fromCoin&&e.fromCoin.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])])]),i("div",ro,[i("div",so,[i("div",ao,o(("addCommom"in e?e.addCommom:s(d))(e.toCoinAmount)||0),1),i("div",lo,o(e.toCoin&&e.toCoin.symbol),1)]),i("div",mo,[G(i("img",null,null,512),[[M,e.toCoin&&e.toCoin.logoURI||e.getCoinIcon(e.toCoin)]]),z(p,{address:e.toCoin&&e.toCoin.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),co])]),i("div",uo,[fo,e.title!==e.$t("newAdd.preview")?(n(),ie(E,{key:0,"current-status":e.showFromCoinLock||e.showToCoinLock?"Inactive":"Active"},null,8,["current-status"])):a("",!0)]),i("div",Co,[i("div",vo,[i("div",go,[e.title!==e.$t("newAdd.preview")?(n(),t("div",yo,"Current Price")):(n(),t("div",ho,"Intial Price")),!e.isIncrease&&!e.needReverse?(n(),t("div",ko,[e.direct&&e.currentDirect?(n(),t("span",bo,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPrice,e.toCoin.decimals))),1)):a("",!0),e.direct&&!e.currentDirect?(n(),t("span",po,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPriceReverse,e.toCoin.decimals))),1)):a("",!0),!e.direct&&e.currentDirect?(n(),t("span",So,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPriceReverse,e.fromCoin.decimals))),1)):a("",!0),!e.direct&&!e.currentDirect?(n(),t("span",Io,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPrice,e.fromCoin.decimals))),1)):a("",!0),e.direct&&e.currentDirect?(n(),t("div",Ao,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):a("",!0),e.direct&&!e.currentDirect?(n(),t("div",Po,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):a("",!0),!e.direct&&e.currentDirect?(n(),t("div",wo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):a("",!0),!e.direct&&!e.currentDirect?(n(),t("div",Ro,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):a("",!0)])):!e.isIncrease&&e.needReverse?(n(),t("div",No,[e.direct&&e.currentDirect?(n(),t("span",To,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPrice,e.toCoin.decimals))),1)):a("",!0),!e.direct&&e.currentDirect?(n(),t("span",Uo,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPriceReverse,e.fromCoin.decimals))),1)):a("",!0),e.direct&&!e.currentDirect?(n(),t("span",Do,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPriceReverse,e.toCoin.decimals))),1)):a("",!0),!e.direct&&!e.currentDirect?(n(),t("span",Bo,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPrice,e.fromCoin.decimals))),1)):a("",!0),e.direct&&e.currentDirect?(n(),t("div",qo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):a("",!0),!e.direct&&e.currentDirect?(n(),t("div",Fo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):a("",!0),e.direct&&!e.currentDirect?(n(),t("div",$o,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):a("",!0),!e.direct&&!e.currentDirect?(n(),t("div",Eo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):a("",!0)])):a("",!0),e.isIncrease&&!e.needReverse?(n(),t("div",Mo,[e.direct?(n(),t("span",Oo,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPrice,e.toCoin.decimals))),1)):(n(),t("span",Lo,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPriceReverse,6))),1)),e.direct?(n(),t("div",Ko,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):(n(),t("div",Wo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1))])):a("",!0),e.isIncrease&&e.needReverse?(n(),t("div",jo,[e.direct?(n(),t("span",zo,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPriceReverse,e.fromCoin.decimals))),1)):(n(),t("span",Vo,o(("addCommom"in e?e.addCommom:s(d))(("decimalUi"in e?e.decimalUi:s(l))(e.currentPrice,e.toCoin.decimals))),1)),e.direct?(n(),t("div",Xo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):(n(),t("div",Zo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1))])):a("",!0)]),i("div",Jo,[G(i("img",Qo,null,512),[[M,e.direct?e.fromCoin.logo_url:e.toCoin.logo_url]]),i("span",null,o(e.direct?(D=e.fromCoin)==null?void 0:D.symbol:(Z=e.toCoin)==null?void 0:Z.symbol),1),i("div",Yo,[i("div",{onClick:y[0]||(y[0]=fe=>e.direct=!e.direct)},_o)])])]),i("div",xo,[i("div",ei,[i("div",oi,[i("div",ii,o(e.$t("common.minPrice")),1),i("p",ni,o(("addCommom"in e?e.addCommom:s(d))(e.min)),1),!e.isIncrease&&!e.direct?(n(),t("div",ti,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):!e.isIncrease&&e.direct?(n(),t("div",ri,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):a("",!0),e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(n(),t("div",si,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(n(),t("div",ai,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):a("",!0),i("div",li,o(e.t("common.positionwillBe",{symbol:`${!e.isIncrease&&e.needReverse&&e.direct?e.fromCoin.symbol:e.toCoin.symbol}`})),1)]),i("div",di,[i("div",mi,o(e.$t("common.maxPrice")),1),i("p",ci,o(e.maxPrice.indexOf("∞")>-1||e.maxPrice.indexOf("+")>-1?"∞":("addCommom"in e?e.addCommom:s(d))(e.max)),1),!e.isIncrease&&!e.direct?(n(),t("div",ui,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):!e.isIncrease&&e.direct?(n(),t("div",fi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):a("",!0),e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(n(),t("div",Ci,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(n(),t("div",vi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):a("",!0),i("div",gi,o(e.t("common.positionwillBe",{symbol:`${!e.isIncrease&&e.needReverse&&e.direct?e.toCoin.symbol:e.fromCoin.symbol}`})),1)])])])]),i("div",yi,[e.poolInfo?(n(),ie(w,{key:0,"min-price":e.minPrice,"max-price":e.maxPrice,"pool-info":e.poolInfo,"fixed-from-coin":e.fixedFromCoin,"from-coin":e.fromCoin,"to-coin":e.toCoin,"current-price-tab":e.currentPriceTab,slippage:e.slippage,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"position-total-amount":e.positionTotalAmount,"tick-lower":e.tickLower,"tick-upper":e.tickUpper},null,8,["min-price","max-price","pool-info","fixed-from-coin","from-coin","to-coin","current-price-tab","slippage","current-price","current-price-reverse","from-coin-amount","to-coin-amount","position-total-amount","tick-lower","tick-upper"])):a("",!0)])]),e.notifiStatus=="authenticated"&&e.hasNotifi&&e.route.name=="deposit"&&e.title==e.$t("button.addLiquidity")?(n(),t("div",hi,[i("div",ki,[bi,z(Q,{class:"range-alerts-switch",checked:e.checked,onClick:y[1]||(y[1]=fe=>e.checked=!e.checked)},null,8,["checked"])]),pi])):a("",!0),z(m,{class:"big-btn liquidity-btn",style:pe(e.notifiStatus=="authenticated"&&e.hasNotifi&&e.route.name=="deposit"&&e.title==e.$t("button.addLiquidity")?{bottom:"-172px"}:{bottom:"-65px"}),onClick:e.clickSubmit},{default:H(()=>[ee(o(e.isIncrease?"Increase Liquidity":e.title==e.$t("button.addLiquidity")?"Add Liquidity":"Create and Add Liquidity"),1)]),_:1},8,["style","onClick"])]}),_:1},8,["title"])}const Fi=le(Ve,[["render",Si],["__scopeId","data-v-d14b9268"]]);export{Bi as _,qi as a,ze as b,Fi as c};
