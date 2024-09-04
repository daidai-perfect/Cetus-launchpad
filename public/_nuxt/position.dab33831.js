import{_ as Ne}from"./pool-position-tab.fb1bb8fe.js";import{_ as Le}from"./upgrade-select-input.25c728dc.js";import{a as Z,e as Q,o as a,f as t,h as o,F as K,s as Y,c as de,x as U,i as k,a4 as Oe,S as $e,p as x,k as ee,m as f,v as i,j as me,r as C,D as G,u as d,K as ue,M as X,z as ie,l as we,b as ye,y as Re,q as Te,w as q,Z as je,L as De,t as ae,N as Be,T as Fe,B as Ee}from"./entry.99c72b2b.js";import"./index.fd24c567.js";import{a as fe,u as Ce,b as He}from"./pool.350c2acd.js";import{u as Ge}from"./notifi.0fd61bc8.js";import{b as I,d as R,m as he,s as _e,c as le,h as Me,a as qe,g as ze,B as Pe}from"./index.de084947.js";import{u as Ve,c as We}from"./index.df82624f.js";import{i as re}from"./import-icon.de3e6c66.js";import{T as Je}from"./total-position.1dada619.js";import{C as be}from"./coin-img.99ab2aac.js";import{T as Ie}from"./token-warning-new.6cf07591.js";/* empty css              */import"./decimal.a2826370.js";import{u as Ke}from"./farms.c4ea07b5.js";import{D as te}from"./decimal.765d8738.js";import{_ as Se}from"./icon_farms_2x.79125a13.js";import{_ as Ze}from"./icon_rewards_2x.b32c851d.js";import{_ as Qe}from"./img-no-Positions_2x.ad7ead26.js";import{_ as Xe}from"./img-no-Positions_2x.1d19400d.js";import{_ as Ye}from"./img-connect-wallet_2x.61cf9501.js";import{_ as xe}from"./img-connect-wallet_2x.1c677a01.js";import"./pool.9485352c.js";import"./select-tab.2e6bf821.js";import"./coin-select.6c37947b.js";/* empty css              */import"./icon-tooltip.9d176bac.js";import"./token-warning_2x.1d2d15a4.js";import"./useWhale.d567ec72.js";/* empty css              *//* empty css              */import"./icon-selected_3x.873560ed.js";import"./coin-pair-name.2f9bb2f5.js";import"./token-warning.10eecc0f.js";import"./no-data.665a60cd.js";import"./token.1cb7b9bf.js";const eo=Z({props:{loading:{type:Boolean,required:!0},source:{type:String,default:""}},setup(e){return{positionList:[{},{},{}]}}});const oo=e=>(x("data-v-121ff3b6"),e=e(),ee(),e),so={class:"new-pool-position-list"},no={class:"position-list"},ao={class:"name-price"},to={class:"symbol-name"},io={class:"avatar-box"},ro={class:"name-box"},lo={class:"price-other-info"},mo={class:"new-my-position-item"},uo={class:"card-content"},co={class:"pos-name"},po={class:"bottom-info"},vo={class:"pos-valid-range"},go={class:"info-block"},fo={class:"info-block"},ho={class:"info-block"},_o=oo(()=>o("div",{class:"info-block"},null,-1));function ko(e,m,w,b,y,h){const u=Oe,n=$e;return a(),t("div",so,[o("div",no,[(a(!0),t(K,null,Y(e.positionList,(v,c)=>(a(),t("div",{key:c,class:"item-box pageHaveRadiusSkeleton"},[o("div",ao,[o("div",to,[o("div",io,[e.loading?(a(),de(u,{key:0,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):U("",!0),e.loading?(a(),de(u,{key:1,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):U("",!0)]),o("div",ro,[k(n,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),k(n,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])])]),o("div",lo,[o("span",null,[k(n,{class:"upgrade-long-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])])])]),o("div",mo,[o("div",uo,[o("div",co,[k(n,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",po,[o("div",vo,[k(n,{class:"upgrade-long-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",go,[k(n,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),k(n,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",fo,[k(n,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),k(n,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",ho,[k(n,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),k(n,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),_o])])])]))),128))])])}const Ue=Q(eo,[["render",ko],["__scopeId","data-v-121ff3b6"]]),bo={class:"pool-symbol-name-block"},Io={class:"coin-info-fee"},$o={class:"coin-logo"},wo={class:"logo-token-warning"},yo={class:"logo-token-warning"},Ro={class:"symbol-label"},Co={class:"pool-name"},Po={class:"pool-fee"},So={class:"name"},Uo=Z({__name:"pool-symbol-name-block",props:{poolInfo:{type:Object,default:()=>({})}},setup(e){const m=e,w=f(()=>{var y,h,u,n;return console.log("🚀 ~ tokenA ~ props.poolInfo?.is_forward:props.poolInfoprops.poolInfo",(y=m.poolInfo)==null?void 0:y.is_forward),(h=m.poolInfo)!=null&&h.is_forward?(u=m.poolInfo)==null?void 0:u.token_a:(n=m.poolInfo)==null?void 0:n.token_b}),b=f(()=>{var y,h,u,n;return console.log("🚀 ~ tokenA ~ props.poolInfo?.is_forward:props.poolInfoprops.poolInfo",(y=m.poolInfo)==null?void 0:y.is_forward),(h=m.poolInfo)!=null&&h.is_forward?(n=m.poolInfo)==null?void 0:n.token_b:(u=m.poolInfo)==null?void 0:u.token_a});return console.log(w.value,b.value,m.poolInfo,"props.poolInfoprops.poolInfo"),(y,h)=>{var u,n,v,c,_,T;return a(),t("div",bo,[o("div",Io,[o("div",$o,[o("div",wo,[k(be,{url:(u=w.value)==null?void 0:u.logo_url,size:"36px"},null,8,["url"]),k(Ie,{token:w.value,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),o("div",yo,[k(be,{url:(n=b.value)==null?void 0:n.logo_url,size:"36px"},null,8,["url"]),k(Ie,{token:b.value,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),o("div",Ro,[o("div",Co,[o("span",null,i((v=w.value)==null?void 0:v.symbol),1),me("  -  "),o("span",null,i((c=b.value)==null?void 0:c.symbol),1),o("div",Po,i(e.poolInfo.fee*100)+"%",1)]),o("div",So,[o("span",null,i((_=w.value)==null?void 0:_.name),1),me("  -  "),o("span",null,i((T=b.value)==null?void 0:T.name),1)])])])])])}}});const Ao=Q(Uo,[["__scopeId","data-v-aa8c842f"]]),No=Z({props:{poolInfo:{type:Object,default:()=>null}},setup(e){const m=C(),w=C(),b=f(()=>{var c;return(c=e.poolInfo)==null?void 0:c.needReverse}),y=fe(),h=f(()=>y),u=f(()=>h.value.currentExplorer),n=f(()=>h.value.theme),v=C(!0);return G(()=>[e.poolInfo],([c])=>{c&&(m.value=c.token_a,w.value=c.token_b)},{immediate:!0}),{needReverse:b,theme:n,indexStore:y,direct:v,addCommom:I,decimalUi:R,fromCoin:m,toCoin:w,getExplorerUrl:he,currentExplorer:u}}});const Ae=e=>(x("data-v-453d5c59"),e=e(),ee(),e),Lo={class:"pos-current-price"},Oo={class:"left"},To=Ae(()=>o("span",{class:"tit"},"Current Price",-1)),jo={key:0},Do={class:"value"},Bo={class:"text"},Fo={key:1},Eo={class:"value"},Ho={class:"text"},Go={class:"coin-rate"},Mo=Ae(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),qo=[Mo];function zo(e,m,w,b,y,h){var u,n,v,c;return a(),t("div",Lo,[o("div",Oo,[To,(e.needReverse?!e.direct:e.direct)?(a(),t("div",jo,[o("span",Do,i(("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.poolInfo.currentPrice,6))),1),o("span",Bo,i((u=e.toCoin)==null?void 0:u.symbol)+" per "+i((n=e.fromCoin)==null?void 0:n.symbol),1)])):(a(),t("div",Fo,[o("span",Eo,i(("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.poolInfo.currentPriceReverse,6))),1),o("span",Ho,i((v=e.fromCoin)==null?void 0:v.symbol)+" per "+i((c=e.toCoin)==null?void 0:c.symbol),1)]))]),o("div",Go,[o("div",{onClick:m[0]||(m[0]=_=>e.direct=!e.direct)},qo)])])}const Vo=Q(No,[["render",zo],["__scopeId","data-v-453d5c59"]]),Wo=Z({props:{poolInfo:{type:Object,default:()=>({})},usePropsDirect:{type:Boolean,require:!1,default:!1},propDirect:{type:Boolean,require:!1,default:!1}},setup(e,m){const w=C(!0),b=C(e.usePropsDirect),y=C(e.propDirect);G(()=>e.propDirect,v=>{y.value=v},{immediate:!0});const h=C(),u=C();return G(()=>e.poolInfo,v=>{v&&!le(v)&&(v.maxPrice!=="∞"&&(h.value=new te(1).div(new te(v.maxPrice)).toString()),v.minPrice>0&&(u.value=new te(1).div(new te(v.minPrice)).toString()))},{immediate:!0}),{sFixD:_e,direct:w,isUsepropsDirect:b,propsDirect:y,clickChange:()=>{w.value=!w.value,b.value&&m.emit("clickChange")},minPriceResever:h,maxPriceResever:u,decimalUi:R,addCommom:I}}});const Jo=e=>(x("data-v-a48f2308"),e=e(),ee(),e),Ko={class:"new-range"},Zo={class:"left"},Qo={key:0},Xo={class:"num"},Yo={class:"num"},xo={class:"per"},es={key:1},os={class:"num"},ss={class:"num"},ns={class:"per"},as=Jo(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),ts=[as];function is(e,m,w,b,y,h){var u,n,v,c;return a(),t("div",Ko,[o("div",Zo,[(e.isUsepropsDirect?e.propsDirect:e.direct)?(a(),t("p",Qo,[o("span",Xo,i(("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.poolInfo.minPrice,6)))+" - ",1),o("span",Yo,i(("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.poolInfo.maxPrice,6)))+" ",1),o("span",xo,i((u=e.poolInfo.coinB)==null?void 0:u.symbol)+" per "+i((n=e.poolInfo.coinA)==null?void 0:n.symbol),1)])):(a(),t("p",es,[o("span",os,i(e.poolInfo.maxPrice!=="∞"?("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.minPriceResever,6)):"0")+" - ",1),o("span",ss,i(e.poolInfo.minPrice>0?("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.maxPriceResever,6)):"∞")+" ",1),o("span",ns,i((v=e.poolInfo.coinA)==null?void 0:v.symbol)+" per "+i((c=e.poolInfo.coinB)==null?void 0:c.symbol),1)]))]),o("div",{class:"icon-change",onClick:m[0]||(m[0]=ue(()=>e.clickChange(),["stop"]))},ts)])}const rs=Q(Wo,[["render",is],["__scopeId","data-v-a48f2308"]]),ls=Z({components:{NewFarmsRange:rs},props:{poolInfo:{type:Object,default:()=>({})}},setup(){const e=C(!0);return{sFixD:_e,direct:e}}});const ds=e=>(x("data-v-4025edf8"),e=e(),ee(),e),ms={class:"status-box"},us=["src"],cs={class:"status-text"},ps={class:"right"},vs=ds(()=>o("div",{class:"title"},"Price Range",-1));function gs(e,m,w,b,y,h){var n,v,c,_;const u=X("NewFarmsRange");return a(),t("div",{class:ie(["pos-valid-range",((n=e.poolInfo)==null?void 0:n.currentStatus)=="Active"?"active-pos-valid-range":"inactive-pos-valid-range"])},[o("div",ms,[(v=e.poolInfo)!=null&&v.currentStatus?(a(),t("img",{key:0,src:((c=e.poolInfo)==null?void 0:c.currentStatus)=="Active"?"/sui-image/icon_pos_active@2x.png":"/sui-image/img_inactive@2x.png",alt:""},null,8,us)):U("",!0),o("span",cs,i((_=e.poolInfo)==null?void 0:_.currentStatus),1)]),o("div",ps,[vs,k(u,{"pool-info":e.poolInfo},null,8,["pool-info"])])],2)}const fs=Q(ls,[["render",gs],["__scopeId","data-v-4025edf8"]]),hs=Z({components:{PosValidRange:fs},props:{pItem:{type:Object,required:!0}},setup(e){const m=f(()=>{var s,l;return((s=e.pItem)==null?void 0:s.nftHash)||((l=e.pItem)==null?void 0:l.id)}),{t:w}=we(),b=ye(),y=fe(),h=f(()=>y);f(()=>h.value.chainName?He(h.value.chainName):{});const u=Ce(),n=f(()=>u),v=()=>{u.setPositionDetailCurrentTab("increase"),h.value.chainName==="Aptos"?b.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):e.pItem.positionSource=="clmm"?b.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`):b.push(`/new-position-detail?position_nft_id=${e.pItem.id}&positionSource=farming`)},c=f(()=>n.value.allTokenObj&&e.pItem.token_a.address&&n.value.allTokenObj[e.pItem.token_a.address]&&n.value.allTokenObj[e.pItem.token_a.address].logo_url),_=f(()=>n.value.allTokenObj&&e.pItem.token_b.address&&n.value.allTokenObj[e.pItem.token_b.address]&&n.value.allTokenObj[e.pItem.token_b.address].logo_url),T=f(()=>n.value.feeOwedObj[e.pItem.tokenName]&&n.value.feeOwedObj[e.pItem.tokenName].feeOwed),N=f(()=>n.value.feeOwedObj[e.pItem.tokenName]&&n.value.feeOwedObj[e.pItem.tokenName].feesResult),M=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarder||0),P=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarderView||0),p=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),L=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].farmingRewardList),j=C(0),D=C();G(()=>n.value.RATES,s=>{s&&(D.value=s)},{immediate:!0});const se=s=>{var l;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((l=n.value.tokensObj[s==null?void 0:s.address])==null?void 0:l.logo_url)||(h.value.theme==="default"?re("/image/coins/unknown.png"):re("/image/coins/sui-unknown.png"))},pe=f(()=>n.value.tokensObj);Re(()=>{ve(e.pItem.minPrice,e.pItem.maxPrice)});const ne=C("--"),ve=(s,l)=>{s!=="0"&&l!=="∞"?ne.value=_e(1/(1-Number((s/l)**.25)),2)+"x":ne.value="1x"};C(30);const A=C(null),F=f(()=>{var s,l,g,$,S,O,B,z,V,W,J,ke;return A.value?A.value.is_display_rewarder?(s=A.value)!=null&&s.aprPercentageTotal?((l=A.value)==null?void 0:l.aprPercentageTotal)>1e4?">10,000":((g=A.value)==null?void 0:g.aprPercentageTotal)<.01&&(($=A.value)==null?void 0:$.aprPercentageTotal)>0?"<0.01":I((S=A.value)==null?void 0:S.aprPercentageTotal,2):(O=A.value)!=null&&O.rewardAprList?"0":"--":(B=A.value)!=null&&B.aprFee?((z=A.value)==null?void 0:z.aprFee)>1e4?">10,000":((V=A.value)==null?void 0:V.aprFee)<.01&&((W=A.value)==null?void 0:W.aprFee)>0?"<0.01":I((J=A.value)==null?void 0:J.aprFee,2):(ke=A.value)!=null&&ke.rewardAprList?"0":"--":"--"}),E=Ke(),H=f(()=>E),ge=f(()=>H.value.farmsPoolObj),r=f(()=>h.value.currentExplorer);return{nftHash:m,currentExplorer:r,getExplorerUrl:he,aprNum:F,lever:ne,tokensObj:pe,showNum:Me,fromCoinUrl:c,toCoinUrl:_,decimalFormat:qe,clickDetails:v,t:w,addCommom:I,importIcon:re,router:b,store:h,pendingRewarder:M,pendingFees:T,pendingRewarderArr:p,pendingFeesArr:N,checkNullObj:le,fixD:ze,decimalUi:R,pendingRewarderView:P,aprAmount:j,getCoinIcon:se,Decimal:te,farmsPoolObj:ge,farmingRewardList:L,formatCurrency:Pe}}});const oe=e=>(x("data-v-83760137"),e=e(),ee(),e),_s={class:"card-content"},ks={class:"pos-name"},bs={class:"pos"},Is={key:0},$s=["href"],ws=oe(()=>o("use",{"xlink:href":"#icon-icon_copy2"},null,-1)),ys=[ws],Rs={class:"bottom-info"},Cs={class:"info-block-container"},Ps={class:"range-box"},Ss={class:"label"},Us={class:"text"},As={key:0,class:"hover-rewarder"},Ns={class:"rewarder-info"},Ls={class:"left-rewarder"},Os={alt:""},Ts={class:"right-rewarder"},js={class:"amount"},Ds={key:0,class:"amount-usd"},Bs={key:1,class:"amount-usd"},Fs={class:"rewarder-info"},Es={class:"left-rewarder"},Hs={alt:""},Gs={class:"right-rewarder"},Ms={class:"amount"},qs={key:0,class:"amount-usd"},zs={key:1,class:"amount-usd"},Vs={class:"label"},Ws={key:0,class:"text"},Js={key:1,class:"text"},Ks={class:"hover-rewarder"},Zs={class:"left-rewarder"},Qs={alt:""},Xs={class:"right-rewarder"},Ys={class:"amount"},xs={class:"amount-usd"},en={key:2,class:"text"},on={class:"label-box"},sn={key:0,class:"text"},nn={class:"img-text"},an={key:0,class:"label"},tn=oe(()=>o("img",{class:"img-default",src:Se,alt:""},null,-1)),rn=[tn],ln={key:1,class:"label"},dn=oe(()=>o("img",{class:"img-default",src:Ze,alt:""},null,-1)),mn=[dn],un={class:"hover-rewarder"},cn=oe(()=>o("div",{class:"title"},"Mining Rewards",-1)),pn={class:"left-rewarder"},vn={alt:""},gn={class:"right-rewarder"},fn={class:"amount"},hn={class:"amount-usd"},_n=oe(()=>o("div",{class:"title"},"Farming Rewards",-1)),kn={class:"left-rewarder"},bn={alt:""},In={class:"right-rewarder"},$n={class:"amount"},wn={class:"amount-usd"},yn={key:1,class:"text"},Rn=oe(()=>o("div",{class:"more-box"},[o("div",{class:"more"},[o("span",null,"Manage"),o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})])])],-1));function Cn(e,m,w,b,y,h){var _,T,N,M,P;const u=X("PosValidRange"),n=De,v=$e,c=Te("image");return a(),t("div",{class:"new-my-position-item",onClick:m[2]||(m[2]=(...p)=>e.clickDetails&&e.clickDetails(...p))},[o("div",_s,[o("div",ks,[o("div",bs,i(e.pItem.tokenName.split("|")[1]),1),e.nftHash?(a(),t("span",Is,"Position NFT ")):U("",!0),e.nftHash?(a(),t("a",{key:1,target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:d(he))(e.currentExplorer,"nftAddress",e.nftHash)},"  "+i((_=e.nftHash)==null?void 0:_.substr(0,4))+" ... "+i((N=e.nftHash)==null?void 0:N.substr(((T=e.nftHash)==null?void 0:T.length)-4,4))+"  ",9,$s)):U("",!0),e.nftHash?(a(),t("svg",{key:2,class:"icon","aria-hidden":"true",onClick:m[0]||(m[0]=ue(p=>e.store.copy(e.nftHash),["stop"]))},ys)):U("",!0)]),o("div",Rs,[o("div",Cs,[o("div",{class:"info-block",onClick:m[1]||(m[1]=ue(()=>{},["stop"]))},[o("div",Ps,[k(u,{"pool-info":{...e.pItem,minPrice:e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("decimalUi"in e?e.decimalUi:d(R))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6):("decimalUi"in e?e.decimalUi:d(R))(e.pItem.minPrice,6),maxPrice:(e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("decimalUi"in e?e.decimalUi:d(R))(1/e.pItem.minPrice,6):("decimalUi"in e?e.decimalUi:d(R))(e.pItem.maxPrice,6)}},null,8,["pool-info"])])]),o("div",{class:ie(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[o("div",Ss,i(e.$t("common.liquidity")),1),o("div",Us,[k(n,{"overlay-class-name":"position-tooltip"},{title:q(()=>[e.pItem.amountUSD>0?(a(),t("div",As,[o("div",Ns,[o("div",Ls,[ae(o("img",Os,null,512),[[c,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),o("span",null,i(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),o("div",Ts,[o("div",js,i(e.pItem.needReverse?("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(a(),t("div",Bs,i(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:d(I))(e.pItem.tokenBRates,2):"<$0.01"),1)):(a(),t("div",Ds,i(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:d(I))(e.pItem.tokenARates,2):"<$0.01"),1))])]),o("div",Fs,[o("div",Es,[ae(o("img",Hs,null,512),[[c,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),o("span",null,i(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),o("div",Gs,[o("div",Ms,i(e.pItem.needReverse?("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(a(),t("div",zs,i(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.pItem.tokenARates,2)):"<$0.01"),1)):(a(),t("div",qs,i(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):U("",!0)]),default:q(()=>[o("span",null," $"+i(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:d(I))(e.pItem.amountUSD,2)),1)]),_:1})])],2),o("div",{class:ie(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[o("div",Vs,i(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(a(),t("div",Ws,"$ --")):isNaN(e.pendingFees)?(a(),t("div",en,[k(v,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),t("div",Js,[k(n,{"overlay-class-name":"position-tooltip"},{title:q(()=>[o("div",Ks,[(a(!0),t(K,null,Y(e.pendingFeesArr,p=>(a(),t("div",{key:p,class:"rewarder-info"},[o("div",Zs,[ae(o("img",Qs,null,512),[[c,e.getCoinIcon(p)]]),o("span",null,i(p.symbol),1)]),o("div",Xs,[o("div",Ys,i(Number(p.amount)==0?0:("formatCurrency"in e?e.formatCurrency:d(Pe))(p.amount,p.decimals,!0,!1,!1)),1),o("div",xs,i(Number(p.amountUSD)==0?"$0":Number(p.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:d(I))(p.amountUSD,2):"<$0.01"),1)])]))),128))])]),default:q(()=>[o("span",null,i(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:d(I))(e.pendingFees,2)),1)]),_:1})]))],2),e.pItem.is_display_rewarder&&((M=e.pItem)!=null&&M.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:d(le))((P=e.pItem)==null?void 0:P.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0||e.pItem.rewards&&e.pItem.rewards.length>0?(a(),t("div",{key:0,class:ie(["info-block cursor-block",[e.pendingRewarder==0&&e.pItem.rewards&&e.pItem.rewards.length==0?"block-none ":"",Number(e.pendingRewarder)==0?" block-none-reward":""].join(",")])},[o("div",on,[o("span",null,i(e.$t("newAdd.pendingRewards")),1)]),e.pendingRewarder||e.pendingRewarder==0||e.pItem.farmingRewardTotalUsd?(a(),t("div",sn,[k(n,{"overlay-class-name":"position-tooltip"},je({default:q(()=>{var p,L;return[o("div",nn,[e.pItem.rewards&&e.pItem.rewards.length>0?(a(),t("div",an,rn)):U("",!0),e.pItem.is_display_rewarder&&((p=e.pItem)!=null&&p.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:d(le))((L=e.pItem)==null?void 0:L.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(a(),t("div",ln,mn)):U("",!0),o("span",null,i(e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd>.01?`$${("addCommom"in e?e.addCommom:d(I))(e.pendingRewarder+e.pItem.farmingRewardTotalUsd,2)}`:e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd<=.01?"<$0.01":"$0"),1)])]}),_:2},[e.pendingRewarder>0?{name:"title",fn:q(()=>[o("div",un,[cn,(a(!0),t(K,null,Y(e.pendingRewarderArr,p=>(a(),t("div",{key:p,class:"rewarder-info"},[o("div",pn,[ae(o("img",vn,null,512),[[c,e.getCoinIcon(p)]]),o("span",null,i(p.symbol),1)]),o("div",gn,[o("div",fn,i(("addCommom"in e?e.addCommom:d(I))(("decimalUi"in e?e.decimalUi:d(R))(p.amount,p.decimals))),1),o("div",hn,i(Number(p.amountUSD)==0?"$0":Number(p.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:d(I))(p.amountUSD,2):"<$0.01"),1)])]))),128)),e.pItem.rewards&&e.pItem.rewards.length>0?(a(),t(K,{key:0},[_n,(a(!0),t(K,null,Y(e.pItem.rewards,p=>(a(),t("div",{key:p,class:"rewarder-info"},[o("div",kn,[ae(o("img",bn,null,512),[[c,e.getCoinIcon(p)]]),o("span",null,i(p.symbol),1)]),o("div",In,[o("div",$n,i(("decimalUi"in e?e.decimalUi:d(R))(p.amount,p.decimals)),1),o("div",wn,i(Number(p.rewarderAmountUsd)==0?"$0":Number(p.rewarderAmountUsd)>.01?"$"+("addCommom"in e?e.addCommom:d(I))(p.rewarderAmountUsd,2):"<$0.01"),1)])]))),128))],64)):U("",!0)])]),key:"0"}:void 0]),1024)])):(a(),t("div",yn,[k(v,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})]))],2)):U("",!0)])])]),Rn])}const Pn=Q(hs,[["render",Cn],["__scopeId","data-v-83760137"]]),Sn=Z({components:{TotalPosition:Je,PoolSymbolNameBlock:Ao,PositionLoading:Ue,NewMyPositionItem:Pn,PosCurrentPrice:Vo},setup(){const e=C(!1),{t:m}=we(),w=C(["position"]),b=ye(),y=C(""),h=fe(),u=f(()=>h),n=f(()=>u.value.chainName?We[u.value.chainName]:{});let v=C([]);const c=Ce(),_=f(()=>c),T=Ve(),N=f(()=>T);C(!0);const M=C("TVL"),P=()=>{e.value=!0,v.value=[],N.value.address&&(c.setPools(se.value.poolConfigList,u.value.chainName),c.getMyPositons(N.value.address,_.value.poolsObj,u.value.chainName)),setTimeout(()=>{e.value=!1},1e3)},p=f(()=>{const r=Array.from(new Set(_.value.poolConfigList.flatMap(s=>!(s!=null&&s.category)||(s==null?void 0:s.category)==""?"All":s==null?void 0:s.category)));return console.log(r,"newArr"),r.length<=1?[]:r});G(()=>u.value.isRefresh,r=>{var s,l,g,$;r&&(($=(g=(l=(s=b==null?void 0:b.currentRoute)==null?void 0:s.value)==null?void 0:l.name)==null?void 0:g.split("-"))==null?void 0:$[1])=="position"&&P()}),Re(()=>{v.value=[],c.setMyPositionsLoading(!0)}),Be(()=>{N.value.connected||(v.value=[])});const L=()=>{e.value=!0;let r=[];_.value.myPositions.forEach(l=>{var z,V,W,J;let g=l.positionSource=="farming",$,S;const O=l.amountA*((z=_.value.RATES[l.token_a.address])==null?void 0:z.price),B=l.amountB*((V=_.value.RATES[l.token_b.address])==null?void 0:V.price);(W=_.value.RATES[l.token_a.address])!=null&&W.price&&((J=_.value.RATES[l.token_b.address])!=null&&J.price)?($=O+B,S=O+B):($=" --",S=0),console.log(_.value.currentPoolTab,"##pools.value.currentPoolTab"),r.push({...l,amountUSD:$,amountUSDOrigin:S,tokenARates:O,tokenBRates:B,isStableFarming:g})});const s={};r.forEach(l=>{s[l.address]?s[l.address].positionList.push(l):(s[l.address]={},s[l.address].poolInfo=l,s[l.address].positionList=[l])}),v.value=Object.values(s)||[],console.log(v.value,"list.value========>")};G(()=>[_.value.myPositions,_.value.RATES],([r,s])=>{r&&s&&(console.log("0605==>updateLpList9099999"),L())},{immediate:!0}),G(()=>[N.value.address,_.value.poolConfigList,_.value.poolsObj,u.value.chainName],([r,s,l,g])=>{var $,S,O;r&&s&&s.length>0&&g&&(g!=null&&g.toLowerCase().includes(($=s[0])==null?void 0:$.chain))&&!le(l)&&(g==="Aptos"?s.length===Object.values(l).length:(O=(S=Object.values(l)[0])==null?void 0:S.chain)!=null&&O.includes("sui"))&&(console.log(l,s,"0605==>getMyPositons9099999"),c.getMyPositons(N.value.address,l,g))},{immediate:!0,deep:!0}),G(()=>N.value.address,r=>{r||c.setMyPositions()},{immediate:!0});const j=Ge(),D=f(()=>j),se=f(()=>c),pe=async r=>{await j.getSourceGroups();const s=D.value.sourceGroups&&D.value.sourceGroups.length>0&&D.value.sourceGroups[0]&&D.value.sourceGroups[0].sources||[];console.log(s,"####source"),console.log(r,"###myPositions");for(let l=0;l<s.length;l++){const{pool_address:g,position_index:$}=JSON.parse(s[l].blockchainAddress);let S=!1,O;for(let B=0;B<r.length;B++){const{poolAddress:z,index:V,positionSource:W,name:J}=r[B];g==z&&Number(W=="clmm"?V:J.split("-")[1])==Number($)&&(S=!0),O={pool_address:g,position_index:$}}S||await j.subscribePosition(O,"",!1,!1)}},ne=async()=>{await j.getSourceGroups();const r=D.value.sourceGroups&&D.value.sourceGroups.length>0&&D.value.sourceGroups[0]&&D.value.sourceGroups[0].sources||[];for(let s=0;s<r.length;s++){const{pool_address:l,position_index:g}=JSON.parse(r[s].blockchainAddress),{name:$}=r[s],S={pool_address:l,position_index:g};await j.subscribePosition(S,$,!1,!1)}},ve=f(()=>se.value.myPositionsLoading);G(()=>se.value.myPositions,(r,s)=>{n.value.hasNotifi&&(r&&r.length>0&&s&&s.length!==r.length?pe(r):r&&r.length==0&&!ve.value&&ne())},{immediate:!0});const A=r=>{var s;return(r==null?void 0:r.logoURI)||(r==null?void 0:r.logo_url)||((s=_.value.tokensObj[r==null?void 0:r.address])==null?void 0:s.logo_url)||(u.value.theme==="default"?re("/image/coins/unknown.png"):re("/image/coins/sui-unknown.png"))},F=C(null),E=f(()=>F.value&&F.value.firstToken?F.value.firstToken:null),H=f(()=>F.value&&F.value.lastToken?F.value.lastToken:null),ge=f(()=>{let r=[];r=v.value;const s=r.filter((g,$)=>E.value&&H.value?g.poolInfo.coinA.symbol==E.value.symbol&&g.poolInfo.coinB.symbol==H.value.symbol||g.poolInfo.coinA.symbol==H.value.symbol&&g.poolInfo.coinB.symbol==E.value.symbol:E.value?g.poolInfo.coinA.symbol.toLowerCase().includes(E.value.symbol.toLowerCase())||g.poolInfo.coinB.symbol.toLowerCase().includes(E.value.symbol.toLowerCase()):H.value?g.poolInfo.coinA.symbol.toLowerCase().includes(H.value.symbol.toLowerCase())||g.poolInfo.coinB.symbol.toLowerCase().includes(H.value.symbol.toLowerCase()):r);if(!_.value.myPositionsLoading){const g=s.map($=>$==null?void 0:$.positionList).flat();console.log("🚀 ~ showList ~ arr:",g),h.setPositiomAmount(g.length),c.setPositionShowList(g)}return s.filter((g,$)=>{var S;return((S=g.positionList)==null?void 0:S.length)>0})});return Fe(()=>{h.setPositiomAmount("--"),c.setPositionShowList([])}),{tabArr:p,showList:ge,childTokenSelectRef:F,firstToken:E,lastToken:H,getCoinIcon:A,selectValue:M,t:m,pools:_,store:u,wallet:N,list:v,clickRefresh:P,refresh:e,current:w,router:b,searchKey:y}}});const ce=e=>(x("data-v-de6abb6b"),e=e(),ee(),e),Un={class:"new-position-list-container pageHaveRadiusSkeleton"},An={class:"filter-refresh"},Nn={class:"icon-box"},Ln=ce(()=>o("use",{"xlink:href":"#icon-icon_refresh"},null,-1)),On=[Ln],Tn={class:"position-card-top"},jn={key:0,class:"upgrade-loading"},Dn={key:1,class:"position-list"},Bn={class:"name-price"},Fn={class:"price-other-info"},En={class:"farm-create"},Hn=ce(()=>o("img",{class:"img-default",src:Se,alt:""},null,-1)),Gn=ce(()=>o("span",null,"Farm",-1)),Mn=ce(()=>o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})],-1)),qn=[Hn,Gn,Mn],zn={key:2,class:"no-data"},Vn={key:0,src:Qe,alt:""},Wn={key:1,src:Xe,alt:""},Jn={key:3,class:"no-data"},Kn={key:0,src:Ye,alt:""},Zn={key:1,src:xe,alt:""};function Qn(e,m,w,b,y,h){const u=Ne,n=Le,v=X("TotalPosition"),c=Ue,_=X("PoolSymbolNameBlock"),T=X("PosCurrentPrice"),N=Ee,M=X("NewMyPositionItem");return a(),t("div",Un,[k(u,{"current-tab":"Positions"}),o("div",An,[k(n,{ref:"childTokenSelectRef"},null,512),o("div",{class:"refresh-icon",onClick:m[0]||(m[0]=(...P)=>e.clickRefresh&&e.clickRefresh(...P))},[o("div",Nn,[(a(),t("svg",{class:ie(["icon",{refresh:e.isRefresh}]),"aria-hidden":"true"},On,2))])])]),o("div",Tn,[e.wallet&&e.wallet.address?(a(),de(v,{key:0})):U("",!0)]),e.pools.myPositionsLoading&&e.wallet.connected?(a(),t("div",jn,[k(c,{loading:e.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):U("",!0),e.showList&&e.showList.length>0&&e.wallet.connected&&!e.pools.myPositionsLoading?(a(),t("div",Dn,[(a(!0),t(K,null,Y(e.showList,P=>{var p;return a(),t("div",{key:(p=P.poolInfo)==null?void 0:p.address,class:"item-box"},[o("div",Bn,[k(_,{"pool-info":P.poolInfo},null,8,["pool-info"]),o("div",Fn,[k(T,{"pool-info":P.poolInfo},null,8,["pool-info"]),o("div",En,[P.poolInfo.isStableFarming?(a(),t("div",{key:0,class:"farming-logo",onClick:m[1]||(m[1]=ue(L=>e.$router.push("/farms"),["stop"]))},qn)):U("",!0),k(N,{class:"ghost-btn create",onClick:L=>{var j;return e.$router.push(`/liquidity/deposit?poolAddress=${(j=P.poolInfo)==null?void 0:j.poolAddress}`)}},{default:q(()=>[me("Create new position")]),_:2},1032,["onClick"])])])]),(a(!0),t(K,null,Y(P.positionList,L=>(a(),de(M,{key:L==null?void 0:L.name,"p-item":L},null,8,["p-item"]))),128))])}),128))])):U("",!0),e.showList&&e.showList.length<=0&&!e.pools.myPositionsLoading&&e.wallet.connected?(a(),t("div",zn,[e.store.theme=="default"?(a(),t("img",Vn)):(a(),t("img",Wn)),o("span",null,i(e.$t("common.noLiquidityPositions")),1)])):U("",!0),e.wallet.connected?U("",!0):(a(),t("div",Jn,[e.store.theme=="default"?(a(),t("img",Kn)):(a(),t("img",Zn)),k(N,{class:"connect-wallet",onClick:m[2]||(m[2]=P=>e.wallet.setIsShowWalletModal(!0))},{default:q(()=>[me(i(e.$t("button.connectWallet")),1)]),_:1})]))])}const Oa=Q(Sn,[["render",Qn],["__scopeId","data-v-de6abb6b"]]);export{Oa as default};
