import{a as S,m as t,b as k,r as C,o as P,f as y,i,u as n,h as T,w as l,B as h,j as p,e as B}from"./entry.a7bc8957.js";import{u as L}from"./pool.c58a8263.js";import{c as w}from"./index.52313906.js";import{S as A}from"./select-tab.582af717.js";import{a as N,u as $}from"./pool.ef5dfa1f.js";const q={class:"pool-position-tab"},V={class:"action"},I=S({__name:"pool-position-tab",props:{currentTab:{type:String,default:""}},setup(c){const d=c,_=L(),a=t(()=>_),m=N(),b=t(()=>m),f=$(),v=t(()=>f),e=k(),r=t(()=>w.Sui),g=C(d.currentTab),x=t(()=>[{name:"Pools",logo:"/sui-image/pool_icon.png",num:a.value.isPoolLoading?"":a.value.poolListNum,link:"/pool/list"},{name:"Positions",logo:"/sui-image/icon_positions@2x.png",link:"/pool/position",num:v.value.myPositionsLoading?"":b.value.positionAmount}]);return(j,o)=>{const u=h;return P(),y("div",q,[i(n(A),{"tab-list":x.value,"current-tab":g.value,onOnClick:o[0]||(o[0]=s=>{n(e).push(s.link)})},null,8,["tab-list","current-tab"]),T("div",V,[i(u,{class:"ghost-btn",onClick:o[1]||(o[1]=s=>n(e).push(`/liquidity/create?toCoin=${r.value.currentChainTokenAddress}`))},{default:l(()=>[p("Create a new pool")]),_:1}),i(u,{class:"primary-btn",onClick:o[2]||(o[2]=s=>n(e).push(`/liquidity/deposit?action=newposition&toCoin=${r.value.currentChainTokenAddress}`))},{default:l(()=>[p("Add Liquidity")]),_:1})])])}}});const F=B(I,[["__scopeId","data-v-81517004"]]);export{F as _};
