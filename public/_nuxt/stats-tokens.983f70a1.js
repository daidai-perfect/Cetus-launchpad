import{_ as Ke}from"./back.b1b137fd.js";import{_ as Qe}from"./upgrade-loading.e3c6faf2.js";import{i as M}from"./import-icon.de3e6c66.js";import{u as Xe,a as k,d as ee,c as ue,s as Ye,k as de}from"./pool.ec7155de.js";import{a as Ze,l as N,b as xe,r as i,H as es,q as he,e as ss,s as os,o as p,f as h,h as n,i as J,j as L,v as t,A as O,F as ve,E as ce,x,a3 as ls,t as ke,u as c,w as fe,p as ns,k as as,B as ts}from"./entry.99d20ac2.js";/* empty css              */import{u as rs}from"./sha256.f7311d31.js";import{p as is}from"./precision.a7a6c57b.js";import{_ as _e}from"./icon_on_stats.cdf13a69.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./decimal.0bdeb344.js";const us=Ze({setup(){const e=Xe(),r=N(()=>e),pe=N(()=>r.value.tokensObj||{}),se=rs(),b=N(()=>se),z=xe();let le=i("big");const _=i(1),g=i(1);let T=i(!1);const oe=()=>{se.getStatsData(b.value.chainName,b.value.filterCoinsObj)};es(()=>{se.getStatsData(b.value.chainName,b.value.filterCoinsObj);const s=document.body.clientWidth;s<750?T.value=!1:T.value=!0,window.onresize=()=>{s<750?T.value=!1:T.value=!0},T.value,X(_.value,10),Y(g.value,10)});let l=i([]);const f=N(()=>b.value.topPoolsList),m=s=>(o,u)=>{let v=o[s],a=u[s];return v-a},d=s=>(o,u)=>{let v=o[s];return u[s]-v},C=i(!1),j=i(!1),H=i(!1),P=i(!1),y=i(!1),S=i(!0),W=i(!1),B=i(!1),$=i(!1),w=i(!1),V=i(!1),I=i(!1),E=i(!1),R=i(!1),F=i(!0),A=i(!1),K=i(!1),ne=i("Volume (24H)"),ae=i(["TVL","Volume (7D)","APR"]),Q=i(!1),te=i("Volume (24H)"),re=i(["Price","TVL","Price Change"]),ge=s=>{const o=f;if(s=="tvl_in_usd"?(y.value?(C.value=!C.value,o.value.sort(C.value?m(s):d(s))):o.value.sort(d(s)),j.value=!1,H.value=!1,P.value=!1,y.value=!0,S.value=!1,W.value=!1,B.value=!1):s=="vol_in_usd_24h"?(S.value?(j.value=!j.value,o.value.sort(j.value?m(s):d(s))):o.value.sort(d(s)),C.value=!1,H.value=!1,P.value=!1,y.value=!1,S.value=!0,W.value=!1,B.value=!1):s=="vol_in_usd_7_day"?(W.value?(H.value=!H.value,o.value.sort(H.value?m(s):d(s))):o.value.sort(d(s)),C.value=!1,j.value=!1,P.value=!1,y.value=!1,S.value=!1,W.value=!0,B.value=!1):s=="aprNum"&&(B.value?(P.value=!P.value,o.value.sort(P.value?m(s):d(s))):o.value.sort(d(s)),C.value=!1,j.value=!1,H.value=!1,y.value=!1,S.value=!1,W.value=!1,B.value=!0),console.log(o.value,"===>>>>>poolsListArray.value"),console.log(_.value,"===>>>>>currentPools.value"),o.value.length<10)l.value=o.value.slice(0,10);else{const u=_.value*10;l.value=o.value.slice(u-10,u)}},me=s=>{const o=G;if(s=="price"?(E.value?($.value=!$.value,o.value.sort($.value?m(s):d(s))):o.value.sort(d(s)),w.value=!1,V.value=!1,I.value=!1,E.value=!0,R.value=!1,F.value=!1,A.value=!1):s=="vol_in_usd_24h"?(F.value?(V.value=!V.value,o.value.sort(V.value?m(s):d(s))):o.value.sort(d(s)),$.value=!1,w.value=!1,I.value=!1,E.value=!1,R.value=!1,F.value=!0,A.value=!1):s=="tvl_in_usd"?(A.value?(I.value=!I.value,o.value.sort(I.value?m(s):d(s))):o.value.sort(d(s)),$.value=!1,w.value=!1,V.value=!1,E.value=!1,R.value=!1,F.value=!1,A.value=!0):s=="priceHour"&&(R.value?(w.value=!w.value,o.value.sort(w.value?m(s):d(s))):o.value.sort(d(s)),$.value=!1,V.value=!1,I.value=!1,E.value=!1,R.value=!0,F.value=!1,A.value=!1),console.log(o.value,"===>>>>>tokensListArray.value"),console.log(g.value,"===>>>>>tokensListArray.value"),o.value.length<10)D.value=o.value.slice(0,10);else{const u=g.value*10;D.value=o.value.slice(u-10,u)}},be=s=>{s=="label"?(Q.value=!Q.value,K.value=!1):s=="select"?(K.value=!K.value,Q.value=!1):(K.value=!1,Q.value=!1)},Te=s=>{const o=[];o.push(ne.value),ae.value.forEach((u,v)=>{u!=s&&o.push(u)}),ae.value=o,ne.value=s,s=="TVL"?l.value.sort(d("tvl_in_usd")):s=="Volume (24H)"?l.value.sort(d("vol_in_usd_24h")):s=="Volume (7D)"?l.value.sort(d("vol_in_usd_7_day")):s=="APR"&&l.value.sort(d("aprNum"))},Ce=s=>{console.log(s,"===>>>>search-select");const o=[];o.push(te.value),re.value.forEach((u,v)=>{u!=s&&o.push(u)}),re.value=o,te.value=s,s=="TVL"?D.value.sort(d("tvl_in_usd")):s=="Volume (24H)"?D.value.sort(d("vol_in_usd_24h")):s=="Price"?D.value.sort(d("price")):s=="Price Change"&&D.value.sort(d("priceHour"))};he(f,()=>{T.value,X(_.value,10)});const X=(s,o)=>{console.log(s,"page"),_.value=s;const u=o*s-o;let v=o*s;console.log(f,"===>>>>>topPoolsList"),v=v>f.value.length?f.value.length:v;const a=f.value;if(a.length>0){y.value&&!C.value?a.sort(Ie):y.value&&C.value?a.sort(He):S.value?j.value?a.sort(Pe):a.sort(Le):W.value?H.value?a.sort(ye):a.sort(Oe):B.value&&(P.value?a.sort($e):a.sort(je));const q=a.filter((ie,Z)=>Z>=u&&Z<v);l.value=q}return a},Ie=(s,o)=>o.tvl_in_usd-s.tvl_in_usd,Le=(s,o)=>o.vol_in_usd_24h-s.vol_in_usd_24h,Oe=(s,o)=>o.vol_in_usd_7_day-s.vol_in_usd_7_day,je=(s,o)=>o.aprNum-s.aprNum,He=(s,o)=>s.tvl_in_usd-o.tvl_in_usd,Pe=(s,o)=>s.vol_in_usd_24h-o.vol_in_usd_24h,ye=(s,o)=>s.vol_in_usd_7_day-o.vol_in_usd_7_day,$e=(s,o)=>s.aprNum-o.aprNum;let D=i(null);const G=N(()=>{const s=b.value.topTokensList,o=[];for(let u=0;u<s.length;u++){const v=s[u];o.push({...v,priceHour:v?Number(v.price_rate_24h.substring(0,v.price_rate_24h.length-1)):"0",address:v.symbol=="SUI"?"0x2::sui::SUI":v.address})}return o});he(G,()=>{T.value,Y(g.value,10)});const Y=(s,o)=>{console.log(s,"page1"),g.value=s;const u=o*s-o;let v=o*s;v=v>G.value.length?G.value.length:v;const a=G.value;if(a.length>0){A.value&&!I.value?a.sort(we):A.value&&I.value?a.sort(Ne):E.value?$.value?a.sort(Ue):a.sort(Ve):R.value?w.value?a.sort(Se):a.sort(Ae):F.value&&(V.value?a.sort(We):a.sort(De));const q=a.filter((ie,Z)=>Z>=u&&Z<v);D.value=q}return a},we=(s,o)=>o.tvl_in_usd-s.tvl_in_usd,Ve=(s,o)=>o.price-s.price,Ae=(s,o)=>o.priceHour-s.priceHour,De=(s,o)=>o.vol_in_usd_24h-s.vol_in_usd_24h,Ne=(s,o)=>s.tvl_in_usd-o.tvl_in_usd,Ue=(s,o)=>s.price-o.price,Se=(s,o)=>s.priceHour-o.priceHour,We=(s,o)=>s.vol_in_usd_24h-o.vol_in_usd_24h,Be=s=>{const o=s.swap_account;return console.log(r.value.addressLpTokens[o].rewarder_infos,"==>&pools.value.addressLpTokens[address].rewarder_infos"),r.value.addressLpTokens&&r.value.addressLpTokens[o]&&r.value.addressLpTokens[o].rewarder_infos},Ee=s=>{if(!ue(s)&&!ue(r.value.addressLpTokens)&&!ue(r.value.tokensObj)){const o=s.swap_account;let v=r.value.addressLpTokens[o].rewarder_infos||[];const a=[];return v.forEach((q,ie)=>{console.log(r.value.tokensObj,"===>tokensObj"),a.push({...q,symbol:r.value.tokensObj[q.coinAddress].symbol,rewarderApr:s.rewarder_apr[ie],logoUrl:r.value.tokensObj[q.coinAddress].logoURI})}),console.log(a,"===>result111"),a}},Re=(s,o)=>s&&o?Ye(is.plus(de(s),de(o)),2)+"%":s,Fe=s=>{let o=0;return s&&s.forEach(u=>{console.log(u,"===>ele"),o+=de(String(u))}),String(o)},qe=()=>{z&&z.push("/stats-pools")},Me=()=>{z&&z.push("/stats-tokens")},ze=N(()=>(console.log(r.value.tokensObj,"===>pools.value.tokensObj"),r.value.tokensObj||{})),Ge=s=>{var o;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((o=r.value.tokensObj[s==null?void 0:s.address])==null?void 0:o.logo_url)||(b.value.theme==="default"?M("/image/coins/unknown.png"):M("/image/coins/sui-unknown.png"))},Je=N(()=>b.value.theme);return{tokensWarningObj:N(()=>r.value.tokensWarningObj),theme:Je,getCoinIcon:Ge,getRewarderInfo:Be,addCommom:k,store:b,importIcon:M,topPoolsList:f,addressTokens:pe,showEcharts:le,currentPools:_,onChangePools:X,currentTopPoolsList:l,onChangeTokens:Y,currentTokens:g,currentTopTokensList:D,topTokensList:G,router:z,isPc:T,getAprTotal:Re,getRewarderApr:Fe,toPoolsList:qe,toTokensList:Me,changePoolsList:ge,changeTokensList:me,tvlImprint:C,volHImprint:j,volDImprint:H,aprImprint:P,tokensPriceImprint:$,tokensPriceHImprint:w,tokensVolHImprint:V,tokensTvlImprint:I,labelToken:Q,select:K,selectValue:ne,selectList:ae,reviseValue:be,changeSort:Te,tokenValue:te,tokensList:re,changeSortLabel:Ce,tvlImprintHighlight:y,volHImprintHighlight:S,volDImprintHighlight:W,aprImprintHighlight:B,tokensPriceImprintHighlight:E,tokensPriceHImprintHighlight:R,tokensVolHImprintHighlight:F,tokensTvlImprintHighlight:A,rewardApr:Ee,getsad:oe,tokensObj:ze,decimalUi:ee}}});const U=e=>(ns("data-v-960780a5"),e=e(),as(),e),ds={class:"stats-container"},vs={class:"title"},cs={class:"top-tokens"},ps={class:"sort-by"},hs=U(()=>n("img",{src:_e,alt:""},null,-1)),ks=U(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),fs=[ks],_s={key:0,class:"select-item"},gs=["onClick"],ms=U(()=>n("img",{src:_e,alt:""},null,-1)),bs={class:"content"},Ts={class:"item"},Cs=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Is=[Cs],Ls=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Os=[Ls],js=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Hs=[js],Ps=U(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),ys=[Ps],$s=U(()=>n("span",null," ",-1)),ws={key:0,class:"upgrade-loading"},Vs={class:"token"},As={class:"left"},Ds=["onerror"],Ns={key:0,class:"pool-warning"},Us={class:"right"},Ss={class:"name"},Ws={key:0,class:"label-all"},Bs={class:"price"},Es={class:"price"},Rs={class:"volume"},Fs={class:"tvl"},qs={class:"btn-box"},Ms={key:2,class:"upgrade-loading"},zs={class:"top"},Gs={class:"token"},Js={class:"left"},Ks=["onerror"],Qs={key:0,class:"pool-warning"},Xs={class:"right"},Ys={class:"name"},Zs={key:0,class:"label-all"},xs={class:"middle"},eo={class:"item-pools"},so={class:"price"},oo={class:"item-pools"},lo={class:"item-pools"},no={class:"item-pools"},ao={class:"bottom"},to={class:"panation"};function ro(e,r,pe,se,b,z){const le=Ke,_=Qe,g=ts,T=ls,oe=os("image");return p(),h("div",ds,[n("div",vs,[J(le),L(" "+t(e.$t("common.tokens")),1)]),n("div",cs,[n("div",ps,[n("div",null,t(e.$t("newAdd.sortBy")),1),n("div",{class:"search-select",onClick:r[0]||(r[0]=l=>e.reviseValue("label"))},[n("div",null,[L(t(e.tokenValue)+" ",1),hs]),(p(),h("svg",{"aria-hidden":"true",class:O(e.labelToken?"show-icon icon":"icon")},fs,2)),e.labelToken?(p(),h("div",_s,[(p(!0),h(ve,null,ce(e.tokensList,(l,f)=>(p(),h("div",{key:f,class:"select-menu-item",onClick:m=>e.changeSortLabel(l)},[L(t(l)+" ",1),ms],8,gs))),128))])):x("",!0)])]),n("div",bs,[n("div",Ts,[n("span",null,t(e.$t("common.tokens")),1),n("span",{onClick:r[1]||(r[1]=l=>e.changeTokensList("price"))},[L(t(e.$t("common.price"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:O(["pools-icon",e.tokensPriceImprint?e.tokensPriceImprintHighlight?"selected highlight":"selected":e.tokensPriceImprintHighlight?"highlight":""])},Is,2))]),n("span",{onClick:r[2]||(r[2]=l=>e.changeTokensList("priceHour"))},[L(t(e.$t("newAdd.priceChange"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:O(["pools-icon",e.tokensPriceHImprint?e.tokensPriceHImprintHighlight?"selected highlight":"selected":e.tokensPriceHImprintHighlight?"highlight":""])},Os,2))]),n("span",{onClick:r[3]||(r[3]=l=>e.changeTokensList("vol_in_usd_24h"))},[L(t(e.$t("common.volume24h"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:O(["pools-icon",e.tokensVolHImprint?e.tokensVolHImprintHighlight?"selected highlight":"selected":e.tokensVolHImprintHighlight?"highlight":""])},Hs,2))]),n("span",{onClick:r[4]||(r[4]=l=>e.changeTokensList("tvl_in_usd"))},[L(t(e.$t("common.tvl"))+" ",1),(p(),h("svg",{"aria-hidden":"true",class:O(["pools-icon",e.tokensTvlImprint?e.tokensTvlImprintHighlight?"selected highlight":"selected":e.tokensTvlImprintHighlight?"highlight":""])},ys,2))]),$s]),e.currentTopTokensList?(p(!0),h(ve,{key:1},ce(e.currentTopTokensList,(l,f)=>(p(),h("div",{key:f,class:"item pc-item"},[n("div",Vs,[n("div",As,[n("div",null,[ke(n("img",{onerror:e.theme=="default"?("importIcon"in e?e.importIcon:c(M))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:c(M))("/image/coins/sui-unknown.png"),alt:""},null,8,Ds),[[oe,e.getCoinIcon(e.addressTokens&&e.addressTokens[l.address])]]),e.tokensWarningObj&&!e.tokensWarningObj[l.address]?(p(),h("div",Ns)):x("",!0)])]),n("div",Us,[n("div",Ss,[n("p",null,t(l.symbol),1),n("span",null,t(l.name)+" ",1)]),e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?(p(),h("div",Ws,[n("div",{class:O(["label",e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]])},[n("span",null,t(e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?`${e.tokensObj[l.address].labels[0]}`:""),1)],2)])):x("",!0)])]),n("div",Bs,[n("p",null,t(l.price?"$"+(Number(l.price)>1?("addCommom"in e?e.addCommom:c(k))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,2)):("addCommom"in e?e.addCommom:c(k))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,4))):"--"),1)]),n("div",Es,[n("p",{class:O(l.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},t(l.price_rate_24h!=="0%"&&!l.price_rate_24h.includes("-")?`+${l.price_rate_24h}`:l.price_rate_24h),3)]),n("div",Rs," $"+t(("addCommom"in e?e.addCommom:c(k))(l.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(k))(l.vol_in_usd_24h,2)?("addCommom"in e?e.addCommom:c(k))(l.vol_in_usd_24h,2):"--"),1),n("div",Fs," $"+t(("addCommom"in e?e.addCommom:c(k))(l.tvl_in_usd,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(k))(l.tvl_in_usd,2)?("addCommom"in e?e.addCommom:c(k))(l.tvl_in_usd,2):"--"),1),n("div",qs,[J(g,{class:"cancel-btn",onClick:m=>e.router.push(`/swap?to=${l.address}`)},{default:fe(()=>[L(t(e.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)):(p(),h("div",ws,[J(_,{loading:!0,type:"statsTokens"})])),e.currentTopTokensList?(p(!0),h(ve,{key:3},ce(e.currentTopTokensList,(l,f)=>(p(),h("div",{key:f,class:"item h5-item"},[n("div",zs,[n("div",Gs,[n("div",Js,[n("div",null,[ke(n("img",{onerror:e.theme=="default"?("importIcon"in e?e.importIcon:c(M))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:c(M))("/image/coins/sui-unknown.png"),alt:""},null,8,Ks),[[oe,e.getCoinIcon(e.addressTokens&&e.addressTokens[l.address])]]),e.tokensWarningObj&&!e.tokensWarningObj[l.address]?(p(),h("div",Qs)):x("",!0)])]),n("div",Xs,[n("div",Ys,[n("p",null,t(l.symbol),1),n("span",null,t(l.name)+" ",1)]),e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?(p(),h("div",Zs,[n("div",{class:O(["label",e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]])},[n("span",null,t(e.tokensObj&&e.tokensObj[l.address]&&e.tokensObj[l.address].labels&&e.tokensObj[l.address].labels[0]?`${e.tokensObj[l.address].labels[0]}`:""),1)],2)])):x("",!0)])])]),n("div",xs,[n("div",eo,[n("span",null,t(e.$t("common.price")),1),n("div",so,[n("p",null,t(l.price?"$"+(Number(l.price)>1?("addCommom"in e?e.addCommom:c(k))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,2)):("addCommom"in e?e.addCommom:c(k))(("decimalUi"in e?e.decimalUi:c(ee))(l.price,4))):"--"),1)])]),n("div",oo,[n("span",null,t(e.$t("newAdd.priceChange")),1),n("p",{class:O(l.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},t(l.price_rate_24h),3)]),n("div",lo,[n("span",null,t(e.$t("common.volume24h")),1),n("p",null," $"+t(("addCommom"in e?e.addCommom:c(k))(l.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(k))(l.vol_in_usd_24h,2)),1)]),n("div",no,[n("span",null,t(e.$t("common.tvl")),1),n("p",null," $"+t(("addCommom"in e?e.addCommom:c(k))(l.tvl_in_usd,2)=="0.00"?0:("addCommom"in e?e.addCommom:c(k))(l.tvl_in_usd,2)),1)])]),n("div",ao,[J(g,{class:"cancel-btn",onClick:m=>e.router.push(`/swap?to=${l.address}`)},{default:fe(()=>[L(t(e.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)):(p(),h("div",Ms,[J(_,{loading:!0,type:"statsTokenH5"})]))]),n("div",to,[J(T,{current:e.currentTokens,"onUpdate:current":r[5]||(r[5]=l=>e.currentTokens=l),"page-size":(e.isPc,10),simple:"",total:e.topTokensList.length,onChange:e.onChangeTokens},null,8,["current","page-size","total","onChange"])])])])}const Io=ss(us,[["render",ro],["__scopeId","data-v-960780a5"]]);export{Io as default};
