import{u as _,c as s}from"./index.e235d647.js";import{u as h}from"./index.a960bb3c.js";import{a as w,m as i,r as n,A as m,e as v,o as k,f as N,h as l,x as S,u as g,G as C,p as $,k as I}from"./entry.8c071894.js";const x=w({setup(){const e=_(),c=i(()=>e),r=n(""),t=n(!1),u=h(),o=i(()=>u);m(()=>c.value.walletNetwork,a=>{r.value=a,a&&o.value.chainName&&a.toLowerCase().indexOf(s[o.value.chainName].network)<0?t.value=!0:t.value=!1},{immediate:!0});const f=i(()=>c.value.aptosConnected),d=n(""),p=n("");return m(()=>o.value.chainName,a=>{a&&(d.value=s[o.value.chainName].network,p.value=o.value.chainName)},{immediate:!0}),{walletNetwork:r,configNetwork:d,isShowTips:t,chainName:p,aptosConnected:f,config:s}}});const y=e=>($("data-v-cd82404a"),e=e(),I(),e),T={key:0,class:"network-tips"},A=y(()=>l("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1));function B(e,c,r,t,u,o){return e.isShowTips&&e.chainName==="Aptos"&&e.aptosConnected?(k(),N("div",T,[A,l("span",null,S(e.$t("newAdd.walletNotConnect",{network:`${("config"in e?e.config:g(s))[e.chainName].networkTip}`})),1)])):C("",!0)}const L=v(x,[["render",B],["__scopeId","data-v-cd82404a"]]);export{L as _};
