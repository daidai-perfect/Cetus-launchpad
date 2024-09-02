import{_ as fo}from"./refresh-icon.9b30e60a.js";import{_ as go,a as wo,b as So}from"./new-swap-confirm.e8a6962f.js";import{_ as bo}from"./network-tips.880b3330.js";import{_ as Co}from"./coin-select.90d31458.js";import{_ as ho}from"./swap-setting.21d5bb95.js";import{_ as Ao}from"./token-warning-modal.39b3a52b.js";import{a as ya,e as Ia,o as R,c as G,w as ve,L as Ta,j as Ve,v as _e,h as I,f as we,z as Se,b as ko,a2 as yo,a3 as Io,l as To,m as A,r as v,y as Oo,C as No,D as Z,a7 as ha,M as ye,i as W,x as U,B as Mo,p as Ro,k as Bo,A as Po,W as $o}from"./entry.c708ef7e.js";/* empty css              *//* empty css              */import{i as Qe}from"./import-icon.de3e6c66.js";import{a as Uo,u as Lo,o as jo,b as Fo,p as Aa}from"./pool.961328c5.js";import{u as Eo,i as qo,a as Wo,d as re,b as _,s as Xe,c as Ie,g as ne,e as Ee,h as ge,Z as ka}from"./index.df8ba82f.js";import{D as m}from"./decimal.0bdeb344.js";import{A as Do,R as Ho,c as Te,u as zo}from"./confetti.module.e99738ca.js";import{U as Jo}from"./underline-tab.439ed083.js";import{N as Yo}from"./new-assets-card.cb4bb16e.js";/* empty css              */import"./index.199bdb95.js";/* empty css              */import"./install.752cf7e6.js";import"./token-warning_2x.0214a736.js";import"./img-no-Positions_2x.3cc7562f.js";import"./img-no-Positions_2x.3f120bfe.js";/* empty css              */import"./icon-error_2x.32b41e38.js";import"./icon-selected_3x.09e9a6f0.js";import"./coin-img.2456cf91.js";import"./limit-beta.8b8b6d6d.js";import"./token-warning.d42e0cb2.js";import"./useDebounceFunction.6ded913d.js";const Ko=ya({props:{type:{type:String,default:""},placement:{type:String,default:"top"},xlinkHref:{type:String,default:""},haveBg:{type:Boolean,default:!1}},setup(e){return{tooltipObj:{setting:"Swap Settings",priceReference:"The following price is only an external reference from 3rd party data providers, which does not reflect actual data on Cetus."}}}});const Zo={"aria-hidden":"true",class:"icon"},Go=["xlink:href"];function Qo(e,f,F,xe,B,de){const t=Ta;return R(),G(t,{placement:e.placement,"overlay-class-name":"new-tooltip-border-radius-color"},{title:ve(()=>[Ve(_e(e.tooltipObj[e.type]),1)]),default:ve(()=>[I("div",{class:Se(["icon-box",e.haveBg?"icon-bg":""])},[(R(),we("svg",Zo,[I("use",{"xlink:href":e.xlinkHref},null,8,Go)]))],2)]),_:1},8,["placement"])}const Xo=Ia(Ko,[["render",Qo],["__scopeId","data-v-288aac79"]]),Vo=ya({components:{AggregatorSettingModal:Do,RouterModal:Ho,UnderlineTab:Jo,NewAssetsCard:Yo,IconTooltip:Xo},setup(){const e=ko(),f=yo(Io,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),{t:F,locale:xe}=To(),B=Uo(),de=Lo(),t=A(()=>de);let be=v(!1),Q=v(!0),Oe=v(!1),We=v(!1),Ne=v(!1),se=v(!1);const ce=v("fromCoin"),Ce=v(""),he=v(""),Me=v(!1),c=v(!0),Re=v(!1),y=v(!1),D=v(!1),u=v(""),i=v(""),C=v(20),H=v(0),Be=v(null),z=v(!1),Ae=A(()=>B.slippage),S=A(()=>B.chainName),P=A(()=>S.value?Fo(S.value):{}),X=A(()=>zo()),l=v(),n=v(),De=A(()=>ne&&ne[S.value]&&ne[S.value].hasRouter),ea=A(()=>de.getPoolInfoSuccess),Oa=A(()=>{var a;return g.value&&((a=g.value)!=null&&a.is_pause)?"Pool Closed":!l.value||!n.value?F("modal.selectTokenModalTitle"):!Number(u.value)&&!Number(i.value)?F("button.enterAmount"):!De.value&&!g.value&&ea.value?"Pool Not Found":De.value&&pe.value?"No Available Route":z.value?F("button.insufficientLiquidity"):Number(u.value)>Number(j.value)?F("button.insufficientBalance",{name:l.value.symbol}):F("button.swap")}),Na=a=>{var s,o,p,d;ce.value=a,a==="fromCoin"?(Ce.value=((s=n.value)==null?void 0:s.address)||"",he.value=((o=l.value)==null?void 0:o.address)||""):(Ce.value=((p=l.value)==null?void 0:p.address)||"",he.value=((d=n.value)==null?void 0:d.address)||""),Me.value=!0},He=v({}),ze=v({}),Ma=a=>{ce.value==="fromCoin"?(He.value=a,Ye(a)):(ze.value=a,Ye(a))},Ra=a=>{a==="fromCoin"?(c.value=!0,S.value==="Aptos"?u.value=j.value>0?l.value.symbol=="APT"?new m(Number(j.value)).sub(new m(.1)).lt(new m(0))?"0":new m(Number(j.value)).sub(new m(.1)).toString():String(j.value):"":u.value=j.value>0?l.value.symbol=="SUI"?new m(Number(j.value)).sub(new m(.05)).lt(new m(0))?"0":new m(Number(j.value)).sub(new m(.05)).toString():String(j.value):""):(c.value=!1,S.value==="Aptos"?i.value=E.value>0?n.value.symbol=="APT"?new m(Number(E.value)).sub(new m(.1)).lt(new m(0))?"0":new m(Number(E.value)).sub(new m(.1)).toString():String(E.value):"":i.value=E.value>0?n.value.symbol=="SUI"?new m(Number(E.value)).sub(new m(.05)).lt(new m(0))?"0":new m(Number(E.value)).sub(new m(.05)).toString():String(E.value):"")},Ba=a=>{a==="fromCoin"?(c.value=!0,u.value=j.value>0?Xe(new m(Number(j.value)).div(2).toString(),l.value.decimals).toString():""):(c.value=!1,i.value=E.value>0?Xe(new m(Number(E.value)).div(2).toString(),n.value.decimals).toString():"")},Je=v(!1);Oo(()=>{aa(),window.addEventListener("updateSwapParams",a=>{Je.value=!Je.value})}),No(()=>{clearInterval(Be.value)}),A(()=>B);const Pe=()=>{var a,s,o,p,d;console.log("🚀 ~ file: swap-sui.vue:785 ~ clickRefresh ~:"),!Q.value&&(!g.value&&!De.value||(clearInterval(Be.value),H.value=0,Q.value=!0,J.value||ie(c.value?u.value:i.value),L.value.address&&P.value.getAccount(L.value.address),setTimeout(()=>{Q.value=!1,aa()},1e3),console.log("🚀 ~ file: swap-sui.vue:805 ~ clickRefresh ~ pools?.value?.RATES11111:",(a=t==null?void 0:t.value)==null?void 0:a.RATES),(!((s=t==null?void 0:t.value)!=null&&s.RATES)||Ie((o=t==null?void 0:t.value)==null?void 0:o.RATES))&&(console.log("🚀 ~ file: swap-sui.vue:805 ~ clickRefresh ~ pools?.value?.RATES2222:",(p=t==null?void 0:t.value)==null?void 0:p.RATES),(d=t==null?void 0:t.value)==null||d.setRates("Sui"))))};console.log("🚀 ~ file: swap-sui.vue:811 ~ clickRefresh ~ clickRefresh:",Pe);const aa=()=>{Be.value=setInterval(()=>{Q.value=!1,Re.value||H.value<C.value&&(H.value+=1,H.value===C.value&&(S.value=="Aptos"?(g.value&&g.value.poolAddress&&de.updateCurrentPools(g.value.poolAddress,S.value),Pe()):se.value||Pe(),H.value=0,Q.value=!0))},1e3)};Z(c,ha((a,s)=>{c.value=a},500));const V=v(!1);Z(u,(a,s)=>{a&&a!==0&&c.value&&(H.value=0,Fe(ie(a),800)),a==""&&c.value&&(i.value="")}),Z(i,(a,s)=>{a&&a!==0&&!c.value&&(H.value=0,Fe(ie(a),800)),a==""&&!c.value&&(u.value="")});const $e=v(1e-4),Ue=async a=>{let s=a;if(S.value==="Aptos"&&!s.current_sqrt_price&&u.value&&i.value){const o=await P.value.getPools([s.address]);o&&o[0]&&(s={...a,...o[0],fee:Number(o[0].fee_rate)/1e6})}if(s.current_sqrt_price&&u.value&&i.value){const p=(l.value.address===s.coinA.address&&n.value.address===s.coinB.address?0:1)==0,d=new m(u.value),w=new m(i.value),b=d.sub(d.mul(new m(s.fee))),k=w.div(b);return P.value.getPriceImpactPct(s,k.toString(),p)}return"--"},oa=v(0),la=v(0),na=v(),me=v({}),Pa=async a=>{if(g.value&&(J.value=!0,!(c.value&&Number(u.value)==0)&&!(!c.value&&Number(i.value)==0))){if(l.value&&n.value&&(u.value||i.value)){y.value=!0,D.value=!0,z.value=!1;const s=l.value.address===g.value.coinA.address&&n.value.address===g.value.coinB.address?0:1;try{let o=await P.value.preSwap({pool:g.value,a2b:s==0,byAmountIn:c.value,amount:c.value?u.value:i.value});z.value=o==null?void 0:o.isExceed,na.value=o==null?void 0:o.estimatedFeeAmount,c.value?(i.value=o.estimatedAmountOut,ee.value=(Number(o.estimatedAmountOut)/a).toString(),x.value=(a/Number(o.estimatedAmountOut)).toString()):(u.value=o.estimatedAmountIn,ee.value=(a/Number(o.estimatedAmountIn)).toString(),x.value=(Number(o.estimatedAmountIn)/a).toString()),oa.value=new m(i.value).div(u.value).toString(),la.value=new m(u.value).div(i.value).toString(),$e.value=S.value=="Aptos"?await Ue(g.value):await Ue(me.value||g.value),y.value=!1,D.value=!1}catch(o){console.log("pre swap error1",o),y.value=!1,D.value=!1}}else c.value?i.value="":u.value="",y.value=!1,D.value=!1;J.value=!1}},$a=Eo(),L=A(()=>$a),Ua=v({}),x=v(""),ee=v(""),j=A(()=>L.value.assets&&l.value&&L.value.assets[l.value.address]?Aa(L.value.assets[l.value.address].balance,l.value.decimals):0),E=A(()=>L.value.assets&&n.value&&L.value.assets[n.value.address]?Aa(L.value.assets[n.value.address].balance,n.value.decimals):0);Z(()=>t.value.tokensObj,async a=>{if(a&&!Ie(a)){const s=e?e.currentRoute.value.query.to:"",o=e?e.currentRoute.value.query.from:"";o?l.value=a[o]||await P.value.getTokenBySymbol(a,o):!o&&!l.value&&(l.value=a[ne[S.value].swapDefaultPair.fromCoin]),s?n.value=a[s]||await P.value.getTokenBySymbol(a,s):!s&&!n.value&&(n.value=a[ne[S.value].swapDefaultPair.toCoin],console.log("🚀🚀🚀 ~ file: swap.vue:1014 ~ setup ~ newValue:",a),console.log("🚀🚀🚀 ~ file: swap.vue:1014 ~ setup ~ onfig[chainName.value].swapDefaultPair.toCoin:",ne[S.value].swapDefaultPair.toCoin)),!o&&s&&(l.value="")}},{immediate:!0});const g=A(()=>{var a,s,o,p,d;if(l.value&&n.value){let w=null,b={};if(Object.values(t.value.poolConfigList).forEach(r=>{var h,M,N,O;(r.coinA.address.toUpperCase()===((h=l.value.address)==null?void 0:h.toUpperCase())&&r.coinB.address.toUpperCase()===((M=n.value.address)==null?void 0:M.toUpperCase())||r.coinB.address.toUpperCase()===((N=l.value.address)==null?void 0:N.toUpperCase())&&r.coinA.address.toUpperCase()===((O=n.value.address)==null?void 0:O.toUpperCase()))&&(b[r.address]={...r})}),S.value=="Aptos"&&t.value.poolsObj&&!Ie(t.value.poolsObj))for(const r in t.value.poolsObj){const h=t.value.poolsObj[r];(h.token_a.address.toUpperCase()===((a=l.value.address)==null?void 0:a.toUpperCase())&&h.token_b.address.toUpperCase()===((s=n.value.address)==null?void 0:s.toUpperCase())||h.token_b.address.toUpperCase()===((o=l.value.address)==null?void 0:o.toUpperCase())&&h.token_a.address.toUpperCase()===((p=n.value.address)==null?void 0:p.toUpperCase()))&&(b[h.address]={...h})}const k=Object.values(b).sort((r,h)=>r.fee-h.fee);for(let r=0;r<k.length;r++)if(!((d=k[r])!=null&&d.is_pause)){w=k[r];break}return w&&!Ie(w)?(console.log("🚀🚀🚀 ~ file: swap.vue:1094 ~ poolInfo ~ info:",w),w):null}return null}),sa=v(!0),ta=v(!1),La=async a=>{a&&S.value=="Aptos"&&(ie(c.value?u.value:i.value),ta.value=!0,a.coinA.symbol.toLowerCase()===l.value.symbol.toLowerCase()&&a.coinB.symbol.toLowerCase()===n.value.symbol.toLowerCase()?sa.value=!0:sa.value=!1,z.value=!1)};Z(()=>g.value,(a,s)=>{a&&(!s||a.address!==s.address||a.current_sqrt_price!==s.current_sqrt_price)&&La(a)},{immediate:!0,deep:!0});const ja=A(()=>t.value.tokensObj&&l.value&&l.value.address&&t.value.tokensObj[l.value.address]&&t.value.tokensObj[l.value.address].logoURI),Fa=A(()=>t.value.tokensObj&&n.value&&n.value.address&&t.value.tokensObj[n.value.address]&&t.value.tokensObj[n.value.address].logoURI),Ea=A(()=>S.value==="Aptos"?t.value.tokensObj&&l.value&&l.value.address&&t.value.tokensObj[l.value.address]&&t.value.tokensObj[l.value.address].coingecko_id||null:t.value.tokensObj&&l.value&&l.value.address||null),qa=A(()=>S.value==="Aptos"?t.value.tokensObj&&n.value&&n.value.address&&t.value.tokensObj[n.value.address]&&t.value.tokensObj[n.value.address].coingecko_id||null:t.value.tokensObj&&n.value&&n.value.address||null),Wa=A(()=>{var a,s,o,p,d,w,b,k,r,h,M,N,O;return console.log("🚀🚀🚀 ~ file: swap.vue:1222 ~ formCoinMarket ~ pools?.value?.tokensObj:",(a=t==null?void 0:t.value)==null?void 0:a.tokensObj),(p=(o=t==null?void 0:t.value)==null?void 0:o.tokensObj[(s=l==null?void 0:l.value)==null?void 0:s.address])!=null&&p.pyth_id&&((b=(w=t==null?void 0:t.value)==null?void 0:w.tokensObj[(d=l==null?void 0:l.value)==null?void 0:d.address])==null?void 0:b.pyth_id)!=="0x0000000000000000000000000000000000000000000000000000000000000000"?"pyth":(h=(r=t==null?void 0:t.value)==null?void 0:r.tokensObj[(k=l==null?void 0:l.value)==null?void 0:k.address])!=null&&h.coingecko_id?"coingecko":(O=(N=t==null?void 0:t.value)==null?void 0:N.tokensObj[(M=l==null?void 0:l.value)==null?void 0:M.address])!=null&&O.birdeyeid?"birdeye":null}),Da=A(()=>{var a,s,o,p,d,w,b,k,r,h,M,N;return(o=(s=t==null?void 0:t.value)==null?void 0:s.tokensObj[(a=n==null?void 0:n.value)==null?void 0:a.address])!=null&&o.pyth_id&&((w=(d=t==null?void 0:t.value)==null?void 0:d.tokensObj[(p=n==null?void 0:n.value)==null?void 0:p.address])==null?void 0:w.pyth_id)!=="0x0000000000000000000000000000000000000000000000000000000000000000"?"pyth":(r=(k=t==null?void 0:t.value)==null?void 0:k.tokensObj[(b=n==null?void 0:n.value)==null?void 0:b.address])!=null&&r.coingecko_id?"coingecko":(N=(M=t==null?void 0:t.value)==null?void 0:M.tokensObj[(h=n==null?void 0:n.value)==null?void 0:h.address])!=null&&N.birdeyeid?"birdeye":null}),Ha=A(()=>{var p,d;const a=new m(u.value),s=new m(S.value=="Aptos"?(p=g==null?void 0:g.value)==null?void 0:p.fee:(d=me==null?void 0:me.value)==null?void 0:d.fee),o=a.mul(s).toString();return Number(o)<1/Math.pow(10,l.value.decimals)?`<${new m(1).div(new m(Math.pow(10,l.value.decimals))).toString()}`:Xe(o,l.value.decimals)}),{setIsShowSuccess:za,setIsShowRejected:ua,setIsShowWaiting:Le,setTransactionDesc:Ja,setTransactionTxid:ia}=B,Ya=async()=>{var s,o,p,d,w,b,k,r,h,M;se.value=!1,y.value=!0,clearInterval(ke),window.clearInterval(ke),ia(""),Ja(F("tips.swapping",{from:`${_(u.value)} ${(s=l.value)==null?void 0:s.symbol}`,to:`${_(i.value)} ${(o=n.value)==null?void 0:o.symbol}`})),Le(!0);let a;S.value=="Aptos"&&(a=l.value.address===g.value.token_a.address&&n.value.address===g.value.token_b.address?0:1);try{let N;if(S.value=="Aptos")N=await P.value.getSwapTransactionPayload({pool:g.value,a2b:a==0,byAmountIn:c.value,amount:c.value?u.value:i.value,slippage:Number(Ae.value)/100});else{const q=c.value,oe=Number(Ae.value)/100;N=await((p=X==null?void 0:X.value)==null?void 0:p.getRouterSwapPayload(T.value,q,oe,l,n))}console.log("0221####swap###swapPayload###",N);let O;if(S.value==="Aptos")O=await L.value.currentWallet.signAndSubmitTransaction(N);else{const q=await P.value.signAndExecuteTransactionBlock(L.value.currentWallet,N,{action:"AggregatorSwap"});console.log("0221###sui swap res###",q),O=P.value.handleTx(q),console.log("0221###swap###sui##tx###",O)}if(O&&O.hash){ia(O.hash),Le(!1),za(!0);const q={title:F("tips.swap"),desc:F("tips.swapSuccessText",{from:`${_(u.value)} ${(d=l.value)==null?void 0:d.symbol}`,to:`${_(i.value)} ${(w=n.value)==null?void 0:w.symbol}`}),hash:O.hash,tit:"Swap",type:"liquidity",action:"swap",isHaveSui:l.value.address==ne[S.value].currentChainTokenAddress||n.value.address==ne[S.value].currentChainTokenAddress,icon:"icon-icon-swap1",tokenInfo:{tokena:`${(b=l.value)==null?void 0:b.address}`,numa:`- ${u.value}`,logoa:t.value.tokensObj&&l.value&&l.value.address&&t.value.tokensObj[l.value.address]&&t.value.tokensObj[l.value.address].logoURI,tokenb:`${(k=n.value)==null?void 0:k.address}`,numb:`+ ${i.value}`,logob:t.value.tokensObj&&n.value&&n.value.address&&t.value.tokensObj[n.value.address]&&t.value.tokensObj[n.value.address].logoURI},text:`Pay ${u.value} ${(r=l.value)==null?void 0:r.symbol} to receive ${i.value} ${(h=n.value)==null?void 0:h.symbol}`,excecuteTime:(M=O==null?void 0:O.res)==null?void 0:M.excecuteTime};S.value!=="Aptos"&&(q.res=O.res),P.value.showTransitionPending(q);const oe=await P.value.watchTransaction(q);console.log("0221###swap###transitionStatus####",oe),oe&&setTimeout(()=>{S.value=="Aptos"&&de.updateCurrentPools(g.value.poolAddress,S.value),P.value.getAccount(L.value.address)},1e3)}else Le(!1),ua(!0);u.value="",i.value="",y.value=!1}catch(N){u.value="",i.value="",console.log("Swap Error###",N),y.value=!1,Le(!1),ua(!0)}},Ka=a=>{var s;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((s=t.value.tokensObj[a==null?void 0:a.address])==null?void 0:s.logo_url)||(B.theme==="default"?Qe("/image/coins/unknown.png"):Qe("/image/coins/sui-unknown.png"))},ra=v([]);Z(()=>[l.value,n.value,t.value.poolConfigList],([a,s,o])=>{if(o&&o.length>0&&a&&s){const p=[];o.forEach(d=>{var w,b,k,r;(d.coinA.address.toUpperCase()===((w=a.address)==null?void 0:w.toUpperCase())&&d.coinB.address.toUpperCase()===((b=s.address)==null?void 0:b.toUpperCase())||d.coinB.address.toUpperCase()===((k=a.address)==null?void 0:k.toUpperCase())&&d.coinA.address.toUpperCase()===((r=s.address)==null?void 0:r.toUpperCase()))&&(d!=null&&d.is_pause||p.push(d.address))}),ra.value=p}},{immediate:!0});const Ye=a=>{console.log("🚀 ~ getTokenSource ~ token:",a);const s=B.importTokenListObj;console.log("🚀🚀🚀 ~ file: swap.vue:1499 ~ getTokenSource ~ !importTokenListObj?.hasOwnProperty(token?.address):",!(s!=null&&s.hasOwnProperty(a==null?void 0:a.address))),a!=null&&a.isSelfBuilt&&!(s!=null&&s.hasOwnProperty(a==null?void 0:a.address))?Ke.value=!0:(ce.value==="fromCoin"?(n.value&&a.address.toLowerCase()===(n==null?void 0:n.value.address.toLowerCase())&&(n.value=null),l.value=a,u.value=u.value>0?re(u.value,a==null?void 0:a.decimals):""):(l.value&&a.address.toLowerCase()===(l==null?void 0:l.value.address.toLowerCase())&&(l.value=null),n.value=a,i.value=i.value>0?re(i.value,a==null?void 0:a.decimals):""),va())},Ke=v(!1),va=()=>{ze.value={},He.value={},Ke.value=!1},Za=A(()=>B.isShowRouterModal),te=v([]),da=v(""),Ga=v(!1),ca=jo();A(()=>ca);const pe=v(!1),T=v({}),Qa=v(""),Xa=v(),J=v(!1),je=v(0),Ze=async a=>{var s,o;if(console.log("🚀🚀🚀 ~ file: swap.vue:1954 ~ getSuiAmount ~ getSuiAmount:"),J.value=!0,z.value=!1,l.value&&n.value&&(Number(u.value)>0&&c.value||Number(i.value)>0&&!c.value)){console.log("🚀🚀🚀 ~ file: swap.vue:1954 ~ getSuiAmount ~ getSuiAmount:1"),(!u.value&&i.value||u.value&&!i.value)&&(y.value=!0),x.value="",ee.value="",V.value=!0,pe.value=!1;let p;g.value&&(p=l.value.address===g.value.coinA.address&&n.value.address===g.value.coinB.address?0:1);try{let d;if(c.value){const h=new m(u.value).mul(Math.pow(10,l.value.decimals)).toString();d=new Ee(h)}else{const h=new m(i.value).mul(Math.pow(10,n.value.decimals)).toString();d=new Ee(h)}const w=Number(Ae.value)/100,b=g.value?{poolAddresses:ra.value,coinTypeA:g.value.coin_a_address,coinTypeB:g.value.coin_b_address,decimalsA:g.value.coinA.decimals,decimalsB:g.value.coinB.decimals,a2b:p==0,byAmountIn:c.value,amount:d.toString()}:"";console.log("🚀🚀🚀 ~ file: swap.vue:1827 ~ setup ~ fromCoin:",l),console.log("🚀🚀🚀 ~ file: swap.vue:1827 ~ setup ~ toCoin:",n),console.log("🚀🚀🚀 ~ file: swap.vue:1827 ~ setup ~ coinAmount:",d),console.log("🚀🚀🚀 ~ file: swap.vue:1827 ~ setup ~ fixedFromCoin.value:",c.value);const k=je.value+1;je.value=k;const r=await((s=X==null?void 0:X.value)==null?void 0:s.getFindRouter(l,n,d.toString(),c.value,w,g.value?b:"",k));if(console.log("🚀 ~ file: swap-sui.vue:1881 ~ getSuiAmount ~ swapRouter:",r),console.log("🚀 ~ file: swap-sui.vue:1881 ~ getSuiAmount ~ swapRouter JSON:",JSON.stringify(r,null,2)),console.log("🚀 ~ file: swap-sui.vue:1881 ~ getSuiAmount ~ suiAmountId.value:",je.value),console.log("🚀 ~ file: swap-sui.vue:1881 ~ getSuiAmount ~ swapRouter.id:",r==null?void 0:r.id),je.value!==(r==null?void 0:r.id)){V.value=!1,J.value=!1,y.value=!1,T.value={},te.value=[],c.value?i.value="":u.value="";return}if(r!=null&&r.insufficientLiquidity){z.value=!0,V.value=!1,J.value=!1,y.value=!1,T.value={},te.value=[],c.value?i.value="":u.value="";return}if(!r||!(r!=null&&r.routes)||((o=r==null?void 0:r.routes)==null?void 0:o.length)==0){y.value=!1,pe.value=!0,V.value=!1,J.value=!1,T.value={},te.value=[],u.value?i.value="":u.value="";return}if(r.fromCoinAddress!==l.value.address||r.toCoinAddress!==n.value.address){console.log("🚀🚀🚀 ~ file: swap.vue:1861 ~ getSuiAmount ~",r.fromCoinAddress!==l.value.address||r.toCoinAddress!==n.value.address),T.value={},te.value=[];return}r?(T.value=r,te.value=r.routes,z.value=!1,c.value?u.value&&(i.value=new m(r.amountOut).div(new m(Math.pow(10,n.value.decimals))).toString()):i.value&&(u.value=new m(r.amountIn).div(new m(Math.pow(10,l.value.decimals))).toString()),console.log(i.value,"###toCoinAmount.value"),x.value=_(re(new m(u.value).div(new m(i.value).toString()),l.value.decimals)),ee.value=_(re(new m(i.value).div(u.value).toString(),n.value.decimals)),y.value=!1,pe.value=!1,V.value=!1):(y.value=!1,pe.value=!0,V.value=!1)}catch(d){console.log("pre swap error2",d),y.value=!1,V.value=!1,J.value=!1}}else c.value?i.value="":u.value="",y.value=!1,V.value=!1;J.value=!1,console.log("🚀🚀🚀 ~ file: swap.vue:1926 ~ getSuiAmount ~ isRoutrProgress.value:",J.value)},ue=v(!1),ma=async a=>{var s;try{let o;if(c.value){const w=new m(u.value).mul(Math.pow(10,l.value.decimals)).toString();o=new Ee(w)}else{const w=new m(i.value).mul(Math.pow(10,n.value.decimals)).toString();o=new Ee(w)}const p=Number(Ae.value)/100,d=await((s=X==null?void 0:X.value)==null?void 0:s.getFindRouter(l,n,o.toString(),c.value,p,""));if(d){T.value=d,te.value=d.routes,z.value=!1,da.value=d.amountIn,x.value=_(re(new m(u.value).div(new m(i.value).toString()),l.value.decimals)),ee.value=_(re(new m(i.value).div(u.value).toString(),n.value.decimals));const w=new m(d.amountOut).div(new m(Math.pow(10,n.value.decimals))).toString(),b=new m(d.amountIn).div(new m(Math.pow(10,l.value.decimals))).toString();c.value?i.value!==w&&(ue.value=!0,i.value=w):u.value!==b&&(ue.value=!0,u.value=b)}}catch(o){console.log("pre swap error3",o)}},Va=async a=>{if(l.value&&n.value&&(u.value||i.value)){const s=l.value.address===g.value.coinA.address&&n.value.address===g.value.coinB.address?0:1;try{let o=await P.value.preSwap({pool:g.value,a2b:s==0,byAmountIn:c.value,amount:c.value?u.value:i.value});z.value=o==null?void 0:o.isExceed,na.value=o==null?void 0:o.estimatedFeeAmount,c.value?(ee.value=(Number(o.estimatedAmountOut)/o.estimatedAmountIn).toString(),x.value=(o.estimatedAmountIn/Number(o.estimatedAmountOut)).toString()):(ee.value=(Number(o.estimatedAmountOut)/Number(o.estimatedAmountIn)).toString(),x.value=(Number(o.estimatedAmountIn)/Number(o.estimatedAmountOut)).toString()),c.value?i.value!==o.estimatedAmountOut&&(ue.value=!0,i.value=o.estimatedAmountOut):u.value!==o.estimatedAmountIn&&(ue.value=!0,u.value=o.estimatedAmountIn),$e.value=S.value=="Aptos"?await Ue(g.value):await Ue(me.value||g.value),y.value=!1,D.value=!1}catch(o){console.log("pre swap error4",o),y.value=!1,D.value=!1}}else y.value=!1,D.value=!1};let ke=v(null);Z(()=>se.value,a=>{a?ke.value=setInterval(()=>{S.value=="Aptos"?Va(c.value):ma(c.value)},3e3):(clearInterval(ke.value),window.clearInterval(ke.value))},{immediate:!0});const ie=async a=>{S.value=="Aptos"?Pa(a):Ze()};Z(()=>Je.value,a=>{(Number(u.value)>0||Number(i.value)>0)&&ie(c.value?u.value:i.value)},{immediate:!0});const _a=A(()=>ca),pa=A(()=>_a.value.isInitRouter);Z(()=>pa.value,a=>{a||(H.value=0,ie(c.value?u.value:i.value))},{immediate:!0});function Fe(a,s=500){let o=null;return function(...p){clearTimeout(o),o=setTimeout(()=>{a.call(this,...p)},s)}}Z(()=>[l.value,n.value],([a,s])=>{if(console.log("🚀🚀🚀 ~ file: swap.vue:2181 ~ setup ~ fromCoin && toCoin:",a&&s),a&&s&&(H.value=0,Fe(ie(c.value?u.value:i.value))),a||s){console.log("🚀🚀🚀 ~ file: swap.vue:1965 ~ setup ~ fromCoin:",a);const o=`/swap?from=${a==null?void 0:a.address}&to=${s==null?void 0:s.address}`;e.push(o)}},{immediate:!0,deep:!0});const xa=Fe(fa);function fa(){const a=l.value;l.value=n.value,n.value=a,be.value=!0,ae.value=="open"?c.value=!0:c.value=!c.value,c.value?(u.value=i.value,i.value=""):(i.value=u.value,u.value=""),setTimeout(()=>{be.value=!1},300)}const eo=()=>{ue.value=!1},ao=()=>{se.value=!1,ue.value=!1},oo=[{label:"Swap",value:"swap",link:"/swap"},{label:"Limit",value:"limit",link:"/limit"},{label:"DCA",value:"dca",link:"/dca",isHaveBeta:!0}],lo=v("Swap"),ga=v(!1),Ge=A(()=>{var a,s,o,p,d,w,b,k,r,h,M,N,O,q;try{if((a=l==null?void 0:l.value)!=null&&a.address&&((s=n==null?void 0:n.value)!=null&&s.address)&&(T!=null&&T.value)&&!Ie(T==null?void 0:T.value)){const oe=ge((o=T==null?void 0:T.value)==null?void 0:o.amountIn).div(Math.pow(10,(p=l.value)==null?void 0:p.decimals)),po=ge((d=T==null?void 0:T.value)==null?void 0:d.amountOut).div(Math.pow(10,(w=n.value)==null?void 0:w.decimals)),le=ge(po).div(oe);console.log("🚀🚀🚀 ~ file: swap.vue:2259 ~ suiPriceImpact ~ currentSwapRate:",le==null?void 0:le.toString());const Y=(r=(b=t==null?void 0:t.value)==null?void 0:b.RATES)==null?void 0:r[(k=l==null?void 0:l.value)==null?void 0:k.address];console.log("🚀🚀🚀 ~ file: swap.vue:2259 ~ suiPriceImpact ~ fromCoinRate:",Y);const K=(N=(h=t==null?void 0:t.value)==null?void 0:h.RATES)==null?void 0:N[(M=n==null?void 0:n.value)==null?void 0:M.address];if(console.log("🚀🚀🚀 ~ file: swap.vue:2259 ~ suiPriceImpact ~ toCoinRate:",K),!(Y!=null&&Y.price)||!(K!=null&&K.price)||ge(Y==null?void 0:Y.price).lte(0)||ge(K==null?void 0:K.price).lte(0))throw Error("rate invalid");const fe=ge(Y==null?void 0:Y.price).div(K==null?void 0:K.price);if(console.log("🚀🚀🚀 ~ file: swap.vue:2259 ~ suiPriceImpact ~ marketRate:",fe==null?void 0:fe.toString()),le.gt(fe)){const $=le.minus(fe).div(le).mul(100);return console.log("🚀🚀🚀 ~ file: swap.vue:2259 ~ suiPriceImpact ~ result1:",$==null?void 0:$.toString()),ka((O=$==null?void 0:$.negated())==null?void 0:O.toString(),2)}else{const $=le.minus(fe).div(le).mul(100);return console.log("🚀🚀🚀 ~ file: swap.vue:2259 ~ suiPriceImpact ~ result2:",$==null?void 0:$.toString()),ka((q=$==null?void 0:$.abs())==null?void 0:q.toString(),2)}}return}catch(oe){return console.log("🚀🚀🚀 ~ file: swap.vue:2271 ~ suiPriceImpact ~ error:",oe),"Incalculable"}}),no=A(()=>(S==null?void 0:S.value)==="Aptos"?$e.value:Ge==null?void 0:Ge.value),ae=v(localStorage.getItem("plusChecked1"))||v("close"),so=A(()=>B.liquiditySourceList),to=a=>{console.log("🚀 ~ modalConfirm ~ result121:",a),a&&a.length>0?a.every(o=>o.name=="Cetus"?!0:o.status==="close")?ae.value="close":(ae.value="open",i.value=""):ae.value="close",ga.value=!1},uo=A(()=>B.includeRoutes),wa=a=>{ae.value=ae.value=="open"?"close":"open",localStorage.setItem("plusChecked1",ae.value);const s=uo.value,o=so.value;o.forEach(p=>{a?p.status="open":p.name!=="Cetus"?p.status="close":p.status="open"}),console.log("🚀 ~ //clickCheckedresult ~ arr:",o,s),B.setAggregatorSetting(o,s)},Sa=()=>{const a=window.innerWidth,s=window.innerHeight,o=document.getElementById("plusModeSwitch"),p=o==null?void 0:o.getBoundingClientRect(),d=p==null?void 0:p.left,w=p==null?void 0:p.top;console.log("🚀🚀🚀 ~ file: swap.vue:2299 ~ triggerConfettiAnimation ~ x:",d),console.log("🚀🚀🚀 ~ file: swap.vue:2299 ~ triggerConfettiAnimation ~ y:",w),console.log("🚀🚀🚀 ~ file: swap.vue:2299 ~ triggerConfettiAnimation ~ viewportWidth:",a),console.log("🚀🚀🚀 ~ file: swap.vue:2299 ~ triggerConfettiAnimation ~ viewportHeight:",s);const b=2,k=Te.shapeFromText({text:"🟢",scalar:b}),r=Te.shapeFromText({text:"🔵",scalar:b}),h=Te.shapeFromText({text:"💚",scalar:b}),M=Te.shapeFromText({text:"💙",scalar:b});Te({particleCount:40,spread:60,shapes:[k,r,h,M],scalar:b,origin:{x:d/a,y:w*1.2/s}})},io=a=>{console.log("🚀🚀🚀 ~ file: swap.vue:2264 ~ handleSwitchPlusMode ~ value:",a),u.value="",i.value="",a&&Sa(),wa(a),setTimeout(()=>{Ze()},500)},ba=v(!1),ro=a=>{ba.value=a},Ca=v(!1),vo=a=>{console.log("🚀 ~ file: swap-sui.vue:2341 ~ onInputToCoinLoading ~ status:",a),Ca.value=a},co=v(!0),mo=v(!1);return{isAddCardTopPadding:co,isAddCardBottomPadding:mo,modalConfirm:to,clickChecked:wa,currentTradeTab:lo,plusChecked:ae,closeSwapConfirmModal:ao,updateAccept:eo,clickExchange:fa,debounceClickExchange:xa,closeTokenWarning:va,isShowTokenWarning:Ke,getTokenSource:Ye,hasPool:ta,getPoolInfoSuccess:ea,halfBtnSelect:Ba,formCoinId:Ea,toCoinId:qa,formCoinMarket:Wa,toCoinMarket:Da,fromCoinUrl:ja,toCoinUrl:Fa,t:F,indicator:f,wallet:L,currentLpInfo:Ua,fixD:qo,decimalFormat:Wo,impact:$e,oneFromAmount:x,oneToAmount:ee,importIcon:Qe,clickRefresh:Pe,refresh:Q,change:be,isShowAddress:Oe,isShowSwapSetting:We,fromCoin:l,toCoin:n,slippage:Ae,openCoinSelect:Na,onCoinSelect:Ma,existingCoins:Ce,lastSelectCoin:he,currentCoinKey:ce,showCoinSelect:Me,fromCoinAmount:u,toCoinAmount:i,maxBtnSelect:Ra,fixedFromCoin:c,swapBtnText:Oa,toSwap:Ya,loading:Re,swaping:y,autoRefreshTime:C,countdown:H,marketTimer:Be,rateChange:Ne,isSwapConfirmMpdal:se,fromCoinBlance:j,toCoinBlance:E,poolInfo:g,chainName:S,swapRouterLoading:V,formatFee:Ha,calculating:D,currentRate:oa,currentRateReverse:la,getCoinIcon:Ka,toAddLiquidiPoolInfo:me,decimalUi:re,warningToCoin:ze,warningFromCoin:He,isShowRouterModal:Za,toSwapLoading:Ga,insufficientLiquidity:z,routerPool:te,routerTotalAmounts:da,store:B,suiPreSwapdata:T,suiSwapFee:Xa,suiSwapFeeUi:Qa,addCommom:_,debounce:ha,notFoundRouter:pe,getSuiAmountAccept:ma,isShowAccept:ue,getSuiAmount:Ze,tradeTabList:oo,isInitSwapRouter:pa,isShowAggregatorModal:ga,priceImpact:no,triggerConfettiAnimation:Sa,handleSwitchPlusMode:io,assetLoading:ba,onInputLoading:ro,onInputToCoinLoading:vo,assetToCoinLoading:Ca}}});const qe=e=>(Ro("data-v-99e66fae"),e=e(),Bo(),e),_o={class:"swap-container pageHaveRadiusSkeleton"},xo={class:"sui-title"},el={class:"right title-right"},al={key:0,class:Se("icon-bg plus-switch")},ol=qe(()=>I("p",null,[I("span",null,"Plus Mode")],-1)),ll={class:"setting-right"},nl=qe(()=>I("svg",{class:"icon","aria-hidden":"true"},[I("use",{"xlink:href":"#icon-icon_verticalslider"})],-1)),sl={class:"swap-card"},tl=Po('<div class="exchange-new" data-v-99e66fae><svg class="icon icon-down" aria-hidden="true" data-v-99e66fae><use xlink:href="#icon-icon_swap1" data-v-99e66fae></use></svg><svg class="icon icon-swap" aria-hidden="true" data-v-99e66fae><use xlink:href="#icon-tx_swap1" data-v-99e66fae></use></svg></div>',1),ul=[tl],il={key:0,class:"icon","aria-hidden":"true"},rl=qe(()=>I("use",{"xlink:href":"#icon-icon-swap"},null,-1)),vl=[rl],dl={key:2,class:"token-info-container"},cl={class:"token-info-title"},ml=qe(()=>I("span",{class:"coingecko"},"Price Reference",-1));function pl(e,f,F,xe,B,de){var i;const t=ye("UnderlineTab"),be=$o,Q=Ta,Oe=ye("IconTooltip"),We=fo,Ne=ye("NewAssetsCard"),se=Mo,ce=go,Ce=bo,he=Co,Me=ho,c=wo,Re=Ao,y=ye("RouterModal"),D=So,u=ye("AggregatorSettingModal");return R(),we("div",_o,[I("div",xo,[W(t,{"tab-list":e.tradeTabList,"current-tab":"swap",onClickTab:f[0]||(f[0]=C=>e.$router.push(C.link))},null,8,["tab-list"]),I("div",el,[W(Q,{"overlay-class-name":" new-tooltip-border-radius-color"},{title:ve(()=>[Ve(" The Plus Mode will aggregate external liquidity sources ")]),default:ve(()=>[e.chainName=="Sui"?(R(),we("div",al,[ol,W(be,{id:"plusModeSwitch",class:"liquidity-switch",checked:e.plusChecked=="open",onClick:f[1]||(f[1]=C=>{e.handleSwitchPlusMode(C)})},null,8,["checked"])])):U("",!0)]),_:1}),I("div",ll,[e.chainName=="Sui"?(R(),we("div",{key:0,class:"aggregator-setting",onClick:f[2]||(f[2]=C=>e.isShowAggregatorModal=!0)},[W(Oe,{type:"setting","xlink-href":"#icon-icon_set","have-bg":!0})])):U("",!0),W(Q,{"overlay-class-name":"new-style-tooltip new-tooltip-border-radius-color"},{title:ve(()=>[Ve(" Slippage Settings ")]),default:ve(()=>[I("div",{class:"slippage-icon",onClick:f[3]||(f[3]=C=>e.isShowSwapSetting=!0)},[I("div",{class:Se(e.chainName=="Sui"?"icon-bg":"")},[nl,I("span",null,_e(e.slippage)+"%",1)],2)])]),_:1}),I("div",{class:Se(e.chainName=="Sui"?"icon-bg":"")},[W(We,{loading:e.refresh,"auto-refresh-time":e.autoRefreshTime,countdown:e.countdown,onClickRefresh:e.clickRefresh},null,8,["loading","auto-refresh-time","countdown","onClickRefresh"])],2)])])]),I("div",sl,[I("div",{class:Se(["card-container",[e.plusChecked=="open"?"toInputBlockDisabled input-block-add-top":"",e.isAddCardTopPadding?"input-block-add-top":"",e.isAddCardBottomPadding&&e.plusChecked!=="open"?"input-block-add-bottom":""]])},[W(Ne,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":f[4]||(f[4]=C=>e.fromCoinAmount=C),"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logo_url:"",address:e.fromCoin?e.fromCoin.address:"","swap-direction":"From","swap-loading":!e.fixedFromCoin&&e.fromCoin&&(e.swapRouterLoading||e.assetToCoinLoading),title:"You pay",onOnInputLoading:e.onInputLoading,onOnMax:f[5]||(f[5]=C=>e.maxBtnSelect("fromCoin")),onOnHalf:f[6]||(f[6]=C=>e.halfBtnSelect("fromCoin")),onOnInput:f[7]||(f[7]=C=>{e.fromCoinAmount=C}),onOnFocus:f[8]||(f[8]=()=>{e.fixedFromCoin=!0,e.isAddCardTopPadding=!0,e.isAddCardBottomPadding=!1}),onOnSelect:f[9]||(f[9]=C=>e.openCoinSelect("fromCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address","swap-loading","onOnInputLoading"]),W(Ne,{modelValue:e.toCoinAmount,"onUpdate:modelValue":f[10]||(f[10]=C=>e.toCoinAmount=C),"input-value":e.toCoinAmount,havemax:!1,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direction":"To","coin-icon":e.toCoin?e.toCoin.logo_url:"",address:e.toCoin?e.toCoin.address:"",havehalf:!1,title:"You receive","input-disabled":e.chainName!=="Aptos"&&e.plusChecked=="open","swap-loading":e.fixedFromCoin&&e.toCoin&&(e.swapRouterLoading||e.assetLoading),onOnInputLoading:e.onInputToCoinLoading,onOnInput:f[11]||(f[11]=C=>{e.toCoinAmount=C}),onOnFocus:f[12]||(f[12]=()=>{e.fixedFromCoin=!1,e.isAddCardTopPadding=!1,e.isAddCardBottomPadding=!0}),onOnSelect:f[13]||(f[13]=C=>e.openCoinSelect("toCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address","input-disabled","swap-loading","onOnInputLoading"]),I("div",{class:"new-sui-exchange",onClick:f[14]||(f[14]=(...C)=>e.debounceClickExchange&&e.debounceClickExchange(...C))},ul)],2)]),I("div",{class:Se(["btn-info",!e.notFoundRouter&&e.fromCoin&&e.toCoin&&!e.insufficientLiquidity?"":"no-border"])},[W(se,{disabled:e.wallet.connected?e.swaping||!e.fromCoin||!e.toCoin||!Number(e.fromCoinAmount)||!Number(e.toCoinAmount)||Number(e.fromCoinAmount)>Number(e.fromCoinBlance)||e.swapBtnText==e.$t("button.poolNotFound")||e.swapBtnText!==e.$t("button.swap")||((i=e.poolInfo)==null?void 0:i.is_pause)||e.swapRouterLoading:!1,class:"big-btn swap-btn",loading:e.swaping,onClick:f[15]||(f[15]=C=>e.wallet.connected?e.isSwapConfirmMpdal=!0:e.wallet.setIsShowWalletModal(!0))},{default:ve(()=>[e.wallet.connected?(R(),we("svg",il,vl)):U("",!0),I("span",null,_e(e.wallet.connected?e.swapBtnText:e.$t("button.connectWallet")),1)]),_:1},8,["disabled","loading"]),e.chainName=="Sui"&&!e.notFoundRouter&&e.fromCoin&&e.toCoin&&!e.insufficientLiquidity?(R(),G(ce,{key:0,"swap-loading":e.swaping,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"from-coin":e.fromCoin,"form-coin-market":e.formCoinMarket,"to-coin-market":e.toCoinMarket,"to-coin":e.toCoin,"fixed-from-coin":e.fixedFromCoin,"router-pool":e.routerPool,impact:e.priceImpact,"insufficient-liquidity":e.insufficientLiquidity,"one-to-amount":e.oneToAmount,"one-from-amount":e.oneFromAmount,"sui-pre-swapdata":e.suiPreSwapdata,"sui-swap-fee":e.suiSwapFeeUi,"swap-router-loading":e.swapRouterLoading},null,8,["swap-loading","from-coin-amount","to-coin-amount","from-coin","form-coin-market","to-coin-market","to-coin","fixed-from-coin","router-pool","impact","insufficient-liquidity","one-to-amount","one-from-amount","sui-pre-swapdata","sui-swap-fee","swap-router-loading"])):U("",!0)],2),W(Ce),e.showCoinSelect?(R(),G(he,{key:0,"existing-coins":e.existingCoins,"last-select-coin":e.lastSelectCoin,"have-import-btn":!0,onOnSelect:e.onCoinSelect,onOnClose:f[16]||(f[16]=C=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","onOnSelect"])):U("",!0),e.isShowSwapSetting?(R(),G(Me,{key:1,onOnClose:f[17]||(f[17]=C=>e.isShowSwapSetting=!1)})):U("",!0),e.chainName&&(e.formCoinMarket||e.toCoinMarket)?(R(),we("div",dl,[I("div",cl,[ml,W(Oe,{type:"priceReference","xlink-href":"#icon-icon_tips"})]),e.fromCoin&&e.formCoinMarket?(R(),G(c,{key:0,id:e.formCoinId,coin:e.fromCoin,market:e.formCoinMarket,refresh:e.refresh},null,8,["id","coin","market","refresh"])):U("",!0),e.toCoin&&e.toCoinMarket?(R(),G(c,{key:1,id:e.toCoinId,coin:e.toCoin,market:e.toCoinMarket,refresh:e.refresh},null,8,["id","coin","market","refresh"])):U("",!0)])):U("",!0),e.chainName=="Sui"&&e.isShowTokenWarning?(R(),G(Re,{key:3,"from-coin":e.warningFromCoin,"to-coin":e.warningToCoin,"is-import-modal":!0,onClose:e.closeTokenWarning,onClickContinue:e.getTokenSource},null,8,["from-coin","to-coin","onClose","onClickContinue"])):U("",!0),e.isShowRouterModal?(R(),G(y,{key:4,"sui-pre-swapdata":e.suiPreSwapdata,"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,onOnClose:f[18]||(f[18]=C=>e.store.setIsShowRouterModal(!1))},null,8,["sui-pre-swapdata","from-coin","to-coin","from-coin-amount","to-coin-amount"])):U("",!0),e.isSwapConfirmMpdal?(R(),G(D,{key:5,"sui-pre-swapdata":e.suiPreSwapdata,"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,slippage:e.slippage,impact:e.priceImpact,"fixed-from-coin":e.fixedFromCoin,fee:e.chainName=="Sui"?e.suiSwapFeeUi:e.poolInfo.fee,"format-fee":e.chainName=="Sui"?e.suiSwapFeeUi:e.formatFee,"is-show-accept":e.isShowAccept,"swap-loading":e.swapRouterLoading,"one-from-amount":e.oneFromAmount,"one-to-amount":e.oneToAmount,onOnClose:e.closeSwapConfirmModal,onToSwap:e.toSwap,onAccept:e.updateAccept},null,8,["sui-pre-swapdata","from-coin","to-coin","from-coin-amount","to-coin-amount","slippage","impact","fixed-from-coin","fee","format-fee","is-show-accept","swap-loading","one-from-amount","one-to-amount","onOnClose","onToSwap","onAccept"])):U("",!0),e.isShowAggregatorModal?(R(),G(u,{key:6,onClose:f[19]||(f[19]=C=>e.isShowAggregatorModal=!1),onModalConfirm:f[20]||(f[20]=C=>{e.modalConfirm(C)})})):U("",!0)])}const Yl=Ia(Vo,[["render",pl],["__scopeId","data-v-99e66fae"]]);export{Yl as default};
