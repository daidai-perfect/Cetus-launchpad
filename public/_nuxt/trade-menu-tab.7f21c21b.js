import{V as n}from"./vesrion-beta.299af925.js";import{a as o,o as a,f as t,F as d,s as c,z as l,h as i,v as _,i as u,x as p,e as b}from"./entry.7dcfbd3d.js";const f={class:"trade-tab"},m=["onClick"],T={key:0},v=o({__name:"trade-menu-tab",props:{tradeTabList:{type:Array,default:()=>[]},currentTradeTab:{type:String,default:""}},setup(r){return(s,y)=>(a(),t("div",f,[(a(!0),t(d,null,c(r.tradeTabList,e=>(a(),t("div",{key:e,class:l([r.currentTradeTab==e.label?"trade-tab-item-active":"","trade-tab-item"]),onClick:h=>s.$router.push(e.link)},[i("span",null,_(e.label),1),e.hasBeta?(a(),t("div",T,[u(n,{top:"15px"})])):p("",!0)],10,m))),128))]))}});const B=b(v,[["__scopeId","data-v-9bfef4a2"]]);export{B as T};
