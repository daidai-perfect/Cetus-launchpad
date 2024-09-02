import{_ as Y}from"./token-warning.be305078.js";import{u as de,b as c,q as D,c as re,h as q,i as ue}from"./index.972d2d7e.js";import{a as G,l as ce,m as f,a2 as pe,a3 as me,r as E,D as U,E as ge,e as J,q as fe,o,f as r,h as n,v as h,c as u,z as B,t as X,x as g,i as R,w,u as S,I as he,S as ve,B as ke,j,p as be,k as ye,a4 as $e,L as Ce}from"./entry.8daddd9b.js";import"./index.081f2cdc.js";/* empty css              */import{i as Se}from"./import-icon.de3e6c66.js";import{a as we,u as Ie,m as z}from"./pool.029ead56.js";import{u as Le}from"./useDebounceFunction.8bb816ee.js";/* empty css              */const Te=G({components:{TokenWarning:Y},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},havehalf:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""},amountLeabl:{type:String,default:""},isShowAmountPrice:{type:Boolean,default:!0},convertAssetsLoading:{type:Boolean,default:!1},swapLoading:{type:Boolean,default:!1},title:{type:String,default:""}},setup(e,t){const{t:H,locale:W}=ce(),M=we(),V=f(()=>M),T=f(()=>q(Number(e.balance)).div(2)),v=pe(me,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function O(){this.$emit("onSelect")}E("");const _=Le(a=>{t.emit("onInput",a),t.emit("onInputLoading",!1)},500),k=E("");let P=E(!1);const y=a=>{const s=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`),d=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(s,"$1");d>0&&t.emit("onInputLoading",!0),_(d)},K=a=>{var s;if(!P.value){const d=a.target.selectionStart,m=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",a.target.value);let p=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(m,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",p),console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.inputType:",a.inputType);let I=p.includes(".")&&String(c(p))==="0"?p:String(c(p));const N=z(a.target.value),A=z(I),$=A.length-N.length;let C=d+$;if((s=a==null?void 0:a.inputType)!=null&&s.includes("delete")&&$>0&&d===A[A.length-1]){const L=a.target.value.slice(0,d-1)+a.target.value.slice(d);I=String(c(L.replace(/,/g,""))),C=C-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",I),k.value=I||"",/^\d*\.?\d*$/.test(a.target.value)||(a.target.value=I||""),setTimeout(()=>{try{a.target.setSelectionRange(C<0?0:C,C<0?0:C)}catch(L){console.log("🚀 ~ file: assets-card.vue:307 ~ setTimeout ~ error:",L)}},0)}};function Q(a){var C;P.value=!1;const s=a.target.selectionStart,d=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(l==null?void 0:l.value)&&(l==null?void 0:l.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ event.target.value:",a.target.value);let m=a.target.value.replace(/[\u4e00-\u9fa5]/g,"").replace(/,/g,"").replace(d,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ value:",m),console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ event.inputType:",a.inputType);let p=m.includes(".")&&String(c(m))==="0"?m:String(c(m));const I=z(a.target.value),N=z(p),A=N.length-I.length;let $=s+A;if((C=a==null?void 0:a.inputType)!=null&&C.includes("delete")&&A>0&&s===N[N.length-1]){const L=a.target.value.slice(0,s-1)+a.target.value.slice(s);p=String(c(L.replace(/,/g,""))),$=$-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleCompositionEnd ~ fValue:",p),k.value=p||"",a.target.value=p||"",setTimeout(()=>{try{a.target.setSelectionRange($<0?0:$,$<0?0:$)}catch(L){console.log("🚀 ~ file: assets-card.vue:307 ~handleCompositionEnd setTimeout ~ error:",L)}},0)}U(()=>e.inputValue,a=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",a);const s=a!=null&&a.includes(".")&&String(c(a))==="0"?a:String(c(a));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",s),s!==k.value&&(k.value=s)},{immediate:!0});const Z=de(),x=f(()=>Z),ee=Ie(),i=f(()=>ee),ae=f(()=>i.value.tokensWarningObj);let b=E({});U(()=>i.value.RATES,a=>{a&&(b.value=a)},{immediate:!0,deep:!0});const oe=f(()=>{var d,m,p;const a=(b==null?void 0:b.value)&&((d=b==null?void 0:b.value)==null?void 0:d[e.address])&&((p=(m=b==null?void 0:b.value)==null?void 0:m[e.address])==null?void 0:p.price)||0,s=q(e.inputValue||0).mul(a).toNumber();return a<=0?0:s>0&&s<.01?"<$0.01":ue(s,2)}),ne=f(()=>{var a,s;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((a=i.value.tokensObj[e.address])==null?void 0:a.labels)&&((s=i.value.tokensObj[e.address])==null?void 0:s.labels[0])}),l=f(()=>{var a;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((a=i.value.tokensObj[e.address])==null?void 0:a.decimals)}),se=f(()=>{var a,s,d,m;return e.coinIcon||((s=(a=i==null?void 0:i.value)==null?void 0:a.tokensObj[e.address])==null?void 0:s.logo_url)||((m=(d=i==null?void 0:i.value)==null?void 0:d.tokensObj[e.address])==null?void 0:m.logoURI)||""}),te=f(()=>i.value.tokensObj),le=f(()=>V.value.theme),ie=f(()=>i.value.isTokenLoading);return{route:ge(),theme:le,currentIcon:se,tokensObj:te,pool:i,halfBalance:T,coinLabels:ne,t:H,addCommom:c,store:V,wallet:x,indicator:v,inputChange:y,importIcon:Se,selectCoin:O,amountPirce:oe,coinDecimals:l,formatNumber:D,tokensWarningObj:ae,checkNullObj:re,isTokenLoading:ie,formattedValue:k,handleInput:K,handleCompositionEnd:Q,isComposing:P}}});const F=e=>(be("data-v-344eb829"),e=e(),ye(),e),Pe={class:"card"},Ae={class:"pc-card"},Ne={class:"tit"},Be={class:"card-top"},je={class:"loading-token"},Ve={key:1},Oe={key:0},_e=F(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ee=[_e],Re={class:"card-bottom"},ze={key:0,class:"amount-price"},Fe={key:1},He={class:"top"},Me={class:"right"},De={key:0,class:"icon icon_wallet","aria-hidden":"true"},We=F(()=>n("use",{"xlink:href":"#icon-icon_wallet1"},null,-1)),qe=[We],Ue={class:"balance"},Xe={key:1},Ye={class:"h5-card"},Ge={class:"card-bottom"},Je={class:"tit"},Ke={class:"top"},Qe={class:"right"},Ze=F(()=>n("svg",{class:"icon icon_wallet","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon_wallet1"})],-1)),xe={class:"balance"},ea={key:1},aa={class:"card-top"},oa={class:"loading-token"},na={key:1},sa={key:0},ta=F(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),la=[ta],ia={key:0,class:"amount-price"},da={key:1};function ra(e,t,H,W,M,V){const T=he,v=ve,O=$e,_=Y,k=ke,P=fe("image");return o(),r("div",Pe,[n("div",Ae,[n("div",Ne,h(e.title),1),n("div",Be,[e.swapLoading?(o(),u(v,{key:1,class:"input-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):(o(),u(T,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.formattedValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:e.handleInput,onFocus:t[0]||(t[0]=y=>e.$emit("onFocus"))},null,8,["value","disabled","onChange","onInput"])),n("div",{class:B(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"||e.route.name=="limit"?"left-opcity":""].join("")]),onClick:t[1]||(t[1]=y=>e.hasArrow&&!e.isTokenLoading?e.selectCoin():"")},[n("div",je,[e.isTokenLoading?(o(),u(O,{key:0,class:"token-img-loading-skeleton",active:"",size:"small",paragraph:!1})):e.address?X((o(),r("img",Ve,null,512)),[[P,e.currentIcon]]):g("",!0),R(_,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),R(v,{loading:e.isTokenLoading,class:"token-loading-skeleton",active:"",paragraph:!1},{default:w(()=>[n("div",null,[n("p",null,h(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(o(),r("p",Oe,h(e.coinLabels),1)):g("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(o(),r("svg",{key:0,class:B(["icon",e.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Ee,2)):g("",!0)],2)]),n("div",Re,[e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<$0.01")&&e.isShowAmountPrice&&!e.swapLoading?(o(),r("div",ze,h(e.amountPirce!=="<$0.01"?`$${("formatNumber"in e?e.formatNumber:S(D))(e.amountPirce)}`:`${e.amountPirce}`),1)):(o(),r("div",Fe,[e.swapLoading?(o(),u(v,{key:0,class:"rate-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):g("",!0)])),n("div",He,[n("div",Me,[e.wallet.connected?(o(),r("svg",De,qe)):g("",!0),n("span",Ue,[e.convertAssetsLoading?(o(),u(v,{key:0,class:"token-loading-skeleton",loading:!0,active:"",paragraph:!1})):(o(),r("span",Xe,h(e.wallet.connected?("addCommom"in e?e.addCommom:S(c))(e.balance,e.coinDecimals):""),1))]),e.havehalf&&e.wallet.connected?(o(),u(k,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(c))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[2]||(t[2]=y=>e.$emit("onHalf"))},{default:w(()=>[j("HALF")]),_:1},8,["disabled"])):g("",!0),e.havemax&&e.wallet.connected?(o(),u(k,{key:2,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(c))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=y=>e.$emit("onMax"))},{default:w(()=>[j("MAX")]),_:1},8,["disabled"])):g("",!0)])])])]),n("div",Ye,[n("div",Ge,[n("div",Je,h(e.title=="You pay"?"Pay":e.title=="You receive"?"Receive":e.title),1),n("div",Ke,[n("div",Qe,[Ze,n("span",xe,[e.convertAssetsLoading?(o(),u(v,{key:0,class:"token-loading-skeleton",loading:!0,active:"",paragraph:!1})):(o(),r("span",ea,h(e.wallet.connected?("addCommom"in e?e.addCommom:S(c))(e.balance,e.coinDecimals):"0"),1))]),e.havehalf&&e.wallet.connected?(o(),u(k,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(c))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=y=>e.$emit("onHalf"))},{default:w(()=>[j("HALF")]),_:1},8,["disabled"])):g("",!0),e.havemax&&e.wallet.connected?(o(),u(k,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:S(c))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[5]||(t[5]=y=>e.$emit("onMax"))},{default:w(()=>[j("MAX")]),_:1},8,["disabled"])):g("",!0)])])]),n("div",aa,[e.swapLoading?(o(),u(v,{key:1,class:"input-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):(o(),u(T,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.formattedValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:e.handleInput,onFocus:t[6]||(t[6]=y=>e.$emit("onFocus"))},null,8,["value","disabled","onChange","onInput"])),n("div",{class:B(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"||e.route.name=="limit"?"left-opcity":""].join("")]),onClick:t[7]||(t[7]=y=>e.hasArrow&&!e.isTokenLoading?e.selectCoin():"")},[n("div",oa,[e.isTokenLoading?(o(),u(O,{key:0,class:"token-img-loading-skeleton",active:"",size:"small",paragraph:!1})):e.address?X((o(),r("img",na,null,512)),[[P,e.currentIcon]]):g("",!0),R(_,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),R(v,{loading:e.isTokenLoading,class:"token-loading-skeleton",active:"",paragraph:!1},{default:w(()=>[n("div",null,[n("p",null,h(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(o(),r("p",sa,h(e.coinLabels),1)):g("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(o(),r("svg",{key:0,class:B(["icon",e.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},la,2)):g("",!0)],2)]),e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<$0.01")&&e.isShowAmountPrice&&!e.swapLoading?(o(),r("div",ia,h(e.amountPirce!=="<$0.01"?`$${("formatNumber"in e?e.formatNumber:S(D))(e.amountPirce)}`:`${e.amountPirce}`),1)):(o(),r("div",da,[e.swapLoading?(o(),u(v,{key:0,class:"rate-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):g("",!0)]))])])}const wa=J(Te,[["render",ra],["__scopeId","data-v-344eb829"]]),ua=G({props:{type:{type:String,default:""},placement:{type:String,default:"top"},xlinkHref:{type:String,default:""},haveBg:{type:Boolean,default:!1}},setup(e){return{tooltipObj:{setting:"Swap Settings",expiryIn:"No extra cancellation fee will be charged for order expiry or cancellation. Gas will be consumed upon manual cancellation.",priceReference:"The following price is only an external reference from 3rd party data providers, which does not reflect actual data on Cetus."}}}});const ca={"aria-hidden":"true",class:"icon"},pa=["xlink:href"];function ma(e,t,H,W,M,V){const T=Ce;return o(),u(T,{placement:e.placement,"overlay-class-name":"new-tooltip-border-radius-color"},{title:w(()=>[j(h(e.tooltipObj[e.type]),1)]),default:w(()=>[n("div",{class:B(["icon-box",e.haveBg?"icon-bg":""])},[(o(),r("svg",ca,[n("use",{"xlink:href":e.xlinkHref},null,8,pa)]))],2)]),_:1},8,["placement"])}const Ia=J(ua,[["render",ma],["__scopeId","data-v-328ba2d2"]]);export{Ia as I,wa as N};
