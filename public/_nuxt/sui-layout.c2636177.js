import{u as C,C as F,a as P,b as K,c as U,e as z,f as G,g as J,h as Q,i as X,j as Y,d as Z,M as V}from"./head.cf510f06.js";import{a as ee,E as te,m as w,y as oe,r as h,T as se,D as y,b as ne,o as a,f as x,i as I,x as l,c as u,fh as ae}from"./entry.0caab9e0.js";import{_ as le}from"./term-and-conditions.2a5dd20e.js";import{a as ue,u as re,b as ie}from"./pool.e34b56ac.js";import{u as ce}from"./index.98582d64.js";import{u as me}from"./useTheme.962ce0e1.js";import"./import-icon.de3e6c66.js";import"./img-no-Positions_2x.692774ec.js";import"./img-no-Positions_2x.b90d4ad5.js";/* empty css              */import"./index.ee80fac4.js";import"./icon-selected_3x.09e9a6f0.js";import"./nuxt-link.e445b979.js";import"./launchpad.a6f02577.js";import"./bignumber.6c4bc40a.js";/* empty css              */import"./decimal.0bdeb344.js";import"./notifi.ff7ec4d6.js";import"./useWhale.5c8f7203.js";const ve={class:"sui-default-container"},pe={key:0,class:"web-loading-box"},Ae=ee({__name:"sui-layout",setup(fe){const p=me(),n=te(),f=ue(),e=w(()=>f);oe(()=>{var t,c;if(n&&n.query&&n.query.source)p.seleteDefaultTheme();else{const v=(t=n==null?void 0:n.query)==null?void 0:t.chain,m=(c=n==null?void 0:n.query)==null?void 0:c.network,r=v||localStorage.getItem("theme");!r||r&&r.includes("sui")?m==="testnet"||r==="sui2"?p.selectSui2Theme():p.selectSuiTheme():p.seleteDefaultTheme()}document.addEventListener("click",()=>{e.value.setIsShowMore(!1),e.value.setOpenMore(!1),e.value.setOpenSwitchLang(!1),e.value.setOpenH5Icon(!1),e.value.setOpenSwitchChain(!1),e.value.setIsShowSetting(!1),e.value.setIsIdoOpenTerm(!1),e.value.setIsOpenExplorer(!1),e.value.setIsShowNotifi(!1),e.value.setIsShowHeaderMore(!1),e.value.setIsShowHeaderEarn(!1),o.value.setIsShowWalletCard(!1)});const s=localStorage.getItem("chainName");window.addEventListener("updateExplorer",v=>{const m=localStorage.getItem(`${s}-currentExplorerUrl`);f.setCurrentExplorer(m)})});let g=h();const d=ce(),o=w(()=>d),{connect:de,disconnect:O}=C(),T=()=>{const s=C(),t=localStorage.getItem("chainName")||"",c=localStorage.getItem(`cetus-${t}-current-wallet`),v=localStorage.getItem(`cetus-${t}-wallet-icon-name`)||"",m=localStorage.getItem(`cetus-${t}-current-suiwallet`)||"";V.inMSafeWallet()?s.connect("MSafe Wallet","Msafe","Sui","","MSafe Wallet"):c?s.connect(c,v,t,"",m):t&&t.toLowerCase().includes("sui")&&s.disconnect(),g.value=window.setInterval(async()=>{if(o.value.address&&!o.value.loading&&o.value&&o.value.address&&o.value.countdown<o.value.autoRefreshTime&&(d.setCountdown(o.value.countdown+1),o.value.countdown===o.value.autoRefreshTime))try{await ie(e.value.chainName).getAccount(o.value.address)}catch(r){console.log(r,"errorBalance")}},1e4)};se(()=>{document.removeEventListener("click",()=>{e.value.setOpenH5Icon(!1),e.value.setOpenSwitchChain(!1),e.value.setOpenMore(!1),e.value.setIsShowMore(!1),e.value.setOpenSwitchLang(!1),e.value.setIsShowSetting(!1),e.value.setIsIdoOpenTerm(!1),e.value.setIsOpenExplorer(!1),e.value.setIsShowNotifi(!1),e.value.setIsShowHeaderMore(!1),e.value.setIsShowHeaderEarn(!1),o.value.setIsShowWalletCard(!1)}),window.clearInterval(g.value)});const k=()=>{d.setIsShowWalletModal(!1),O()},N=()=>{d.setSwitchWallet(!0)},S=h(!0);y(()=>e.value.theme,s=>{const t=s==="sui2"?"sui":s;document.getElementsByTagName("body")[0].className=`theme-${t}`,s&&(T(),S.value=!0,setTimeout(()=>{S.value=!1},1e3))},{immediate:!0});const _=h(!1);localStorage.getItem("isFirstAccess")||(_.value=!0);const B=()=>{localStorage.setItem("isFirstAccess","true"),_.value=!1},W=()=>{f.setTransactionDescText(""),f.setIsShowWaiting(!1)},M=re();y(()=>e.value.chainName,(s,t)=>{s&&s!==t&&M.setTokens(s)},{immediate:!0});const $=ne(),E=w(()=>e.value.chainName?E[e.value.chainName]:{});return y(()=>[e.value.chainName,o.value.address],([s,t])=>{s==="Aptos"&&(n.path.includes("/pool/list")||n.path.includes("/pool/position")||n.name=="pool")&&$.push("/pools")},{immediate:!0}),(s,t)=>{const c=P,v=ae,m=K,r=U,H=Z,L=z,A=le,D=G,b=J,R=Q,j=X,q=Y;return a(),x("div",ve,[I(F),S.value?(a(),x("div",pe,[I(c)])):l("",!0),I(v),e.value&&e.value.isShowSuccess?(a(),u(m,{key:1,onOnClose:t[0]||(t[0]=i=>e.value.setIsShowSuccess(!1))})):l("",!0),e.value&&e.value.isShowRejected?(a(),u(r,{key:2,onOnClose:t[1]||(t[1]=i=>e.value.setIsShowRejected(!1))})):l("",!0),e.value&&e.value.isShowWaiting?(a(),u(H,{key:3,onOnClose:W})):l("",!0),o.value&&o.value.isShowWalletModal?(a(),u(L,{key:4,onOnDisconnect:t[2]||(t[2]=i=>k()),onOnSwitch:t[3]||(t[3]=i=>N()),onOnClose:t[4]||(t[4]=i=>o.value.setIsShowWalletModal(!1))})):l("",!0),_.value?(a(),u(A,{key:5,onClose:B})):l("",!0),e.value&&e.value.isShowSettingH5?(a(),u(D,{key:6,onOnClose:t[5]||(t[5]=i=>e.value.setIsShowSettingH5(!1))})):l("",!0),e.value&&e.value.isShowBuyCrypto?(a(),u(b,{key:7,onOnClose:t[6]||(t[6]=i=>e.value.setIsShowBuyCrypto(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoKODO?(a(),u(R,{key:8,onOnClose:t[7]||(t[7]=i=>e.value.setIsShowBuyCryptoKODO(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoConfirm?(a(),u(j,{key:9,onClose:t[8]||(t[8]=i=>e.value.setIsShowBuyCryptoConfirm(!1))})):l("",!0),e.value&&e.value.isShowBuyCryptoSelect?(a(),u(q,{key:10,onClose:t[9]||(t[9]=i=>e.value.setIsShowBuyCryptoSelect(!1))})):l("",!0)])}}});export{Ae as default};
