import{_ as X}from"./back.9bc5b3a9.js";import{u as E,_ as G,a as F,b as J}from"./unclock-modal.8480c515.js";import{l as q,r as h,m as f,e as P,q as K,o as n,f as l,h as t,F as C,s as U,t as R,v as b,x as g,j as c,i as r,p as B,k as I,y as Q,z as L,w as $,c as T,B as N,A as V,a as W,b as Y}from"./entry.7dcfbd3d.js";import{u as A}from"./pool.3fc49680.js";import{_ as x}from"./xWHALE-icon.2df34cd4.js";import{_ as Z,a as tt}from"./ubxt.22e1d805.js";import{_ as O}from"./position-Inactive.df1ec633.js";import{_ as j}from"./icon-arrow_2x.4ffddb8e.js";import{_ as D}from"./WHALE-icon.28f954ba.js";import"./index.33b6d0c7.js";import"./decimal.0bdeb344.js";const ot={props:{rewardsList:{type:Object,default:()=>({})},tabelList:{type:Object,default:()=>({})},titleText:{type:String,default:""}},setup(o){const{t:_}=q(),a=h(!1),s=A(),u=f(()=>s),m=f(()=>u.value.poolConfigObj),i=E(),p=f(()=>i),e=f(()=>p.value.loading);return{t:_,select:a,poolInfoObj:m,loadings:e}}};const v=o=>(B("data-v-32ab40a1"),o=o(),I(),o),st={class:"lockup-table"},et={class:"table"},at=v(()=>t("thead",null,[t("tr",null,[t("th"),t("th",null,[t("div",null,"Total locked")]),t("th",null,"Multiplier 1x up to"),t("th",null,[t("div",null," APR up to ")]),t("th",null,"Rewards"),t("th",null,[t("div",null," My locked ")]),t("th",null,"Earned")])],-1)),nt={class:"td-pools"},lt={class:"img-list"},it={alt:""},ct={alt:""},dt={key:0,class:"percentage"},rt={class:"td-locked"},_t=v(()=>t("td",{class:"td-multiplier"},[t("div",null,[t("div",{class:"multiplier"},"4x")])],-1)),ut={class:"td-upto"},pt=v(()=>t("td",{class:"td-bonus"},[t("div",null,[t("img",{src:x,alt:""}),t("span",null,"xCETUS")])],-1)),vt={class:"td-mylocked"},ht=v(()=>t("td",{class:"td-earned-manage"},[t("div",null,[t("img",{src:x,alt:""}),t("span",null,"12,345.671")])],-1)),bt={class:"table-h5"},mt={class:"table-box"},kt={class:"top-table"},gt=v(()=>t("div",{class:"img-list"},[t("img",{src:Z,alt:""}),t("img",{src:tt,alt:""})],-1)),ft=v(()=>t("div",{class:"percentage"},"0.02%",-1)),yt={key:0,class:"content-table"},wt=v(()=>t("div",null,[t("span",null,"Total locked"),t("p",null,"$1.21M")],-1)),$t=v(()=>t("div",null,[t("span",null,"Multiplier 1x up to"),t("div",{class:"multiplier"},"2x")],-1)),xt=v(()=>t("span",null,"APR up to",-1)),St={class:"table-h5-box"},Lt=v(()=>t("div",null,[t("span",null,"Rewards"),t("div",{class:"table-h5-box"},[t("img",{src:x,alt:""}),t("p",null,"xCETUS")])],-1)),Ct=v(()=>t("div",null,[t("span",null,"My locked"),t("p",null,"$111.21")],-1)),Ut=v(()=>t("div",null,[t("span",null,"Earned(xCETUS)"),t("div",{class:"table-h5-box"},[t("img",{src:x,alt:""}),t("p",null,"12,345.67")])],-1));function Pt(o,_,a,s,u,m){const i=G,p=K("image");return n(),l("div",st,[t("table",et,[at,t("tbody",null,[(n(!0),l(C,null,U(a.tabelList,(e,d)=>{var w,S;return n(),l("tr",{key:d},[t("td",nt,[t("div",null,[t("div",lt,[R(t("img",it,null,512),[[p,(w=e==null?void 0:e.token_a)==null?void 0:w.logo_url]]),R(t("img",ct,null,512),[[p,(S=e==null?void 0:e.token_b)==null?void 0:S.logo_url]])]),t("p",null,b(e.name),1),s.poolInfoObj&&s.poolInfoObj[e.clmm_pool_id]&&s.poolInfoObj[e.clmm_pool_id].fee?(n(),l("div",dt,b(s.poolInfoObj&&s.poolInfoObj[e.clmm_pool_id]&&s.poolInfoObj[e.clmm_pool_id].fee*100)+"% ",1)):g("",!0)])]),t("td",rt," $"+b(e.locked),1),_t,t("td",ut,[t("div",null,[c(b(e.aprUpto)+"% ",1),r(i,{"rewards-list":a.rewardsList},null,8,["rewards-list"])])]),pt,t("td",vt," $"+b(e.myLocked),1),ht])}),128))])]),t("ul",bt,[(n(!0),l(C,null,U(a.tabelList,(e,d)=>(n(),l("li",{key:d},[t("div",mt,[t("div",kt,[gt,t("p",null,b(e.name),1),ft]),a.titleText=="manage"?(n(),l("div",yt,[wt,$t,t("div",null,[xt,t("div",St,[c(" 13.3% "),r(i,{"rewards-list":a.rewardsList},null,8,["rewards-list"])])]),Lt,Ct,Ut])):g("",!0)])]))),128))])])}const Bt=P(ot,[["render",Pt],["__scopeId","data-v-32ab40a1"]]),It={props:{rewardsList:{type:Object,default:()=>({})},tabelList:{type:Object,default:()=>({})},titleText:{type:String,default:""}},setup(o){const{t:_}=q(),a=h([]),s=(z,H)=>H.liquidity-z.liquidity,u=h(!1),m=()=>{u.value=!u.value};Q(()=>{a.value=o.tabelList,a.value.sort(s)});const i=A(),p=f(()=>i),e=f(()=>p.value.poolConfigObj),d=E(),w=f(()=>d),S=f(()=>w.value.loading);return{t:_,showUnclock:u,changeShowUnclock:m,poolInfoObj:e,loadings:S}}};const k=o=>(B("data-v-50db9560"),o=o(),I(),o),Tt={class:"lockup-table"},qt={class:"table"},Ot=k(()=>t("thead",null,[t("tr",null,[t("th",null,"NFT ID"),t("th",null,"Price range (SUI per USDC)"),t("th",null,"Liquidity"),t("th",null,"Fees"),t("th",null,"Rewards"),t("th")])],-1)),jt=["onClick"],Mt={class:"td-nft-id"},Rt=k(()=>t("div",{class:"nft-img"},[t("img",{src:O,alt:""})],-1)),Dt=k(()=>t("td",{class:"td-price-range"},[t("div",null,[c(" 22.292324 "),t("img",{class:"rotate-img",src:j,alt:""}),c(" 22.292324 ")])],-1)),Et=k(()=>t("td",null,"$100.12",-1)),Ft=k(()=>t("td",null,"$100.12",-1)),Nt={class:"table-h5"},Vt={class:"table-box"},At={class:"content-table"},zt={class:"h5-position-box"},Ht={class:"h5-nft"},Xt=k(()=>t("div",{class:"nft-img"},[t("img",{src:O,alt:""})],-1)),Gt=k(()=>t("div",{class:"h5-price-range"},[t("span",null,"Price range (SUI per USDC)"),t("div",{class:"price-range"},[c(" 22.292324 "),t("img",{class:"rotate-img",src:j,alt:""}),c(" 22.292324 ")])],-1)),Jt=k(()=>t("span",null,"Liquidity",-1)),Kt=k(()=>t("div",null,[t("span",null,"Fees"),t("p",null,"$100.12")],-1)),Qt=k(()=>t("div",null,[t("span",null,"Rewards"),t("p",null,"$100.12")],-1)),Wt={class:"bot-table"};function Yt(o,_,a,s,u,m){const i=N,p=F;return n(),l("div",Tt,[t("table",qt,[Ot,t("tbody",null,[(n(!0),l(C,null,U(a.tabelList,(e,d)=>(n(),l("tr",{key:d,class:L(a.titleText=="manage"?"manage-tr":""),onClick:w=>o.$emit("toBoosterManage",e.pool_id,e.clmm_pool_id)},[t("td",Mt,[t("div",null,[t("p",{onClick:_[0]||(_[0]=w=>o.$emit("toLockupLiquidity"))},b(e.name),1),Rt])]),Dt,t("td",null,"$"+b(e.liquidity),1),Et,Ft,t("td",null,[r(i,{onClick:s.changeShowUnclock},{default:$(()=>[c(" Lock ")]),_:1},8,["onClick"])])],10,jt))),128))]),s.showUnclock?(n(),T(p,{key:0,"lock-show":!0,onOnClose:s.changeShowUnclock},null,8,["onOnClose"])):g("",!0)]),t("ul",Nt,[(n(!0),l(C,null,U(a.tabelList,(e,d)=>(n(),l("li",{key:d},[t("div",Vt,[t("div",At,[t("div",zt,[t("div",Ht,[t("p",null,b(e.name),1),Xt])]),Gt,t("div",null,[Jt,t("p",null,b(e.liquidity),1)]),Kt,Qt]),t("div",Wt,[r(i,{onClick:s.changeShowUnclock},{default:$(()=>[c(" Lock ")]),_:1},8,["onClick"])])])]))),128))])])}const Zt=P(It,[["render",Yt],["__scopeId","data-v-50db9560"]]),to={props:{unlockBoolean:{type:Boolean,default:!1},activeState:{type:Boolean,default:!1},whetherToRegister:{type:Boolean,default:!1}},setup(o){const{t:_}=q(),a=h(!1),s=()=>{a.value=!a.value},u=h(!1);return{t:_,showPosition:a,showUnclock:u,changeShowUnclock:()=>{u.value=!u.value},changeShowPosition:s}}},oo=""+new URL("Boosted-rewards-bonus.b98b5d7c.gif",import.meta.url).href;const y=o=>(B("data-v-19b12a27"),o=o(),I(),o),so={class:"position-pond"},eo={class:"position-box"},ao=V('<div class="box-top" data-v-19b12a27><div class="box" data-v-19b12a27><span data-v-19b12a27>Locked period</span><div class="box-locked-hover" data-v-19b12a27> 15 days <div class="icon-box-locked" data-v-19b12a27><svg class="icon" aria-hidden="true" data-v-19b12a27><use xlink:href="#icon-icon-information" data-v-19b12a27></use></svg><div class="locked-text" data-v-19b12a27> 2023.04.30 12:34:56 - 2023.05.16 12:34:56 (UTC) </div></div></div></div><div class="box" data-v-19b12a27><span data-v-19b12a27>Locked ends in</span><p data-v-19b12a27>6D : 13H : 59M : 58S</p></div><div class="box" data-v-19b12a27><span data-v-19b12a27>Boost</span><p class="multiplier" data-v-19b12a27>2x</p></div></div>',1),no={class:"box-content"},lo=V('<span data-v-19b12a27>Rewards</span><div class="content-box" data-v-19b12a27><p data-v-19b12a27>Fees</p><div class="left-rewards" data-v-19b12a27><img src="'+x+'" alt="" data-v-19b12a27> 110.12 SUI </div></div><div class="content-box near-point" data-v-19b12a27><p data-v-19b12a27></p><div class="left-rewards" data-v-19b12a27><img src="'+D+'" alt="" data-v-19b12a27> 110.12 SUI </div></div><div class="content-box rewards-near" data-v-19b12a27><p data-v-19b12a27>Rewards</p><div class="left-rewards" data-v-19b12a27><img src="'+D+'" alt="" data-v-19b12a27> 110.12 CETUS </div></div><div class="content-box near-point" data-v-19b12a27><p data-v-19b12a27></p><div class="left-rewards" data-v-19b12a27><img src="'+J+'" alt="" data-v-19b12a27> 110.12 USDT </div></div>',5),io={class:"content-box Boosted-rewards"},co={key:0,src:oo,alt:""},ro=y(()=>t("div",{class:"left-rewards"},[t("img",{src:x,alt:""}),c(" 110.12 xCETUS ")],-1)),_o=y(()=>t("svg",{"aria-hidden":"true",class:"icon"},[t("use",{"xlink:href":"#icon-icon_on"})],-1)),uo={key:0,class:"price-range"},po=y(()=>t("p",null,"Price range",-1)),vo=y(()=>t("span",null,[c(" 22.292324 "),t("img",{src:j,alt:""}),c(" 22.292324 ")],-1)),ho=[po,vo],bo={key:1,class:"price-range-state"},mo={key:0,src:O,alt:""},ko={key:1},go=y(()=>t("p",null,"SUI per USDC",-1)),fo={key:2,class:"liquidity-value"},yo=y(()=>t("p",null,"Liquidity",-1)),wo=y(()=>t("span",null,"$200.01",-1)),$o=[yo,wo],xo={key:3,class:"claim-position"},So={key:4,class:"no-register"};function Lo(o,_,a,s,u,m){const i=N,p=F;return n(),l("div",so,[t("div",eo,[t("div",{class:L(["box-title",a.unlockBoolean?"":"box-title-unlock"])},[c(" Cetus LP | Pool4-10001 "),a.unlockBoolean?g("",!0):(n(),T(i,{key:0},{default:$(()=>[c(" Unlocked ")]),_:1}))],2),ao,t("div",no,[lo,t("div",io,[t("p",null,[c(" Boosted rewards "),a.activeState?(n(),l("img",co)):g("",!0)]),ro])]),t("div",{class:L(["position-detail",s.showPosition?"expand":""]),onClick:_[0]||(_[0]=(...e)=>s.changeShowPosition&&s.changeShowPosition(...e))},[c(" Position detail "),_o],2),s.showPosition?(n(),l("div",uo,ho)):g("",!0),s.showPosition?(n(),l("div",bo,[a.activeState?(n(),l("img",mo)):(n(),l("div",ko)),go])):g("",!0),s.showPosition?(n(),l("div",fo,$o)):g("",!0),a.whetherToRegister?(n(),l("div",xo,[r(i,{class:L(a.unlockBoolean?"unblock":""),onClick:s.changeShowUnclock},{default:$(()=>[c(b(a.unlockBoolean?"Unlock":"Claim Position & Rewards"),1)]),_:1},8,["class","onClick"])])):(n(),l("div",So,[r(i,{onClick:s.changeShowUnclock},{default:$(()=>[c(" Register xCETUS ")]),_:1},8,["onClick"]),r(i,{disabled:!0,onClick:s.changeShowUnclock},{default:$(()=>[c(" Claim Position & Rewards ")]),_:1},8,["onClick"])]))]),s.showUnclock?(n(),T(p,{key:0,onOnClose:s.changeShowUnclock},null,8,["onOnClose"])):g("",!0)])}const Co=P(to,[["render",Lo],["__scopeId","data-v-19b12a27"]]),Uo=W({setup(){const o=h(""),_=h(!0),a=h(!0),s=h([{name:"Cetus LP - 10001",myLocked:"$100",liquidity:"113.45"},{name:"Cetus LP - 10001",myLocked:"$300",liquidity:"68.11"}]),u=h([{name:"Sol-USDC",locked:"23.78",aprUpto:"87.29",earned:"12.32",myLocked:"300"}]),m=h([{day:"15 days"},{day:"30 days"},{day:"90 days"}]),i=Y();return{topValue:o,checked:_,tabelList:s,rewardsList:m,unlockBoolean:a,tabelListPools:u,toLockupLiquidity:()=>{i&&i.push("/lockup-liquidity")}}}});const M=o=>(B("data-v-6167ddd3"),o=o(),I(),o),Po={class:"leaderboard-all"},Bo={class:"manage-booster"},Io=M(()=>t("div",{class:"title-manage"},[t("span",null," Pools ")],-1)),To=M(()=>t("div",{class:"title-manage position"},[t("span",null," My Positions "),t("p",null,"(2)")],-1)),qo=M(()=>t("div",{class:"title-manage position"},[t("span",null," My Locked Positions "),t("p",null,"(3)")],-1)),Oo={class:"booster-position-list"};function jo(o,_,a,s,u,m){const i=X,p=Bt,e=Zt,d=Co;return n(),l("div",Po,[t("div",Bo,[r(i),Io,r(p,{"title-text":"manage","tabel-list":o.tabelListPools,"rewards-list":o.rewardsList},null,8,["tabel-list","rewards-list"]),To,r(e,{"title-text":"position","tabel-list":o.tabelList,"rewards-list":o.rewardsList,onToLockupLiquidity:o.toLockupLiquidity},null,8,["tabel-list","rewards-list","onToLockupLiquidity"]),qo,t("div",Oo,[r(d,{"unlock-boolean":!1,"whether-to-register":!1,"active-state":!1}),r(d,{"unlock-boolean":!0,"whether-to-register":!0,"active-state":!0}),r(d,{"unlock-boolean":!0,"whether-to-register":!1,"active-state":!1}),r(d,{"unlock-boolean":!0,"whether-to-register":!0,"active-state":!0}),r(d,{"unlock-boolean":!1,"whether-to-register":!0,"active-state":!1}),r(d,{"unlock-boolean":!0,"whether-to-register":!0,"active-state":!0})])])])}const Go=P(Uo,[["render",jo],["__scopeId","data-v-6167ddd3"]]);export{Go as default};
