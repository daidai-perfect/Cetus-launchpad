import{_ as Q}from"./upgrade-loading.05f7d395.js";import{_ as X}from"./upgrade-position-item.bf6151dd.js";import{a as Y,r as y,z as Z,b as M,L as x,m as n,q as oo,t as eo,A as C,V as so,e as to,o as r,f as i,i as O,G as N,F as ao,E as no,h as ro,x as U,w as io,B as lo,c as uo,j as co}from"./entry.5e8d3f25.js";import{u as po,a as mo}from"./index.cdb0d33c.js";import{u as fo}from"./notifi.ec7a23df.js";import{u as vo,c as go}from"./index.09a244f6.js";import{i as V}from"./import-icon.de3e6c66.js";import{_ as _o}from"./img-no-Positions_2x.b84b1fce.js";import{_ as ho}from"./img-no-Positions_2x.f6550a11.js";import{_ as ko}from"./img-connect-wallet_2x.9ce4081b.js";import{_ as Lo}from"./img-connect-wallet_2x.3c708865.js";/* empty css              */import"./index.5d7d5c35.js";import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./status-block.3eeb1c7d.js";/* empty css              */import"./common.fc02fb4f.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";import"./farms-valid-range.fb03e137.js";import"./farms.f32893f0.js";import"./icon_farms_2x.0479b61f.js";import"./icon_rewards_2x.9f49cdf0.js";import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";import"./farms.088879aa.js";import"./useWhale.345946f7.js";const wo=Y({setup(){const s=y(!1),{t:S}=Z(),R=y(["position"]),G=M(),E=x(),I=y(""),k=po(),c=n(()=>k),b=n(()=>{const o=E.query.poolAddress,e=a.value.poolConfigObj[o];return console.log(e,"infoinfoinfo"),e}),A=n(()=>c.value.chainName?go[c.value.chainName]:{});let l=y([]);const _=mo(),a=n(()=>_),q=vo(),L=n(()=>q),D=()=>{s.value=!0,l.value=[],L.value.address&&_.getMyPositons(L.value.address,a.value.poolsObj,c.value.chainName),setTimeout(()=>{s.value=!1},1e3)};oo(()=>{l.value=[],_.setMyPositionsLoading(!0)}),eo(()=>{L.value.connected||(l.value=[])});const F=()=>{s.value=!0;let o=[];a.value.poolPositions.forEach(e=>{var h,T,B,j;let t,u;const p=e.amountA*((h=a.value.RATES[e.token_a.address])==null?void 0:h.price),m=e.amountB*((T=a.value.RATES[e.token_b.address])==null?void 0:T.price);(B=a.value.RATES[e.token_a.address])!=null&&B.price&&((j=a.value.RATES[e.token_b.address])!=null&&j.price)?(t=p+m,u=p+m):(t=" --",u=0);let P=e.positionSource=="farming";o.push({...e,amountUSD:t,amountUSDOrigin:u,tokenARates:p,tokenBRates:m,isStableFarming:P})}),l.value=o,console.log(l.value,"list.value========>")};C(()=>[a.value.poolPositions,a.value.RATES,b.value],([o,e,t])=>{o&&e&&t&&(console.log("0605==>updateLpList9099999"),F())},{immediate:!0}),C(()=>[L.value.address,b.value,c.value.chainName],([o,e,t])=>{o||_.setPoolPositions([]),o&&e&&t&&_.getMyPositonsByPool(o,e,t)},{immediate:!0,deep:!0});const w=fo(),d=n(()=>w),$=n(()=>_),J=async o=>{await w.getSourceGroups();const e=d.value.sourceGroups&&d.value.sourceGroups.length>0&&d.value.sourceGroups[0]&&d.value.sourceGroups[0].sources||[];for(let t=0;t<e.length;t++){const{pool_address:u,position_index:p}=JSON.parse(e[t].blockchainAddress);let m=!1,P;for(let h=0;h<o.length;h++){const{poolAddress:T,index:B}=o[h];u==T&&Number(B)==Number(p)&&(m=!0),P={pool_address:u,position_index:p}}m||await w.subscribePosition(P,"",!1,!1)}},z=async()=>{await w.getSourceGroups();const o=d.value.sourceGroups&&d.value.sourceGroups.length>0&&d.value.sourceGroups[0]&&d.value.sourceGroups[0].sources||[];for(let e=0;e<o.length;e++){const{pool_address:t,position_index:u}=JSON.parse(o[e].blockchainAddress),{name:p}=o[e],m={pool_address:t,position_index:u};await w.subscribePosition(m,p,!1,!1)}},K=n(()=>$.value.myPositionsLoading);C(()=>$.value.poolPositions,(o,e)=>{A.value.hasNotifi&&(o&&o.length>0&&e&&e.length!==o.length?J(o):o&&o.length==0&&!K.value&&z())},{immediate:!0});const W=o=>{var e;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((e=a.value.tokensObj[o==null?void 0:o.address])==null?void 0:e.logo_url)||(c.value.theme==="default"?V("/image/coins/unknown.png"):V("/image/coins/sui-unknown.png"))},f=y(null),v=n(()=>f.value&&f.value.firstToken?f.value.firstToken:null),g=n(()=>f.value&&f.value.lastToken?f.value.lastToken:null),H=n(()=>{let o=[];o=l.value;const e=o.filter((t,u)=>v.value&&g.value?t.poolInfo.coinA.address==v.value.address&&t.poolInfo.coinB.address==g.value.address||t.poolInfo.coinA.address==g.value.address&&t.poolInfo.coinB.address==v.value.address:v.value?t.poolInfo.coinA.address.toLowerCase()==v.value.address.toLowerCase()||t.poolInfo.coinB.address.toLowerCase()==v.value.address.toLowerCase():g.value?t.poolInfo.coinA.address.toLowerCase()==g.value.address.toLowerCase()||t.poolInfo.coinB.address.toLowerCase()==g.value.address.toLowerCase():o);return a.value.myPositionsLoading||k.setPositiomAmount(e.length),e});return so(()=>{k.setPositiomAmount("--")}),{showList:H,childTokenSelectRef:f,firstToken:v,lastToken:g,getCoinIcon:W,t:S,pools:a,store:c,wallet:L,list:l,clickRefresh:D,refresh:s,current:R,router:G,searchKey:I}}});const yo={class:"your-liquidity-container"},So={key:0,class:"upgrade-loading"},bo={key:1,class:"position-list"},Ao={key:2,class:"no-data"},Po={key:0,src:_o,alt:""},To={key:1,src:ho,alt:""},Bo={key:3,class:"no-data"},No={key:0,src:ko,alt:""},Co={key:1,src:Lo,alt:""};function Ro(s,S,R,G,E,I){const k=Q,c=X,b=lo;return r(),i("div",yo,[s.pools.myPositionsLoading&&s.wallet.connected?(r(),i("div",So,[O(k,{loading:s.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):N("",!0),s.showList&&s.showList.length>0&&s.wallet.connected&&!s.pools.myPositionsLoading?(r(),i("div",bo,[(r(!0),i(ao,null,no(s.showList,(A,l)=>(r(),uo(c,{key:l,"p-item":A},null,8,["p-item"]))),128))])):N("",!0),s.showList&&s.showList.length<=0&&!s.pools.myPositionsLoading&&s.wallet.connected?(r(),i("div",Ao,[s.store.theme=="default"?(r(),i("img",Po)):(r(),i("img",To)),ro("span",null,U(s.$t("common.noLiquidityPositions")),1)])):N("",!0),s.wallet.connected?N("",!0):(r(),i("div",Bo,[s.store.theme=="default"?(r(),i("img",No)):(r(),i("img",Co)),O(b,{class:"connect-wallet",onClick:S[0]||(S[0]=A=>s.wallet.setIsShowWalletModal(!0))},{default:io(()=>[co(U(s.$t("button.connectWallet")),1)]),_:1})]))])}const ne=to(wo,[["render",Ro],["__scopeId","data-v-42f4f8f3"]]);export{ne as default};
