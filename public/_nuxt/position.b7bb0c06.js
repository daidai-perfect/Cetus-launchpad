import{_ as Q}from"./upgrade-loading.b8de11fc.js";import{_ as X}from"./upgrade-position-item.05f5559f.js";import{a as Y,r as L,l as Z,b as M,W as x,m as a,y as oo,C as eo,G as N,a1 as so,e as to,o as r,f as l,i as U,x as C,F as no,s as ao,h as ro,v as V,w as lo,B as io,c as uo,j as co}from"./entry.7dcfbd3d.js";import{b as mo,u as po}from"./pool.3fc49680.js";import{u as vo}from"./notifi.88f6be76.js";import{u as fo,c as go}from"./index.33b6d0c7.js";import{i as q}from"./import-icon.de3e6c66.js";import{_ as _o}from"./img-no-Positions_2x.d87b6ca1.js";import{_ as ho}from"./img-no-Positions_2x.7d45aeda.js";import{_ as yo}from"./img-connect-wallet_2x.6cce7e18.js";import{_ as bo}from"./img-connect-wallet_2x.d532471d.js";/* empty css              */import"./index.c581952a.js";import"./status-block.d66bc434.js";/* empty css              */import"./farms-valid-range.c41a0f6d.js";import"./decimal.0bdeb344.js";import"./farms.d5b979e8.js";import"./icon_farms_2x.7fbe7f76.js";import"./icon_rewards_2x.22425e43.js";import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";import"./farms.77585d2c.js";import"./useWhale.d0286035.js";const ko=Y({setup(){const s=L(!1),{t:w}=Z(),R=L(["position"]),G=M(),$=x(),E=L(""),h=mo(),c=a(()=>h),S=a(()=>{const o=$.query.poolAddress,e=n.value.poolConfigObj[o];return console.log(e,"infoinfoinfo"),e}),A=a(()=>c.value.chainName?go[c.value.chainName]:{});let i=L([]);const y=po(),n=a(()=>y),D=fo(),b=a(()=>D),F=()=>{s.value=!0,i.value=[],b.value.address&&y.getMyPositons(b.value.address,n.value.poolsObj,c.value.chainName),setTimeout(()=>{s.value=!1},1e3)};oo(()=>{i.value=[],y.setMyPositionsLoading(!0)}),eo(()=>{b.value.connected||(i.value=[])});const W=()=>{s.value=!0;let o=[];n.value.poolPositions.forEach(e=>{var _,T,B,O;let t,u;const p=e.amountA*((_=n.value.RATES[e.token_a.address])==null?void 0:_.price),d=e.amountB*((T=n.value.RATES[e.token_b.address])==null?void 0:T.price);(B=n.value.RATES[e.token_a.address])!=null&&B.price&&((O=n.value.RATES[e.token_b.address])!=null&&O.price)?(t=p+d,u=p+d):(t=" --",u=0);let P=e.positionSource=="farming";o.push({...e,amountUSD:t,amountUSDOrigin:u,tokenARates:p,tokenBRates:d,isStableFarming:P})}),i.value=o,console.log(i.value,"list.value========>")};N(()=>[n.value.poolPositions,n.value.RATES,S.value],([o,e,t])=>{o&&e&&t&&(console.log("0605==>updateLpList9099999"),W())},{immediate:!0}),N(()=>[b.value.address,S.value,c.value.chainName],([o,e,t])=>{o&&e&&t&&y.getMyPositonsByPool(o,e,t)},{immediate:!0,deep:!0});const k=vo(),m=a(()=>k),j=a(()=>y),J=async o=>{await k.getSourceGroups();const e=m.value.sourceGroups&&m.value.sourceGroups.length>0&&m.value.sourceGroups[0]&&m.value.sourceGroups[0].sources||[];for(let t=0;t<e.length;t++){const{pool_address:u,position_index:p}=JSON.parse(e[t].blockchainAddress);let d=!1,P;for(let _=0;_<o.length;_++){const{poolAddress:T,index:B}=o[_];u==T&&Number(B)==Number(p)&&(d=!0),P={pool_address:u,position_index:p}}d||await k.subscribePosition(P,"",!1,!1)}},I=async()=>{await k.getSourceGroups();const o=m.value.sourceGroups&&m.value.sourceGroups.length>0&&m.value.sourceGroups[0]&&m.value.sourceGroups[0].sources||[];for(let e=0;e<o.length;e++){const{pool_address:t,position_index:u}=JSON.parse(o[e].blockchainAddress),{name:p}=o[e],d={pool_address:t,position_index:u};await k.subscribePosition(d,p,!1,!1)}},K=a(()=>j.value.myPositionsLoading);N(()=>j.value.poolPositions,(o,e)=>{A.value.hasNotifi&&(o&&o.length>0&&e&&e.length!==o.length?J(o):o&&o.length==0&&!K.value&&I())},{immediate:!0});const z=o=>{var e;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((e=n.value.tokensObj[o==null?void 0:o.address])==null?void 0:e.logo_url)||(c.value.theme==="default"?q("/image/coins/unknown.png"):q("/image/coins/sui-unknown.png"))},v=L(null),f=a(()=>v.value&&v.value.firstToken?v.value.firstToken:null),g=a(()=>v.value&&v.value.lastToken?v.value.lastToken:null),H=a(()=>{let o=[];o=i.value;const e=o.filter((t,u)=>f.value&&g.value?t.coinA.symbol==f.value.symbol&&t.coinB.symbol==g.value.symbol||t.coinA.symbol==g.value.symbol&&t.coinB.symbol==f.value.symbol:f.value?t.coinA.symbol.toLowerCase().includes(f.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(f.value.symbol.toLowerCase()):g.value?t.coinA.symbol.toLowerCase().includes(g.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(g.value.symbol.toLowerCase()):o);return n.value.myPositionsLoading||h.setPositiomAmount(e.length),e});return so(()=>{h.setPositiomAmount("--")}),{showList:H,childTokenSelectRef:v,firstToken:f,lastToken:g,getCoinIcon:z,t:w,pools:n,store:c,wallet:b,list:i,clickRefresh:F,refresh:s,current:R,router:G,searchKey:E}}});const Lo={class:"your-liquidity-container"},wo={key:0,class:"upgrade-loading"},So={key:1,class:"position-list"},Ao={key:2,class:"no-data"},Po={key:0,src:_o,alt:""},To={key:1,src:ho,alt:""},Bo={key:3,class:"no-data"},Co={key:0,src:yo,alt:""},No={key:1,src:bo,alt:""};function Ro(s,w,R,G,$,E){const h=Q,c=X,S=io;return r(),l("div",Lo,[s.pools.myPositionsLoading&&s.wallet.connected?(r(),l("div",wo,[U(h,{loading:s.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):C("",!0),s.showList&&s.showList.length>0&&s.wallet.connected&&!s.pools.myPositionsLoading?(r(),l("div",So,[(r(!0),l(no,null,ao(s.showList,(A,i)=>(r(),uo(c,{key:i,"p-item":A},null,8,["p-item"]))),128))])):C("",!0),s.showList&&s.showList.length<=0&&!s.pools.myPositionsLoading&&s.wallet.connected?(r(),l("div",Ao,[s.store.theme=="default"?(r(),l("img",Po)):(r(),l("img",To)),ro("span",null,V(s.$t("common.noLiquidityPositions")),1)])):C("",!0),s.wallet.connected?C("",!0):(r(),l("div",Bo,[s.store.theme=="default"?(r(),l("img",Co)):(r(),l("img",No)),U(S,{class:"connect-wallet",onClick:w[0]||(w[0]=A=>s.wallet.setIsShowWalletModal(!0))},{default:lo(()=>[co(V(s.$t("button.connectWallet")),1)]),_:1})]))])}const se=to(ko,[["render",Ro],["__scopeId","data-v-934d3e4f"]]);export{se as default};
