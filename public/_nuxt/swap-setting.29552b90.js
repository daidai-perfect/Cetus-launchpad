import{a as M,Y as A,l as O,r as b,y as T,m as V,ai as j,e as z,M as F,o as u,c as k,w as i,h as a,i as f,j as I,v as c,f as N,F as D,s as L,z as h,x as S,aj as P,I as U,B as Y,p as q,k as G}from"./entry.a7bc8957.js";/* empty css              */import{_ as H,a as J}from"./icon-error_2x.afd829f4.js";import{a as K}from"./pool.ef5dfa1f.js";const Q=M({components:{Modal:A},setup(e,n){const{t:w,locale:y}=O(),d=K(),$=["0.1","0.5","1"],t=b(d.slippage||.5),{setSlippage:C}=d,g=j(),m=b(!1);function o(s,r){m.value=!1,t.value=r}function v(){localStorage.setItem("swapOrderSplit",l.value),localStorage.setItem("includeRoutes",p.value),C(t.value);const s=new Event("updateSwapParams");window.dispatchEvent(s),n.emit("onClose",!1)}const l=b(),p=b(),B=s=>{l.value=s},R=s=>{p.value=s};T(()=>{const s=localStorage.getItem("swapOrderSplit")||"open";s=="open"?l.value="open":s=="close"?l.value="close":l.value="open";const r=localStorage.getItem("includeRoutes")||"close";r=="open"?p.value="open":(r=="close",p.value="close")});const E=V(()=>d.chainName);return{settingArr:$,changeActiveIndex:o,confirm:v,emit:g,slippage:t,t:w,orderSplit:l,includeRoutes:p,setOrderSplit:B,setIncludeRoutes:R,chainName:E,isInput:m,inputChange:s=>{const r=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,2})?).*$");s.target.value=s.target.value.replace(r,"$1"),t.value=s.target.value}}}});const _=e=>(q("data-v-311b426e"),e=e(),G(),e),W=_(()=>a("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),X={class:"setting-container"},Z={class:"title"},x=_(()=>a("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon_verticalslider"})],-1)),ee={class:"tag-list"},se=_(()=>a("span",{class:"custom"},"Custom",-1)),ae={key:0,src:H,alt:""},ne={key:1,src:J,alt:""},oe={class:"footer"};function te(e,n,w,y,d,$){const t=P,C=U,g=Y,m=F("Modal");return u(),k(m,{title:"Settings",class:"setting new-modal-have-radius",centered:"",visible:!0,width:"400px",onCancel:n[3]||(n[3]=o=>e.$emit("onClose"))},{closeIcon:i(()=>[W]),footer:i(()=>[a("div",oe,[f(g,{type:"cancel",class:"cancel-btn",onClick:n[2]||(n[2]=o=>e.$emit("onClose"))},{default:i(()=>[I(c(e.$t("button.cancel")),1)]),_:1}),f(g,{class:"confirmbtn",disabled:Number(e.slippage)==0||Number(e.slippage)>50||Number(e.slippage)<.01,onClick:e.confirm},{default:i(()=>[I(c(e.$t("button.confirm")),1)]),_:1},8,["disabled","onClick"])])]),default:i(()=>[a("div",X,[a("div",Z,[x,a("span",null,c(e.$t("modal.slippageTolerance")),1)]),a("div",ee,[(u(!0),N(D,null,L(e.settingArr,(o,v)=>(u(),k(t,{key:v,class:h(!e.isInput&&o==e.slippage?"tag-active":""),onClick:l=>e.changeActiveIndex(v,o)},{default:i(()=>[I(c(o)+"% ",1)]),_:2},1032,["class","onClick"]))),128))]),f(t,{class:h(["input-tag",e.isInput?"tag-active":""]),onClick:n[1]||(n[1]=o=>e.isInput=!0)},{default:i(()=>[se,f(C,{value:e.slippage,"onUpdate:value":n[0]||(n[0]=o=>e.slippage=o),placeholder:"",suffix:"%",class:h(["slippage-input",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-input-waring":Number(e.slippage)>50?"slippage-input-error":""]),onChange:e.inputChange},null,8,["value","class","onChange"])]),_:1},8,["class"])]),Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1||Number(e.slippage)>50?(u(),N("div",{key:0,class:h(["slippage-hint",Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1?"slippage-hint-waring":Number(e.slippage)>50?"slippage-hint-error":""])},[Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1?(u(),N("img",ae)):S("",!0),Number(e.slippage)>50?(u(),N("img",ne)):S("",!0),a("p",null,c(Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1?e.$t("tips.slippageTolerance2"):Number(e.slippage)>50?e.$t("tips.slippageTolerance1"):""),1)],2)):S("",!0)]),_:1})}const ce=z(Q,[["render",te],["__scopeId","data-v-311b426e"]]);export{ce as _};
