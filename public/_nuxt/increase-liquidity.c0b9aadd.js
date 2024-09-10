import{_ as zo}from"./back.15194f11.js";import{_ as Ho}from"./coin-pair-name.0f23896b.js";import{_ as Go}from"./status-block.3eeb1c7d.js";import{a as _o,e as jo,o as k,f as y,h as n,x as i,y as Ze,z as Ko,m as D,r as p,b as Jo,q as Qo,t as Vo,A as Ae,C as Yo,i as X,u as N,G,I as ve,j as pe,F as Zo,E as xo,w as en,c as xe,M as on,B as nn,O as sn,p as tn,k as an}from"./entry.5e8d3f25.js";import{_ as ln}from"./assets-card.5731b26e.js";import{_ as un}from"./token-warning.a42b07fd.js";import{_ as rn}from"./network-tips.fb025fc6.js";import{_ as dn}from"./coin-select.8728c80f.js";import{_ as mn}from"./swap-setting.19a04fa8.js";import{_ as vn}from"./new-add-or-create.4f2ccfe0.js";import{i as V,p as eo,a as pn,e as Do,g as fn,d as ie,b as Fo,c as $e,j as cn,k as bn}from"./common.fc02fb4f.js";import{_ as Pe}from"./precision.c92e897d.js";/* empty css              */import{u as kn,a as In,b as yn}from"./index.cdb0d33c.js";import{i as oo}from"./import-icon.de3e6c66.js";import{u as hn,b as Re}from"./index.09a244f6.js";import"./decimal.a2826370.js";import{D as v}from"./decimal.765d8738.js";import{_ as Eo}from"./img-lock_2x.a28135f4.js";import{_ as Wo}from"./img-lock_2x.d7727f20.js";/* empty css              */import"./index.5d7d5c35.js";/* empty css              */import"./useDebounceFunction.0ecd5be5.js";import"./icon-tooltip.6167aa8a.js";import"./token-warning_2x.296c84d5.js";import"./img-no-Positions_2x.b84b1fce.js";import"./img-no-Positions_2x.f6550a11.js";import"./icon-error_2x.74346318.js";import"./deposit-ratio.caa7c496.js";/* empty css              */import"./notifi.ec7a23df.js";import"./useWhale.345946f7.js";const wn=_o({props:{direct:{type:Boolean,default:!0},formCoinSymbol:{type:String,default:""},toCoinSymbol:{type:String,default:""}}});const gn={class:"coin-tab"};function Cn(e,s,fe,C,ce,K){return k(),y("div",gn,[n("div",{class:Ze(e.direct?"active":""),onClick:s[0]||(s[0]=se=>e.$emit("changeDirect",!0))},i(e.formCoinSymbol),3),n("div",{class:Ze(e.direct?"":"active"),onClick:s[1]||(s[1]=se=>e.$emit("changeDirect",!1))},i(e.toCoinSymbol),3)])}const Sn=jo(wn,[["render",Cn],["__scopeId","data-v-db5d9c5d"]]),Nn=_o({setup(){const{t:e,locale:s}=Ko(),fe=kn(),C=D(()=>fe),ce=p(20),K=p(0),se=p(null);let be=p(!1);const Be=p(!1),te=p(!1),ae=p("fromCoin"),le=p(""),ke=p(""),Ie=p(!1),ye=p(!1),O=p(!0),l=p(""),u=p(""),J=p(!1),Oe=p(!1),ue=D(()=>fe.slippage),qe=D(()=>{const o=Number(l.value)>Number($.value),d=Number(u.value)>Number(R.value);return he.value?e("button.enterAmount"):o?e("button.insufficientBalance",{name:t.value.symbol}):d?e("button.insufficientBalance",{name:a.value.symbol}):e("newAdd.addMore")}),Le=D(()=>c.value&&!b.value&&u.value||b.value&&!c.value&&l.value?!1:!(!b.value&&!c.value&&u.value&&l.value)),Ue=D(()=>{const o=Number(l.value)>Number($.value),d=Number(u.value)>Number(R.value);return c.value&&!b.value&&!d||b.value&&!c.value&&!o?!1:!(!c.value&&!b.value&&!o&&!d.value)}),he=D(()=>c.value&&!b.value&&!u.value||b.value&&!c.value&&!l.value?!0:!c.value&&!b.value&&(!l.value||!u.value)),Y=p(""),Z=p(""),x=p(""),Me=In(),f=D(()=>Me),t=p({}),a=p({}),r=p(f.value.currentPositionInfo||{}),De=hn(),T=D(()=>De),z=Jo();Qo(()=>{Ce()}),Vo(()=>{T.value.connected||(C.value.chainName==="Aptos"?z.push("/position"):z.push("/pool/position"))});const Fe=D(()=>C.value.chainName),A=D(()=>C.value.chainName?yn(C.value.chainName):{}),re=async()=>{f.value.setCurrentPositionLoading(!0);const o=z.currentRoute.value.query.token||"",d=z.currentRoute.value.query.collect||"",w=z.currentRoute.value.query.pos||"";C.value.chainName==="Aptos"?o&&d&&(Y.value=d,Z.value=z.currentRoute.value.query.address,x.value=o,f.value.setCurrentPositionInfo(Z.value,Y.value,x.value,C.value.chainName),r.value=f.value.currentPositionInfo):w&&(Y.value=d,Z.value=z.currentRoute.value.query.address,x.value=o,f.value.setCurrentPositionInfo(Z.value,Y.value,x.value,C.value.chainName,w),r.value=f.value.currentPositionInfo)};Ae(()=>f.value.addressLpTokens,o=>{$e(o)||re()},{immediate:!0}),Ae(()=>f.value.currentPositionInfo,o=>{if(o){r.value=o,t.value=r.value.token_a,a.value=r.value.token_b;let d=Number(r.value.tick_lower_index),w=Number(r.value.tick_upper_index);const I=Number(r.value.current_tick_index);(r.value.maxPrice.indexOf("+")>0||r.value.maxPrice==="∞"?"∞":r.value.maxPrice)=="∞"||I>d&&I<w?(c.value=!1,b.value=!1):I>=w?(l.value="",c.value=!0,b.value=!1):I<=d?(c.value=!1,b.value=!0,u.value=""):(c.value=!0,l.value="",b.value=!0,u.value=""),de()}});const c=p(!1),b=p(!1),Q=p({}),we=p(),ge=p(),de=()=>{var H;if(!r.value||!l.value&&!u.value)return;const{TickMath:o,TickUtil:d}=A.value;let w=r.value.minPrice,I=r.value.maxPrice.indexOf("+")>0?"∞":r.value.maxPrice,h=Number(r.value.tick_lower_index),B=Number(r.value.tick_upper_index);const _=Number(r.value.current_tick_index);let q,j,W=Number(w).toString(),L=r.value.maxPrice.indexOf("+")>0||r.value.maxPrice==="∞"?"∞":Number(I);if(W=="0"&&L=="∞"?(h=Number(r.value.tick_lower_index),B=Number(r.value.tick_upper_index)):(q=o.priceToSqrtPriceX64(new v(w),t.value.decimals,a.value.decimals),j=o.priceToSqrtPriceX64(new v(I),t.value.decimals,a.value.decimals)),we.value=h,ge.value=B,I!=="∞"&&h>=B){c.value=!0,l.value="",b.value=!0,u.value="";return}if(I=="∞"||_>h&&_<B){c.value=!1,b.value=!1;let S;if(l.value||u.value){if(O.value){const ne=new v(l.value).mul(Math.pow(10,t.value.decimals)).toString();S=new Re(ne)}else{const ne=new v(u.value).mul(Math.pow(10,a.value.decimals)).toString();S=new Re(ne)}const{liquidityAmount:U,tokenMaxA:E,tokenMaxB:g,tokenMaxAOrigin:P,tokenMaxBOrigin:M}=A.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:t.value,tokenB:a.value,lowerTick:h,upperTick:B,coinAmount:S,iscoinA:ee.value?O.value:!O.value,roundUp:!0,slippage:Number(ue.value)/100,curSqrtPrice:new Re(r.value.current_sqrt_price)});Q.value={liquidityAmount:U,tokenMaxA:E,tokenMaxB:g,tokenMaxAOrigin:P,tokenMaxBOrigin:M},ee.value?O.value?u.value=Number(g)>0?g:"":l.value=Number(E)>0?E:"":O.value?u.value=E:l.value=g}}else if(_>=B){if(l.value="",c.value=!0,b.value=!1,l.value||u.value){let S;const U=new v(u.value).mul(Math.pow(10,(H=a.value)==null?void 0:H.decimals)).toString();S=new Re(U),Q.value={liquidityAmount:cn(q,j,S),tokenMaxA:0,tokenMaxB:u.value}}}else if(_<=h){if(c.value=!1,b.value=!0,u.value="",l.value||u.value){let S;const U=new v(l.value).mul(Math.pow(10,t.value.decimals)).toString();S=new Re(U),Q.value={liquidityAmount:bn(q,j,S),tokenMaxA:l.value,tokenMaxB:0}}}else c.value=!0,l.value="",b.value=!0,u.value=""};Ae(l,(o,d)=>{o&&de(),o==""&&(u.value="")}),Ae(u,(o,d)=>{o&&de(),o==""&&(l.value="")});const $=D(()=>T.value.assets&&t.value&&T.value.assets[t.value.address]?eo(T.value.assets[t.value.address].balance,t.value.decimals):0),R=D(()=>T.value.assets&&a.value&&T.value.assets[a.value.address]?eo(T.value.assets[a.value.address].balance,a.value.decimals):0),ee=p(!0);function _e(o){ee.value=o}const je=()=>{re(),K.value=0,be.value=!0,setTimeout(()=>{be.value=!1},1e3)},Ee=()=>{const o=t.value;t.value=a.value,a.value=o,ye.value=!ye.value},We=o=>{var d,w,I,h;ae.value=o,o==="fromCoin"?(le.value=((d=a.value)==null?void 0:d.symbol)||"",ke.value=((w=t.value)==null?void 0:w.symbol)||""):(le.value=((I=t.value)==null?void 0:I.symbol)||"",ke.value=((h=a.value)==null?void 0:h.symbol)||""),Ie.value=!0},Xe=o=>{ae.value==="fromCoin"?(a.value&&o.symbol.toLowerCase()===(a==null?void 0:a.value.symbol.toLowerCase())&&(a.value=null),t.value=o):(t.value&&o.symbol.toLowerCase()===(t==null?void 0:t.value.symbol.toLowerCase())&&(t.value=null),a.value=o),Ie.value=!1},ze=o=>{o==="fromCoin"?(O.value=!0,C.value.chainName==="Aptos"?l.value=$.value>0?t.value.symbol=="APT"?new v(Number($.value)).sub(new v(.1)).lt(new v(0))?"0":new v(Number($.value)).sub(new v(.1)).toString():String($.value):"":l.value=$.value>0?t.value.symbol=="SUI"?new v(Number($.value)).sub(new v(.05)).lt(new v(0))?"0":new v(Number($.value)).sub(new v(.05)).toString():String($.value):""):(O.value=!1,C.value.chainName==="Aptos"?u.value=R.value>0?a.value.symbol=="APT"?new v(Number(R.value)).sub(new v(.1)).lt(new v(0))?"0":new v(Number(R.value)).sub(new v(.1)).toString():String(R.value):"":u.value=R.value>0?a.value.symbol=="SUI"?new v(Number(R.value)).sub(new v(.05)).lt(new v(0))?"0":new v(Number(R.value)).sub(new v(.05)).toString():String(R.value):"")},He=o=>{o==="fromCoin"?(O.value=!0,l.value=Fo(new v(Number($.value)).div(2).toString(),t.value.decimals).toString()):(O.value=!1,u.value=Fo(new v(Number(R.value)).div(2).toString(),a.value.decimals).toString())},Ce=()=>{se.value=setInterval(()=>{Be.value||K.value<ce.value&&(K.value+=1,K.value===ce.value&&(K.value=0))},1e3)},{setIsShowSuccess:Ge,setIsShowRejected:Se,setIsShowWaiting:oe,setTransactionDesc:Ke,setTransactionTxid:Ne,setPositiomNum:Je}=fe,Qe=async()=>{var B,_,q,j,W,L,H,S,U,E;J.value=!1,te.value=!0,Ne("");const o=c.value?"":`${l.value} ${(B=t.value)==null?void 0:B.symbol}`,d=b.value?"":`${u.value} ${(_=a.value)==null?void 0:_.symbol}`;Ke(e("tips.increaseLiquiditySuccess",{from:F.value?d:o,and:!c.value&&!b.value?"and":"",to:F.value?o:d})),oe(!0);const w=O.value,I=me.value;let h={};h.coinTypeC=I[0]?I[0].coin_address:"",h.coinTypeD=I[1]?I[1].coin_address:"",h.coinTypeE=I[2]?I[2].coin_address:"";try{const g=await A.value.getAddLiquidityTransactionPayload({pool:{poolAddress:r.value.poolAddress,token_a:r.value.token_a,token_b:r.value.token_b},amount:w?Q.value.tokenMaxA:Q.value.tokenMaxB,fix_amount_a:w,tick_lower:we.value,tick_upper:ge.value,index:C.value.chainName==="Aptos"?r.value.index:r.value.pos_object_id,slippage:Number(ue.value)/100,roundUp:!0,...h,collect_fee:!0});let P;if(C.value.chainName==="Aptos")P=await T.value.currentWallet.signAndSubmitTransaction(g);else{const M=await A.value.signAndExecuteTransactionBlock(T.value.currentWallet,g==null?void 0:g.txb);P=A.value.handleTx(M)}if(console.log("toAdd###tx###",P),P&&P.hash){Ne(P.hash),oe(!1),Ge(!0);const M={title:"Supplied",desc:e("tips.addLiquiditySuccessText",{from:c.value?"":`${l.value} ${(q=t.value)==null?void 0:q.symbol}`,and:!c.value&&!b.value?"and":"",to:b.value?"":`${u.value} ${(j=a.value)==null?void 0:j.symbol}`}),hash:P.hash,tit:"Liquidity Increased",icon:"icon-icon-Increased",tokenInfo:{tokena:F.value?`${(L=a.value)==null?void 0:L.address}`:`${(W=t.value)==null?void 0:W.address}`,numa:F.value?`- ${u.value}`:`- ${l.value}`,logoa:F.value?f.value.tokensObj&&a.value&&a.value.address&&f.value.tokensObj[a.value.address]&&f.value.tokensObj[a.value.address].logoURI:f.value.tokensObj&&t.value&&t.value.address&&f.value.tokensObj[t.value.address]&&f.value.tokensObj[t.value.address].logoURI,tokenb:F.value?`${(S=t.value)==null?void 0:S.address}`:`${(H=a.value)==null?void 0:H.address}`,numb:F.value?`- ${l.value}`:`- ${u.value}`,logob:F.value?f.value.tokensObj&&t.value&&t.value.address&&f.value.tokensObj[t.value.address]&&f.value.tokensObj[t.value.address].logoURI:f.value.tokensObj&&a.value&&a.value.address&&f.value.tokensObj[a.value.address]&&f.value.tokensObj[a.value.address].logoURI},text:`Deopsit ${c.value?"":`${l.value} ${(U=t.value)==null?void 0:U.symbol}`} ${!c.value&&!b.value?"and":""} ${b.value?"":`${u.value} ${(E=a.value)==null?void 0:E.symbol}`}`};C.value.chainName!=="Aptos"&&(M.res=P.res),A.value.showTransitionPending(M),await A.value.watchTransaction(M)&&setTimeout(()=>{re(),A.value.getAccount(T.value.address)},1e3),Je()}else oe(!1),Se(!0);l.value="",u.value="",te.value=!1}catch(g){l.value="",u.value="",console.log("addError###",g),te.value=!1,oe(!1),Se(!0)}},F=D(()=>{var o,d;return(d=(o=r.value)==null?void 0:o.poolInfo)==null?void 0:d.needReverse}),me=p([]),Ve=p(0),Ye=o=>{var d;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((d=f.value.tokensObj[o==null?void 0:o.address])==null?void 0:d.logo_url)||(C.value.theme==="default"?oo("/image/coins/unknown.png"):oo("/image/coins/sui-unknown.png"))};return Ae(()=>[r.value,f.value.addressLpTokens,f.value.tokensObj,f.value.RATES],async([o,d,w,I])=>{if(!$e(o)&&!$e(d)&&!$e(w)&&!$e(I)){const h=d[o.poolAddress],B=await A.value.getTickDataByIndex(h.ticks_handle,Number(o.tick_lower_index)),_=await A.value.getTickDataByIndex(h.ticks_handle,Number(o.tick_upper_index));let q={};C.value.chainName==="Aptos"?q=await A.value.getPosRewardersAmount({poolAddress:o.poolAddress,positionName:o.tokenName,tickLowerData:B,tickUpperData:_}):q=await A.value.fetchPosRewardersAmount({poolAddress:o.poolAddress,positionId:o.pos_object_id,coinTypeA:o.coin_type_a,coinTypeB:o.coin_type_b,rewarderInfo:h.rewarderInfo});const j=[];let W=new v(0);q.forEach((L,H)=>{const S=w[L.coin_address].decimals,U=w[L.coin_address],E=L.amount_owed.toString(),g=new v(E).div(Math.pow(10,S)).toString();if(r.value.poolInfo[`rewarder_display${H+1}`]||Number(g)>0){const P=I[L.coin_address].price,M=new v(g).mul(P);W=new v(W).plus(M),j.push({...L,...U,amount:g,amountUSD:M.toString()})}}),me.value=j,Ve.value=Number(Do(W.toString(),2))}},{immediate:!0}),{halfBtnSelect:He,showNum:V,precision:Pe,noEnterAmount:he,insufficientBalance:Ue,isDisabled:Le,prettyAmount:eo,addCommom:pn,wallet:T,addLoading:te,toAdd:Qe,fromCoinBlance:$,toCoinBlance:R,storeIndex:C,showToCoinLock:b,showFromCoinLock:c,pools:f,t:e,importIcon:oo,changeDirect:_e,fixD:Do,decimalFormat:fn,decimalUi:ie,direct:ee,positionInfo:r,clickRefresh:je,refresh:be,autoRefreshTime:ce,countdown:K,setMarketTimer:Ce,marketTimer:se,loading:Be,slippage:ue,fromCoin:t,toCoin:a,openCoinSelect:We,onCoinSelect:Xe,existingCoins:le,lastSelectCoin:ke,currentCoinKey:ae,showCoinSelect:Ie,fromCoinAmount:l,toCoinAmount:u,maxBtnSelect:ze,fixedFromCoin:O,change:ye,toggle:Ee,addLiquidityBtnText:qe,isShowLiquidityModal:J,isShowSwapSetting:Oe,needReverse:F,pendingRewarderArr:me,getCoinIcon:Ye,chainName:Fe}}});const Te=e=>(tn("data-v-cc893b41"),e=e(),an(),e),An={class:"increase-liquidity-container"},$n={class:"back-title"},Rn={class:"title"},Pn={class:"right title-right"},Tn=Te(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Bn=Te(()=>n("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),On=[Bn],qn={class:"price-range"},Ln={class:"price-range-header"},Un={class:"left"},Mn={class:"right"},Dn={class:"fee"},Fn={class:"price-range-footer"},_n={class:"select-range"},jn={class:"range-bottom"},En={key:0,class:"price"},Wn={key:1,class:"price"},Xn={class:"price-range-block"},zn={class:"price-item"},Hn={class:"title"},Gn={key:0,class:"price"},Kn={key:1,class:"price"},Jn={key:2,class:"text"},Qn={key:3,class:"text"},Vn={class:"price-item"},Yn={class:"title"},Zn={key:0,class:"price"},xn={key:1,class:"price"},ei={key:2,class:"text"},oi={key:3,class:"text"},ni={class:"text-block"},ii={class:"note"},si={class:"note"},ti={class:"card-item"},ai={key:0,class:"unilateral"},li={key:0,src:Eo,alt:""},ui={key:1,src:Wo,alt:""},ri={class:"card-item"},di={key:0,class:"unilateral"},mi={key:0,src:Eo,alt:""},vi={key:1,src:Wo,alt:""},pi={class:"remove-liquidity-bottom-box"},fi={class:"induction remove-liquidity-bottom"},ci={class:"item"},bi={class:"induction-text"},ki={class:"induction-value"},Ii={class:"text-default"},yi={class:"text-default"},hi={class:"item"},wi=Te(()=>n("div",{class:"induction-text"},null,-1)),gi={class:"induction-value"},Ci={class:"text-default"},Si={key:0,class:"item"},Ni={class:"induction-text"},Ai={class:"induction-value"},$i={class:"text-default"},Ri={key:1,class:"item"},Pi=Te(()=>n("div",{class:"induction-text"},null,-1)),Ti={class:"induction-value"},Bi={class:"text-default"},Oi={key:0,class:"induction-text"},qi={key:1,class:"induction-value"},Li={class:"text-default"},Ui=Te(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-add"})],-1)),Mi={class:"loading-global"};function Di(e,s,fe,C,ce,K){var Oe,ue,qe,Le,Ue,he,Y,Z,x,Me,f,t,a,r,De,T,z,Fe,A,re,c,b,Q,we,ge,de,$,R,ee,_e,je,Ee,We,Xe,ze,He,Ce,Ge,Se,oe,Ke,Ne,Je,Qe,F,me,Ve,Ye,o,d,w,I,h,B,_,q,j,W,L,H,S,U,E,g,P,M,ne,no,io,so,to,ao,lo,uo,ro,mo,vo,po,fo,co,bo,ko,Io,yo,ho,wo,go,Co,So,No,Ao,$o,Ro,Po,To,Bo,Oo,qo,Lo,Uo,Mo;const se=zo,be=Ho,Be=Go,te=Sn,ae=ln,le=un,ke=nn,Ie=rn,ye=dn,O=mn,l=vn,u=sn,J=Yo("image");return k(),y("div",An,[n("div",$n,[X(se),n("div",Rn,[n("p",null,i(e.$t("common.increaseLiquidity")),1),n("div",Pn,[n("div",{class:"slippage-icon",onClick:s[0]||(s[0]=m=>e.isShowSwapSetting=!0)},[Tn,n("span",null,i(e.slippage)+"%",1)]),(k(),y("svg",{"aria-hidden":"true",class:Ze(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:s[1]||(s[1]=(...m)=>e.clickRefresh&&e.clickRefresh(...m))},On,2))])])]),n("div",qn,[n("div",Ln,[n("div",Un,[X(be,{"from-coin":e.needReverse?e.positionInfo.token_b:e.positionInfo.token_a,"to-coin":e.needReverse?e.positionInfo.token_a:e.positionInfo.token_b},null,8,["from-coin","to-coin"]),n("div",Mn,[n("div",Dn,i(e.positionInfo.fee*100)+"%",1)])]),X(Be,{"current-status":e.positionInfo.currentStatus||""},null,8,["current-status"])]),n("div",Fn,[n("div",_n,[n("p",null,i(e.$t("common.selectedRange")),1),n("div",jn,[(e.needReverse?!e.direct:e.direct)?(k(),y("div",En," 1 "+i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" ≈ "+i(("decimalUi"in e?e.decimalUi:N(ie))((Oe=e.positionInfo)==null?void 0:Oe.currentPrice,e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals))+" "+i(e.positionInfo&&e.positionInfo.token_b&&((ue=e.positionInfo)==null?void 0:ue.token_b.symbol)),1)):(k(),y("div",Wn," 1 "+i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" ≈ "+i(("decimalUi"in e?e.decimalUi:N(ie))(1/((qe=e.positionInfo)==null?void 0:qe.currentPrice),e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals))+" "+i(e.positionInfo&&e.positionInfo.token_a&&((Le=e.positionInfo)==null?void 0:Le.token_a.symbol)),1)),X(te,{direct:e.direct,"form-coin-symbol":e.needReverse?(Z=(Y=e.positionInfo)==null?void 0:Y.token_b)==null?void 0:Z.symbol:(he=(Ue=e.positionInfo)==null?void 0:Ue.token_a)==null?void 0:he.symbol,"to-coin-symbol":e.needReverse?(t=(f=e.positionInfo)==null?void 0:f.token_a)==null?void 0:t.symbol:(Me=(x=e.positionInfo)==null?void 0:x.token_b)==null?void 0:Me.symbol,onChangeDirect:s[2]||(s[2]=m=>e.direct=m)},null,8,["direct","form-coin-symbol","to-coin-symbol"])])]),n("div",Xn,[n("div",zn,[n("div",Hn,i(e.$t("common.minPrice")),1),(e.needReverse?!e.direct:e.direct)?(k(),y("p",Gn,i(((a=e.positionInfo)==null?void 0:a.minPrice)&&("decimalUi"in e?e.decimalUi:N(ie))(e.positionInfo.minPrice,6)),1)):(k(),y("p",Kn,i(e.positionInfo&&e.positionInfo.minPrice&&("decimalUi"in e?e.decimalUi:N(ie))(1/((r=e.positionInfo)==null?void 0:r.maxPrice),6)),1)),(e.needReverse?e.direct:!e.direct)?(k(),y("div",Jn,i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol),1)):(k(),y("div",Qn,i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol),1))]),n("div",Vn,[n("div",Yn,i(e.$t("common.maxPrice")),1),(e.needReverse?!e.direct:e.direct)?(k(),y("p",Zn,i(((T=(De=e.positionInfo)==null?void 0:De.maxPrice)==null?void 0:T.indexOf("+"))>0||((z=e.positionInfo)==null?void 0:z.maxPrice)==="∞"?"∞":("decimalUi"in e?e.decimalUi:N(ie))(e.positionInfo.maxPrice,6)),1)):(k(),y("p",xn,i(((A=(Fe=e.positionInfo)==null?void 0:Fe.maxPrice)==null?void 0:A.indexOf("+"))>0||((re=e.positionInfo)==null?void 0:re.minPrice)=="0"?"∞":("decimalUi"in e?e.decimalUi:N(ie))(1/e.positionInfo.minPrice,6)),1)),(e.needReverse?e.direct:!e.direct)?(k(),y("div",ei,i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol),1)):(k(),y("div",oi,i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol),1))])]),n("div",ni,[n("div",ii,i(e.t("common.positionwillBe",{symbol:(e.needReverse?!e.direct:e.direct)?`${e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol}`:`${e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol}`})),1),n("div",si,i(e.t("common.positionwillBe",{symbol:(e.needReverse?!e.direct:e.direct)?`${e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol}`:`${e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol}`})),1)])])]),n("div",{class:Ze(e.needReverse?"card-container reverse":"card-container")},[n("div",ti,[X(ae,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":s[3]||(s[3]=m=>e.fromCoinAmount=m),"has-arrow":!1,"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direction":"From",onOnMax:s[4]||(s[4]=m=>e.maxBtnSelect("fromCoin")),onOnHalf:s[5]||(s[5]=m=>e.halfBtnSelect("fromCoin")),onOnInput:s[6]||(s[6]=m=>e.fromCoinAmount=m),onOnFocus:s[7]||(s[7]=()=>{e.fixedFromCoin=!0}),onOnSelect:s[8]||(s[8]=m=>e.openCoinSelect("fromCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),e.showFromCoinLock?(k(),y("div",ai,[e.storeIndex.theme=="default"?(k(),y("img",li)):(k(),y("img",ui)),n("p",null,i(e.$t("tips.marketprice")),1)])):G("",!0)]),n("div",ri,[X(ae,{modelValue:e.toCoinAmount,"onUpdate:modelValue":s[9]||(s[9]=m=>e.toCoinAmount=m),"has-arrow":!1,"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direction":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"",onOnMax:s[10]||(s[10]=m=>e.maxBtnSelect("toCoin")),onOnHalf:s[11]||(s[11]=m=>e.halfBtnSelect("toCoin")),onOnInput:s[12]||(s[12]=m=>e.toCoinAmount=m),onOnFocus:s[13]||(s[13]=()=>{e.fixedFromCoin=!1}),onOnSelect:s[14]||(s[14]=m=>e.openCoinSelect("toCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),e.showToCoinLock?(k(),y("div",di,[e.storeIndex.theme=="default"?(k(),y("img",mi)):(k(),y("img",vi)),n("p",null,i(e.$t("tips.marketprice")),1)])):G("",!0)])],2),n("div",pi,[n("div",fi,[n("div",ci,[n("div",bi,i(e.$t("common.liquidity")),1),n("div",ki,[n("span",Ii,[ve(n("img",null,null,512),[[J,e.getCoinIcon(e.needReverse?(b=e.positionInfo)==null?void 0:b.token_b:(c=e.positionInfo)==null?void 0:c.token_a)]]),n("span",yi,i(("showNum"in e?e.showNum:N(V))(e.needReverse?e.positionInfo.amountB:e.positionInfo.amountA,e.needReverse?(de=(ge=e.positionInfo)==null?void 0:ge.token_b)==null?void 0:de.decimals:(we=(Q=e.positionInfo)==null?void 0:Q.token_a)==null?void 0:we.decimals))+" "+i(e.needReverse?(_e=(ee=e.positionInfo)==null?void 0:ee.token_b)==null?void 0:_e.symbol:(R=($=e.positionInfo)==null?void 0:$.token_a)==null?void 0:R.symbol)+" → ",1)]),n("span",null,i(("showNum"in e?e.showNum:N(V))(e.needReverse?("precision"in e?e.precision:N(Pe)).plus(Number(e.positionInfo.amountB),Number(e.toCoinAmount)):("precision"in e?e.precision:N(Pe)).plus(Number(e.positionInfo.amountA),Number(e.fromCoinAmount)),e.needReverse?(Xe=(We=e.positionInfo)==null?void 0:We.token_b)==null?void 0:Xe.decimals:(Ee=(je=e.positionInfo)==null?void 0:je.token_a)==null?void 0:Ee.decimals))+" "+i(e.needReverse?(Ge=(Ce=e.positionInfo)==null?void 0:Ce.token_b)==null?void 0:Ge.symbol:(He=(ze=e.positionInfo)==null?void 0:ze.token_a)==null?void 0:He.symbol),1)])]),n("div",hi,[wi,n("div",gi,[n("span",Ci,[ve(n("img",null,null,512),[[J,e.getCoinIcon(e.needReverse?(oe=e.positionInfo)==null?void 0:oe.token_a:(Se=e.positionInfo)==null?void 0:Se.token_b)]]),pe(" "+i(("showNum"in e?e.showNum:N(V))(e.needReverse?e.positionInfo.amountA:e.positionInfo.amountB,e.needReverse?(Qe=(Je=e.positionInfo)==null?void 0:Je.token_a)==null?void 0:Qe.decimals:(Ne=(Ke=e.positionInfo)==null?void 0:Ke.token_b)==null?void 0:Ne.decimals))+" "+i(e.needReverse?(Ye=(Ve=e.positionInfo)==null?void 0:Ve.token_a)==null?void 0:Ye.symbol:(me=(F=e.positionInfo)==null?void 0:F.token_b)==null?void 0:me.symbol)+" → ",1)]),n("span",null,i(e.needReverse?("showNum"in e?e.showNum:N(V))(("precision"in e?e.precision:N(Pe)).plus(Number(e.positionInfo.amountA),Number(e.fromCoinAmount)),(I=(w=e.positionInfo)==null?void 0:w.token_a)==null?void 0:I.decimals):("showNum"in e?e.showNum:N(V))(("precision"in e?e.precision:N(Pe)).plus(Number(e.positionInfo.amountB),Number(e.toCoinAmount)),(d=(o=e.positionInfo)==null?void 0:o.token_b)==null?void 0:d.decimals))+" "+i(e.needReverse?(q=(_=e.positionInfo)==null?void 0:_.token_a)==null?void 0:q.symbol:(B=(h=e.positionInfo)==null?void 0:h.token_b)==null?void 0:B.symbol),1)])]),e.chainName=="Sui"&&e.positionInfo&&(((j=e.positionInfo)==null?void 0:j.feeOwedA)>0||((W=e.positionInfo)==null?void 0:W.feeOwedB)>0)?(k(),y("div",Si,[n("div",Ni,i(e.$t("common.fees")),1),n("div",Ai,[n("span",$i,[ve(n("img",null,null,512),[[J,e.getCoinIcon(e.needReverse?(H=e.positionInfo)==null?void 0:H.token_b:(L=e.positionInfo)==null?void 0:L.token_a)]]),pe(" "+i(("showNum"in e?e.showNum:N(V))(e.needReverse?(U=e.positionInfo)==null?void 0:U.feeOwedB:(S=e.positionInfo)==null?void 0:S.feeOwedA,e.needReverse?(M=(P=e.positionInfo)==null?void 0:P.token_b)==null?void 0:M.decimals:(g=(E=e.positionInfo)==null?void 0:E.token_a)==null?void 0:g.decimals))+" ",1),X(le,{address:e.needReverse?(so=(io=e.positionInfo)==null?void 0:io.token_b)==null?void 0:so.address:(no=(ne=e.positionInfo)==null?void 0:ne.token_a)==null?void 0:no.address,"style-params":{width:"8px",height:"8px",left:"10px",bottom:"0px"}},null,8,["address"]),pe(" "+i(e.needReverse?(uo=(lo=e.positionInfo)==null?void 0:lo.token_b)==null?void 0:uo.symbol:(ao=(to=e.positionInfo)==null?void 0:to.token_a)==null?void 0:ao.symbol)+" → ",1)]),n("span",null," 0 "+i(e.needReverse?(po=(vo=e.positionInfo)==null?void 0:vo.token_b)==null?void 0:po.symbol:(mo=(ro=e.positionInfo)==null?void 0:ro.token_a)==null?void 0:mo.symbol),1)])])):G("",!0),e.chainName=="Sui"&&e.positionInfo&&(((fo=e.positionInfo)==null?void 0:fo.feeOwedB)>0||((co=e.positionInfo)==null?void 0:co.feeOwedA)>0)?(k(),y("div",Ri,[Pi,n("div",Ti,[n("span",Bi,[ve(n("img",null,null,512),[[J,e.getCoinIcon(e.needReverse?(ko=e.positionInfo)==null?void 0:ko.token_a:(bo=e.positionInfo)==null?void 0:bo.token_b)]]),pe(" "+i(("showNum"in e?e.showNum:N(V))(e.needReverse?(yo=e.positionInfo)==null?void 0:yo.feeOwedA:(Io=e.positionInfo)==null?void 0:Io.feeOwedB,e.needReverse?(Co=(go=e.positionInfo)==null?void 0:go.token_a)==null?void 0:Co.decimals:(wo=(ho=e.positionInfo)==null?void 0:ho.token_b)==null?void 0:wo.decimals))+" ",1),X(le,{address:e.needReverse?($o=(Ao=e.positionInfo)==null?void 0:Ao.token_a)==null?void 0:$o.address:(No=(So=e.positionInfo)==null?void 0:So.token_b)==null?void 0:No.address,"style-params":{width:"8px",height:"8px",left:"10px",bottom:"0px"}},null,8,["address"]),pe(" "+i(e.needReverse?(Bo=(To=e.positionInfo)==null?void 0:To.token_a)==null?void 0:Bo.symbol:(Po=(Ro=e.positionInfo)==null?void 0:Ro.token_b)==null?void 0:Po.symbol)+" → ",1)]),n("span",null," 0 "+i(e.needReverse?(Uo=(Lo=e.positionInfo)==null?void 0:Lo.token_a)==null?void 0:Uo.symbol:(qo=(Oo=e.positionInfo)==null?void 0:Oo.token_b)==null?void 0:qo.symbol),1)])])):G("",!0),e.chainName=="Sui"&&e.positionInfo.is_display_rewarder?(k(!0),y(Zo,{key:2},xo(e.pendingRewarderArr,(m,Xo)=>(k(),y("div",{key:m,class:"item"},[Number(m.amount)>0?(k(),y("div",Oi,i(Xo==0?e.$t("common.rewards"):""),1)):G("",!0),m.amount>0?(k(),y("div",qi,[n("span",Li,[ve(n("img",null,null,512),[[J,e.getCoinIcon(m)]]),pe(" "+i(m.amount>1e-6?m.amount:m.amount===0?"0":"<0.000001")+" "+i(m.symbol)+" → ",1)]),n("span",null," 0 "+i(m.symbol),1)])):G("",!0)]))),128)):G("",!0)])]),X(ke,{disabled:e.wallet.connected?e.noEnterAmount||e.insufficientBalance||e.isDisabled||e.addLoading||e.addLiquidityBtnText!==e.t("newAdd.addMore"):!1,class:"big-btn",onClick:s[15]||(s[15]=m=>e.wallet.connected?e.isShowLiquidityModal=!0:e.wallet.setIsShowWalletModal(!0))},{default:en(()=>[Ui,n("span",null,i(e.wallet.connected?e.addLiquidityBtnText:e.$t("button.connectWallet")),1)]),_:1},8,["disabled"]),X(Ie),e.showCoinSelect?(k(),xe(ye,{key:0,"existing-coins":e.existingCoins,"last-select-coin":e.lastSelectCoin,onOnSelect:e.onCoinSelect,onOnClose:s[16]||(s[16]=m=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","onOnSelect"])):G("",!0),e.isShowSwapSetting?(k(),xe(O,{key:1,onOnClose:s[17]||(s[17]=m=>e.isShowSwapSetting=!1)})):G("",!0),e.isShowLiquidityModal?(k(),xe(l,{key:2,title:e.$t("button.increase"),"is-increase":!0,"from-coin":e.needReverse?e.toCoin:e.fromCoin,"to-coin":e.needReverse?e.fromCoin:e.toCoin,"from-coin-amount":e.needReverse?e.toCoinAmount:e.fromCoinAmount,"to-coin-amount":e.needReverse?e.fromCoinAmount:e.toCoinAmount,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice,"current-price":e.positionInfo.currentPrice,"current-price-reverse":1/e.positionInfo.currentPrice,"pool-info":(Mo=e.positionInfo)==null?void 0:Mo.poolInfo,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"position-total-amount":e.positionInfo.totalAmountUSD,"fixed-from-coin":e.fixedFromCoin,"tick-lower":e.positionInfo.tick_lower_index,"tick-upper":e.positionInfo.tick_upper_index,"current-price-tab":"custom",onToAdd:e.toAdd,onOnClose:s[18]||(s[18]=m=>e.isShowLiquidityModal=!1)},null,8,["title","from-coin","to-coin","from-coin-amount","to-coin-amount","min-price","max-price","current-price","current-price-reverse","pool-info","show-from-coin-lock","show-to-coin-lock","position-total-amount","fixed-from-coin","tick-lower","tick-upper","onToAdd"])):G("",!0),ve(n("div",Mi,[X(u)],512),[[on,e.pools.currentPositionLoading]])])}const ks=jo(Nn,[["render",Di],["__scopeId","data-v-cc893b41"]]);export{ks as default};
