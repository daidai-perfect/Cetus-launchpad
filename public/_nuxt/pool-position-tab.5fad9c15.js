import{a as g,m as t,b as S,r as k,o as x,f as C,i as a,u as n,h as P,w as l,B as T,j as c,e as y}from"./entry.5e8d3f25.js";import{u as L}from"./pool.85be4826.js";import{c as h}from"./index.09a244f6.js";import{S as B}from"./select-tab.23c84bd2.js";import{u as N,a as w}from"./index.cdb0d33c.js";const $={class:"pool-position-tab"},q={class:"action"},A=g({__name:"pool-position-tab",props:{currentTab:{type:String,default:""}},setup(p){const d=p,_=L(),e=t(()=>_),m=N();t(()=>m);const b=w();t(()=>b);const s=S(),r=t(()=>h.Sui),f=k(d.currentTab),v=t(()=>[{name:"Pools",logo:"/sui-image/pool_icon.png",num:e.value.isPoolLoading?"":e.value.poolListNum,link:"/pool/list"},{name:"Positions",logo:"/sui-image/icon_positions@2x.png",link:"/pool/position",num:e.value.isPositionLoading?"":e.value.positionListNum}]);return(V,o)=>{const u=T;return x(),C("div",$,[a(n(B),{"tab-list":v.value,"current-tab":f.value,onOnClick:o[0]||(o[0]=i=>{n(s).push(i.link)})},null,8,["tab-list","current-tab"]),P("div",q,[a(u,{class:"ghost-btn",onClick:o[1]||(o[1]=i=>n(s).push(`/liquidity/create?toCoin=${r.value.currentChainTokenAddress}`))},{default:l(()=>[c("Create a new pool")]),_:1}),a(u,{class:"primary-btn",onClick:o[2]||(o[2]=i=>n(s).push(`/liquidity/deposit?action=newposition&toCoin=${r.value.currentChainTokenAddress}`))},{default:l(()=>[c("Add Liquidity")]),_:1})])])}}});const z=y(A,[["__scopeId","data-v-d1dcee83"]]);export{z as _};
