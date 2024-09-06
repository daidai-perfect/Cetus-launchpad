import{a as A,o,f as s,h as n,F as b,s as T,c as v,v as d,H,i as h,S as M,e as N,l as W,m as j,M as k,w,L as V,x as i,z as I,r as F,y as P,K as E,j as K,p as U,k as q}from"./entry.a7bc8957.js";import"./index.8c3bc3bd.js";import{R as G,c as J,A as Q,a as X,T as Y,b as Z,P as x}from"./to-add.cbe29d3a.js";/* empty css              */import{T as ee}from"./token-warning-new.9a4437cf.js";import{C as oe}from"./coin-img.b6b62959.js";const te={class:"loading-table"},ne={key:1},se={class:"table-td-loading haveRadiusSkeleton"},ae=A({__name:"table-loading",props:{columns:{},dataSourceLength:{}},setup(e){return(r,_)=>{const y=M;return o(),s("table",te,[n("thead",null,[(o(!0),s(b,null,T(r.columns,l=>(o(),s(b,{key:l.title},[l.hasSort?(o(),v(G,{key:0,"tool-tip":l==null?void 0:l.toolTip,label:l.title},null,8,["tool-tip","label"])):(o(),s("th",ne,[n("span",null,d(l.title),1)]))],64))),128))]),n("tbody",null,[(o(!0),s(b,null,T(r.dataSourceLength,l=>(o(),s("tr",{key:l},[(o(!0),s(b,null,T(r.columns,f=>(o(),s("td",{key:f.title,style:H({width:f.tdWidth})},[n("div",se,[h(y,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])],4))),128))]))),128))])])}}});const Ue=N(ae,[["__scopeId","data-v-c7e1ce0f"]]),le={class:"no-data"},re=["src"],ie=A({__name:"no-data",props:{url:{},text:{}},setup(e){return(r,_)=>(o(),s("div",le,[n("img",{src:r.url,alt:""},null,8,re),n("span",null,d(r.text),1)]))}});const qe=N(ie,[["__scopeId","data-v-97e4eb83"]]),ce=A({components:{TokenWarningNew:ee,CoinImg:oe,AddressCopyLink:J},props:{tokenInfo:{type:Object,default:null},isHaveLabel:{type:Boolean,default:!1},justifyContent:{type:String,default:"flex-end"}},setup(e,r){const{t:_,locale:y}=W();return{currentIcon:j(()=>{var f,m;return((f=e.tokenInfo)==null?void 0:f.logo_url)||((m=e.tokenInfo)==null?void 0:m.logoURI)||""}),t:_}}});const de={class:"coin-pair-container"},pe={class:"apr-text new-common-tooltip-style"},ue={class:"logo-token-warning"},_e={class:"symbol-label-name"},fe={class:"symbol-label"},ke={class:"symbol"},me={class:"name"};function he(e,r,_,y,l,f){const m=k("AddressCopyLink"),S=k("CoinImg"),p=k("TokenWarningNew"),u=V;return o(),s("div",de,[h(u,{placement:"topLeft","overlay-class-name":"apr-tips-tooltip"},{title:w(()=>{var c;return[n("div",pe,[h(m,{address:e.tokenInfo&&((c=e.tokenInfo)==null?void 0:c.address),"current-explorer-type":"coin"},null,8,["address"])])]}),default:w(()=>{var c,g,$,L,C,a,t;return[n("div",{class:"show-token",style:H({justifyContent:e.justifyContent})},[n("div",ue,[(c=e.tokenInfo)!=null&&c.address?(o(),v(S,{key:0,url:e.currentIcon,size:"36px"},null,8,["url"])):i("",!0),h(p,{token:e.tokenInfo,"style-params":{width:"16px",height:"16px"}},null,8,["token"])]),n("div",_e,[n("div",fe,[n("p",ke,d(e.tokenInfo?(g=e.tokenInfo)==null?void 0:g.symbol:e.$t("modal.selectTokenModalTitle")),1),e.isHaveLabel&&(($=e.tokenInfo)!=null&&$.labels)&&((L=e.tokenInfo)!=null&&L.labels[0])?(o(),s("div",{key:0,class:I(["label",(C=e.tokenInfo)==null?void 0:C.labels[0]])},d((a=e.tokenInfo)==null?void 0:a.labels[0]),3)):i("",!0)]),n("p",me,d((t=e.tokenInfo)==null?void 0:t.name),1)])],4)]}),_:1})])}const ye=N(ce,[["render",he],["__scopeId","data-v-20395827"]]),ge=A({components:{StatsAprTips:Q,TokenBlock:ye,RewardCoin:X,ToSwap:Y,ToAdd:Z},props:{columns:{type:Object,default:()=>null},dataSource:{type:Object,default:()=>null},loading:{type:Boolean,default:!1},dataSourceLength:{type:Number,default:0},sortInfo:{type:Object,default:()=>null},h5Title:{type:String,default:""},pageName:{type:String,default:""},keyField:{type:String,default:"address"},itemSize:{type:Number,default:null},cardAction:{type:String,default:""}},setup(e,r){const _=j(()=>e.loading?S(e.dataSourceLength):e.dataSource),y=F(!1),l=p=>{if(p.title==e.sortInfo.label)return;const u=p.title!==e.sortInfo.label||e.sortInfo.sort=="asc"?"desc":"asc";r.emit("changeSort",{label:p.title,sort:u})},f=F(null);P(()=>{window.scroller=f.value,document.addEventListener("click",()=>{y.value=!1})});const m=j(()=>(console.log("🚀 ~ list ~ pageList.value:",_.value),_.value.map(u=>Object.assign({},{random:Math.random()},u))));function S(p){const u=[];for(let c=0;c<p;c++){const g={};g[e.keyField]=`${e.keyField}_${c}`,u.push(g)}return u}return{list:m,changeTableSort:l,pageList:_,isOpenList:y}}});const B=e=>(U("data-v-798451d8"),e=e(),q(),e),ve={class:"h5-table-card"},be={class:"title-sort"},we={class:"tit"},Se={key:0,class:"sort-box"},Ie=B(()=>n("span",{class:"tit"},"Sort",-1)),Te=B(()=>n("use",{"xlink:href":"#icon-icon_arrow"},null,-1)),$e=[Te],Le=["onClick"],Ce={key:0},Ae={class:"card"},Ne={key:0,class:"tit-box"},Re={class:"title"},je={class:"apr-text new-common-tooltip-style"},Be=B(()=>n("svg",{"aria-hidden":"true",class:"tips-icon"},[n("use",{"xlink:href":"#icon-icon_tips"})],-1)),Oe={key:1,class:"value"},ze={key:2,class:"value-box"},De={key:1},Fe={key:0,class:"h5-actions"};function He(e,r,_,y,l,f){const m=V,S=M,p=x,u=k("StatsAprTips"),c=k("TokenBlock"),g=k("RewardCoin"),$=k("ToSwap"),L=k("ToAdd"),C=k("RecycleScroller");return o(),s("div",ve,[h(C,{ref:"scroller",class:"scroller",items:e.list,"item-size":e.itemSize,"page-mode":"",full:"",page:"",prerender:20,buffer:700,"key-field":e.keyField},{before:w(()=>{var a;return[n("div",be,[n("span",we,d(e.h5Title),1),e.sortInfo?(o(),s("div",Se,[n("div",{class:"currentSort",onClick:r[0]||(r[0]=E(t=>e.isOpenList=!e.isOpenList,["stop"]))},[Ie,n("span",null,d((a=e.sortInfo)==null?void 0:a.label),1),(o(),s("svg",{class:I([e.isOpenList?"asc":"desc","sort-icon"]),"aria-hidden":"true"},$e,2))]),n("div",{class:I(["downDown-list",e.isOpenList?"show-downDown-list":""])},[(o(!0),s(b,null,T(e.columns,t=>(o(),s("div",{key:t.title,class:"item",onClick:R=>e.changeTableSort(t)},[t!=null&&t.hasSort?(o(),s("div",Ce,[n("span",null,d(t.title),1)])):i("",!0)],8,Le))),128))],2)])):i("",!0)])]}),default:w(({item:a})=>[n("div",Ae,[(o(!0),s(b,null,T(e.columns,t=>{var R,O,z,D;return o(),s("div",{key:t.title,class:I(["card-row",e.pageName=="pools"?((R=a.miningRewardList)==null?void 0:R.length)>0?"have-reward-card-row":"no-reward-card-row":"not-pools-card-row"])},[!t.isNotShowTitle&&(t.component=="reward-coin"&&((O=a.miningRewardList)==null?void 0:O.length)>0||t.component!=="reward-coin")?(o(),s("div",Ne,[n("span",Re,[K(d(t.title)+" ",1),t.toolTip?(o(),v(m,{key:0,placement:"topRight","overlay-class-name":"apr-tips-tooltip"},{title:w(()=>[n("div",je,d(t.toolTip),1)]),default:w(()=>[Be]),_:2},1024)):i("",!0)])])):i("",!0),!t.isNotShowTitle&&e.loading&&t.component!=="reward-coin"?(o(),s("div",Oe,[h(S,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])):t.component=="reward-coin"&&((z=a.miningRewardList)==null?void 0:z.length)>0||t.component!=="reward-coin"?(o(),s("div",ze,[t.component?(o(),s("div",De,[t.component=="pool-name-block"?(o(),v(p,{key:0,"pool-info":a},null,8,["pool-info"])):i("",!0),t.component=="apr-tips"?(o(),v(u,{key:1,"pool-info":a},null,8,["pool-info"])):i("",!0),t.component=="token-block"?(o(),v(c,{key:2,"token-info":a,"justify-content":"flex-start","is-have-label":!0},null,8,["token-info"])):i("",!0),t.component=="reward-coin"?(o(),v(g,{key:3,"reward-list":a.miningRewardList||[]},null,8,["reward-list"])):i("",!0)])):(o(),s("span",{key:0,class:I(["value",t.value=="priceChangeDisplay"?(D=a[t.value])!=null&&D.includes("-")?"redecue-change-price":"add-change-price":""])},d(a[t.value]||"$0"),3))])):i("",!0)],2)}),128)),e.cardAction=="swap-add"?(o(),s("div",Fe,[h($,{"from-coin-address":a.tokenAAddress,"to-coin-address":a.tokenBAddress},null,8,["from-coin-address","to-coin-address"]),h(L,{"pool-address":a.address},null,8,["pool-address"])])):i("",!0)])]),_:1},8,["items","item-size","key-field"])])}const Ge=N(ge,[["render",He],["__scopeId","data-v-798451d8"]]);export{Ge as H,qe as N,Ue as T,ye as a};
