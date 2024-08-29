import{a as V,e as P,o as a,f as p,h as r,z as y,v as $,m as k,r as g,y as B,T as z,M as Y,fh as K,K as O,F as T,s as H,i as w,p as C,k as I,H as Q,j as X,x as J,D as R,u as x,f9 as Z}from"./entry.f28f527b.js";import{F as ee}from"./filter-pool-by-coin.a14de61e.js";import{I as oe}from"./is-all-pool.7750ae73.js";import{_ as se}from"./icon-selected_3x.09e9a6f0.js";import{u as S}from"./pool.5537e0fe.js";import{a as le,u as ne,P as D}from"./useToken.ae151b56.js";import{u as te,f as q}from"./fetchFun.dcf6e1b6.js";import{g as ie,h as re,O as ce,aH as ue}from"./index.dc091492.js";import{D as ae}from"./decimal.0bdeb344.js";const pe=V({name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:""}},setup(o,u){return{toggleSelect:()=>{u.emit("update:modelValue",!o.modelValue)}}}});const de={class:"checkbox-button"},_e={class:"label"};function fe(o,u,t,v,_,f){return a(),p("div",{class:"checkbox-container",onClick:u[0]||(u[0]=(...i)=>o.toggleSelect&&o.toggleSelect(...i))},[r("div",de,[r("img",{class:y({show:o.modelValue}),src:se},null,2)]),r("span",_e,$(o.label),1)])}const ve=P(pe,[["render",fe],["__scopeId","data-v-c249c92d"]]),he=V({name:"Dropdown",components:{CheckBox:ve},props:{options:{type:Array,required:!0},modelValue:{type:Array,required:!0},label:{type:String,default:""},iconUrl:{type:String,default:""},num:{type:[String,Number],default:""}},setup(o,u){console.log("🚀🚀🚀 ~ file: dropdown-checkbox.vue:112 ~ setup ~ props.options:",o.options);const t=S(),v=k(()=>t),_=k(()=>v.value.isOpenSelectLabel),{setIsOpenSelectType:f,setIsOpenSelectLabel:i}=t,c=g(null);g(null);const h=()=>{f(!1),i(!_.value)},e=k(()=>{const l=o.modelValue;return console.log("🚀🚀🚀 ~ file: dropdown-checkbox.vue:65 ~ optionList ~ modelValueArr:",l),o.options.map(d=>({...d,value:l==null?void 0:l.includes(d.label)}))}),n=l=>{const d={};e.value.forEach(b=>{b.value&&(d[b.label]=!0)}),d[l.label]=l.value;const m=Object.keys(d).filter(b=>d[b]);console.log("🚀 ~ file: dropdownCheckbox.vue:83 ~ selectOption ~ newValue:",m),u.emit("update:modelValue",m)},s=l=>{i(!1),f(!1)};return B(()=>{document.addEventListener("click",s)}),z(()=>{document.removeEventListener("click",s)}),{isOpen:_,selectedOption:c,selectOption:n,toggleDropdown:h,optionList:e}}});const ge=o=>(C("data-v-b139e89f"),o=o(),I(),o),me={class:"current-info"},be={class:"icon-box"},ye={class:"icon","aria-hidden":"true"},ke=["xlink:href"],Le={class:"label"},we=ge(()=>r("use",{"xlink:href":"#icon-icon_on"},null,-1)),$e=[we],Pe={key:1,class:"num"},Se=["onClick"];function Oe(o,u,t,v,_,f){const i=Y("CheckBox");return a(),p("div",{class:y(["dropdown-container",{open:o.isOpen}])},[r("div",{class:"dropdown-toggle",onClick:u[0]||(u[0]=O((...c)=>o.toggleDropdown&&o.toggleDropdown(...c),["stop"]))},[K(o.$slots,"toggle",{},()=>[r("div",me,[r("div",be,[(a(),p("svg",ye,[r("use",{"xlink:href":o.iconUrl},null,8,ke)]))]),r("span",Le,$(o.label),1)])],!0),o.num?(a(),p("div",Pe,$(o.num),1)):(a(),p("svg",{key:0,"aria-hidden":"true",class:y(["dropdown-icon",{open:o.isOpen}])},$e,2))]),r("ul",{class:y(["dropdown-list",{open:o.isOpen}])},[(a(!0),p(T,null,H(o.optionList,c=>(a(),p("li",{key:c.value,onClick:O(h=>o.selectOption(c),["stop"])},[w(i,{modelValue:c.value,"onUpdate:modelValue":h=>c.value=h,label:c.label},null,8,["modelValue","onUpdate:modelValue","label"])],8,Se))),128))],2)],2)}const Ve=P(he,[["render",Oe],["__scopeId","data-v-b139e89f"]]),Ce=V({name:"Dropdown",props:{options:{type:Array,required:!0},modelValue:{type:[String,Number],default:null},label:{type:String,default:"Label"},hasIcon:{type:Boolean,default:!1},iconUrl:{type:String,default:""}},setup(o,u){console.log("🚀🚀🚀 ~ file: dropdown.vue:55 ~ setup ~ props:",o);const t=S(),v=k(()=>t),_=k(()=>v.value.isOpenSelectType),{setIsOpenSelectType:f,setIsOpenSelectLabel:i}=t,c=g(null),h=()=>{f(!_.value),i(!1)},e=l=>{c.value=l,u.emit("update:modelValue",l.value),f(!1)},n=()=>{c.value=o.options.find(l=>l.value===o.modelValue)||{label:"",value:null}},s=l=>{f(!1),i(!1)};return B(()=>{document.addEventListener("click",s),n()}),z(()=>{document.removeEventListener("click",s)}),{isOpen:_,selectedOption:c,selectOption:e,toggleDropdown:h}}});const G=o=>(C("data-v-464eb04d"),o=o(),I(),o),Ie={class:"current-info"},Fe={class:"icon-box"},xe={class:"icon","aria-hidden":"true"},De=["xlink:href"],Te={class:"label"},Be={class:"value"},Ae=G(()=>r("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ne=[Ae],Ee=["onClick"],Ue={key:0,"aria-hidden":"true",class:"icon"},je=G(()=>r("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Me=[je];function Je(o,u,t,v,_,f){return a(),p("div",{class:y(["dropdown-container",{open:o.isOpen}])},[r("div",{class:"dropdown-toggle",onClick:u[0]||(u[0]=O((...i)=>o.toggleDropdown&&o.toggleDropdown(...i),["stop"]))},[K(o.$slots,"toggle",{},()=>{var i;return[r("div",Ie,[r("div",Fe,[(a(),p("svg",xe,[r("use",{"xlink:href":o.iconUrl},null,8,De)]))]),r("span",Te,$(o.label),1),r("span",Be,$((i=o.selectedOption)==null?void 0:i.value),1)])]},!0),(a(),p("svg",{"aria-hidden":"true",class:y(["dropdown-icon",{open:o.isOpen}])},Ne,2))]),r("ul",{class:y(["dropdown-list",{open:o.isOpen}])},[(a(!0),p(T,null,H(o.options,i=>(a(),p(T,{key:i.value},[i.value!==o.modelValue?(a(),p("li",{key:0,style:Q({color:i.color}),onClick:c=>o.selectOption(i)},[X($(i.value)+" ",1),o.hasIcon?(a(),p("svg",Ue,Me)):J("",!0)],12,Ee)):J("",!0)],64))),128))],2)],2)}const Re=P(Ce,[["render",Je],["__scopeId","data-v-464eb04d"]]);function qe(){const{setLocalForage:o,getLocalForage:u}=le();te(),ne();const{poolList:t,setPoolList:v,setPoolListLoading:_}=S(),f=async()=>{const e=await q("/data/pools_info.json");console.log("🚀 ~ file: usePoolList.ts:10 ~ getPoolListFromLocalJSON ~ res:",e);const n=e==null?void 0:e.lp_list;if(n){const s=[];for(let l=0;l<(n==null?void 0:n.length);l++){const d=n[l];if(!n[l].object.is_pause&&!n[l].is_closed){const m=await i(d);s.push(m)}}return console.log("🚀 ~ file: usePoolList.ts:61 ~ getPoolListFromLocalJSON ~ result:",s),s}},i=async e=>{var m,b,A;const n=(e==null?void 0:e.is_forward)===!1,s=(e==null?void 0:e.is_display_rewarder)&&((e==null?void 0:e.rewarder_display1)||(e==null?void 0:e.rewarder_display2)||(e==null?void 0:e.rewarder_display3)),l=[];if(s){const F=(A=(b=(m=e==null?void 0:e.object)==null?void 0:m.rewarder_manager)==null?void 0:b.fields)==null?void 0:A.rewarders;F==null||F.forEach((L,W)=>{var E,U,j,M;const N=re((E=L==null?void 0:L.fields)==null?void 0:E.emissions_per_second).mul(ae.pow(2,-64));e!=null&&e[`rewarder_display${W+1}`]&&N.gt(0)&&l.push({coinType:ce((M=(j=(U=L==null?void 0:L.fields)==null?void 0:U.reward_coin)==null?void 0:j.fields)==null?void 0:M.name).source_address,emissionsEveryDay:ue(N.mul(60*60*24).toString(),0)})})}return{...e,poolAddress:e==null?void 0:e.address,tokenAAddress:e==null?void 0:e.coin_a_address,tokenBAddress:e==null?void 0:e.coin_b_address,displayTokenAAddress:n?e==null?void 0:e.coin_b_address:e==null?void 0:e.coin_a_address,displayTokenBAddress:n?e==null?void 0:e.coin_a_address:e==null?void 0:e.coin_b_address,isReverse:n,tickSpacing:Number(e==null?void 0:e.tick_spacing),isClosed:e==null?void 0:e.is_closed,haveMining:s&&(l==null?void 0:l.length)>0,miningRewardList:l}},c=async e=>{console.log("🚀 ~ fetchPoolList ~ poolList:",t);try{if(!e&&t&&(t==null?void 0:t.length)>0)return t;const n=await q(`${ie.Sui.api}/v2/sui/pools_info/v3`);console.log("🚀 ~ file: usePoolList.ts:10 ~ fetchPoolList ~ res:",n);const s=n==null?void 0:n.lp_list;if(s){const l=[];for(let d=0;d<(s==null?void 0:s.length);d++){const m=s[d];if(!s[d].object.is_pause&&!s[d].is_closed){const b=await i(m);l.push(b)}}return console.log("🚀 ~ file: usePoolList.ts:61 ~ result ~ result:",l),l}}catch(n){if(console.error("🚀 ~ file: usePoolList.ts:130 ~ fetchPoolList ~ error:",n),console.log("🚀 ~ file: usePoolList.ts:130 ~ fetchPoolList ~ poolList:",t),(t==null?void 0:t.length)>0)return t;try{const s=await u(D);if(console.log("🚀 ~ file: usePoolList.ts:148 ~ fetchPoolList ~ list:",s),(s==null?void 0:s.length)>0)return s;throw new Error(`LocalForage have not ${D} data`)}catch{try{const s=await f();return console.log("🚀 ~ file: usePoolList.ts:201 ~ fetchPoolList ~ poolListFromLocalJson:",s),s||[]}catch{return[]}}}};return{getPoolList:async()=>{const e=await c();console.log("🚀 ~ getPoolList ~ pools:",e),e&&(v(e),o(D,e))}}}const ze=o=>(C("data-v-539d8bbc"),o=o(),I(),o),Ke={class:"icon-box"},He=ze(()=>r("use",{"xlink:href":"#icon-icon_refresh"},null,-1)),Ge=[He],We={__name:"pool-list-refresh-icon",setup(o){const{getPoolList:u}=qe(),t=g(!1),v=S(),_=()=>{v.setPoolListLoading(!0),t.value=!0,u(),setTimeout(()=>{t.value=!1},1e3)};return(f,i)=>(a(),p("div",{class:"pool-list-refresh-icon",onClick:_},[r("div",Ke,[(a(),p("svg",{class:y(["icon",{refresh:t.value}]),"aria-hidden":"true"},Ge,2))])]))}},Ye=P(We,[["__scopeId","data-v-539d8bbc"]]),Qe=o=>(C("data-v-a2ddc89f"),o=o(),I(),o),Xe={class:"pool-filter-block"},Ze={class:"filter-coin"},eo={class:"filter-right"},oo={class:"h5-filter-icon"},so={class:"svg-box"},lo=Qe(()=>r("use",{"xlink:href":"#icon-icon_filter"},null,-1)),no=[lo],to=V({__name:"pool-filter-block",emits:["sort","filterPoolByCoin"],setup(o,{emit:u}){const t=g([{label:"Mining"},{label:"Farming"},{label:"No incentives"}]),v=g([{label:"Option 1",value:"All"},{label:"Option 2",value:"Wormhole",color:"#72C1F7"},{label:"Option 3",value:"Celer",color:"#6F86FF"}]);g([{label:"Option 1",value:"VOL"},{label:"Option 2",value:"APR"},{label:"Option 3",value:"TVL"}]);const _=S(),f=k(()=>_),i=k(()=>f.value.incentiveTypeList),c=i.value?g(i.value):g(["Mining","Farming","No incentives"]);R(()=>[c.value],([n])=>{console.log("🚀🚀🚀 ~ file: pool-filter-block.vue:68 ~ newValue:",n),c.value=n,_.setIncentiveTypeList(n)},{immediate:!0});const h=g("All");R(()=>h.value,n=>{_.setLabel(n)});const e=g(!1);return B(()=>{document.addEventListener("click",()=>{e.value=!1})}),(n,s)=>(a(),p("div",Xe,[r("div",Ze,[w(ee,{"is-allow-ban":!0,"have-import-btn":!0})]),r("div",eo,[r("div",oo,[r("div",so,[(a(),p("svg",{class:"icon","aria-hidden":"true",onClick:s[0]||(s[0]=O(l=>e.value=!e.value,["stop"]))},no))])]),r("div",{class:y(["hover-box",e.value?"open-hover-box":""])},[w(oe),w(Ve,{modelValue:x(c),"onUpdate:modelValue":s[1]||(s[1]=l=>Z(c)?c.value=l:null),options:t.value,"icon-url":"#icon-icon_type_1",num:x(c)&&x(c).length,label:"Incentive types"},null,8,["modelValue","options","num"]),w(Re,{modelValue:h.value,"onUpdate:modelValue":s[2]||(s[2]=l=>h.value=l),options:v.value,label:"Label","icon-url":"#icon-icon_label"},null,8,["modelValue","options"])],2),w(Ye)])]))}});const ho=P(to,[["__scopeId","data-v-a2ddc89f"]]);export{ho as P,qe as u};
