import{C as L,I as C,a as O}from"./index.2cd326ac.js";import{c as i,a as B,u as W,E as M}from"./sha256.56fdff7c.js";import{F as S,u as E,ar as J}from"./pool.42a6ec0f.js";import{a6 as j,l as h,Q as q,a7 as F}from"./entry.4715eb42.js";function p(e){const c={launchpad:i[e||"Sui"].launchpad,ido:i[e||"Sui"].ido,xcetus:i[e||"Sui"].xcetus,xcetus_dividends:i[e||"Sui"].xcetus_dividends,cetus_faucet:i[e||"Sui"].cetus_faucet,xtoken:i[e||"Sui"].xtoken,xtoken_dividends:i[e||"Sui"].xtoken_dividends,token_faucet:i[e||"Sui"].token_faucet,booster:i[e||"Sui"].booster,maker_bonus:i[e||"Sui"].maker_bonus},n={fullRpcUrl:localStorage.getItem(`${e}-currentRpclocal2`)||i[e||"Sui"].fullRpcUrl,simulationAccount:i[e||"Sui"].simulationAccount,cetus_config:i[e||"Sui"].cetus_config,clmm_pool:i[e||"Sui"].clmm_pool,integrate:i[e||"Sui"].integrate,deepbook:i[e||"Sui"].deepbook,deepbook_endpoint_v2:i[e||"Sui"].deepbook_endpoint_v2,aggregatorUrl:i[e||"Sui"].aggregatorUrl},s=new S(n),l=j(new L(c,s)),r=new O(l),k=B(),m=h(()=>k);q(()=>{m.value.address&&(l.ClmmSDK.senderAddress=m.value.address)});const I=()=>{const t=new S(n);return new L(c,t)},_=t=>({transactionBlock:t,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}}),A=W();h(()=>A);const x=E();h(()=>x);const T=async t=>{t.setSenderIfNotSet(m.value.address);const o=await t.build({provider:l.ClmmSDK.fullClient});return await l.ClmmSDK.fullClient.dryRunTransactionBlock({transactionBlock:o})},b=async()=>await r.getPools(),D=async t=>await r.getPool(t),R=async(t,o)=>{const a=o||await r.getPools();return await r.getJoinPools(t,a)},v=async(t,o)=>(o||await r.getPools()).filter(u=>u.owner===M(t)),U=async t=>{const o=I();o.ClmmSDK.senderAddress=m.value.address;const a=await r.creatPurchasePayload(t.pool,t.amount);return _(a)},K=async t=>{const o=await r.creatRedeemPayload(t.pool);return _(o)},y=async t=>{if(console.log("pool: ",t),t.pool_status!=="Settle")throw new Error("The pool is not in settle ");let o=null,a=!1;const u=await l.ClmmSDK.Pool.getPoolImmutables();for(const d of u){if(d.coinTypeA===t.coin_type_sale&&d.coinTypeB===t.coin_type_raise&&Number(d.tickSpacing)===t.tick_spacing){o=await l.ClmmSDK.Pool.getPool(d.poolAddress),console.log("clmmPool: ",o);break}if(d.coinTypeA===t.coin_type_raise&&d.coinTypeB===t.coin_type_sale&&Number(d.tickSpacing)===t.tick_spacing){o=await l.ClmmSDK.Pool.getPool(d.poolAddress),a=!0,console.log("clmmPool: ",o);break}}const P=await l.ClmmSDK.CetusConfig.getTokenListByCoinTypes([t.coin_type_raise,t.coin_type_sale]),f=P[t.coin_type_sale].decimals,w=P[t.coin_type_raise].decimals;let g;if(t.liquidity_injection_ratio>0&&o===null)throw new Error("not found clmmPool ");if(o&&t.liquidity_injection_ratio>0){console.log(JSON.stringify({pool_address:t.pool_address,coin_type_sale:t.coin_type_sale,coin_type_raise:t.coin_type_raise,clmm_args:{current_price:t.current_price,clmm_pool_address:o.poolAddress,clmm_sqrt_price:o.current_sqrt_price.toString(),opposite:a,sale_decimals:f,raise_decimals:w}}),"txtxtxtxtxt2222");try{g=await l.Launchpad.creatSettlePayload({pool_address:t.pool_address,coin_type_sale:t.coin_type_sale,coin_type_raise:t.coin_type_raise,clmm_args:{current_price:t.current_price,clmm_pool_address:o.poolAddress,clmm_sqrt_price:o.current_sqrt_price.toString(),opposite:a,sale_decimals:f,raise_decimals:w}})}catch(d){console.log(d,"e===>")}}else g=await l.Launchpad.creatSettlePayload({pool_address:t.pool_address,coin_type_sale:t.coin_type_sale,coin_type_raise:t.coin_type_raise});return console.log(g,"txtxtx25211"),g};return{is_can_withdraw:async t=>C.is_can_withdraw(t),calculateRedeemAmount:async(t,o)=>C.calculateRedeemAmount(t,o),getPoolConfigs:async()=>{const t=await l.ClmmSDK.CetusConfig.getLaunchpadPoolConfigs();return console.log(t,"==>poolConfigs"),t},getLockNFTList:async t=>{if(t.is_liquidity_injected){const o=await r.getLockNFTList(t);return console.log("getLockNFTList: ",o),o}},beforeSettle:y,simulate:T,TickUtil:J,getCmmPoolAddress:async t=>{let o=null;const a=await l.ClmmSDK.Pool.getPoolImmutables();console.log(a,"===>clmmImmutables");for(const u of a){if(u.coinTypeA===t.coin_type_sale&&u.coinTypeB===t.coin_type_raise&&Number(u.tickSpacing)==Number(t.tick_spacing)){o=await l.ClmmSDK.Pool.getPool(u.poolAddress),console.log("clmmPool: ",o);break}if(u.coinTypeA===t.coin_type_raise&&u.coinTypeB===t.coin_type_sale&&Number(u.tickSpacing)==Number(t.tick_spacing)){o=await l.ClmmSDK.Pool.getPool(u.poolAddress),console.log("clmmPool: ",o);break}}return o||null},getLaunchpadAllPools:b,getLaunchpadPoolInfo:D,getJoinPools:R,getOwnerPools:v,getCreatPurchasePayload:U,getCreatClaimPayload:K,getCreatSettlePayload:async t=>{const o=await y(t);return console.log(o,"txtxtxtxtxtxtx111"),_(o)},getCreatWithdrawParams:async t=>{const o=await r.creatWithdrawPayload(t);return _(o)},getIsWhiteListUser:async(t,o)=>await r.isWhiteListUser(o,t),getCreatUnlockNftPayload:async(t,o)=>{if(t.pool_status=="Ended"){if(o){const a={lock_nft:o.lock_nft_id,nft_type:t.version=="1"?o.nft_type:o.type},u=await r.unlockNftPayload(t,a);return _(u)}}else throw new Error("The pool is not in Ended  ")},getPurchaseMark:async(t,o)=>{const a=await r.getPurchaseInfo(t,o);return console.log("purchaseMark",a),a},getPurchaseAmountVal:async(t,o)=>await r.getwhiteProtectionInfo(t,o),calculateWithdrawAmount:async t=>await r.calculateWithdrawAmount(t),getCoinInfo:async(t,o)=>{const a=await l.ClmmSDK.CetusConfig.getTokenListByCoinTypes([t,o]);return console.log(a,"==>tokenMap"),a}}}const lt=F("launchpad",{state:()=>({currentLaunchpadPoolInfo:{},launchpadAllPools:[],launchpadOwnerAllPools:[],launchpadJoinPools:[],haveLaunchpad:!1,launchpadPoolsLoading:!0,getOwnDateLoading:!0,ownIsWhiteList:!1,committedCoinAssetCount:"0",currentPoolNumData:{},idoPoolConfigInfo:{},purchaseMark:{},settlePayTokenAInfo:{},settlePayTokenBInfo:{},getPurchaseAmountLoading:!0,currentTab:"latest"}),actions:{async setSettlePayTokenAInfo(e){this.settlePayTokenAInfo=e},async setSettlePayTokenBInfo(e){this.settlePayTokenBInfo=e},async setGetPurchaseAmountLoading(e){this.getPurchaseAmountLoading=e},async setPurchaseMark(e){this.purchaseMark=e},async setGetOwnDateLoading(e){this.getOwnDateLoading=e},async setCurrentLaunchpadPoolInfo(e){this.currentLaunchpadPoolInfo=e},async setCurrentTab(e){this.currentTab=e},async setCurrentPoolNumData(e){this.currentPoolNumData=e},async setOwnIsWhiteList(e){this.ownIsWhiteList=e},async setMyCountCommittedCoinAsset(e){this.committedCoinAssetCount=e},async setLaunchpadPoolsLoading(e){this.launchpadPoolsLoading=e},async setLaunchpadAllPools(){this.launchpadAllPools=[],this.setLaunchpadPoolsLoading(!0);const c=await p("Sui").getLaunchpadAllPools()||[];this.launchpadAllPools=c.sort((n,s)=>s.duration_summary.end_time-n.duration_summary.end_time),this.setLaunchpadPoolsLoading(!1),console.log("launchpadAllPoolsListlaunchpadAllPoolsList",c)},async setLaunchpadAllPoolsNoLoading(){const c=await p("Sui").getLaunchpadAllPools()||[];this.launchpadAllPools=c.sort((n,s)=>s.duration_summary.end_time-n.duration_summary.end_time),console.log("launchpadAllPoolsListlaunchpadAllPoolsList11",c)},async getCurrentLaunchpadPoolInfo(e){this.setGetPurchaseAmountLoading(!0);const c=p("Sui"),n=await c.getLaunchpadPoolInfo(e)||{},s=await c.getCoinInfo(n.coin_type_raise,n.coin_type_sale);this.currentLaunchpadPoolInfo={raiseCoinInfo:{logoURI:s[n.coin_type_raise].logo_url,...s[n.coin_type_raise]},saleCoinInfo:{logoURI:s[n.coin_type_sale].logo_url,...s[n.coin_type_sale]},...n},this.setGetOwnDateLoading(!1),console.log("currentLaunchpadPoolInfo",this.currentLaunchpadPoolInfo)},async getCurrentLaunchpadPoolInfoNoLoading(e){const c=p("Sui"),n=await c.getLaunchpadPoolInfo(e)||{},s=await c.getCoinInfo(n.coin_type_raise,n.coin_type_sale);this.currentLaunchpadPoolInfo={raiseCoinInfo:{logoURI:s[n.coin_type_raise].logo_url,...s[n.coin_type_raise]},saleCoinInfo:{logoURI:s[n.coin_type_sale].logo_url,...s[n.coin_type_sale]},...n},console.log("currentLaunchpadPoolInfo11",this.currentLaunchpadPoolInfo)},async setLaunchpadJoinPools(e){this.setLaunchpadPoolsLoading(!0);const n=await p("Sui").getJoinPools(e)||[];n.length<1?this.setLaunchpadPoolsLoading(!1):(this.launchpadJoinPools=n.sort((s,l)=>l.duration_summary.end_time-s.duration_summary.end_time),this.setLaunchpadPoolsLoading(!1),console.log("launchpadJoinPoolsListresultresultresult111",n))},async setLaunchpadOwnerAllPools(e,c){const s=await p("Sui").getOwnerPools(e,c)||[];s.length<1?this.haveLaunchpad=!1:(this.launchpadOwnerAllPools=s.sort((l,r)=>r.duration_summary.end_time-l.duration_summary.end_time),this.haveLaunchpad=!0),console.log("resultresultresult111",s)},async getIdoPoolConfigInfo(){const c=await p("Sui").getPoolConfigs(),n={};c.map((s,l)=>{n[s.pool_address]=s}),console.log(c,n,"resres"),this.idoPoolConfigInfo=n||{}}}});export{p as a,lt as u};
