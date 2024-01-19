import{_ as T}from"./upgrade-chart.f7ff7f0f.js";import{i as r}from"./import-icon.de3e6c66.js";import{u as w,c as D,a as $,g as N}from"./pool.b1ddb447.js";import{a as E,r as S,l as g,e as A,s as L,o as n,f as a,h as s,F as C,E as x,A as U,i as P,z as b,t as c,u as _,v as d,x as h,j as V,p as O,k as R}from"./entry.833e9675.js";import{u as j,c as F}from"./sha256.5af084c7.js";/* empty css              *//* empty css              */import"./index.56c9db0e.js";import"./lodash.39511ea6.js";import"./decimal.0bdeb344.js";const B=E({setup(){const o=S("vol"),i=j(),p=g(()=>i),k=[{label:"Volume",value:"vol"},{label:"TVL",value:"tvl"},{label:"Fees",value:"fee"}];g(()=>F[p.value.chainName]);const y=u=>{o.value=u.value},f=S(!1),v=()=>{f.value=!0,setTimeout(()=>{f.value=!1},1e3)},l=[{type:"add",tokena:"SUI",numa:"3,408.7013",tokenb:"USDC",numb:"3,408.7013",tx:"0x1177b783asdafafafgdgsdfa0099",addressa:"0x2::sui::SUI",addressb:"0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"},{type:"add",tokena:"SUI",numa:"3,408.7013",tx:"0x2344b783asdafafafgdgsdfa00788",addressa:"0x2::sui::SUI"},{type:"remove",tokena:"SUI",numa:"3,408.7013",tokenb:"USDC",numb:"3,408.7013",tx:"0x8900b783asdafafafgdgsdfa0012",addressa:"0x2::sui::SUI",addressb:"0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"},{type:"swap",tokena:"SUI",numa:"3,408.7013",tokenb:"USDC",numb:"3,408.7013",tx:"0x1231b783asdafafafgdgsdfa0034",addressa:"0x2::sui::SUI",addressb:"0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"}],t=w(),m=g(()=>t);return{getType:u=>{switch(u){case"add":return"Add liquidity";case"swap":return"Swap";case"remove":return"Remove liquidity"}},getCoinIcon:u=>{var I;return((I=m.value.tokensObj[u])==null?void 0:I.logo_url)||(p.value.theme==="default"?r("/image/coins/unknown.png"):r("/image/coins/sui-unknown.png"))},transactionList:l,refresh:f,clickRefresh:v,changeMode:y,modeList:k,mode:o,checkNullObj:D,store:p,addCommom:$}}});const e=o=>(O("data-v-5edaf172"),o=o(),R(),o),M={class:"analytics-container"},q={class:"mode-tab"},z=["onClick"],G=e(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),H=[G],J={class:"poolInfo"},K={class:"info"},Q=e(()=>s("div",{class:"page-tit"},"Pool Info",-1)),W={class:"info-detail"},X={class:"top"},Y=e(()=>s("p",null,"Pool Address",-1)),Z={class:"copy-address"},ss=e(()=>s("span",null,"0x435aa4ae1760osfa123123123123191111121331231312313",-1)),os=e(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),ts=[os],es=e(()=>s("div",{class:"center"},[s("div",{class:"item"},[s("p",null,"Pool ID"),s("span",null,"#12")]),s("div",{class:"item"},[s("p",null,"Tick Sapcing"),s("span",null,"60")]),s("div",{class:"item"},[s("p",null,"Fee Tier"),s("span",null,"0.25%")])],-1)),ns={class:"bottom"},as={class:"item"},is={class:"left"},ls={alt:""},ds=e(()=>s("span",null,"SUI",-1)),cs={class:"right"},rs=e(()=>s("span",null,"0x2::sui::SUI",-1)),us=e(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),_s=[us],hs={class:"item"},ps={class:"left"},fs={alt:""},ms=e(()=>s("span",null,"USDC",-1)),vs={class:"right"},gs=e(()=>s("span",null,"0x435aa4ae17691111112312321331231",-1)),bs=e(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),ks=[bs],ys={class:"composition"},Is=e(()=>s("div",{class:"page-tit"},"Pool Composition",-1)),Ss={class:"table-info"},Cs={class:"table"},xs=e(()=>s("thead",{class:"table-header"},[s("tr",{class:"table-tr"},[s("th",null,"Token"),s("th",null,"Amount"),s("th",null,"Amount (USD)"),s("th",null,"Token Ratio")])],-1)),Us={class:"table-body"},Ts={alt:""},ws=e(()=>s("div",null,[s("p",null,"SUI"),s("span",null,"Sui Token")],-1)),Ds=e(()=>s("td",null,"31,103,742.123456",-1)),$s=e(()=>s("td",null,"$1,103,742",-1)),Ns=e(()=>s("td",null,"20.12%",-1)),Es={alt:""},As=e(()=>s("div",null,[s("p",null,"USDC"),s("span",null,"USD Coin (Portal from Ethereum)")],-1)),Ls=e(()=>s("td",null,"31,103,742.123456",-1)),Ps=e(()=>s("td",null,"$1,103,742",-1)),Vs=e(()=>s("td",null,"20.12%",-1)),Os={class:"transactions"},Rs=e(()=>s("div",{class:"page-tit"},"Transactions",-1)),js={class:"table-info table-transactions"},Fs={class:"table"},Bs=e(()=>s("thead",{class:"table-header"},[s("tr",{class:"table-tr"},[s("th",null,"Event"),s("th",null,"Amounts"),s("th",null,"Transactions"),s("th",null,"Time")])],-1)),Ms={class:"table-body"},qs={key:0,class:"icon swap-icon","aria-hidden":"true"},zs=e(()=>s("use",{"xlink:href":"#icon-tx_swap"},null,-1)),Gs=[zs],Hs={key:1,class:"icon add-icon","aria-hidden":"true"},Js=e(()=>s("use",{"xlink:href":"#icon-tx_add"},null,-1)),Ks=[Js],Qs={key:2,class:"icon remove-icon","aria-hidden":"true"},Ws=e(()=>s("use",{"xlink:href":"#icon-tx_remove"},null,-1)),Xs=[Ws],Ys={class:"item-box"},Zs={class:"item"},so={alt:""},oo={key:0,class:"jiantou"},to={key:1,class:"item"},eo={alt:""},no=["href"],ao=e(()=>s("td",null,"2023-05-31 11:25:30",-1));function io(o,i,p,k,y,f){const v=T,l=L("image");return n(),a("div",M,[s("div",q,[s("div",null,[(n(!0),a(C,null,x(o.modeList,t=>(n(),a("div",{key:t,class:U(["title",o.mode==t.value?"title-active":""]),onClick:m=>o.changeMode(t)},d(t.label),11,z))),128))]),(n(),a("svg",{"aria-hidden":"true",class:U(o.refresh?"refresh refresh-icon":"refresh-icon"),onClick:i[0]||(i[0]=(...t)=>o.clickRefresh&&o.clickRefresh(...t))},H,2))]),s("div",J,[P(v,{mode:o.mode},null,8,["mode"]),s("div",K,[Q,s("div",W,[s("div",X,[Y,s("div",Z,[ss,(n(),a("svg",{class:"icon","aria-hidden":"true",onClick:i[1]||(i[1]=b(t=>o.store.copy("0x435aa4ae1760osfa123123123123191111121331231312313"),["stop"]))},ts))])]),es,s("div",ns,[s("div",as,[s("div",is,[c(s("img",ls,null,512),[[l,("importIcon"in o?o.importIcon:_(r))("/image/coins/sui.png")]]),ds]),s("div",cs,[rs,(n(),a("svg",{class:"icon","aria-hidden":"true",onClick:i[2]||(i[2]=b(t=>o.store.copy("0x2::sui::SUI"),["stop"]))},_s))])]),s("div",hs,[s("div",ps,[c(s("img",fs,null,512),[[l,("importIcon"in o?o.importIcon:_(r))("/image/coins/usdc.png")]]),ms]),s("div",vs,[gs,(n(),a("svg",{class:"icon","aria-hidden":"true",onClick:i[3]||(i[3]=b(t=>o.store.copy("0x435aa4ae17691111112312321331231"),["stop"]))},ks))])])])])])]),s("div",ys,[Is,s("div",Ss,[s("table",Cs,[xs,s("tbody",Us,[(n(),a("tr",{key:o.index,class:"table-tr"},[s("td",null,[c(s("img",Ts,null,512),[[l,("importIcon"in o?o.importIcon:_(r))("/image/coins/sui.png")]]),ws]),Ds,$s,Ns])),(n(),a("tr",{key:o.index,class:"table-tr"},[s("td",null,[c(s("img",Es,null,512),[[l,("importIcon"in o?o.importIcon:_(r))("/image/coins/usdc.png")]]),As]),Ls,Ps,Vs]))])])])]),s("div",Os,[Rs,s("div",js,[s("table",Fs,[Bs,s("tbody",Ms,[(n(!0),a(C,null,x(o.transactionList,(t,m)=>(n(),a("tr",{key:m,class:"table-tr"},[s("td",null,[t.type=="swap"?(n(),a("svg",qs,Gs)):h("",!0),t.type=="add"?(n(),a("svg",Hs,Ks)):h("",!0),t.type=="remove"?(n(),a("svg",Qs,Xs)):h("",!0),V(" "+d(o.getType(t.type)),1)]),s("td",null,[s("div",Ys,[s("div",Zs,[c(s("img",so,null,512),[[l,o.getCoinIcon(t.addressa)]]),s("p",null,d(t.numa),1),s("span",null,d(t.tokena),1)]),t.type=="swap"?(n(),a("p",oo,"→")):h("",!0),t.tokenb?(n(),a("div",to,[c(s("img",eo,null,512),[[l,o.getCoinIcon(t.addressb)]]),s("p",null,d(t.numb),1),s("span",null,d(t.tokenb),1)])):h("",!0)])]),s("td",null,[s("a",{href:("getExplorerUrl"in o?o.getExplorerUrl:_(N))("tx",t.tx),target:"_blank"},[s("span",null,d(t.tx.substr(0,6))+" ... "+d(t.tx.substr(t.tx.length-4,4)),1)],8,no)]),ao]))),128))])])])])])}const ko=A(B,[["render",io],["__scopeId","data-v-5edaf172"]]);export{ko as default};
