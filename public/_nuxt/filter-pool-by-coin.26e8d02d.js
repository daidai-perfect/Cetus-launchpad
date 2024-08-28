import{r as v,D as V,o as r,f as p,h as s,z as D,K as P,i as u,u as B,v as z,x as m,c as K,F as O}from"./entry.3b127265.js";import{_ as A}from"./coin-select.1d88e977.js";import{C as N}from"./coin-img.56f50996.js";import{T as $}from"./token-warning-new.e56e4678.js";import{u as E}from"./pool.3d2ab376.js";import{aK as L}from"./index.2382fd1d.js";const I=["disabled"],M=s("div",{class:"icon-box"},[s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_add"})])],-1),W=s("span",null,"Filter by token",-1),j=[M,W],q=s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1),G=s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1),H={__name:"filter-pool-by-coin",setup(J){const c=v(!1),e=v(),o=v(),T=t=>{e.value?o.value=t:e.value=t,h()},f=t=>{t=="first"?e.value=null:o.value=null,h()},_=E(),h=()=>{var l,a,n,i;const t=[];(l=e.value)!=null&&l.address&&t.push(L((a=e.value)==null?void 0:a.address,!1)),(n=o.value)!=null&&n.address&&t.push(L((i=o.value)==null?void 0:i.address,!1)),_.setFilterPoolCoinList(t)};return V(()=>[e.value,o.value],([t,l])=>{!t&&!l&&_.setFilterPoolCoinList([])},{immediate:!0}),(t,l)=>{var a,n,i,y,C,x,k,b,g,w;return r(),p(O,null,[s("div",{class:"filter-pool-by-token",disabled:((a=e.value)==null?void 0:a.symbol)&&((n=o.value)==null?void 0:n.symbol),onClick:l[2]||(l[2]=d=>{var S,F;return(S=e.value)!=null&&S.symbol&&((F=o.value)!=null&&F.symbol)?"":c.value=!0})},[s("div",{class:D(["placeholder",e.value&&o.value?"notAllowed":""])},j,2),(i=e.value)!=null&&i.symbol?(r(),p("div",{key:0,class:"first-coin item",onClick:l[0]||(l[0]=P(d=>f("first"),["stop"]))},[u(N,{size:"24px",url:(y=e.value)==null?void 0:y.logo_url},null,8,["url"]),u(B($),{token:e.value,"style-params":{width:"12px",height:"12px",bottom:"4px",left:"16px"}},null,8,["token"]),s("span",null,z((C=e.value)==null?void 0:C.symbol),1),q])):m("",!0),(x=o.value)!=null&&x.symbol?(r(),p("div",{key:1,class:"last-coin item",onClick:l[1]||(l[1]=P(d=>f("last"),["stop"]))},[u(N,{size:"24px",url:(k=o.value)==null?void 0:k.logo_url},null,8,["url"]),u(B($),{token:o.value,"style-params":{width:"12px",height:"12px",bottom:"4px",left:"16px"}},null,8,["token"]),s("span",null,z((b=o.value)==null?void 0:b.symbol),1),G])):m("",!0)],8,I),c.value?(r(),K(A,{key:0,"is-create-pool-to-coin":!1,"last-select-coin":((g=e.value)==null?void 0:g.address)||((w=o.value)==null?void 0:w.address),"is-allow-ban":!0,onOnClose:l[3]||(l[3]=d=>c.value=!1),onOnSelect:T},null,8,["last-select-coin"])):m("",!0)],64)}}},ee=H;export{ee as F};
