import{_ as ce}from"./upgrade-select-input.23546b1c.js";import{_ as de}from"./upgrade-loading.bd83c449.js";import{_ as me}from"./upgrade-position-item.d1f7c01d.js";import{a as pe,r as f,l as ve,b as ge,m as b,D as P,y as he,C as be,N as fe,T as _e,e as ye,M as ke,o as l,f as r,h as p,c as q,x as k,F as I,s as M,i as F,K as Z,v as w,z as H,j as Q,w as Se,B as Le,p as Te,k as we}from"./entry.a7bc8957.js";import{a as Ae,u as Pe}from"./pool.ef5dfa1f.js";import{u as $e}from"./notifi.9d9661f7.js";import{c as Oe}from"./index.3daa4341.js";import{u as Ce,c as Ue}from"./index.52313906.js";import{i as X}from"./import-icon.de3e6c66.js";import{T as Ne}from"./total-position.937b91b9.js";import{_ as Y}from"./icon_on_2x.5e96733d.js";import{_ as Re}from"./img-no-Positions_2x.5e18a7b2.js";import{_ as Be}from"./img-no-Positions_2x.a4dab425.js";import{_ as De}from"./img-connect-wallet_2x.b29c792d.js";import{_ as Ee}from"./img-connect-wallet_2x.5d8b0f0b.js";import"./coin-select.f97e0b84.js";/* empty css              *//* empty css              */import"./icon-tooltip.42b69370.js";import"./token-warning_2x.0538a696.js";/* empty css              */import"./index.8c3bc3bd.js";import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./status-block.8b5d5038.js";import"./farms-valid-range.f8979fcb.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";import"./farms.e2d78a3f.js";import"./icon_farms_2x.30c2637c.js";import"./icon_rewards_2x.cd5c3978.js";import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";import"./farms.a44ffef9.js";import"./useWhale.a6489977.js";/* empty css              *//* empty css              */import"./icon-selected_3x.873560ed.js";import"./coin-pair-name.1498a895.js";import"./token-warning.96fdb1f5.js";import"./no-data.147c10c4.js";const Ge=pe({components:{TotalPosition:Ne},setup(){const o=f(!1),{t:d}=ve(),W=f(["position"]),$=ge(),z=f(""),N=Ae(),v=b(()=>N),G=b(()=>v.value.chainName?Ue[v.value.chainName]:{});let m=f([]);const g=Pe(),a=b(()=>g),u=Ce(),c=b(()=>u),O=f(!1),C=f(d("tab.all")),j=f([d("tab.layerZero"),d("tab.wormhole"),d("tab.celer")]),R=f(!0),ee=f("TVL"),J=()=>{o.value=!0,m.value=[],c.value.address&&(g.setPools(V.value.poolConfigList,v.value.chainName),g.getMyPositons(c.value.address,a.value.poolsObj,v.value.chainName)),setTimeout(()=>{o.value=!1},1e3)},oe=b(()=>{const s=Array.from(new Set(a.value.poolConfigList.flatMap(e=>!(e!=null&&e.category)||(e==null?void 0:e.category)==""?"All":e==null?void 0:e.category)));return console.log(s,"newArr"),s.length<=1?[]:s}),se=s=>{a.value.setCurrentPoolTab(s)};P(()=>v.value.isRefresh,s=>{var e,t,n,i;s&&((i=(n=(t=(e=$==null?void 0:$.currentRoute)==null?void 0:e.value)==null?void 0:t.name)==null?void 0:n.split("-"))==null?void 0:i[1])=="position"&&J()}),he(()=>{m.value=[],document.addEventListener("click",()=>{O.value=!1}),g.setMyPositionsLoading(!0)}),be(()=>{document.addEventListener("click",()=>{O.value=!1})}),fe(()=>{c.value.connected||(m.value=[])});const K=()=>{o.value=!0;let s=[];a.value.myPositions.forEach(e=>{var A,B,D,E;v.value.addressLpTokens[e.address];let t=e.positionSource=="farming",n,i;const h=e.amountA*((A=a.value.RATES[e.token_a.address])==null?void 0:A.price),_=e.amountB*((B=a.value.RATES[e.token_b.address])==null?void 0:B.price);(D=a.value.RATES[e.token_a.address])!=null&&D.price&&((E=a.value.RATES[e.token_b.address])!=null&&E.price)?(n=h+_,i=h+_):(n=" --",i=0),console.log(a.value.currentPoolTab,"##pools.value.currentPoolTab"),(a.value.currentPoolTab=="All"||a.value.currentPoolTab!=="All"&&e.category==a.value.currentPoolTab)&&s.push({...e,amountUSD:n,amountUSDOrigin:i,tokenARates:h,tokenBRates:_,isStableFarming:t})}),C.value!="All"?R.value?(m.value=s.sort((e,t)=>Number(t.amountUSDOrigin)-Number(e.amountUSDOrigin)),o.value=!1):(m.value=s.sort((e,t)=>Number(e.amountUSDOrigin)-Number(t.amountUSDOrigin)),o.value=!1):R.value?(m.value=s.sort((e,t)=>t.amountUSDOrigin-e.amountUSDOrigin),o.value=!1):(m.value=s.sort((e,t)=>e.amountUSDOrigin-t.amountUSDOrigin),o.value=!1),console.log(m.value,"list.value========>")};P(()=>[a.value.myPositions,a.value.RATES],([s,e])=>{s&&e&&(console.log("0605==>updateLpList9099999"),K())},{immediate:!0}),P(()=>[c.value.address,a.value.poolConfigList,a.value.poolsObj,v.value.chainName],([s,e,t,n])=>{var i,h,_;s&&e&&e.length>0&&n&&(n!=null&&n.toLowerCase().includes((i=e[0])==null?void 0:i.chain))&&!Oe(t)&&(n==="Aptos"?e.length===Object.values(t).length:(_=(h=Object.values(t)[0])==null?void 0:h.chain)!=null&&_.includes("sui"))&&(console.log(t,e,"0605==>getMyPositons9099999"),g.getMyPositons(c.value.address,t,n))},{immediate:!0,deep:!0}),P(()=>c.value.address,s=>{s||g.setMyPositions()},{immediate:!0}),P(()=>[C.value,R.value,a.value.currentPoolTab],([s])=>{K()});const te=s=>{const e=[];j.value.forEach((t,n)=>{t==s?e[n]=C.value:e[n]=t}),j.value=e,C.value=s},U=$e(),y=b(()=>U),V=b(()=>g),ae=async s=>{await U.getSourceGroups();const e=y.value.sourceGroups&&y.value.sourceGroups.length>0&&y.value.sourceGroups[0]&&y.value.sourceGroups[0].sources||[];console.log(e,"####source"),console.log(s,"###myPositions");for(let t=0;t<e.length;t++){const{pool_address:n,position_index:i}=JSON.parse(e[t].blockchainAddress);let h=!1,_;for(let A=0;A<s.length;A++){const{poolAddress:B,index:D,positionSource:E,name:ue}=s[A];n==B&&Number(E=="clmm"?D:ue.split("-")[1])==Number(i)&&(h=!0),_={pool_address:n,position_index:i}}h||await U.subscribePosition(_,"",!1,!1)}},ne=async()=>{await U.getSourceGroups();const s=y.value.sourceGroups&&y.value.sourceGroups.length>0&&y.value.sourceGroups[0]&&y.value.sourceGroups[0].sources||[];for(let e=0;e<s.length;e++){const{pool_address:t,position_index:n}=JSON.parse(s[e].blockchainAddress),{name:i}=s[e],h={pool_address:t,position_index:n};await U.subscribePosition(h,i,!1,!1)}},le=b(()=>V.value.myPositionsLoading);P(()=>V.value.myPositions,(s,e)=>{G.value.hasNotifi&&(s&&s.length>0&&e&&e.length!==s.length?ae(s):s&&s.length==0&&!le.value&&ne())},{immediate:!0});const re=s=>{var e;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((e=a.value.tokensObj[s==null?void 0:s.address])==null?void 0:e.logo_url)||(v.value.theme==="default"?X("/image/coins/unknown.png"):X("/image/coins/sui-unknown.png"))},S=f(null),L=b(()=>S.value&&S.value.firstToken?S.value.firstToken:null),T=b(()=>S.value&&S.value.lastToken?S.value.lastToken:null),ie=b(()=>{let s=[];s=m.value;const e=s.filter((t,n)=>L.value&&T.value?t.coinA.symbol==L.value.symbol&&t.coinB.symbol==T.value.symbol||t.coinA.symbol==T.value.symbol&&t.coinB.symbol==L.value.symbol:L.value?t.coinA.symbol.toLowerCase().includes(L.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(L.value.symbol.toLowerCase()):T.value?t.coinA.symbol.toLowerCase().includes(T.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(T.value.symbol.toLowerCase()):s);return a.value.myPositionsLoading||(N.setPositiomAmount(e.length),g.setPositionShowList(e)),e});return _e(()=>{N.setPositiomAmount("--"),g.setPositionShowList([])}),{tabArr:oe,changeTab:se,showList:ie,childTokenSelectRef:S,firstToken:L,lastToken:T,getCoinIcon:re,changeSortLabel:te,label:O,labelList:j,labelValue:C,select:R,selectValue:ee,t:d,pools:a,store:v,wallet:c,list:m,clickRefresh:J,refresh:o,current:W,router:$,searchKey:z}}});const x=o=>(Te("data-v-bdd60a2a"),o=o(),we(),o),je={class:"upgrade-position-list-container"},Ve={class:"position-card-top"},Ie={class:"content-top"},Me={class:"content-top-left"},Fe={key:0,class:"tag-list"},We=["onClick"],ze={class:"content-top-right"},Je={class:"value"},Ke=x(()=>p("use",{"xlink:href":"#icon-icon_on"},null,-1)),qe=[Ke],Ze={key:0,class:"select-item"},He=["onClick"],Qe={class:"search-select-box"},Xe=x(()=>p("span",null,"TVL",-1)),Ye={key:0,src:Y,alt:""},xe={key:1,class:"fan-img",src:Y,alt:""},eo={key:0,class:"upgrade-loading"},oo={key:1,class:"position-list"},so={key:2,class:"no-data"},to={key:0,src:Re,alt:""},ao={key:1,src:Be,alt:""},no={key:3,class:"no-data"},lo={key:0,src:De,alt:""},ro={key:1,src:Ee,alt:""};function io(o,d,W,$,z,N){const v=ke("TotalPosition"),G=ce,m=de,g=me,a=Le;return l(),r("div",je,[p("div",Ve,[o.wallet&&o.wallet.address?(l(),q(v,{key:0})):k("",!0),p("div",Ie,[p("div",Me,[o.tabArr.length>1?(l(),r("div",Fe,[(l(!0),r(I,null,M(o.tabArr,(u,c)=>(l(),r("div",{key:c,class:H(["tag-item",u==o.pools.currentPoolTab?`tag-active tab-num-${o.tabArr.length}`:`tab-num-${o.tabArr.length}`]),onClick:O=>o.changeTab(u)},w(u),11,We))),128))])):k("",!0),F(G,{ref:"childTokenSelectRef"},null,512)]),p("div",ze,[o.store.theme=="default"?(l(),r("div",{key:0,class:"search-label",onClick:d[0]||(d[0]=Z(u=>o.label=!o.label,["stop"]))},[p("span",null,w(o.$t("newAdd.label")),1),p("div",Je,w(o.labelValue),1),(l(),r("svg",{"aria-hidden":"true",class:H(o.label?"show-icon icon":"icon")},qe,2)),o.label?(l(),r("div",Ze,[(l(!0),r(I,null,M(o.labelList,(u,c)=>(l(),r("div",{key:c,class:"select-menu-item",onClick:O=>o.changeSortLabel(u)},w(u),9,He))),128))])):k("",!0)])):k("",!0),p("div",Qe,[p("div",{class:"search-select",onClick:d[1]||(d[1]=Z(u=>o.select=!o.select,["stop"]))},[Q(w(o.$t("newAdd.sortBy"))+" ",1),p("div",null,[Xe,o.select?(l(),r("img",Ye)):(l(),r("img",xe))])])])])])]),o.pools.myPositionsLoading&&o.wallet.connected?(l(),r("div",eo,[F(m,{loading:o.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):k("",!0),o.showList&&o.showList.length>0&&o.wallet.connected&&!o.pools.myPositionsLoading?(l(),r("div",oo,[(l(!0),r(I,null,M(o.showList,(u,c)=>(l(),q(g,{key:c,"p-item":u},null,8,["p-item"]))),128))])):k("",!0),o.showList&&o.showList.length<=0&&!o.pools.myPositionsLoading&&o.wallet.connected?(l(),r("div",so,[o.store.theme=="default"?(l(),r("img",to)):(l(),r("img",ao)),p("span",null,w(o.$t("common.noLiquidityPositions")),1)])):k("",!0),o.wallet.connected?k("",!0):(l(),r("div",no,[o.store.theme=="default"?(l(),r("img",lo)):(l(),r("img",ro)),F(a,{class:"connect-wallet",onClick:d[2]||(d[2]=u=>o.wallet.setIsShowWalletModal(!0))},{default:Se(()=>[Q(w(o.$t("button.connectWallet")),1)]),_:1})]))])}const Qo=ye(Ge,[["render",io],["__scopeId","data-v-bdd60a2a"]]);export{Qo as default};
