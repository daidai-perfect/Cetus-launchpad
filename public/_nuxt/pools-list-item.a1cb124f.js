import{_ as ie}from"./coin-tips.91163564.js";import{_ as de}from"./apr-tips.93b7b24d.js";import{_ as me}from"./nuxt-link.38fb7eb2.js";import{a as ue,u as ce,c as re}from"./sha256.dd756687.js";import{u as Ie,c as p,j as oe,a as A,K as ve,L as pe}from"./pool.6ba7e8d0.js";import{i as _}from"./import-icon.de3e6c66.js";import{a as ge,r as se,C as he,L as fe,y as we,b as ke,l as m,e as be,s as ye,o as t,f as a,h as o,x as g,u,A as b,t as K,j as G,v as l,i as y,F as ne,E as te,c as ae,w as le,M as Ae,S as _e,B as Se,p as je,k as Oe}from"./entry.0f97a10d.js";/* empty css              *//* empty css              */import{u as Be}from"./autoPool.3445efb8.js";import{_ as Ce,a as $e}from"./farms.8796131c.js";import{_ as Ne}from"./icon_autopools_2x.15b8444d.js";const Te=ge({props:{lItem:{type:Object,required:!0},isSelectAll:{type:Boolean,default:!1},isFarms:{type:Boolean,default:!1}},setup(e){const j=se(!1),Y=he(fe,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),{t:Z}=we(),$=ke(),x=ue(),N=m(()=>x),k=se(!1);function J(s){const r=s.balance,I=pe(r).div(Math.pow(10,s.decimals)).toString();return A(I,s.decimals)}const Q=s=>{k.value=!0,setTimeout(()=>{k.value=!1},2e3),console.log($,"==>router"),console.log(s,"===>pool163"),console.log("0428###toAdd###pool.address###",s.address),console.log("0428###toAdd###pool.coinA.address###",s.coinA.address),console.log("0428###toAdd###pool.coinB.address###",s.coinB.address),console.log("0428###toAdd###pool.fee###",s.fee),$.push(`/liquidity/deposit?poolAddress=${s.address}`)},X=Ie(),n=m(()=>X),O=m(()=>n.value.tokensObj&&e.lItem.coinA.address&&n.value.tokensObj[e.lItem.coinA.address]&&n.value.tokensObj[e.lItem.coinA.address].logo_url),T=m(()=>n.value.tokensObj&&e.lItem.coinB.address&&n.value.tokensObj[e.lItem.coinB.address]&&n.value.tokensObj[e.lItem.coinB.address].logo_url),B=ce(),c=m(()=>B),L=m(()=>c.value.theme),R=m(()=>{var h,f;let s=[],r={};if(console.log(e.lItem,"====335"),(h=e.lItem)!=null&&h.rewarderInfo)!p(n.value.tokensObj)&&!p(n.value.RATES)&&(s=(f=e.lItem)==null?void 0:f.rewarderInfo,r=n.value.tokensObj);else if(!p(c.value.addressLpTokens)&&!p(n.value.tokensObj)&&!p(n.value.RATES)&&!p(c.value.newTopPoolsObj)){const d=e.lItem.address&&c.value.addressLpTokens[e.lItem.address]&&c.value.addressLpTokens[e.lItem.address].rewarder_infos||[];console.log(c.value.addressLpTokens,"result===>"),s=d,console.log(s,"===>rewarderInfos"),r=n.value.tokensObj}const I=[];s.forEach((d,C)=>{var i,H,ee;const z=(i=r[d.coinAddress])==null?void 0:i.decimals,w=oe(d.emissionsEveryDay/Math.pow(10,z),4),M=Number(w)>0?A(w):w,W=oe(Number(w)*n.value.RATES[d.coinAddress]&&n.value.RATES[d.coinAddress].price,4);I.push({...d,logoUrl:(H=r[d.coinAddress])==null?void 0:H.logoURI,day:M,dayUSD:W,symbol:(ee=r[d.coinAddress])==null?void 0:ee.symbol,rewarders:e.lItem[`rewarders${C}`]&&e.lItem[`rewarders${C}`].replace("%",""),rewarder_display:e.lItem[`rewarder_display${C+1}`],resultDay:w})}),console.log(I,"===>mockArr");const v=I.filter(d=>d.rewarder_display);return v&&v.length>0?(console.log(v,"result===>380"),v):[]});console.log(e.lItem,"props.lItem====>");const F=m(()=>{var s,r,I,v,h,f;return(r=(s=e.lItem)==null?void 0:s.coinA)!=null&&r.address&&n.value.tokensWarningObj?!n.value.tokensWarningObj[(v=(I=e.lItem)==null?void 0:I.coinA)==null?void 0:v.address]||!n.value.tokensObj[(f=(h=e.lItem)==null?void 0:h.coinB)==null?void 0:f.address]:!1}),U=s=>{var r;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((r=n.value.tokensObj[s==null?void 0:s.address])==null?void 0:r.logo_url)||(B.theme==="default"?_("/image/coins/unknown.png"):_("/image/coins/sui-unknown.png"))},q=Be(),D=m(()=>q),P=m(()=>D.value.autoPoolObj),V=m(()=>c.value.chainName),E=m(()=>re[c.value.chainName]);return{checkNullObj:p,store:B,t:Z,isShow:j,indicator:Y,thousands:ve,importIcon:_,router:$,wallet:N,addCommom:A,getLpView:J,toAdd:Q,fromCoinUrl:O,toCoinUrl:T,addLiquidity:k,rewarderInfo:R,theme:L,isSelfBuilt:F,pools:n,getCoinIcon:U,autoPoolObj:P,chainName:V,config:E}}});const S=e=>(je("data-v-191fd1d9"),e=e(),Oe(),e),Le={class:"farming-and-vault"},Re={key:0,class:"isFarming"},Fe=S(()=>o("img",{class:"default-img",src:Ce,alt:""},null,-1)),Ue=S(()=>o("img",{class:"hover-img",src:$e,alt:""},null,-1)),qe=S(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),De=[Fe,Ue,qe],Pe=S(()=>o("div",{class:"hover-text"},"Vault available",-1)),Ve=S(()=>o("img",{src:Ne,alt:""},null,-1)),Ee=[Pe,Ve],ze=S(()=>o("div",{class:"topBg"},null,-1)),Me={class:"top"},We={key:0},He={key:1},Ke={class:"coin-name"},Ge={class:"token-a"},Je=S(()=>o("span",null," - ",-1)),Qe={class:"token-b"},Xe={key:0,class:"pool-warning"},Ye={class:"hover-text"},Ze={class:"symbol-label"},xe={class:"apr"},eo={key:0,class:"skeleton-box"},oo={class:"bottom"},so={class:"induction"},no={class:"item"},to={class:"induction-text"},ao={class:"induction-value"},lo={class:"item"},ro={class:"induction-text"},io={key:0,class:"induction-value"},mo={key:1,class:"induction-value"},uo={class:"item"},co={class:"induction-text"},Io={key:0,class:"induction-value"},vo={key:1,class:"induction-value"},po={key:0,class:"item rewards-item"},go={class:"induction-text"},ho={class:"induction-value induction-value-rewards"},fo={class:"rewards-hover"},wo={alt:""},ko={alt:""};function bo(e,j,Y,Z,$,x){var T,B,c,L,R,F,U,q,D,P,V,E,s,r,I,v,h,f,d,C,z,w,M,W;const N=ie,k=Ae,J=de,Q=_e,X=Se,n=me,O=ye("image");return t(),a("div",{class:b(["pools-list-item",e.isSelectAll||(T=e.lItem)!=null&&T.isAuthorized?e.isFarms?e.lItem.isFarming&&e.lItem.rewarderInfo&&e.lItem.rewarderInfo.length>0?"":"none":"":"none"])},[o("div",Le,[(B=e.lItem)!=null&&B.isFarming&&e.rewarderInfo&&e.rewarderInfo.length>0?(t(),a("div",Re,De)):g("",!0),e.chainName=="Sui"&&e.autoPoolObj[e.lItem.address]&&("config"in e?e.config:u(re)).hasVault?(t(),a("div",{key:1,class:b([(c=e.lItem)!=null&&c.isFarming&&e.rewarderInfo&&e.rewarderInfo.length>0?"isVaultAndFarming":"","isVault"])},Ee,2)):g("",!0)]),ze,o("div",Me,[o("div",{class:b(e.lItem.needReverse?"img-box reverse":"img-box")},[(L=e.lItem)!=null&&L.coinA?K((t(),a("img",We,null,512)),[[O,e.fromCoinUrl||e.getCoinIcon((R=e.lItem)==null?void 0:R.coinA)]]):g("",!0),(F=e.lItem)!=null&&F.coinB?K((t(),a("img",He,null,512)),[[O,e.toCoinUrl||e.getCoinIcon((U=e.lItem)==null?void 0:U.coinB)]]):g("",!0)],2),o("div",Ke,[o("div",Ge,[G(l(e.lItem.needReverse?(V=(P=e.lItem)==null?void 0:P.coinB)==null?void 0:V.symbol:(D=(q=e.lItem)==null?void 0:q.coinA)==null?void 0:D.symbol)+" ",1),y(N,{"coin-info":e.lItem.needReverse?(s=e.lItem)==null?void 0:s.coinB:(E=e.lItem)==null?void 0:E.coinA},null,8,["coin-info"])]),Je,o("div",Qe,[G(l(e.lItem.needReverse?(h=(v=e.lItem)==null?void 0:v.coinA)==null?void 0:h.symbol:(I=(r=e.lItem)==null?void 0:r.coinB)==null?void 0:I.symbol)+" ",1),y(N,{"coin-info":e.lItem.needReverse?(d=e.lItem)==null?void 0:d.coinA:(f=e.lItem)==null?void 0:f.coinB},null,8,["coin-info"])]),e.theme=="sui"&&((z=(C=e.pools)==null?void 0:C.tokensObj[e.lItem.coinA.address])!=null&&z.isSelfBuilt||(M=(w=e.pools)==null?void 0:w.tokensObj[e.lItem.coinB.address])!=null&&M.isSelfBuilt)?(t(),a("div",Xe,[o("div",Ye,l(e.t("newAdd.poolWarning")),1)])):g("",!0)]),o("div",Ze,[(t(!0),a(ne,null,te((W=e.lItem)==null?void 0:W.labels,(i,H)=>(t(),a("div",{key:H,class:b(["lable",i])},null,2))),128))]),o("div",xe,[("checkNullObj"in e?e.checkNullObj:u(p))(e.store.statsData)?(t(),a("div",eo,[y(k,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),a("span",{key:1,class:"apr-text",onClick:j[0]||(j[0]=i=>e.isShow=!e.isShow)},l(e.lItem.is_display_rewarder?e.lItem.aprTotal>0&&e.lItem.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:u(A))(e.lItem.aprTotal,2):e.lItem.apr>0&&e.lItem.apr<.01?"<0.01":("addCommom"in e?e.addCommom:u(A))(e.lItem.apr,2))+"% ",1)),o("span",{onClick:j[1]||(j[1]=i=>e.isShow=!e.isShow)},l(e.$t("common.apr")),1),y(J,{class:b(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":e.lItem,"rewarder-info":e.rewarderInfo},null,8,["class","l-item","rewarder-info"])])]),o("div",oo,[o("div",so,[o("div",no,[o("div",to,l(e.$t("common.feeTier")),1),o("div",ao,l(e.lItem.fee!=="--"?e.lItem.fee*100:"--")+"%",1)]),o("div",lo,[o("div",ro,l(e.$t("common.liquidity")),1),("checkNullObj"in e?e.checkNullObj:u(p))(e.store.statsData)?(t(),a("div",io,[y(k,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),a("div",mo,"$"+l(Number(e.lItem.liqidity)!==0&&Number(e.lItem.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:u(A))(e.lItem.liqidity,2)),1))]),o("div",uo,[o("div",co,l(e.$t("common.volume24H")),1),("checkNullObj"in e?e.checkNullObj:u(p))(e.store.statsData)?(t(),a("div",Io,[y(k,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),a("div",vo,"$"+l(Number(e.lItem.vol)!==0&&Number(e.lItem.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:u(A))(e.lItem.vol,2)),1))]),e.lItem.is_display_rewarder&&e.rewarderInfo&&e.rewarderInfo.length>0?(t(),a("div",po,[o("div",go,l(e.$t("common.rewards")),1),o("div",ho,[e.rewarderInfo&&e.rewarderInfo.length>0?(t(!0),a(ne,{key:0},te(e.rewarderInfo,i=>(t(),a("div",{key:i,class:b(["rewards",i.day===0?"reward-none":""])},[o("div",fo,[K(o("img",wo,null,512),[[O,i.logoUrl?i.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:u(_))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:u(_))("/image/coins/sui-unknown.png")]]),o("span",null,l(`${i.day} ${i.symbol} per day`),1)]),K(o("img",ko,null,512),[[O,i.logoUrl?i.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:u(_))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:u(_))("/image/coins/sui-unknown.png")]]),o("span",null,l(i.symbol),1)],2))),128)):e.rewarderInfo&&e.rewarderInfo.length==0&&e.lItem.rewarder_apr!=="0%"?(t(),ae(Q,{key:1,size:"small"})):g("",!0)]),e.rewarderInfo&&e.rewarderInfo.length==0&&e.lItem.rewarder_apr=="0%"?(t(),a("div",{key:0,class:b(["induction-value",e.lItem.rewarder_apr=="0%"?"text-default":"induction-value-rewards"])},l(e.$t("newAdd.noRewards")),3)):g("",!0)])):g("",!0)]),e.lItem.is_pause?(t(),ae(X,{key:0,class:"addBtn",disabled:e.lItem.is_pause,loading:e.addLiquidity},{default:le(()=>[G(l(e.lItem.is_pause?"Pool Closed":e.$t("button.addLiquidity")),1)]),_:1},8,["disabled","loading"])):g("",!0),y(n,{class:"addBtn",to:`/liquidity/deposit?poolAddress=${e.lItem.address}`},{default:le(()=>[G(l(e.$t("button.addLiquidity")),1)]),_:1},8,["to"])])],2)}const Ro=be(Te,[["render",bo],["__scopeId","data-v-191fd1d9"]]);export{Ro as _};
