import{s as js,a as B,u as Ss,d as us,c as J}from"./pool.652e8f54.js";import{a as ss,l as h,r as I,e as os,o as n,f as t,h as e,i as k,v as a,u as g,S as Fs,p as _s,k as ps,j as U,F,E as bs,M as Os,b as Cs,Q as Vs,s as Ts,t as G,y as Ds,c as ds,x as V,w as Ns,z as Ws,A as cs,B as Us,H as Es,q as x,K as zs}from"./entry.bbec17f0.js";/* empty css              */import{a as hs,u as ms}from"./sha256.36ff93b4.js";import{_ as qs}from"./auto-pool-apy-tips.55e851e2.js";/* empty css              */import{u as Hs}from"./farms.89ba0e1b.js";import{_ as Js}from"./upgrade-loading.cb39a2be.js";import{_ as Ms}from"./token-warning.87d058df.js";import{_ as Ks}from"./coin-tips.84005751.js";import{i as rs}from"./import-icon.de3e6c66.js";import{u as $s}from"./autoPool.20bb743c.js";import{R as Qs}from"./farms-range.e8509309.js";import{_ as Ys}from"./token-warning_2x.3d0f461e.js";import{_ as Gs}from"./img-connect-wallet_2x.31e85705.js";import{_ as Xs}from"./img-no-Positions_2x.aa6ee043.js";import"./decimal.0bdeb344.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const Zs=ss({props:{list:{type:Array,default:()=>[]},listLoading:{type:Boolean,default:!1},totalTVL:{type:String,default:""}},setup(s){const l=hs(),b=h(()=>l),y=I(!1);return{wallet:b,sFixD:js,loading:y,addCommom:B}}});const Ls=s=>(_s("data-v-af25987f"),s=s(),ps(),s),xs={class:"vaults-banner"},so={class:"vaults-banner-center"},oo=Ls(()=>e("div",{class:"title"},"Vaults",-1)),eo=Ls(()=>e("div",{class:"desc"},"Harvesting, compounding & rebalancing is automated.Stake your tokens to earn.",-1)),no={class:"claim-rewards"},to={class:"claim-title"},lo=Ls(()=>e("span",null,"Total Value Locked",-1)),ao={key:0,class:"loading-spin"},io={key:1},co={key:2};function ro(s,l,b,y,L,$){const u=Fs;return n(),t("div",xs,[e("div",so,[oo,eo,e("div",no,[e("div",to,[lo,s.listLoading?(n(),t("span",ao,[k(u)])):s.wallet.address?(n(),t("span",io,"$"+a(("addCommom"in s?s.addCommom:g(B))(("sFixD"in s?s.sFixD:g(js))(s.totalTVL||0,2))),1)):(n(),t("span",co,"--"))])])])])}const uo=os(Zs,[["render",ro],["__scopeId","data-v-af25987f"]]),_o=ss({setup(){const s=I(!1),l=hs(),b=h(()=>l),y=Hs(),L=h(()=>y),$=h(()=>L.value.farmsPoolList);return{isShowMore:s,wallet:b,walletStore:l,farmsPoolList:$}}});const ws=s=>(_s("data-v-18590430"),s=s(),ps(),s),po={class:"vaults-table"},ho=ws(()=>e("th",null,"Vaults",-1)),vo=ws(()=>e("th",null,"TVL",-1)),go=ws(()=>e("th",null,"Your Deposit",-1)),ko=ws(()=>e("th",null,"Actions",-1)),yo={class:"pool"},fo={class:"staked-tvl"},bo={class:"apr"},$o={class:"my-staked"},wo={class:"actions"};function Ao(s,l,b,y,L,$){const u=qs,_=Os;return n(),t("div",po,[e("table",null,[e("thead",null,[e("tr",null,[ho,vo,e("th",null,[e("span",null,[U("APY "),k(u)])]),go,ko])]),e("tbody",null,[(n(),t(F,null,bs(4,(P,C)=>e("tr",{key:C},[e("td",null,[e("div",yo,[k(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1}),k(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),e("td",null,[e("div",fo,[k(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),e("td",null,[e("div",bo,[e("span",null,[k(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),e("td",null,[e("div",$o,[k(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),e("td",null,[e("div",wo,[k(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])])),64))])])])}const So=os(_o,[["render",Ao],["__scopeId","data-v-18590430"]]),Co=ss({components:{Range:Qs},props:{pItem:{type:Object,default:()=>({})}},setup(s){const l=ms(),b=h(()=>l),y=Ss(),L=h(()=>y),$=r=>{var f;return(r==null?void 0:r.logoURI)||(r==null?void 0:r.logo_url)||((f=L.value.tokensObj[r==null?void 0:r.address])==null?void 0:f.logo_url)||(b.value.theme==="default"?rs("/image/coins/unknown.png"):rs("/image/coins/sui-unknown.png"))},u=I(!0),_=$s(),P=h(()=>_),C=h(()=>P.value.positionInfoObj[s.pItem.id]),j=Cs(),m=(r,f)=>{j.push(`/vaults-detail/${r.id}?action=${f}`)},w=r=>{const f=r.needReverse,T=f?r.token_b.address:r.token_a.address,q=f?r.token_a.address:r.token_b.address;j.push(`/swap?from=${T}&to=${q}`)},o=hs(),A=h(()=>o);return console.log(s.pItem,"pItem##"),{getCoinIcon:$,direct:u,decimalUi:us,addCommom:B,autoPool:P,positionInfo:C,toAutoPoolDetail:m,toSwap:w,wallet:A}}}),mo=""+globalThis.__publicAssetsURL("sui-image/range-vaults.png");const X=s=>(_s("data-v-a09ba9cb"),s=s(),ps(),s),Lo={class:"vaults-position-card"},Po={class:"auto-position-card-conetent"},Bo={class:"auto-position-card"},Io={class:"position-range"},Ro=X(()=>e("div",{class:"inrange"},[e("img",{src:mo,alt:""}),e("span",null,"In range")],-1)),jo={class:"right"},Oo={class:"top"},Vo=X(()=>e("p",null,"Position Range",-1)),To={key:0},Do={key:1},No={class:"item lp-tokens"},Uo=X(()=>e("div",{class:"top"},"Your LP Tokens",-1)),qo={class:"bottom"},Mo={key:0,class:"lp-num"},Yo={key:1,class:"lp-num"},Fo={class:"item share"},Wo=X(()=>e("div",{class:"top"},"Share",-1)),Eo={class:"bottom"},zo={key:0},Ho={key:1},Jo={class:"item yourBanlance"},Ko=X(()=>e("div",{class:"top"},"Your Balance",-1)),Qo={class:"bottom"},Go={class:"token-info"},Xo={class:"token-num"},Zo={alt:""},xo={key:0},se={key:1},oe=X(()=>e("p",null,"--",-1)),ee={class:"token-num"},ne={alt:""},te={key:0},le={key:1},ae=X(()=>e("p",null,"--",-1)),ie={class:"action"};function de(s,l,b,y,L,$){var P,C,j,m,w,o,A,r;const u=Vs("Range"),_=Ts("image");return n(),t("div",Lo,[e("div",Po,[e("div",Bo,[e("div",Io,[Ro,e("div",jo,[e("div",Oo,[Vo,s.direct?(n(),t("span",To,a(("addCommom"in s?s.addCommom:g(B))(("decimalUi"in s?s.decimalUi:g(us))(s.pItem.price,6)))+" Current",1)):(n(),t("span",Do,a(("addCommom"in s?s.addCommom:g(B))(("decimalUi"in s?s.decimalUi:g(us))(1/s.pItem.price,6)))+" Current",1))]),k(u,{"pool-info":s.positionInfo,"prop-direct":s.direct,"use-props-direct":!0,onClickChange:l[0]||(l[0]=f=>s.direct=!s.direct)},null,8,["pool-info","prop-direct"])])]),e("div",No,[Uo,e("div",qo,[(P=s.wallet)!=null&&P.connected?(n(),t("div",Mo,a(("addCommom"in s?s.addCommom:g(B))((C=s.positionInfo)==null?void 0:C.myLiquidity))+" LP",1)):(n(),t("div",Yo,"--"))])]),e("div",Fo,[Wo,e("div",Eo,[(j=s.wallet)!=null&&j.connected?(n(),t("span",zo,a((m=s.positionInfo)==null?void 0:m.myShare)+"%",1)):(n(),t("span",Ho,"--%"))])]),e("div",Jo,[Ko,e("div",Qo,[e("div",Go,[e("div",Xo,[G(e("img",Zo,null,512),[[_,s.pItem.needReverse?s.pItem.coinB.logo_url:s.pItem.coinA.logo_url]]),(w=s.wallet)!=null&&w.connected?(n(),t("div",xo,[e("span",null,a(("addCommom"in s?s.addCommom:g(B))((o=s.positionInfo)==null?void 0:o.amountA)),1)])):(n(),t("div",se,[e("span",null,"0 "+a(s.pItem.needReverse?s.pItem.coinB.symbol:s.pItem.coinA.symbol),1),oe]))]),e("div",ee,[G(e("img",ne,null,512),[[_,s.pItem.needReverse?s.pItem.coinA.logo_url:s.pItem.coinB.logo_url]]),(A=s.wallet)!=null&&A.connected?(n(),t("div",te,[e("span",null,a(("addCommom"in s?s.addCommom:g(B))((r=s.positionInfo)==null?void 0:r.amountB)),1)])):(n(),t("div",le,[e("span",null,"0 "+a(s.pItem.needReverse?s.pItem.coinA.symbol:s.pItem.coinB.symbol),1),ae]))])])])]),e("div",ie,[e("div",null,[e("div",{class:"remove-btn",onClick:l[1]||(l[1]=f=>s.toAutoPoolDetail(s.pItem,"remove"))},"Withdraw")])])])])])}const ce=os(Co,[["render",de],["__scopeId","data-v-a09ba9cb"]]),re=ss({components:{TokenWarning:Ms},props:{list:{type:Array,default:()=>[]}},setup(){const{t:s}=Ds(),l=ms(),b=h(()=>l),y=Ss(),L=h(()=>y),$=i=>{var O;return(i==null?void 0:i.logoURI)||(i==null?void 0:i.logo_url)||((O=L.value.tokensObj[i==null?void 0:i.address])==null?void 0:O.logo_url)||(b.value.theme==="default"?rs("/image/coins/unknown.png"):rs("/image/coins/sui-unknown.png"))},u=h(()=>L.value.tokensObj),_=h(()=>b.value.statsData),P=h(()=>b.value.theme),C=$s(),j=h(()=>C),m=I({}),w=i=>{m.value[i]?m.value[i]=!1:m.value[i]=!0,console.log(m.value,"##isShowPosition.value")},o=h(()=>j.value.positionInfoObj),A=hs(),r=h(()=>A),f=I(!1),T=Cs(),q=(i,O)=>{T.push(`/vaults-detail/${i.id}?action=${O}`)},D=i=>{const O=i.needReverse,Y=O?i.token_b.address:i.token_a.address,W=O?i.token_a.address:i.token_b.address;T.push(`/swap?from=${Y}&to=${W}`)},N=I(!0);return{router:T,getCoinIcon:$,tokensObj:u,t:s,statsData:_,checkNullObj:J,addCommom:B,importIcon:rs,theme:P,isShowPosition:m,togglePosition:w,positionInfo:o,wallet:r,isShowDetail:f,toAutoPoolDetail:q,toSwap:D,direct:N}}});const R=s=>(_s("data-v-566705fc"),s=s(),ps(),s),ue={class:"vaults-table-contianer"},_e={class:"table pc-pool-item"},pe={class:"table-header"},he={class:"table-tr"},ve=R(()=>e("th",null,"Vaults",-1)),ge=R(()=>e("th",null,"TVL",-1)),ke=R(()=>e("th",null,"Your Deposit",-1)),ye=R(()=>e("th",null,"Action",-1)),fe=R(()=>e("tr",{style:{height:"4px",background:"unset"}},null,-1)),be={class:"table-body"},$e=["onClick"],we={class:"token"},Ae={class:"img-box"},Se=["src"],Ce={class:"img-box img-last-box"},me=["src"],Le={class:"name"},Pe={class:"top"},Be={class:"token-name"},Ie={class:"tokena"},Re={class:"tokenb"},je={class:"fee-warning"},Oe={class:"fee-tier-top"},Ve={key:0,class:"pool-warning"},Te=R(()=>e("img",{src:Ys,alt:""},null,-1)),De={class:"hover-text"},Ne={key:0},Ue={class:"skeleton-box"},qe={key:1},Me={key:2},Ye={class:"skeleton-box"},Fe={key:3},We={key:4},Ee={class:"skeleton-box"},ze={key:5},He={class:"show-position"},Je={class:"svg-icon"},Ke=R(()=>e("use",{"xlink:href":"#icon-icon_on"},null,-1)),Qe=[Ke],Ge={key:0,class:"table-tr view-table-tr"},Xe={colspan:"5"},Ze=R(()=>e("td",null,null,-1)),xe=R(()=>e("tr",{style:{height:"8px",background:"unset"}},null,-1)),sn={class:"h5-pool-item"},on={class:"token"},en={class:"img-box"},nn={key:0,class:"pool-warning"},tn={class:"img-box img-last-box"},ln={key:0,class:"pool-warning"},an={class:"name"},dn={class:"top"},cn={class:"token-name"},rn={class:"tokena"},un={class:"tokenb"},_n={class:"fee-warning"},pn={class:"fee-tier-top"},hn={key:0,class:"pool-warning"},vn=R(()=>e("img",{src:Ys,alt:""},null,-1)),gn={class:"hover-text"},kn={class:"bottom"},yn={class:"row"},fn=R(()=>e("div",{class:"left"},"APY",-1)),bn={key:0,class:"right"},$n={key:1,class:"right theme-right"},wn={class:"row"},An=R(()=>e("div",{class:"left"},"TVL",-1)),Sn={key:0,class:"right"},Cn={key:1,class:"right"},mn={class:"row"},Ln=R(()=>e("div",{class:"left"},"Your Deposit",-1)),Pn={key:0,class:"right"},Bn={key:1,class:"right"},In={class:"details-btn"},Rn=["onClick"],jn=R(()=>e("use",{"xlink:href":"#icon-icon_on"},null,-1)),On=[jn],Vn={key:0,class:"h5-auto-pool-details"},Tn={class:"auto-pool-details-top"},Dn={class:"current-price"},Nn={class:"current-price-text"},Un={key:0,class:"coin"},qn={key:1,class:"coin"},Mn=R(()=>e("div",null,[e("svg",{class:"icon icon-up","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Yn=R(()=>e("div",null,[e("svg",{class:"icon icon-down","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Fn=[Mn,Yn],Wn={class:"my-share"},En=R(()=>e("span",null,"My share of pool",-1)),zn={key:0},Hn={key:1},Jn={class:"current-lp"},Kn={class:"current-lp-info"},Qn={class:"lp-bg"},Gn={alt:""},Xn={class:"lp-num"},Zn=R(()=>e("div",{class:"title"},"Current LP",-1)),xn={key:0},st={key:1},ot={key:2},et={key:3},nt={class:"pooled-assets"},tt={class:"assets-info"},lt={class:"token-num"},at={alt:""},it=R(()=>e("div",{class:"title"},"Pooled Assets",-1)),dt={key:0},ct={key:1},rt={key:2},ut={key:3},_t={class:"token-num"},pt={alt:""},ht={key:0},vt={key:1},gt={key:2},kt={key:3},yt={class:"action"},ft=["onClick"],bt={class:"remove-swap-btn"},$t=["onClick"];function wt(s,l,b,y,L,$){const u=qs,_=Ms,P=Ks,C=Os,j=Us,m=ce,w=Ts("image");return n(),t("div",ue,[e("table",_e,[e("thead",pe,[e("tr",he,[ve,ge,e("th",null,[e("span",null,[U("APY "),k(u)])]),ke,ye]),fe]),e("tbody",be,[(n(!0),t(F,null,bs(s.list,(o,A)=>{var r,f,T,q,D,N,i,O,Y,W,K,z,Q,H,d;return n(),t(F,{key:A},[e("tr",{class:"table-tr",onClick:S=>s.togglePosition(A)},[e("td",null,[e("div",we,[e("div",Ae,[e("img",{src:s.getCoinIcon(o.needReverse?o.coinB:o.coinA)},null,8,Se),k(_,{address:o.needReverse?(f=o==null?void 0:o.coinB)==null?void 0:f.address:(r=o==null?void 0:o.coinA)==null?void 0:r.address,"style-params":{right:0,bottom:0,width:"12px",height:"12px"}},null,8,["address"])]),e("div",Ce,[e("img",{src:s.getCoinIcon(o.needReverse?o.coinA:o.coinB)},null,8,me),k(_,{address:o.needReverse?(q=o.coinA)==null?void 0:q.address:(T=o==null?void 0:o.coinB)==null?void 0:T.address,"style-params":{right:0,bottom:0,width:"12px",height:"12px"}},null,8,["address"])]),e("div",Le,[e("div",Pe,[e("p",Be,[e("span",Ie,[U(a(o.needReverse?(N=o==null?void 0:o.coinB)==null?void 0:N.symbol:(D=o==null?void 0:o.coinA)==null?void 0:D.symbol)+" ",1),o!=null&&o.coinB&&(o!=null&&o.coinA)?(n(),ds(P,{key:0,"coin-info":o.needReverse?o==null?void 0:o.coinB:o==null?void 0:o.coinA},null,8,["coin-info"])):V("",!0)]),U(" - "),e("span",Re,[U(a(o.needReverse?(i=o==null?void 0:o.coinA)==null?void 0:i.symbol:(O=o==null?void 0:o.coinB)==null?void 0:O.symbol)+" ",1),o!=null&&o.coinB&&(o!=null&&o.coinA)?(n(),ds(P,{key:0,"coin-info":o.needReverse?o==null?void 0:o.coinA:o==null?void 0:o.coinB},null,8,["coin-info"])):V("",!0)])]),e("div",je,[e("div",Oe,a((o==null?void 0:o.fee)*100)+"%",1),(W=s.tokensObj[(Y=o.coinA)==null?void 0:Y.address])!=null&&W.isSelfBuilt||(z=s.tokensObj[(K=o.coinB)==null?void 0:K.address])!=null&&z.isSelfBuilt?(n(),t("div",Ve,[Te,e("div",De,a(s.t("newAdd.poolWarning")),1)])):V("",!0)])])])])]),("checkNullObj"in s?s.checkNullObj:g(J))(s.statsData)?(n(),t("td",Ne,[e("div",Ue,[k(C,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),t("td",qe," $"+a(Number(o.poolUSD)!==0&&Number(o.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:g(B))(o.poolUSD,2)),1)),("checkNullObj"in s?s.checkNullObj:g(J))(s.statsData)?(n(),t("td",Me,[e("div",Ye,[k(C,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),t("td",Fe,a(o.apy),1)),(Q=s.wallet)!=null&&Q.connected&&!s.positionInfo[o.id].myLiquidityUSD?(n(),t("td",We,[e("div",Ee,[k(C,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),t("td",ze,[s.wallet.connected?(n(),t(F,{key:0},[U(a(((H=s.positionInfo[o.id])==null?void 0:H.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:g(B))((d=s.positionInfo[o.id])==null?void 0:d.myLiquidityUSD)}`:"<$0.01"),1)],64)):(n(),t(F,{key:1},[U("--")],64))])),e("td",null,[e("div",He,[k(j,{class:"add-liquidity-btn",onClick:Ws(S=>s.router.push(`/vaults-detail/${o.id}?action=deposit`),["stop"])},{default:Ns(()=>[U("Deposit")]),_:2},1032,["onClick"]),e("div",Je,[(n(),t("svg",{"aria-hidden":"true",class:cs(["icon",s.isShowPosition&&s.isShowPosition[A]?"icon-open":""])},Qe,2))])])])],8,$e),s.isShowPosition&&s.isShowPosition[A]?(n(),t("tr",Ge,[e("td",Xe,[k(m,{"p-item":o},null,8,["p-item"])]),Ze])):V("",!0),xe],64)}),128))])]),e("div",sn,[(n(!0),t(F,null,bs(s.list,(o,A)=>{var r,f,T,q,D,N,i,O,Y,W,K,z,Q,H,d,S,v,c,p,M,E,vs,gs,ks,ys,fs,es,ns,ts,ls,as,is;return n(),t("div",{key:o.address,class:"item"},[e("div",on,[e("div",en,[G(e("img",null,null,512),[[w,s.getCoinIcon(o.needReverse?o.coinB:o.coinA)]]),(o.needReverse?(f=s.tokensObj[o.coinB.address])!=null&&f.isSelfBuilt:(r=s.tokensObj[o.coinA.address])!=null&&r.isSelfBuilt)?(n(),t("div",nn)):V("",!0)]),e("div",tn,[G(e("img",null,null,512),[[w,s.getCoinIcon(o.needReverse?o.coinA:o.coinB)]]),(o.needReverse?(T=s.tokensObj[o.coinA.address])!=null&&T.isSelfBuilt:(q=s.tokensObj[o.coinB.address])!=null&&q.isSelfBuilt)?(n(),t("div",ln)):V("",!0)]),e("div",an,[e("div",dn,[e("p",cn,[e("span",rn,[U(a(o.needReverse?o.coinB.symbol:o.coinA.symbol)+" ",1),o&&o.coinB&&o.coinA?(n(),ds(P,{key:0,"coin-info":o.needReverse?o==null?void 0:o.coinB:o==null?void 0:o.coinA},null,8,["coin-info"])):V("",!0)]),U(" - "),e("span",un,[U(a(o.needReverse?o.coinA.symbol:o.coinB.symbol)+" ",1),o&&o.coinB&&o.coinA?(n(),ds(P,{key:0,"coin-info":o.needReverse?o==null?void 0:o.coinA:o==null?void 0:o.coinB},null,8,["coin-info"])):V("",!0)])]),e("div",_n,[e("div",pn,a((o==null?void 0:o.fee)*100)+"%",1),(D=s.tokensObj[o.coinA.address])!=null&&D.isSelfBuilt||(N=s.tokensObj[o.coinB.address])!=null&&N.isSelfBuilt?(n(),t("div",hn,[vn,e("div",gn,a(s.t("newAdd.poolWarning")),1)])):V("",!0)])])])]),e("div",kn,[e("div",yn,[fn,("checkNullObj"in s?s.checkNullObj:g(J))(s.statsData)?(n(),t("div",bn,[k(C,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),t("div",$n,[e("i",null,a(o.apy),1),k(u)]))]),e("div",wn,[An,("checkNullObj"in s?s.checkNullObj:g(J))(s.statsData)?(n(),t("div",Sn,[k(C,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),t("div",Cn," $"+a(Number(o.poolUSD)!==0&&Number(o.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:g(B))(o.poolUSD,2)),1))]),e("div",mn,[Ln,("checkNullObj"in s?s.checkNullObj:g(J))(s.positionInfo)&&((i=s.wallet)!=null&&i.connected)?(n(),t("div",Pn,[k(C,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),t("div",Bn,[(O=s.wallet)!=null&&O.connected?(n(),t(F,{key:0},[U(a(((Y=s.positionInfo[o.id])==null?void 0:Y.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:g(B))((W=s.positionInfo[o.id])==null?void 0:W.myLiquidityUSD)}`:"<$0.01"),1)],64)):(n(),t(F,{key:1},[U("--")],64))]))])]),e("div",In,[e("div",{class:cs(["details-btn-text",s.isShowPosition&&s.isShowPosition[A]?"details-btn-text-active":""]),onClick:Z=>s.togglePosition(A)},[(n(),t("svg",{"aria-hidden":"true",class:cs(["icon",s.isShowPosition&&s.isShowPosition[A]?"icon-active":""])},On,2))],10,Rn),s.isShowPosition&&s.isShowPosition[A]?(n(),t("div",Vn,[e("div",Tn,[e("div",Dn,[U(" Current Price "),e("div",Nn,[(o!=null&&o.needReverse?!s.direct:s.direct)?(n(),t("div",Un,a(("addCommom"in s?s.addCommom:g(B))(("decimalUi"in s?s.decimalUi:g(us))(o.price,6)))+" "+a(o&&o.coinB&&o.coinB.symbol)+" per  "+a(o&&o.coinA&&o.coinA.symbol),1)):(n(),t("div",qn,a(("addCommom"in s?s.addCommom:g(B))(("decimalUi"in s?s.decimalUi:g(us))(1/o.price,6)))+" "+a(o&&o.coinA&&o.coinA.symbol)+" per  "+a(o&&o.coinB&&o.coinB.symbol),1)),e("div",{class:"icon-change",onClick:l[0]||(l[0]=Z=>s.direct=!s.direct)},Fn)])]),e("div",Wn,[En,(K=s.wallet)!=null&&K.connected?(n(),t("span",zn,a(o==null?void 0:o.myShare)+"%",1)):(n(),t("span",Hn,"--%"))])]),e("div",Jn,[e("div",Kn,[e("div",Qn,[G(e("img",Gn,null,512),[[w,(z=o==null?void 0:o.lpInfo)==null?void 0:z.logo_url]])]),e("div",Xn,[Zn,(Q=s.wallet)!=null&&Q.connected?(n(),t("span",xn,a(("addCommom"in s?s.addCommom:g(B))(o.myLiquidity))+" LP",1)):(n(),t("span",st,"-- LP")),(H=s.wallet)!=null&&H.connected?(n(),t("span",ot,a(((d=s.positionInfo[o.id])==null?void 0:d.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:g(B))((S=s.positionInfo[o.id])==null?void 0:S.myLiquidityUSD)}`:"<$0.01"),1)):(n(),t("span",et,"--"))])])]),e("div",nt,[e("div",tt,[e("div",lt,[G(e("img",at,null,512),[[w,o.needReverse?(v=o==null?void 0:o.coinB)==null?void 0:v.logo_url:(c=o==null?void 0:o.coinA)==null?void 0:c.logo_url]]),e("div",null,[it,(p=s.wallet)!=null&&p.connected?(n(),t("span",dt,a(("addCommom"in s?s.addCommom:g(B))(o.amountA))+" "+a(o.needReverse?(M=o==null?void 0:o.coinB)==null?void 0:M.symbol:(E=o==null?void 0:o.coinA)==null?void 0:E.symbol),1)):(n(),t("span",ct,"-- "+a(o.needReverse?(vs=o==null?void 0:o.coinB)==null?void 0:vs.symbol:(gs=o==null?void 0:o.coinA)==null?void 0:gs.symbol),1)),(ks=s.wallet)!=null&&ks.connected?(n(),t("span",rt,a(o.myAmountAUSD),1)):(n(),t("span",ut,"--"))])]),e("div",_t,[G(e("img",pt,null,512),[[w,o.needReverse?(ys=o==null?void 0:o.coinA)==null?void 0:ys.logo_url:(fs=o==null?void 0:o.coinB)==null?void 0:fs.logo_url]]),e("div",null,[(es=s.wallet)!=null&&es.connected?(n(),t("span",ht,a(("addCommom"in s?s.addCommom:g(B))(o.amountB))+" "+a(o.needReverse?(ns=o==null?void 0:o.coinA)==null?void 0:ns.symbol:(ts=o==null?void 0:o.coinB)==null?void 0:ts.symbol),1)):(n(),t("span",vt,"-- "+a(o.needReverse?(ls=o==null?void 0:o.coinA)==null?void 0:ls.symbol:(as=o==null?void 0:o.coinB)==null?void 0:as.symbol),1)),(is=s.wallet)!=null&&is.connected?(n(),t("span",gt,a(o.myAmountBUSD),1)):(n(),t("span",kt,"--"))])])])]),e("div",yt,[e("div",{class:"add-btn",onClick:Z=>s.toAutoPoolDetail(o,"deposit")}," Add Liquidity ",8,ft),e("div",bt,[e("div",{onClick:Z=>s.toAutoPoolDetail(o,"remove")}," Remove ",8,$t)])])])):V("",!0)])])}),128))])])}const At=os(re,[["render",wt],["__scopeId","data-v-566705fc"]]),St=ss({props:{selectValue:{type:String,default:""},showList:{type:Object,default:()=>({})}},setup(s,l){const b=["All Vaults","My Vaults"],y=I("All Vaults"),L=I(s.selectValue),$=I(!1),u=$s(),_=h(()=>u),P=h(()=>_.value.autoPoolList);return{changeSort:o=>{L.value=o,l.emit("changeSort",o)},tabList:b,currentTab:y,sortValue:L,clickRefresh:()=>{l.emit("clickRefresh")},isRefresh:$,vaultsPoolList:P,getListNum:()=>s.showList.length,changeTab:o=>{y.value=o,console.log(o,"itemitem"),o=="My Vaults"?l.emit("changeTab",!0):l.emit("changeTab",!1)}}}});const As=s=>(_s("data-v-27500767"),s=s(),ps(),s),Ct={class:"vaults-tab"},mt={class:"tab-left"},Lt=["onClick"],Pt={key:0},Bt={class:"tab-right"},It={class:"sort-select"},Rt={class:"sort-select-box"},jt=As(()=>e("div",null,"Sort by",-1)),Ot=As(()=>e("svg",{class:"sort-icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),Vt=As(()=>e("svg",{class:"arrow-icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon_arrow"})],-1)),Tt={class:"sort-list"},Dt={class:"refresh"},Nt=As(()=>e("use",{"xlink:href":"#icon-icon-refresh2"},null,-1)),Ut=[Nt];function qt(s,l,b,y,L,$){return n(),t("div",Ct,[e("div",mt,[(n(!0),t(F,null,bs(s.tabList,u=>(n(),t("div",{key:u,class:cs(["tab-item",s.currentTab==u?"tab-item-active":""]),onClick:_=>s.changeTab(u)},[e("span",null,a(u),1),s.currentTab==u&&s.getListNum()?(n(),t("p",Pt,a(s.getListNum()),1)):V("",!0)],10,Lt))),128))]),e("div",Bt,[e("div",It,[e("div",Rt,[jt,e("div",null,[e("span",null,a(s.sortValue),1),Ot,Vt])]),e("div",Tt,[e("div",{class:"sort-item",onClick:l[0]||(l[0]=u=>s.changeSort("APY"))},"APY"),e("div",{class:"sort-item",onClick:l[1]||(l[1]=u=>s.changeSort("TVL"))},"TVL")])]),e("div",Dt,[(n(),t("svg",{"aria-hidden":"true",class:cs(["refresh-icon",s.isRefresh?"refreshing":""]),onClick:l[2]||(l[2]=(...u)=>s.clickRefresh&&s.clickRefresh(...u))},Ut,2))])])])}const Mt=os(St,[["render",qt],["__scopeId","data-v-27500767"]]),Yt=ss({components:{VaultsTabs:Mt},setup(){Ds();const s=ms(),l=h(()=>s),b=Ss(),y=h(()=>b),L=$s(),$=h(()=>L),u=hs(),_=h(()=>u),P=h(()=>$.value.positionInfoObj),C=h(()=>l.value.chainName),j=I(!1),m=I(!1),w=I("TVL"),o=I(["APY"]),A=I(!1),r=d=>{console.log(d,"w121");const S=[];S.push(w.value),o.value.forEach((v,c)=>{v!=d&&S.push(v)}),o.value=S,w.value=d,q($.value.positionInfoList)};Es(()=>{document.addEventListener("click",()=>{z("")})});const f=I([]),T=I(!0),q=d=>{console.log(d,"##poolList");const S=[];d.filter(c=>!c.is_pause).forEach(c=>{var es,ns,ts,ls,as,is,Z,Ps,Bs,Is,Rs;const p=l.value.addressLpTokens[c.address],M=y.value.poolsObj[c.address];console.log($.value.apyObj,"##autoPool.value.apyObj");const E=((es=$.value.apyObj[c.id])==null?void 0:es.apr)||"0%",vs=((ns=$.value.apyObj[c.id])==null?void 0:ns.resultApr)||"0",gs=((ts=$.value.apyObj[c.id])==null?void 0:ts.tvl)||0;console.log(c.autoPoolPositionInfo.id,"###watchPools 246"),console.log(p,"##statsObj");const ks=c.needReverse?((Z=y.value.tokensObj[(is=c.coinB)==null?void 0:is.address])==null?void 0:Z.labels)||[]:((as=y.value.tokensObj[(ls=c.coinA)==null?void 0:ls.address])==null?void 0:as.labels)||[],ys=c.needReverse?((Bs=y.value.tokensObj[(Ps=c.coinA)==null?void 0:Ps.address])==null?void 0:Bs.labels)||[]:((Rs=y.value.tokensObj[(Is=c.coinB)==null?void 0:Is.address])==null?void 0:Rs.labels)||[],fs=[...new Set(ks.concat(ys))];S.push({...c,liqidity:gs,vol:p?p.vol_in_usd_24h:"0",fee:c.fee?c.fee:M!=null&&M.fee?M.fee:"--",labels:fs,isFarming:c==null?void 0:c.isFarming,fee_24_h:p&&p.fee_24_h,apy:E,resultApr:vs})});let v=[];w.value=="APY"?v=S.sort((c,p)=>p.resultApr-c.resultApr):v=S.sort((c,p)=>p.liqidity-c.liqidity),f.value=v,T.value=!1,console.log(f.value.length,"##list.value.length"),b.setAutoPoolNum(f.value.length),console.log(f.value,"##list.value")};x(()=>[$.value.positionInfoList,$.value.apyObj,y.value.poolConfigObj],([d,S,v])=>{console.log("执行次数###",v),d&&d.length>0&&v&&!J(v)&&(console.log(d,"###autoPoolList"),q(d))},{immediate:!0,deep:!0}),x(()=>[_.value.address,$.value.autoPoolList,y.value.poolConfigObj],([d,S,v])=>{d&&S&&S.length>0&&v&&!J(v)&&L.getMyAutoPoolPosition()},{immediate:!0});const D=I(null),N=h(()=>D.value&&D.value.firstToken?D.value.firstToken:null),i=h(()=>D.value&&D.value.lastToken?D.value.lastToken:null),O=I(),Y=I(""),W=()=>{let d=[];d=f.value,console.log(d,"##pageList");const S=d.filter((p,M)=>N.value&&i.value?p.coinA.address==N.value.address&&p.coinB.address==i.value.address||p.coinA.address==i.value.address&&p.coinB.address==N.value.address:N.value?p.coinA.address.toLowerCase().includes(N.value.address.toLowerCase())||p.coinB.address.toLowerCase().includes(N.value.address.toLowerCase()):i.value?p.coinA.address.toLowerCase().includes(i.value.address.toLowerCase())||p.coinB.address.toLowerCase().includes(i.value.address.toLowerCase()):d);let v=[],c=[];console.log(S,"##filterArr"),S.forEach((p,M)=>{console.log(p,"irem##");const E=P.value&&P.value[p.id];console.log(E,"##positionInfo"),j.value&&Number(E==null?void 0:E.myLiquidity)>0&&_.value.connected?c.push(p):v.push({...p})}),Y.value=v.reduce((p,M)=>p+M.poolUSD,0),console.log(v,"121arrnewValnewValnewVal"),O.value=j.value&&_.value.connected?c:v,console.log(O.value,"##showList.value "),T.value||(j.value&&_.value.connected?b.setAutoPoolNum(c.length):b.setAutoPoolNum(v.length))};x(()=>[N.value,i.value,f.value,j.value,_.value.address],([d,S,v,c])=>{(d||S||v||c)&&(console.log("newValnewValnewVal",d,S,v,JSON.stringify(v)),W())},{immediate:!0}),zs(()=>{b.setAutoPoolNum("--")});const K=h(()=>y.value.autoPoolNum),z=d=>{d=="label"?(s.setIsSelect("pools"),A.value=!A.value,m.value=!1,l.value.setIsShowMore(!1)):d=="select"?(s.setIsSelect("pools"),m.value=!m.value,A.value=!1,l.value.setIsShowMore(!1)):(m.value=!1,A.value=!1)};x(()=>l.value.isSelect,d=>{d!=="pools"&&z("")},{immediate:!0});const Q=Cs(),H=()=>{T.value=!0,L.getAutoPoolList(),L.getAutoPoolAPY()};return x(()=>l.value.isRefresh,d=>{H()},{immediate:!0}),x(()=>C.value,d=>{d=="Aptos"&&Q.push("/pools")},{immediate:!0}),{totalTVL:Y,clickRefresh:H,isMyLiquidity:j,chainName:C,store:l,select:m,selectValue:w,selectList:o,label:A,changeSort:r,list:f,listLoading:T,showList:O,childTokenSelectRef:D,wallet:_,autoPoolNum:K}}});const Ft={class:"vaults-container-new"},Wt={class:"vaults-container-center"},Et={class:"auto-pool"},zt={key:0,class:"no-vaults-data no-data"},Ht=e("img",{src:Gs},null,-1),Jt={key:0,class:"upgrade-loading pc-loading"},Kt={key:1,class:"upgrade-loading h5-loading"},Qt={key:3,class:"no-vaults-data"},Gt=e("img",{src:Xs},null,-1),Xt=e("span",{class:"no-vaults"},"No vaults found",-1),Zt=[Gt,Xt];function xt(s,l,b,y,L,$){const u=uo,_=Vs("VaultsTabs"),P=Us,C=So,j=Js,m=At;return n(),t("div",Ft,[k(u,{list:s.showList,"total-t-v-l":s.totalTVL,"list-loading":s.listLoading},null,8,["list","total-t-v-l","list-loading"]),e("div",Wt,[k(_,{"select-value":s.selectValue,"show-list":s.showList,onChangeSort:l[0]||(l[0]=w=>s.changeSort(w)),onChangeTab:l[1]||(l[1]=w=>{s.isMyLiquidity=w}),onClickRefresh:s.clickRefresh},null,8,["select-value","show-list","onClickRefresh"]),e("div",Et,[s.isMyLiquidity&&!s.wallet.address?(n(),t("div",zt,[Ht,k(P,{class:"add-liquidity-btn",onClick:l[2]||(l[2]=w=>s.wallet.setIsShowWalletModal(!0))},{default:Ns(()=>[U("Connect Wallet")]),_:1})])):V("",!0),s.isMyLiquidity&&s.wallet.address&&s.listLoading||!s.isMyLiquidity&&s.listLoading?(n(),t(F,{key:1},[s.listLoading?(n(),t("div",Jt,[k(C)])):V("",!0),s.listLoading?(n(),t("div",Kt,[k(j,{type:"poolsCard",loading:!0})])):V("",!0)],64)):V("",!0),s.isMyLiquidity&&s.wallet.address&&!s.listLoading||!s.isMyLiquidity&&!s.listLoading?(n(),ds(m,{key:2,list:s.showList},null,8,["list"])):V("",!0),s.autoPoolNum!=="--"&&Number(s.autoPoolNum)<=0&&!s.listLoading?(n(),t("div",Qt,Zt)):V("",!0)])])])}const fl=os(Yt,[["render",xt]]);export{fl as default};
