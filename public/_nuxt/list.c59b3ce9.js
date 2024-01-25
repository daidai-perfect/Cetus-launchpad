import{_ as ge}from"./upgrade-select-input.e4aa655d.js";import{_ as _e}from"./upgrade-loading.66b0c11b.js";import{_ as fe}from"./apr-tips.ed13ee2e.js";import{_ as be}from"./coin-tips.33e9cdab.js";import{_ as ke}from"./nuxt-link.443ec7bb.js";import{_ as we,a as Vs,b as Us,c as Ps}from"./pools-list-item.11646f48.js";import{u as ye,c as ws}from"./sha256.24785cd7.js";import{u as me,a as j,L as Ae,c as E,d as x,k as Ss,j as ms,l as Ce}from"./pool.982f9ef8.js";import{i as is}from"./import-icon.de3e6c66.js";import{a as Se,y as Oe,b as Ie,r as k,l as m,H as Ne,q as ds,m as je,X as Le,e as $e,s as Fe,o as a,f as r,h as o,F as D,E as U,x as g,i as w,A as P,z as ks,v as p,j as N,t as Z,u as h,c as Os,w as Is,p as Be,k as Re,M as Te}from"./entry.7346a543.js";/* empty css              */import{p as De}from"./precision.a7a6c57b.js";import{u as Ve}from"./autoPool.b9f10ada.js";import{u as Ue}from"./farms.dd361c54.js";import{_ as Es}from"./icon-selected_3x.09e9a6f0.js";import{_ as Ms}from"./icon_on_2x.5e96733d.js";import{_ as qs,a as Hs}from"./farms.1c413ca7.js";import{a as zs}from"./coin-select.d7e5cd90.js";import{_ as Pe}from"./img-no-Positions_2x.eae67cf5.js";import{_ as Ee}from"./img-no-Positions_2x.5770aedb.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./icon_rewards_2x.d35fa2d2.js";/* empty css              */import"./decimal.0bdeb344.js";/* empty css              */const Me=Se({setup(){const{t:e,locale:R}=Oe(),K=Ie(),Ns=k(!1),ys=k(!1),ss=k(!1),_s=k(!1),fs=k(!1),M=k("VOL"),X=k(["APR","TVL"]),L=k(!1),q=k(e("tab.all")),bs=k([e("tab.wormhole"),e("tab.celer")]),H=m(()=>{const l=Array.from(new Set(u.value.poolConfigList.flatMap(d=>!d.category||d.category==""?"All":d.category)));return console.log(l,"newArr"),l.length<=1?[]:l}),s=l=>{u.value.setCurrentPoolTab(l)},_=k([]),O=k(""),es=k(["pools"]),G=me(),A=ye(),z=k(!0),T=k(!1),Q=k(!1),Y=k(!1),os=k([]),W=k(""),f=m(()=>A),as=m(()=>A.theme),u=m(()=>G),I=m(()=>A.statsData);Ne(()=>{var t,S,b;const l=(b=(S=(t=K==null?void 0:K.currentRoute)==null?void 0:t.value)==null?void 0:S.query)==null?void 0:b.language;l&&cs(l),W.value=R.value,document.addEventListener("click",()=>{fs.value=!1,L.value=!1,Y.value=!1});const d=localStorage.getItem(`pools-${vs.value}-selectall`),n=localStorage.getItem(`pools-${vs.value}-farms`),i=localStorage.getItem(`pools-${vs.value}-viewCard`);T.value=d==="true",Q.value=n==="true",ss.value=i==="true";const V=localStorage.getItem("selectIncentiveTypeList"),c=V&&JSON.parse(V);V&&c.length>0?C.value=c:C.value=["Mining","Farming","No incentives"]}),ds(()=>ss.value,async(l,d)=>{l!==d&&(_s.value=!0,await Ce(1500),_s.value=!1)}),ds(()=>f.value.chainName,(l,d)=>{l&&A.getStatsData(l,f.value.filterCoinsObj)},{immediate:!0});const{setLang:y}=A,cs=l=>{y(l),R.value=l},Ws=(l,d)=>l&&d?De.plus(Ss(l),Ss(d)):l||0,As=l=>{let d=0;return l&&l.forEach(n=>{d+=Ss(String(n))}),String(x(String(d),2))},Ks=(l=[])=>{const d=l&&l.length>0?l:Object.values(u.value.poolsObj),n=[];console.log(d,"====>newPoolList"),d.filter(c=>!c.is_closed).forEach(c=>{var Ls,$s,Fs,Bs,Rs,Ts,Ds;const t=f.value.addressLpTokens[c.address],S=u.value.poolsObj[c.address];let b,J,hs,B,ps,gs;t&&(b=t.rewarder_apr[0]?Number(t.rewarder_apr[0].substring(0,t.rewarder_apr[0].length-1)):0,J=t.rewarder_apr[1]?Number(t.rewarder_apr[1].substring(0,t.rewarder_apr[1].length-1)):0,hs=t.rewarder_apr[2]?Number(t.rewarder_apr[2].substring(0,t.rewarder_apr[2].length-1)):0,B=b+J+hs,t.stable_farming&&t.stable_farming.stable_rewarder.map(pe=>{pe.amount_second>0&&(gs=!0)}),ps=t.stable_farming&&t.stable_farming.apr*100);const rs=c.needReverse?(($s=u.value.tokensObj[c.coinB.address])==null?void 0:$s.labels)||[]:((Ls=u.value.tokensObj[c.coinA.address])==null?void 0:Ls.labels)||[],ns=c.needReverse?((Fs=u.value.tokensObj[c.coinA.address])==null?void 0:Fs.labels)||[]:((Bs=u.value.tokensObj[c.coinB.address])==null?void 0:Bs.labels)||[],ts=[...new Set(rs.concat(ns))];n.push({...c,liqidity:t?t.tvl_in_usd:"0",...t,vol:t?t.vol_in_usd_24h:"0",apr:t&&t.apr_7day?(Rs=t.apr_7day)==null?void 0:Rs.replace("%",""):"--",fee:c.fee?c.fee:S!=null&&S.fee?S.fee:"--",aprNum:t&&t.apr_7day?String(Number(t.apr_7day.substring(0,t.apr_7day.length-1))+B):"0",rewarder_apr:As(t&&t.rewarder_apr),aprTotal:Ws(t&&t.apr_7day,t&&As(t.rewarder_apr)),rewarders0:t&&t.rewarder_apr[0],rewarders1:t&&t.rewarder_apr[1],rewarders2:t&&t.rewarder_apr[2],labels:ts,isFarming:c==null?void 0:c.isFarming,fee_24_h:t&&t.fee_24_h?t.fee_24_h:0,isAuthorized:!!(us.value[(Ts=c==null?void 0:c.token_a)==null?void 0:Ts.address]&&us.value[(Ds=c==null?void 0:c.token_b)==null?void 0:Ds.address]),isStableFarming:gs,stableFarmingApr:ps})});let i=[];if(M.value=="APR"?i=n.sort((c,t)=>t.aprNum-c.aprNum):M.value=="VOL"?i=n.sort((c,t)=>t.vol-c.vol):i=n.sort((c,t)=>t.liqidity-c.liqidity),q.value!=e("tab.all")){const c=[];i.forEach(t=>{t.labels.indexOf(q.value)!==-1&&c.push(t)}),_.value=c}else _.value=i;if(O.value){var V=new RegExp("[\\u4E00-\\u9FFF]+","g");if(V.test(O.value)){O.value="";return}const c=_.value.filter(t=>t.symbol.toLowerCase().includes(O.value.toLowerCase()));_.value=c}console.log(_.value,"=====>>>>list.value"),z.value=!1},us=m(()=>{if(u.value.tokens&&u.value.tokens.length>0){const l={};return u.value.tokens.forEach(d=>{l[d.address]={...d}}),l}return null});ds(()=>[us.value,u.value.poolConfigList,f.value.chainName,f.value.addressLpTokens,O.value,M.value,q.value],([l,d,n,i])=>{l&&d&&(d==null?void 0:d.length)>0&&d[0]&&n&&(n!=null&&n.toLowerCase().includes(d[0].chain))&&Ks(d)},{immediate:!0,deep:!0}),je();const Xs=Ve(),js=()=>{z.value=!0,ys.value=!0,A.getStatsData(f.value.chainName,f.value.filterCoinsObj),G.setPoolConfigList(f.value.chainName,f.value.filterCoinsObj),setTimeout(()=>{ys.value=!1},1e3)};ds(()=>f.value.isRefresh,l=>{var n;const d=(n=K==null?void 0:K.currentRoute)==null?void 0:n.value.name.split("-")[1];l&&(!d||d=="list"||d=="")&&js()});const Gs=l=>{const d=[];d.push(M.value),X.value.forEach((n,i)=>{n!=l&&d.push(n)}),X.value=d,M.value=l},Qs=l=>{const d=[];bs.value.forEach((n,i)=>{n==l?d[i]=q.value:d[i]=n}),bs.value=d,q.value=l};ds(()=>A.lang,l=>{W.value=l});const Ys=m(()=>ws[f.value.chainName]);ds(()=>f.value.isSelect,l=>{l!=="pools"&&(fs.value=!1,L.value=!1)});const Zs=m(()=>u.value.poolConfigList.filter(d=>d.address==ws[f.value.chainName].newPositionAddress)[0]),xs=m(()=>ws[f.value.chainName].hasCreatePool),vs=m(()=>f.value.chainName),se=()=>{localStorage.setItem(`pools-${vs.value}-selectall`,T.value?"":"true"),T.value=!T.value},ee=()=>{localStorage.setItem(`pools-${vs.value}-viewCard`,ss.value?"":"true"),ss.value=!ss.value},oe=l=>{var d;return(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||((d=u.value.tokensObj[l==null?void 0:l.address])==null?void 0:d.logo_url)||(f.value.theme==="default"?is("/image/coins/unknown.png"):is("/image/coins/sui-unknown.png"))},ls=k(null),$=m(()=>ls.value&&ls.value.firstToken?ls.value.firstToken:null),F=m(()=>ls.value&&ls.value.lastToken?ls.value.lastToken:null),ae=m(()=>{if(f.value.chainName!=="Sui")return _.value;if(console.log(_.value,"list.value##"),us.value&&_.value&&_.value.length>0){const l=[];return _.value.forEach(n=>{var i,V;if(us.value[(i=n==null?void 0:n.token_a)==null?void 0:i.address]&&us.value[(V=n==null?void 0:n.token_b)==null?void 0:V.address]){if(console.log(n.rewarderInfo&&n.rewarderInfo.length>0,"item.rewarderInfo && item.rewarderInfo.length > 0"),C.value.includes("Mining")&&n.rewarderInfo&&n.rewarderInfo.length>0){const c=[];n.rewarderInfo.forEach((b,J)=>{var rs,ns,ts;const hs=(rs=u.value.tokensObj[b.coinAddress])==null?void 0:rs.decimals,B=ms(b.emissionsEveryDay/Math.pow(10,hs),4),ps=Number(B)>0?j(B):B,gs=ms(Number(B)*u.value.RATES[b.coinAddress]&&u.value.RATES[b.coinAddress].price,4);c.push({...b,logoUrl:(ns=u.value.tokensObj[b.coinAddress])==null?void 0:ns.logoURI,day:ps,dayUSD:gs,symbol:(ts=u.value.tokensObj[b.coinAddress])==null?void 0:ts.symbol,rewarders:n[`rewarders${J}`]&&n[`rewarders${J}`].replace("%",""),rewarder_display:n[`rewarder_display${J+1}`],resultDay:B})});const t=c.filter(b=>b.rewarder_display);let S=[];(!n.rewarderInfo||n.rewarderInfo.length<1||JSON.stringify(n.rewarderInfo)!==JSON.stringify(l))&&(S=t),l.push({...n,rewardes:S})}else(C.value.includes("Farming")&&n.isStableFarming||C.value.includes("No incentives")&&n.rewarderInfo&&n.rewarderInfo.length<=0&&!n.isStableFarming)&&l.push(n);console.log(l,"###result")}}),l.filter((n,i)=>$.value&&F.value?n.coinA.address==$.value.address&&n.coinB.address==F.value.address||n.coinA.address==F.value.address&&n.coinB.address==$.value.address:$.value?n.coinA.address.toLowerCase().includes($.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes($.value.address.toLowerCase()):F.value?n.coinA.address.toLowerCase().includes(F.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes(F.value.address.toLowerCase()):l)}return[]}),Cs=k([]),le=["Mining","Farming","No incentives"],C=k(),re=l=>{if(C.value.includes(l)){const d=C.value.indexOf(l);C.value.splice(d,1),console.log(d,"index###")}else C.value.push(l);localStorage.setItem("selectIncentiveTypeList",JSON.stringify(C.value))},ne=()=>{let l=[];l=_.value,console.log(l,"##pageList");const d=l.filter((i,V)=>$.value&&F.value?i.coinA.address==$.value.address&&i.coinB.address==F.value.address||i.coinA.address==F.value.address&&i.coinB.address==$.value.address:$.value?i.coinA.address.toLowerCase().includes($.value.address.toLowerCase())||i.coinB.address.toLowerCase().includes($.value.address.toLowerCase()):F.value?i.coinA.address.toLowerCase().includes(F.value.address.toLowerCase())||i.coinB.address.toLowerCase().includes(F.value.address.toLowerCase()):l);let n=[];console.log(d,"##filterArr"),d.forEach((i,V)=>{if(console.log(u.value.currentPoolTab,i.category,"##1607"),C.value.includes("Mining")&&i.rewarderInfo&&i.rewarderInfo.length>0){const c=[];if(i.rewarderInfo&&i.rewarderInfo.length>0){i.rewarderInfo.forEach((b,J)=>{var rs,ns,ts;const hs=(rs=u.value.tokensObj[b.coinAddress])==null?void 0:rs.decimals,B=ms(b.emissionsEveryDay/Math.pow(10,hs),4),ps=Number(B)>0?j(B):B,gs=ms(Number(B)*u.value.RATES[b.coinAddress]&&u.value.RATES[b.coinAddress].price,4);c.push({...b,logoUrl:(ns=u.value.tokensObj[b.coinAddress])==null?void 0:ns.logoURI,day:ps,dayUSD:gs,symbol:(ts=u.value.tokensObj[b.coinAddress])==null?void 0:ts.symbol,rewarders:i[`rewarders${J}`]&&i[`rewarders${J}`].replace("%",""),rewarder_display:i[`rewarder_display${J+1}`],resultDay:B})});const t=c.filter(b=>b.rewarder_display);let S=[];(!i.rewarderInfo||i.rewarderInfo.length<1||JSON.stringify(i.rewarderInfo)!==JSON.stringify(t))&&(S=t),n.push({...i,rewardes:S})}}else(C.value.includes("Farming")&&i.isStableFarming||C.value.includes("No incentives")&&i.rewarderInfo&&i.rewarderInfo.length<=0&&!i.isStableFarming)&&n.push(i);console.log("selectIncentiveTypeList:",C.value)}),console.log(n,"121arrnewValnewValnewVal"),Cs.value=n,z.value||(T.value?A.setPoolAmount(n.length):A.setPoolAmount(ae.value.length))};Le(()=>{A.setPoolAmount("--")}),ds(()=>[$.value,F.value,_.value,T.value,u.value.currentPoolTab,C.value],([l,d,n,i,V,c])=>{var t,S;(l&&((t=u==null?void 0:u.value.tokensObj[l.address])!=null&&t.isSelfBuilt)||d&&((S=u==null?void 0:u.value.tokensObj[d.address])!=null&&S.isSelfBuilt))&&!V?Cs.value=[]:(l||d||n||i)&&(console.log("newValnewValnewVal",l,d,n,JSON.stringify(n)),ne())},{deep:!0});const te=m(()=>f.value.poolAmount!=="--"?4-Number(f.value.poolAmount)%4:0),de=l=>u.value.tokensObj&&u.value.tokensObj[l]&&u.value.tokensObj[l].labels,ie=m(()=>Xs),ce=m(()=>ie.value.autoPoolObj),ue=Ue(),ve=m(()=>ue),he=m(()=>ve.value.farmsPoolObj);return{isCheckOpen:Y,selectedIncentiveType:re,selectIncentiveTypeList:C,selectedOptions:os,tabArr:H,changeTab:s,getLabel:de,patchNumber:te,getRewarderApr:As,childTokenSelectRef:ls,firstToken:$,lastToken:F,showList:Cs,isFarms:Q,getCoinIcon:oe,isViewCard:ss,clickDisplayAll:se,clickViewCard:ee,isSelectAll:T,chainName:vs,hasCreatePool:xs,store:f,lpInfo:Zs,config:Ys,t:e,router:K,loading:Ns,clickRefresh:js,refresh:ys,searchKey:O,current:es,addCommom:j,list:_,theme:as,statsData:I,pools:u,select:fs,selectValue:M,selectList:X,label:L,labelValue:q,labelList:bs,changeSort:Gs,changeSortLabel:Qs,listLoading:z,languageValue:W,isSwitchDisplayMode:_s,autoPoolObj:ce,formatNumberAddCommom:Ae,checkNullObj:E,importIcon:is,decimalUi:x,farmsPoolObj:he,incentiveTypesList:le}}}),Js=""+globalThis.__publicAssetsURL("sui-image/icon_autopools@2x.gif");const v=e=>(Be("data-v-77a3e81b"),e=e(),Re(),e),qe={class:"upgrade-pools-list-container"},He={class:"content-top"},ze={class:"content-top-left"},Je={key:0,class:"tag-list"},We=["onClick"],Ke={class:"content-top-right"},Xe={class:"radio"},Ge={key:0,src:Es},Qe=v(()=>o("span",null,"Display all pools",-1)),Ye={class:"check-box"},Ze=v(()=>o("span",null,"Incentive types",-1)),xe=v(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),so=[xe],eo={key:0,class:"select-list"},oo=["onClick"],ao={class:"radio"},lo={key:0,src:Es},ro={class:"search-select-box"},no=v(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),to=[no],io={key:0,class:"select-list"},co=["onClick"],uo={class:"search-select-box"},vo=v(()=>o("img",{src:Ms,alt:""},null,-1)),ho=v(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),po=[ho],go={key:0,class:"select-list"},_o=["onClick"],fo=v(()=>o("img",{src:Ms,alt:""},null,-1)),bo={key:0,"aria-hidden":"true",class:"cardIcon"},ko=v(()=>o("use",{"xlink:href":"#icon-icon-card"},null,-1)),wo=[ko],yo={key:1,"aria-hidden":"true",class:"listIcon"},mo=v(()=>o("use",{"xlink:href":"#icon-icon-list1"},null,-1)),Ao=[mo],Co={key:0,class:"upgrade-loading"},So={key:1,class:"table-contianer"},Oo={class:"table"},Io={class:"table-header"},No={class:"table-tr"},jo=v(()=>o("th",null,"Pools",-1)),Lo=v(()=>o("th",null,"Liquidity",-1)),$o=v(()=>o("th",null,"Volume (24H)",-1)),Fo=v(()=>o("th",null,"Fees (24H)",-1)),Bo=v(()=>o("th",null,"Mining Rewards",-1)),Ro={class:"hover-box"},To={class:"apr-hover-content"},Do=v(()=>o("th",null,"Action",-1)),Vo={class:"table-body"},Uo=["onClick"],Po={class:"token"},Eo={class:"img-box"},Mo={key:0,class:"pool-warning"},qo={class:"img-box img-last-box"},Ho={key:0,class:"pool-warning"},zo={class:"name"},Jo={class:"top"},Wo={class:"token-name"},Ko={class:"tokena"},Xo={class:"tokenb"},Go={class:"fee-tier-top"},Qo={key:0,class:"isFarming farming-logo"},Yo=v(()=>o("img",{class:"default-img",src:Vs,alt:""},null,-1)),Zo=v(()=>o("img",{class:"hover-img",src:Us,alt:""},null,-1)),xo=v(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),sa=[Yo,Zo,xo],ea={key:1,class:"isFarming vault-logo"},oa=v(()=>o("img",{class:"default-img",src:qs,alt:""},null,-1)),aa=v(()=>o("img",{class:"hover-img",src:Hs,alt:""},null,-1)),la=v(()=>o("div",{class:"hover-text"},"Farm rewards available",-1)),ra=[oa,aa,la],na={key:2,class:"isFarming vault-logo"},ta=v(()=>o("img",{class:"default-img",src:Ps,alt:""},null,-1)),da=v(()=>o("img",{class:"hover-img",src:Js,alt:""},null,-1)),ia=v(()=>o("div",{class:"hover-text"},"Vault available",-1)),ca=[ta,da,ia],ua={key:3,class:"pool-warning"},va=v(()=>o("img",{src:zs,alt:""},null,-1)),ha={class:"hover-text"},pa={class:"label-all"},ga={key:0},_a={key:0},fa={class:"skeleton-box"},ba={key:1},ka={key:2},wa={class:"skeleton-box"},ya={key:3},ma={key:4},Aa={class:"skeleton-box"},Ca={key:5},Sa={key:6},Oa={class:"skeleton-box"},Ia={key:7},Na={class:"reward-token-box"},ja={class:"rewards-hover"},La={alt:""},$a={key:8},Fa={key:9},Ba={class:"skeleton-box"},Ra={class:"hover-box"},Ta={class:"apr"},Da={key:0,class:"farming-apr"},Va=v(()=>o("br",null,null,-1)),Ua={key:1,class:"apr-hover-content"},Pa={class:"action"},Ea={key:2,class:"item-container"},Ma={class:"h5-pool-item"},qa={class:"token"},Ha={class:"token"},za={class:"img-box"},Ja={key:0,class:"pool-warning"},Wa={class:"img-box img-last-box"},Ka={key:0,class:"pool-warning"},Xa={class:"name"},Ga={class:"top"},Qa={class:"token-name"},Ya={class:"tokena"},Za={class:"tokenb"},xa={class:"fee-tier-top"},sl={key:0,class:"isFarming farming-logo"},el=v(()=>o("img",{class:"default-img",src:Vs,alt:""},null,-1)),ol=v(()=>o("img",{class:"hover-img",src:Us,alt:""},null,-1)),al=v(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),ll=[el,ol,al],rl={key:1,class:"isFarming vault-logo"},nl=v(()=>o("img",{class:"default-img",src:qs,alt:""},null,-1)),tl=v(()=>o("img",{class:"hover-img",src:Hs,alt:""},null,-1)),dl=v(()=>o("div",{class:"hover-text"},"Farm rewards available",-1)),il=[nl,tl,dl],cl={key:2,class:"isFarming vault-logo"},ul=v(()=>o("img",{class:"default-img",src:Ps,alt:""},null,-1)),vl=v(()=>o("img",{class:"hover-img",src:Js,alt:""},null,-1)),hl=v(()=>o("div",{class:"hover-text"},"Vault available",-1)),pl=[ul,vl,hl],gl={key:3,class:"pool-warning"},_l=v(()=>o("img",{src:zs,alt:""},null,-1)),fl={class:"hover-text"},bl={class:"label-all"},kl={key:0},wl={class:"bottom"},yl={class:"row"},ml=v(()=>o("div",{class:"left"},"APR (24H)",-1)),Al={key:0,class:"right"},Cl={style:{color:"#fff"}},Sl={key:0},Ol={class:"apr-hover-content"},Il={class:"row"},Nl=v(()=>o("div",{class:"left"},"Liquidity",-1)),jl={key:0,class:"right"},Ll={key:1,class:"right"},$l={class:"row"},Fl=v(()=>o("div",{class:"left"},"Volume (24H)",-1)),Bl={key:0,class:"right"},Rl={key:1,class:"right"},Tl={class:"row"},Dl=v(()=>o("div",{class:"left"},"Fees (24H)",-1)),Vl={key:0,class:"right"},Ul={key:1,class:"right"},Pl={key:0,class:"row"},El=v(()=>o("div",{class:"left"},"Mining Rewards",-1)),Ml={key:0,class:"right"},ql={key:1,class:"right reward-right"},Hl={class:"rewards-hover"},zl={alt:""},Jl={key:3,class:"no-data"},Wl={key:0,src:Pe},Kl={key:1,src:Ee};function Xl(e,R,K,Ns,ys,ss){const _s=ge,fs=_e,M=fe,X=be,L=Te,q=ke,bs=we,H=Fe("image");return a(),r("div",qe,[o("div",He,[o("div",ze,[e.tabArr.length>1?(a(),r("div",Je,[(a(!0),r(D,null,U(e.tabArr,(s,_)=>(a(),r("div",{key:_,class:P(["tag-item",s==e.pools.currentPoolTab?`tag-active tab-num-${e.tabArr.length}`:`tab-num-${e.tabArr.length}`]),onClick:O=>e.changeTab(s)},p(s),11,We))),128))])):g("",!0),w(_s,{ref:"childTokenSelectRef"},null,512)]),o("div",Ke,[o("div",{class:P(["tab-item",e.isSelectAll?"tab-item-active":""]),onClick:R[0]||(R[0]=ks(s=>e.clickDisplayAll(),["stop"]))},[o("div",Xe,[e.isSelectAll&&e.store.theme=="sui"?(a(),r("img",Ge)):g("",!0)]),Qe],2),o("div",Ye,[o("div",{class:"search-select search-label",onClick:R[1]||(R[1]=ks(()=>{e.isCheckOpen=!e.isCheckOpen,e.label=!1,e.select=!1},["stop"]))},[Ze,(a(),r("svg",{"aria-hidden":"true",class:P(e.isCheckOpen?"show-icon icon":"icon")},so,2)),e.isCheckOpen?(a(),r("div",eo,[(a(!0),r(D,null,U(e.incentiveTypesList,s=>(a(),r("div",{key:s,class:"select-menu-item",onClick:ks(_=>e.selectedIncentiveType(s),["stop"])},[o("div",ao,[e.selectIncentiveTypeList.includes(s)?(a(),r("img",lo)):g("",!0)]),o("span",null,p(s),1)],8,oo))),128))])):g("",!0)])]),o("div",ro,[o("div",{class:"search-select search-label",onClick:R[2]||(R[2]=ks(()=>{e.store.setIsSelect("pools"),e.isCheckOpen=!1,e.label=!e.label,e.select=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.label")),1),o("div",null,[N(p(e.labelValue)+" ",1),(a(),r("svg",{"aria-hidden":"true",class:P(e.label?"show-icon icon":"icon")},to,2))]),e.label?(a(),r("div",io,[(a(!0),r(D,null,U(e.labelList,(s,_)=>(a(),r("div",{key:_,class:"select-menu-item",onClick:O=>e.changeSortLabel(s)},p(s),9,co))),128))])):g("",!0)])]),o("div",uo,[o("div",{class:"search-select",onClick:R[3]||(R[3]=ks(()=>{e.store.setIsSelect("pools"),e.isCheckOpen=!1,e.select=!e.select,e.label=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.sortBy")),1),o("div",null,[N(p(e.selectValue)+" ",1),vo,(a(),r("svg",{"aria-hidden":"true",class:P(e.select?"show-icon icon":"icon")},po,2))]),e.select?(a(),r("div",go,[(a(!0),r(D,null,U(e.selectList,(s,_)=>(a(),r("div",{key:_,class:"select-menu-item",onClick:O=>e.changeSort(s)},[N(p(s)+" ",1),fo],8,_o))),128))])):g("",!0)])]),o("div",{class:"change-view",onClick:R[4]||(R[4]=s=>e.clickViewCard())},[e.isViewCard&&e.current[0]=="pools"?(a(),r("svg",bo,wo)):(a(),r("svg",yo,Ao))])])]),e.listLoading||e.isSwitchDisplayMode?(a(),r("div",Co,[w(fs,{loading:e.listLoading||e.isSwitchDisplayMode,type:e.isViewCard?"poolsCard":"poolsList"},null,8,["loading","type"])])):g("",!0),!e.isSwitchDisplayMode&&!e.isViewCard&&!e.listLoading?(a(),r("div",So,[o("table",Oo,[o("thead",Io,[o("tr",No,[jo,Lo,$o,Fo,Bo,o("th",null,[o("span",Ro,[N(" APR (24H) "),o("div",To,[w(M,{class:"noHover apr-hover-con"})])])]),Do])]),o("tbody",Vo,[(a(!0),r(D,null,U(e.showList,s=>{var _,O,es,G,A,z,T,Q,Y,os,W,f,as,u,I;return a(),r("tr",{key:s.address,class:P(["table-tr",e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none"]),onClick:y=>s.needReverse?e.router.push(`/liquidity/deposit?poolAddress=${s.address}`):e.router.push(`/liquidity/deposit?poolAddress=${s.address}`)},[o("td",null,[o("div",Po,[o("div",Eo,[Z(o("img",null,null,512),[[H,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(G=(es=e.pools)==null?void 0:es.tokensObj[s.coinB.address])!=null&&G.isSelfBuilt:(O=(_=e.pools)==null?void 0:_.tokensObj[s.coinA.address])!=null&&O.isSelfBuilt)?(a(),r("div",Mo)):g("",!0)]),o("div",qo,[Z(o("img",null,null,512),[[H,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(z=(A=e.pools)==null?void 0:A.tokensObj[s.coinA.address])!=null&&z.isSelfBuilt:(Q=(T=e.pools)==null?void 0:T.tokensObj[s.coinB.address])!=null&&Q.isSelfBuilt)?(a(),r("div",Ho)):g("",!0)]),o("div",zo,[o("div",Jo,[o("p",Wo,[o("span",Ko,[N(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),w(X,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),N(" - "),o("span",Xo,[N(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),w(X,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Go,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),r("div",Qo,sa)):g("",!0),e.chainName=="Sui"&&e.farmsPoolObj[s.address]&&e.farmsPoolObj[s.address].status=="Live"?(a(),r("div",ea,ra)):g("",!0),e.chainName=="Sui"&&e.autoPoolObj[s.address]&&("config"in e?e.config:h(ws)).hasVault?(a(),r("div",na,ca)):g("",!0),(os=(Y=e.pools)==null?void 0:Y.tokensObj[s.coinA.address])!=null&&os.isSelfBuilt||(f=(W=e.pools)==null?void 0:W.tokensObj[s.coinB.address])!=null&&f.isSelfBuilt?(a(),r("div",ua,[va,o("div",ha,p(e.t("newAdd.poolWarning")),1)])):g("",!0)]),o("div",pa,[(a(!0),r(D,null,U(s.labels,(y,cs)=>(a(),r("div",{key:cs,class:P(["label",y])},[y!=="Native"?(a(),r("span",ga,p(y),1)):g("",!0)],2))),128))])])])]),("checkNullObj"in e?e.checkNullObj:h(E))(e.store.statsData)?(a(),r("td",_a,[o("div",fa,[w(L,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),r("td",ba,p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(j))(("decimalUi"in e?e.decimalUi:h(x))(s.liqidity,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:h(E))(e.store.statsData)?(a(),r("td",ka,[o("div",wa,[w(L,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),r("td",ya,p(Number(s.vol)!==0&&Number(s.vol)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(j))(("decimalUi"in e?e.decimalUi:h(x))(s.vol,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:h(E))(e.store.statsData)?(a(),r("td",ma,[o("div",Aa,[w(L,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),r("td",Ca,p(Number(s.fee_24_h)!==0&&Number(s.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(j))(("decimalUi"in e?e.decimalUi:h(x))(s.fee_24_h,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:h(E))(e.store.statsData)?(a(),r("td",Sa,[o("div",Oa,[w(L,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),r("td",Ia,[o("div",Na,[(a(!0),r(D,null,U(s.rewardes,y=>{var cs;return a(),r("div",{key:y.address,class:P(["rewarder-token",y.day===0?"reward-none":""])},[Z(o("img",null,null,512),[[H,e.getCoinIcon((cs=e.pools)==null?void 0:cs.tokensObj[y.coinAddress])]]),o("div",ja,[Z(o("img",La,null,512),[[H,y.logoUrl?y.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:h(is))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:h(is))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${y.day} ${y.symbol} per day`),1)])],2)}),128))])])):(a(),r("td",$a," ")),("checkNullObj"in e?e.checkNullObj:h(E))(e.store.statsData)?(a(),r("td",Fa,[o("div",Ba,[w(L,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),r("td",{key:10,class:P(s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(as=s==null?void 0:s.stable_farming)!=null&&as.stable_farming_pool?"":"noCursor")},[o("span",Ra,[o("i",Ta,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:h(j))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:h(j))(s.apr,2))+"%",1),(u=s==null?void 0:s.stable_farming)!=null&&u.stable_farming_pool?(a(),r("i",Da,[Va,N(" "+p(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:h(j))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)])):g("",!0),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(I=s==null?void 0:s.stable_farming)!=null&&I.stable_farming_pool?(a(),r("div",Ua,[w(M,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):g("",!0)])],2)),o("td",null,[o("div",Pa,[s.needReverse?(a(),Os(q,{key:0,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:Is(()=>[N("+")]),_:2},1032,["to"])):(a(),Os(q,{key:1,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:Is(()=>[N("+")]),_:2},1032,["to"]))])])],10,Uo)}),128))])])])):g("",!0),!e.isSwitchDisplayMode&&e.isViewCard&&!e.listLoading?(a(),r("div",Ea,[e.showList&&e.showList.length>0?(a(),r(D,{key:0},[(a(!0),r(D,null,U(e.showList,(s,_)=>(a(),Os(bs,{key:_,"l-item":s,"is-select-all":e.isSelectAll,"is-farms":e.isFarms},null,8,["l-item","is-select-all","is-farms"]))),128)),(a(!0),r(D,null,U(e.patchNumber,s=>(a(),r("div",{key:s,class:"patch-item"}))),128))],64)):g("",!0)])):g("",!0),o("div",Ma,[(a(!0),r(D,null,U(e.showList,s=>{var _,O,es,G,A,z,T,Q,Y,os,W,f,as,u;return a(),r("div",{key:s.address,class:P([e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none","item"])},[o("div",qa,[o("div",Ha,[o("div",za,[Z(o("img",null,null,512),[[H,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(G=(es=e.pools)==null?void 0:es.tokensObj[s.coinB.address])!=null&&G.isSelfBuilt:(O=(_=e.pools)==null?void 0:_.tokensObj[s.coinA.address])!=null&&O.isSelfBuilt)?(a(),r("div",Ja)):g("",!0)]),o("div",Wa,[Z(o("img",null,null,512),[[H,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(z=(A=e.pools)==null?void 0:A.tokensObj[s.coinA.address])!=null&&z.isSelfBuilt:(Q=(T=e.pools)==null?void 0:T.tokensObj[s.coinB.address])!=null&&Q.isSelfBuilt)?(a(),r("div",Ka)):g("",!0)]),o("div",Xa,[o("div",Ga,[o("p",Qa,[o("span",Ya,[N(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),w(X,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),N(" - "),o("span",Za,[N(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),w(X,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",xa,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),r("div",sl,ll)):g("",!0),s.isStableFarming?(a(),r("div",rl,il)):g("",!0),e.chainName=="Sui"&&e.autoPoolObj[s.address]&&("config"in e?e.config:h(ws)).hasVault?(a(),r("div",cl,pl)):g("",!0),(os=(Y=e.pools)==null?void 0:Y.tokensObj[s.coinA.address])!=null&&os.isSelfBuilt||(f=(W=e.pools)==null?void 0:W.tokensObj[s.coinB.address])!=null&&f.isSelfBuilt?(a(),r("div",gl,[_l,o("div",fl,p(e.t("newAdd.poolWarning")),1)])):g("",!0)]),o("div",bl,[(a(!0),r(D,null,U(s.labels,(I,y)=>(a(),r("div",{key:y,class:P(["label",I])},[I!=="Native"?(a(),r("span",kl,p(I),1)):g("",!0)],2))),128))])])])]),o("div",wl,[o("div",yl,[ml,("checkNullObj"in e?e.checkNullObj:h(E))(e.store.statsData)?(a(),r("div",Al,[w(L,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),r("div",{key:1,class:P(["right theme-right",s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(as=s==null?void 0:s.stable_farming)!=null&&as.stable_farming_pool?"":"noCursor"])},[o("div",null,[o("span",Cl,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:h(j))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:h(j))(s.apr,2))+"% ",1),N("   "),(u=s==null?void 0:s.stable_farming)!=null&&u.stable_farming_pool?(a(),r("span",Sl,p(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"<0.01":`+${("addCommom"in e?e.addCommom:h(j))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):g("",!0)]),o("div",Ol,[w(M,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2))]),o("div",Il,[Nl,("checkNullObj"in e?e.checkNullObj:h(E))(e.store.statsData)?(a(),r("div",jl,[w(L,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),r("div",Ll,p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(j))(("decimalUi"in e?e.decimalUi:h(x))(s.liqidity,2),2)}`),1))]),o("div",$l,[Fl,("checkNullObj"in e?e.checkNullObj:h(E))(e.store.statsData)?(a(),r("div",Bl,[w(L,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),r("div",Rl,p(Number(s.vol)!==0&&Number(s.vol)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(j))(("decimalUi"in e?e.decimalUi:h(x))(s.vol,2),2)}`),1))]),o("div",Tl,[Dl,("checkNullObj"in e?e.checkNullObj:h(E))(e.store.statsData)?(a(),r("div",Vl,[w(L,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),r("div",Ul,p(Number(s.fee_24_h)!==0&&Number(s.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:h(j))(("decimalUi"in e?e.decimalUi:h(x))(s.fee_24_h,2),2)}`),1))]),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),r("div",Pl,[El,("checkNullObj"in e?e.checkNullObj:h(E))(e.store.statsData)?(a(),r("div",Ml,[w(L,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),r("div",ql,[(a(!0),r(D,null,U(s.rewardes,I=>{var y;return a(),r("div",{key:I.address,class:"rewarder-token"},[Z(o("img",null,null,512),[[H,e.getCoinIcon((y=e.pools)==null?void 0:y.tokensObj[I.coinAddress])]]),o("div",Hl,[Z(o("img",zl,null,512),[[H,I.logoUrl?I.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:h(is))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:h(is))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${I.day} ${I.symbol} per day`),1)])])}),128))])):g("",!0)])):g("",!0)]),w(q,{to:`/liquidity/deposit?poolAddress=${s.address}`,class:"add-btn"},{default:Is(()=>[N("+ Add Liquidity")]),_:2},1032,["to"])],2)}),128))]),!e.isSwitchDisplayMode&&e.store.poolAmount!=="--"&&e.store.poolAmount<=0&&!e.listLoading?(a(),r("div",Jl,[e.theme=="default"?(a(),r("img",Wl)):(a(),r("img",Kl)),o("span",null,p(e.$t("common.poolsNotFound")),1)])):g("",!0)])}const yr=$e(Me,[["render",Xl],["__scopeId","data-v-77a3e81b"]]);export{yr as default};
