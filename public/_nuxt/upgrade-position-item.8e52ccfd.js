import{_ as we}from"./status-block.534c08bd.js";import{b as ae,g as M,c as fe,u as ce}from"./pool.9a5cddd3.js";import{a as te,l as ie,m as I,e as re,o as t,f as i,h as s,i as b,u as n,v as o,c as Re,w,x as m,j as f,z,Q as de,p as me,k as le,b as ye,r as j,G as Ce,y as Ue,q as $e,t as g,O as A,F as y,s as S,a3 as Ne,Y as Oe}from"./entry.17136172.js";/* empty css              */import{c as je,k as Se,g as r,B as Ae,w as _e,i as _,n as De,b as l,I as Y}from"./index.0a5fc01d.js";import{_ as Pe}from"./farms-valid-range.aa59414a.js";import"./index.e0495629.js";import{i as Q}from"./import-icon.de3e6c66.js";import{D as Fe}from"./decimal.0bdeb344.js";import{u as Be}from"./farms.f6dc0129.js";import{_ as G}from"./icon_farms_2x.a8a75974.js";import{_ as pe}from"./icon_rewards_2x.c31123d8.js";import{_ as Te}from"./icon-arrow_2x.948aedb2.js";import{_ as Ee}from"./icon-arrow_2x.4ffddb8e.js";import{_ as Le}from"./farms.5ba324ca.js";const qe=te({props:{pItem:{type:Object,required:!0},currentStatus:{type:String,required:!0},rewarderInfo:{type:Number,required:!0},aprAmount:{type:Number,required:!0}},setup(e){const{t:u}=ie(),C=ae(),$=I(()=>C),c=I(()=>$.value.chainName),N=I(()=>je[c.value]),d=I(()=>$.value.currentExplorer);return{getExplorerUrl:M,store:$,config:N,t:u,currentExplorer:d}}});const ue=e=>(me("data-v-9228b1af"),e=e(),le(),e),Ve={class:"status-block-box"},He={key:0,class:"owner-addres"},Me=["href"],ze=["href"],Ge={class:"copy-link"},Qe=ue(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),Ye=["href"],Je=ue(()=>s("svg",{class:"icon","aria-hidden":"true"},[f(" > "),s("use",{"xlink:href":"#icon-icon-link1"})],-1)),Ke=[Je];function We(e,u,C,$,c,N){const d=we,R=de;return t(),i("div",{class:z(["upgrade-position-status",`position-status-${e.pItem.currentStatus.toLowerCase()}`])},[s("div",Ve,[b(d,{class:"status-block","current-status":e.pItem.currentStatus||"","is-pause":e.pItem.is_pause,"apr-amount":e.aprAmount,"block-name":"position"},null,8,["current-status","is-pause","apr-amount"])]),e.pItem.tokenName?(t(),i("div",He,[e.pItem.tokenName.length<=24?(t(),i("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:n(M))(e.currentExplorer,"nftAddress",e.pItem.nftHash||e.pItem.id),target:"_blank"},o(e.pItem.tokenName.split("|")[1]),9,Me)):(t(),Re(R,{key:1,placement:"bottom","arrow-point-at-center":""},{title:w(()=>[s("span",null,o(e.pItem.tokenName),1)]),default:w(()=>[s("a",{target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:n(M))(e.currentExplorer,"nftAddress",e.pItem.nftHash||e.pItem.id)},o(e.pItem.tokenName.substr(0,4))+" ... "+o(e.pItem.tokenName.substr(e.pItem.tokenName.length-4,4)),9,ze)]),_:1}))])):m("",!0),s("div",Ge,[(t(),i("svg",{class:"icon","aria-hidden":"true",onClick:u[0]||(u[0]=D=>e.store.copy(e.pItem.nftHash||e.pItem.id))},[f(" > "),Qe])),e.pItem.tokenName.length<=24?(t(),i("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:n(M))(e.currentExplorer,"nftAddress",e.pItem.nftHash||e.pItem.id),target:"_blank"},Ke,8,Ye)):m("",!0)])],2)}const Xe=re(qe,[["render",We],["__scopeId","data-v-9228b1af"]]),Ze=te({props:{pItem:{type:Object,required:!0}},setup(e){const{t:u}=ie(),C=ye(),$=ae(),c=I(()=>$);I(()=>c.value.chainName?fe(c.value.chainName):{});const N=ce(),d=I(()=>N),R=()=>{N.setPositionDetailCurrentTab("increase"),c.value.chainName==="Aptos"?C.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):e.pItem.positionSource=="clmm"?C.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`):C.push(`/new-position-detail?position_nft_id=${e.pItem.id}&positionSource=farming`)},D=I(()=>d.value.allTokenObj&&e.pItem.token_a.address&&d.value.allTokenObj[e.pItem.token_a.address]&&d.value.allTokenObj[e.pItem.token_a.address].logo_url),O=I(()=>d.value.allTokenObj&&e.pItem.token_b.address&&d.value.allTokenObj[e.pItem.token_b.address]&&d.value.allTokenObj[e.pItem.token_b.address].logo_url),v=I(()=>d.value.feeOwedObj[e.pItem.tokenName]&&d.value.feeOwedObj[e.pItem.tokenName].feeOwed),P=I(()=>d.value.feeOwedObj[e.pItem.tokenName]&&d.value.feeOwedObj[e.pItem.tokenName].feesResult),F=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarder||0),B=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarderView||0),T=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),E=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].farmingRewardList),L=j(0),q=j();Ce(()=>d.value.RATES,k=>{k&&(q.value=k)},{immediate:!0});const V=k=>{var U;return(k==null?void 0:k.logoURI)||(k==null?void 0:k.logo_url)||((U=d.value.tokensObj[k==null?void 0:k.address])==null?void 0:U.logo_url)||(c.value.theme==="default"?Q("/image/coins/unknown.png"):Q("/image/coins/sui-unknown.png"))},H=I(()=>d.value.tokensObj);Ue(()=>{ke(e.pItem.minPrice,e.pItem.maxPrice)});const a=j("--"),ke=(k,U)=>{k!=="0"&&U!=="∞"?a.value=Se(1/(1-Number((k/U)**.25)),2)+"x":a.value="1x"};j(30);const h=j(null),ve=I(()=>{var k,U,J,K,W,X,Z,x,ee,se,oe,ne;return h.value?h.value.is_display_rewarder?(k=h.value)!=null&&k.aprPercentageTotal?((U=h.value)==null?void 0:U.aprPercentageTotal)>1e4?">10,000":((J=h.value)==null?void 0:J.aprPercentageTotal)<.01&&((K=h.value)==null?void 0:K.aprPercentageTotal)>0?"<0.01":r((W=h.value)==null?void 0:W.aprPercentageTotal,2):(X=h.value)!=null&&X.rewardAprList?"0":"--":(Z=h.value)!=null&&Z.aprFee?((x=h.value)==null?void 0:x.aprFee)>1e4?">10,000":((ee=h.value)==null?void 0:ee.aprFee)<.01&&((se=h.value)==null?void 0:se.aprFee)>0?"<0.01":r((oe=h.value)==null?void 0:oe.aprFee,2):(ne=h.value)!=null&&ne.rewardAprList?"0":"--":"--"}),he=Be(),ge=I(()=>he),be=I(()=>ge.value.farmsPoolObj);return{isLpBurn:j(!0),aprNum:ve,lever:a,tokensObj:H,showNum:Ae,fromCoinUrl:D,toCoinUrl:O,decimalFormat:_e,clickDetails:R,t:u,addCommom:r,importIcon:Q,router:C,store:c,pendingRewarder:F,pendingFees:v,pendingRewarderArr:T,pendingFeesArr:P,checkNullObj:_,fixD:De,decimalUi:l,pendingRewarderView:B,aprAmount:L,getCoinIcon:V,Decimal:Fe,farmsPoolObj:be,farmingRewardList:E,formatCurrency:Y}}}),Ie=""+new URL("burn-lock.a332698e.png",import.meta.url).href,xe=""+globalThis.__publicAssetsURL("sui-image/rewards.gif");const p=e=>(me("data-v-148045a2"),e=e(),le(),e),es={class:"upgrade-position-item"},ss={class:"card-content"},os={class:"left"},ns={class:"top card-header"},as={class:"token-item h5-token-item"},ts={class:"item"},is={key:0,class:"token-warning"},rs={key:0},ds={class:"item"},ms={key:0,class:"token-warning"},ls={key:0},ps={class:"token-item pc-token-item"},us={class:"item"},Is={class:"img-token"},ks={key:0,class:"token-warning"},vs={class:"img-token"},hs={key:0,class:"token-warning"},gs={class:"item item-right"},bs={class:"symbol"},ws={class:"fee-tier"},fs={class:"label"},cs={key:0},Rs=p(()=>s("p",null," - ",-1)),ys={key:0},Cs={class:"card-header-right"},Us=p(()=>s("div",null,[s("span",null," Leverage "),s("svg",{"aria-hidden":"true",class:"icon"},[s("use",{"xlink:href":"#icon-icon-tips1"})])],-1)),$s=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),Ns=p(()=>s("span",null,"Farm",-1)),Os=p(()=>s("svg",{class:"arrow-icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_arrow"})],-1)),js=[$s,Ns,Os],Ss={class:"bottom"},As={class:"info-block-container"},_s={class:"leabl"},Ds={class:"text"},Ps={key:0,class:"hover-rewarder"},Fs={class:"rewarder-info"},Bs={class:"left-rewarder"},Ts={alt:""},Es={class:"right-rewarder"},Ls={class:"amount"},qs={key:0,class:"amount-usd"},Vs={key:1,class:"amount-usd"},Hs={class:"rewarder-info"},Ms={class:"left-rewarder"},zs={alt:""},Gs={class:"right-rewarder"},Qs={class:"amount"},Ys={key:0,class:"amount-usd"},Js={key:1,class:"amount-usd"},Ks={key:0,class:"lock-img",src:Ie,alt:""},Ws={class:"leabl"},Xs={key:0,class:"text"},Zs={key:1,class:"text"},xs={class:"hover-rewarder"},eo={class:"left-rewarder"},so={alt:""},oo={class:"right-rewarder"},no={class:"amount"},ao={class:"amount-usd"},to={key:2,class:"text"},io={class:"label-box"},ro={key:0,class:"leabl"},mo=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),lo=[mo],po={key:1,class:"leabl"},uo=p(()=>s("img",{class:"img-default",src:pe,alt:""},null,-1)),Io=[uo],ko={key:0,class:"text"},vo={class:"hover-rewarder"},ho=p(()=>s("div",{class:"title"},"Mining Rewards",-1)),go={class:"left-rewarder"},bo={alt:""},wo={class:"right-rewarder"},fo={class:"amount"},co={class:"amount-usd"},Ro=p(()=>s("div",{class:"title"},"Farming Rewards",-1)),yo={class:"left-rewarder"},Co={alt:""},Uo={class:"right-rewarder"},$o={class:"amount"},No={class:"amount-usd"},Oo={key:1,class:"text"},jo=p(()=>s("div",{class:"more"},[s("svg",{class:"arrow-icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_arrow"})])],-1)),So={class:"h5-bottom"},Ao=p(()=>s("div",null,[s("span",null," Leverage "),s("svg",{"aria-hidden":"true",class:"icon"},[s("use",{"xlink:href":"#icon-icon-tips1"})])],-1)),_o=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),Do=p(()=>s("span",null,"Farm",-1)),Po=p(()=>s("svg",{class:"arrow-icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_arrow"})],-1)),Fo=[_o,Do,Po],Bo={class:"info"},To={class:"info-item"},Eo=p(()=>s("div",{class:"left"},"Fee Tier",-1)),Lo={class:"right"},qo={class:"info-item range-item"},Vo={class:"left"},Ho={class:"right"},Mo={class:"min-and-max"},zo={class:"text"},Go={key:0,src:Te,alt:""},Qo={key:1,src:Ee,alt:""},Yo={class:"text"},Jo={class:"info-item"},Ko=p(()=>s("div",{class:"left"},"Liquidity",-1)),Wo={class:"right"},Xo={key:0,class:"lock-img",src:Ie,alt:""},Zo={key:0,class:"hover-rewarder"},xo={class:"rewarder-info"},en={class:"left-rewarder"},sn={alt:""},on={class:"right-rewarder"},nn={class:"amount"},an={key:0,class:"amount-usd"},tn={key:1,class:"amount-usd"},rn={class:"rewarder-info"},dn={class:"left-rewarder"},mn={alt:""},ln={class:"right-rewarder"},pn={class:"amount"},un={key:0,class:"amount-usd"},In={key:1,class:"amount-usd"},kn={class:"info-item"},vn=p(()=>s("div",{class:"left"},"Pending Fees",-1)),hn={key:0,class:"right"},gn={key:1,class:"right"},bn={key:2,class:"right"},wn={key:3,class:"hover-rewarder"},fn={class:"left-rewarder"},cn={alt:""},Rn={class:"right-rewarder"},yn={class:"amount"},Cn={class:"amount-usd"},Un={key:0,class:"info-item"},$n={class:"left"},Nn={key:0,class:"leabl"},On=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),jn=p(()=>s("img",{class:"img-hover",src:Le,alt:""},null,-1)),Sn=[On,jn],An={key:1,class:"leabl"},_n=p(()=>s("img",{class:"img-default",src:pe,alt:""},null,-1)),Dn=p(()=>s("img",{class:"img-hover",src:xe,alt:""},null,-1)),Pn=[_n,Dn],Fn={key:0,class:"right"},Bn={key:1,class:"right"},Tn={class:"hover-rewarder"},En=p(()=>s("div",{class:"title"},"Mining Rewards",-1)),Ln={class:"left-rewarder"},qn={alt:""},Vn={class:"right-rewarder"},Hn={class:"amount"},Mn={class:"amount-usd"},zn=p(()=>s("div",{class:"title"},"Farming Rewards",-1)),Gn={class:"left-rewarder"},Qn={alt:""},Yn={class:"right-rewarder"},Jn={class:"amount"},Kn={class:"amount-usd"};function Wn(e,u,C,$,c,N){var P,F,B,T,E,L,q,V,H;const d=Xe,R=de,D=Pe,O=Oe,v=$e("image");return t(),i("div",es,[s("div",ss,[s("div",os,[b(d,{"p-item":e.pItem,"current-status":((P=e.pItem)==null?void 0:P.currentStatus)||"","rewarder-info":e.pendingRewarder,"apr-amount":e.aprAmount},null,8,["p-item","current-status","rewarder-info","apr-amount"])]),s("div",{class:"right",onClick:u[3]||(u[3]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",ns,[s("div",as,[s("div",ts,[s("div",null,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt)?(t(),i("div",is)):m("",!0),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("p",null,[f(o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" ",1),e.store.theme=="default"?(t(),i("span",rs,o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)):m("",!0)])]),s("div",ds,[s("div",null,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt)?(t(),i("div",ms)):m("",!0),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("p",null,[f(o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" ",1),e.store.theme=="default"?(t(),i("span",ls,o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)):m("",!0)])])]),s("div",ps,[s("div",us,[s("div",null,[s("div",Is,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt)?(t(),i("div",ks)):m("",!0)]),s("div",vs,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt)?(t(),i("div",hs)):m("",!0)])])]),s("div",gs,[s("div",bs,[s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol)+" - "+o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1),s("span",ws,o(e.pItem.fee*100)+"%",1)]),s("div",fs,[s("p",null,[f(o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" ",1),e.store.theme=="default"?(t(),i("span",cs,o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)):m("",!0)]),Rs,s("p",null,[f(o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" ",1),e.store.theme=="default"?(t(),i("span",ys,o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)):m("",!0)])])])]),s("div",Cs,[s("div",{class:"item",onClick:u[0]||(u[0]=A(()=>{},["stop"]))},[b(R,{"overlay-class-name":"lever-tooltip"},{title:w(()=>[f("This parameter indicates the concentration rate of your liquidity relative to a full range position.")]),default:w(()=>[Us]),_:1}),s("p",null,o(e.lever),1)]),e.pItem.isStableFarming?(t(),i("div",{key:0,class:"farming-logo",onClick:u[1]||(u[1]=A(a=>e.$router.push("/farms"),["stop"]))},js)):m("",!0)])]),s("div",Ss,[s("div",As,[s("div",{class:"info-block",onClick:u[2]||(u[2]=A(()=>{},["stop"]))},[b(D,{"pool-info":{...e.pItem,minPrice:e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("decimalUi"in e?e.decimalUi:n(l))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6):("decimalUi"in e?e.decimalUi:n(l))(e.pItem.minPrice,6),maxPrice:(e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("decimalUi"in e?e.decimalUi:n(l))(1/e.pItem.minPrice,6):("decimalUi"in e?e.decimalUi:n(l))(e.pItem.maxPrice,6)},platform:"position"},null,8,["pool-info"])]),s("div",{class:z(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[s("div",_s,o(e.$t("common.liquidity")),1),s("div",Ds,[b(R,{"overlay-class-name":"position-tooltip"},{title:w(()=>[e.pItem.amountUSD>0?(t(),i("div",Ps,[s("div",Fs,[s("div",Bs,[g(s("img",Ts,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",Es,[s("div",Ls,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(t(),i("div",Vs,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(e.pItem.tokenBRates,2):"<$0.01"),1)):(t(),i("div",qs,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",Hs,[s("div",Ms,[g(s("img",zs,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",Gs,[s("div",Qs,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(t(),i("div",Js,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.tokenARates,2)):"<$0.01"),1)):(t(),i("div",Ys,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):m("",!0)]),default:w(()=>[s("span",null," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:n(r))(e.pItem.amountUSD,2)),1)]),_:1}),e.isLpBurn?(t(),i("img",Ks)):m("",!0)])],2),s("div",{class:z(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[s("div",Ws,o(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(t(),i("div",Xs,"$ --")):isNaN(e.pendingFees)?(t(),i("div",to,[b(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),i("div",Zs,[b(R,{"overlay-class-name":"position-tooltip"},{title:w(()=>[s("div",xs,[(t(!0),i(y,null,S(e.pendingFeesArr,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",eo,[g(s("img",so,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",oo,[s("div",no,o(Number(a.amount)==0?0:("formatCurrency"in e?e.formatCurrency:n(Y))(a.amount,a.decimals,!0,!1,!1)),1),s("div",ao,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.amountUSD,2):"<$0.01"),1)])]))),128))])]),default:w(()=>[s("span",null,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:n(r))(e.pendingFees,2)),1)]),_:1})]))],2),e.pItem.is_display_rewarder&&((F=e.pItem)!=null&&F.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(_))((B=e.pItem)==null?void 0:B.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0||e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",{key:0,class:z(["info-block cursor-block",[e.pendingRewarder==0&&e.pItem.rewards&&e.pItem.rewards.length==0?"block-none ":"",Number(e.pendingRewarder)==0?" block-none-reward":""].join(",")])},[s("div",io,[e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",ro,lo)):m("",!0),e.pItem.is_display_rewarder&&((T=e.pItem)!=null&&T.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(_))((E=e.pItem)==null?void 0:E.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(t(),i("div",po,Io)):m("",!0),s("span",null,o(e.$t("newAdd.pendingRewards")),1)]),e.pendingRewarder||e.pendingRewarder==0||e.pItem.farmingRewardTotalUsd?(t(),i("div",ko,[b(R,{"overlay-class-name":"position-tooltip"},Ne({default:w(()=>[s("span",null,o(e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd>.01?`$${("addCommom"in e?e.addCommom:n(r))(e.pendingRewarder+e.pItem.farmingRewardTotalUsd,2)}`:e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd<=.01?"<$0.01":"$0"),1)]),_:2},[e.pendingRewarder>0?{name:"title",fn:w(()=>[s("div",vo,[ho,(t(!0),i(y,null,S(e.pendingRewarderArr,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",go,[g(s("img",bo,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",wo,[s("div",fo,o(("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(a.amount,a.decimals))),1),s("div",co,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.amountUSD,2):"<$0.01"),1)])]))),128)),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i(y,{key:0},[Ro,(t(!0),i(y,null,S(e.pItem.rewards,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",yo,[g(s("img",Co,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",Uo,[s("div",$o,o(("decimalUi"in e?e.decimalUi:n(l))(a.amount,a.decimals)),1),s("div",No,o(Number(a.rewarderAmountUsd)==0?"$0":Number(a.rewarderAmountUsd)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.rewarderAmountUsd,2):"<$0.01"),1)])]))),128))],64)):m("",!0)])]),key:"0"}:void 0]),1024)])):(t(),i("div",Oo,[b(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})]))],2)):m("",!0),jo])])])]),s("div",So,[s("div",{class:"card-header-right",onClick:u[6]||(u[6]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",{class:"item",onClick:u[4]||(u[4]=A(()=>{},["stop"]))},[b(R,{"overlay-class-name":"lever-tooltip",placement:"topRight"},{title:w(()=>[f("This parameter indicates the concentration rate of your liquidity relative to a full range position.")]),default:w(()=>[Ao]),_:1}),s("p",null,o(e.lever),1)]),e.pItem.isStableFarming?(t(),i("div",{key:0,class:"farming-logo",onClick:u[5]||(u[5]=A(a=>e.$router.push("/farms"),["stop"]))},Fo)):m("",!0)]),s("div",Bo,[s("div",To,[Eo,s("div",Lo,o(e.pItem.fee*100)+"%",1)]),s("div",qo,[s("div",Vo,[f(" Price Range ("),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol)+")",1)]),s("div",Ho,[s("div",Mo,[s("div",zo,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.minPrice,6))),1),e.store.theme=="default"?(t(),i("img",Go)):(t(),i("img",Qo)),s("div",Yo,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.maxPrice,6))),1)])])]),s("div",Jo,[Ko,s("div",Wo,[f(" $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:n(r))(e.pItem.amountUSD,2))+" ",1),e.isLpBurn?(t(),i("img",Xo)):m("",!0)]),e.pItem.amountUSD>0?(t(),i("div",Zo,[s("div",xo,[s("div",en,[g(s("img",sn,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",on,[s("div",nn,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(t(),i("div",tn,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(e.pItem.tokenBRates,2):"<$0.01"),1)):(t(),i("div",an,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",rn,[s("div",dn,[g(s("img",mn,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",ln,[s("div",pn,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(t(),i("div",In,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.tokenARates,2)):"<$0.01"),1)):(t(),i("div",un,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):m("",!0)]),s("div",kn,[vn,e.pendingFees==="--"?(t(),i("div",hn,"$ --")):isNaN(e.pendingFees)?(t(),i("div",bn,[b(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),i("div",gn,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:n(r))(e.pendingFees,2)),1)),e.pendingFees>0?(t(),i("div",wn,[(t(!0),i(y,null,S(e.pendingFeesArr,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",fn,[g(s("img",cn,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",Rn,[s("div",yn,o(Number(a.amount)==0?0:("formatCurrency"in e?e.formatCurrency:n(Y))(a.amount,a.decimals,!0,!1,!1)),1),s("div",Cn,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):m("",!0)]),e.pItem.is_display_rewarder&&((L=e.pItem)!=null&&L.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(_))((q=e.pItem)==null?void 0:q.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0||e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",Un,[s("div",$n,[s("span",null,o(e.$t("newAdd.pendingRewards")),1),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",Nn,Sn)):m("",!0),e.pItem.is_display_rewarder&&((V=e.pItem)!=null&&V.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(_))((H=e.pItem)==null?void 0:H.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(t(),i("div",An,Pn)):m("",!0)]),e.pendingRewarder||e.pendingRewarder==0||e.pItem.farmingRewardTotalUsd?(t(),i("div",Fn,o(e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd>.01?`$${("addCommom"in e?e.addCommom:n(r))(e.pendingRewarder+e.pItem.farmingRewardTotalUsd,2)}`:e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd<=.01?"<$0.01":"$0"),1)):(t(),i("div",Bn,[b(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])),s("div",Tn,[e.pendingRewarder>0?(t(),i(y,{key:0},[En,(t(!0),i(y,null,S(e.pendingRewarderArr,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",Ln,[g(s("img",qn,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",Vn,[s("div",Hn,o(("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(l))(a.amount,a.decimals))),1),s("div",Mn,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.amountUSD,2):"<$0.01"),1)])]))),128))],64)):m("",!0),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i(y,{key:1},[zn,(t(!0),i(y,null,S(e.pItem.rewards,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",Gn,[g(s("img",Qn,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",Yn,[s("div",Jn,o(("decimalUi"in e?e.decimalUi:n(l))(a.amount,a.decimals)),1),s("div",Kn,o(Number(a.rewarderAmountUsd)==0?"$0":Number(a.rewarderAmountUsd)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.rewarderAmountUsd,2):"<$0.01"),1)])]))),128))],64)):m("",!0)])])):m("",!0)])])])}const Ia=re(Ze,[["render",Wn],["__scopeId","data-v-148045a2"]]);export{Ia as _};
