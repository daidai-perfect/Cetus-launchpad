import{_ as G}from"./token-warning.10eecc0f.js";import{b as u,y as F,c as le,x as O,f as M,g as ie}from"./index.de084947.js";import{a as de,l as re,m as f,a2 as ue,a3 as me,r as E,D as q,E as ce,e as ge,q as pe,o,f as p,h as s,c,z,t as U,x as v,i as R,w as P,v as r,u as S,j as N,I as fe,S as ve,B as he,a4 as ke,p as be,k as ye}from"./entry.99c72b2b.js";import"./index.fd24c567.js";/* empty css              */import{i as $e}from"./import-icon.de3e6c66.js";import{u as Ce}from"./index.df82624f.js";import{a as Se,u as Le}from"./pool.350c2acd.js";import{u as we}from"./useDebounceFunction.498b27e8.js";const Ie=de({components:{TokenWarning:G},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},havehalf:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""},amountLeabl:{type:String,default:""},isShowAmountPrice:{type:Boolean,default:!0},convertAssetsLoading:{type:Boolean,default:!1},swapLoading:{type:Boolean,default:!1},title:{type:String,default:""}},setup(e,t){const{t:W,locale:K}=re(),H=Se(),D=f(()=>H),A=f(()=>M(Number(e.balance)).div(2)),h=ue(me,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function B(){this.$emit("onSelect")}E("");const j=we(a=>{t.emit("onInput",a),t.emit("onInputLoading",!1)},500),k=E("");let I=E(!1);const y=a=>{const n=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`),d=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(n,"$1");d>0&&t.emit("onInputLoading",!0),j(d)},Q=a=>{var n;if(!I.value){const d=a.target.selectionStart,g=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",a.target.value);let m=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(g,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",m),console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.inputType:",a.inputType);let L=m.includes(".")&&String(u(m))==="0"?m:String(u(m));const V=O(a.target.value),T=O(L),$=T.length-V.length;let C=d+$;if((n=a==null?void 0:a.inputType)!=null&&n.includes("delete")&&$>0&&d===T[T.length-1]){const w=a.target.value.slice(0,d-1)+a.target.value.slice(d);L=String(u(w.replace(/,/g,""))),C=C-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",L),k.value=L||"",/^\d*\.?\d*$/.test(a.target.value)||(a.target.value=L||""),setTimeout(()=>{try{a.target.setSelectionRange(C<0?0:C,C<0?0:C)}catch(w){console.log("🚀 ~ file: assets-card.vue:307 ~ setTimeout ~ error:",w)}},0)}};function X(a){var C;I.value=!1;const n=a.target.selectionStart,d=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ event.target.value:",a.target.value);let g=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(d,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ value:",g),console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ event.inputType:",a.inputType);let m=g.includes(".")&&String(u(g))==="0"?g:String(u(g));const L=O(a.target.value),V=O(m),T=V.length-L.length;let $=n+T;if((C=a==null?void 0:a.inputType)!=null&&C.includes("delete")&&T>0&&n===V[V.length-1]){const w=a.target.value.slice(0,n-1)+a.target.value.slice(n);m=String(u(w.replace(/,/g,""))),$=$-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ fValue:",m),k.value=m||"",a.target.value=m||"",setTimeout(()=>{try{a.target.setSelectionRange($<0?0:$,$<0?0:$)}catch(w){console.log("🚀 ~ file: assets-card.vue:307 ~handleCompositionEnd setTimeout ~ error:",w)}},0)}q(()=>e.inputValue,a=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",a);const n=a!=null&&a.includes(".")&&String(u(a))==="0"?a:String(u(a));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",n),n!==k.value&&(k.value=n)},{immediate:!0});const Y=Ce(),Z=f(()=>Y),_=Le(),i=f(()=>_),x=f(()=>i.value.tokensWarningObj);let b=E({});q(()=>i.value.RATES,a=>{a&&(b.value=a)},{immediate:!0,deep:!0});const ee=f(()=>{var d,g,m;const a=(b==null?void 0:b.value)&&((d=b==null?void 0:b.value)==null?void 0:d[e.address])&&((m=(g=b==null?void 0:b.value)==null?void 0:g[e.address])==null?void 0:m.price)||0,n=M(e.inputValue||0).mul(a).toNumber();return a<=0?0:n>0&&n<.01?"<$0.01":ie(n,2)}),ae=f(()=>{var a,n;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((a=i.value.tokensObj[e.address])==null?void 0:a.labels)&&((n=i.value.tokensObj[e.address])==null?void 0:n.labels[0])}),l=f(()=>{var a;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((a=i.value.tokensObj[e.address])==null?void 0:a.decimals)}),oe=f(()=>{var a,n,d,g;return e.coinIcon||((n=(a=i==null?void 0:i.value)==null?void 0:a.tokensObj[e.address])==null?void 0:n.logo_url)||((g=(d=i==null?void 0:i.value)==null?void 0:d.tokensObj[e.address])==null?void 0:g.logoURI)||""}),ne=f(()=>i.value.tokensObj),se=f(()=>D.value.theme),te=f(()=>i.value.isTokenLoading);return{route:ce(),theme:se,currentIcon:oe,tokensObj:ne,pool:i,halfBalance:A,coinLabels:ae,t:W,addCommom:u,store:D,wallet:Z,indicator:h,inputChange:y,importIcon:$e,selectCoin:B,amountPirce:ee,coinDecimals:l,formatNumber:F,tokensWarningObj:x,checkNullObj:le,isTokenLoading:te,formattedValue:k,handleInput:Q,handleCompositionEnd:X,isComposing:I}}});const J=e=>(be("data-v-cc2cafc2"),e=e(),ye(),e),Te={class:"card"},Pe={class:"pc-card"},Ne={class:"card-top"},Ve={class:"loading-token"},Ae={key:1},Be={key:0},je=J(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Oe=[je],Ee={class:"card-bottom"},ze={key:0,class:"amount-price"},Re={key:1},De={class:"top"},Fe={class:"right"},We={class:"balance"},He={key:1},Me={class:"h5-card"},qe={class:"card-bottom"},Ue={class:"tit"},Ge={class:"top"},Je={class:"right"},Ke={class:"balance"},Qe={key:1},Xe={class:"card-top"},Ye={class:"loading-token"},Ze={key:1},_e={key:0},xe=J(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),ea=[xe],aa={key:0,class:"amount-price"},oa={key:1};function na(e,t,W,K,H,D){const A=fe,h=ve,B=ke,j=G,k=he,I=pe("image");return o(),p("div",Te,[s("div",Pe,[s("div",Ne,[e.swapLoading?(o(),c(h,{key:1,class:"input-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):(o(),c(A,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.formattedValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:e.handleInput,onFocus:t[0]||(t[0]=y=>e.$emit("onFocus"))},null,8,["value","disabled","onChange","onInput"])),s("div",{class:z(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"||e.route.name=="limit"?"left-opcity":""].join("")]),onClick:t[1]||(t[1]=y=>e.hasArrow&&!e.isTokenLoading?e.selectCoin():"")},[s("div",Ve,[e.isTokenLoading?(o(),c(B,{key:0,class:"token-img-loading-skeleton",active:"",size:"small",paragraph:!1})):e.address?U((o(),p("img",Ae,null,512)),[[I,e.currentIcon]]):v("",!0),R(j,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),R(h,{loading:e.isTokenLoading,class:"token-loading-skeleton",active:"",paragraph:!1},{default:P(()=>[s("div",null,[s("p",null,r(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(o(),p("p",Be,r(e.coinLabels),1)):v("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(o(),p("svg",{key:0,class:z(["icon",e.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Oe,2)):v("",!0)],2)]),s("div",Ee,[e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<$0.01")&&e.isShowAmountPrice&&!e.swapLoading?(o(),p("div",ze,r(e.amountPirce!=="<$0.01"?`$${("formatNumber"in e?e.formatNumber:S(F))(e.amountPirce)}`:`${e.amountPirce}`),1)):(o(),p("div",Re,[e.swapLoading?(o(),c(h,{key:0,class:"rate-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):v("",!0)])),s("div",De,[s("div",Fe,[N(r(e.amountLeabl?e.amountLeabl:e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),s("span",We,[e.convertAssetsLoading?(o(),c(h,{key:0,class:"token-loading-skeleton",loading:!0,active:"",paragraph:!1})):(o(),p("span",He,r(e.wallet.connected?("addCommom"in e?e.addCommom:S(u))(e.balance,e.coinDecimals):"0"),1))]),e.havehalf&&e.wallet.connected?(o(),c(k,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(u))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[2]||(t[2]=y=>e.$emit("onHalf"))},{default:P(()=>[N(r("Half"))]),_:1},8,["disabled"])):v("",!0),e.havemax&&e.wallet.connected?(o(),c(k,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(u))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=y=>e.$emit("onMax"))},{default:P(()=>[N(r(e.$t("button.max")),1)]),_:1},8,["disabled"])):v("",!0)])])])]),s("div",Me,[s("div",qe,[s("div",Ue,r(e.title),1),s("div",Ge,[s("div",Je,[N(r(e.amountLeabl?e.amountLeabl:e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),s("span",Ke,[e.convertAssetsLoading?(o(),c(h,{key:0,class:"token-loading-skeleton",loading:!0,active:"",paragraph:!1})):(o(),p("span",Qe,r(e.wallet.connected?("addCommom"in e?e.addCommom:S(u))(e.balance,e.coinDecimals):"0"),1))]),e.havehalf&&e.wallet.connected?(o(),c(k,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(u))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=y=>e.$emit("onHalf"))},{default:P(()=>[N(r("Half"))]),_:1},8,["disabled"])):v("",!0),e.havemax&&e.wallet.connected?(o(),c(k,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(u))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[5]||(t[5]=y=>e.$emit("onMax"))},{default:P(()=>[N(r(e.$t("button.max")),1)]),_:1},8,["disabled"])):v("",!0)])])]),s("div",Xe,[e.swapLoading?(o(),c(h,{key:1,class:"input-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):(o(),c(A,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.formattedValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:e.handleInput,onFocus:t[6]||(t[6]=y=>e.$emit("onFocus"))},null,8,["value","disabled","onChange","onInput"])),s("div",{class:z(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"||e.route.name=="limit"?"left-opcity":""].join("")]),onClick:t[7]||(t[7]=y=>e.hasArrow&&!e.isTokenLoading?e.selectCoin():"")},[s("div",Ye,[e.isTokenLoading?(o(),c(B,{key:0,class:"token-img-loading-skeleton",active:"",size:"small",paragraph:!1})):e.address?U((o(),p("img",Ze,null,512)),[[I,e.currentIcon]]):v("",!0),R(j,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),R(h,{loading:e.isTokenLoading,class:"token-loading-skeleton",active:"",paragraph:!1},{default:P(()=>[s("div",null,[s("p",null,r(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(o(),p("p",_e,r(e.coinLabels),1)):v("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(o(),p("svg",{key:0,class:z(["icon",e.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},ea,2)):v("",!0)],2)]),e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<$0.01")&&e.isShowAmountPrice&&!e.swapLoading?(o(),p("div",aa,r(e.amountPirce!=="<$0.01"?`$${("formatNumber"in e?e.formatNumber:S(F))(e.amountPirce)}`:`${e.amountPirce}`),1)):(o(),p("div",oa,[e.swapLoading?(o(),c(h,{key:0,class:"rate-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):v("",!0)]))])])}const pa=ge(Ie,[["render",na],["__scopeId","data-v-cc2cafc2"]]);export{pa as _};
