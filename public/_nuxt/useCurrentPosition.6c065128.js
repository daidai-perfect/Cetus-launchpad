import{u as a}from"./pool.28ddfb2e.js";import{a as S,b as I,u as R}from"./usePositionList.b5b33239.js";import{h as F,c as T}from"./index.fd3ccf30.js";import{u as b}from"./useSDK.6c56df03.js";import{u as x}from"./useToken.6352aae2.js";import"./decimal.a2826370.js";import{h}from"./common.9fb5840b.js";import{u as D}from"./useRate.f34fd0cd.js";import{D as j}from"./decimal.765d8738.js";import{m as c}from"./entry.82d9c46a.js";function G(){const l=a(),p=c(()=>l);c(()=>p.value.poolsObj);const{positionsObj:r,setCurrentPositionInfo:u,setCurrentPositionLoading:m}=a(),{getPositionFees:d}=S(),{getPositionReward:_}=I(),{getPoolInfoByContract:g,wrapPositionItem:f}=R(),{getPositionById:w}=F("Sui"),{getFramsPositionNFT:P}=T("Sui");b();const{getToken:C}=x(),{getTokenRatePrice:y}=D(),k=async o=>{const i=[];for(let t=0;t<o.rewards.length;t++){const e=o.rewards[t],s=await C(e.rewarder_type),n=h(e.rewarder_amount).div(j.pow(10,s.decimals)).toString();i.push({...s,rewardAmount:n,rewardAmountUSD:y(s.address,n,s.decimals)})}return{coin_type_a:o.coinTypeA,coin_type_b:o.coinTypeB,name:o.name,pool:o.clmm_pool_id,tick_lower_index:o.tick_lower_index,tick_upper_index:o.tick_upper_index,position_source:"farms",pos_object_id:o.clmm_position_id,farm_position_id:o.id,liquidity:o.liquidity,farmsReward:i,farm_pool_id:o.pool_id}};return{getCurrentPosition:async(o,i="clmm")=>{console.log("🚀🚀🚀 ~ file: useCurrentPosition.ts:21 ~ getCurrentPosition ~ positionId:",o,i),r&&r[o]&&u(r[o]);let t,e;i==="clmm"?(e=await w(o),t={...e,position_source:"clmm"}):(e=await P(o),console.log("🚀🚀🚀 ~ file: useCurrentPosition.ts:44 ~ getCurrentPosition ~ posRes:",e),t=await k(e)),console.log("🚀🚀🚀 ~ file: useCurrentPosition.ts:78 ~ getCurrentPosition ~ positionInfo:",t);const s=await g([t.pool]);console.log("🚀🚀🚀 ~ file: useCurrentPosition.ts:81 ~ getCurrentPosition ~ contractPoolInfo:",s);const n=await f(t,s[t.pool]);console.log("🚀🚀🚀 ~ file: useCurrentPosition.ts:82 ~ getCurrentPosition ~ position:",n),u(n),d([t],!1),_([t],!1),m(!1)}}}export{G as u};
