import{_ as Ae}from"./pool-position-tab.80c0f4e2.js";import{_ as Ne}from"./upgrade-select-input.ac397aa0.js";import{a as X,e as Y,o as t,f as i,h as o,F as Q,s as se,c as ue,x as A,i as _,a5 as Le,S as be,p as ae,k as te,m as f,v as r,j as ne,r as C,D as H,u as l,K as ce,M as oe,z as le,l as we,b as $e,y as ye,q as Oe,w as V,Z as je,L as Te,t as ie,N as De,T as Be,B as Fe}from"./entry.1237ae89.js";import"./index.34e13427.js";import{a as ge,j as fe,u as Re,b as Ee}from"./pool.af987f29.js";import{u as Ge}from"./notifi.06c7b509.js";import{b as I,d as R,s as he,c as me,j as Me,a as He,i as qe,B as Ce,u as ze,g as Ve}from"./index.1c4d7e0e.js";import{i as de}from"./import-icon.de3e6c66.js";import{T as We}from"./total-position.afadc568.js";import{C as ke}from"./coin-img.84aa2a38.js";import{T as Ie}from"./token-warning-new.8039d56d.js";/* empty css              */import{D as re}from"./decimal.0bdeb344.js";import{u as Je}from"./farms.3c60dbba.js";import{_ as Pe}from"./icon_farms_2x.4b559ba9.js";import{_ as Ke}from"./icon_rewards_2x.41d69262.js";import{_ as Ze}from"./img-no-Positions_2x.e6d85b6a.js";import{_ as Qe}from"./img-no-Positions_2x.0a220260.js";import{_ as Xe}from"./img-connect-wallet_2x.635ed4a1.js";import{_ as Ye}from"./img-connect-wallet_2x.161a8200.js";import"./pool.ddefbb4e.js";import"./select-tab.0ac4fbdf.js";import"./coin-select.5f15afe4.js";/* empty css              */import"./token-warning_2x.c580e585.js";import"./useWhale.6c207cce.js";/* empty css              *//* empty css              */import"./icon-selected_3x.09e9a6f0.js";import"./coin-pair-name.b32936ed.js";import"./token-warning.79224669.js";import"./no-data.2c309d04.js";import"./token.3994a25f.js";const xe=X({props:{loading:{type:Boolean,required:!0},source:{type:String,default:""}},setup(e){return{positionList:[{},{},{}]}}});const eo=e=>(ae("data-v-c106d621"),e=e(),te(),e),oo={class:"new-pool-position-list"},so={class:"position-list"},no={class:"name-price"},ao={class:"symbol-name"},to={class:"avatar-box"},io={class:"name-box"},ro={class:"price-other-info"},lo={class:"new-my-position-item"},mo={class:"card-content"},uo={class:"pos-name"},co={class:"bottom-info"},po={class:"pos-valid-range"},vo={class:"info-block"},go={class:"info-block"},fo={class:"info-block"},ho=eo(()=>o("div",{class:"info-block"},null,-1));function _o(e,m,b,$,k,w){const n=Le,d=be;return t(),i("div",oo,[o("div",so,[(t(!0),i(Q,null,se(e.positionList,(p,u)=>(t(),i("div",{key:u,class:"item-box pageHaveRadiusSkeleton"},[o("div",no,[o("div",ao,[o("div",to,[e.loading?(t(),ue(n,{key:0,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):A("",!0),e.loading?(t(),ue(n,{key:1,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):A("",!0)]),o("div",io,[_(d,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),_(d,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])])]),o("div",ro,[o("span",null,[_(d,{class:"upgrade-long-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])])])]),o("div",lo,[o("div",mo,[o("div",uo,[_(d,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",co,[o("div",po,[_(d,{class:"upgrade-long-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",vo,[_(d,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),_(d,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",go,[_(d,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),_(d,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",fo,[_(d,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),_(d,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),ho])])])]))),128))])])}const Se=Y(xe,[["render",_o],["__scopeId","data-v-c106d621"]]),ko={class:"pool-symbol-name-block"},Io={class:"coin-info-fee"},bo={class:"coin-logo"},wo={class:"logo-token-warning"},$o={class:"logo-token-warning"},yo={class:"symbol-label"},Ro={class:"pool-name"},Co={class:"pool-fee"},Po={class:"name"},So=X({__name:"pool-symbol-name-block",props:{poolInfo:{type:Object,default:()=>({})}},setup(e){const m=e,b=f(()=>{var k,w,n,d;return console.log("🚀 ~ tokenA ~ props.poolInfo?.is_forward:props.poolInfoprops.poolInfo",(k=m.poolInfo)==null?void 0:k.is_forward),(w=m.poolInfo)!=null&&w.is_forward?(n=m.poolInfo)==null?void 0:n.token_a:(d=m.poolInfo)==null?void 0:d.token_b}),$=f(()=>{var k,w,n,d;return console.log("🚀 ~ tokenA ~ props.poolInfo?.is_forward:props.poolInfoprops.poolInfo",(k=m.poolInfo)==null?void 0:k.is_forward),(w=m.poolInfo)!=null&&w.is_forward?(d=m.poolInfo)==null?void 0:d.token_b:(n=m.poolInfo)==null?void 0:n.token_a});return console.log(b.value,$.value,m.poolInfo,"props.poolInfoprops.poolInfo"),(k,w)=>{var n,d,p,u,h,D;return t(),i("div",ko,[o("div",Io,[o("div",bo,[o("div",wo,[_(ke,{url:(n=b.value)==null?void 0:n.logo_url,size:"36px"},null,8,["url"]),_(Ie,{token:b.value,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),o("div",$o,[_(ke,{url:(d=$.value)==null?void 0:d.logo_url,size:"36px"},null,8,["url"]),_(Ie,{token:$.value,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),o("div",yo,[o("div",Ro,[o("span",null,r((p=b.value)==null?void 0:p.symbol),1),ne("  -  "),o("span",null,r((u=$.value)==null?void 0:u.symbol),1),o("div",Co,r(e.poolInfo.fee*100)+"%",1)]),o("div",Po,[o("span",null,r((h=b.value)==null?void 0:h.name),1),ne("  -  "),o("span",null,r((D=$.value)==null?void 0:D.name),1)])])])])])}}});const Uo=Y(So,[["__scopeId","data-v-9d4eccf5"]]),Ao=X({props:{poolInfo:{type:Object,default:()=>null}},setup(e){const m=C(),b=C(),$=f(()=>{var u;return(u=e.poolInfo)==null?void 0:u.needReverse}),k=ge(),w=f(()=>k),n=f(()=>w.value.currentExplorer),d=f(()=>w.value.theme),p=C(!0);return H(()=>[e.poolInfo],([u])=>{u&&(m.value=u.token_a,b.value=u.token_b)},{immediate:!0}),{needReverse:$,theme:d,indexStore:k,direct:p,addCommom:I,decimalUi:R,fromCoin:m,toCoin:b,getExplorerUrl:fe,currentExplorer:n}}});const Ue=e=>(ae("data-v-9c19f86a"),e=e(),te(),e),No={class:"pos-current-price"},Lo=Ue(()=>o("span",{class:"tit"},"Current Price",-1)),Oo={key:0},jo={class:"text"},To={key:1},Do={class:"text"},Bo={class:"coin-rate"},Fo=Ue(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),Eo=[Fo];function Go(e,m,b,$,k,w){var n,d,p,u;return t(),i("div",No,[Lo,(e.needReverse?!e.direct:e.direct)?(t(),i("div",Oo,[ne(r(("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.poolInfo.currentPrice,6)))+"   ",1),o("span",jo,r((n=e.toCoin)==null?void 0:n.symbol)+" per "+r((d=e.fromCoin)==null?void 0:d.symbol),1)])):(t(),i("div",To,[ne(r(("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.poolInfo.currentPriceReverse,6)))+"   ",1),o("span",Do,r((p=e.fromCoin)==null?void 0:p.symbol)+" per "+r((u=e.toCoin)==null?void 0:u.symbol),1)])),o("div",Bo,[o("div",{onClick:m[0]||(m[0]=h=>e.direct=!e.direct)},Eo)])])}const Mo=Y(Ao,[["render",Go],["__scopeId","data-v-9c19f86a"]]),Ho=X({props:{poolInfo:{type:Object,default:()=>({})},usePropsDirect:{type:Boolean,require:!1,default:!1},propDirect:{type:Boolean,require:!1,default:!1}},setup(e,m){const b=C(!0),$=C(e.usePropsDirect),k=C(e.propDirect);H(()=>e.propDirect,p=>{k.value=p},{immediate:!0});const w=C(),n=C();return H(()=>e.poolInfo,p=>{p&&!me(p)&&(p.maxPrice!=="∞"&&(w.value=new re(1).div(new re(p.maxPrice)).toString()),p.minPrice>0&&(n.value=new re(1).div(new re(p.minPrice)).toString()))},{immediate:!0}),{sFixD:he,direct:b,isUsepropsDirect:$,propsDirect:k,clickChange:()=>{b.value=!b.value,$.value&&m.emit("clickChange")},minPriceResever:w,maxPriceResever:n,decimalUi:R,addCommom:I}}});const qo=e=>(ae("data-v-26995118"),e=e(),te(),e),zo={class:"new-range"},Vo={key:0},Wo={class:"num"},Jo={class:"num"},Ko={class:"per"},Zo={key:1},Qo={class:"num"},Xo={class:"num"},Yo={class:"per"},xo=qo(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),es=[xo];function os(e,m,b,$,k,w){var n,d,p,u;return t(),i("div",zo,[(e.isUsepropsDirect?e.propsDirect:e.direct)?(t(),i("p",Vo,[o("span",Wo,r(("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.poolInfo.minPrice,6)))+" -",1),o("span",Jo," "+r(("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.poolInfo.maxPrice,6)))+" ",1),o("span",Ko,r((n=e.poolInfo.coinB)==null?void 0:n.symbol)+" per "+r((d=e.poolInfo.coinA)==null?void 0:d.symbol),1)])):(t(),i("p",Zo,[o("span",Qo,r(e.poolInfo.maxPrice!=="∞"?("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.minPriceResever,6)):"0")+" -",1),o("span",Xo," "+r(e.poolInfo.minPrice>0?("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.maxPriceResever,6)):"∞")+" ",1),o("span",Yo,r((p=e.poolInfo.coinA)==null?void 0:p.symbol)+" per "+r((u=e.poolInfo.coinB)==null?void 0:u.symbol),1)])),o("div",{class:"icon-change",onClick:m[0]||(m[0]=ce(()=>e.clickChange(),["stop"]))},es)])}const ss=Y(Ho,[["render",os],["__scopeId","data-v-26995118"]]),ns=X({components:{NewFarmsRange:ss},props:{poolInfo:{type:Object,default:()=>({})}},setup(){const e=C(!0);return{sFixD:he,direct:e}}});const as=e=>(ae("data-v-852518c1"),e=e(),te(),e),ts={class:"status-box"},is=["src"],rs={class:"status-text"},ls={class:"right"},ds=as(()=>o("div",{class:"title"},"Price Range",-1));function ms(e,m,b,$,k,w){var d,p,u,h;const n=oe("NewFarmsRange");return t(),i("div",{class:le(["pos-valid-range",((d=e.poolInfo)==null?void 0:d.currentStatus)=="Active"?"active-pos-valid-range":"inactive-pos-valid-range"])},[o("div",ts,[(p=e.poolInfo)!=null&&p.currentStatus?(t(),i("img",{key:0,src:((u=e.poolInfo)==null?void 0:u.currentStatus)=="Active"?"/sui-image/icon_pos_active@2x.png":"/sui-image/img_inactive@2x.png",alt:""},null,8,is)):A("",!0),o("span",rs,r((h=e.poolInfo)==null?void 0:h.currentStatus),1)]),o("div",ls,[ds,_(n,{"pool-info":e.poolInfo},null,8,["pool-info"])])],2)}const us=Y(ns,[["render",ms],["__scopeId","data-v-852518c1"]]),cs=X({components:{PosValidRange:us},props:{pItem:{type:Object,required:!0}},setup(e){const{t:m}=we(),b=$e(),$=ge(),k=f(()=>$);f(()=>k.value.chainName?Ee(k.value.chainName):{});const w=Re(),n=f(()=>w),d=()=>{w.setPositionDetailCurrentTab("increase"),k.value.chainName==="Aptos"?b.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):e.pItem.positionSource=="clmm"?b.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`):b.push(`/new-position-detail?position_nft_id=${e.pItem.id}&positionSource=farming`)},p=f(()=>n.value.allTokenObj&&e.pItem.token_a.address&&n.value.allTokenObj[e.pItem.token_a.address]&&n.value.allTokenObj[e.pItem.token_a.address].logo_url),u=f(()=>n.value.allTokenObj&&e.pItem.token_b.address&&n.value.allTokenObj[e.pItem.token_b.address]&&n.value.allTokenObj[e.pItem.token_b.address].logo_url),h=f(()=>n.value.feeOwedObj[e.pItem.tokenName]&&n.value.feeOwedObj[e.pItem.tokenName].feeOwed),D=f(()=>n.value.feeOwedObj[e.pItem.tokenName]&&n.value.feeOwedObj[e.pItem.tokenName].feesResult),N=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarder||0),q=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarderView||0),P=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),F=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].farmingRewardList),L=C(0),O=C();H(()=>n.value.RATES,s=>{s&&(O.value=s)},{immediate:!0});const j=s=>{var a;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((a=n.value.tokensObj[s==null?void 0:s.address])==null?void 0:a.logo_url)||(k.value.theme==="default"?de("/image/coins/unknown.png"):de("/image/coins/sui-unknown.png"))},z=f(()=>n.value.tokensObj);ye(()=>{ee(e.pItem.minPrice,e.pItem.maxPrice)});const c=C("--"),ee=(s,a)=>{s!=="0"&&a!=="∞"?c.value=he(1/(1-Number((s/a)**.25)),2)+"x":c.value="1x"};C(30);const U=C(null),ve=f(()=>{var s,a,v,g,y,S,T,B,W,J,K,Z;return U.value?U.value.is_display_rewarder?(s=U.value)!=null&&s.aprPercentageTotal?((a=U.value)==null?void 0:a.aprPercentageTotal)>1e4?">10,000":((v=U.value)==null?void 0:v.aprPercentageTotal)<.01&&((g=U.value)==null?void 0:g.aprPercentageTotal)>0?"<0.01":I((y=U.value)==null?void 0:y.aprPercentageTotal,2):(S=U.value)!=null&&S.rewardAprList?"0":"--":(T=U.value)!=null&&T.aprFee?((B=U.value)==null?void 0:B.aprFee)>1e4?">10,000":((W=U.value)==null?void 0:W.aprFee)<.01&&((J=U.value)==null?void 0:J.aprFee)>0?"<0.01":I((K=U.value)==null?void 0:K.aprFee,2):(Z=U.value)!=null&&Z.rewardAprList?"0":"--":"--"}),E=Je(),G=f(()=>E),M=f(()=>G.value.farmsPoolObj);return{currentExplorer:f(()=>k.value.currentExplorer),getExplorerUrl:fe,aprNum:ve,lever:c,tokensObj:z,showNum:Me,fromCoinUrl:p,toCoinUrl:u,decimalFormat:He,clickDetails:d,t:m,addCommom:I,importIcon:de,router:b,store:k,pendingRewarder:N,pendingFees:h,pendingRewarderArr:P,pendingFeesArr:D,checkNullObj:me,fixD:qe,decimalUi:R,pendingRewarderView:q,aprAmount:L,getCoinIcon:j,Decimal:re,farmsPoolObj:M,farmingRewardList:F,formatCurrency:Ce}}});const x=e=>(ae("data-v-70291263"),e=e(),te(),e),ps={class:"card-content"},vs={class:"pos-name"},gs={class:"pos"},fs=x(()=>o("span",null,"Position NFT ",-1)),hs=["href"],_s=x(()=>o("use",{"xlink:href":"#icon-icon_copy2"},null,-1)),ks=[_s],Is={class:"bottom-info"},bs={class:"bottom"},ws={class:"info-block-container"},$s={class:"range-box"},ys={class:"leabl"},Rs={class:"text"},Cs={key:0,class:"hover-rewarder"},Ps={class:"rewarder-info"},Ss={class:"left-rewarder"},Us={alt:""},As={class:"right-rewarder"},Ns={class:"amount"},Ls={key:0,class:"amount-usd"},Os={key:1,class:"amount-usd"},js={class:"rewarder-info"},Ts={class:"left-rewarder"},Ds={alt:""},Bs={class:"right-rewarder"},Fs={class:"amount"},Es={key:0,class:"amount-usd"},Gs={key:1,class:"amount-usd"},Ms={class:"leabl"},Hs={key:0,class:"text"},qs={key:1,class:"text"},zs={class:"hover-rewarder"},Vs={class:"left-rewarder"},Ws={alt:""},Js={class:"right-rewarder"},Ks={class:"amount"},Zs={class:"amount-usd"},Qs={key:2,class:"text"},Xs={class:"label-box"},Ys={key:0,class:"text"},xs={class:"img-text"},en={key:0,class:"leabl"},on=x(()=>o("img",{class:"img-default",src:Pe,alt:""},null,-1)),sn=[on],nn={key:1,class:"leabl"},an=x(()=>o("img",{class:"img-default",src:Ke,alt:""},null,-1)),tn=[an],rn={class:"hover-rewarder"},ln=x(()=>o("div",{class:"title"},"Mining Rewards",-1)),dn={class:"left-rewarder"},mn={alt:""},un={class:"right-rewarder"},cn={class:"amount"},pn={class:"amount-usd"},vn=x(()=>o("div",{class:"title"},"Farming Rewards",-1)),gn={class:"left-rewarder"},fn={alt:""},hn={class:"right-rewarder"},_n={class:"amount"},kn={class:"amount-usd"},In={key:1,class:"text"},bn=x(()=>o("div",{class:"more-box"},[o("div",{class:"more"},[o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})])])],-1));function wn(e,m,b,$,k,w){var h,D,N,q,P,F,L,O,j,z;const n=oe("PosValidRange"),d=Te,p=be,u=Oe("image");return t(),i("div",{class:"new-my-position-item",onClick:m[2]||(m[2]=(...c)=>e.clickDetails&&e.clickDetails(...c))},[o("div",ps,[o("div",vs,[o("div",gs,r(e.pItem.tokenName.split("|")[1]),1),fs,(h=e.pItem)!=null&&h.nftHash?(t(),i("a",{key:0,target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:l(fe))(e.currentExplorer,"nftAddress",e.pItem.nftHash)},"  "+r((N=(D=e.pItem)==null?void 0:D.nftHash)==null?void 0:N.substr(0,4))+" ... "+r((L=(q=e.pItem)==null?void 0:q.nftHash)==null?void 0:L.substr(((F=(P=e.pItem)==null?void 0:P.nftHash)==null?void 0:F.length)-4,4))+"  ",9,hs)):A("",!0),(O=e.pItem)!=null&&O.nftHash?(t(),i("svg",{key:1,class:"icon","aria-hidden":"true",onClick:m[0]||(m[0]=ce(c=>e.store.copy(e.pItem.nftHash),["stop"]))},ks)):A("",!0)]),o("div",Is,[o("div",bs,[o("div",ws,[o("div",{class:"info-block",onClick:m[1]||(m[1]=ce(()=>{},["stop"]))},[o("div",$s,[_(n,{"pool-info":{...e.pItem,minPrice:e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("decimalUi"in e?e.decimalUi:l(R))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6):("decimalUi"in e?e.decimalUi:l(R))(e.pItem.minPrice,6),maxPrice:(e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("decimalUi"in e?e.decimalUi:l(R))(1/e.pItem.minPrice,6):("decimalUi"in e?e.decimalUi:l(R))(e.pItem.maxPrice,6)}},null,8,["pool-info"])])]),o("div",{class:le(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[o("div",ys,r(e.$t("common.liquidity")),1),o("div",Rs,[_(d,{"overlay-class-name":"position-tooltip"},{title:V(()=>[e.pItem.amountUSD>0?(t(),i("div",Cs,[o("div",Ps,[o("div",Ss,[ie(o("img",Us,null,512),[[u,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),o("span",null,r(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),o("div",As,[o("div",Ns,r(e.pItem.needReverse?("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(t(),i("div",Os,r(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:l(I))(e.pItem.tokenBRates,2):"<$0.01"),1)):(t(),i("div",Ls,r(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:l(I))(e.pItem.tokenARates,2):"<$0.01"),1))])]),o("div",js,[o("div",Ts,[ie(o("img",Ds,null,512),[[u,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),o("span",null,r(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),o("div",Bs,[o("div",Fs,r(e.pItem.needReverse?("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(t(),i("div",Gs,r(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.tokenARates,2)):"<$0.01"),1)):(t(),i("div",Es,r(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):A("",!0)]),default:V(()=>[o("span",null," $"+r(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:l(I))(e.pItem.amountUSD,2)),1)]),_:1})])],2),o("div",{class:le(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[o("div",Ms,r(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(t(),i("div",Hs,"$ --")):isNaN(e.pendingFees)?(t(),i("div",Qs,[_(p,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),i("div",qs,[_(d,{"overlay-class-name":"position-tooltip"},{title:V(()=>[o("div",zs,[(t(!0),i(Q,null,se(e.pendingFeesArr,c=>(t(),i("div",{key:c,class:"rewarder-info"},[o("div",Vs,[ie(o("img",Ws,null,512),[[u,e.getCoinIcon(c)]]),o("span",null,r(c.symbol),1)]),o("div",Js,[o("div",Ks,r(Number(c.amount)==0?0:("formatCurrency"in e?e.formatCurrency:l(Ce))(c.amount,c.decimals,!0,!1,!1)),1),o("div",Zs,r(Number(c.amountUSD)==0?"$0":Number(c.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:l(I))(c.amountUSD,2):"<$0.01"),1)])]))),128))])]),default:V(()=>[o("span",null,r(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:l(I))(e.pendingFees,2)),1)]),_:1})]))],2),e.pItem.is_display_rewarder&&((j=e.pItem)!=null&&j.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:l(me))((z=e.pItem)==null?void 0:z.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0||e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",{key:0,class:le(["info-block cursor-block",[e.pendingRewarder==0&&e.pItem.rewards&&e.pItem.rewards.length==0?"block-none ":"",Number(e.pendingRewarder)==0?" block-none-reward":""].join(",")])},[o("div",Xs,[o("span",null,r(e.$t("newAdd.pendingRewards")),1)]),e.pendingRewarder||e.pendingRewarder==0||e.pItem.farmingRewardTotalUsd?(t(),i("div",Ys,[_(d,{"overlay-class-name":"position-tooltip"},je({default:V(()=>{var c,ee;return[o("div",xs,[e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",en,sn)):A("",!0),e.pItem.is_display_rewarder&&((c=e.pItem)!=null&&c.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:l(me))((ee=e.pItem)==null?void 0:ee.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(t(),i("div",nn,tn)):A("",!0),o("span",null,r(e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd>.01?`$${("addCommom"in e?e.addCommom:l(I))(e.pendingRewarder+e.pItem.farmingRewardTotalUsd,2)}`:e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd<=.01?"<$0.01":"$0"),1)])]}),_:2},[e.pendingRewarder>0?{name:"title",fn:V(()=>[o("div",rn,[ln,(t(!0),i(Q,null,se(e.pendingRewarderArr,c=>(t(),i("div",{key:c,class:"rewarder-info"},[o("div",dn,[ie(o("img",mn,null,512),[[u,e.getCoinIcon(c)]]),o("span",null,r(c.symbol),1)]),o("div",un,[o("div",cn,r(("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(c.amount,c.decimals))),1),o("div",pn,r(Number(c.amountUSD)==0?"$0":Number(c.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:l(I))(c.amountUSD,2):"<$0.01"),1)])]))),128)),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i(Q,{key:0},[vn,(t(!0),i(Q,null,se(e.pItem.rewards,c=>(t(),i("div",{key:c,class:"rewarder-info"},[o("div",gn,[ie(o("img",fn,null,512),[[u,e.getCoinIcon(c)]]),o("span",null,r(c.symbol),1)]),o("div",hn,[o("div",_n,r(("decimalUi"in e?e.decimalUi:l(R))(c.amount,c.decimals)),1),o("div",kn,r(Number(c.rewarderAmountUsd)==0?"$0":Number(c.rewarderAmountUsd)>.01?"$"+("addCommom"in e?e.addCommom:l(I))(c.rewarderAmountUsd,2):"<$0.01"),1)])]))),128))],64)):A("",!0)])]),key:"0"}:void 0]),1024)])):(t(),i("div",In,[_(p,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})]))],2)):A("",!0)])])])]),bn])}const $n=Y(cs,[["render",wn],["__scopeId","data-v-70291263"]]),yn=X({components:{TotalPosition:We,PoolSymbolNameBlock:Uo,PositionLoading:Se,NewMyPositionItem:$n,PosCurrentPrice:Mo},setup(){const e=C(!1),{t:m}=we(),b=C(["position"]),$=$e(),k=C(""),w=ge(),n=f(()=>w),d=f(()=>n.value.chainName?Ve[n.value.chainName]:{});let p=C([]);const u=Re(),h=f(()=>u),D=ze(),N=f(()=>D);C(!0);const q=C("TVL"),P=()=>{e.value=!0,p.value=[],N.value.address&&(u.setPools(z.value.poolConfigList,n.value.chainName),u.getMyPositons(N.value.address,h.value.poolsObj,n.value.chainName)),setTimeout(()=>{e.value=!1},1e3)},F=f(()=>{const s=Array.from(new Set(h.value.poolConfigList.flatMap(a=>!(a!=null&&a.category)||(a==null?void 0:a.category)==""?"All":a==null?void 0:a.category)));return console.log(s,"newArr"),s.length<=1?[]:s});H(()=>n.value.isRefresh,s=>{var a,v,g,y;s&&((y=(g=(v=(a=$==null?void 0:$.currentRoute)==null?void 0:a.value)==null?void 0:v.name)==null?void 0:g.split("-"))==null?void 0:y[1])=="position"&&P()}),ye(()=>{p.value=[],u.setMyPositionsLoading(!0)}),De(()=>{N.value.connected||(p.value=[])});const L=()=>{e.value=!0;let s=[];h.value.myPositions.forEach(v=>{var W,J,K,Z;let g=v.positionSource=="farming",y,S;const T=v.amountA*((W=h.value.RATES[v.token_a.address])==null?void 0:W.price),B=v.amountB*((J=h.value.RATES[v.token_b.address])==null?void 0:J.price);(K=h.value.RATES[v.token_a.address])!=null&&K.price&&((Z=h.value.RATES[v.token_b.address])!=null&&Z.price)?(y=T+B,S=T+B):(y=" --",S=0),console.log(h.value.currentPoolTab,"##pools.value.currentPoolTab"),s.push({...v,amountUSD:y,amountUSDOrigin:S,tokenARates:T,tokenBRates:B,isStableFarming:g})});const a={};s.forEach(v=>{a[v.address]?a[v.address].positionList.push(v):(a[v.address]={},a[v.address].poolInfo=v,a[v.address].positionList=[v])}),p.value=Object.values(a)||[],console.log(p.value,"list.value========>")};H(()=>[h.value.myPositions,h.value.RATES],([s,a])=>{s&&a&&(console.log("0605==>updateLpList9099999"),L())},{immediate:!0}),H(()=>[N.value.address,h.value.poolConfigList,h.value.poolsObj,n.value.chainName],([s,a,v,g])=>{var y,S,T;s&&a&&a.length>0&&g&&(g!=null&&g.toLowerCase().includes((y=a[0])==null?void 0:y.chain))&&!me(v)&&(g==="Aptos"?a.length===Object.values(v).length:(T=(S=Object.values(v)[0])==null?void 0:S.chain)!=null&&T.includes("sui"))&&(console.log(v,a,"0605==>getMyPositons9099999"),u.getMyPositons(N.value.address,v,g))},{immediate:!0,deep:!0}),H(()=>N.value.address,s=>{s||u.setMyPositions()},{immediate:!0});const O=Ge(),j=f(()=>O),z=f(()=>u),c=async s=>{await O.getSourceGroups();const a=j.value.sourceGroups&&j.value.sourceGroups.length>0&&j.value.sourceGroups[0]&&j.value.sourceGroups[0].sources||[];console.log(a,"####source"),console.log(s,"###myPositions");for(let v=0;v<a.length;v++){const{pool_address:g,position_index:y}=JSON.parse(a[v].blockchainAddress);let S=!1,T;for(let B=0;B<s.length;B++){const{poolAddress:W,index:J,positionSource:K,name:Z}=s[B];g==W&&Number(K=="clmm"?J:Z.split("-")[1])==Number(y)&&(S=!0),T={pool_address:g,position_index:y}}S||await O.subscribePosition(T,"",!1,!1)}},ee=async()=>{await O.getSourceGroups();const s=j.value.sourceGroups&&j.value.sourceGroups.length>0&&j.value.sourceGroups[0]&&j.value.sourceGroups[0].sources||[];for(let a=0;a<s.length;a++){const{pool_address:v,position_index:g}=JSON.parse(s[a].blockchainAddress),{name:y}=s[a],S={pool_address:v,position_index:g};await O.subscribePosition(S,y,!1,!1)}},U=f(()=>z.value.myPositionsLoading);H(()=>z.value.myPositions,(s,a)=>{d.value.hasNotifi&&(s&&s.length>0&&a&&a.length!==s.length?c(s):s&&s.length==0&&!U.value&&ee())},{immediate:!0});const ve=s=>{var a;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((a=h.value.tokensObj[s==null?void 0:s.address])==null?void 0:a.logo_url)||(n.value.theme==="default"?de("/image/coins/unknown.png"):de("/image/coins/sui-unknown.png"))},E=C(null),G=f(()=>E.value&&E.value.firstToken?E.value.firstToken:null),M=f(()=>E.value&&E.value.lastToken?E.value.lastToken:null),_e=f(()=>{let s=[];s=p.value;const a=s.filter((g,y)=>G.value&&M.value?g.poolInfo.coinA.symbol==G.value.symbol&&g.poolInfo.coinB.symbol==M.value.symbol||g.poolInfo.coinA.symbol==M.value.symbol&&g.poolInfo.coinB.symbol==G.value.symbol:G.value?g.poolInfo.coinA.symbol.toLowerCase().includes(G.value.symbol.toLowerCase())||g.poolInfo.coinB.symbol.toLowerCase().includes(G.value.symbol.toLowerCase()):M.value?g.poolInfo.coinA.symbol.toLowerCase().includes(M.value.symbol.toLowerCase())||g.poolInfo.coinB.symbol.toLowerCase().includes(M.value.symbol.toLowerCase()):s);if(!h.value.myPositionsLoading){const g=a.map(y=>y==null?void 0:y.positionList).flat();console.log("🚀 ~ showList ~ arr:",g),w.setPositiomAmount(g.length),u.setPositionShowList(g)}return a.filter((g,y)=>{var S;return((S=g.positionList)==null?void 0:S.length)>0})});return Be(()=>{w.setPositiomAmount("--"),u.setPositionShowList([])}),{tabArr:F,showList:_e,childTokenSelectRef:E,firstToken:G,lastToken:M,getCoinIcon:ve,selectValue:q,t:m,pools:h,store:n,wallet:N,list:p,clickRefresh:P,refresh:e,current:b,router:$,searchKey:k}}});const pe=e=>(ae("data-v-514ef02e"),e=e(),te(),e),Rn={class:"new-position-list-container pageHaveRadiusSkeleton"},Cn={class:"filter-refresh"},Pn={class:"icon-box"},Sn=pe(()=>o("use",{"xlink:href":"#icon-icon_refresh"},null,-1)),Un=[Sn],An={class:"position-card-top"},Nn={key:0,class:"upgrade-loading"},Ln={key:1,class:"position-list"},On={class:"name-price"},jn={class:"price-other-info"},Tn=pe(()=>o("img",{class:"img-default",src:Pe,alt:""},null,-1)),Dn=pe(()=>o("span",null,"Farm",-1)),Bn=pe(()=>o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})],-1)),Fn=[Tn,Dn,Bn],En={key:2,class:"no-data"},Gn={key:0,src:Ze,alt:""},Mn={key:1,src:Qe,alt:""},Hn={key:3,class:"no-data"},qn={key:0,src:Xe,alt:""},zn={key:1,src:Ye,alt:""};function Vn(e,m,b,$,k,w){const n=Ae,d=Ne,p=oe("TotalPosition"),u=Se,h=oe("PoolSymbolNameBlock"),D=oe("PosCurrentPrice"),N=Fe,q=oe("NewMyPositionItem");return t(),i("div",Rn,[_(n,{"current-tab":"My Positions"}),o("div",Cn,[_(d,{ref:"childTokenSelectRef"},null,512),o("div",{class:"refresh-icon",onClick:m[0]||(m[0]=(...P)=>e.clickRefresh&&e.clickRefresh(...P))},[o("div",Pn,[(t(),i("svg",{class:le(["icon",{refresh:e.isRefresh}]),"aria-hidden":"true"},Un,2))])])]),o("div",An,[e.wallet&&e.wallet.address?(t(),ue(p,{key:0})):A("",!0)]),e.pools.myPositionsLoading&&e.wallet.connected?(t(),i("div",Nn,[_(u,{loading:e.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):A("",!0),e.showList&&e.showList.length>0&&e.wallet.connected&&!e.pools.myPositionsLoading?(t(),i("div",Ln,[(t(!0),i(Q,null,se(e.showList,P=>{var F;return t(),i("div",{key:(F=P.poolInfo)==null?void 0:F.address,class:"item-box"},[o("div",On,[_(h,{"pool-info":P.poolInfo},null,8,["pool-info"]),o("div",jn,[_(D,{"pool-info":P.poolInfo},null,8,["pool-info"]),P.poolInfo.isStableFarming?(t(),i("div",{key:0,class:"farming-logo",onClick:m[1]||(m[1]=ce(L=>e.$router.push("/farms"),["stop"]))},Fn)):A("",!0),_(N,{class:"ghost-btn create",onClick:L=>{var O;return e.$router.push(`/liquidity/deposit?poolAddress=${(O=P.poolInfo)==null?void 0:O.poolAddress}`)}},{default:V(()=>[ne("Create new position")]),_:2},1032,["onClick"])])]),(t(!0),i(Q,null,se(P.positionList,L=>(t(),ue(q,{key:L==null?void 0:L.name,"p-item":L},null,8,["p-item"]))),128))])}),128))])):A("",!0),e.showList&&e.showList.length<=0&&!e.pools.myPositionsLoading&&e.wallet.connected?(t(),i("div",En,[e.store.theme=="default"?(t(),i("img",Gn)):(t(),i("img",Mn)),o("span",null,r(e.$t("common.noLiquidityPositions")),1)])):A("",!0),e.wallet.connected?A("",!0):(t(),i("div",Hn,[e.store.theme=="default"?(t(),i("img",qn)):(t(),i("img",zn)),_(N,{class:"connect-wallet",onClick:m[2]||(m[2]=P=>e.wallet.setIsShowWalletModal(!0))},{default:V(()=>[ne(r(e.$t("button.connectWallet")),1)]),_:1})]))])}const Ra=Y(yn,[["render",Vn],["__scopeId","data-v-514ef02e"]]);export{Ra as default};
