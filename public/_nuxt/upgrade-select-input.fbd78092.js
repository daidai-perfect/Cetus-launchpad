import{C as b}from"./coin-select.8582e2b7.js";import{b as $,u as D}from"./pool.3fc49680.js";import{g as B}from"./index.33b6d0c7.js";import{a as j,l as z,m as h,r as S,e as N,q as V,o as t,f as i,h as s,t as C,x as u,v as I,O,z as y,c as q,p as E,k as F}from"./entry.7dcfbd3d.js";import{i as w}from"./import-icon.de3e6c66.js";const M=j({setup(){const{t:e,locale:n}=z(),_=$(),g=h(()=>_),f=D(),k=h(()=>f),p=o=>{var c;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((c=k.value.tokensObj[o==null?void 0:o.address])==null?void 0:c.logo_url)||(g.value.theme==="default"?w("/image/coins/unknown.png"):w("/image/coins/sui-unknown.png"))},r=S(!1),a=S(null),l=S(null);return{pools:k,getCoinIcon:p,isOpenTokenSelect:r,toDelectToken:o=>{r.value=!1,o=="first"&&(a.value=l.value),l.value=null},toSelectToken:o=>{a.value?l.value=o:a.value=o,r.value=!1},firstToken:a,lastToken:l,t:e,addCommom:B}}});const d=e=>(E("data-v-a31646a8"),e=e(),F(),e),P={class:"token-select-input-box"},R={key:0,class:"item"},U={alt:""},A={key:0,class:"pool-warning"},G=d(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),H=[G],J={key:1,class:"item"},K={alt:""},L={key:0,class:"pool-warning"},Q=d(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),W=[Q],X=d(()=>s("div",{class:"text"},"Filter by token",-1)),Y=d(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Z=[Y];function x(e,n,_,g,f,k){var a,l,m,v,o,c;const p=b,r=V("image");return t(),i("div",P,[s("div",{class:y([e.firstToken&&e.lastToken?"noClick":"","search-input"]),onClick:n[2]||(n[2]=T=>e.firstToken&&e.lastToken?"":e.isOpenTokenSelect=!e.isOpenTokenSelect)},[s("div",null,[e.firstToken?(t(),i("div",R,[C(s("img",U,null,512),[[r,e.getCoinIcon(e.firstToken)]]),(l=(a=e.pools)==null?void 0:a.tokensObj[e.firstToken.address])!=null&&l.isSelfBuilt?(t(),i("div",A)):u("",!0),s("span",null,I((m=e.firstToken)==null?void 0:m.symbol),1),(t(),i("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:n[0]||(n[0]=O(T=>e.toDelectToken("first"),["stop"]))},H))])):u("",!0),e.lastToken?(t(),i("div",J,[C(s("img",K,null,512),[[r,e.getCoinIcon(e.lastToken)]]),(o=(v=e.pools)==null?void 0:v.tokensObj[e.lastToken.address])!=null&&o.isSelfBuilt?(t(),i("div",L)):u("",!0),s("span",null,I((c=e.lastToken)==null?void 0:c.symbol),1),(t(),i("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:n[1]||(n[1]=O(T=>e.toDelectToken("last"),["stop"]))},W))])):u("",!0),X]),(t(),i("svg",{class:y(["icon select-icon",e.firstToken&&e.lastToken?"noClick":""]),"aria-hidden":"true"},Z,2))],2),e.isOpenTokenSelect?(t(),q(p,{key:0,"existing-coins":"","last-select-coin":e.firstToken&&e.firstToken.address||"","is-allow-ban":!0,onOnSelect:e.toSelectToken,onOnClose:n[3]||(n[3]=T=>e.isOpenTokenSelect=!1)},null,8,["last-select-coin","onOnSelect"])):u("",!0)])}const le=N(M,[["render",x],["__scopeId","data-v-a31646a8"]]);export{le as _};
