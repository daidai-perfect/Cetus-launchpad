import{_ as G}from"./token-warning.9bd2828a.js";import{u as le,g as m,l as W,i as ie,d as M,n as de}from"./index.b02d129f.js";import{a as re,l as ue,m as v,U as me,V as ce,r as O,G as q,W as pe,e as ge,q as fe,o,f as u,h as s,v as d,x as p,c as g,z as E,t as U,i as z,w as P,u as S,j as N,Z as ve,Y as he,B as ke,X as be,p as ye,k as $e}from"./entry.f1d335d0.js";import"./index.206efd4d.js";/* empty css              */import{i as Ce}from"./import-icon.de3e6c66.js";import{b as Se,u as Le,h as R}from"./pool.73243d89.js";import{u as Ie}from"./useDebounceFunction.86687629.js";const we=re({components:{TokenWarning:G},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},havehalf:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""},amountLeabl:{type:String,default:""},isShowAmountPrice:{type:Boolean,default:!0},convertAssetsLoading:{type:Boolean,default:!1},isDcaInput:{type:Boolean,default:!1},swapLoading:{type:Boolean,default:!1},title:{type:String,default:""}},setup(e,t){const{t:F,locale:Y}=ue(),H=Se(),D=v(()=>H),A=v(()=>M(Number(e.balance)).div(2)),h=me(ce,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function B(){this.$emit("onSelect")}O("");const j=Ie(a=>{t.emit("onInput",a),t.emit("onInputLoading",!1)},500),k=O("");let w=O(!1);const y=a=>{const n=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`),r=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(n,"$1");r>0&&t.emit("onInputLoading",!0),j(r)},Z=a=>{var n;if(!w.value){const r=a.target.selectionStart,f=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",a.target.value);let c=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(f,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",c),console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.inputType:",a.inputType);let L=c.includes(".")&&String(m(c))==="0"?c:String(m(c));const V=R(a.target.value),T=R(L),$=T.length-V.length;let C=r+$;if((n=a==null?void 0:a.inputType)!=null&&n.includes("delete")&&$>0&&r===T[T.length-1]){const I=a.target.value.slice(0,r-1)+a.target.value.slice(r);L=String(m(I.replace(/,/g,""))),C=C-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",L),k.value=L||"",/^\d*\.?\d*$/.test(a.target.value)||(a.target.value=L||""),setTimeout(()=>{try{a.target.setSelectionRange(C<0?0:C,C<0?0:C)}catch(I){console.log("🚀 ~ file: assets-card.vue:307 ~ setTimeout ~ error:",I)}},0)}};function J(a){var C;w.value=!1;const n=a.target.selectionStart,r=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ event.target.value:",a.target.value);let f=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(r,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ value:",f),console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ event.inputType:",a.inputType);let c=f.includes(".")&&String(m(f))==="0"?f:String(m(f));const L=R(a.target.value),V=R(c),T=V.length-L.length;let $=n+T;if((C=a==null?void 0:a.inputType)!=null&&C.includes("delete")&&T>0&&n===V[V.length-1]){const I=a.target.value.slice(0,n-1)+a.target.value.slice(n);c=String(m(I.replace(/,/g,""))),$=$-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ fValue:",c),k.value=c||"",a.target.value=c||"",setTimeout(()=>{try{a.target.setSelectionRange($<0?0:$,$<0?0:$)}catch(I){console.log("🚀 ~ file: assets-card.vue:307 ~handleCompositionEnd setTimeout ~ error:",I)}},0)}q(()=>e.inputValue,a=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",a);const n=a!=null&&a.includes(".")&&String(m(a))==="0"?a:String(m(a));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",n),n!==k.value&&(k.value=n)},{immediate:!0});const K=le(),Q=v(()=>K),_=Le(),i=v(()=>_),x=v(()=>i.value.tokensWarningObj);let b=O({});q(()=>i.value.RATES,a=>{a&&(b.value=a)},{immediate:!0,deep:!0});const ee=v(()=>{var r,f,c;const a=(b==null?void 0:b.value)&&((r=b==null?void 0:b.value)==null?void 0:r[e.address])&&((c=(f=b==null?void 0:b.value)==null?void 0:f[e.address])==null?void 0:c.price)||0,n=M(e.inputValue||0).mul(a).toNumber();return a<=0?0:n>0&&n<.01?"<$0.01":de(n,2)}),ae=v(()=>{var a,n;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((a=i.value.tokensObj[e.address])==null?void 0:a.labels)&&((n=i.value.tokensObj[e.address])==null?void 0:n.labels[0])}),l=v(()=>{var a;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((a=i.value.tokensObj[e.address])==null?void 0:a.decimals)}),oe=v(()=>{var a,n,r,f;return e.coinIcon||((n=(a=i==null?void 0:i.value)==null?void 0:a.tokensObj[e.address])==null?void 0:n.logo_url)||((f=(r=i==null?void 0:i.value)==null?void 0:r.tokensObj[e.address])==null?void 0:f.logoURI)||""}),ne=v(()=>i.value.tokensObj),se=v(()=>D.value.theme),te=v(()=>i.value.isTokenLoading);return{route:pe(),theme:se,currentIcon:oe,tokensObj:ne,pool:i,halfBalance:A,coinLabels:ae,t:F,addCommom:m,store:D,wallet:Q,indicator:h,inputChange:y,importIcon:Ce,selectCoin:B,amountPirce:ee,coinDecimals:l,formatNumber:W,tokensWarningObj:x,checkNullObj:ie,isTokenLoading:te,formattedValue:k,handleInput:Z,handleCompositionEnd:J,isComposing:w}}});const X=e=>(ye("data-v-60d90d66"),e=e(),$e(),e),Te={class:"card"},Pe={class:"pc-card"},Ne={key:0,class:"dca-desc"},Ve={class:"card-top"},Ae={class:"loading-token"},Be={key:1},je={key:0},Oe=X(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ee=[Oe],ze={class:"card-bottom"},Re={key:0,class:"amount-price"},De={key:1},We={class:"top"},Fe={class:"right"},He={class:"balance"},Me={key:1},qe={class:"h5-card"},Ue={class:"card-bottom"},Ge={key:0,class:"dca-desc"},Xe={class:"tit"},Ye={class:"top"},Ze={class:"right"},Je={class:"balance"},Ke={key:1},Qe={class:"card-top"},_e={class:"loading-token"},xe={key:1},ea={key:0},aa=X(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),oa=[aa],na={key:0,class:"amount-price"},sa={key:1};function ta(e,t,F,Y,H,D){const A=ve,h=he,B=be,j=G,k=ke,w=fe("image");return o(),u("div",Te,[s("div",Pe,[e.isDcaInput?(o(),u("div",Ne,d(`How much ${e.coinSymbol||"--"} do you want to invest?`),1)):p("",!0),s("div",Ve,[e.swapLoading?(o(),g(h,{key:1,class:"input-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):(o(),g(A,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.formattedValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:e.handleInput,onFocus:t[0]||(t[0]=y=>e.$emit("onFocus"))},null,8,["value","disabled","onChange","onInput"])),s("div",{class:E(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"||e.route.name=="limit"?"left-opcity":""].join("")]),onClick:t[1]||(t[1]=y=>e.hasArrow&&!e.isTokenLoading?e.selectCoin():"")},[s("div",Ae,[e.isTokenLoading?(o(),g(B,{key:0,class:"token-img-loading-skeleton",active:"",size:"small",paragraph:!1})):e.address?U((o(),u("img",Be,null,512)),[[w,e.currentIcon]]):p("",!0),z(j,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),z(h,{loading:e.isTokenLoading,class:"token-loading-skeleton",active:"",paragraph:!1},{default:P(()=>[s("div",null,[s("p",null,d(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(o(),u("p",je,d(e.coinLabels),1)):p("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(o(),u("svg",{key:0,class:E(["icon",e.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Ee,2)):p("",!0)],2)]),s("div",ze,[e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<$0.01")&&e.isShowAmountPrice&&!e.swapLoading?(o(),u("div",Re,d(e.amountPirce!=="<$0.01"?`$${("formatNumber"in e?e.formatNumber:S(W))(e.amountPirce)}`:`${e.amountPirce}`),1)):(o(),u("div",De,[e.swapLoading?(o(),g(h,{key:0,class:"rate-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):p("",!0)])),s("div",We,[s("div",Fe,[N(d(e.amountLeabl?e.amountLeabl:e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),s("span",He,[e.convertAssetsLoading?(o(),g(h,{key:0,class:"token-loading-skeleton",loading:!0,active:"",paragraph:!1})):(o(),u("span",Me,d(e.wallet.connected?("addCommom"in e?e.addCommom:S(m))(e.balance,e.coinDecimals):"0"),1))]),e.havehalf&&e.wallet.connected?(o(),g(k,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(m))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[2]||(t[2]=y=>e.$emit("onHalf"))},{default:P(()=>[N(d("Half"))]),_:1},8,["disabled"])):p("",!0),e.havemax&&e.wallet.connected?(o(),g(k,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(m))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=y=>e.$emit("onMax"))},{default:P(()=>[N(d(e.$t("button.max")),1)]),_:1},8,["disabled"])):p("",!0)])])])]),s("div",qe,[s("div",Ue,[e.isDcaInput?(o(),u("div",Ge,"Invest Amount")):p("",!0),s("div",Xe,d(e.title),1),s("div",Ye,[s("div",Ze,[N(d(e.amountLeabl?e.amountLeabl:e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),s("span",Je,[e.convertAssetsLoading?(o(),g(h,{key:0,class:"token-loading-skeleton",loading:!0,active:"",paragraph:!1})):(o(),u("span",Ke,d(e.wallet.connected?("addCommom"in e?e.addCommom:S(m))(e.balance,e.coinDecimals):"0"),1))]),e.havehalf&&e.wallet.connected?(o(),g(k,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(m))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=y=>e.$emit("onHalf"))},{default:P(()=>[N(d("Half"))]),_:1},8,["disabled"])):p("",!0),e.havemax&&e.wallet.connected?(o(),g(k,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(m))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[5]||(t[5]=y=>e.$emit("onMax"))},{default:P(()=>[N(d(e.$t("button.max")),1)]),_:1},8,["disabled"])):p("",!0)])])]),s("div",Qe,[e.swapLoading?(o(),g(h,{key:1,class:"input-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):(o(),g(A,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.formattedValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:e.handleInput,onFocus:t[6]||(t[6]=y=>e.$emit("onFocus"))},null,8,["value","disabled","onChange","onInput"])),s("div",{class:E(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"||e.route.name=="limit"?"left-opcity":""].join("")]),onClick:t[7]||(t[7]=y=>e.hasArrow&&!e.isTokenLoading?e.selectCoin():"")},[s("div",_e,[e.isTokenLoading?(o(),g(B,{key:0,class:"token-img-loading-skeleton",active:"",size:"small",paragraph:!1})):e.address?U((o(),u("img",xe,null,512)),[[w,e.currentIcon]]):p("",!0),z(j,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),z(h,{loading:e.isTokenLoading,class:"token-loading-skeleton",active:"",paragraph:!1},{default:P(()=>[s("div",null,[s("p",null,d(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(o(),u("p",ea,d(e.coinLabels),1)):p("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(o(),u("svg",{key:0,class:E(["icon",e.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},oa,2)):p("",!0)],2)]),e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<$0.01")&&e.isShowAmountPrice&&!e.swapLoading?(o(),u("div",na,d(e.amountPirce!=="<$0.01"?`$${("formatNumber"in e?e.formatNumber:S(W))(e.amountPirce)}`:`${e.amountPirce}`),1)):(o(),u("div",sa,[e.swapLoading?(o(),g(h,{key:0,class:"rate-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):p("",!0)]))])])}const fa=ge(we,[["render",ta],["__scopeId","data-v-60d90d66"]]);export{fa as _};
