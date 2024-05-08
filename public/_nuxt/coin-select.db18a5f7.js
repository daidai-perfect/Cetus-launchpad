import{i as N}from"./import-icon.de3e6c66.js";import{b as ue,u as oe,a as ae}from"./sha256.91c60824.js";import{a as ce,a1 as de,L as be,y as pe,l as y,r as w,H as ve,q as U,al as _e,e as he,Q as D,s as me,o as i,c as te,w as m,h as l,t as z,a8 as fe,f as r,x as I,F as Z,E as q,A as E,u as H,v as d,i as $,j as K,z as ke,P as ge,am as Ce,S as ye,p as we,k as Se}from"./entry.a6654d09.js";/* empty css              *//* empty css              */import{u as Le,a as Te,p as Ie,y as $e}from"./pool.58e56ed3.js";import{_ as Ne}from"./img-no-Positions_2x.86cc28cc.js";import{_ as Oe}from"./img-no-Positions_2x.6abca492.js";const Ae=ce({components:{Modal:de,LoadingOutlined:be},props:{existingCoins:{type:String,default:""},lastSelectCoin:{type:String,default:""},isCreatePoolToCoin:{type:Boolean,default:!1},isCreatePoolFromCoin:{type:Boolean,default:!1}},setup(s,_){const{t:n,locale:le}=pe(),Q=ue(),f=y(()=>Q),S=Le(),c=y(()=>S),P=oe(),h=y(()=>P),O=y(()=>{var t;return(t=h.value)==null?void 0:t.filterCreatePoolCoin}),j=y(()=>{const t=[n("tab.all"),n("tab.native")],u=Array.from(new Set(c.value.tokens.flatMap(p=>p.labels?p.labels:null)));return h.value.theme=="default"?t.concat(u):[n("tab.all"),n("tab.native"),n("tab.wormhole"),n("tab.celer")]}),b=w(n("tab.all")),o=w(n("tab.all")),C=oe(),M=y(()=>C.chainName),L=w([]),A=w(null);ve(()=>{});const B=w(!1);U(b,t=>{t!==n("tab.all")&&(B.value=!1),t==n("tab.all")?o.value=n("tab.all"):t==n("tab.layerZero")?o.value=n("tab.layerZero"):t==n("tab.wormhole")?o.value=n("tab.wormhole"):t==n("tab.celer")?o.value=n("tab.celer"):t==n("tab.native")&&(o.value=n("tab.native")),R(A.value)});const R=async t=>{var J,X,Y,V,x,ee,se;let u=[],p=c.value.tokens;if(!(h.value.chainName&&p&&p[0]&&h.value.chainName.toLowerCase().includes((J=p[0])==null?void 0:J.chain))){L.value=[];return}let F=p;if(t&&t.split("::")&&t.split("::").length==3&&M.value=="Sui"){const a=Te("Sui");try{const e=c.value.tokensObj[t]||await a.getTokenBySymbol(c.value.tokens,t);e&&((X=p.filter(v=>(v==null?void 0:v.address)===(e==null?void 0:e.address)))==null?void 0:X.length)<1&&(S.setNewTokens({[t]:e}),F=p.concat(e))}catch(e){console.log("searchToken##err##",e)}}let G=!1;for(const a of Object.keys(F)){let e=_e(F[a]);const v=f.value.assets[e.address]&&f.value.assets[e.address].balance?Ie(f.value.assets&&f.value.assets[e.address].balance,e.decimals):0;s.lastSelectCoin&&e&&e.address===s.lastSelectCoin?(e.unusable=!0,G=!0):e.unusable=!1;const ie=((Y=c.value.tokensObj[e.address])==null?void 0:Y.labels)&&((V=c.value.tokensObj[e.address])==null?void 0:V.labels[0]),re=c.value.tokensObj[e.address]?(x=c.value.tokensObj[e.address])==null?void 0:x.name:e.name;e={...e,balance:v,labels:ie,name:re,sort:(h.value.chainName==="Aptos"?e.symbol=="APT":e.symbol=="SUI")?1:-1},u.push(e)}if(!G&&c.value.tokensObj[s.lastSelectCoin]){const a={...c.value.tokensObj[s.lastSelectCoin],unusable:!0};u.push(a)}let T;f.value.address?T=u.sort((a,e)=>e.balance-a.balance):T=u;let k=[];if(t){const a=T.filter(e=>e.symbol.toLowerCase().indexOf(t.toLowerCase())!==-1||e.address.toLowerCase().indexOf(t.toLowerCase())!==-1||e.address.toLowerCase().indexOf($e(t).full_address.toLowerCase())!==-1||e.name.toLowerCase().indexOf(t.toLowerCase())!==-1);b.value!==n("tab.all")?k=a.filter(v=>b.value==n("tab.native")?!v.labels||v.labels=="Native":v.labels&&v.labels.toLowerCase()==b.value.toLowerCase()):k=a}else b.value!==n("tab.all")?k=T.filter(e=>b.value==n("tab.native")?!e.labels||e.labels=="Native":e.labels&&e.labels.toLowerCase()==b.value.toLowerCase()):k=T;s.isCreatePoolToCoin?L.value=(ee=k.filter(a=>O.value[a==null?void 0:a.address]))==null?void 0:ee.sort((a,e)=>e.sort-a.sort).sort((a,e)=>e.unusable-a.unusable):L.value=k.sort((a,e)=>e.sort-a.sort).sort((a,e)=>e.unusable-a.unusable),s.isCreatePoolFromCoin&&(L.value=(se=k.filter(a=>!O.value[a==null?void 0:a.address]))==null?void 0:se.sort((a,e)=>e.sort-a.sort).sort((a,e)=>e.unusable-a.unusable))},ne=t=>{t.unusable||(_.emit("onSelect",t),_.emit("onClose"))};U(()=>[A.value,B.value],([t,u])=>{R(t)},{immediate:!0});const W=w([]);return U(()=>c.value.tokens,t=>{t&&(R(A.value),W.value=t.filter(u=>(s.lastSelectCoin&&u.address===s.lastSelectCoin?u.unusable=!0:u.unusable=!1,u.suggested_priority&&u.suggested_priority>0)).sort((u,p)=>Number(p.suggested_priority)-Number(u.suggested_priority)))},{immediate:!0}),{getCoinIcon:t=>{var u;return(t==null?void 0:t.logoURI)||(t==null?void 0:t.logo_url)||((u=c.value.tokensObj[t==null?void 0:t.address])==null?void 0:u.logo_url)||(h.value.theme==="default"?N("/image/coins/unknown.png"):N("/image/coins/sui-unknown.png"))},popularList:W,pools:c,t:n,chainName:M,tabList:j,currentTab:b,addCommom:ae,tokenList:L,importIcon:N,keyword:A,wallet:f,toSelect:ne,store:h,isShowAll:B}}}),Pe=""+globalThis.__publicAssetsURL("sui-image/token-warning@2x.png");const g=s=>(we("data-v-1d7250bf"),s=s(),Se(),s),je=g(()=>l("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Me={class:"coin-select-modal"},Be={class:"search-input"},Re=["placeholder"],Fe=g(()=>l("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),Ue=[Fe],De={key:0,class:"popular"},ze=["onClick"],Ze={class:"tab-list"},qe=["onClick"],Ee={key:0,class:"item"},He=g(()=>l("div",{class:"line"},null,-1)),Ke={class:"coin-list-box"},Qe={key:0,class:"coin-list"},We=["onClick"],Ge={class:"left"},Je={class:"token-icon",alt:""},Xe=g(()=>l("img",{class:"token-waring",src:Pe,alt:""},null,-1)),Ye={class:"name-box"},Ve=["onClick"],xe=g(()=>l("svg",{class:"icon","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-icon_copy1"})],-1)),es={key:0,class:"label"},ss={class:"balance-box"},os={class:"balance"},ts={key:0},as={key:1},ls={key:2},ns={key:3},is=g(()=>l("p",null,null,-1)),rs={key:1,class:"no-data"},us={key:0,class:"token-loading"},cs={key:1,class:"no-data-content"},ds={key:0,src:Ne},bs={key:1,src:Oe},ps=g(()=>l("svg",{class:"icon","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-icon-information"})],-1));function vs(s,_,n,le,Q,f){const S=ge,c=D("loading-outlined"),P=Ce,h=ye,O=D("vue-scroll"),j=D("Modal"),b=me("image");return i(),te(j,{title:s.$t("modal.selectTokenModalTitle"),class:"select-mod",width:420,centered:"",visible:!0,footer:null,onCancel:_[2]||(_[2]=o=>s.$emit("onClose"))},{closeIcon:m(()=>[je]),default:m(()=>[l("div",Me,[l("div",Be,[z(l("input",{"onUpdate:modelValue":_[0]||(_[0]=o=>s.keyword=o),onkeyup:"value=value.replace(/[^[a-zA-Z0-9\\s]+$/g,'')",placeholder:s.$t("inputPlaceholder.selectTokenModalPlaceholder")},null,8,Re),[[fe,s.keyword]]),s.keyword?(i(),r("svg",{key:0,class:"clear-icon icon modal-icon-close","aria-hidden":"true",onClick:_[1]||(_[1]=o=>s.keyword="")},Ue)):I("",!0)]),s.popularList&&s.popularList.length>0?(i(),r("div",De,[(i(!0),r(Z,null,q(s.popularList,o=>(i(),r("div",{key:o.address,class:E(["img-box",o.unusable?"img-box-unusable":"img-box-usable"]),onClick:C=>s.toSelect(o)},[z(l("img",null,null,512),[[b,o.icon||o.logo_url||(s.store.theme=="default"?("importIcon"in s?s.importIcon:H(N))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:H(N))("/image/coins/sui-unknown.png"))]]),l("span",null,d(o.symbol),1)],10,ze))),128))])):I("",!0),l("div",Ze,[(i(!0),r(Z,null,q(s.tabList,(o,C)=>(i(),r("div",{key:C,class:E(["item-container",s.currentTab==o?"item-container-active item-container":"item-container"]),onClick:M=>s.currentTab=o},[o!==null&&o!=="test"?(i(),r("div",Ee,d(o),1)):I("",!0)],10,qe))),128))]),He,l("div",Ke,[$(O,null,{default:m(()=>[s.tokenList&&s.tokenList.length>0?(i(),r("ul",Qe,[(i(!0),r(Z,null,q(s.tokenList,o=>(i(),r("li",{key:o.address,class:E(o.unusable?"unusable":""),onClick:C=>s.toSelect(o)},[l("div",Ge,[z(l("img",Je,null,512),[[b,s.getCoinIcon(o)]]),o.isSelfBuilt?(i(),te(S,{key:0,placement:"right","arrow-point-at-center":""},{title:m(()=>[l("span",null,d(s.t("newAdd.notCetusTokenList")),1)]),default:m(()=>[Xe]),_:1})):I("",!0),l("div",Ye,[l("div",null,[K(d(o.symbol)+" ",1),l("p",{class:"copy-text",onClick:ke(C=>s.store.copy(o&&o.address),["stop"])},[l("span",null,d(o.address&&o.address.substr(0,4))+" ... "+d(o.address&&o.address.substr(o.address.length-4,4)),1),xe],8,Ve)]),l("p",null,[K(d(o.name)+" ",1),s.chainName!=="Sui"?(i(),r("span",es,d(o.labels?`(${o.labels})`:""),1)):I("",!0)])])]),l("div",ss,[l("div",os,[s.wallet.loading?(i(),r("div",ts,[$(P,null,{default:m(()=>[$(c)]),_:1})])):o.balance&&s.wallet.connected?(i(),r("div",as,d(("addCommom"in s?s.addCommom:H(ae))(o.balance,o.decimals)),1)):!o.balance&&s.wallet.connected?(i(),r("div",ls,"0")):(i(),r("div",ns))]),is])],10,We))),128))])):(i(),r("div",rs,[s.pools.isTokenLoading?(i(),r("div",us,[$(h)])):(i(),r("div",cs,[s.store.theme=="default"?(i(),r("img",ds)):(i(),r("img",bs)),l("p",null,d(s.t("newAdd.noTokensFound")),1),l("div",null,[K(d(s.t("newAdd.enterCoinType"))+" ",1),$(S,{placement:"bottom","arrow-point-at-center":""},{title:m(()=>[l("span",null,d(s.t("newAdd.uniqueIdOfCoin")),1)]),default:m(()=>[ps]),_:1})])]))]))]),_:1})])])]),_:1},8,["title"])}const Ss=he(Ae,[["render",vs],["__scopeId","data-v-1d7250bf"]]);export{Ss as _,Pe as a};
