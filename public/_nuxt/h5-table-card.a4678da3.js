import{a as N,o,f as s,h as n,F as b,E as I,c as y,x as c,N as H,i as p,S as M,e as R,z as W,m as B,l as h,w as S,P as V,G as l,y as C,r as P,q as E,D as q,j as G,a4 as U,p as J,k as K}from"./entry.8c071894.js";import"./index.0614c8b1.js";import{R as Q,c as X,A as Y,a as Z,T as x,b as ee,P as oe}from"./to-add.612afef3.js";/* empty css              */import{T as te}from"./token-warning-new.a38f62cd.js";import{C as se}from"./coin-img.984bd87a.js";const ne={class:"loading-table"},ae={key:1},le={class:"table-td-loading haveRadiusSkeleton"},re=N({__name:"table-loading",props:{columns:{},dataSourceLength:{}},setup(e){return(i,k)=>{const g=M;return o(),s("table",ne,[n("thead",null,[(o(!0),s(b,null,I(i.columns,r=>(o(),s(b,{key:r.title},[r.hasSort?(o(),y(Q,{key:0,"tool-tip":r==null?void 0:r.toolTip,label:r.title},null,8,["tool-tip","label"])):(o(),s("th",ae,[n("span",null,c(r.title),1)]))],64))),128))]),n("tbody",null,[(o(!0),s(b,null,I(i.dataSourceLength,r=>(o(),s("tr",{key:r},[(o(!0),s(b,null,I(i.columns,f=>(o(),s("td",{key:f.title,style:H({width:f.tdWidth})},[n("div",le,[p(g,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])],4))),128))]))),128))])])}}});const Ye=R(re,[["__scopeId","data-v-c7e1ce0f"]]),ie={class:"no-data"},ce=["src"],de=N({__name:"no-data",props:{url:{},text:{}},setup(e){return(i,k)=>(o(),s("div",ie,[n("img",{src:i.url,alt:""},null,8,ce),n("span",null,c(i.text),1)]))}});const Ze=R(de,[["__scopeId","data-v-97e4eb83"]]),pe=N({components:{TokenWarningNew:te,CoinImg:se,AddressCopyLink:X},props:{tokenInfo:{type:Object,default:null},isHaveLabel:{type:Boolean,default:!1},justifyContent:{type:String,default:"flex-end"}},setup(e,i){const{t:k,locale:g}=W();return{currentIcon:B(()=>{var f,m;return((f=e.tokenInfo)==null?void 0:f.logo_url)||((m=e.tokenInfo)==null?void 0:m.logoURI)||""}),t:k}}});const ue={class:"coin-pair-container"},_e={class:"apr-text new-common-tooltip-style"},ke={class:"logo-token-warning"},fe={class:"symbol-label-name"},he={class:"symbol-label"},me={class:"symbol"},ye={class:"name"};function ge(e,i,k,g,r,f){const m=h("AddressCopyLink"),T=h("CoinImg"),u=h("TokenWarningNew"),_=V;return o(),s("div",ue,[p(_,{placement:"topLeft","overlay-class-name":"apr-tips-tooltip"},{title:S(()=>{var d;return[n("div",_e,[p(m,{address:e.tokenInfo&&((d=e.tokenInfo)==null?void 0:d.address),"current-explorer-type":"coin"},null,8,["address"])])]}),default:S(()=>{var d,v,L,$,w,A,a;return[n("div",{class:"show-token",style:H({justifyContent:e.justifyContent})},[n("div",ke,[(d=e.tokenInfo)!=null&&d.address?(o(),y(T,{key:0,url:e.currentIcon,size:"36px"},null,8,["url"])):l("",!0),p(u,{token:e.tokenInfo,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),n("div",fe,[n("div",he,[n("p",me,c(e.tokenInfo?(v=e.tokenInfo)==null?void 0:v.symbol:e.$t("modal.selectTokenModalTitle")),1),e.isHaveLabel&&((L=e.tokenInfo)!=null&&L.labels)&&(($=e.tokenInfo)!=null&&$.labels[0])?(o(),s("div",{key:0,class:C(["label",(w=e.tokenInfo)==null?void 0:w.labels[0]])},c((A=e.tokenInfo)==null?void 0:A.labels[0]),3)):l("",!0)]),n("p",ye,c((a=e.tokenInfo)==null?void 0:a.name),1)])],4)]}),_:1})])}const ve=R(pe,[["render",ge],["__scopeId","data-v-20395827"]]),be=N({components:{StatsAprTips:Y,TokenBlock:ve,RewardCoin:Z,ToSwap:x,ToAdd:ee},props:{columns:{type:Object,default:()=>null},dataSource:{type:Object,default:()=>null},loading:{type:Boolean,default:!1},dataSourceLength:{type:Number,default:0},sortInfo:{type:Object,default:()=>null},h5Title:{type:String,default:""},pageName:{type:String,default:""},keyField:{type:String,default:"address"},itemSize:{type:Number,default:null},cardAction:{type:String,default:""}},setup(e,i){const k=B(()=>e.loading?T(e.dataSourceLength):e.dataSource),g=P(!1),r=u=>{if(u.title==e.sortInfo.label)return;const _=u.title!==e.sortInfo.label||e.sortInfo.sort=="asc"?"desc":"asc";i.emit("changeSort",{label:u.title,sort:_})},f=P(null);E(()=>{window.scroller=f.value,document.addEventListener("click",()=>{g.value=!1})});const m=B(()=>(console.log("🚀 ~ list ~ pageList.value:",k.value),k.value.map(_=>Object.assign({},{random:Math.random()},_))));function T(u){const _=[];for(let d=0;d<u;d++){const v={};v[e.keyField]=`${e.keyField}_${d}`,_.push(v)}return _}return{list:m,changeTableSort:r,pageList:k,isOpenList:g}}});const O=e=>(J("data-v-8f3d32ce"),e=e(),K(),e),we={class:"h5-table-card"},Se={class:"title-sort"},Ie={class:"tit"},Te={key:0,class:"sort-box"},$e=O(()=>n("span",{class:"tit"},"Sort",-1)),Ce=O(()=>n("use",{"xlink:href":"#icon-icon_arrow"},null,-1)),Le=[Ce],Ae=["onClick"],Ne={key:0},Re={key:0,class:"card"},je={key:0,class:"tit-box"},Be={class:"title"},Oe={class:"apr-text new-common-tooltip-style"},ze=O(()=>n("svg",{"aria-hidden":"true",class:"tips-icon"},[n("use",{"xlink:href":"#icon-icon_tips"})],-1)),De={key:1,class:"value-box"},Fe={key:0,class:"value"},Pe={key:2},He={key:0,class:"h5-actions"},Me={key:1,class:"loading-card"},Ve={key:0,class:"tit"},We={class:"avatar-box"},Ee={key:1,class:"row"};function qe(e,i,k,g,r,f){const m=V,T=oe,u=h("StatsAprTips"),_=h("TokenBlock"),d=h("RewardCoin"),v=h("ToSwap"),L=h("ToAdd"),$=U,w=M,A=h("RecycleScroller");return o(),s("div",we,[p(A,{ref:"scroller",class:"scroller",items:e.list,"item-size":e.itemSize,"page-mode":"",full:"",page:"",prerender:20,buffer:700,"key-field":e.keyField},{before:S(()=>{var a;return[n("div",Se,[n("span",Ie,c(e.h5Title),1),e.sortInfo?(o(),s("div",Te,[n("div",{class:"currentSort",onClick:i[0]||(i[0]=q(t=>e.isOpenList=!e.isOpenList,["stop"]))},[$e,n("span",null,c((a=e.sortInfo)==null?void 0:a.label),1),(o(),s("svg",{class:C([e.isOpenList?"asc":"desc","sort-icon"]),"aria-hidden":"true"},Le,2))]),n("div",{class:C(["downDown-list",e.isOpenList?"show-downDown-list":""])},[(o(!0),s(b,null,I(e.columns,t=>(o(),s("div",{key:t.title,class:"item",onClick:j=>e.changeTableSort(t)},[t!=null&&t.hasSort?(o(),s("div",Ne,[n("span",null,c(t.title),1)])):l("",!0)],8,Ae))),128))],2)])):l("",!0)])]}),default:S(({item:a})=>[e.loading?(o(),s("div",Me,[(o(!0),s(b,null,I(e.columns,t=>(o(),s("div",{key:t.title,class:"loading-card-row"},[t.title=="Pools"||t.title=="Token"?(o(),s("div",Ve,[n("div",We,[p($,{active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"}),t.title=="Pools"?(o(),y($,{key:0,active:"",size:"large",paragraph:!1,class:"upgrade-avatar-skeleton"})):l("",!0)]),p(w,{class:"upgrade-tit-skeleton",loading:!0,active:"",paragraph:!1})])):l("",!0),!t.isNotShowTitle||t.isNotShowTitle&&(t.title=="Actions"||t.title=="Action")?(o(),s("div",Ee,[p(w,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1}),p(w,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])):l("",!0)]))),128))])):(o(),s("div",Re,[(o(!0),s(b,null,I(e.columns,t=>{var j,z,D,F;return o(),s("div",{key:t.title,class:C(["card-row",e.pageName=="pools"?((j=a.miningRewardList)==null?void 0:j.length)>0?"have-reward-card-row":"no-reward-card-row":"not-pools-card-row"])},[!t.isNotShowTitle&&(t.component=="reward-coin"&&((z=a.miningRewardList)==null?void 0:z.length)>0||t.component!=="reward-coin")?(o(),s("div",je,[n("span",Be,[G(c(t.title)+" ",1),t.toolTip?(o(),y(m,{key:0,placement:"topRight","overlay-class-name":"apr-tips-tooltip"},{title:S(()=>[n("div",Oe,c(t.toolTip),1)]),default:S(()=>[ze]),_:2},1024)):l("",!0)])])):l("",!0),t.component=="reward-coin"&&((D=a.miningRewardList)==null?void 0:D.length)>0||t.component!=="reward-coin"?(o(),s("div",De,[!t.component&&t.value!=="priceChangeDisplay"?(o(),s("span",Fe,c(a[t.value]||"$0"),1)):l("",!0),t.value=="priceChangeDisplay"?(o(),s("span",{key:1,class:C(["value",(F=a[t.value])!=null&&F.includes("-")?"redecue-change-price":"add-change-price"])},c(a[t.value]),3)):(o(),s("div",Pe,[t.component=="pool-name-block"?(o(),y(T,{key:0,"pool-info":a},null,8,["pool-info"])):l("",!0),t.component=="apr-tips"?(o(),y(u,{key:1,"pool-info":a},null,8,["pool-info"])):l("",!0),t.component=="token-block"?(o(),y(_,{key:2,"token-info":a,"justify-content":"flex-start","is-have-label":!0},null,8,["token-info"])):l("",!0),t.component=="reward-coin"?(o(),y(d,{key:3,"reward-list":a.miningRewardList||[]},null,8,["reward-list"])):l("",!0)]))])):l("",!0)],2)}),128)),e.cardAction=="swap-add"?(o(),s("div",He,[p(v,{"from-coin-address":a.tokenAAddress,"to-coin-address":a.tokenBAddress},null,8,["from-coin-address","to-coin-address"]),p(L,{"pool-address":a.address},null,8,["pool-address"])])):l("",!0)]))]),_:1},8,["items","item-size","key-field"])])}const xe=R(be,[["render",qe],["__scopeId","data-v-8f3d32ce"]]);export{xe as H,Ze as N,Ye as T,ve as a};
