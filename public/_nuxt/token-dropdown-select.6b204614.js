import{a as g,z as h,m as l,e as I,l as y,o as s,f as t,i,h as c,x as k,G as u,y as v,a4 as b,S as w,p as C,k as S}from"./entry.acdca605.js";import"./index.8f6ad64c.js";import{C as L}from"./coin-img-warning.a4f6c2fb.js";const $=g({components:{CoinImgWarning:L},props:{tokenInfo:{type:Object,default:null},hasArrow:{type:Boolean,default:!0},hasOpcity:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},setup(o,a){const{t:r,locale:m}=h(),d=l(()=>{var e,n;return((e=o.tokenInfo)==null?void 0:e.labels)&&((n=o.tokenInfo)==null?void 0:n.labels[0])||""}),p=l(()=>{var e;return(e=o.tokenInfo)==null?void 0:e.decimals});return{currentIcon:l(()=>{var e,n;return((e=o.tokenInfo)==null?void 0:e.logo_url)||((n=o.tokenInfo)==null?void 0:n.logoURI)||""}),coinLabels:d,t:r,coinDecimals:p}}});const B=o=>(C("data-v-b275f172"),o=o(),S(),o),z={key:0,class:"show-token"},A={class:"name-labels"},D={class:"name"},T={key:0,class:"labels"},N={key:1,class:"loading-token"},O={key:2,class:"icon","aria-hidden":"true"},V=B(()=>c("use",{"xlink:href":"#icon-icon_on"},null,-1)),W=[V];function j(o,a,r,m,d,p){var f;const _=y("CoinImgWarning"),e=b,n=w;return s(),t("div",{class:v(["token-dropdown-select",[o.hasArrow?"":"nohands",o.hasOpcity&&!o.isLoading?"left-opcity":""].join(" ")]),onClick:a[0]||(a[0]=E=>o.hasArrow&&!o.isLoading?o.$emit("onSelect"):"")},[o.isLoading?(s(),t("div",N,[i(e,{size:"small",paragraph:!1}),i(n,{loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})])):(s(),t("div",z,[i(_,{"token-info":o.tokenInfo,"coin-size":"28px","warning-coin-size":"12px"},null,8,["token-info"]),c("div",A,[c("p",D,k(o.tokenInfo?(f=o.tokenInfo)==null?void 0:f.symbol:o.$t("modal.selectTokenModalTitle")),1),o.coinLabels?(s(),t("p",T,k(o.coinLabels),1)):u("",!0)])])),o.hasArrow?(s(),t("svg",O,W)):u("",!0)],2)}const U=I($,[["render",j],["__scopeId","data-v-b275f172"]]);export{U as T};
