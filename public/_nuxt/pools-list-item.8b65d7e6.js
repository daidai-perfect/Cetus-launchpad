import{_ as Ie}from"./nuxt-link.15e1c53f.js";import{i as y}from"./import-icon.de3e6c66.js";import{e as re,a as de,m as v,q as me,o,f as n,t as P,h as s,v as l,O as x,p as ue,k as ce,r as oe,U as he,V as ge,l as fe,b as ke,x as f,i as I,w as Q,u as r,z as O,j as X,F as ne,s as ae,c as te,Y as we,S as _e,B as be}from"./entry.7dcfbd3d.js";import{u as pe,b as ve}from"./pool.3fc49680.js";import{c as ee,u as ye,i as h,w as ie,g as S,J as $e,d as Se,b as Z}from"./index.33b6d0c7.js";import{P as Ae,a as Ce,b as Ne,_ as Oe}from"./icon_autopools_2x.2dde21b4.js";import{_ as je}from"./apr-tips.e12276d1.js";/* empty css              */import"./index.c581952a.js";import{D as le}from"./decimal.0bdeb344.js";import{_ as Ue}from"./icon_farms_2x.7fbe7f76.js";import{_ as Be}from"./farms.77585d2c.js";const Fe=de({props:{coinInfo:{type:Object,default:()=>({})}},setup(e){const m=pe(),R=v(()=>m),j=ve(),A=v(()=>j),D=i=>{var w;return(i==null?void 0:i.logoURI)||(i==null?void 0:i.logo_url)||((w=R.value.tokensObj[i==null?void 0:i.address])==null?void 0:w.logo_url)||(A.value.theme==="default"?y("/image/coins/unknown.png"):y("/image/coins/sui-unknown.png"))},k=v(()=>ee[A.value.chainName]);return{getCoinIcon:D,store:j,config:k}}}),Te=e=>(ue("data-v-181cd124"),e=e(),ce(),e),Re={class:"coin-tips"},De={alt:""},qe={class:"address"},Le=Te(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),Ve=[Le];function Pe(e,m,R,j,A,D){var i,w,_,U,t,B,b;const k=me("image");return o(),n("div",Re,[P(s("img",De,null,512),[[k,e.getCoinIcon(e.coinInfo)]]),s("div",qe,l(((i=e.coinInfo)==null?void 0:i.address)&&((_=(w=e.coinInfo)==null?void 0:w.address)==null?void 0:_.substr(0,6)))+" ... "+l(((U=e.coinInfo)==null?void 0:U.address)&&((b=e.coinInfo)==null?void 0:b.address.substr(((B=(t=e.coinInfo)==null?void 0:t.address)==null?void 0:B.length)-6,6))),1),(o(),n("svg",{class:"icon","aria-hidden":"true",onClick:m[0]||(m[0]=x(C=>{var p;return e.store.copy(e.coinInfo&&((p=e.coinInfo)==null?void 0:p.address))},["stop"]))},Ve))])}const Ee=re(Fe,[["render",Pe],["__scopeId","data-v-181cd124"]]),ze=de({props:{lItem:{type:Object,required:!0},isSelectAll:{type:Boolean,default:!1},isFarms:{type:Boolean,default:!1}},setup(e){const m=oe(!1),R=he(ge,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),{t:j}=fe(),A=ke(),D=ye(),k=v(()=>D),i=oe(!1);function w(a){const u=a.balance,N=Se(u).div(Math.pow(10,a.decimals)).toString();return S(N,a.decimals)}const _=a=>{i.value=!0,setTimeout(()=>{i.value=!1},2e3),A.push(`/liquidity/deposit?poolAddress=${a.address}`)},U=pe(),t=v(()=>U),B=v(()=>t.value.tokensObj&&e.lItem.coinA.address&&t.value.tokensObj[e.lItem.coinA.address]&&t.value.tokensObj[e.lItem.coinA.address].logo_url),b=v(()=>t.value.tokensObj&&e.lItem.coinB.address&&t.value.tokensObj[e.lItem.coinB.address]&&t.value.tokensObj[e.lItem.coinB.address].logo_url),C=ve(),p=v(()=>C),E=v(()=>p.value.theme),z=v(()=>{var q,L;let a=[],u={};(q=e.lItem)!=null&&q.rewarderInfo?!h(t.value.tokensObj)&&!h(t.value.RATES)&&(a=(L=e.lItem)==null?void 0:L.rewarderInfo,u=t.value.tokensObj):!h(p.value.addressLpTokens)&&!h(t.value.tokensObj)&&!h(t.value.RATES)&&!h(p.value.newTopPoolsObj)&&(a=e.lItem.address&&p.value.addressLpTokens[e.lItem.address]&&p.value.addressLpTokens[e.lItem.address].rewarder_infos||[],u=t.value.tokensObj);const N=[];a.forEach((c,T)=>{var V,d,K,se;const J=(V=u[c.coinAddress])==null?void 0:V.decimals,$=ie(new le(c.emissionsEveryDay/Math.pow(10,J)).toDP(2,le.ROUND_HALF_UP).toString(),4),Y=Number($)>0?S($):$,G=ie(Number($)*t.value.RATES[c.coinAddress]&&t.value.RATES[c.coinAddress].price,4);N.push({...c,logoUrl:((d=u[c.coinAddress])==null?void 0:d.logoURI)||((K=u[c.coinAddress])==null?void 0:K.logo_url),day:Y,dayUSD:G,symbol:(se=u[c.coinAddress])==null?void 0:se.symbol,rewarders:e.lItem[`rewarders${T}`]&&e.lItem[`rewarders${T}`].replace("%",""),rewarder_display:e.lItem[`rewarder_display${T+1}`],resultDay:$})});const F=N.filter(c=>c.rewarder_display);return F&&F.length>0?F:[]}),H=a=>{var u;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((u=t.value.tokensObj[a==null?void 0:a.address])==null?void 0:u.logo_url)||(C.theme==="default"?y("/image/coins/unknown.png"):y("/image/coins/sui-unknown.png"))},M=v(()=>p.value.chainName),W=v(()=>ee[p.value.chainName]);return{checkNullObj:h,store:C,t:j,isShow:m,indicator:R,thousands:$e,importIcon:y,router:A,wallet:k,addCommom:S,getLpView:w,toAdd:_,fromCoinUrl:B,toCoinUrl:b,addLiquidity:i,rewarderInfo:z,theme:E,pools:t,getCoinIcon:H,chainName:M,config:W}}});const g=e=>(ue("data-v-10b08135"),e=e(),ce(),e),He={class:"farming-and-vault"},Me={key:0,class:"isFarming"},We=g(()=>s("img",{class:"default-img",src:Ce,alt:""},null,-1)),Je=g(()=>s("img",{class:"hover-img",src:Ne,alt:""},null,-1)),Ye=g(()=>s("div",{class:"hover-text"},"Mining rewards available",-1)),Ge=[We,Je,Ye],Ke={key:1,class:"isFarming vault-logo"},Qe=g(()=>s("img",{class:"default-img",src:Ue,alt:""},null,-1)),Xe=g(()=>s("img",{class:"hover-img",src:Be,alt:""},null,-1)),Ze=g(()=>s("div",{class:"hover-text"},"Farm rewards available",-1)),xe=g(()=>s("img",{src:Oe,alt:""},null,-1)),es=g(()=>s("div",{class:"hover-text"},"Vault available",-1)),ss=g(()=>s("div",{class:"topBg"},null,-1)),os={class:"top"},ns={key:0},as={key:1},ts={class:"coin-name"},is={class:"token-a"},ls=g(()=>s("span",null," - ",-1)),rs={class:"token-b"},ds={class:"symbol-label"},ms={class:"apr"},us={key:0,class:"skeleton-box"},cs={class:"bottom"},ps={class:"induction"},vs={class:"item"},Is={class:"induction-text"},hs={class:"induction-value"},gs={class:"item"},fs={class:"induction-text"},ks={key:0,class:"induction-value"},ws={key:1,class:"induction-value"},_s={class:"item"},bs={class:"induction-text"},ys={key:0,class:"induction-value"},$s={key:1,class:"induction-value"},Ss={key:0,class:"item"},As=g(()=>s("div",{class:"induction-text"},"Fees (24H)",-1)),Cs={key:0,class:"induction-value"},Ns={key:1,class:"induction-value"},Os={key:1,class:"item rewards-item"},js={class:"induction-text"},Us={class:"induction-value induction-value-rewards"},Bs={class:"rewards-hover"},Fs={alt:""},Ts={alt:""};function Rs(e,m,R,j,A,D){var C,p,E,z,H,M,W,a,u,N,F,q,L,c,T,J,$,Y,G,V;const k=Ie,i=Ee,w=Ae,_=we,U=je,t=_e,B=be,b=me("image");return o(),n("div",{class:O(["pools-list-item",[e.isSelectAll||(C=e.lItem)!=null&&C.isAuthorized?e.isFarms?e.lItem.isFarming&&e.lItem.rewarderInfo&&e.lItem.rewarderInfo.length>0?"":"none":"":"none",e.chainName=="Sui"?"sui-pool-card":""]])},[s("div",He,[(p=e.lItem)!=null&&p.isFarming&&e.rewarderInfo&&e.rewarderInfo.length>0?(o(),n("div",Me,Ge)):f("",!0),e.lItem.isStableFarming?(o(),n("div",Ke,[I(k,{to:"/farms",onClick:m[0]||(m[0]=x(()=>{},["stop"]))},{default:Q(()=>[Qe,Xe]),_:1}),Ze])):f("",!0),e.chainName=="Sui"&&e.lItem.isVaults&&("config"in e?e.config:r(ee)).hasVault?(o(),n("div",{key:2,class:O([(E=e.lItem)!=null&&E.isFarming&&e.rewarderInfo&&e.rewarderInfo.length>0?"isVaultAndFarming":"","isVault"])},[I(k,{to:"/vaults",onClick:m[1]||(m[1]=x(()=>{},["stop"]))},{default:Q(()=>[xe]),_:1}),es],2)):f("",!0)]),ss,s("div",os,[s("div",{class:O(e.lItem.needReverse?"img-box reverse":"img-box")},[(z=e.lItem)!=null&&z.coinA?P((o(),n("img",ns,null,512)),[[b,e.fromCoinUrl||e.getCoinIcon((H=e.lItem)==null?void 0:H.coinA)]]):f("",!0),(M=e.lItem)!=null&&M.coinB?P((o(),n("img",as,null,512)),[[b,e.toCoinUrl||e.getCoinIcon((W=e.lItem)==null?void 0:W.coinB)]]):f("",!0)],2),s("div",ts,[s("div",is,[X(l(e.lItem.needReverse?(F=(N=e.lItem)==null?void 0:N.coinB)==null?void 0:F.symbol:(u=(a=e.lItem)==null?void 0:a.coinA)==null?void 0:u.symbol)+" ",1),I(i,{"coin-info":e.lItem.needReverse?(L=e.lItem)==null?void 0:L.coinB:(q=e.lItem)==null?void 0:q.coinA},null,8,["coin-info"])]),ls,s("div",rs,[X(l(e.lItem.needReverse?($=(J=e.lItem)==null?void 0:J.coinA)==null?void 0:$.symbol:(T=(c=e.lItem)==null?void 0:c.coinB)==null?void 0:T.symbol)+" ",1),I(i,{"coin-info":e.lItem.needReverse?(G=e.lItem)==null?void 0:G.coinA:(Y=e.lItem)==null?void 0:Y.coinB},null,8,["coin-info"])]),I(w,{"token-a":e.lItem.coinA.address,"token-b":e.lItem.coinB.address},null,8,["token-a","token-b"])]),s("div",ds,[(o(!0),n(ne,null,ae((V=e.lItem)==null?void 0:V.labels,(d,K)=>(o(),n("div",{key:K,class:O(["lable",d])},null,2))),128))]),s("div",ms,[("checkNullObj"in e?e.checkNullObj:r(h))(e.store.statsData)?(o(),n("div",us,[I(_,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(o(),n("span",{key:1,class:"apr-text",onClick:m[2]||(m[2]=d=>e.isShow=!e.isShow)},l(e.lItem.is_display_rewarder?e.lItem.aprTotal>0&&e.lItem.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:r(S))(e.lItem.aprTotal,2):e.lItem.apr>0&&e.lItem.apr<.01?"<0.01":("addCommom"in e?e.addCommom:r(S))(e.lItem.apr,2))+"% ",1)),s("span",{onClick:m[3]||(m[3]=d=>e.isShow=!e.isShow)},l(e.$t("common.apr")),1),I(U,{class:O(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":e.lItem,"rewarder-info":e.rewarderInfo},null,8,["class","l-item","rewarder-info"])])]),s("div",cs,[s("div",ps,[s("div",vs,[s("div",Is,l(e.$t("common.feeTier")),1),s("div",hs,l(e.lItem.fee!=="--"?e.lItem.fee*100:"--")+"%",1)]),s("div",gs,[s("div",fs,l(e.$t("common.liquidity")),1),("checkNullObj"in e?e.checkNullObj:r(h))(e.store.statsData)?(o(),n("div",ks,[I(_,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(o(),n("div",ws,l(Number(e.lItem.liqidity)!==0&&Number(e.lItem.liqidity)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:r(S))(("decimalUi"in e?e.decimalUi:r(Z))(e.lItem.liqidity,2),2)}`),1))]),s("div",_s,[s("div",bs,l(e.$t("common.volume24H")),1),("checkNullObj"in e?e.checkNullObj:r(h))(e.store.statsData)?(o(),n("div",ys,[I(_,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(o(),n("div",$s,l(Number(e.lItem.vol)!==0&&Number(e.lItem.vol)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:r(S))(("decimalUi"in e?e.decimalUi:r(Z))(e.lItem.vol,2),2)}`),1))]),e.chainName=="Sui"?(o(),n("div",Ss,[As,("checkNullObj"in e?e.checkNullObj:r(h))(e.store.statsData)?(o(),n("div",Cs,[I(_,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(o(),n("div",Ns,l(Number(e.lItem.fee_24_h)!==0&&Number(e.lItem.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:r(S))(("decimalUi"in e?e.decimalUi:r(Z))(e.lItem.fee_24_h,2),2)}`),1))])):f("",!0),e.lItem.is_display_rewarder&&e.rewarderInfo&&e.rewarderInfo.length>0?(o(),n("div",Os,[s("div",js,l(e.$t("common.rewards")),1),s("div",Us,[e.rewarderInfo&&e.rewarderInfo.length>0?(o(!0),n(ne,{key:0},ae(e.rewarderInfo,d=>(o(),n("div",{key:d,class:O(["rewards",d.day===0?"reward-none":""])},[s("div",Bs,[P(s("img",Fs,null,512),[[b,d.logoUrl?d.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:r(y))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:r(y))("/image/coins/sui-unknown.png")]]),s("span",null,l(`${d.day} ${d.symbol} per day`),1)]),P(s("img",Ts,null,512),[[b,d.logoUrl?d.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:r(y))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:r(y))("/image/coins/sui-unknown.png")]]),s("span",null,l(d.symbol),1)],2))),128)):e.rewarderInfo&&e.rewarderInfo.length==0&&e.lItem.rewarder_apr!=="0%"?(o(),te(t,{key:1,size:"small"})):f("",!0)]),e.rewarderInfo&&e.rewarderInfo.length==0&&e.lItem.rewarder_apr=="0%"?(o(),n("div",{key:0,class:O(["induction-value",e.lItem.rewarder_apr=="0%"?"text-default":"induction-value-rewards"])},l(e.$t("newAdd.noRewards")),3)):f("",!0)])):f("",!0)]),e.lItem.is_pause?(o(),te(B,{key:0,class:"addBtn",disabled:e.lItem.is_pause,loading:e.addLiquidity},{default:Q(()=>[X(l(e.lItem.is_pause?"Pool Closed":e.$t("button.addLiquidity")),1)]),_:1},8,["disabled","loading"])):f("",!0),I(k,{class:"addBtn",to:`/liquidity/deposit?poolAddress=${e.lItem.address}`},{default:Q(()=>[X(l(e.$t("button.addLiquidity")),1)]),_:1},8,["to"])])],2)}const Gs=re(ze,[["render",Rs],["__scopeId","data-v-10b08135"]]);export{Ee as _,Gs as a};
