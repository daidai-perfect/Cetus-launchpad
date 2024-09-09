import{i as Y}from"./import-icon.de3e6c66.js";import{m as Te,b as Z,A as me,p as $e}from"./index.7ae3cf46.js";import{ag as je,ah as De,ai as ge,aj as te,ak as Ee,al as ie,am as Me,an as Ne,ao as Ue,a as Fe,Y as Ke,a3 as qe,l as ze,m as $,r as I,y as Ze,D as V,ap as Ge,e as Je,M as X,q as We,o as i,c as R,w as A,z as j,h as a,t as ae,a9 as Ye,f as d,x as w,F as x,s as ee,u as U,v as C,K as W,i as z,j as re,L as He,aq as Qe,B as Ve,J as Xe,p as Re,k as xe}from"./entry.9f1d8bf2.js";/* empty css              *//* empty css              */import{u as eo,m as oo}from"./index.8db8d6d5.js";import{u as so,a as ye,b as no}from"./pool.50412446.js";import{I as lo}from"./icon-tooltip.a301dfd5.js";import{_ as to}from"./token-warning_2x.e7e03a66.js";import{_ as ao}from"./img-no-Positions_2x.d764a0a9.js";import{_ as ro}from"./img-no-Positions_2x.c24d6017.js";function io(e,l){var t=-1,b=je(e)?Array(e.length):[];return De(e,function(g,k,h){b[++t]=l(g,k,h)}),b}function co(e,l){var t=e.length;for(e.sort(l);t--;)e[t]=e[t].value;return e}function uo(e,l){if(e!==l){var t=e!==void 0,b=e===null,g=e===e,k=ge(e),h=l!==void 0,v=l===null,y=l===l,u=ge(l);if(!v&&!u&&!k&&e>l||k&&h&&y&&!v&&!u||b&&h&&y||!t&&y||!g)return 1;if(!b&&!k&&!u&&e<l||u&&t&&g&&!b&&!k||v&&t&&g||!h&&g||!y)return-1}return 0}function po(e,l,t){for(var b=-1,g=e.criteria,k=l.criteria,h=g.length,v=t.length;++b<h;){var y=uo(g[b],k[b]);if(y){if(b>=v)return y;var u=t[b];return y*(u=="desc"?-1:1)}}return e.index-l.index}function vo(e,l,t){l.length?l=te(l,function(k){return ie(k)?function(h){return Me(h,k.length===1?k[0]:k)}:k}):l=[Ee];var b=-1;l=te(l,Ne(Ue));var g=io(e,function(k,h,v){var y=te(l,function(u){return u(k)});return{criteria:y,index:++b,value:k}});return co(g,function(k,h){return po(k,h,t)})}function fo(e,l,t,b){return e==null?[]:(ie(l)||(l=l==null?[]:[l]),t=b?void 0:t,ie(t)||(t=t==null?[]:[t]),vo(e,l,t))}const ko=Fe({components:{Modal:Ke,LoadingOutlined:qe,IconTooltip:lo},props:{existingCoins:{type:String,default:""},lastSelectCoin:{type:String,default:""},isCreatePoolToCoin:{type:Boolean,default:!1},haveImportBtn:{type:Boolean,default:!1},isAllowBan:{type:Boolean,default:!1},isCreatePoolFromCoin:{type:Boolean,default:!1}},setup(e,l){const{t,locale:b}=ze(),g=eo(),k=$(()=>g),h=so(),v=$(()=>h),y=ye(),u=$(()=>y),q=I(!1),G=$(()=>{var o;return(o=u.value)==null?void 0:o.filterCreatePoolCoin}),B=I("Default"),oe=$(()=>{const o=[t("tab.all"),t("tab.native")],c=Array.from(new Set(v.value.tokens.flatMap(p=>p.labels?p.labels:null)));return u.value.theme=="default"?o.concat(c):[t("tab.all"),t("tab.native"),t("tab.wormhole"),t("tab.celer")]}),D=I(t("tab.all")),P=I(t("tab.all")),H=ye(),s=$(()=>H.chainName),_=I([]),E=$(()=>u.value.importTokenList),T=I(null);Ze(()=>{});const se=I(!1);V(D,o=>{o!==t("tab.all")&&(se.value=!1),o==t("tab.all")?P.value=t("tab.all"):o==t("tab.layerZero")?P.value=t("tab.layerZero"):o==t("tab.wormhole")?P.value=t("tab.wormhole"):o==t("tab.celer")?P.value=t("tab.celer"):o==t("tab.native")&&(P.value=t("tab.native")),J(T.value)});const ne=I(!1),J=async o=>{var ue,pe,ve,fe,ke,be,he,Ce,_e;o||(ne.value=!1),console.log("🚀 ~ updateTokenList ~ updateTokenList:");let c=[];const p=Object.fromEntries((ue=v.value.tokens)==null?void 0:ue.map(r=>[r.address,r]));let f=B.value=="Default"?v.value.tokens:E.value;if(console.log("🚀 ~ updateTokenList ~ tokens:",f),B.value=="Default"&&!(u.value.chainName&&f&&f[0]&&u.value.chainName.toLowerCase().includes((pe=f[0])==null?void 0:pe.chain))){_.value=[];return}let N=f;if(console.log("🚀 ~ updateTokenList ~ allTokenList:",N),console.log("🚀 ~ updateTokenList ~ keyword:",o),o&&o.split("::")&&o.split("::").length==3&&!(p!=null&&p.hasOwnProperty(o))){if(s.value=="Sui"){const r=no("Sui");try{let n=v.value.tokensObj[me(o)]||v.value.notTrustedObj[me(o)]||await r.getTokenBySymbol(v.value.tokens,o);n&&((ve=f.filter(S=>(S==null?void 0:S.address)===(n==null?void 0:n.address)))==null?void 0:ve.length)<1&&((fe=u.value.importTokenListObj)!=null&&fe.hasOwnProperty(n==null?void 0:n.address)?(B.value="Imported",q.value=!0):e.haveImportBtn&&(ne.value=!0),n={...n,address:(n==null?void 0:n.address.toLowerCase())=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::sui"?"0x2::sui::SUI":n==null?void 0:n.address},N=f.concat(n),console.log("🚀 ~ updateTokenList ~ allTokenList:",N))}catch(n){console.log("searchToken##err##",n)}}}else q.value=!1;console.log("🚀 ~ updateTokenList ~ showDefaultTip.value:",q.value);for(const r of Object.keys(N)){let n=Ge(N[r]);const S=k.value.assets[n.address]&&k.value.assets[n.address].balance?$e(k.value.assets&&k.value.assets[n.address].balance,n.decimals):0;e.lastSelectCoin&&n&&n.address===e.lastSelectCoin?n.unusable=!0:n.unusable=!1;const m=((ke=v.value.tokensObj[n.address])==null?void 0:ke.labels)&&((be=v.value.tokensObj[n.address])==null?void 0:be.labels[0]),K=v.value.tokensObj[n.address]?(he=v.value.tokensObj[n.address])==null?void 0:he.name:n.name;n={...n,balance:S,labels:m,name:K,sort:(u.value.chainName==="Aptos"?n.symbol=="APT":n.symbol=="SUI")?1:-1},c.push(n)}let L;k.value.address?L=c.sort((r,n)=>n.balance-r.balance):L=c;let F=[];if(o){const r=o.toLowerCase();console.log("🚀 ~ file: coin-select.vue:548 ~ updateTokenList ~ keyword:",o);const n=L.filter(S=>S.symbol.toLowerCase().indexOf(r)!==-1||S.address.toLowerCase().indexOf(r)!==-1||S.address.toLowerCase().indexOf(oo(o).full_address.toLowerCase())!==-1||S.name.toLowerCase().indexOf(r)!==-1);console.log("🚀 ~ file: coin-select.vue:556 ~ updateTokenList ~ result:",n),F=n}else D.value!==t("tab.all")?F=L.filter(n=>D.value==t("tab.native")?!n.labels||n.labels=="Native":n.labels&&n.labels.toLowerCase()==D.value.toLowerCase()):F=L;if(console.log("🚀 ~ file: coin-select.vue:556 ~ updateTokenList ~ props.isCreatePoolToCoin:",e.isCreatePoolToCoin),console.log("🚀 ~ file: coin-select.vue:556 ~ updateTokenList ~ props.isCreatePoolFromCoin:",e.isCreatePoolFromCoin),e.isCreatePoolToCoin?_.value=(Ce=F.filter(r=>G.value[r==null?void 0:r.address]))==null?void 0:Ce.sort((r,n)=>n.sort-r.sort).sort((r,n)=>n.unusable-r.unusable):_.value=F.sort((r,n)=>n.sort-r.sort).sort((r,n)=>n.unusable-r.unusable),e.isCreatePoolFromCoin&&(_.value=(_e=F.filter(r=>!G.value[r==null?void 0:r.address]))==null?void 0:_e.sort((r,n)=>n.sort-r.sort).sort((r,n)=>n.unusable-r.unusable)),o){const r=o.toLowerCase(),n=F.map(m=>{let K=0;return m.symbol.toLowerCase()===r||m.name.toLowerCase()===r||m.address.toLowerCase()===r?K=1e3:m.symbol.toLowerCase().indexOf(r)>-1?K=100:m.name.toLowerCase().indexOf(r)>-1?K=10:m.address.toLowerCase().indexOf(r)>-1&&(K=1),{...m,coin_priorityNmu:Number((m==null?void 0:m.coin_priority)||"0"),balanceNum:Number(m==null?void 0:m.balance),mark:K}});console.log("🚀 ~ file: coin-select.vue:613 ~ addMarkTokenList ~ addMarkTokenList:",n);const S=fo(n,["mark","balanceNum","coin_priorityNmu"],["desc","desc","desc"]);_.value=S}},we=o=>{e.isAllowBan&&o.unusable||(o.unusable&&!T.value&&l.emit("onClose"),console.log("🚀🚀🚀 ~ file: coin-select.vue:589 ~ toSelect ~ props.isAllowBan:",e.isAllowBan,o),l.emit("onSelect",o),l.emit("onClose"))};V(()=>[T.value,se.value,B.value],([o,c,p])=>{console.log("🚀🚀🚀 ~ file: coin-select.vue:601 ~ setup ~ currentTokenTab:",p),J(o)});const Q=$(()=>s.value=="Aptos"?u.value.collectTokenListAptos:(console.log("🚀🚀🚀 ~ file: coin-select.vue:610 ~ collectList ~ store.value.collectTokenListSui:",u.value.collectTokenListSui),u.value.collectTokenListSui)),de=I([]),M=I({}),le=I(!0);V(()=>[v.value.tokens,E.value,le.value],([o,c,p])=>{if(o&&o.length>0&&c&&c.length>0&&p){const f=Le(c,o);u.value.setImportTokenList(f),le.value=!1,console.log("🚀🚀🚀 ~ file: coin-select.vue:614 ~ watch ~ isUpdateImportList:",le)}},{immediate:!0}),V(()=>[v.value.tokens,s.value,Q.value],([o,c,p])=>{o&&o[0]&&o[0].chain!==(c==null?void 0:c.toLowerCase())||(o&&o.length>0&&(J(T.value),console.log("🚀🚀🚀 ~ file: coin-select.vue:632 ~ watch ~ updateTokenList:")),p&&p.length>0?(de.value=p.filter(f=>G.value[f==null?void 0:f.address]),M.value=Object.fromEntries(p==null?void 0:p.map(f=>[f.address,f]))):M.value={})},{immediate:!0});function Le(o,c){return o.filter(p=>!c.some(f=>p.address===f.address))}function Se(o,c){const p=new Set(c==null?void 0:c.map(f=>f.address));return o==null?void 0:o.filter(f=>p.has(f.address))}const ce=o=>{let c=Q.value;const p=o.address;let f;console.log("🚀🚀🚀 ~ file: coin-select.vue:716 ~ clickCollectIcon ~ collectListObj:",M),M!=null&&M.value.hasOwnProperty(p)?f=c.filter(L=>(L==null?void 0:L.address)!==p):(c.push(o),f=c),console.log("🚀 ~ clickCollectIcon ~ list:",f),u.value.setCollectTokenList(f,s.value)},Ie=o=>{let c=E.value;const p=o.address,N=c.filter(L=>(L==null?void 0:L.address)!==p);u.value.setImportTokenList(N),M.value[o.address]&&ce(o),B.value!=="Default"&&J(T.value)},Oe=()=>{u.value.setImportTokenList([]);const o=Se(Q.value,v.value.tokens);u.value.setCollectTokenList(o,s.value),B.value!=="Default"&&J(T.value)},Ae=o=>{var c;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((c=v.value.tokensObj[o==null?void 0:o.address])==null?void 0:c.logo_url)||(u.value.theme==="default"?Y("/image/coins/unknown.png"):Y("/image/coins/sui-unknown.png"))},Be=o=>{var c,p;return v.value.tokensObj&&o.address&&v.value.tokensObj[o.address]&&((c=v.value.tokensObj[o.address])==null?void 0:c.labels)&&((p=v.value.tokensObj[o.address])==null?void 0:p.labels[0])},Pe=$(()=>u.value.currentExplorer);return{h5Edit:I(!1),getExplorerUrl:Te,currentExplorer:Pe,showDefaultTip:q,isCreatePoolToCoinCollectList:de,showImportBtn:ne,deleteImportToken:Ie,clearAllImportToken:Oe,importList:E,currentTokenTab:B,coinLabels:Be,collectListObj:M,clickCollectIcon:ce,getCoinIcon:Ae,collectList:Q,pools:v,t,chainName:s,tabList:oe,currentTab:D,addCommom:Z,tokenList:_,importIcon:Y,keyword:T,wallet:k,toSelect:we,store:u,isShowAll:se}}});const O=e=>(Re("data-v-14dbbe85"),e=e(),xe(),e),bo=O(()=>a("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),ho={class:"coin-select-modal"},Co={class:"search-input"},_o=["placeholder"],mo=O(()=>a("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),go=[mo],yo={key:0,class:"popular"},To=["onClick"],wo={class:"name-symbol"},Lo=["onClick"],So=O(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon_cancelled"})],-1)),Io=[So],Oo=O(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon_edit"})],-1)),Ao=[Oo],Bo={key:1,class:"tab-list"},Po=["onClick"],$o={key:0,class:"item"},jo=O(()=>a("span",null," No tokens found ",-1)),Do=O(()=>a("div",null,"Default",-1)),Eo={key:1},Mo=O(()=>a("div",{class:"line"},null,-1)),No={key:2,class:"type-list"},Uo=["onClick"],Fo={key:0,class:"type"},Ko={key:3,class:"type-list import-type"},qo={class:"type-container"},zo={class:"type"},Zo=O(()=>a("div",{class:"type"},C("Clear All"),-1)),Go=[Zo],Jo={class:"coin-list-box"},Wo={key:0,class:"coin-list"},Yo=["onClick"],Ho={class:"left"},Qo={class:"token-icon",alt:""},Vo={key:0,class:"token-waring",src:to,alt:""},Xo={class:"name-box"},Ro={class:"symbol"},xo={key:0,class:"label"},es={class:"copy-text"},os=["href"],ss=["onClick"],ns=O(()=>a("use",{"xlink:href":"#icon-icon_copy2"},null,-1)),ls=[ns],ts={class:"balance-box"},as={class:"balance"},rs={key:0},is={key:1},ds={key:1,class:"balance-num"},cs={key:2,class:"balance-num"},us={key:3},ps=O(()=>a("p",null,null,-1)),vs=["onClick"],fs=O(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon_del"})],-1)),ks=[fs],bs=["onClick"],hs=O(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon_filled_sel"})],-1)),Cs=[hs],_s={key:1,class:"no-data"},ms={key:0,class:"token-loading"},gs={key:1,class:"no-data-content"},ys={key:0,src:ao},Ts={key:1,src:ro},ws={key:2},Ls={key:3},Ss={key:4};function Is(e,l,t,b,g,k){const h=He,v=X("loading-outlined"),y=Qe,u=Ve,q=Xe,G=X("IconTooltip"),B=X("vue-scroll"),oe=X("Modal"),D=We("image");return i(),R(oe,{title:e.$t("modal.selectTokenModalTitle"),class:j(["select-mod",e.store.theme=="default"?"":"new-modal-have-radius"]),width:460,centered:"",visible:!0,footer:null,onCancel:l[5]||(l[5]=P=>e.$emit("onClose"))},{closeIcon:A(()=>[bo]),default:A(()=>{var P,H;return[a("div",ho,[a("div",Co,[ae(a("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>e.keyword=s),onkeyup:"value=value.replace(/[^[a-zA-Z0-9\\s]+$/g,'')",placeholder:e.$t("inputPlaceholder.selectTokenModalPlaceholder")},null,8,_o),[[Ye,e.keyword]]),e.keyword?(i(),d("svg",{key:0,class:"clear-icon icon modal-icon-close","aria-hidden":"true",onClick:l[1]||(l[1]=s=>e.keyword="")},go)):w("",!0)]),e.collectList&&e.collectList.length>0?(i(),d("div",yo,[(i(!0),d(x,null,ee(e.isCreatePoolToCoin?e.isCreatePoolToCoinCollectList:e.collectList,s=>(i(),d("div",{key:s.address,class:j(["img-box",s.address===e.lastSelectCoin&&e.isAllowBan?"img-box-unusable":"img-box-usable"]),onClick:_=>e.toSelect(s)},[ae(a("img",null,null,512),[[D,s.icon||s.logo_url||(e.store.theme=="default"?("importIcon"in e?e.importIcon:U(Y))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:U(Y))("/image/coins/sui-unknown.png"))]]),a("div",wo,[a("span",null,C(s.symbol),1),a("p",null,C((s==null?void 0:s.address)=="0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"||(s==null?void 0:s.address)=="0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN"?"Portal from Ethereum":e.coinLabels(s)),1)]),a("div",{class:j(["delete-collect-icon",e.h5Edit?"h5-show-delete-collect-icon":""]),onClick:W(_=>e.clickCollectIcon(s),["stop"])},Io,10,Lo)],10,To))),128)),a("div",{class:j(["h5-edit",e.h5Edit?"h5-edit-active":""]),onClick:l[2]||(l[2]=W(s=>e.h5Edit=!e.h5Edit,["stop"]))},Ao,2)])):w("",!0),(!e.haveImportBtn&&e.keyword?e.store.importTokenListObj.hasOwnProperty(e.keyword):!e.showImportBtn||!e.keyword)?(i(),d("div",Bo,[(i(),d(x,null,ee(["Default","Imported"],(s,_)=>a("div",{key:_,class:j(["item-container",e.currentTokenTab==s?"item-container-active item-container":"item-container"]),onClick:()=>{e.currentTab=e.t("tab.all"),e.currentTokenTab=s}},[e.chainName=="Sui"||e.chainName=="Aptos"&&s!=="Imported"?(i(),d("div",$o,[e.showDefaultTip&&s=="Default"&&e.currentTokenTab=="Imported"?(i(),R(h,{key:0,placement:"top","arrow-point-at-center":""},{title:A(()=>[jo]),default:A(()=>[Do]),_:1})):(i(),d("div",Eo,C(s),1))])):w("",!0)],10,Po)),64))])):w("",!0),Mo,e.currentTokenTab=="Default"&&!e.keyword?(i(),d("div",No,[(i(!0),d(x,null,ee(e.tabList,(s,_)=>(i(),d("div",{key:_,class:j(["type-container",e.currentTab==s?"type-container-active type-container":"type-container"]),onClick:E=>e.currentTab=s},[s!==null&&s!=="test"?(i(),d("div",Fo,C(s),1)):w("",!0)],10,Uo))),128))])):w("",!0),((P=e.tokenList)==null?void 0:P.length)>0&&e.currentTokenTab!=="Default"&&!e.keyword?(i(),d("div",Ko,[a("div",qo,[a("div",zo,C(((H=e.tokenList)==null?void 0:H.length)+" Custom Tokens"),1)]),a("div",{class:"type-container type-clear",onClick:l[3]||(l[3]=s=>e.clearAllImportToken())},Go)])):w("",!0),a("div",Jo,[z(B,null,{default:A(()=>[e.tokenList&&e.tokenList.length>0?(i(),d("ul",Wo,[(i(!0),d(x,null,ee(e.tokenList,s=>{var _,E;return i(),d("li",{key:s.address,class:j(s.unusable&&e.isAllowBan?"unusable":""),onClick:T=>e.toSelect(s)},[a("div",Ho,[ae(a("img",Qo,null,512),[[D,e.getCoinIcon(s)]]),s.isSelfBuilt?(i(),R(h,{key:0,placement:"right","arrow-point-at-center":""},{title:A(()=>[a("span",null,C(e.t("newAdd.notCetusTokenList")),1)]),default:A(()=>[e.showImportBtn?(i(),d("img",Vo)):w("",!0)]),_:1})):w("",!0),a("div",Xo,[a("div",null,[a("div",Ro,C(s.symbol),1)]),a("p",null,[re(C(s.name)+" ",1),e.chainName!=="Sui"?(i(),d("span",xo,C(s.labels?`(${s.labels})`:""),1)):w("",!0)]),a("p",es,[a("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:U(Te))(e.currentExplorer,"coin",s.address),target:"_blank"},[a("span",null,C(s.address&&s.address.substr(0,4))+" ... "+C(s.address&&s.address.substr(s.address.length-4,4)),1)],8,os),(i(),d("svg",{class:"icon","aria-hidden":"true",onClick:W(T=>e.store.copy(s&&s.address),["stop"])},ls,8,ss))])])]),a("div",ts,[a("div",as,[e.wallet.loading?(i(),d("div",rs,[z(y,null,{default:A(()=>[z(v)]),_:1})])):s.balance&&e.wallet.connected?(i(),d("div",is,[((_=("addCommom"in e?e.addCommom:U(Z))(s.balance,s.decimals))==null?void 0:_.length)>20?(i(),R(h,{key:0,placement:"top","arrow-point-at-center":""},{title:A(()=>[a("span",null,C(("addCommom"in e?e.addCommom:U(Z))(s.balance,s.decimals)),1)]),default:A(()=>{var T;return[a("div",{class:j(["balance-num",((T=("addCommom"in e?e.addCommom:U(Z))(s.balance,s.decimals))==null?void 0:T.length)>20?"balance-length":""])},C(("addCommom"in e?e.addCommom:U(Z))(s.balance,s.decimals)),3)]}),_:2},1024)):(i(),d("div",ds,C(("addCommom"in e?e.addCommom:U(Z))(s.balance,s.decimals)),1))])):!s.balance&&e.wallet.connected?(i(),d("div",cs,"0")):(i(),d("div",us))]),ps,!e.keyword&&e.currentTokenTab!=="Default"?(i(),d("div",{key:0,class:"delete-icon",onClick:W(T=>e.deleteImportToken(s),["stop"])},ks,8,vs)):w("",!0),!e.keyword||!e.showImportBtn?(i(),d("div",{key:1,class:j(["collect-icon",(E=e.collectListObj)!=null&&E.hasOwnProperty(s.address)?"collect-icon-active":""]),onClick:W(T=>e.clickCollectIcon(s),["stop"])},Cs,10,bs)):w("",!0)])],10,Yo)}),128)),e.showImportBtn?(i(),d("div",{key:0,class:"import-btn",onClick:l[4]||(l[4]=s=>e.toSelect(e.tokenList&&e.tokenList[0]))},[z(u,null,{default:A(()=>[re("Import")]),_:1})])):w("",!0)])):(i(),d("div",_s,[e.pools.isContractTokenLoaing?(i(),d("div",ms,[z(q)])):(i(),d("div",gs,[e.store.theme=="default"?(i(),d("img",ys)):(i(),d("img",Ts)),e.currentTokenTab=="Default"||e.keyword?(i(),d("p",ws,C(e.t("newAdd.noTokensFound")),1)):(i(),d("p",Ls,"No Imported Tokens")),e.currentTokenTab=="Default"?(i(),d("div",Ss,[re(C(e.t("newAdd.enterCoinType"))+" ",1),z(G,{type:"uniqueIdOfCoin","xlink-href":"#icon-icon_tips"})])):w("",!0)]))]))]),_:1})])])]}),_:1},8,["title","class"])}const Ks=Je(ko,[["render",Is],["__scopeId","data-v-14dbbe85"]]);export{Ks as _};
