import{a as p,z as c,m as i,e as u,o as _,c as m,w as s,P as d,h as a,x as f,i as y,U as h}from"./entry.a85dcc8c.js";/* empty css              *//* empty css              */import{u as w}from"./index.a6e74e8d.js";const g=p({props:{loading:{type:Boolean,default:!1},autoRefreshTime:{type:Number,default:20},countdown:{type:Number,default:0},tooltipPlacement:{type:String,default:""}},setup(){const{t:e,locale:t}=c(),o=w(),n=i(()=>o);return{t:e,store:n}}});const v={class:"new-style-tooltip-text"};function k(e,t,o,n,$,B){const r=h,l=d;return _(),m(l,{"overlay-class-name":e.tooltipPlacement?"expiry-tooltip ant-tooltip-text-color":"ant-tooltip-text-color",placement:e.tooltipPlacement?e.tooltipPlacement:"top","arrow-point-at-center":""},{title:s(()=>[a("div",v,f(e.$t("tips.refreshTips")),1)]),default:s(()=>[a("div",{class:"progress",onClick:t[0]||(t[0]=C=>e.$emit("clickRefresh"))},[y(r,{type:"circle","trail-color":"#B5B8C2","stroke-color":e.store.theme=="default"?"#68FFD8":"#76C8FF",width:18,"show-info":!1,"stroke-width":10,percent:100/e.autoRefreshTime*e.countdown},null,8,["stroke-color","percent"])])]),_:1},8,["overlay-class-name","placement"])}const N=u(g,[["render",k],["__scopeId","data-v-0a32982c"]]);export{N as _};
