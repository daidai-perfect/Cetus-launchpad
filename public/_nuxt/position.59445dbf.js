import{_ as _e}from"./status-block.8dd6f578.js";import{a as se,x,b as Re,u as de,m as Ue,e as Ne,f as y,c as Z,l as ee,d as v}from"./pool.2587b8e2.js";import{a as oe,l as ne,m as c,e as te,o as n,f as t,i as f,u as i,v as o,c as me,w as L,h as s,x as $,z as T,L as Se,b as ue,r as O,D as q,q as Oe,t as F,F as z,s as K,J as pe,p as ce,k as ve,y as Ce,C as De,N as Ae,M as re,K as le,j as M,U as je,B as Pe,V as Ee}from"./entry.a4db0d61.js";/* empty css              */import{c as ke,u as Fe}from"./index.6288ac24.js";import{_ as Le}from"./token-warning.aafe8d13.js";/* empty css              */import{i as Y}from"./import-icon.de3e6c66.js";import"./decimal.a2826370.js";import{D as Te}from"./decimal.765d8738.js";import{_ as he}from"./icon-arrow_2x.948aedb2.js";import{_ as be}from"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import{u as Be}from"./notifi.60adf2b1.js";import{_ as Ie}from"./icon_on_2x.5e96733d.js";import{_ as Ve}from"./img-no-Positions_2x.03349b71.js";import{_ as Ge}from"./img-no-Positions_2x.dac445b1.js";import{_ as qe}from"./img-connect-wallet_2x.eb25fa89.js";import{_ as ze}from"./img-connect-wallet_2x.de01d29d.js";import"./useWhale.9b99d963.js";const Ke=oe({props:{pItem:{type:Object,required:!0},currentStatus:{type:String,required:!0},rewarderInfo:{type:Number,required:!0},aprAmount:{type:Number,required:!0}},setup(){const{t:e}=ne(),d=se(),_=c(()=>d),D=c(()=>_.value.chainName),R=c(()=>ke[D.value]),A=c(()=>_.value.currentExplorer);return{getExplorerUrl:x,store:_,config:R,t:e,currentExplorer:A}}});const We={key:0,class:"owner-addres"},Je=["href"],He=["href"],Me={class:"fee-tier"};function Ze(e,d,_,D,R,A){const r=_e,N=Se;return n(),t("div",{class:T(["position-status",`position-status-${e.pItem.currentStatus.toLowerCase()}`])},[f(r,{class:"status-block","current-status":e.pItem.currentStatus||"","is-pause":e.pItem.is_pause,"apr-amount":e.aprAmount,"block-name":"position"},null,8,["current-status","is-pause","apr-amount"]),e.pItem.tokenName?(n(),t("div",We,[e.pItem.tokenName.length<=24?(n(),t("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:i(x))(e.currentExplorer,"nftAddress",e.pItem.nftHash),target:"_blank"},o(e.pItem.tokenName.split("|")[1]),9,Je)):(n(),me(N,{key:1,placement:"bottom","arrow-point-at-center":""},{title:L(()=>[s("span",null,o(e.pItem.tokenName),1)]),default:L(()=>[s("a",{target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:i(x))(e.currentExplorer,"nftAddress",e.pItem.nftHash)},o(e.pItem.tokenName.substr(0,4))+" ... "+o(e.pItem.tokenName.substr(e.pItem.tokenName.length-4,4)),9,He)]),_:1}))])):$("",!0),s("div",Me,o(e.$t("common.fee"))+" "+o(e.pItem.fee*100)+"%",1)],2)}const Qe=te(Ke,[["render",Ze],["__scopeId","data-v-71f635ca"]]),Xe=oe({props:{pItem:{type:Object,required:!0}},setup(e){const{t:d}=ne(),_=ue(),D=se(),R=c(()=>D);c(()=>R.value.chainName?Re(R.value.chainName):{});const A=de(),r=c(()=>A),N=()=>{R.value.chainName==="Aptos"?_.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):_.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`)},g=c(()=>r.value.allTokenObj&&e.pItem.token_a.address&&r.value.allTokenObj[e.pItem.token_a.address]&&r.value.allTokenObj[e.pItem.token_a.address].logo_url),k=c(()=>r.value.allTokenObj&&e.pItem.token_b.address&&r.value.allTokenObj[e.pItem.token_b.address]&&r.value.allTokenObj[e.pItem.token_b.address].logo_url),h=c(()=>r.value.feeOwedObj[e.pItem.tokenName]&&r.value.feeOwedObj[e.pItem.tokenName].feeOwed),j=c(()=>r.value.feeOwedObj[e.pItem.tokenName]&&r.value.feeOwedObj[e.pItem.tokenName].feesResult),a=c(()=>r.value.rewarderObj[e.pItem.tokenName]&&r.value.rewarderObj[e.pItem.tokenName].pendingRewarder),b=c(()=>r.value.rewarderObj[e.pItem.tokenName]&&r.value.rewarderObj[e.pItem.tokenName].pendingRewarderView),U=c(()=>r.value.rewarderObj[e.pItem.tokenName]&&r.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),B=O(0),V=O();q(()=>r.value.RATES,w=>{w&&(V.value=w)},{immediate:!0});const Q=w=>{var P;return(w==null?void 0:w.logoURI)||(w==null?void 0:w.logo_url)||((P=r.value.tokensObj[w==null?void 0:w.address])==null?void 0:P.logo_url)||(R.value.theme==="default"?Y("/image/coins/unknown.png"):Y("/image/coins/sui-unknown.png"))},X=c(()=>r.value.tokensWarningObj),W=c(()=>r.value.tokensObj);return{tokensWarningObj:X,showNum:Ue,fromCoinUrl:g,toCoinUrl:k,decimalFormat:Ne,clickDetails:N,t:d,addCommom:y,importIcon:Y,router:_,store:R,pendingRewarder:a,pendingFees:h,pendingRewarderArr:U,pendingFeesArr:j,checkNullObj:Z,fixD:ee,decimalUi:v,pendingRewarderView:b,aprAmount:B,getCoinIcon:Q,Decimal:Te,tokensObj:W}}});const ge=e=>(ce("data-v-0eaf1b52"),e=e(),ve(),e),Ye={class:"position-item"},xe={class:"card-content"},es={class:"left"},ss={class:"top card-header"},os={class:"token-item"},ns={class:"item"},ts={class:"item"},as={class:"min-and-max"},is={class:"text"},rs={key:0,src:he,alt:""},ls={key:1,src:be,alt:""},ds={class:"text"},ms={class:"bottom"},us={class:"info-block-container"},ps={class:"leabl"},cs={class:"text"},vs={key:0,class:"hover-rewarder"},ks={class:"rewarder-info"},hs={class:"left-rewarder"},bs={alt:""},Is={class:"right-rewarder"},gs={class:"amount"},fs={key:0,class:"amount-usd"},$s={key:1,class:"amount-usd"},ws={class:"rewarder-info"},ys={class:"left-rewarder"},_s={alt:""},Rs={class:"right-rewarder"},Us={class:"amount"},Ns={key:0,class:"amount-usd"},Ss={key:1,class:"amount-usd"},Os={class:"leabl"},Cs={key:0,class:"text"},Ds={key:1,class:"text"},As={key:2,class:"text"},js={key:3,class:"hover-rewarder"},Ps={class:"left-rewarder"},Es={alt:""},Fs={class:"right-rewarder"},Ls={class:"amount"},Ts={class:"amount-usd"},Bs={class:"leabl"},Vs={key:0,class:"text"},Gs={key:1,class:"text"},qs={key:2,class:"hover-rewarder"},zs={class:"left-rewarder"},Ks={alt:""},Ws={class:"right-rewarder"},Js={class:"amount"},Hs={class:"amount-usd"},Ms=ge(()=>s("div",{class:"more-img"},null,-1)),Zs={class:"min-and-max"},Qs={class:"text"},Xs={key:0,src:he,alt:""},Ys={key:1,src:be,alt:""},xs={class:"text"},eo={class:"info-block-container"},so={class:"left"},oo={class:"info-block"},no={class:"leabl"},to={class:"text"},ao={class:"info-block cursor-block"},io={class:"leabl"},ro={key:0,class:"text"},lo={key:1,class:"text"},mo={key:2,class:"hover-rewarder"},uo={class:"left-rewarder"},po={alt:""},co={class:"right-rewarder"},vo={class:"amount"},ko={class:"amount-usd"},ho={key:0,class:"info-block cursor-block"},bo={class:"leabl"},Io={key:0,class:"text"},go={key:1,class:"text"},fo={key:2,class:"hover-rewarder"},$o={class:"left-rewarder"},wo={alt:""},yo={class:"right-rewarder"},_o={class:"amount"},Ro={class:"amount-usd"},Uo=ge(()=>s("div",{class:"right"},[s("div",{class:"more-img"})],-1));function No(e,d,_,D,R,A){var h,j;const r=Qe,N=Le,g=pe,k=Oe("image");return n(),t("div",Ye,[s("div",xe,[s("div",es,[f(r,{"p-item":e.pItem,"current-status":((h=e.pItem)==null?void 0:h.currentStatus)||"","rewarder-info":e.pendingRewarder,"apr-amount":e.aprAmount},null,8,["p-item","current-status","rewarder-info","apr-amount"])]),s("div",{class:"right",onClick:d[0]||(d[0]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",ss,[s("div",os,[s("div",ns,[F(s("img",null,null,512),[[k,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),f(N,{address:e.pItem.needReverse?e.pItem.token_b.address:e.pItem.token_a.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),s("div",null,[s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1),s("p",null,o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" "+o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)])]),s("div",ts,[F(s("img",null,null,512),[[k,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),f(N,{address:e.pItem.needReverse?e.pItem.token_a.address:e.pItem.token_b.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),s("div",null,[s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1),s("p",null,o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" "+o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)])])]),s("div",as,[s("div",is,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:i(y))(("decimalUi"in e?e.decimalUi:i(v))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:i(y))(("decimalUi"in e?e.decimalUi:i(v))(e.pItem.minPrice,6))),1),e.store.theme=="default"?(n(),t("img",rs)):(n(),t("img",ls)),s("div",ds,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:i(y))(("decimalUi"in e?e.decimalUi:i(v))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:i(y))(("decimalUi"in e?e.decimalUi:i(v))(e.pItem.maxPrice,6)))+" "+o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)])]),s("div",ms,[s("div",us,[s("div",{class:T(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[s("div",ps,o(e.$t("common.liquidity")),1),s("div",cs," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:i(y))(e.pItem.amountUSD,2)),1),e.pItem.amountUSD>0?(n(),t("div",vs,[s("div",ks,[s("div",hs,[F(s("img",bs,null,512),[[k,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",Is,[s("div",gs,o(e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(v))(e.pItem.amountB,e.pItem.token_b.decimals):("decimalUi"in e?e.decimalUi:i(v))(e.pItem.amountA,e.pItem.token_a.decimals)),1),e.pItem.needReverse?(n(),t("div",$s,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("fixD"in e?e.fixD:i(ee))(e.pItem.tokenBRates,2):"<$0.01"),1)):(n(),t("div",fs,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("fixD"in e?e.fixD:i(ee))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",ws,[s("div",ys,[F(s("img",_s,null,512),[[k,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",Rs,[s("div",Us,o(e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(v))(e.pItem.amountA,e.pItem.token_a.decimals):("decimalUi"in e?e.decimalUi:i(v))(e.pItem.amountB,e.pItem.token_b.decimals)),1),e.pItem.needReverse?(n(),t("div",Ss,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("decimalUi"in e?e.decimalUi:i(v))(e.pItem.tokenARates,2):"<$0.01"),1)):(n(),t("div",Ns,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("decimalUi"in e?e.decimalUi:i(v))(e.pItem.tokenBRates,2):"<$0.01"),1))])])])):$("",!0)],2),s("div",{class:T(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[s("div",Os,o(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(n(),t("div",Cs," $ -- ")):isNaN(e.pendingFees)?(n(),t("div",As,[f(g,{size:"small"})])):(n(),t("div",Ds,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:i(y))(e.pendingFees,2)),1)),e.pendingFees>0?(n(),t("div",js,[(n(!0),t(z,null,K(e.pendingFeesArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",Ps,[F(s("img",Es,null,512),[[k,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",Fs,[s("div",Ls,o(Number(a.amount)==0?0:Number(a.amount)>1e-6?("addCommom"in e?e.addCommom:i(y))(("decimalUi"in e?e.decimalUi:i(v))(a.amount,a.decimals),a.decimals):"<0.000001"),1),s("div",Ts,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:i(y))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):$("",!0)],2),e.pItem.is_display_rewarder&&!("checkNullObj"in e?e.checkNullObj:i(Z))((j=e.pItem)==null?void 0:j.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(n(),t("div",{key:0,class:T(["info-block cursor-block",e.pendingRewarder==0?"block-none":""])},[s("div",Bs,o(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(n(),t("div",Vs," $"+o(e.pendingRewarder>0&&e.pendingRewarderView>0?e.pendingRewarderView:e.pendingRewarder>0&&e.pendingRewarderView<=0?"<0.01":0),1)):(n(),t("div",Gs,[f(g,{size:"small"})])),e.pendingRewarder>0?(n(),t("div",qs,[(n(!0),t(z,null,K(e.pendingRewarderArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",zs,[F(s("img",Ks,null,512),[[k,a.logoURI]]),s("span",null,o(a.symbol),1)]),s("div",Ws,[s("div",Js,o(("decimalUi"in e?e.decimalUi:i(v))(a.amount,a.decimals)),1),s("div",Hs,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:i(y))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):$("",!0)],2)):$("",!0),Ms])])])]),s("div",{class:"h5-bottom",onClick:d[1]||(d[1]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",Zs,[s("div",Qs,o(e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(v))(1/e.pItem.minPrice,6):("decimalUi"in e?e.decimalUi:i(v))(e.pItem.minPrice,6)),1),e.store.theme=="default"?(n(),t("img",Xs)):(n(),t("img",Ys)),s("div",xs,o(e.pItem.maxPrice.indexOf("+")>-1?"∞":e.pItem.needReverse?("decimalUi"in e?e.decimalUi:i(v))(1/e.pItem.maxPrice,6):("decimalUi"in e?e.decimalUi:i(v))(e.pItem.maxPrice,6))+" "+o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",eo,[s("div",so,[s("div",oo,[s("div",no,o(e.$t("common.liquidity")),1),s("div",to," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:i(y))(e.pItem.amountUSD,2)),1)]),s("div",ao,[s("div",io,o(e.$t("newAdd.pendingFees")),1),isNaN(e.pendingFees)?(n(),t("div",lo,[f(g,{size:"small"})])):(n(),t("div",ro,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:i(y))(e.pendingFees,2)),1)),e.pendingFees>0?(n(),t("div",mo,[(n(!0),t(z,null,K(e.pendingFeesArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",uo,[F(s("img",po,null,512),[[k,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",co,[s("div",vo,o(Number(a.amount)==0?0:Number(a.amount)>1e-6?("addCommom"in e?e.addCommom:i(y))(("decimalUi"in e?e.decimalUi:i(v))(a.amount,a.decimals),a.decimals):"<0.000001"),1),s("div",ko,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:i(y))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):$("",!0)]),e.pItem.is_display_rewarder&&!("checkNullObj"in e?e.checkNullObj:i(Z))(e.pItem.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(n(),t("div",ho,[s("div",bo,o(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(n(),t("div",Io," $"+o(e.pendingRewarder>0?("decimalUi"in e?e.decimalUi:i(v))(e.pendingRewarder,2):0),1)):(n(),t("div",go,[f(g,{size:"small"})])),e.pendingRewarder>0?(n(),t("div",fo,[(n(!0),t(z,null,K(e.pendingRewarderArr,a=>(n(),t("div",{key:a,class:"rewarder-info"},[s("div",$o,[F(s("img",wo,null,512),[[k,a.logoURI]]),s("span",null,o(a.symbol),1)]),s("div",yo,[s("div",_o,o(a.amount),1),s("div",Ro,"$"+o(("decimalUi"in e?e.decimalUi:i(v))(a.amountUSD,2)),1)])]))),128))])):$("",!0)])):$("",!0)]),Uo])])])}const So=te(Xe,[["render",No],["__scopeId","data-v-0eaf1b52"]]),Oo=oe({setup(){const e=O(!1),{t:d}=ne(),_=O(["position"]),D=ue(),R=O(""),A=se(),r=c(()=>A),N=c(()=>r.value.chainName?ke[r.value.chainName]:{});let g=O([]);const k=de(),h=c(()=>k),j=Fe(),a=c(()=>j),b=O(!1),U=O(d("tab.all")),B=O([d("tab.layerZero"),d("tab.wormhole"),d("tab.celer")]),V=O(!0),Q=O("TVL"),X=()=>{e.value=!0,g.value=[],a.value.address&&k.getMyPositons(a.value.address,h.value.poolsObj,r.value.chainName),setTimeout(()=>{e.value=!1},1e3)};Ce(()=>{g.value=[],document.addEventListener("click",()=>{b.value=!1}),k.setMyPositionsLoading(!0)}),De(()=>{document.addEventListener("click",()=>{b.value=!1})}),Ae(()=>{a.value.connected||(g.value=[])});const W=p=>{e.value=!0;let u=[];if(h.value.myPositions.forEach(m=>{var G,J,H,ie;let l,I;const S=m.amountA*((G=h.value.RATES[m.token_a.address])==null?void 0:G.price),C=m.amountB*((J=h.value.RATES[m.token_b.address])==null?void 0:J.price);(H=h.value.RATES[m.token_a.address])!=null&&H.price&&((ie=h.value.RATES[m.token_b.address])!=null&&ie.price)?(l=S+C,I=S+C):(l=" --",I=0),u.push({...m,amountUSD:l,amountUSDOrigin:I,tokenARates:S,tokenBRates:C})}),U.value!=d("tab.all")){const m=[];u.forEach(l=>{var I;((I=l==null?void 0:l.labels)==null?void 0:I.indexOf(U.value))!==-1&&m.push(l)}),V.value?(g.value=m.sort((l,I)=>Number(I.amountUSDOrigin)-Number(l.amountUSDOrigin)),e.value=!1):(g.value=m.sort((l,I)=>Number(l.amountUSDOrigin)-Number(I.amountUSDOrigin)),e.value=!1)}else V.value?(g.value=u.sort((m,l)=>l.amountUSDOrigin-m.amountUSDOrigin),e.value=!1):(g.value=u.sort((m,l)=>m.amountUSDOrigin-l.amountUSDOrigin),e.value=!1)};q(()=>[h.value.myPositions,h.value.RATES],([p,u])=>{p&&u&&W()},{immediate:!0}),q(()=>[a.value.address,h.value.poolConfigList,h.value.poolsObj,r.value.chainName],([p,u,m,l])=>{var I,S,C;p&&u&&u.length>0&&l&&(l!=null&&l.toLowerCase().includes((I=u[0])==null?void 0:I.chain))&&!Z(m)&&(l==="Aptos"?u.length===Object.values(m).length:(C=(S=Object.values(m)[0])==null?void 0:S.chain)!=null&&C.includes("sui"))&&k.getMyPositons(a.value.address,m,l)},{immediate:!0,deep:!0}),q(()=>U.value,p=>{W()}),q(()=>V.value,p=>{W()});const w=p=>{const u=[];B.value.forEach((m,l)=>{m==p?u[l]=U.value:u[l]=m}),B.value=u,U.value=p},P=Be(),E=c(()=>P),ae=c(()=>k),$e=async p=>{await P.getSourceGroups();const u=E.value.sourceGroups&&E.value.sourceGroups.length>0&&E.value.sourceGroups[0]&&E.value.sourceGroups[0].sources||[];for(let m=0;m<u.length;m++){const{pool_address:l,position_index:I}=JSON.parse(u[m].blockchainAddress);let S=!1,C;for(let G=0;G<p.length;G++){const{poolAddress:J,index:H}=p[G];l==J&&Number(H)==Number(I)&&(S=!0),C={pool_address:l,position_index:I}}S||await P.subscribePosition(C,"",!1,!1)}},we=async()=>{await P.getSourceGroups();const p=E.value.sourceGroups&&E.value.sourceGroups.length>0&&E.value.sourceGroups[0]&&E.value.sourceGroups[0].sources||[];for(let u=0;u<p.length;u++){const{pool_address:m,position_index:l}=JSON.parse(p[u].blockchainAddress),{name:I}=p[u],S={pool_address:m,position_index:l};await P.subscribePosition(S,I,!1,!1)}},ye=c(()=>ae.value.myPositionsLoading);return q(()=>ae.value.myPositions,(p,u)=>{N.value.hasNotifi&&(p&&p.length>0&&u&&u.length!==p.length?$e(p):p&&p.length==0&&!ye.value&&we())},{immediate:!0}),{changeSortLabel:w,label:b,labelList:B,labelValue:U,select:V,selectValue:Q,t:d,pools:h,store:r,wallet:a,list:g,clickRefresh:X,refresh:e,current:_,router:D,searchKey:R}}});const fe=e=>(ce("data-v-3b4e7815"),e=e(),ve(),e),Co={class:"position-title"},Do=fe(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Ao=[Do],jo={class:"position-tab"},Po={class:"search-tab"},Eo={key:0,class:"positionNum"},Fo={class:"search-container"},Lo={class:"value"},To=fe(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Bo=[To],Vo={key:0,class:"select-item"},Go=["onClick"],qo={key:0,src:Ie,alt:""},zo={key:1,class:"fan-img",src:Ie,alt:""},Ko={key:0,class:"loading-global position-loading"},Wo={key:1,class:"position-list"},Jo={key:2,class:"no-data"},Ho={key:0,src:Ve,alt:""},Mo={key:1,src:Ge,alt:""},Zo={key:3,class:"no-data"},Qo={key:0,src:qe,alt:""},Xo={key:1,src:ze,alt:""};function Yo(e,d,_,D,R,A){const r=re("mail-outlined"),N=Ee,g=re("appstore-outlined"),k=je,h=pe,j=So,a=Pe;return n(),t("div",{class:T(e.list&&e.list.length===0&&e.wallet.connected||!e.wallet.connected?"position-center position-list-container":"position-list-container")},[s("div",Co,[s("div",null,o(e.$t("common.concentratedPools")),1),(n(),t("svg",{"aria-hidden":"true",class:T(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:d[0]||(d[0]=(...b)=>e.clickRefresh&&e.clickRefresh(...b))},Ao,2))]),s("div",jo,[s("div",Po,[f(k,{selectedKeys:e.current,"onUpdate:selectedKeys":d[2]||(d[2]=b=>e.current=b),mode:"horizontal"},{default:L(()=>[f(N,{key:"pools",onClick:d[1]||(d[1]=b=>e.router.push("/pools"))},{icon:L(()=>[f(r)]),default:L(()=>[M(" "+o(e.$t("menu.pools")),1)]),_:1}),f(N,{key:"position"},{icon:L(()=>[f(g)]),default:L(()=>[M(" "+o(e.$t("common.myPosition")),1),e.list.length>0?(n(),t("span",Eo," ("+o(e.list.length)+")",1)):$("",!0)]),_:1})]),_:1},8,["selectedKeys"])]),s("div",Fo,[e.store.theme=="default"?(n(),t("div",{key:0,class:"search-label",onClick:d[3]||(d[3]=le(b=>e.label=!e.label,["stop"]))},[s("span",null,o(e.$t("newAdd.label")),1),s("div",Lo,o(e.labelValue),1),(n(),t("svg",{"aria-hidden":"true",class:T(e.label?"show-icon icon":"icon")},Bo,2)),e.label?(n(),t("div",Vo,[(n(!0),t(z,null,K(e.labelList,(b,U)=>(n(),t("div",{key:U,class:"select-menu-item",onClick:B=>e.changeSortLabel(b)},o(b),9,Go))),128))])):$("",!0)])):$("",!0),s("div",{class:"search-select",onClick:d[4]||(d[4]=le(b=>e.select=!e.select,["stop"]))},[s("div",null,[M(" TVL "),e.select?(n(),t("img",qo)):(n(),t("img",zo))])])])]),e.pools.myPositionsLoading&&e.wallet.connected?(n(),t("div",Ko,[f(h)])):$("",!0),e.list&&e.list.length>0&&e.wallet.connected&&!e.pools.myPositionsLoading?(n(),t("div",Wo,[(n(!0),t(z,null,K(e.list,(b,U)=>(n(),me(j,{key:U,"p-item":b},null,8,["p-item"]))),128))])):$("",!0),e.list&&e.list.length<=0&&!e.pools.myPositionsLoading&&e.wallet.connected?(n(),t("div",Jo,[e.store.theme=="default"?(n(),t("img",Ho)):(n(),t("img",Mo)),s("span",null,o(e.$t("common.noLiquidityPositions")),1)])):$("",!0),e.wallet.connected?$("",!0):(n(),t("div",Zo,[e.store.theme=="default"?(n(),t("img",Qo)):(n(),t("img",Xo)),f(a,{class:"connect-wallet",onClick:d[5]||(d[5]=b=>e.wallet.setIsShowWalletModal(!0))},{default:L(()=>[M(o(e.$t("button.connectWallet")),1)]),_:1})]))],2)}const fn=te(Oo,[["render",Yo],["__scopeId","data-v-3b4e7815"]]);export{fn as default};
