import{u as I,C as R,a as j,b as q,c as P,e as K,g as U,h as G,i as z,j as J,k as Q,d as X,f as Y,M as Z}from"./head.36be8b02.js";import{a as V,W as ee,m as g,y as te,r as w,a1 as oe,G as C,o as n,f as x,i as h,x as a,c as l,F as se,fn as ne}from"./entry.7dcfbd3d.js";import{b as ae,u as le,c as ue}from"./pool.3fc49680.js";import{u as re}from"./index.33b6d0c7.js";import{u as ce}from"./useTheme.f7d39642.js";import"./import-icon.de3e6c66.js";import"./img-no-Positions_2x.199a96fb.js";import"./img-no-Positions_2x.ebdf5e62.js";import"./icon-selected_3x.09e9a6f0.js";/* empty css              */import"./index.93ea09b6.js";import"./nuxt-link.15e1c53f.js";import"./vesrion-beta.299af925.js";/* empty css              */import"./decimal.0bdeb344.js";import"./notifi.88f6be76.js";import"./useWhale.d0286035.js";import"./bignumber.266e6c56.js";const ie={key:0,class:"web-loading-box"},$e=V({__name:"sui-layout",setup(me){const p=ce(),u=ee(),f=ae(),e=g(()=>f);te(()=>{var t,i;if(u&&u.query&&u.query.source)p.seleteDefaultTheme();else{const v=(t=u==null?void 0:u.query)==null?void 0:t.chain,m=(i=u==null?void 0:u.query)==null?void 0:i.network,r=v||localStorage.getItem("theme");!r||r&&r.includes("sui")?m==="testnet"||r==="sui2"?p.selectSui2Theme():p.selectSuiTheme():p.seleteDefaultTheme()}document.addEventListener("click",()=>{e.value.setIsShowMore(!1),e.value.setOpenMore(!1),e.value.setOpenSwitchLang(!1),e.value.setOpenH5Icon(!1),e.value.setOpenSwitchChain(!1),e.value.setIsShowSetting(!1),e.value.setIsIdoOpenTerm(!1),e.value.setIsOpenExplorer(!1),e.value.setIsShowNotifi(!1),e.value.setIsShowHeaderMore(!1),e.value.setIsShowHeaderEarn(!1),o.value.setIsShowWalletCard(!1)});const s=localStorage.getItem("chainName");window.addEventListener("updateExplorer",v=>{const m=localStorage.getItem(`${s}-currentExplorerUrl`);f.setCurrentExplorer(m)})});let y=w();const S=re(),o=g(()=>S),{connect:ve,disconnect:O}=I(),k=()=>{const s=I(),t=localStorage.getItem("chainName")||"",i=localStorage.getItem(`cetus-${t}-current-wallet`),v=localStorage.getItem(`cetus-${t}-wallet-icon-name`)||"",m=localStorage.getItem(`cetus-${t}-current-suiwallet`)||"";Z.inMSafeWallet()?s.connect("MSafe Wallet","Msafe","Sui","","MSafe Wallet"):i?s.connect(i,v,t,"",m):t&&t.toLowerCase().includes("sui")&&s.disconnect(),y.value=window.setInterval(async()=>{if(o.value.address&&!o.value.loading&&o.value&&o.value.address&&o.value.countdown<o.value.autoRefreshTime&&(S.setCountdown(o.value.countdown+1),o.value.countdown===o.value.autoRefreshTime))try{await ue(e.value.chainName).getAccount(o.value.address)}catch(r){console.log(r,"errorBalance")}},1e4)};oe(()=>{document.removeEventListener("click",()=>{e.value.setOpenH5Icon(!1),e.value.setOpenSwitchChain(!1),e.value.setOpenMore(!1),e.value.setIsShowMore(!1),e.value.setOpenSwitchLang(!1),e.value.setIsShowSetting(!1),e.value.setIsIdoOpenTerm(!1),e.value.setIsOpenExplorer(!1),e.value.setIsShowNotifi(!1),e.value.setIsShowHeaderMore(!1),e.value.setIsShowHeaderEarn(!1),o.value.setIsShowWalletCard(!1)}),window.clearInterval(y.value)});const T=()=>{S.setIsShowWalletModal(!1),O()},B=()=>{S.setSwitchWallet(!0)},d=w(!0);C(()=>e.value.theme,s=>{const t=s==="sui2"?"sui":s;document.getElementsByTagName("body")[0].className=`theme-${t}`,s&&(k(),d.value=!0,setTimeout(()=>{d.value=!1},1e3))},{immediate:!0});const _=w(!1);localStorage.getItem("isFirstAccess")||(_.value=!0);const W=()=>{localStorage.setItem("isFirstAccess","true"),_.value=!1},M=()=>{f.setTransactionDescText(""),f.setIsShowWaiting(!1)},N=le();return C(()=>e.value.chainName,(s,t)=>{s&&s!==t&&N.setTokens(s)},{immediate:!0}),(s,t)=>{const i=j,v=ne,m=q,r=P,$=X,E=K,H=Y,L=U,D=G,b=z,A=J,F=Q;return n(),x(se,null,[h(R),d.value?(n(),x("div",ie,[h(i)])):a("",!0),h(v),e.value&&e.value.isShowSuccess?(n(),l(m,{key:1,onOnClose:t[0]||(t[0]=c=>e.value.setIsShowSuccess(!1))})):a("",!0),e.value&&e.value.isShowRejected?(n(),l(r,{key:2,onOnClose:t[1]||(t[1]=c=>e.value.setIsShowRejected(!1))})):a("",!0),e.value&&e.value.isShowWaiting?(n(),l($,{key:3,onOnClose:M})):a("",!0),o.value&&o.value.isShowWalletModal?(n(),l(E,{key:4,onOnDisconnect:t[2]||(t[2]=c=>T()),onOnSwitch:t[3]||(t[3]=c=>B()),onOnClose:t[4]||(t[4]=c=>o.value.setIsShowWalletModal(!1))})):a("",!0),_.value?(n(),l(H,{key:5,onClose:W})):a("",!0),e.value&&e.value.isShowSettingH5?(n(),l(L,{key:6,onOnClose:t[5]||(t[5]=c=>e.value.setIsShowSettingH5(!1))})):a("",!0),e.value&&e.value.isShowBuyCrypto?(n(),l(D,{key:7,onOnClose:t[6]||(t[6]=c=>e.value.setIsShowBuyCrypto(!1))})):a("",!0),e.value&&e.value.isShowBuyCryptoKODO?(n(),l(b,{key:8,onOnClose:t[7]||(t[7]=c=>e.value.setIsShowBuyCryptoKODO(!1))})):a("",!0),e.value&&e.value.isShowBuyCryptoConfirm?(n(),l(A,{key:9,onClose:t[8]||(t[8]=c=>e.value.setIsShowBuyCryptoConfirm(!1))})):a("",!0),e.value&&e.value.isShowBuyCryptoSelect?(n(),l(F,{key:10,onClose:t[9]||(t[9]=c=>e.value.setIsShowBuyCryptoSelect(!1))})):a("",!0)],64)}}});export{$e as default};
