import{_ as Ue}from"./status-block.3094651e.js";import{g as x,e as Se,u as ue,r as Ne,j as Oe,a as w,c as Q,q as ee,d as h}from"./pool.982f9ef8.js";import{a as se,y as oe,l as v,e as ne,o as n,f as t,i as _,u as i,v as o,c as pe,w as P,h as s,x as I,A as T,P as Ae,b as ce,r as O,q,s as Ce,t as E,F as G,E as z,S as ve,p as ke,k as he,H as De,K as je,R as Le,Q as de,z as me,j as M,Y as Ee,B as Pe,Z as Fe}from"./entry.7346a543.js";/* empty css              */import{u as te,c as be,a as Te}from"./sha256.24785cd7.js";/* empty css              */import{i as X}from"./import-icon.de3e6c66.js";import{D as Be}from"./decimal.0bdeb344.js";import{_ as ge}from"./icon-arrow_2x.948aedb2.js";import{_ as Ie}from"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import{u as We}from"./notifi.28d2135e.js";import{_ as fe}from"./icon_on_2x.5e96733d.js";import{_ as Ve}from"./img-no-Positions_2x.eae67cf5.js";import{_ as qe}from"./img-no-Positions_2x.5770aedb.js";import{_ as Ge}from"./img-connect-wallet_2x.d65f886e.js";import{_ as ze}from"./img-connect-wallet_2x.9ccc180d.js";import"./useWhale.7838c24e.js";const Ke=se({props:{pItem:{type:Object,required:!0},currentStatus:{type:String,required:!0},rewarderInfo:{type:Number,required:!0},aprAmount:{type:Number,required:!0}},setup(){const{t:e}=oe(),m=te(),R=v(()=>m),D=v(()=>R.value.chainName),U=v(()=>be[D.value]),j=v(()=>R.value.currentExplorer);return{getExplorerUrl:x,store:R,config:U,t:e,currentExplorer:j}}});const He={key:0,class:"owner-addres"},Je=["href"],Ze=["href"],Me={class:"fee-tier"};function Qe(e,m,R,D,U,j){const d=Ue,y=Ae;return n(),t("div",{class:T(["position-status",`position-status-${e.pItem.currentStatus.toLowerCase()}`])},[_(d,{class:"status-block","current-status":e.pItem.currentStatus||"","is-pause":e.pItem.is_pause,"apr-amount":e.aprAmount,"block-name":"position"},null,8,["current-status","is-pause","apr-amount"]),e.pItem.tokenName?(n(),t("div",He,[e.pItem.tokenName.length<=24?(n(),t("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:i(x))(e.currentExplorer,"nftAddress",e.pItem.nftHash),target:"_blank"},o(e.pItem.tokenName.split("|")[1]),9,Je)):(n(),pe(y,{key:1,placement:"bottom","arrow-point-at-center":""},{title:P(()=>[s("span",null,o(e.pItem.tokenName),1)]),default:P(()=>[s("a",{target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:i(x))(e.currentExplorer,"nftAddress",e.pItem.nftHash)},o(e.pItem.tokenName.substr(0,4))+" ... "+o(e.pItem.tokenName.substr(e.pItem.tokenName.length-4,4)),9,Ze)]),_:1}))])):I("",!0),s("div",Me,o(e.$t("common.fee"))+" "+o(e.pItem.fee*100)+"%",1)],2)}const Ye=ne(Ke,[["render",Qe],["__scopeId","data-v-71f635ca"]]),Xe=se({props:{pItem:{type:Object,required:!0}},setup(e){const{t:m}=oe(),R=ce(),D=te(),U=v(()=>D);v(()=>U.value.chainName?Se(U.value.chainName):{});const j=ue(),d=v(()=>j),y=()=>{U.value.chainName==="Aptos"?R.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):R.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`)},c=v(()=>d.value.allTokenObj&&e.pItem.token_a.address&&d.value.allTokenObj[e.pItem.token_a.address]&&d.value.allTokenObj[e.pItem.token_a.address].logo_url),S=v(()=>d.value.allTokenObj&&e.pItem.token_b.address&&d.value.allTokenObj[e.pItem.token_b.address]&&d.value.allTokenObj[e.pItem.token_b.address].logo_url),k=v(()=>d.value.feeOwedObj[e.pItem.tokenName]&&d.value.feeOwedObj[e.pItem.tokenName].feeOwed),a=v(()=>d.value.feeOwedObj[e.pItem.tokenName]&&d.value.feeOwedObj[e.pItem.tokenName].feesResult),A=v(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarder),b=v(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarderView),$=v(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr);console.log($,"===>pendingRewarderArr");const B=O(0),F=O();q(()=>d.value.RATES,f=>{f&&(F.value=f)},{immediate:!0});const Y=f=>{var H;return(f==null?void 0:f.logoURI)||(f==null?void 0:f.logo_url)||((H=d.value.tokensObj[f==null?void 0:f.address])==null?void 0:H.logo_url)||(U.value.theme==="default"?X("/image/coins/unknown.png"):X("/image/coins/sui-unknown.png"))};return{tokensWarningObj:v(()=>d.value.tokensWarningObj),showNum:Ne,fromCoinUrl:c,toCoinUrl:S,decimalFormat:Oe,clickDetails:y,t:m,addCommom:w,importIcon:X,router:R,store:U,pendingRewarder:A,pendingFees:k,pendingRewarderArr:$,pendingFeesArr:a,checkNullObj:Q,fixD:ee,decimalUi:h,pendingRewarderView:b,aprAmount:B,getCoinIcon:Y,Decimal:Be}}});const $e=e=>(ke("data-v-e018df10"),e=e(),he(),e),xe={class:"position-item"},es={class:"card-content"},ss={class:"left"},os={class:"top card-header"},ns={class:"token-item"},ts={class:"item"},as={key:0,class:"token-warning"},is={class:"item"},ls={key:0,class:"token-warning"},rs={class:"min-and-max"},ds={class:"text"},ms={key:0,src:ge,alt:""},us={key:1,src:Ie,alt:""},ps={class:"text"},cs={class:"bottom"},vs={class:"info-block-container"},ks={class:"leabl"},hs={class:"text"},bs={key:0,class:"hover-rewarder"},gs={class:"rewarder-info"},Is={class:"left-rewarder"},fs={alt:""},$s={class:"right-rewarder"},ws={class:"amount"},ys={key:0,class:"amount-usd"},_s={key:1,class:"amount-usd"},Rs={class:"rewarder-info"},Us={class:"left-rewarder"},Ss={alt:""},Ns={class:"right-rewarder"},Os={class:"amount"},As={key:0,class:"amount-usd"},Cs={key:1,class:"amount-usd"},Ds={class:"leabl"},js={key:0,class:"text"},Ls={key:1,class:"text"},Es={key:2,class:"text"},Ps={key:3,class:"hover-rewarder"},Fs={class:"left-rewarder"},Ts={alt:""},Bs={class:"right-rewarder"},Ws={class:"amount"},Vs={class:"amount-usd"},qs={class:"leabl"},Gs={key:0,class:"text"},zs={key:1,class:"text"},Ks={key:2,class:"hover-rewarder"},Hs={class:"left-rewarder"},Js={alt:""},Zs={class:"right-rewarder"},Ms={class:"amount"},Qs={class:"amount-usd"},Ys=$e(()=>s("div",{class:"more-img"},null,-1)),Xs={class:"min-and-max"},xs={class:"text"},eo={key:0,src:ge,alt:""},so={key:1,src:Ie,alt:""},oo={class:"text"},no={class:"info-block-container"},to={class:"left"},ao={class:"info-block"},io={class:"leabl"},lo={class:"text"},ro={class:"info-block cursor-block"},mo={class:"leabl"},uo={key:0,class:"text"},po={key:1,class:"text"},co={key:2,class:"hover-rewarder"},vo={class:"left-rewarder"},ko={alt:""},ho={class:"right-rewarder"},bo={class:"amount"},go={class:"amount-usd"},Io={key:0,class:"info-block cursor-block"},fo={class:"leabl"},$o={key:0,class:"text"},wo={key:1,class:"text"},yo={key:2,class:"hover-rewarder"},_o={class:"left-rewarder"},Ro={alt:""},Uo={class:"right-rewarder"},So={class:"amount"},No={class:"amount-usd"},Oo=$e(()=>s("div",{class:"right"},[s("div",{class:"more-img"})],-1));function Ao(e,m,R,D,U,j){var S,k;const d=Ye,y=ve,c=Ce("image");return n(),t("div",xe,[s("div",es,[s("div",ss,[_(d,{"p-item":e.pItem,"current-status":((S=e.pItem)==null?void 0:S.currentStatus)||"","rewarder-info":e.pendingRewarder,"apr-amount":e.aprAmount},null,8,["p-item","current-status","rewarder-info","apr-amount"])]),s("div",{class:"right",onClick:m[0]||(m[0]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",os,[s("div",ns,[s("div",ts,[E(s("img",null,null,512),[[c,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensWarningObj&&!e.tokensWarningObj[e.pItem.token_b.address]:e.tokensWarningObj&&!e.tokensWarningObj[e.pItem.token_a.address])?(n(),t("div",as)):I("",!0),s("div",null,[s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1),s("p",null,o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" "+o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)])]),s("div",is,[E(s("img",null,null,512),[[c,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensWarningObj&&!e.tokensWarningObj[e.pItem.token_a.address]:e.tokensWarningObj&&!e.tokensWarningObj[e.pItem.token_b.address])?(n(),t("div",ls)):I("",!0),s("div",null,[s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1),s("p",null,o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" "+o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)])])]),s("div",rs,[s("div",ds,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:i(w))(("decimalUi"in e?e.decimalUi:i(h))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:i(w))(("decimalUi"in e?e.decimalUi:i(h))(e.pItem.minPrice,6))),1),e.store.theme=="default"?(n(),t("img",ms)):(n(),t("img",us)),s("div",ps,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:i(w))(("decimalUi"in e?e.decimalUi:i(h))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:i(w))(("decimalUi"in e?e.decimalUi:i(h))(e.pItem.maxPrice,6)))+" "+o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)])]),s("div",cs,[s("div",vs,[s("div",{class:T(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[s("div",ks,o(e.$t("common.liquidity")),1),s("div",hs," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:i(w))(e.pItem.amountUSD,2)),1),e.pItem.amountUSD>0?(n(),t("div",bs,[s("div",gs,[s("div",Is,[E(s("img",fs,null,512),[[c,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",$s,[s("div",ws,o(e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(h))(e.pItem.amountB,e.pItem.token_b.decimals):("decimalUi"in e?e.decimalUi:i(h))(e.pItem.amountA,e.pItem.token_a.decimals)),1),e.pItem.needReverse?(n(),t("div",_s,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("fixD"in e?e.fixD:i(ee))(e.pItem.tokenBRates,2):"<$0.01"),1)):(n(),t("div",ys,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("fixD"in e?e.fixD:i(ee))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",Rs,[s("div",Us,[E(s("img",Ss,null,512),[[c,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",Ns,[s("div",Os,o(e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(h))(e.pItem.amountA,e.pItem.token_a.decimals):("decimalUi"in e?e.decimalUi:i(h))(e.pItem.amountB,e.pItem.token_b.decimals)),1),e.pItem.needReverse?(n(),t("div",Cs,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("decimalUi"in e?e.decimalUi:i(h))(e.pItem.tokenARates,2):"<$0.01"),1)):(n(),t("div",As,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("decimalUi"in e?e.decimalUi:i(h))(e.pItem.tokenBRates,2):"<$0.01"),1))])])])):I("",!0)],2),s("div",{class:T(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[s("div",Ds,o(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(n(),t("div",js," $ -- ")):isNaN(e.pendingFees)?(n(),t("div",Es,[_(y,{size:"small"})])):(n(),t("div",Ls,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:i(w))(e.pendingFees,2)),1)),e.pendingFees>0?(n(),t("div",Ps,[(n(!0),t(G,null,z(e.pendingFeesArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",Fs,[E(s("img",Ts,null,512),[[c,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",Bs,[s("div",Ws,o(Number(a.amount)==0?0:Number(a.amount)>1e-6?("addCommom"in e?e.addCommom:i(w))(("decimalUi"in e?e.decimalUi:i(h))(a.amount,a.decimals),a.decimals):"<0.000001"),1),s("div",Vs,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:i(w))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):I("",!0)],2),e.pItem.is_display_rewarder&&!("checkNullObj"in e?e.checkNullObj:i(Q))((k=e.pItem)==null?void 0:k.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(n(),t("div",{key:0,class:T(["info-block cursor-block",e.pendingRewarder==0?"block-none":""])},[s("div",qs,o(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(n(),t("div",Gs," $"+o(e.pendingRewarder>0&&e.pendingRewarderView>0?e.pendingRewarderView:e.pendingRewarder>0&&e.pendingRewarderView<=0?"<0.01":0),1)):(n(),t("div",zs,[_(y,{size:"small"})])),e.pendingRewarder>0?(n(),t("div",Ks,[(n(!0),t(G,null,z(e.pendingRewarderArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",Hs,[E(s("img",Js,null,512),[[c,a.logoURI]]),s("span",null,o(a.symbol),1)]),s("div",Zs,[s("div",Ms,o(("decimalUi"in e?e.decimalUi:i(h))(a.amount,a.decimals)),1),s("div",Qs,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:i(w))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):I("",!0)],2)):I("",!0),Ys])])])]),s("div",{class:"h5-bottom",onClick:m[1]||(m[1]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",Xs,[s("div",xs,o(e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(h))(1/e.pItem.minPrice,6):("decimalUi"in e?e.decimalUi:i(h))(e.pItem.minPrice,6)),1),e.store.theme=="default"?(n(),t("img",eo)):(n(),t("img",so)),s("div",oo,o(e.pItem.maxPrice.indexOf("+")>-1?"∞":e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(h))(1/e.pItem.maxPrice,6):("decimalUi"in e?e.decimalUi:i(h))(e.pItem.maxPrice,6))+" "+o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",no,[s("div",to,[s("div",ao,[s("div",io,o(e.$t("common.liquidity")),1),s("div",lo," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:i(w))(e.pItem.amountUSD,2)),1)]),s("div",ro,[s("div",mo,o(e.$t("newAdd.pendingFees")),1),isNaN(e.pendingFees)?(n(),t("div",po,[_(y,{size:"small"})])):(n(),t("div",uo,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:i(w))(e.pendingFees,2)),1)),e.pendingFees>0?(n(),t("div",co,[(n(!0),t(G,null,z(e.pendingFeesArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",vo,[E(s("img",ko,null,512),[[c,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",ho,[s("div",bo,o(Number(a.amount)==0?0:Number(a.amount)>1e-6?("addCommom"in e?e.addCommom:i(w))(("decimalUi"in e?e.decimalUi:i(h))(a.amount,a.decimals),a.decimals):"<0.000001"),1),s("div",go,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:i(w))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):I("",!0)]),e.pItem.is_display_rewarder&&!("checkNullObj"in e?e.checkNullObj:i(Q))(e.pItem.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(n(),t("div",Io,[s("div",fo,o(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(n(),t("div",$o," $"+o(e.pendingRewarder>0?("decimalUi"in e?e.decimalUi:i(h))(e.pendingRewarder,2):0),1)):(n(),t("div",wo,[_(y,{size:"small"})])),e.pendingRewarder>0?(n(),t("div",yo,[(n(!0),t(G,null,z(e.pendingRewarderArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",_o,[E(s("img",Ro,null,512),[[c,a.logoURI]]),s("span",null,o(a.symbol),1)]),s("div",Uo,[s("div",So,o(a.amount),1),s("div",No,"$"+o(("decimalUi"in e?e.decimalUi:i(h))(a.amountUSD,2)),1)])]))),128))])):I("",!0)])):I("",!0)]),Oo])])])}const Co=ne(Xe,[["render",Ao],["__scopeId","data-v-e018df10"]]),Do=se({setup(){const e=O(!1),{t:m}=oe(),R=O(["position"]),D=ce(),U=O(""),j=te(),d=v(()=>j),y=v(()=>d.value.chainName?be[d.value.chainName]:{});let c=O([]);const S=ue(),k=v(()=>S),a=Te(),A=v(()=>a),b=O(!1),$=O(m("tab.all")),B=O([m("tab.layerZero"),m("tab.wormhole"),m("tab.celer")]),F=O(!0),Y=O("TVL"),ae=()=>{e.value=!0,c.value=[],A.value.address&&S.getMyPositons(A.value.address,k.value.poolsObj,d.value.chainName),setTimeout(()=>{e.value=!1},1e3)};De(()=>{c.value=[],document.addEventListener("click",()=>{b.value=!1}),S.setMyPositionsLoading(!0)}),je(()=>{document.addEventListener("click",()=>{b.value=!1})}),Le(()=>{A.value.connected||(c.value=[])});const f=p=>{e.value=!0;let u=[];if(k.value.myPositions.forEach(l=>{var W,V,J,Z,le,re;let r,g;const N=l.amountA*((W=k.value.RATES[l.token_a.address])==null?void 0:W.price),C=l.amountB*((V=k.value.RATES[l.token_b.address])==null?void 0:V.price);console.log("0330###updateLpList####ele.amountA##",l.amountA),console.log("0330###updateLpList####ele.amountB##",l.amountB),console.log("0330###updateLpList####ele.token_a.address##",l.token_a.address),console.log("0330###updateLpList####ele.token_b.address##",l.token_b.address),console.log("0330###updateLpList####pools.value.RATES[ele.token_a.address]?.price##",(J=k.value.RATES[l.token_a.address])==null?void 0:J.price),console.log("0330###updateLpList####pools.value.RATES[ele.token_b.address]?.price##",(Z=k.value.RATES[l.token_b.address])==null?void 0:Z.price),(le=k.value.RATES[l.token_a.address])!=null&&le.price&&((re=k.value.RATES[l.token_b.address])!=null&&re.price)?(r=N+C,g=N+C):(r=" --",g=0),u.push({...l,amountUSD:r,amountUSDOrigin:g,tokenARates:N,tokenBRates:C})}),console.log("0512###updateLpList###labelValue.value###",$.value),console.log("0512###updateLpList###newResult###",u),$.value!=m("tab.all")){const l=[];u.forEach(r=>{var g;((g=r==null?void 0:r.labels)==null?void 0:g.indexOf($.value))!==-1&&l.push(r)}),F.value?(c.value=l.sort((r,g)=>Number(g.amountUSDOrigin)-Number(r.amountUSDOrigin)),e.value=!1):(c.value=l.sort((r,g)=>Number(r.amountUSDOrigin)-Number(g.amountUSDOrigin)),e.value=!1)}else console.log("0507###updateLpList###select.value###",F.value),console.log("0507###updateLpList###newResult###",u),F.value?(c.value=u.sort((l,r)=>r.amountUSDOrigin-l.amountUSDOrigin),e.value=!1):(c.value=u.sort((l,r)=>l.amountUSDOrigin-r.amountUSDOrigin),e.value=!1);console.log(c.value,"list.value========>")};q(()=>[k.value.myPositions,k.value.RATES],([p,u])=>{p&&u&&f()},{immediate:!0}),q(()=>[A.value.address,k.value.poolConfigList,k.value.poolsObj,d.value.chainName],([p,u,l,r])=>{var g,N,C;p&&u&&u.length>0&&r&&(r!=null&&r.toLowerCase().includes((g=u[0])==null?void 0:g.chain))&&!Q(l)&&(r==="Aptos"?u.length===Object.values(l).length:(C=(N=Object.values(l)[0])==null?void 0:N.chain)!=null&&C.includes("sui"))&&S.getMyPositons(A.value.address,l,r)},{immediate:!0,deep:!0}),q(()=>$.value,p=>{f()}),q(()=>F.value,p=>{f()});const H=p=>{const u=[];B.value.forEach((l,r)=>{l==p?u[r]=$.value:u[r]=l}),B.value=u,$.value=p},K=We(),L=v(()=>K),ie=v(()=>S),ye=async p=>{console.log("执行了"),await K.getSourceGroups();const u=L.value.sourceGroups&&L.value.sourceGroups.length>0&&L.value.sourceGroups[0]&&L.value.sourceGroups[0].sources||[];let l;for(let r=0;r<u.length;r++){const{pool_address:g,position_index:N}=JSON.parse(u[r].blockchainAddress);let C=!1,W;for(let V=0;V<p.length;V++){const{poolAddress:J,index:Z}=p[V];g==J&&Number(Z)==Number(N)&&(C=!0),W={pool_address:g,position_index:N},console.log(l,"====>hasPositionInfo"),console.log(W,"","取消订阅的仓位")}C||await K.subscribePosition(W,"",!1,!1)}},_e=async()=>{await K.getSourceGroups(),console.log("全部取消");const p=L.value.sourceGroups&&L.value.sourceGroups.length>0&&L.value.sourceGroups[0]&&L.value.sourceGroups[0].sources||[];for(let u=0;u<p.length;u++){const{pool_address:l,position_index:r}=JSON.parse(p[u].blockchainAddress),{name:g}=p[u],N={pool_address:l,position_index:r};await K.subscribePosition(N,g,!1,!1)}},Re=v(()=>ie.value.myPositionsLoading);return q(()=>ie.value.myPositions,(p,u)=>{console.log(p,u,"===>newMyPositions, oldMyposition"),y.value.hasNotifi&&(p&&p.length>0&&u&&u.length!==p.length?ye(p):p&&p.length==0&&!Re.value&&_e())},{immediate:!0}),{changeSortLabel:H,label:b,labelList:B,labelValue:$,select:F,selectValue:Y,t:m,pools:k,store:d,wallet:A,list:c,clickRefresh:ae,refresh:e,current:R,router:D,searchKey:U}}});const we=e=>(ke("data-v-3ec207b5"),e=e(),he(),e),jo={class:"position-title"},Lo=we(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Eo=[Lo],Po={class:"position-tab"},Fo={class:"search-tab"},To={key:0,class:"positionNum"},Bo={class:"search-container"},Wo={class:"value"},Vo=we(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),qo=[Vo],Go={key:0,class:"select-item"},zo=["onClick"],Ko={key:0,src:fe,alt:""},Ho={key:1,class:"fan-img",src:fe,alt:""},Jo={key:0,class:"loading-global position-loading"},Zo={key:1,class:"position-list"},Mo={key:2,class:"no-data"},Qo={key:0,src:Ve,alt:""},Yo={key:1,src:qe,alt:""},Xo={key:3,class:"no-data"},xo={key:0,src:Ge,alt:""},en={key:1,src:ze,alt:""};function sn(e,m,R,D,U,j){const d=de("mail-outlined"),y=Fe,c=de("appstore-outlined"),S=Ee,k=ve,a=Co,A=Pe;return n(),t("div",{class:T(e.list&&e.list.length===0&&e.wallet.connected||!e.wallet.connected?"position-center position-list-container":"position-list-container")},[s("div",jo,[s("div",null,o(e.$t("common.concentratedPools")),1),(n(),t("svg",{"aria-hidden":"true",class:T(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:m[0]||(m[0]=(...b)=>e.clickRefresh&&e.clickRefresh(...b))},Eo,2))]),s("div",Po,[s("div",Fo,[_(S,{selectedKeys:e.current,"onUpdate:selectedKeys":m[2]||(m[2]=b=>e.current=b),mode:"horizontal"},{default:P(()=>[_(y,{key:"pools",onClick:m[1]||(m[1]=b=>e.router.push("/pools"))},{icon:P(()=>[_(d)]),default:P(()=>[M(" "+o(e.$t("menu.pools")),1)]),_:1}),_(y,{key:"position"},{icon:P(()=>[_(c)]),default:P(()=>[M(" "+o(e.$t("common.myPosition")),1),e.list.length>0?(n(),t("span",To," ("+o(e.list.length)+")",1)):I("",!0)]),_:1})]),_:1},8,["selectedKeys"])]),s("div",Bo,[e.store.theme=="default"?(n(),t("div",{key:0,class:"search-label",onClick:m[3]||(m[3]=me(b=>e.label=!e.label,["stop"]))},[s("span",null,o(e.$t("newAdd.label")),1),s("div",Wo,o(e.labelValue),1),(n(),t("svg",{"aria-hidden":"true",class:T(e.label?"show-icon icon":"icon")},qo,2)),e.label?(n(),t("div",Go,[(n(!0),t(G,null,z(e.labelList,(b,$)=>(n(),t("div",{key:$,class:"select-menu-item",onClick:B=>e.changeSortLabel(b)},o(b),9,zo))),128))])):I("",!0)])):I("",!0),s("div",{class:"search-select",onClick:m[4]||(m[4]=me(b=>e.select=!e.select,["stop"]))},[s("div",null,[M(" TVL "),e.select?(n(),t("img",Ko)):(n(),t("img",Ho))])])])]),e.pools.myPositionsLoading&&e.wallet.connected?(n(),t("div",Jo,[_(k)])):I("",!0),e.list&&e.list.length>0&&e.wallet.connected&&!e.pools.myPositionsLoading?(n(),t("div",Zo,[(n(!0),t(G,null,z(e.list,(b,$)=>(n(),pe(a,{key:$,"p-item":b},null,8,["p-item"]))),128))])):I("",!0),e.list&&e.list.length<=0&&!e.pools.myPositionsLoading&&e.wallet.connected?(n(),t("div",Mo,[e.store.theme=="default"?(n(),t("img",Qo)):(n(),t("img",Yo)),s("span",null,o(e.$t("common.noLiquidityPositions")),1)])):I("",!0),e.wallet.connected?I("",!0):(n(),t("div",Xo,[e.store.theme=="default"?(n(),t("img",xo)):(n(),t("img",en)),_(A,{class:"connect-wallet",onClick:m[5]||(m[5]=b=>e.wallet.setIsShowWalletModal(!0))},{default:P(()=>[M(o(e.$t("button.connectWallet")),1)]),_:1})]))],2)}const $n=ne(Do,[["render",sn],["__scopeId","data-v-3ec207b5"]]);export{$n as default};
