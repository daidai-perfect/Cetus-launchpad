import{_ as Xs}from"./back.dbf6b7a9.js";import{_ as Ys}from"./apr-tips.4df57bc2.js";import{_ as Zs}from"./upgrade-loading.3501cb36.js";import{i as P}from"./import-icon.de3e6c66.js";import{u as xs,b as J,c as Y,s as se,t as cs,f as ee}from"./pool.a567b30c.js";import{a as oe,m as B,b as le,r as c,y as ne,D as _s,e as ae,q as re,o as t,f as u,h as n,i as $,j as I,v as i,z as D,F as os,s as ls,x as w,$ as te,t as as,u as g,w as hs,p as ue,k as de,B as ie}from"./entry.ea57915f.js";/* empty css              */import{u as ve}from"./index.4cb2b268.js";import{p as ce}from"./precision.a7a6c57b.js";import{_ as fs}from"./icon_on_stats.cdf13a69.js";import{_ as gs}from"./icon-Rewards.8f0969f8.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const pe=oe({setup(){const s=xs(),a=B(()=>s),ps=B(()=>a.value.tokensObj||{}),ns=ve(),H=B(()=>ns),K=le();let rs=c("big");const T=c(1),b=c(1);let L=c(!1);const ts=()=>{ns.getStatsData(H.value.chainName,H.value.filterCoinsObj)};ne(()=>{ns.getStatsData(H.value.chainName,H.value.filterCoinsObj);const e=document.body.clientWidth;e<750?L.value=!1:L.value=!0,window.onresize=()=>{e<750?L.value=!1:L.value=!0},L.value,ss(T.value,10),es(b.value,10)});let k=c(null);const o=B(()=>H.value.topPoolsList),f=e=>(l,d)=>{let p=l[e],v=d[e];return p-v},r=e=>(l,d)=>{let p=l[e];return d[e]-p},h=c(!1),_=c(!1),y=c(!1),V=c(!1),m=c(!0),E=c(!1),U=c(!1),F=c(!1),O=c(!1),j=c(!1),N=c(!1),A=c(!1),q=c(!1),z=c(!1),M=c(!1),R=c(!0),Z=c(!1),us=c("TVL"),ds=c(["Volume (24H)","Volume (7D)","APR"]),x=c(!1),is=c("TVL"),vs=c(["Price","Volume (24H)","Price Change"]),ks=e=>{const l=o;if(e=="tvl_in_usd"?(m.value?(h.value=!h.value,l.value.sort(h.value?f(e):r(e))):l.value.sort(r(e)),_.value=!1,y.value=!1,V.value=!1,m.value=!0,E.value=!1,U.value=!1,F.value=!1):e=="vol_in_usd_24h"?(E.value?(_.value=!_.value,l.value.sort(_.value?f(e):r(e))):l.value.sort(r(e)),h.value=!1,y.value=!1,V.value=!1,m.value=!1,E.value=!0,U.value=!1,F.value=!1):e=="vol_in_usd_7_day"?(U.value?(y.value=!y.value,l.value.sort(y.value?f(e):r(e))):l.value.sort(r(e)),h.value=!1,_.value=!1,V.value=!1,m.value=!1,E.value=!1,U.value=!0,F.value=!1):e=="aprNum"&&(F.value?(V.value=!V.value,l.value.sort(V.value?f(e):r(e))):l.value.sort(r(e)),h.value=!1,_.value=!1,y.value=!1,m.value=!1,E.value=!1,U.value=!1,F.value=!0),console.log(l.value,"===>>>>>poolsListArray.value"),console.log(T.value,"===>>>>>currentPools.value"),l.value.length<10)k.value=l.value.slice(0,10);else{const d=T.value*10;k.value=l.value.slice(d-10,d)}},ws=e=>{const l=Q;if(e=="price"?(q.value?(O.value=!O.value,l.value.sort(O.value?f(e):r(e))):l.value.sort(r(e)),j.value=!1,N.value=!1,A.value=!1,q.value=!0,z.value=!1,M.value=!1,R.value=!1):e=="vol_in_usd_24h"?(M.value?(N.value=!N.value,l.value.sort(N.value?f(e):r(e))):l.value.sort(r(e)),O.value=!1,j.value=!1,A.value=!1,q.value=!1,z.value=!1,M.value=!0,R.value=!1):e=="tvl_in_usd"?(R.value?(A.value=!A.value,l.value.sort(A.value?f(e):r(e))):l.value.sort(r(e)),O.value=!1,j.value=!1,N.value=!1,q.value=!1,z.value=!1,M.value=!1,R.value=!0):e=="priceHour"&&(z.value?(j.value=!j.value,l.value.sort(j.value?f(e):r(e))):l.value.sort(r(e)),O.value=!1,N.value=!1,A.value=!1,q.value=!1,z.value=!0,M.value=!1,R.value=!1),console.log(l.value,"===>>>>>tokensListArray.value"),console.log(b.value,"===>>>>>tokensListArray.value"),l.value.length<10)W.value=l.value.slice(0,10);else{const d=b.value*10;W.value=l.value.slice(d-10,d)}},Ts=e=>{e=="label"?(x.value=!x.value,Z.value=!1):e=="select"?(Z.value=!Z.value,x.value=!1):(Z.value=!1,x.value=!1)},ys=e=>{const l=[];l.push(us.value),ds.value.forEach((d,p)=>{d!=e&&l.push(d)}),ds.value=l,us.value=e,e=="TVL"?k.value.sort(r("tvl_in_usd")):e=="Volume (24H)"?k.value.sort(r("vol_in_usd_24h")):e=="Volume (7D)"?k.value.sort(r("vol_in_usd_7_day")):e=="APR"&&k.value.sort(r("aprNum"))},bs=e=>{console.log(e,"===>>>>search-select");const l=[];l.push(is.value),vs.value.forEach((d,p)=>{d!=e&&l.push(d)}),vs.value=l,is.value=e,e=="TVL"?W.value.sort(r("tvl_in_usd")):e=="Volume (24H)"?W.value.sort(r("vol_in_usd_24h")):e=="Price"?W.value.sort(r("price")):e=="Price Change"&&W.value.sort(r("priceHour"))};_s(o,()=>{L.value,ss(T.value,10)});const ss=(e,l)=>{console.log(e,"page"),T.value=e;const d=l*e-l;let p=l*e;console.log(o,"===>>>>>topPoolsList"),p=p>o.value.length?o.value.length:p;const v=o.value;if(v.length>0){m.value&&!h.value?v.sort(Ls):m.value&&h.value?v.sort(Cs):E.value?_.value?v.sort(As):v.sort(Is):U.value?y.value?v.sort($s):v.sort(Ps):F.value&&(V.value?v.sort(Ds):v.sort(Hs));const X=v.filter((G,S)=>S>=d&&S<p);k.value=X}return v},Ls=(e,l)=>l.tvl_in_usd-e.tvl_in_usd,Is=(e,l)=>l.vol_in_usd_24h-e.vol_in_usd_24h,Ps=(e,l)=>l.vol_in_usd_7_day-e.vol_in_usd_7_day,Hs=(e,l)=>l.aprNum-e.aprNum,Cs=(e,l)=>e.tvl_in_usd-l.tvl_in_usd,As=(e,l)=>e.vol_in_usd_24h-l.vol_in_usd_24h,$s=(e,l)=>e.vol_in_usd_7_day-l.vol_in_usd_7_day,Ds=(e,l)=>e.aprNum-l.aprNum;let W=c([]);const Q=B(()=>{const e=H.value.topTokensList,l=[];for(let d=0;d<e.length;d++){const p=e[d];l.push({...p,priceHour:p?Number(p.price_rate_24h.substring(0,p.price_rate_24h.length-1)):"0"})}return l});_s(Q,()=>{L.value,es(b.value,10)});const es=(e,l)=>{console.log(e,"page1"),b.value=e;const d=l*e-l;let p=l*e;p=p>Q.value.length?Q.value.length:p;const v=Q.value;if(v.length>0){R.value&&!A.value?v.sort(Vs):R.value&&A.value?v.sort(Ns):q.value?O.value?v.sort(Rs):v.sort(ms):z.value?j.value?v.sort(Ws):v.sort(Os):M.value&&(N.value?v.sort(Ss):v.sort(js));const X=v.filter((G,S)=>S>=d&&S<p);W.value=X}return v},Vs=(e,l)=>l.tvl_in_usd-e.tvl_in_usd,ms=(e,l)=>l.price-e.price,Os=(e,l)=>l.priceHour-e.priceHour,js=(e,l)=>l.vol_in_usd_24h-e.vol_in_usd_24h,Ns=(e,l)=>e.tvl_in_usd-l.tvl_in_usd,Rs=(e,l)=>e.price-l.price,Ws=(e,l)=>e.priceHour-l.priceHour,Ss=(e,l)=>e.vol_in_usd_24h-l.vol_in_usd_24h,Bs=e=>{const l=e.swap_account;return console.log(a.value.addressLpTokens[l].rewarder_infos,"==>&pools.value.addressLpTokens[address].rewarder_infos"),a.value.addressLpTokens&&a.value.addressLpTokens[l]&&a.value.addressLpTokens[l].rewarder_infos},Es=e=>{const l=e.swap_account;return a.value.addressLpTokens&&a.value.addressLpTokens[l]&&a.value.addressLpTokens[l].labels},Us=e=>{if(!Y(e)&&!Y(a.value.addressLpTokens)&&!Y(a.value.tokensObj)){const l=a.value.addressLpTokens[e.swap_account];return l==null?void 0:l.is_display_rewarder}else return!1},Fs=e=>{if(!Y(e)&&!Y(a.value.addressLpTokens)&&!Y(a.value.tokensObj)){const l=e.swap_account,d=a.value.addressLpTokens[l];let p=(d==null?void 0:d.rewarder_infos)||[];const v=[];p.forEach((G,S)=>{console.log(a.value.tokensObj,"===>tokensObj"),v.push({...G,symbol:a.value.tokensObj[G.coinAddress].symbol,rewarderApr:e.rewarder_apr[S],logoUrl:a.value.tokensObj[G.coinAddress].logoURI,rewarder_display:d[`rewarder_display${S+1}`]})});let X=[];return X=v.filter(G=>G.rewarder_display),X}},qs=(e,l)=>e&&l?se(ce.plus(cs(e),cs(l)),2)+"%":e,zs=e=>{let l=0;return e&&e.forEach(d=>{l+=cs(String(d))}),String(ee(String(l),2))},Ms=()=>{K&&K.push("/stats-pools")},Gs=()=>{K&&K.push("/stats-tokens")},Js=e=>{var l;return(e==null?void 0:e.logoURI)||(e==null?void 0:e.logo_url)||((l=a.value.tokensObj[e==null?void 0:e.address])==null?void 0:l.logo_url)||(H.value.theme==="default"?P("/image/coins/unknown.png"):P("/image/coins/sui-unknown.png"))},Ks=B(()=>a.value.tokensObj),Qs=B(()=>H.value.theme);return{tokensWarningObj:B(()=>a.value.tokensWarningObj),theme:Qs,tokensObj:Ks,getCoinIcon:Js,getRewarderInfo:Bs,addCommom:J,store:H,importIcon:P,topPoolsList:o,addressTokens:ps,showEcharts:rs,currentPools:T,onChangePools:ss,currentTopPoolsList:k,onChangeTokens:es,currentTokens:b,currentTopTokensList:W,topTokensList:Q,router:K,isPc:L,getAprTotal:qs,getRewarderApr:zs,toPoolsList:Ms,toTokensList:Gs,changePoolsList:ks,changeTokensList:ws,tvlImprint:h,volHImprint:_,volDImprint:y,aprImprint:V,tokensPriceImprint:O,tokensPriceHImprint:j,tokensVolHImprint:N,tokensTvlImprint:A,labelToken:x,select:Z,selectValue:us,selectList:ds,reviseValue:Ts,changeSort:ys,tokenValue:is,tokensList:vs,changeSortLabel:bs,tvlImprintHighlight:m,volHImprintHighlight:E,volDImprintHighlight:U,aprImprintHighlight:F,tokensPriceImprintHighlight:q,tokensPriceHImprintHighlight:z,tokensVolHImprintHighlight:M,tokensTvlImprintHighlight:R,getLabel:Es,rewardApr:Fs,getsad:ts,rewardDisplay:Us}}});const C=s=>(ue("data-v-68d720f9"),s=s(),de(),s),_e={class:"stats-container"},he={class:"title"},fe={class:"top-pools-new"},ge={class:"sort-by"},ke=C(()=>n("img",{src:fs,alt:""},null,-1)),we=C(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),Te=[we],ye={key:0,class:"select-item"},be=["onClick"],Le=C(()=>n("img",{src:fs,alt:""},null,-1)),Ie={class:"content"},Pe={class:"item"},He=C(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ce=[He],Ae=C(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),$e=[Ae],De=C(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ve=[De],me=C(()=>n("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Oe=[me],je={class:"apr-hover-content"},Ne=C(()=>n("span",null," ",-1)),Re={key:0,class:"upgrade-loading"},We={class:"token"},Se=["onerror"],Be={key:1,class:"pool-warning"},Ee=["onerror"],Ue={key:1,class:"pool-warning"},Fe={class:"name"},qe={class:"token-name"},ze={class:"fee-tier-top"},Me={class:"label-all"},Ge={key:0},Je={class:"tvl"},Ke={class:"volume-hour"},Qe={class:"volume-day"},Xe=C(()=>n("img",{src:gs,alt:""},null,-1)),Ye={key:0,class:"apr-hover-content"},Ze={class:"btn-box"},xe={key:2,class:"upgrade-loading"},so={class:"top"},eo={class:"token"},oo=["onerror"],lo={key:1,class:"pool-warning"},no=["onerror"],ao={key:1,class:"pool-warning"},ro={class:"name"},to={class:"token-name"},uo={class:"label-all"},io={key:0},vo={class:"fee-tier-hint"},co={class:"middle"},po={class:"item-pools"},_o={class:"item-pools"},ho={class:"item-pools"},fo=C(()=>n("img",{src:gs,alt:""},null,-1)),go={key:0,class:"apr-hover-content"},ko={class:"bottom"},wo={class:"panation"};function To(s,a,ps,ns,H,K){const rs=Xs,T=Ys,b=Zs,L=ie,ts=te,k=re("image");return t(),u("div",_e,[n("div",he,[$(rs),I(" "+i(s.$t("menu.pools")),1)]),n("div",fe,[n("div",ge,[n("div",null,i(s.$t("newAdd.sortBy")),1),n("div",{class:"search-select",onClick:a[0]||(a[0]=o=>s.reviseValue("select"))},[n("div",null,[I(i(s.selectValue)+" ",1),ke]),(t(),u("svg",{"aria-hidden":"true",class:D(s.select?"show-icon icon":"icon")},Te,2)),s.select?(t(),u("div",ye,[(t(!0),u(os,null,ls(s.selectList,(o,f)=>(t(),u("div",{key:f,class:"select-menu-item",onClick:r=>s.changeSort(o)},[I(i(o)+" ",1),Le],8,be))),128))])):w("",!0)])]),n("div",Ie,[n("div",Pe,[n("span",null,i(s.$t("newAdd.pool")),1),n("span",{onClick:a[1]||(a[1]=o=>s.changePoolsList("tvl_in_usd"))},[I(i(s.$t("common.tvl"))+" ",1),(t(),u("svg",{"aria-hidden":"true",class:D(["pools-icon",s.tvlImprint?s.tvlImprintHighlight?"selected highlight":"selected":s.tvlImprintHighlight?"highlight":""])},Ce,2))]),n("span",{onClick:a[2]||(a[2]=o=>s.changePoolsList("vol_in_usd_24h"))},[I(i(s.$t("common.volume24H"))+" ",1),(t(),u("svg",{"aria-hidden":"true",class:D(["pools-icon",s.volHImprint?s.volHImprintHighlight?"selected highlight":"selected":s.volHImprintHighlight?"highlight":""])},$e,2))]),n("span",{onClick:a[3]||(a[3]=o=>s.changePoolsList("vol_in_usd_7_day"))},[I(i(s.$t("newAdd.volume7D"))+" ",1),(t(),u("svg",{"aria-hidden":"true",class:D(["pools-icon",s.volDImprint?s.volDImprintHighlight?"selected highlight":"selected":s.volDImprintHighlight?"highlight":""])},Ve,2))]),n("span",{onClick:a[4]||(a[4]=o=>s.changePoolsList("aprNum"))},[I(" APR "),(t(),u("svg",{"aria-hidden":"true",class:D(["pools-icon",s.aprImprint?s.aprImprintHighlight?"selected highlight":"selected":s.aprImprintHighlight?"highlight":""])},Oe,2)),n("div",je,[$(T,{class:"noHover apr-hover-con"})])]),Ne]),s.currentTopPoolsList?(t(!0),u(os,{key:1},ls(s.currentTopPoolsList,(o,f)=>{var r,h;return t(),u("div",{key:f,class:"item pc-item"},[n("div",We,[n("div",null,[o!=null&&o.token_a_address?as((t(),u("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:g(P))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:g(P))("/image/coins/sui-unknown.png")},null,8,Se)),[[k,s.getCoinIcon(o.is_forward!==!1?s.addressTokens&&s.addressTokens[o.token_a_address]:s.addressTokens&&s.addressTokens[o.token_b_address])]]):w("",!0),s.tokensWarningObj&&!s.tokensWarningObj[o.token_a_address]?(t(),u("div",Be)):w("",!0)]),n("div",null,[o!=null&&o.token_b_address?as((t(),u("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:g(P))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:g(P))("/image/coins/sui-unknown.png")},null,8,Ee)),[[k,s.getCoinIcon(o.is_forward!==!1?s.addressTokens&&s.addressTokens[o.token_b_address]:s.addressTokens&&s.addressTokens[o.token_a_address])]]):w("",!0),s.tokensWarningObj&&!s.tokensWarningObj[o.token_b_address]?(t(),u("div",Ue)):w("",!0)]),n("div",Fe,[n("p",qe,i(o.token_a_reserves)+" - "+i(o.token_b_reserves),1),n("div",ze,i((o==null?void 0:o.fee)*100)+"%",1),n("div",Me,[(t(!0),u(os,null,ls(s.getLabel(o),(_,y)=>(t(),u("div",{key:y,class:D(["label",_])},[_!=="Native"?(t(),u("span",Ge,i(_),1)):w("",!0)],2))),128))])])]),n("div",Je," $"+i(o.tvl_in_usd?("addCommom"in s?s.addCommom:g(J))(o.tvl_in_usd,2):"--"),1),n("div",Ke," $"+i(o!=null&&o.vol_in_usd_24h?("addCommom"in s?s.addCommom:g(J))(o==null?void 0:o.vol_in_usd_24h,2):"--"),1),n("div",Qe," $"+i(o!=null&&o.vol_in_usd_7_day?("addCommom"in s?s.addCommom:g(J))(o==null?void 0:o.vol_in_usd_7_day,2):"--"),1),n("div",{class:D(["apr",((r=s.rewardApr(o))==null?void 0:r.length)>0&&s.rewardDisplay(o)?"apr-mark":""])},[Xe,I(" "+i(s.getAprTotal(o.apr_7day,s.getRewarderApr(o.rewarder_apr)))+" ",1),((h=s.rewardApr(o))==null?void 0:h.length)!=0&&s.rewardDisplay(o)?(t(),u("div",Ye,[$(T,{class:"noHover apr-hover-con","l-item":{apr:o.apr_7day,aprTotal:s.getAprTotal(o.apr_7day,s.getRewarderApr(o.rewarder_apr)),is_display_rewarder:s.rewardDisplay(o),rewarder_apr:s.getRewarderApr(o.rewarder_apr)},"rewarder-info":s.rewardApr(o)},null,8,["l-item","rewarder-info"])])):w("",!0)],2),n("div",Ze,[$(L,{class:"cancel-btn",onClick:()=>s.router.push(`/deposit?tokena=${o==null?void 0:o.token_a_address}&tokenb=${o==null?void 0:o.token_b_address}&fee=${o==null?void 0:o.fee}`)},{default:hs(()=>[I(i(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(t(),u("div",Re,[$(b,{loading:!0,type:"statsTokens"})])),s.currentTopPoolsList?(t(!0),u(os,{key:3},ls(s.currentTopPoolsList,(o,f)=>{var r,h;return t(),u("div",{key:f,class:"item h5-item"},[n("div",so,[n("div",eo,[n("div",null,[o!=null&&o.token_a_address?as((t(),u("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:g(P))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:g(P))("/image/coins/sui-unknown.png")},null,8,oo)),[[k,s.getCoinIcon(o.is_forward!==!1?s.addressTokens&&s.addressTokens[o.token_a_address]:s.addressTokens&&s.addressTokens[o.token_b_address])]]):w("",!0),s.tokensWarningObj&&!s.tokensWarningObj[o.token_a_address]?(t(),u("div",lo)):w("",!0)]),n("div",null,[o!=null&&o.token_b_address?as((t(),u("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:g(P))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:g(P))("/image/coins/sui-unknown.png")},null,8,no)),[[k,s.getCoinIcon(o.is_forward!==!1?s.addressTokens&&s.addressTokens[o.token_b_address]:s.addressTokens&&s.addressTokens[o.token_a_address])]]):w("",!0),s.tokensWarningObj&&!s.tokensWarningObj[o.token_b_address]?(t(),u("div",ao)):w("",!0)]),n("div",ro,[n("p",to,i(o.token_a_reserves)+" - "+i(o.token_b_reserves),1),n("div",uo,[(t(!0),u(os,null,ls(s.getLabel(o),(_,y)=>(t(),u("div",{key:y,class:D(["label",_])},[_!=="Native"?(t(),u("span",io,i(_),1)):w("",!0)],2))),128))])])]),n("div",vo,i((o==null?void 0:o.fee)*100)+"%",1)]),n("div",co,[n("div",po,[n("span",null,i(s.$t("common.tvl")),1),n("p",null," $"+i(o.tvl_in_usd?("addCommom"in s?s.addCommom:g(J))(o.tvl_in_usd,2):"--"),1)]),n("div",_o,[n("span",null,i(s.$t("common.volume24H")),1),n("p",null," $"+i(o!=null&&o.vol_in_usd_24h?("addCommom"in s?s.addCommom:g(J))(o==null?void 0:o.vol_in_usd_24h,2):"--"),1)]),n("div",ho,[n("span",null,i(s.$t("newAdd.volume7D")),1),n("p",null," $"+i(o!=null&&o.vol_in_usd_7_day?("addCommom"in s?s.addCommom:g(J))(o==null?void 0:o.vol_in_usd_7_day,2):"--"),1)]),n("div",{class:D(["item-pools",((r=s.rewardApr(o))==null?void 0:r.length)>0&&s.rewardDisplay(o)?"":"apr-mark-h5"])},[n("span",null,i(s.$t("common.apr")),1),n("p",null,[fo,I(" "+i(s.getAprTotal(o.apr_7day,s.getRewarderApr(o.rewarder_apr))),1)]),((h=s.rewardApr(o))==null?void 0:h.length)!=0&&s.rewardDisplay(o)?(t(),u("div",go,[$(T,{class:"noHover apr-hover-con","l-item":{apr:o.apr_7day,aprTotal:s.getAprTotal(o.apr_7day,s.getRewarderApr(o.rewarder_apr)),is_display_rewarder:s.rewardDisplay(o),rewarder_apr:s.getRewarderApr(o.rewarder_apr)},"rewarder-info":s.rewardApr(o)},null,8,["l-item","rewarder-info"])])):w("",!0)],2)]),n("div",ko,[$(L,{class:"cancel-btn",onClick:()=>s.router.push(`/deposit?tokena=${o==null?void 0:o.token_a_address}&tokenb=${o==null?void 0:o.token_b_address}&fee=${o==null?void 0:o.fee}`)},{default:hs(()=>[I(i(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(t(),u("div",xe,[$(b,{loading:!0,type:"statsTokenH5"})]))]),n("div",wo,[$(ts,{current:s.currentPools,"onUpdate:current":a[5]||(a[5]=o=>s.currentPools=o),"page-size":(s.isPc,10),simple:"",total:s.topPoolsList.length,onChange:s.onChangePools},null,8,["current","page-size","total","onChange"])])])])}const Ro=ae(pe,[["render",To],["__scopeId","data-v-68d720f9"]]);export{Ro as default};
