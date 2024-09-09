import{u as Z,a as B,C as V,b as ee,c as te,d as oe,f as se,g as ne,h as ae,i as le,j as re,k as ue,e as ie,M as ce}from"./global.99f4a935.js";import{a as me,E as ve,m as g,r as p,y as pe,T as fe,D as I,b as de,o as n,f as C,x as l,h as T,i as x,c as u,fs as Se}from"./entry.9f1d8bf2.js";import{_ as _e}from"./term-and-conditions.2a3007ef.js";import{a as we,u as he,b as ye}from"./pool.50412446.js";import{u as ge}from"./index.8db8d6d5.js";import{u as Ie}from"./useTheme.54cf1997.js";import{u as Ce}from"./useToken.cfeb3859.js";import{u as xe}from"./useRate.343d461d.js";import"./index.7ae3cf46.js";import"./decimal.765d8738.js";import"./decimal.a2826370.js";import"./import-icon.de3e6c66.js";import"./img-no-Positions_2x.e67b8378.js";import"./img-no-Positions_2x.bf14d876.js";/* empty css              */import"./index.e3c27faa.js";import"./icon-selected_3x.873560ed.js";import"./nuxt-link.dbbc1b92.js";import"./launchpad.304e134e.js";/* empty css              */import"./notifi.488fa773.js";import"./useWhale.303815b1.js";import"./bignumber.266e6c56.js";import"./token.4023bb6f.js";import"./fetchFun.e09bcb23.js";const Te=T("svg",{"aria-hidden":"true",class:"scrollTop"},[T("use",{"xlink:href":"#icon-icon_top"})],-1),ke=[Te],Oe={key:0,class:"web-loading-box"},w="sui-layout",ot=me({__name:"sui-layout",setup(Ne){const d=Ie(),a=ve(),f=we(),e=g(()=>f),S=Z(),{getTokenList:W}=Ce(),{getRateList:M}=xe(),h=p(null),$=p(!1),k=p(!1),E=()=>{if(h.value){const{scrollTop:o,scrollHeight:t,clientHeight:i}=h.value;$.value=o+i>=t,k.value=o>0}},H=()=>{const o=document.querySelector(".sui-default-container");o&&o.scrollTo({top:0,behavior:"smooth"})};pe(()=>{var t,i;if(W(),M(),S.isInitialized(w)||f.getFrontConfig(),a&&a.query&&a.query.source)d.seleteDefaultTheme();else{const v=(t=a==null?void 0:a.query)==null?void 0:t.chain,m=(i=a==null?void 0:a.query)==null?void 0:i.network,c=v||localStorage.getItem("theme");!c||c&&c.includes("sui")?m==="testnet"||c==="sui2"?d.selectSui2Theme():d.selectSuiTheme():d.seleteDefaultTheme()}document.addEventListener("click",()=>{e.value.setIsShowMore(!1),e.value.setOpenMore(!1),e.value.setOpenSwitchLang(!1),e.value.setOpenH5Icon(!1),e.value.setOpenSwitchChain(!1),e.value.setIsShowSetting(!1),e.value.setIsIdoOpenTerm(!1),e.value.setIsOpenExplorer(!1),e.value.setIsShowNotifi(!1),e.value.setIsShowHeaderMore(!1),e.value.setIsShowHeaderEarn(!1),s.value.setIsShowWalletCard(!1)});const o=localStorage.getItem("chainName");window.addEventListener("updateExplorer",v=>{const m=localStorage.getItem(`${o}-currentExplorerUrl`);f.setCurrentExplorer(m)})});let O=p();const _=ge(),s=g(()=>_),{connect:Be,disconnect:L}=B(),b=()=>{const o=B(),t=localStorage.getItem("chainName")||"",i=localStorage.getItem(`cetus-${t}-current-wallet`),v=localStorage.getItem(`cetus-${t}-wallet-icon-name`)||"",m=localStorage.getItem(`cetus-${t}-current-suiwallet`)||"";ce.inMSafeWallet()?o.connect("MSafe Wallet","Msafe","Sui","","MSafe Wallet"):i?o.connect(i,v,t,"",m):t&&t.toLowerCase().includes("sui")&&o.disconnect(),O.value=window.setInterval(async()=>{if(s.value.address&&!s.value.loading&&s.value&&s.value.address&&s.value.countdown<s.value.autoRefreshTime&&(_.setCountdown(s.value.countdown+1),s.value.countdown===s.value.autoRefreshTime))try{await ye(e.value.chainName).getAccount(s.value.address)}catch(c){console.log(c,"errorBalance")}},1e4)};fe(()=>{document.removeEventListener("click",()=>{e.value.setOpenH5Icon(!1),e.value.setOpenSwitchChain(!1),e.value.setOpenMore(!1),e.value.setIsShowMore(!1),e.value.setOpenSwitchLang(!1),e.value.setIsShowSetting(!1),e.value.setIsIdoOpenTerm(!1),e.value.setIsOpenExplorer(!1),e.value.setIsShowNotifi(!1),e.value.setIsShowHeaderMore(!1),e.value.setIsShowHeaderEarn(!1),s.value.setIsShowWalletCard(!1)}),window.clearInterval(O.value)});const R=()=>{_.setIsShowWalletModal(!1),L()},A=()=>{_.setSwitchWallet(!0)},N=p(!S.isInitialized(w));I(()=>e.value.theme,o=>{const t=o==="sui2"?"sui":o;document.getElementsByTagName("body")[0].className=`theme-${t}`,o&&!S.isInitialized(w)&&(b(),setTimeout(()=>{N.value=!1,S.setLayoutInitialized(w)},1e3))},{immediate:!0});const y=p(!1);localStorage.getItem("isFirstAccess")||(y.value=!0);const D=()=>{localStorage.setItem("isFirstAccess","true"),y.value=!1},q=()=>{f.setTransactionDescText(""),f.setIsShowWaiting(!1)},F=he();I(()=>e.value.chainName,(o,t)=>{o&&o!==t&&F.setTokens(o)},{immediate:!0});const j=de(),z=g(()=>e.value.chainName?z[e.value.chainName]:{});return I(()=>[e.value.chainName,s.value.address],([o,t])=>{o==="Aptos"&&(a.path.includes("/pool/list")||a.path.includes("/pool/position")||a.name=="pool")&&j.push("/pools")},{immediate:!0}),(o,t)=>{const i=ee,v=Se,m=te,c=oe,P=ie,K=se,U=_e,G=ne,J=ae,Q=le,X=re,Y=ue;return n(),C("div",null,[k.value?(n(),C("div",{key:0,class:"scroll-top-svg",onClick:H},ke)):l("",!0),T("div",{ref_key:"scrollContainer",ref:h,class:"sui-default-container",onScroll:t[10]||(t[10]=r=>E())},[x(V),N.value?(n(),C("div",Oe,[x(i)])):l("",!0),x(v),e.value&&e.value.isShowSuccess?(n(),u(m,{key:1,onOnClose:t[0]||(t[0]=r=>e.value.setIsShowSuccess(!1))})):l("",!0),e.value&&e.value.isShowRejected?(n(),u(c,{key:2,onOnClose:t[1]||(t[1]=r=>e.value.setIsShowRejected(!1))})):l("",!0),e.value&&e.value.isShowWaiting?(n(),u(P,{key:3,onOnClose:q})):l("",!0),s.value&&s.value.isShowWalletModal?(n(),u(K,{key:4,onOnDisconnect:t[2]||(t[2]=r=>R()),onOnSwitch:t[3]||(t[3]=r=>A()),onOnClose:t[4]||(t[4]=r=>s.value.setIsShowWalletModal(!1))})):l("",!0),y.value?(n(),u(U,{key:5,onClose:D})):l("",!0),e.value&&e.value.isShowSettingH5?(n(),u(G,{key:6,onOnClose:t[5]||(t[5]=r=>e.value.setIsShowSettingH5(!1))})):l("",!0),e.value&&e.value.isShowBuyCrypto?(n(),u(J,{key:7,onOnClose:t[6]||(t[6]=r=>e.value.setIsShowBuyCrypto(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoKODO?(n(),u(Q,{key:8,onOnClose:t[7]||(t[7]=r=>e.value.setIsShowBuyCryptoKODO(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoConfirm?(n(),u(X,{key:9,onClose:t[8]||(t[8]=r=>e.value.setIsShowBuyCryptoConfirm(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoSelect?(n(),u(Y,{key:10,onClose:t[9]||(t[9]=r=>e.value.setIsShowBuyCryptoSelect(!1))})):l("",!0)],544)])}}});export{ot as default};
