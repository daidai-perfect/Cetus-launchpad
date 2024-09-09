import{_ as fe}from"./upgrade-select-input.f6332eb9.js";import{_ as be}from"./upgrade-loading.ec4970f3.js";import{_ as ke}from"./apr-tips.6cf3ea6d.js";import{_ as ye}from"./token-warning.1158b13d.js";import{_ as we,a as me,b as Ae}from"./pools-list-item.7fe29a71.js";import{_ as Ce}from"./nuxt-link.61aa5232.js";import{c as ks}from"./index.4eaea48a.js";import{s as Ps,a as R,f as Le,c as M,d as Z,t as Os,A as Es,g as As}from"./common.bd99f06c.js";import{i as as}from"./import-icon.de3e6c66.js";import{a as Se,z as Ne,b as Oe,r as f,m,q as Ie,A as ds,L as $e,V as je,e as Re,C as Te,o as a,f as n,h as o,F as U,E,G as _,i as h,y as W,D as es,x as p,j,c as Cs,O as Fe,I as Y,w as os,u as v,p as De,k as Be,S as Ue}from"./entry.c4f565bb.js";/* empty css              */import"./index.083526b9.js";import{a as Ve,u as Pe}from"./index.c16364fc.js";import{_ as Ee}from"./precision.c92e897d.js";import{u as Me}from"./autoPool.de261e90.js";import"./decimal.a2826370.js";import{D as Ls}from"./decimal.765d8738.js";import{_ as Ms}from"./icon-selected_3x.873560ed.js";import{_ as qs}from"./icon_on_2x.5e96733d.js";import{_ as zs,a as Hs,b as Js}from"./icon_autopools_2x.bd091a7d.js";import{_ as Ws}from"./icon_farms_2x.7771a0ef.js";import{_ as Gs}from"./farms.21327d2a.js";import{_ as Ks}from"./icon_autopools_2x.bff4164c.js";import{_ as qe}from"./img-no-Positions_2x.41705010.js";import{_ as ze}from"./img-no-Positions_2x.5f55e30e.js";import"./coin-select.ba023a92.js";/* empty css              */import"./icon-tooltip.e5a8c1d7.js";import"./token-warning_2x.73ca4d7b.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./farms.2333dc61.js";import"./icon_fee_2x.0085c4b9.js";import"./icon_rewards_2x.f09b9c8d.js";const He=Se({setup(){const{t:e,locale:A}=Ne(),K=Oe(),Is=f(!1),ys=f(!1),x=f(!1),cs=f(!1),us=f(!1),q=f("VOL"),Q=f(["APR","TVL"]),X=f(!1),T=f(e("tab.all")),ls=f([e("tab.wormhole"),e("tab.celer")]),V=m(()=>{const l=Array.from(new Set(c.value.poolConfigList.flatMap(d=>!d.category||d.category==""?"All":d.category)));return console.log(l,"newArr"),l.length<=1?[]:l}),vs=l=>{c.value.setCurrentPoolTab(l)},F=f([]),I=f(""),s=f(["pools"]),C=Ve(),k=Pe(),y=f(!0),L=f(!1),hs=f(!1),ps=f(!1),ws=f([]),S=f(""),b=m(()=>k),Qs=m(()=>k.theme),c=m(()=>C),Xs=m(()=>k.statsData),Ys=m(()=>c.value.tokensObj),Ss=f(!1);Ie(async()=>{var i,O,w;const l=(w=(O=(i=K==null?void 0:K.currentRoute)==null?void 0:i.value)==null?void 0:O.query)==null?void 0:w.language;l&&xs(l),S.value=A.value,document.addEventListener("click",()=>{us.value=!1,X.value=!1,ps.value=!1});const d=localStorage.getItem(`pools-${ns.value}-selectall`),t=localStorage.getItem(`pools-${ns.value}-farms`),g=localStorage.getItem(`pools-${ns.value}-viewCard`);L.value=d==="true",hs.value=t==="true",x.value=g==="true";const N=localStorage.getItem("selectIncentiveTypeList"),r=N&&JSON.parse(N);N&&r.length>0?$.value=r:$.value=["Mining","Farming","No incentives"],await Ps(1e3),Ss.value=!0}),ds(()=>x.value,async(l,d)=>{l!==d&&(cs.value=!0,await Ps(1500),cs.value=!1)});const{setLang:Zs}=k,xs=l=>{Zs(l),A.value=l},se=(l,d)=>l&&d?Ee.plus(Os(l),Os(d)):l||0,Ns=l=>{let d=0;return l&&l.forEach(t=>{d+=Os(String(t))}),String(Z(String(d),2))},ee=(l=[])=>{console.log("🚀🚀🚀 ~ file: list.vue:1144 ~ watchPools ~ poolList:",l);const d=l&&l.length>0?l:Object.values(c.value.poolsObj),t=[];d.filter(r=>!r.is_closed).forEach(r=>{var gs,fs,bs,Ts,Fs,Ds,Bs,Us,Vs;const i=b.value.addressLpTokens[r.address],O=c.value.poolsObj[r.address];let w,G,z,P,H,rs;i&&(w=i.rewarder_apr[0]?Number(i.rewarder_apr[0].substring(0,i.rewarder_apr[0].length-1)):0,G=i.rewarder_apr[1]?Number(i.rewarder_apr[1].substring(0,i.rewarder_apr[1].length-1)):0,z=i.rewarder_apr[2]?Number(i.rewarder_apr[2].substring(0,i.rewarder_apr[2].length-1)):0,P=w+G+z,i.stable_farming&&i.stable_farming.stable_rewarder.map(ge=>{ge.amount_second>0&&(rs=!0)}),H=i.stable_farming&&i.stable_farming.apr*100);const J=r.needReverse?((fs=c.value.tokensObj[r.coinB.address])==null?void 0:fs.labels)||[]:((gs=c.value.tokensObj[r.coinA.address])==null?void 0:gs.labels)||[],ts=r.needReverse?((bs=c.value.tokensObj[r.coinA.address])==null?void 0:bs.labels)||[]:((Ts=c.value.tokensObj[r.coinB.address])==null?void 0:Ts.labels)||[],is=[...new Set(J.concat(ts))];t.push({...r,liqidity:i?i.pure_tvl_in_usd:"0",...i,vol:i?i.vol_in_usd_24h:"0",apr:i&&i.apr_7day?(Fs=i.apr_7day)==null?void 0:Fs.replace("%",""):"--",fee:r.fee?r.fee:O!=null&&O.fee?O.fee:"--",aprNum:i&&i.apr_7day?String(Number(i.apr_7day.substring(0,i.apr_7day.length-1))+P):"0",rewarder_apr:Ns(i&&i.rewarder_apr),aprTotal:se(i&&i.apr_7day,i&&Ns(i.rewarder_apr)),rewarders0:i&&i.rewarder_apr[0],rewarders1:i&&i.rewarder_apr[1],rewarders2:i&&i.rewarder_apr[2],labels:is,isFarming:r==null?void 0:r.isFarming,fee_24_h:i&&i.fee_24_h?i.fee_24_h:0,isAuthorized:!!((Bs=c.value.tokensObj[(Ds=r==null?void 0:r.token_a)==null?void 0:Ds.address])!=null&&Bs.is_trusted&&((Vs=c.value.tokensObj[(Us=r==null?void 0:r.token_b)==null?void 0:Us.address])!=null&&Vs.is_trusted)),isStableFarming:rs,stableFarmingApr:H,isVaults:i&&i.auto_pool})});let g=[];if(q.value=="APR"?g=t.sort((r,i)=>i.aprNum-r.aprNum):q.value=="VOL"?g=t.sort((r,i)=>i.vol-r.vol):g=t.sort((r,i)=>i.liqidity-r.liqidity),T.value!=e("tab.all")){const r=[];g.forEach(i=>{i.labels.indexOf(T.value)!==-1&&r.push(i)}),F.value=r}else F.value=g;if(I.value){var N=new RegExp("[\\u4E00-\\u9FFF]+","g");if(N.test(I.value)){I.value="";return}const r=F.value.filter(i=>i.symbol.toLowerCase().includes(I.value.toLowerCase()));F.value=r}y.value=!1},_s=m(()=>{if(c.value.tokens&&c.value.tokens.length>0){const l={};return c.value.tokens.forEach(d=>{l[d.address]={...d}}),l}return null}),oe=m(()=>b.value.getStatsError);ds(()=>[_s.value,c.value.poolConfigList,b.value.chainName,b.value.addressLpTokens,oe.value,Ss.value,I.value,q.value,T.value],([l,d,t,g,N,r])=>{r&&(console.log("🚀🚀🚀 ~ file: list.vue:1335 ~ setup ~ newAuthorizedTokensObj:",l),console.log("🚀🚀🚀 ~ file: list.vue:1335 ~ setup ~ newPoolConfigList:",d),console.log("🚀🚀🚀 ~ file: list.vue:1335 ~ setup ~ newChainName:",t),console.log("🚀🚀🚀 ~ file: list.vue:1335 ~ setup ~ getStatsError:",N),console.log("🚀🚀🚀 ~ file: list.vue:1335 ~ setup ~ newAddressLpTokens:",g),l&&d&&(d==null?void 0:d.length)>0&&d[0]&&t&&(t!=null&&t.toLowerCase().includes(d[0].chain))&&(!N&&!M(g)||N)&&ee(d))},{immediate:!0,deep:!0}),$e(),Me();const $s=()=>{y.value=!0,ys.value=!0,k.getStatsData(b.value.chainName,b.value.filterCoinsObj),C.setPoolConfigList(b.value.chainName,b.value.filterCoinsObj),setTimeout(()=>{ys.value=!1},1e3)};ds(()=>b.value.isRefresh,l=>{var t;const d=(t=K==null?void 0:K.currentRoute)==null?void 0:t.value.name.split("-")[1];l&&(!d||d=="list"||d=="")&&$s()});const ae=l=>{const d=[];d.push(q.value),Q.value.forEach((t,g)=>{t!=l&&d.push(t)}),Q.value=d,q.value=l},le=l=>{const d=[];ls.value.forEach((t,g)=>{t==l?d[g]=T.value:d[g]=t}),ls.value=d,T.value=l};ds(()=>k.lang,l=>{S.value=l});const ne=m(()=>ks[b.value.chainName]);ds(()=>b.value.isSelect,l=>{l!=="pools"&&(us.value=!1,X.value=!1)});const re=m(()=>c.value.poolConfigList.filter(d=>d.address==ks[b.value.chainName].newPositionAddress)[0]),te=m(()=>ks[b.value.chainName].hasCreatePool),ns=m(()=>b.value.chainName),ie=()=>{localStorage.setItem(`pools-${ns.value}-selectall`,L.value?"":"true"),L.value=!L.value},de=()=>{localStorage.setItem(`pools-${ns.value}-viewCard`,x.value?"":"true"),x.value=!x.value},ce=l=>{var d;return(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||((d=c.value.tokensObj[l==null?void 0:l.address])==null?void 0:d.logo_url)||(b.value.theme==="default"?as("/image/coins/unknown.png"):as("/image/coins/sui-unknown.png"))},ss=f(null),D=m(()=>ss.value&&ss.value.firstToken?ss.value.firstToken:null),B=m(()=>ss.value&&ss.value.lastToken?ss.value.lastToken:null),js=m(()=>{if(b.value.chainName!=="Sui")return F.value;if(console.log(F.value,"list.value##"),_s.value&&F.value&&F.value.length>0){console.log("🚀🚀🚀 ~ file: list.vue:1471 ~ authorizedpoolList ~ authorizedTokensObj.value:",_s.value);const l=[];return F.value.forEach(t=>{var g,N;if(_s.value[Es((g=t==null?void 0:t.token_a)==null?void 0:g.address)]&&_s.value[Es((N=t==null?void 0:t.token_b)==null?void 0:N.address)])if($.value.includes("Mining")&&t.rewarderInfo&&t.rewarderInfo.length>0){const r=[];t.rewarderInfo.forEach((w,G)=>{var J,ts,is;const z=(J=c.value.tokensObj[w.coinAddress])==null?void 0:J.decimals,P=As(new Ls(w.emissionsEveryDay/Math.pow(10,z)).toDP(2,Ls.ROUND_HALF_UP).toString(),4),H=Number(P)>0?R(P):P,rs=As(Number(P)*c.value.RATES[w.coinAddress]&&c.value.RATES[w.coinAddress].price,4);r.push({...w,logoUrl:(ts=c.value.tokensObj[w.coinAddress])==null?void 0:ts.logoURI,day:H,dayUSD:rs,symbol:(is=c.value.tokensObj[w.coinAddress])==null?void 0:is.symbol,rewarders:t[`rewarders${G}`]&&t[`rewarders${G}`].replace("%",""),rewarder_display:t[`rewarder_display${G+1}`],resultDay:P})});const i=r.filter(w=>w.rewarder_display);let O=[];(!t.rewarderInfo||t.rewarderInfo.length<1||JSON.stringify(t.rewarderInfo)!==JSON.stringify(l))&&(O=i),l.push({...t,rewardes:O})}else($.value.includes("Farming")&&t.isStableFarming||$.value.includes("No incentives")&&t.rewarderInfo&&t.rewarderInfo.length<=0&&!t.isStableFarming)&&l.push(t)}),l.filter((t,g)=>D.value&&B.value?t.coinA.address==D.value.address&&t.coinB.address==B.value.address||t.coinA.address==B.value.address&&t.coinB.address==D.value.address:D.value?t.coinA.address.toLowerCase().includes(D.value.address.toLowerCase())||t.coinB.address.toLowerCase().includes(D.value.address.toLowerCase()):B.value?t.coinA.address.toLowerCase().includes(B.value.address.toLowerCase())||t.coinB.address.toLowerCase().includes(B.value.address.toLowerCase()):l)}return[]}),ms=f([]),ue=["Mining","Farming","No incentives"],$=f(),ve=l=>{if($.value.includes(l)){const d=$.value.indexOf(l);$.value.splice(d,1),console.log(d,"index###")}else $.value.push(l);localStorage.setItem("selectIncentiveTypeList",JSON.stringify($.value))},Rs=m(()=>c.value.poolListPageSize),he=m(()=>c.value.poolListLoading),pe=()=>{var N;let l=[];l=F.value,console.log(l,"##pageList");const d=l.filter((r,i)=>D.value&&B.value?r.coinA.address==D.value.address&&r.coinB.address==B.value.address||r.coinA.address==B.value.address&&r.coinB.address==D.value.address:D.value?r.coinA.address.toLowerCase().includes(D.value.address.toLowerCase())||r.coinB.address.toLowerCase().includes(D.value.address.toLowerCase()):B.value?r.coinA.address.toLowerCase().includes(B.value.address.toLowerCase())||r.coinB.address.toLowerCase().includes(B.value.address.toLowerCase()):l);let t=[];d.forEach((r,i)=>{if(r.isPoolsInfoError)t.push({...r,isAuthorized:!0});else if($.value.includes("Mining")&&r.rewarderInfo&&r.rewarderInfo.length>0){const O=[];if(r.rewarderInfo&&r.rewarderInfo.length>0){r.rewarderInfo.forEach((z,P)=>{var gs,fs,bs;const H=z.coinAddress,rs=(gs=c.value.tokensObj[H])==null?void 0:gs.decimals,J=As(new Ls(z.emissionsEveryDay/Math.pow(10,rs)).toDP(2,Ls.ROUND_HALF_UP).toString(),4),ts=Number(J)>0?R(J):J,is=As(Number(J)*c.value.RATES[H]&&c.value.RATES[H].price,4);O.push({...z,logoUrl:(fs=c.value.tokensObj[H])==null?void 0:fs.logo_url,day:ts,dayUSD:is,symbol:(bs=c.value.tokensObj[H])==null?void 0:bs.symbol,rewarders:r[`rewarders${P}`]&&r[`rewarders${P}`].replace("%",""),rewarder_display:r[`rewarder_display${P+1}`],resultDay:J})});const w=O.filter(z=>z.rewarder_display);let G=[];(!r.rewarderInfo||r.rewarderInfo.length<1||JSON.stringify(r.rewarderInfo)!==JSON.stringify(w))&&(G=w),t.push({...r,rewardes:G})}}else($.value.includes("Farming")&&r.isStableFarming||$.value.includes("No incentives")&&r.rewarderInfo&&r.rewarderInfo.length<=0&&!r.isStableFarming)&&t.push(r)});const g=L.value?t:t.filter(r=>r.isAuthorized);console.log("🚀🚀🚀 ~ file: list.vue:1736 ~ updateLpList ~ isAllPool:",g),ms.value=g.slice(0,Rs.value),console.log("🚀🚀🚀 ~ file: list.vue:1756 ~ updateLpList ~ showList.value:",ms.value),t&&t.length>0&&((N=t[0])!=null&&N.isPoolsInfoError)?k.setPoolAmount(t.length):y.value||(L.value?k.setPoolAmount(t.length):(console.log("🚀🚀🚀 ~ file: list.vue:1760 ~ updateLpList ~ authorizedpoolList.value.length:",js.value.length),k.setPoolAmount(js.value.length)))};je(()=>{k.setPoolAmount("--")}),ds(()=>[D.value,B.value,F.value,L.value,c.value.currentPoolTab,Ss.value,$.value,Rs.value],([l,d,t,g,N,r])=>{var i,O;r&&((l&&((i=c==null?void 0:c.value.tokensObj[l.address])!=null&&i.isSelfBuilt)||d&&((O=c==null?void 0:c.value.tokensObj[d.address])!=null&&O.isSelfBuilt))&&!g?(ms.value=[],k.setPoolAmount(0)):(l||d||t)&&pe())},{deep:!0});const _e=m(()=>b.value.poolAmount!=="--"?4-Number(b.value.poolAmount)%4:0);return{tokensObj:Ys,isCheckOpen:ps,selectedIncentiveType:ve,selectIncentiveTypeList:$,selectedOptions:ws,tabArr:V,changeTab:vs,getLabel:l=>c.value.tokensObj&&c.value.tokensObj[l]&&c.value.tokensObj[l].labels,patchNumber:_e,getRewarderApr:Ns,childTokenSelectRef:ss,firstToken:D,lastToken:B,showList:ms,isFarms:hs,getCoinIcon:ce,isViewCard:x,clickDisplayAll:ie,clickViewCard:de,isSelectAll:L,chainName:ns,hasCreatePool:te,store:b,lpInfo:re,config:ne,t:e,router:K,loading:Is,clickRefresh:$s,refresh:ys,searchKey:I,current:s,addCommom:R,list:F,theme:Qs,statsData:Xs,pools:c,select:us,selectValue:q,selectList:Q,label:X,labelValue:T,labelList:ls,changeSort:ae,changeSortLabel:le,listLoading:y,languageValue:S,isSwitchDisplayMode:cs,formatNumberAddCommom:Le,checkNullObj:M,importIcon:as,decimalUi:Z,incentiveTypesList:ue,poolListLoading:he}}});const u=e=>(De("data-v-030009fe"),e=e(),Be(),e),Je={class:"upgrade-pools-list-container"},We={class:"content-top"},Ge={class:"content-top-left"},Ke={key:0,class:"tag-list"},Qe=["onClick"],Xe={class:"content-top-right"},Ye={class:"radio"},Ze={key:0,src:Ms},xe=u(()=>o("span",null,"Display all pools",-1)),so={class:"check-box"},eo=u(()=>o("span",null,"Incentive types",-1)),oo=u(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),ao=[oo],lo={key:0,class:"select-list"},no=["onClick"],ro={class:"radio"},to={key:0,src:Ms},io={class:"search-select-box"},co=u(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),uo=[co],vo={key:0,class:"select-list"},ho=["onClick"],po={class:"search-select-box"},_o=u(()=>o("img",{src:qs,alt:""},null,-1)),go=u(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),fo=[go],bo={key:0,class:"select-list"},ko=["onClick"],yo=u(()=>o("img",{src:qs,alt:""},null,-1)),wo={key:0,"aria-hidden":"true",class:"cardIcon"},mo=u(()=>o("use",{"xlink:href":"#icon-icon-card"},null,-1)),Ao=[mo],Co={key:1,"aria-hidden":"true",class:"listIcon"},Lo=u(()=>o("use",{"xlink:href":"#icon-icon-list1"},null,-1)),So=[Lo],No={key:0,class:"upgrade-loading"},Oo={key:1,class:"table-contianer"},Io={class:"table"},$o={class:"table-header"},jo={class:"table-tr"},Ro=u(()=>o("th",null,"Pools",-1)),To=u(()=>o("th",null,"Liquidity",-1)),Fo=u(()=>o("th",null,"Volume (24H)",-1)),Do=u(()=>o("th",null,"Fees (24H)",-1)),Bo=u(()=>o("th",null,"Mining Rewards",-1)),Uo={class:"hover-box"},Vo={class:"apr-hover-content"},Po=u(()=>o("th",null,"Action",-1)),Eo={class:"table-body"},Mo=["onClick"],qo={class:"token"},zo={class:"img-box"},Ho={class:"img-box img-last-box"},Jo={class:"name"},Wo={class:"top"},Go={class:"token-name"},Ko={class:"tokena"},Qo={class:"tokenb"},Xo={class:"fee-tier-top"},Yo={key:0,class:"isFarming farming-logo"},Zo=u(()=>o("img",{class:"default-img",src:Hs,alt:""},null,-1)),xo=u(()=>o("img",{class:"hover-img",src:Js,alt:""},null,-1)),sa=u(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),ea=[Zo,xo,sa],oa={key:1,class:"isFarming vault-logo"},aa=u(()=>o("img",{class:"default-img",src:Ws,alt:""},null,-1)),la=u(()=>o("img",{class:"hover-img",src:Gs,alt:""},null,-1)),na=u(()=>o("div",{class:"hover-text"},"Farm rewards available",-1)),ra={key:2,class:"isFarming vault-logo"},ta=u(()=>o("img",{class:"default-img",src:zs,alt:""},null,-1)),ia=u(()=>o("img",{class:"hover-img",src:Ks,alt:""},null,-1)),da=u(()=>o("div",{class:"hover-text"},"Vault available",-1)),ca={class:"label-all"},ua={key:0},va={key:0},ha={class:"skeleton-box"},pa={key:1},_a={key:2},ga={class:"skeleton-box"},fa={key:3},ba={key:4},ka={class:"skeleton-box"},ya={key:5},wa={key:6},ma={class:"skeleton-box"},Aa={key:7},Ca={class:"reward-token-box"},La={class:"rewards-hover"},Sa={alt:""},Na={key:8},Oa={key:9},Ia={class:"skeleton-box"},$a={class:"hover-box"},ja={class:"apr"},Ra={key:0,class:"farming-apr"},Ta=u(()=>o("br",null,null,-1)),Fa={key:1,class:"apr-hover-content"},Da={class:"action"},Ba={key:0},Ua={colspan:"7"},Va={class:"loading-box"},Pa={key:2,class:"item-container"},Ea={class:"loading-box"},Ma={class:"h5-pool-item"},qa={class:"token"},za={class:"token"},Ha={class:"img-box"},Ja={class:"img-box img-last-box"},Wa={class:"name"},Ga={class:"top"},Ka={class:"token-name"},Qa={class:"tokena"},Xa={class:"tokenb"},Ya={class:"fee-tier-top"},Za={key:0,class:"isFarming farming-logo"},xa=u(()=>o("img",{class:"default-img",src:Hs,alt:""},null,-1)),sl=u(()=>o("img",{class:"hover-img",src:Js,alt:""},null,-1)),el=u(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),ol=[xa,sl,el],al={key:1,class:"isFarming vault-logo"},ll=u(()=>o("img",{class:"default-img",src:Ws,alt:""},null,-1)),nl=u(()=>o("img",{class:"hover-img",src:Gs,alt:""},null,-1)),rl=u(()=>o("div",{class:"hover-text"},"Farm rewards available",-1)),tl={key:2,class:"isFarming vault-logo"},il=u(()=>o("img",{class:"default-img",src:zs,alt:""},null,-1)),dl=u(()=>o("img",{class:"hover-img",src:Ks,alt:""},null,-1)),cl=u(()=>o("div",{class:"hover-text"},"Vault available",-1)),ul={class:"label-all"},vl={key:0},hl={class:"bottom"},pl={class:"row"},_l=u(()=>o("div",{class:"left"},"APR (24H)",-1)),gl={key:0,class:"right"},fl={style:{color:"#fff"}},bl={key:0},kl={class:"apr-hover-content"},yl={class:"row"},wl=u(()=>o("div",{class:"left"},"Liquidity",-1)),ml={key:0,class:"right"},Al={key:1,class:"right"},Cl={class:"row"},Ll=u(()=>o("div",{class:"left"},"Volume (24H)",-1)),Sl={key:0,class:"right"},Nl={key:1,class:"right"},Ol={class:"row"},Il=u(()=>o("div",{class:"left"},"Fees (24H)",-1)),$l={key:0,class:"right"},jl={key:1,class:"right"},Rl={key:0,class:"row"},Tl=u(()=>o("div",{class:"left"},"Mining Rewards",-1)),Fl={key:0,class:"right"},Dl={key:1,class:"right reward-right"},Bl={class:"rewards-hover"},Ul={alt:""},Vl={key:0,class:"loading-box"},Pl={key:3,class:"no-data"},El={key:0,src:qe},Ml={key:1,src:ze};function ql(e,A,K,Is,ys,x){const cs=fe,us=be,q=ke,Q=ye,X=we,T=Ce,ls=me,V=Ue,vs=Fe,F=Ae,I=Te("image");return a(),n("div",Je,[o("div",We,[o("div",Ge,[e.tabArr.length>1?(a(),n("div",Ke,[(a(!0),n(U,null,E(e.tabArr,(s,C)=>(a(),n("div",{key:C,class:W(["tag-item",s==e.pools.currentPoolTab?`tag-active tab-num-${e.tabArr.length}`:`tab-num-${e.tabArr.length}`]),onClick:k=>e.changeTab(s)},p(s),11,Qe))),128))])):_("",!0),h(cs,{ref:"childTokenSelectRef"},null,512)]),o("div",Xe,[o("div",{class:W(["tab-item",e.isSelectAll?"tab-item-active":""]),onClick:A[0]||(A[0]=es(s=>e.clickDisplayAll(),["stop"]))},[o("div",Ye,[e.isSelectAll&&e.store.theme=="sui"?(a(),n("img",Ze)):_("",!0)]),xe],2),o("div",so,[o("div",{class:"search-select search-label",onClick:A[1]||(A[1]=es(()=>{e.isCheckOpen=!e.isCheckOpen,e.label=!1,e.select=!1},["stop"]))},[eo,(a(),n("svg",{"aria-hidden":"true",class:W(e.isCheckOpen?"show-icon icon":"icon")},ao,2)),e.isCheckOpen?(a(),n("div",lo,[(a(!0),n(U,null,E(e.incentiveTypesList,s=>(a(),n("div",{key:s,class:"select-menu-item",onClick:es(C=>e.selectedIncentiveType(s),["stop"])},[o("div",ro,[e.selectIncentiveTypeList.includes(s)?(a(),n("img",to)):_("",!0)]),o("span",null,p(s),1)],8,no))),128))])):_("",!0)])]),o("div",io,[o("div",{class:"search-select search-label",onClick:A[2]||(A[2]=es(()=>{e.store.setIsSelect("pools"),e.isCheckOpen=!1,e.label=!e.label,e.select=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.label")),1),o("div",null,[j(p(e.labelValue)+" ",1),(a(),n("svg",{"aria-hidden":"true",class:W(e.label?"show-icon icon":"icon")},uo,2))]),e.label?(a(),n("div",vo,[(a(!0),n(U,null,E(e.labelList,(s,C)=>(a(),n("div",{key:C,class:"select-menu-item",onClick:k=>e.changeSortLabel(s)},p(s),9,ho))),128))])):_("",!0)])]),o("div",po,[o("div",{class:"search-select",onClick:A[3]||(A[3]=es(()=>{e.store.setIsSelect("pools"),e.isCheckOpen=!1,e.select=!e.select,e.label=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.sortBy")),1),o("div",null,[j(p(e.selectValue)+" ",1),_o,(a(),n("svg",{"aria-hidden":"true",class:W(e.select?"show-icon icon":"icon")},fo,2))]),e.select?(a(),n("div",bo,[(a(!0),n(U,null,E(e.selectList,(s,C)=>(a(),n("div",{key:C,class:"select-menu-item",onClick:k=>e.changeSort(s)},[j(p(s)+" ",1),yo],8,ko))),128))])):_("",!0)])]),o("div",{class:"change-view",onClick:A[4]||(A[4]=s=>e.clickViewCard())},[e.isViewCard&&e.current[0]=="pools"?(a(),n("svg",wo,Ao)):(a(),n("svg",Co,So))])])]),e.listLoading||e.isSwitchDisplayMode?(a(),n("div",No,[h(us,{loading:e.listLoading||e.isSwitchDisplayMode,type:e.isViewCard?"poolsCard":"poolsList"},null,8,["loading","type"])])):_("",!0),!e.isSwitchDisplayMode&&!e.isViewCard&&!e.listLoading?(a(),n("div",Oo,[o("table",Io,[o("thead",$o,[o("tr",jo,[Ro,To,Fo,Do,Bo,o("th",null,[o("span",Uo,[j(" APR (24H) "),o("div",Vo,[h(q,{class:"noHover apr-hover-con"})])])]),Po])]),o("tbody",Eo,[(a(!0),n(U,null,E(e.showList,s=>{var C,k,y,L,hs,ps,ws;return a(),n("tr",{key:s.address,class:"table-tr",onClick:S=>s.needReverse?e.router.push(`/liquidity/deposit?poolAddress=${s.address}`):e.router.push(`/liquidity/deposit?poolAddress=${s.address}`)},[o("td",null,[o("div",qo,[o("div",zo,[Y(o("img",null,null,512),[[I,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),h(Q,{address:s.needReverse?(k=s.coinB)==null?void 0:k.address:(C=s.coinA)==null?void 0:C.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",Ho,[Y(o("img",null,null,512),[[I,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),h(Q,{address:s.needReverse?(L=s.coinA)==null?void 0:L.address:(y=s.coinB)==null?void 0:y.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",Jo,[o("div",Wo,[o("p",Go,[o("span",Ko,[j(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),h(X,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),j(" - "),o("span",Qo,[j(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),h(X,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Xo,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),n("div",Yo,ea)):_("",!0),s.isStableFarming?(a(),n("div",oa,[h(T,{to:"/farms",onClick:A[5]||(A[5]=es(()=>{},["stop"]))},{default:os(()=>[aa,la]),_:1}),na])):_("",!0),e.chainName=="Sui"&&s.isVaults&&("config"in e?e.config:v(ks)).hasVault?(a(),n("div",ra,[h(T,{to:"/vaults",onClick:A[6]||(A[6]=es(()=>{},["stop"]))},{default:os(()=>[ta,ia]),_:1}),da])):_("",!0),h(ls,{"token-a":s.coinA.address,"token-b":s.coinB.address},null,8,["token-a","token-b"])]),o("div",ca,[(a(!0),n(U,null,E(s.labels,(S,b)=>(a(),n("div",{key:b,class:W(["label",S])},[S!=="Native"?(a(),n("span",ua,p(S),1)):_("",!0)],2))),128))])])])]),("checkNullObj"in e?e.checkNullObj:v(M))(e.store.statsData)?(a(),n("td",va,[o("div",ha,[h(V,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),n("td",pa,p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(R))(("decimalUi"in e?e.decimalUi:v(Z))(s.liqidity,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:v(M))(e.store.statsData)?(a(),n("td",_a,[o("div",ga,[h(V,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),n("td",fa,p(Number(s.vol)!==0&&Number(s.vol)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(R))(("decimalUi"in e?e.decimalUi:v(Z))(s.vol,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:v(M))(e.store.statsData)?(a(),n("td",ba,[o("div",ka,[h(V,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),n("td",ya,p(Number(s.fee_24_h)!==0&&Number(s.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(R))(("decimalUi"in e?e.decimalUi:v(Z))(s.fee_24_h,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:v(M))(e.store.statsData)?(a(),n("td",wa,[o("div",ma,[h(V,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),n("td",Aa,[o("div",Ca,[(a(!0),n(U,null,E(s.rewardes,S=>(a(),n("div",{key:S.address,class:W(["rewarder-token",S.day===0?"reward-none":""])},[Y(o("img",null,null,512),[[I,S.logoUrl]]),o("div",La,[Y(o("img",Sa,null,512),[[I,S.logoUrl?S.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:v(as))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:v(as))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${S.day} ${S.symbol} per day`),1)])],2))),128))])])):(a(),n("td",Na," ")),("checkNullObj"in e?e.checkNullObj:v(M))(e.store.statsData)?(a(),n("td",Oa,[o("div",Ia,[h(V,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),n("td",{key:10,class:W(s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(hs=s==null?void 0:s.stable_farming)!=null&&hs.stable_farming_pool?"":"noCursor")},[o("span",$a,[o("i",ja,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:v(R))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:v(R))(s.apr,2))+"%",1),(ps=s==null?void 0:s.stable_farming)!=null&&ps.stable_farming_pool?(a(),n("i",Ra,[Ta,j(" "+p(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:v(R))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)])):_("",!0),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(ws=s==null?void 0:s.stable_farming)!=null&&ws.stable_farming_pool?(a(),n("div",Fa,[h(q,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):_("",!0)])],2)),o("td",null,[o("div",Da,[s.needReverse?(a(),Cs(T,{key:0,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:os(()=>[j("+")]),_:2},1032,["to"])):(a(),Cs(T,{key:1,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:os(()=>[j("+")]),_:2},1032,["to"]))])])],8,Mo)}),128)),e.poolListLoading?(a(),n("tr",Ba,[o("td",Ua,[o("div",Va,[h(vs)])])])):_("",!0)])])])):_("",!0),!e.isSwitchDisplayMode&&e.isViewCard&&!e.listLoading?(a(),n("div",Pa,[e.showList&&e.showList.length>0?(a(),n(U,{key:0},[(a(!0),n(U,null,E(e.showList,(s,C)=>(a(),Cs(F,{key:C,"l-item":s,"is-select-all":e.isSelectAll,"is-farms":e.isFarms},null,8,["l-item","is-select-all","is-farms"]))),128)),(a(!0),n(U,null,E(e.patchNumber,s=>(a(),n("div",{key:s,class:"patch-item"}))),128))],64)):_("",!0),o("div",Ea,[e.poolListLoading?(a(),Cs(vs,{key:0})):_("",!0)])])):_("",!0),o("div",Ma,[(a(!0),n(U,null,E(e.showList,s=>{var C,k;return a(),n("div",{key:s.address,class:"item"},[o("div",qa,[o("div",za,[o("div",Ha,[Y(o("img",null,null,512),[[I,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),h(Q,{address:s.needReverse?s.coinB.address:s.coinA.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",Ja,[Y(o("img",null,null,512),[[I,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),h(Q,{address:s.needReverse?s.coinA.address:s.coinB.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",Wa,[o("div",Ga,[o("p",Ka,[o("span",Qa,[j(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),h(X,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),j(" - "),o("span",Xa,[j(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),h(X,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Ya,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),n("div",Za,ol)):_("",!0),s.isStableFarming?(a(),n("div",al,[h(T,{to:"/farms"},{default:os(()=>[ll,nl]),_:1}),rl])):_("",!0),e.chainName=="Sui"&&s.isVaults&&("config"in e?e.config:v(ks)).hasVault?(a(),n("div",tl,[h(T,{to:"/vaults"},{default:os(()=>[il,dl]),_:1}),cl])):_("",!0),h(ls,{"token-a":s.coinA.address,"token-b":s.coinB.address},null,8,["token-a","token-b"])]),o("div",ul,[(a(!0),n(U,null,E(s.labels,(y,L)=>(a(),n("div",{key:L,class:W(["label",y])},[y!=="Native"?(a(),n("span",vl,p(y),1)):_("",!0)],2))),128))])])])]),o("div",hl,[o("div",pl,[_l,("checkNullObj"in e?e.checkNullObj:v(M))(e.store.statsData)?(a(),n("div",gl,[h(V,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),n("div",{key:1,class:W(["right theme-right",s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(C=s==null?void 0:s.stable_farming)!=null&&C.stable_farming_pool?"":"noCursor"])},[o("div",null,[o("span",fl,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:v(R))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:v(R))(s.apr,2))+"% ",1),j("   "),(k=s==null?void 0:s.stable_farming)!=null&&k.stable_farming_pool?(a(),n("span",bl,p(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"<0.01":`+${("addCommom"in e?e.addCommom:v(R))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):_("",!0)]),o("div",kl,[h(q,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2))]),o("div",yl,[wl,("checkNullObj"in e?e.checkNullObj:v(M))(e.store.statsData)?(a(),n("div",ml,[h(V,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),n("div",Al,p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(R))(("decimalUi"in e?e.decimalUi:v(Z))(s.liqidity,2),2)}`),1))]),o("div",Cl,[Ll,("checkNullObj"in e?e.checkNullObj:v(M))(e.store.statsData)?(a(),n("div",Sl,[h(V,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),n("div",Nl,p(Number(s.vol)!==0&&Number(s.vol)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(R))(("decimalUi"in e?e.decimalUi:v(Z))(s.vol,2),2)}`),1))]),o("div",Ol,[Il,("checkNullObj"in e?e.checkNullObj:v(M))(e.store.statsData)?(a(),n("div",$l,[h(V,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),n("div",jl,p(Number(s.fee_24_h)!==0&&Number(s.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(R))(("decimalUi"in e?e.decimalUi:v(Z))(s.fee_24_h,2),2)}`),1))]),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),n("div",Rl,[Tl,("checkNullObj"in e?e.checkNullObj:v(M))(e.store.statsData)?(a(),n("div",Fl,[h(V,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),n("div",Dl,[(a(!0),n(U,null,E(s.rewardes,y=>{var L;return a(),n("div",{key:y.address,class:"rewarder-token"},[Y(o("img",null,null,512),[[I,e.getCoinIcon((L=e.pools)==null?void 0:L.tokensObj[y.coinAddress])]]),o("div",Bl,[Y(o("img",Ul,null,512),[[I,y.logoUrl?y.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:v(as))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:v(as))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${y.day} ${y.symbol} per day`),1)])])}),128))])):_("",!0)])):_("",!0)]),h(T,{to:`/liquidity/deposit?poolAddress=${s.address}`,class:"add-btn"},{default:os(()=>[j("+ Add Liquidity")]),_:2},1032,["to"])])}),128)),e.poolListLoading?(a(),n("div",Vl,[h(vs)])):_("",!0)]),!e.isSwitchDisplayMode&&e.store.poolAmount!=="--"&&e.store.poolAmount<=0&&!e.listLoading?(a(),n("div",Pl,[e.theme=="default"?(a(),n("img",El)):(a(),n("img",Ml)),o("span",null,p(e.$t("common.poolsNotFound")),1)])):_("",!0)])}const Ln=Re(He,[["render",ql],["__scopeId","data-v-030009fe"]]);export{Ln as default};
