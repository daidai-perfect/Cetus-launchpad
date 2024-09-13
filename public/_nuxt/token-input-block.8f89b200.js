import{a as m,p as H,h as Z,z as q,b as x,e as ee}from"./common.b5864f99.js";import{a as M,m as c,e as O,o as d,f as _,i as D,w as G,u as w,B as K,j as W,z as ne,r as te,A as R,l as N,h as g,x as L,c as I,G as A,K as oe,p as ae,k as se,S as le}from"./entry.4704f58e.js";import"./index.e26dfffd.js";/* empty css              */import{u as F}from"./index.1b83cc3f.js";import{a as ue}from"./index.55827d77.js";import{D as h}from"./decimal.765d8738.js";import{T as re}from"./token-dropdown-select.5bc6484f.js";import{u as ie}from"./useDebounceFunction.fcb46106.js";const de=M({props:{tokenInfo:{type:Object,default:()=>null}},setup(e){const o=F(),a=c(()=>o),v=c(()=>{var l,r,u;return a.value.assets&&e.tokenInfo&&a.value.assets[(l=e.tokenInfo)==null?void 0:l.address]?H(a.value.assets[(r=e.tokenInfo)==null?void 0:r.address].balance,(u=e.tokenInfo)==null?void 0:u.decimals):0}),s=c(()=>Z(Number(v.value)).div(2));return{wallet:a,addCommom:m,halfBalance:s}}});const ce={class:"btn-half-box"};function fe(e,o,a,v,s,l){var u;const r=K;return d(),_("div",ce,[D(r,{disabled:!((u=e.tokenInfo)!=null&&u.address)||("addCommom"in e?e.addCommom:w(m))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:o[0]||(o[0]=k=>e.$emit("onHalf"))},{default:G(()=>[W("HALF")]),_:1},8,["disabled"])])}const me=O(de,[["render",fe],["__scopeId","data-v-36adf21a"]]),pe=M({props:{tokenInfo:{type:Object,default:()=>null}},setup(e){const o=F(),a=c(()=>o),v=c(()=>{var s,l,r;return a.value.assets&&e.tokenInfo&&a.value.assets[(s=e.tokenInfo)==null?void 0:s.address]?H(a.value.assets[(l=e.tokenInfo)==null?void 0:l.address].balance,(r=e.tokenInfo)==null?void 0:r.decimals):0});return{addCommom:m,wallet:a,balance:v}}});const ge={class:"btn-max-box"};function ve(e,o,a,v,s,l){var u;const r=K;return d(),_("div",ge,[D(r,{disabled:!((u=e.tokenInfo)!=null&&u.address)||("addCommom"in e?e.addCommom:w(m))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:o[0]||(o[0]=k=>e.$emit("onMax"))},{default:G(()=>[W("MAX")]),_:1},8,["disabled"])])}const ke=O(pe,[["render",ve],["__scopeId","data-v-1484d97f"]]);function U(e){const o=[];let a=e.indexOf(",");for(;a!==-1;)o.push(a),a=e.indexOf(",",a+1);return o}const he=M({components:{TokenDropdownSelect:re,BtnHalf:me,BtnMax:ke},props:{titleText:{type:String,default:""},inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},tokenInfo:{type:Object,default:null},haveMax:{type:Boolean,default:!0},haveHalf:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},importPage:{type:String,default:""},isShowAmountPrice:{type:Boolean,default:!0},assetsLoading:{type:Boolean,default:!1},inputLoading:{type:Boolean,default:!1}},setup(e,o){const{t:a,locale:v}=ne(),s=c(()=>{var n,t,f;return $.value.assets&&e.tokenInfo&&$.value.assets[(n=e.tokenInfo)==null?void 0:n.address]?H($.value.assets[(t=e.tokenInfo)==null?void 0:t.address].balance,(f=e.tokenInfo)==null?void 0:f.decimals):0}),l=te(""),r=()=>{var n;if(s.value){const t=Number(s.value)>0?((n=e.tokenInfo)==null?void 0:n.symbol)=="SUI"?new h(Number(s.value)).sub(new h(.05)).lt(new h(0))?"0":new h(Number(s.value)).sub(new h(.05)).toString():String(s.value):"";l.value=t,k(t)}},u=()=>{var n;if(s.value){const t=Number(s.value)>0?x(new h(Number(s.value)).div(2).toString(),(n=e.tokenInfo)==null?void 0:n.decimals).toString():"";l.value=t,k(t)}},k=ie(n=>{o.emit("onInput",n),o.emit("onInputLoading",!1)},500),B=n=>{const t=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(i==null?void 0:i.value)&&(i==null?void 0:i.value)}})?).*$`),f=n.target.value.replace(/,/g,"").replace(t,"$1");f>0&&o.emit("onInputLoading",!0),k(f)},C=n=>{var E;const t=n.target.selectionStart,f=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(i==null?void 0:i.value)&&(i==null?void 0:i.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",n.target.value);let p=n.target.value.replace(/,/g,"").replace(f,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",p),console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.inputType:",n.inputType);let y=p.includes(".")&&String(m(p))==="0"?p:String(m(p));const Y=U(n.target.value),V=U(y),z=V.length-Y.length;let b=t+z;if((E=n==null?void 0:n.inputType)!=null&&E.includes("delete")&&z>0&&t===V[V.length-1]){const P=n.target.value.slice(0,t-1)+n.target.value.slice(t);y=String(m(P.replace(/,/g,""))),b=b-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",y),l.value=y||"",setTimeout(()=>{try{n.target.setSelectionRange(b<0?0:b,b<0?0:b)}catch(P){console.log("🚀 ~ file: assets-card.vue:307 ~ setTimeout ~ error:",P)}},0)};R(()=>e.inputValue,n=>{const t=String(m(n));t!==l.value&&(l.value=t)},{immediate:!0});const T=F(),$=c(()=>T),X=ue(),j=c(()=>X);let S={};R(()=>j.value.RATES,n=>{n&&(S=n)},{immediate:!0});const J=c(()=>{var f,p;const n=S&&S[(f=e.tokenInfo)==null?void 0:f.address]&&S[(p=e.tokenInfo)==null?void 0:p.address].price||0,t=new h(e.inputValue||0).mul(n).toNumber();return n<=0?0:t>0&&t<.01?"<$0.01":ee(t,2)}),i=c(()=>{var n;return(n=e.tokenInfo)==null?void 0:n.decimals}),Q=c(()=>j.value.isTokenLoading);return{balance:s,isTokenLoading:Q,t:a,addCommom:m,wallet:$,inputChange:B,amountPirce:J,coinDecimals:i,formatNumber:q,formattedValue:l,handleInput:C,maxBtnSelect:r,halfBtnSelect:u}}});const be=e=>(ae("data-v-665645cf"),e=e(),se(),e),Ie={class:"token-input-block card"},_e={class:"title"},$e={class:"card-top"},Se={class:"card-bottom"},ye={class:"left"},we={key:0,class:"amount-price"},Be={key:1},Ce={class:"right"},Te={class:"balance"},Ve=be(()=>g("svg",{class:"icon icon-down","aria-hidden":"true"},[g("use",{"xlink:href":"#icon-icon_wallet1"})],-1)),Pe={key:1};function Ne(e,o,a,v,s,l){const r=oe,u=le,k=N("TokenDropdownSelect"),B=N("BtnHalf"),C=N("BtnMax");return d(),_("div",Ie,[g("div",_e,L(e.titleText),1),g("div",$e,[e.inputLoading?(d(),I(u,{key:1,class:"input-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):(d(),I(r,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.formattedValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:e.handleInput,onFocus:o[0]||(o[0]=T=>e.$emit("onFocus"))},null,8,["value","disabled","onChange","onInput"])),D(k,{"has-arrow":e.hasArrow,"token-info":e.tokenInfo,"is-loading":e.isTokenLoading,onOnSelect:o[1]||(o[1]=T=>e.$emit("onSelect"))},null,8,["has-arrow","token-info","is-loading"])]),g("div",Se,[g("div",ye,[e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<$0.01")&&e.isShowAmountPrice&&!e.inputLoading?(d(),_("div",we,L(e.amountPirce!=="<$0.01"?`$${("formatNumber"in e?e.formatNumber:w(q))(e.amountPirce)}`:`${e.amountPirce}`),1)):(d(),_("div",Be,[e.inputLoading?(d(),I(u,{key:0,class:"rate-loading-skeleton",loading:!0,size:"large",active:"",paragraph:!1})):A("",!0)]))]),g("div",Ce,[g("span",Te,[Ve,e.assetsLoading?(d(),I(u,{key:0,class:"token-loading-skeleton",loading:!0,active:"",paragraph:!1})):(d(),_("span",Pe,L(e.wallet.connected?("addCommom"in e?e.addCommom:w(m))(e.balance,e.coinDecimals):"0"),1))]),e.haveHalf&&e.wallet.connected?(d(),I(B,{key:0,"token-info":e.tokenInfo,onOnHalf:e.halfBtnSelect},null,8,["token-info","onOnHalf"])):A("",!0),e.haveMax&&e.wallet.connected?(d(),I(C,{key:1,"token-info":e.tokenInfo,onOnMax:e.maxBtnSelect},null,8,["token-info","onOnMax"])):A("",!0)])])])}const Ee=O(he,[["render",Ne],["__scopeId","data-v-665645cf"]]);export{Ee as T};
