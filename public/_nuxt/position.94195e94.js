import{_ as _e}from"./status-block.eda49ae7.js";import{g as X,a as Re,u as de}from"./pool.8137dec4.js";import{a as ee,y as se,l as c,e as oe,o as n,f as t,i as y,u as i,v as o,c as me,w as F,h as s,x as g,A as L,P as Ue,b as ue,r as O,q as V,s as Se,t as E,F as G,E as q,S as pe,p as ce,k as ve,H as Ne,K as Oe,R as Ce,Q as re,z as le,j as Z,Y as De,B as Ae,Z as je}from"./entry.05bbbdc0.js";/* empty css              */import{u as ne,h as ke,k as Pe,e as Ee,a as $,c as M,j as x,d as k,b as Fe}from"./sha256.230676d8.js";/* empty css              */import{i as Y}from"./import-icon.de3e6c66.js";import{D as Le}from"./decimal.0bdeb344.js";import{_ as he}from"./icon-arrow_2x.948aedb2.js";import{_ as be}from"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import{u as Be}from"./notifi.8babd9f1.js";import{_ as Ie}from"./icon_on_2x.5e96733d.js";import{_ as Te}from"./img-no-Positions_2x.fd050a36.js";import{_ as We}from"./img-no-Positions_2x.2ce325c6.js";import{_ as Ve}from"./img-connect-wallet_2x.3c76d94f.js";import{_ as Ge}from"./img-connect-wallet_2x.4d29e7c7.js";import"./useWhale.30d973c4.js";const qe=ee({props:{pItem:{type:Object,required:!0},currentStatus:{type:String,required:!0},rewarderInfo:{type:Number,required:!0},aprAmount:{type:Number,required:!0}},setup(){const{t:e}=se(),d=ne(),_=c(()=>d),A=c(()=>_.value.chainName),R=c(()=>ke[A.value]),j=c(()=>_.value.currentExplorer);return{getExplorerUrl:X,store:_,config:R,t:e,currentExplorer:j}}});const ze={key:0,class:"owner-addres"},Ke=["href"],He=["href"],Je={class:"fee-tier"};function Ze(e,d,_,A,R,j){const r=_e,w=Ue;return n(),t("div",{class:L(["position-status",`position-status-${e.pItem.currentStatus.toLowerCase()}`])},[y(r,{class:"status-block","current-status":e.pItem.currentStatus||"","is-pause":e.pItem.is_pause,"apr-amount":e.aprAmount,"block-name":"position"},null,8,["current-status","is-pause","apr-amount"]),e.pItem.tokenName?(n(),t("div",ze,[e.pItem.tokenName.length<=24?(n(),t("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:i(X))(e.currentExplorer,"nftAddress",e.pItem.nftHash),target:"_blank"},o(e.pItem.tokenName.split("|")[1]),9,Ke)):(n(),me(w,{key:1,placement:"bottom","arrow-point-at-center":""},{title:F(()=>[s("span",null,o(e.pItem.tokenName),1)]),default:F(()=>[s("a",{target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:i(X))(e.currentExplorer,"nftAddress",e.pItem.nftHash)},o(e.pItem.tokenName.substr(0,4))+" ... "+o(e.pItem.tokenName.substr(e.pItem.tokenName.length-4,4)),9,He)]),_:1}))])):g("",!0),s("div",Je,o(e.$t("common.fee"))+" "+o(e.pItem.fee*100)+"%",1)],2)}const Me=oe(qe,[["render",Ze],["__scopeId","data-v-71f635ca"]]),Qe=ee({props:{pItem:{type:Object,required:!0}},setup(e){const{t:d}=se(),_=ue(),A=ne(),R=c(()=>A);c(()=>R.value.chainName?Re(R.value.chainName):{});const j=de(),r=c(()=>j),w=()=>{R.value.chainName==="Aptos"?_.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):_.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`)},v=c(()=>r.value.allTokenObj&&e.pItem.token_a.address&&r.value.allTokenObj[e.pItem.token_a.address]&&r.value.allTokenObj[e.pItem.token_a.address].logo_url),U=c(()=>r.value.allTokenObj&&e.pItem.token_b.address&&r.value.allTokenObj[e.pItem.token_b.address]&&r.value.allTokenObj[e.pItem.token_b.address].logo_url),h=c(()=>r.value.feeOwedObj[e.pItem.tokenName]&&r.value.feeOwedObj[e.pItem.tokenName].feeOwed),a=c(()=>r.value.feeOwedObj[e.pItem.tokenName]&&r.value.feeOwedObj[e.pItem.tokenName].feesResult),C=c(()=>r.value.rewarderObj[e.pItem.tokenName]&&r.value.rewarderObj[e.pItem.tokenName].pendingRewarder),b=c(()=>r.value.rewarderObj[e.pItem.tokenName]&&r.value.rewarderObj[e.pItem.tokenName].pendingRewarderView),S=c(()=>r.value.rewarderObj[e.pItem.tokenName]&&r.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),B=O(0),T=O();V(()=>r.value.RATES,f=>{f&&(T.value=f)},{immediate:!0});const Q=f=>{var K;return(f==null?void 0:f.logoURI)||(f==null?void 0:f.logo_url)||((K=r.value.tokensObj[f==null?void 0:f.address])==null?void 0:K.logo_url)||(R.value.theme==="default"?Y("/image/coins/unknown.png"):Y("/image/coins/sui-unknown.png"))};return{tokensWarningObj:c(()=>r.value.tokensWarningObj),showNum:Pe,fromCoinUrl:v,toCoinUrl:U,decimalFormat:Ee,clickDetails:w,t:d,addCommom:$,importIcon:Y,router:_,store:R,pendingRewarder:C,pendingFees:h,pendingRewarderArr:S,pendingFeesArr:a,checkNullObj:M,fixD:x,decimalUi:k,pendingRewarderView:b,aprAmount:B,getCoinIcon:Q,Decimal:Le}}});const ge=e=>(ce("data-v-f2691b88"),e=e(),ve(),e),Ye={class:"position-item"},Xe={class:"card-content"},xe={class:"left"},es={class:"top card-header"},ss={class:"token-item"},os={class:"item"},ns={key:0,class:"token-warning"},ts={class:"item"},as={key:0,class:"token-warning"},is={class:"min-and-max"},rs={class:"text"},ls={key:0,src:he,alt:""},ds={key:1,src:be,alt:""},ms={class:"text"},us={class:"bottom"},ps={class:"info-block-container"},cs={class:"leabl"},vs={class:"text"},ks={key:0,class:"hover-rewarder"},hs={class:"rewarder-info"},bs={class:"left-rewarder"},Is={alt:""},gs={class:"right-rewarder"},fs={class:"amount"},$s={key:0,class:"amount-usd"},ws={key:1,class:"amount-usd"},ys={class:"rewarder-info"},_s={class:"left-rewarder"},Rs={alt:""},Us={class:"right-rewarder"},Ss={class:"amount"},Ns={key:0,class:"amount-usd"},Os={key:1,class:"amount-usd"},Cs={class:"leabl"},Ds={key:0,class:"text"},As={key:1,class:"text"},js={key:2,class:"text"},Ps={key:3,class:"hover-rewarder"},Es={class:"left-rewarder"},Fs={alt:""},Ls={class:"right-rewarder"},Bs={class:"amount"},Ts={class:"amount-usd"},Ws={class:"leabl"},Vs={key:0,class:"text"},Gs={key:1,class:"text"},qs={key:2,class:"hover-rewarder"},zs={class:"left-rewarder"},Ks={alt:""},Hs={class:"right-rewarder"},Js={class:"amount"},Zs={class:"amount-usd"},Ms=ge(()=>s("div",{class:"more-img"},null,-1)),Qs={class:"min-and-max"},Ys={class:"text"},Xs={key:0,src:he,alt:""},xs={key:1,src:be,alt:""},eo={class:"text"},so={class:"info-block-container"},oo={class:"left"},no={class:"info-block"},to={class:"leabl"},ao={class:"text"},io={class:"info-block cursor-block"},ro={class:"leabl"},lo={key:0,class:"text"},mo={key:1,class:"text"},uo={key:2,class:"hover-rewarder"},po={class:"left-rewarder"},co={alt:""},vo={class:"right-rewarder"},ko={class:"amount"},ho={class:"amount-usd"},bo={key:0,class:"info-block cursor-block"},Io={class:"leabl"},go={key:0,class:"text"},fo={key:1,class:"text"},$o={key:2,class:"hover-rewarder"},wo={class:"left-rewarder"},yo={alt:""},_o={class:"right-rewarder"},Ro={class:"amount"},Uo={class:"amount-usd"},So=ge(()=>s("div",{class:"right"},[s("div",{class:"more-img"})],-1));function No(e,d,_,A,R,j){var U,h;const r=Me,w=pe,v=Se("image");return n(),t("div",Ye,[s("div",Xe,[s("div",xe,[y(r,{"p-item":e.pItem,"current-status":((U=e.pItem)==null?void 0:U.currentStatus)||"","rewarder-info":e.pendingRewarder,"apr-amount":e.aprAmount},null,8,["p-item","current-status","rewarder-info","apr-amount"])]),s("div",{class:"right",onClick:d[0]||(d[0]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",es,[s("div",ss,[s("div",os,[E(s("img",null,null,512),[[v,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensWarningObj&&!e.tokensWarningObj[e.pItem.token_b.address]:e.tokensWarningObj&&!e.tokensWarningObj[e.pItem.token_a.address])?(n(),t("div",ns)):g("",!0),s("div",null,[s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1),s("p",null,o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" "+o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)])]),s("div",ts,[E(s("img",null,null,512),[[v,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensWarningObj&&!e.tokensWarningObj[e.pItem.token_a.address]:e.tokensWarningObj&&!e.tokensWarningObj[e.pItem.token_b.address])?(n(),t("div",as)):g("",!0),s("div",null,[s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1),s("p",null,o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" "+o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)])])]),s("div",is,[s("div",rs,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:i($))(("decimalUi"in e?e.decimalUi:i(k))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:i($))(("decimalUi"in e?e.decimalUi:i(k))(e.pItem.minPrice,6))),1),e.store.theme=="default"?(n(),t("img",ls)):(n(),t("img",ds)),s("div",ms,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:i($))(("decimalUi"in e?e.decimalUi:i(k))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:i($))(("decimalUi"in e?e.decimalUi:i(k))(e.pItem.maxPrice,6)))+" "+o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)])]),s("div",us,[s("div",ps,[s("div",{class:L(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[s("div",cs,o(e.$t("common.liquidity")),1),s("div",vs," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:i($))(e.pItem.amountUSD,2)),1),e.pItem.amountUSD>0?(n(),t("div",ks,[s("div",hs,[s("div",bs,[E(s("img",Is,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",gs,[s("div",fs,o(e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(k))(e.pItem.amountB,e.pItem.token_b.decimals):("decimalUi"in e?e.decimalUi:i(k))(e.pItem.amountA,e.pItem.token_a.decimals)),1),e.pItem.needReverse?(n(),t("div",ws,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("fixD"in e?e.fixD:i(x))(e.pItem.tokenBRates,2):"<$0.01"),1)):(n(),t("div",$s,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("fixD"in e?e.fixD:i(x))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",ys,[s("div",_s,[E(s("img",Rs,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",Us,[s("div",Ss,o(e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(k))(e.pItem.amountA,e.pItem.token_a.decimals):("decimalUi"in e?e.decimalUi:i(k))(e.pItem.amountB,e.pItem.token_b.decimals)),1),e.pItem.needReverse?(n(),t("div",Os,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("decimalUi"in e?e.decimalUi:i(k))(e.pItem.tokenARates,2):"<$0.01"),1)):(n(),t("div",Ns,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("decimalUi"in e?e.decimalUi:i(k))(e.pItem.tokenBRates,2):"<$0.01"),1))])])])):g("",!0)],2),s("div",{class:L(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[s("div",Cs,o(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(n(),t("div",Ds," $ -- ")):isNaN(e.pendingFees)?(n(),t("div",js,[y(w,{size:"small"})])):(n(),t("div",As,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:i($))(e.pendingFees,2)),1)),e.pendingFees>0?(n(),t("div",Ps,[(n(!0),t(G,null,q(e.pendingFeesArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",Es,[E(s("img",Fs,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",Ls,[s("div",Bs,o(Number(a.amount)==0?0:Number(a.amount)>1e-6?("addCommom"in e?e.addCommom:i($))(("decimalUi"in e?e.decimalUi:i(k))(a.amount,a.decimals),a.decimals):"<0.000001"),1),s("div",Ts,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:i($))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):g("",!0)],2),e.pItem.is_display_rewarder&&!("checkNullObj"in e?e.checkNullObj:i(M))((h=e.pItem)==null?void 0:h.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(n(),t("div",{key:0,class:L(["info-block cursor-block",e.pendingRewarder==0?"block-none":""])},[s("div",Ws,o(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(n(),t("div",Vs," $"+o(e.pendingRewarder>0&&e.pendingRewarderView>0?e.pendingRewarderView:e.pendingRewarder>0&&e.pendingRewarderView<=0?"<0.01":0),1)):(n(),t("div",Gs,[y(w,{size:"small"})])),e.pendingRewarder>0?(n(),t("div",qs,[(n(!0),t(G,null,q(e.pendingRewarderArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",zs,[E(s("img",Ks,null,512),[[v,a.logoURI]]),s("span",null,o(a.symbol),1)]),s("div",Hs,[s("div",Js,o(("decimalUi"in e?e.decimalUi:i(k))(a.amount,a.decimals)),1),s("div",Zs,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:i($))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):g("",!0)],2)):g("",!0),Ms])])])]),s("div",{class:"h5-bottom",onClick:d[1]||(d[1]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",Qs,[s("div",Ys,o(e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(k))(1/e.pItem.minPrice,6):("decimalUi"in e?e.decimalUi:i(k))(e.pItem.minPrice,6)),1),e.store.theme=="default"?(n(),t("img",Xs)):(n(),t("img",xs)),s("div",eo,o(e.pItem.maxPrice.indexOf("+")>-1?"∞":e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(k))(1/e.pItem.maxPrice,6):("decimalUi"in e?e.decimalUi:i(k))(e.pItem.maxPrice,6))+" "+o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",so,[s("div",oo,[s("div",no,[s("div",to,o(e.$t("common.liquidity")),1),s("div",ao," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:i($))(e.pItem.amountUSD,2)),1)]),s("div",io,[s("div",ro,o(e.$t("newAdd.pendingFees")),1),isNaN(e.pendingFees)?(n(),t("div",mo,[y(w,{size:"small"})])):(n(),t("div",lo,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:i($))(e.pendingFees,2)),1)),e.pendingFees>0?(n(),t("div",uo,[(n(!0),t(G,null,q(e.pendingFeesArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",po,[E(s("img",co,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",vo,[s("div",ko,o(Number(a.amount)==0?0:Number(a.amount)>1e-6?("addCommom"in e?e.addCommom:i($))(("decimalUi"in e?e.decimalUi:i(k))(a.amount,a.decimals),a.decimals):"<0.000001"),1),s("div",ho,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:i($))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):g("",!0)]),e.pItem.is_display_rewarder&&!("checkNullObj"in e?e.checkNullObj:i(M))(e.pItem.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(n(),t("div",bo,[s("div",Io,o(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(n(),t("div",go," $"+o(e.pendingRewarder>0?("decimalUi"in e?e.decimalUi:i(k))(e.pendingRewarder,2):0),1)):(n(),t("div",fo,[y(w,{size:"small"})])),e.pendingRewarder>0?(n(),t("div",$o,[(n(!0),t(G,null,q(e.pendingRewarderArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",wo,[E(s("img",yo,null,512),[[v,a.logoURI]]),s("span",null,o(a.symbol),1)]),s("div",_o,[s("div",Ro,o(a.amount),1),s("div",Uo,"$"+o(("decimalUi"in e?e.decimalUi:i(k))(a.amountUSD,2)),1)])]))),128))])):g("",!0)])):g("",!0)]),So])])])}const Oo=oe(Qe,[["render",No],["__scopeId","data-v-f2691b88"]]),Co=ee({setup(){const e=O(!1),{t:d}=se(),_=O(["position"]),A=ue(),R=O(""),j=ne(),r=c(()=>j),w=c(()=>r.value.chainName?ke[r.value.chainName]:{});let v=O([]);const U=de(),h=c(()=>U),a=Fe(),C=c(()=>a),b=O(!1),S=O(d("tab.all")),B=O([d("tab.layerZero"),d("tab.wormhole"),d("tab.celer")]),T=O(!0),Q=O("TVL"),te=()=>{e.value=!0,v.value=[],C.value.address&&U.getMyPositons(C.value.address,h.value.poolsObj,r.value.chainName),setTimeout(()=>{e.value=!1},1e3)};Ne(()=>{v.value=[],document.addEventListener("click",()=>{b.value=!1}),U.setMyPositionsLoading(!0)}),Oe(()=>{document.addEventListener("click",()=>{b.value=!1})}),Ce(()=>{C.value.connected||(v.value=[])});const f=p=>{e.value=!0;let u=[];if(h.value.myPositions.forEach(m=>{var W,H,J,ie;let l,I;const N=m.amountA*((W=h.value.RATES[m.token_a.address])==null?void 0:W.price),D=m.amountB*((H=h.value.RATES[m.token_b.address])==null?void 0:H.price);(J=h.value.RATES[m.token_a.address])!=null&&J.price&&((ie=h.value.RATES[m.token_b.address])!=null&&ie.price)?(l=N+D,I=N+D):(l=" --",I=0),u.push({...m,amountUSD:l,amountUSDOrigin:I,tokenARates:N,tokenBRates:D})}),S.value!=d("tab.all")){const m=[];u.forEach(l=>{var I;((I=l==null?void 0:l.labels)==null?void 0:I.indexOf(S.value))!==-1&&m.push(l)}),T.value?(v.value=m.sort((l,I)=>Number(I.amountUSDOrigin)-Number(l.amountUSDOrigin)),e.value=!1):(v.value=m.sort((l,I)=>Number(l.amountUSDOrigin)-Number(I.amountUSDOrigin)),e.value=!1)}else T.value?(v.value=u.sort((m,l)=>l.amountUSDOrigin-m.amountUSDOrigin),e.value=!1):(v.value=u.sort((m,l)=>m.amountUSDOrigin-l.amountUSDOrigin),e.value=!1)};V(()=>[h.value.myPositions,h.value.RATES],([p,u])=>{p&&u&&f()},{immediate:!0}),V(()=>[C.value.address,h.value.poolConfigList,h.value.poolsObj,r.value.chainName],([p,u,m,l])=>{var I,N,D;p&&u&&u.length>0&&l&&(l!=null&&l.toLowerCase().includes((I=u[0])==null?void 0:I.chain))&&!M(m)&&(l==="Aptos"?u.length===Object.values(m).length:(D=(N=Object.values(m)[0])==null?void 0:N.chain)!=null&&D.includes("sui"))&&U.getMyPositons(C.value.address,m,l)},{immediate:!0,deep:!0}),V(()=>S.value,p=>{f()}),V(()=>T.value,p=>{f()});const K=p=>{const u=[];B.value.forEach((m,l)=>{m==p?u[l]=S.value:u[l]=m}),B.value=u,S.value=p},z=Be(),P=c(()=>z),ae=c(()=>U),$e=async p=>{await z.getSourceGroups();const u=P.value.sourceGroups&&P.value.sourceGroups.length>0&&P.value.sourceGroups[0]&&P.value.sourceGroups[0].sources||[];for(let m=0;m<u.length;m++){const{pool_address:l,position_index:I}=JSON.parse(u[m].blockchainAddress);let N=!1,D;for(let W=0;W<p.length;W++){const{poolAddress:H,index:J}=p[W];l==H&&Number(J)==Number(I)&&(N=!0),D={pool_address:l,position_index:I}}N||await z.subscribePosition(D,"",!1,!1)}},we=async()=>{await z.getSourceGroups();const p=P.value.sourceGroups&&P.value.sourceGroups.length>0&&P.value.sourceGroups[0]&&P.value.sourceGroups[0].sources||[];for(let u=0;u<p.length;u++){const{pool_address:m,position_index:l}=JSON.parse(p[u].blockchainAddress),{name:I}=p[u],N={pool_address:m,position_index:l};await z.subscribePosition(N,I,!1,!1)}},ye=c(()=>ae.value.myPositionsLoading);return V(()=>ae.value.myPositions,(p,u)=>{w.value.hasNotifi&&(p&&p.length>0&&u&&u.length!==p.length?$e(p):p&&p.length==0&&!ye.value&&we())},{immediate:!0}),{changeSortLabel:K,label:b,labelList:B,labelValue:S,select:T,selectValue:Q,t:d,pools:h,store:r,wallet:C,list:v,clickRefresh:te,refresh:e,current:_,router:A,searchKey:R}}});const fe=e=>(ce("data-v-7d4e0853"),e=e(),ve(),e),Do={class:"position-title"},Ao=fe(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),jo=[Ao],Po={class:"position-tab"},Eo={class:"search-tab"},Fo={key:0,class:"positionNum"},Lo={class:"search-container"},Bo={class:"value"},To=fe(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Wo=[To],Vo={key:0,class:"select-item"},Go=["onClick"],qo={key:0,src:Ie,alt:""},zo={key:1,class:"fan-img",src:Ie,alt:""},Ko={key:0,class:"loading-global position-loading"},Ho={key:1,class:"position-list"},Jo={key:2,class:"no-data"},Zo={key:0,src:Te,alt:""},Mo={key:1,src:We,alt:""},Qo={key:3,class:"no-data"},Yo={key:0,src:Ve,alt:""},Xo={key:1,src:Ge,alt:""};function xo(e,d,_,A,R,j){const r=re("mail-outlined"),w=je,v=re("appstore-outlined"),U=De,h=pe,a=Oo,C=Ae;return n(),t("div",{class:L(e.list&&e.list.length===0&&e.wallet.connected||!e.wallet.connected?"position-center position-list-container":"position-list-container")},[s("div",Do,[s("div",null,o(e.$t("common.concentratedPools")),1),(n(),t("svg",{"aria-hidden":"true",class:L(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:d[0]||(d[0]=(...b)=>e.clickRefresh&&e.clickRefresh(...b))},jo,2))]),s("div",Po,[s("div",Eo,[y(U,{selectedKeys:e.current,"onUpdate:selectedKeys":d[2]||(d[2]=b=>e.current=b),mode:"horizontal"},{default:F(()=>[y(w,{key:"pools",onClick:d[1]||(d[1]=b=>e.router.push("/pools"))},{icon:F(()=>[y(r)]),default:F(()=>[Z(" "+o(e.$t("menu.pools")),1)]),_:1}),y(w,{key:"position"},{icon:F(()=>[y(v)]),default:F(()=>[Z(" "+o(e.$t("common.myPosition")),1),e.list.length>0?(n(),t("span",Fo," ("+o(e.list.length)+")",1)):g("",!0)]),_:1})]),_:1},8,["selectedKeys"])]),s("div",Lo,[e.store.theme=="default"?(n(),t("div",{key:0,class:"search-label",onClick:d[3]||(d[3]=le(b=>e.label=!e.label,["stop"]))},[s("span",null,o(e.$t("newAdd.label")),1),s("div",Bo,o(e.labelValue),1),(n(),t("svg",{"aria-hidden":"true",class:L(e.label?"show-icon icon":"icon")},Wo,2)),e.label?(n(),t("div",Vo,[(n(!0),t(G,null,q(e.labelList,(b,S)=>(n(),t("div",{key:S,class:"select-menu-item",onClick:B=>e.changeSortLabel(b)},o(b),9,Go))),128))])):g("",!0)])):g("",!0),s("div",{class:"search-select",onClick:d[4]||(d[4]=le(b=>e.select=!e.select,["stop"]))},[s("div",null,[Z(" TVL "),e.select?(n(),t("img",qo)):(n(),t("img",zo))])])])]),e.pools.myPositionsLoading&&e.wallet.connected?(n(),t("div",Ko,[y(h)])):g("",!0),e.list&&e.list.length>0&&e.wallet.connected&&!e.pools.myPositionsLoading?(n(),t("div",Ho,[(n(!0),t(G,null,q(e.list,(b,S)=>(n(),me(a,{key:S,"p-item":b},null,8,["p-item"]))),128))])):g("",!0),e.list&&e.list.length<=0&&!e.pools.myPositionsLoading&&e.wallet.connected?(n(),t("div",Jo,[e.store.theme=="default"?(n(),t("img",Zo)):(n(),t("img",Mo)),s("span",null,o(e.$t("common.noLiquidityPositions")),1)])):g("",!0),e.wallet.connected?g("",!0):(n(),t("div",Qo,[e.store.theme=="default"?(n(),t("img",Yo)):(n(),t("img",Xo)),y(C,{class:"connect-wallet",onClick:d[5]||(d[5]=b=>e.wallet.setIsShowWalletModal(!0))},{default:F(()=>[Z(o(e.$t("button.connectWallet")),1)]),_:1})]))],2)}const gn=oe(Co,[["render",xo],["__scopeId","data-v-7d4e0853"]]);export{gn as default};
