import{i as X}from"./import-icon.de3e6c66.js";import{u as Ee,b as J,A as Ae,O as We}from"./index.8618889b.js";import{a as Pe,Y as Re,a3 as Fe,l as Ze,m as D,r as T,y as Je,D as M,ag as Qe,e as ze,M as se,q as Ke,o as a,c as K,w as m,h as n,t as le,a9 as Xe,f as r,x as g,F as V,s as H,z as P,u as R,v as p,K as q,i as Z,j as te,L as Ye,ah as Ue,B as Ge,J as Me,p as Ve,k as He}from"./entry.cdbcbba2.js";/* empty css              *//* empty css              */import{u as qe,a as Le,b as $e,p as xe}from"./pool.7ae7ea5c.js";import{_ as eo}from"./token-warning_2x.5a8f40dd.js";import{_ as oo}from"./img-no-Positions_2x.e9126fc2.js";import{_ as so}from"./img-no-Positions_2x.4c53aec3.js";const lo=Pe({components:{Modal:Re,LoadingOutlined:Fe},props:{existingCoins:{type:String,default:""},lastSelectCoin:{type:String,default:""},isCreatePoolToCoin:{type:Boolean,default:!1},haveImportBtn:{type:Boolean,default:!1},isAllowBan:{type:Boolean,default:!1},isCreatePoolFromCoin:{type:Boolean,default:!1}},setup(e,C){const{t:u,locale:Te}=Ze(),ne=Ee(),B=D(()=>ne),j=qe(),v=D(()=>j),$=Le(),k=D(()=>$),F=T(!1),Q=D(()=>{var o;return(o=k.value)==null?void 0:o.filterCreatePoolCoin}),w=T("Default"),Y=D(()=>{const o=[u("tab.all"),u("tab.native")],i=Array.from(new Set(v.value.tokens.flatMap(c=>c.labels?c.labels:null)));return k.value.theme=="default"?o.concat(i):[u("tab.all"),u("tab.native"),u("tab.wormhole"),u("tab.celer")]}),I=T(u("tab.all")),S=T(u("tab.all")),s=Le(),h=D(()=>s.chainName),L=T([]),E=D(()=>k.value.importTokenList),b=T(null);Je(()=>{});const x=T(!1);M(I,o=>{o!==u("tab.all")&&(x.value=!1),o==u("tab.all")?S.value=u("tab.all"):o==u("tab.layerZero")?S.value=u("tab.layerZero"):o==u("tab.wormhole")?S.value=u("tab.wormhole"):o==u("tab.celer")?S.value=u("tab.celer"):o==u("tab.native")&&(S.value=u("tab.native")),z(b.value)});const ee=T(!1),z=async o=>{var ie,ce,de,ue,ve,pe,ke,be,fe;o||(ee.value=!1),console.log("🚀 ~ updateTokenList ~ updateTokenList:");let i=[];const c=Object.fromEntries((ie=v.value.tokens)==null?void 0:ie.map(t=>[t.address,t]));let d=w.value=="Default"?v.value.tokens:E.value;if(console.log("🚀 ~ updateTokenList ~ tokens:",d),w.value=="Default"&&!(k.value.chainName&&d&&d[0]&&k.value.chainName.toLowerCase().includes((ce=d[0])==null?void 0:ce.chain))){L.value=[];return}let N=d;if(console.log("🚀 ~ updateTokenList ~ allTokenList:",N),console.log("🚀 ~ updateTokenList ~ keyword:",o),o&&o.split("::")&&o.split("::").length==3&&!(c!=null&&c.hasOwnProperty(o))){if(h.value=="Sui"){const t=$e("Sui");try{let l=v.value.tokensObj[Ae(o)]||v.value.notTrustedObj[Ae(o)]||await t.getTokenBySymbol(v.value.tokens,o);l&&((de=d.filter(f=>(f==null?void 0:f.address)===(l==null?void 0:l.address)))==null?void 0:de.length)<1&&((ue=k.value.importTokenListObj)!=null&&ue.hasOwnProperty(l==null?void 0:l.address)?(w.value="Imported",F.value=!0):e.haveImportBtn&&(ee.value=!0),l={...l,address:(l==null?void 0:l.address.toLowerCase())=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::sui"?"0x2::sui::SUI":l==null?void 0:l.address},N=d.concat(l),console.log("🚀 ~ updateTokenList ~ allTokenList:",N))}catch(l){console.log("searchToken##err##",l)}}}else F.value=!1;console.log("🚀 ~ updateTokenList ~ showDefaultTip.value:",F.value);for(const t of Object.keys(N)){let l=Qe(N[t]);const f=B.value.assets[l.address]&&B.value.assets[l.address].balance?xe(B.value.assets&&B.value.assets[l.address].balance,l.decimals):0;e.lastSelectCoin&&l&&l.address===e.lastSelectCoin?l.unusable=!0:l.unusable=!1;const O=((ve=v.value.tokensObj[l.address])==null?void 0:ve.labels)&&((pe=v.value.tokensObj[l.address])==null?void 0:pe.labels[0]),G=v.value.tokensObj[l.address]?(ke=v.value.tokensObj[l.address])==null?void 0:ke.name:l.name;l={...l,balance:f,labels:O,name:G,sort:(k.value.chainName==="Aptos"?l.symbol=="APT":l.symbol=="SUI")?1:-1},i.push(l)}let y;B.value.address?y=i.sort((t,l)=>l.balance-t.balance):y=i;let W=[];if(o){const t=o.toLowerCase();console.log("🚀 ~ file: coin-select.vue:548 ~ updateTokenList ~ keyword:",o);const l=y.filter(f=>f.symbol.toLowerCase().indexOf(t)!==-1||f.address.toLowerCase().indexOf(t)!==-1||f.address.toLowerCase().indexOf(We(o).full_address.toLowerCase())!==-1||f.name.toLowerCase().indexOf(t)!==-1);console.log("🚀 ~ file: coin-select.vue:556 ~ updateTokenList ~ result:",l),W=l}else I.value!==u("tab.all")?W=y.filter(l=>I.value==u("tab.native")?!l.labels||l.labels=="Native":l.labels&&l.labels.toLowerCase()==I.value.toLowerCase()):W=y;if(console.log("🚀 ~ file: coin-select.vue:556 ~ updateTokenList ~ props.isCreatePoolToCoin:",e.isCreatePoolToCoin),console.log("🚀 ~ file: coin-select.vue:556 ~ updateTokenList ~ props.isCreatePoolFromCoin:",e.isCreatePoolFromCoin),e.isCreatePoolToCoin?L.value=(be=W.filter(t=>Q.value[t==null?void 0:t.address]))==null?void 0:be.sort((t,l)=>l.sort-t.sort).sort((t,l)=>l.unusable-t.unusable):L.value=W.sort((t,l)=>l.sort-t.sort).sort((t,l)=>l.unusable-t.unusable),e.isCreatePoolFromCoin&&(L.value=(fe=W.filter(t=>!Q.value[t==null?void 0:t.address]))==null?void 0:fe.sort((t,l)=>l.sort-t.sort).sort((t,l)=>l.unusable-t.unusable)),console.log("🚀🚀🚀 ~ file: coin-select.vue:575 ~ updateTokenList ~  tokenList.value:",L.value),o){const t=o.toLowerCase(),l=W.sort((f,O)=>{const G=f.symbol.toLowerCase()===t,_e=O.symbol.toLowerCase()===t,he=f.name.toLowerCase()===t,Ne=O.name.toLowerCase()===t,me=f.address.toLowerCase()===t,Oe=O.address.toLowerCase()===t,Ce=f.symbol.toLowerCase().includes(t),De=O.symbol.toLowerCase().includes(t),ge=f.name.toLowerCase().includes(t),Be=O.name.toLowerCase().includes(t),ye=f.address.toLowerCase().includes(t),je=O.address.toLowerCase().includes(t);return G!==_e?G?-1:1:he!==Ne?he?-1:1:me!==Oe?me?-1:1:Ce!==De?Ce?-1:1:ge!==Be?ge?-1:1:ye!==je?ye?-1:1:0});L.value=l}},we=o=>{e.isAllowBan&&o.unusable||(o.unusable&&!b.value&&C.emit("onClose"),console.log("🚀🚀🚀 ~ file: coin-select.vue:589 ~ toSelect ~ props.isAllowBan:",e.isAllowBan,o),C.emit("onSelect",o),C.emit("onClose"))};M(()=>[b.value,x.value,w.value],([o,i,c])=>{console.log("🚀🚀🚀 ~ file: coin-select.vue:601 ~ setup ~ currentTokenTab:",c),z(o)});const U=D(()=>h.value=="Aptos"?k.value.collectTokenListAptos:(console.log("🚀🚀🚀 ~ file: coin-select.vue:610 ~ collectList ~ store.value.collectTokenListSui:",k.value.collectTokenListSui),k.value.collectTokenListSui)),ae=T([]),_=T({}),oe=T(!0);M(()=>[v.value.tokens,E.value,oe.value],([o,i,c])=>{if(o&&o.length>0&&i&&i.length>0&&c){const d=Ie(i,o);k.value.setImportTokenList(d),oe.value=!1,console.log("🚀🚀🚀 ~ file: coin-select.vue:614 ~ watch ~ isUpdateImportList:",oe)}},{immediate:!0}),M(()=>[v.value.tokens,h.value,U.value],([o,i,c])=>{o&&o[0]&&o[0].chain!==(i==null?void 0:i.toLowerCase())||(o&&o.length>0&&(z(b.value),console.log("🚀🚀🚀 ~ file: coin-select.vue:632 ~ watch ~ updateTokenList:")),c&&c.length>0?(ae.value=c.filter(d=>Q.value[d==null?void 0:d.address]),_.value=Object.fromEntries(c==null?void 0:c.map(d=>[d.address,d]))):_.value={})},{immediate:!0});function Ie(o,i){return o.filter(c=>!i.some(d=>c.address===d.address))}function Se(o,i){const c=new Set(i==null?void 0:i.map(d=>d.address));return o==null?void 0:o.filter(d=>c.has(d.address))}const re=o=>{let i=U.value;const c=o.address;let d;console.log("🚀🚀🚀 ~ file: coin-select.vue:716 ~ clickCollectIcon ~ collectListObj:",_),_!=null&&_.value.hasOwnProperty(c)?d=i.filter(y=>(y==null?void 0:y.address)!==c):(i.push(o),d=i),console.log("🚀 ~ clickCollectIcon ~ list:",d),k.value.setCollectTokenList(d,h.value)};return{showDefaultTip:F,isCreatePoolToCoinCollectList:ae,showImportBtn:ee,deleteImportToken:o=>{let i=E.value;const c=o.address,N=i.filter(y=>(y==null?void 0:y.address)!==c);k.value.setImportTokenList(N),_.value[o.address]&&re(o),w.value!=="Default"&&z(b.value)},clearAllImportToken:()=>{k.value.setImportTokenList([]);const o=Se(U.value,v.value.tokens);k.value.setCollectTokenList(o,h.value),w.value!=="Default"&&z(b.value)},importList:E,currentTokenTab:w,coinLabels:o=>{var i,c;return v.value.tokensObj&&o.address&&v.value.tokensObj[o.address]&&((i=v.value.tokensObj[o.address])==null?void 0:i.labels)&&((c=v.value.tokensObj[o.address])==null?void 0:c.labels[0])},collectListObj:_,clickCollectIcon:re,getCoinIcon:o=>{var i;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((i=v.value.tokensObj[o==null?void 0:o.address])==null?void 0:i.logo_url)||(k.value.theme==="default"?X("/image/coins/unknown.png"):X("/image/coins/sui-unknown.png"))},collectList:U,pools:v,t:u,chainName:h,tabList:Y,currentTab:I,addCommom:J,tokenList:L,importIcon:X,keyword:b,wallet:B,toSelect:we,store:k,isShowAll:x}}}),to="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABVdJREFUWEfNWWtQlFUYft5vd9mx1mlaENDJNtNg7zoTuRBkKOKf8BIias1ozaRNVn+yn+X1b/7r6lTmGKB5BRovPxKiYhkddQaWBQzJkNGBIRgElVjYU+ej/dhld7/vrJDD9/Oc933e57znvJdzPsJDfk6nc+FIkNYSgs+D0TyAzQNhngzHcBug2yB2m0G6kiSxSp/Pd+NhTFEiSm63O/XvwNh7AL3KwJyJ6BLIB7DTRoPu08bGxh5RXSGCdnu+aRS9OwnsQ8ZgEgWPJUeEIQb6RI+UA35/7ZAWliZBq9NZHAziczCWpgWW0DxRtyRhR6vPd0pNLy5BxhhlOly7wNhuAJoLSYjchDAD0d625qZ9RMRiejzWYE5Ozqy+gcHDjLEND2k4ITUiOm5+YvZWr9f7YLJilGe456wO17FHRS5EiJNsbW7aONmTUQQz7M7dYGxPQi6YLmGiPdf9vr3hcBEE5YAYYye0zpxOp8OqwpV4dsECkCTFpMeCQdzq6sLZc+cxOjoqugQm6agkPHAUgv+lkvbJ0Wo0GjF//lPQ6fQgAiSSkJKSDLfbLWTU52tGT89E2hsJjODmzT/jkybq1iNlUSgFKQTjbe2GkvVIS5veDHPnzh2cPHU6/gLDtlomKFeI0bEbsZLwm1u34HHTlHJzFJHBu4M4fORIXII8mRv1uoW84sgEMx2u/SwY/CiWBveew26DXm8Q2lItoUAgAH9LC7q7u1VFCdjf1tK8a5ygzdmUaG3VIjLVeV6721p8LpK7kjHWrgb4jMWC5fkvT9WmrP/rb/X4vV3VnGInSUeLKMPu+gAseEDNusXyNFYXFU0LwfMXLqC9XbDzImknZdodZYzhNTXrc+emY31x8bQQrKquRmfnLSEsIpRTps1Zw8Dy1TSSk5OxedNGIVAtoeMnTmoGiFL+QLWUaXO0MSBDDdhkMuGNrVu0bAvNl5VXoL+/X0iWgOt8iwe1mtCkpCRs3/ZWJChjqPc2oPevXmR7PEhNTZXne3t74W1oQLI5GTnZnqhSeOjQd7h3/74YQcIQ9+BdBsxW0yAivLvjnQiRzs5OVFX/KI8ZDAasW7sGkiTh9JlKjIyMyOOrCguRkfFchN5XBw8iEBCrzQQMCm0xt/D29m0ykdDHt6m84ui//ex4n8lrNl/I8PCwIlO6oUTxLB/kDcRnX3wp5D0uNL7FAkHChWOVvNbWNvx08aJCMtzy8vx8OBz2CDKc/NfffJsAQR4kAmmGI76+eROeNJujwC9duoxLly9HjL+QlQWPZ2mU7MDAAI58XyZOkKcZkUTNEUvWFyM9PT0CnNfTyqpq5cyFJvl2rykqQlp6ZBfE264fjvN2U/DjiVqk1HG41UWvwGKxKMj3hoZQVnE0ghw/g6Ezyc8r97pp9kT8dXV14UxllSA7QC51XFqkWZgckR0df+DsuXOKsRXL8yFJuogzubKgAFZrpiLT0dEhd9gin9IsjBN07GPAx2qKy5a9BLfLpYjwNp6Xrb6+fuTlvgir1SrP8cD5ua4OZrMZa1cXIcloVHT8fj8u1tSK8OMRPNFuqTWsIbRsz1JkZWUJgccTunr1Guq9Xk2MqIaVa2jd5pYsXoy8vFxNcDUBr9eLK1evaWNMbvm5RrxLUwjNZrOiYMUKbXAViZqaWjT7/eoY8S5NXEvt2pk6Zw5KS6f20CDQycS/doaWpbbVebm5WLLYDfn+meDX2NSEurpftLynfnHn2lpPHwaDHrNmPZYQvQcP7ms2CMJPH9zyjH48CrlmRj+/he/fjH3ADCc5o5+Aw4nKFWeMvY8gW5foRf9/fUSPFbKP6jfEP5DOZ69FRDRbAAAAAElFTkSuQmCC",no="data:image/png;base64,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";const A=e=>(Ve("data-v-7048a4ba"),e=e(),He(),e),ao=A(()=>n("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),ro={class:"coin-select-modal"},io={class:"search-input"},co=["placeholder"],uo=A(()=>n("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),vo=[uo],po={key:0,class:"popular"},ko=["onClick"],bo={class:"name-symbol"},fo=["onClick"],ho=A(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon_cancelled"})],-1)),mo=[ho],Co={key:1,class:"tab-list"},go=["onClick"],yo={key:0,class:"item"},Ao=A(()=>n("span",null," No tokens found ",-1)),Lo=A(()=>n("div",null,"Default",-1)),To={key:1},wo=A(()=>n("div",{class:"line"},null,-1)),Io={key:2,class:"type-list"},So=["onClick"],_o={key:0,class:"type"},No={key:3,class:"type-list import-type"},Oo={class:"type-container"},Do={class:"type"},Bo=A(()=>n("div",{class:"type"},p("Clear All"),-1)),jo=[Bo],Eo={class:"coin-list-box"},Wo={key:0,class:"coin-list"},Po=["onClick"],Ro={class:"left"},Fo={class:"token-icon",alt:""},Zo={key:0,class:"token-waring",src:eo,alt:""},Jo={class:"name-box"},Qo={key:1,class:"symbol"},zo=["onClick"],Ko=A(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon_copy1"})],-1)),Xo={key:0,class:"label"},Yo={class:"balance-box"},Uo={class:"balance"},Go={key:0},Mo={key:1},Vo={key:1,class:"balance-num"},Ho={key:2,class:"balance-num"},qo={key:3},$o=A(()=>n("p",null,null,-1)),xo=["onClick"],es=A(()=>n("img",{class:"def",src:to,alt:""},null,-1)),os=A(()=>n("img",{class:"hov",src:no,alt:""},null,-1)),ss=[es,os],ls=["onClick"],ts=A(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon_filled_sel"})],-1)),ns=[ts],as={key:1,class:"no-data"},rs={key:0,class:"token-loading"},is={key:1,class:"no-data-content"},cs={key:0,src:oo},ds={key:1,src:so},us={key:2},vs={key:3},ps={key:4},ks=A(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-information"})],-1));function bs(e,C,u,Te,ne,B){const j=Ye,v=se("loading-outlined"),$=Ue,k=Ge,F=Me,Q=se("vue-scroll"),w=se("Modal"),Y=Ke("image");return a(),K(w,{title:e.$t("modal.selectTokenModalTitle"),class:"select-mod",width:460,centered:"",visible:!0,footer:null,onCancel:C[4]||(C[4]=I=>e.$emit("onClose"))},{closeIcon:m(()=>[ao]),default:m(()=>{var I,S;return[n("div",ro,[n("div",io,[le(n("input",{"onUpdate:modelValue":C[0]||(C[0]=s=>e.keyword=s),onkeyup:"value=value.replace(/[^[a-zA-Z0-9\\s]+$/g,'')",placeholder:e.$t("inputPlaceholder.selectTokenModalPlaceholder")},null,8,co),[[Xe,e.keyword]]),e.keyword?(a(),r("svg",{key:0,class:"clear-icon icon modal-icon-close","aria-hidden":"true",onClick:C[1]||(C[1]=s=>e.keyword="")},vo)):g("",!0)]),e.collectList&&e.collectList.length>0?(a(),r("div",po,[(a(!0),r(V,null,H(e.isCreatePoolToCoin?e.isCreatePoolToCoinCollectList:e.collectList,s=>(a(),r("div",{key:s.address,class:P(["img-box",s.address===e.lastSelectCoin&&e.isAllowBan?"img-box-unusable":"img-box-usable"]),onClick:h=>e.toSelect(s)},[le(n("img",null,null,512),[[Y,s.icon||s.logo_url||(e.store.theme=="default"?("importIcon"in e?e.importIcon:R(X))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:R(X))("/image/coins/sui-unknown.png"))]]),n("div",bo,[n("span",null,p(s.symbol),1),n("p",null,p((s==null?void 0:s.address)=="0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"||(s==null?void 0:s.address)=="0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN"?"Portal from Ethereum":e.coinLabels(s)),1)]),n("div",{class:"delete-collect-icon",onClick:q(h=>e.clickCollectIcon(s),["stop"])},mo,8,fo)],10,ko))),128))])):g("",!0),(!e.haveImportBtn&&e.keyword?e.store.importTokenListObj.hasOwnProperty(e.keyword):!e.showImportBtn||!e.keyword)?(a(),r("div",Co,[(a(),r(V,null,H(["Default","Imported"],(s,h)=>n("div",{key:h,class:P(["item-container",e.currentTokenTab==s?"item-container-active item-container":"item-container"]),onClick:()=>{e.currentTab=e.t("tab.all"),e.currentTokenTab=s}},[e.chainName=="Sui"||e.chainName=="Aptos"&&s!=="Imported"?(a(),r("div",yo,[e.showDefaultTip&&s=="Default"&&e.currentTokenTab=="Imported"?(a(),K(j,{key:0,placement:"top","arrow-point-at-center":""},{title:m(()=>[Ao]),default:m(()=>[Lo]),_:1})):(a(),r("div",To,p(s),1))])):g("",!0)],10,go)),64))])):g("",!0),wo,e.currentTokenTab=="Default"&&!e.keyword?(a(),r("div",Io,[(a(!0),r(V,null,H(e.tabList,(s,h)=>(a(),r("div",{key:h,class:P(["type-container",e.currentTab==s?"type-container-active type-container":"type-container"]),onClick:L=>e.currentTab=s},[s!==null&&s!=="test"?(a(),r("div",_o,p(s),1)):g("",!0)],10,So))),128))])):g("",!0),((I=e.tokenList)==null?void 0:I.length)>0&&e.currentTokenTab!=="Default"&&!e.keyword?(a(),r("div",No,[n("div",Oo,[n("div",Do,p(((S=e.tokenList)==null?void 0:S.length)+" Custom Tokens"),1)]),n("div",{class:"type-container type-clear",onClick:C[2]||(C[2]=s=>e.clearAllImportToken())},jo)])):g("",!0),n("div",Eo,[Z(Q,null,{default:m(()=>[e.tokenList&&e.tokenList.length>0?(a(),r("ul",Wo,[(a(!0),r(V,null,H(e.tokenList,s=>{var h,L,E;return a(),r("li",{key:s.address,class:P(s.unusable&&e.isAllowBan?"unusable":""),onClick:b=>e.toSelect(s)},[n("div",Ro,[le(n("img",Fo,null,512),[[Y,e.getCoinIcon(s)]]),s.isSelfBuilt?(a(),K(j,{key:0,placement:"right","arrow-point-at-center":""},{title:m(()=>[n("span",null,p(e.t("newAdd.notCetusTokenList")),1)]),default:m(()=>[e.showImportBtn?(a(),r("img",Zo)):g("",!0)]),_:1})):g("",!0),n("div",Jo,[n("div",null,[((h=s==null?void 0:s.symbol)==null?void 0:h.length)>12?(a(),K(j,{key:0,placement:"top","arrow-point-at-center":""},{title:m(()=>[n("span",null,p(s.symbol),1)]),default:m(()=>{var b;return[n("div",{class:P(["symbol",((b=s.symbol)==null?void 0:b.length)>12?"symbol-length":""])},p(s.symbol),3)]}),_:2},1024)):(a(),r("div",Qo,p(s.symbol),1)),n("p",{class:"copy-text",onClick:q(b=>e.store.copy(s&&s.address),["stop"])},[n("span",null,p(s.address&&s.address.substr(0,4))+" ... "+p(s.address&&s.address.substr(s.address.length-4,4)),1),Ko],8,zo)]),n("p",null,[te(p(s.name)+" ",1),e.chainName!=="Sui"?(a(),r("span",Xo,p(s.labels?`(${s.labels})`:""),1)):g("",!0)])])]),n("div",Yo,[n("div",Uo,[e.wallet.loading?(a(),r("div",Go,[Z($,null,{default:m(()=>[Z(v)]),_:1})])):s.balance&&e.wallet.connected?(a(),r("div",Mo,[((L=("addCommom"in e?e.addCommom:R(J))(s.balance,s.decimals))==null?void 0:L.length)>20?(a(),K(j,{key:0,placement:"top","arrow-point-at-center":""},{title:m(()=>[n("span",null,p(("addCommom"in e?e.addCommom:R(J))(s.balance,s.decimals)),1)]),default:m(()=>{var b;return[n("div",{class:P(["balance-num",((b=("addCommom"in e?e.addCommom:R(J))(s.balance,s.decimals))==null?void 0:b.length)>20?"balance-length":""])},p(("addCommom"in e?e.addCommom:R(J))(s.balance,s.decimals)),3)]}),_:2},1024)):(a(),r("div",Vo,p(("addCommom"in e?e.addCommom:R(J))(s.balance,s.decimals)),1))])):!s.balance&&e.wallet.connected?(a(),r("div",Ho,"0")):(a(),r("div",qo))]),$o,!e.keyword&&e.currentTokenTab!=="Default"?(a(),r("div",{key:0,class:"delete-icon",onClick:q(b=>e.deleteImportToken(s),["stop"])},ss,8,xo)):g("",!0),!e.keyword||!e.showImportBtn?(a(),r("div",{key:1,class:P(["collect-icon",(E=e.collectListObj)!=null&&E.hasOwnProperty(s.address)?"collect-icon-active":""]),onClick:q(b=>e.clickCollectIcon(s),["stop"])},ns,10,ls)):g("",!0)])],10,Po)}),128)),e.showImportBtn?(a(),r("div",{key:0,class:"import-btn",onClick:C[3]||(C[3]=s=>e.toSelect(e.tokenList&&e.tokenList[0]))},[Z(k,null,{default:m(()=>[te("Import")]),_:1})])):g("",!0)])):(a(),r("div",as,[e.pools.isContractTokenLoaing?(a(),r("div",rs,[Z(F)])):(a(),r("div",is,[e.store.theme=="default"?(a(),r("img",cs)):(a(),r("img",ds)),e.currentTokenTab=="Default"||e.keyword?(a(),r("p",us,p(e.t("newAdd.noTokensFound")),1)):(a(),r("p",vs,"No Imported Tokens")),e.currentTokenTab=="Default"?(a(),r("div",ps,[te(p(e.t("newAdd.enterCoinType"))+" ",1),Z(j,{placement:"bottom","arrow-point-at-center":""},{title:m(()=>[n("span",null,p(e.t("newAdd.uniqueIdOfCoin")),1)]),default:m(()=>[ks]),_:1})])):g("",!0)]))]))]),_:1})])])]}),_:1},8,["title"])}const Ns=ze(lo,[["render",bs],["__scopeId","data-v-7048a4ba"]]);export{Ns as _};
