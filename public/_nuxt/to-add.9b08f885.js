import{a as D,z as Z,o as s,c as v,w as c,P as b,h as t,x as m,u as h,f as _,G as f,e as g,m as B,l as L,i as u,p as S,k as A,D as W,r as J,j as K,F as P,E as N,y as j,A as oo,b as Q}from"./entry.92a44973.js";/* empty css              */import{_ as to}from"./token-warning_2x.5cf0c53a.js";import{u as so}from"./token.315c02f4.js";import{c as M,d as eo,a as no}from"./common.99f6d7f1.js";import{C as F}from"./coin-img-warning.efeac0c8.js";import{i as q}from"./import-icon.de3e6c66.js";import{a as ao,u as io}from"./index.10ebf49c.js";import{A as lo}from"./address-copy-link.9717a112.js";import{_ as co}from"./nuxt-link.f367cc68.js";import{_ as ro}from"./icon_farms_2x.512f425b.js";import{_ as _o}from"./farms.cfadf0b9.js";import{_ as po,a as uo,b as mo}from"./icon_autopools_2x.4661f41f.js";import{_ as fo}from"./icon_autopools_2x.59e54b36.js";import{u as vo}from"./stats.c0e2187a.js";import{I as ho}from"./icon-tooltip.5a0d3de6.js";import{_ as go}from"./icon_fee_2x.0ae0d6d3.js";import{_ as yo}from"./icon_rewards_2x.35ce3e8a.js";import{C as G}from"./coin-img.583f1db5.js";import{u as ko}from"./useToken.ab6b508c.js";import"./decimal.a2826370.js";import{D as O}from"./decimal.765d8738.js";import{u as X}from"./pool.8bdf5f5c.js";import{p as H}from"./index.67028433.js";const Io={class:"hover-text"},bo={key:0,class:"warning-img",src:to,alt:""},$o=D({__name:"pool-warning-new",props:{tokenA:{type:Object,default:()=>null},tokenB:{type:Object,default:()=>null}},setup(o){const{t:r}=Z(),l=so(),{allTokensObj:e}=l;return(i,a)=>{const n=b;return s(),v(n,{placement:"top","overlay-class-name":"apr-tips-tooltip"},{title:c(()=>[t("div",Io,m(h(r)("newAdd.poolWarning")),1)]),default:c(()=>{var d,p,y,k;return[!h(M)(h(e))&&!((p=h(e)[(d=o.tokenA)==null?void 0:d.address])!=null&&p.is_trusted)||!h(M)(h(e))&&!((k=h(e)[(y=o.tokenB)==null?void 0:y.address])!=null&&k.is_trusted)?(s(),_("img",bo)):f("",!0)]}),_:1})}}});const So=g($o,[["__scopeId","data-v-81d058c0"]]);const Ao=D({components:{AddressCopyLink:lo,CoinImgWarning:F},props:{poolInfo:{type:Object,default:()=>({})}},setup(o){const r=ao(),l=B(()=>r),e=io(),i=B(()=>e);return{getCoinIcon:n=>{var d;return(n==null?void 0:n.logoURI)||(n==null?void 0:n.logo_url)||((d=l.value.tokensObj[n==null?void 0:n.address])==null?void 0:d.logo_url)||(i.value.theme==="default"?q("/image/coins/unknown.png"):q("/image/coins/sui-unknown.png"))},store:e}}}),xo=o=>(S("data-v-3055b96e"),o=o(),A(),o),wo={class:"tooltip-con"},Co={class:"address-text"},To=xo(()=>t("span",null,"Pool",-1)),Bo={class:"coin-tips"},Do={class:"coin-tips"};function Oo(o,r,l,e,i,a){var p,y,k,x,w,C,T,V,E;const n=L("AddressCopyLink"),d=L("CoinImgWarning");return s(),_("div",wo,[t("div",Co,[To,u(n,{address:(p=o.poolInfo)==null?void 0:p.poolAddress,"current-explorer-type":"poolAddress"},null,8,["address"])]),t("div",Bo,[u(d,{"token-info":(y=o.poolInfo)==null?void 0:y.tokenA,"coin-size":"20px","warning-coin-size":"10px"},null,8,["token-info"]),u(n,{address:((k=o.poolInfo)==null?void 0:k.tokenA)&&((w=(x=o.poolInfo)==null?void 0:x.tokenA)==null?void 0:w.address),"current-explorer-type":"coin"},null,8,["address"])]),t("div",Do,[u(d,{"token-info":(C=o.poolInfo)==null?void 0:C.tokenB,"coin-size":"20px","warning-coin-size":"10px"},null,8,["token-info"]),u(n,{address:((T=o.poolInfo)==null?void 0:T.tokenB)&&((E=(V=o.poolInfo)==null?void 0:V.tokenB)==null?void 0:E.address),"current-explorer-type":"coin"},null,8,["address"])])])}const Ro=g(Ao,[["render",Oo],["__scopeId","data-v-3055b96e"]]);const I=o=>(S("data-v-214c3fa7"),o=o(),A(),o),jo=I(()=>t("div",{class:"label"},"Farm rewards available",-1)),Fo={class:"pool-active"},Po=I(()=>t("img",{class:"default-img",src:ro,alt:""},null,-1)),No=I(()=>t("img",{class:"hover-img",src:_o,alt:""},null,-1)),zo=I(()=>t("div",{class:"label"},"Mining rewards available",-1)),Uo=I(()=>t("div",{class:"pool-active"},[t("img",{class:"default-img",src:po,alt:""}),t("img",{class:"hover-img",src:uo,alt:""})],-1)),Vo=I(()=>t("div",{class:"label"},"Vault available",-1)),Eo={class:"pool-active"},Lo=I(()=>t("img",{class:"default-img",src:mo,alt:""},null,-1)),Wo=I(()=>t("img",{class:"hover-img",src:fo,alt:""},null,-1)),Mo={__name:"pool-active-status",props:{poolStatus:{type:String,default:""}},setup(o){return(r,l)=>{const e=co,i=b;return o.poolStatus=="farm"?(s(),v(i,{key:0,"overlay-class-name":"apr-tips-tooltip"},{title:c(()=>[jo]),default:c(()=>[t("div",Fo,[u(e,{to:"/farms",onClick:l[0]||(l[0]=W(()=>{},["stop"]))},{default:c(()=>[Po,No]),_:1})])]),_:1})):o.poolStatus=="mining"?(s(),v(i,{key:1,"overlay-class-name":"apr-tips-tooltip"},{title:c(()=>[zo]),default:c(()=>[Uo]),_:1})):o.poolStatus=="vaults"?(s(),v(i,{key:2,"overlay-class-name":"apr-tips-tooltip"},{title:c(()=>[Vo]),default:c(()=>[t("div",Eo,[u(e,{to:"/vaults",onClick:l[1]||(l[1]=W(()=>{},["stop"]))},{default:c(()=>[Lo,Wo]),_:1})])]),_:1})):f("",!0)}}},R=g(Mo,[["__scopeId","data-v-214c3fa7"]]),qo={class:"pool-name-block"},Go={class:"coin-info-fee"},Ho={class:"coin-logo"},Jo={class:"symbol-label"},Ko={class:"pool-name"},Qo={class:"pool-fee"},Xo={key:0,class:"bottom"},Yo={class:"pool-info"},Zo=D({__name:"pool-name-block",props:{poolInfo:{type:Object,default:()=>({})}},setup(o){J();const r=vo(),l=B(()=>r);return B(()=>l.value.poolsStatsObj),(e,i)=>{var n,d;const a=b;return s(),_("div",qo,[t("div",Go,[u(a,{placement:"topLeft","overlay-class-name":"apr-tips-tooltip"},{title:c(()=>[u(Ro,{"pool-info":o.poolInfo},null,8,["pool-info"])]),default:c(()=>{var p,y,k,x,w;return[t("div",Ho,[u(F,{"token-info":(p=o.poolInfo)==null?void 0:p.tokenA},null,8,["token-info"]),u(F,{"token-info":(y=o.poolInfo)==null?void 0:y.tokenB},null,8,["token-info"]),t("div",Jo,[t("div",Ko,[t("span",null,m((k=o.poolInfo.tokenA)==null?void 0:k.symbol),1),K("  -  "),t("span",null,m((x=o.poolInfo.tokenB)==null?void 0:x.symbol),1),t("div",Qo,m(o.poolInfo.fee*100)+"%",1)]),((w=o.poolInfo.labels)==null?void 0:w.length)>0?(s(),_("div",Xo,[(s(!0),_(P,null,N(o.poolInfo.labels,(C,T)=>(s(),_("div",{key:T,class:j(["label",C])},[t("span",null,m(C),1)],2))),128))])):f("",!0)])])]}),_:1})]),t("div",Yo,[o.poolInfo.isFarming?(s(),v(R,{key:0,"pool-status":"farm"})):f("",!0),o.poolInfo.haveMining?(s(),v(R,{key:1,"pool-status":"mining"})):f("",!0),o.poolInfo.isVaults?(s(),v(R,{key:2,"pool-status":"vaults"})):f("",!0)]),u(So,{"token-a":(n=o.poolInfo)==null?void 0:n.tokenA,"token-b":(d=o.poolInfo)==null?void 0:d.tokenB},null,8,["token-a","token-b"])])}}});const _s=g(Zo,[["__scopeId","data-v-b476200f"]]);const Y=o=>(S("data-v-81ff7f2e"),o=o(),A(),o),ot={class:"rank-icon"},tt={key:0},st=Y(()=>t("use",{"xlink:href":"#icon-icon_ascending_nor"},null,-1)),et=[st],nt=Y(()=>t("use",{"xlink:href":"#icon-icon_descending_nor"},null,-1)),at=[nt],it={__name:"rank-icon",props:{label:{type:String,default:""},toolTip:{type:String,default:""},sortVal:{type:String,default:"desc"},sortInfo:{type:Object,default:()=>({})}},emits:["sort"],setup(o,{emit:r}){const l=r,e=o,i=()=>{const a=e.label!==e.sortInfo.label||e.sortInfo.sort=="asc"?"desc":"asc";l("sort",{label:e.label,sort:a})};return(a,n)=>(s(),_("th",null,[t("div",ot,[t("span",null,m(e.label),1),o.toolTip?(s(),_("div",tt,[u(ho,{type:"apr24",placement:"topRight","xlink-href":"#icon-icon_tips"})])):f("",!0),t("div",{onClick:i},[(s(),_("svg",{"aria-hidden":"true",class:j(["sort-icon",o.sortInfo.label==o.label&&o.sortInfo.sort=="asc"?"sort-icon-active":""])},et,2)),(s(),_("svg",{"aria-hidden":"true",class:j(["sort-icon",o.sortInfo.label==o.label&&o.sortInfo.sort=="desc"?"sort-icon-active":""])},at,2))])])]))}},ps=g(it,[["__scopeId","data-v-81ff7f2e"]]);const $=o=>(S("data-v-085f4ac6"),o=o(),A(),o),lt={class:"apr-tips"},ct=$(()=>t("div",{class:"apr-text"}," Estimated according to trading activity in the past 24 hours plus mining and farming rewards ",-1)),rt=$(()=>t("div",{class:"line"},null,-1)),dt={class:"apr-item"},_t=$(()=>t("div",{class:"left"},[t("img",{src:go,alt:""}),t("span",null,"Fees")],-1)),pt={class:"right"},ut={key:0,class:"mining"},mt=$(()=>t("div",{class:"mining-conent"},[t("div",{class:"left"},[t("img",{src:yo,alt:""}),t("span",null,"Mining")]),t("div",{class:"text"})],-1)),ft={class:"reward-list"},vt={class:"left"},ht={class:"right"},gt={key:1,class:"apr-item stable-farming"},yt=$(()=>t("div",{class:"left"},[t("div",{class:"title"},"Farming"),t("div",{class:"desc"},"Stake position to earn")],-1)),kt={class:"right"},It={class:"total-apr"},bt=$(()=>t("div",{class:"label"},"Total APR",-1)),$t={class:"text"},St=$(()=>t("span",null,"%",-1)),At={class:"apr"},xt={key:0},wt={__name:"apr-tips",props:{poolInfo:{type:Object,default:()=>({})}},setup(o){return(r,l)=>{const e=b;return s(),v(e,{placement:"topRight","overlay-class-name":"apr-tips-tooltip"},{title:c(()=>[t("div",lt,[ct,rt,t("div",dt,[_t,t("div",pt,m(o.poolInfo.feeAprDisplay),1)]),o.poolInfo&&o.poolInfo.mining&&o.poolInfo.mining.length>0?(s(),_("div",ut,[mt,t("div",ft,[(s(!0),_(P,null,N(o.poolInfo.mining,i=>(s(),_("div",{key:i,class:"reward-item"},[t("div",vt,[t("span",null,m(i.symbol)+" Rewards",1)]),t("div",ht,[t("span",null,m(i.aprDisplay),1)])]))),128))])])):f("",!0),o.poolInfo.stableFarmingApr>0?(s(),_("div",gt,[yt,t("div",kt,"+"+m(o.poolInfo.stableFarmingAprDisplay),1)])):f("",!0),t("div",It,[bt,t("div",$t,[K(m(("decimalUi"in r?r.decimalUi:h(eo))(o.poolInfo.totalApr,2))+" ",1),St])])])]),default:c(()=>[t("div",At,[t("div",null,m(o.poolInfo.apr24hAndMiningAprDisplay||"0%"),1),o.poolInfo.stableFarmingApr>0?(s(),_("div",xt,[t("span",null,"+"+m(o.poolInfo.stableFarmingAprDisplay),1)])):f("",!0)])]),_:1})}}},us=g(wt,[["__scopeId","data-v-085f4ac6"]]),Ct={class:"reward-icon-list"},Tt={class:"reward-coin-tips"},Bt=D({__name:"reward-coin",props:{rewardList:{type:Object,default:()=>[]}},setup(o){const{getToken:r}=ko(),l=o,e=J(),i=async a=>{const n=[];for(let d=0;d<a.length;d++){const p=await r(a[d].coinType);n.push({...a[d],...p,emissionsEveryDay:new O(a[d].emissionsEveryDay).div(O.pow(10,p.decimals)).toDP(2,O.ROUND_HALF_UP).toString()})}e.value=n};return oo(()=>l.rewardList,a=>{a&&a.length>0&&i(a)},{immediate:!0}),(a,n)=>{const d=b;return s(),_("div",Ct,[(s(!0),_(P,null,N(e.value,p=>(s(),_("div",{key:p.address,class:"reward-coin"},[u(d,{"overlay-class-name":"apr-tips-tooltip"},{title:c(()=>[t("div",Tt,[u(G,{size:"24px",url:p.logo_url},null,8,["url"]),t("div",null,m(h(no)(p.emissionsEveryDay))+" "+m(p.symbol)+" per day",1)])]),default:c(()=>[u(G,{size:"24px",url:p.logo_url},null,8,["url"])]),_:2},1024)]))),128))])}}});const ms=g(Bt,[["__scopeId","data-v-b426db7e"]]);const z=o=>(S("data-v-379970b6"),o=o(),A(),o),Dt=z(()=>t("div",{class:"button-tips"},"Swap",-1)),Ot=z(()=>t("svg",{class:"swap-icon","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_swap2"})],-1)),Rt=z(()=>t("span",null,"Swap",-1)),jt=[Ot,Rt],Ft={__name:"to-swap",props:{fromCoinAddress:{type:String,default:"0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"},toCoinAddress:{type:String,default:"0x2::sui::SUI"}},setup(o){const r=o,l=Q();X();const e=()=>{var i,a;l.push(`/swap?from=${(i=H(r.fromCoinAddress))==null?void 0:i.full_address}&to=${(a=H(r.toCoinAddress))==null?void 0:a.full_address}`)};return(i,a)=>{const n=b;return s(),v(n,{placement:"topRight","overlay-class-name":"apr-tips-tooltip button-tips-tooltip"},{title:c(()=>[Dt]),default:c(()=>[t("div",{class:"to-swap",onClick:e},jt)]),_:1})}}},fs=g(Ft,[["__scopeId","data-v-379970b6"]]);const U=o=>(S("data-v-9a633e7a"),o=o(),A(),o),Pt=U(()=>t("div",{class:"button-tips"},"Add Liquidity",-1)),Nt=U(()=>t("svg",{class:"add-icon","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_add1"})],-1)),zt=U(()=>t("span",null,"Add Liquidity",-1)),Ut=[Nt,zt],Vt={__name:"to-add",props:{poolAddress:{type:String,default:"0xcf994611fd4c48e277ce3ffd4d4364c914af2c3cbb05f7bf6facd371de688630"}},setup(o){const r=o,l=Q();X();const e=()=>{l.push(`/liquidity/deposit?poolAddress=${r.poolAddress}`)};return(i,a)=>{const n=b;return s(),v(n,{placement:"topRight","overlay-class-name":"apr-tips-tooltip button-tips-tooltip"},{title:c(()=>[Pt]),default:c(()=>[t("div",{class:"to-add",onClick:e},Ut)]),_:1})}}},vs=g(Vt,[["__scopeId","data-v-9a633e7a"]]);export{us as A,_s as P,ps as R,fs as T,ms as a,vs as b};
