import{b as Os,a as q,d as hs,c as J}from"./common.7b3188ac.js";import{a as es,m as v,r as I,e as ts,o as t,f as n,h as o,i as r,x as g,u as V,O as Fs,p as is,k as ds,j as R,F as U,E as ss,S as Vs,b as ps,C as js,w as G,I as F,B as vs,z as Bs,D as us,y as os,G as M,P as Es,q as _s,A as x,s as Ws,l as Hs,c as zs}from"./entry.8c071894.js";/* empty css              */import{u as ns}from"./index.e235d647.js";import{_ as Rs}from"./auto-pool-apy-tips.814615a1.js";import"./index.0614c8b1.js";import{u as Gs}from"./farms.b499e62a.js";import{_ as Js}from"./upgrade-loading.fc390321.js";import{_ as Ns}from"./token-warning.cb1558fb.js";import{u as gs,a as ms}from"./index.a960bb3c.js";import{i as as}from"./import-icon.de3e6c66.js";import{u as rs}from"./autoPool.e8f3106b.js";import{_ as Ts}from"./img-connect-wallet_2x.20626c7f.js";/* empty css              */import{_ as Ks}from"./img-no-Positions_2x.f59bca4e.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const Qs=es({props:{list:{type:Array,default:()=>[]},listLoading:{type:Boolean,default:!1},totalTVL:{type:Number,default:0}},setup(s){const l=ns(),y=v(()=>l),m=I(!1);return{wallet:y,sFixD:Os,loading:m,addCommom:q}}});const fs=s=>(is("data-v-37dd8fcb"),s=s(),ds(),s),Xs={class:"farms-banner-bg"},Zs={class:"vaults-banner"},xs={class:"vaults-banner-center"},so=fs(()=>o("div",{class:"title"},"Vaults",-1)),oo=fs(()=>o("div",{class:"desc"},"Automate your liquidity to enjoy high yield with ease.",-1)),eo={class:"claim-rewards"},to={class:"claim-title"},no=fs(()=>o("span",null,"Total Value Locked",-1)),lo={key:0,class:"loading-spin"},ao={key:1};function io(s,l,y,m,w,b){const _=Fs;return t(),n("div",Xs,[o("div",Zs,[o("div",xs,[so,oo,o("div",eo,[o("div",to,[no,s.listLoading?(t(),n("span",lo,[r(_)])):(t(),n("span",ao,"$"+g(("addCommom"in s?s.addCommom:V(q))(("sFixD"in s?s.sFixD:V(Os))(s.totalTVL||0,2))),1))])])])])])}const co=ts(Qs,[["render",io],["__scopeId","data-v-37dd8fcb"]]),ro=es({setup(){const s=I(!1),l=ns(),y=v(()=>l),m=Gs(),w=v(()=>m),b=v(()=>w.value.farmsPoolList);return{isShowMore:s,wallet:y,walletStore:l,farmsPoolList:b}}});const Q=s=>(is("data-v-cdb2a042"),s=s(),ds(),s),uo={class:"vaults-table"},_o=Q(()=>o("th",null,"Vaults",-1)),ho=Q(()=>o("th",null,"TVL",-1)),po=Q(()=>o("th",null,"Rewards",-1)),vo=Q(()=>o("th",null,"Your Holdings",-1)),go=Q(()=>o("th",null,"Actions",-1)),mo=Q(()=>o("tr",{style:{height:"4px",background:"unset"}},null,-1)),fo={class:"pool"},bo={class:"staked-tvl"},ko={class:"apr"},yo={class:"my-staked"},$o={class:"my-staked"},wo={class:"actions"},So=Q(()=>o("tr",{style:{height:"8px",background:"unset !important"}},null,-1));function Lo(s,l,y,m,w,b){const _=Rs,i=Vs;return t(),n("div",uo,[o("table",null,[o("thead",null,[o("tr",null,[_o,ho,o("th",null,[o("span",null,[R("APY "),r(_)])]),po,vo,go]),mo]),o("tbody",null,[(t(),n(U,null,ss(4,($,j)=>(t(),n(U,{key:j},[o("tr",null,[o("td",null,[o("div",fo,[r(i,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1}),r(i,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",bo,[r(i,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",ko,[o("span",null,[r(i,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),o("td",null,[o("div",yo,[r(i,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",$o,[r(i,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",wo,[r(i,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),So],64))),64))])])])}const Co=ts(ro,[["render",Lo],["__scopeId","data-v-cdb2a042"]]),Po=es({props:{pItem:{type:Object,default:()=>({})}},setup(s){const l=gs(),y=v(()=>l),m=ms(),w=v(()=>m),b=d=>{var c;return(d==null?void 0:d.logoURI)||(d==null?void 0:d.logo_url)||((c=w.value.tokensObj[d==null?void 0:d.address])==null?void 0:c.logo_url)||(y.value.theme==="default"?as("/image/coins/unknown.png"):as("/image/coins/sui-unknown.png"))},_=I(!0),i=rs(),$=v(()=>i),j=v(()=>(console.log("🚀🚀🚀 ~ file: vaults-position-card.vue:145 ~ positionInfo ~ autoPool.value.positionInfoObj:",$.value.positionInfoObj),$.value.positionInfoObj[s.pItem.id])),P=ps(),S=(d,c)=>{P.push(`/vaults-detail/${d.id}?action=${c}`)},p=d=>{const c=d.needReverse,O=c?d.token_b.address:d.token_a.address,D=c?d.token_a.address:d.token_b.address;P.push(`/swap?from=${O}&to=${D}`)},e=ns(),k=v(()=>e);return{getCoinIcon:b,direct:_,decimalUi:hs,addCommom:q,autoPool:$,positionInfo:j,toAutoPoolDetail:S,toSwap:p,wallet:k}}});const X=s=>(is("data-v-c8fdf309"),s=s(),ds(),s),Ao={class:"vaults-position-card"},Io={class:"auto-position-card-conetent"},Oo={key:0,class:"no-vaults-data no-data"},Vo=X(()=>o("img",{src:Ts},null,-1)),jo={class:"item lp-tokens"},Bo={alt:""},Ro={class:"right"},No=X(()=>o("div",{class:"top"},"Your LP tokens",-1)),To={class:"bottom"},Do={key:0,class:"lp-num"},qo={key:1,class:"lp-num"},Uo={class:"item yourBanlance"},Mo=X(()=>o("div",{class:"top"},"Pooled assets",-1)),Yo={class:"bottom"},Fo={class:"token-info"},Eo={class:"token-num"},Wo={alt:""},Ho={key:0},zo={key:1},Go=X(()=>o("p",null,"--",-1)),Jo=[Go],Ko={class:"token-num"},Qo={alt:""},Xo={key:0},Zo={key:1},xo=X(()=>o("p",null,"--",-1)),se=[xo],oe={class:"item share"},ee=X(()=>o("div",{class:"top"},"Share of pool",-1)),te={class:"bottom"},ne={key:0},le={key:1},ae=X(()=>o("div",{class:"action"},[o("div",null,[o("div",{class:"remove-btn"}," Details> ")])],-1));function ie(s,l,y,m,w,b){var $,j,P,S,p,e,k,d,c,O;const _=vs,i=js("image");return t(),n("div",Ao,[o("div",Io,[s.wallet.address?(t(),n("div",{key:1,class:"auto-position-card",onClick:l[1]||(l[1]=D=>s.toAutoPoolDetail(s.pItem,"deposit"))},[o("div",jo,[F(o("img",Bo,null,512),[[i,(j=($=s.positionInfo)==null?void 0:$.lpInfo)==null?void 0:j.logo_url]]),o("div",Ro,[No,o("div",To,[(P=s.wallet)!=null&&P.connected?(t(),n("div",Do,g(("addCommom"in s?s.addCommom:V(q))(("decimalUi"in s?s.decimalUi:V(hs))((S=s.positionInfo)==null?void 0:S.myLiquidity),4))+" LP",1)):(t(),n("div",qo,"--"))])])]),o("div",Uo,[Mo,o("div",Yo,[o("div",Fo,[o("div",Eo,[F(o("img",Wo,null,512),[[i,s.pItem.needReverse?s.pItem.coinB.logo_url:s.pItem.coinA.logo_url]]),(p=s.wallet)!=null&&p.connected?(t(),n("div",Ho,[o("span",null,g(("addCommom"in s?s.addCommom:V(q))((e=s.positionInfo)==null?void 0:e.amountA)),1),R(" "+g(s.pItem.needReverse?s.pItem.coinB.symbol:s.pItem.coinA.symbol),1)])):(t(),n("div",zo,Jo))]),o("div",Ko,[F(o("img",Qo,null,512),[[i,s.pItem.needReverse?s.pItem.coinA.logo_url:s.pItem.coinB.logo_url]]),(k=s.wallet)!=null&&k.connected?(t(),n("div",Xo,[o("span",null,g(("addCommom"in s?s.addCommom:V(q))((d=s.positionInfo)==null?void 0:d.amountB)),1),R(" "+g(s.pItem.needReverse?s.pItem.coinA.symbol:s.pItem.coinB.symbol),1)])):(t(),n("div",Zo,se))])])])]),o("div",oe,[ee,o("div",te,[(c=s.wallet)!=null&&c.connected?(t(),n("span",ne,g((O=s.positionInfo)==null?void 0:O.myShare)+"%",1)):(t(),n("span",le,"--%"))])]),ae])):(t(),n("div",Oo,[Vo,r(_,{class:"add-liquidity-btn",onClick:l[0]||(l[0]=D=>s.wallet.setIsShowWalletModal(!0))},{default:G(()=>[R("Connect Wallet")]),_:1})]))])])}const de=ts(Po,[["render",ie],["__scopeId","data-v-c8fdf309"]]),ce=es({components:{TokenWarning:Ns},props:{list:{type:Array,default:()=>[]}},setup(){const{t:s}=Bs(),l=gs(),y=v(()=>l),m=ms(),w=v(()=>m),b=h=>{var B;return console.log("🚀🚀🚀 ~ file: vaults-table.vue:463 ~ getCoinIcon ~ info:",h),((B=w.value.tokensObj[h==null?void 0:h.address])==null?void 0:B.logo_url)||(y.value.theme==="default"?as("/image/coins/unknown.png"):as("/image/coins/sui-unknown.png"))},_=v(()=>w.value.tokensObj),i=v(()=>y.value.statsData),$=v(()=>y.value.theme),j=rs(),P=v(()=>j),S=I({}),p=h=>{S.value[h]?S.value[h]=!1:S.value[h]=!0},e=v(()=>P.value.positionInfoObj),k=ns(),d=v(()=>k),c=I(!1),O=ps(),D=(h,B)=>{O.push(`/vaults-detail/${h.id}?action=${B}`)},N=h=>{const B=h.needReverse,E=B?h.token_b.address:h.token_a.address,W=B?h.token_a.address:h.token_b.address;O.push(`/swap?from=${E}&to=${W}`)},T=I(!0);return{router:O,getCoinIcon:b,tokensObj:_,t:s,statsData:i,checkNullObj:J,addCommom:q,importIcon:as,theme:$,isShowPosition:S,togglePosition:p,positionInfo:e,wallet:d,isShowDetail:c,toAutoPoolDetail:D,toSwap:N,direct:T}}});const C=s=>(is("data-v-fb7983e3"),s=s(),ds(),s),re={class:"vaults-table-contianer"},ue={class:"table pc-pool-item"},_e={class:"table-header"},he={class:"table-tr"},pe=C(()=>o("th",null,"Vaults",-1)),ve=C(()=>o("th",null,"TVL",-1)),ge={class:"apy"},me=C(()=>o("span",null,"APY",-1)),fe=C(()=>o("svg",{"aria-hidden":"true",class:"icon"},[o("use",{"xlink:href":"#icon-icon-tips1"})],-1)),be=C(()=>o("th",null,"Rewards",-1)),ke=C(()=>o("th",null,"Your Holdings",-1)),ye=C(()=>o("th",null,"Actions",-1)),$e=C(()=>o("tr",{style:{height:"4px",background:"unset"}},null,-1)),we={class:"table-body"},Se=["onClick"],Le={class:"token"},Ce={class:"img-box"},Pe={class:"img-box img-last-box"},Ae={class:"name"},Ie={class:"top"},Oe={class:"token-name"},Ve={class:"tokena"},je={class:"tokenb"},Be={class:"fee-warning"},Re={class:"fee-tier-top"},Ne={key:0},Te={class:"skeleton-box"},De={key:1},qe={key:2},Ue={class:"skeleton-box"},Me={key:3},Ye={class:"rewards-coin"},Fe={key:4},Ee={class:"skeleton-box"},We={key:5},He={class:"show-position"},ze={class:"svg-icon"},Ge=C(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Je=[Ge],Ke={key:0,class:"table-tr view-table-tr"},Qe={colspan:"6"},Xe=C(()=>o("td",null,null,-1)),Ze=C(()=>o("tr",{style:{height:"8px",background:"unset"}},null,-1)),xe={class:"h5-pool-item"},st={class:"token"},ot={class:"img-box"},et={key:0,class:"pool-warning"},tt={class:"img-box img-last-box"},nt={key:0,class:"pool-warning"},lt={class:"name"},at={class:"top"},it={class:"token-name"},dt={class:"tokena"},ct={class:"tokenb"},rt={class:"fee-warning"},ut={class:"fee-tier-top"},_t={class:"bottom"},ht={class:"row"},pt=C(()=>o("div",{class:"left"},"TVL",-1)),vt={key:0,class:"right"},gt={key:1,class:"right"},mt={class:"row"},ft=C(()=>o("div",{class:"left"},"APY",-1)),bt={key:0,class:"right"},kt={key:1,class:"right theme-right"},yt={class:"row"},$t=C(()=>o("div",{class:"left"},"Rewards",-1)),wt={class:"right"},St={class:"rewards-coin"},Lt={class:"row"},Ct=C(()=>o("div",{class:"left"},"Your Holdings",-1)),Pt={key:0,class:"right"},At={key:1,class:"right"},It=["onClick"],Ot=C(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Vt=[Ot],jt={key:0,class:"h5-auto-pool-details"},Bt={class:"h5-item lp-tokens"},Rt=C(()=>o("div",{class:"top"},"Your LP tokens",-1)),Nt={class:"bottom"},Tt={key:0,class:"lp-num"},Dt={key:1,class:"lp-num"},qt={class:"h5-item share"},Ut=C(()=>o("div",{class:"top"},"Share",-1)),Mt={class:"bottom"},Yt={key:0},Ft={key:1},Et={class:"h5-item yourBanlance"},Wt=C(()=>o("div",{class:"top"},"Pooled assets",-1)),Ht={class:"bottom"},zt={class:"token-info"},Gt={class:"token-num"},Jt={alt:""},Kt={key:0},Qt={key:1},Xt=C(()=>o("p",null,"--",-1)),Zt=[Xt],xt={class:"token-num"},sn={alt:""},on={key:0},en={key:1},tn=C(()=>o("p",null,"--",-1)),nn=[tn],ln={class:"action"},an=["onClick"];function dn(s,l,y,m,w,b){const _=Rs,i=Ns,$=Vs,j=Es,P=vs,S=de,p=js("image");return t(),n("div",re,[o("table",ue,[o("thead",_e,[o("tr",he,[pe,ve,o("th",null,[o("div",ge,[me,fe,r(_)])]),be,ke,ye]),$e]),o("tbody",we,[(t(!0),n(U,null,ss(s.list,(e,k)=>{var d,c,O,D,N,T,h,B,E,W,K;return t(),n(U,{key:k},[o("tr",{class:"table-tr",onClick:Y=>s.togglePosition(k)},[o("td",null,[o("div",Le,[o("div",Ce,[F(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinB:e.coinA)]]),r(i,{address:e.needReverse?(c=e==null?void 0:e.coinB)==null?void 0:c.address:(d=e==null?void 0:e.coinA)==null?void 0:d.address,"style-params":{right:0,bottom:0,width:"14px",height:"14px"}},null,8,["address"])]),o("div",Pe,[F(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinA:e.coinB)]]),r(i,{address:e.needReverse?(D=e.coinA)==null?void 0:D.address:(O=e==null?void 0:e.coinB)==null?void 0:O.address,"style-params":{right:0,bottom:0,width:"14px",height:"14px"}},null,8,["address"])]),o("div",Ae,[o("div",Ie,[o("p",Oe,[o("span",Ve,g(e.needReverse?(T=e==null?void 0:e.coinB)==null?void 0:T.symbol:(N=e==null?void 0:e.coinA)==null?void 0:N.symbol),1),R(" - "),o("span",je,g(e.needReverse?(h=e==null?void 0:e.coinA)==null?void 0:h.symbol:(B=e==null?void 0:e.coinB)==null?void 0:B.symbol),1)]),o("div",Be,[o("div",Re,g((e==null?void 0:e.fee)*100)+"%",1)])])])])]),("checkNullObj"in s?s.checkNullObj:V(J))(s.statsData)?(t(),n("td",Ne,[o("div",Te,[r($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",De," $"+g(Number(e.poolUSD)!==0&&Number(e.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:V(q))(e.poolUSD,2)),1)),("checkNullObj"in s?s.checkNullObj:V(J))(s.statsData)?(t(),n("td",qe,[o("div",Ue,[r($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",Me,g(e.apy),1)),o("td",null,[r(j,{"overlay-class-name":"reward-coin-tips"},{title:G(()=>[R("Rewards will be auto harvested and compounded to your position.")]),default:G(()=>[o("div",Ye,[(t(!0),n(U,null,ss(e.rewardList,Y=>(t(),n("div",{key:Y,class:"img-box"},[F(o("img",null,null,512),[[p,s.getCoinIcon({address:Y})]]),r(i,{address:Y,"style-params":{right:0,bottom:0,width:"8px",height:"8px"}},null,8,["address"])]))),128))])]),_:2},1024)]),(E=s.wallet)!=null&&E.connected&&!s.positionInfo[e.id].myLiquidityUSD?(t(),n("td",Fe,[o("div",Ee,[r($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",We,[s.wallet.connected?(t(),n(U,{key:0},[R(g(((W=s.positionInfo[e.id])==null?void 0:W.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:V(q))((K=s.positionInfo[e.id])==null?void 0:K.myLiquidityUSD)}`:"<$0.01"),1)],64)):(t(),n(U,{key:1},[R("--")],64))])),o("td",null,[o("div",He,[r(P,{class:"add-liquidity-btn",onClick:us(Y=>s.router.push(`/vaults-detail/${e.id}?action=deposit`),["stop"])},{default:G(()=>[R("Deposit")]),_:2},1032,["onClick"]),o("div",ze,[(t(),n("svg",{"aria-hidden":"true",class:os(["icon",s.isShowPosition&&s.isShowPosition[k]?"icon-open":""])},Je,2))])])])],8,Se),s.isShowPosition&&s.isShowPosition[k]?(t(),n("tr",Ke,[o("td",Qe,[r(S,{"p-item":e},null,8,["p-item"])]),Xe])):M("",!0),Ze],64)}),128))])]),o("div",xe,[(t(!0),n(U,null,ss(s.list,(e,k)=>{var d,c,O,D,N,T,h,B,E,W,K,Y,cs;return t(),n("div",{key:e.address,class:"item"},[o("div",st,[o("div",ot,[F(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinB:e.coinA)]]),(e.needReverse?(c=s.tokensObj[e.coinB.address])!=null&&c.isSelfBuilt:(d=s.tokensObj[e.coinA.address])!=null&&d.isSelfBuilt)?(t(),n("div",et)):M("",!0)]),o("div",tt,[F(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinA:e.coinB)]]),(e.needReverse?(O=s.tokensObj[e.coinA.address])!=null&&O.isSelfBuilt:(D=s.tokensObj[e.coinB.address])!=null&&D.isSelfBuilt)?(t(),n("div",nt)):M("",!0)]),o("div",lt,[o("div",at,[o("p",it,[o("span",dt,g(e.needReverse?e.coinB.symbol:e.coinA.symbol),1),R(" - "),o("span",ct,g(e.needReverse?e.coinA.symbol:e.coinB.symbol),1)]),o("div",rt,[o("div",ut,g((e==null?void 0:e.fee)*100)+"%",1)])])])]),o("div",_t,[o("div",ht,[pt,("checkNullObj"in s?s.checkNullObj:V(J))(s.statsData)?(t(),n("div",vt,[r($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",gt," $"+g(Number(e.poolUSD)!==0&&Number(e.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:V(q))(e.poolUSD,2)),1))]),o("div",mt,[ft,("checkNullObj"in s?s.checkNullObj:V(J))(s.statsData)?(t(),n("div",bt,[r($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",kt,[o("span",null,g(e.apy),1),r(_)]))]),o("div",yt,[$t,o("div",wt,[r(j,{"overlay-class-name":"reward-coin-tips"},{title:G(()=>[R("Rewards will be auto harvested and compounded to your position.")]),default:G(()=>[o("div",St,[(t(!0),n(U,null,ss(e.rewardList,H=>(t(),n("div",{key:H,class:"img-box"},[F(o("img",null,null,512),[[p,s.getCoinIcon({address:H})]]),r(i,{address:H,"style-params":{right:0,bottom:0,width:"8px",height:"8px"}},null,8,["address"])]))),128))])]),_:2},1024)])]),o("div",Lt,[Ct,("checkNullObj"in s?s.checkNullObj:V(J))(s.positionInfo)&&((N=s.wallet)!=null&&N.connected)?(t(),n("div",Pt,[r($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",At,[(T=s.wallet)!=null&&T.connected?(t(),n(U,{key:0},[R(g(((h=s.positionInfo[e.id])==null?void 0:h.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:V(q))((B=s.positionInfo[e.id])==null?void 0:B.myLiquidityUSD)}`:"<$0.01"),1)],64)):(t(),n(U,{key:1},[R("--")],64))]))])]),r(P,{class:"h5-add-liquidity-btn",onClick:us(H=>s.router.push(`/vaults-detail/${e.id}?action=deposit`),["stop"])},{default:G(()=>[R("Deposit")]),_:2},1032,["onClick"]),o("div",{class:os(["details-btn",s.isShowPosition&&s.isShowPosition[k]?"details-btn-text-active":""]),onClick:H=>s.togglePosition(k)},[(t(),n("svg",{"aria-hidden":"true",class:os(["icon",s.isShowPosition&&s.isShowPosition[k]?"icon-active":""])},Vt,2))],10,It),s.isShowPosition&&s.isShowPosition[k]?(t(),n("div",jt,[o("div",Bt,[Rt,o("div",Nt,[(E=s.wallet)!=null&&E.connected?(t(),n("div",Tt,g(("addCommom"in s?s.addCommom:V(q))(("decimalUi"in s?s.decimalUi:V(hs))(e==null?void 0:e.myLiquidity,4)))+" LP",1)):(t(),n("div",Dt,"--"))])]),o("div",qt,[Ut,o("div",Mt,[(W=s.wallet)!=null&&W.connected?(t(),n("span",Yt,g(((K=s.positionInfo[e.id])==null?void 0:K.myShare)||(e==null?void 0:e.myShare))+"%",1)):(t(),n("span",Ft,"--%"))])]),o("div",Et,[Wt,o("div",Ht,[o("div",zt,[o("div",Gt,[F(o("img",Jt,null,512),[[p,e.needReverse?e.coinB.logo_url:e.coinA.logo_url]]),(Y=s.wallet)!=null&&Y.connected?(t(),n("div",Kt,[o("span",null,g(("addCommom"in s?s.addCommom:V(q))(e==null?void 0:e.amountA))+" "+g(e.needReverse?e.coinB.symbol:e.coinA.symbol),1)])):(t(),n("div",Qt,Zt))]),o("div",xt,[F(o("img",sn,null,512),[[p,e.needReverse?e.coinA.logo_url:e.coinB.logo_url]]),(cs=s.wallet)!=null&&cs.connected?(t(),n("div",on,[o("span",null,g(("addCommom"in s?s.addCommom:V(q))(e==null?void 0:e.amountB))+" "+g(e.needReverse?e.coinA.symbol:e.coinB.symbol),1)])):(t(),n("div",en,nn))])])])]),o("div",ln,[o("div",null,[o("div",{class:"remove-btn",onClick:H=>s.toAutoPoolDetail(e,"remove")},"Details",8,an)])])])):M("",!0)])}),128))])])}const cn=ts(ce,[["render",dn],["__scopeId","data-v-fb7983e3"]]),rn=es({props:{selectValue:{type:String,default:""},showList:{type:Object,default:()=>({})}},setup(s,l){const y=["All Vaults","My Vaults"],m=I("All Vaults"),w=I(s.selectValue),b=I(!1),_=I(!1),i=ns(),$=v(()=>i),j=rs(),P=v(()=>j),S=v(()=>P.value.autoPoolList),p=()=>s.showList.length,e=()=>{l.emit("clickRefresh")},k=c=>{w.value=c,l.emit("changeSort",c)},d=c=>{m.value=c,c=="My Vaults"?l.emit("changeTab",!0):l.emit("changeTab",!1)};return _s(()=>{document.addEventListener("click",()=>{_.value=!1})}),{isOpenList:_,wallet:$,changeSort:k,tabList:y,currentTab:m,sortValue:w,clickRefresh:e,isRefresh:b,vaultsPoolList:S,getListNum:p,changeTab:d}}});const ls=s=>(is("data-v-48f736b6"),s=s(),ds(),s),un={class:"vaults-tab"},_n={class:"tab-left"},hn=["onClick"],pn={key:0},vn={class:"tab-right"},gn={class:"sort-select"},mn=ls(()=>o("div",null,"Sort by",-1)),fn={class:"showSort"},bn=ls(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),kn=ls(()=>o("use",{"xlink:href":"#icon-icon_arrow"},null,-1)),yn=[kn],$n={key:0,class:"sort-list"},wn=ls(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),Sn=ls(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),Ln={class:"refresh"},Cn=ls(()=>o("use",{"xlink:href":"#icon-icon-refresh2"},null,-1)),Pn=[Cn];function An(s,l,y,m,w,b){return t(),n("div",un,[o("div",_n,[(t(!0),n(U,null,ss(s.tabList,_=>(t(),n("div",{key:_,class:os(["tab-item",s.currentTab==_?"tab-item-active":""]),onClick:i=>s.changeTab(_)},[o("span",null,g(_),1),s.currentTab==_&&s.getListNum()?(t(),n("p",pn,g(s.currentTab=="My Vaults"&&!s.wallet.address?0:s.getListNum()),1)):M("",!0)],10,hn))),128))]),o("div",vn,[o("div",gn,[o("div",{class:"sort-select-box",onClick:l[0]||(l[0]=us(_=>s.isOpenList=!s.isOpenList,["stop"]))},[mn,o("div",fn,[o("span",null,g(s.sortValue),1),bn,(t(),n("svg",{class:os(["arrow-icon",s.isOpenList?"arrow-icon-active":""]),"aria-hidden":"true"},yn,2))])]),s.isOpenList?(t(),n("div",$n,[o("div",{class:"sort-item",onClick:l[1]||(l[1]=_=>s.changeSort("APY"))},[R(" APY "),wn]),o("div",{class:"sort-item",onClick:l[2]||(l[2]=_=>s.changeSort("TVL"))},[R(" TVL "),Sn])])):M("",!0)]),o("div",Ln,[(t(),n("svg",{"aria-hidden":"true",class:os(["refresh-icon",s.isRefresh?"refreshing":""]),onClick:l[3]||(l[3]=(..._)=>s.clickRefresh&&s.clickRefresh(..._))},Pn,2))])])])}const In=ts(rn,[["render",An],["__scopeId","data-v-48f736b6"]]),On=es({components:{VaultsTabs:In},setup(){Bs();const s=gs(),l=v(()=>s),y=ms(),m=v(()=>y),w=rs(),b=v(()=>w),_=ns(),i=v(()=>_),$=v(()=>b.value.positionInfoObj),j=v(()=>l.value.chainName),P=I(!1),S=I(!1),p=I("TVL"),e=I(["APY"]),k=I(!1),d=a=>{console.log(a,"w121");const A=[];A.push(p.value),e.value.forEach((L,u)=>{L!=a&&A.push(L)}),e.value=A,p.value=a,D(b.value.positionInfoList)};_s(()=>{document.addEventListener("click",()=>{Y("")})});const c=I([]),O=I(!0),D=a=>{console.log(a,p.value,"##poolListselectValue.valueselectValue.value");const A=[];a.filter(u=>!u.is_pause).forEach(u=>{var bs,ks,ys,$s,ws,Ss,Ls,Cs,Ps,As,Is;const f=l.value.addressLpTokens[u.address],z=m.value.poolsObj[u.address];console.log(b.value.apyObj,"##autoPool.value.apyObj");const Z=((bs=b.value.apyObj[u.id])==null?void 0:bs.apr)||"0%",Ds=((ks=b.value.apyObj[u.id])==null?void 0:ks.resultApr)||"0",qs=((ys=b.value.apyObj[u.id])==null?void 0:ys.tvl)||0;console.log(u.autoPoolPositionInfo.id,"###watchPools 246"),console.log(f,"##statsObj");const Us=u.needReverse?((Ls=m.value.tokensObj[(Ss=u.coinB)==null?void 0:Ss.address])==null?void 0:Ls.labels)||[]:((ws=m.value.tokensObj[($s=u.coinA)==null?void 0:$s.address])==null?void 0:ws.labels)||[],Ms=u.needReverse?((Ps=m.value.tokensObj[(Cs=u.coinA)==null?void 0:Cs.address])==null?void 0:Ps.labels)||[]:((Is=m.value.tokensObj[(As=u.coinB)==null?void 0:As.address])==null?void 0:Is.labels)||[],Ys=[...new Set(Us.concat(Ms))];A.push({...u,liqidity:qs,vol:f?f.vol_in_usd_24h:"0",fee:u.fee?u.fee:z!=null&&z.fee?z.fee:"--",labels:Ys,isFarming:u==null?void 0:u.isFarming,fee_24_h:f&&f.fee_24_h,apy:Z,resultApr:Ds})});let L=[];p.value=="APY"?(console.log(p.value,"selectValue.valueselectValue.value"),L=A.sort((u,f)=>Number(f.resultApr)-Number(u.resultApr))):L=A.sort((u,f)=>Number(f.liqidity)-Number(u.liqidity)),c.value=L,console.log(c.value.length,"##list.value.length"),y.setAutoPoolNum(c.value.length),O.value=!1,console.log(c.value,"##list.value")};x(()=>[b.value.positionInfoList,b.value.apyObj,m.value.poolConfigObj],([a,A,L])=>{console.log("🚀🚀🚀 ~ file: vaults.vue:174 ~ setup ~ positionInfoList:",a),a&&a.length>0&&L&&!J(L)&&(console.log(a,"###autoPoolList"),D(a))},{immediate:!0,deep:!0}),x(()=>[i.value.address,b.value.autoPoolList,m.value.poolConfigObj],([a,A,L])=>{a&&A&&A.length>0&&L&&!J(L)&&(console.log("🚀 ~ file: vaults.vue:191 ~ setup ~ address:",a),w.getMyAutoPoolPosition())},{immediate:!0});const N=I(null),T=v(()=>N.value&&N.value.firstToken?N.value.firstToken:null),h=v(()=>N.value&&N.value.lastToken?N.value.lastToken:null),B=I(),E=I(0),W=()=>{let a=[];a=c.value,console.log(a,"##pageList"),E.value=a.reduce((f,z)=>Number(f)+Number(z.poolUSD),0);const A=a.filter((f,z)=>T.value&&h.value?f.coinA.address==T.value.address&&f.coinB.address==h.value.address||f.coinA.address==h.value.address&&f.coinB.address==T.value.address:T.value?f.coinA.address.toLowerCase().includes(T.value.address.toLowerCase())||f.coinB.address.toLowerCase().includes(T.value.address.toLowerCase()):h.value?f.coinA.address.toLowerCase().includes(h.value.address.toLowerCase())||f.coinB.address.toLowerCase().includes(h.value.address.toLowerCase()):a);let L=[],u=[];console.log(A,"##filterArr"),A.forEach((f,z)=>{console.log(f,"irem##");const Z=$.value&&$.value[f.id];console.log(Z,"##positionInfo"),P.value&&Number(Z==null?void 0:Z.myLiquidity)>0&&i.value.connected?u.push(f):L.push({...f})}),console.log(L,"121arrnewValnewValnewVal"),B.value=P.value&&i.value.connected?u:L,console.log(B.value,"##showList.value "),O.value||(P.value&&i.value.connected?y.setAutoPoolNum(u.length):y.setAutoPoolNum(L.length))};x(()=>[T.value,h.value,c.value,P.value,i.value.address],([a,A,L,u])=>{(a||A||L||u)&&(console.log("newValnewValnewVal",a,A,L,JSON.stringify(L)),W())},{immediate:!0}),Ws(()=>{y.setAutoPoolNum("--")});const K=v(()=>m.value.autoPoolNum),Y=a=>{a=="label"?(s.setIsSelect("pools"),k.value=!k.value,S.value=!1,l.value.setIsShowMore(!1)):a=="select"?(s.setIsSelect("pools"),S.value=!S.value,k.value=!1,l.value.setIsShowMore(!1)):(S.value=!1,k.value=!1)};x(()=>l.value.isSelect,a=>{a!=="pools"&&Y("")},{immediate:!0});const cs=ps(),H=()=>{O.value=!0,w.getAutoPoolList()};return x(()=>j.value,a=>{a=="Aptos"&&cs.push("/pools")},{immediate:!0}),x(()=>[m.value.poolConfigList,b.value.autoPoolList],([a,A])=>{a&&a.length>0&&A&&A.length==0&&w.getAutoPoolList()},{immediate:!0}),_s(()=>{w.getAutoPoolAPY()}),{totalTVL:E,clickRefresh:H,isMyLiquidity:P,chainName:j,store:l,select:S,selectValue:p,selectList:e,label:k,changeSort:d,list:c,listLoading:O,showList:B,childTokenSelectRef:N,wallet:i,autoPoolNum:K}}});const Vn={class:"vaults-container-new"},jn={class:"vaults-container-center"},Bn={class:"auto-pool"},Rn={key:0,class:"no-vaults-data no-data"},Nn=o("img",{src:Ts},null,-1),Tn={key:0,class:"upgrade-loading pc-loading"},Dn={key:1,class:"upgrade-loading h5-loading"},qn={key:3,class:"no-vaults-data"},Un=o("img",{src:Ks},null,-1),Mn=o("span",{class:"no-vaults"},"No vaults found",-1),Yn=[Un,Mn];function Fn(s,l,y,m,w,b){const _=co,i=Hs("VaultsTabs"),$=vs,j=Co,P=Js,S=cn;return t(),n("div",Vn,[r(_,{list:s.showList,"total-t-v-l":s.totalTVL,"list-loading":s.listLoading},null,8,["list","total-t-v-l","list-loading"]),o("div",jn,[r(i,{"select-value":s.selectValue,"show-list":s.showList,onChangeSort:l[0]||(l[0]=p=>s.changeSort(p)),onChangeTab:l[1]||(l[1]=p=>{s.isMyLiquidity=p}),onClickRefresh:s.clickRefresh},null,8,["select-value","show-list","onClickRefresh"]),o("div",Bn,[s.isMyLiquidity&&!s.wallet.address?(t(),n("div",Rn,[Nn,r($,{class:"add-liquidity-btn",onClick:l[2]||(l[2]=p=>s.wallet.setIsShowWalletModal(!0))},{default:G(()=>[R("Connect Wallet")]),_:1})])):M("",!0),s.isMyLiquidity&&s.wallet.address&&s.listLoading||!s.isMyLiquidity&&s.listLoading?(t(),n(U,{key:1},[s.listLoading?(t(),n("div",Tn,[r(j)])):M("",!0),s.listLoading?(t(),n("div",Dn,[r(P,{type:"poolsCard",loading:!0,source:"vaults"})])):M("",!0)],64)):M("",!0),s.isMyLiquidity&&s.wallet.address&&!s.listLoading||!s.isMyLiquidity&&!s.listLoading?(t(),zs(S,{key:2,list:s.showList},null,8,["list"])):M("",!0),s.autoPoolNum!=="--"&&Number(s.autoPoolNum)<=0&&!s.listLoading?(t(),n("div",qn,Yn)):M("",!0)])])])}const dl=ts(On,[["render",Fn]]);export{dl as default};
