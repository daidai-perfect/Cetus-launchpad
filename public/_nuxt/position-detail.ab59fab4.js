import{_ as oo}from"./back.d7ac2c2e.js";import{_ as no,a as so,b as ao}from"./claim-fees.acc7a3b1.js";import{_ as io}from"./apr-tab.cfe50de1.js";import{_ as to}from"./token-warning.ae1d5a27.js";import{_ as ro}from"./apr-tips.2d42c073.js";import{u as lo,g as Fe,r as A,d as Ne,a as m,j as uo,c as z,e as co,q as Oe,k as Se}from"./pool.b1ddb447.js";import{a as po,r as u,l as y,b as vo,q as ue,y as mo,a4 as fo,m as go,H as ko,R as ho,C as Y,a8 as Be,e as bo,s as wo,o as b,f as C,h as s,i as k,A as ce,w as M,u as w,x as Z,c as qe,v as d,t as te,N as Io,B as _o,M as yo,S as Ro,j as L,F as Co,E as Ao,p as To,k as Oo}from"./entry.833e9675.js";/* empty css              *//* empty css              */import{i as $e}from"./import-icon.de3e6c66.js";import{u as So,a as $o,c as We}from"./sha256.5af084c7.js";import{p as No}from"./precision.a7a6c57b.js";import{D as be}from"./decimal.0bdeb344.js";import"./status-block.b0e10362.js";/* empty css              */import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import"./notifi.b30d5c5c.js";import"./useWhale.824e54c4.js";import"./index.56c9db0e.js";import"./farms.6dae0d5e.js";import"./icon_rewards_2x.f4de5128.js";const jo=po({setup(){const e=u(!1),h=u(!1),ve=u(!1),je=u(!0),T=So(),f=y(()=>T),we=lo(),D=u(""),G=u(""),se=u(""),ae=u(30),Ie=u("Estimated APR"),me=u([{time:"24H",num:24},{time:"7D",num:7},{time:"30D",num:30}]),re=u(!0),_e=o=>{console.log(o,"====>>>>item",o.num,ae.value),ae.value=o.num},ye=()=>{re.value=!re.value},i=y(()=>we),fe=y(()=>{var r,t,p,v;const o=n.value.feeOwedA*((r=i.value.RATES[n.value&&n.value.token_a&&n.value.token_a.address])==null?void 0:r.price),a=n.value.feeOwedB*((t=i.value.RATES[n.value&&n.value.token_b&&n.value.token_b.address])==null?void 0:t.price);return(p=i.value.RATES[n.value&&n.value.token_a&&n.value.token_a.address])!=null&&p.price&&((v=i.value.RATES[n.value&&n.value.token_b&&n.value.token_b.address])!=null&&v.price)?o+a:" --"}),n=u({}),l=vo();function S(){l.push(`/remove-liquidity?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}&pos=${n.value.pos_object_id}`)}function $(){l.push(`/increase-liquidity?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}&pos=${n.value.pos_object_id}`)}const N=()=>{I(),ve.value=!0,setTimeout(()=>{ve.value=!1},1e3)},c=y(()=>f.value.chainName?co(f.value.chainName):{}),I=async()=>{i.value.setCurrentPositionLoading(!0);const o=l.currentRoute.value.query.token||"",a=l.currentRoute.value.query.collect||"",r=l.currentRoute.value.query.address||"",t=l.currentRoute.value.query.pos||"",p=l.currentRoute.value.query.id||"";G.value=r,f.value.chainName==="Aptos"?o&&a&&r&&(D.value=a,se.value=o,i.value.setCurrentPositionInfo(G.value,D.value,se.value,f.value.chainName)):(console.log("0414###position-detail###id#####",p),console.log("0414###position-detail###name#####",o),console.log("0414###position-detail###pool_address#####",r),console.log("0414###position-detail###pos#####",t),o&&r&&t?(D.value=a,se.value=o,i.value.setCurrentPositionInfo(r,D.value,se.value,f.value.chainName,t)):p&&i.value.setCurrentPositionInfo("","","",f.value.chainName,p))},E=y(()=>{var a,r,t;const o=((t=(r=(a=l==null?void 0:l.currentRoute)==null?void 0:a.value)==null?void 0:r.query)==null?void 0:t.address)||"";return o&&i.value.addressLpTokens&&!z(i.value.addressLpTokens)&&i.value.addressLpTokens[o]?i.value.addressLpTokens[o]:null});ue(()=>E.value,(o,a)=>{console.log(o,"===>newVal"),o&&!z(o)&&o.current_sqrt_price!==(a==null?void 0:a.current_sqrt_price)&&I()},{immediate:!0});const B=u(""),q=u(""),W=u(""),V=(o,a)=>(console.log(o,a,"===>apr, rewarderApr"),o&&a?No.plus(Se(o),Se(a)):o),J=o=>{let a=0;return o&&o.forEach(r=>{console.log(r,"===>ele"),a+=Se(String(r))}),String(a)},K=u(""),Q=u("");ue(()=>[f.value.newTopPoolsObj,n.value,ae,f.value.statsData],([o,a])=>{if(console.log(o,"===>newTopPoolsObj"),o&&!z(o)&&a&&!z(a)){const r=a.poolAddress,t=o[r];console.log(t,"===>stats111"),t?(B.value=t&&t.apr_7day&&t.apr_7day.replace("%",""),console.log(t&&t.apr_7day&&t.apr_7day.replace("%",""),"stats && stats.apr_7day&&stats.apr_7day.replace('%', '')"),Q.value=J(t&&(t==null?void 0:t.rewarder_apr)),K.value=V(t&&(t==null?void 0:t.apr_7day),t&&J(t==null?void 0:t.rewarder_apr)),q.value=t&&Oe(t==null?void 0:t.tvl_in_usd,2),W.value=t&&Oe(t==null?void 0:t.vol_in_usd_24h,2)):(q.value=0,W.value=0,B.value="0")}},{immediate:!0,deep:!0});const x=$o(),R=y(()=>x),{t:F}=mo(),{$notify:X}=fo(),ee=async()=>{e.value=!0,h.value=!1;const o=m(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${A(n.value.feeOwedA,n.value.token_a.decimals)} ${n.value.token_a.symbol}`,a=m(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${A(n.value.feeOwedB,n.value.token_b.decimals)} ${n.value.token_b.symbol}`;T.setTransactionDesc(F("newAdd.claimWaitingText",{from:Ae.value?a:o,and:m(n.value.feeOwedA,n.value.token_a.decimals)==0||m(n.value.feeOwedB,n.value.token_b.decimals)==0?"":"and",to:Ae.value?o:a})),T.setIsShowWaiting(!0);let r;const t={pool:n.value.poolInfo,position:n.value};try{const p=await c.value.getCollectFeeTransactionPayload(t);if(f.value.chainName==="Aptos")r=await R.value.currentWallet.signAndSubmitTransaction(p);else{const v=await R.value.currentWallet.signAndExecuteTransactionBlock(p);r=c.value.handleTx(v)}if(r){T.setTransactionTxid(r.hash),T.setIsShowWaiting(!1),T.setIsShowSuccess(!0);const v={title:"Claim",desc:"",hash:r.hash,tit:"Fees Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:`${n.value.token_a.address}`,numa:m(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${A(n.value.feeOwedA,n.value.token_a.decimals)}`,logoa:m(n.value.feeOwedA,n.value.token_a.decimals)==0?"":i.value.tokensObj&&n.value&&n.value.token_a.address&&i.value.tokensObj[n.value.token_a.address]&&i.value.tokensObj[n.value.token_a.address].logoURI,tokenb:`${n.value.token_b.address}`,numb:m(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${A(n.value.feeOwedB,n.value.token_b.decimals)}`,logob:m(n.value.feeOwedB,n.value.token_b.decimals)==0?"":i.value.tokensObj&&n.value&&n.value.token_b.address&&i.value.tokensObj[n.value.token_b.address]&&i.value.tokensObj[n.value.token_b.address].logoURI},text:`Claim ${m(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${A(n.value.feeOwedA,n.value.token_a.decimals)} ${n.value.token_a.symbol}`}  
              ${m(n.value.feeOwedA,n.value.token_a.decimals)==0||m(n.value.feeOwedB,n.value.token_b.decimals)==0?"":"and"} ${m(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${A(n.value.feeOwedB,n.value.token_b.decimals)} ${n.value.token_b.symbol}`}

            `};f.value.chainName!=="Aptos"&&(v.res=r.res),c.value.showTransitionPending(v);const g=await c.value.watchTransaction(v);console.log("0310##toClaim###transitionStatus####",g),g&&setTimeout(()=>{I()},1e3)}else T.setIsShowWaiting(!1),T.setIsShowRejected(!0),X.error({icon:Y("svg",{class:{icon:!0},"aria-hidden":!0},[Y("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),duration:4.5,message:Y("div",{class:"notification-title"},[Y("span",{innerHTML:Be.global.t("newAdd.claimFailed")},null)]),description:F("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"});e.value=!1,console.log("claim####test###",r)}catch(p){console.log("claim###error####",p),e.value=!1,T.setIsShowWaiting(!1),T.setIsShowRejected(!0),X.error({icon:Y("svg",{class:{icon:!0},"aria-hidden":!0},[Y("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:Y("div",{class:"notification-title"},[Y("span",{innerHTML:Be.global.t("newAdd.claimFailed")},null)]),duration:4.5,description:F("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"})}},j=u(""),P=u(""),oe=()=>{j.value=n.value.token_b,P.value=n.value.token_a},ge=async(o=null)=>{const a=o||n.value,r=i.value.addressLpTokens[l.currentRoute.value.query.address];console.log("0309###getRewarder###pools.value.addressLpTokens###",i.value.addressLpTokens),console.log("0309###getRewarder###pool###",r);const t=await c.value.getTickDataByIndex(r.ticks_handle,Number(a.tick_lower_index)),p=await c.value.getTickDataByIndex(r.ticks_handle,Number(a.tick_upper_index));let v={};H.value==="Aptos"?v=await c.value.getPosRewardersAmount({poolAddress:l.currentRoute.value.query.address,positionName:l.currentRoute.value.query.token,tickLowerData:t,tickUpperData:p}):(console.log("0502###getPosRewardersAmount###",{poolAddress:l.currentRoute.value.query.address,pos:l.currentRoute.value.query.pos,positionHandle:r.position_manager.positions_handle}),console.log(a,"posInfo===>"),v=await c.value.fetchPosRewardersAmount({poolAddress:a.poolAddress,positionId:a.pos_object_id,coinTypeA:a.coin_type_a,coinTypeB:a.coin_type_b,rewarderInfo:a.poolInfo.rewarderInfo}));const g=[];let _=new be(0);v.forEach((O,ie)=>{var De,Ee;const ne=(De=i.value.tokensObj[O.coin_address])==null?void 0:De.decimals,de=O.amount_owed.toString();console.log("0604###rewarder###test###element###",O),console.log("0604###rewarder###test###element.amount_owed.toString()###",O.amount_owed.toString()),console.log("0604###rewarder###test###number###",de);let U=new be(de).div(Math.pow(10,ne)).toString();if(H.value=="Aptos"&&Number(U)>999999999&&(U="0"),console.log("0604###rewarder###test###amount###",U),a.poolInfo[`rewarder_display${ie+1}`]||Number(U)>0){const xe=i.value.tokensObj[O.coin_address];console.log(O.amount_owed.toString(),"===>element.amount_owed.toString()");const eo=((Ee=i.value.RATES[O.coin_address])==null?void 0:Ee.price)||0,Te=new be(U).mul(eo).toString();_=new be(_).plus(Te),g.push({...O,...xe,amount:Number(U)>0?A(U,ne):0,amountUSD:Number(Te)>0?A(Te,2):0})}}),ke.value=g,console.log(g,"====>result722"),Re.value=Number(_.toString()),Pe.value=Number(Oe(_.toString(),2))},H=y(()=>f.value.chainName),le=go();ue(()=>[i.value.currentPositionInfo,H.value],([o,a])=>{var r;(a=="Aptos"&&o||a=="Sui"&&o&&(o==null?void 0:o.nftHash)==((r=le==null?void 0:le.query)==null?void 0:r.pos))&&(n.value=o,j.value=o==null?void 0:o.token_a,P.value=o==null?void 0:o.token_b)},{immediate:!0});const He=y(()=>i.value.tokensObj&&n&&n.value.token_a&&n.value.token_a.address&&i.value.tokensObj[n.value.token_a.address]&&i.value.tokensObj[n.value.token_a.address].logoURI),Me=y(()=>i.value.tokensObj&&n&&n.value.token_b&&n.value.token_b.address&&i.value.tokensObj[n.value.token_b.address]&&i.value.tokensObj[n.value.token_b.address].logoURI),ze=y(()=>We[H.value]),Re=u(0),ke=u([]),Pe=u(0);ko(()=>{Re.value=0,ke.value=[],Pe.value=0,i.value.setCurrentPositionLoading(!0),(l.currentRoute.value.query.id||"")&&I()});const{setIsShowSuccess:Ge,setIsShowRejected:Ue,setIsShowWaiting:Ce,setTransactionDesc:Ln,setTransactionTxid:Je}=T,he=u(!1),Ke=async()=>{console.log("0310###toClaimRewards##start###",n.value),he.value=!0;const o=ke.value;let a={coinTypeA:n.value.poolInfo.coinTypeA,coinTypeB:n.value.poolInfo.coinTypeB,coinTypeC:"",coinTypeD:"",coinTypeE:"",pool_address:n.value.poolAddress,pos_index:n.value.index,rewarder_nums:o.length};a.coinTypeC=o[0]?o[0].coin_address:"",a.coinTypeD=o[1]?o[1].coin_address:"",a.coinTypeE=o[2]?o[2].coin_address:"",console.log(a,"===>collectRewarderParams");try{let r;if(f.value.chainName==="Aptos"){const t=await c.value.getCollectRewarderTransactionPayload(a);r=await R.value.currentWallet.signAndSubmitTransaction(t)}else{a.pos_index=n.value.pos_object_id;const t=await c.value.getCollectRewarderTransactionPayload(a),p=await R.value.currentWallet.signAndExecuteTransactionBlock(t);r=c.value.handleTx(p)}if(console.log("0310###toClaimRewards##tx###",r),r&&r.hash){Je(r.hash),Ce(!1),Ge(!0);const t=o[0].amount+o[0].symbol,p=a.coinTypeD?" and "+o[1].amount+o[1].symbol:"",v=a.coinTypeE?" and "+o[2].amount+o[2].symbol:"",g={title:"Claim",desc:"",hash:r.hash,tit:"Rewards Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:o[0].address,numa:`+ ${Number(o[0].amount)}`,logoa:i.value.tokensObj&&o[0]&&o[0].address&&i.value.tokensObj[o[0].address]&&i.value.tokensObj[o[0].address].logoURI,tokenb:o[1]&&o[1].address,numb:a.coinTypeD?`+ ${Number(o[1].amount)}`:"",logob:a.coinTypeD?i.value.tokensObj&&o[1]&&o[1].address&&i.value.tokensObj[o[1].address]&&i.value.tokensObj[o[1].address].logoURI:"",tokenc:o[2]&&o[2].address,numc:a.coinTypeE?`+ ${Number(o[2].amount)}`:"",logoc:a.coinTypeE?i.value.tokensObj&&o[2]&&o[2].address&&i.value.tokensObj[o[2].address]&&i.value.tokensObj[o[2].address].logoURI:""},text:t+p+v};f.value.chainName!=="Aptos"&&(g.res=r.res),c.value.showTransitionPending(g);const _=await c.value.watchTransaction(g);console.log("0310###toClaimRewards###transitionStatus###",_),_&&setTimeout(()=>{I(),c.value.getAccount(R.value.address)},3e3)}else console.log("0310###toClaimRewards###else###"),Ce(!1),Ue(!0);he.value=!1}catch(r){console.log("0310###collectRewarderParams Error###",r),he.value=!1,Ce(!1),Ue(!0)}},Le=u([]);ue(()=>[n.value,i.value.addressLpTokens,i.value.tokensObj,f.value.newTopPoolsObj],([o,a,r,t])=>{if(!z(o)&&!z(a)&&!z(r)){const p=o.address,v=a[p];let g=(v==null?void 0:v.rewarder_infos)||[];const _=t[p],O=[];console.log(g,"===>rewarderInfos"),g&&g.length>0&&(console.log("0511###rewarderArr###tokensObj###",r),g==null||g.forEach((ie,ne)=>{var de,U;v[`rewarder_display${ne+1}`]&&(console.log("0511###rewarderArr###ele###",ie),O.push({...ie,symbol:(de=r[ie.coinAddress])==null?void 0:de.symbol,rewarderApr:(_==null?void 0:_.rewarder_apr[ne])&&(_==null?void 0:_.rewarder_apr[ne].replace("%","")),logoUrl:(U=r[ie.coinAddress])==null?void 0:U.logoURI,rewarder_display:v[`rewarder_display${ne+1}`]}))}),Le.value=O,ge(o))}},{immediate:!0,deep:!0});const Qe=u();ue(()=>i.value.RATES,o=>{o&&(Qe.value=o)},{immediate:!0});const Ae=y(()=>{var o,a;return(a=(o=n.value)==null?void 0:o.poolInfo)==null?void 0:a.needReverse}),Xe=y(()=>We[H.value].hasNotifi),Ye=o=>{var a;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((a=i.value.tokensObj[o==null?void 0:o.address])==null?void 0:a.logo_url)||(f.value.theme==="default"?$e("/image/coins/unknown.png"):$e("/image/coins/sui-unknown.png"))},Ze=y(()=>i.value.tokensWarningObj);ho(()=>{R.value.connected||(f.value.theme==="default"?l.push("/position"):l.push("/pool/position"))});const Ve=y(()=>f.value.currentExplorer);return{getExplorerUrl:Fe,hasNotifi:Xe,rewarderArr:Le,feeOwed:fe,config:ze,showNum:A,decimalUi:Ne,index:f,fromCoinUrl:He,toCoinUrl:Me,toggle:oe,fromCoin:j,toCoin:P,apr:B,liquidityTvl:q,vol24:W,addCommom:m,decimalFormat:uo,wallet:R,isLoading:e,toClaim:ee,pools:i,positionInfo:n,importIcon:$e,router:l,toRemove:S,toIncrease:$,isShowClaim:h,direct:je,refresh:ve,clickRefresh:N,pendingRewarderArr:ke,pendingRewarder:Re,toClaimRewards:Ke,rewarderLoading:he,aprRewardsParameter:ae,aprRewardsDateList:me,aprTab:_e,reviseValue:ye,label:re,aprTitle:Ie,aprTotal:K,rewardAprList:Q,currentPoolInfo:E,chainName:H,needReverse:Ae,getCoinIcon:Ye,tokensWarningObj:Ze,checkNullObj:z,currentExplorer:Ve}}});const pe=e=>(To("data-v-5bba2ae6"),e=e(),Oo(),e),Po={key:0,class:"position-detail-container"},Uo={class:"position-detail-header"},Lo={class:"back-and-refresh"},Do=pe(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Eo=[Do],Bo={class:"action-position"},qo={class:"coin-pair"},Wo=pe(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),Fo=[Wo],Ho=["href"],Mo=pe(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-jump"})],-1)),zo=[Mo],Go={class:"acton-btn-box"},Jo=pe(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-Reduction"})],-1)),Ko=pe(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-add"})],-1)),Qo={class:"position-content"},Xo={key:0,class:"pedding-fee range-alerts-all"},Yo={class:"pedding-fee"},Zo={class:"pedding-fee"},Vo={class:"top"},xo={class:"left"},en={key:0,class:"bottom"},on={class:"token-a"},nn={key:0,class:"token-warning"},sn={class:"token-b"},an={key:0,class:"token-warning"},tn={key:1,class:"pedding-fee"},rn={class:"top"},ln={class:"left"},dn={class:"bottom"},un={alt:""},cn={key:2,class:"poolInfo"},pn={class:"pool-info-title"},vn={class:"currentPrice"},mn={key:0,class:"coin"},fn={key:1,class:"coin"},gn={class:"toggle"},kn={alt:""},hn={alt:""},bn={class:"info-block-container"},wn={class:"info-block"},In={class:"leabl"},_n={class:"text"},yn={class:"apr-hover-content"},Rn={class:"info-block"},Cn={class:"leabl"},An={class:"text"},Tn={class:"info-block"},On={class:"leabl"},Sn={class:"text"},$n={class:"info-block"},Nn={class:"leabl"},jn={class:"text"},Pn={class:"loading-global"};function Un(e,h,ve,je,T,f){var fe,n;const we=oo,D=_o,G=yo,se=no,ae=so,Ie=io,me=to,re=ro,_e=ao,ye=Ro,i=wo("image");return e.positionInfo?(b(),C("div",Po,[s("div",Uo,[s("div",Lo,[k(we),(b(),C("svg",{"aria-hidden":"true",class:ce(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:h[0]||(h[0]=(...l)=>e.clickRefresh&&e.clickRefresh(...l))},Eo,2))]),s("div",Bo,[k(G,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:M(()=>{var l,S,$,N,c,I;return[s("div",qo,[L(d(e.positionInfo.tokenName)+" ",1),(b(),C("svg",{class:"icon","aria-hidden":"true",onClick:h[1]||(h[1]=E=>e.index.copy(e.positionInfo.nftHash))},Fo)),s("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:w(Fe))(e.currentExplorer,"nftAddress",e.positionInfo.nftHash),target:"_blank"},zo,8,Ho)]),s("div",Go,[k(D,{class:ce(["remove-liquidity action-btn",(S=(l=e.positionInfo)==null?void 0:l.poolInfo)!=null&&S.is_pause?"text-default":""]),disabled:(N=($=e.positionInfo)==null?void 0:$.poolInfo)==null?void 0:N.is_pause,onClick:e.toRemove},{default:M(()=>[Jo,L(" "+d(e.$t("button.remove")),1)]),_:1},8,["class","disabled","onClick"]),k(D,{class:"increase-liquidity action-btn",disabled:(I=(c=e.positionInfo)==null?void 0:c.poolInfo)==null?void 0:I.is_pause,onClick:e.toIncrease},{default:M(()=>[Ko,L(" "+d(e.$t("button.increase")),1)]),_:1},8,["disabled","onClick"])])]}),_:1},8,["loading"])])]),s("div",Qo,[k(se,{"position-info":e.positionInfo},null,8,["position-info"])]),e.positionInfo&&!("checkNullObj"in e?e.checkNullObj:w(z))(e.positionInfo)&&e.hasNotifi&&e.positionInfo.minPrice!=="0"&&e.positionInfo.maxPrice!=="∞"?(b(),C("div",Xo,[k(ae,{"position-info":e.positionInfo},null,8,["position-info"])])):Z("",!0),s("div",Yo,[(b(),qe(Ie,{key:0,"apr-title":e.aprTitle,"apr-rewards-date-list":e.aprRewardsDateList,"apr-rewards-parameter":e.aprRewardsParameter,"name-tab":"position","from-coin":e.fromCoin,"to-coin":e.toCoin,"pool-info":e.positionInfo.poolInfo,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice&&String(e.positionInfo.maxPrice).indexOf("+")>-1?"∞":e.positionInfo.maxPrice,onAprTab:e.aprTab},null,8,["apr-title","apr-rewards-date-list","apr-rewards-parameter","from-coin","to-coin","pool-info","min-price","max-price","onAprTab"]))]),s("div",Zo,[s("div",Vo,[s("div",xo,[s("span",null,d(e.$t("newAdd.pendingFees")),1),s("p",null," $"+d(e.pools.currentPositionLoading||e.feeOwed=="--"?"--":Number(e.feeOwed)==0?0:Number(e.feeOwed)<.01?"<0.01":("addCommom"in e?e.addCommom:w(m))(e.feeOwed,2)),1)]),k(D,{class:"increase-liquidity action-btn",disabled:e.isLoading||!e.wallet.connected||!(Number(e.positionInfo&&e.positionInfo.feeOwedA)||Number(e.positionInfo&&e.positionInfo.feeOwedB))||e.positionInfo.poolInfo.is_pause,onClick:h[2]||(h[2]=l=>e.isShowClaim=!0)},{default:M(()=>[L(d(e.$t("common.claim")),1)]),_:1},8,["disabled"])]),k(G,{class:"pedding-fee-skeleton",loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:M(()=>{var l,S,$,N,c,I,E,B,q,W,V,J,K,Q,x,R,F,X,ee,j,P,oe;return[e.positionInfo&&((l=e.positionInfo)!=null&&l.token_a)&&((S=e.positionInfo)!=null&&S.token_b)?(b(),C("div",en,[s("div",null,[s("div",on,[te(s("img",null,null,512),[[i,(e.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.needReverse?(N=e.positionInfo)==null?void 0:N.token_b:($=e.positionInfo)==null?void 0:$.token_a)]]),(e.needReverse?e.tokensWarningObj&&!e.tokensWarningObj[e.positionInfo.token_b.address]:e.tokensWarningObj&&!e.tokensWarningObj[e.positionInfo.token_a.address])?(b(),C("div",nn)):Z("",!0)]),s("p",null,d(e.needReverse?("showNum"in e?e.showNum:w(A))(e.positionInfo.feeOwedB,(B=(E=e.positionInfo)==null?void 0:E.token_b)==null?void 0:B.decimals):("showNum"in e?e.showNum:w(A))(e.positionInfo.feeOwedA,(I=(c=e.positionInfo)==null?void 0:c.token_a)==null?void 0:I.decimals)),1),s("span",null,d(e.needReverse?(J=(V=e.positionInfo)==null?void 0:V.token_b)==null?void 0:J.symbol:(W=(q=e.positionInfo)==null?void 0:q.token_a)==null?void 0:W.symbol),1)]),s("div",null,[s("div",sn,[te(s("img",null,null,512),[[i,(e.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.needReverse?(Q=e.positionInfo)==null?void 0:Q.token_a:(K=e.positionInfo)==null?void 0:K.token_b)]]),(e.needReverse?e.tokensWarningObj&&!e.tokensWarningObj[e.positionInfo.token_a.address]:e.tokensWarningObj&&!e.tokensWarningObj[e.positionInfo.token_b.address])?(b(),C("div",an)):Z("",!0)]),s("p",null,d(e.needReverse?("showNum"in e?e.showNum:w(A))(e.positionInfo.feeOwedA,(X=(F=e.positionInfo)==null?void 0:F.token_a)==null?void 0:X.decimals):("showNum"in e?e.showNum:w(A))(e.positionInfo.feeOwedB,(R=(x=e.positionInfo)==null?void 0:x.token_b)==null?void 0:R.decimals)),1),s("span",null,d(e.needReverse?(oe=(P=e.positionInfo)==null?void 0:P.token_a)==null?void 0:oe.symbol:(j=(ee=e.positionInfo)==null?void 0:ee.token_b)==null?void 0:j.symbol),1)])])):Z("",!0)]}),_:1},8,["loading"])]),e.positionInfo&&e.positionInfo.poolInfo&&e.positionInfo.poolInfo.rewarder_infos&&e.positionInfo.poolInfo.rewarder_infos.length>0&&e.positionInfo.poolInfo.is_display_rewarder&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(b(),C("div",tn,[s("div",rn,[s("div",ln,[s("span",null,d(e.$t("newAdd.pendingRewards")),1),s("p",null," $"+d(e.pendingRewarder=="--"?"--":Number(e.pendingRewarder)==0?0:Number(e.pendingRewarder)<.01?"<0.01":("addCommom"in e?e.addCommom:w(m))(e.pendingRewarder,2)),1)]),k(D,{class:"increase-liquidity action-btn",disabled:e.rewarderLoading||!e.wallet.connected||e.pendingRewarder<=0||((n=(fe=e.positionInfo)==null?void 0:fe.poolInfo)==null?void 0:n.is_pause),loading:e.rewarderLoading,onClick:e.toClaimRewards},{default:M(()=>[L(d(e.$t("common.claim")),1)]),_:1},8,["disabled","loading","onClick"])]),k(G,{class:"pedding-fee-skeleton",loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:M(()=>[s("div",dn,[(b(!0),C(Co,null,Ao(e.pendingRewarderArr,l=>(b(),C("div",{key:l},[te(s("img",un,null,512),[[i,(l==null?void 0:l.logoURI)||e.getCoinIcon(l)]]),s("p",null,d(l.amount),1),s("span",null,d(l.symbol),1)]))),128))])]),_:1},8,["loading"])])):Z("",!0),e.positionInfo&&e.positionInfo.poolInfo?(b(),C("div",cn,[s("div",pn,d(e.$t("newAdd.poolInfo")),1),s("div",vn,[k(G,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:M(()=>{var l,S,$,N,c,I,E,B,q,W,V,J,K,Q,x,R,F,X,ee,j,P,oe,ge,H;return[(e.needReverse?!e.direct:e.direct)?(b(),C("div",mn,[s("span",null,d(e.$t("common.currentPrice")),1),L(" "+d(("addCommom"in e?e.addCommom:w(m))(("decimalUi"in e?e.decimalUi:w(Ne))(e.positionInfo.currentPrice,6)))+" "+d((l=e.toCoin)==null?void 0:l.symbol)+" per "+d((S=e.fromCoin)==null?void 0:S.symbol),1)])):(b(),C("div",fn,[s("span",null,d(e.$t("common.currentPrice")),1),L(" "+d(("addCommom"in e?e.addCommom:w(m))(("decimalUi"in e?e.decimalUi:w(Ne))(1/e.positionInfo.currentPrice,6)))+" "+d(($=e.fromCoin)==null?void 0:$.symbol)+" per "+d((N=e.toCoin)==null?void 0:N.symbol),1)])),s("div",gn,[s("div",{class:ce(e.direct?"item active-item":"item"),onClick:h[3]||(h[3]=le=>e.direct=!0)},[te(s("img",kn,null,512),[[i,(e.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.needReverse?(I=e.positionInfo)==null?void 0:I.token_b:(c=e.positionInfo)==null?void 0:c.token_a)]]),L(" "+d(e.needReverse?(W=(q=e.positionInfo)==null?void 0:q.token_b)==null?void 0:W.symbol:(B=(E=e.positionInfo)==null?void 0:E.token_a)==null?void 0:B.symbol)+" ",1),k(me,{address:e.needReverse?(Q=(K=e.positionInfo)==null?void 0:K.token_b)==null?void 0:Q.address:(J=(V=e.positionInfo)==null?void 0:V.token_a)==null?void 0:J.address,"style-params":{width:"8px",height:"8px",left:"18px",bottom:"4px"}},null,8,["address"])],2),s("div",{class:ce(e.direct?"item ":"item active-item"),onClick:h[4]||(h[4]=le=>e.direct=!1)},[te(s("img",hn,null,512),[[i,(e.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.needReverse?(R=e.positionInfo)==null?void 0:R.token_a:(x=e.positionInfo)==null?void 0:x.token_b)]]),L(" "+d(e.needReverse?(j=(ee=e.positionInfo)==null?void 0:ee.token_a)==null?void 0:j.symbol:(X=(F=e.positionInfo)==null?void 0:F.token_b)==null?void 0:X.symbol)+" ",1),k(me,{address:e.needReverse?(H=(ge=e.positionInfo)==null?void 0:ge.token_a)==null?void 0:H.address:(oe=(P=e.positionInfo)==null?void 0:P.token_b)==null?void 0:oe.address,"style-params":{width:"8px",height:"8px",left:"18px",bottom:"4px"}},null,8,["address"])],2)])]}),_:1},8,["loading"])]),k(G,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:M(()=>[s("div",null,[s("div",bn,[s("div",wn,[s("div",In,d(e.$t("common.apr")),1),s("div",_n,[L(d(e.aprTotal>0&&e.aprTotal<.01?"<0.01":e.aprTotal==0?0:("addCommom"in e?e.addCommom:w(m))(e.aprTotal,2))+"% ",1),s("div",yn,[k(re,{class:ce(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":{apr:e.apr,rewarder_apr:e.rewardAprList,aprTotal:e.aprTotal,is_display_rewarder:e.positionInfo.poolInfo.is_display_rewarder},"rewarder-info":e.rewarderArr},null,8,["class","l-item","rewarder-info"])])])]),s("div",Rn,[s("div",Cn,d(e.$t("common.liquidity")),1),s("div",An,"$"+d(("addCommom"in e?e.addCommom:w(m))(e.liquidityTvl,2)),1)]),s("div",Tn,[s("div",On,d(e.$t("common.volume24h")),1),s("div",Sn,"$"+d(("addCommom"in e?e.addCommom:w(m))(e.vol24,2)),1)]),s("div",$n,[s("div",Nn,d(e.$t("newAdd.tickSpacing")),1),s("div",jn,d(e.positionInfo.tickSpacing),1)])])])]),_:1},8,["loading"])])):Z("",!0),e.isShowClaim?(b(),qe(_e,{key:3,"is-loading":e.isLoading,"position-info":e.positionInfo,"need-reverse":e.needReverse,onOnClose:h[5]||(h[5]=l=>e.isShowClaim=!1),onToClaim:e.toClaim},null,8,["is-loading","position-info","need-reverse","onToClaim"])):Z("",!0),te(s("div",Pn,[k(ye)],512),[[Io,e.pools.currentPositionLoading]])])):Z("",!0)}const is=bo(jo,[["render",Un],["__scopeId","data-v-5bba2ae6"]]);export{is as default};
