import{_ as Y}from"./token-warning.96fdb1f5.js";import{b as r,y as D,c as le,x as j,f as q,g as ie}from"./index.3daa4341.js";import{a as de,l as re,m as f,a2 as ue,a3 as ce,r as O,D as U,E as me,e as ge,q as pe,o,f as c,h as n,v as b,c as m,z as E,t as X,x as p,i as z,w as P,u as $,I as fe,S as he,B as ve,j as R,p as ke,k as be,a4 as ye}from"./entry.a7bc8957.js";import"./index.8c3bc3bd.js";/* empty css              */import{i as Ce}from"./import-icon.de3e6c66.js";import{u as Se}from"./index.52313906.js";import{a as $e,u as we}from"./pool.ef5dfa1f.js";import{u as Le}from"./useDebounceFunction.3d0ed39d.js";const Ie=de({components:{TokenWarning:Y},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},havehalf:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""},amountLeabl:{type:String,default:""},isShowAmountPrice:{type:Boolean,default:!0},convertAssetsLoading:{type:Boolean,default:!1},swapLoading:{type:Boolean,default:!1},title:{type:String,default:""}},setup(e,t){const{t:W,locale:G}=re(),H=$e(),M=f(()=>H),N=f(()=>q(Number(e.balance)).div(2)),h=ue(ce,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function V(){this.$emit("onSelect")}O("");const B=Le(a=>{t.emit("onInput",a),t.emit("onInputLoading",!1)},500),v=O("");let I=O(!1);const y=a=>{const s=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`),d=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(s,"$1");d>0&&t.emit("onInputLoading",!0),B(d)},J=a=>{var s;if(!I.value){const d=a.target.selectionStart,g=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",a.target.value);let u=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(g,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",u),console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.inputType:",a.inputType);let w=u.includes(".")&&String(r(u))==="0"?u:String(r(u));const A=j(a.target.value),T=j(w),C=T.length-A.length;let S=d+C;if((s=a==null?void 0:a.inputType)!=null&&s.includes("delete")&&C>0&&d===T[T.length-1]){const L=a.target.value.slice(0,d-1)+a.target.value.slice(d);w=String(r(L.replace(/,/g,""))),S=S-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",w),v.value=w||"",/^\d*\.?\d*$/.test(a.target.value)||(a.target.value=w||""),setTimeout(()=>{try{a.target.setSelectionRange(S<0?0:S,S<0?0:S)}catch(L){console.log("🚀 ~ file: assets-card.vue:307 ~ setTimeout ~ error:",L)}},0)}};function K(a){var S;I.value=!1;const s=a.target.selectionStart,d=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ event.target.value:",a.target.value);let g=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(d,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ value:",g),console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ event.inputType:",a.inputType);let u=g.includes(".")&&String(r(g))==="0"?g:String(r(g));const w=j(a.target.value),A=j(u),T=A.length-w.length;let C=s+T;if((S=a==null?void 0:a.inputType)!=null&&S.includes("delete")&&T>0&&s===A[A.length-1]){const L=a.target.value.slice(0,s-1)+a.target.value.slice(s);u=String(r(L.replace(/,/g,""))),C=C-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ fValue:",u),v.value=u||"",a.target.value=u||"",setTimeout(()=>{try{a.target.setSelectionRange(C<0?0:C,C<0?0:C)}catch(L){console.log("🚀 ~ file: assets-card.vue:307 ~handleCompositionEnd setTimeout ~ error:",L)}},0)}U(()=>e.inputValue,a=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",a);const s=a!=null&&a.includes(".")&&String(r(a))==="0"?a:String(r(a));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",s),s!==v.value&&(v.value=s)},{immediate:!0});const Q=Se(),Z=f(()=>Q),_=we(),i=f(()=>_),x=f(()=>i.value.tokensWarningObj);let k=O({});U(()=>i.value.RATES,a=>{a&&(k.value=a)},{immediate:!0,deep:!0});const ee=f(()=>{var d,g,u;const a=(k==null?void 0:k.value)&&((d=k==null?void 0:k.value)==null?void 0:d[e.address])&&((u=(g=k==null?void 0:k.value)==null?void 0:g[e.address])==null?void 0:u.price)||0,s=q(e.inputValue||0).mul(a).toNumber();return a<=0?0:s>0&&s<.01?"<$0.01":ie(s,2)}),ae=f(()=>{var a,s;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((a=i.value.tokensObj[e.address])==null?void 0:a.labels)&&((s=i.value.tokensObj[e.address])==null?void 0:s.labels[0])}),l=f(()=>{var a;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((a=i.value.tokensObj[e.address])==null?void 0:a.decimals)}),oe=f(()=>{var a,s,d,g;return e.coinIcon||((s=(a=i==null?void 0:i.value)==null?void 0:a.tokensObj[e.address])==null?void 0:s.logo_url)||((g=(d=i==null?void 0:i.value)==null?void 0:d.tokensObj[e.address])==null?void 0:g.logoURI)||""}),ne=f(()=>i.value.tokensObj),se=f(()=>M.value.theme),te=f(()=>i.value.isTokenLoading);return{route:me(),theme:se,currentIcon:oe,tokensObj:ne,pool:i,halfBalance:N,coinLabels:ae,t:W,addCommom:r,store:M,wallet:Z,indicator:h,inputChange:y,importIcon:Ce,selectCoin:V,amountPirce:ee,coinDecimals:l,formatNumber:D,tokensWarningObj:x,checkNullObj:le,isTokenLoading:te,formattedValue:v,handleInput:J,handleCompositionEnd:K,isComposing:I}}});const F=e=>(ke("data-v-344eb829"),e=e(),be(),e),Te={class:"card"},Pe={class:"pc-card"},Ae={class:"tit"},Ne={class:"card-top"},Ve={class:"loading-token"},Be={key:1},je={key:0},Oe=F(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ee=[Oe],ze={class:"card-bottom"},Re={key:0,class:"amount-price"},Fe={key:1},Me={class:"top"},De={class:"right"},We={key:0,class:"icon icon_wallet","aria-hidden":"true"},He=F(()=>n("use",{"xlink:href":"#icon-icon_wallet1"},null,-1)),qe=[He],Ue={class:"balance"},Xe={key:1},Ye={class:"h5-card"},Ge={class:"card-bottom"},Je={class:"tit"},Ke={class:"top"},Qe={class:"right"},Ze=F(()=>n("svg",{class:"icon icon_wallet","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon_wallet1"})],-1)),_e={class:"balance"},xe={key:1},ea={class:"card-top"},aa={class:"loading-token"},oa={key:1},na={key:0},sa=F(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),ta=[sa],la={key:0,class:"amount-price"},ia={key:1};function da(e,t,W,G,H,M){const N=fe,h=he,V=ye,B=Y,v=ve,I=pe("image");return o(),c("div",Te,[n("div",Pe,[n("div",Ae,b(e.title),1),n("div",Ne,[e.swapLoading?(o(),m(h,{key:1,class:"input-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):(o(),m(N,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.formattedValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:e.handleInput,onFocus:t[0]||(t[0]=y=>e.$emit("onFocus"))},null,8,["value","disabled","onChange","onInput"])),n("div",{class:E(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"||e.route.name=="limit"?"left-opcity":""].join("")]),onClick:t[1]||(t[1]=y=>e.hasArrow&&!e.isTokenLoading?e.selectCoin():"")},[n("div",Ve,[e.isTokenLoading?(o(),m(V,{key:0,class:"token-img-loading-skeleton",active:"",size:"small",paragraph:!1})):e.address?X((o(),c("img",Be,null,512)),[[I,e.currentIcon]]):p("",!0),z(B,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),z(h,{loading:e.isTokenLoading,class:"token-loading-skeleton",active:"",paragraph:!1},{default:P(()=>[n("div",null,[n("p",null,b(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(o(),c("p",je,b(e.coinLabels),1)):p("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(o(),c("svg",{key:0,class:E(["icon",e.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Ee,2)):p("",!0)],2)]),n("div",ze,[e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<$0.01")&&e.isShowAmountPrice&&!e.swapLoading?(o(),c("div",Re,b(e.amountPirce!=="<$0.01"?`$${("formatNumber"in e?e.formatNumber:$(D))(e.amountPirce)}`:`${e.amountPirce}`),1)):(o(),c("div",Fe,[e.swapLoading?(o(),m(h,{key:0,class:"rate-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):p("",!0)])),n("div",Me,[n("div",De,[e.wallet.connected?(o(),c("svg",We,qe)):p("",!0),n("span",Ue,[e.convertAssetsLoading?(o(),m(h,{key:0,class:"token-loading-skeleton",loading:!0,active:"",paragraph:!1})):(o(),c("span",Xe,b(e.wallet.connected?("addCommom"in e?e.addCommom:$(r))(e.balance,e.coinDecimals):""),1))]),e.havehalf&&e.wallet.connected?(o(),m(v,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:$(r))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[2]||(t[2]=y=>e.$emit("onHalf"))},{default:P(()=>[R("HALF")]),_:1},8,["disabled"])):p("",!0),e.havemax&&e.wallet.connected?(o(),m(v,{key:2,disabled:!e.coinName||("addCommom"in e?e.addCommom:$(r))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=y=>e.$emit("onMax"))},{default:P(()=>[R("MAX")]),_:1},8,["disabled"])):p("",!0)])])])]),n("div",Ye,[n("div",Ge,[n("div",Je,b(e.title=="You pay"?"Pay":e.title=="You receive"?"Receive":e.title),1),n("div",Ke,[n("div",Qe,[Ze,n("span",_e,[e.convertAssetsLoading?(o(),m(h,{key:0,class:"token-loading-skeleton",loading:!0,active:"",paragraph:!1})):(o(),c("span",xe,b(e.wallet.connected?("addCommom"in e?e.addCommom:$(r))(e.balance,e.coinDecimals):"0"),1))]),e.havehalf&&e.wallet.connected?(o(),m(v,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:$(r))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=y=>e.$emit("onHalf"))},{default:P(()=>[R("HALF")]),_:1},8,["disabled"])):p("",!0),e.havemax&&e.wallet.connected?(o(),m(v,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:$(r))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[5]||(t[5]=y=>e.$emit("onMax"))},{default:P(()=>[R("MAX")]),_:1},8,["disabled"])):p("",!0)])])]),n("div",ea,[e.swapLoading?(o(),m(h,{key:1,class:"input-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):(o(),m(N,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.formattedValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:e.handleInput,onFocus:t[6]||(t[6]=y=>e.$emit("onFocus"))},null,8,["value","disabled","onChange","onInput"])),n("div",{class:E(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"||e.route.name=="limit"?"left-opcity":""].join("")]),onClick:t[7]||(t[7]=y=>e.hasArrow&&!e.isTokenLoading?e.selectCoin():"")},[n("div",aa,[e.isTokenLoading?(o(),m(V,{key:0,class:"token-img-loading-skeleton",active:"",size:"small",paragraph:!1})):e.address?X((o(),c("img",oa,null,512)),[[I,e.currentIcon]]):p("",!0),z(B,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),z(h,{loading:e.isTokenLoading,class:"token-loading-skeleton",active:"",paragraph:!1},{default:P(()=>[n("div",null,[n("p",null,b(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(o(),c("p",na,b(e.coinLabels),1)):p("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(o(),c("svg",{key:0,class:E(["icon",e.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},ta,2)):p("",!0)],2)]),e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<$0.01")&&e.isShowAmountPrice&&!e.swapLoading?(o(),c("div",la,b(e.amountPirce!=="<$0.01"?`$${("formatNumber"in e?e.formatNumber:$(D))(e.amountPirce)}`:`${e.amountPirce}`),1)):(o(),c("div",ia,[e.swapLoading?(o(),m(h,{key:0,class:"rate-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):p("",!0)]))])])}const ba=ge(Ie,[["render",da],["__scopeId","data-v-344eb829"]]);export{ba as N};
