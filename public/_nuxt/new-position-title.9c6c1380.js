import{_ as C}from"./back.802d11fe.js";import{_ as R}from"./swap-setting.9c743df7.js";import{u as h}from"./sha256.56fdff7c.js";import{a as S,r as n,l as _,e as g,o as d,f as m,h as i,v as A,c as B,x as T,p as w,k,K as O,q as P,b as V,i as v,A as j}from"./entry.4715eb42.js";import{u as q,c as z}from"./pool.42a6ec0f.js";const D=S({setup(){const e=h(),o=n(!1),c=_(()=>e);return{slippage:_(()=>c.value.slippage),isShowSwapSetting:o}}});const E=e=>(w("data-v-82585f8b"),e=e(),k(),e),K=E(()=>i("svg",{class:"icon","aria-hidden":"true"},[i("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1));function M(e,o,c,a,t,r){const l=R;return d(),m("div",{class:"slippage-icon",onClick:o[1]||(o[1]=s=>e.isShowSwapSetting=!0)},[K,i("span",null,A(e.slippage)+"%",1),e.isShowSwapSetting?(d(),B(l,{key:0,onOnClose:o[0]||(o[0]=s=>e.isShowSwapSetting=!1)})):T("",!0)])}const U=g(D,[["render",M],["__scopeId","data-v-82585f8b"]]),F=S({props:{poolInfo:{type:Object,default:()=>({})}},setup(e,o){const c=n(!1),a=n(null),t=n(0),r=n(20),l=q(),s=h(),p=n(!1);O(()=>{clearInterval(a.value)});const I=()=>{a.value=setInterval(()=>{var u;p.value||t.value<r.value&&(t.value+=1,t.value===r.value&&((u=e==null?void 0:e.poolInfo)!=null&&u.poolAddress&&l.updateCurrentPools(e.poolInfo.poolAddress,s.chainName),t.value=0))},1e3)},$=_(()=>s.slippage),b=()=>{o.emit("clearAll")},f=n(!1),N=()=>{t.value=0,f.value=!0,o.emit("clickRefresh"),setTimeout(()=>{f.value=!1},1e3)};P(()=>e.poolInfo,u=>{u&&!a.value&&I()},{immediate:!0});const x=V(),y=_(()=>s.chainName);return{clickRefresh:N,isShowSwapSetting:c,countdown:t,autoRefreshTime:r,slippage:$,clearAll:b,checkNullObj:z,router:x,loading:p,chainName:y,refresh:f}}});const G=e=>(w("data-v-ca768f9b"),e=e(),k(),e),H={class:"new-position-title"},J={class:"left"},L={class:"right"},Q=G(()=>i("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),W=[Q];function X(e,o,c,a,t,r){const l=C,s=U;return d(),m("div",H,[i("div",J,[v(l)]),i("div",L,[v(s),(d(),m("svg",{"aria-hidden":"true",class:j(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:o[0]||(o[0]=(...p)=>e.clickRefresh&&e.clickRefresh(...p))},W,2))])])}const se=g(F,[["render",X],["__scopeId","data-v-ca768f9b"]]);export{se as _};
