import{_ as Ao}from"./pool-position-tab.5fad9c15.js";import{a as z,e as q,o as s,f as n,h as o,F as Y,E as Z,c as so,G as g,i as d,a4 as Co,S as go,p as W,k as J,x as t,r as V,u as c,D as U,w as N,y as to,P as ko,b as $o,m as w,C as Io,I as E,z as bo,A as ro,B as xo,j as _o}from"./entry.5e8d3f25.js";import"./index.5d7d5c35.js";import{_ as wo}from"./icon_farms_2x.0479b61f.js";import{_ as Lo}from"./img-no-Positions_2x.f6550a11.js";import{_ as Ro}from"./img-connect-wallet_2x.3c708865.js";import{u as Oo}from"./token.6798ccdb.js";import{u as Bo,c as Do}from"./index.09a244f6.js";import{u as yo}from"./pool.85be4826.js";import{a as j,d as F,o as vo,c as uo,h as No}from"./common.fc02fb4f.js";import{b as jo}from"./usePositionList.36319e44.js";import{u as Fo}from"./usePoolList.11b2f5d3.js";import{C as mo}from"./coin-img.6b5e6e38.js";import{T as fo}from"./token-warning-new.68e942e1.js";/* empty css              */import{_ as Uo}from"./icon_rewards_2x.9f49cdf0.js";import{u as So,a as Go}from"./index.cdb0d33c.js";import{s as H}from"./formatter.a215edb7.js";import{T as Ho}from"./total-position.720f6303.js";import{u as zo}from"./usePendingYeild.29717b0e.js";import{u as qo}from"./notifi.ec7a23df.js";import{_ as Eo}from"./coin-select.8728c80f.js";import{i as ho}from"./import-icon.de3e6c66.js";import"./select-tab.23c84bd2.js";import"./decimal.765d8738.js";import"./decimal.a2826370.js";import"./useSDK.f7360989.js";import"./useToken.654c6cfc.js";import"./fetchFun.ff4aae28.js";import"./useRate.6a7e071b.js";import"./coin-pair-name.0f23896b.js";import"./token-warning.a42b07fd.js";import"./no-data.a2946843.js";/* empty css              *//* empty css              */import"./useWhale.345946f7.js";/* empty css              */import"./icon-tooltip.6167aa8a.js";import"./token-warning_2x.296c84d5.js";import"./img-no-Positions_2x.b84b1fce.js";const Yo=z({props:{loading:{type:Boolean,required:!0},source:{type:String,default:""}},setup(e){return{positionList:[{},{},{}]}}});const Vo=e=>(W("data-v-ef7f0692"),e=e(),J(),e),Wo={class:"new-pool-position-list"},Jo={class:"position-list"},Ko={class:"name-price"},Mo={class:"symbol-name"},Qo={class:"avatar-box"},Xo={class:"name-box"},Zo={class:"price-other-info"},oe={class:"new-my-position-item"},ee={class:"card-content"},se={class:"pos-name"},te={class:"bottom-info"},ne={class:"pos-valid-range"},ie={class:"info-block"},ae={class:"info-block"},le={class:"info-block"},ce=Vo(()=>o("div",{class:"info-block"},null,-1));function re(e,l,C,S,$,_){const a=Co,i=go;return s(),n("div",Wo,[o("div",Jo,[(s(!0),n(Y,null,Z(e.positionList,(m,p)=>(s(),n("div",{key:p,class:"item-box"},[o("div",Ko,[o("div",Mo,[o("div",Qo,[e.loading?(s(),so(a,{key:0,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):g("",!0),e.loading?(s(),so(a,{key:1,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):g("",!0)]),o("div",Xo,[d(i,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),d(i,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])])]),o("div",Zo,[o("span",null,[d(i,{class:"upgrade-long-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])])])]),o("div",oe,[o("div",ee,[o("div",se,[d(i,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",te,[o("div",ne,[d(i,{class:"upgrade-long-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",ie,[d(i,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),d(i,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",ae,[d(i,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),d(i,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),o("div",le,[d(i,{class:"upgrade-text-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"]),d(i,{class:"upgrade-title-skeleton",loading:e.loading,active:"",paragraph:!1},null,8,["loading"])]),ce])])])]))),128))])])}const de=q(Yo,[["render",re],["__scopeId","data-v-ef7f0692"]]),ue={class:"pool-symbol-name-block"},pe={class:"coin-info-fee"},_e={class:"coin-logo"},ve={class:"logo-token-warning"},me={class:"logo-token-warning"},fe={class:"symbol-label"},he={class:"pool-name"},ge={class:"pool-fee"},ke={class:"name"},$e=z({__name:"pool-symbol-name-block",props:{poolInfo:{type:Object,default:()=>({})}},setup(e){return(l,C)=>{var S,$,_,a,i,m,p,f,h,u,L,I,R,O;return s(),n("div",ue,[o("div",pe,[o("div",_e,[o("div",ve,[d(mo,{url:($=(S=e.poolInfo)==null?void 0:S.coinA)==null?void 0:$.logo_url,size:"36px"},null,8,["url"]),d(fo,{token:(_=e.poolInfo)==null?void 0:_.coinA,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),o("div",me,[d(mo,{url:(i=(a=e.poolInfo)==null?void 0:a.coinB)==null?void 0:i.logo_url,size:"36px"},null,8,["url"]),d(fo,{token:(m=e.poolInfo)==null?void 0:m.coinB,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),o("div",fe,[o("div",he,[o("span",null,t((f=(p=e.poolInfo)==null?void 0:p.coinA)==null?void 0:f.symbol)+" - ",1),o("span",null,t((u=(h=e.poolInfo)==null?void 0:h.coinB)==null?void 0:u.symbol),1),o("div",ge,t(e.poolInfo.feeRate),1)]),o("div",ke,[o("span",null,t((I=(L=e.poolInfo)==null?void 0:L.coinA)==null?void 0:I.name)+" - ",1),o("span",null,t((O=(R=e.poolInfo)==null?void 0:R.coinB)==null?void 0:O.name),1)])])])])])}}});const Ie=q($e,[["__scopeId","data-v-a0f9722f"]]),Po=e=>(W("data-v-6dd8fda8"),e=e(),J(),e),be={class:"pos-current-price"},we={class:"left"},ye=Po(()=>o("span",{class:"tit"},"Current Price",-1)),Se={key:0},Pe={class:"value"},Te={class:"text"},Ae={key:1},Ce={class:"value"},xe={class:"text"},Le={class:"coin-rate"},Re=Po(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),Oe=[Re],Be=z({__name:"pos-current-price",props:{poolInfo:{type:Object,default:()=>null}},setup(e){const l=V(!0);return(C,S)=>{var $,_,a,i,m,p,f,h;return s(),n("div",be,[o("div",we,[ye,(e.poolInfo.isReverse?!l.value:l.value)?(s(),n("div",Se,[o("span",Pe,t(c(j)(c(F)(e.poolInfo.currentPrice,6))),1),o("span",Te,t((_=($=e.poolInfo)==null?void 0:$.coinB)==null?void 0:_.symbol)+" per "+t((i=(a=e.poolInfo)==null?void 0:a.coinA)==null?void 0:i.symbol),1)])):(s(),n("div",Ae,[o("span",Ce,t(c(j)(c(F)(e.poolInfo.currentPriceReverse,6))),1),o("span",xe,t((p=(m=e.poolInfo)==null?void 0:m.coinA)==null?void 0:p.symbol)+" per "+t((h=(f=e.poolInfo)==null?void 0:f.coinB)==null?void 0:h.symbol),1)]))]),o("div",Le,[o("div",{onClick:S[0]||(S[0]=u=>l.value=!l.value)},Oe)])])}}});const De=q(Be,[["__scopeId","data-v-6dd8fda8"]]),Ne=e=>(W("data-v-1c0af680"),e=e(),J(),e),je={class:"new-range"},Fe={class:"left"},Ue={key:0},Ge={class:"num"},He={class:"num"},ze={class:"per"},qe={key:1},Ee={class:"num"},Ye={class:"num"},Ve={class:"per"},We=Ne(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_swap_change"})],-1)),Je=[We],Ke=z({__name:"new-position-range",props:{positionInfo:{type:Object,default:()=>({})}},setup(e){const l=V(!0);return(C,S)=>{var $,_,a,i;return s(),n("div",je,[o("div",Fe,[e.positionInfo.isReverse&&l.value?(s(),n("p",Ue,[o("span",Ge,t(c(j)(c(F)(e.positionInfo.minPrice,6)))+" - ",1),o("span",He,t(c(j)(c(F)(e.positionInfo.maxPrice,6)))+" ",1),o("span",ze,t(($=e.positionInfo.coinA)==null?void 0:$.symbol)+" per "+t((_=e.positionInfo.coinB)==null?void 0:_.symbol),1)])):(s(),n("p",qe,[o("span",Ee,t(e.positionInfo.minPriceResever>0?c(j)(c(F)(e.positionInfo.minPriceResever,6)):"0")+" - ",1),o("span",Ye,t(e.positionInfo.maxPriceResever!=="∞"?c(j)(c(F)(e.positionInfo.maxPriceResever,6)):"∞")+" ",1),o("span",Ve,t((a=e.positionInfo.coinB)==null?void 0:a.symbol)+" per "+t((i=e.positionInfo.coinA)==null?void 0:i.symbol),1)]))]),o("div",{class:"icon-change",onClick:S[0]||(S[0]=U(m=>l.value=!l.value,["stop"]))},Je)])}}});const Me=q(Ke,[["__scopeId","data-v-1c0af680"]]),Qe=e=>(W("data-v-7f3eee6a"),e=e(),J(),e),Xe={class:"status-box"},Ze=["src"],os={class:"status-text"},es={class:"right"},ss=Qe(()=>o("div",{class:"title"},"Price Range",-1)),ts=z({__name:"pos-valid-range",props:{positionInfo:{type:Object,default:()=>({})}},setup(e){return(l,C)=>{var $;const S=ko;return s(),n("div",{class:to(["pos-valid-range",(($=e.positionInfo)==null?void 0:$.positionStatus)=="Active"?"active-pos-valid-range":"inactive-pos-valid-range"])},[d(S,{placement:"top","arrow-point-at-center":"","overlay-class-name":"ant-tooltip-text-color"},{title:N(()=>{var _;return[o("span",null,t(l.$t("tips.statusblocktips",{word:((_=e.positionInfo)==null?void 0:_.positionStatus)==="Active"?"within":"out of"})),1)]}),default:N(()=>{var _,a,i;return[o("div",Xe,[(_=e.positionInfo)!=null&&_.positionStatus?(s(),n("img",{key:0,src:((a=e.positionInfo)==null?void 0:a.positionStatus)=="Active"?"/sui-image/icon_pos_active@2x.png":"/sui-image/img_inactive@2x.png",alt:""},null,8,Ze)):g("",!0),o("span",os,t((i=e.positionInfo)==null?void 0:i.positionStatus),1)])]}),_:1}),o("div",es,[ss,d(Me,{"position-info":e.positionInfo},null,8,["position-info"])])],2)}}});const ns=q(ts,[["__scopeId","data-v-7f3eee6a"]]),K=e=>(W("data-v-8b891f40"),e=e(),J(),e),is={class:"card-content"},as={class:"pos-name"},ls={class:"pos"},cs=K(()=>o("span",{class:"tit"},"NFT ID",-1)),rs={class:"val"},ds={class:"address"},us={key:0,class:"tit"},ps=["href"],_s=K(()=>o("use",{"xlink:href":"#icon-icon_copy2"},null,-1)),vs=[_s],ms=["href"],fs=K(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_link"})],-1)),hs=[fs],gs={class:"bottom-info"},ks={class:"info-block-container"},$s={class:"range-box"},Is={class:"label"},bs={class:"text"},ws={key:0,class:"hover-rewarder"},ys={class:"rewarder-info"},Ss={class:"left-rewarder"},Ps={alt:""},Ts={class:"right-rewarder"},As={class:"amount"},Cs={class:"amount-usd"},xs={class:"rewarder-info"},Ls={class:"left-rewarder"},Rs={alt:""},Os={class:"right-rewarder"},Bs={class:"amount"},Ds={class:"amount-usd"},Ns={class:"label"},js={key:0,class:"text"},Fs={class:"hover-rewarder"},Us={class:"left-rewarder"},Gs={alt:""},Hs={class:"right-rewarder"},zs={class:"amount"},qs={class:"amount-usd"},Es={key:1,class:"text"},Ys={key:0,class:"info-block cursor-block"},Vs={class:"label-box"},Ws={class:"text"},Js={class:"img-text"},Ks={key:0,class:"label"},Ms=K(()=>o("img",{class:"img-default",src:wo,alt:""},null,-1)),Qs=[Ms],Xs={key:1,class:"label"},Zs=K(()=>o("img",{class:"img-default",src:Uo,alt:""},null,-1)),ot=[Zs],et={class:"hover-rewarder"},st={key:0,class:"title"},tt={class:"left-rewarder"},nt={alt:""},it={class:"right-rewarder"},at={class:"amount"},lt={class:"amount-usd"},ct=K(()=>o("div",{class:"title"},"Farming Rewards",-1)),rt={class:"left-rewarder"},dt={alt:""},ut={class:"right-rewarder"},pt={class:"amount"},_t={class:"amount-usd"},vt=K(()=>o("div",{class:"more-box"},[o("div",{class:"more"},[o("span",null,"Manage"),o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})])])],-1)),mt=z({__name:"new-my-position-item",props:{pItem:{type:Object,required:!0}},setup(e){const l=e,C=$o(),S=()=>{const f=a.positionsObj[l.pItem.positionId];console.log("🚀🚀🚀 ~ file: new-my-position-item.vue:252 ~ clickDetails ~ currentPoolInfo:",f),a.setCurrentPositionInfo(f),l.pItem.positionSource=="clmm"?C.push(`/new-position-detail?id=${l.pItem.positionId}&positionSource=clmm`):C.push(`/new-position-detail?id=${l.pItem.farmPositionId}&positionSource=farm`)},$=So(),_=w(()=>$.currentExplorer),a=yo(),i=w(()=>a.positionPendingFees[l.pItem.positionId]),m=w(()=>a.positionPendingRewards[l.pItem.positionId]),p=w(()=>a.positionPendingFarmRewards[l.pItem.positionId]);return(f,h)=>{var R,O,G,no,M,Q,io;const u=ko,L=go,I=Io("image");return s(),n("div",{class:"new-my-position-item",onClick:S},[o("div",is,[o("div",as,[o("div",ls,[cs,o("span",rs,t(e.pItem.positionName),1)]),o("div",ds,[e.pItem.positionId?(s(),n("span",us,"Address")):g("",!0),e.pItem.nftHash?(s(),n("a",{key:1,class:"val",target:"_blank",href:c(vo)(_.value,"nftAddress",e.pItem.nftHash),onClick:h[0]||(h[0]=U(()=>{},["stop"]))},"  "+t((R=e.pItem.nftHash)==null?void 0:R.substr(0,4))+" ... "+t((G=e.pItem.nftHash)==null?void 0:G.substr(((O=e.pItem.nftHash)==null?void 0:O.length)-4,4))+"  ",9,ps)):g("",!0),e.pItem.nftHash?(s(),n("svg",{key:2,class:"icon","aria-hidden":"true",onClick:h[1]||(h[1]=U(P=>c($).copy(e.pItem.nftHash),["stop"]))},vs)):g("",!0),o("a",{class:"h5-link-icon",href:c(vo)(_.value,"nftAddress",e.pItem.nftHash),target:"_blank",onClick:h[2]||(h[2]=U(()=>{},["stop"]))},hs,8,ms)])]),o("div",gs,[o("div",ks,[o("div",{class:"info-block",onClick:h[3]||(h[3]=U(()=>{},["stop"]))},[o("div",$s,[d(ns,{"position-info":{...e.pItem,minPrice:e.pItem.minPrice,maxPrice:e.pItem.maxPrice,minPriceResever:e.pItem.minPriceResever,maxPriceResever:e.pItem.maxPriceResever}},null,8,["position-info"])])]),o("div",{class:to(["info-block cursor-block",e.pItem.positionAmountUSD=="--"||Number(e.pItem.positionAmountUSD)==0?"block-none":""]),onClick:h[4]||(h[4]=U(()=>{},["stop"]))},[o("div",Is,t(f.$t("common.liquidity")),1),o("div",bs,[d(u,{"overlay-class-name":"position-tooltip"},{title:N(()=>{var P,b,T,k,ao,X,lo,r;return[e.pItem.positionAmountUSD>0?(s(),n("div",ws,[o("div",ys,[o("div",Ss,[E(o("img",Ps,null,512),[[I,(b=(P=e.pItem)==null?void 0:P.coinA)==null?void 0:b.logo_url]]),o("span",null,t((k=(T=e.pItem)==null?void 0:T.coinA)==null?void 0:k.symbol),1)]),o("div",Ts,[o("div",As,t(c(j)(c(F)(e.pItem.coinaAmount,(X=(ao=e.pItem)==null?void 0:ao.coinA)==null?void 0:X.decimals))),1),o("div",Cs,t(c(H)(e.pItem.coinaAmountUSD)),1)])]),o("div",xs,[o("div",Ls,[E(o("img",Rs,null,512),[[I,e.pItem.coinB.logo_url]]),o("span",null,t(e.pItem.coinB.symbol),1)]),o("div",Os,[o("div",Bs,t(c(j)(c(F)(e.pItem.coinbAmount,(r=(lo=e.pItem)==null?void 0:lo.coinB)==null?void 0:r.decimals))),1),o("div",Ds,t(c(H)(e.pItem.coinbAmountUSD)),1)])])])):g("",!0)]}),default:N(()=>[o("span",null,t(c(H)(e.pItem.positionAmountUSD)),1)]),_:1})])],2),o("div",{class:to(["info-block cursor-block",((no=i.value)==null?void 0:no.feesAmountUSD)==0?"block-none":""])},[o("div",Ns,t(f.$t("newAdd.pendingFees")),1),(M=i.value)!=null&&M.feesAmountUSD?(s(),n("div",js,[d(u,{"overlay-class-name":"position-tooltip"},{title:N(()=>{var P;return[o("div",Fs,[(s(!0),n(Y,null,Z((P=i.value)==null?void 0:P.feesList,b=>(s(),n("div",{key:b,class:"rewarder-info"},[o("div",Us,[E(o("img",Gs,null,512),[[I,b.tokenInfo.logo_url]]),o("span",null,t(b.tokenInfo.symbol),1)]),o("div",Hs,[o("div",zs,t(b.amount),1),o("div",qs,t(c(H)(b.amountUSD)),1)])]))),128))])]}),default:N(()=>{var P;return[o("span",null,t(c(H)((P=i.value)==null?void 0:P.feesAmountUSD)),1)]}),_:1})])):(s(),n("div",Es,[d(L,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})]))],2),((Q=m.value)==null?void 0:Q.rewardsAmount)>0||((io=p.value)==null?void 0:io.rewardsAmount)>0?(s(),n("div",Ys,[o("div",Vs,[o("span",null,t(f.$t("newAdd.pendingRewards")),1)]),o("div",Ws,[d(u,{"overlay-class-name":"position-tooltip"},{title:N(()=>{var P,b,T;return[o("div",et,[((P=m.value)==null?void 0:P.rewardsAmount)>0?(s(),n("div",st,"Mining Rewards")):g("",!0),(s(!0),n(Y,null,Z((b=m.value)==null?void 0:b.rewarderAmountOwed,k=>(s(),n("div",{key:k,class:"rewarder-info"},[o("div",tt,[E(o("img",nt,null,512),[[I,k.tokenInfo.logo_url]]),o("span",null,t(k.tokenInfo.symbol),1)]),o("div",it,[o("div",at,t(c(j)(c(F)(k.amount,k.decimals))),1),o("div",lt,t(c(H)(k.amountUSD)),1)])]))),128)),((T=p.value)==null?void 0:T.rewardsAmount)>0?(s(),n(Y,{key:1},[ct,(s(!0),n(Y,null,Z(p.value.rewardList,k=>(s(),n("div",{key:k,class:"rewarder-info"},[o("div",rt,[E(o("img",dt,null,512),[[I,k.tokenInfo.logo_url]]),o("span",null,t(k.tokenInfo.symbol),1)]),o("div",ut,[o("div",pt,t(c(F)(k.amount,k.decimals)),1),o("div",_t,t(c(H)(k.amountUSD)),1)])]))),128))],64)):g("",!0)])]}),default:N(()=>{var P,b,T,k;return[o("div",Js,[((P=p.value)==null?void 0:P.rewardsAmount)>0?(s(),n("div",Ks,Qs)):g("",!0),((b=m.value)==null?void 0:b.rewardsAmount)>0?(s(),n("div",Xs,ot)):g("",!0),o("span",null,t(c(H)((((T=m.value)==null?void 0:T.rewardsAmount)||0)+(((k=p.value)==null?void 0:k.rewardsAmount)||0))),1)])]}),_:1})])])):g("",!0)])])]),vt])}}});const ft=q(mt,[["__scopeId","data-v-8b891f40"]]),ht=z({setup(){const{t:e,locale:l}=bo(),C=So(),S=w(()=>C),$=Go(),_=w(()=>$),a=u=>{var L;return(u==null?void 0:u.logoURI)||(u==null?void 0:u.logo_url)||((L=_.value.tokensObj[u==null?void 0:u.address])==null?void 0:L.logo_url)||(S.value.theme==="default"?ho("/image/coins/unknown.png"):ho("/image/coins/sui-unknown.png"))},i=V(!1),m=V(null),p=V(null);return{pools:_,getCoinIcon:a,isOpenTokenSelect:i,toDelectToken:u=>{i.value=!1,u=="first"&&(m.value=p.value),p.value=null},toSelectToken:u=>{m.value?p.value=u:m.value=u,i.value=!1},firstToken:m,lastToken:p,t:e,addCommom:j}}});const po=e=>(W("data-v-9235e3bc"),e=e(),J(),e),gt={class:"token-select-input-box"},kt=po(()=>o("div",{class:"icon-box"},[o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_search"})])],-1)),$t=po(()=>o("span",null,"Filter by token",-1)),It=[kt,$t],bt={key:0,class:"item"},wt={alt:""},yt={key:0,class:"pool-warning"},St=po(()=>o("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),Pt=[St],Tt={key:1,class:"item"},At={alt:""},Ct={key:0,class:"pool-warning"},xt=po(()=>o("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),Lt=[xt];function Rt(e,l,C,S,$,_){var m,p,f,h,u,L;const a=Eo,i=Io("image");return s(),n("div",gt,[o("div",{class:"search-input",onClick:l[2]||(l[2]=I=>e.firstToken&&e.lastToken?"":e.isOpenTokenSelect=!e.isOpenTokenSelect)},[o("div",null,[o("div",{class:to(["placeholder",e.firstCoin&&e.lastCoin?"notAllowed":""])},It,2),e.firstToken?(s(),n("div",bt,[E(o("img",wt,null,512),[[i,e.getCoinIcon(e.firstToken)]]),(p=(m=e.pools)==null?void 0:m.tokensObj[e.firstToken.address])!=null&&p.isSelfBuilt?(s(),n("div",yt)):g("",!0),o("span",null,t((f=e.firstToken)==null?void 0:f.symbol),1),(s(),n("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:l[0]||(l[0]=U(I=>e.toDelectToken("first"),["stop"]))},Pt))])):g("",!0),e.lastToken?(s(),n("div",Tt,[E(o("img",At,null,512),[[i,e.getCoinIcon(e.lastToken)]]),(u=(h=e.pools)==null?void 0:h.tokensObj[e.lastToken.address])!=null&&u.isSelfBuilt?(s(),n("div",Ct)):g("",!0),o("span",null,t((L=e.lastToken)==null?void 0:L.symbol),1),(s(),n("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:l[1]||(l[1]=U(I=>e.toDelectToken("last"),["stop"]))},Lt))])):g("",!0)])]),e.isOpenTokenSelect?(s(),so(a,{key:0,"existing-coins":"","last-select-coin":e.firstToken&&e.firstToken.address||"","is-allow-ban":!0,onOnSelect:e.toSelectToken,onOnClose:l[3]||(l[3]=I=>e.isOpenTokenSelect=!1)},null,8,["last-select-coin","onOnSelect"])):g("",!0)])}const Ot=q(ht,[["render",Rt],["__scopeId","data-v-9235e3bc"]]),oo=e=>(W("data-v-4ac59a98"),e=e(),J(),e),Bt={class:"new-position-list-container"},Dt={class:"filter-refresh"},Nt={class:"icon-box"},jt=oo(()=>o("use",{"xlink:href":"#icon-icon_refresh"},null,-1)),Ft=[jt],Ut={class:"position-card-top"},Gt={key:0,class:"upgrade-loading"},Ht={key:1,class:"position-list"},zt={class:"name-price"},qt={class:"price-other-info"},Et={class:"farm-create"},Yt=oo(()=>o("img",{class:"img-default",src:wo,alt:""},null,-1)),Vt=oo(()=>o("span",null,"Farm",-1)),Wt=oo(()=>o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})],-1)),Jt=[Yt,Vt,Wt],Kt={key:2,class:"no-data"},Mt=oo(()=>o("img",{src:Lo,alt:""},null,-1)),Qt={key:3,class:"no-data"},Xt=oo(()=>o("img",{src:Ro,alt:""},null,-1)),Zt=z({__name:"position",setup(e){const{t:l}=bo(),{router:C}=$o(),S=Oo(),$=w(()=>S.allTokensObj),_=Bo(),a=w(()=>_),i=yo(),m=w(()=>i),p=w(()=>i.poolsObj),f=w(()=>i.isPositionLoading),{getPositionList:h}=jo();ro(()=>[a.value.address,p.value,$.value],([r,v,B])=>{console.log("🚀🚀🚀 ~ file: position.vue:451 ~ watch ~ allTokensObj:",B),console.log("🚀🚀🚀 ~ file: position.vue:451 ~ watch ~ poolsObj:",v),console.log("🚀🚀🚀 ~ file: position.vue:451 ~ watch ~ walletAddress:",r),r&&v&&!uo(v)&&!uo(B)&&(console.log("🚀🚀🚀 ~ file: position.vue:453 ~ watch ~ getPositionList:"),h(r))},{immediate:!0});const{getPoolList:u}=Fo();ro(()=>p.value,r=>{console.log("🚀🚀🚀 ~ file: position.vue:462 ~ watch ~ newVal:",r,uo(r)),uo(r)&&u()},{immediate:!0});const L=w(()=>i.poolPositionsObj),I=V(null),R=w(()=>I.value&&I.value.firstToken?I.value.firstToken:null),O=w(()=>I.value&&I.value.lastToken?I.value.lastToken:null),G=w(()=>{let r=Object.values(L.value);const v=r.filter((y,x)=>R.value&&O.value?y.poolInfo.coinA.address==R.value.address&&y.poolInfo.coinB.address==O.value.address||y.poolInfo.coinA.address==O.value.address&&y.poolInfo.coinB.address==R.value.address:R.value?y.poolInfo.coinA.address.toLowerCase()==R.value.address.toLowerCase()||y.poolInfo.coinB.address.toLowerCase()==R.value.address.toLowerCase():O.value?y.poolInfo.coinA.address.toLowerCase()==O.value.address.toLowerCase()||y.poolInfo.coinB.address.toLowerCase()==O.value.address.toLowerCase():r);if(!f.value){const y=v.map(x=>x==null?void 0:x.positionList).flat();i.setPositionListNum(y.length)}return v.filter((y,x)=>{var A;return((A=y.positionList)==null?void 0:A.length)>0})}),{getPendingYieldList:no}=zo(),M=w(()=>i.positionTotalPendingFees),Q=w(()=>i.positionTotalPendingRewards),io=w(()=>(console.log("🚀🚀🚀 ~ file: position.vue:64 ~ pendingYield ~ positionTotalPendingFees.value:",M.value),console.log("🚀🚀🚀 ~ file: position.vue:65 ~ pendingYield ~ positionTotalPendingRewards.value:",Q.value),M.value==="--"||Q.value==="--"?"--":No(M.value||0).add(Q.value||0).toString()));ro(()=>io.value,r=>{r&&r!=="--"&&no()});const P=w(()=>m.value.positionList),b=qo(),T=w(()=>b),k=async r=>{console.log("🚀🚀🚀 ~ file: position.vue:569 ~ getNftTransfer ~ getNftTransfer:"),await b.getSourceGroups();const v=T.value.sourceGroups&&T.value.sourceGroups.length>0&&T.value.sourceGroups[0]&&T.value.sourceGroups[0].sources||[];console.log(v,"####source"),console.log(r,"###myPositions");for(let B=0;B<v.length;B++){const{pool_address:y,position_index:x}=JSON.parse(v[B].blockchainAddress);console.log("🚀🚀🚀 ~ file: position.vue:604 ~ getNftTransfer ~ source[j]:",v[B]);let A=!1,eo;for(let D=0;D<r.length;D++){const{pool:co,positionIndex:To}=r[D];y==co&&To==x&&(A=!0),eo={pool_address:y,position_index:x}}A||await b.subscribePosition(eo,"",!1,!1)}},ao=async()=>{await b.getSourceGroups();const r=T.value.sourceGroups&&T.value.sourceGroups.length>0&&T.value.sourceGroups[0]&&T.value.sourceGroups[0].sources||[];for(let v=0;v<r.length;v++){const{pool_address:B,position_index:y}=JSON.parse(r[v].blockchainAddress),{name:x}=r[v],A={pool_address:B,position_index:y};await b.subscribePosition(A,x,!1,!1)}};ro(()=>P.value,(r,v)=>{console.log("🚀🚀🚀 ~ file: position.vue:628 ~ newMyPositions:",r),Do.Sui.hasNotifi&&(r&&r.length>0&&v&&v.length!==r.length?k(r):r&&r.length==0&&!f.value&&ao())},{immediate:!0});const X=V(!1),lo=()=>{X.value=!0,a.value.address&&h(a.value.address),setTimeout(()=>{X.value=!1},1e3)};return(r,v)=>{const B=Ao,y=de,x=xo;return s(),n("div",Bt,[d(B,{"current-tab":"Positions"}),o("div",Dt,[d(Ot,{ref_key:"childTokenSelectRef",ref:I},null,512),o("div",{class:"refresh-icon",onClick:lo},[o("div",Nt,[(s(),n("svg",{class:to(["icon",{refresh:X.value}]),"aria-hidden":"true"},Ft,2))])])]),o("div",Ut,[a.value&&a.value.address?(s(),so(Ho,{key:0})):g("",!0)]),f.value&&a.value.connected?(s(),n("div",Gt,[d(y,{loading:f.value,type:"position"},null,8,["loading"])])):g("",!0),G.value&&G.value.length>0&&a.value.connected&&!f.value?(s(),n("div",Ht,[(s(!0),n(Y,null,Z(G.value,A=>{var eo;return s(),n("div",{key:(eo=A.poolInfo)==null?void 0:eo.address,class:"item-box"},[o("div",zt,[d(Ie,{"pool-info":A.poolInfo},null,8,["pool-info"]),o("div",qt,[d(De,{"pool-info":A.poolInfo},null,8,["pool-info"]),o("div",Et,[A.poolInfo.isFarmingPool?(s(),n("div",{key:0,class:"farming-logo",onClick:v[0]||(v[0]=U(D=>c(C).push("/farms"),["stop"]))},Jt)):g("",!0),d(x,{class:"ghost-btn create",onClick:D=>{var co;return c(C).push(`/liquidity/deposit?poolAddress=${(co=A.poolInfo)==null?void 0:co.poolAddress}`)}},{default:N(()=>[_o("Create new position")]),_:2},1032,["onClick"])])])]),(s(!0),n(Y,null,Z(A.positionList,D=>(s(),so(ft,{key:D==null?void 0:D.name,"p-item":D},null,8,["p-item"]))),128))])}),128))])):g("",!0),G.value&&G.value.length<=0&&!f.value&&a.value.connected?(s(),n("div",Kt,[Mt,o("span",null,t(c(l)("common.noLiquidityPositions")),1)])):g("",!0),a.value.connected?g("",!0):(s(),n("div",Qt,[Xt,d(x,{class:"connect-wallet",onClick:v[1]||(v[1]=A=>a.value.setIsShowWalletModal(!0))},{default:N(()=>[_o(t(c(l)("button.connectWallet")),1)]),_:1})]))])}}});const Hn=q(Zt,[["__scopeId","data-v-4ac59a98"]]);export{Hn as default};
