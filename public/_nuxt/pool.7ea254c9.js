import{_ as G}from"./nuxt-link.b49faf86.js";import{u as H,c as V}from"./sha256.3f9dd0c2.js";import{a as J,l as Q,b as W,r as t,m as g,y as Z,D as z,e as x,K as q,o as R,f as S,h as l,i,w as u,u as w,v as k,x as D,z as ee,X as oe,j as B,Y as se,p as te,k as ne}from"./entry.a00a8559.js";/* empty css              *//* empty css              */import{u as ae,e as ie}from"./pool.8ac244d9.js";const le=J({setup(e,n){const{t:I,locale:y}=Q(),o=W(),N=t(!1),d=t(!1),f=t(!1),$=t("TVL"),A=t(["APR","VOL"]),b=t([]),m=t(["pools"]),a=ae(),c=H(),P=t(!0),O=t(!1),j=t(!1),E=t(!1),L=t(""),C=g(()=>c),M=g(()=>c.theme),F=g(()=>a),U=g(()=>V[C.value.chainName]),X=g(()=>c.statsData);Z(()=>{var _,h,v,r;const s=(_=o==null?void 0:o.currentRoute)==null?void 0:_.value.name.split("-")[1];m.value=!s||s=="list"||s==""?["pools"]:[`${s}`];const p=(r=(v=(h=o==null?void 0:o.currentRoute)==null?void 0:h.value)==null?void 0:v.query)==null?void 0:r.language;p&&T(p),L.value=y.value,document.addEventListener("click",()=>{f.value=!1})}),z(()=>o,s=>{var p,_,h,v;if(s){const r=(p=o==null?void 0:o.currentRoute)==null?void 0:p.value.name.split("-")[1];m.value=!r||r=="list"||r==""?["pools"]:[`${r}`];const K=(v=(h=(_=o==null?void 0:o.currentRoute)==null?void 0:_.value)==null?void 0:h.query)==null?void 0:v.language;K&&T(K),L.value=y.value}},{deep:!0});const{setLang:Y}=c,T=s=>{Y(s),y.value=s};return z(()=>C.value.chainName,(s,p)=>{s&&c.getStatsData(s,C.value.filterCoinsObj)},{immediate:!0}),{isViewCard:E,isDisplayAll:O,isFarms:j,clickRefresh:()=>{P.value=!0,d.value=!0,c.setisRefresh(),setTimeout(()=>{d.value=!1},1e3)},store:C,config:U,t:I,router:o,loading:N,refresh:d,current:m,addCommom:ie,list:b,theme:M,statsData:X,pools:F,isOpenSort:f,selectValue:$,selectList:A,listLoading:P,languageValue:L}}});const re=e=>(te("data-v-96f78f53"),e=e(),ne(),e),ue={class:"upgrade-pools-container"},ce={class:"upgrade-pools-header"},pe={class:"header-left"},de={key:0},fe={key:0},me={class:"header-right"},_e=["href"],he=re(()=>l("svg",{"aria-hidden":"true",class:"refresh-icon"},[l("use",{"xlink:href":"#icon-icon-refresh2"})],-1)),ve=[he];function ge(e,n,I,y,o,N){const d=q("mail-outlined"),f=G,$=se,A=q("appstore-outlined"),b=oe,m=q("router-view");return R(),S("div",ue,[l("div",ce,[l("div",pe,[i(b,{selectedKeys:e.current,"onUpdate:selectedKeys":n[1]||(n[1]=a=>e.current=a),mode:"horizontal"},{default:u(()=>[i($,{key:"pools"},{default:u(()=>[i(f,{to:"/pool/list"},{icon:u(()=>[i(d)]),default:u(()=>[B(" "+k(e.$t("menu.pools"))+" ",1),e.store.poolAmount!=="--"?(R(),S("i",de,k(e.store.poolAmount),1)):D("",!0)]),_:1})]),_:1}),i($,{key:"position",onClick:n[0]||(n[0]=a=>e.current=["position"])},{default:u(()=>[i(f,{to:"/pool/position"},{icon:u(()=>[i(A)]),default:u(()=>[B(" "+k(e.$t("common.myPosition"))+" ",1),e.store.positionAmount!=="--"?(R(),S("i",fe,k(e.store.positionAmount),1)):D("",!0)]),_:1})]),_:1})]),_:1},8,["selectedKeys"])]),l("div",me,[e.store.theme=="default"?(R(),S("a",{key:0,class:"quickly-enter-link quickly-enter",href:`${("config"in e?e.config:w(V)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},k(e.$t("common.ammPools")),9,_e)):D("",!0),l("div",{class:"quickly-enter",onClick:n[2]||(n[2]=a=>e.router.push(`/deposit?action=create-pool&tokenb=${("config"in e?e.config:w(V)).currentChainTokenAddress}&from=pool`))}," Create Pool "),l("div",{class:"quickly-enter",onClick:n[3]||(n[3]=a=>e.router.push(`/deposit?actions=new-position&tokenb=${("config"in e?e.config:w(V)).currentChainTokenAddress}`))}," + Add Liquidity "),l("div",{class:ee(e.refresh?"refresh fresh-box":"fresh-box"),onClick:n[4]||(n[4]=(...a)=>e.clickRefresh&&e.clickRefresh(...a))},ve,2)])]),i(m)])}const Ae=x(le,[["render",ge],["__scopeId","data-v-96f78f53"]]);export{Ae as default};
