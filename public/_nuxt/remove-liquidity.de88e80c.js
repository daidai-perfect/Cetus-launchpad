import{_ as eo}from"./back.9f4eeea8.js";import{_ as oo}from"./coin-pair-name.1fe500d9.js";import{_ as so}from"./status-block.57999031.js";import{_ as no}from"./token-warning.fec2d20c.js";import{a as ao,_ as to}from"./network-tips.cf7c6d17.js";import{u as io,a as lo,i as S,e as _,c as te,T as Ke,D as fe,s as Qe,y as uo,f as Ve,b as Ye,j as ro}from"./pool.8ac244d9.js";import{p as ke}from"./precision.a7a6c57b.js";import{a as vo,l as mo,r as v,m as j,b as co,E as po,O as fo,D as ie,a8 as bo,e as ko,q as ho,o as y,f as O,i as N,h as n,v as u,z as be,c as Ze,x as V,F as Ge,s as xe,t as X,u as z,j as Z,w as Io,G as go,I as _o,a9 as yo,B as wo,J as Ao,p as Ro,k as No}from"./entry.a00a8559.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{i as Je}from"./import-icon.de3e6c66.js";import{u as So,a as To}from"./sha256.3f9dd0c2.js";import{u as $o}from"./notifi.473e08fd.js";import"./useWhale.774fbe1a.js";import"./index.77e76edc.js";const Oo=vo({setup(){const{t:e,locale:b}=mo();let Xe=v(!1),le=v(!1);const he=v(!1),ze=()=>{H(),he.value=!0,setTimeout(()=>{he.value=!1},1e3)},Le=[{name:"25%",value:25},{name:"50%",value:50},{name:"75%",value:75},{name:"MAX",value:100}],G=So(),k=j(()=>G),Ee=io(),x=v(""),C=v(""),ee=v(""),Ie=v(""),ge=v(""),_e=v(""),q=v(""),ue=v(""),ye=s=>{let t=s.replace(/[^\d.]/g,"");const c=/^\d+(\.\d+)?$/;t.split(".").length>2&&!c.exec(t)&&(t=t.substr(0,t.length-1)),I.value=t},a=j(()=>Ee),r=v({}),d=v({}),o=v(a.value.currentPositionInfo||{}),we=To(),J=j(()=>we),w=co(),Ae=po();fo(()=>{J.value.connected||(k.value.theme==="default"?w.push("/position"):w.push("/pool/position"))});const A=j(()=>k.value.chainName?lo(k.value.chainName):{}),H=async()=>{a.value.setCurrentPositionLoading(!0);const s=w.currentRoute.value.query.token||"",t=w.currentRoute.value.query.collect||"",c=w.currentRoute.value.query.pos||"";k.value.chainName==="Aptos"?s&&t&&(x.value=t,C.value=w.currentRoute.value.query.address,ee.value=s,a.value.setCurrentPositionInfo(C.value,x.value,ee.value,k.value.chainName),o.value=a.value.currentPositionInfo):c&&(x.value=t,C.value=w.currentRoute.value.query.address,ee.value=s,a.value.setCurrentPositionInfo(C.value,x.value,ee.value,k.value.chainName,c),o.value=a.value.currentPositionInfo)},oe=v(!0);ie(()=>a.value.addressLpTokens,s=>{const t=w.currentRoute.value.query.address||"";!te(s)&&s[t]&&oe.value&&(H(),oe.value=!1)},{immediate:!0,deep:!0}),ie(()=>a.value.currentPositionInfo,s=>{s&&(o.value=a.value.currentPositionInfo,r.value=o.value.token_a,d.value=o.value.token_b,ne({value:I.value/100}),console.log(o.value,"  positionInfo.valuepositionInfo.value"))});const I=v(50),p=v(0),f=v(0),re=v("0"),se=j(()=>G.slippage);ie(I,bo((s,t)=>{Number(s)>100?I.value=100:s&&o.value&&(I.value=s,ne({value:I.value/100}))},300)),ie(se,s=>{s&&o.value&&ne({value:I.value/100})});const ne=s=>{var m,l;const t=o.value.token_a.decimals,c=o.value.token_b.decimals,h=o.value.tick_lower_index,i=o.value.tick_upper_index,B=Ke.tickIndexToSqrtPriceX64(h),Y=Ke.tickIndexToSqrtPriceX64(i);let R="";s.value!==1?R=new fe(o.value.liquidity).mul(s.value).toString():R=o.value.liquidity,R=Qe(R,0)||"0",re.value=R;const L=uo.getCoinAmountFromLiquidity(new Ve(R),new Ve(o.value.current_sqrt_price),B,Y,!0);console.log(L,"===>amountInfo");const E=Number(L.coinA.toString())/Math.pow(10,t),$=Number(L.coinB.toString())/Math.pow(10,c);console.log(E,$,"amountA121212"),p.value=E,f.value=$;const P=a.value.RATES&&a.value.RATES[o.value.token_a.address]&&((m=a.value.RATES[o.value.token_a.address])==null?void 0:m.price)||0,F=a.value.RATES&&a.value.RATES[o.value.token_b.address]&&((l=a.value.RATES[o.value.token_b.address])==null?void 0:l.price)||0;console.log(p.value,P,"fromCoinAmount.value"),Ie.value=Number(p.value*P)<.01?Number(p.value*P)===0?"0":"<0.01":_(p.value*P,2),ge.value=Number(f.value*F)<.01?Number(f.value*F)===0?"0":"<0.01":_(f.value*F,2);const W=ke.minus(Number(o.value.amountA),Number(p.value))*P;_e.value=Number(W)<.01?Number(W)===0?"0":"<0.01":_(W,2);const M=ke.minus(Number(o.value.amountB),Number(f.value))*F;q.value=Number(M)<.01?Number(M)===0?"0":"<0.01":_(M,2);const D=Number(Ye(W,2))+Number(Ye(M,2));ue.value=Number(D)<.01?Number(D)===0?"0":"<0.01":_(D,2)},{setIsShowSuccess:Re,setIsShowRejected:de,setIsShowWaiting:K,setTransactionDesc:Ne,setTransactionTxid:ve,setPositiomNum:Fe,setTransactionDescText:Se}=G,Q=$o(),ae=j(()=>Q),Te=j(()=>ae.value.status),$e=async()=>{await Q.getSources();let s;ae.value.allSources.forEach(t=>{const{pool_address:c,position_index:h}=JSON.parse(t.blockchainAddress);c==o.value.poolAddress&&h==o.value.index&&(s=t.id)}),console.log(s,"sourceID649==>"),Q.deleteSource(s)},Oe=async()=>{var h,i,B,Y,R,L,E,$,P,F,W,M,D;le.value=!0,ve("");const s=_(p.value,r.value.decimals)==0?"":`${S(p.value,r.value.decimals)} ${r.value.symbol}`,t=_(f.value,d.value.decimals)==0?"":`${S(f.value,d.value.decimals)} ${d.value.symbol}`;Ne(e("tips.removeLiquidiyText",{from:T.value?t:s,and:_(p.value,r.value.decimals)==0||_(f.value,d.value.decimals)==0?"":"and",to:T.value?s:t})),K(!0);const c=g.value&&g.value.length>0&&ce.value=="Sui"||g.value&&g.value.length>0&&I.value==100?e("modal.removeLiquidityText1"):e("modal.removeLiquidityText2");Se(c);try{let m={};m={pool:{...o.value.poolInfo,coinA:o.value.token_a,coinB:o.value.token_b},coinTypeA:o.value.poolInfo.coinTypeA,coinTypeB:o.value.poolInfo.coinTypeB,position:o.value,delta_liquidity:new Ve(Qe(re.value,0)),slippage:Number(se.value),rewards_num:g.value.length};const l=g.value;console.log(g,"===>pendingRewarderArr"),m.coinTypeC=l[0]?l[0].coin_address:"",m.coinTypeD=l[1]?l[1].coin_address:"",m.coinTypeE=l[2]?l[2].coin_address:"",console.log(m,"===>params");const He=await A.value.getRemoveLiquidityTransactionPayload(m);let U;if(k.value.chainName==="Aptos")U=await J.value.currentWallet.signAndSubmitTransaction(He);else{const pe=await J.value.currentWallet.signAndExecuteTransactionBlock(He);U=A.value.handleTx(pe),console.log("0331###remove###tx####",U)}if(U&&U.hash){ve(U.hash),K(!1),Re(!0);const pe={title:e("common.removeLiquidity"),desc:"",hash:U.hash,descTransactions:`Remove ${p.value} ${(h=r.value)==null?void 0:h.symbol} and ${f.value} ${(i=d.value)==null?void 0:i.symbol} 
             from the pool`,sender:J.value.address,chainName:k.value.chainName,tit:"Liquidity Removed",icon:"icon-icon-Removed",tokenInfo:{tokena:T.value?`${(Y=d.value)==null?void 0:Y.address}`:`${(B=r.value)==null?void 0:B.address}`,numa:T.value?`+ ${f.value}`:`+ ${p.value}`,logoa:T.value?a.value.tokensObj&&d.value&&d.value.address&&a.value.tokensObj[d.value.address]&&a.value.tokensObj[d.value.address].logoURI:a.value.tokensObj&&r.value&&r.value.address&&a.value.tokensObj[r.value.address]&&a.value.tokensObj[r.value.address].logoURI,tokenb:T.value?`${(R=r.value)==null?void 0:R.address}`:`${(L=d.value)==null?void 0:L.address}`,numb:T.value?`+ ${p.value}`:`+ ${f.value}`,logob:T.value?a.value.tokensObj&&r.value&&r.value.address&&a.value.tokensObj[r.value.address]&&a.value.tokensObj[r.value.address].logoURI:a.value.tokensObj&&d.value&&d.value.address&&a.value.tokensObj[d.value.address]&&a.value.tokensObj[d.value.address].logoURI},text:`Withdraw ${p.value} ${(E=r.value)==null?void 0:E.symbol} and ${f.value} ${($=d.value)==null?void 0:$.symbol}`};k.value.chainName!=="Aptos"&&(pe.res=U.res),A.value.showTransitionPending(pe);const De=await A.value.watchTransaction(pe);if(g.value&&g.value.length>0&&(Number((P=l[0])==null?void 0:P.amount)!==0||m.coinTypeD&&Number((F=l[1])==null?void 0:F.amount)!==0||m.coinTypeE&&Number((W=l[2])==null?void 0:W.amount)!==0)){const We={title:e("common.removeLiquidity"),desc:"",hash:U.hash,tit:"Rewards Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:l[0].symbol,numa:`+ ${Number(l[0].amount)}`,logoa:a.value.tokensObj&&l[0]&&l[0].address&&a.value.tokensObj[l[0].address]&&a.value.tokensObj[l[0].address].logoURI,tokenb:m.coinTypeD?l[1].symbol:"",numb:m.coinTypeD?`+ ${Number(l[1].amount)}`:"",logob:m.coinTypeD?a.value.tokensObj&&l[1]&&l[1].address&&a.value.tokensObj[l[1].address]&&a.value.tokensObj[l[1].address].logoURI:"",tokenc:m.coinTypeE?l[2].symbol:"",numc:m.coinTypeE?`+ ${Number(l[2].amount)}`:"",logoc:m.coinTypeE?a.value.tokensObj&&l[2]&&l[2].address&&a.value.tokensObj[l[2].address]&&a.value.tokensObj[l[2].address].logoURI:""},text:`Withdraw ${p.value} ${(M=r.value)==null?void 0:M.symbol} and ${f.value} ${(D=d.value)==null?void 0:D.symbol}`},Me=await A.value.setTransations(We);console.log("9999transitionStatusFees",De,Me)}if(S(o.value.feeOwedA,o.value.token_a.decimals)!==0||S(o.value.feeOwedB,o.value.token_b.decimals)!==0){const We={title:"Claim",desc:"",hash:U.hash,chainName:k.value.chainName,tit:"Fees Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:`${o.value.token_a.symbol}`,numa:_(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`+ ${S(o.value.feeOwedA,o.value.token_a.decimals)}`,logoa:_(o.value.feeOwedA,o.value.token_a.decimals)==0?"":a.value.tokensObj&&o.value&&o.value.token_a.address&&a.value.tokensObj[o.value.token_a.address]&&a.value.tokensObj[o.value.token_a.address].logoURI,tokenb:`${o.value.token_b.symbol}`,numb:_(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`+ ${S(o.value.feeOwedB,o.value.token_b.decimals)}`,logob:_(o.value.feeOwedB,o.value.token_b.decimals)==0?"":a.value.tokensObj&&o.value&&o.value.token_b.address&&a.value.tokensObj[o.value.token_b.address]&&a.value.tokensObj[o.value.token_b.address].logoURI}},Me=await A.value.setTransations(We);console.log("9999transitionStatusFees",De,Me)}De&&Number(I.value)==100&&Te.value=="authenticated"&&me.value&&(await Q.subscribePosition({pool_address:o.value.poolAddress,position_index:o.value.index},o.value.nftHash,!1),$e()),De&&(setTimeout(()=>{H()},3e3),setTimeout(()=>{H()},6e3),Number(I.value)==100&&Ae.name=="remove-liquidity"&&(k.value.theme==="default"?w.push("/position"):w.push("/pool/position")))}else K(!1),de(!0);le.value=!1}catch(m){console.log("Remove error",m),le.value=!1,K(!1),de(!0)}},Ce=j(()=>a.value.tokensObj&&r.value.address&&a.value.tokensObj[r.value.address]&&a.value.tokensObj[r.value.address].logoURI),je=j(()=>a.value.tokensObj&&d.value.address&&a.value.tokensObj[d.value.address]&&a.value.tokensObj[d.value.address].logoURI),qe=v(0),g=v([]);ie(()=>[o.value,a.value.addressLpTokens,a.value.tokensObj,a.value.RATES],async([s,t,c,h])=>{if(!te(s)&&!te(t)&&!te(c)&&!te(h)){const i=t[s.poolAddress];console.log(i,"===>pool");const B=await A.value.getTickDataByIndex(i.ticks_handle,Number(s.tick_lower_index)),Y=await A.value.getTickDataByIndex(i.ticks_handle,Number(s.tick_upper_index));let R={};k.value.chainName==="Aptos"?R=await A.value.getPosRewardersAmount({poolAddress:s.poolAddress,positionName:s.tokenName,tickLowerData:B,tickUpperData:Y}):(console.log(s,"===>newValue"),R=await A.value.fetchPosRewardersAmount({poolAddress:s.poolAddress,positionId:s.pos_object_id,coinTypeA:s.coin_type_a,coinTypeB:s.coin_type_b,rewarderInfo:i.rewarderInfo}));const L=[];let E=new fe(0);R.forEach(($,P)=>{const F=c[$.coin_address].decimals,W=c[$.coin_address],M=$.amount_owed.toString(),D=new fe(M).div(Math.pow(10,F)).toString();if(o.value.poolInfo[`rewarder_display${P+1}`]||Number(D)>0){console.log($.amount_owed.toString(),"===>element.amount_owed.toString()");const m=h[$.coin_address].price,l=new fe(D).mul(m);E=new fe(E).plus(l),L.push({...$,...W,amount:D,amountUSD:l.toString()})}}),g.value=L,qe.value=Number(ro(E.toString(),2))}},{immediate:!0});const me=v(!1),Be=s=>{const t=s.sources;t.forEach(c=>{const{pool_address:h,position_index:i}=JSON.parse(c.blockchainAddress);console.log(h,i,"===>pool_address, position_index"),console.log(o.value.poolAddress,o.value.index,"===>positionInfo.value.index"),h==o.value.poolAddress&&Number(i)==Number(o.value.index)&&(me.value=!0)}),console.log(t,"===>sources")};ie(()=>[ae.value.sourceGroups,o.value],([s,t])=>{s&&s.sources&&s.sources.length>0&&t&&!te(t)&&Be(s)},{immediate:!0,deep:!0});const T=j(()=>{var s,t;return(t=(s=o.value)==null?void 0:s.poolInfo)==null?void 0:t.needReverse}),Pe=s=>{var t;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((t=a.value.tokensObj[s==null?void 0:s.address])==null?void 0:t.logo_url)||(k.value.theme==="default"?Je("/image/coins/unknown.png"):Je("/image/coins/sui-unknown.png"))},ce=j(()=>G.chainName);return{chainName:ce,removeAmountARates:_e,removeAmountBRates:q,removeAmountRates:ue,receiveAmountARates:Ie,receiveAmountBRates:ge,showNum:S,fromCoinUrl:Ce,toCoinUrl:je,precision:ke,addCommom:_,loading:le,wallet:J,toRemove:Oe,fromCoinAmount:p,toCoinAmount:f,pools:a,refresh:he,amountArr:Le,sliderVal:I,positionInfo:o,slippage:se,importIcon:Je,clickRefresh:ze,isShowSwapSetting:Xe,pendingRewarderArr:g,changeValue:ye,needReverse:T,getCoinIcon:Pe,isFirstLoadding:oe}}});const Ue=e=>(Ro("data-v-a4ac14fc"),e=e(),No(),e),Co={class:"remove-liquidity"},jo={class:"remove-liquidity-top"},qo={class:"remove-title"},Bo={class:"right title-right"},Po=Ue(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Do=Ue(()=>n("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Uo=[Do],Lo={class:"remove-liquidity-center"},Eo={class:"top"},Fo={class:"left"},Wo={class:"right"},Mo={class:"fee"},Vo={class:"bottom"},Jo={class:"add-amount"},Xo={class:"add-amount-header"},zo={class:"amount-list"},Ho=["onClick"],Ko={class:"slider-box"},Qo={class:"receive"},Yo={class:"receiveTit"},Zo={class:"item"},Go={class:"left"},xo={key:0,class:"right"},es={class:"item"},os={class:"left"},ss={key:0,class:"right"},ns={class:"remove-liquidity-bottom-box"},as={class:"induction remove-liquidity-bottom"},ts={class:"item"},is={class:"induction-text"},ls={class:"induction-value"},us=Ue(()=>n("div",{class:"induction-text"},null,-1)),rs={class:"induction-value"},ds={class:"induction-text"},vs={class:"induction-value"},ms=Ue(()=>n("svg",{"aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-Remove"})],-1)),cs={key:0,class:"receive"},ps={class:"receiveTit"},fs={class:"left"},bs={key:0,class:"right"},ks={class:"item"},hs={class:"left"},Is={key:0,class:"right"},gs={class:"item"},_s={class:"left"},ys={key:0,class:"right"},ws={class:"loading-global"};function As(e,b,Xe,le,he,ze){var ue,ye,a,r,d,o,we,J,w,Ae,A,H,oe,I,p,f,re,se,ne,Re,de,K,Ne,ve,Fe,Se,Q,ae,Te,$e,Oe,Ce,je,qe,g,me,Be,T,Pe,ce,s,t,c,h;const Le=eo,G=oo,k=so,Ee=_o,x=yo,C=no,ee=wo,Ie=ao,ge=to,_e=Ao,q=ho("image");return y(),O("div",Co,[N(Le),n("div",jo,[n("div",qo,u(e.$t("common.removeLiquidity")),1),n("div",Bo,[n("div",{class:"slippage-icon",onClick:b[0]||(b[0]=i=>e.isShowSwapSetting=!0)},[Po,n("span",null,u(e.slippage)+"%",1)]),(y(),O("svg",{"aria-hidden":"true",class:be(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:b[1]||(b[1]=(...i)=>e.clickRefresh&&e.clickRefresh(...i))},Uo,2))])]),n("div",Lo,[n("div",Eo,[n("div",Fo,[e.positionInfo?(y(),Ze(G,{key:0,"from-coin":e.needReverse?e.positionInfo.token_b:e.positionInfo.token_a,"to-coin":e.needReverse?e.positionInfo.token_a:e.positionInfo.token_b},null,8,["from-coin","to-coin"])):V("",!0),n("div",Wo,[n("div",Mo,u(e.positionInfo.fee*100)+"%",1)])]),N(k,{"current-status":e.positionInfo.currentStatus||""},null,8,["current-status"])]),n("div",Vo,[n("div",Jo,[n("div",Xo,[n("span",null,u(e.$t("common.amount")),1),n("div",zo,[(y(!0),O(Ge,null,xe(e.amountArr,(i,B)=>(y(),O("div",{key:B,class:be(["amount-item",e.sliderVal==i.value?"amount-item-active":""]),onClick:Y=>e.sliderVal=i.value},u(i.name),11,Ho))),128))])]),n("div",Ko,[N(Ee,{value:e.sliderVal,"onUpdate:value":b[2]||(b[2]=i=>e.sliderVal=i),suffix:"%",onChange:b[3]||(b[3]=i=>e.changeValue(i.target.value))},null,8,["value"]),N(x,{value:e.sliderVal,"onUpdate:value":b[4]||(b[4]=i=>e.sliderVal=i)},null,8,["value"])])])])]),n("div",Qo,[n("div",Yo,u(e.$t("newAdd.receive")),1),n("div",{class:be(e.needReverse?"receive-item-box reverse":"receive-item-box")},[n("div",Zo,[n("div",Go,[X(n("img",null,null,512),[[q,e.fromCoinUrl||e.getCoinIcon((ue=e.positionInfo)==null?void 0:ue.token_a)]]),N(C,{address:(a=(ye=e.positionInfo)==null?void 0:ye.token_a)==null?void 0:a.address,"style-params":{width:"8px",height:"8px",left:"15px",bottom:"0px"}},null,8,["address"]),n("span",null,u(("showNum"in e?e.showNum:z(S))(e.fromCoinAmount,e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.decimals)),1),Z(" "+u(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" "+u(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.labels&&e.positionInfo.token_a.labels[0]?`(${e.positionInfo.token_a.labels[0]})`:""),1)]),e.receiveAmountARates>0?(y(),O("div",xo,"≈ $"+u(e.receiveAmountARates),1)):V("",!0)]),n("div",es,[n("div",os,[X(n("img",null,null,512),[[q,e.toCoinUrl||e.getCoinIcon((r=e.positionInfo)==null?void 0:r.token_b)]]),N(C,{address:(o=(d=e.positionInfo)==null?void 0:d.token_b)==null?void 0:o.address,"style-params":{width:"8px",height:"8px",left:"15px",bottom:"0px"}},null,8,["address"]),n("span",null,u(("showNum"in e?e.showNum:z(S))(e.toCoinAmount,e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals)),1),Z(" "+u(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" "+u(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.labels&&e.positionInfo.token_b.labels[0]?`(${e.positionInfo.token_b.labels[0]})`:""),1)]),e.receiveAmountBRates>0?(y(),O("div",ss,"≈ $"+u(e.receiveAmountBRates),1)):V("",!0)])],2)]),n("div",ns,[n("div",as,[n("div",ts,[n("div",is,u(e.$t("common.fees")),1),n("div",ls,[X(n("img",null,null,512),[[q,e.getCoinIcon(e.needReverse?(J=e.positionInfo)==null?void 0:J.token_b:(we=e.positionInfo)==null?void 0:we.token_a)]]),Z(" "+u(("showNum"in e?e.showNum:z(S))(e.needReverse?(Ae=e.positionInfo)==null?void 0:Ae.feeOwedB:(w=e.positionInfo)==null?void 0:w.feeOwedA,e.needReverse?(I=(oe=e.positionInfo)==null?void 0:oe.token_b)==null?void 0:I.decimals:(H=(A=e.positionInfo)==null?void 0:A.token_a)==null?void 0:H.decimals))+" ",1),N(C,{address:e.needReverse?(se=(re=e.positionInfo)==null?void 0:re.token_b)==null?void 0:se.address:(f=(p=e.positionInfo)==null?void 0:p.token_a)==null?void 0:f.address,"style-params":{width:"8px",height:"8px",left:"10px",bottom:"0px"}},null,8,["address"]),n("span",null,u(e.needReverse?(K=(de=e.positionInfo)==null?void 0:de.token_b)==null?void 0:K.symbol:(Re=(ne=e.positionInfo)==null?void 0:ne.token_a)==null?void 0:Re.symbol),1)])]),n("div",{class:be(e.pendingRewarderArr.length>0?"item item-boder":"item")},[us,n("div",rs,[X(n("img",null,null,512),[[q,e.getCoinIcon(e.needReverse?(ve=e.positionInfo)==null?void 0:ve.token_a:(Ne=e.positionInfo)==null?void 0:Ne.token_b)]]),Z(" "+u(("showNum"in e?e.showNum:z(S))(e.needReverse?(Se=e.positionInfo)==null?void 0:Se.feeOwedA:(Fe=e.positionInfo)==null?void 0:Fe.feeOwedB,e.needReverse?($e=(Te=e.positionInfo)==null?void 0:Te.token_a)==null?void 0:$e.decimals:(ae=(Q=e.positionInfo)==null?void 0:Q.token_b)==null?void 0:ae.decimals))+" ",1),N(C,{address:e.needReverse?(qe=(je=e.positionInfo)==null?void 0:je.token_a)==null?void 0:qe.address:(Ce=(Oe=e.positionInfo)==null?void 0:Oe.token_b)==null?void 0:Ce.address,"style-params":{width:"8px",height:"8px",left:"10px",bottom:"0px"}},null,8,["address"]),n("span",null,u(e.needReverse?(T=(Be=e.positionInfo)==null?void 0:Be.token_a)==null?void 0:T.symbol:(me=(g=e.positionInfo)==null?void 0:g.token_b)==null?void 0:me.symbol),1)])],2),e.positionInfo.is_display_rewarder&&(e.chainName=="Sui"||Number(e.sliderVal)==100)?(y(!0),O(Ge,{key:0},xe(e.pendingRewarderArr,(i,B)=>(y(),O("div",{key:i,class:"item"},[n("div",ds,u(B==0?e.$t("common.rewards"):""),1),n("div",vs,[X(n("img",null,null,512),[[q,e.getCoinIcon(i)]]),Z(" "+u(i.amount>1e-6?i.amount:i.amount===0?"0":"<0.000001")+" ",1),n("span",null,u(i.symbol),1)])]))),128)):V("",!0)])]),N(ee,{disabled:e.wallet.connected?Number(e.sliderVal)==0||e.loading:!1,class:"remove-btn big-btn",onClick:b[5]||(b[5]=i=>e.wallet.connected?e.toRemove():e.wallet.setIsShowWalletModal(!0))},{default:Io(()=>[ms,n("span",null,u(e.wallet.connected?e.$t("button.remove"):e.$t("button.connectWallet")),1)]),_:1},8,["disabled"]),N(Ie),e.sliderVal<100?(y(),O("div",cs,[n("div",ps,[n("div",fs,u(e.$t("newAdd.remainingPosition")),1),e.removeAmountRates>0?(y(),O("div",bs,"$"+u(e.removeAmountRates),1)):V("",!0)]),n("div",{class:be(e.needReverse?"receive-item-box reverse":"receive-item-box")},[n("div",ks,[n("div",hs,[X(n("img",null,null,512),[[q,e.fromCoinUrl||e.getCoinIcon((Pe=e.positionInfo)==null?void 0:Pe.token_a)]]),N(C,{address:(s=(ce=e.positionInfo)==null?void 0:ce.token_a)==null?void 0:s.address,"style-params":{width:"8px",height:"8px",left:"18px",bottom:"0px"}},null,8,["address"]),n("span",null,u(("showNum"in e?e.showNum:z(S))(("precision"in e?e.precision:z(ke)).minus(Number(e.positionInfo.amountA),Number(e.fromCoinAmount)),e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.decimals)),1),Z(" "+u(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" "+u(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.labels&&e.positionInfo.token_a.labels[0]?`(${e.positionInfo.token_a.labels[0]})`:""),1)]),e.removeAmountARates>0?(y(),O("div",Is,"≈ $"+u(e.removeAmountARates),1)):V("",!0)]),n("div",gs,[n("div",_s,[X(n("img",null,null,512),[[q,e.toCoinUrl||e.getCoinIcon((t=e.positionInfo)==null?void 0:t.token_b)]]),N(C,{address:(h=(c=e.positionInfo)==null?void 0:c.token_b)==null?void 0:h.address,"style-params":{width:"8px",height:"8px",left:"18px",bottom:"0px"}},null,8,["address"]),n("span",null,u(("showNum"in e?e.showNum:z(S))(("precision"in e?e.precision:z(ke)).minus(Number(e.positionInfo.amountB),Number(e.toCoinAmount)),e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals)),1),Z(" "+u(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" "+u(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.labels&&e.positionInfo.token_b.labels[0]?`(${e.positionInfo.token_b.labels[0]})`:""),1)]),e.removeAmountBRates>0?(y(),O("div",ys,"≈ $"+u(e.removeAmountBRates),1)):V("",!0)])],2)])):V("",!0),e.isShowSwapSetting?(y(),Ze(ge,{key:1,onOnClose:b[6]||(b[6]=i=>e.isShowSwapSetting=!1)})):V("",!0),X(n("div",ws,[N(_e)],512),[[go,e.pools.currentPositionLoading||e.isFirstLoadding]])])}const Ms=ko(Oo,[["render",As],["__scopeId","data-v-a4ac14fc"]]);export{Ms as default};
