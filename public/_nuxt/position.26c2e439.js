import{u as O}from"./usePoolList.e34ab393.js";import{u as D}from"./pool.9485352c.js";import{f as u,c as b}from"./index.de084947.js";import{m as t,a as R,D as L,M as x,o as N,f as F,i as Y,w as T,h as c,v as j,F as U,p as y,k as E,j as k,e as q}from"./entry.99c72b2b.js";import{b as B}from"./usePositionList.2ff34cf9.js";import{u as C}from"./token.1cb7b9bf.js";import{u as I}from"./index.df82624f.js";import"./useToken.f31d6693.js";import"./fetchFun.e5c1277e.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";import"./useRate.eb92b6c6.js";function V(){const a=D(),{setPendingYieldTokenList:f,setPendingYieldPositionList:m}=a,i=t(()=>a),P=t(()=>i.value.positionPendingFees),v=t(()=>i.value.positionPendingRewards),_=t(()=>i.value.positionsObj);return{getPendingYieldList:()=>{const d={},l=[],r=(o,p,S)=>{o[S].gt(0)&&o[p].forEach(n=>{l.includes(o.positionId)||l.push(_.value[o.positionId]);const e=n.tokenInfo.address,s=d[e];s?(s.amountUSD=u(s.amountUSD).add(isNaN(n.amountUSD)?0:n.amountUSD).toString(),s.amount=u(s.amount).add(isNaN(n.amount)?0:n.amount).toString()):d[e]={...n,amountUSD:u(n.amountUSD||0).toString(),amount:u(n.amount||0).toString()}})};Object.values(v.value).forEach(o=>r(o,"rewarderAmountOwed","positionPendingRewards")),Object.values(P.value).forEach(o=>r(o,"feesList","feesAmountUSD")),console.log("🚀🚀🚀 ~ getPendingYieldList ~ claimObj:",d),console.log("🚀🚀🚀 ~ file: usePendingYeild.ts:22 ~ getPendingYieldList ~ hasRewardPosList:",l),f(Object.values(d)),m(l)}}}const h=a=>(y("data-v-387d5a66"),a=a(),E(),a),$=h(()=>c("br",null,null,-1)),A=h(()=>c("br",null,null,-1)),M=h(()=>c("br",null,null,-1)),W="0xab1f2134f62e584a5e8268e930ea4b318f12b9033bc178600627d110a1bfe50d",z="0x2add24afda02c882952de579ef86f2d2d74ad148d7aa2e286e91f249567cb760",G=R({__name:"position",setup(a){const{getPoolList:f}=O(),{getPositionList:m}=B(),i=D(),P=t(()=>i),v=t(()=>P.value.poolsObj),_=I(),w=t(()=>_),d=C(),l=t(()=>d.allTokensObj);L(()=>[w.value.address,v.value,l.value],([e,s,g])=>{e&&s&&!b(s)&&!b(g)&&m(e)}),L(()=>l.value,e=>{e&&!b(e)&&f()});const r=t(()=>i.positionTotalPendingFees),o=t(()=>i.positionTotalPendingRewards),p=t(()=>(console.log("🚀🚀🚀 ~ file: position.vue:64 ~ pendingYield ~ positionTotalPendingFees.value:",r.value),console.log("🚀🚀🚀 ~ file: position.vue:65 ~ pendingYield ~ positionTotalPendingRewards.value:",o.value),r.value==="--"||o.value==="--"?"--":u(r.value||0).add(o.value||0).toString())),S=t(()=>i.totalLiquidityPrice),{getPendingYieldList:n}=V();return L(()=>p.value,e=>{e&&e!=="--"&&n()}),(e,s)=>{const g=x("RouterLink");return N(),F(U,null,[Y(g,{to:`/sui/new-position-detail?id=${W}&positionSource=clmm`},{default:T(()=>[k("to clmm Detail")]),_:1},8,["to"]),$,Y(g,{to:`/sui/new-position-detail?id=${z}&positionSource=farm`},{default:T(()=>[k("to farm Detail")]),_:1},8,["to"]),A,c("span",null,"Total Liquidity "+j(S.value),1),M,c("span",null,"Pending Yield "+j(p.value),1)],64)}}});const ao=q(G,[["__scopeId","data-v-387d5a66"]]);export{ao as default};
