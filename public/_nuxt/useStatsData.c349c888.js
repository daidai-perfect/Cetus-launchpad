import{u as O}from"./stats.a4078005.js";import{h as l,g as U}from"./index.881efd6c.js";import{f as j}from"./fetchFun.b7d6300f.js";import{s as r,f as _}from"./formatter.f70db6df.js";function Q(){const{setIsStatsApiError:g,setOverallStatistics:E,setPoolsStatsList:F,setTokensStatsList:N}=O(),R=s=>{var A,k,b,L,T,I,V,C;const e=(s==null?void 0:s.is_forward)===!1,f=(A=s==null?void 0:s.symbol)==null?void 0:A.split("-"),o=e?f.reverse().join("-"):s==null?void 0:s.symbol,n=(k=s==null?void 0:s.apr_24h)==null?void 0:k.split("%")[0];let i=l(0);const h=[];(b=s==null?void 0:s.rewarder)!=null&&b.is_display_rewarder&&((L=s==null?void 0:s.rewarder)!=null&&L.rewarder_display1||(T=s==null?void 0:s.rewarder)!=null&&T.rewarder_display2||(I=s==null?void 0:s.rewarder)!=null&&I.rewarder_display3)&&(((V=s==null?void 0:s.rewarder)==null?void 0:V.rewarder_coin)||[]).forEach((u,c)=>{var m,v,P;if((m=s==null?void 0:s.rewarder)!=null&&m[`rewarder_display${c+1}`]){const y=(P=(v=s==null?void 0:s.rewarder_apr[c])==null?void 0:v.split("%"))==null?void 0:P[0];i=i.add(y),h.push({...u,apr:y,aprDisplay:r(y,"%")})}});let p=l(0);const S=[];s!=null&&s.stable_farming&&((C=s==null?void 0:s.stable_farming)==null?void 0:C.stable_rewarder).forEach(u=>{var v;const c=(v=u==null?void 0:u.apr)==null?void 0:v.split("%")[0];p=p==null?void 0:p.add(c*100);const m=l(u==null?void 0:u.amount_second).mul(60*60*24).toString();l(c).gt(0)&&S.push({...u,apr:c,aprDisplay:r(c,"%"),amountDay:m,amountDayDisplay:_(m,0)})});const w=l(n).add(i).add(p).toString(),D=l(n).add(i).toString();return{poolAddress:s==null?void 0:s.swap_account,poolName:o,fee:s==null?void 0:s.fee,feeDisplay:l(s==null?void 0:s.fee).mul(100).toString()+"%",isReverse:e,tokenAAddress:s==null?void 0:s.token_a_address,tokenBAddress:s==null?void 0:s.token_b_address,displayTokenAAddress:e?s==null?void 0:s.token_b_address:s==null?void 0:s.token_a_address,displayTokenBAddress:e?s==null?void 0:s.token_a_address:s==null?void 0:s.token_b_address,tvl:s==null?void 0:s.pure_tvl_in_usd,tvlDisplay:r(s==null?void 0:s.pure_tvl_in_usd),volume7d:s?s==null?void 0:s.vol_in_usd_7_day:0,volume24:s?s==null?void 0:s.vol_in_usd_24h:0,volume7dDisplay:r(s==null?void 0:s.vol_in_usd_7_day),volume24Display:r(s==null?void 0:s.vol_in_usd_24h),fees24:s==null?void 0:s.fee_24_h,fees24Display:r(s==null?void 0:s.fee_24_h),totalApr:w,totalAprDisplay:r(w,"%"),apr24hAndMiningApr:D,apr24hAndMiningAprDisplay:r(D,"%"),feeApr:n,feeAprDisplay:r(n,"%"),mining:h,miningApr:i.toString(),miningAprDisplay:r(i.toString(),"%"),stableFarming:S,stableFarmingApr:p.toString(),stableFarmingAprDisplay:r(p.toString(),"%"),autoPool:s==null?void 0:s.auto_pool,tickSpacing:Number(s==null?void 0:s.tick_spacing)}},$=s=>{var o;const e=(o=s==null?void 0:s.price_rate_24h)==null?void 0:o.split("%")[0];return{address:s==null?void 0:s.address,symbol:s==null?void 0:s.symbol,name:s==null?void 0:s.name,price:s==null?void 0:s.price,priceDisplay:l(s==null?void 0:s.price).gt(1)?_(s==null?void 0:s.price):_(s==null?void 0:s.price,4),priceChange:e,priceChangeDisplay:l(e).lt(0)?s==null?void 0:s.price_rate_24h:`+${s==null?void 0:s.price_rate_24h}`,volume24:s==null?void 0:s.vol_in_usd_24h,volume24Display:l(s==null?void 0:s.vol_in_usd_24h).lte(0)?"0":r(s==null?void 0:s.vol_in_usd_24h),tvl:s==null?void 0:s.pure_tvl_in_usd,tvlDisplay:l(s==null?void 0:s.pure_tvl_in_usd).lte(0)?"0":r(s==null?void 0:s.pure_tvl_in_usd)}},x=s=>({cumulativeVolume:s==null?void 0:s.vol_in_usd,cumulativeVolumeDisplay:_(s==null?void 0:s.vol_in_usd),totalValueLocked:s==null?void 0:s.pure_tvl_in_usd,totalValueLockedDisplay:_(s==null?void 0:s.pure_tvl_in_usd),cumulativeTransactions:s==null?void 0:s.tx_num,cumulativeTransactionsDisplay:_(s==null?void 0:s.tx_num,0),totalAccounts:s==null?void 0:s.user_num,totalAccountsDisplay:_(s==null?void 0:s.user_num,0),volInUsd24hSumV1:_(s==null?void 0:s.vol_in_usd_24h_sum_v1,2),volInUsd24h:_(s==null?void 0:s.vol_in_usd_24h,2)}),B=async s=>{g(!1);try{const e=await j(`${U.Sui.api}/v2/sui/swap/count/v3`);return console.log("🚀 ~ file: useStatsData.ts:8 ~ fetchStatsData ~ res:",e),e||null}catch(e){return g(!0),console.log("🚀 ~ file: useStatsData.ts:12 ~ fetchStatsData ~ error:",e),null}};return{getStatusData:async()=>{var e,f;console.log("🚀 ~ file: useStatsData.ts:9 ~ getStatusData:");const s=await B();if(s){const o=x(s);E(o)}if(s!=null&&s.pools){const o=[];for(let n=0;n<((e=s==null?void 0:s.pools)==null?void 0:e.length);n++){const i=await R(s==null?void 0:s.pools[n]);o.push(i)}F(o)}if(s!=null&&s.tokens){const o=[];for(let n=0;n<((f=s==null?void 0:s.tokens)==null?void 0:f.length);n++){const i=await $(s==null?void 0:s.tokens[n]);o.push(i)}N(o)}}}}export{Q as u};
