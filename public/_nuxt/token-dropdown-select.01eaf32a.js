import{a as g,z as h,m as l,e as I,l as v,o as s,f as t,i,h as c,x as m,G as u,y,a4 as b,S as w,p as C,k as S}from"./entry.ec51292c.js";import"./index.ef83fc04.js";import{C as L}from"./coin-img-warning.b8d58195.js";const $=g({components:{CoinImgWarning:L},props:{tokenInfo:{type:Object,default:null},hasArrow:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1}},setup(o,a){const{t:r,locale:f}=h(),d=l(()=>{var e,n;return((e=o.tokenInfo)==null?void 0:e.labels)&&((n=o.tokenInfo)==null?void 0:n.labels[0])||""}),p=l(()=>{var e;return(e=o.tokenInfo)==null?void 0:e.decimals});return{currentIcon:l(()=>{var e,n;return((e=o.tokenInfo)==null?void 0:e.logo_url)||((n=o.tokenInfo)==null?void 0:n.logoURI)||""}),coinLabels:d,t:r,coinDecimals:p}}});const z=o=>(C("data-v-14b08c6d"),o=o(),S(),o),A={key:0,class:"show-token"},B={class:"name-labels"},D={class:"name"},T={key:0,class:"labels"},N={key:1,class:"loading-token"},V={key:2,class:"icon","aria-hidden":"true"},W=z(()=>c("use",{"xlink:href":"#icon-icon_on"},null,-1)),j=[W];function E(o,a,r,f,d,p){var k;const _=v("CoinImgWarning"),e=b,n=w;return s(),t("div",{class:y(["token-dropdown-select",[o.hasArrow?"":"nohands",o.hasArrow&&!o.isLoading?"left-opcity":""].join(" ")]),onClick:a[0]||(a[0]=G=>o.hasArrow&&!o.isLoading?o.$emit("onSelect"):"")},[o.isLoading?(s(),t("div",N,[i(e,{size:"small",paragraph:!1}),i(n,{loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})])):(s(),t("div",A,[i(_,{"token-info":o.tokenInfo,"coin-size":"28px","warning-coin-size":"12px"},null,8,["token-info"]),c("div",B,[c("p",D,m(o.tokenInfo?(k=o.tokenInfo)==null?void 0:k.symbol:o.$t("modal.selectTokenModalTitle")),1),o.coinLabels?(s(),t("p",T,m(o.coinLabels),1)):u("",!0)])])),o.hasArrow?(s(),t("svg",V,j)):u("",!0)],2)}const U=I($,[["render",E],["__scopeId","data-v-14b08c6d"]]);export{U as T};
