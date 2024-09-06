import{u as Z,a as N,C as V,b as ee,c as te,d as oe,f as se,g as ne,h as ae,i as le,j as ue,k as re,e as ie,M as ce}from"./global.f11c92a1.js";import{a as me,E as ve,m as I,r as p,y as pe,T as fe,D as C,b as de,o as n,f as w,x as l,h as B,i as x,c as r,fj as Se}from"./entry.a7bc8957.js";import{_ as _e}from"./term-and-conditions.baefd483.js";import{a as we,u as he,b as ye}from"./pool.ef5dfa1f.js";import{u as ge}from"./index.52313906.js";import{u as Ie}from"./useTheme.a2777976.js";import{u as Ce}from"./useToken.e1ebd723.js";import{u as xe}from"./useRate.53325e04.js";import"./index.3daa4341.js";import"./decimal.765d8738.js";import"./decimal.a2826370.js";import"./import-icon.de3e6c66.js";import"./img-no-Positions_2x.969e00b4.js";import"./img-no-Positions_2x.d8befca5.js";/* empty css              */import"./index.c509c892.js";import"./icon-selected_3x.873560ed.js";import"./nuxt-link.5b66286a.js";import"./launchpad.6cd250e4.js";/* empty css              */import"./notifi.9d9661f7.js";import"./useWhale.a6489977.js";import"./bignumber.266e6c56.js";import"./token.e19830ca.js";import"./fetchFun.3abfe0a1.js";const Te={key:0,class:"scroll-top-svg"},ke=B("use",{"xlink:href":"#icon-icon_top"},null,-1),Oe=[ke],Ne={key:0,class:"web-loading-box"},h="sui-layout",st=me({__name:"sui-layout",setup(Be){const d=Ie(),a=ve(),f=we(),e=I(()=>f),S=Z(),{getTokenList:W}=Ce(),{getRateList:M}=xe(),y=p(null),$=p(!1),T=p(!1),E=()=>{if(y.value){const{scrollTop:o,scrollHeight:t,clientHeight:i}=y.value;$.value=o+i>=t,T.value=o>0}},H=()=>{const o=document.querySelector(".sui-default-container");o&&o.scrollTo({top:0,behavior:"smooth"})};pe(()=>{var t,i;if(W(),M(),S.isInitialized(h)||f.getFrontConfig(),a&&a.query&&a.query.source)d.seleteDefaultTheme();else{const v=(t=a==null?void 0:a.query)==null?void 0:t.chain,m=(i=a==null?void 0:a.query)==null?void 0:i.network,c=v||localStorage.getItem("theme");!c||c&&c.includes("sui")?m==="testnet"||c==="sui2"?d.selectSui2Theme():d.selectSuiTheme():d.seleteDefaultTheme()}document.addEventListener("click",()=>{e.value.setIsShowMore(!1),e.value.setOpenMore(!1),e.value.setOpenSwitchLang(!1),e.value.setOpenH5Icon(!1),e.value.setOpenSwitchChain(!1),e.value.setIsShowSetting(!1),e.value.setIsIdoOpenTerm(!1),e.value.setIsOpenExplorer(!1),e.value.setIsShowNotifi(!1),e.value.setIsShowHeaderMore(!1),e.value.setIsShowHeaderEarn(!1),s.value.setIsShowWalletCard(!1)});const o=localStorage.getItem("chainName");window.addEventListener("updateExplorer",v=>{const m=localStorage.getItem(`${o}-currentExplorerUrl`);f.setCurrentExplorer(m)})});let k=p();const _=ge(),s=I(()=>_),{connect:We,disconnect:L}=N(),b=()=>{const o=N(),t=localStorage.getItem("chainName")||"",i=localStorage.getItem(`cetus-${t}-current-wallet`),v=localStorage.getItem(`cetus-${t}-wallet-icon-name`)||"",m=localStorage.getItem(`cetus-${t}-current-suiwallet`)||"";ce.inMSafeWallet()?o.connect("MSafe Wallet","Msafe","Sui","","MSafe Wallet"):i?o.connect(i,v,t,"",m):t&&t.toLowerCase().includes("sui")&&o.disconnect(),k.value=window.setInterval(async()=>{if(s.value.address&&!s.value.loading&&s.value&&s.value.address&&s.value.countdown<s.value.autoRefreshTime&&(_.setCountdown(s.value.countdown+1),s.value.countdown===s.value.autoRefreshTime))try{await ye(e.value.chainName).getAccount(s.value.address)}catch(c){console.log(c,"errorBalance")}},1e4)};fe(()=>{document.removeEventListener("click",()=>{e.value.setOpenH5Icon(!1),e.value.setOpenSwitchChain(!1),e.value.setOpenMore(!1),e.value.setIsShowMore(!1),e.value.setOpenSwitchLang(!1),e.value.setIsShowSetting(!1),e.value.setIsIdoOpenTerm(!1),e.value.setIsOpenExplorer(!1),e.value.setIsShowNotifi(!1),e.value.setIsShowHeaderMore(!1),e.value.setIsShowHeaderEarn(!1),s.value.setIsShowWalletCard(!1)}),window.clearInterval(k.value)});const R=()=>{_.setIsShowWalletModal(!1),L()},A=()=>{_.setSwitchWallet(!0)},O=p(!S.isInitialized(h));C(()=>e.value.theme,o=>{const t=o==="sui2"?"sui":o;document.getElementsByTagName("body")[0].className=`theme-${t}`,o&&!S.isInitialized(h)&&(b(),setTimeout(()=>{O.value=!1,S.setLayoutInitialized(h)},1e3))},{immediate:!0});const g=p(!1);localStorage.getItem("isFirstAccess")||(g.value=!0);const D=()=>{localStorage.setItem("isFirstAccess","true"),g.value=!1},j=()=>{f.setTransactionDescText(""),f.setIsShowWaiting(!1)},q=he();C(()=>e.value.chainName,(o,t)=>{o&&o!==t&&q.setTokens(o)},{immediate:!0});const F=de(),z=I(()=>e.value.chainName?z[e.value.chainName]:{});return C(()=>[e.value.chainName,s.value.address],([o,t])=>{o==="Aptos"&&(a.path.includes("/pool/list")||a.path.includes("/pool/position")||a.name=="pool")&&F.push("/pools")},{immediate:!0}),(o,t)=>{const i=ee,v=Se,m=te,c=oe,P=ie,K=se,U=_e,G=ne,J=ae,Q=le,X=ue,Y=re;return n(),w("div",null,[T.value?(n(),w("div",Te,[(n(),w("svg",{"aria-hidden":"true",class:"scrollTop",onClick:H},Oe))])):l("",!0),B("div",{ref_key:"scrollContainer",ref:y,class:"sui-default-container",onScroll:t[10]||(t[10]=u=>E())},[x(V),O.value?(n(),w("div",Ne,[x(i)])):l("",!0),x(v),e.value&&e.value.isShowSuccess?(n(),r(m,{key:1,onOnClose:t[0]||(t[0]=u=>e.value.setIsShowSuccess(!1))})):l("",!0),e.value&&e.value.isShowRejected?(n(),r(c,{key:2,onOnClose:t[1]||(t[1]=u=>e.value.setIsShowRejected(!1))})):l("",!0),e.value&&e.value.isShowWaiting?(n(),r(P,{key:3,onOnClose:j})):l("",!0),s.value&&s.value.isShowWalletModal?(n(),r(K,{key:4,onOnDisconnect:t[2]||(t[2]=u=>R()),onOnSwitch:t[3]||(t[3]=u=>A()),onOnClose:t[4]||(t[4]=u=>s.value.setIsShowWalletModal(!1))})):l("",!0),g.value?(n(),r(U,{key:5,onClose:D})):l("",!0),e.value&&e.value.isShowSettingH5?(n(),r(G,{key:6,onOnClose:t[5]||(t[5]=u=>e.value.setIsShowSettingH5(!1))})):l("",!0),e.value&&e.value.isShowBuyCrypto?(n(),r(J,{key:7,onOnClose:t[6]||(t[6]=u=>e.value.setIsShowBuyCrypto(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoKODO?(n(),r(Q,{key:8,onOnClose:t[7]||(t[7]=u=>e.value.setIsShowBuyCryptoKODO(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoConfirm?(n(),r(X,{key:9,onClose:t[8]||(t[8]=u=>e.value.setIsShowBuyCryptoConfirm(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoSelect?(n(),r(Y,{key:10,onClose:t[9]||(t[9]=u=>e.value.setIsShowBuyCryptoSelect(!1))})):l("",!0)],544)])}}});export{st as default};
