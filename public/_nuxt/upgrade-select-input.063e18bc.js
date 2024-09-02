import{_ as O}from"./coin-select.5623d22a.js";import{a as b,u as $}from"./pool.7ae7ea5c.js";import{b as D}from"./index.8618889b.js";import{a as B,l as j,m as g,r as T,e as z,q as N,o as l,f as a,h as s,z as V,t as C,x as u,v as I,K as w,c as q,p as A,k as E}from"./entry.cdbcbba2.js";import{i as y}from"./import-icon.de3e6c66.js";const F=B({setup(){const{t:e,locale:n}=j(),f=b(),h=g(()=>f),S=$(),p=g(()=>S),k=o=>{var c;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((c=p.value.tokensObj[o==null?void 0:o.address])==null?void 0:c.logo_url)||(h.value.theme==="default"?y("/image/coins/unknown.png"):y("/image/coins/sui-unknown.png"))},r=T(!1),i=T(null),t=T(null);return{pools:p,getCoinIcon:k,isOpenTokenSelect:r,toDelectToken:o=>{r.value=!1,o=="first"&&(i.value=t.value),t.value=null},toSelectToken:o=>{i.value?t.value=o:i.value=o,r.value=!1},firstToken:i,lastToken:t,t:e,addCommom:D}}});const d=e=>(A("data-v-26e49fc0"),e=e(),E(),e),K={class:"token-select-input-box"},M=d(()=>s("div",{class:"icon-box"},[s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_search"})])],-1)),P=d(()=>s("span",null,"Filter by token",-1)),R=[M,P],U={key:0,class:"item"},G={alt:""},H={key:0,class:"pool-warning"},J=d(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),L=[J],Q={key:1,class:"item"},W={alt:""},X={key:0,class:"pool-warning"},Y=d(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),Z=[Y];function x(e,n,f,h,S,p){var i,t,m,v,o,c;const k=O,r=N("image");return l(),a("div",K,[s("div",{class:"search-input",onClick:n[2]||(n[2]=_=>e.firstToken&&e.lastToken?"":e.isOpenTokenSelect=!e.isOpenTokenSelect)},[s("div",null,[s("div",{class:V(["placeholder",e.firstCoin&&e.lastCoin?"notAllowed":""])},R,2),e.firstToken?(l(),a("div",U,[C(s("img",G,null,512),[[r,e.getCoinIcon(e.firstToken)]]),(t=(i=e.pools)==null?void 0:i.tokensObj[e.firstToken.address])!=null&&t.isSelfBuilt?(l(),a("div",H)):u("",!0),s("span",null,I((m=e.firstToken)==null?void 0:m.symbol),1),(l(),a("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:n[0]||(n[0]=w(_=>e.toDelectToken("first"),["stop"]))},L))])):u("",!0),e.lastToken?(l(),a("div",Q,[C(s("img",W,null,512),[[r,e.getCoinIcon(e.lastToken)]]),(o=(v=e.pools)==null?void 0:v.tokensObj[e.lastToken.address])!=null&&o.isSelfBuilt?(l(),a("div",X)):u("",!0),s("span",null,I((c=e.lastToken)==null?void 0:c.symbol),1),(l(),a("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:n[1]||(n[1]=w(_=>e.toDelectToken("last"),["stop"]))},Z))])):u("",!0)])]),e.isOpenTokenSelect?(l(),q(k,{key:0,"existing-coins":"","last-select-coin":e.firstToken&&e.firstToken.address||"","is-allow-ban":!0,onOnSelect:e.toSelectToken,onOnClose:n[3]||(n[3]=_=>e.isOpenTokenSelect=!1)},null,8,["last-select-coin","onOnSelect"])):u("",!0)])}const le=z(F,[["render",x],["__scopeId","data-v-26e49fc0"]]);export{le as _};
