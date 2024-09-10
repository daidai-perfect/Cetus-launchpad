import{u as te,a as M,C as oe,b as se,c as ne,d as ae,f as le,g as ue,h as ie,i as re,j as ce,k as me,e as pe,M as ve}from"./global.b6d89d2e.js";import{a as fe,L as de,m as w,r as v,q as Se,V as _e,A as y,b as he,o as a,f as k,G as l,h as T,i as x,c as i,fs as we}from"./entry.5e8d3f25.js";import{_ as ye}from"./term-and-conditions.c2152cd9.js";import{u as ge,a as Ie,b as Ce}from"./index.cdb0d33c.js";import{u as ke}from"./index.09a244f6.js";import{u as xe}from"./useTheme.315cfdf0.js";import{u as Te}from"./useToken.654c6cfc.js";import{u as Oe}from"./useRate.6a7e071b.js";import{u as Ne}from"./notifi.ec7a23df.js";import"./common.fc02fb4f.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";import"./import-icon.de3e6c66.js";import"./img-no-Positions_2x.d1e2ac04.js";import"./img-no-Positions_2x.48fd78cf.js";/* empty css              */import"./check-box.686b953c.js";import"./index.0a1532da.js";import"./nuxt-link.1d9bb440.js";import"./launchpad.23ee1749.js";/* empty css              */import"./bignumber.266e6c56.js";import"./token.6798ccdb.js";import"./fetchFun.ff4aae28.js";import"./useSDK.f7360989.js";import"./useWhale.345946f7.js";const Be=T("svg",{"aria-hidden":"true",class:"scrollTop"},[T("use",{"xlink:href":"#icon-icon_top"})],-1),Me=[Be],We={key:0,class:"web-loading-box"},g="sui-layout",ut=fe({__name:"sui-layout",setup($e){const d=xe(),n=de(),f=ge(),e=w(()=>f),S=te(),{getTokenList:W}=Te(),{getRateList:$}=Oe(),I=v(null),L=v(!1),O=v(!1),E=()=>{if(I.value){const{scrollTop:o,scrollHeight:t,clientHeight:r}=I.value;L.value=o+r>=t,O.value=o>0}},H=()=>{const o=document.querySelector(".sui-default-container");o&&o.scrollTo({top:0,behavior:"smooth"})};Se(()=>{var t,r;if(console.log("🚀🚀🚀 ~ file: sui-layout.vue:105 ~ onMounted ~ onMounted:"),W(),$(),S.isInitialized(g)||f.getFrontConfig(),n&&n.query&&n.query.source)d.seleteDefaultTheme();else{const p=(t=n==null?void 0:n.query)==null?void 0:t.chain,m=(r=n==null?void 0:n.query)==null?void 0:r.network,c=p||localStorage.getItem("theme");!c||c&&c.includes("sui")?m==="testnet"||c==="sui2"?d.selectSui2Theme():d.selectSuiTheme():d.seleteDefaultTheme()}document.addEventListener("click",()=>{e.value.setIsShowMore(!1),e.value.setOpenMore(!1),e.value.setOpenSwitchLang(!1),e.value.setOpenH5Icon(!1),e.value.setOpenSwitchChain(!1),e.value.setIsShowSetting(!1),e.value.setIsIdoOpenTerm(!1),e.value.setIsOpenExplorer(!1),e.value.setIsShowNotifi(!1),e.value.setIsShowHeaderMore(!1),e.value.setIsShowHeaderEarn(!1),s.value.setIsShowWalletCard(!1)});const o=localStorage.getItem("chainName");window.addEventListener("updateExplorer",p=>{const m=localStorage.getItem(`${o}-currentExplorerUrl`);f.setCurrentExplorer(m)})});let N=v();const _=ke(),s=w(()=>_),{connect:Le,disconnect:b}=M(),A=()=>{const o=M(),t=localStorage.getItem("chainName")||"",r=localStorage.getItem(`cetus-${t}-current-wallet`),p=localStorage.getItem(`cetus-${t}-wallet-icon-name`)||"",m=localStorage.getItem(`cetus-${t}-current-suiwallet`)||"";ve.inMSafeWallet()?o.connect("MSafe Wallet","Msafe","Sui","","MSafe Wallet"):r?o.connect(r,p,t,"",m):t&&t.toLowerCase().includes("sui")&&o.disconnect(),N.value=window.setInterval(async()=>{if(s.value.address&&!s.value.loading&&s.value&&s.value.address&&s.value.countdown<s.value.autoRefreshTime&&(_.setCountdown(s.value.countdown+1),s.value.countdown===s.value.autoRefreshTime))try{await Ce(e.value.chainName).getAccount(s.value.address)}catch(c){console.log(c,"errorBalance")}},1e4)};_e(()=>{document.removeEventListener("click",()=>{e.value.setOpenH5Icon(!1),e.value.setOpenSwitchChain(!1),e.value.setOpenMore(!1),e.value.setIsShowMore(!1),e.value.setOpenSwitchLang(!1),e.value.setIsShowSetting(!1),e.value.setIsIdoOpenTerm(!1),e.value.setIsOpenExplorer(!1),e.value.setIsShowNotifi(!1),e.value.setIsShowHeaderMore(!1),e.value.setIsShowHeaderEarn(!1),s.value.setIsShowWalletCard(!1)}),window.clearInterval(N.value)});const R=()=>{_.setIsShowWalletModal(!1),b()},D=()=>{_.setSwitchWallet(!0)},B=v(!S.isInitialized(g));y(()=>e.value.theme,o=>{const t=o==="sui2"?"sui":o;document.getElementsByTagName("body")[0].className=`theme-${t}`,o&&!S.isInitialized(g)&&(A(),setTimeout(()=>{B.value=!1,S.setLayoutInitialized(g)},1e3))},{immediate:!0});const C=v(!1);localStorage.getItem("isFirstAccess")||(C.value=!0);const q=()=>{localStorage.setItem("isFirstAccess","true"),C.value=!1},F=()=>{f.setTransactionDescText(""),f.setIsShowWaiting(!1)},j=Ie();y(()=>e.value.chainName,(o,t)=>{o&&o!==t&&j.setTokens(o)},{immediate:!0});const h=he(),z=w(()=>e.value.chainName?z[e.value.chainName]:{});y(()=>[e.value.chainName,s.value.address],([o,t])=>{o==="Aptos"&&(n.path.includes("/pool/list")||n.path.includes("/pool/position")||n.name=="pool")&&h.push("/pools"),o==="Sui"&&n.name=="pool"&&h.push("/pool/list"),o=="Aptos"&&n.name==="stats"&&h.push("/aptos/stats"),o=="Sui"&&n.name==="aptos-stats"&&h.push("/stats")},{immediate:!0});const P=Ne(),K=w(()=>P),G=()=>{K.value.initNotifi(s.value.address,s.value.address,"Sui")};return y(()=>s.value.address,o=>{o&&G()}),(o,t)=>{const r=se,p=we,m=ne,c=ae,U=pe,J=le,Q=ye,V=ue,X=ie,Y=re,Z=ce,ee=me;return a(),k("div",null,[O.value?(a(),k("div",{key:0,class:"scroll-top-svg",onClick:H},Me)):l("",!0),T("div",{ref_key:"scrollContainer",ref:I,class:"sui-default-container",onScroll:t[10]||(t[10]=u=>E())},[x(oe),B.value?(a(),k("div",We,[x(r)])):l("",!0),x(p),e.value&&e.value.isShowSuccess?(a(),i(m,{key:1,onOnClose:t[0]||(t[0]=u=>e.value.setIsShowSuccess(!1))})):l("",!0),e.value&&e.value.isShowRejected?(a(),i(c,{key:2,onOnClose:t[1]||(t[1]=u=>e.value.setIsShowRejected(!1))})):l("",!0),e.value&&e.value.isShowWaiting?(a(),i(U,{key:3,onOnClose:F})):l("",!0),s.value&&s.value.isShowWalletModal?(a(),i(J,{key:4,onOnDisconnect:t[2]||(t[2]=u=>R()),onOnSwitch:t[3]||(t[3]=u=>D()),onOnClose:t[4]||(t[4]=u=>s.value.setIsShowWalletModal(!1))})):l("",!0),C.value?(a(),i(Q,{key:5,onClose:q})):l("",!0),e.value&&e.value.isShowSettingH5?(a(),i(V,{key:6,onOnClose:t[5]||(t[5]=u=>e.value.setIsShowSettingH5(!1))})):l("",!0),e.value&&e.value.isShowBuyCrypto?(a(),i(X,{key:7,onOnClose:t[6]||(t[6]=u=>e.value.setIsShowBuyCrypto(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoKODO?(a(),i(Y,{key:8,onOnClose:t[7]||(t[7]=u=>e.value.setIsShowBuyCryptoKODO(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoConfirm?(a(),i(Z,{key:9,onClose:t[8]||(t[8]=u=>e.value.setIsShowBuyCryptoConfirm(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoSelect?(a(),i(ee,{key:10,onClose:t[9]||(t[9]=u=>e.value.setIsShowBuyCryptoSelect(!1))})):l("",!0)],544)])}}});export{ut as default};
