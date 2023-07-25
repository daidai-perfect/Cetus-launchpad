import{_ as x}from"./nuxt-link.5ef76dd7.js";import{u as ee,c as w,a as oe}from"./sha256.bb272993.js";import{a as te,l as se,b as ne,r as n,m as d,y as ae,D as B,e as re,K as P,o as p,f as m,h as u,i,w as f,F as le,s as ie,x as S,u as D,v as g,z as F,V as ue,j as M,W as ce,p as de,k as pe}from"./entry.bcbaa849.js";/* empty css              *//* empty css              */import{u as me,e as fe}from"./pool.771f7a64.js";const ge=te({setup(e,a){const{t:I,locale:b}=se(),t=ne(),N=n(!1),v=n(!1),h=n(!1),$=n("TVL"),V=n(["APR","VOL"]),L=n([]),_=n(["pools"]),s=me(),l=ee(),R=n(!0),O=n(!1),j=n(!1),E=n(!1),T=n(""),q=d(()=>s),W=d(()=>{const o=Array.from(new Set(q.value.poolConfigList.flatMap(r=>!r.category||r.category==""?"All":r.category)));return console.log(o,"newArr"),o.length<=1?[]:o}),U=o=>{q.value.setCurrentPoolTab(o)},A=d(()=>l),G=d(()=>l.theme),H=d(()=>w[A.value.chainName]),J=d(()=>l.statsData);ae(()=>{var k,y,C,c;const o=(k=t==null?void 0:t.currentRoute)==null?void 0:k.value.name.split("-")[1];_.value=!o||o=="list"||o==""?["pools"]:[`${o}`];const r=(c=(C=(y=t==null?void 0:t.currentRoute)==null?void 0:y.value)==null?void 0:C.query)==null?void 0:c.language;r&&K(r),T.value=b.value,document.addEventListener("click",()=>{h.value=!1})}),B(()=>t,o=>{var r,k,y,C;if(o){const c=(r=t==null?void 0:t.currentRoute)==null?void 0:r.value.name.split("-")[1];_.value=!c||c=="list"||c==""?["pools"]:[`${c}`];const z=(C=(y=(k=t==null?void 0:t.currentRoute)==null?void 0:k.value)==null?void 0:y.query)==null?void 0:C.language;z&&K(z),T.value=b.value}},{deep:!0});const{setLang:Q}=l,K=o=>{Q(o),b.value=o};B(()=>A.value.chainName,(o,r)=>{o&&l.getStatsData(o,A.value.filterCoinsObj)},{immediate:!0});const X=()=>{R.value=!0,v.value=!0,l.setisRefresh(),setTimeout(()=>{v.value=!1},1e3)},Y=oe(),Z=d(()=>Y);return{tabArr:W,changeTab:U,isViewCard:E,isDisplayAll:O,isFarms:j,clickRefresh:X,store:A,config:H,t:I,router:t,loading:N,refresh:v,current:_,addCommom:fe,list:L,theme:G,statsData:J,pools:q,isOpenSort:h,selectValue:$,selectList:V,listLoading:R,languageValue:T,wallet:Z}}});const ve=e=>(de("data-v-1c2bf754"),e=e(),pe(),e),he={class:"upgrade-pools-container"},_e={class:"upgrade-pools-header"},ke={class:"header-left"},ye={key:0},Ce={key:0},be={class:"header-right"},$e={key:0,class:"tag-list"},Ae=["onClick"],Se=["href"],we=ve(()=>u("svg",{"aria-hidden":"true",class:"refresh-icon"},[u("use",{"xlink:href":"#icon-icon-refresh2"})],-1)),Ve=[we];function Le(e,a,I,b,t,N){const v=P("mail-outlined"),h=x,$=ce,V=P("appstore-outlined"),L=ue,_=P("router-view");return p(),m("div",he,[u("div",_e,[u("div",ke,[i(L,{selectedKeys:e.current,"onUpdate:selectedKeys":a[1]||(a[1]=s=>e.current=s),mode:"horizontal"},{default:f(()=>[i($,{key:"pools"},{default:f(()=>[i(h,{to:"/pool/list"},{icon:f(()=>[i(v)]),default:f(()=>[M(" "+g(e.$t("menu.pools"))+" ",1),e.store.poolAmount!=="--"?(p(),m("i",ye,g(e.store.poolAmount),1)):S("",!0)]),_:1})]),_:1}),i($,{key:"position",onClick:a[0]||(a[0]=s=>e.current=["position"])},{default:f(()=>[i(h,{to:"/pool/position"},{icon:f(()=>[i(V)]),default:f(()=>[M(" "+g(e.$t("common.myPosition"))+" ",1),e.store.positionAmount!=="--"&&e.wallet.connected?(p(),m("i",Ce,g(e.store.positionAmount),1)):S("",!0)]),_:1})]),_:1})]),_:1},8,["selectedKeys"])]),u("div",be,[e.tabArr.length>1?(p(),m("div",$e,[(p(!0),m(le,null,ie(e.tabArr,(s,l)=>(p(),m("div",{key:l,class:F(["tag-item",s==e.pools.currentPoolTab?"tag-active":""]),onClick:R=>e.changeTab(s)},g(s),11,Ae))),128))])):S("",!0),e.store.theme=="default"?(p(),m("a",{key:1,class:"quickly-enter-link quickly-enter",href:`${("config"in e?e.config:D(w)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},g(e.$t("common.ammPools")),9,Se)):S("",!0),u("div",{class:"quickly-enter",onClick:a[2]||(a[2]=s=>e.router.push(`/deposit?action=create-pool&tokenb=${("config"in e?e.config:D(w)).currentChainTokenAddress}&from=pool`))}," Create Pool "),u("div",{class:"quickly-enter",onClick:a[3]||(a[3]=s=>e.router.push(`/deposit?actions=new-position&tokenb=${("config"in e?e.config:D(w)).currentChainTokenAddress}`))}," + Add Liquidity "),u("div",{class:F(e.refresh?"refresh fresh-box":"fresh-box"),onClick:a[4]||(a[4]=(...s)=>e.clickRefresh&&e.clickRefresh(...s))},Ve,2)])]),i(_)])}const Ne=re(ge,[["render",Le],["__scopeId","data-v-1c2bf754"]]);export{Ne as default};
