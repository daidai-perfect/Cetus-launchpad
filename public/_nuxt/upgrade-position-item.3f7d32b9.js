import{_ as be}from"./status-block.acb08eec.js";import{o as M,b as we,a as r,i as fe,g as ce,c as D,e as Re,d as m,B as K}from"./common.7b3188ac.js";import{a as ae,z as te,m as I,e as ie,o as t,f as i,h as s,i as b,u as n,x as o,c as ye,w,G as l,j as y,y as z,P as re,p as de,k as me,b as Ce,r as S,A as Ue,q as $e,C as Ne,I as g,D as A,F as R,E as j,a0 as Oe,S as je}from"./entry.8c071894.js";/* empty css              */import{u as le,b as Se,a as Ae}from"./index.a960bb3c.js";import{c as De}from"./index.e235d647.js";import{_ as _e}from"./farms-valid-range.3f06408f.js";import"./index.0614c8b1.js";import{i as J}from"./import-icon.de3e6c66.js";import"./decimal.a2826370.js";import{u as Pe}from"./farms.b499e62a.js";import{D as Fe}from"./decimal.765d8738.js";import{_ as G}from"./icon_farms_2x.9c05ee9b.js";import{_ as pe}from"./icon_rewards_2x.800d2c62.js";import{_ as Be}from"./icon-arrow_2x.948aedb2.js";import{_ as Te}from"./icon-arrow_2x.4ffddb8e.js";import{_ as Ee}from"./farms.f4d1d865.js";const Le=ae({props:{pItem:{type:Object,required:!0},currentStatus:{type:String,required:!0},rewarderInfo:{type:Number,required:!0},aprAmount:{type:Number,required:!0}},setup(e){const{t:u}=te(),C=le(),$=I(()=>C),f=I(()=>$.value.chainName),N=I(()=>De[f.value]),d=I(()=>$.value.currentExplorer);return{getExplorerUrl:M,store:$,config:N,t:u,currentExplorer:d}}});const ue=e=>(de("data-v-925437d2"),e=e(),me(),e),qe={class:"status-block-box"},Ve={key:0,class:"owner-addres"},He=["href"],Me=["href"],ze={class:"copy-link"},Ge=ue(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),Je=["href"],Ke=ue(()=>s("svg",{class:"icon","aria-hidden":"true"},[y(" > "),s("use",{"xlink:href":"#icon-icon-link1"})],-1)),Qe=[Ke];function We(e,u,C,$,f,N){const d=be,c=re;return t(),i("div",{class:z(["upgrade-position-status",`position-status-${e.pItem.currentStatus.toLowerCase()}`])},[s("div",qe,[b(d,{class:"status-block","current-status":e.pItem.currentStatus||"","is-pause":e.pItem.is_pause,"apr-amount":e.aprAmount,"block-name":"position"},null,8,["current-status","is-pause","apr-amount"])]),e.pItem.tokenName?(t(),i("div",Ve,[e.pItem.tokenName.length<=24?(t(),i("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:n(M))(e.currentExplorer,"nftAddress",e.pItem.nftHash||e.pItem.id),target:"_blank"},o(e.pItem.tokenName.split("|")[1]),9,He)):(t(),ye(c,{key:1,placement:"bottom","arrow-point-at-center":""},{title:w(()=>[s("span",null,o(e.pItem.tokenName),1)]),default:w(()=>[s("a",{target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:n(M))(e.currentExplorer,"nftAddress",e.pItem.nftHash||e.pItem.id)},o(e.pItem.tokenName.substr(0,4))+" ... "+o(e.pItem.tokenName.substr(e.pItem.tokenName.length-4,4)),9,Me)]),_:1}))])):l("",!0),s("div",ze,[(t(),i("svg",{class:"icon","aria-hidden":"true",onClick:u[0]||(u[0]=_=>e.store.copy(e.pItem.nftHash||e.pItem.id))},[y(" > "),Ge])),e.pItem.tokenName.length<=24?(t(),i("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:n(M))(e.currentExplorer,"nftAddress",e.pItem.nftHash||e.pItem.id),target:"_blank"},Qe,8,Je)):l("",!0)])],2)}const Xe=ie(Le,[["render",We],["__scopeId","data-v-925437d2"]]),Ye=ae({props:{pItem:{type:Object,required:!0}},setup(e){const{t:u}=te(),C=Ce(),$=le(),f=I(()=>$);I(()=>f.value.chainName?Se(f.value.chainName):{});const N=Ae(),d=I(()=>N),c=()=>{N.setPositionDetailCurrentTab("increase"),f.value.chainName==="Aptos"?C.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):e.pItem.positionSource=="clmm"?C.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`):C.push(`/new-position-detail?position_nft_id=${e.pItem.id}&positionSource=farming`)},_=I(()=>d.value.allTokenObj&&e.pItem.token_a.address&&d.value.allTokenObj[e.pItem.token_a.address]&&d.value.allTokenObj[e.pItem.token_a.address].logo_url),O=I(()=>d.value.allTokenObj&&e.pItem.token_b.address&&d.value.allTokenObj[e.pItem.token_b.address]&&d.value.allTokenObj[e.pItem.token_b.address].logo_url),v=I(()=>d.value.feeOwedObj[e.pItem.tokenName]&&d.value.feeOwedObj[e.pItem.tokenName].feeOwed),P=I(()=>d.value.feeOwedObj[e.pItem.tokenName]&&d.value.feeOwedObj[e.pItem.tokenName].feesResult),F=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarder||0),B=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarderView||0),T=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),E=I(()=>d.value.rewarderObj[e.pItem.tokenName]&&d.value.rewarderObj[e.pItem.tokenName].farmingRewardList),L=S(0),q=S();Ue(()=>d.value.RATES,k=>{k&&(q.value=k)},{immediate:!0});const V=k=>{var U;return(k==null?void 0:k.logoURI)||(k==null?void 0:k.logo_url)||((U=d.value.tokensObj[k==null?void 0:k.address])==null?void 0:U.logo_url)||(f.value.theme==="default"?J("/image/coins/unknown.png"):J("/image/coins/sui-unknown.png"))},H=I(()=>d.value.tokensObj);$e(()=>{Ie(e.pItem.minPrice,e.pItem.maxPrice)});const a=S("--"),Ie=(k,U)=>{k!=="0"&&U!=="∞"?a.value=we(1/(1-Number((k/U)**.25)),2)+"x":a.value="1x"};S(30);const h=S(null),ke=I(()=>{var k,U,Q,W,X,Y,Z,x,ee,se,oe,ne;return h.value?h.value.is_display_rewarder?(k=h.value)!=null&&k.aprPercentageTotal?((U=h.value)==null?void 0:U.aprPercentageTotal)>1e4?">10,000":((Q=h.value)==null?void 0:Q.aprPercentageTotal)<.01&&((W=h.value)==null?void 0:W.aprPercentageTotal)>0?"<0.01":r((X=h.value)==null?void 0:X.aprPercentageTotal,2):(Y=h.value)!=null&&Y.rewardAprList?"0":"--":(Z=h.value)!=null&&Z.aprFee?((x=h.value)==null?void 0:x.aprFee)>1e4?">10,000":((ee=h.value)==null?void 0:ee.aprFee)<.01&&((se=h.value)==null?void 0:se.aprFee)>0?"<0.01":r((oe=h.value)==null?void 0:oe.aprFee,2):(ne=h.value)!=null&&ne.rewardAprList?"0":"--":"--"}),ve=Pe(),he=I(()=>ve),ge=I(()=>he.value.farmsPoolObj);return{aprNum:ke,lever:a,tokensObj:H,showNum:fe,fromCoinUrl:_,toCoinUrl:O,decimalFormat:ce,clickDetails:c,t:u,addCommom:r,importIcon:J,router:C,store:f,pendingRewarder:F,pendingFees:v,pendingRewarderArr:T,pendingFeesArr:P,checkNullObj:D,fixD:Re,decimalUi:m,pendingRewarderView:B,aprAmount:L,getCoinIcon:V,Decimal:Fe,farmsPoolObj:ge,farmingRewardList:E,formatCurrency:K}}}),Ze=""+globalThis.__publicAssetsURL("sui-image/rewards.gif");const p=e=>(de("data-v-5c5cc040"),e=e(),me(),e),xe={class:"upgrade-position-item"},es={class:"card-content"},ss={class:"left"},os={class:"top card-header"},ns={class:"token-item h5-token-item"},as={class:"item"},ts={key:0,class:"token-warning"},is={key:0},rs={class:"item"},ds={key:0,class:"token-warning"},ms={key:0},ls={class:"token-item pc-token-item"},ps={class:"item"},us={class:"img-token"},Is={key:0,class:"token-warning"},ks={class:"img-token"},vs={key:0,class:"token-warning"},hs={class:"item item-right"},gs={class:"symbol"},bs={class:"fee-tier"},ws={class:"label"},fs={key:0},cs=p(()=>s("p",null," - ",-1)),Rs={key:0},ys={class:"card-header-right"},Cs=p(()=>s("div",null,[s("span",null," Leverage "),s("svg",{"aria-hidden":"true",class:"icon"},[s("use",{"xlink:href":"#icon-icon-tips1"})])],-1)),Us=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),$s=p(()=>s("span",null,"Farm",-1)),Ns=p(()=>s("svg",{class:"arrow-icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_arrow"})],-1)),Os=[Us,$s,Ns],js={class:"bottom"},Ss={class:"info-block-container"},As={class:"leabl"},Ds={class:"text"},_s={key:0,class:"hover-rewarder"},Ps={class:"rewarder-info"},Fs={class:"left-rewarder"},Bs={alt:""},Ts={class:"right-rewarder"},Es={class:"amount"},Ls={key:0,class:"amount-usd"},qs={key:1,class:"amount-usd"},Vs={class:"rewarder-info"},Hs={class:"left-rewarder"},Ms={alt:""},zs={class:"right-rewarder"},Gs={class:"amount"},Js={key:0,class:"amount-usd"},Ks={key:1,class:"amount-usd"},Qs={class:"leabl"},Ws={key:0,class:"text"},Xs={key:1,class:"text"},Ys={class:"hover-rewarder"},Zs={class:"left-rewarder"},xs={alt:""},eo={class:"right-rewarder"},so={class:"amount"},oo={class:"amount-usd"},no={key:2,class:"text"},ao={class:"label-box"},to={key:0,class:"leabl"},io=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),ro=[io],mo={key:1,class:"leabl"},lo=p(()=>s("img",{class:"img-default",src:pe,alt:""},null,-1)),po=[lo],uo={key:0,class:"text"},Io={class:"hover-rewarder"},ko=p(()=>s("div",{class:"title"},"Mining Rewards",-1)),vo={class:"left-rewarder"},ho={alt:""},go={class:"right-rewarder"},bo={class:"amount"},wo={class:"amount-usd"},fo=p(()=>s("div",{class:"title"},"Farming Rewards",-1)),co={class:"left-rewarder"},Ro={alt:""},yo={class:"right-rewarder"},Co={class:"amount"},Uo={class:"amount-usd"},$o={key:1,class:"text"},No=p(()=>s("div",{class:"more"},[s("svg",{class:"arrow-icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_arrow"})])],-1)),Oo={class:"h5-bottom"},jo=p(()=>s("div",null,[s("span",null," Leverage "),s("svg",{"aria-hidden":"true",class:"icon"},[s("use",{"xlink:href":"#icon-icon-tips1"})])],-1)),So=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),Ao=p(()=>s("span",null,"Farm",-1)),Do=p(()=>s("svg",{class:"arrow-icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_arrow"})],-1)),_o=[So,Ao,Do],Po={class:"info"},Fo={class:"info-item"},Bo=p(()=>s("div",{class:"left"},"Fee Tier",-1)),To={class:"right"},Eo={class:"info-item range-item"},Lo={class:"left"},qo={class:"right"},Vo={class:"min-and-max"},Ho={class:"text"},Mo={key:0,src:Be,alt:""},zo={key:1,src:Te,alt:""},Go={class:"text"},Jo={class:"info-item"},Ko=p(()=>s("div",{class:"left"},"Liquidity",-1)),Qo={class:"right"},Wo={key:0,class:"hover-rewarder"},Xo={class:"rewarder-info"},Yo={class:"left-rewarder"},Zo={alt:""},xo={class:"right-rewarder"},en={class:"amount"},sn={key:0,class:"amount-usd"},on={key:1,class:"amount-usd"},nn={class:"rewarder-info"},an={class:"left-rewarder"},tn={alt:""},rn={class:"right-rewarder"},dn={class:"amount"},mn={key:0,class:"amount-usd"},ln={key:1,class:"amount-usd"},pn={class:"info-item"},un=p(()=>s("div",{class:"left"},"Pending Fees",-1)),In={key:0,class:"right"},kn={key:1,class:"right"},vn={key:2,class:"right"},hn={key:3,class:"hover-rewarder"},gn={class:"left-rewarder"},bn={alt:""},wn={class:"right-rewarder"},fn={class:"amount"},cn={class:"amount-usd"},Rn={key:0,class:"info-item"},yn={class:"left"},Cn={key:0,class:"leabl"},Un=p(()=>s("img",{class:"img-default",src:G,alt:""},null,-1)),$n=p(()=>s("img",{class:"img-hover",src:Ee,alt:""},null,-1)),Nn=[Un,$n],On={key:1,class:"leabl"},jn=p(()=>s("img",{class:"img-default",src:pe,alt:""},null,-1)),Sn=p(()=>s("img",{class:"img-hover",src:Ze,alt:""},null,-1)),An=[jn,Sn],Dn={key:0,class:"right"},_n={key:1,class:"right"},Pn={class:"hover-rewarder"},Fn=p(()=>s("div",{class:"title"},"Mining Rewards",-1)),Bn={class:"left-rewarder"},Tn={alt:""},En={class:"right-rewarder"},Ln={class:"amount"},qn={class:"amount-usd"},Vn=p(()=>s("div",{class:"title"},"Farming Rewards",-1)),Hn={class:"left-rewarder"},Mn={alt:""},zn={class:"right-rewarder"},Gn={class:"amount"},Jn={class:"amount-usd"};function Kn(e,u,C,$,f,N){var P,F,B,T,E,L,q,V,H;const d=Xe,c=re,_=_e,O=je,v=Ne("image");return t(),i("div",xe,[s("div",es,[s("div",ss,[b(d,{"p-item":e.pItem,"current-status":((P=e.pItem)==null?void 0:P.currentStatus)||"","rewarder-info":e.pendingRewarder,"apr-amount":e.aprAmount},null,8,["p-item","current-status","rewarder-info","apr-amount"])]),s("div",{class:"right",onClick:u[3]||(u[3]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",os,[s("div",ns,[s("div",as,[s("div",null,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt)?(t(),i("div",ts)):l("",!0),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("p",null,[y(o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" ",1),e.store.theme=="default"?(t(),i("span",is,o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)):l("",!0)])]),s("div",rs,[s("div",null,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt)?(t(),i("div",ds)):l("",!0),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("p",null,[y(o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" ",1),e.store.theme=="default"?(t(),i("span",ms,o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)):l("",!0)])])]),s("div",ls,[s("div",ps,[s("div",null,[s("div",us,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt)?(t(),i("div",Is)):l("",!0)]),s("div",ks,[g(s("img",null,null,512),[[v,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt)?(t(),i("div",vs)):l("",!0)])])]),s("div",hs,[s("div",gs,[s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol)+" - "+o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1),s("span",bs,o(e.pItem.fee*100)+"%",1)]),s("div",ws,[s("p",null,[y(o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" ",1),e.store.theme=="default"?(t(),i("span",fs,o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)):l("",!0)]),cs,s("p",null,[y(o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" ",1),e.store.theme=="default"?(t(),i("span",Rs,o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)):l("",!0)])])])]),s("div",ys,[s("div",{class:"item",onClick:u[0]||(u[0]=A(()=>{},["stop"]))},[b(c,{"overlay-class-name":"lever-tooltip"},{title:w(()=>[y("This parameter indicates the concentration rate of your liquidity relative to a full range position.")]),default:w(()=>[Cs]),_:1}),s("p",null,o(e.lever),1)]),e.pItem.isStableFarming?(t(),i("div",{key:0,class:"farming-logo",onClick:u[1]||(u[1]=A(a=>e.$router.push("/farms"),["stop"]))},Os)):l("",!0)])]),s("div",js,[s("div",Ss,[s("div",{class:"info-block",onClick:u[2]||(u[2]=A(()=>{},["stop"]))},[b(_,{"pool-info":{...e.pItem,minPrice:e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("decimalUi"in e?e.decimalUi:n(m))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6):("decimalUi"in e?e.decimalUi:n(m))(e.pItem.minPrice,6),maxPrice:(e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("decimalUi"in e?e.decimalUi:n(m))(1/e.pItem.minPrice,6):("decimalUi"in e?e.decimalUi:n(m))(e.pItem.maxPrice,6)},platform:"position"},null,8,["pool-info"])]),s("div",{class:z(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[s("div",As,o(e.$t("common.liquidity")),1),s("div",Ds,[b(c,{"overlay-class-name":"position-tooltip"},{title:w(()=>[e.pItem.amountUSD>0?(t(),i("div",_s,[s("div",Ps,[s("div",Fs,[g(s("img",Bs,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",Ts,[s("div",Es,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(t(),i("div",qs,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(e.pItem.tokenBRates,2):"<$0.01"),1)):(t(),i("div",Ls,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",Vs,[s("div",Hs,[g(s("img",Ms,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",zs,[s("div",Gs,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(t(),i("div",Ks,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.tokenARates,2)):"<$0.01"),1)):(t(),i("div",Js,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):l("",!0)]),default:w(()=>[s("span",null," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:n(r))(e.pItem.amountUSD,2)),1)]),_:1})])],2),s("div",{class:z(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[s("div",Qs,o(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(t(),i("div",Ws,"$ --")):isNaN(e.pendingFees)?(t(),i("div",no,[b(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),i("div",Xs,[b(c,{"overlay-class-name":"position-tooltip"},{title:w(()=>[s("div",Ys,[(t(!0),i(R,null,j(e.pendingFeesArr,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",Zs,[g(s("img",xs,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",eo,[s("div",so,o(Number(a.amount)==0?0:("formatCurrency"in e?e.formatCurrency:n(K))(a.amount,a.decimals,!0,!1,!1)),1),s("div",oo,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.amountUSD,2):"<$0.01"),1)])]))),128))])]),default:w(()=>[s("span",null,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:n(r))(e.pendingFees,2)),1)]),_:1})]))],2),e.pItem.is_display_rewarder&&((F=e.pItem)!=null&&F.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(D))((B=e.pItem)==null?void 0:B.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0||e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",{key:0,class:z(["info-block cursor-block",[e.pendingRewarder==0&&e.pItem.rewards&&e.pItem.rewards.length==0?"block-none ":"",Number(e.pendingRewarder)==0?" block-none-reward":""].join(",")])},[s("div",ao,[e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",to,ro)):l("",!0),e.pItem.is_display_rewarder&&((T=e.pItem)!=null&&T.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(D))((E=e.pItem)==null?void 0:E.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(t(),i("div",mo,po)):l("",!0),s("span",null,o(e.$t("newAdd.pendingRewards")),1)]),e.pendingRewarder||e.pendingRewarder==0||e.pItem.farmingRewardTotalUsd?(t(),i("div",uo,[b(c,{"overlay-class-name":"position-tooltip"},Oe({default:w(()=>[s("span",null,o(e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd>.01?`$${("addCommom"in e?e.addCommom:n(r))(e.pendingRewarder+e.pItem.farmingRewardTotalUsd,2)}`:e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd<=.01?"<$0.01":"$0"),1)]),_:2},[e.pendingRewarder>0?{name:"title",fn:w(()=>[s("div",Io,[ko,(t(!0),i(R,null,j(e.pendingRewarderArr,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",vo,[g(s("img",ho,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",go,[s("div",bo,o(("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(a.amount,a.decimals))),1),s("div",wo,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.amountUSD,2):"<$0.01"),1)])]))),128)),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i(R,{key:0},[fo,(t(!0),i(R,null,j(e.pItem.rewards,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",co,[g(s("img",Ro,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",yo,[s("div",Co,o(("decimalUi"in e?e.decimalUi:n(m))(a.amount,a.decimals)),1),s("div",Uo,o(Number(a.rewarderAmountUsd)==0?"$0":Number(a.rewarderAmountUsd)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.rewarderAmountUsd,2):"<$0.01"),1)])]))),128))],64)):l("",!0)])]),key:"0"}:void 0]),1024)])):(t(),i("div",$o,[b(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})]))],2)):l("",!0),No])])])]),s("div",Oo,[s("div",{class:"card-header-right",onClick:u[6]||(u[6]=(...a)=>e.clickDetails&&e.clickDetails(...a))},[s("div",{class:"item",onClick:u[4]||(u[4]=A(()=>{},["stop"]))},[b(c,{"overlay-class-name":"lever-tooltip",placement:"topRight"},{title:w(()=>[y("This parameter indicates the concentration rate of your liquidity relative to a full range position.")]),default:w(()=>[jo]),_:1}),s("p",null,o(e.lever),1)]),e.pItem.isStableFarming?(t(),i("div",{key:0,class:"farming-logo",onClick:u[5]||(u[5]=A(a=>e.$router.push("/farms"),["stop"]))},_o)):l("",!0)]),s("div",Po,[s("div",Fo,[Bo,s("div",To,o(e.pItem.fee*100)+"%",1)]),s("div",Eo,[s("div",Lo,[y(" Price Range ("),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol)+")",1)]),s("div",qo,[s("div",Vo,[s("div",Ho,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.minPrice,6))),1),e.store.theme=="default"?(t(),i("img",Mo)):(t(),i("img",zo)),s("div",Go,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.maxPrice,6))),1)])])]),s("div",Jo,[Ko,s("div",Qo," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:n(r))(e.pItem.amountUSD,2)),1),e.pItem.amountUSD>0?(t(),i("div",Wo,[s("div",Xo,[s("div",Yo,[g(s("img",Zo,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",xo,[s("div",en,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(t(),i("div",on,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(e.pItem.tokenBRates,2):"<$0.01"),1)):(t(),i("div",sn,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",nn,[s("div",an,[g(s("img",tn,null,512),[[v,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",rn,[s("div",dn,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(t(),i("div",ln,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.tokenARates,2)):"<$0.01"),1)):(t(),i("div",mn,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):l("",!0)]),s("div",pn,[un,e.pendingFees==="--"?(t(),i("div",In,"$ --")):isNaN(e.pendingFees)?(t(),i("div",vn,[b(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),i("div",kn,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:n(r))(e.pendingFees,2)),1)),e.pendingFees>0?(t(),i("div",hn,[(t(!0),i(R,null,j(e.pendingFeesArr,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",gn,[g(s("img",bn,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",wn,[s("div",fn,o(Number(a.amount)==0?0:("formatCurrency"in e?e.formatCurrency:n(K))(a.amount,a.decimals,!0,!1,!1)),1),s("div",cn,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.amountUSD,2):"<$0.01"),1)])]))),128))])):l("",!0)]),e.pItem.is_display_rewarder&&((L=e.pItem)!=null&&L.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(D))((q=e.pItem)==null?void 0:q.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0||e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",Rn,[s("div",yn,[s("span",null,o(e.$t("newAdd.pendingRewards")),1),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",Cn,Nn)):l("",!0),e.pItem.is_display_rewarder&&((V=e.pItem)!=null&&V.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:n(D))((H=e.pItem)==null?void 0:H.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(t(),i("div",On,An)):l("",!0)]),e.pendingRewarder||e.pendingRewarder==0||e.pItem.farmingRewardTotalUsd?(t(),i("div",Dn,o(e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd>.01?`$${("addCommom"in e?e.addCommom:n(r))(e.pendingRewarder+e.pItem.farmingRewardTotalUsd,2)}`:e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd<=.01?"<$0.01":"$0"),1)):(t(),i("div",_n,[b(O,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])),s("div",Pn,[e.pendingRewarder>0?(t(),i(R,{key:0},[Fn,(t(!0),i(R,null,j(e.pendingRewarderArr,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",Bn,[g(s("img",Tn,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",En,[s("div",Ln,o(("addCommom"in e?e.addCommom:n(r))(("decimalUi"in e?e.decimalUi:n(m))(a.amount,a.decimals))),1),s("div",qn,o(Number(a.amountUSD)==0?"$0":Number(a.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.amountUSD,2):"<$0.01"),1)])]))),128))],64)):l("",!0),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i(R,{key:1},[Vn,(t(!0),i(R,null,j(e.pItem.rewards,a=>(t(),i("div",{key:a,class:"rewarder-info"},[s("div",Hn,[g(s("img",Mn,null,512),[[v,e.getCoinIcon(a)]]),s("span",null,o(a.symbol),1)]),s("div",zn,[s("div",Gn,o(("decimalUi"in e?e.decimalUi:n(m))(a.amount,a.decimals)),1),s("div",Jn,o(Number(a.rewarderAmountUsd)==0?"$0":Number(a.rewarderAmountUsd)>.01?"$"+("addCommom"in e?e.addCommom:n(r))(a.rewarderAmountUsd,2):"<$0.01"),1)])]))),128))],64)):l("",!0)])])):l("",!0)])])])}const pa=ie(Ye,[["render",Kn],["__scopeId","data-v-5c5cc040"]]);export{pa as _};
