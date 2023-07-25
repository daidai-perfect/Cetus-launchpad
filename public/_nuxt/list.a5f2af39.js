import{_ as Qs}from"./upgrade-select-input.5b28f8c4.js";import{_ as Xs}from"./upgrade-loading.616d4f21.js";import{_ as Ys}from"./apr-tips.d06a6695.js";import{_ as Zs,a as xs}from"./pools-list-item.26cdae2c.js";import{_ as se}from"./nuxt-link.5ef76dd7.js";import{u as ee,e as V,h as oe,t as ys,d as ae,b as js,c as z}from"./pool.771f7a64.js";import{i as rs}from"./import-icon.de3e6c66.js";import{a as le,l as re,b as ne,r as w,m as L,y as te,D as es,U as de,e as ie,q as ce,o as l,f as r,h as o,F as m,s as P,x as b,i as y,z as R,L as _s,v,j as N,t as G,u as k,c as vs,w as gs,p as ue,k as ve,S as he}from"./entry.bcbaa849.js";/* empty css              */import{u as pe,c as As}from"./sha256.bb272993.js";import{p as _e}from"./precision.a7a6c57b.js";import{_ as Bs}from"./icon-selected_3x.09e9a6f0.js";import{_ as Is}from"./icon_on_2x.5e96733d.js";import{a as Ts}from"./coin-select.18d04679.js";import{_ as ge,a as fe}from"./img-no-Positions_2x.bd130f4d.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";/* empty css              *//* empty css              */const be=le({setup(){const{t:e,locale:j}=re(),J=ne(),Cs=w(!1),hs=w(!1),Q=w(!1),ns=w(!1),ts=w(!1),E=w("VOL"),W=w(["APR","TVL"]),B=w(!1),F=w(e("tab.all")),ds=w([e("tab.wormhole"),e("tab.celer")]),q=L(()=>{const a=Array.from(new Set(i.value.poolConfigList.flatMap(d=>!d.category||d.category==""?"All":d.category)));return console.log(a,"newArr"),a.length<=1?[]:a}),s=a=>{i.value.setCurrentPoolTab(a)},h=w([]),C=w(""),X=w(["pools"]),K=ee(),A=pe(),U=w(!0),I=w(!1),S=w(!1),H=w(""),p=L(()=>A),Y=L(()=>A.theme),i=L(()=>K),g=L(()=>A.statsData);te(()=>{var c,u,t;const a=(t=(u=(c=J==null?void 0:J.currentRoute)==null?void 0:c.value)==null?void 0:u.query)==null?void 0:t.language;a&&Rs(a),H.value=j.value,document.addEventListener("click",()=>{ts.value=!1,B.value=!1});const d=localStorage.getItem(`pools-${Z.value}-selectall`),n=localStorage.getItem(`pools-${Z.value}-farms`),f=localStorage.getItem(`pools-${Z.value}-viewCard`);I.value=d==="true",S.value=n==="true",Q.value=f==="true"}),es(()=>Q.value,async(a,d)=>{a!==d&&(ns.value=!0,await oe(1500),ns.value=!1)}),es(()=>p.value.chainName,(a,d)=>{a&&A.getStatsData(a,p.value.filterCoinsObj)},{immediate:!0});const{setLang:D}=A,Rs=a=>{D(a),j.value=a},Fs=(a,d)=>a&&d?_e.plus(ys(a),ys(d)):a||0,fs=a=>{let d=0;return a&&a.forEach(n=>{d+=ys(String(n))}),String(ae(String(d),2))},Ds=(a=[])=>{const d=a&&a.length>0?a:Object.values(i.value.poolsObj),n=[];console.log(d,"====>newPoolList"),d.forEach(u=>{var is,cs,us,$s,Os,Ls,Ns;const t=p.value.addressLpTokens[u.address],M=i.value.poolsObj[u.address];let as,T,ls,ps;t&&(as=t.rewarder_apr[0]?Number(t.rewarder_apr[0].substring(0,t.rewarder_apr[0].length-1)):0,T=t.rewarder_apr[1]?Number(t.rewarder_apr[1].substring(0,t.rewarder_apr[1].length-1)):0,ls=t.rewarder_apr[2]?Number(t.rewarder_apr[2].substring(0,t.rewarder_apr[2].length-1)):0,ps=as+T+ls);const ss=u.needReverse?((cs=i.value.tokensObj[u.coinB.address])==null?void 0:cs.labels)||[]:((is=i.value.tokensObj[u.coinA.address])==null?void 0:is.labels)||[],ks=u.needReverse?((us=i.value.tokensObj[u.coinA.address])==null?void 0:us.labels)||[]:(($s=i.value.tokensObj[u.coinB.address])==null?void 0:$s.labels)||[],ws=[...new Set(ss.concat(ks))];n.push({...u,liqidity:t?t.tvl_in_usd:"0.00000000001",vol:t?t.vol_in_usd_24h:"0",apr:t&&t.apr_7day?(Os=t.apr_7day)==null?void 0:Os.replace("%",""):"--",fee:u.fee?u.fee:M!=null&&M.fee?M.fee:"--",aprNum:t&&t.apr_7day?String(Number(t.apr_7day.substring(0,t.apr_7day.length-1))+ps):"0",rewarder_apr:fs(t&&t.rewarder_apr),aprTotal:Fs(t&&t.apr_7day,t&&fs(t.rewarder_apr)),rewarders0:t&&t.rewarder_apr[0],rewarders1:t&&t.rewarder_apr[1],rewarders2:t&&t.rewarder_apr[2],labels:ws,isFarming:u==null?void 0:u.isFarming,fee_24_h:t&&t.fee_24_h,isAuthorized:!!(os.value[(Ls=u==null?void 0:u.token_a)==null?void 0:Ls.address]&&os.value[(Ns=u==null?void 0:u.token_b)==null?void 0:Ns.address])})});let f=[];if(E.value=="APR"?f=n.sort((u,t)=>t.aprNum-u.aprNum):E.value=="VOL"?f=n.sort((u,t)=>t.vol-u.vol):f=n.sort((u,t)=>t.liqidity-u.liqidity),F.value!=e("tab.all")){const u=[];f.forEach(t=>{t.labels.indexOf(F.value)!==-1&&u.push(t)}),h.value=u}else h.value=f;if(C.value){var c=new RegExp("[\\u4E00-\\u9FFF]+","g");if(c.test(C.value)){C.value="";return}const u=h.value.filter(t=>t.symbol.toLowerCase().includes(C.value.toLowerCase()));h.value=u}console.log(h.value,"=====>>>>list.value"),U.value=!1},os=L(()=>{if(i.value.tokens&&i.value.tokens.length>0){const a={};return i.value.tokens.forEach(d=>{a[d.address]={...d}}),a}return null});es(()=>[os.value,i.value.poolConfigList,p.value.chainName,p.value.addressLpTokens,C.value,E.value,F.value],([a,d,n,f])=>{a&&d&&(d==null?void 0:d.length)>0&&d[0]&&n&&(n!=null&&n.toLowerCase().includes(d[0].chain))&&Ds(d)},{immediate:!0,deep:!0});const Ss=()=>{U.value=!0,hs.value=!0,A.getStatsData(p.value.chainName,p.value.filterCoinsObj),K.setPoolConfigList(p.value.chainName,p.value.filterCoinsObj),setTimeout(()=>{hs.value=!1},1e3)};es(()=>p.value.isRefresh,a=>{var n;const d=(n=J==null?void 0:J.currentRoute)==null?void 0:n.value.name.split("-")[1];a&&(!d||d=="list"||d=="")&&Ss()});const Ps=a=>{const d=[];d.push(E.value),W.value.forEach((n,f)=>{n!=a&&d.push(n)}),W.value=d,E.value=a},Vs=a=>{const d=[];ds.value.forEach((n,f)=>{n==a?d[f]=F.value:d[f]=n}),ds.value=d,F.value=a};es(()=>A.lang,a=>{H.value=a});const Es=L(()=>As[p.value.chainName]);es(()=>p.value.isSelect,a=>{a!=="pools"&&(ts.value=!1,B.value=!1)});const qs=L(()=>i.value.poolConfigList.filter(d=>d.address==As[p.value.chainName].newPositionAddress)[0]),Us=L(()=>As[p.value.chainName].hasCreatePool),Z=L(()=>p.value.chainName),Ms=()=>{localStorage.setItem(`pools-${Z.value}-selectall`,I.value?"":"true"),I.value=!I.value},Hs=()=>{localStorage.setItem(`pools-${Z.value}-farms`,S.value?"":"true"),S.value=!S.value},zs=()=>{localStorage.setItem(`pools-${Z.value}-viewCard`,Q.value?"":"true"),Q.value=!Q.value},Js=a=>{var d;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((d=i.value.tokensObj[a==null?void 0:a.address])==null?void 0:d.logo_url)||(p.value.theme==="default"?rs("/image/coins/unknown.png"):rs("/image/coins/sui-unknown.png"))},x=w(null),$=L(()=>x.value&&x.value.firstToken?x.value.firstToken:null),O=L(()=>x.value&&x.value.lastToken?x.value.lastToken:null),Ws=L(()=>{if(p.value.chainName!=="Sui")return h.value;if(os.value&&h.value&&h.value.length>0){const a=[];return h.value.forEach(n=>{var f,c;os.value[(f=n==null?void 0:n.token_a)==null?void 0:f.address]&&os.value[(c=n==null?void 0:n.token_b)==null?void 0:c.address]&&(S.value?n.isFarming&&n.rewarderInfo&&n.rewarderInfo.length>0&&(i.value.currentPoolTab=="All"&&(n.category==""||!n.category)||i.value.currentPoolTab!=="All"&&n.category==i.value.currentPoolTab)&&a.push(n):(i.value.currentPoolTab=="All"&&(n.category==""||!n.category)||i.value.currentPoolTab!=="All"&&n.category==i.value.currentPoolTab)&&a.push(n))}),a.filter((n,f)=>$.value&&O.value?n.coinA.address==$.value.address&&n.coinB.address==O.value.address||n.coinA.address==O.value.address&&n.coinB.address==$.value.address:$.value?n.coinA.address.toLowerCase().includes($.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes($.value.address.toLowerCase()):O.value?n.coinA.address.toLowerCase().includes(O.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes(O.value.address.toLowerCase()):a)}return[]}),bs=w([]),Ks=()=>{let a=[];a=h.value;const d=a.filter((c,u)=>$.value&&O.value?c.coinA.address==$.value.address&&c.coinB.address==O.value.address||c.coinA.address==O.value.address&&c.coinB.address==$.value.address:$.value?c.coinA.address.toLowerCase().includes($.value.address.toLowerCase())||c.coinB.address.toLowerCase().includes($.value.address.toLowerCase()):O.value?c.coinA.address.toLowerCase().includes(O.value.address.toLowerCase())||c.coinB.address.toLowerCase().includes(O.value.address.toLowerCase()):a);let n=[],f=[];d.forEach((c,u)=>{const t=[];if(c.rewarderInfo&&c.rewarderInfo.length>0){c.rewarderInfo.forEach((T,ls)=>{var is,cs,us;const ps=(is=i.value.tokensObj[T.coinAddress])==null?void 0:is.decimals,ss=js(T.emissionsEveryDay/Math.pow(10,ps),4),ks=Number(ss)>0?V(ss):ss,ws=js(Number(ss)*i.value.RATES[T.coinAddress]&&i.value.RATES[T.coinAddress].price,4);t.push({...T,logoUrl:(cs=i.value.tokensObj[T.coinAddress])==null?void 0:cs.logoURI,day:ks,dayUSD:ws,symbol:(us=i.value.tokensObj[T.coinAddress])==null?void 0:us.symbol,rewarders:c[`rewarders${ls}`]&&c[`rewarders${ls}`].replace("%",""),rewarder_display:c[`rewarder_display${ls+1}`],resultDay:ss})});const M=t.filter(T=>T.rewarder_display);let as=[];(!c.rewarderInfo||c.rewarderInfo.length<1||JSON.stringify(c.rewarderInfo)!==JSON.stringify(M))&&(as=M),(i.value.currentPoolTab=="All"&&(c.category==""||!c.category)||i.value.currentPoolTab!=="All"&&c.category==i.value.currentPoolTab)&&(f.push({...c,rewardes:as}),n.push({...c,rewardes:as}))}else(i.value.currentPoolTab=="All"&&(c.category==""||!c.category)||i.value.currentPoolTab!=="All"&&c.category==i.value.currentPoolTab)&&n.push({...c})}),console.log(n,"121arrnewValnewValnewVal"),bs.value=S.value?f:n,U.value||(I.value?S.value?A.setPoolAmount(f.length):A.setPoolAmount(n.length):A.setPoolAmount(Ws.value.length))};de(()=>{A.setPoolAmount("--")}),es(()=>[$.value,O.value,h.value,S.value,I.value,i.value.currentPoolTab],([a,d,n,f,c,u])=>{var t,M;(a&&((t=i==null?void 0:i.value.tokensObj[a.address])!=null&&t.isSelfBuilt)||d&&((M=i==null?void 0:i.value.tokensObj[d.address])!=null&&M.isSelfBuilt))&&!c?bs.value=[]:(a||d||n||f)&&(console.log("newValnewValnewVal",a,d,n,JSON.stringify(n)),Ks())},{deep:!0});const Gs=L(()=>p.value.poolAmount!=="--"?4-Number(p.value.poolAmount)%4:0);return{tabArr:q,changeTab:s,getLabel:a=>i.value.tokensObj&&i.value.tokensObj[a]&&i.value.tokensObj[a].labels,patchNumber:Gs,getRewarderApr:fs,childTokenSelectRef:x,firstToken:$,lastToken:O,showList:bs,isFarms:S,getCoinIcon:Js,isViewCard:Q,clickDisplayAll:Ms,clickFarms:Hs,clickViewCard:zs,isSelectAll:I,chainName:Z,hasCreatePool:Us,store:p,lpInfo:qs,config:Es,t:e,router:J,loading:Cs,clickRefresh:Ss,refresh:hs,searchKey:C,current:X,addCommom:V,list:h,theme:Y,statsData:g,pools:i,select:ts,selectValue:E,selectList:W,label:B,labelValue:F,labelList:ds,changeSort:Ps,changeSortLabel:Vs,listLoading:U,languageValue:H,isSwitchDisplayMode:ns}}}),ms=""+new URL("icon-Farms_2x.a9e99fb2.png",import.meta.url).href;const _=e=>(ue("data-v-033660b8"),e=e(),ve(),e),ke={class:"upgrade-pools-list-container"},we={class:"content-top"},ye={class:"content-top-left"},Ae={key:0,class:"tag-list"},Ce=["onClick"],Se={class:"content-top-right"},$e={class:"radio"},Oe={key:0,src:Bs},Le=_(()=>o("span",null,"Display all pools",-1)),Ne={class:"radio"},je={key:0,src:Bs},Be=_(()=>o("span",null,"Farms",-1)),Ie={class:"search-select-box"},Te=_(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),me=[Te],Re={key:0,class:"select-list"},Fe=["onClick"],De={class:"search-select-box"},Pe=_(()=>o("img",{src:Is,alt:""},null,-1)),Ve=_(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ee=[Ve],qe={key:0,class:"select-list"},Ue=["onClick"],Me=_(()=>o("img",{src:Is,alt:""},null,-1)),He={key:0,"aria-hidden":"true",class:"cardIcon"},ze=_(()=>o("use",{"xlink:href":"#icon-icon-card"},null,-1)),Je=[ze],We={key:1,"aria-hidden":"true",class:"listIcon"},Ke=_(()=>o("use",{"xlink:href":"#icon-icon-list1"},null,-1)),Ge=[Ke],Qe={key:0,class:"upgrade-loading"},Xe={key:1,class:"table-contianer"},Ye={class:"table"},Ze={class:"table-header"},xe={class:"table-tr"},so=_(()=>o("th",null,"Pools",-1)),eo=_(()=>o("th",null,"Liquidity",-1)),oo=_(()=>o("th",null,"Volume (24H)",-1)),ao=_(()=>o("th",null,null,-1)),lo=_(()=>o("th",null,"Rewards",-1)),ro={class:"hover-box"},no={class:"apr-hover-content"},to=_(()=>o("th",null,"Action",-1)),io={class:"table-body"},co=["onClick"],uo={class:"token"},vo={class:"img-box"},ho={key:0,class:"pool-warning"},po={class:"img-box img-last-box"},_o={key:0,class:"pool-warning"},go={class:"name"},fo={class:"top"},bo={class:"token-name"},ko={class:"tokena"},wo={class:"tokenb"},yo={class:"fee-tier-top"},Ao={key:0,class:"isFarming"},Co=_(()=>o("img",{src:ms,alt:""},null,-1)),So=_(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),$o=[Co,So],Oo={key:1,class:"pool-warning"},Lo=_(()=>o("img",{src:Ts,alt:""},null,-1)),No={class:"hover-text"},jo={class:"label-all"},Bo={key:0},Io={key:0},To={class:"skeleton-box"},mo={key:1},Ro={key:2},Fo={class:"skeleton-box"},Do={key:3},Po=_(()=>o("td",null,null,-1)),Vo={key:4},Eo={class:"skeleton-box"},qo={key:5},Uo={class:"rewards-hover"},Mo={alt:""},Ho={key:6},zo={key:7},Jo={class:"skeleton-box"},Wo={class:"hover-box"},Ko={key:0,class:"apr-hover-content"},Go={key:2,class:"item-container"},Qo={class:"h5-pool-item"},Xo={class:"token"},Yo={class:"token"},Zo={class:"img-box"},xo={key:0,class:"pool-warning"},sa={class:"img-box img-last-box"},ea={key:0,class:"pool-warning"},oa={class:"name"},aa={class:"top"},la={class:"token-name"},ra={class:"tokena"},na={class:"tokenb"},ta={class:"fee-tier-top"},da={key:0,class:"isFarming"},ia=_(()=>o("img",{src:ms,alt:""},null,-1)),ca=_(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),ua=[ia,ca],va={key:1,class:"pool-warning"},ha=_(()=>o("img",{src:Ts,alt:""},null,-1)),pa={class:"hover-text"},_a={class:"label-all"},ga={key:0},fa={class:"bottom"},ba={class:"row"},ka=_(()=>o("div",{class:"left"},"APR (24H)",-1)),wa={key:0,class:"right"},ya={class:"apr-hover-content"},Aa={class:"row"},Ca=_(()=>o("div",{class:"left"},"Liquidity",-1)),Sa={key:0,class:"right"},$a={key:1,class:"right"},Oa={class:"row"},La=_(()=>o("div",{class:"left"},"Volume (24H)",-1)),Na={key:0,class:"right"},ja={key:1,class:"right"},Ba={class:"row"},Ia=_(()=>o("div",{class:"left"},"Fees (24H)",-1)),Ta={key:0,class:"right"},ma={key:1,class:"right"},Ra={class:"row"},Fa=_(()=>o("div",{class:"left"},"Rewards",-1)),Da={key:0,class:"right"},Pa={key:1,class:"right reward-right"},Va={class:"rewards-hover"},Ea={alt:""},qa={key:3,class:"no-data"},Ua={key:0,src:ge},Ma={key:1,src:fe};function Ha(e,j,J,Cs,hs,Q){const ns=Qs,ts=Xs,E=Ys,W=Zs,B=he,F=se,ds=xs,q=ce("image");return l(),r("div",ke,[o("div",we,[o("div",ye,[e.tabArr.length>1?(l(),r("div",Ae,[(l(!0),r(m,null,P(e.tabArr,(s,h)=>(l(),r("div",{key:h,class:R(["tag-item",s==e.pools.currentPoolTab?`tag-active tab-num-${e.tabArr.length}`:`tab-num-${e.tabArr.length}`]),onClick:C=>e.changeTab(s)},v(s),11,Ce))),128))])):b("",!0),y(ns,{ref:"childTokenSelectRef"},null,512)]),o("div",Se,[o("div",{class:R(["tab-item",e.isSelectAll?"tab-item-active":""]),onClick:j[0]||(j[0]=_s(s=>e.clickDisplayAll(),["stop"]))},[o("div",$e,[e.isSelectAll&&e.store.theme=="sui"?(l(),r("img",Oe)):b("",!0)]),Le],2),o("div",{class:R(["tab-item",e.isFarms?"tab-item-active tab-item-farms-active":""]),onClick:j[1]||(j[1]=_s(s=>e.clickFarms(),["stop"]))},[o("div",Ne,[e.isFarms&&e.store.theme=="sui"?(l(),r("img",je)):b("",!0)]),Be],2),o("div",Ie,[o("div",{class:"search-select search-label",onClick:j[2]||(j[2]=_s(()=>{e.store.setIsSelect("pools"),e.label=!e.label,e.select=!1},["stop"]))},[o("span",null,v(e.$t("newAdd.label")),1),o("div",null,[N(v(e.labelValue)+" ",1),(l(),r("svg",{"aria-hidden":"true",class:R(e.label?"show-icon icon":"icon")},me,2))]),e.label?(l(),r("div",Re,[(l(!0),r(m,null,P(e.labelList,(s,h)=>(l(),r("div",{key:h,class:"select-menu-item",onClick:C=>e.changeSortLabel(s)},v(s),9,Fe))),128))])):b("",!0)])]),o("div",De,[o("div",{class:"search-select",onClick:j[3]||(j[3]=_s(()=>{e.store.setIsSelect("pools"),e.select=!e.select,e.label=!1},["stop"]))},[o("span",null,v(e.$t("newAdd.sortBy")),1),o("div",null,[N(v(e.selectValue)+" ",1),Pe,(l(),r("svg",{"aria-hidden":"true",class:R(e.select?"show-icon icon":"icon")},Ee,2))]),e.select?(l(),r("div",qe,[(l(!0),r(m,null,P(e.selectList,(s,h)=>(l(),r("div",{key:h,class:"select-menu-item",onClick:C=>e.changeSort(s)},[N(v(s)+" ",1),Me],8,Ue))),128))])):b("",!0)])]),o("div",{class:"change-view",onClick:j[4]||(j[4]=s=>e.clickViewCard())},[e.isViewCard&&e.current[0]=="pools"?(l(),r("svg",He,Je)):(l(),r("svg",We,Ge))])])]),e.listLoading||e.isSwitchDisplayMode?(l(),r("div",Qe,[y(ts,{loading:e.listLoading||e.isSwitchDisplayMode,type:e.isViewCard?"poolsCard":"poolsList"},null,8,["loading","type"])])):b("",!0),!e.isSwitchDisplayMode&&!e.isViewCard&&!e.listLoading?(l(),r("div",Xe,[o("table",Ye,[o("thead",Ze,[o("tr",xe,[so,eo,oo,ao,lo,o("th",null,[o("span",ro,[N(" APR (24H) "),o("div",no,[y(E,{class:"noHover apr-hover-con"})])])]),to])]),o("tbody",io,[(l(!0),r(m,null,P(e.showList,s=>{var h,C,X,K,A,U,I,S,H,p,Y,i;return l(),r("tr",{key:s.address,class:R(["table-tr",e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none"]),onClick:g=>s.needReverse?e.router.push(`/deposit?poolAddress=${s.address}&tokena=${s.coinB.address}&tokenb=${s.coinA.address}&fee=${s.fee}`):e.router.push(`/deposit?poolAddress=${s.address}&tokena=${s.coinA.address}&tokenb=${s.coinB.address}&fee=${s.fee}`)},[o("td",null,[o("div",uo,[o("div",vo,[G(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(K=(X=e.pools)==null?void 0:X.tokensObj[s.coinB.address])!=null&&K.isSelfBuilt:(C=(h=e.pools)==null?void 0:h.tokensObj[s.coinA.address])!=null&&C.isSelfBuilt)?(l(),r("div",ho)):b("",!0)]),o("div",po,[G(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(U=(A=e.pools)==null?void 0:A.tokensObj[s.coinA.address])!=null&&U.isSelfBuilt:(S=(I=e.pools)==null?void 0:I.tokensObj[s.coinB.address])!=null&&S.isSelfBuilt)?(l(),r("div",_o)):b("",!0)]),o("div",go,[o("div",fo,[o("p",bo,[o("span",ko,[N(v(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),y(W,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),N(" - "),o("span",wo,[N(v(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),y(W,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",yo,v((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",Ao,$o)):b("",!0),(p=(H=e.pools)==null?void 0:H.tokensObj[s.coinA.address])!=null&&p.isSelfBuilt||(i=(Y=e.pools)==null?void 0:Y.tokensObj[s.coinB.address])!=null&&i.isSelfBuilt?(l(),r("div",Oo,[Lo,o("div",No,v(e.t("newAdd.poolWarning")),1)])):b("",!0)]),o("div",jo,[(l(!0),r(m,null,P(s.labels,(g,D)=>(l(),r("div",{key:D,class:R(["label",g])},[g!=="Native"?(l(),r("span",Bo,v(g),1)):b("",!0)],2))),128))])])])]),("checkNullObj"in e?e.checkNullObj:k(z))(e.store.statsData)?(l(),r("td",Io,[o("div",To,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",mo,"$"+v(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:k(V))(s.liqidity,2)),1)),("checkNullObj"in e?e.checkNullObj:k(z))(e.store.statsData)?(l(),r("td",Ro,[o("div",Fo,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",Do,"$"+v(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:k(V))(s.vol,2)),1)),Po,("checkNullObj"in e?e.checkNullObj:k(z))(e.store.statsData)?(l(),r("td",Vo,[o("div",Eo,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("td",qo,[(l(!0),r(m,null,P(s.rewardes,g=>{var D;return l(),r("div",{key:g.address,class:R(["rewarder-token",g.day===0?"reward-none":""])},[G(o("img",null,null,512),[[q,e.getCoinIcon((D=e.pools)==null?void 0:D.tokensObj[g.coinAddress])]]),o("div",Uo,[G(o("img",Mo,null,512),[[q,g.logoUrl?g.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:k(rs))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:k(rs))("/image/coins/sui-unknown.png")]]),o("span",null,v(`${g.day} ${g.symbol} per day`),1)])],2)}),128))])):(l(),r("td",Ho," ")),("checkNullObj"in e?e.checkNullObj:k(z))(e.store.statsData)?(l(),r("td",zo,[o("div",Jo,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",{key:8,class:R(s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"noCursor")},[o("span",Wo,[o("i",null,v(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:k(V))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:k(V))(s.apr,2))+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",Ko,[y(E,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):b("",!0)])],2)),o("td",null,[s.needReverse?(l(),vs(F,{key:0,class:"action-add",to:`/deposit?poolAddress=${s.address}&tokena=${s.coinB.address}&tokenb=${s.coinA.address}&fee=${s.fee}`},{default:gs(()=>[N("+")]),_:2},1032,["to"])):(l(),vs(F,{key:1,class:"action-add",to:`/deposit?poolAddress=${s.address}&tokena=${s.coinA.address}&tokenb=${s.coinB.address}&fee=${s.fee}`},{default:gs(()=>[N("+")]),_:2},1032,["to"]))])],10,co)}),128))])])])):b("",!0),!e.isSwitchDisplayMode&&e.isViewCard&&!e.listLoading?(l(),r("div",Go,[e.showList&&e.showList.length>0?(l(),r(m,{key:0},[(l(!0),r(m,null,P(e.showList,(s,h)=>(l(),vs(ds,{key:h,"l-item":s,"is-select-all":e.isSelectAll,"is-farms":e.isFarms},null,8,["l-item","is-select-all","is-farms"]))),128)),(l(!0),r(m,null,P(e.patchNumber,s=>(l(),r("div",{key:s,class:"patch-item"}))),128))],64)):b("",!0)])):b("",!0),o("div",Qo,[(l(!0),r(m,null,P(e.showList,s=>{var h,C,X,K,A,U,I,S,H,p,Y,i;return l(),r("div",{key:s.address,class:R([e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none","item"])},[o("div",Xo,[o("div",Yo,[o("div",Zo,[G(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(K=(X=e.pools)==null?void 0:X.tokensObj[s.coinB.address])!=null&&K.isSelfBuilt:(C=(h=e.pools)==null?void 0:h.tokensObj[s.coinA.address])!=null&&C.isSelfBuilt)?(l(),r("div",xo)):b("",!0)]),o("div",sa,[G(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(U=(A=e.pools)==null?void 0:A.tokensObj[s.coinA.address])!=null&&U.isSelfBuilt:(S=(I=e.pools)==null?void 0:I.tokensObj[s.coinB.address])!=null&&S.isSelfBuilt)?(l(),r("div",ea)):b("",!0)]),o("div",oa,[o("div",aa,[o("p",la,[o("span",ra,[N(v(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),y(W,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),N(" - "),o("span",na,[N(v(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),y(W,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",ta,v((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",da,ua)):b("",!0),(p=(H=e.pools)==null?void 0:H.tokensObj[s.coinA.address])!=null&&p.isSelfBuilt||(i=(Y=e.pools)==null?void 0:Y.tokensObj[s.coinB.address])!=null&&i.isSelfBuilt?(l(),r("div",va,[ha,o("div",pa,v(e.t("newAdd.poolWarning")),1)])):b("",!0)]),o("div",_a,[(l(!0),r(m,null,P(s.labels,(g,D)=>(l(),r("div",{key:D,class:R(["label",g])},[g!=="Native"?(l(),r("span",ga,v(g),1)):b("",!0)],2))),128))])])])]),o("div",fa,[o("div",ba,[ka,("checkNullObj"in e?e.checkNullObj:k(z))(e.store.statsData)?(l(),r("div",wa,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",{key:1,class:R(["right theme-right",s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"noCursor"])},[o("i",null,v(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:k(V))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:k(V))(s.apr,2))+"%",1),o("div",ya,[y(E,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2))]),o("div",Aa,[Ca,("checkNullObj"in e?e.checkNullObj:k(z))(e.store.statsData)?(l(),r("div",Sa,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",$a,"$"+v(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:k(V))(s.liqidity,2)),1))]),o("div",Oa,[La,("checkNullObj"in e?e.checkNullObj:k(z))(e.store.statsData)?(l(),r("div",Na,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",ja,"$"+v(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:k(V))(s.vol,2)),1))]),o("div",Ba,[Ia,("checkNullObj"in e?e.checkNullObj:k(z))(e.store.statsData)?(l(),r("div",Ta,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",ma,"$"+v(Number(s.fee_24_h)!==0&&Number(s.fee_24_h)<.01?"<0.01":("addCommom"in e?e.addCommom:k(V))(s.fee_24_h,2)),1))]),o("div",Ra,[Fa,("checkNullObj"in e?e.checkNullObj:k(z))(e.store.statsData)?(l(),r("div",Da,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",Pa,[(l(!0),r(m,null,P(s.rewardes,g=>{var D;return l(),r("div",{key:g.address,class:"rewarder-token"},[G(o("img",null,null,512),[[q,e.getCoinIcon((D=e.pools)==null?void 0:D.tokensObj[g.coinAddress])]]),o("div",Va,[G(o("img",Ea,null,512),[[q,g.logoUrl?g.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:k(rs))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:k(rs))("/image/coins/sui-unknown.png")]]),o("span",null,v(`${g.day} ${g.symbol} per day`),1)])])}),128))])):b("",!0)])]),s.needReverse?(l(),vs(F,{key:0,to:`/deposit?poolAddress=${s.address}&tokena=${s.coinB.address}&tokenb=${s.coinA.address}&fee=${s.fee}`,class:"add-btn"},{default:gs(()=>[N("+ Add Liquidity")]),_:2},1032,["to"])):(l(),vs(F,{key:1,to:`/deposit?poolAddress=${s.address}&tokena=${s.coinA.address}&tokenb=${s.coinB.address}&fee=${s.fee}`,class:"add-btn"},{default:gs(()=>[N("+ Add Liquidity")]),_:2},1032,["to"]))],2)}),128))]),!e.isSwitchDisplayMode&&e.store.poolAmount!=="--"&&e.store.poolAmount<=0&&!e.listLoading?(l(),r("div",qa,[e.theme=="default"?(l(),r("img",Ua)):(l(),r("img",Ma)),o("span",null,v(e.$t("common.poolsNotFound")),1)])):b("",!0)])}const cl=ie(be,[["render",Ha],["__scopeId","data-v-033660b8"]]);export{cl as default};
