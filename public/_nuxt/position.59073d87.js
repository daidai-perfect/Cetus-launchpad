import{_ as Ne}from"./pool-position-tab.854ca765.js";import{_ as Le}from"./upgrade-select-input.5da452c2.js";import{a as X,e as Y,o as a,f as i,h as o,F as Q,s as ee,c as me,x as U,i as k,a4 as Oe,S as $e,p as oe,k as se,m as f,v as r,r as R,D as M,u as m,K as G,M as x,z as re,l as we,b as ye,y as Ce,q as Te,w as z,Z as je,L as De,t as te,N as Be,T as Fe,B as Ee,j as ke}from"./entry.60f21e23.js";import"./index.3fe8d329.js";import{a as fe,u as Re,b as He}from"./pool.4cb0c8ff.js";import{u as Ge}from"./notifi.7c09309b.js";import{b as I,d as C,m as ue,s as he,c as de,h as Me,a as qe,g as ze,B as Pe}from"./index.faaa0495.js";import{u as Ve,c as We}from"./index.d6b37ace.js";import{i as le}from"./import-icon.de3e6c66.js";import{T as Je}from"./total-position.d19a431a.js";import{C as be}from"./coin-img.79922eb3.js";import{T as Ie}from"./token-warning-new.d0f63220.js";/* empty css              */import"./decimal.a2826370.js";import{u as Ke}from"./farms.05bda3f0.js";import{D as ie}from"./decimal.765d8738.js";import{_ as Se}from"./icon_farms_2x.e800a7ef.js";import{_ as Ze}from"./icon_rewards_2x.f65ce0ee.js";import{_ as Qe}from"./img-no-Positions_2x.b30e30cf.js";import{_ as Xe}from"./img-no-Positions_2x.5be4b033.js";import{_ as Ye}from"./img-connect-wallet_2x.85fb5c47.js";import{_ as xe}from"./img-connect-wallet_2x.0c2de598.js";import"./pool.8ddc5695.js";import"./select-tab.fdd1a09c.js";import"./coin-select.35945cc5.js";/* empty css              */import"./icon-tooltip.6742db1d.js";import"./token-warning_2x.c68500a4.js";import"./useWhale.17f39121.js";/* empty css              *//* empty css              */import"./icon-selected_3x.873560ed.js";import"./coin-pair-name.8d44fdf4.js";import"./token-warning.4fed7355.js";import"./no-data.a9ad8508.js";import"./token.963904d7.js";const eo=X({props:{loading:{type:Boolean,required:!0},source:{type:String,default:""}},setup(e){return{positionList:[{},{},{}]}}});const oo=e=>(oe("data-v-121ff3b6"),e=e(),se(),e),so={class:"new-pool-position-list"},no={class:"position-list"},ao={class:"name-price"},to={class:"symbol-name"},io={class:"avatar-box"},ro={class:"name-box"},lo={class:"price-other-info"},mo={class:"new-my-position-item"},uo={class:"card-content"},co={class:"pos-name"},po={class:"bottom-info"},vo={class:"pos-valid-range"},go={class:"info-block"},fo={class:"info-block"},ho={class:"info-block"},_o=oo(()=>o("div",{class:"info-block"},null,-1));function ko(e,t,w,b,y,h){const u=Oe,n=$e;return a(),i("div",so,[o("div",no,[(a(!0),i(Q,null,ee(e.positionList,(v,c)=>(a(),i("div",{key:c,class:"item-box pageHaveRadiusSkeleton"},[o("div",ao,[o("div",to,[o("div",io,[e.loading?(a(),me(u,{key:0,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):U("",!0),e.loading?(a(),me(u,{key:1,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):U("",!0)]),o("div",ro,[k(n,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),k(n,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])])]),o("div",lo,[o("span",null,[k(n,{class:"upgrade-long-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])])])]),o("div",mo,[o("div",uo,[o("div",co,[k(n,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",po,[o("div",vo,[k(n,{class:"upgrade-long-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",go,[k(n,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),k(n,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",fo,[k(n,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),k(n,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",ho,[k(n,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),k(n,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),_o])])])]))),128))])])}const Ue=Y(eo,[["render",ko],["__scopeId","data-v-121ff3b6"]]),bo={class:"pool-symbol-name-block"},Io={class:"coin-info-fee"},$o={class:"coin-logo"},wo={class:"logo-token-warning"},yo={class:"logo-token-warning"},Co={class:"symbol-label"},Ro={class:"pool-name"},Po={class:"pool-fee"},So={class:"name"},Uo=X({__name:"pool-symbol-name-block",props:{poolInfo:{type:Object,default:()=>({})}},setup(e){const t=e,w=f(()=>{var y,h,u,n;return console.log("🚀 ~ tokenA ~ props.poolInfo?.is_forward:props.poolInfoprops.poolInfo",(y=t.poolInfo)==null?void 0:y.is_forward),(h=t.poolInfo)!=null&&h.is_forward?(u=t.poolInfo)==null?void 0:u.token_a:(n=t.poolInfo)==null?void 0:n.token_b}),b=f(()=>{var y,h,u,n;return console.log("🚀 ~ tokenA ~ props.poolInfo?.is_forward:props.poolInfoprops.poolInfo",(y=t.poolInfo)==null?void 0:y.is_forward),(h=t.poolInfo)!=null&&h.is_forward?(n=t.poolInfo)==null?void 0:n.token_b:(u=t.poolInfo)==null?void 0:u.token_a});return console.log(w.value,b.value,t.poolInfo,"props.poolInfoprops.poolInfo"),(y,h)=>{var u,n,v,c,_,T;return a(),i("div",bo,[o("div",Io,[o("div",$o,[o("div",wo,[k(be,{url:(u=w.value)==null?void 0:u.logo_url,size:"36px"},null,8,["url"]),k(Ie,{token:w.value,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),o("div",yo,[k(be,{url:(n=b.value)==null?void 0:n.logo_url,size:"36px"},null,8,["url"]),k(Ie,{token:b.value,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),o("div",Co,[o("div",Ro,[o("span",null,r((v=w.value)==null?void 0:v.symbol)+" - ",1),o("span",null,r((c=b.value)==null?void 0:c.symbol),1),o("div",Po,r(e.poolInfo.fee*100)+"%",1)]),o("div",So,[o("span",null,r((_=w.value)==null?void 0:_.name)+" - ",1),o("span",null,r((T=b.value)==null?void 0:T.name),1)])])])])])}}});const Ao=Y(Uo,[["__scopeId","data-v-1c79b357"]]),No=X({props:{poolInfo:{type:Object,default:()=>null}},setup(e){const t=R(),w=R(),b=f(()=>{var c;return(c=e.poolInfo)==null?void 0:c.needReverse}),y=fe(),h=f(()=>y),u=f(()=>h.value.currentExplorer),n=f(()=>h.value.theme),v=R(!0);return M(()=>[e.poolInfo],([c])=>{c&&(t.value=c.token_a,w.value=c.token_b)},{immediate:!0}),{needReverse:b,theme:n,indexStore:y,direct:v,addCommom:I,decimalUi:C,fromCoin:t,toCoin:w,getExplorerUrl:ue,currentExplorer:u}}});const Ae=e=>(oe("data-v-453d5c59"),e=e(),se(),e),Lo={class:"pos-current-price"},Oo={class:"left"},To=Ae(()=>o("span",{class:"tit"},"Current Price",-1)),jo={key:0},Do={class:"value"},Bo={class:"text"},Fo={key:1},Eo={class:"value"},Ho={class:"text"},Go={class:"coin-rate"},Mo=Ae(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),qo=[Mo];function zo(e,t,w,b,y,h){var u,n,v,c;return a(),i("div",Lo,[o("div",Oo,[To,(e.needReverse?!e.direct:e.direct)?(a(),i("div",jo,[o("span",Do,r(("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.poolInfo.currentPrice,6))),1),o("span",Bo,r((u=e.toCoin)==null?void 0:u.symbol)+" per "+r((n=e.fromCoin)==null?void 0:n.symbol),1)])):(a(),i("div",Fo,[o("span",Eo,r(("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.poolInfo.currentPriceReverse,6))),1),o("span",Ho,r((v=e.fromCoin)==null?void 0:v.symbol)+" per "+r((c=e.toCoin)==null?void 0:c.symbol),1)]))]),o("div",Go,[o("div",{onClick:t[0]||(t[0]=_=>e.direct=!e.direct)},qo)])])}const Vo=Y(No,[["render",zo],["__scopeId","data-v-453d5c59"]]),Wo=X({props:{poolInfo:{type:Object,default:()=>({})},usePropsDirect:{type:Boolean,require:!1,default:!1},propDirect:{type:Boolean,require:!1,default:!1}},setup(e,t){const w=R(!0),b=R(e.usePropsDirect),y=R(e.propDirect);M(()=>e.propDirect,v=>{y.value=v},{immediate:!0});const h=R(),u=R();return M(()=>e.poolInfo,v=>{v&&!de(v)&&(v.maxPrice!=="∞"&&(h.value=new ie(1).div(new ie(v.maxPrice)).toString()),v.minPrice>0&&(u.value=new ie(1).div(new ie(v.minPrice)).toString()))},{immediate:!0}),{sFixD:he,direct:w,isUsepropsDirect:b,propsDirect:y,clickChange:()=>{w.value=!w.value,b.value&&t.emit("clickChange")},minPriceResever:h,maxPriceResever:u,decimalUi:C,addCommom:I}}});const Jo=e=>(oe("data-v-a48f2308"),e=e(),se(),e),Ko={class:"new-range"},Zo={class:"left"},Qo={key:0},Xo={class:"num"},Yo={class:"num"},xo={class:"per"},es={key:1},os={class:"num"},ss={class:"num"},ns={class:"per"},as=Jo(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),ts=[as];function is(e,t,w,b,y,h){var u,n,v,c;return a(),i("div",Ko,[o("div",Zo,[(e.isUsepropsDirect?e.propsDirect:e.direct)?(a(),i("p",Qo,[o("span",Xo,r(("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.poolInfo.minPrice,6)))+" - ",1),o("span",Yo,r(("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.poolInfo.maxPrice,6)))+" ",1),o("span",xo,r((u=e.poolInfo.coinB)==null?void 0:u.symbol)+" per "+r((n=e.poolInfo.coinA)==null?void 0:n.symbol),1)])):(a(),i("p",es,[o("span",os,r(e.poolInfo.maxPrice!=="∞"?("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.minPriceResever,6)):"0")+" - ",1),o("span",ss,r(e.poolInfo.minPrice>0?("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.maxPriceResever,6)):"∞")+" ",1),o("span",ns,r((v=e.poolInfo.coinA)==null?void 0:v.symbol)+" per "+r((c=e.poolInfo.coinB)==null?void 0:c.symbol),1)]))]),o("div",{class:"icon-change",onClick:t[0]||(t[0]=G(()=>e.clickChange(),["stop"]))},ts)])}const rs=Y(Wo,[["render",is],["__scopeId","data-v-a48f2308"]]),ls=X({components:{NewFarmsRange:rs},props:{poolInfo:{type:Object,default:()=>({})}},setup(){const e=R(!0);return{sFixD:he,direct:e}}});const ds=e=>(oe("data-v-7fedc8ee"),e=e(),se(),e),ms={class:"status-box"},us=["src"],cs={class:"status-text"},ps={class:"right"},vs=ds(()=>o("div",{class:"title"},"Price Range",-1));function gs(e,t,w,b,y,h){var n,v,c,_;const u=x("NewFarmsRange");return a(),i("div",{class:re(["pos-valid-range",((n=e.poolInfo)==null?void 0:n.currentStatus)=="Active"?"active-pos-valid-range":"inactive-pos-valid-range"])},[o("div",ms,[(v=e.poolInfo)!=null&&v.currentStatus?(a(),i("img",{key:0,src:((c=e.poolInfo)==null?void 0:c.currentStatus)=="Active"?"/sui-image/icon_pos_active@2x.png":"/sui-image/img_inactive@2x.png",alt:""},null,8,us)):U("",!0),o("span",cs,r((_=e.poolInfo)==null?void 0:_.currentStatus),1)]),o("div",ps,[vs,k(u,{"pool-info":e.poolInfo},null,8,["pool-info"])])],2)}const fs=Y(ls,[["render",gs],["__scopeId","data-v-7fedc8ee"]]),hs=X({components:{PosValidRange:fs},props:{pItem:{type:Object,required:!0}},setup(e){const t=f(()=>{var s,d;return((s=e.pItem)==null?void 0:s.nftHash)||((d=e.pItem)==null?void 0:d.id)}),{t:w}=we(),b=ye(),y=fe(),h=f(()=>y);f(()=>h.value.chainName?He(h.value.chainName):{});const u=Re(),n=f(()=>u),v=()=>{u.setPositionDetailCurrentTab("increase"),h.value.chainName==="Aptos"?b.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):e.pItem.positionSource=="clmm"?b.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`):b.push(`/new-position-detail?position_nft_id=${e.pItem.id}&positionSource=farming`)},c=f(()=>n.value.allTokenObj&&e.pItem.token_a.address&&n.value.allTokenObj[e.pItem.token_a.address]&&n.value.allTokenObj[e.pItem.token_a.address].logo_url),_=f(()=>n.value.allTokenObj&&e.pItem.token_b.address&&n.value.allTokenObj[e.pItem.token_b.address]&&n.value.allTokenObj[e.pItem.token_b.address].logo_url),T=f(()=>n.value.feeOwedObj[e.pItem.tokenName]&&n.value.feeOwedObj[e.pItem.tokenName].feeOwed),N=f(()=>n.value.feeOwedObj[e.pItem.tokenName]&&n.value.feeOwedObj[e.pItem.tokenName].feesResult),q=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarder||0),P=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarderView||0),p=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),L=f(()=>n.value.rewarderObj[e.pItem.tokenName]&&n.value.rewarderObj[e.pItem.tokenName].farmingRewardList),j=R(0),D=R();M(()=>n.value.RATES,s=>{s&&(D.value=s)},{immediate:!0});const ne=s=>{var d;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((d=n.value.tokensObj[s==null?void 0:s.address])==null?void 0:d.logo_url)||(h.value.theme==="default"?le("/image/coins/unknown.png"):le("/image/coins/sui-unknown.png"))},pe=f(()=>n.value.tokensObj);Ce(()=>{ve(e.pItem.minPrice,e.pItem.maxPrice)});const ae=R("--"),ve=(s,d)=>{s!=="0"&&d!=="∞"?ae.value=he(1/(1-Number((s/d)**.25)),2)+"x":ae.value="1x"};R(30);const A=R(null),F=f(()=>{var s,d,g,$,S,O,B,W,J,K,Z,_e;return A.value?A.value.is_display_rewarder?(s=A.value)!=null&&s.aprPercentageTotal?((d=A.value)==null?void 0:d.aprPercentageTotal)>1e4?">10,000":((g=A.value)==null?void 0:g.aprPercentageTotal)<.01&&(($=A.value)==null?void 0:$.aprPercentageTotal)>0?"<0.01":I((S=A.value)==null?void 0:S.aprPercentageTotal,2):(O=A.value)!=null&&O.rewardAprList?"0":"--":(B=A.value)!=null&&B.aprFee?((W=A.value)==null?void 0:W.aprFee)>1e4?">10,000":((J=A.value)==null?void 0:J.aprFee)<.01&&((K=A.value)==null?void 0:K.aprFee)>0?"<0.01":I((Z=A.value)==null?void 0:Z.aprFee,2):(_e=A.value)!=null&&_e.rewardAprList?"0":"--":"--"}),E=Ke(),H=f(()=>E),ge=f(()=>H.value.farmsPoolObj),l=f(()=>h.value.currentExplorer);return{nftHash:t,currentExplorer:l,getExplorerUrl:ue,aprNum:F,lever:ae,tokensObj:pe,showNum:Me,fromCoinUrl:c,toCoinUrl:_,decimalFormat:qe,clickDetails:v,t:w,addCommom:I,importIcon:le,router:b,store:h,pendingRewarder:q,pendingFees:T,pendingRewarderArr:p,pendingFeesArr:N,checkNullObj:de,fixD:ze,decimalUi:C,pendingRewarderView:P,aprAmount:j,getCoinIcon:ne,Decimal:ie,farmsPoolObj:ge,farmingRewardList:L,formatCurrency:Pe}}});const V=e=>(oe("data-v-0bc674c6"),e=e(),se(),e),_s={class:"card-content"},ks={class:"pos-name"},bs={class:"pos"},Is=V(()=>o("span",{class:"tit"},"NFT ID",-1)),$s={class:"val"},ws={class:"address"},ys={key:0,class:"tit"},Cs=["href"],Rs=V(()=>o("use",{"xlink:href":"#icon-icon_copy2"},null,-1)),Ps=[Rs],Ss=["href"],Us=V(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_link"})],-1)),As=[Us],Ns={class:"bottom-info"},Ls={class:"info-block-container"},Os={class:"range-box"},Ts={class:"label"},js={class:"text"},Ds={key:0,class:"hover-rewarder"},Bs={class:"rewarder-info"},Fs={class:"left-rewarder"},Es={alt:""},Hs={class:"right-rewarder"},Gs={class:"amount"},Ms={key:0,class:"amount-usd"},qs={key:1,class:"amount-usd"},zs={class:"rewarder-info"},Vs={class:"left-rewarder"},Ws={alt:""},Js={class:"right-rewarder"},Ks={class:"amount"},Zs={key:0,class:"amount-usd"},Qs={key:1,class:"amount-usd"},Xs={class:"label"},Ys={key:0,class:"text"},xs={key:1,class:"text"},en={class:"hover-rewarder"},on={class:"left-rewarder"},sn={alt:""},nn={class:"right-rewarder"},an={class:"amount"},tn={class:"amount-usd"},rn={key:2,class:"text"},ln={class:"label-box"},dn={key:0,class:"text"},mn={class:"img-text"},un={key:0,class:"label"},cn=V(()=>o("img",{class:"img-default",src:Se,alt:""},null,-1)),pn=[cn],vn={key:1,class:"label"},gn=V(()=>o("img",{class:"img-default",src:Ze,alt:""},null,-1)),fn=[gn],hn={class:"hover-rewarder"},_n=V(()=>o("div",{class:"title"},"Mining Rewards",-1)),kn={class:"left-rewarder"},bn={alt:""},In={class:"right-rewarder"},$n={class:"amount"},wn={class:"amount-usd"},yn=V(()=>o("div",{class:"title"},"Farming Rewards",-1)),Cn={class:"left-rewarder"},Rn={alt:""},Pn={class:"right-rewarder"},Sn={class:"amount"},Un={class:"amount-usd"},An={key:1,class:"text"},Nn=V(()=>o("div",{class:"more-box"},[o("div",{class:"more"},[o("span",null,"Manage"),o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})])])],-1));function Ln(e,t,w,b,y,h){var _,T,N,q,P;const u=x("PosValidRange"),n=De,v=$e,c=Te("image");return a(),i("div",{class:"new-my-position-item",onClick:t[7]||(t[7]=(...p)=>e.clickDetails&&e.clickDetails(...p))},[o("div",_s,[o("div",ks,[o("div",bs,[Is,o("span",$s,r(e.pItem.tokenName.split("|")[1]),1)]),o("div",ws,[e.nftHash?(a(),i("span",ys,"Address")):U("",!0),e.nftHash?(a(),i("a",{key:1,class:"val",target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:m(ue))(e.currentExplorer,"nftAddress",e.nftHash),onClick:t[0]||(t[0]=G(()=>{},["stop"]))},"  "+r((_=e.nftHash)==null?void 0:_.substr(0,4))+" ... "+r((N=e.nftHash)==null?void 0:N.substr(((T=e.nftHash)==null?void 0:T.length)-4,4))+"  ",9,Cs)):U("",!0),e.nftHash?(a(),i("svg",{key:2,class:"icon","aria-hidden":"true",onClick:t[1]||(t[1]=G(p=>e.store.copy(e.nftHash),["stop"]))},Ps)):U("",!0),o("a",{class:"h5-link-icon",href:("getExplorerUrl"in e?e.getExplorerUrl:m(ue))(e.currentExplorer,"nftAddress",e.nftHash),target:"_blank",onClick:t[2]||(t[2]=G(()=>{},["stop"]))},As,8,Ss)])]),o("div",Ns,[o("div",Ls,[o("div",{class:"info-block",onClick:t[3]||(t[3]=G(()=>{},["stop"]))},[o("div",Os,[k(u,{"pool-info":{...e.pItem,minPrice:e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("decimalUi"in e?e.decimalUi:m(C))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6):("decimalUi"in e?e.decimalUi:m(C))(e.pItem.minPrice,6),maxPrice:(e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("decimalUi"in e?e.decimalUi:m(C))(1/e.pItem.minPrice,6):("decimalUi"in e?e.decimalUi:m(C))(e.pItem.maxPrice,6)}},null,8,["pool-info"])])]),o("div",{class:re(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""]),onClick:t[4]||(t[4]=G(()=>{},["stop"]))},[o("div",Ts,r(e.$t("common.liquidity")),1),o("div",js,[k(n,{"overlay-class-name":"position-tooltip"},{title:z(()=>[e.pItem.amountUSD>0?(a(),i("div",Ds,[o("div",Bs,[o("div",Fs,[te(o("img",Es,null,512),[[c,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),o("span",null,r(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),o("div",Hs,[o("div",Gs,r(e.pItem.needReverse?("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(a(),i("div",qs,r(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:m(I))(e.pItem.tokenBRates,2):"<$0.01"),1)):(a(),i("div",Ms,r(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:m(I))(e.pItem.tokenARates,2):"<$0.01"),1))])]),o("div",zs,[o("div",Vs,[te(o("img",Ws,null,512),[[c,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),o("span",null,r(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),o("div",Js,[o("div",Ks,r(e.pItem.needReverse?("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(a(),i("div",Qs,r(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.pItem.tokenARates,2)):"<$0.01"),1)):(a(),i("div",Zs,r(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):U("",!0)]),default:z(()=>[o("span",null," $"+r(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:m(I))(e.pItem.amountUSD,2)),1)]),_:1})])],2),o("div",{class:re(["info-block cursor-block",e.pendingFees==0?"block-none":""]),onClick:t[5]||(t[5]=G(()=>{},["stop"]))},[o("div",Xs,r(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(a(),i("div",Ys,"$ --")):isNaN(e.pendingFees)?(a(),i("div",rn,[k(v,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),i("div",xs,[k(n,{"overlay-class-name":"position-tooltip"},{title:z(()=>[o("div",en,[(a(!0),i(Q,null,ee(e.pendingFeesArr,p=>(a(),i("div",{key:p,class:"rewarder-info"},[o("div",on,[te(o("img",sn,null,512),[[c,e.getCoinIcon(p)]]),o("span",null,r(p.symbol),1)]),o("div",nn,[o("div",an,r(Number(p.amount)==0?0:("formatCurrency"in e?e.formatCurrency:m(Pe))(p.amount,p.decimals,!0,!1,!1)),1),o("div",tn,r(Number(p.amountUSD)==0?"$0":Number(p.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:m(I))(p.amountUSD,2):"<$0.01"),1)])]))),128))])]),default:z(()=>[o("span",null,r(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:m(I))(e.pendingFees,2)),1)]),_:1})]))],2),e.pItem.is_display_rewarder&&((q=e.pItem)!=null&&q.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:m(de))((P=e.pItem)==null?void 0:P.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0||e.pItem.rewards&&e.pItem.rewards.length>0?(a(),i("div",{key:0,class:re(["info-block cursor-block",[e.pendingRewarder==0&&e.pItem.rewards&&e.pItem.rewards.length==0?"block-none ":"",Number(e.pendingRewarder)==0?" block-none-reward":""].join(",")]),onClick:t[6]||(t[6]=G(()=>{},["stop"]))},[o("div",ln,[o("span",null,r(e.$t("newAdd.pendingRewards")),1)]),e.pendingRewarder||e.pendingRewarder==0||e.pItem.farmingRewardTotalUsd?(a(),i("div",dn,[k(n,{"overlay-class-name":"position-tooltip"},je({default:z(()=>{var p,L;return[o("div",mn,[e.pItem.rewards&&e.pItem.rewards.length>0?(a(),i("div",un,pn)):U("",!0),e.pItem.is_display_rewarder&&((p=e.pItem)!=null&&p.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:m(de))((L=e.pItem)==null?void 0:L.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(a(),i("div",vn,fn)):U("",!0),o("span",null,r(e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd>.01?`$${("addCommom"in e?e.addCommom:m(I))(e.pendingRewarder+e.pItem.farmingRewardTotalUsd,2)}`:e.pendingRewarder+e.pItem.farmingRewardTotalUsd>0&&e.pendingRewarder+e.pItem.farmingRewardTotalUsd<=.01?"<$0.01":"$0"),1)])]}),_:2},[e.pendingRewarder>0?{name:"title",fn:z(()=>[o("div",hn,[_n,(a(!0),i(Q,null,ee(e.pendingRewarderArr,p=>(a(),i("div",{key:p,class:"rewarder-info"},[o("div",kn,[te(o("img",bn,null,512),[[c,e.getCoinIcon(p)]]),o("span",null,r(p.symbol),1)]),o("div",In,[o("div",$n,r(("addCommom"in e?e.addCommom:m(I))(("decimalUi"in e?e.decimalUi:m(C))(p.amount,p.decimals))),1),o("div",wn,r(Number(p.amountUSD)==0?"$0":Number(p.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:m(I))(p.amountUSD,2):"<$0.01"),1)])]))),128)),e.pItem.rewards&&e.pItem.rewards.length>0?(a(),i(Q,{key:0},[yn,(a(!0),i(Q,null,ee(e.pItem.rewards,p=>(a(),i("div",{key:p,class:"rewarder-info"},[o("div",Cn,[te(o("img",Rn,null,512),[[c,e.getCoinIcon(p)]]),o("span",null,r(p.symbol),1)]),o("div",Pn,[o("div",Sn,r(("decimalUi"in e?e.decimalUi:m(C))(p.amount,p.decimals)),1),o("div",Un,r(Number(p.rewarderAmountUsd)==0?"$0":Number(p.rewarderAmountUsd)>.01?"$"+("addCommom"in e?e.addCommom:m(I))(p.rewarderAmountUsd,2):"<$0.01"),1)])]))),128))],64)):U("",!0)])]),key:"0"}:void 0]),1024)])):(a(),i("div",An,[k(v,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})]))],2)):U("",!0)])])]),Nn])}const On=Y(hs,[["render",Ln],["__scopeId","data-v-0bc674c6"]]),Tn=X({components:{TotalPosition:Je,PoolSymbolNameBlock:Ao,PositionLoading:Ue,NewMyPositionItem:On,PosCurrentPrice:Vo},setup(){const e=R(!1),{t}=we(),w=R(["position"]),b=ye(),y=R(""),h=fe(),u=f(()=>h),n=f(()=>u.value.chainName?We[u.value.chainName]:{});let v=R([]);const c=Re(),_=f(()=>c),T=Ve(),N=f(()=>T);R(!0);const q=R("TVL"),P=()=>{e.value=!0,v.value=[],N.value.address&&(c.setPools(ne.value.poolConfigList,u.value.chainName),c.getMyPositons(N.value.address,_.value.poolsObj,u.value.chainName)),setTimeout(()=>{e.value=!1},1e3)},p=f(()=>{const l=Array.from(new Set(_.value.poolConfigList.flatMap(s=>!(s!=null&&s.category)||(s==null?void 0:s.category)==""?"All":s==null?void 0:s.category)));return console.log(l,"newArr"),l.length<=1?[]:l});M(()=>u.value.isRefresh,l=>{var s,d,g,$;l&&(($=(g=(d=(s=b==null?void 0:b.currentRoute)==null?void 0:s.value)==null?void 0:d.name)==null?void 0:g.split("-"))==null?void 0:$[1])=="position"&&P()}),Ce(()=>{v.value=[],c.setMyPositionsLoading(!0)}),Be(()=>{N.value.connected||(v.value=[])});const L=()=>{e.value=!0;let l=[];_.value.myPositions.forEach(d=>{var W,J,K,Z;let g=d.positionSource=="farming",$,S;const O=d.amountA*((W=_.value.RATES[d.token_a.address])==null?void 0:W.price),B=d.amountB*((J=_.value.RATES[d.token_b.address])==null?void 0:J.price);(K=_.value.RATES[d.token_a.address])!=null&&K.price&&((Z=_.value.RATES[d.token_b.address])!=null&&Z.price)?($=O+B,S=O+B):($=" --",S=0),console.log(_.value.currentPoolTab,"##pools.value.currentPoolTab"),l.push({...d,amountUSD:$,amountUSDOrigin:S,tokenARates:O,tokenBRates:B,isStableFarming:g})});const s={};l.forEach(d=>{s[d.address]?s[d.address].positionList.push(d):(s[d.address]={},s[d.address].poolInfo=d,s[d.address].positionList=[d])}),v.value=Object.values(s)||[],console.log(v.value,"list.value========>")};M(()=>[_.value.myPositions,_.value.RATES],([l,s])=>{l&&s&&(console.log("0605==>updateLpList9099999"),L())},{immediate:!0}),M(()=>[N.value.address,_.value.poolConfigList,_.value.poolsObj,u.value.chainName],([l,s,d,g])=>{var $,S,O;l&&s&&s.length>0&&g&&(g!=null&&g.toLowerCase().includes(($=s[0])==null?void 0:$.chain))&&!de(d)&&(g==="Aptos"?s.length===Object.values(d).length:(O=(S=Object.values(d)[0])==null?void 0:S.chain)!=null&&O.includes("sui"))&&(console.log(d,s,"0605==>getMyPositons9099999"),c.getMyPositons(N.value.address,d,g))},{immediate:!0,deep:!0}),M(()=>N.value.address,l=>{l||c.setMyPositions()},{immediate:!0});const j=Ge(),D=f(()=>j),ne=f(()=>c),pe=async l=>{await j.getSourceGroups();const s=D.value.sourceGroups&&D.value.sourceGroups.length>0&&D.value.sourceGroups[0]&&D.value.sourceGroups[0].sources||[];console.log(s,"####source"),console.log(l,"###myPositions");for(let d=0;d<s.length;d++){const{pool_address:g,position_index:$}=JSON.parse(s[d].blockchainAddress);let S=!1,O;for(let B=0;B<l.length;B++){const{poolAddress:W,index:J,positionSource:K,name:Z}=l[B];g==W&&Number(K=="clmm"?J:Z.split("-")[1])==Number($)&&(S=!0),O={pool_address:g,position_index:$}}S||await j.subscribePosition(O,"",!1,!1)}},ae=async()=>{await j.getSourceGroups();const l=D.value.sourceGroups&&D.value.sourceGroups.length>0&&D.value.sourceGroups[0]&&D.value.sourceGroups[0].sources||[];for(let s=0;s<l.length;s++){const{pool_address:d,position_index:g}=JSON.parse(l[s].blockchainAddress),{name:$}=l[s],S={pool_address:d,position_index:g};await j.subscribePosition(S,$,!1,!1)}},ve=f(()=>ne.value.myPositionsLoading);M(()=>ne.value.myPositions,(l,s)=>{n.value.hasNotifi&&(l&&l.length>0&&s&&s.length!==l.length?pe(l):l&&l.length==0&&!ve.value&&ae())},{immediate:!0});const A=l=>{var s;return(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||((s=_.value.tokensObj[l==null?void 0:l.address])==null?void 0:s.logo_url)||(u.value.theme==="default"?le("/image/coins/unknown.png"):le("/image/coins/sui-unknown.png"))},F=R(null),E=f(()=>F.value&&F.value.firstToken?F.value.firstToken:null),H=f(()=>F.value&&F.value.lastToken?F.value.lastToken:null),ge=f(()=>{let l=[];l=v.value;const s=l.filter((g,$)=>E.value&&H.value?g.poolInfo.coinA.symbol==E.value.symbol&&g.poolInfo.coinB.symbol==H.value.symbol||g.poolInfo.coinA.symbol==H.value.symbol&&g.poolInfo.coinB.symbol==E.value.symbol:E.value?g.poolInfo.coinA.symbol.toLowerCase().includes(E.value.symbol.toLowerCase())||g.poolInfo.coinB.symbol.toLowerCase().includes(E.value.symbol.toLowerCase()):H.value?g.poolInfo.coinA.symbol.toLowerCase().includes(H.value.symbol.toLowerCase())||g.poolInfo.coinB.symbol.toLowerCase().includes(H.value.symbol.toLowerCase()):l);if(!_.value.myPositionsLoading){const g=s.map($=>$==null?void 0:$.positionList).flat();console.log("🚀 ~ showList ~ arr:",g),h.setPositiomAmount(g.length),c.setPositionShowList(g)}return s.filter((g,$)=>{var S;return((S=g.positionList)==null?void 0:S.length)>0})});return Fe(()=>{h.setPositiomAmount("--"),c.setPositionShowList([])}),{tabArr:p,showList:ge,childTokenSelectRef:F,firstToken:E,lastToken:H,getCoinIcon:A,selectValue:q,t,pools:_,store:u,wallet:N,list:v,clickRefresh:P,refresh:e,current:w,router:b,searchKey:y}}});const ce=e=>(oe("data-v-de6abb6b"),e=e(),se(),e),jn={class:"new-position-list-container pageHaveRadiusSkeleton"},Dn={class:"filter-refresh"},Bn={class:"icon-box"},Fn=ce(()=>o("use",{"xlink:href":"#icon-icon_refresh"},null,-1)),En=[Fn],Hn={class:"position-card-top"},Gn={key:0,class:"upgrade-loading"},Mn={key:1,class:"position-list"},qn={class:"name-price"},zn={class:"price-other-info"},Vn={class:"farm-create"},Wn=ce(()=>o("img",{class:"img-default",src:Se,alt:""},null,-1)),Jn=ce(()=>o("span",null,"Farm",-1)),Kn=ce(()=>o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})],-1)),Zn=[Wn,Jn,Kn],Qn={key:2,class:"no-data"},Xn={key:0,src:Qe,alt:""},Yn={key:1,src:Xe,alt:""},xn={key:3,class:"no-data"},ea={key:0,src:Ye,alt:""},oa={key:1,src:xe,alt:""};function sa(e,t,w,b,y,h){const u=Ne,n=Le,v=x("TotalPosition"),c=Ue,_=x("PoolSymbolNameBlock"),T=x("PosCurrentPrice"),N=Ee,q=x("NewMyPositionItem");return a(),i("div",jn,[k(u,{"current-tab":"Positions"}),o("div",Dn,[k(n,{ref:"childTokenSelectRef"},null,512),o("div",{class:"refresh-icon",onClick:t[0]||(t[0]=(...P)=>e.clickRefresh&&e.clickRefresh(...P))},[o("div",Bn,[(a(),i("svg",{class:re(["icon",{refresh:e.isRefresh}]),"aria-hidden":"true"},En,2))])])]),o("div",Hn,[e.wallet&&e.wallet.address?(a(),me(v,{key:0})):U("",!0)]),e.pools.myPositionsLoading&&e.wallet.connected?(a(),i("div",Gn,[k(c,{loading:e.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):U("",!0),e.showList&&e.showList.length>0&&e.wallet.connected&&!e.pools.myPositionsLoading?(a(),i("div",Mn,[(a(!0),i(Q,null,ee(e.showList,P=>{var p;return a(),i("div",{key:(p=P.poolInfo)==null?void 0:p.address,class:"item-box"},[o("div",qn,[k(_,{"pool-info":P.poolInfo},null,8,["pool-info"]),o("div",zn,[k(T,{"pool-info":P.poolInfo},null,8,["pool-info"]),o("div",Vn,[P.poolInfo.isStableFarming?(a(),i("div",{key:0,class:"farming-logo",onClick:t[1]||(t[1]=G(L=>e.$router.push("/farms"),["stop"]))},Zn)):U("",!0),k(N,{class:"ghost-btn create",onClick:L=>{var j;return e.$router.push(`/liquidity/deposit?poolAddress=${(j=P.poolInfo)==null?void 0:j.poolAddress}`)}},{default:z(()=>[ke("Create new position")]),_:2},1032,["onClick"])])])]),(a(!0),i(Q,null,ee(P.positionList,L=>(a(),me(q,{key:L==null?void 0:L.name,"p-item":L},null,8,["p-item"]))),128))])}),128))])):U("",!0),e.showList&&e.showList.length<=0&&!e.pools.myPositionsLoading&&e.wallet.connected?(a(),i("div",Qn,[e.store.theme=="default"?(a(),i("img",Xn)):(a(),i("img",Yn)),o("span",null,r(e.$t("common.noLiquidityPositions")),1)])):U("",!0),e.wallet.connected?U("",!0):(a(),i("div",xn,[e.store.theme=="default"?(a(),i("img",ea)):(a(),i("img",oa)),k(N,{class:"connect-wallet",onClick:t[2]||(t[2]=P=>e.wallet.setIsShowWalletModal(!0))},{default:z(()=>[ke(r(e.$t("button.connectWallet")),1)]),_:1})]))])}const Ea=Y(Tn,[["render",sa],["__scopeId","data-v-de6abb6b"]]);export{Ea as default};
