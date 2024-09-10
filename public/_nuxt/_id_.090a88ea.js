import{u as J,T as at,c as D,i as I,a as E,b as st,p as n,d as nt,e as j,f as q,N as K,_ as it,g as Q,h as ot,w as U,j as o,k as lt,o as T,l as ct,m as G,n as rt,q as _t,r as dt,s as X,t as W,v as ut,x as pt,y as mt}from"./trade-record.f6936623.js";import{a as L,m as p,A as z,o as a,f as l,h as s,F as H,E as ht,i as m,c as i,w,j as y,u as t,x as r,G as c,y as O,P as gt,B as vt,O as Y,p as yt,k as ft,e as $,b as kt,q as Ct}from"./entry.602fc024.js";import{u as bt}from"./index.d55db9e8.js";/* empty css              *//* empty css              */import{a as S,r as xt}from"./common.22b46d4a.js";import{u as Z}from"./index.eee0c4a2.js";import"./token-warning.a096d55a.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";import"./token-warning-modal.a62e6046.js";import"./import-icon.de3e6c66.js";import"./check-box.bc2dd236.js";/* empty css              */import"./refresh-icon.182c7ec3.js";/* empty css              */import"./coin-select.9046e9d6.js";import"./icon-tooltip.c6f793ea.js";import"./token-warning_2x.9f7b2962.js";import"./img-no-Positions_2x.928c764d.js";import"./img-no-Positions_2x.c3ea922a.js";import"./underline-tab.f1089aec.js";import"./limit-beta.f4f28dff.js";import"./new-assets-card.712415fb.js";import"./index.d1010198.js";import"./useDebounceFunction.b09688bb.js";import"./bignumber.266e6c56.js";import"./img-connect-wallet_2x.cadd6aea.js";import"./data.712deea2.js";/* empty css              */const C=h=>(yt("data-v-843aa625"),h=h(),ft(),h),Tt={class:"trade-orders-hide-chart-list"},wt={class:"top"},St=C(()=>s("div",{class:"trade-claim-btn trade-claim-btn-disabled"},"Claim",-1)),Ot={class:"order-info"},Lt=C(()=>s("div",{class:"label"},"Price",-1)),$t={class:"text"},Nt=["onClick"],It=C(()=>s("svg",{class:"icon icon-down","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_swap2"})],-1)),Ht=[It],zt=C(()=>s("div",{class:"label"},"Filled size",-1)),Bt={class:"text"},Pt=C(()=>s("div",{class:"label"},"Expiry",-1)),Rt={class:"text"},Ft={key:3,class:"loading-box"},Mt=L({__name:"trade-orders-hide-chart",setup(h){const _=J(),f=p(()=>_),k=Z(),d=p(()=>k),g=p(()=>f.value.orderListLoading);return z(()=>d.value.address,b=>{b&&_.getOrderList()},{immediate:!0}),(b,u)=>{const N=gt,x=vt,v=it,B=Q,P=Y,tt=ot;return a(),l("div",{class:O(["trade-orders-hide-chart",(t(n)&&t(n).length==0||!d.value.address)&&!g.value?"trade-order-no-data":""])},[s("div",Tt,[(a(!0),l(H,null,ht(t(n),e=>{var R,F,M,V,A;return a(),l("div",{key:e.id,class:"trade-orders-hide-chart-item"},[s("div",wt,[m(at,{order:e},null,8,["order"]),s("div",null,[e.target_balance==0&&e.obtained_amount==0?(a(),i(N,{key:0,"overlay-class-name":"ant-tooltip-text-color"},{title:w(()=>[y(" For a partially filled order, you can manually claim the filled amount if you want. Or you can wait for the auto distribution until your order is fully filled, expired or cancelled. ")]),default:w(()=>[St]),_:1})):(a(),i(x,{key:1,class:"trade-claim-btn",onClick:()=>{D.value=e,I.value=!0}},{default:w(()=>[y("Claim")]),_:2},1032,["onClick"])),m(x,{class:"trade-cancel-btn cancel-btn",loading:t(E)=="all"||t(E)==e.id,onClick:et=>t(st)(e)},{default:w(()=>[y("Cancel")]),_:2},1032,["loading","onClick"])])]),s("div",Ot,[s("div",null,[Lt,s("div",$t,[e.direction?(a(),l(H,{key:0},[y(r(t(S)(e==null?void 0:e.rate))+" "+r((R=e==null?void 0:e.target_coin_info)==null?void 0:R.symbol)+" per "+r((F=e==null?void 0:e.pay_coin_info)==null?void 0:F.symbol),1)],64)):(a(),l(H,{key:1},[y(r(t(S)(e==null?void 0:e.reseverRate))+" "+r((M=e==null?void 0:e.pay_coin_info)==null?void 0:M.symbol)+" per "+r((V=e==null?void 0:e.target_coin_info)==null?void 0:V.symbol),1)],64)),s("div",{class:"right",onClick:et=>e.direction=!e.direction},Ht,8,Nt)])]),s("div",null,[zt,s("div",Bt,[y(r(t(S)(e==null?void 0:e.obtained_amount))+"/"+r(t(S)(e==null?void 0:e.totalBuyNum))+" "+r((A=e==null?void 0:e.target_coin_info)==null?void 0:A.symbol)+" ",1),s("span",null,"("+r(e==null?void 0:e.obtainedRatio)+"%)",1)])]),s("div",null,[Pt,s("div",Rt,r(t(xt)(e.created_ts,""))+" (UTC) ",1)])])])}),128))]),d.value&&d.value.address&&t(n)&&t(n).length>0?(a(),i(v,{key:0,"page-list":t(n)},null,8,["page-list"])):c("",!0),(t(n)&&t(n).length==0||!d.value.address)&&!g.value?(a(),i(B,{key:1,platform:"orders"})):c("",!0),t(n)&&t(n).length>0?(a(),l("div",{key:2,class:O(["pagination",t(n)&&t(n).length>0&&g.value?"loading-pagination":""])},[m(K,{"page-size":t(nt),total:t(j)&&t(j).length,"current-page-num":t(q),onChange:u[0]||(u[0]=e=>{q.value=e})},null,8,["page-size","total","current-page-num"])],2)):c("",!0),t(n)&&t(n).length==0&&g.value?(a(),l("div",Ft,[m(P)])):c("",!0),t(n)&&t(n).length>0&&g.value?(a(),i(P,{key:4,class:"order-spin"})):c("",!0),t(I)?(a(),i(tt,{key:5,order:t(D),onCloseModal:u[1]||(u[1]=e=>I.value=!1)},null,8,["order"])):c("",!0)],2)}}});const Vt=$(Mt,[["__scopeId","data-v-843aa625"]]),At={class:"trade-history-hid-chart"},Dt={key:3,class:"loading-box"},Et=L({__name:"trade-history-hide-chart",setup(h){return(_,f)=>{const k=Q,d=Y;return a(),l("div",At,[t(U)&&t(U).address&&t(o)&&t(o).length>0?(a(),i(lt,{key:0,"page-list":t(o)},null,8,["page-list"])):c("",!0),t(o)&&t(o).length==0&&!t(T)?(a(),i(k,{key:1,platform:"history"})):c("",!0),t(o)&&t(o).length>0?(a(),l("div",{key:2,class:O(["pagination",t(o)&&t(o).length>0&&t(T)?"loading-pagination":""])},[m(K,{"page-size":t(ct),total:t(G)&&t(G).length,"current-page-num":t(rt),onChange:t(_t)},null,8,["page-size","total","current-page-num","onChange"])],2)):c("",!0),t(o)&&t(o).length==0&&t(T)?(a(),l("div",Dt,[m(d)])):c("",!0),t(o)&&t(o).length>0&&t(T)?(a(),i(d,{key:4,class:"order-spin"})):c("",!0)])}}});const jt=$(Et,[["__scopeId","data-v-5a3789ad"]]),qt={class:"trade-record-hide-chart"},Ut=L({__name:"trade-record-hide-chart",setup(h){return(_,f)=>(a(),l("div",qt,[m(dt),t(X)=="orders"?(a(),i(Vt,{key:0})):(a(),i(jt,{key:1}))]))}});const Gt=$(Ut,[["__scopeId","data-v-7146cdf8"]]),Wt={class:"trade-container"},Jt=L({__name:"[id]",setup(h){const _=J(),f=bt(),k=p(()=>f),d=p(()=>k.value.chainName),g=kt();z(()=>d.value,v=>{v=="Aptos"&&g.push("/swap")},{immediate:!0});const b=p(()=>_),u=p(()=>b.value.isShowChart);Ct(()=>{_.getTokenList(),_.getPoolList(),_.getTokenMinAmount(),W.value=!W.value,X.value="orders"});const N=Z(),x=p(()=>N);return z(()=>x.value.address,v=>{console.log("🚀🚀🚀 ~ file: [id].vue:59 ~ watch ~ newValue:",v),v||_.limitOrderLogOut()},{immediate:!0}),(v,B)=>(a(),l("div",Wt,[s("div",{class:O(["trade-content",u.value?"trade-content-active":""])},[u.value?(a(),i(pt,{key:0})):(a(),i(Gt,{key:1})),m(ut)],2),u.value?(a(),i(mt,{key:0})):c("",!0)]))}});const we=$(Jt,[["__scopeId","data-v-d8b590cf"]]);export{we as default};
