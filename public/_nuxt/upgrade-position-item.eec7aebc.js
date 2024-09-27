import{_ as we}from"./status-block.599d132a.js";import{b as ae,g as M,c as fe,u as ce}from"./pool.c995c591.js";import{a as te,l as re,m as I,e as ie,o as t,f as r,h as s,i as w,u as n,v as o,c as Re,w as b,x as m,j as c,z,Q as de,p as me,k as le,b as ye,r as j,G as Ce,y as Ue,q as $e,t as g,O as A,F as y,s as S,a3 as Ne,Y as Oe}from"./entry.69b7b6a8.js";/* empty css              */import{c as je,k as Se,g as i,B as Ae,w as _e,i as _,n as De,b as l,I as Y}from"./index.67c45b5d.js";import{_ as Pe}from"./farms-valid-range.a4354ada.js";import"./index.0d2b4586.js";import{i as Q}from"./import-icon.de3e6c66.js";import{D as Fe}from"./decimal.0bdeb344.js";import{u as Be}from"./farms.319a1152.js";import{_ as G}from"./icon_farms_2x.67d5a069.js";import{_ as pe}from"./icon_rewards_2x.ffcb14a7.js";import{_ as Te}from"./icon-arrow_2x.948aedb2.js";import{_ as Ee}from"./icon-arrow_2x.4ffddb8e.js";import{_ as Le}from"./farms.f8ad5047.js";const qe=te({props:{pItem:{type:Object,required:!0},currentStatus:{type:String,required:!0},rewarderInfo:{type:Number,required:!0},aprAmount:{type:Number,required:!0}},setup(e){const{t:u}=re(),C=ae(),$=I(()=>C),R=I(()=>$.value.chainName),N=I(()=>je[R.value]),d=I(()=>$.value.currentExplorer);return{getExplorerUrl:M,store:$,config:N,t:u,currentExplorer:d}}});const ue=e=>(me("data-v-9228b1af"),e=e(),le(),e),Ve={class:"status-block-box"},He={key:0,class:"owner-addres"},Me=["href"],ze=["href"],Ge={class:"copy-link"},Qe=ue(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),Ye=["href"],Je=ue(()=>s("svg",{class:"icon","aria-hidden":"true"},[c(" > "),s("use",{"xlink:href":"#icon-icon-link1"})],-1)),Ke=[Je];function We(e,u,C,$,R,N){const d=we,f=de;return t(),r("div",{class:z(["upgrade-position-status",`position-status-${e.pItem.currentStatus.toLowerCase()}`])},[s("div",Ve,[w(d,{class:"status-block","current-status":e.pItem.currentStatus||"","is-pause":e.pItem.is_pause,"apr-amount":e.aprAmount,"block-name":"position"},null,8,["current-status","is-pause","apr-amount"])]),e.pItem.tokenName?(t(),r("div",He,[e.pItem.tokenName.length<=24?(t(),r("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:n(M))(e.currentExplorer,"nftAddress",e.pItem.nftHash||e.pItem.id),target:"_blank"},o(e.pItem.tokenName.split("|")[1]),9,Me)):(t(),Re(f,{key:1,placement:"bottom","arrow-point-at-center":""},{title:b(()=>[s("span",null,o(e.pItem.tokenName),1)]),default:b(()=>[s("a",{target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:n(M))(e.currentExplorer,"nftAddress",e.pItem.nftHash||e.pItem.id)},o(e.pItem.tokenName.substr(0,4))+" ... "+o(e.pItem.tokenName.substr(e.pItem.tokenName.length-4,4)),9,ze)]),_:1}))])):m("",!0),s("div",Ge,[(t(),r("svg",{class:"icon","aria-hidden":"true",onClick:u[0]||(u[0]=D=>e.store.copy(e.pItem.nftHash||e.pItem.id))},[c(" > "),Qe])),e.pItem.tokenName.length<=24?(t(),r("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:n(M))(e.currentExplorer,"nftAddress",e.pItem.nftHash||e.pItem.id),target:"_blank"},Ke,8,Ye)):m("",!0)])],2)}const Xe=ie(qe,[["render",We],["__scopeId","data-v-9228b1af"]]),Ze=te({props:{pItem:{type:Object,required:!0}},setup(e){const{t:u}=re(),C=ye(),$=ae(),R=I(()=>$);I(()=>R.value.chainName?fe(R.value.chainName):{});const N=ce(),d=I(()=>N),f=()=>{N.setPositionDetailCurrentTab("increase"),R.value.chainName==="Aptos"?C.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):e.pItem.positionSource=="clmm"?C.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`):C.push(`/new-position-detail?position_nft_id=${e.pItem.id}&positionSource=farming`)},D=I(()=>d.value.allTokenObj&&e.pItem.token_a.address&&d.value.allTokenObj[e.pItem.token_a.address]&&d.value.allTokenObj[e.pItem.token_a.address].logo_url),O=I(()=>d.value.allTokenObj&&e.pItem.token_b.address&&d.value.allTokenObj[e.pItem.token_b.address]&&d.value.allTokenObj[e.pItem.token_b.address].logo_url),v=I(()=>d.value.feeOwedObj[e.pItem.tokenName]&&d.value.feeOwedObj[e.pItem.tokenName].feeOwed),P=I(()=>d.value.feeOwedObj[e.pItem.tokenName]&&d.value.feeOwedObj[e.pItem.tokenName].feesResult),F=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarder||0),B=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarderView||0),T=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),E=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].farmingRewardList),L=j(0),q=j();Ce(()=>d.value.RATES,k=>{k&&(q.value=k)},{immediate:!0});const V=k=>{var U;return(k==null?void 0:k.logoURI)||(k==null?void 0:k.logo_url)||((U=d.value.tokensObj[k==null?void 0:k.address])==null?void 0:U.logo_url)||(R.value.theme==="default"?Q("/image/coins/unknown.png"):Q("/image/coins/sui-unknown.png"))},H=I(()=>d.value.tokensObj);Ue(()=>{ke(e.pItem.minPrice,e.pItem.maxPrice)});const a=j("--"),ke=(k,U)=>{k!=="0"&&U!=="∞"?a.value=Se(1/(1-Number((k/U)**.25)),2)+"x":a.value="1x"};j(30);const h=j(null),ve=I(()=>{var k,U,J,K,W,X,Z,x,ee,se,oe,ne;return h.value?h.value.is_display_rewarder?(k=h.value)!=null&&k.aprPercentageTotal?((U=h.value)==null?void 0:U.aprPercentageTotal)>1e4?">10,000":((J=h.value)==null?void 0:J.aprPercentageTotal)<.01&&((K=h.value)==null?void 0:K.aprPercentageTotal)>0?"<0.01":i((W=h.value)==null?void 0:W.aprPercentageTotal,2):(X=h.value)!=null&&X.rewardAprList?"0":"--":(Z=h.value)!=null&&Z.aprFee?((x=h.value)==null?void 0:x.aprFee)>1e4?">10,000":((ee=h.value)==null?void 0:ee.aprFee)<.01&&((se=h.value)==null?void 0:se.aprFee)>0?"<0.01":i((oe=h.value)==null?void 0:oe.aprFee,2):(ne=h.value)!=null&&ne.rewardAprList?"0":"--":"--"}),he=Be(),ge=I(()=>he),be=I(()=>ge.value.farmsPoolObj);return{isLpBurn:j(!0),aprNum:ve,lever:a,tokensObj:H,showNum:Ae,fromCoinUrl:D,toCoinUrl:O,decimalFormat:_e,clickDetails:f,t:u,addCommom:i,importIcon:Q,router:C,store:R,pendingRewarder:F,pendingFees:v,pendingRewarderArr:T,pendingFeesArr:P,checkNullObj:_,fixD:De,decimalUi:l,pendingRewarderView:B,aprAmount:L,getCoinIcon:V,Decimal:Fe,farmsPoolObj:be,farmingRewardList:E,formatCurrency:Y}}}),Ie=""+new URL("burn-lock.a332698e.png",import.meta.url).href,xe=""+globalThis.__publicAssetsURL("sui-image/rewards.gif");const p=e=>(me("data-v-24dd13b1"),e=e(),le(),e),es={class:"upgrade-position-item"},ss={class:"card-content"},os={class:"left"},ns={class:"top card-header"},as={class:"token-item h5-token-item"},ts={class:"item"},rs={key:0,class:"token-warning"},is={key:0},ds={class:"item"},ms={key:0,class:"token-warning"},ls={key:0},ps={class:"token-item pc-token-item"},us={class:"item"},Is={class:"img-token"},ks={key:0,class:"token-warning"},vs={class:"img-token"},hs={key:0,class:"token-warning"},gs={class:"item item-right"},bs={class:"symbol"},ws={class:"fee-tier"},fs={class:"label"},cs={key:0},Rs=p(()=>s("p",null," - ",-1)),ys={key:0},Cs={class:"card-header-right"},Us=p(()=>s("div",null,[s("span",null," Leverage "),s("svg",{"aria-hidden":"true",class:"icon"},[s("use",{"xlink:href":"#icon-icon-tips1"})])],-1)),$s=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),Ns=p(()=>s("span",null,"Farm",-1)),Os=p(()=>s("svg",{class:"arrow-icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_arrow"})],-1)),js=[$s,Ns,Os],Ss={class:"bottom"},As={class:"info-block-container"},_s={class:"leabl"},Ds={class:"text"},Ps={key:0,class:"hover-rewarder"},Fs={class:"rewarder-info"},Bs={class:"left-rewarder"},Ts={alt:""},Es={class:"right-rewarder"},Ls={class:"amount"},qs={key:0,class:"amount-usd"},Vs={key:1,class:"amount-usd"},Hs={class:"rewarder-info"},Ms={class:"left-rewarder"},zs={alt:""},Gs={class:"right-rewarder"},Qs={class:"amount"},Ys={key:0,class:"amount-usd"},Js={key:1,class:"amount-usd"},Ks=p(()=>s("span",null," Liquidity that is permanently locked ",-1)),Ws={key:0,class:"lock-img",src:Ie,alt:""},Xs={class:"leabl"},Zs={key:0,class:"text"},xs={key:1,class:"text"},eo={class:"hover-rewarder"},so={class:"left-rewarder"},oo={alt:""},no={class:"right-rewarder"},ao={class:"amount"},to={class:"amount-usd"},ro={key:2,class:"text"},io={class:"label-box"},mo={key:0,class:"leabl"},lo=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),po=[lo],uo={key:1,class:"leabl"},Io=p(()=>s("img",{class:"img-default",src:pe,alt:""},null,-1)),ko=[Io],vo={key:0,class:"text"},ho={class:"hover-rewarder"},go=p(()=>s("div",{class:"title"},"Mining Rewards",-1)),bo={class:"left-rewarder"},wo={alt:""},fo={class:"right-rewarder"},co={class:"amount"},Ro={class:"amount-usd"},yo=p(()=>s("div",{class:"title"},"Farming Rewards",-1)),Co={class:"left-rewarder"},Uo={alt:""},$o={class:"right-rewarder"},No={class:"amount"},Oo={class:"amount-usd"},jo={key:1,class:"text"},So=p(()=>s("div",{class:"more"},[s("svg",{class:"arrow-icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_arrow"})])],-1)),Ao={class:"h5-bottom"},_o=p(()=>s("div",null,[s("span",null," Leverage "),s("svg",{"aria-hidden":"true",class:"icon"},[s("use",{"xlink:href":"#icon-icon-tips1"})])],-1)),Do=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),Po=p(()=>s("span",null,"Farm",-1)),Fo=p(()=>s("svg",{class:"arrow-icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_arrow"})],-1)),Bo=[Do,Po,Fo],To={class:"info"},Eo={class:"info-item"},Lo=p(()=>s("div",{class:"left"},"Fee Tier",-1)),qo={class:"right"},Vo={class:"info-item range-item"},Ho={class:"left"},Mo={class:"right"},zo={class:"min-and-max"},Go={class:"text"},Qo={key:0,src:Te,alt:""},Yo={key:1,src:Ee,alt:""},Jo={class:"text"},Ko={class:"info-item"},Wo=p(()=>s("div",{class:"left"},"Liquidity",-1)),Xo={class:"right"},Zo={key:0,class:"lock-img",src:Ie,alt:""},xo={key:0,class:"hover-rewarder"},en={class:"rewarder-info"},sn={class:"left-rewarder"},on={alt:""},nn={class:"right-rewarder"},an={class:"amount"},tn={key:0,class:"amount-usd"},rn={key:1,class:"amount-usd"},dn={class:"rewarder-info"},mn={class:"left-rewarder"},ln={alt:""},pn={class:"right-rewarder"},un={class:"amount"},In={key:0,class:"amount-usd"},kn={key:1,class:"amount-usd"},vn={class:"info-item"},hn=p(()=>s("div",{class:"left"},"Pending Fees",-1)),gn={key:0,class:"right"},bn={key:1,class:"right"},wn={key:2,class:"right"},fn={key:3,class:"hover-rewarder"},cn={class:"left-rewarder"},Rn={alt:""},yn={class:"right-rewarder"},Cn={class:"amount"},Un={class:"amount-usd"},$n={key:0,class:"info-item"},Nn={class:"left"},On={key:0,class:"leabl"},jn=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),Sn=p(()=>s("img",{class:"img-hover",src:Le,alt:""},null,-1)),An=[jn,Sn],_n={key:1,class:"leabl"},Dn=p(()=>s("img",{class:"img-default",src:pe,alt:""},null,-1)),Pn=p(()=>s("img",{class:"img-hover",src:xe,alt:""},null,-1)),Fn=[Dn,Pn],Bn={key:0,class:"right"},Tn={key:1,class:"right"},En={key:2,class:"hover-rewarder"},Ln=p(()=>s("div",{class:"title"},"Mining Rewards",-1)),qn={class:"left-rewarder"},Vn={alt:""},Hn={class:"right-rewarder"},Mn={class:"amount"},zn={class:"amount-usd"},Gn=p(()=>s("div",{class:"title"},"Farming Rewards",-1)),Qn={class:"left-rewarder"},Yn={alt:""},Jn={class:"right-rewarder"},Kn={class:"amount"},Wn={class:"amount-usd"};function Xn(e,u,C,$,R,N){var P,F,B,T,E,L,q,V,H;const d=Xe,f=de,D=Pe,O=Oe,v=$e("image");return t(),r("div",es,[s("div",ss,[s("div",os,[w(d,{"p-item":e.pItem,"current-status":((P=e.pItem)==null?void 0:P.currentStatus)||"","rewarder-info":e.pendingRewarder,"apr-amount":e.aprAmount},null,8,["p-item","current-status","rewarder-info","apr-amount"])]),s("div",{class:"right",onClick:u[3]||(u[3]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",ns,[s("div",as,[s("div",ts,[s("div",null,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt)?(t(),r("div",rs)):m("",!0),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("p",null,[c(o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" ",1),e.store.theme=="default"?(t(),r("span",is,o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)):m("",!0)])]),s("div",ds,[s("div",null,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt)?(t(),r("div",ms)):m("",!0),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("p",null,[c(o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" ",1),e.store.theme=="default"?(t(),r("span",ls,o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)):m("",!0)])])]),s("div",ps,[s("div",us,[s("div",null,[s("div",Is,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt)?(t(),r("div",ks)):m("",!0)]),s("div",vs,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt)?(t(),r("div",hs)):m("",!0)])])]),s("div",gs,[s("div",bs,[s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol)+" - "+o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1),s("span",ws,o(e.pItem.fee*100)+"%",1)]),s("div",fs,[s("p",null,[c(o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" ",1),e.store.theme=="default"?(t(),r("span",cs,o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)):m("",!0)]),Rs,s("p",null,[c(o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" ",1),e.store.theme=="default"?(t(),r("span",ys,o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)):m("",!0)])])])]),s("div",Cs,[s("div",{class:"item",onClick:u[0]||(u[0]=A(()=>{},["stop"]))},[w(f,{"overlay-class-name":"lever-tooltip"},{title:b(()=>[c("This parameter indicates the concentration rate of your liquidity relative to a full range position.")]),default:b(()=>[Us]),_:1}),s("p",null,o(e.lever),1)]),e.pItem.isStableFarming?(t(),r("div",{key:0,class:"farming-logo",onClick:u[1]||(u[1]=A(a=>e.$router.push("/farms"),["stop"]))},js)):m("",!0)])]),s("div",Ss,[s("div",As,[s("div",{class:"info-block",onClick:u[2]||(u[2]=A(()=>{},["stop"]))},[w(D,{"pool-info":{...e.pItem,minPrice:e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("decimalUi"in e?e.decimalUi:n(l))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6):("decimalUi"in e?e.decimalUi:n(l))(e.pItem.minPrice,6),maxPrice:(e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("decimalUi"in e?e.decimalUi:n(l))(1/e.pItem.minPrice,6):("decimalUi"in e?e.decimalUi:n(l))(e.pItem.maxPrice,6)},platform:"position"},null,8,["pool-info"])]),s("div",{class:z(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[s("div",_s,o(e.$t("common.liquidity")),1),s("div",Ds,[w(f,{"overlay-class-name":"position-tooltip"},{title:b(()=>[e.pItem.amountUSD>0?(t(),r("div",Ps,[s("div",Fs,[s("div",Bs,[g(s("img",Ts,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",Es,[s("div",Ls,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(t(),r("div",Vs,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(i))(e.pItem.tokenBRates,2):"<$0.01"),1)):(t(),r("div",qs,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(i))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",Hs,[s("div",Ms,[g(s("img",zs,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",Gs,[s("div",Qs,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(t(),r("div",Js,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.tokenARates,2)):"<$0.01"),1)):(t(),r("div",Ys,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):m("",!0)]),default:b(()=>[s("span",null," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:n(i))(e.pItem.amountUSD,2)),1)]),_:1}),w(f,{"arrow-point-at-center":""},{title:b(()=>[Ks]),default:b(()=>[e.isLpBurn?(t(),r("img",Ws)):m("",!0)]),_:1})])],2),s("div",{class:z(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[s("div",Xs,o(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(t(),r("div",Zs,"$ --")):isNaN(e.pendingFees)?(t(),r("div",ro,[w(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),r("div",xs,[w(f,{"overlay-class-name":"position-tooltip"},{title:b(()=>[s("div",eo,[(t(!0),r(y,null,S(e.pendingFeesArr,a=>(t(),r("div",{key:a,class:"rewarder-info"},[s("div",so,[g(s("img",oo,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",no,[s("div",ao,o(Number(a.amount)==0?0:("formatCurrency"in e?e.formatCurrency:n(Y))(a.amount,a.decimals,!0,!1,!1)),1),s("div",to,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(i))(a.amountUSD,2):"<$0.01"),1)])]))),128))])]),default:b(()=>[s("span",null,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:n(i))(e.pendingFees,2)),1)]),_:1})]))],2),e.pItem.is_display_rewarder&&((F=e.pItem)!=null&&F.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(_))((B=e.pItem)==null?void 0:B.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0||e.pItem.rewards&&e.pItem.rewards.length>0?(t(),r("div",{key:0,class:z(["info-block cursor-block",[e.pendingRewarder==0&&e.pItem.rewards&&e.pItem.rewards.length==0?"block-none ":"",Number(e.pendingRewarder)==0?" block-none-reward":""].join(",")])},[s("div",io,[e.pItem.rewards&&e.pItem.rewards.length>0?(t(),r("div",mo,po)):m("",!0),e.pItem.is_display_rewarder&&((T=e.pItem)!=null&&T.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(_))((E=e.pItem)==null?void 0:E.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(t(),r("div",uo,ko)):m("",!0),s("span",null,o(e.$t("newAdd.pendingRewards")),1)]),e.pendingRewarder||e.pendingRewarder==0||e.pItem.farmingRewardTotalUsd?(t(),r("div",vo,[w(f,{"overlay-class-name":"position-tooltip"},Ne({default:b(()=>[s("span",null,o(e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd>.01?`$${("addCommom"in e?e.addCommom:n(i))(e.pendingRewarder+e.pItem.farmingRewardTotalUsd,2)}`:e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd<=.01?"<$0.01":"$0"),1)]),_:2},[e.pendingRewarder>0?{name:"title",fn:b(()=>[s("div",ho,[go,(t(!0),r(y,null,S(e.pendingRewarderArr,a=>(t(),r("div",{key:a,class:"rewarder-info"},[s("div",bo,[g(s("img",wo,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",fo,[s("div",co,o(("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(a.amount,a.decimals))),1),s("div",Ro,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(i))(a.amountUSD,2):"<$0.01"),1)])]))),128)),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),r(y,{key:0},[yo,(t(!0),r(y,null,S(e.pItem.rewards,a=>(t(),r("div",{key:a,class:"rewarder-info"},[s("div",Co,[g(s("img",Uo,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",$o,[s("div",No,o(("decimalUi"in e?e.decimalUi:n(l))(a.amount,a.decimals)),1),s("div",Oo,o(Number(a.rewarderAmountUsd)==0?"$0":Number(a.rewarderAmountUsd)>.01?"$"+("addCommom"in e?e.addCommom:n(i))(a.rewarderAmountUsd,2):"<$0.01"),1)])]))),128))],64)):m("",!0)])]),key:"0"}:void 0]),1024)])):(t(),r("div",jo,[w(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})]))],2)):m("",!0),So])])])]),s("div",Ao,[s("div",{class:"card-header-right",onClick:u[6]||(u[6]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",{class:"item",onClick:u[4]||(u[4]=A(()=>{},["stop"]))},[w(f,{"overlay-class-name":"lever-tooltip",placement:"topRight"},{title:b(()=>[c("This parameter indicates the concentration rate of your liquidity relative to a full range position.")]),default:b(()=>[_o]),_:1}),s("p",null,o(e.lever),1)]),e.pItem.isStableFarming?(t(),r("div",{key:0,class:"farming-logo",onClick:u[5]||(u[5]=A(a=>e.$router.push("/farms"),["stop"]))},Bo)):m("",!0)]),s("div",To,[s("div",Eo,[Lo,s("div",qo,o(e.pItem.fee*100)+"%",1)]),s("div",Vo,[s("div",Ho,[c(" Price Range ("),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol)+")",1)]),s("div",Mo,[s("div",zo,[s("div",Go,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.minPrice,6))),1),e.store.theme=="default"?(t(),r("img",Qo)):(t(),r("img",Yo)),s("div",Jo,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.maxPrice,6))),1)])])]),s("div",Ko,[Wo,s("div",Xo,[c(" $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:n(i))(e.pItem.amountUSD,2))+" ",1),e.isLpBurn?(t(),r("img",Zo)):m("",!0)]),e.pItem.amountUSD>0?(t(),r("div",xo,[s("div",en,[s("div",sn,[g(s("img",on,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",nn,[s("div",an,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(t(),r("div",rn,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(i))(e.pItem.tokenBRates,2):"<$0.01"),1)):(t(),r("div",tn,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(i))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",dn,[s("div",mn,[g(s("img",ln,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",pn,[s("div",un,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(t(),r("div",kn,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.tokenARates,2)):"<$0.01"),1)):(t(),r("div",In,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):m("",!0)]),s("div",vn,[hn,e.pendingFees==="--"?(t(),r("div",gn,"$ --")):isNaN(e.pendingFees)?(t(),r("div",wn,[w(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),r("div",bn,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:n(i))(e.pendingFees,2)),1)),e.pendingFees>0?(t(),r("div",fn,[(t(!0),r(y,null,S(e.pendingFeesArr,a=>(t(),r("div",{key:a,class:"rewarder-info"},[s("div",cn,[g(s("img",Rn,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",yn,[s("div",Cn,o(Number(a.amount)==0?0:("formatCurrency"in e?e.formatCurrency:n(Y))(a.amount,a.decimals,!0,!1,!1)),1),s("div",Un,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(i))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):m("",!0)]),e.pItem.is_display_rewarder&&((L=e.pItem)!=null&&L.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(_))((q=e.pItem)==null?void 0:q.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0||e.pItem.rewards&&e.pItem.rewards.length>0?(t(),r("div",$n,[s("div",Nn,[s("span",null,o(e.$t("newAdd.pendingRewards")),1),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),r("div",On,An)):m("",!0),e.pItem.is_display_rewarder&&((V=e.pItem)!=null&&V.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(_))((H=e.pItem)==null?void 0:H.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(t(),r("div",_n,Fn)):m("",!0)]),e.pendingRewarder||e.pendingRewarder==0||e.pItem.farmingRewardTotalUsd?(t(),r("div",Bn,o(e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd>.01?`$${("addCommom"in e?e.addCommom:n(i))(e.pendingRewarder+e.pItem.farmingRewardTotalUsd,2)}`:e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd<=.01?"<$0.01":"$0"),1)):(t(),r("div",Tn,[w(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])),e.pendingRewarder>0||e.pItem.rewards&&e.pItem.rewards.length>0?(t(),r("div",En,[e.pendingRewarder>0?(t(),r(y,{key:0},[Ln,(t(!0),r(y,null,S(e.pendingRewarderArr,a=>(t(),r("div",{key:a,class:"rewarder-info"},[s("div",qn,[g(s("img",Vn,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",Hn,[s("div",Mn,o(("addCommom"in e?e.addCommom:n(i))(("decimalUi"in e?e.decimalUi:n(l))(a.amount,a.decimals))),1),s("div",zn,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(i))(a.amountUSD,2):"<$0.01"),1)])]))),128))],64)):m("",!0),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),r(y,{key:1},[Gn,(t(!0),r(y,null,S(e.pItem.rewards,a=>(t(),r("div",{key:a,class:"rewarder-info"},[s("div",Qn,[g(s("img",Yn,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",Jn,[s("div",Kn,o(("decimalUi"in e?e.decimalUi:n(l))(a.amount,a.decimals)),1),s("div",Wn,o(Number(a.rewarderAmountUsd)==0?"$0":Number(a.rewarderAmountUsd)>.01?"$"+("addCommom"in e?e.addCommom:n(i))(a.rewarderAmountUsd,2):"<$0.01"),1)])]))),128))],64)):m("",!0)])):m("",!0)])):m("",!0)])])])}const ka=ie(Ze,[["render",Xn],["__scopeId","data-v-24dd13b1"]]);export{ka as _};
