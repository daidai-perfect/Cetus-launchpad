import{_ as ye}from"./token-warning.96fdb1f5.js";import{_ as ve}from"./status-block.8b5d5038.js";import{g as oe,b as m,c as be,d}from"./index.3daa4341.js";import{a as ae,r as B,m as b,E as me,D as te,e as le,o as i,f as n,h as r,j as ie,v as o,i as V,w as _,u as s,x as t,F as W,L as he,p as ue,k as ce,Y as ke,l as ge,y as pe,a6 as Pe,M as Ie,q as Se,c as ne,t as Z,H as we,W as Re,B as Ae}from"./entry.a7bc8957.js";/* empty css              */import{a as fe,u as Ce,b as De}from"./pool.ef5dfa1f.js";import{D as y}from"./decimal.765d8738.js";import{b as re,c as Ue}from"./index.52313906.js";/* empty css              */import{i as de}from"./import-icon.de3e6c66.js";import{u as Ne}from"./notifi.9d9661f7.js";y.config({precision:64,rounding:y.ROUND_DOWN,toExpNeg:-64,toExpPos:64});const $e=ae({props:{minPrice:{type:String,default:""},maxPrice:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fixedFromCoin:{type:Boolean,default:!0},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},slippage:{type:Number,default:0},currentPrice:{type:Number,default:0},currentPriceReverse:{type:Number,default:0},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},positionTotalAmount:{type:Number,default:0},tickLower:{type:Number,default:0},tickUpper:{type:Number,default:0}},setup(e){const v=B("--"),j=B("--"),h=fe(),M=b(()=>h);b(()=>M.value.chainName);const G=Ce(),k=b(()=>G),L=b(()=>M.value.chainName?De(M.value.chainName):{}),P=me(),J=async()=>{var X;if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:c,TickMath:I,getNearestTickByTick:g}=L.value,A=e.poolInfo.token_a.decimals,O=e.poolInfo.token_b.decimals;let D,U,f,C,S,w,p,a=1,u=1;const R=e.poolInfo.current_tick_index;let N=k.value.poolPriceConfigObj&&k.value.poolPriceConfigObj[e.poolInfo.address]&&k.value.poolPriceConfigObj[e.poolInfo.address].recommend_ranges||{};if(e.poolInfo.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&e.poolInfo.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?p=!0:p=!1,e.minPrice==="0"&&e.maxPrice==="∞")f=c.getMinIndex(e.poolInfo.tickSpacing),C=c.getMaxIndex(e.poolInfo.tickSpacing);else if(e.currentPriceTab=="custom"||(X=P==null?void 0:P.query)!=null&&X.action){p?(D=e.minPrice,U=e.maxPrice):(D=new y(1).div(e.maxPrice).toString(),U=new y(1).div(e.minPrice).toString());try{S=I.priceToTickIndex(new y(D),A,O)}catch{S=-443636}try{w=I.priceToTickIndex(new y(U),A,O)}catch{w=443636}D==0&&(S=-443636),f=P.name=="increase-liquidity"||P.name=="new-position-detail"?e.tickLower:g(S,Number(e.poolInfo.tickSpacing),!0),C=P.name=="increase-liquidity"||P.name=="new-position-detail"?e.tickUpper:g(w,Number(e.poolInfo.tickSpacing),!0)}else f=N&&N[e.currentPriceTab]&&N[e.currentPriceTab].lower,C=N&&N[e.currentPriceTab]&&N[e.currentPriceTab].upper;if(e.maxPrice==="∞"||R>=f&&R<=C){let F;if(e.fixedFromCoin){const Y=new y(e.fromCoinAmount||1).mul(Math.pow(10,e.fromCoin.decimals)).toString();F=new re(Y)}else{const Y=new y(e.toCoinAmount||1).mul(Math.pow(10,e.toCoin.decimals)).toString();F=new re(Y)}const{tokenMaxA:$,tokenMaxB:T}=await L.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:e.poolInfo.token_a,tokenB:e.poolInfo.token_b,lowerTick:f,upperTick:C,coinAmount:F,iscoinA:p?e.fixedFromCoin:!e.fixedFromCoin,roundUp:!0,slippage:Number(e.slippage)/100,curSqrtPrice:new re(e.poolInfo.current_sqrt_price)});p?e.fixedFromCoin?(u=Number(T)>0?T:"",a=Number($)>0?$:""):(a=Number($)>0?$:"",u=Number(T)>0?T:""):(e.fixedFromCoin,u=$,a=T)}else R>C?p?(u=1,a=0):(a=1,u=0):R<f&&(p?(u=0,a=1):(u=1,a=0));const H=a?Number(a):0,K=u?Number(u):0,Q=new y(K).add(new y(p?new y(H*e.currentPrice):new y(H*e.currentPriceReverse))),x=d(new y(H).mul(new y(p?e.currentPrice:e.currentPriceReverse)).div(Q).mul(100).toNumber().toFixed(2),2),ee=d(new y(K).div(Q).mul(100).toNumber().toFixed(2),2);v.value=x,j.value=ee};te(()=>[e.poolInfo,e.minPrice,e.maxPrice,e.fromCoinAmount,e.toCoinAmount],([c,I,g])=>{I&&g&&c&&!be(c)&&(I!=="0"||g!=="0")?J():(v.value="",j.value="")},{immediate:!0,deep:!0});let l={};te(()=>k.value.RATES,c=>{c&&(l=c)},{immediate:!0});const E=b(()=>{const c=l&&l[e.fromCoin.address]&&l[e.fromCoin.address].price,I=l&&l[e.toCoin.address]&&l[e.toCoin.address].price,g=Number(e.fromCoinAmount)*Number(l&&l[e.fromCoin.address]&&l[e.fromCoin.address].price),A=Number(e.toCoinAmount)*Number(l&&l[e.toCoin.address]&&l[e.toCoin.address].price);return c&&I?Number(g)+Number(A):"--"});return{positionAmount:b(()=>E.value!=="--"?new y(e.positionTotalAmount).add(new y(E.value)).toString():0),fromCoinRatio:v,toCoinRatio:j,totalAmount:E,fixD:oe,addCommom:m,route:P}}});const Te=e=>(ue("data-v-69ac55d7"),e=e(),ce(),e),Be={class:"deposit-ratio"},Le={class:"label"},qe=Te(()=>r("svg",{class:"icon","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-icon-information"})],-1)),Oe={key:0,class:"text"},Fe={key:1},je={key:0,class:"deposit-ratio totalAmount"},Me={class:"label"},Ee={class:"text"},Ve={key:0,class:"liquidity-update"},We={key:1};function ze(e,v,j,h,M,G){const k=he;return i(),n(W,null,[r("div",Be,[r("div",Le,[ie(o(e.$t("newAdd.depositRatio"))+" ",1),V(k,{placement:"bottom","arrow-point-at-center":""},{title:_(()=>[r("span",null,o(e.$t("newAdd.depositRatioTips")),1)]),default:_(()=>[qe]),_:1})]),e.currentPriceTab!=="full range"?(i(),n("div",Oe,o(e.fromCoinRatio!=="--"?e.fromCoinRatio+"%":"--")+" "+o(e.fromCoinRatio!=="--"?e.fromCoin&&e.fromCoin.symbol:"")+" / "+o(e.toCoinRatio!=="--"?e.toCoinRatio+"%":"--")+" "+o(e.toCoinRatio!=="--"?e.toCoin&&e.toCoin.symbol:""),1)):(i(),n("div",Fe," 50% "+o(e.fromCoin&&e.fromCoin.symbol)+" / 50% "+o(e.toCoin&&e.toCoin.symbol),1))]),e.totalAmount!==0?(i(),n("div",je,[r("div",Me,o(e.$t("newAdd.totalAmount")),1),r("div",Ee,[e.route.name=="increase-liquidity"?(i(),n("div",Ve,[r("span",null,o(e.positionTotalAmount>0&&e.positionTotalAmount<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:s(m))(("fixD"in e?e.fixD:s(oe))(e.positionTotalAmount,2),2)}`)+" → ",1),r("span",null,o(Number(e.positionAmount)>0&&Number(e.positionAmount)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:s(m))(("fixD"in e?e.fixD:s(oe))(e.positionAmount,2),2)}`),1)])):(i(),n("div",We,o(e.totalAmount>0&&e.totalAmount<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:s(m))(("fixD"in e?e.fixD:s(oe))(e.totalAmount,2))}`),1))])])):t("",!0)],64)}const He=le($e,[["render",ze],["__scopeId","data-v-69ac55d7"]]),Ye=ae({components:{Modal:ke},props:{title:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:"1245566.008946"},toCoinAmount:{type:String,default:"11111111111"},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},isIncrease:{type:Boolean,default:!1},fixedFromCoin:{type:Boolean,default:!0},currentPriceTab:{type:String,default:""},currentPrice:{type:String,default:""},currentPriceReverse:{type:String,default:""},showFromCoinLock:{type:Boolean,default:!1},showToCoinLock:{type:Boolean,default:!1},currentDirect:{type:Boolean,default:!0},positionTotalAmount:{type:Number,default:0},tickLower:{type:Number,default:0},tickUpper:{type:Number,default:0},isCreate:{type:Boolean,default:!1}},setup(e,v){const{t:j}=ge(),h=b(()=>{var a,u,R;return((a=e==null?void 0:e.poolInfo)==null?void 0:a.needReverse)||((R=(u=e==null?void 0:e.poolInfo)==null?void 0:u.poolInfo)==null?void 0:R.needReverse)}),M=Ce(),G=b(()=>M),k=fe(),L=b(()=>k),P=a=>{var u;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((u=G.value.tokensObj[a==null?void 0:a.address])==null?void 0:u.logo_url)||(L.value.theme==="default"?de("/image/coins/unknown.png"):de("/image/coins/sui-unknown.png"))},J=B(!1),l=B(!0);function E(){l.value=!l.value}const q=b(()=>L.value.slippage),c=Ne(),I=b(()=>c),g=b(()=>I.value.status),A=b(()=>L.value.chainName),O=b(()=>Ue[A.value].hasNotifi),D=me(),U=B(!1),f=B(""),C=B(""),S=B(""),w=B("");return pe(()=>{f.value=String(d(String(e.minPrice),6)),C.value=String(d(String(e.maxPrice),6)),S.value=e.currentPrice,w.value=e.currentPriceReverse,e.isIncrease&&(f.value=h.value?String(d(String(1/e.maxPrice),6)):String(d(String(e.minPrice),6)),C.value=h.value?String(d(String(1/e.minPrice),6)):String(d(String(e.maxPrice),6)),S.value=h.value?e.currentPriceReverse:e.currentPrice,w.value=h.value?e.currentPrice:e.currentPriceReverse)}),te(l,a=>{!e.isIncrease&&a||e.isIncrease&&!h.value&&a?(f.value=String(d(String(e.minPrice),6)),C.value=String(d(String(e.maxPrice),6))):!e.isIncrease&&!a||e.isIncrease&&!h.value&&!a?(f.value=String(d(String(1/Number(e.maxPrice)),6)),C.value=String(d(String(1/Number(e.minPrice)),6))):e.isIncrease&&h.value&&(e.currentDirect?a:!a)?(f.value=String(d(String(1/Number(e.maxPrice)),6)),C.value=String(d(String(1/Number(e.minPrice)),6))):e.isIncrease&&h.value&&(e.currentDirect?!a:a)&&(f.value=String(d(String(e.minPrice),6)),C.value=String(d(String(e.maxPrice),6))),S.value=e.currentPrice,w.value=e.currentPriceReverse}),{needReverse:h,getCoinIcon:P,addCommom:m,rateChange:J,changeDirect:E,direct:l,t:j,slippage:q,notifiStatus:g,hasNotifi:O,route:D,checked:U,min:f,max:C,decimalUi:d,clickSubmit:()=>{e.isIncrease?v.emit("toAdd"):e.title==Pe.global.t("newAdd.preview")?v.emit("createPool"):v.emit("toAdd",U.value&&g.value=="authenticated")}}}});const z=e=>(ue("data-v-cbcebc2b"),e=e(),ce(),e),Ge=z(()=>r("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Je={class:"modal-content"},Ke={class:"pool-info"},Qe={class:"left"},Xe={alt:""},Ze={alt:""},_e={class:"pool-name"},xe={class:"right"},eo={class:"coin-info"},oo={class:"from-coin-info"},io={class:"left"},no={class:"coin-amount"},ro={class:"coin-symbol"},to={class:"right"},so={class:"to-coin-info"},ao={class:"left"},mo={class:"coin-amount"},lo={class:"coin-symbol"},uo={class:"right"},co=z(()=>r("div",{class:"to-swap-logo"},null,-1)),fo={class:"select-range"},Co=z(()=>r("div",{class:"select-range-title"},"Selected Range",-1)),yo={class:"price-conent"},vo={class:"current-price"},bo={class:"left"},ho={key:0,class:"current-price-title"},ko={key:1,class:"current-price-title"},go={key:0,class:"a2b"},po={key:0},Po={key:1},Io={key:2},So={key:3},wo={key:4},Ro={key:5},Ao={key:6},Do={key:7},Uo={key:1,class:"a2b"},No={key:0},$o={key:1},To={key:2},Bo={key:3},Lo={key:4},qo={key:5},Oo={key:6},Fo={key:7},jo={key:2,class:"a2b"},Mo={key:0},Eo={key:1},Vo={key:2},Wo={key:3},zo={key:3,class:"a2b"},Ho={key:0},Yo={key:1},Go={key:2},Jo={key:3},Ko={key:0,class:"a2b"},Qo={key:0},Xo={key:1},Zo={key:2},_o={key:3},xo={key:4},ei={key:5},oi={key:6},ii={key:7},ni={key:1,class:"a2b"},ri={key:0},ti={key:1},si={key:2},di={key:3},ai={key:4},mi={key:5},li={key:6},ui={key:7},ci={class:"right"},fi={alt:""},Ci={class:"coin-rate"},yi=z(()=>r("div",null,[r("svg",{class:"icon icon-up","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),vi=z(()=>r("div",null,[r("svg",{class:"icon icon-down","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),bi=[yi,vi],hi={class:"price-range-block-content"},ki={class:"price-range-block"},gi={class:"price-item"},pi={class:"title"},Pi={class:"price"},Ii={key:0,class:"text"},Si={key:1,class:"text"},wi={key:0,class:"text"},Ri={key:1,class:"text"},Ai={key:0,class:"text"},Di={key:1,class:"text"},Ui={class:"price-item"},Ni={class:"title"},$i={class:"price"},Ti={key:0,class:"text"},Bi={key:1,class:"text"},Li={key:0,class:"text"},qi={key:1,class:"text"},Oi={key:0,class:"text"},Fi={key:1,class:"text"},ji={class:"deposit-ratio-content"},Mi={key:0,class:"range-alerts"},Ei={class:"range-alerts-top"},Vi=z(()=>r("div",{class:"title"}," Range alerts for this position ",-1)),Wi=z(()=>r("div",{class:"range-alerts-bottom"}," Subscribe to receive alerts on email, SMS, or Telegram when the price for this pool moves out of your selected range. ",-1));function zi(e,v,j,h,M,G){const k=ye,L=ve,P=He,J=Re,l=Ae,E=Ie("Modal"),q=Se("image");return i(),ne(E,{width:"440px",visible:!0,footer:null,title:e.title,onCancel:v[2]||(v[2]=c=>e.$emit("onClose"))},{closeIcon:_(()=>[Ge]),default:_(()=>{var c,I,g,A,O,D,U,f,C,S,w,p,a,u,R,N,H,K,Q,x,ee,X,F,$,T,Y;return[r("div",Je,[r("div",Ke,[r("div",Qe,[r("div",null,[Z(r("img",Xe,null,512),[[q,e.needReverse?(A=(g=e.poolInfo)==null?void 0:g.token_b)==null?void 0:A.logo_url:(I=(c=e.poolInfo)==null?void 0:c.token_a)==null?void 0:I.logo_url]]),V(k,{address:e.needReverse?(f=(U=e.poolInfo)==null?void 0:U.token_b)==null?void 0:f.address:(D=(O=e.poolInfo)==null?void 0:O.token_a)==null?void 0:D.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),r("div",null,[Z(r("img",Ze,null,512),[[q,e.needReverse?(p=(w=e.poolInfo)==null?void 0:w.token_a)==null?void 0:p.logo_url:(S=(C=e.poolInfo)==null?void 0:C.token_b)==null?void 0:S.logo_url]]),V(k,{address:e.needReverse?(N=(R=e.poolInfo)==null?void 0:R.token_a)==null?void 0:N.address:(u=(a=e.poolInfo)==null?void 0:a.token_b)==null?void 0:u.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),r("div",_e,[r("span",null,o(e.needReverse?(x=(Q=e.poolInfo)==null?void 0:Q.token_b)==null?void 0:x.symbol:(K=(H=e.poolInfo)==null?void 0:H.token_a)==null?void 0:K.symbol),1),ie(" - "),r("span",null,o(e.needReverse?($=(F=e.poolInfo)==null?void 0:F.token_a)==null?void 0:$.symbol:(X=(ee=e.poolInfo)==null?void 0:ee.token_b)==null?void 0:X.symbol),1)])]),r("div",xe,[ie(" Fee tier "),r("span",null,o(e.poolInfo&&e.poolInfo.fee*100)+"%",1)])]),r("div",eo,[r("div",oo,[r("div",io,[r("div",no,o(("addCommom"in e?e.addCommom:s(m))(e.fromCoinAmount)||0),1),r("div",ro,o(e.fromCoin&&e.fromCoin.symbol),1)]),r("div",to,[Z(r("img",null,null,512),[[q,e.fromCoin&&e.fromCoin.logoURI||e.getCoinIcon(e.fromCoin)]]),V(k,{address:e.fromCoin&&e.fromCoin.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])])]),r("div",so,[r("div",ao,[r("div",mo,o(("addCommom"in e?e.addCommom:s(m))(e.toCoinAmount)||0),1),r("div",lo,o(e.toCoin&&e.toCoin.symbol),1)]),r("div",uo,[Z(r("img",null,null,512),[[q,e.toCoin&&e.toCoin.logoURI||e.getCoinIcon(e.toCoin)]]),V(k,{address:e.toCoin&&e.toCoin.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),co])]),r("div",fo,[Co,e.title!==e.$t("newAdd.preview")?(i(),ne(L,{key:0,"current-status":e.showFromCoinLock||e.showToCoinLock?"Inactive":"Active"},null,8,["current-status"])):t("",!0)]),r("div",yo,[r("div",vo,[r("div",bo,[e.title!==e.$t("newAdd.preview")?(i(),n("div",ho,"Current Price")):(i(),n("div",ko,"Initial Price")),e.isCreate?(i(),n(W,{key:3},[!e.isIncrease&&!e.needReverse?(i(),n("div",Ko,[e.direct&&e.currentDirect?(i(),n("span",Qo,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPrice,e.toCoin.decimals))),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("span",Xo,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPriceReverse,e.toCoin.decimals))),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("span",Zo,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("span",_o,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPrice,e.fromCoin.decimals))),1)):t("",!0),e.direct&&e.currentDirect?(i(),n("div",xo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("div",ei,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("div",oi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("div",ii,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)])):!e.isIncrease&&e.needReverse?(i(),n("div",ni,[e.direct&&e.currentDirect?(i(),n("span",ri,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPrice,e.toCoin.decimals))),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("span",ti,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("span",si,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPrice,e.toCoin.decimals))),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("span",di,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):t("",!0),e.direct&&e.currentDirect?(i(),n("div",ai,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("div",mi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("div",li,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("div",ui,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)])):t("",!0)],64)):(i(),n(W,{key:2},[!e.isIncrease&&!e.needReverse?(i(),n("div",go,[e.direct&&e.currentDirect?(i(),n("span",po,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPrice,e.toCoin.decimals))),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("span",Po,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPriceReverse,e.toCoin.decimals))),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("span",Io,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("span",So,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPrice,e.fromCoin.decimals))),1)):t("",!0),e.direct&&e.currentDirect?(i(),n("div",wo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("div",Ro,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("div",Ao,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("div",Do,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)])):!e.isIncrease&&e.needReverse?(i(),n("div",Uo,[e.direct&&e.currentDirect?(i(),n("span",No,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPrice,e.toCoin.decimals))),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("span",$o,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("span",To,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPriceReverse,e.toCoin.decimals))),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("span",Bo,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPrice,e.fromCoin.decimals))),1)):t("",!0),e.direct&&e.currentDirect?(i(),n("div",Lo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("div",qo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("div",Oo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("div",Fo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)])):t("",!0),e.isIncrease&&!e.needReverse?(i(),n("div",jo,[e.direct?(i(),n("span",Mo,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPrice,e.toCoin.decimals))),1)):(i(),n("span",Eo,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPriceReverse,6))),1)),e.direct?(i(),n("div",Wo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):(i(),n("div",Vo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1))])):t("",!0),e.isIncrease&&e.needReverse?(i(),n("div",zo,[e.direct?(i(),n("span",Ho,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPriceReverse,e.fromCoin.decimals))),1)):(i(),n("span",Yo,o(("addCommom"in e?e.addCommom:s(m))(("decimalUi"in e?e.decimalUi:s(d))(e.currentPrice,e.toCoin.decimals))),1)),e.direct?(i(),n("div",Go,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):(i(),n("div",Jo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1))])):t("",!0)],64))]),r("div",ci,[Z(r("img",fi,null,512),[[q,e.direct?e.fromCoin.logo_url:e.toCoin.logo_url]]),r("span",null,o(e.direct?(T=e.fromCoin)==null?void 0:T.symbol:(Y=e.toCoin)==null?void 0:Y.symbol),1),r("div",Ci,[r("div",{onClick:v[0]||(v[0]=(...se)=>e.changeDirect&&e.changeDirect(...se))},bi)])])]),r("div",hi,[r("div",ki,[r("div",gi,[r("div",pi,o(e.$t("common.minPrice")),1),r("p",Pi,o(("addCommom"in e?e.addCommom:s(m))(e.min)),1),!e.isIncrease&&!e.direct?(i(),n("div",Ii,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):!e.isIncrease&&e.direct?(i(),n("div",Si,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),e.isIncrease&&e.needReverse?(i(),n(W,{key:2},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",wi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",Ri,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)],64)):t("",!0),e.isIncrease&&!e.needReverse?(i(),n(W,{key:3},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",Ai,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",Di,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0)],64)):t("",!0)]),r("div",Ui,[r("div",Ni,o(e.$t("common.maxPrice")),1),r("p",$i,o(e.maxPrice.indexOf("∞")>-1||e.maxPrice.indexOf("+")>-1?"∞":("addCommom"in e?e.addCommom:s(m))(e.max)),1),!e.isIncrease&&!e.direct?(i(),n("div",Ti,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):!e.isIncrease&&e.direct?(i(),n("div",Bi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),e.isIncrease&&e.needReverse?(i(),n(W,{key:2},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",Li,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",qi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)],64)):t("",!0),e.isIncrease&&!e.needReverse?(i(),n(W,{key:3},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",Oi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",Fi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0)],64)):t("",!0)])])])]),r("div",ji,[e.poolInfo?(i(),ne(P,{key:0,"min-price":e.minPrice,"max-price":e.maxPrice,"pool-info":e.poolInfo,"fixed-from-coin":e.fixedFromCoin,"from-coin":e.fromCoin,"to-coin":e.toCoin,"current-price-tab":e.currentPriceTab,slippage:e.slippage,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"position-total-amount":e.positionTotalAmount,"tick-lower":e.tickLower,"tick-upper":e.tickUpper},null,8,["min-price","max-price","pool-info","fixed-from-coin","from-coin","to-coin","current-price-tab","slippage","current-price","current-price-reverse","from-coin-amount","to-coin-amount","position-total-amount","tick-lower","tick-upper"])):t("",!0)])]),e.notifiStatus=="authenticated"&&e.hasNotifi&&e.route.name=="liquidity-deposit"&&e.title==e.$t("button.addLiquidity")&&e.minPrice!=="0"&&e.maxPrice!=="∞"?(i(),n("div",Mi,[r("div",Ei,[Vi,V(J,{class:"range-alerts-switch",checked:e.checked,onClick:v[1]||(v[1]=se=>e.checked=!e.checked)},null,8,["checked"])]),Wi])):t("",!0),V(l,{class:"big-btn liquidity-btn",style:we(e.notifiStatus=="authenticated"&&e.hasNotifi&&e.route.name=="liquidity-deposit"&&e.title==e.$t("button.addLiquidity")&&e.minPrice!=="0"&&e.maxPrice!=="∞"?{bottom:"-172px"}:{bottom:"-65px"}),onClick:e.clickSubmit},{default:_(()=>[ie(o(e.isIncrease?"Increase Liquidity":e.title==e.$t("button.addLiquidity")?"Add Liquidity":"Create and Add Liquidity"),1)]),_:1},8,["style","onClick"])]}),_:1},8,["title"])}const on=le(Ye,[["render",zi],["__scopeId","data-v-cbcebc2b"]]);export{He as _,on as a};
