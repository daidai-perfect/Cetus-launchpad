import{i as g}from"./import-icon.de3e6c66.js";import{e as y,a as S,a1 as w,r as I,l as p,Q as $,s as j,o as a,c as B,w as f,h as e,f as c,t as b,v as d,x as m,i as O,j as T,B as N,p as M,k as V}from"./entry.ca8aaecf.js";import{u as D}from"./sha256.840517cc.js";import{u as P,c as q}from"./pool.a41eef8c.js";import{_ as A}from"./icon-selected_3x.09e9a6f0.js";const E=S({components:{Modal:w},props:{fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})}},setup(o,t){const u=D(),v=I(!1),k=p(()=>u),C=s=>{var h;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((h=n.value.tokensObj[s==null?void 0:s.address])==null?void 0:h.logo_url)||(k.value.theme==="default"?g("/image/coins/unknown.png"):g("/image/coins/sui-unknown.png"))},_=P(),n=p(()=>_),i=s=>n.value.tokensObj&&n.value.tokensObj[s.address]&&n.value.tokensObj[s.address].isSelfBuilt;return{store:u,isSelect:v,getCoinIcon:C,getTokenSource:i,clickContinue:()=>{i(o.fromCoin)&&localStorage.setItem(`${o.fromCoin.address}`,!0),i(o.toCoin)&&localStorage.setItem(`${o.toCoin.address}`,!0),t.emit("clickContinue",o.fromCoin&&!q(o.fromCoin)?o.fromCoin:o.toCoin)}}}}),l=o=>(M("data-v-e573fbb8"),o=o(),V(),o),F={class:"token-waring-conetnt"},L={class:"coin"},Q={key:0,class:"coin-a"},R={class:"logo"},U={alt:""},W=l(()=>e("div",{class:"warning-img"},null,-1)),z={class:"symbol"},G={class:"coin-info"},H={class:"address"},J=l(()=>e("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),K=[J],X={key:1,class:"coin-b"},Y={class:"logo"},Z={alt:""},x=l(()=>e("div",{class:"warning-img"},null,-1)),oo={class:"symbol"},eo={class:"coin-info"},so={class:"address"},to=l(()=>e("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),no=[to],io=l(()=>e("div",{class:"tips-text"}," The token is not on the Frequently Traded List. Please note that anyone can create a token on Sui blockchain with any name, including creating fake versions of existing tokens or tokens that claim to represent projects that do not have a token. Always conduct your own research before trading. ",-1)),ao={class:"read-text"},lo={key:0,src:A},co=l(()=>e("span",null," I acknowledge the risk ",-1));function ro(o,t,u,v,k,C){const _=N,n=$("Modal"),i=j("image");return a(),B(n,{width:"440px",visible:!0,footer:null,title:null,"mask-closable":!0,onCancel:t[3]||(t[3]=r=>o.$emit("close"))},{default:f(()=>[e("div",F,[e("div",L,[o.getTokenSource(o.fromCoin)?(a(),c("div",Q,[e("div",R,[b(e("img",U,null,512),[[i,o.getCoinIcon(o.fromCoin)]]),W]),e("div",z,d(o.fromCoin.symbol),1),e("div",G,[e("div",H,d(o.fromCoin.address),1),(a(),c("svg",{class:"icon","aria-hidden":"true",onClick:t[0]||(t[0]=r=>o.store.copy(o.fromCoin&&o.fromCoin.address))},K))])])):m("",!0),o.getTokenSource(o.toCoin)?(a(),c("div",X,[e("div",Y,[b(e("img",Z,null,512),[[i,o.getCoinIcon(o.toCoin)]]),x]),e("div",oo,d(o.toCoin.symbol),1),e("div",eo,[e("div",so,d(o.toCoin.address),1),(a(),c("svg",{class:"icon","aria-hidden":"true",onClick:t[1]||(t[1]=r=>o.store.copy(o.toCoin&&o.toCoin.address))},no))])])):m("",!0)]),io,e("div",ao,[e("div",{class:"radio",onClick:t[2]||(t[2]=r=>o.isSelect=!o.isSelect)},[o.isSelect?(a(),c("img",lo)):m("",!0)]),co]),O(_,{disabled:!o.isSelect,class:"big-btn continue",onClick:o.clickContinue},{default:f(()=>[T("Continue")]),_:1},8,["disabled","onClick"])])]),_:1})}const Co=y(E,[["render",ro],["__scopeId","data-v-e573fbb8"]]);export{Co as _};
