import{_ as V}from"./token-warning.9f46df69.js";import{D as B,u as F,j as H,e as g,E as D,c as M}from"./pool.771f7a64.js";import{a as U,l as J,m as l,a4 as G,a9 as K,D as Q,E as X,e as Y,q as Z,o as a,f as d,h as i,c,v as r,z as L,t as x,x as p,i as T,w,u as f,j as I,I as ee,J as oe,aa as ne,S as ae,B as te,p as se,k as le}from"./entry.bcbaa849.js";/* empty css              *//* empty css              *//* empty css              */import{i as ie}from"./import-icon.de3e6c66.js";import{u as de,a as re}from"./sha256.bb272993.js";const ue=U({components:{TokenWarning:V},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""},amountLeabl:{type:String,default:""}},setup(e,t){const{t:N,locale:P}=J(),O=de(),k=l(()=>O),h=l(()=>new B(Number(e.balance)).div(2)),y=G(K,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function S(){this.$emit("onSelect")}const C=n=>{const s=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(u==null?void 0:u.value)&&(u==null?void 0:u.value)}})?).*$`);n.target.value=n.target.value.replace(s,"$1")},$=re(),b=l(()=>$),j=F(),o=l(()=>j),A=l(()=>o.value.tokensWarningObj);let v={};Q(()=>o.value.RATES,n=>{n&&(console.log(n,"price====>"),v=n)},{immediate:!0});const E=l(()=>{console.log(e.inputValue,"==>props.inputValue"),console.log(e.coinName,"===>props.coinName");const n=v&&v[e.address]&&v[e.address].price||0,s=new B(e.inputValue).mul(n).toNumber();return n<=0?0:s>0&&s<.01?"<0.01":H(s,2)}),W=l(()=>{var n,s,m;return console.log((n=o.value.tokensObj[e.address])==null?void 0:n.labels,"===> pool.value.tokensObj[props.address]?.labels"),o.value.tokensObj&&e.address&&o.value.tokensObj[e.address]&&((s=o.value.tokensObj[e.address])==null?void 0:s.labels)&&((m=o.value.tokensObj[e.address])==null?void 0:m.labels[0])}),u=l(()=>{var n;return o.value.tokensObj&&e.address&&o.value.tokensObj[e.address]&&((n=o.value.tokensObj[e.address])==null?void 0:n.decimals)}),z=l(()=>{var n,s,m,_;return e.coinIcon||((s=(n=o==null?void 0:o.value)==null?void 0:n.tokensObj[e.address])==null?void 0:s.logo_url)||((_=(m=o==null?void 0:o.value)==null?void 0:m.tokensObj[e.address])==null?void 0:_.logoURI)||""}),R=l(()=>o.value.tokensObj),q=l(()=>k.value.theme);return{route:X(),theme:q,currentIcon:z,tokensObj:R,pool:o,halfBalance:h,coinLabels:W,t:N,addCommom:g,store:k,wallet:b,indicator:y,inputChange:C,importIcon:ie,selectCoin:S,amountPirce:E,coinDecimals:u,formatNumber:D,tokensWarningObj:A,checkNullObj:M}}});const me=e=>(se("data-v-cf018572"),e=e(),le(),e),ce={class:"card"},pe={class:"top"},be={key:1,class:"input-div"},ve={key:0},fe={class:"loading-token"},ge={key:1},ke={key:0},he=me(()=>i("use",{"xlink:href":"#icon-icon_on"},null,-1)),ye=[he],Se={class:"bottom"},Ce={key:0,class:"amount-price"},$e={key:1},je={class:"top"},we={class:"right"},Ie={class:"balance"};function Ne(e,t,N,P,O,k){const h=ee,y=oe,S=ne,C=V,$=ae,b=te,j=Z("image");return a(),d("div",ce,[i("div",pe,[e.inputDisabled?(a(),d("div",be,[e.inputValue?(a(),d("span",ve,r(e.inputValue),1)):(a(),c(y,{key:1,indicator:e.indicator},null,8,["indicator"]))])):(a(),c(h,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.inputValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:t[0]||(t[0]=o=>e.$emit("onInput",o.target.value)),onFocus:t[1]||(t[1]=o=>e.$emit("onFocus"))},null,8,["value","disabled","onChange"])),i("div",{class:L(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"?"left-opcity":""].join("")]),onClick:t[2]||(t[2]=o=>e.hasArrow&&!e.pool.isTokenLoading?e.selectCoin():"")},[i("div",fe,[e.pool.isTokenLoading?(a(),c(S,{key:0,active:e.active,size:"small",paragraph:!1},null,8,["active"])):e.address?x((a(),d("img",ge,null,512)),[[j,e.currentIcon]]):p("",!0),T(C,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),T($,{loading:e.pool.isTokenLoading,class:"loading-token-skeleton",active:"",paragraph:!1},{default:w(()=>[i("div",null,[i("p",null,r(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(a(),d("p",ke,r(e.coinLabels),1)):p("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(a(),d("svg",{key:0,class:L(["icon",e.pool.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},ye,2)):p("",!0)],2)]),i("div",Se,[e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<0.01")?(a(),d("div",Ce," $"+r(e.amountPirce!=="<0.01"?("formatNumber"in e?e.formatNumber:f(D))(e.amountPirce):e.amountPirce),1)):(a(),d("div",$e)),i("div",je,[i("div",we,[I(r(e.amountLeabl?e.amountLeabl:e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),i("span",Ie,r(e.wallet.connected?("addCommom"in e?e.addCommom:f(g))(e.balance,e.coinDecimals):"0"),1),e.havemax&&e.wallet.connected?(a(),c(b,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:f(g))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=o=>e.$emit("onHalf"))},{default:w(()=>[I(r("Half"))]),_:1},8,["disabled"])):p("",!0),e.havemax&&e.wallet.connected?(a(),c(b,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:f(g))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=o=>e.$emit("onMax"))},{default:w(()=>[I(r(e.$t("button.max")),1)]),_:1},8,["disabled"])):p("",!0)])])])])}const Ee=Y(ue,[["render",Ne],["__scopeId","data-v-cf018572"]]);export{Ee as _};
