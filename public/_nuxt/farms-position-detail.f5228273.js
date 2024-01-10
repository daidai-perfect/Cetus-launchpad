import{u as J,m as K,e as Q,s as q,a as z,c as T}from"./pool.6ba7e8d0.js";import{a as X,l as S,b as Y,r as D,q as Z,e as x,s as ee,o as d,f as P,h as s,F as se,E as oe,c as F,w as v,x as I,i as W,z as te,B as ae,P as ne,t as L,v as ie,u as U,j as h,p as re,k as le}from"./entry.0f97a10d.js";/* empty css              */import{u as ce}from"./farms.d42553d4.js";import{i as ue}from"./import-icon.de3e6c66.js";import{D as M}from"./decimal.0bdeb344.js";import{a as de,u as me}from"./sha256.dd756687.js";const pe=X({setup(){const e=J(),m=S(()=>e),$=ce(),N=S(()=>$),y=Y(),t=S(()=>m.value.currentPositionInfo),c=D(),A=o=>{var a;return((a=m.value.tokensObj[o])==null?void 0:a.logo_url)||ue("/image/coins/sui-unknown.png")},f=K("Sui"),r=D(),R=async o=>{const a=await f.calculateFarmingRewards([{pool_id:o.pool_id,position_nft_id:o.id}]),l=[];let i=new M(0);a[o.id].forEach(n=>{var V;const g=(V=m.value.tokensObj[n.rewarder_type])==null?void 0:V.decimals;let k=new M(n.rewarder_amount).div(Math.pow(10,g)).toString();Number(k)>0&&(i=i.add(k),l.push({...n,rewarderAmount:k,rewarderAmountPer:k}))}),r.value=i,c.value=l,console.log("getRewarder",o,l)},j=S(()=>N.value.farmsPoolObj);Z(()=>[t.value,j.value],([o,a])=>{!T(o)&&o.positionSource=="farming"?R(o):!T(a)&&!T(o)&&(console.log(a,"##farmsPoolObj"),c.value=a[o.poolAddress].rewarders)},{immediate:!0});const G=de(),B=S(()=>G),H=me(),_=Q("Sui"),{setIsShowSuccess:E,setIsShowRejected:b,setIsShowWaiting:u,setTransactionDesc:O,setTransactionTxid:C}=H,p=D(!1);return{getCoinIcon:A,rewardList:c,sFixD:q,addCommom:z,claim:async()=>{p.value=!0,C(""),O("Claim"),u(!0);const o={pool_id:t.value.pool_id,position_nft_id:t.value.id};try{const a=await f.harvestFarms(o),l=await B.value.currentWallet.signAndExecuteTransactionBlock(a);console.log("0221###sui swap res###",l);let i=_.handleTx(l);if(i&&i.hash){C(i.hash),u(!1),E(!0);let n={title:"claim",res:i.res,hash:i.hash};_.showTransitionPending(n),await _.watchTransaction(n)&&setTimeout(()=>{R(t.value)},2e3)}else u(!1),b(!0);p.value=!1}catch(a){console.log("farmsDeposit error",a),u(!1),b(!0),p.value=!1}},unStake:async()=>{p.value=!0,C(""),O(`Unstake ${t.value.name}`),u(!0);const o=t.value.pool_id,a=t.value.id;try{const l=await f.farmsWithdraw(o,a),i=await B.value.currentWallet.signAndExecuteTransactionBlock(l);console.log("0221###sui swap res###",i);let n=_.handleTx(i);if(console.log(n,"unStaketx##"),n&&n.hash){C(n.hash),u(!1),E(!0);let g={res:n.res,title:"Unstake",hash:n.hash};_.showTransitionPending(g),await _.watchTransaction(g)&&setTimeout(()=>{console.log("unstake success"),y.replace(`/new-position-detail?name=${t.value.tokenName}address=${t.value.clmm_pool_id}&pos=${t.value.clmm_position_id}`),m.value.setCurrentPositionInfo(t.value.clmm_pool_id,"",t.value.tokenName,"Sui",t.value.clmm_position_id)},2e3)}else u(!1),b(!0);p.value=!1}catch(l){console.log("farmsDeposit error",l),u(!1),b(!0),p.value=!1}},loading:p,totalRewardAmount:r,currentPositionInfo:t,stake:async()=>{y.push("/farms")},farmsPoolObj:j}}});const w=e=>(re("data-v-bc0288f0"),e=e(),le(),e),fe={key:0,class:"farms-position-detail"},_e={class:"farms-top"},ve=w(()=>s("div",{class:"left"},[s("div",{class:"title"},"Farming"),s("div",{class:"desc"},"Stake Position to Earn")],-1)),he={class:"right"},we=w(()=>s("div",{class:"apr"},[h(" APR "),s("span",null,"22.20%")],-1)),ge=w(()=>s("span",null,"View",-1)),ke=w(()=>s("svg",{class:"arrow-icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon_arrow"})],-1)),Se=[ge,ke],Pe={class:"farms-bottom"},be=w(()=>s("div",{class:"title"},"Earnings",-1)),Ce={class:"reward-list"},Ie={key:0,class:"rewards-item-bg"},ye={class:"rewards-item-box"},Ae={alt:""},Te={key:1},De={class:"rewards-item-bg"},Fe={class:"rewards-item-box"},$e={alt:""},Ne=w(()=>s("span",null,"0",-1)),Re={class:"actions-box"};function je(e,m,$,N,y,t){const c=ae,A=ne,f=ee("image");return e.farmsPoolObj&&e.farmsPoolObj[e.currentPositionInfo.poolAddress]?(d(),P("div",fe,[s("div",_e,[ve,s("div",he,[we,s("div",{class:"view",onClick:m[0]||(m[0]=r=>e.$router.push("/farms"))},Se)])]),s("div",Pe,[be,s("div",Ce,[(d(!0),P(se,null,oe(e.rewardList,r=>(d(),P("div",{key:r,class:"rewards-item"},[e.currentPositionInfo.positionSource=="farming"?(d(),P("div",Ie,[s("div",ye,[L(s("img",Ae,null,512),[[f,e.getCoinIcon(r.rewarder_type)]]),s("span",null,ie(r.rewarderAmountPer>0&&r.rewarderAmountPer<.01?"<0.01":("addCommom"in e?e.addCommom:U(z))(("sFixD"in e?e.sFixD:U(q))(r.rewarderAmount,4))),1)])])):(d(),P("div",Te,[s("div",De,[s("div",Fe,[L(s("img",$e,null,512),[[f,e.getCoinIcon(r.reward_coin)]]),Ne])])]))]))),128))]),s("div",Re,[e.currentPositionInfo&&e.currentPositionInfo.positionSource=="farming"?(d(),F(c,{key:0,class:"unstake-btn",loading:e.loading,onClick:e.unStake},{default:v(()=>[h("Unstake")]),_:1},8,["loading","onClick"])):I("",!0),e.currentPositionInfo&&e.currentPositionInfo.positionSource=="clmm"&&e.currentPositionInfo.positionStatus!=="Active"?(d(),F(A,{key:1},{title:v(()=>[h("Farming rewards are only available for active positions.")]),default:v(()=>[W(c,{class:"unstake-btn",loading:e.loading,disabled:e.currentPositionInfo.positionStatus!=="Active",onClick:e.stake},{default:v(()=>[h("Stake")]),_:1},8,["loading","disabled","onClick"])]),_:1})):I("",!0),e.currentPositionInfo&&e.currentPositionInfo.positionSource=="clmm"?(d(),F(c,{key:2,class:"unstake-btn",loading:e.loading,onClick:e.stake},{default:v(()=>[h("Stake")]),_:1},8,["loading","onClick"])):I("",!0),W(c,{class:"unstake-btn btn-margin",loading:e.loading,disabled:e.totalRewardAmount==0||e.currentPositionInfo&&e.currentPositionInfo.positionSource!=="farming",onClick:te(e.claim,["stop"])},{default:v(()=>[h("↑ Claim")]),_:1},8,["loading","disabled","onClick"])])])])):I("",!0)}const Ge=x(pe,[["render",je],["__scopeId","data-v-bc0288f0"]]);export{Ge as _};
