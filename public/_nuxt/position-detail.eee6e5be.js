import{_ as oo}from"./back.8821bd59.js";import{_ as no,a as so,b as ao}from"./claim-fees.56653c18.js";import{_ as io}from"./apr-tab.99a3b8ff.js";import{_ as to}from"./token-warning.96fdb1f5.js";import{_ as ro}from"./apr-tips.65752017.js";import{m as Fe,h as C,d as Se,b as v,a as lo,c as M,g as Oe,t as $e}from"./index.3daa4341.js";import{a as uo,r as p,m as I,b as po,D as de,l as co,a1 as vo,E as mo,y as fo,N as ko,a2 as Y,a6 as Le,e as ho,q as go,o as g,f as R,h as s,i as k,z as ue,w as H,u as b,x as Z,c as qe,v as d,t as ae,G as bo,B as wo,S as Io,J as _o,j as P,F as yo,s as Ro,p as Co,k as Ao}from"./entry.a7bc8957.js";/* empty css              */import"./index.8c3bc3bd.js";import{i as Ne}from"./import-icon.de3e6c66.js";import{a as To,u as Oo,b as $o}from"./pool.ef5dfa1f.js";import{u as No,c as We}from"./index.52313906.js";import{p as So}from"./precision.a7a6c57b.js";import"./decimal.a2826370.js";import{D as be}from"./decimal.765d8738.js";import"./status-block.8b5d5038.js";/* empty css              */import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import"./notifi.9d9661f7.js";import"./useWhale.a6489977.js";import"./index.f680b70a.js";import"./install.f70afb4c.js";import"./farms.e2d78a3f.js";import"./icon_fee_2x.3a20417e.js";import"./icon_rewards_2x.cd5c3978.js";const jo=uo({setup(){const e=p(!1),h=p(!1),ce=p(!1),je=p(!0),A=To(),m=I(()=>A),we=Oo(),U=p(""),z=p(""),se=p(""),ie=p(30),Ie=p("Estimated APR"),ve=p([{time:"24H",num:24},{time:"7D",num:7},{time:"30D",num:30}]),te=p(!0),_e=o=>{ie.value=o.num},ye=()=>{te.value=!te.value},i=I(()=>we),me=I(()=>{var r,t,f,c;const o=n.value.feeOwedA*((r=i.value.RATES[n.value&&n.value.token_a&&n.value.token_a.address])==null?void 0:r.price),a=n.value.feeOwedB*((t=i.value.RATES[n.value&&n.value.token_b&&n.value.token_b.address])==null?void 0:t.price);return(f=i.value.RATES[n.value&&n.value.token_a&&n.value.token_a.address])!=null&&f.price&&((c=i.value.RATES[n.value&&n.value.token_b&&n.value.token_b.address])!=null&&c.price)?o+a:" --"}),n=p({}),l=po();function O(){l.push(`/remove-liquidity?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}&pos=${n.value.pos_object_id}`)}function $(){l.push(`/increase-liquidity?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}&pos=${n.value.pos_object_id}`)}const N=()=>{w(),ce.value=!0,setTimeout(()=>{ce.value=!1},1e3)},u=I(()=>m.value.chainName?$o(m.value.chainName):{}),w=async()=>{i.value.setCurrentPositionLoading(!0);const o=l.currentRoute.value.query.token||"",a=l.currentRoute.value.query.collect||"",r=l.currentRoute.value.query.address||"",t=l.currentRoute.value.query.pos||"",f=l.currentRoute.value.query.id||"";z.value=r,m.value.chainName==="Aptos"?o&&a&&r&&(U.value=a,se.value=o,i.value.setCurrentPositionInfo(z.value,U.value,se.value,m.value.chainName)):o&&r&&t?(U.value=a,se.value=o,i.value.setCurrentPositionInfo(r,U.value,se.value,m.value.chainName,t)):f&&i.value.setCurrentPositionInfo("","","",m.value.chainName,f)},D=I(()=>{var a,r,t;const o=((t=(r=(a=l==null?void 0:l.currentRoute)==null?void 0:a.value)==null?void 0:r.query)==null?void 0:t.address)||"";return o&&i.value.addressLpTokens&&!M(i.value.addressLpTokens)&&i.value.addressLpTokens[o]?i.value.addressLpTokens[o]:null});de(()=>D.value,(o,a)=>{o&&!M(o)&&o.current_sqrt_price!==(a==null?void 0:a.current_sqrt_price)&&w()},{immediate:!0});const E=p(""),B=p(""),L=p(""),V=(o,a)=>o&&a?So.plus($e(o),$e(a)):o,G=o=>{let a=0;return o&&o.forEach(r=>{a+=$e(String(r))}),String(a)},J=p(""),K=p("");de(()=>[m.value.newTopPoolsObj,n.value,ie,m.value.statsData],([o,a])=>{if(o&&!M(o)&&a&&!M(a)){const r=a.poolAddress,t=o[r];t?(E.value=t&&t.apr_7day&&t.apr_7day.replace("%",""),K.value=G(t&&(t==null?void 0:t.rewarder_apr)),J.value=V(t&&(t==null?void 0:t.apr_7day),t&&G(t==null?void 0:t.rewarder_apr)),B.value=t&&Oe(t==null?void 0:t.tvl_in_usd,2),L.value=t&&Oe(t==null?void 0:t.vol_in_usd_24h,2)):(B.value=0,L.value=0,E.value="0")}},{immediate:!0,deep:!0});const x=No(),_=I(()=>x),{t:q}=co(),{$notify:Q}=vo(),ee=async()=>{e.value=!0,h.value=!1;const o=v(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${C(n.value.feeOwedA,n.value.token_a.decimals)} ${n.value.token_a.symbol}`,a=v(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${C(n.value.feeOwedB,n.value.token_b.decimals)} ${n.value.token_b.symbol}`;A.setTransactionDesc(q("newAdd.claimWaitingText",{from:Ae.value?a:o,and:v(n.value.feeOwedA,n.value.token_a.decimals)==0||v(n.value.feeOwedB,n.value.token_b.decimals)==0?"":"and",to:Ae.value?o:a})),A.setIsShowWaiting(!0);let r;const t={pool:n.value.poolInfo,position:n.value};try{const f=await u.value.getCollectFeeTransactionPayload(t);if(m.value.chainName==="Aptos")r=await _.value.currentWallet.signAndSubmitTransaction(f);else{const c=await u.value.signAndExecuteTransactionBlock(_.value.currentWallet,f);r=u.value.handleTx(c)}if(r){A.setTransactionTxid(r.hash),A.setIsShowWaiting(!1),A.setIsShowSuccess(!0);const c={title:"Claim",desc:"",hash:r.hash,tit:"Fees Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:`${n.value.token_a.address}`,numa:v(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${C(n.value.feeOwedA,n.value.token_a.decimals)}`,logoa:v(n.value.feeOwedA,n.value.token_a.decimals)==0?"":i.value.tokensObj&&n.value&&n.value.token_a.address&&i.value.tokensObj[n.value.token_a.address]&&i.value.tokensObj[n.value.token_a.address].logoURI,tokenb:`${n.value.token_b.address}`,numb:v(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${C(n.value.feeOwedB,n.value.token_b.decimals)}`,logob:v(n.value.feeOwedB,n.value.token_b.decimals)==0?"":i.value.tokensObj&&n.value&&n.value.token_b.address&&i.value.tokensObj[n.value.token_b.address]&&i.value.tokensObj[n.value.token_b.address].logoURI},text:`Claim ${v(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${C(n.value.feeOwedA,n.value.token_a.decimals)} ${n.value.token_a.symbol}`}  
              ${v(n.value.feeOwedA,n.value.token_a.decimals)==0||v(n.value.feeOwedB,n.value.token_b.decimals)==0?"":"and"} ${v(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${C(n.value.feeOwedB,n.value.token_b.decimals)} ${n.value.token_b.symbol}`}

            `};m.value.chainName!=="Aptos"&&(c.res=r.res),u.value.showTransitionPending(c),await u.value.watchTransaction(c)&&setTimeout(()=>{w()},1e3)}else A.setIsShowWaiting(!1),A.setIsShowRejected(!0),Q.error({icon:Y("svg",{class:{icon:!0},"aria-hidden":!0},[Y("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),duration:4.5,message:Y("div",{class:"notification-title"},[Y("span",{innerHTML:Le.global.t("newAdd.claimFailed")},null)]),description:q("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"});e.value=!1}catch{e.value=!1,A.setIsShowWaiting(!1),A.setIsShowRejected(!0),Q.error({icon:Y("svg",{class:{icon:!0},"aria-hidden":!0},[Y("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:Y("div",{class:"notification-title"},[Y("span",{innerHTML:Le.global.t("newAdd.claimFailed")},null)]),duration:4.5,description:q("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"})}},S=p(""),j=p(""),oe=()=>{S.value=n.value.token_b,j.value=n.value.token_a},fe=async(o=null)=>{const a=o||n.value,r=i.value.addressLpTokens[l.currentRoute.value.query.address],t=await u.value.getTickDataByIndex(r.ticks_handle,Number(a.tick_lower_index)),f=await u.value.getTickDataByIndex(r.ticks_handle,Number(a.tick_upper_index));let c={};W.value==="Aptos"?c=await u.value.getPosRewardersAmount({poolAddress:l.currentRoute.value.query.address,positionName:l.currentRoute.value.query.token,tickLowerData:t,tickUpperData:f}):(console.log("0502###getPosRewardersAmount###",{poolAddress:l.currentRoute.value.query.address,pos:l.currentRoute.value.query.pos,positionHandle:r.position_manager.positions_handle}),c=await u.value.fetchPosRewardersAmount({poolAddress:a.poolAddress,positionId:a.pos_object_id,coinTypeA:a.coin_type_a,coinTypeB:a.coin_type_b,rewarderInfo:a.poolInfo.rewarderInfo}));const y=[];let T=new be(0);c.forEach((X,le)=>{var Ee,Be;const ne=(Ee=i.value.tokensObj[X.coin_address])==null?void 0:Ee.decimals,ge=X.amount_owed.toString();let F=new be(ge).div(Math.pow(10,ne)).toString();if(W.value=="Aptos"&&Number(F)>999999999&&(F="0"),a.poolInfo[`rewarder_display${le+1}`]||Number(F)>0){const xe=i.value.tokensObj[X.coin_address],eo=((Be=i.value.RATES[X.coin_address])==null?void 0:Be.price)||0,Te=new be(F).mul(eo).toString();T=new be(T).plus(Te),y.push({...X,...xe,amount:Number(F)>0?C(F,ne):0,amountUSD:Number(Te)>0?C(Te,2):0})}}),ke.value=y,Re.value=Number(T.toString()),Pe.value=Number(Oe(T.toString(),2))},W=I(()=>m.value.chainName),re=mo();de(()=>[i.value.currentPositionInfo,W.value],([o,a])=>{var r;(a=="Aptos"&&o||a=="Sui"&&o&&(o==null?void 0:o.nftHash)==((r=re==null?void 0:re.query)==null?void 0:r.pos))&&(n.value=o,S.value=o==null?void 0:o.token_a,j.value=o==null?void 0:o.token_b)},{immediate:!0});const He=I(()=>i.value.tokensObj&&n&&n.value.token_a&&n.value.token_a.address&&i.value.tokensObj[n.value.token_a.address]&&i.value.tokensObj[n.value.token_a.address].logoURI),Me=I(()=>i.value.tokensObj&&n&&n.value.token_b&&n.value.token_b.address&&i.value.tokensObj[n.value.token_b.address]&&i.value.tokensObj[n.value.token_b.address].logoURI),ze=I(()=>We[W.value]),Re=p(0),ke=p([]),Pe=p(0);fo(()=>{Re.value=0,ke.value=[],Pe.value=0,i.value.setCurrentPositionLoading(!0),(l.currentRoute.value.query.id||"")&&w()});const{setIsShowSuccess:Ge,setIsShowRejected:Ue,setIsShowWaiting:Ce,setTransactionDesc:Dn,setTransactionTxid:Je}=A,he=p(!1),Ke=async()=>{he.value=!0;const o=ke.value;let a={coinTypeA:n.value.poolInfo.coinTypeA,coinTypeB:n.value.poolInfo.coinTypeB,coinTypeC:"",coinTypeD:"",coinTypeE:"",pool_address:n.value.poolAddress,pos_index:n.value.index,rewarder_nums:o.length};a.coinTypeC=o[0]?o[0].coin_address:"",a.coinTypeD=o[1]?o[1].coin_address:"",a.coinTypeE=o[2]?o[2].coin_address:"";try{let r;if(m.value.chainName==="Aptos"){const t=await u.value.getCollectRewarderTransactionPayload(a);r=await _.value.currentWallet.signAndSubmitTransaction(t)}else{a.pos_index=n.value.pos_object_id;const t=await u.value.getCollectRewarderTransactionPayload(a),f=await u.value.signAndExecuteTransactionBlock(_.value.currentWallet,t.txb,t.payloadParams);r=u.value.handleTx(f)}if(console.log("0310###toClaimRewards##tx###",r),r&&r.hash){Je(r.hash),Ce(!1),Ge(!0);const t=o[0].amount+o[0].symbol,f=a.coinTypeD?" and "+o[1].amount+o[1].symbol:"",c=a.coinTypeE?" and "+o[2].amount+o[2].symbol:"",y={title:"Claim",desc:"",hash:r.hash,tit:"Rewards Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:o[0].address,numa:`+ ${Number(o[0].amount)}`,logoa:i.value.tokensObj&&o[0]&&o[0].address&&i.value.tokensObj[o[0].address]&&i.value.tokensObj[o[0].address].logoURI,tokenb:o[1]&&o[1].address,numb:a.coinTypeD?`+ ${Number(o[1].amount)}`:"",logob:a.coinTypeD?i.value.tokensObj&&o[1]&&o[1].address&&i.value.tokensObj[o[1].address]&&i.value.tokensObj[o[1].address].logoURI:"",tokenc:o[2]&&o[2].address,numc:a.coinTypeE?`+ ${Number(o[2].amount)}`:"",logoc:a.coinTypeE?i.value.tokensObj&&o[2]&&o[2].address&&i.value.tokensObj[o[2].address]&&i.value.tokensObj[o[2].address].logoURI:""},text:t+f+c};m.value.chainName!=="Aptos"&&(y.res=r.res),u.value.showTransitionPending(y),await u.value.watchTransaction(y)&&setTimeout(()=>{w(),u.value.getAccount(_.value.address)},3e3)}else console.log("0310###toClaimRewards###else###"),Ce(!1),Ue(!0);he.value=!1}catch(r){console.log("0310###collectRewarderParams Error###",r),he.value=!1,Ce(!1),Ue(!0)}},De=p([]);de(()=>[n.value,i.value.addressLpTokens,i.value.tokensObj,m.value.newTopPoolsObj],([o,a,r,t])=>{if(!M(o)&&!M(a)&&!M(r)){const f=o.address,c=a[f];let y=(c==null?void 0:c.rewarder_infos)||[];const T=t[f],X=[];y&&y.length>0&&(y==null||y.forEach((le,ne)=>{var ge,F;c[`rewarder_display${ne+1}`]&&X.push({...le,symbol:(ge=r[le.coinAddress])==null?void 0:ge.symbol,rewarderApr:(T==null?void 0:T.rewarder_apr[ne])&&(T==null?void 0:T.rewarder_apr[ne].replace("%","")),logoUrl:(F=r[le.coinAddress])==null?void 0:F.logoURI,rewarder_display:c[`rewarder_display${ne+1}`]})}),De.value=X,fe(o))}},{immediate:!0,deep:!0});const Qe=p();de(()=>i.value.RATES,o=>{o&&(Qe.value=o)},{immediate:!0});const Ae=I(()=>{var o,a;return(a=(o=n.value)==null?void 0:o.poolInfo)==null?void 0:a.needReverse}),Xe=I(()=>We[W.value].hasNotifi),Ye=o=>{var a;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((a=i.value.tokensObj[o==null?void 0:o.address])==null?void 0:a.logo_url)||(m.value.theme==="default"?Ne("/image/coins/unknown.png"):Ne("/image/coins/sui-unknown.png"))},Ze=I(()=>i.value.tokensWarningObj);ko(()=>{_.value.connected||(m.value.theme==="default"?l.push("/position"):l.push("/pool/position"))});const Ve=I(()=>m.value.currentExplorer);return{getExplorerUrl:Fe,hasNotifi:Xe,rewarderArr:De,feeOwed:me,config:ze,showNum:C,decimalUi:Se,index:m,fromCoinUrl:He,toCoinUrl:Me,toggle:oe,fromCoin:S,toCoin:j,apr:E,liquidityTvl:B,vol24:L,addCommom:v,decimalFormat:lo,wallet:_,isLoading:e,toClaim:ee,pools:i,positionInfo:n,importIcon:Ne,router:l,toRemove:O,toIncrease:$,isShowClaim:h,direct:je,refresh:ce,clickRefresh:N,pendingRewarderArr:ke,pendingRewarder:Re,toClaimRewards:Ke,rewarderLoading:he,aprRewardsParameter:ie,aprRewardsDateList:ve,aprTab:_e,reviseValue:ye,label:te,aprTitle:Ie,aprTotal:J,rewardAprList:K,currentPoolInfo:D,chainName:W,needReverse:Ae,getCoinIcon:Ye,tokensWarningObj:Ze,checkNullObj:M,currentExplorer:Ve}}});const pe=e=>(Co("data-v-5982a431"),e=e(),Ao(),e),Po={key:0,class:"position-detail-container"},Uo={class:"position-detail-header"},Do={class:"back-and-refresh"},Eo=pe(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Bo=[Eo],Lo={class:"action-position"},qo={class:"coin-pair"},Wo=pe(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),Fo=[Wo],Ho=["href"],Mo=pe(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-jump"})],-1)),zo=[Mo],Go={class:"acton-btn-box"},Jo=pe(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-Reduction"})],-1)),Ko=pe(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-add"})],-1)),Qo={class:"position-content"},Xo={key:0,class:"pedding-fee range-alerts-all"},Yo={class:"pedding-fee"},Zo={class:"pedding-fee"},Vo={class:"top"},xo={class:"left"},en={key:0,class:"bottom"},on={class:"token-a"},nn={key:0,class:"token-warning"},sn={class:"token-b"},an={key:0,class:"token-warning"},tn={key:1,class:"pedding-fee"},rn={class:"top"},ln={class:"left"},dn={class:"bottom"},un={alt:""},pn={key:2,class:"poolInfo"},cn={class:"pool-info-title"},vn={class:"currentPrice"},mn={key:0,class:"coin"},fn={key:1,class:"coin"},kn={class:"toggle"},hn={alt:""},gn={alt:""},bn={class:"info-block-container"},wn={class:"info-block"},In={class:"leabl"},_n={class:"text"},yn={class:"apr-hover-content"},Rn={class:"info-block"},Cn={class:"leabl"},An={class:"text"},Tn={class:"info-block"},On={class:"leabl"},$n={class:"text"},Nn={class:"info-block"},Sn={class:"leabl"},jn={class:"text"},Pn={class:"loading-global"};function Un(e,h,ce,je,A,m){var me,n;const we=oo,U=wo,z=Io,se=no,ie=so,Ie=io,ve=to,te=ro,_e=ao,ye=_o,i=go("image");return e.positionInfo?(g(),R("div",Po,[s("div",Uo,[s("div",Do,[k(we),(g(),R("svg",{"aria-hidden":"true",class:ue(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:h[0]||(h[0]=(...l)=>e.clickRefresh&&e.clickRefresh(...l))},Bo,2))]),s("div",Lo,[k(z,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:H(()=>{var l,O,$,N,u,w;return[s("div",qo,[P(d(e.positionInfo.tokenName)+" ",1),(g(),R("svg",{class:"icon","aria-hidden":"true",onClick:h[1]||(h[1]=D=>e.index.copy(e.positionInfo.nftHash))},Fo)),s("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:b(Fe))(e.currentExplorer,"nftAddress",e.positionInfo.nftHash),target:"_blank"},zo,8,Ho)]),s("div",Go,[k(U,{class:ue(["remove-liquidity action-btn",(O=(l=e.positionInfo)==null?void 0:l.poolInfo)!=null&&O.is_pause?"text-default":""]),disabled:(N=($=e.positionInfo)==null?void 0:$.poolInfo)==null?void 0:N.is_pause,onClick:e.toRemove},{default:H(()=>[Jo,P(" "+d(e.$t("button.remove")),1)]),_:1},8,["class","disabled","onClick"]),k(U,{class:"increase-liquidity action-btn",disabled:(w=(u=e.positionInfo)==null?void 0:u.poolInfo)==null?void 0:w.is_pause,onClick:e.toIncrease},{default:H(()=>[Ko,P(" "+d(e.$t("button.increase")),1)]),_:1},8,["disabled","onClick"])])]}),_:1},8,["loading"])])]),s("div",Qo,[k(se,{"position-info":e.positionInfo},null,8,["position-info"])]),e.positionInfo&&!("checkNullObj"in e?e.checkNullObj:b(M))(e.positionInfo)&&e.hasNotifi&&e.positionInfo.minPrice!=="0"&&e.positionInfo.maxPrice!=="∞"?(g(),R("div",Xo,[k(ie,{"position-info":e.positionInfo},null,8,["position-info"])])):Z("",!0),s("div",Yo,[(g(),qe(Ie,{key:0,"apr-title":e.aprTitle,"apr-rewards-date-list":e.aprRewardsDateList,"apr-rewards-parameter":e.aprRewardsParameter,"name-tab":"position","from-coin":e.fromCoin,"to-coin":e.toCoin,"pool-info":e.positionInfo.poolInfo,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice&&String(e.positionInfo.maxPrice).indexOf("+")>-1?"∞":e.positionInfo.maxPrice,onAprTab:e.aprTab},null,8,["apr-title","apr-rewards-date-list","apr-rewards-parameter","from-coin","to-coin","pool-info","min-price","max-price","onAprTab"]))]),s("div",Zo,[s("div",Vo,[s("div",xo,[s("span",null,d(e.$t("newAdd.pendingFees")),1),s("p",null," $"+d(e.pools.currentPositionLoading||e.feeOwed=="--"?"--":Number(e.feeOwed)==0?0:Number(e.feeOwed)<.01?"<0.01":("addCommom"in e?e.addCommom:b(v))(e.feeOwed,2)),1)]),k(U,{class:"increase-liquidity action-btn",disabled:e.isLoading||!e.wallet.connected||!(Number(e.positionInfo&&e.positionInfo.feeOwedA)||Number(e.positionInfo&&e.positionInfo.feeOwedB))||e.positionInfo.poolInfo.is_pause,onClick:h[2]||(h[2]=l=>e.isShowClaim=!0)},{default:H(()=>[P(d(e.$t("common.claim")),1)]),_:1},8,["disabled"])]),k(z,{class:"pedding-fee-skeleton",loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:H(()=>{var l,O,$,N,u,w,D,E,B,L,V,G,J,K,x,_,q,Q,ee,S,j,oe;return[e.positionInfo&&((l=e.positionInfo)!=null&&l.token_a)&&((O=e.positionInfo)!=null&&O.token_b)?(g(),R("div",en,[s("div",null,[s("div",on,[ae(s("img",null,null,512),[[i,(e.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.needReverse?(N=e.positionInfo)==null?void 0:N.token_b:($=e.positionInfo)==null?void 0:$.token_a)]]),(e.needReverse?e.tokensWarningObj&&!e.tokensWarningObj[e.positionInfo.token_b.address]:e.tokensWarningObj&&!e.tokensWarningObj[e.positionInfo.token_a.address])?(g(),R("div",nn)):Z("",!0)]),s("p",null,d(e.needReverse?("showNum"in e?e.showNum:b(C))(e.positionInfo.feeOwedB,(E=(D=e.positionInfo)==null?void 0:D.token_b)==null?void 0:E.decimals):("showNum"in e?e.showNum:b(C))(e.positionInfo.feeOwedA,(w=(u=e.positionInfo)==null?void 0:u.token_a)==null?void 0:w.decimals)),1),s("span",null,d(e.needReverse?(G=(V=e.positionInfo)==null?void 0:V.token_b)==null?void 0:G.symbol:(L=(B=e.positionInfo)==null?void 0:B.token_a)==null?void 0:L.symbol),1)]),s("div",null,[s("div",sn,[ae(s("img",null,null,512),[[i,(e.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.needReverse?(K=e.positionInfo)==null?void 0:K.token_a:(J=e.positionInfo)==null?void 0:J.token_b)]]),(e.needReverse?e.tokensWarningObj&&!e.tokensWarningObj[e.positionInfo.token_a.address]:e.tokensWarningObj&&!e.tokensWarningObj[e.positionInfo.token_b.address])?(g(),R("div",an)):Z("",!0)]),s("p",null,d(e.needReverse?("showNum"in e?e.showNum:b(C))(e.positionInfo.feeOwedA,(Q=(q=e.positionInfo)==null?void 0:q.token_a)==null?void 0:Q.decimals):("showNum"in e?e.showNum:b(C))(e.positionInfo.feeOwedB,(_=(x=e.positionInfo)==null?void 0:x.token_b)==null?void 0:_.decimals)),1),s("span",null,d(e.needReverse?(oe=(j=e.positionInfo)==null?void 0:j.token_a)==null?void 0:oe.symbol:(S=(ee=e.positionInfo)==null?void 0:ee.token_b)==null?void 0:S.symbol),1)])])):Z("",!0)]}),_:1},8,["loading"])]),e.positionInfo&&e.positionInfo.poolInfo&&e.positionInfo.poolInfo.rewarder_infos&&e.positionInfo.poolInfo.rewarder_infos.length>0&&e.positionInfo.poolInfo.is_display_rewarder&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(g(),R("div",tn,[s("div",rn,[s("div",ln,[s("span",null,d(e.$t("newAdd.pendingRewards")),1),s("p",null," $"+d(e.pendingRewarder=="--"?"--":Number(e.pendingRewarder)==0?0:Number(e.pendingRewarder)<.01?"<0.01":("addCommom"in e?e.addCommom:b(v))(e.pendingRewarder,2)),1)]),k(U,{class:"increase-liquidity action-btn",disabled:e.rewarderLoading||!e.wallet.connected||e.pendingRewarder<=0||((n=(me=e.positionInfo)==null?void 0:me.poolInfo)==null?void 0:n.is_pause),loading:e.rewarderLoading,onClick:e.toClaimRewards},{default:H(()=>[P(d(e.$t("common.claim")),1)]),_:1},8,["disabled","loading","onClick"])]),k(z,{class:"pedding-fee-skeleton",loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:H(()=>[s("div",dn,[(g(!0),R(yo,null,Ro(e.pendingRewarderArr,l=>(g(),R("div",{key:l},[ae(s("img",un,null,512),[[i,(l==null?void 0:l.logoURI)||e.getCoinIcon(l)]]),s("p",null,d(l.amount),1),s("span",null,d(l.symbol),1)]))),128))])]),_:1},8,["loading"])])):Z("",!0),e.positionInfo&&e.positionInfo.poolInfo?(g(),R("div",pn,[s("div",cn,d(e.$t("newAdd.poolInfo")),1),s("div",vn,[k(z,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:H(()=>{var l,O,$,N,u,w,D,E,B,L,V,G,J,K,x,_,q,Q,ee,S,j,oe,fe,W;return[(e.needReverse?!e.direct:e.direct)?(g(),R("div",mn,[s("span",null,d(e.$t("common.currentPrice")),1),P(" "+d(("addCommom"in e?e.addCommom:b(v))(("decimalUi"in e?e.decimalUi:b(Se))(e.positionInfo.currentPrice,6)))+" "+d((l=e.toCoin)==null?void 0:l.symbol)+" per "+d((O=e.fromCoin)==null?void 0:O.symbol),1)])):(g(),R("div",fn,[s("span",null,d(e.$t("common.currentPrice")),1),P(" "+d(("addCommom"in e?e.addCommom:b(v))(("decimalUi"in e?e.decimalUi:b(Se))(1/e.positionInfo.currentPrice,6)))+" "+d(($=e.fromCoin)==null?void 0:$.symbol)+" per "+d((N=e.toCoin)==null?void 0:N.symbol),1)])),s("div",kn,[s("div",{class:ue(e.direct?"item active-item":"item"),onClick:h[3]||(h[3]=re=>e.direct=!0)},[ae(s("img",hn,null,512),[[i,(e.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.needReverse?(w=e.positionInfo)==null?void 0:w.token_b:(u=e.positionInfo)==null?void 0:u.token_a)]]),P(" "+d(e.needReverse?(L=(B=e.positionInfo)==null?void 0:B.token_b)==null?void 0:L.symbol:(E=(D=e.positionInfo)==null?void 0:D.token_a)==null?void 0:E.symbol)+" ",1),k(ve,{address:e.needReverse?(K=(J=e.positionInfo)==null?void 0:J.token_b)==null?void 0:K.address:(G=(V=e.positionInfo)==null?void 0:V.token_a)==null?void 0:G.address,"style-params":{width:"8px",height:"8px",left:"18px",bottom:"4px"}},null,8,["address"])],2),s("div",{class:ue(e.direct?"item ":"item active-item"),onClick:h[4]||(h[4]=re=>e.direct=!1)},[ae(s("img",gn,null,512),[[i,(e.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.needReverse?(_=e.positionInfo)==null?void 0:_.token_a:(x=e.positionInfo)==null?void 0:x.token_b)]]),P(" "+d(e.needReverse?(S=(ee=e.positionInfo)==null?void 0:ee.token_a)==null?void 0:S.symbol:(Q=(q=e.positionInfo)==null?void 0:q.token_b)==null?void 0:Q.symbol)+" ",1),k(ve,{address:e.needReverse?(W=(fe=e.positionInfo)==null?void 0:fe.token_a)==null?void 0:W.address:(oe=(j=e.positionInfo)==null?void 0:j.token_b)==null?void 0:oe.address,"style-params":{width:"8px",height:"8px",left:"18px",bottom:"4px"}},null,8,["address"])],2)])]}),_:1},8,["loading"])]),k(z,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:H(()=>[s("div",null,[s("div",bn,[s("div",wn,[s("div",In,d(e.$t("common.apr")),1),s("div",_n,[P(d(e.aprTotal>0&&e.aprTotal<.01?"<0.01":e.aprTotal==0?0:("addCommom"in e?e.addCommom:b(v))(e.aprTotal,2))+"% ",1),s("div",yn,[k(te,{class:ue(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":{apr:e.apr,rewarder_apr:e.rewardAprList,aprTotal:e.aprTotal,is_display_rewarder:e.positionInfo.poolInfo.is_display_rewarder},"rewarder-info":e.rewarderArr},null,8,["class","l-item","rewarder-info"])])])]),s("div",Rn,[s("div",Cn,d(e.$t("common.liquidity")),1),s("div",An,"$"+d(("addCommom"in e?e.addCommom:b(v))(e.liquidityTvl,2)),1)]),s("div",Tn,[s("div",On,d(e.$t("common.volume24h")),1),s("div",$n,"$"+d(("addCommom"in e?e.addCommom:b(v))(e.vol24,2)),1)]),s("div",Nn,[s("div",Sn,d(e.$t("newAdd.tickSpacing")),1),s("div",jn,d(e.positionInfo.tickSpacing),1)])])])]),_:1},8,["loading"])])):Z("",!0),e.isShowClaim?(g(),qe(_e,{key:3,"is-loading":e.isLoading,"position-info":e.positionInfo,"need-reverse":e.needReverse,onOnClose:h[5]||(h[5]=l=>e.isShowClaim=!1),onToClaim:e.toClaim},null,8,["is-loading","position-info","need-reverse","onToClaim"])):Z("",!0),ae(s("div",Pn,[k(ye)],512),[[bo,e.pools.currentPositionLoading]])])):Z("",!0)}const ds=ho(jo,[["render",Un],["__scopeId","data-v-5982a431"]]);export{ds as default};
