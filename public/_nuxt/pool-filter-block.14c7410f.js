import{a as A,e as C,o as p,f as _,h as r,z as w,v as O,m as $,r as y,y as N,T as J,M as Z,ff as Q,K as M,F as E,s as X,i as L,p as P,k as I,H as ee,j as oe,x as q,D as H,u as F,a0 as se}from"./entry.c24f8c3e.js";import{F as le}from"./filter-pool-by-coin.cab74c55.js";import{I as ne}from"./is-all-pool.569c7a43.js";import{_ as ie}from"./icon-selected_3x.09e9a6f0.js";import{u as T}from"./pool.199b0e71.js";import{u as te,f as re}from"./fetchFun.18a04f68.js";import{u as ce}from"./useToken.d41c8cee.js";import{g as ue,h as x,P as pe,aH as K,S as _e}from"./index.64581be1.js";import{D as G}from"./decimal.0bdeb344.js";import{s as W}from"./pool.0b8c7a86.js";const de=A({name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:""}},setup(o,t){return{toggleSelect:()=>{t.emit("update:modelValue",!o.modelValue)}}}});const fe={class:"checkbox-button"},ve={class:"label"};function ae(o,t,d,m,f,v){return p(),_("div",{class:"checkbox-container",onClick:t[0]||(t[0]=(...c)=>o.toggleSelect&&o.toggleSelect(...c))},[r("div",fe,[r("img",{class:w({show:o.modelValue}),src:ie},null,2)]),r("span",ve,O(o.label),1)])}const he=C(de,[["render",ae],["__scopeId","data-v-c6e355bc"]]),me=A({name:"Dropdown",components:{CheckBox:he},props:{options:{type:Array,required:!0},modelValue:{type:Array,required:!0},label:{type:String,default:""},iconUrl:{type:String,default:""},num:{type:[String,Number],default:""}},setup(o,t){console.log("🚀🚀🚀 ~ file: dropdown-checkbox.vue:112 ~ setup ~ props.options:",o.options);const d=T(),m=$(()=>d),f=$(()=>m.value.isOpenSelectLabel),{setIsOpenSelectType:v,setIsOpenSelectLabel:c}=d,u=y(null);y(null);const g=()=>{v(!1),c(!f.value)},b=$(()=>{const s=o.modelValue;return console.log("🚀🚀🚀 ~ file: dropdown-checkbox.vue:65 ~ optionList ~ modelValueArr:",s),o.options.map(i=>({...i,value:s==null?void 0:s.includes(i.label)}))}),e=s=>{const i={};b.value.forEach(a=>{a.value&&(i[a.label]=!0)}),i[s.label]=s.value;const l=Object.keys(i).filter(a=>i[a]);console.log("🚀 ~ file: dropdownCheckbox.vue:83 ~ selectOption ~ newValue:",l),t.emit("update:modelValue",l)},n=s=>{c(!1),v(!1)};return N(()=>{document.addEventListener("click",n)}),J(()=>{document.removeEventListener("click",n)}),{isOpen:f,selectedOption:u,selectOption:e,toggleDropdown:g,optionList:b}}});const ge=o=>(P("data-v-07de3997"),o=o(),I(),o),ye={class:"current-info"},be={class:"icon-box"},ke={class:"icon","aria-hidden":"true"},we=["xlink:href"],Se={class:"label"},$e=ge(()=>r("use",{"xlink:href":"#icon-icon_on"},null,-1)),Le=[$e],Oe={key:1,class:"num"},Ve=["onClick"];function Ce(o,t,d,m,f,v){const c=Z("CheckBox");return p(),_("div",{class:w(["dropdown-container",{open:o.isOpen}])},[r("div",{class:"dropdown-toggle",onClick:t[0]||(t[0]=M((...u)=>o.toggleDropdown&&o.toggleDropdown(...u),["stop"]))},[Q(o.$slots,"toggle",{},()=>[r("div",ye,[r("div",be,[(p(),_("svg",ke,[r("use",{"xlink:href":o.iconUrl},null,8,we)]))]),r("span",Se,O(o.label),1)])],!0),o.num?(p(),_("div",Oe,O(o.num),1)):(p(),_("svg",{key:0,"aria-hidden":"true",class:w(["dropdown-icon",{open:o.isOpen}])},Le,2))]),r("ul",{class:w(["dropdown-list",{open:o.isOpen}])},[(p(!0),_(E,null,X(o.optionList,u=>(p(),_("li",{key:u.value,onClick:g=>o.selectOption(u)},[L(c,{modelValue:u.value,"onUpdate:modelValue":g=>u.value=g,label:u.label},null,8,["modelValue","onUpdate:modelValue","label"])],8,Ve))),128))],2)],2)}const Ae=C(me,[["render",Ce],["__scopeId","data-v-07de3997"]]),Pe=A({name:"Dropdown",props:{options:{type:Array,required:!0},modelValue:{type:[String,Number],default:null},label:{type:String,default:"Label"},hasIcon:{type:Boolean,default:!1},iconUrl:{type:String,default:""}},setup(o,t){console.log("🚀🚀🚀 ~ file: dropdown.vue:55 ~ setup ~ props:",o);const d=T(),m=$(()=>d),f=$(()=>m.value.isOpenSelectType),{setIsOpenSelectType:v,setIsOpenSelectLabel:c}=d,u=y(null),g=()=>{v(!f.value),c(!1)},b=s=>{u.value=s,t.emit("update:modelValue",s.value),v(!1)},e=()=>{u.value=o.options.find(s=>s.value===o.modelValue)||{label:"",value:null}},n=s=>{v(!1),c(!1)};return N(()=>{document.addEventListener("click",n),e()}),J(()=>{document.removeEventListener("click",n)}),{isOpen:f,selectedOption:u,selectOption:b,toggleDropdown:g}}});const Y=o=>(P("data-v-cf76a60c"),o=o(),I(),o),Ie={class:"current-info"},Te={class:"icon-box"},Be={class:"icon","aria-hidden":"true"},De=["xlink:href"],Fe={class:"label"},xe={class:"value"},Ee=Y(()=>r("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ne=[Ee],Me=["onClick"],Ue={key:0,"aria-hidden":"true",class:"icon"},Re=Y(()=>r("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),je=[Re];function ze(o,t,d,m,f,v){return p(),_("div",{class:w(["dropdown-container",{open:o.isOpen}])},[r("div",{class:"dropdown-toggle",onClick:t[0]||(t[0]=M((...c)=>o.toggleDropdown&&o.toggleDropdown(...c),["stop"]))},[Q(o.$slots,"toggle",{},()=>{var c;return[r("div",Ie,[r("div",Te,[(p(),_("svg",Be,[r("use",{"xlink:href":o.iconUrl},null,8,De)]))]),r("span",Fe,O(o.label),1),r("span",xe,O((c=o.selectedOption)==null?void 0:c.value),1)])]},!0),(p(),_("svg",{"aria-hidden":"true",class:w(["dropdown-icon",{open:o.isOpen}])},Ne,2))]),r("ul",{class:w(["dropdown-list",{open:o.isOpen}])},[(p(!0),_(E,null,X(o.options,c=>(p(),_(E,{key:c.value},[c.value!==o.modelValue?(p(),_("li",{key:0,style:ee({color:c.color}),onClick:u=>o.selectOption(c)},[oe(O(c.value)+" ",1),o.hasIcon?(p(),_("svg",Ue,je)):q("",!0)],12,Me)):q("",!0)],64))),128))],2)],2)}const qe=C(Pe,[["render",ze],["__scopeId","data-v-cf76a60c"]]);function He(){const o=te();ce();const{poolList:t,setPoolList:d,setPoolListLoading:m}=T(),f=(e,n)=>!!_e(W(e),W(n)),v=async e=>{var a,k,B;const n=(e==null?void 0:e.is_forward)===!1,s=(e==null?void 0:e.is_display_rewarder)&&((e==null?void 0:e.rewarder_display1)||(e==null?void 0:e.rewarder_display2)||(e==null?void 0:e.rewarder_display3)),i=[];if(s){const S=(B=(k=(a=e==null?void 0:e.object)==null?void 0:a.rewarder_manager)==null?void 0:k.fields)==null?void 0:B.rewarders;S==null||S.forEach((h,D)=>{var U,R,j,z;const V=x((U=h==null?void 0:h.fields)==null?void 0:U.emissions_per_second).mul(G.pow(2,-64));e!=null&&e[`rewarder_display${D+1}`]&&V.gt(0)&&i.push({coinType:pe((z=(j=(R=h==null?void 0:h.fields)==null?void 0:R.reward_coin)==null?void 0:j.fields)==null?void 0:z.name).source_address,emissionsEveryDay:K(V.mul(60*60*24).toString(),0)})})}return{...e,poolAddress:e==null?void 0:e.address,tokenAAddress:e==null?void 0:e.coin_a_address,tokenBAddress:e==null?void 0:e.coin_b_address,displayTokenAAddress:n?e==null?void 0:e.coin_b_address:e==null?void 0:e.coin_a_address,displayTokenBAddress:n?e==null?void 0:e.coin_a_address:e==null?void 0:e.coin_b_address,isReverse:n,tickSpacing:Number(e==null?void 0:e.tick_spacing),isClosed:e==null?void 0:e.is_closed,haveMining:s&&(i==null?void 0:i.length)>0,miningRewardList:i}},c=async(e,n)=>{const s=e==null?void 0:e.poolAddress,i=f(e==null?void 0:e.coinTypeA,e==null?void 0:e.coinTypeB),l=n[s],a=l&&(l==null?void 0:l.is_show_rewarder)&&((l==null?void 0:l.show_rewarder_1)||(l==null?void 0:l.show_rewarder_2)||(l==null?void 0:l.show_rewarder_3)),k=[];if(a){const S=e==null?void 0:e.rewarder_infos;S==null||S.forEach((h,D)=>{const V=x(h==null?void 0:h.emissions_per_second).mul(G.pow(2,-64));l!=null&&l[`show_rewarder_${D+1}`]&&V.gt(0)&&k.push({coinType:h==null?void 0:h.coinAddress,emissionsEveryDay:K(V.mul(60*60*24).toString(),0)})})}return{poolAddress:s,tokenAAddress:e==null?void 0:e.coinTypeA,tokenBAddress:e==null?void 0:e.coinTypeB,displayTokenAAddress:i?e==null?void 0:e.coinTypeB:e==null?void 0:e.coinTypeA,displayTokenBAddress:i?e==null?void 0:e.coinTypeA:e==null?void 0:e.coinTypeB,isReverse:i,tickSpacing:e.tickSpacing,isClosed:(l==null?void 0:l.is_closed)||!1,haveMining:a,miningRewardList:k,fee:x(e==null?void 0:e.fee_rate).div(Math.pow(10,6)).toString()}},u=async e=>{console.log("🚀 ~ fetchPoolList ~ poolList:",t);try{if(!e&&t&&(t==null?void 0:t.length)>0)return t;const n=await re(`${ue.Sui.api}/v2/sui/pools_info/v3`);console.log("🚀 ~ file: usePoolList.ts:10 ~ fetchPoolList ~ res:",n);const s=n==null?void 0:n.lp_list;if(s){const i=[];for(let l=0;l<(s==null?void 0:s.length);l++){const a=s[l];if(!s[l].object.is_pause&&!s[l].is_closed){const k=await v(a);i.push(k)}}return console.log("🚀 ~ file: usePoolList.ts:61 ~ result ~ result:",i),i}}catch(n){if(console.error("🚀 ~ file: usePoolList.ts:130 ~ fetchPoolList ~ error:",n),t)return t;try{return await g()||[]}catch(s){return console.error("🚀 ~ file: usePoolList.ts:133 ~ fetchPoolList ~ e:",s),[]}}},g=async()=>{try{const e=await o.clmmSdk.CetusConfig.getClmmPoolConfigs()||[],n=Object.fromEntries(e.map(i=>[i==null?void 0:i.pool_address,i])),s=await o.clmmSdk.Pool.getPools([],0,9999);if(s){const i=[];for(let l=0;l<(s==null?void 0:s.length);l++){const a=s[l],k=await c(a,n);i.push(k)}return i}}catch(e){return console.error("🚀 ~ file: usePoolList.ts:157 ~ getPoolListFromContract ~ error:",e),[]}};return{getPoolList:async()=>{m(!0);const e=await u();console.log("🚀 ~ getPoolList ~ pools:",e),e&&d(e)}}}const Ke=o=>(P("data-v-e8cc00a3"),o=o(),I(),o),Ge={class:"icon-box"},We=Ke(()=>r("use",{"xlink:href":"#icon-icon_refresh"},null,-1)),Je=[We],Qe={__name:"pool-list-refresh-icon",setup(o){const{getPoolList:t}=He(),d=y(!1),m=()=>{d.value=!0,t(),setTimeout(()=>{d.value=!1},1e3)};return(f,v)=>(p(),_("div",{class:"pool-list-refresh-icon",onClick:m},[r("div",Ge,[(p(),_("svg",{class:w(["icon",{refresh:d.value}]),"aria-hidden":"true"},Je,2))])]))}},Xe=C(Qe,[["__scopeId","data-v-e8cc00a3"]]),Ye=o=>(P("data-v-5348e356"),o=o(),I(),o),Ze={class:"pool-filter-block"},eo={class:"filter-coin"},oo={class:"filter-right"},so={class:"h5-filter-icon"},lo=Ye(()=>r("use",{"xlink:href":"#icon-icon_filter"},null,-1)),no=[lo],io=A({__name:"pool-filter-block",emits:["sort","filterPoolByCoin"],setup(o,{emit:t}){const d=y([{label:"Mining"},{label:"Farming"},{label:"No incentives"}]),m=y([{label:"Option 1",value:"All"},{label:"Option 2",value:"Wormhole",color:"#72C1F7"},{label:"Option 3",value:"Celer",color:"#6F86FF"}]);y([{label:"Option 1",value:"VOL"},{label:"Option 2",value:"APR"},{label:"Option 3",value:"TVL"}]);const f=T(),v=$(()=>f),c=$(()=>v.value.incentiveTypeList),u=c.value?y(c.value):y(["Mining","Farming","No incentives"]);H(()=>[u.value],([e])=>{console.log("🚀🚀🚀 ~ file: pool-filter-block.vue:68 ~ newValue:",e),u.value=e,f.setIncentiveTypeList(e)},{immediate:!0});const g=y("All");H(()=>g.value,e=>{f.setLabel(e)});const b=y(!1);return N(()=>{document.addEventListener("click",()=>{b.value=!1})}),(e,n)=>(p(),_("div",Ze,[r("div",eo,[L(le,{"is-allow-ban":!0,"have-import-btn":!0})]),r("div",oo,[r("div",so,[(p(),_("svg",{class:"icon","aria-hidden":"true",onClick:n[0]||(n[0]=M(s=>b.value=!b.value,["stop"]))},no))]),r("div",{class:w(["hover-box",b.value?"open-hover-box":""])},[L(ne),L(Ae,{modelValue:F(u),"onUpdate:modelValue":n[1]||(n[1]=s=>se(u)?u.value=s:null),options:d.value,"icon-url":"#icon-icon_type_1",num:F(u)&&F(u).length,label:"Incentive types"},null,8,["modelValue","options","num"]),L(qe,{modelValue:g.value,"onUpdate:modelValue":n[2]||(n[2]=s=>g.value=s),options:m.value,label:"Label","icon-url":"#icon-icon_label"},null,8,["modelValue","options"])],2),L(Xe)])]))}});const mo=C(io,[["__scopeId","data-v-5348e356"]]);export{mo as P,He as u};
