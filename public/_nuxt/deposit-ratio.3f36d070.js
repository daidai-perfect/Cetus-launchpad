import{e as $,a as D,c as Y,d as W}from"./common.26bee659.js";import{a as Z,r as z,m as w,L as ee,A as H,e as oe,o as y,f as N,h as u,j as te,x as n,i as ne,w as J,u as v,G as ie,F as ae,P as re,p as me,k as ue}from"./entry.f915a1e9.js";/* empty css              */import{u as ce,a as se,b as de}from"./index.4a60ce8c.js";import{D as o}from"./decimal.765d8738.js";import{b as U}from"./index.bdee7b42.js";o.config({precision:64,rounding:o.ROUND_DOWN,toExpNeg:-64,toExpPos:64});const le=Z({props:{minPrice:{type:String,default:""},maxPrice:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fixedFromCoin:{type:Boolean,default:!0},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},slippage:{type:Number,default:0},currentPrice:{type:Number,default:0},currentPriceReverse:{type:Number,default:0},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},positionTotalAmount:{type:Number,default:0},tickLower:{type:Number,default:0},tickUpper:{type:Number,default:0}},setup(e){const P=z("--"),T=z("--"),p=ce(),h=w(()=>p);w(()=>h.value.chainName);const x=se(),l=w(()=>x),M=w(()=>h.value.chainName?de(h.value.chainName):{}),c=ee(),K=async()=>{var G;if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:i,TickMath:s,getNearestTickByTick:d}=M.value,_=e.poolInfo.token_a.decimals,B=e.poolInfo.token_b.decimals;let I,O,f,C,S,j,m,a=1,r=1;const R=e.poolInfo.current_tick_index;let b=l.value.poolPriceConfigObj&&l.value.poolPriceConfigObj[e.poolInfo.address]&&l.value.poolPriceConfigObj[e.poolInfo.address].recommend_ranges||{};if(e.poolInfo.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&e.poolInfo.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?m=!0:m=!1,e.minPrice==="0"&&e.maxPrice==="∞")f=i.getMinIndex(e.poolInfo.tickSpacing),C=i.getMaxIndex(e.poolInfo.tickSpacing);else if(e.currentPriceTab=="custom"||(G=c==null?void 0:c.query)!=null&&G.action){m?(I=e.minPrice,O=e.maxPrice):(I=new o(1).div(e.maxPrice).toString(),O=new o(1).div(e.minPrice).toString());try{S=s.priceToTickIndex(new o(I),_,B)}catch{S=-443636}try{j=s.priceToTickIndex(new o(O),_,B)}catch{j=443636}I==0&&(S=-443636),f=c.name=="increase-liquidity"||c.name=="new-position-detail"?e.tickLower:d(S,Number(e.poolInfo.tickSpacing),!0),C=c.name=="increase-liquidity"||c.name=="new-position-detail"?e.tickUpper:d(j,Number(e.poolInfo.tickSpacing),!0)}else f=b&&b[e.currentPriceTab]&&b[e.currentPriceTab].lower,C=b&&b[e.currentPriceTab]&&b[e.currentPriceTab].upper;if(e.maxPrice==="∞"||R>=f&&R<=C){let g;if(e.fixedFromCoin){const L=new o(e.fromCoinAmount||1).mul(Math.pow(10,e.fromCoin.decimals)).toString();g=new U(L)}else{const L=new o(e.toCoinAmount||1).mul(Math.pow(10,e.toCoin.decimals)).toString();g=new U(L)}const{tokenMaxA:k,tokenMaxB:A}=await M.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:e.poolInfo.token_a,tokenB:e.poolInfo.token_b,lowerTick:f,upperTick:C,coinAmount:g,iscoinA:m?e.fixedFromCoin:!e.fixedFromCoin,roundUp:!0,slippage:Number(e.slippage)/100,curSqrtPrice:new U(e.poolInfo.current_sqrt_price)});m?e.fixedFromCoin?(r=Number(A)>0?A:"",a=Number(k)>0?k:""):(a=Number(k)>0?k:"",r=Number(A)>0?A:""):(e.fixedFromCoin,r=k,a=A)}else R>C?m?(r=1,a=0):(a=1,r=0):R<f&&(m?(r=0,a=1):(r=1,a=0));const q=a?Number(a):0,E=r?Number(r):0,V=new o(E).add(new o(m?new o(q*e.currentPrice):new o(q*e.currentPriceReverse))),Q=W(new o(q).mul(new o(m?e.currentPrice:e.currentPriceReverse)).div(V).mul(100).toNumber().toFixed(2),2),X=W(new o(E).div(V).mul(100).toNumber().toFixed(2),2);P.value=Q,T.value=X};H(()=>[e.poolInfo,e.minPrice,e.maxPrice,e.fromCoinAmount,e.toCoinAmount],([i,s,d])=>{s&&d&&i&&!Y(i)&&(s!=="0"||d!=="0")?K():(P.value="",T.value="")},{immediate:!0,deep:!0});let t={};H(()=>l.value.RATES,i=>{i&&(t=i)},{immediate:!0});const F=w(()=>{const i=t&&t[e.fromCoin.address]&&t[e.fromCoin.address].price,s=t&&t[e.toCoin.address]&&t[e.toCoin.address].price,d=Number(e.fromCoinAmount)*Number(t&&t[e.fromCoin.address]&&t[e.fromCoin.address].price),_=Number(e.toCoinAmount)*Number(t&&t[e.toCoin.address]&&t[e.toCoin.address].price);return i&&s?Number(d)+Number(_):"--"});return{positionAmount:w(()=>F.value!=="--"?new o(e.positionTotalAmount).add(new o(F.value)).toString():0),fromCoinRatio:P,toCoinRatio:T,totalAmount:F,fixD:$,addCommom:D,route:c}}});const fe=e=>(me("data-v-69ac55d7"),e=e(),ue(),e),Ce={class:"deposit-ratio"},be={class:"label"},ke=fe(()=>u("svg",{class:"icon","aria-hidden":"true"},[u("use",{"xlink:href":"#icon-icon-information"})],-1)),Ae={key:0,class:"text"},we={key:1},ye={key:0,class:"deposit-ratio totalAmount"},Ne={class:"label"},ve={class:"text"},ge={key:0,class:"liquidity-update"},Pe={key:1};function Te(e,P,T,p,h,x){const l=re;return y(),N(ae,null,[u("div",Ce,[u("div",be,[te(n(e.$t("newAdd.depositRatio"))+" ",1),ne(l,{placement:"bottom","arrow-point-at-center":""},{title:J(()=>[u("span",null,n(e.$t("newAdd.depositRatioTips")),1)]),default:J(()=>[ke]),_:1})]),e.currentPriceTab!=="full range"?(y(),N("div",Ae,n(e.fromCoinRatio!=="--"?e.fromCoinRatio+"%":"--")+" "+n(e.fromCoinRatio!=="--"?e.fromCoin&&e.fromCoin.symbol:"")+" / "+n(e.toCoinRatio!=="--"?e.toCoinRatio+"%":"--")+" "+n(e.toCoinRatio!=="--"?e.toCoin&&e.toCoin.symbol:""),1)):(y(),N("div",we," 50% "+n(e.fromCoin&&e.fromCoin.symbol)+" / 50% "+n(e.toCoin&&e.toCoin.symbol),1))]),e.totalAmount!==0?(y(),N("div",ye,[u("div",Ne,n(e.$t("newAdd.totalAmount")),1),u("div",ve,[e.route.name=="increase-liquidity"?(y(),N("div",ge,[u("span",null,n(e.positionTotalAmount>0&&e.positionTotalAmount<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(D))(("fixD"in e?e.fixD:v($))(e.positionTotalAmount,2),2)}`)+" → ",1),u("span",null,n(Number(e.positionAmount)>0&&Number(e.positionAmount)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(D))(("fixD"in e?e.fixD:v($))(e.positionAmount,2),2)}`),1)])):(y(),N("div",Pe,n(e.totalAmount>0&&e.totalAmount<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(D))(("fixD"in e?e.fixD:v($))(e.totalAmount,2))}`),1))])])):ie("",!0)],64)}const Fe=oe(le,[["render",Te],["__scopeId","data-v-69ac55d7"]]);export{Fe as _};
