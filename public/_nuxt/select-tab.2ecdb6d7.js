import{a as i,o as e,f as a,F as r,E as l,y as _,h as n,x as c,G as d,e as m}from"./entry.8c071894.js";const u={class:"select-tab-list"},b=["onClick"],p=["src"],k={key:0,class:"num"},v=i({__name:"select-tab",props:{currentTab:{type:String,default:""},tabList:{type:Object,default:()=>[]}},emits:["onClick"],setup(s,{emit:y}){return(o,f)=>(e(),a("div",u,[(e(!0),a(r,null,l(s.tabList,t=>(e(),a("div",{key:t,class:_(["tab-item",s.currentTab==t.name?"tab-item-active":""]),onClick:C=>o.$emit("onClick",t)},[n("img",{src:t.logo,alt:""},null,8,p),n("span",null,c(t.name),1),t.num&&t.num!==""&&t.num!=="--"&&t.name==s.currentTab?(e(),a("div",k,c(t.num),1)):d("",!0)],10,b))),128))]))}});const h=m(v,[["__scopeId","data-v-8a27d126"]]);export{h as S};
