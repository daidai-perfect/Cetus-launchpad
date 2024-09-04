import{_ as Qe}from"./back.a4fbe3a1.js";import{_ as Xe,a as Ye,b as Ze}from"./claim-fees.abff1423.js";import{_ as Ve}from"./apr-tab.3154513d.js";import{_ as xe}from"./apr-tips.34ff6941.js";import{h as j,b as m,a as Ie,c as M,g as K,s as eo,t as _e,m as oo}from"./index.de084947.js";import{a as no,r as d,m as w,b as so,D as ne,l as ao,a1 as io,y as to,a2 as q,a6 as Oe,e as lo,q as ro,o as _,f as C,h as s,i as k,z as Q,w as P,x as X,c as $e,v as r,u as b,t as Y,G as uo,B as co,S as po,J as mo,j as O,F as vo,s as fo,p as ho,k as go}from"./entry.99c72b2b.js";/* empty css              */import"./index.fd24c567.js";import{i as ko}from"./import-icon.de3e6c66.js";import{a as bo,u as wo,b as _o}from"./pool.350c2acd.js";import{u as Io,c as Pe}from"./index.df82624f.js";import{p as yo}from"./precision.a7a6c57b.js";import"./decimal.a2826370.js";import{D as ue}from"./decimal.765d8738.js";import"./token-warning.10eecc0f.js";import"./status-block.41a7a832.js";/* empty css              */import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import"./notifi.0fd61bc8.js";import"./useWhale.d567ec72.js";import"./index.c6642a0a.js";import"./install.f8fb25ba.js";import"./farms.c4ea07b5.js";import"./icon_fee_2x.12218163.js";import"./icon_rewards_2x.b32c851d.js";const Ro=no({setup(){const e=d(!1),v=d(!1),ae=d(!1),ye=d(!0),I=bo(),f=w(()=>I),ce=wo(),$=d(""),D=d(""),z=d(""),G=d(30),pe=d("Estimated APR"),me=d([{time:"24H",num:24},{time:"7D",num:7},{time:"30D",num:30}]),Z=d(!0),ve=n=>{console.log(n,"====>>>>item",n.num,G.value),G.value=n.num},F=()=>{Z.value=!Z.value},t=w(()=>ce),ie=w(()=>{var l,i,h,p;const n=o.value.feeOwedA*((l=t.value.RATES[o.value&&o.value.token_a&&o.value.token_a.address])==null?void 0:l.price),a=o.value.feeOwedB*((i=t.value.RATES[o.value&&o.value.token_b&&o.value.token_b.address])==null?void 0:i.price);return(h=t.value.RATES[o.value&&o.value.token_a&&o.value.token_a.address])!=null&&h.price&&((p=t.value.RATES[o.value&&o.value.token_b&&o.value.token_b.address])!=null&&p.price)?n+a:" --"}),o=d({}),u=so();function A(){u.push(`/remove-liquidity?collect=${o.value.collectionName}&&token=${o.value.tokenName}&&address=${o.value.pool}&pos=${o.value.pos_object_id}`)}function S(){u.push(`/increase-liquidity?collect=${o.value.collectionName}&&token=${o.value.tokenName}&&address=${o.value.pool}&pos=${o.value.pos_object_id}`)}const N=()=>{T(),ae.value=!0,setTimeout(()=>{ae.value=!1},1e3)},c=w(()=>f.value.chainName?_o(f.value.chainName):{}),T=async()=>{t.value.setCurrentPositionLoading(!0);const n=u.currentRoute.value.query.token||"",a=u.currentRoute.value.query.collect||"",l=u.currentRoute.value.query.address||"",i=u.currentRoute.value.query.pos||"";D.value=l,f.value.chainName==="Aptos"?n&&a&&l&&($.value=a,z.value=n,t.value.setCurrentPositionInfo(D.value,$.value,z.value,f.value.chainName)):n&&l&&i&&($.value=a,z.value=n,t.value.setCurrentPositionInfo(l,$.value,z.value,f.value.chainName,i))},L=w(()=>{var a,l,i;const n=((i=(l=(a=u==null?void 0:u.currentRoute)==null?void 0:a.value)==null?void 0:l.query)==null?void 0:i.address)||"";return n&&t.value.addressLpTokens&&!M(t.value.addressLpTokens)&&t.value.addressLpTokens[n]?t.value.addressLpTokens[n]:null});ne(()=>L.value,(n,a)=>{console.log(n,"===>newVal"),n&&!M(n)&&n.current_sqrt_price!==(a==null?void 0:a.current_sqrt_price)&&T()},{immediate:!0});const E=d(""),U=d(""),B=d(""),W=(n,a)=>n&&a?eo(yo.plus(_e(n),_e(a)),2)+"%":n,H=n=>{let a=0;return n&&n.forEach(l=>{console.log(l,"===>ele"),a+=_e(String(l))}),String(K(String(a),2))},V=d(""),x=d("");ne(()=>[f.value.newTopPoolsObj,o.value,G],([n,a])=>{if(!M(n)&&!M(a)){const l=a.poolAddress,i=n[l];E.value=i&&(i==null?void 0:i.apr_7day),x.value=H(i&&(i==null?void 0:i.rewarder_apr)),V.value=W(i&&(i==null?void 0:i.apr_7day),i&&H(i==null?void 0:i.rewarder_apr)),U.value=i&&K(i==null?void 0:i.tvl_in_usd,2),B.value=i&&K(i==null?void 0:i.vol_in_usd_24h,2)}},{immediate:!0,deep:!0});const te=Io(),J=w(()=>te),{t:fe}=ao(),{$notify:Re}=io(),je=async()=>{e.value=!0,v.value=!1;const n=m(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`${j(o.value.feeOwedA,o.value.token_a.decimals)} ${o.value.token_a.symbol}`,a=m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`${j(o.value.feeOwedB,o.value.token_b.decimals)} ${o.value.token_b.symbol}`;I.setTransactionDesc(fe("newAdd.claimWaitingText",{from:we.value?a:n,and:m(o.value.feeOwedA,o.value.token_a.decimals)==0||m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":"and",to:we.value?n:a})),I.setIsShowWaiting(!0);let l;const i={pool:o.value.poolInfo,position:o.value};try{const h=await c.value.getCollectFeeTransactionPayload(i);if(f.value.chainName==="Aptos")l=await J.value.currentWallet.signAndSubmitTransaction(h);else{const p=await c.value.signAndExecuteTransactionBlock(J.value.currentWallet,h);l=c.value.handleTx(p)}if(l){I.setTransactionTxid(l.hash),I.setIsShowWaiting(!1),I.setIsShowSuccess(!0);const p={title:"Claim",desc:"",hash:l.hash,tit:"Fees Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:`${o.value.token_a.symbol}`,numa:m(o.value.feeOwedA,o.value.token_a.decimals)==0?"":`+ ${j(o.value.feeOwedA,o.value.token_a.decimals)}`,logoa:m(o.value.feeOwedA,o.value.token_a.decimals)==0?"":t.value.tokensObj&&o.value&&o.value.token_a.address&&t.value.tokensObj[o.value.token_a.address]&&t.value.tokensObj[o.value.token_a.address].logoURI,tokenb:`${o.value.token_b.symbol}`,numb:m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":`+ ${j(o.value.feeOwedB,o.value.token_b.decimals)}`,logob:m(o.value.feeOwedB,o.value.token_b.decimals)==0?"":t.value.tokensObj&&o.value&&o.value.token_b.address&&t.value.tokensObj[o.value.token_b.address]&&t.value.tokensObj[o.value.token_b.address].logoURI}};f.value.chainName!=="Aptos"&&(p.res=l.res),c.value.showTransitionPending(p);const g=await c.value.watchTransaction(p);console.log("0310##toClaim###transitionStatus####",g),g&&setTimeout(()=>{T()},1e3)}else I.setIsShowWaiting(!1),I.setIsShowRejected(!0),Re.error({icon:q("svg",{class:{icon:!0},"aria-hidden":!0},[q("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),duration:4.5,message:q("div",{class:"notification-title"},[q("span",{innerHTML:Oe.global.t("newAdd.claimFailed")},null)]),description:fe("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"});e.value=!1,console.log("claim####test###",l)}catch(h){console.log("claim###error####",h),e.value=!1,I.setIsShowWaiting(!1),I.setIsShowRejected(!0),Re.error({icon:q("svg",{class:{icon:!0},"aria-hidden":!0},[q("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:q("div",{class:"notification-title"},[q("span",{innerHTML:Oe.global.t("newAdd.claimFailed")},null)]),duration:4.5,description:fe("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"})}},he=d(""),ge=d(""),De=()=>{he.value=o.value.token_b,ge.value=o.value.token_a},Le=async(n=null)=>{const a=n||o.value,l=t.value.addressLpTokens[u.currentRoute.value.query.address];console.log("0309###getRewarder###pools.value.addressLpTokens###",t.value.addressLpTokens),console.log("0309###getRewarder###pool###",l);const i=await c.value.getTickDataByIndex(l.ticks_handle,Number(a.tick_lower_index)),h=await c.value.getTickDataByIndex(l.ticks_handle,Number(a.tick_upper_index));let p={};le.value==="Aptos"?p=await c.value.getPosRewardersAmount({poolAddress:u.currentRoute.value.query.address,positionName:u.currentRoute.value.query.token,tickLowerData:i,tickUpperData:h}):p=await c.value.getPosRewardersAmount({poolAddress:u.currentRoute.value.query.address,pos:u.currentRoute.value.query.pos,positionHandle:l.position_manager.positions_handle});const g=[];let y=new ue(0);p.forEach((R,ee)=>{if(a.poolInfo[`rewarder_display${ee+1}`]){const oe=t.value.tokensObj[R.coin_address].decimals,Ge=t.value.tokensObj[R.coin_address];console.log(R.amount_owed.toString(),"===>element.amount_owed.toString()");const Je=R.amount_owed.toString(),Se=new ue(Je).div(Math.pow(10,oe)).toString(),Ke=t.value.RATES[R.coin_address].price,Ne=new ue(Se).mul(Ke);y=new ue(y).plus(Ne),g.push({...R,...Ge,amount:K(Se,oe),amountUSD:K(Ne.toString(),2)})}}),re.value=g,console.log(g,"====>result722"),ke.value=Number(y.toString()),Te.value=Number(K(y.toString(),2))};ne(()=>t.value.currentPositionInfo,n=>{n&&(o.value=n,he.value=n==null?void 0:n.token_a,ge.value=n==null?void 0:n.token_b,console.log(n,"positionInfo.valuepositionInfo.value"))},{immediate:!0});const Ee=w(()=>t.value.tokensObj&&o&&o.value.token_a&&o.value.token_a.address&&t.value.tokensObj[o.value.token_a.address]&&t.value.tokensObj[o.value.token_a.address].logoURI),Ue=w(()=>t.value.tokensObj&&o&&o.value.token_b&&o.value.token_b.address&&t.value.tokensObj[o.value.token_b.address]&&t.value.tokensObj[o.value.token_b.address].logoURI),le=w(()=>f.value.chainName),Be=w(()=>Pe[le.value]),ke=d(0),re=d([]),Te=d(0);to(()=>{ke.value=0,re.value=[],Te.value=0});const{setIsShowSuccess:qe,setIsShowRejected:Ce,setIsShowWaiting:be,setTransactionDesc:Rn,setTransactionTxid:Fe}=I,de=d(!1),We=async()=>{console.log("0310###toClaimRewards##start"),de.value=!0;const n=re.value;let a={coinTypeA:o.value.poolInfo.coinTypeA,coinTypeB:o.value.poolInfo.coinTypeB,coinTypeC:"",coinTypeD:"",coinTypeE:"",pool_address:o.value.poolAddress,pos_index:o.value.index,rewarder_nums:n.length};a.coinTypeC=n[0]?n[0].coin_address:"",a.coinTypeD=n[1]?n[1].coin_address:"",a.coinTypeE=n[2]?n[2].coin_address:"",console.log(a,"===>collectRewarderParams");try{const l=await c.value.getCollectRewarderTransactionPayload(a);let i;if(f.value.chainName==="Aptos")i=await J.value.currentWallet.signAndSubmitTransaction(l);else{const h=await c.value.signAndExecuteTransactionBlock(J.value.currentWallet,l.txb,l.payloadParams);i=c.value.handleTx(h)}if(console.log("0310###toClaimRewards##tx###",i),i&&i.hash){Fe(i.hash),be(!1),qe(!0);const h=n[0].amount+n[0].symbol,p=a.coinTypeD?" and "+n[1].amount+n[1].symbol:"",g=a.coinTypeE?" and "+n[2].amount+n[2].symbol:"",y={title:"Claim",desc:"",hash:i.hash,tit:"Rewards Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:n[0].symbol,numa:`+ ${Number(n[0].amount)}`,logoa:t.value.tokensObj&&n[0]&&n[0].address&&t.value.tokensObj[n[0].address]&&t.value.tokensObj[n[0].address].logoURI,tokenb:a.coinTypeD?n[1].symbol:"",numb:a.coinTypeD?`+ ${Number(n[1].amount)}`:"",logob:a.coinTypeD?t.value.tokensObj&&n[1]&&n[1].address&&t.value.tokensObj[n[1].address]&&t.value.tokensObj[n[1].address].logoURI:"",tokenc:a.coinTypeE?n[2].symbol:"",numc:a.coinTypeE?`+ ${Number(n[2].amount)}`:"",logoc:a.coinTypeE?t.value.tokensObj&&n[2]&&n[2].address&&t.value.tokensObj[n[2].address]&&t.value.tokensObj[n[2].address].logoURI:""}};f.value.chainName!=="Aptos"&&(y.res=i.res),c.value.showTransitionPending(y);const R=await c.value.watchTransaction(y);console.log("0310###toClaimRewards###transitionStatus###",R),R&&setTimeout(()=>{T(),c.value.getAccount(J.value.address)},3e3)}else console.log("0310###toClaimRewards###else###"),be(!1),Ce(!0);de.value=!1}catch(l){console.log("0310###Claim Error###",l),de.value=!1,be(!1),Ce(!0)}};console.log(o,"===>positionInfo");const Ae=d([]);ne(()=>[o.value,t.value.addressLpTokens,t.value.tokensObj,f.value.newTopPoolsObj],([n,a,l,i])=>{if(!M(n)&&!M(a)&&!M(l)){const h=n.address,p=a[h];let g=(p==null?void 0:p.rewarder_infos)||[];const y=i[h],R=[];console.log(g,"===>rewarderInfos"),g&&g.length>0&&(g==null||g.forEach((ee,oe)=>{p[`rewarder_display${oe+1}`]&&R.push({...ee,symbol:l[ee.coinAddress].symbol,rewarderApr:y==null?void 0:y.rewarder_apr[oe],logoUrl:l[ee.coinAddress].logoURI})}),Ae.value=R,Le(n))}},{immediate:!0,deep:!0});const He=d();ne(()=>t.value.RATES,n=>{n&&(He.value=n)},{immediate:!0});const we=w(()=>{var n,a;return(a=(n=o.value)==null?void 0:n.poolInfo)==null?void 0:a.needReverse}),Me=w(()=>Pe[le.value].hasNotifi),ze=w(()=>f.value.currentExplorer);return{hasNotifi:Me,rewarderArr:Ae,feeOwed:ie,config:Be,showNum:j,index:f,fromCoinUrl:Ee,toCoinUrl:Ue,toggle:De,fromCoin:he,toCoin:ge,apr:E,liquidityTvl:U,vol24:B,addCommom:m,decimalFormat:Ie,wallet:J,isLoading:e,toClaim:je,pools:t,positionInfo:o,importIcon:ko,router:u,toRemove:A,toIncrease:S,isShowClaim:v,direct:ye,refresh:ae,clickRefresh:N,pendingRewarderArr:re,pendingRewarder:ke,toClaimRewards:We,rewarderLoading:de,aprRewardsParameter:G,aprRewardsDateList:me,aprTab:ve,reviseValue:F,label:Z,aprTitle:pe,aprTotal:V,rewardAprList:x,currentPoolInfo:L,chainName:le,needReverse:we,currentExplorer:ze}}});const se=e=>(ho("data-v-2778c6e7"),e=e(),go(),e),To={key:0,class:"position-detail-container"},Co={class:"position-detail-header"},Ao={class:"back-and-refresh"},So=se(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),No=[So],Oo={class:"action-position"},$o={class:"coin-pair"},Po=se(()=>s("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),jo=[Po],Do=["href"],Lo=se(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-jump"})],-1)),Eo=[Lo],Uo={class:"acton-btn-box"},Bo=se(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-Reduction"})],-1)),qo=se(()=>s("svg",{"aria-hidden":"true",class:"action-icon"},[s("use",{"xlink:href":"#icon-icon-add"})],-1)),Fo={class:"position-content"},Wo={key:0,class:"pedding-fee range-alerts-all"},Ho={class:"pedding-fee"},Mo={class:"pedding-fee"},zo={class:"top"},Go={class:"left"},Jo={class:"bottom"},Ko={key:1,class:"pedding-fee"},Qo={class:"top"},Xo={class:"left"},Yo={class:"bottom"},Zo={alt:""},Vo={key:2,class:"poolInfo"},xo={class:"pool-info-title"},en={class:"currentPrice"},on={key:0,class:"coin"},nn={key:1,class:"coin"},sn={class:"toggle"},an={alt:""},tn={alt:""},ln={key:0},rn={class:"info-block-container"},dn={class:"info-block"},un={class:"leabl"},cn={class:"text"},pn={class:"apr-hover-content"},mn={class:"info-block"},vn={class:"leabl"},fn={class:"text"},hn={class:"info-block"},gn={class:"leabl"},kn={class:"text"},bn={class:"info-block"},wn={class:"leabl"},_n={class:"text"},In={class:"loading-global"};function yn(e,v,ae,ye,I,f){var t,ie;const ce=Qe,$=co,D=po,z=Xe,G=Ye,pe=Ve,me=xe,Z=Ze,ve=mo,F=ro("image");return e.positionInfo?(_(),C("div",To,[s("div",Co,[s("div",Ao,[k(ce),(_(),C("svg",{"aria-hidden":"true",class:Q(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:v[0]||(v[0]=(...o)=>e.clickRefresh&&e.clickRefresh(...o))},No,2))]),s("div",Oo,[k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>{var o,u,A,S,N,c;return[s("div",$o,[O(r(e.positionInfo.tokenName)+" ",1),(_(),C("svg",{class:"icon","aria-hidden":"true",onClick:v[1]||(v[1]=T=>e.index.copy(e.positionInfo.nftHash))},jo)),s("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:b(oo))(e.currentExplorer,"nftAddress",e.positionInfo.nftHash),target:"_blank"},Eo,8,Do)]),s("div",Uo,[k($,{class:Q(["remove-liquidity action-btn",(u=(o=e.positionInfo)==null?void 0:o.poolInfo)!=null&&u.is_pause?"text-default":""]),disabled:(S=(A=e.positionInfo)==null?void 0:A.poolInfo)==null?void 0:S.is_pause,onClick:e.toRemove},{default:P(()=>[Bo,O(" "+r(e.$t("button.remove")),1)]),_:1},8,["class","disabled","onClick"]),k($,{class:"increase-liquidity action-btn",disabled:(c=(N=e.positionInfo)==null?void 0:N.poolInfo)==null?void 0:c.is_pause,onClick:e.toIncrease},{default:P(()=>[qo,O(" "+r(e.$t("button.increase")),1)]),_:1},8,["disabled","onClick"])])]}),_:1},8,["loading"])])]),s("div",Fo,[k(z,{"position-info":e.positionInfo},null,8,["position-info"])]),e.chainName=="Aptos"&&e.hasNotifi?(_(),C("div",Wo,[k(G,{"position-info":e.positionInfo},null,8,["position-info"])])):X("",!0),s("div",Ho,[(_(),$e(pe,{key:0,"apr-title":e.aprTitle,"apr-rewards-date-list":e.aprRewardsDateList,"apr-rewards-parameter":e.aprRewardsParameter,"name-tab":"position","from-coin":e.fromCoin,"to-coin":e.toCoin,"pool-info":e.positionInfo.poolInfo,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice&&String(e.positionInfo.maxPrice).indexOf("+")>-1?"∞":e.positionInfo.maxPrice,onAprTab:e.aprTab},null,8,["apr-title","apr-rewards-date-list","apr-rewards-parameter","from-coin","to-coin","pool-info","min-price","max-price","onAprTab"]))]),s("div",Mo,[s("div",zo,[s("div",Go,[s("span",null,r(e.$t("newAdd.pendingFees")),1),s("p",null," $"+r(e.pools.currentPositionLoading||e.feeOwed=="--"?"--":Number(e.feeOwed)==0?0:Number(e.feeOwed)<.01?"<0.01":("addCommom"in e?e.addCommom:b(m))(e.feeOwed,2)),1)]),k($,{class:"increase-liquidity action-btn",disabled:e.isLoading||!e.wallet.connected||!(Number(e.positionInfo&&e.positionInfo.feeOwedA)||Number(e.positionInfo&&e.positionInfo.feeOwedB))||e.positionInfo.poolInfo.is_pause,onClick:v[2]||(v[2]=o=>e.isShowClaim=!0)},{default:P(()=>[O(r(e.$t("common.claim")),1)]),_:1},8,["disabled"])]),k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>{var o,u,A,S,N,c,T,L,E,U,B,W,H,V,x,te;return[s("div",Jo,[s("div",null,[Y(s("img",null,null,512),[[F,e.needReverse?e.toCoinUrl:e.fromCoinUrl]]),s("p",null,r(e.needReverse?("showNum"in e?e.showNum:b(j))(e.positionInfo.feeOwedB,(S=(A=e.positionInfo)==null?void 0:A.token_b)==null?void 0:S.decimals):("showNum"in e?e.showNum:b(j))(e.positionInfo.feeOwedA,(u=(o=e.positionInfo)==null?void 0:o.token_a)==null?void 0:u.decimals)),1),s("span",null,r(e.needReverse?(L=(T=e.positionInfo)==null?void 0:T.token_b)==null?void 0:L.symbol:(c=(N=e.positionInfo)==null?void 0:N.token_a)==null?void 0:c.symbol),1)]),s("div",null,[Y(s("img",null,null,512),[[F,e.needReverse?e.fromCoinUrl:e.toCoinUrl]]),s("p",null,r(e.needReverse?("showNum"in e?e.showNum:b(j))(e.positionInfo.feeOwedA,(W=(B=e.positionInfo)==null?void 0:B.token_a)==null?void 0:W.decimals):("showNum"in e?e.showNum:b(j))(e.positionInfo.feeOwedB,(U=(E=e.positionInfo)==null?void 0:E.token_b)==null?void 0:U.decimals)),1),s("span",null,r(e.needReverse?(te=(x=e.positionInfo)==null?void 0:x.token_a)==null?void 0:te.symbol:(V=(H=e.positionInfo)==null?void 0:H.token_b)==null?void 0:V.symbol),1)])])]}),_:1},8,["loading"])]),e.positionInfo&&e.positionInfo.poolInfo&&e.positionInfo.poolInfo.rewarder_infos&&e.positionInfo.poolInfo.rewarder_infos.length>0&&e.positionInfo.poolInfo.is_display_rewarder&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(_(),C("div",Ko,[s("div",Qo,[s("div",Xo,[s("span",null,r(e.$t("newAdd.pendingRewards")),1),s("p",null," $"+r(e.pendingRewarder=="--"?"--":Number(e.pendingRewarder)==0?0:Number(e.pendingRewarder)<.01?"<0.01":("addCommom"in e?e.addCommom:b(m))(e.pendingRewarder,2)),1)]),k($,{class:"increase-liquidity action-btn",disabled:e.rewarderLoading||!e.wallet.connected||e.pendingRewarder<=0||((ie=(t=e.positionInfo)==null?void 0:t.poolInfo)==null?void 0:ie.is_pause),loading:e.rewarderLoading,onClick:e.toClaimRewards},{default:P(()=>[O(r(e.$t("common.claim")),1)]),_:1},8,["disabled","loading","onClick"])]),k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>[s("div",Yo,[(_(!0),C(vo,null,fo(e.pendingRewarderArr,o=>(_(),C("div",{key:o,class:Q(Number(o==null?void 0:o.amount)==0?"reward-none":"")},[Y(s("img",Zo,null,512),[[F,o.logoURI]]),s("p",null,r(o.amount),1),s("span",null,r(o.symbol),1)],2))),128))])]),_:1},8,["loading"])])):X("",!0),e.positionInfo&&e.positionInfo.poolInfo?(_(),C("div",Vo,[s("div",xo,r(e.$t("newAdd.poolInfo")),1),s("div",en,[k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>{var o,u,A,S,N,c,T,L,E,U,B,W;return[(e.needReverse?!e.direct:e.direct)?(_(),C("div",on,[s("span",null,r(e.$t("common.currentPrice")),1),O(" "+r(("addCommom"in e?e.addCommom:b(m))(("decimalFormat"in e?e.decimalFormat:b(Ie))(e.positionInfo.currentPrice,6),6))+" "+r((o=e.toCoin)==null?void 0:o.symbol)+" per "+r((u=e.fromCoin)==null?void 0:u.symbol),1)])):(_(),C("div",nn,[s("span",null,r(e.$t("common.currentPrice")),1),O(" "+r(("addCommom"in e?e.addCommom:b(m))(("decimalFormat"in e?e.decimalFormat:b(Ie))(1/e.positionInfo.currentPrice,6),6))+" "+r((A=e.fromCoin)==null?void 0:A.symbol)+" per "+r((S=e.toCoin)==null?void 0:S.symbol),1)])),s("div",sn,[s("div",{class:Q(e.direct?"item active-item":"item"),onClick:v[3]||(v[3]=H=>e.direct=!0)},[Y(s("img",an,null,512),[[F,e.needReverse?e.toCoinUrl:e.fromCoinUrl]]),O(" "+r(e.needReverse?(L=(T=e.positionInfo)==null?void 0:T.token_b)==null?void 0:L.symbol:(c=(N=e.positionInfo)==null?void 0:N.token_a)==null?void 0:c.symbol),1)],2),s("div",{class:Q(e.direct?"item ":"item active-item"),onClick:v[4]||(v[4]=H=>e.direct=!1)},[Y(s("img",tn,null,512),[[F,e.needReverse?e.fromCoinUrl:e.toCoinUrl]]),O(" "+r(e.needReverse?(W=(B=e.positionInfo)==null?void 0:B.token_a)==null?void 0:W.symbol:(U=(E=e.positionInfo)==null?void 0:E.token_b)==null?void 0:U.symbol),1)],2)])]}),_:1},8,["loading"])]),k(D,{loading:e.pools.currentPositionLoading,active:"",paragraph:!1},{default:P(()=>[e.aprTotal&&e.liquidityTvl&&e.vol24?(_(),C("div",ln,[s("div",rn,[s("div",dn,[s("div",un,r(e.$t("common.apr")),1),s("div",cn,[O(r(e.aprTotal?("addCommom"in e?e.addCommom:b(m))(e.aprTotal.substring(0,e.aprTotal.length-1),2):0)+"% ",1),s("div",pn,[k(me,{class:Q(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":{apr:e.apr,rewarder_apr:e.rewardAprList,aprTotal:e.aprTotal,is_display_rewarder:e.positionInfo.poolInfo.is_display_rewarder},"rewarder-info":e.rewarderArr},null,8,["class","l-item","rewarder-info"])])])]),s("div",mn,[s("div",vn,r(e.$t("common.liquidity")),1),s("div",fn,"$"+r(("addCommom"in e?e.addCommom:b(m))(e.liquidityTvl,2)),1)]),s("div",hn,[s("div",gn,r(e.$t("common.volume24h")),1),s("div",kn,"$"+r(("addCommom"in e?e.addCommom:b(m))(e.vol24,2)),1)]),s("div",bn,[s("div",wn,r(e.$t("newAdd.tickSpacing")),1),s("div",_n,r(e.positionInfo.tickSpacing),1)])])])):X("",!0)]),_:1},8,["loading"])])):X("",!0),e.isShowClaim?(_(),$e(Z,{key:3,"is-loading":e.isLoading,"position-info":e.positionInfo,"need-reverse":e.needReverse,onOnClose:v[5]||(v[5]=o=>e.isShowClaim=!1),onToClaim:e.toClaim},null,8,["is-loading","position-info","need-reverse","onToClaim"])):X("",!0),Y(s("div",In,[k(ve)],512),[[uo,e.pools.currentPositionLoading]])])):X("",!0)}const Vn=lo(Ro,[["render",yn],["__scopeId","data-v-2778c6e7"]]);export{Vn as default};
