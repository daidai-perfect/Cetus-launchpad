import{_ as we}from"./back.48c76bde.js";import{_ as he}from"./apr-tips.6cf3ea6d.js";import{_ as ge}from"./upgrade-loading.ec4970f3.js";import{i as j}from"./import-icon.de3e6c66.js";import{s as fe,b as K,a as T,d as H,f as ke,c as q,t as ee,p as ye,e as oe}from"./common.bd99f06c.js";import{a as me,z as Ae,m as V,b as Oe,r as O,q as je,A as re,e as Ne,C as Ce,o,f as n,h as s,x as d,i as S,j as w,D as M,y as g,F,E as J,G as c,H as Se,I as Y,u as t,w as ne,p as Te,k as $e,B as Fe}from"./entry.c4f565bb.js";/* empty css              */import{a as Re,u as Pe}from"./index.c16364fc.js";import{_ as Le}from"./precision.c92e897d.js";const Ie=me({props:{isAll:{type:Boolean,default:!1}},setup(){const e=Re(),{t:b,locale:le}=Ae(),_=V(()=>e),se=V(()=>_.value.allTokenObj||{}),ae=V(()=>(console.log("🚀🚀🚀 ~ file: top-pools.vue:674 ~ tokensObj ~ pools.value.tokensObj:",_.value.tokensObj),_.value.tokensObj)),Z=Pe(),h=V(()=>Z),B=Oe(),R=O(1),D=O("vol"),N=O("desc");let r=O(!1);const f=O(!1);je(async()=>{const a=document.body.clientWidth;a<750?r.value=!1:r.value=!0,window.onresize=()=>{a<750?r.value=!1:r.value=!0},await fe(1e3),f.value=!0});let $=O(null);const A=V(()=>Array.from(h.value.topPoolsList).sort((u,l)=>Number(l.vol_in_usd_24h)-Number(u.vol_in_usd_24h))),P=O(!1),E=O("Volume (24H)"),z=O(["TVL","Volume (24H)","APR","Fees (24h)"]),k=V(()=>h.value.chainName);re(()=>[k.value,f.value],([a,u])=>{u&&(a=="Sui"?z.value=["TVL","Volume (24H)","APR","Fees (24h)"]:z.value=["TVL","Volume (24H)","APR"])},{immediate:!0});const Q=a=>{const u=Array.from(A.value).sort((l,p)=>{if(a==D.value)if(N.value=="desc"){if(a=="tvl")return Number(p.pure_tvl_in_usd)-Number(l.pure_tvl_in_usd);if(a=="vol")return Number(p.vol_in_usd_24h)-Number(l.vol_in_usd_24h);if(a=="fees")return Number(p.fee_24_h)-Number(l.fee_24_h);if(a=="apr"&&k.value=="Sui")return Number(p.total_apr)-Number(l.total_apr);if(a=="apr"&&k.value=="Aptos")return Number(p.aprNum)-Number(l.aprNum)}else{if(a=="tvl")return Number(l.pure_tvl_in_usd)-Number(p.pure_tvl_in_usd);if(a=="vol")return Number(l.vol_in_usd_24h)-Number(p.vol_in_usd_24h);if(a=="fees")return Number(l.fee_24_h)-Number(p.fee_24_h);if(a=="apr"&&k.value=="Sui")return Number(l.total_apr)-Number(p.total_apr);if(a=="apr"&&k.value=="Aptos")return Number(l.aprNum)-Number(p.aprNum)}else{if(a=="tvl")return Number(l.pure_tvl_in_usd)-Number(p.pure_tvl_in_usd);if(a=="vol")return Number(l.vol_in_usd_24h)-Number(p.vol_in_usd_24h);if(a=="fees")return Number(l.fee_24_h)-Number(p.fee_24_h);if(a=="apr"&&k.value=="Sui")return Number(l.total_apr)-Number(p.total_apr);if(a=="apr"&&k.value=="Aptos")return Number(l.aprNum)-Number(p.aprNum)}});if(u.length<10)$.value=u.slice(0,10);else{const l=R.value*10;$.value=u.slice(l-10,l)}},de=a=>{a==D.value?N.value=N.value=="desc"?"asc":"desc":(D.value=a,N.value="desc"),Q(a)},x=(a,u)=>{R.value=a,A.value&&A.value.length>0&&Q(D.value)};re(()=>[A.value,f.value],([a,u])=>{u&&(r.value,x(R.value))},{immediate:!0});const ue=a=>{var u,l,p,W,X,i;if(h.value.theme=="sui"){const y=a.needReverse?((l=_.value.tokensObj[a.token_b_address])==null?void 0:l.labels)||[]:((u=_.value.tokensObj[a.token_a_address])==null?void 0:u.labels)||[],L=a.needReverse?((p=_.value.tokensObj[a.token_a_address])==null?void 0:p.labels)||[]:((W=_.value.tokensObj[a.token_b_address])==null?void 0:W.labels)||[],C=y.concat(L);return[...new Set(C)]}else{const y=((X=_.value.tokensObj[a.token_a_address])==null?void 0:X.labels)||[],L=((i=_.value.tokensObj[a.token_b_address])==null?void 0:i.labels)||[],C=y.concat(L);return[...new Set(C)]}},te=a=>{if(!q(a)&&!q(_.value.addressLpTokens)&&!q(_.value.tokensObj)){const u=_.value.addressLpTokens[a.swap_account];return u==null?void 0:u.is_display_rewarder}else return!1},ie=(a,u)=>a&&u?Le.plus(ee(a),ee(u)):a>0&&a<.01?"<0.01":0,pe=a=>{let u=0;return a&&a.forEach(l=>{l.rewarder_display&&(u+=ee(String(l.rewarders)))}),String(u)},_e=()=>{B&&B.push("/aptos/stats-pools")},U=O({});O(!0),re(()=>[_.value.poolConfigObj,_.value.tokensObj,h.value.topPoolsList,h.value.chainName,_.value.addressLpTokens,f.value],([a,u,l,p,W,X])=>{X&&(p=="Sui"?l&&l.length>0&&l.forEach(i=>{var L,C,I;const y=(C=(L=i==null?void 0:i.rewarder)==null?void 0:L.rewarder_coin)==null?void 0:C.map((v,G)=>({...v,emissionsEveryDay:0,rewarder_display:i==null?void 0:i.rewarder[`rewarder_display${G+1}`],rewarders:i.rewarder_apr[G]&&i.rewarder_apr[G].replace("%",""),logoUrl:v==null?void 0:v.logoURI,symbol:v==null?void 0:v.symbol,rewarderApr:i.rewarder_apr[G]&&i.rewarder_apr[G].replace("%","")}));(I=i==null?void 0:i.rewarder)!=null&&I.is_display_rewarder&&(U.value={...U.value,[i.swap_account]:y})}):a&&!q(a)&&l&&l.length>0&&u&&!q(u)&&W&&!q(W)&&l.forEach(i=>{const y=W[i.swap_account];if(y){const L=y.rewarder_infos.map((C,I)=>{const v=u[C.coinAddress];return{...C,emissionsEveryDay:ye(C.emissionsEveryDay,v==null?void 0:v.decimals),rewarder_display:y[`rewarder_display${I+1}`],rewarders:oe(i.rewarder_apr[I]&&i.rewarder_apr[I].replace("%",""),2),logoUrl:v==null?void 0:v.logo_url,symbol:v==null?void 0:v.symbol,rewarderApr:oe(i.rewarder_apr[I]&&i.rewarder_apr[I].replace("%",""),2)}});y!=null&&y.is_display_rewarder?U.value={...U.value,[i.swap_account]:L}:U.value={...U.value,[i.swap_account]:[]}}}))},{immediate:!0,deep:!0});const ce=a=>{var u;return console.log("🚀🚀🚀 ~ file: top-pools.vue:1016 ~ getCoinIcon ~ pools.value.tokensObj:",_.value.tokensObj),((u=_.value.tokensObj[a])==null?void 0:u.logo_url)||(h.value.theme==="default"?j("/image/coins/unknown.png"):j("/image/coins/sui-unknown.png"))},ve=V(()=>h.value.theme),be=V(()=>_.value.tokensWarningObj);return{sFixD:K,currentSortColumn:D,currentSortOrder:N,sortTable:de,tokensWarningObj:be,theme:ve,getCoinIcon:ce,addCommom:T,store:h,importIcon:j,topPoolsList:A,addressTokens:se,currentPools:R,onChangePools:x,currentTopPoolsList:$,router:B,isPc:r,getAprTotal:ie,getRewarderApr:pe,toPoolsList:_e,select:P,selectValue:E,selectList:z,getLabel:ue,tokensObj:ae,rewardDisplay:te,rewardObj:U,t:b,decimalUi:H,chainName:k,formatNumberAddCommom:ke}}});const m=e=>(Te("data-v-a9a19e42"),e=e(),$e(),e),Ve={key:0,class:"title"},De={key:1,class:"title view-all-title"},Ue={class:"sort-by"},He=m(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Be=[He],Ee=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),ze=[Ee],We={key:0,class:"select-item"},qe=["onClick"],Me=m(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ge=[Me],Je={class:"table-contianer"},Ke={class:"pools-table"},Qe={class:"table-header"},Xe=m(()=>s("th",null,"Pools",-1)),Ye=m(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ze=[Ye],xe=m(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),er=[xe],rr={key:0},sr=m(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),ar=[sr],or=m(()=>s("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),nr=[or],lr={class:"apr-hover-content"},dr=m(()=>s("th",null,null,-1)),ur={class:"table-body"},tr={key:0},ir={colspan:"6"},pr={class:"upgrade-loading"},_r={class:"token"},cr=["onerror"],vr=["onerror"],br={class:"name"},wr={class:"token-name"},hr={class:"fee-tier-top"},gr={class:"label-all"},fr={key:0},kr={class:"tvl"},yr={class:"volume-hour"},mr={key:0},Ar={class:"fees-24h"},Or=m(()=>s("br",null,null,-1)),jr={key:0,class:"farming-apr"},Nr={key:1,class:"apr-hover-content"},Cr=m(()=>s("br",null,null,-1)),Sr={key:2,class:"farming-apr"},Tr={key:3,class:"apr-hover-content"},$r={class:"btn-box"},Fr={class:"h5-item-container"},Rr={key:0,class:"upgrade-loading"},Pr={class:"top"},Lr={class:"token"},Ir=["onerror"],Vr=["onerror"],Dr={class:"name"},Ur={class:"token-name"},Hr={class:"label-all"},Br={key:0},Er={class:"fee-tier-hint"},zr={class:"middle"},Wr={class:"item-pools"},qr={class:"item-pools"},Mr={key:0,class:"item-pools"},Gr=m(()=>s("span",null,"Fees (24h)",-1)),Jr={key:0},Kr={key:0,class:"farming-apr"},Qr={key:1},Xr={key:2,class:"apr-hover-content"},Yr={class:"bottom"},Zr={class:"panation"};function xr(e,b,le,_,se,ae){const Z=we,h=he,B=ge,R=Fe,D=Se,N=Ce("image");return o(),n("div",{class:g(["top-pools-new-table",e.isAll?"top-pools-new-table-all":""])},[e.isAll?(o(),n("div",De,[S(Z),w(" Pools ")])):(o(),n("div",Ve,[s("div",null,d(e.$t("common.topPools")),1),s("div",{class:"view-all",onClick:b[0]||(b[0]=(...r)=>e.toPoolsList&&e.toPoolsList(...r))},d(e.$t("newAdd.viewAll"))+"   > ",1)])),s("div",Ue,[s("div",null,d(e.$t("newAdd.sortBy")),1),s("div",{class:"search-select",onClick:b[1]||(b[1]=M(r=>e.select=!e.select,["stop"]))},[s("div",null,[w(d(e.selectValue)+" ",1),(o(),n("svg",{"aria-hidden":"true",class:g(["pools-icon",e.currentSortOrder=="desc"?"desc-svg":"asc-svg"])},Be,2))]),(o(),n("svg",{"aria-hidden":"true",class:g(e.select?"show-icon icon":"icon")},ze,2))]),e.select?(o(),n("div",We,[(o(!0),n(F,null,J(e.selectList,(r,f)=>(o(),n("div",{key:f,class:"select-menu-item",onClick:M(()=>{e.select=!1,e.selectValue=r,e.sortTable(r=="TVL"?"tvl":r=="Volume (24H) "?"vol":r=="APR"?"apr":"fees")},["stop"])},[w(d(r)+" ",1),(o(),n("svg",{"aria-hidden":"true",class:g(["pools-icon",e.currentSortColumn=="tvl"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},Ge,2))],8,qe))),128))])):c("",!0)]),s("div",Je,[s("table",Ke,[s("thead",Qe,[s("tr",null,[Xe,s("th",null,[s("span",{onClick:b[2]||(b[2]=M(r=>e.sortTable("tvl"),["stop"]))},[w(" TVL "),(o(),n("svg",{"aria-hidden":"true",class:g(["pools-icon",e.currentSortColumn=="tvl"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},Ze,2))])]),s("th",null,[s("span",{onClick:b[3]||(b[3]=M(r=>e.sortTable("vol"),["stop"]))},[w(" Volume (24H) "),(o(),n("svg",{"aria-hidden":"true",class:g(["pools-icon",e.currentSortColumn=="vol"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},er,2))])]),e.chainName=="Sui"?(o(),n("th",rr,[s("span",{onClick:b[4]||(b[4]=M(r=>e.sortTable("fees"),["stop"]))},[w(" Fees (24H) "),(o(),n("svg",{"aria-hidden":"true",class:g(["pools-icon",e.currentSortColumn=="fees"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},ar,2))])])):c("",!0),s("th",null,[s("span",{class:"hover-box",onClick:b[5]||(b[5]=M(r=>e.sortTable("apr"),["stop"]))},[w(" APR "),(o(),n("svg",{"aria-hidden":"true",class:g(["pools-icon",e.currentSortColumn=="apr"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},nr,2)),s("div",lr,[S(h,{class:"noHover apr-hover-con"})])])]),dr])]),s("tbody",ur,[e.currentTopPoolsList?c("",!0):(o(),n("tr",tr,[s("td",ir,[s("div",pr,[S(B,{loading:!0,type:"statsPools"})])])])),(o(!0),n(F,null,J(e.currentTopPoolsList,r=>{var f,$,A,P,E,z;return o(),n("tr",{key:r.swap_account},[s("td",null,[s("div",_r,[s("div",null,[r!=null&&r.token_a_address?Y((o(),n("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:t(j))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:t(j))("/image/coins/sui-unknown.png")},null,8,cr)),[[N,e.getCoinIcon(e.theme=="sui"?r.is_forward!==!1?r.token_a_address:r.token_b_address:r.token_a_address)]]):c("",!0)]),s("div",null,[r!=null&&r.token_b_address?Y((o(),n("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:t(j))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:t(j))("/image/coins/sui-unknown.png")},null,8,vr)),[[N,e.getCoinIcon(e.theme=="sui"?r.is_forward!==!1?r.token_b_address:r.token_a_address:r.token_b_address)]]):c("",!0)]),s("div",br,[s("p",wr,d(e.theme=="sui"?r.is_forward!==!1?r.token_a_reserves:r.token_b_reserves:r.token_a_reserves)+" - "+d(e.theme=="sui"?r.is_forward!==!1?r.token_b_reserves:r.token_a_reserves:r.token_b_reserves),1),s("div",hr,d((r==null?void 0:r.fee)*100)+"%",1),s("div",gr,[(o(!0),n(F,null,J(e.getLabel(r),(k,Q)=>(o(),n("div",{key:Q,class:g(["label",k])},[k!=="Native"?(o(),n("span",fr,d(k),1)):c("",!0)],2))),128))])])])]),s("td",null,[s("div",kr,d(r.pure_tvl_in_usd>0&&r.pure_tvl_in_usd<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:t(T))(("decimalUi"in e?e.decimalUi:t(H))(r.pure_tvl_in_usd,2),2)}`),1)]),s("td",null,[s("div",yr,d(r.vol_in_usd_24h>0&&r.vol_in_usd_24h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:t(T))(("decimalUi"in e?e.decimalUi:t(H))(r.vol_in_usd_24h,2),2)}`),1)]),e.chainName=="Sui"?(o(),n("td",mr,[s("div",Ar,d(r.fee_24_h>0&&r.fee_24_h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:t(T))(("decimalUi"in e?e.decimalUi:t(H))(r.fee_24_h,2),2)}`),1)])):c("",!0),s("td",null,[e.chainName=="Sui"?(o(),n("div",{key:0,class:g(["apr",e.theme=="sui"&&r.isStableFarming||e.rewardObj&&((f=e.rewardObj[r.swap_account])==null?void 0:f.length)>0?"apr-mark":""])},[w(d(e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))>0&&e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))<.01?"<0.01":e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))==0?0:("sFixD"in e?e.sFixD:t(K))(e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account])),2))+"% ",1),Or,($=r==null?void 0:r.stable_farming)!=null&&$.stable_farming_pool?(o(),n("i",jr,d(r.stable_farming.apr>0&&r.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:t(T))(r.stable_farming?(r==null?void 0:r.stable_farming.apr)*100:0,2)}`)+"% ",1)):c("",!0),e.theme=="sui"&&r.isStableFarming||e.rewardObj&&((A=e.rewardObj[r.swap_account])==null?void 0:A.length)>0&&e.rewardObj&&e.rewardObj[r.swap_account]?(o(),n("div",Nr,[S(h,{class:"noHover apr-hover-con","l-item":{apr:r.apr_7day&&r.apr_7day.replace("%",""),aprTotal:e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account])),is_display_rewarder:e.rewardObj&&e.rewardObj[r.swap_account],rewarder_apr:e.getRewarderApr(e.rewardObj[r.swap_account]),isStableFarming:r.isStableFarming,stableFarmingApr:r.stableFarmingApr},"rewarder-info":e.rewardObj&&e.rewardObj[r.swap_account]},null,8,["l-item","rewarder-info"])])):c("",!0)],2)):(o(),n("div",{key:1,class:g(["apr",e.theme=="sui"&&r.isStableFarming||e.rewardObj&&((P=e.rewardObj[r.swap_account])==null?void 0:P.length)>0?"apr-mark":""])},[e.rewardObj[r.swap_account]?(o(),n(F,{key:0},[w(d(e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))>0&&e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))<.01?"<0.01":e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))==0?0:("sFixD"in e?e.sFixD:t(K))(e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account])),2))+"% ",1)],64)):(o(),n(F,{key:1},[w("--")],64)),Cr,(E=r==null?void 0:r.stable_farming)!=null&&E.stable_farming_pool?(o(),n("i",Sr,d(r.stable_farming.apr>0&&r.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:t(T))(r.stable_farming?(r==null?void 0:r.stable_farming.apr)*100:0,2)}`)+"% ",1)):c("",!0),e.theme=="sui"&&r.isStableFarming||e.rewardObj&&((z=e.rewardObj[r.swap_account])==null?void 0:z.length)>0&&e.rewardObj&&e.rewardObj[r.swap_account]?(o(),n("div",Tr,[S(h,{class:"noHover apr-hover-con","l-item":{apr:r.apr_7day&&r.apr_7day.replace("%",""),aprTotal:e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account])),is_display_rewarder:e.rewardObj&&e.rewardObj[r.swap_account],rewarder_apr:e.getRewarderApr(e.rewardObj[r.swap_account]),isStableFarming:r.isStableFarming,stableFarmingApr:r.stableFarmingApr},"rewarder-info":e.rewardObj&&e.rewardObj[r.swap_account]},null,8,["l-item","rewarder-info"])])):c("",!0)],2))]),s("td",null,[s("div",$r,[S(R,{class:"cancel-btn",onClick:()=>e.router.push(`/liquidity/deposit?poolAddress=${r==null?void 0:r.swap_account}`)},{default:ne(()=>[w(d(e.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])])}),128))])])]),s("div",Fr,[e.currentTopPoolsList?(o(!0),n(F,{key:1},J(e.currentTopPoolsList,r=>{var f,$,A;return o(),n("div",{key:r.swap_account,class:"item h5-item"},[s("div",Pr,[s("div",Lr,[s("div",null,[r!=null&&r.token_a_address?Y((o(),n("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:t(j))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:t(j))("/image/coins/sui-unknown.png")},null,8,Ir)),[[N,e.getCoinIcon(e.theme=="sui"?r.is_forward!==!1?r.token_a_address:r.token_b_address:r.token_a_address)]]):c("",!0)]),s("div",null,[r!=null&&r.token_b_address?Y((o(),n("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:t(j))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:t(j))("/image/coins/sui-unknown.png")},null,8,Vr)),[[N,e.getCoinIcon(e.theme=="sui"?r.is_forward!==!1?r.token_b_address:r.token_a_address:r.token_b_address)]]):c("",!0)]),s("div",Dr,[s("p",Ur,d(e.theme=="sui"?r.is_forward!==!1?r.token_a_reserves:r.token_b_reserves:r.token_a_reserves)+" - "+d(e.theme=="sui"?r.is_forward!==!1?r.token_b_reserves:r.token_a_reserves:r.token_b_reserves),1),s("div",Hr,[(o(!0),n(F,null,J(e.getLabel(r),(P,E)=>(o(),n("div",{key:E,class:g(["label",P])},[P!=="Native"?(o(),n("span",Br,d(P),1)):c("",!0)],2))),128))])])]),s("div",Er,d((r==null?void 0:r.fee)*100)+"%",1)]),s("div",zr,[s("div",Wr,[s("span",null,d(e.$t("common.tvl")),1),s("p",null,d(r.pure_tvl_in_usd>0&&r.pure_tvl_in_usd<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:t(T))(("decimalUi"in e?e.decimalUi:t(H))(r.pure_tvl_in_usd,2),2)}`),1)]),s("div",qr,[s("span",null,d(e.$t("common.volume24h")),1),s("p",null,d(r.vol_in_usd_24h>0&&r.vol_in_usd_24h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:t(T))(("decimalUi"in e?e.decimalUi:t(H))(r.vol_in_usd_24h,2),2)}`),1)]),e.chainName=="Sui"?(o(),n("div",Mr,[Gr,s("p",null,d(r.fee_24_h>0&&r.fee_24_h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:t(T))(("decimalUi"in e?e.decimalUi:t(H))(r.fee_24_h,2),2)}`),1)])):c("",!0),s("div",{class:g(["item-pools",e.theme=="sui"&&r.isStableFarming||e.rewardObj&&((f=e.rewardObj[r.swap_account])==null?void 0:f.length)>0?"":"apr-mark-h5"])},[s("span",null,d(e.$t("common.apr")),1),e.chainName=="Sui"?(o(),n("p",Jr,[w(d(e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))>0&&e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))<.01?"<0.01":e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))==0?0:("sFixD"in e?e.sFixD:t(K))(e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account])),2))+"% ",1),($=r==null?void 0:r.stable_farming)!=null&&$.stable_farming_pool?(o(),n("i",Kr,d(r.stable_farming.apr>0&&r.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:t(T))(r.stable_farming?(r==null?void 0:r.stable_farming.apr)*100:0,2)}`)+"% ",1)):c("",!0)])):c("",!0),e.chainName=="Aptos"?(o(),n("p",Qr,[e.rewardObj[r.swap_account]?(o(),n(F,{key:0},[w(d(e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))>0&&e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))<.01?"<0.01":e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account]))==0?0:("sFixD"in e?e.sFixD:t(K))(e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account])),2))+"% ",1)],64)):(o(),n(F,{key:1},[w("--")],64))])):c("",!0),e.theme=="sui"&&r.isStableFarming||e.rewardObj&&((A=e.rewardObj[r.swap_account])==null?void 0:A.length)>0&&e.rewardObj&&e.rewardObj[r.swap_account]?(o(),n("div",Xr,[S(h,{class:"noHover apr-hover-con","l-item":{apr:r.apr_7day&&r.apr_7day.replace("%",""),aprTotal:e.getAprTotal(r.apr_7day,e.getRewarderApr(e.rewardObj[r.swap_account])),is_display_rewarder:e.rewardObj&&e.rewardObj[r.swap_account],rewarder_apr:e.getRewarderApr(e.rewardObj[r.swap_account]),isStableFarming:r.isStableFarming,stableFarmingApr:r.stableFarmingApr},"rewarder-info":e.rewardObj&&e.rewardObj[r.swap_account]},null,8,["l-item","rewarder-info"])])):c("",!0)],2)]),s("div",Yr,[S(R,{class:"cancel-btn",onClick:()=>e.router.push(`/liquidity/deposit?poolAddress=${r==null?void 0:r.swap_account}`)},{default:ne(()=>[w(d(e.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(o(),n("div",Rr,[S(B,{loading:!0,type:"statsPoolH5"})]))]),s("div",Zr,[S(D,{current:e.currentPools,"onUpdate:current":b[6]||(b[6]=r=>e.currentPools=r),"page-size":(e.isPc,10),simple:"",total:e.isAll?e.topPoolsList.length:e.topPoolsList.length>20?20:e.topPoolsList.length,onChange:e.onChangePools},null,8,["current","page-size","total","onChange"])])],2)}const ts=Ne(Ie,[["render",xr],["__scopeId","data-v-a9a19e42"]]);export{ts as T};
