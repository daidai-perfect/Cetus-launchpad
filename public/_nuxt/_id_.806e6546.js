import{u as G,T as at,c as j,i as I,a as q,b as st,p as n,d as nt,e as A,f as E,N as K,_ as it,g as Q,h as ot,w as U,j as o,k as lt,o as w,l as ct,m as J,n as rt,q as dt,r as _t,s as X,t as W,v as ut,x as pt,y as mt}from"./trade-record.2e507c50.js";import{a as O,m as p,D as z,o as a,f as l,h as s,F as H,s as ht,i as m,c as i,w as T,j as y,u as t,v as r,x as c,z as L,L as gt,B as vt,J as Y,p as yt,k as ft,e as $,b as kt,y as Ct}from"./entry.a7bc8957.js";import{a as bt}from"./pool.ef5dfa1f.js";/* empty css              *//* empty css              */import{b as S,q as xt}from"./index.3daa4341.js";import{u as Z}from"./index.52313906.js";import"./token-warning.96fdb1f5.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";import"./token-warning-modal.18160c9c.js";import"./import-icon.de3e6c66.js";import"./icon-selected_3x.873560ed.js";/* empty css              */import"./refresh-icon.07b78feb.js";/* empty css              */import"./coin-select.f97e0b84.js";import"./icon-tooltip.42b69370.js";import"./token-warning_2x.0538a696.js";import"./img-no-Positions_2x.5e18a7b2.js";import"./img-no-Positions_2x.a4dab425.js";import"./underline-tab.cf770896.js";import"./limit-beta.ac93d20d.js";import"./new-assets-card.28b4bf18.js";import"./index.8c3bc3bd.js";import"./useDebounceFunction.3d0ed39d.js";import"./bignumber.266e6c56.js";import"./img-connect-wallet_2x.5d8b0f0b.js";import"./data.712deea2.js";/* empty css              */const C=h=>(yt("data-v-3ebce725"),h=h(),ft(),h),wt={class:"trade-orders-hide-chart-list"},Tt={class:"top"},St=C(()=>s("div",{class:"trade-claim-btn trade-claim-btn-disabled"},"Claim",-1)),Lt={class:"order-info"},Ot=C(()=>s("div",{class:"label"},"Price",-1)),$t={class:"text"},Nt=["onClick"],It=C(()=>s("svg",{class:"icon icon-down","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_swap2"})],-1)),Ht=[It],zt=C(()=>s("div",{class:"label"},"Filled size",-1)),Bt={class:"text"},Rt=C(()=>s("div",{class:"label"},"Expiry",-1)),Ft={class:"text"},Mt={key:3,class:"loading-box"},Pt=O({__name:"trade-orders-hide-chart",setup(h){const d=G(),f=p(()=>d),k=Z(),_=p(()=>k),g=p(()=>f.value.orderListLoading);return z(()=>_.value.address,b=>{b&&d.getOrderList()},{immediate:!0}),(b,u)=>{const N=gt,x=vt,v=it,B=Q,R=Y,tt=ot;return a(),l("div",{class:L(["trade-orders-hide-chart",(t(n)&&t(n).length==0||!_.value.address)&&!g.value?"trade-order-no-data":""])},[s("div",wt,[(a(!0),l(H,null,ht(t(n),e=>{var F,M,P,D,V;return a(),l("div",{key:e.id,class:"trade-orders-hide-chart-item"},[s("div",Tt,[m(at,{order:e},null,8,["order"]),s("div",null,[e.target_balance==0&&e.obtained_amount==0?(a(),i(N,{key:0,"overlay-class-name":"new-tooltip-border-radius"},{title:T(()=>[y(" For a partially filled order, you can manually claim the filled amount if you want. Or you can wait for the auto distribution until your order is fully filled, expired or cancelled. ")]),default:T(()=>[St]),_:1})):(a(),i(x,{key:1,class:"trade-claim-btn",onClick:()=>{j.value=e,I.value=!0}},{default:T(()=>[y("Claim")]),_:2},1032,["onClick"])),m(x,{class:"trade-cancel-btn",loading:t(q)=="all"||t(q)==e.id,onClick:et=>t(st)(e)},{default:T(()=>[y("Cancel")]),_:2},1032,["loading","onClick"])])]),s("div",Lt,[s("div",null,[Ot,s("div",$t,[e.direction?(a(),l(H,{key:0},[y(r(t(S)(e==null?void 0:e.rate))+" "+r((F=e==null?void 0:e.target_coin_info)==null?void 0:F.symbol)+" per "+r((M=e==null?void 0:e.pay_coin_info)==null?void 0:M.symbol),1)],64)):(a(),l(H,{key:1},[y(r(t(S)(e==null?void 0:e.reseverRate))+" "+r((P=e==null?void 0:e.pay_coin_info)==null?void 0:P.symbol)+" per "+r((D=e==null?void 0:e.target_coin_info)==null?void 0:D.symbol),1)],64)),s("div",{class:"right",onClick:et=>e.direction=!e.direction},Ht,8,Nt)])]),s("div",null,[zt,s("div",Bt,[y(r(t(S)(e==null?void 0:e.obtained_amount))+"/"+r(t(S)(e==null?void 0:e.totalBuyNum))+" "+r((V=e==null?void 0:e.target_coin_info)==null?void 0:V.symbol)+" ",1),s("span",null,"("+r(e==null?void 0:e.obtainedRatio)+"%)",1)])]),s("div",null,[Rt,s("div",Ft,r(t(xt)(e.created_ts,""))+" (UTC) ",1)])])])}),128))]),_.value&&_.value.address&&t(n)&&t(n).length>0?(a(),i(v,{key:0,"page-list":t(n)},null,8,["page-list"])):c("",!0),(t(n)&&t(n).length==0||!_.value.address)&&!g.value?(a(),i(B,{key:1,platform:"orders"})):c("",!0),t(n)&&t(n).length>0?(a(),l("div",{key:2,class:L(["pagination",t(n)&&t(n).length>0&&g.value?"loading-pagination":""])},[m(K,{"page-size":t(nt),total:t(A)&&t(A).length,"current-page-num":t(E),onChange:u[0]||(u[0]=e=>{E.value=e})},null,8,["page-size","total","current-page-num"])],2)):c("",!0),t(n)&&t(n).length==0&&g.value?(a(),l("div",Mt,[m(R)])):c("",!0),t(n)&&t(n).length>0&&g.value?(a(),i(R,{key:4,class:"order-spin"})):c("",!0),t(I)?(a(),i(tt,{key:5,order:t(j),onCloseModal:u[1]||(u[1]=e=>I.value=!1)},null,8,["order"])):c("",!0)],2)}}});const Dt=$(Pt,[["__scopeId","data-v-3ebce725"]]),Vt={class:"trade-history-hid-chart"},jt={key:3,class:"loading-box"},qt=O({__name:"trade-history-hide-chart",setup(h){return(d,f)=>{const k=Q,_=Y;return a(),l("div",Vt,[t(U)&&t(U).address&&t(o)&&t(o).length>0?(a(),i(lt,{key:0,"page-list":t(o)},null,8,["page-list"])):c("",!0),t(o)&&t(o).length==0&&!t(w)?(a(),i(k,{key:1,platform:"history"})):c("",!0),t(o)&&t(o).length>0?(a(),l("div",{key:2,class:L(["pagination",t(o)&&t(o).length>0&&t(w)?"loading-pagination":""])},[m(K,{"page-size":t(ct),total:t(J)&&t(J).length,"current-page-num":t(rt),onChange:t(dt)},null,8,["page-size","total","current-page-num","onChange"])],2)):c("",!0),t(o)&&t(o).length==0&&t(w)?(a(),l("div",jt,[m(_)])):c("",!0),t(o)&&t(o).length>0&&t(w)?(a(),i(_,{key:4,class:"order-spin"})):c("",!0)])}}});const At=$(qt,[["__scopeId","data-v-1b32d818"]]),Et={class:"trade-record-hide-chart"},Ut=O({__name:"trade-record-hide-chart",setup(h){return(d,f)=>(a(),l("div",Et,[m(_t),t(X)=="orders"?(a(),i(Dt,{key:0})):(a(),i(At,{key:1}))]))}});const Jt=$(Ut,[["__scopeId","data-v-7146cdf8"]]),Wt={class:"trade-container"},Gt=O({__name:"[id]",setup(h){const d=G(),f=bt(),k=p(()=>f),_=p(()=>k.value.chainName),g=kt();z(()=>_.value,v=>{v=="Aptos"&&g.push("/swap")},{immediate:!0});const b=p(()=>d),u=p(()=>b.value.isShowChart);Ct(()=>{d.getTokenList(),d.getPoolList(),d.getTokenMinAmount(),W.value=!W.value,X.value="orders"});const N=Z(),x=p(()=>N);return z(()=>x.value.address,v=>{console.log("🚀🚀🚀 ~ file: [id].vue:59 ~ watch ~ newValue:",v),v||d.limitOrderLogOut()},{immediate:!0}),(v,B)=>(a(),l("div",Wt,[s("div",{class:L(["trade-content",u.value?"trade-content-active":""])},[u.value?(a(),i(pt,{key:0})):(a(),i(Jt,{key:1})),m(ut)],2),u.value?(a(),i(mt,{key:0})):c("",!0)]))}});const Te=$(Gt,[["__scopeId","data-v-d8b590cf"]]);export{Te as default};
