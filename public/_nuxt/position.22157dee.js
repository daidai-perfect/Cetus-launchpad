import{_ as Ae}from"./pool-position-tab.df3e3000.js";import{_ as Ne}from"./upgrade-select-input.5933ee72.js";import{a as Y,e as x,o as t,f as i,h as o,F as X,s as oe,c as me,x as A,i as _,a4 as Le,S as be,p as se,k as ne,m as f,v as r,j as ue,r as C,D as M,u as l,K as ce,M as ee,z as re,l as $e,b as we,y as ye,q as Oe,w as W,Z as je,L as Te,t as te,N as De,T as Be,B as Fe}from"./entry.f28f527b.js";import"./index.a8ac5b37.js";import{a as ge,j as fe,u as Re,b as Ee}from"./pool.1a3b7dc7.js";import{u as Ge}from"./notifi.f75f92c5.js";import{b as I,d as R,s as he,c as de,j as He,a as Me,i as qe,B as Ce,u as ze,g as Ve}from"./index.dc091492.js";import{i as le}from"./import-icon.de3e6c66.js";import{T as We}from"./total-position.d25f3045.js";import{C as ke}from"./coin-img.ab7f4f1b.js";import{T as Ie}from"./token-warning-new.1a76f944.js";/* empty css              */import{D as ie}from"./decimal.0bdeb344.js";import{u as Je}from"./farms.755ea98d.js";import{_ as Pe}from"./icon_farms_2x.374f4145.js";import{_ as Ke}from"./icon_rewards_2x.b7e9c99a.js";import{_ as Ze}from"./img-no-Positions_2x.6ec32811.js";import{_ as Qe}from"./img-no-Positions_2x.99caba22.js";import{_ as Xe}from"./img-connect-wallet_2x.625dd142.js";import{_ as Ye}from"./img-connect-wallet_2x.ed5a0261.js";import"./pool.5537e0fe.js";import"./select-tab.ae8d88ac.js";import"./coin-select.4afe46cc.js";/* empty css              */import"./token-warning_2x.c9e625b0.js";import"./useWhale.1b1bbe5b.js";/* empty css              *//* empty css              */import"./icon-selected_3x.09e9a6f0.js";import"./coin-pair-name.4e4c67d8.js";import"./token-warning.1bdec3f7.js";import"./no-data.9b89583b.js";import"./token.7080c3a7.js";const xe=Y({props:{loading:{type:Boolean,required:!0},source:{type:String,default:""}},setup(e){return{positionList:[{},{},{}]}}});const eo=e=>(se("data-v-7c581d0b"),e=e(),ne(),e),oo={class:"new-pool-position-list"},so={class:"position-list"},no={class:"name-price"},ao={class:"symbol-name"},to={class:"avatar-box"},io={class:"name-box"},ro={class:"price-other-info"},lo={class:"new-my-position-item"},mo={class:"card-content"},uo={class:"pos-name"},co={class:"bottom-info"},po={class:"pos-valid-range"},vo={class:"info-block"},go={class:"info-block"},fo={class:"info-block"},ho=eo(()=>o("div",{class:"info-block"},null,-1));function _o(e,m,b,w,k,$){const n=Le,d=be;return t(),i("div",oo,[o("div",so,[(t(!0),i(X,null,oe(e.positionList,(c,u)=>(t(),i("div",{key:u,class:"item-box pageHaveRadiusSkeleton"},[o("div",no,[o("div",ao,[o("div",to,[e.loading?(t(),me(n,{key:0,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):A("",!0),e.loading?(t(),me(n,{key:1,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):A("",!0)]),o("div",io,[_(d,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),_(d,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])])]),o("div",ro,[o("span",null,[_(d,{class:"upgrade-long-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])])])]),o("div",lo,[o("div",mo,[o("div",uo,[_(d,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",co,[o("div",po,[_(d,{class:"upgrade-long-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",vo,[_(d,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),_(d,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",go,[_(d,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),_(d,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",fo,[_(d,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),_(d,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),ho])])])]))),128))])])}const Se=x(xe,[["render",_o],["__scopeId","data-v-7c581d0b"]]),ko={class:"pool-symbol-name-block"},Io={class:"coin-info-fee"},bo={class:"coin-logo"},$o={class:"logo-token-warning"},wo={class:"logo-token-warning"},yo={class:"symbol-label"},Ro={class:"pool-name"},Co={class:"pool-fee"},Po={class:"name"},So=Y({__name:"pool-symbol-name-block",props:{poolInfo:{type:Object,default:()=>({})}},setup(e){const m=e,b=f(()=>{var k,$,n,d;return console.log("🚀 ~ tokenA ~ props.poolInfo?.is_forward:props.poolInfoprops.poolInfo",(k=m.poolInfo)==null?void 0:k.is_forward),($=m.poolInfo)!=null&&$.is_forward?(n=m.poolInfo)==null?void 0:n.token_a:(d=m.poolInfo)==null?void 0:d.token_b}),w=f(()=>{var k,$,n,d;return console.log("🚀 ~ tokenA ~ props.poolInfo?.is_forward:props.poolInfoprops.poolInfo",(k=m.poolInfo)==null?void 0:k.is_forward),($=m.poolInfo)!=null&&$.is_forward?(d=m.poolInfo)==null?void 0:d.token_b:(n=m.poolInfo)==null?void 0:n.token_a});return console.log(b.value,w.value,m.poolInfo,"props.poolInfoprops.poolInfo"),(k,$)=>{var n,d,c,u,h,D;return t(),i("div",ko,[o("div",Io,[o("div",bo,[o("div",$o,[_(ke,{url:(n=b.value)==null?void 0:n.logo_url,size:"36px"},null,8,["url"]),_(Ie,{token:b.value,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),o("div",wo,[_(ke,{url:(d=w.value)==null?void 0:d.logo_url,size:"36px"},null,8,["url"]),_(Ie,{token:w.value,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),o("div",yo,[o("div",Ro,[o("span",null,r((c=b.value)==null?void 0:c.symbol),1),ue("  -  "),o("span",null,r((u=w.value)==null?void 0:u.symbol),1),o("div",Co,r(e.poolInfo.fee*100)+"%",1)]),o("div",Po,[o("span",null,r((h=b.value)==null?void 0:h.name),1),ue("  -  "),o("span",null,r((D=w.value)==null?void 0:D.name),1)])])])])])}}});const Uo=x(So,[["__scopeId","data-v-69532b9f"]]),Ao=Y({props:{poolInfo:{type:Object,default:()=>null}},setup(e){const m=C(),b=C(),w=f(()=>{var u;return(u=e.poolInfo)==null?void 0:u.needReverse}),k=ge(),$=f(()=>k),n=f(()=>$.value.currentExplorer),d=f(()=>$.value.theme),c=C(!0);return M(()=>[e.poolInfo],([u])=>{u&&(m.value=u.token_a,b.value=u.token_b)},{immediate:!0}),{needReverse:w,theme:d,indexStore:k,direct:c,addCommom:I,decimalUi:R,fromCoin:m,toCoin:b,getExplorerUrl:fe,currentExplorer:n}}});const Ue=e=>(se("data-v-8c7e05d5"),e=e(),ne(),e),No={class:"pos-current-price"},Lo={class:"left"},Oo=Ue(()=>o("span",{class:"tit"},"Current Price",-1)),jo={key:0},To={class:"value"},Do={class:"text"},Bo={key:1},Fo={class:"value"},Eo={class:"text"},Go={class:"coin-rate"},Ho=Ue(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),Mo=[Ho];function qo(e,m,b,w,k,$){var n,d,c,u;return t(),i("div",No,[o("div",Lo,[Oo,(e.needReverse?!e.direct:e.direct)?(t(),i("div",jo,[o("span",To,r(("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.poolInfo.currentPrice,6))),1),o("span",Do,r((n=e.toCoin)==null?void 0:n.symbol)+" per "+r((d=e.fromCoin)==null?void 0:d.symbol),1)])):(t(),i("div",Bo,[o("span",Fo,r(("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.poolInfo.currentPriceReverse,6))),1),o("span",Eo,r((c=e.fromCoin)==null?void 0:c.symbol)+" per "+r((u=e.toCoin)==null?void 0:u.symbol),1)]))]),o("div",Go,[o("div",{onClick:m[0]||(m[0]=h=>e.direct=!e.direct)},Mo)])])}const zo=x(Ao,[["render",qo],["__scopeId","data-v-8c7e05d5"]]),Vo=Y({props:{poolInfo:{type:Object,default:()=>({})},usePropsDirect:{type:Boolean,require:!1,default:!1},propDirect:{type:Boolean,require:!1,default:!1}},setup(e,m){const b=C(!0),w=C(e.usePropsDirect),k=C(e.propDirect);M(()=>e.propDirect,c=>{k.value=c},{immediate:!0});const $=C(),n=C();return M(()=>e.poolInfo,c=>{c&&!de(c)&&(c.maxPrice!=="∞"&&($.value=new ie(1).div(new ie(c.maxPrice)).toString()),c.minPrice>0&&(n.value=new ie(1).div(new ie(c.minPrice)).toString()))},{immediate:!0}),{sFixD:he,direct:b,isUsepropsDirect:w,propsDirect:k,clickChange:()=>{b.value=!b.value,w.value&&m.emit("clickChange")},minPriceResever:$,maxPriceResever:n,decimalUi:R,addCommom:I}}});const Wo=e=>(se("data-v-17724766"),e=e(),ne(),e),Jo={class:"new-range"},Ko={class:"left"},Zo={key:0},Qo={class:"num"},Xo={class:"num"},Yo={class:"per"},xo={key:1},es={class:"num"},os={class:"num"},ss={class:"per"},ns=Wo(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),as=[ns];function ts(e,m,b,w,k,$){var n,d,c,u;return t(),i("div",Jo,[o("div",Ko,[(e.isUsepropsDirect?e.propsDirect:e.direct)?(t(),i("p",Zo,[o("span",Qo,r(("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.poolInfo.minPrice,6)))+" - ",1),o("span",Xo,r(("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.poolInfo.maxPrice,6)))+" ",1),o("span",Yo,r((n=e.poolInfo.coinB)==null?void 0:n.symbol)+" per "+r((d=e.poolInfo.coinA)==null?void 0:d.symbol),1)])):(t(),i("p",xo,[o("span",es,r(e.poolInfo.maxPrice!=="∞"?("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.minPriceResever,6)):"0")+" - ",1),o("span",os,r(e.poolInfo.minPrice>0?("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.maxPriceResever,6)):"∞")+" ",1),o("span",ss,r((c=e.poolInfo.coinA)==null?void 0:c.symbol)+" per "+r((u=e.poolInfo.coinB)==null?void 0:u.symbol),1)]))]),o("div",{class:"icon-change",onClick:m[0]||(m[0]=ce(()=>e.clickChange(),["stop"]))},as)])}const is=x(Vo,[["render",ts],["__scopeId","data-v-17724766"]]),rs=Y({components:{NewFarmsRange:is},props:{poolInfo:{type:Object,default:()=>({})}},setup(){const e=C(!0);return{sFixD:he,direct:e}}});const ls=e=>(se("data-v-155eaa5f"),e=e(),ne(),e),ds={class:"status-box"},ms=["src"],us={class:"status-text"},cs={class:"right"},ps=ls(()=>o("div",{class:"title"},"Price Range",-1));function vs(e,m,b,w,k,$){var d,c,u,h;const n=ee("NewFarmsRange");return t(),i("div",{class:re(["pos-valid-range",((d=e.poolInfo)==null?void 0:d.currentStatus)=="Active"?"active-pos-valid-range":"inactive-pos-valid-range"])},[o("div",ds,[(c=e.poolInfo)!=null&&c.currentStatus?(t(),i("img",{key:0,src:((u=e.poolInfo)==null?void 0:u.currentStatus)=="Active"?"/sui-image/icon_pos_active@2x.png":"/sui-image/img_inactive@2x.png",alt:""},null,8,ms)):A("",!0),o("span",us,r((h=e.poolInfo)==null?void 0:h.currentStatus),1)]),o("div",cs,[ps,_(n,{"pool-info":e.poolInfo},null,8,["pool-info"])])],2)}const gs=x(rs,[["render",vs],["__scopeId","data-v-155eaa5f"]]),fs=Y({components:{PosValidRange:gs},props:{pItem:{type:Object,required:!0}},setup(e){const{t:m}=$e(),b=we(),w=ge(),k=f(()=>w);f(()=>k.value.chainName?Ee(k.value.chainName):{});const $=Re(),n=f(()=>$),d=()=>{$.setPositionDetailCurrentTab("increase"),k.value.chainName==="Aptos"?b.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):e.pItem.positionSource=="clmm"?b.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`):b.push(`/new-position-detail?position_nft_id=${e.pItem.id}&positionSource=farming`)},c=f(()=>n.value.allTokenObj&&e.pItem.token_a.address&&n.value.allTokenObj[e.pItem.token_a.address]&&n.value.allTokenObj[e.pItem.token_a.address].logo_url),u=f(()=>n.value.allTokenObj&&e.pItem.token_b.address&&n.value.allTokenObj[e.pItem.token_b.address]&&n.value.allTokenObj[e.pItem.token_b.address].logo_url),h=f(()=>n.value.feeOwedObj[e.pItem.tokenName]&&n.value.feeOwedObj[e.pItem.tokenName].feeOwed),D=f(()=>n.value.feeOwedObj[e.pItem.tokenName]&&n.value.feeOwedObj[e.pItem.tokenName].feesResult),N=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarder||0),q=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarderView||0),S=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),F=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].farmingRewardList),L=C(0),O=C();M(()=>n.value.RATES,s=>{s&&(O.value=s)},{immediate:!0});const j=s=>{var a;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((a=n.value.tokensObj[s==null?void 0:s.address])==null?void 0:a.logo_url)||(k.value.theme==="default"?le("/image/coins/unknown.png"):le("/image/coins/sui-unknown.png"))},z=f(()=>n.value.tokensObj);ye(()=>{p(e.pItem.minPrice,e.pItem.maxPrice)});const V=C("--"),p=(s,a)=>{s!=="0"&&a!=="∞"?V.value=he(1/(1-Number((s/a)**.25)),2)+"x":V.value="1x"};C(30);const P=C(null),ve=f(()=>{var s,a,v,g,y,U,T,B,J,K,Z,Q;return P.value?P.value.is_display_rewarder?(s=P.value)!=null&&s.aprPercentageTotal?((a=P.value)==null?void 0:a.aprPercentageTotal)>1e4?">10,000":((v=P.value)==null?void 0:v.aprPercentageTotal)<.01&&((g=P.value)==null?void 0:g.aprPercentageTotal)>0?"<0.01":I((y=P.value)==null?void 0:y.aprPercentageTotal,2):(U=P.value)!=null&&U.rewardAprList?"0":"--":(T=P.value)!=null&&T.aprFee?((B=P.value)==null?void 0:B.aprFee)>1e4?">10,000":((J=P.value)==null?void 0:J.aprFee)<.01&&((K=P.value)==null?void 0:K.aprFee)>0?"<0.01":I((Z=P.value)==null?void 0:Z.aprFee,2):(Q=P.value)!=null&&Q.rewardAprList?"0":"--":"--"}),E=Je(),G=f(()=>E),H=f(()=>G.value.farmsPoolObj);return{currentExplorer:f(()=>k.value.currentExplorer),getExplorerUrl:fe,aprNum:ve,lever:V,tokensObj:z,showNum:He,fromCoinUrl:c,toCoinUrl:u,decimalFormat:Me,clickDetails:d,t:m,addCommom:I,importIcon:le,router:b,store:k,pendingRewarder:N,pendingFees:h,pendingRewarderArr:S,pendingFeesArr:D,checkNullObj:de,fixD:qe,decimalUi:R,pendingRewarderView:q,aprAmount:L,getCoinIcon:j,Decimal:ie,farmsPoolObj:H,farmingRewardList:F,formatCurrency:Ce}}});const ae=e=>(se("data-v-30811f13"),e=e(),ne(),e),hs={class:"card-content"},_s={class:"pos-name"},ks={class:"pos"},Is={key:0},bs=["href"],$s=ae(()=>o("use",{"xlink:href":"#icon-icon_copy2"},null,-1)),ws=[$s],ys={class:"bottom-info"},Rs={class:"info-block-container"},Cs={class:"range-box"},Ps={class:"label"},Ss={class:"text"},Us={key:0,class:"hover-rewarder"},As={class:"rewarder-info"},Ns={class:"left-rewarder"},Ls={alt:""},Os={class:"right-rewarder"},js={class:"amount"},Ts={key:0,class:"amount-usd"},Ds={key:1,class:"amount-usd"},Bs={class:"rewarder-info"},Fs={class:"left-rewarder"},Es={alt:""},Gs={class:"right-rewarder"},Hs={class:"amount"},Ms={key:0,class:"amount-usd"},qs={key:1,class:"amount-usd"},zs={class:"label"},Vs={key:0,class:"text"},Ws={key:1,class:"text"},Js={class:"hover-rewarder"},Ks={class:"left-rewarder"},Zs={alt:""},Qs={class:"right-rewarder"},Xs={class:"amount"},Ys={class:"amount-usd"},xs={key:2,class:"text"},en={class:"label-box"},on={key:0,class:"text"},sn={class:"img-text"},nn={key:0,class:"label"},an=ae(()=>o("img",{class:"img-default",src:Pe,alt:""},null,-1)),tn=[an],rn={key:1,class:"label"},ln=ae(()=>o("img",{class:"img-default",src:Ke,alt:""},null,-1)),dn=[ln],mn={class:"hover-rewarder"},un=ae(()=>o("div",{class:"title"},"Mining Rewards",-1)),cn={class:"left-rewarder"},pn={alt:""},vn={class:"right-rewarder"},gn={class:"amount"},fn={class:"amount-usd"},hn=ae(()=>o("div",{class:"title"},"Farming Rewards",-1)),_n={class:"left-rewarder"},kn={alt:""},In={class:"right-rewarder"},bn={class:"amount"},$n={class:"amount-usd"},wn={key:1,class:"text"},yn=ae(()=>o("div",{class:"more-box"},[o("div",{class:"more"},[o("span",null,"Manage"),o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})])])],-1));function Rn(e,m,b,w,k,$){var h,D,N,q,S,F,L,O,j,z,V;const n=ee("PosValidRange"),d=Te,c=be,u=Oe("image");return t(),i("div",{class:"new-my-position-item",onClick:m[2]||(m[2]=(...p)=>e.clickDetails&&e.clickDetails(...p))},[o("div",hs,[o("div",_s,[o("div",ks,r(e.pItem.tokenName.split("|")[1]),1),(h=e.pItem)!=null&&h.nftHash?(t(),i("span",Is,"Position NFT ")):A("",!0),(D=e.pItem)!=null&&D.nftHash?(t(),i("a",{key:1,target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:l(fe))(e.currentExplorer,"nftAddress",e.pItem.nftHash)},"  "+r((q=(N=e.pItem)==null?void 0:N.nftHash)==null?void 0:q.substr(0,4))+" ... "+r((O=(S=e.pItem)==null?void 0:S.nftHash)==null?void 0:O.substr(((L=(F=e.pItem)==null?void 0:F.nftHash)==null?void 0:L.length)-4,4))+"  ",9,bs)):A("",!0),(j=e.pItem)!=null&&j.nftHash?(t(),i("svg",{key:2,class:"icon","aria-hidden":"true",onClick:m[0]||(m[0]=ce(p=>e.store.copy(e.pItem.nftHash),["stop"]))},ws)):A("",!0)]),o("div",ys,[o("div",Rs,[o("div",{class:"info-block",onClick:m[1]||(m[1]=ce(()=>{},["stop"]))},[o("div",Cs,[_(n,{"pool-info":{...e.pItem,minPrice:e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("decimalUi"in e?e.decimalUi:l(R))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6):("decimalUi"in e?e.decimalUi:l(R))(e.pItem.minPrice,6),maxPrice:(e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("decimalUi"in e?e.decimalUi:l(R))(1/e.pItem.minPrice,6):("decimalUi"in e?e.decimalUi:l(R))(e.pItem.maxPrice,6)}},null,8,["pool-info"])])]),o("div",{class:re(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[o("div",Ps,r(e.$t("common.liquidity")),1),o("div",Ss,[_(d,{"overlay-class-name":"position-tooltip"},{title:W(()=>[e.pItem.amountUSD>0?(t(),i("div",Us,[o("div",As,[o("div",Ns,[te(o("img",Ls,null,512),[[u,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),o("span",null,r(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),o("div",Os,[o("div",js,r(e.pItem.needReverse?("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(t(),i("div",Ds,r(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:l(I))(e.pItem.tokenBRates,2):"<$0.01"),1)):(t(),i("div",Ts,r(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:l(I))(e.pItem.tokenARates,2):"<$0.01"),1))])]),o("div",Bs,[o("div",Fs,[te(o("img",Es,null,512),[[u,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),o("span",null,r(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),o("div",Gs,[o("div",Hs,r(e.pItem.needReverse?("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(t(),i("div",qs,r(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.tokenARates,2)):"<$0.01"),1)):(t(),i("div",Ms,r(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):A("",!0)]),default:W(()=>[o("span",null," $"+r(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:l(I))(e.pItem.amountUSD,2)),1)]),_:1})])],2),o("div",{class:re(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[o("div",zs,r(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(t(),i("div",Vs,"$ --")):isNaN(e.pendingFees)?(t(),i("div",xs,[_(c,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),i("div",Ws,[_(d,{"overlay-class-name":"position-tooltip"},{title:W(()=>[o("div",Js,[(t(!0),i(X,null,oe(e.pendingFeesArr,p=>(t(),i("div",{key:p,class:"rewarder-info"},[o("div",Ks,[te(o("img",Zs,null,512),[[u,e.getCoinIcon(p)]]),o("span",null,r(p.symbol),1)]),o("div",Qs,[o("div",Xs,r(Number(p.amount)==0?0:("formatCurrency"in e?e.formatCurrency:l(Ce))(p.amount,p.decimals,!0,!1,!1)),1),o("div",Ys,r(Number(p.amountUSD)==0?"$0":Number(p.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:l(I))(p.amountUSD,2):"<$0.01"),1)])]))),128))])]),default:W(()=>[o("span",null,r(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:l(I))(e.pendingFees,2)),1)]),_:1})]))],2),e.pItem.is_display_rewarder&&((z=e.pItem)!=null&&z.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:l(de))((V=e.pItem)==null?void 0:V.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0||e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",{key:0,class:re(["info-block cursor-block",[e.pendingRewarder==0&&e.pItem.rewards&&e.pItem.rewards.length==0?"block-none ":"",Number(e.pendingRewarder)==0?" block-none-reward":""].join(",")])},[o("div",en,[o("span",null,r(e.$t("newAdd.pendingRewards")),1)]),e.pendingRewarder||e.pendingRewarder==0||e.pItem.farmingRewardTotalUsd?(t(),i("div",on,[_(d,{"overlay-class-name":"position-tooltip"},je({default:W(()=>{var p,P;return[o("div",sn,[e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i("div",nn,tn)):A("",!0),e.pItem.is_display_rewarder&&((p=e.pItem)!=null&&p.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:l(de))((P=e.pItem)==null?void 0:P.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(t(),i("div",rn,dn)):A("",!0),o("span",null,r(e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd>.01?`$${("addCommom"in e?e.addCommom:l(I))(e.pendingRewarder+e.pItem.farmingRewardTotalUsd,2)}`:e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd<=.01?"<$0.01":"$0"),1)])]}),_:2},[e.pendingRewarder>0?{name:"title",fn:W(()=>[o("div",mn,[un,(t(!0),i(X,null,oe(e.pendingRewarderArr,p=>(t(),i("div",{key:p,class:"rewarder-info"},[o("div",cn,[te(o("img",pn,null,512),[[u,e.getCoinIcon(p)]]),o("span",null,r(p.symbol),1)]),o("div",vn,[o("div",gn,r(("addCommom"in e?e.addCommom:l(I))(("decimalUi"in e?e.decimalUi:l(R))(p.amount,p.decimals))),1),o("div",fn,r(Number(p.amountUSD)==0?"$0":Number(p.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:l(I))(p.amountUSD,2):"<$0.01"),1)])]))),128)),e.pItem.rewards&&e.pItem.rewards.length>0?(t(),i(X,{key:0},[hn,(t(!0),i(X,null,oe(e.pItem.rewards,p=>(t(),i("div",{key:p,class:"rewarder-info"},[o("div",_n,[te(o("img",kn,null,512),[[u,e.getCoinIcon(p)]]),o("span",null,r(p.symbol),1)]),o("div",In,[o("div",bn,r(("decimalUi"in e?e.decimalUi:l(R))(p.amount,p.decimals)),1),o("div",$n,r(Number(p.rewarderAmountUsd)==0?"$0":Number(p.rewarderAmountUsd)>.01?"$"+("addCommom"in e?e.addCommom:l(I))(p.rewarderAmountUsd,2):"<$0.01"),1)])]))),128))],64)):A("",!0)])]),key:"0"}:void 0]),1024)])):(t(),i("div",wn,[_(c,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})]))],2)):A("",!0)])])]),yn])}const Cn=x(fs,[["render",Rn],["__scopeId","data-v-30811f13"]]),Pn=Y({components:{TotalPosition:We,PoolSymbolNameBlock:Uo,PositionLoading:Se,NewMyPositionItem:Cn,PosCurrentPrice:zo},setup(){const e=C(!1),{t:m}=$e(),b=C(["position"]),w=we(),k=C(""),$=ge(),n=f(()=>$),d=f(()=>n.value.chainName?Ve[n.value.chainName]:{});let c=C([]);const u=Re(),h=f(()=>u),D=ze(),N=f(()=>D);C(!0);const q=C("TVL"),S=()=>{e.value=!0,c.value=[],N.value.address&&(u.setPools(z.value.poolConfigList,n.value.chainName),u.getMyPositons(N.value.address,h.value.poolsObj,n.value.chainName)),setTimeout(()=>{e.value=!1},1e3)},F=f(()=>{const s=Array.from(new Set(h.value.poolConfigList.flatMap(a=>!(a!=null&&a.category)||(a==null?void 0:a.category)==""?"All":a==null?void 0:a.category)));return console.log(s,"newArr"),s.length<=1?[]:s});M(()=>n.value.isRefresh,s=>{var a,v,g,y;s&&((y=(g=(v=(a=w==null?void 0:w.currentRoute)==null?void 0:a.value)==null?void 0:v.name)==null?void 0:g.split("-"))==null?void 0:y[1])=="position"&&S()}),ye(()=>{c.value=[],u.setMyPositionsLoading(!0)}),De(()=>{N.value.connected||(c.value=[])});const L=()=>{e.value=!0;let s=[];h.value.myPositions.forEach(v=>{var J,K,Z,Q;let g=v.positionSource=="farming",y,U;const T=v.amountA*((J=h.value.RATES[v.token_a.address])==null?void 0:J.price),B=v.amountB*((K=h.value.RATES[v.token_b.address])==null?void 0:K.price);(Z=h.value.RATES[v.token_a.address])!=null&&Z.price&&((Q=h.value.RATES[v.token_b.address])!=null&&Q.price)?(y=T+B,U=T+B):(y=" --",U=0),console.log(h.value.currentPoolTab,"##pools.value.currentPoolTab"),s.push({...v,amountUSD:y,amountUSDOrigin:U,tokenARates:T,tokenBRates:B,isStableFarming:g})});const a={};s.forEach(v=>{a[v.address]?a[v.address].positionList.push(v):(a[v.address]={},a[v.address].poolInfo=v,a[v.address].positionList=[v])}),c.value=Object.values(a)||[],console.log(c.value,"list.value========>")};M(()=>[h.value.myPositions,h.value.RATES],([s,a])=>{s&&a&&(console.log("0605==>updateLpList9099999"),L())},{immediate:!0}),M(()=>[N.value.address,h.value.poolConfigList,h.value.poolsObj,n.value.chainName],([s,a,v,g])=>{var y,U,T;s&&a&&a.length>0&&g&&(g!=null&&g.toLowerCase().includes((y=a[0])==null?void 0:y.chain))&&!de(v)&&(g==="Aptos"?a.length===Object.values(v).length:(T=(U=Object.values(v)[0])==null?void 0:U.chain)!=null&&T.includes("sui"))&&(console.log(v,a,"0605==>getMyPositons9099999"),u.getMyPositons(N.value.address,v,g))},{immediate:!0,deep:!0}),M(()=>N.value.address,s=>{s||u.setMyPositions()},{immediate:!0});const O=Ge(),j=f(()=>O),z=f(()=>u),V=async s=>{await O.getSourceGroups();const a=j.value.sourceGroups&&j.value.sourceGroups.length>0&&j.value.sourceGroups[0]&&j.value.sourceGroups[0].sources||[];console.log(a,"####source"),console.log(s,"###myPositions");for(let v=0;v<a.length;v++){const{pool_address:g,position_index:y}=JSON.parse(a[v].blockchainAddress);let U=!1,T;for(let B=0;B<s.length;B++){const{poolAddress:J,index:K,positionSource:Z,name:Q}=s[B];g==J&&Number(Z=="clmm"?K:Q.split("-")[1])==Number(y)&&(U=!0),T={pool_address:g,position_index:y}}U||await O.subscribePosition(T,"",!1,!1)}},p=async()=>{await O.getSourceGroups();const s=j.value.sourceGroups&&j.value.sourceGroups.length>0&&j.value.sourceGroups[0]&&j.value.sourceGroups[0].sources||[];for(let a=0;a<s.length;a++){const{pool_address:v,position_index:g}=JSON.parse(s[a].blockchainAddress),{name:y}=s[a],U={pool_address:v,position_index:g};await O.subscribePosition(U,y,!1,!1)}},P=f(()=>z.value.myPositionsLoading);M(()=>z.value.myPositions,(s,a)=>{d.value.hasNotifi&&(s&&s.length>0&&a&&a.length!==s.length?V(s):s&&s.length==0&&!P.value&&p())},{immediate:!0});const ve=s=>{var a;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((a=h.value.tokensObj[s==null?void 0:s.address])==null?void 0:a.logo_url)||(n.value.theme==="default"?le("/image/coins/unknown.png"):le("/image/coins/sui-unknown.png"))},E=C(null),G=f(()=>E.value&&E.value.firstToken?E.value.firstToken:null),H=f(()=>E.value&&E.value.lastToken?E.value.lastToken:null),_e=f(()=>{let s=[];s=c.value;const a=s.filter((g,y)=>G.value&&H.value?g.poolInfo.coinA.symbol==G.value.symbol&&g.poolInfo.coinB.symbol==H.value.symbol||g.poolInfo.coinA.symbol==H.value.symbol&&g.poolInfo.coinB.symbol==G.value.symbol:G.value?g.poolInfo.coinA.symbol.toLowerCase().includes(G.value.symbol.toLowerCase())||g.poolInfo.coinB.symbol.toLowerCase().includes(G.value.symbol.toLowerCase()):H.value?g.poolInfo.coinA.symbol.toLowerCase().includes(H.value.symbol.toLowerCase())||g.poolInfo.coinB.symbol.toLowerCase().includes(H.value.symbol.toLowerCase()):s);if(!h.value.myPositionsLoading){const g=a.map(y=>y==null?void 0:y.positionList).flat();console.log("🚀 ~ showList ~ arr:",g),$.setPositiomAmount(g.length),u.setPositionShowList(g)}return a.filter((g,y)=>{var U;return((U=g.positionList)==null?void 0:U.length)>0})});return Be(()=>{$.setPositiomAmount("--"),u.setPositionShowList([])}),{tabArr:F,showList:_e,childTokenSelectRef:E,firstToken:G,lastToken:H,getCoinIcon:ve,selectValue:q,t:m,pools:h,store:n,wallet:N,list:c,clickRefresh:S,refresh:e,current:b,router:w,searchKey:k}}});const pe=e=>(se("data-v-314de086"),e=e(),ne(),e),Sn={class:"new-position-list-container pageHaveRadiusSkeleton"},Un={class:"filter-refresh"},An={class:"icon-box"},Nn=pe(()=>o("use",{"xlink:href":"#icon-icon_refresh"},null,-1)),Ln=[Nn],On={class:"position-card-top"},jn={key:0,class:"upgrade-loading"},Tn={key:1,class:"position-list"},Dn={class:"name-price"},Bn={class:"price-other-info"},Fn={class:"farm-create"},En=pe(()=>o("img",{class:"img-default",src:Pe,alt:""},null,-1)),Gn=pe(()=>o("span",null,"Farm",-1)),Hn=pe(()=>o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})],-1)),Mn=[En,Gn,Hn],qn={key:2,class:"no-data"},zn={key:0,src:Ze,alt:""},Vn={key:1,src:Qe,alt:""},Wn={key:3,class:"no-data"},Jn={key:0,src:Xe,alt:""},Kn={key:1,src:Ye,alt:""};function Zn(e,m,b,w,k,$){const n=Ae,d=Ne,c=ee("TotalPosition"),u=Se,h=ee("PoolSymbolNameBlock"),D=ee("PosCurrentPrice"),N=Fe,q=ee("NewMyPositionItem");return t(),i("div",Sn,[_(n,{"current-tab":"Positions"}),o("div",Un,[_(d,{ref:"childTokenSelectRef"},null,512),o("div",{class:"refresh-icon",onClick:m[0]||(m[0]=(...S)=>e.clickRefresh&&e.clickRefresh(...S))},[o("div",An,[(t(),i("svg",{class:re(["icon",{refresh:e.isRefresh}]),"aria-hidden":"true"},Ln,2))])])]),o("div",On,[e.wallet&&e.wallet.address?(t(),me(c,{key:0})):A("",!0)]),e.pools.myPositionsLoading&&e.wallet.connected?(t(),i("div",jn,[_(u,{loading:e.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):A("",!0),e.showList&&e.showList.length>0&&e.wallet.connected&&!e.pools.myPositionsLoading?(t(),i("div",Tn,[(t(!0),i(X,null,oe(e.showList,S=>{var F;return t(),i("div",{key:(F=S.poolInfo)==null?void 0:F.address,class:"item-box"},[o("div",Dn,[_(h,{"pool-info":S.poolInfo},null,8,["pool-info"]),o("div",Bn,[_(D,{"pool-info":S.poolInfo},null,8,["pool-info"]),o("div",Fn,[S.poolInfo.isStableFarming?(t(),i("div",{key:0,class:"farming-logo",onClick:m[1]||(m[1]=ce(L=>e.$router.push("/farms"),["stop"]))},Mn)):A("",!0),_(N,{class:"ghost-btn create",onClick:L=>{var O;return e.$router.push(`/liquidity/deposit?poolAddress=${(O=S.poolInfo)==null?void 0:O.poolAddress}`)}},{default:W(()=>[ue("Create new position")]),_:2},1032,["onClick"])])])]),(t(!0),i(X,null,oe(S.positionList,L=>(t(),me(q,{key:L==null?void 0:L.name,"p-item":L},null,8,["p-item"]))),128))])}),128))])):A("",!0),e.showList&&e.showList.length<=0&&!e.pools.myPositionsLoading&&e.wallet.connected?(t(),i("div",qn,[e.store.theme=="default"?(t(),i("img",zn)):(t(),i("img",Vn)),o("span",null,r(e.$t("common.noLiquidityPositions")),1)])):A("",!0),e.wallet.connected?A("",!0):(t(),i("div",Wn,[e.store.theme=="default"?(t(),i("img",Jn)):(t(),i("img",Kn)),_(N,{class:"connect-wallet",onClick:m[2]||(m[2]=S=>e.wallet.setIsShowWalletModal(!0))},{default:W(()=>[ue(r(e.$t("button.connectWallet")),1)]),_:1})]))])}const Ua=x(Pn,[["render",Zn],["__scopeId","data-v-314de086"]]);export{Ua as default};
