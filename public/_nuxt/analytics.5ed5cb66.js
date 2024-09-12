import{_ as Ie}from"./upgrade-chart.da372d6a.js";import{u as Ne,v as se,w as ne,a as y,d as f,q as Ae,c,x as je,o as w,p as pe,b as Ue}from"./common.f371ec22.js";import{a as Oe,r as O,m as _,L as we,A as x,q as me,V as Ce,e as Se,C as Ee,o as s,f as n,i as h,G as m,h as o,F as q,E as P,y as C,x as a,D as ee,w as $,u as l,I as A,j as E,O as Be,P as Le,S as Te,M as oe,p as De,k as Re}from"./entry.acdca605.js";import"./index.8f6ad64c.js";/* empty css              *//* empty css              */import{u as qe,a as $e,b as Me}from"./index.694816b3.js";import{u as Ve,c as Pe}from"./index.be8ffb7b.js";import{i as ve}from"./import-icon.de3e6c66.js";import"./decimal.a2826370.js";import{g as Fe}from"./common-fun.1c0a537d.js";import{D as j}from"./decimal.765d8738.js";import{_ as ze}from"./img-no-Positions_2x.c238650c.js";import{_ as Ge}from"./img-no-Positions_2x.e6cc8405.js";import"./index.cd369779.js";import"./install.d2555671.js";import"./lodash.5807d01d.js";import"./precision.c92e897d.js";const We=Oe({setup(){const e=O(!0),k=O(!1),B=O([]),Q=O("vol"),X=qe(),p=_(()=>X),F=Ve();_(()=>F);const Y=$e(),I=_(()=>Y),u=we();_(()=>Pe[p.value.chainName]);const g=_(()=>p.value.chainName),z=g.value=="Sui"?[{label:"Volume",value:"vol"},{label:"TVL",value:"tvl"},{label:"Fees",value:"fee"}]:[{label:"Volume",value:"vol"},{label:"TVL",value:"tvl"},{label:"Fees",value:"fee"}],G=r=>{Q.value=r.value},L=O(0),W=()=>{k.value=!0,L.value=L.value+1,p.value.getTransactionList(g.value,u.query.poolAddress,L.value)},T=O(!1),H=()=>{T.value=!0,e.value=!0,B.value=[],I.value.setPoolConfigList(p.value.chainName,p.value.filterCoinsObj),p.value.getTransactionList(g.value,u.query.poolAddress,0),X.getStatsData(p.value.chainName,p.value.filterCoinsObj),setTimeout(()=>{T.value=!1},1e3)},t=_(()=>{const r=u.query.poolAddress;return I.value.poolConfigObj[r]}),i=O({}),D=_(()=>Fe(t.value,I,p));x(()=>u,r=>{e.value=!0,B.value=[],p.value.getTransactionList(g.value,u.query.poolAddress,0)},{immediate:!0,deep:!0});const S=Me(p.value.chainName),N=_(()=>p.value.isShowLoadMore);x(()=>[p.value.liquiditytransactionList,t.value,N.value],async([r,v,U])=>{v&&(p.value.chainName&&p.value.chainName.includes("Aptos")&&(i.value=await S.getPool(v.address)),r?(B.value=r,e.value=!1,k.value=!1):U==!1&&(B.value=[],e.value=!1,k.value=!1))},{immediate:!0,deep:!0}),me(()=>{e.value=!0}),Ce(()=>{p.value.setClearLiquiditytransactionList()});const M=r=>{var U;let v;return(r==null?void 0:r.address)=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?v="0x2::sui::SUI":v=r==null?void 0:r.address,(r==null?void 0:r.logoURI)||(r==null?void 0:r.logo_url)||((U=I.value.tokensObj[v])==null?void 0:U.logo_url)||(r==null?void 0:r.url)||(p.value.theme==="default"?ve("/image/coins/unknown.png"):ve("/image/coins/sui-unknown.png"))},fe=r=>{switch(r){case"add_liquidity_event":return"Add liquidity";case"swap_event":return"Swap";case"remove_liquidity_event":return"Remove liquidity";case"collect_reward_event":return"Claim Rewards";case"collect_fee_event":return"Claim Fees"}},le=_(()=>{let r;return p.value.chainName=="Sui"?r=(t==null?void 0:t.value)&&(t==null?void 0:t.value.object)&&(t==null?void 0:t.value.object.coin_a):r=(i==null?void 0:i.value)&&(i==null?void 0:i.value.coinAmountA),pe(r,(t==null?void 0:t.value)&&(t==null?void 0:t.value.coinA)&&(t==null?void 0:t.value.coinA.decimals))}),ie=_(()=>{let r;return p.value.chainName=="Sui"?r=(t==null?void 0:t.value)&&(t==null?void 0:t.value.object)&&(t==null?void 0:t.value.object.coin_b):r=(i==null?void 0:i.value)&&(i==null?void 0:i.value.coinAmountB),pe(r,(t==null?void 0:t.value)&&(t==null?void 0:t.value.coinB)&&(t==null?void 0:t.value.coinB.decimals))}),te=_(()=>{var r;if(I.value.RATES){const v=new j(le.value),U=new j(((r=I.value.RATES[(t==null?void 0:t.value)&&(t==null?void 0:t.value.coinA)&&t.value.coinA.address])==null?void 0:r.price)||0);return v.mul(U).toString()}else return"--"}),ae=_(()=>{var r;if(I.value.RATES){const v=new j(ie.value),U=new j(((r=I.value.RATES[(t==null?void 0:t.value)&&(t==null?void 0:t.value.coinB)&&t.value.coinB.address])==null?void 0:r.price)||0);return v.mul(U).toString()}else return"--"}),re=O(),de=O(),ke=(r,v)=>{var ue,he;console.log(r,v,"###usdA usdB");const U=[];let R=new j(0);const be=new j(r).plus(new j(v));[{amount:r,name:"usdA"},{amount:v,name:"usdB"}].forEach(b=>{const K=b.amount,_e=new j(K).gt(0)?new j(K).div(be).mul(100).toString():0,Z=Ue(_e,2);R=R.plus(Z);const ye=Z.split(".");U.push({value:Z,decimal:ye[1],name:b.name})});let J=new j(100).minus(R).toNumber();const V=U.sort((b,K)=>Number(K.decimal)-Number(b.decimal));if(J&&R.gt(0))for(let b=0;b<V.length&&J;b++)V[b].value=new j(V[b].value).plus(.01).toString(),J=new j(J).minus(.01).toNumber();re.value=(ue=V.find(b=>b.name=="usdA"))==null?void 0:ue.value,de.value=(he=V.find(b=>b.name=="usdB"))==null?void 0:he.value};x(()=>[te.value,ae.value],([r,v])=>{r&&v&&ke(r,v)},{immediate:!0});const ce=O(!0);me(()=>{const r=Ne();ce.value=r==="Sui Explorer"});const ge=_(()=>p.value.currentExplorer);return{isShowLoadMore:N,formatNumberDecimal:se,getTimeDifferenceString:ne,isTracitionLoading:k,poolStatsInfo:D,chainName:g,loadMore:W,poolMoreInfo:i,addCommom:y,decimalUi:f,route:u,timeFormat:Ae,amountAUSD:te,amountBUSD:ae,amountA:le,amountB:ie,tokena_ratio:re,tokenb_ratio:de,poolInfo:t,getType:fe,getCoinIcon:M,transactionList:B,refresh:T,clickRefresh:H,changeMode:G,modeList:z,mode:Q,checkNullObj:c,store:p,isLoading:e,getSuicanExplorerUrl:je,getExplorerUrl:w,isSuiExplorer:ce,currentExplorer:ge}}});const d=e=>(De("data-v-060a8806"),e=e(),Re(),e),He={key:0,class:"loading-spin-liquidity loading-global"},Je={class:"analytics-container"},Ke={class:"mode-tab"},Qe=["onClick"],Xe=d(()=>o("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Ye=[Xe],Ze={class:"poolInfo"},xe={class:"info"},eo=d(()=>o("div",{class:"page-tit"},"Pool Info",-1)),oo={class:"info-detail"},so={class:"top"},no=d(()=>o("p",null,"Pool Address",-1)),lo={class:"copy-address"},io=d(()=>o("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),to=[io],ao={class:"pc-tooltip"},ro=["href"],co=d(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),uo=[co],ho={class:"h5-tooltip"},po=["href"],mo=d(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),vo=[mo],fo={class:"center"},ko={class:"item"},go=d(()=>o("p",null,"Pool ID",-1)),bo={class:"item"},_o=d(()=>o("p",null,"Tick Spacing",-1)),yo={class:"item"},Io=d(()=>o("p",null,"Fee Tier",-1)),No={key:0},Ao={key:1},jo={class:"item"},Uo={class:"left"},Oo={alt:""},wo={class:"right"},Co=d(()=>o("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),So=[Co],Eo={key:0,class:"pc-tooltip"},Bo=["href"],Lo=d(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),To=[Lo],Do={key:1,class:"h5-tooltip"},Ro=["href"],qo=d(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),$o=[qo],Mo={class:"item"},Vo={class:"left"},Po={alt:""},Fo={class:"right"},zo=d(()=>o("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),Go=[zo],Wo={key:0,class:"pc-tooltip"},Ho=["href"],Jo=d(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),Ko=[Jo],Qo={key:1,class:"h5-tooltip"},Xo=["href"],Yo=d(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),Zo=[Yo],xo={class:"composition"},es=d(()=>o("div",{class:"page-tit"},"Pool Composition",-1)),os={class:"table-info table-composition"},ss={class:"table"},ns=d(()=>o("thead",{class:"table-header"},[o("tr",{class:"table-tr"},[o("th",null,"Token"),o("th",null,"Amount"),o("th",null,"Amount (USD)"),o("th",null,"Token Ratio")])],-1)),ls={key:0,class:"table-tr"},is={key:0},ts={class:"skeleton-box"},as={key:1},rs={alt:""},ds={key:2},cs={class:"skeleton-box"},us={key:3},hs={key:4},ps={class:"skeleton-box"},ms={key:5},vs={key:6},fs={class:"skeleton-box"},ks={key:7},gs={class:"table-tr"},bs={key:0},_s={class:"skeleton-box"},ys={key:1},Is={alt:""},Ns={key:2},As={class:"skeleton-box"},js={key:3},Us={key:4},Os={class:"skeleton-box"},ws={key:5},Cs={key:6},Ss={class:"skeleton-box"},Es={key:7},Bs={key:1,class:"table-tr"},Ls={key:0},Ts={class:"skeleton-box"},Ds={key:1},Rs={alt:""},qs={key:2},$s={class:"skeleton-box"},Ms={key:3},Vs={key:4},Ps={class:"skeleton-box"},Fs={key:5},zs={key:6},Gs={class:"skeleton-box"},Ws={key:7},Hs={class:"card"},Js={class:"token"},Ks={alt:""},Qs={class:"name"},Xs={class:"symbol"},Ys={class:"label"},Zs={class:"bottom"},xs={class:"row"},en=d(()=>o("div",{class:"left"},"Amount",-1)),on={key:0,class:"skeleton-box"},sn={key:1,class:"right"},nn={class:"row"},ln=d(()=>o("div",{class:"left"},"Amount (USD)",-1)),tn={key:0,class:"skeleton-box"},an={key:1,class:"right"},rn={class:"row"},dn=d(()=>o("div",{class:"left"},"Token Ratio",-1)),cn={key:0,class:"skeleton-box"},un={key:1,class:"right"},hn={class:"card"},pn={class:"token"},mn={alt:""},vn={class:"name"},fn={class:"symbol"},kn={class:"label"},gn={class:"bottom"},bn={class:"row"},_n=d(()=>o("div",{class:"left"},"Amount",-1)),yn={key:0,class:"skeleton-box"},In={key:1,class:"right"},Nn={class:"row"},An=d(()=>o("div",{class:"left"},"Amount (USD)",-1)),jn={key:0,class:"skeleton-box"},Un={key:1,class:"right"},On={class:"row"},wn=d(()=>o("div",{class:"left"},"Token Ratio",-1)),Cn={key:0,class:"skeleton-box"},Sn={key:1,class:"right"},En={class:"transactions"},Bn=d(()=>o("div",{class:"page-tit"},"Transactions",-1)),Ln={class:"table-info table-transactions"},Tn=d(()=>o("thead",{class:"table-header"},[o("tr",{class:"table-tr"},[o("th",null,"Event"),o("th",null,"Amounts"),o("th",null,"Transactions"),o("th",null,"Time")])],-1)),Dn={key:0,class:"loading-global"},Rn={key:1,class:"table-body"},qn={key:0,class:"icon swap-icon","aria-hidden":"true"},$n=d(()=>o("use",{"xlink:href":"#icon-tx_swap"},null,-1)),Mn=[$n],Vn={key:1,class:"icon add-icon","aria-hidden":"true"},Pn=d(()=>o("use",{"xlink:href":"#icon-tx_add"},null,-1)),Fn=[Pn],zn={key:2,class:"icon remove-icon","aria-hidden":"true"},Gn=d(()=>o("use",{"xlink:href":"#icon-tx_remove"},null,-1)),Wn=[Gn],Hn={alt:""},Jn={key:0,class:"jiantou"},Kn=["href"],Qn={key:2,class:"noData"},Xn={key:0,src:ze},Yn={key:1,src:Ge},Zn={class:"h5-table-info h5-transactions-table-info"},xn={class:"row"},el=d(()=>o("div",{class:"left"},"Event",-1)),ol={class:"right"},sl={key:0,class:"icon swap-icon","aria-hidden":"true"},nl=d(()=>o("use",{"xlink:href":"#icon-tx_swap"},null,-1)),ll=[nl],il={key:1,class:"icon add-icon","aria-hidden":"true"},tl=d(()=>o("use",{"xlink:href":"#icon-tx_add"},null,-1)),al=[tl],rl={key:2,class:"icon remove-icon","aria-hidden":"true"},dl=d(()=>o("use",{"xlink:href":"#icon-tx_remove"},null,-1)),cl=[dl],ul={class:"row"},hl=d(()=>o("div",{class:"left"},"Amounts",-1)),pl={class:"right"},ml={alt:""},vl={key:0,class:"jiantou"},fl={class:"row"},kl=d(()=>o("div",{class:"left"},"Transactions",-1)),gl={class:"right"},bl=["href"],_l={class:"row"},yl=d(()=>o("div",{class:"left"},"Time (UTC)",-1)),Il={class:"right"};function Nl(e,k,B,Q,X,p){var z,G,L,W,T,H,t;const F=Be,Y=Ie,I=Le,u=Te,g=Ee("image");return s(),n(q,null,[e.isLoading?(s(),n("div",He,[h(F)])):m("",!0),o("div",Je,[o("div",Ke,[o("div",null,[(s(!0),n(q,null,P(e.modeList,i=>(s(),n("div",{key:i,class:C(["title",e.mode==i.value?"title-active":""]),onClick:D=>e.changeMode(i)},a(i.label),11,Qe))),128))]),(s(),n("svg",{"aria-hidden":"true",class:C(e.refresh?"refresh refresh-icon":"refresh-icon"),onClick:k[0]||(k[0]=(...i)=>e.clickRefresh&&e.clickRefresh(...i))},Ye,2))]),o("div",Ze,[h(Y,{"pool-info":e.poolStatsInfo,mode:e.mode,address:e.route.query.poolAddress},null,8,["pool-info","mode","address"]),o("div",xe,[eo,o("div",oo,[o("div",so,[no,o("div",lo,[o("span",null,a(e.poolInfo&&e.poolInfo.address),1),(s(),n("svg",{class:"icon","aria-hidden":"true",onClick:k[1]||(k[1]=ee(i=>e.store.copy(e.poolInfo&&e.poolInfo.address),["stop"]))},to)),o("div",ao,[h(I,{placement:"top","arrow-point-at-center":""},{title:$(()=>[E(" View on Explorer ")]),default:$(()=>[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"poolAddress",e.poolInfo.address),target:"_blank"},uo,8,ro)]),_:1})]),o("div",ho,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"poolAddress",e.poolInfo.address),target:"_blank"},vo,8,po)])])]),o("div",fo,[o("div",ko,[go,o("span",null,"#"+a(e.poolInfo&&e.poolInfo.object&&((z=e.poolInfo)==null?void 0:z.object.index)),1)]),o("div",bo,[_o,o("span",null,a(e.poolInfo&&((G=e.poolInfo)==null?void 0:G.tick_spacing)),1)]),o("div",yo,[Io,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("span",No,"--%")):(s(),n("span",Ao,a(e.poolInfo&&((L=e.poolInfo)==null?void 0:L.fee)*100)+"%",1))])]),o("div",{class:C(["bottom",(W=e.poolInfo)!=null&&W.needReverse?"bottom-reserve":""])},[o("div",jo,[o("div",Uo,[A(o("img",Oo,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("span",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)]),o("div",wo,[o("span",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address.substr(0,6)),1),E(" ... "),o("span",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address.substr(e.poolInfo.coinA.address.length-6,6)),1),(s(),n("svg",{class:"icon","aria-hidden":"true",onClick:k[2]||(k[2]=ee(i=>e.store.copy(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address),["stop"]))},So)),e.isSuiExplorer?m("",!0):(s(),n("div",Eo,[h(I,{placement:"top",trigger:"hover","arrow-point-at-center":""},{title:$(()=>[E(" View on Explorer ")]),default:$(()=>[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinA.address),target:"_blank"},To,8,Bo)]),_:1})])),e.isSuiExplorer?m("",!0):(s(),n("div",Do,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinA.address),target:"_blank"},$o,8,Ro)]))])]),o("div",Mo,[o("div",Vo,[A(o("img",Po,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),o("span",null,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)]),o("div",Fo,[o("span",null,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address.substr(0,6)),1),E(" ... "),o("span",null,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address.substr(e.poolInfo.coinB.address.length-6,6)),1),(s(),n("svg",{class:"icon","aria-hidden":"true",onClick:k[3]||(k[3]=ee(i=>e.store.copy(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address),["stop"]))},Go)),e.isSuiExplorer?m("",!0):(s(),n("div",Wo,[h(I,{placement:"top","arrow-point-at-center":""},{title:$(()=>[E(" View on Explorer ")]),default:$(()=>[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinB.address),target:"_blank"},Ko,8,Ho)]),_:1})])),e.isSuiExplorer?m("",!0):(s(),n("div",Qo,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinB.address),target:"_blank"},Zo,8,Xo)]))])])],2)])])]),o("div",xo,[es,o("div",os,[o("table",ss,[ns,o("tbody",{class:C(["table-body",e.poolInfo&&e.poolInfo.needReverse?"reserve-th":""])},[(T=e.poolInfo)!=null&&T.needReverse?m("",!0):(s(),n("tr",ls,[("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("td",is,[o("div",ts,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",as,[A(o("img",rs,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("div",null,[o("p",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1),o("span",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.name),1)])])),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",ds,[o("div",cs,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",us,a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountA,e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.decimals))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",hs,[o("div",ps,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ms,"$"+a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountAUSD,2))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",vs,[o("div",fs,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ks,a(("decimalUi"in e?e.decimalUi:l(f))(e.tokena_ratio,2))+"%",1))])),o("tr",gs,[("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("td",bs,[o("div",_s,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ys,[A(o("img",Is,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),o("div",null,[o("p",null,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1),o("span",null,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.name),1)])])),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Ns,[o("div",As,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",js,a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountB,e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.decimals))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Us,[o("div",Os,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ws,"$"+a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountBUSD,2))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Cs,[o("div",Ss,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Es,a(("decimalUi"in e?e.decimalUi:l(f))(e.tokenb_ratio,2))+"%",1))]),(H=e.poolInfo)!=null&&H.needReverse?(s(),n("tr",Bs,[("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("td",Ls,[o("div",Ts,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Ds,[A(o("img",Rs,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("div",null,[o("p",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1),o("span",null,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.name),1)])])),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",qs,[o("div",$s,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Ms,a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountA,e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.decimals))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Vs,[o("div",Ps,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Fs,"$"+a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountAUSD,2))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",zs,[o("div",Gs,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Ws,a(("decimalUi"in e?e.decimalUi:l(f))(e.tokena_ratio,2))+"%",1))])):m("",!0)],2)])]),o("div",{class:C(["h5-table-info",(t=e.poolInfo)!=null&&t.needReverse?"h5-table-info-reserve":""])},[o("div",Hs,[o("div",Js,[A(o("img",Ks,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("div",Qs,[o("div",Xs,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1),o("div",Ys,a(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.name),1)])]),o("div",Zs,[o("div",xs,[en,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",on,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",sn,a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountA,e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.decimals))),1))]),o("div",nn,[ln,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",tn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",an,"$"+a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountAUSD,2))),1))]),o("div",rn,[dn,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",cn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",un,a(("decimalUi"in e?e.decimalUi:l(f))(e.tokena_ratio,2))+"%",1))])])]),o("div",hn,[o("div",pn,[A(o("img",mn,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),o("div",vn,[o("div",fn,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1),o("div",kn,a(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.name),1)])]),o("div",gn,[o("div",bn,[_n,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",yn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",In,a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountB,e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.decimals))),1))]),o("div",Nn,[An,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",jn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",Un,"$"+a(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountBUSD,2))),1))]),o("div",On,[wn,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",Cn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",Sn,a(("decimalUi"in e?e.decimalUi:l(f))(e.tokenb_ratio,2))+"%",1))])])])],2)]),o("div",En,[Bn,o("div",Ln,[o("table",{class:C(["table",e.transactionList&&e.transactionList.length>0?"":"no-date-table"])},[Tn,e.isTracitionLoading?(s(),n("div",Dn,[h(F)])):m("",!0),e.transactionList&&e.transactionList.length>0?(s(),n("tbody",Rn,[(s(!0),n(q,null,P(e.transactionList,(i,D)=>{var S;return s(),n("tr",{key:D,class:"table-tr"},[o("td",null,[i.type=="swap_event"?(s(),n("svg",qn,Mn)):m("",!0),i.type=="add_liquidity_event"?(s(),n("svg",Vn,Fn)):m("",!0),i.type=="remove_liquidity_event"||i.type=="collect_reward_event"||i.type=="collect_fee_event"?(s(),n("svg",zn,Wn)):m("",!0),E(" "+a(e.getType(i.type)),1)]),o("td",null,[o("div",{class:C(["item-box",(i.type=="add_liquidity_event"||i.type=="remove_liquidity_event")&&((S=e.poolInfo)!=null&&S.needReverse)?"reserve-item-box":""])},[(s(!0),n(q,null,P(i.items,(N,M)=>A((s(),n("div",{key:M,class:"item"},[A(o("img",Hn,null,512),[[g,e.getCoinIcon(N)]]),o("p",null,a(("addCommom"in e?e.addCommom:l(y))(("formatNumberDecimal"in e?e.formatNumberDecimal:l(se))(N.amount,2))),1),o("span",null,a(N.symbol),1),i.type=="swap_event"?(s(),n("p",Jn,"→")):m("",!0)])),[[oe,Number(N.amount)!==0]])),128))],2)]),o("td",null,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"tx",i.tx),target:"_blank"},[o("span",null,a(i.tx.substr(0,6))+" ... "+a(i.tx.substr(i.tx.length-4,4)),1)],8,Kn)]),o("td",null,a(("getTimeDifferenceString"in e?e.getTimeDifferenceString:l(ne))(Date.parse(i.block_time))),1)])}),128))])):m("",!0),e.transactionList&&e.transactionList.length<=0&&!e.isLoading?(s(),n("div",Qn,[e.store.theme=="default"?(s(),n("img",Xn)):(s(),n("img",Yn)),o("p",null,a(e.$t("newAdd.noTransactions")),1)])):m("",!0)],2)]),o("div",Zn,[(s(!0),n(q,null,P(e.transactionList,(i,D)=>{var S;return A((s(),n("div",{key:D,class:"card"},[o("div",xn,[el,o("div",ol,[i.type=="swap_event"?(s(),n("svg",sl,ll)):m("",!0),i.type=="add_liquidity_event"?(s(),n("svg",il,al)):m("",!0),i.type=="remove_liquidity_event"||i.type=="collect_reward_event"||i.type=="collect_fee_event"?(s(),n("svg",rl,cl)):m("",!0),E(" "+a(e.getType(i.type)),1)])]),o("div",ul,[hl,o("div",pl,[o("div",{class:C(["item-box",(i.type=="add_liquidity_event"||i.type=="remove_liquidity_event")&&((S=e.poolInfo)!=null&&S.needReverse)?"reserve-item-box":""])},[(s(!0),n(q,null,P(i.items,(N,M)=>A((s(),n("div",{key:M,class:"item"},[o("div",null,[o("div",null,[A(o("img",ml,null,512),[[g,e.getCoinIcon(N)]]),o("p",null,a(("addCommom"in e?e.addCommom:l(y))(("formatNumberDecimal"in e?e.formatNumberDecimal:l(se))(N.amount,2))),1),o("span",null,a(N.symbol),1)]),i.type=="swap_event"?(s(),n("p",vl,"→")):m("",!0)])])),[[oe,Number(N.amount)!==0]])),128))],2)])]),o("div",fl,[kl,o("div",gl,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"tx",i.tx),target:"_blank"},[o("span",null,a(i.tx.substr(0,6))+" ... "+a(i.tx.substr(i.tx.length-4,4)),1)],8,bl)])]),o("div",_l,[yl,o("div",Il,a(("getTimeDifferenceString"in e?e.getTimeDifferenceString:l(ne))(Date.parse(i.block_time))),1)])])),[[oe,e.transactionList&&e.transactionList.length>0]])}),128))]),e.transactionList&&e.transactionList.length>=10&&!e.isLoading&&e.isShowLoadMore?(s(),n("div",{key:0,class:"load-more",onClick:k[4]||(k[4]=i=>e.loadMore())}," Load More ")):m("",!0)])])],64)}const zl=Se(We,[["render",Nl],["__scopeId","data-v-060a8806"]]);export{zl as default};
