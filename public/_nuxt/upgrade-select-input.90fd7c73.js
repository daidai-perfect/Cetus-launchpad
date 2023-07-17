import{_ as $}from"./coin-select.7d24da04.js";import{u as b}from"./sha256.3f9dd0c2.js";import{u as D,e as B}from"./pool.8ac244d9.js";import{a as j,l as z,m as h,r as _,e as N,q as V,o as t,f as i,h as s,t as C,x as u,v as I,L as y,z as O,c as q,p as E,k as F}from"./entry.a00a8559.js";import{i as w}from"./import-icon.de3e6c66.js";const L=j({setup(){const{t:e,locale:n}=z(),S=b(),f=h(()=>S),g=D(),k=h(()=>g),p=o=>{var c;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((c=k.value.tokensObj[o==null?void 0:o.address])==null?void 0:c.logo_url)||(f.value.theme==="default"?w("/image/coins/unknown.png"):w("/image/coins/sui-unknown.png"))},r=_(!1),a=_(null),l=_(null);return{pools:k,getCoinIcon:p,isOpenTokenSelect:r,toDelectToken:o=>{r.value=!1,o=="first"&&(a.value=l.value),l.value=null},toSelectToken:o=>{a.value?l.value=o:a.value=o,r.value=!1},firstToken:a,lastToken:l,t:e,addCommom:B}}});const d=e=>(E("data-v-114177d9"),e=e(),F(),e),M={class:"token-select-input-box"},P={key:0,class:"item"},R={alt:""},U={key:0,class:"pool-warning"},A=d(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),G=[A],H={key:1,class:"item"},J={alt:""},K={key:0,class:"pool-warning"},Q=d(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),W=[Q],X=d(()=>s("div",{class:"text"},"Filter by token",-1)),Y=d(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Z=[Y];function x(e,n,S,f,g,k){var a,l,m,v,o,c;const p=$,r=V("image");return t(),i("div",M,[s("div",{class:O([e.firstToken&&e.lastToken?"noClick":"","search-input"]),onClick:n[2]||(n[2]=T=>e.firstToken&&e.lastToken?"":e.isOpenTokenSelect=!e.isOpenTokenSelect)},[s("div",null,[e.firstToken?(t(),i("div",P,[C(s("img",R,null,512),[[r,e.getCoinIcon(e.firstToken)]]),(l=(a=e.pools)==null?void 0:a.tokensObj[e.firstToken.address])!=null&&l.isSelfBuilt?(t(),i("div",U)):u("",!0),s("span",null,I((m=e.firstToken)==null?void 0:m.symbol),1),(t(),i("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:n[0]||(n[0]=y(T=>e.toDelectToken("first"),["stop"]))},G))])):u("",!0),e.lastToken?(t(),i("div",H,[C(s("img",J,null,512),[[r,e.getCoinIcon(e.lastToken)]]),(o=(v=e.pools)==null?void 0:v.tokensObj[e.lastToken.address])!=null&&o.isSelfBuilt?(t(),i("div",K)):u("",!0),s("span",null,I((c=e.lastToken)==null?void 0:c.symbol),1),(t(),i("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:n[1]||(n[1]=y(T=>e.toDelectToken("last"),["stop"]))},W))])):u("",!0),X]),(t(),i("svg",{class:O(["icon select-icon",e.firstToken&&e.lastToken?"noClick":""]),"aria-hidden":"true"},Z,2))],2),e.isOpenTokenSelect?(t(),q(p,{key:0,"existing-coins":"","last-select-coin":e.firstToken&&e.firstToken.address||"",onOnSelect:e.toSelectToken,onOnClose:n[3]||(n[3]=T=>e.isOpenTokenSelect=!1)},null,8,["last-select-coin","onOnSelect"])):u("",!0)])}const le=N(L,[["render",x],["__scopeId","data-v-114177d9"]]);export{le as _};
