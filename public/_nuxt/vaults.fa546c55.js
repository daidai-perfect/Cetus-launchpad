import{s as Is,a as R,u as ps,d as as,c as H}from"./pool.c7bdc0b4.js";import{a as x,l as u,r as I,e as ss,o as t,f as n,h as o,i as h,v as r,u as b,S as zs,p as is,k as ds,j as U,F as M,E as cs,M as Rs,b as hs,Q as vs,s as js,t as Z,y as Ts,c as ts,x as T,w as _s,z as Bs,A as ns,B as Vs,H as Hs,q as X,K as Js}from"./entry.61500d5d.js";/* empty css              */import{a as os,u as gs}from"./sha256.7f09dfa8.js";import{_ as Os}from"./auto-pool-apy-tips.03ac5736.js";/* empty css              */import{u as Ks}from"./farms.e83bebcd.js";import{_ as Qs}from"./upgrade-loading.0b6ccc95.js";import{_ as Ns}from"./token-warning.9ebb122a.js";import{_ as Gs}from"./coin-tips.e697e692.js";import{i as ls}from"./import-icon.de3e6c66.js";import{u as rs}from"./autoPool.ff5ee416.js";import{R as Ds}from"./farms-range.cc6bba04.js";import{_ as Us}from"./token-warning_2x.28d81f1f.js";import{_ as Xs}from"./img-connect-wallet_2x.9b7564c5.js";import{_ as Zs}from"./img-no-Positions_2x.074135fe.js";import"./decimal.0bdeb344.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const xs=x({props:{list:{type:Array,default:()=>[]},listLoading:{type:Boolean,default:!1},totalTVL:{type:String,default:""}},setup(s){const l=os(),$=u(()=>l),v=I(!1);return{wallet:$,sFixD:Is,loading:v,addCommom:R}}});const ks=s=>(is("data-v-f4c249b1"),s=s(),ds(),s),so={class:"vaults-banner"},oo={class:"vaults-banner-center"},eo=ks(()=>o("div",{class:"title"},"Vaults",-1)),to=ks(()=>o("div",{class:"desc"},"Harvesting, compounding & rebalancing is automated.Stake your tokens to earn.",-1)),no={class:"claim-rewards"},lo={class:"claim-title"},ao=ks(()=>o("span",null,"Total Value Locked",-1)),io={key:0,class:"loading-spin"},co={key:1},ro={key:2};function uo(s,l,$,v,L,m){const _=zs;return t(),n("div",so,[o("div",oo,[eo,to,o("div",no,[o("div",lo,[ao,s.listLoading?(t(),n("span",io,[h(_)])):s.wallet.address?(t(),n("span",co,"$"+r(("addCommom"in s?s.addCommom:b(R))(("sFixD"in s?s.sFixD:b(Is))(s.totalTVL||0,2))),1)):(t(),n("span",ro,"--"))])])])])}const _o=ss(xs,[["render",uo],["__scopeId","data-v-f4c249b1"]]),po=x({setup(){const s=I(!1),l=os(),$=u(()=>l),v=Ks(),L=u(()=>v),m=u(()=>L.value.farmsPoolList);return{isShowMore:s,wallet:$,walletStore:l,farmsPoolList:m}}});const es=s=>(is("data-v-3db8d825"),s=s(),ds(),s),ho={class:"vaults-table"},vo=es(()=>o("th",null,"Vaults",-1)),go=es(()=>o("th",null,"TVL",-1)),ko=es(()=>o("th",null,"Your Deposit",-1)),fo=es(()=>o("th",null,"Actions",-1)),bo=es(()=>o("tr",{style:{height:"4px",background:"unset"}},null,-1)),yo={class:"pool"},$o={class:"staked-tvl"},mo={class:"apr"},wo={class:"my-staked"},So={class:"actions"},Co=es(()=>o("tr",{style:{height:"8px",background:"unset !important"}},null,-1));function Lo(s,l,$,v,L,m){const _=Os,p=Rs;return t(),n("div",ho,[o("table",null,[o("thead",null,[o("tr",null,[vo,go,o("th",null,[o("span",null,[U("APY "),h(_)])]),ko,fo]),bo]),o("tbody",null,[(t(),n(M,null,cs(4,(A,w)=>(t(),n(M,{key:w},[o("tr",null,[o("td",null,[o("div",yo,[h(p,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1}),h(p,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",$o,[h(p,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",mo,[o("span",null,[h(p,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),o("td",null,[o("div",wo,[h(p,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",So,[h(p,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),Co],64))),64))])])])}const Ao=ss(po,[["render",Lo],["__scopeId","data-v-3db8d825"]]),Po=x({components:{Range:Ds},props:{pItem:{type:Object,default:()=>({})}},setup(s){const l=gs(),$=u(()=>l),v=ps(),L=u(()=>v),m=a=>{var g;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((g=L.value.tokensObj[a==null?void 0:a.address])==null?void 0:g.logo_url)||($.value.theme==="default"?ls("/image/coins/unknown.png"):ls("/image/coins/sui-unknown.png"))},_=I(!0),p=rs(),A=u(()=>p),w=u(()=>A.value.positionInfoObj[s.pItem.id]),P=hs(),S=(a,g)=>{P.push(`/vaults-detail/${a.id}?action=${g}`)},B=a=>{const g=a.needReverse,O=g?a.token_b.address:a.token_a.address,q=g?a.token_a.address:a.token_b.address;P.push(`/swap?from=${O}&to=${q}`)},V=os(),e=u(()=>V);return console.log(s.pItem,"pItem##"),{getCoinIcon:m,direct:_,decimalUi:as,addCommom:R,autoPool:A,positionInfo:w,toAutoPoolDetail:S,toSwap:B,wallet:e}}}),qs=""+globalThis.__publicAssetsURL("sui-image/range-vaults.png");const Q=s=>(is("data-v-b8456fce"),s=s(),ds(),s),Bo={class:"vaults-position-card"},Io={class:"auto-position-card-conetent"},Ro={class:"auto-position-card"},jo={class:"position-range"},To=Q(()=>o("div",{class:"inrange"},[o("img",{src:qs,alt:""}),o("span",null,"In range")],-1)),Vo={class:"right"},Oo={class:"top"},No=Q(()=>o("p",null,"Position Range",-1)),Do={key:0},Uo={key:1},qo={class:"item lp-tokens"},Mo=Q(()=>o("div",{class:"top"},"Your LP Tokens",-1)),Yo={class:"bottom"},Wo={key:0,class:"lp-num"},Fo={key:1,class:"lp-num"},Eo={class:"item share"},zo=Q(()=>o("div",{class:"top"},"Share",-1)),Ho={class:"bottom"},Jo={key:0},Ko={key:1},Qo={class:"item yourBanlance"},Go=Q(()=>o("div",{class:"top"},"Your Balance",-1)),Xo={class:"bottom"},Zo={class:"token-info"},xo={class:"token-num"},se={alt:""},oe={key:0},ee={key:1},te=Q(()=>o("p",null,"--",-1)),ne=[te],le={class:"token-num"},ae={alt:""},ie={key:0},de={key:1},ce=Q(()=>o("p",null,"--",-1)),re=[ce],ue={class:"action"};function _e(s,l,$,v,L,m){var A,w,P,S,B,V,e,a;const _=vs("Range"),p=js("image");return t(),n("div",Bo,[o("div",Io,[o("div",Ro,[o("div",jo,[To,o("div",Vo,[o("div",Oo,[No,s.direct?(t(),n("span",Do,r(("addCommom"in s?s.addCommom:b(R))(("decimalUi"in s?s.decimalUi:b(as))(s.pItem.price,6)))+" Current",1)):(t(),n("span",Uo,r(("addCommom"in s?s.addCommom:b(R))(("decimalUi"in s?s.decimalUi:b(as))(1/s.pItem.price,6)))+" Current",1))]),h(_,{"pool-info":s.positionInfo,"prop-direct":s.direct,"use-props-direct":!0,onClickChange:l[0]||(l[0]=g=>s.direct=!s.direct)},null,8,["pool-info","prop-direct"])])]),o("div",qo,[Mo,o("div",Yo,[(A=s.wallet)!=null&&A.connected?(t(),n("div",Wo,r(("addCommom"in s?s.addCommom:b(R))((w=s.positionInfo)==null?void 0:w.myLiquidity))+" LP",1)):(t(),n("div",Fo,"--"))])]),o("div",Eo,[zo,o("div",Ho,[(P=s.wallet)!=null&&P.connected?(t(),n("span",Jo,r((S=s.positionInfo)==null?void 0:S.myShare)+"%",1)):(t(),n("span",Ko,"--%"))])]),o("div",Qo,[Go,o("div",Xo,[o("div",Zo,[o("div",xo,[Z(o("img",se,null,512),[[p,s.pItem.needReverse?s.pItem.coinB.logo_url:s.pItem.coinA.logo_url]]),(B=s.wallet)!=null&&B.connected?(t(),n("div",oe,[o("span",null,r(("addCommom"in s?s.addCommom:b(R))((V=s.positionInfo)==null?void 0:V.amountA)),1)])):(t(),n("div",ee,ne))]),o("div",le,[Z(o("img",ae,null,512),[[p,s.pItem.needReverse?s.pItem.coinA.logo_url:s.pItem.coinB.logo_url]]),(e=s.wallet)!=null&&e.connected?(t(),n("div",ie,[o("span",null,r(("addCommom"in s?s.addCommom:b(R))((a=s.positionInfo)==null?void 0:a.amountB)),1)])):(t(),n("div",de,re))])])])]),o("div",ue,[o("div",null,[o("div",{class:"remove-btn",onClick:l[1]||(l[1]=g=>s.toAutoPoolDetail(s.pItem,"remove"))},"Withdraw")])])])])])}const pe=ss(Po,[["render",_e],["__scopeId","data-v-b8456fce"]]),he=x({components:{TokenWarning:Ns,Range:Ds},props:{list:{type:Array,default:()=>[]}},setup(){const{t:s}=Ts(),l=gs(),$=u(()=>l),v=ps(),L=u(()=>v),m=i=>{var j;return(i==null?void 0:i.logoURI)||(i==null?void 0:i.logo_url)||((j=L.value.tokensObj[i==null?void 0:i.address])==null?void 0:j.logo_url)||($.value.theme==="default"?ls("/image/coins/unknown.png"):ls("/image/coins/sui-unknown.png"))},_=u(()=>L.value.tokensObj),p=u(()=>$.value.statsData),A=u(()=>$.value.theme),w=rs(),P=u(()=>w),S=I({}),B=i=>{S.value[i]?S.value[i]=!1:S.value[i]=!0,console.log(S.value,"##isShowPosition.value")},V=u(()=>P.value.positionInfoObj),e=os(),a=u(()=>e),g=I(!1),O=hs(),q=(i,j)=>{O.push(`/vaults-detail/${i.id}?action=${j}`)},N=i=>{const j=i.needReverse,Y=j?i.token_b.address:i.token_a.address,W=j?i.token_a.address:i.token_b.address;O.push(`/swap?from=${Y}&to=${W}`)},D=I(!0);return{router:O,getCoinIcon:m,tokensObj:_,t:s,statsData:p,checkNullObj:H,addCommom:R,importIcon:ls,theme:A,isShowPosition:S,togglePosition:B,positionInfo:V,wallet:a,isShowDetail:g,toAutoPoolDetail:q,toSwap:N,direct:D}}});const C=s=>(is("data-v-9b0fb986"),s=s(),ds(),s),ve={class:"vaults-table-contianer"},ge={class:"table pc-pool-item"},ke={class:"table-header"},fe={class:"table-tr"},be=C(()=>o("th",null,"Vaults",-1)),ye=C(()=>o("th",null,"TVL",-1)),$e=C(()=>o("th",null,"Your Deposit",-1)),me=C(()=>o("th",null,"Action",-1)),we=C(()=>o("tr",{style:{height:"4px",background:"unset"}},null,-1)),Se={class:"table-body"},Ce=["onClick"],Le={class:"token"},Ae={class:"img-box"},Pe=["src"],Be={class:"img-box img-last-box"},Ie=["src"],Re={class:"name"},je={class:"top"},Te={class:"token-name"},Ve={class:"tokena"},Oe={class:"tokenb"},Ne={class:"fee-warning"},De={class:"fee-tier-top"},Ue={key:0,class:"pool-warning"},qe=C(()=>o("img",{src:Us,alt:""},null,-1)),Me={class:"hover-text"},Ye={key:0},We={class:"skeleton-box"},Fe={key:1},Ee={key:2},ze={class:"skeleton-box"},He={key:3},Je={key:4},Ke={class:"skeleton-box"},Qe={key:5},Ge={class:"show-position"},Xe={class:"svg-icon"},Ze=C(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),xe=[Ze],st={key:0,class:"table-tr view-table-tr"},ot={colspan:"5"},et=C(()=>o("td",null,null,-1)),tt=C(()=>o("tr",{style:{height:"8px",background:"unset"}},null,-1)),nt={class:"h5-pool-item"},lt={class:"token"},at={class:"img-box"},it={key:0,class:"pool-warning"},dt={class:"img-box img-last-box"},ct={key:0,class:"pool-warning"},rt={class:"name"},ut={class:"top"},_t={class:"token-name"},pt={class:"tokena"},ht={class:"tokenb"},vt={class:"fee-warning"},gt={class:"fee-tier-top"},kt={key:0,class:"pool-warning"},ft=C(()=>o("img",{src:Us,alt:""},null,-1)),bt={class:"hover-text"},yt={class:"bottom"},$t={class:"row"},mt=C(()=>o("div",{class:"left"},"TVL",-1)),wt={key:0,class:"right"},St={key:1,class:"right"},Ct={class:"row"},Lt=C(()=>o("div",{class:"left"},"APY",-1)),At={key:0,class:"right"},Pt={key:1,class:"right theme-right"},Bt={class:"row"},It=C(()=>o("div",{class:"left"},"Your Deposit",-1)),Rt={key:0,class:"right"},jt={key:1,class:"right"},Tt=["onClick"],Vt=C(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ot=[Vt],Nt={key:0,class:"h5-auto-pool-details"},Dt={class:"position-range"},Ut=C(()=>o("div",{class:"inrange"},[o("img",{src:qs,alt:""}),o("span",null,"In range")],-1)),qt={class:"right"},Mt={class:"top"},Yt=C(()=>o("p",null,"Position Range",-1)),Wt={key:0},Ft={key:1},Et={class:"h5-item lp-tokens"},zt=C(()=>o("div",{class:"top"},"Your LP Tokens",-1)),Ht={class:"bottom"},Jt={key:0,class:"lp-num"},Kt={key:1,class:"lp-num"},Qt={class:"h5-item share"},Gt=C(()=>o("div",{class:"top"},"Share",-1)),Xt={class:"bottom"},Zt={key:0},xt={key:1},sn={class:"h5-item yourBanlance"},on=C(()=>o("div",{class:"top"},"Your Balance",-1)),en={class:"bottom"},tn={class:"token-info"},nn={class:"token-num"},ln={alt:""},an={key:0},dn={key:1},cn=C(()=>o("p",null,"--",-1)),rn=[cn],un={class:"token-num"},_n={alt:""},pn={key:0},hn={key:1},vn=C(()=>o("p",null,"--",-1)),gn=[vn],kn={class:"action"};function fn(s,l,$,v,L,m){const _=Os,p=Ns,A=Gs,w=Rs,P=Vs,S=pe,B=vs("Range"),V=js("image");return t(),n("div",ve,[o("table",ge,[o("thead",ke,[o("tr",fe,[be,ye,o("th",null,[o("span",null,[U("APY "),h(_)])]),$e,me]),we]),o("tbody",Se,[(t(!0),n(M,null,cs(s.list,(e,a)=>{var g,O,q,N,D,i,j,Y,W,J,F,K,E,d,y;return t(),n(M,{key:a},[o("tr",{class:"table-tr",onClick:k=>s.togglePosition(a)},[o("td",null,[o("div",Le,[o("div",Ae,[o("img",{src:s.getCoinIcon(e.needReverse?e.coinB:e.coinA)},null,8,Pe),h(p,{address:e.needReverse?(O=e==null?void 0:e.coinB)==null?void 0:O.address:(g=e==null?void 0:e.coinA)==null?void 0:g.address,"style-params":{right:0,bottom:0,width:"12px",height:"12px"}},null,8,["address"])]),o("div",Be,[o("img",{src:s.getCoinIcon(e.needReverse?e.coinA:e.coinB)},null,8,Ie),h(p,{address:e.needReverse?(N=e.coinA)==null?void 0:N.address:(q=e==null?void 0:e.coinB)==null?void 0:q.address,"style-params":{right:0,bottom:0,width:"12px",height:"12px"}},null,8,["address"])]),o("div",Re,[o("div",je,[o("p",Te,[o("span",Ve,[U(r(e.needReverse?(i=e==null?void 0:e.coinB)==null?void 0:i.symbol:(D=e==null?void 0:e.coinA)==null?void 0:D.symbol)+" ",1),e!=null&&e.coinB&&(e!=null&&e.coinA)?(t(),ts(A,{key:0,"coin-info":e.needReverse?e==null?void 0:e.coinB:e==null?void 0:e.coinA},null,8,["coin-info"])):T("",!0)]),U(" - "),o("span",Oe,[U(r(e.needReverse?(j=e==null?void 0:e.coinA)==null?void 0:j.symbol:(Y=e==null?void 0:e.coinB)==null?void 0:Y.symbol)+" ",1),e!=null&&e.coinB&&(e!=null&&e.coinA)?(t(),ts(A,{key:0,"coin-info":e.needReverse?e==null?void 0:e.coinA:e==null?void 0:e.coinB},null,8,["coin-info"])):T("",!0)])]),o("div",Ne,[o("div",De,r((e==null?void 0:e.fee)*100)+"%",1),(J=s.tokensObj[(W=e.coinA)==null?void 0:W.address])!=null&&J.isSelfBuilt||(K=s.tokensObj[(F=e.coinB)==null?void 0:F.address])!=null&&K.isSelfBuilt?(t(),n("div",Ue,[qe,o("div",Me,r(s.t("newAdd.poolWarning")),1)])):T("",!0)])])])])]),("checkNullObj"in s?s.checkNullObj:b(H))(s.statsData)?(t(),n("td",Ye,[o("div",We,[h(w,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",Fe," $"+r(Number(e.poolUSD)!==0&&Number(e.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:b(R))(e.poolUSD,2)),1)),("checkNullObj"in s?s.checkNullObj:b(H))(s.statsData)?(t(),n("td",Ee,[o("div",ze,[h(w,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",He,r(e.apy),1)),(E=s.wallet)!=null&&E.connected&&!s.positionInfo[e.id].myLiquidityUSD?(t(),n("td",Je,[o("div",Ke,[h(w,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",Qe,[s.wallet.connected?(t(),n(M,{key:0},[U(r(((d=s.positionInfo[e.id])==null?void 0:d.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:b(R))((y=s.positionInfo[e.id])==null?void 0:y.myLiquidityUSD)}`:"<$0.01"),1)],64)):(t(),n(M,{key:1},[U("--")],64))])),o("td",null,[o("div",Ge,[h(P,{class:"add-liquidity-btn",onClick:Bs(k=>s.router.push(`/vaults-detail/${e.id}?action=deposit`),["stop"])},{default:_s(()=>[U("Deposit")]),_:2},1032,["onClick"]),o("div",Xe,[(t(),n("svg",{"aria-hidden":"true",class:ns(["icon",s.isShowPosition&&s.isShowPosition[a]?"icon-open":""])},xe,2))])])])],8,Ce),s.isShowPosition&&s.isShowPosition[a]?(t(),n("tr",st,[o("td",ot,[h(S,{"p-item":e},null,8,["p-item"])]),et])):T("",!0),tt],64)}),128))])]),o("div",nt,[(t(!0),n(M,null,cs(s.list,(e,a)=>{var g,O,q,N,D,i,j,Y,W,J,F,K,E,d;return t(),n("div",{key:e.address,class:"item"},[o("div",lt,[o("div",at,[Z(o("img",null,null,512),[[V,s.getCoinIcon(e.needReverse?e.coinB:e.coinA)]]),(e.needReverse?(O=s.tokensObj[e.coinB.address])!=null&&O.isSelfBuilt:(g=s.tokensObj[e.coinA.address])!=null&&g.isSelfBuilt)?(t(),n("div",it)):T("",!0)]),o("div",dt,[Z(o("img",null,null,512),[[V,s.getCoinIcon(e.needReverse?e.coinA:e.coinB)]]),(e.needReverse?(q=s.tokensObj[e.coinA.address])!=null&&q.isSelfBuilt:(N=s.tokensObj[e.coinB.address])!=null&&N.isSelfBuilt)?(t(),n("div",ct)):T("",!0)]),o("div",rt,[o("div",ut,[o("p",_t,[o("span",pt,[U(r(e.needReverse?e.coinB.symbol:e.coinA.symbol)+" ",1),e&&e.coinB&&e.coinA?(t(),ts(A,{key:0,"coin-info":e.needReverse?e==null?void 0:e.coinB:e==null?void 0:e.coinA},null,8,["coin-info"])):T("",!0)]),U(" - "),o("span",ht,[U(r(e.needReverse?e.coinA.symbol:e.coinB.symbol)+" ",1),e&&e.coinB&&e.coinA?(t(),ts(A,{key:0,"coin-info":e.needReverse?e==null?void 0:e.coinA:e==null?void 0:e.coinB},null,8,["coin-info"])):T("",!0)])]),o("div",vt,[o("div",gt,r((e==null?void 0:e.fee)*100)+"%",1),(D=s.tokensObj[e.coinA.address])!=null&&D.isSelfBuilt||(i=s.tokensObj[e.coinB.address])!=null&&i.isSelfBuilt?(t(),n("div",kt,[ft,o("div",bt,r(s.t("newAdd.poolWarning")),1)])):T("",!0)])])])]),o("div",yt,[o("div",$t,[mt,("checkNullObj"in s?s.checkNullObj:b(H))(s.statsData)?(t(),n("div",wt,[h(w,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",St," $"+r(Number(e.poolUSD)!==0&&Number(e.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:b(R))(e.poolUSD,2)),1))]),o("div",Ct,[Lt,("checkNullObj"in s?s.checkNullObj:b(H))(s.statsData)?(t(),n("div",At,[h(w,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",Pt,[o("i",null,r(e.apy),1),h(_)]))]),o("div",Bt,[It,("checkNullObj"in s?s.checkNullObj:b(H))(s.positionInfo)&&((j=s.wallet)!=null&&j.connected)?(t(),n("div",Rt,[h(w,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",jt,[(Y=s.wallet)!=null&&Y.connected?(t(),n(M,{key:0},[U(r(((W=s.positionInfo[e.id])==null?void 0:W.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:b(R))((J=s.positionInfo[e.id])==null?void 0:J.myLiquidityUSD)}`:"<$0.01"),1)],64)):(t(),n(M,{key:1},[U("--")],64))]))])]),h(P,{class:"h5-add-liquidity-btn",onClick:Bs(y=>s.router.push(`/vaults-detail/${e.id}?action=deposit`),["stop"])},{default:_s(()=>[U("Deposit")]),_:2},1032,["onClick"]),o("div",{class:ns(["details-btn",s.isShowPosition&&s.isShowPosition[a]?"details-btn-text-active":""]),onClick:y=>s.togglePosition(a)},[(t(),n("svg",{"aria-hidden":"true",class:ns(["icon",s.isShowPosition&&s.isShowPosition[a]?"icon-active":""])},Ot,2))],10,Tt),s.isShowPosition&&s.isShowPosition[a]?(t(),n("div",Nt,[o("div",Dt,[Ut,o("div",qt,[o("div",Mt,[Yt,s.direct?(t(),n("span",Wt,r(("addCommom"in s?s.addCommom:b(R))(("decimalUi"in s?s.decimalUi:b(as))(e.price,6)))+" Current",1)):(t(),n("span",Ft,r(("addCommom"in s?s.addCommom:b(R))(("decimalUi"in s?s.decimalUi:b(as))(1/e.price,6)))+" Current",1))]),h(B,{"pool-info":e,"prop-direct":s.direct,"use-props-direct":!0,onClickChange:l[0]||(l[0]=y=>s.direct=!s.direct)},null,8,["pool-info","prop-direct"])])]),o("div",Et,[zt,o("div",Ht,[(F=s.wallet)!=null&&F.connected?(t(),n("div",Jt,r(("addCommom"in s?s.addCommom:b(R))(e==null?void 0:e.myLiquidity))+" LP",1)):(t(),n("div",Kt,"--"))])]),o("div",Qt,[Gt,o("div",Xt,[(K=s.wallet)!=null&&K.connected?(t(),n("span",Zt,r(e==null?void 0:e.myShare)+"%",1)):(t(),n("span",xt,"--%"))])]),o("div",sn,[on,o("div",en,[o("div",tn,[o("div",nn,[Z(o("img",ln,null,512),[[V,e.needReverse?e.coinB.logo_url:e.coinA.logo_url]]),(E=s.wallet)!=null&&E.connected?(t(),n("div",an,[o("span",null,r(("addCommom"in s?s.addCommom:b(R))(e==null?void 0:e.amountA)),1)])):(t(),n("div",dn,rn))]),o("div",un,[Z(o("img",_n,null,512),[[V,e.needReverse?e.coinA.logo_url:e.coinB.logo_url]]),(d=s.wallet)!=null&&d.connected?(t(),n("div",pn,[o("span",null,r(("addCommom"in s?s.addCommom:b(R))(e==null?void 0:e.amountB)),1)])):(t(),n("div",hn,gn))])])])]),o("div",kn,[o("div",null,[o("div",{class:"remove-btn",onClick:l[1]||(l[1]=y=>s.toAutoPoolDetail(s.pItem,"remove"))},"Withdraw")])])])):T("",!0)])}),128))])])}const bn=ss(he,[["render",fn],["__scopeId","data-v-9b0fb986"]]),yn=x({props:{selectValue:{type:String,default:""},showList:{type:Object,default:()=>({})}},setup(s,l){const $=["All Vaults","My Vaults"],v=I("All Vaults"),L=I(s.selectValue),m=I(!1),_=os(),p=u(()=>_),A=rs(),w=u(()=>A),P=u(()=>w.value.autoPoolList);return{wallet:p,changeSort:a=>{L.value=a,l.emit("changeSort",a)},tabList:$,currentTab:v,sortValue:L,clickRefresh:()=>{l.emit("clickRefresh")},isRefresh:m,vaultsPoolList:P,getListNum:()=>s.showList.length,changeTab:a=>{v.value=a,console.log(a,"itemitem"),a=="My Vaults"?l.emit("changeTab",!0):l.emit("changeTab",!1)}}}});const us=s=>(is("data-v-019954dc"),s=s(),ds(),s),$n={class:"vaults-tab"},mn={class:"tab-left"},wn=["onClick"],Sn={key:0},Cn={class:"tab-right"},Ln={class:"sort-select"},An={class:"sort-select-box"},Pn=us(()=>o("div",null,"Sort by",-1)),Bn=us(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),In=us(()=>o("svg",{class:"arrow-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_arrow"})],-1)),Rn={class:"sort-list"},jn={class:"refresh"},Tn=us(()=>o("use",{"xlink:href":"#icon-icon-refresh2"},null,-1)),Vn=[Tn];function On(s,l,$,v,L,m){return t(),n("div",$n,[o("div",mn,[(t(!0),n(M,null,cs(s.tabList,_=>(t(),n("div",{key:_,class:ns(["tab-item",s.currentTab==_?"tab-item-active":""]),onClick:p=>s.changeTab(_)},[o("span",null,r(_),1),s.currentTab==_&&s.getListNum()?(t(),n("p",Sn,r(s.currentTab=="My Vaults"&&!s.wallet.address?0:s.getListNum()),1)):T("",!0)],10,wn))),128))]),o("div",Cn,[o("div",Ln,[o("div",An,[Pn,o("div",null,[o("span",null,r(s.sortValue),1),Bn,In])]),o("div",Rn,[o("div",{class:"sort-item",onClick:l[0]||(l[0]=_=>s.changeSort("APY"))},"APY"),o("div",{class:"sort-item",onClick:l[1]||(l[1]=_=>s.changeSort("TVL"))},"TVL")])]),o("div",jn,[(t(),n("svg",{"aria-hidden":"true",class:ns(["refresh-icon",s.isRefresh?"refreshing":""]),onClick:l[2]||(l[2]=(..._)=>s.clickRefresh&&s.clickRefresh(..._))},Vn,2))])])])}const Nn=ss(yn,[["render",On],["__scopeId","data-v-019954dc"]]),Dn=x({components:{VaultsTabs:Nn},setup(){Ts();const s=gs(),l=u(()=>s),$=ps(),v=u(()=>$),L=rs(),m=u(()=>L),_=os(),p=u(()=>_),A=u(()=>m.value.positionInfoObj),w=u(()=>l.value.chainName),P=I(!1),S=I(!1),B=I("TVL"),V=I(["APY"]),e=I(!1),a=d=>{console.log(d,"w121");const y=[];y.push(B.value),V.value.forEach((k,c)=>{k!=d&&y.push(k)}),V.value=y,B.value=d,q(m.value.positionInfoList)};Hs(()=>{document.addEventListener("click",()=>{F("")})});const g=I([]),O=I(!0),q=d=>{console.log(d,"##poolList");const y=[];d.filter(c=>!c.is_pause).forEach(c=>{var fs,bs,ys,$s,ms,ws,Ss,Cs,Ls,As,Ps;const f=l.value.addressLpTokens[c.address],z=v.value.poolsObj[c.address];console.log(m.value.apyObj,"##autoPool.value.apyObj");const G=((fs=m.value.apyObj[c.id])==null?void 0:fs.apr)||"0%",Ms=((bs=m.value.apyObj[c.id])==null?void 0:bs.resultApr)||"0",Ys=((ys=m.value.apyObj[c.id])==null?void 0:ys.tvl)||0;console.log(c.autoPoolPositionInfo.id,"###watchPools 246"),console.log(f,"##statsObj");const Ws=c.needReverse?((Ss=v.value.tokensObj[(ws=c.coinB)==null?void 0:ws.address])==null?void 0:Ss.labels)||[]:((ms=v.value.tokensObj[($s=c.coinA)==null?void 0:$s.address])==null?void 0:ms.labels)||[],Fs=c.needReverse?((Ls=v.value.tokensObj[(Cs=c.coinA)==null?void 0:Cs.address])==null?void 0:Ls.labels)||[]:((Ps=v.value.tokensObj[(As=c.coinB)==null?void 0:As.address])==null?void 0:Ps.labels)||[],Es=[...new Set(Ws.concat(Fs))];y.push({...c,liqidity:Ys,vol:f?f.vol_in_usd_24h:"0",fee:c.fee?c.fee:z!=null&&z.fee?z.fee:"--",labels:Es,isFarming:c==null?void 0:c.isFarming,fee_24_h:f&&f.fee_24_h,apy:G,resultApr:Ms})});let k=[];B.value=="APY"?k=y.sort((c,f)=>f.resultApr-c.resultApr):k=y.sort((c,f)=>f.liqidity-c.liqidity),g.value=k,O.value=!1,console.log(g.value.length,"##list.value.length"),$.setAutoPoolNum(g.value.length),console.log(g.value,"##list.value")};X(()=>[m.value.positionInfoList,m.value.apyObj,v.value.poolConfigObj],([d,y,k])=>{console.log("执行次数###",k),d&&d.length>0&&k&&!H(k)&&(console.log(d,"###autoPoolList"),q(d))},{immediate:!0,deep:!0}),X(()=>[p.value.address,m.value.autoPoolList,v.value.poolConfigObj],([d,y,k])=>{d&&y&&y.length>0&&k&&!H(k)&&L.getMyAutoPoolPosition()},{immediate:!0});const N=I(null),D=u(()=>N.value&&N.value.firstToken?N.value.firstToken:null),i=u(()=>N.value&&N.value.lastToken?N.value.lastToken:null),j=I(),Y=I(""),W=()=>{let d=[];d=g.value,console.log(d,"##pageList");const y=d.filter((f,z)=>D.value&&i.value?f.coinA.address==D.value.address&&f.coinB.address==i.value.address||f.coinA.address==i.value.address&&f.coinB.address==D.value.address:D.value?f.coinA.address.toLowerCase().includes(D.value.address.toLowerCase())||f.coinB.address.toLowerCase().includes(D.value.address.toLowerCase()):i.value?f.coinA.address.toLowerCase().includes(i.value.address.toLowerCase())||f.coinB.address.toLowerCase().includes(i.value.address.toLowerCase()):d);let k=[],c=[];console.log(y,"##filterArr"),y.forEach((f,z)=>{console.log(f,"irem##");const G=A.value&&A.value[f.id];console.log(G,"##positionInfo"),P.value&&Number(G==null?void 0:G.myLiquidity)>0&&p.value.connected?c.push(f):k.push({...f})}),Y.value=k.reduce((f,z)=>f+z.poolUSD,0),console.log(k,"121arrnewValnewValnewVal"),j.value=P.value&&p.value.connected?c:k,console.log(j.value,"##showList.value "),O.value||(P.value&&p.value.connected?$.setAutoPoolNum(c.length):$.setAutoPoolNum(k.length))};X(()=>[D.value,i.value,g.value,P.value,p.value.address],([d,y,k,c])=>{(d||y||k||c)&&(console.log("newValnewValnewVal",d,y,k,JSON.stringify(k)),W())},{immediate:!0}),Js(()=>{$.setAutoPoolNum("--")});const J=u(()=>v.value.autoPoolNum),F=d=>{d=="label"?(s.setIsSelect("pools"),e.value=!e.value,S.value=!1,l.value.setIsShowMore(!1)):d=="select"?(s.setIsSelect("pools"),S.value=!S.value,e.value=!1,l.value.setIsShowMore(!1)):(S.value=!1,e.value=!1)};X(()=>l.value.isSelect,d=>{d!=="pools"&&F("")},{immediate:!0});const K=hs(),E=()=>{O.value=!0,L.getAutoPoolList(),L.getAutoPoolAPY()};return X(()=>l.value.isRefresh,d=>{E()},{immediate:!0}),X(()=>w.value,d=>{d=="Aptos"&&K.push("/pools")},{immediate:!0}),{totalTVL:Y,clickRefresh:E,isMyLiquidity:P,chainName:w,store:l,select:S,selectValue:B,selectList:V,label:e,changeSort:a,list:g,listLoading:O,showList:j,childTokenSelectRef:N,wallet:p,autoPoolNum:J}}});const Un={class:"vaults-container-new"},qn={class:"vaults-container-center"},Mn={class:"auto-pool"},Yn={key:0,class:"no-vaults-data no-data"},Wn=o("img",{src:Xs},null,-1),Fn={key:0,class:"upgrade-loading pc-loading"},En={key:1,class:"upgrade-loading h5-loading"},zn={key:3,class:"no-vaults-data"},Hn=o("img",{src:Zs},null,-1),Jn=o("span",{class:"no-vaults"},"No vaults found",-1),Kn=[Hn,Jn];function Qn(s,l,$,v,L,m){const _=_o,p=vs("VaultsTabs"),A=Vs,w=Ao,P=Qs,S=bn;return t(),n("div",Un,[h(_,{list:s.showList,"total-t-v-l":s.totalTVL,"list-loading":s.listLoading},null,8,["list","total-t-v-l","list-loading"]),o("div",qn,[h(p,{"select-value":s.selectValue,"show-list":s.showList,onChangeSort:l[0]||(l[0]=B=>s.changeSort(B)),onChangeTab:l[1]||(l[1]=B=>{s.isMyLiquidity=B}),onClickRefresh:s.clickRefresh},null,8,["select-value","show-list","onClickRefresh"]),o("div",Mn,[s.isMyLiquidity&&!s.wallet.address?(t(),n("div",Yn,[Wn,h(A,{class:"add-liquidity-btn",onClick:l[2]||(l[2]=B=>s.wallet.setIsShowWalletModal(!0))},{default:_s(()=>[U("Connect Wallet")]),_:1})])):T("",!0),s.isMyLiquidity&&s.wallet.address&&s.listLoading||!s.isMyLiquidity&&s.listLoading?(t(),n(M,{key:1},[s.listLoading?(t(),n("div",Fn,[h(w)])):T("",!0),s.listLoading?(t(),n("div",En,[h(P,{type:"poolsCard",loading:!0})])):T("",!0)],64)):T("",!0),s.isMyLiquidity&&s.wallet.address&&!s.listLoading||!s.isMyLiquidity&&!s.listLoading?(t(),ts(S,{key:2,list:s.showList},null,8,["list"])):T("",!0),s.autoPoolNum!=="--"&&Number(s.autoPoolNum)<=0&&!s.listLoading?(t(),n("div",zn,Kn)):T("",!0)])])])}const vl=ss(Dn,[["render",Qn]]);export{vl as default};
