import{_ as Fe}from"./upgrade-select-input.e173a617.js";import{_ as Ve}from"./upgrade-loading.3a6ba987.js";import{_ as He}from"./status-block.a4d69ded.js";import{g as me,a as Ge,u as _e,s as qe,k as oe,e as u,j as Me,b as We,c as ue,d as v,D as ze,f as Je}from"./pool.8dc86d05.js";import{a as he,l as ke,m as g,e as ge,o as t,f as r,h as s,i as V,u as o,v as a,c as Re,w as ve,x as _,j as te,z as ae,L as Ke,p as be,k as Ie,b as $e,r as N,D as W,y as Ue,q as Ze,t as T,F as K,s as Z,S as Qe,C as Xe,N as Ye,V as xe,T as ye,B as es}from"./entry.e27424bb.js";/* empty css              */import{u as we,_ as Ne}from"./index.939d6d4b.js";/* empty css              */import{i as ne}from"./import-icon.de3e6c66.js";import{_ as Ce}from"./icon-arrow_2x.948aedb2.js";import{_ as Se}from"./icon-arrow_2x.4ffddb8e.js";import{u as ss}from"./notifi.fb4554e0.js";import{_ as Pe}from"./icon_on_2x.5e96733d.js";import{_ as os,a as as}from"./img-no-Positions_2x.9072ab92.js";import{_ as ns,a as ts}from"./img-connect-wallet_2x.269b24b8.js";import"./coin-select.6fa2da9f.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const rs=he({props:{pItem:{type:Object,required:!0},currentStatus:{type:String,required:!0},rewarderInfo:{type:Number,required:!0},aprAmount:{type:Number,required:!0}},setup(e){const{t:b}=ke(),j=we(),C=g(()=>j),I=g(()=>C.value.chainName);console.log(e.pItem,"pItempItem121221");const L=g(()=>Ne[I.value]);return{getExplorerUrl:me,store:C,config:L,t:b}}});const Ae=e=>(be("data-v-4530e4e6"),e=e(),Ie(),e),is={class:"status-block-box"},ds={key:0,class:"owner-addres"},ls=["href"],ms=["href"],us={class:"copy-link"},ps=Ae(()=>s("use",{"xlink:href":"#icon-icon-copy"},null,-1)),cs=["href"],vs=Ae(()=>s("svg",{class:"icon","aria-hidden":"true"},[te(" > "),s("use",{"xlink:href":"#icon-icon-link"})],-1)),hs=[vs];function ks(e,b,j,C,I,L){const R=He,c=Ke;return t(),r("div",{class:ae(["upgrade-position-status",`position-status-${e.pItem.currentStatus.toLowerCase()}`])},[s("div",is,[V(R,{class:"status-block","current-status":e.pItem.currentStatus||"","is-pause":e.pItem.is_pause,"apr-amount":e.aprAmount,"block-name":"position"},null,8,["current-status","is-pause","apr-amount"])]),e.pItem.tokenName?(t(),r("div",ds,[e.pItem.tokenName.length<=24?(t(),r("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:o(me))("nftAddress",e.pItem.nftHash),target:"_blank"},a(e.pItem.tokenName.split("|")[1]),9,ls)):(t(),Re(c,{key:1,placement:"bottom","arrow-point-at-center":""},{title:ve(()=>[s("span",null,a(e.pItem.tokenName),1)]),default:ve(()=>[s("a",{target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:o(me))("nftAddress",e.pItem.nftHash)},a(e.pItem.tokenName.substr(0,4))+" ... "+a(e.pItem.tokenName.substr(e.pItem.tokenName.length-4,4)),9,ms)]),_:1}))])):_("",!0),s("div",us,[(t(),r("svg",{class:"icon","aria-hidden":"true",onClick:b[0]||(b[0]=k=>e.store.copy(e.pItem.nftHash))},[te(" > "),ps])),e.pItem.tokenName.length<=24?(t(),r("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:o(me))("nftAddress",e.pItem.nftHash),target:"_blank"},hs,8,cs)):_("",!0)])],2)}const gs=ge(rs,[["render",ks],["__scopeId","data-v-4530e4e6"]]),bs=he({props:{pItem:{type:Object,required:!0}},setup(e){const{t:b}=ke(),j=$e(),C=we(),I=g(()=>C),L=g(()=>I.value.chainName?Ge(I.value.chainName):{}),R=_e(),c=g(()=>R),k=()=>{I.value.chainName==="Aptos"?j.push(`/position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):j.push(`/position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`)},S=g(()=>c.value.allTokenObj&&e.pItem.token_a.address&&c.value.allTokenObj[e.pItem.token_a.address]&&c.value.allTokenObj[e.pItem.token_a.address].logo_url),n=g(()=>c.value.allTokenObj&&e.pItem.token_b.address&&c.value.allTokenObj[e.pItem.token_b.address]&&c.value.allTokenObj[e.pItem.token_b.address].logo_url),H=g(()=>c.value.feeOwedObj[e.pItem.tokenName]&&c.value.feeOwedObj[e.pItem.tokenName].feeOwed),B=g(()=>c.value.feeOwedObj[e.pItem.tokenName]&&c.value.feeOwedObj[e.pItem.tokenName].feesResult),Q=g(()=>c.value.rewarderObj[e.pItem.tokenName]&&c.value.rewarderObj[e.pItem.tokenName].pendingRewarder),G=g(()=>c.value.rewarderObj[e.pItem.tokenName]&&c.value.rewarderObj[e.pItem.tokenName].pendingRewarderView),X=g(()=>c.value.rewarderObj[e.pItem.tokenName]&&c.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),z=N(0),pe=N();W(()=>c.value.RATES,l=>{l&&(pe.value=l)},{immediate:!0});const re=l=>{var U;return(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||((U=c.value.tokensObj[l==null?void 0:l.address])==null?void 0:U.logo_url)||(I.value.theme==="default"?ne("/image/coins/unknown.png"):ne("/image/coins/sui-unknown.png"))},Y=g(()=>c.value.tokensObj);Ue(()=>{ce(e.pItem),q(e.pItem.minPrice,e.pItem.maxPrice)});const x=N("--"),q=(l,U)=>{l!=="0"&&U!=="∞"?x.value=qe(1/(1-Number((l/U)**.25)),2)+"x":x.value=1},$=N(30),f=N(null),ce=async l=>{var O,E,M;let U;e.pItem.needReverse?U=!1:U=!0;const P=U?Number(e.pItem.minPrice):e.pItem.maxPrice=="∞"?1/2**50:1/Number(e.pItem.maxPrice),A=isNaN(Number(e.pItem.maxPrice))||e.pItem.maxPrice=="∞"?2**50:U?Number(e.pItem.maxPrice):1/Number(e.pItem.minPrice);let y=[];y=I.value&&I.value.addressHistTokens&&I.value.addressHistTokens[l.poolAddress]&&I.value.addressHistTokens[l.poolAddress].data&&I.value.addressHistTokens[l.poolAddress].data.length>0&&Object.fromEntries(I.value.addressHistTokens[l.poolAddress].data.map(F=>[F.key,F.value]));const J=Number(Number($.value==7?y.before_7_d_contract_price_lowest:$.value==24?y.before_24_h_contract_price_lowest:y.before_30_d_contract_price_lowest)),d=Number(Number($.value==7?y.before_7_d_contract_price_highest:$.value==24?y.before_24_h_contract_price_highest:y.before_30_d_contract_price_highest)),i=c.value.tokensObj,m=await L.value.getEstPositionAPRWithMulti(P,A,J,d),h=Number(m.toString()),p=I.value.newTopPoolsObj[l.poolAddress];let w;if(p){$.value==7?w=p.apr_7day?Number(p.apr_7day.substring(0,p.apr_7day.length-1)):0:$.value==24?w=p.apr_24h?Number(p.apr_24h.substring(0,p.apr_24h.length-1)):0:w=p.apr_30day?Number(p.apr_30day.substring(0,p.apr_30day.length-1)):0;const F=p.rewarder_apr[0]?Number(p.rewarder_apr[0].substring(0,p.rewarder_apr[0].length-1)):0,De=p.rewarder_apr[1]?Number(p.rewarder_apr[1].substring(0,p.rewarder_apr[1].length-1)):0,je=p.rewarder_apr[2]?Number(p.rewarder_apr[2].substring(0,p.rewarder_apr[2].length-1)):0,ee=Number(h*w),ie=Number(h*F),de=Number(h*De),le=Number(h*je),se=ee+(l.rewarder_display1?ie:0)+(l.rewarder_display2?de:0)+(l.rewarder_display3?le:0),Le=l.rewarder_infos[0]?(O=i[l.rewarder_infos[0].coinAddress])==null?void 0:O.symbol:"--",Te=l.rewarder_infos[1]?(E=i[l.rewarder_infos[1].coinAddress])==null?void 0:E.symbol:"--",Be=l.rewarder_infos[2]?(M=i[l.rewarder_infos[2].coinAddress])==null?void 0:M.symbol:"--",Ee={aprFee:ee==1/0||isNaN(ee)?0:ee,rewardAprList:[{rewarder_name:Le,rewarder_apr:ie==1/0||isNaN(ie)?0:ie,styleName:"one",rewarder_display:l.rewarder_display1},{rewarder_name:Te,rewarder_apr:de==1/0||isNaN(de)?0:de,styleName:"two",rewarder_display:l.rewarder_display2},{rewarder_name:Be,rewarder_apr:le==1/0||isNaN(le)?0:le,styleName:"three",rewarder_display:l.rewarder_display2}],aprPercentageTotal:se==1/0||isNaN(se)||se===0?0:se,aprPercentage:oe(ee/se,2),is_display_rewarder:l.is_display_rewarder};f.value=Ee}};return{aprNum:g(()=>{var l,U,P,A,y,J,d,i,m,h,p,w;return f.value?f.value.is_display_rewarder?(l=f.value)!=null&&l.aprPercentageTotal?((U=f.value)==null?void 0:U.aprPercentageTotal)>1e4?">10,000":((P=f.value)==null?void 0:P.aprPercentageTotal)<.01&&((A=f.value)==null?void 0:A.aprPercentageTotal)>0?"<0.01":oe((y=f.value)==null?void 0:y.aprPercentageTotal,2):(J=f.value)!=null&&J.rewardAprList?"0":"--":(d=f.value)!=null&&d.aprFee?((i=f.value)==null?void 0:i.aprFee)>1e4?">10,000":((m=f.value)==null?void 0:m.aprFee)<.01&&((h=f.value)==null?void 0:h.aprFee)>0?"<0.01":u((p=f.value)==null?void 0:p.aprFee,2):(w=f.value)!=null&&w.rewardAprList?"0":"--":"--"}),lever:x,tokensObj:Y,showNum:Me,fromCoinUrl:S,toCoinUrl:n,decimalFormat:We,clickDetails:k,t:b,addCommom:u,importIcon:ne,router:j,store:I,pendingRewarder:Q,pendingFees:H,pendingRewarderArr:X,pendingFeesArr:B,checkNullObj:ue,fixD:oe,decimalUi:v,pendingRewarderView:G,aprAmount:z,getCoinIcon:re,Decimal:ze}}});const D=e=>(be("data-v-055b9817"),e=e(),Ie(),e),Is={class:"upgrade-position-item"},ws={class:"card-content"},fs={class:"left"},ys={class:"top card-header"},_s={class:"token-item"},Rs={class:"item"},$s={key:0,class:"token-warning"},Us={class:"item"},Ns={key:0,class:"token-warning"},Cs={class:"card-header-right"},Ss={class:"item"},Ps=D(()=>s("span",null,"Leverage",-1)),As={class:"item"},Os=D(()=>s("span",null,"Estimated APR",-1)),Ds=D(()=>s("div",{class:"more-img"},null,-1)),js={class:"bottom"},Ls={class:"info-block-container"},Ts={class:"info-block"},Bs=D(()=>s("div",{class:"leabl"},"Fee Tier",-1)),Es={class:"text"},Fs={class:"info-block"},Vs=D(()=>s("div",{class:"leabl"},"Price Range",-1)),Hs={class:"text"},Gs={class:"min-and-max"},qs={class:"left-text"},Ms={class:"text"},Ws={class:"hover-text"},zs={key:0,src:Ce,alt:""},Js={key:1,src:Se,alt:""},Ks={class:"right-text"},Zs={class:"text"},Qs={class:"hover-text"},Xs={class:"leabl"},Ys={class:"text"},xs={key:0,class:"hover-rewarder"},eo={class:"rewarder-info"},so={class:"left-rewarder"},oo={alt:""},ao={class:"right-rewarder"},no={class:"amount"},to={key:0,class:"amount-usd"},ro={key:1,class:"amount-usd"},io={class:"rewarder-info"},lo={class:"left-rewarder"},mo={alt:""},uo={class:"right-rewarder"},po={class:"amount"},co={key:0,class:"amount-usd"},vo={key:1,class:"amount-usd"},ho={class:"leabl"},ko={key:0,class:"text"},go={key:1,class:"text"},bo={key:2,class:"text"},Io={key:3,class:"hover-rewarder"},wo={class:"left-rewarder"},fo={alt:""},yo={class:"right-rewarder"},_o={class:"amount"},Ro={class:"amount-usd"},$o={class:"leabl"},Uo={key:0,class:"text"},No={key:1,class:"text"},Co={key:2,class:"hover-rewarder"},So={class:"left-rewarder"},Po={alt:""},Ao={class:"right-rewarder"},Oo={class:"amount"},Do={class:"amount-usd"},jo={class:"h5-bottom"},Lo={class:"item"},To=D(()=>s("span",null,"Leverage",-1)),Bo={class:"item"},Eo=D(()=>s("span",null,"Estimated APR",-1)),Fo=D(()=>s("div",{class:"more-img"},null,-1)),Vo={class:"info"},Ho={class:"info-item"},Go=D(()=>s("div",{class:"left"},"Fee Tier",-1)),qo={class:"right"},Mo={class:"info-item range-item"},Wo={class:"left"},zo={class:"right"},Jo={class:"min-and-max"},Ko={class:"text"},Zo={key:0,src:Ce,alt:""},Qo={key:1,src:Se,alt:""},Xo={class:"text"},Yo={class:"info-item"},xo=D(()=>s("div",{class:"left"},"Liquidity",-1)),ea={class:"right"},sa={key:0,class:"hover-rewarder"},oa={class:"rewarder-info"},aa={class:"left-rewarder"},na={alt:""},ta={class:"right-rewarder"},ra={class:"amount"},ia={key:0,class:"amount-usd"},da={key:1,class:"amount-usd"},la={class:"rewarder-info"},ma={class:"left-rewarder"},ua={alt:""},pa={class:"right-rewarder"},ca={class:"amount"},va={key:0,class:"amount-usd"},ha={key:1,class:"amount-usd"},ka={class:"info-item"},ga=D(()=>s("div",{class:"left"},"Pending Fees",-1)),ba={key:0,class:"right"},Ia={key:1,class:"right"},wa={key:2,class:"right"},fa={key:3,class:"hover-rewarder"},ya={class:"left-rewarder"},_a={alt:""},Ra={class:"right-rewarder"},$a={class:"amount"},Ua={class:"amount-usd"},Na={key:0,class:"info-item"},Ca={class:"left"},Sa={key:0,class:"right"},Pa={key:1,class:"right"},Aa={key:2,class:"hover-rewarder"},Oa={class:"left-rewarder"},Da={alt:""},ja={class:"right-rewarder"},La={class:"amount"},Ta={class:"amount-usd"};function Ba(e,b,j,C,I,L){var S;const R=gs,c=Qe,k=Ze("image");return t(),r("div",Is,[s("div",ws,[s("div",fs,[V(R,{"p-item":e.pItem,"current-status":((S=e.pItem)==null?void 0:S.currentStatus)||"","rewarder-info":e.pendingRewarder,"apr-amount":e.aprAmount},null,8,["p-item","current-status","rewarder-info","apr-amount"])]),s("div",{class:"right",onClick:b[0]||(b[0]=(...n)=>e.clickDetails&&e.clickDetails(...n))},[s("div",ys,[s("div",_s,[s("div",Rs,[s("div",null,[T(s("img",null,null,512),[[k,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt)?(t(),r("div",$s)):_("",!0),s("span",null,a(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("p",null,a(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" "+a(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)]),s("div",Us,[s("div",null,[T(s("img",null,null,512),[[k,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt)?(t(),r("div",Ns)):_("",!0),s("span",null,a(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("p",null,a(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" "+a(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)])]),s("div",Cs,[s("div",Ss,[s("p",null,a(e.lever),1),Ps]),s("div",As,[s("p",null,a(e.aprNum)+"%",1),Os]),Ds])]),s("div",js,[s("div",Ls,[s("div",Ts,[Bs,s("div",Es,a(e.pItem.fee*100)+"%",1)]),s("div",Fs,[Vs,s("div",Hs,[s("div",Gs,[s("div",qs,[s("div",Ms,a(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.minPrice,6))),1),s("div",Ws,a(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.minPrice,6))),1)]),e.store.theme=="default"?(t(),r("img",zs)):(t(),r("img",Js)),s("div",Ks,[s("div",Zs,a((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.maxPrice,6))),1),s("div",Qs,a((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.maxPrice,6))),1)]),s("span",null,a(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+a(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)])])]),s("div",{class:ae(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[s("div",Xs,a(e.$t("common.liquidity")),1),s("div",Ys," $"+a(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:o(u))(e.pItem.amountUSD,2)),1),e.pItem.amountUSD>0?(t(),r("div",xs,[s("div",eo,[s("div",so,[T(s("img",oo,null,512),[[k,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,a(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",ao,[s("div",no,a(e.pItem.needReverse?("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(t(),r("div",ro,a(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("fixD"in e?e.fixD:o(oe))(e.pItem.tokenBRates,2):"<$0.01"),1)):(t(),r("div",to,a(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("fixD"in e?e.fixD:o(oe))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",io,[s("div",lo,[T(s("img",mo,null,512),[[k,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,a(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",uo,[s("div",po,a(e.pItem.needReverse?("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(t(),r("div",vo,a(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.tokenARates,2)):"<$0.01"),1)):(t(),r("div",co,a(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):_("",!0)],2),s("div",{class:ae(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[s("div",ho,a(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(t(),r("div",ko,"$ --")):isNaN(e.pendingFees)?(t(),r("div",bo,[V(c,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),r("div",go,a(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:o(u))(e.pendingFees,2)),1)),e.pendingFees>0?(t(),r("div",Io,[(t(!0),r(K,null,Z(e.pendingFeesArr,n=>(t(),r("div",{key:n,class:"rewarder-info"},[s("div",wo,[T(s("img",fo,null,512),[[k,e.getCoinIcon(n)]]),s("span",null,a(n.symbol),1)]),s("div",yo,[s("div",_o,a(Number(n.amount)==0?0:Number(n.amount)>1e-6?("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(n.amount,n.decimals),n.decimals):"<0.000001"),1),s("div",Ro,a(Number(n.amountUSD)==0?"$0":Number(n.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:o(u))(n.amountUSD,2):"<$0.01"),1)])]))),128))])):_("",!0)],2),e.pItem.is_display_rewarder&&!("checkNullObj"in e?e.checkNullObj:o(ue))(e.pItem.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(t(),r("div",{key:0,class:ae(["info-block cursor-block",e.pendingRewarder==0?"block-none":""])},[s("div",$o,a(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(t(),r("div",Uo," $"+a(e.pendingRewarder>0&&e.pendingRewarderView>0?e.pendingRewarderView:e.pendingRewarder>0&&e.pendingRewarderView<=0?"<0.01":0),1)):(t(),r("div",No,[V(c,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])),e.pendingRewarder>0?(t(),r("div",Co,[(t(!0),r(K,null,Z(e.pendingRewarderArr,n=>(t(),r("div",{key:n,class:"rewarder-info"},[s("div",So,[T(s("img",Po,null,512),[[k,n.logoURI]]),s("span",null,a(n.symbol),1)]),s("div",Ao,[s("div",Oo,a(("decimalUi"in e?e.decimalUi:o(v))(n.amount,n.decimals)),1),s("div",Do,a(Number(n.amountUSD)==0?"$0":Number(n.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:o(u))(n.amountUSD,2):"<$0.01"),1)])]))),128))])):_("",!0)],2)):_("",!0)])])])]),s("div",jo,[s("div",{class:"card-header-right",onClick:b[1]||(b[1]=(...n)=>e.clickDetails&&e.clickDetails(...n))},[s("div",Lo,[s("p",null,a(e.lever),1),To]),s("div",Bo,[s("p",null,a(e.aprNum)+"%",1),Eo]),Fo]),s("div",Vo,[s("div",Ho,[Go,s("div",qo,a(e.pItem.fee*100)+"%",1)]),s("div",Mo,[s("div",Wo,[te("Price Range ("),s("span",null,a(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+a(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol)+")",1)]),s("div",zo,[s("div",Jo,[s("div",Ko,a(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.minPrice,6))),1),e.store.theme=="default"?(t(),r("img",Zo)):(t(),r("img",Qo)),s("div",Xo,a((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.maxPrice,6))),1)])])]),s("div",Yo,[xo,s("div",ea," $"+a(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:o(u))(e.pItem.amountUSD,2)),1),e.pItem.amountUSD>0?(t(),r("div",sa,[s("div",oa,[s("div",aa,[T(s("img",na,null,512),[[k,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,a(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",ta,[s("div",ra,a(e.pItem.needReverse?("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(t(),r("div",da,a(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:o(u))(e.pItem.tokenBRates,2):"<$0.01"),1)):(t(),r("div",ia,a(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:o(u))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",la,[s("div",ma,[T(s("img",ua,null,512),[[k,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,a(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",pa,[s("div",ca,a(e.pItem.needReverse?("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(t(),r("div",ha,a(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.tokenARates,2)):"<$0.01"),1)):(t(),r("div",va,a(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):_("",!0)]),s("div",ka,[ga,e.pendingFees==="--"?(t(),r("div",ba,"$ --")):isNaN(e.pendingFees)?(t(),r("div",wa,[V(c,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),r("div",Ia,a(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:o(u))(e.pendingFees,2)),1)),e.pendingFees>0?(t(),r("div",fa,[(t(!0),r(K,null,Z(e.pendingFeesArr,n=>(t(),r("div",{key:n,class:"rewarder-info"},[s("div",ya,[T(s("img",_a,null,512),[[k,e.getCoinIcon(n)]]),s("span",null,a(n.symbol),1)]),s("div",Ra,[s("div",$a,a(Number(n.amount)==0?0:Number(n.amount)>1e-6?("addCommom"in e?e.addCommom:o(u))(("decimalUi"in e?e.decimalUi:o(v))(n.amount,n.decimals),n.decimals):"<0.000001"),1),s("div",Ua,a(Number(n.amountUSD)==0?"$0":Number(n.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:o(u))(n.amountUSD,2):"<$0.01"),1)])]))),128))])):_("",!0)]),e.pItem.is_display_rewarder&&!("checkNullObj"in e?e.checkNullObj:o(ue))(e.pItem.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(t(),r("div",Na,[s("div",Ca,a(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(t(),r("div",Sa," $"+a(e.pendingRewarder>0&&e.pendingRewarderView>0?e.pendingRewarderView:e.pendingRewarder>0&&e.pendingRewarderView<=0?"<0.01":0),1)):(t(),r("div",Pa,[V(c,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])),e.pendingRewarder>0?(t(),r("div",Aa,[(t(!0),r(K,null,Z(e.pendingRewarderArr,n=>(t(),r("div",{key:n,class:"rewarder-info"},[s("div",Oa,[T(s("img",Da,null,512),[[k,n.logoURI]]),s("span",null,a(n.symbol),1)]),s("div",ja,[s("div",La,a(("decimalUi"in e?e.decimalUi:o(v))(n.amount,n.decimals)),1),s("div",Ta,a(Number(n.amountUSD)==0?"$0":Number(n.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:o(u))(n.amountUSD,2):"<$0.01"),1)])]))),128))])):_("",!0)])):_("",!0)])])])}const Ea=ge(bs,[["render",Ba],["__scopeId","data-v-055b9817"]]),Fa=he({setup(){const e=N(!1),{t:b}=ke(),j=N(["position"]),C=$e(),I=N(""),L=we(),R=g(()=>L),c=g(()=>R.value.chainName?Ne[R.value.chainName]:{});let k=N([]);const S=_e(),n=g(()=>S),H=Je(),B=g(()=>H),Q=N(!1),G=N(b("tab.all")),X=N([b("tab.layerZero"),b("tab.wormhole"),b("tab.celer")]),z=N(!0),pe=N("TVL"),re=()=>{e.value=!0,k.value=[],B.value.address&&S.getMyPositons(B.value.address,n.value.poolsObj,R.value.chainName),setTimeout(()=>{e.value=!1},1e3)};W(()=>R.value.isRefresh,d=>{var i;d&&((i=C==null?void 0:C.currentRoute)==null?void 0:i.value.name.split("-")[1])=="position"&&re()}),Ue(()=>{k.value=[],document.addEventListener("click",()=>{Q.value=!1}),S.setMyPositionsLoading(!0)}),Xe(()=>{document.addEventListener("click",()=>{Q.value=!1})}),Ye(()=>{B.value.connected||(k.value=[])});const Y=()=>{e.value=!0;let d=[];n.value.myPositions.forEach(i=>{var O,E,M,F;let m,h;const p=i.amountA*((O=n.value.RATES[i.token_a.address])==null?void 0:O.price),w=i.amountB*((E=n.value.RATES[i.token_b.address])==null?void 0:E.price);(M=n.value.RATES[i.token_a.address])!=null&&M.price&&((F=n.value.RATES[i.token_b.address])!=null&&F.price)?(m=p+w,h=p+w):(m=" --",h=0),d.push({...i,amountUSD:m,amountUSDOrigin:h,tokenARates:p,tokenBRates:w})}),G.value!="All"?z.value?(k.value=d.sort((i,m)=>Number(m.amountUSDOrigin)-Number(i.amountUSDOrigin)),e.value=!1):(k.value=d.sort((i,m)=>Number(i.amountUSDOrigin)-Number(m.amountUSDOrigin)),e.value=!1):z.value?(k.value=d.sort((i,m)=>m.amountUSDOrigin-i.amountUSDOrigin),e.value=!1):(k.value=d.sort((i,m)=>i.amountUSDOrigin-m.amountUSDOrigin),e.value=!1),console.log(k.value,"list.value========>")};W(()=>[n.value.myPositions,n.value.RATES],([d,i])=>{d&&i&&(console.log("0605==>updateLpList9099999"),Y())},{immediate:!0}),W(()=>[B.value.address,n.value.poolConfigList,n.value.poolsObj,R.value.chainName],([d,i,m,h])=>{var p,w,O;d&&i&&i.length>0&&h&&(h!=null&&h.toLowerCase().includes((p=i[0])==null?void 0:p.chain))&&!ue(m)&&(h==="Aptos"?i.length===Object.values(m).length:(O=(w=Object.values(m)[0])==null?void 0:w.chain)!=null&&O.includes("sui"))&&(console.log("0605==>getMyPositons9099999"),S.getMyPositons(B.value.address,m,h))},{immediate:!0,deep:!0}),W(()=>G.value,d=>{Y()}),W(()=>z.value,d=>{Y()});const x=d=>{const i=[];X.value.forEach((m,h)=>{m==d?i[h]=G.value:i[h]=m}),X.value=i,G.value=d},q=ss(),$=g(()=>q),f=g(()=>S),ce=async d=>{await q.getSourceGroups();const i=$.value.sourceGroups&&$.value.sourceGroups.length>0&&$.value.sourceGroups[0]&&$.value.sourceGroups[0].sources||[];for(let m=0;m<i.length;m++){const{pool_address:h,position_index:p}=JSON.parse(i[m].blockchainAddress);let w=!1,O;for(let E=0;E<d.length;E++){const{poolAddress:M,index:F}=d[E];h==M&&Number(F)==Number(p)&&(w=!0),O={pool_address:h,position_index:p}}w||await q.subscribePosition(O,"",!1,!1)}},fe=async()=>{await q.getSourceGroups();const d=$.value.sourceGroups&&$.value.sourceGroups.length>0&&$.value.sourceGroups[0]&&$.value.sourceGroups[0].sources||[];for(let i=0;i<d.length;i++){const{pool_address:m,position_index:h}=JSON.parse(d[i].blockchainAddress),{name:p}=d[i],w={pool_address:m,position_index:h};await q.subscribePosition(w,p,!1,!1)}},l=g(()=>f.value.myPositionsLoading);W(()=>f.value.myPositions,(d,i)=>{c.value.hasNotifi&&(d&&d.length>0&&i&&i.length!==d.length?ce(d):d&&d.length==0&&!l.value&&fe())},{immediate:!0});const U=d=>{var i;return(d==null?void 0:d.logoURI)||(d==null?void 0:d.logo_url)||((i=n.value.tokensObj[d==null?void 0:d.address])==null?void 0:i.logo_url)||(R.value.theme==="default"?ne("/image/coins/unknown.png"):ne("/image/coins/sui-unknown.png"))},P=N(null),A=g(()=>P.value&&P.value.firstToken?P.value.firstToken:null),y=g(()=>P.value&&P.value.lastToken?P.value.lastToken:null),J=g(()=>{let d=[];d=k.value;const i=d.filter((m,h)=>A.value&&y.value?m.coinA.symbol==A.value.symbol&&m.coinB.symbol==y.value.symbol||m.coinA.symbol==y.value.symbol&&m.coinB.symbol==A.value.symbol:A.value?m.coinA.symbol.toLowerCase().includes(A.value.symbol.toLowerCase())||m.coinB.symbol.toLowerCase().includes(A.value.symbol.toLowerCase()):y.value?m.coinA.symbol.toLowerCase().includes(y.value.symbol.toLowerCase())||m.coinB.symbol.toLowerCase().includes(y.value.symbol.toLowerCase()):d);return n.value.myPositionsLoading||L.setPositiomAmount(i.length),i});return xe(()=>{L.setPositiomAmount("--")}),{showList:J,childTokenSelectRef:P,firstToken:A,lastToken:y,getCoinIcon:U,changeSortLabel:x,label:Q,labelList:X,labelValue:G,select:z,selectValue:pe,t:b,pools:n,store:R,wallet:B,list:k,clickRefresh:re,refresh:e,current:j,router:C,searchKey:I}}});const Oe=e=>(be("data-v-a9330e48"),e=e(),Ie(),e),Va={class:"upgrade-position-list-container"},Ha={class:"content-top"},Ga={class:"content-top-left"},qa={class:"content-top-right"},Ma={class:"value"},Wa=Oe(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),za=[Wa],Ja={key:0,class:"select-item"},Ka=["onClick"],Za={class:"search-select-box"},Qa=Oe(()=>s("span",null,"TVL",-1)),Xa={key:0,src:Pe,alt:""},Ya={key:1,class:"fan-img",src:Pe,alt:""},xa={key:0,class:"upgrade-loading"},en={key:1,class:"position-list"},sn={key:2,class:"no-data"},on={key:0,src:os,alt:""},an={key:1,src:as,alt:""},nn={key:3,class:"no-data"},tn={key:0,src:ns,alt:""},rn={key:1,src:ts,alt:""};function dn(e,b,j,C,I,L){const R=Fe,c=Ve,k=Ea,S=es;return t(),r("div",Va,[s("div",Ha,[s("div",Ga,[V(R,{ref:"childTokenSelectRef"},null,512)]),s("div",qa,[e.store.theme=="default"?(t(),r("div",{key:0,class:"search-label",onClick:b[0]||(b[0]=ye(n=>e.label=!e.label,["stop"]))},[s("span",null,a(e.$t("newAdd.label")),1),s("div",Ma,a(e.labelValue),1),(t(),r("svg",{"aria-hidden":"true",class:ae(e.label?"show-icon icon":"icon")},za,2)),e.label?(t(),r("div",Ja,[(t(!0),r(K,null,Z(e.labelList,(n,H)=>(t(),r("div",{key:H,class:"select-menu-item",onClick:B=>e.changeSortLabel(n)},a(n),9,Ka))),128))])):_("",!0)])):_("",!0),s("div",Za,[s("div",{class:"search-select",onClick:b[1]||(b[1]=ye(n=>e.select=!e.select,["stop"]))},[te(a(e.$t("newAdd.sortBy"))+" ",1),s("div",null,[Qa,e.select?(t(),r("img",Xa)):(t(),r("img",Ya))])])])])]),e.pools.myPositionsLoading&&e.wallet.connected?(t(),r("div",xa,[V(c,{loading:e.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):_("",!0),e.showList&&e.showList.length>0&&e.wallet.connected&&!e.pools.myPositionsLoading?(t(),r("div",en,[(t(!0),r(K,null,Z(e.showList,(n,H)=>(t(),Re(k,{key:H,"p-item":n},null,8,["p-item"]))),128))])):_("",!0),e.showList&&e.showList.length<=0&&!e.pools.myPositionsLoading&&e.wallet.connected?(t(),r("div",sn,[e.store.theme=="default"?(t(),r("img",on)):(t(),r("img",an)),s("span",null,a(e.$t("common.noLiquidityPositions")),1)])):_("",!0),e.wallet.connected?_("",!0):(t(),r("div",nn,[e.store.theme=="default"?(t(),r("img",tn)):(t(),r("img",rn)),V(S,{class:"connect-wallet",onClick:b[2]||(b[2]=n=>e.wallet.setIsShowWalletModal(!0))},{default:ve(()=>[te(a(e.$t("button.connectWallet")),1)]),_:1})]))])}const Cn=ge(Fa,[["render",dn],["__scopeId","data-v-a9330e48"]]);export{Cn as default};
