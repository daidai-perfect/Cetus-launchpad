import{a as i,o as e,f as a,F as r,s as l,z as _,h as n,v as c,x as d,e as m}from"./entry.c708ef7e.js";const u={class:"select-tab-list"},b=["onClick"],p=["src"],v={key:0,class:"num"},k=i({__name:"select-tab",props:{currentTab:{type:String,default:""},tabList:{type:Object,default:()=>[]}},emits:["onClick"],setup(s,{emit:f}){return(o,y)=>(e(),a("div",u,[(e(!0),a(r,null,l(s.tabList,t=>(e(),a("div",{key:t,class:_(["tab-item",s.currentTab==t.name?"tab-item-active":""]),onClick:C=>o.$emit("onClick",t)},[n("img",{src:t.logo,alt:""},null,8,p),n("span",null,c(t.name),1),t.num&&t.num!==""&&t.num!=="--"&&t.name==s.currentTab?(e(),a("div",v,c(t.num),1)):d("",!0)],10,b))),128))]))}});const h=m(k,[["__scopeId","data-v-8a27d126"]]);export{h as S};
