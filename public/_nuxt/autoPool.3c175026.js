import{a6 as To,l as xo,R as Bo,a7 as vo}from"./entry.3c0b0ca7.js";import{c as g,a as ho}from"./sha256.39d1b2b9.js";import{P as Lo,I as Co,Q as Po,b as F,R as H,T as wo,C as go,V as J,q as bo,s as L,u as Do,e as qo,a as yo,f as fo,p as ro}from"./pool.20ff0648.js";import{D as t}from"./decimal.0bdeb344.js";function Ao(e){const m={launchpad:g[e||"Sui"].launchpad,ido:g[e||"Sui"].ido,xcetus:g[e||"Sui"].xcetus,xcetus_dividends:g[e||"Sui"].xcetus_dividends,cetus_faucet:g[e||"Sui"].cetus_faucet,xtoken:g[e||"Sui"].xtoken,xtoken_dividends:g[e||"Sui"].xtoken_dividends,token_faucet:g[e||"Sui"].token_faucet,booster:g[e||"Sui"].booster,maker_bonus:g[e||"Sui"].maker_bonus,liquidity_stratefy:g[e||"Sui"].liquidity_stratefy,vaults:g[e||"Sui"].vaults},_={fullRpcUrl:localStorage.getItem(`${e}-currentRpclocal2`)||g[e||"Sui"].fullRpcUrl,simulationAccount:g[e||"Sui"].simulationAccount,cetus_config:g[e||"Sui"].cetus_config,clmm_pool:g[e||"Sui"].clmm_pool,integrate:g[e||"Sui"].integrate,deepbook:g[e||"Sui"].deepbook,deepbook_endpoint_v2:g[e||"Sui"].deepbook_endpoint_v2,aggregatorUrl:g[e||"Sui"].aggregatorUrl},a=new Lo(_),n=To(new Co(m,a)),c=ho(),N=xo(()=>c);Bo(()=>{N.value.address&&(a.senderAddress=N.value.address)});const U=async()=>{console.log(n,"sdk###");const o=await n.Vaults.getVaultList();return o&&o.data||[]},r=async o=>{const u=await n.Vaults.getVault(o);return console.log(u,"vault##"),{...u,quota_based_type:Po(u.quota_based_type).full_address}},v=async o=>{if(console.log(o,"###coinType"),a.senderAddress){const u=await n.ClmmSDK.fullClient.getBalance({owner:a.senderAddress,coinType:o});return u&&u.totalBalance}else return 0},i=o=>({transactionBlock:o,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getAutoPools:U,getLpBalance:v,getVault:async o=>{const u=await n.Vaults.getVault(o);return console.log(u,"vault##292"),u},deposit:async o=>{const{lowerTick:u,upperTick:d,slippage:S,rewarder_coin_types:B,isOnlyA:f,isOnlyB:T,currentTickIndex:b,decimal_b:O}=o;console.log(o,"params###");let p=o.fix_amount_a,y,x,P,l=b;if(f||T){let s;try{s=await n.Vaults.calculateDepositSwapAmount({lowerTick:u,upperTick:d,curSqrtPrice:o.curSqrtPrice,fix_amount_a:o.fix_amount_a,input_amount:o.coinAmount,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,clmm_pool:o.clmm_pool,use_route:!0,priceSplitPoint:S},!0)}catch{s=await n.Vaults.calculateDepositSwapAmount({lowerTick:u,upperTick:d,curSqrtPrice:o.curSqrtPrice,fix_amount_a:o.fix_amount_a,input_amount:o.coinAmount,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,clmm_pool:o.clmm_pool,use_route:!1,priceSplitPoint:S},!0)}console.log(s,"swapResut##211"),s?(x=new F(s.afterSqrtPrice),y=s.fixAmountA===p?new F(H(o.coinAmount).sub(s.swapInAmount).toString()):new F(s.swapOutAmount),P={swap_amount:s.swapInAmount,a2b:p,input_amount:o.coinAmount,route_obj:s.routeObj},p=s.fixAmountA,l=wo.sqrtPriceX64ToTickIndex(new F(s.afterSqrtPrice))):(x=new F(o.curSqrtPrice),y=new F(o.coinAmount))}else x=o.curSqrtPrice,y=new F(o.coinAmount);let q,A,j;console.log(u,b,d,"####138"),l>=u&&l<=d?(q=go.estLiquidityAndcoinAmountFromOneAmounts(u,d,y,p,!0,S,x),A=p?y.toString():q.tokenMaxA.toString(),j=p?q.tokenMaxB.toString():y.toString()):l<u?(A=y.toNumber(),j=0):l>d&&(A=0,j=y.toNumber()),console.log({vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:A,amount_b:j,fix_amount_a:p,slippage:S,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,rewarder_coin_types:[],swapParams:P},"params171");const h=await n.Vaults.deposit({lowerTick:u,upperTick:d,vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:A,amount_b:j,fix_amount_a:p,slippage:S,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,swapParams:P});return i(h)},remove:async o=>{const{lowerTick:u,upperTick:d,coinTypeA:S,coinTypeB:B,receiveAmount:f,clmm_pool:T,lowerSqrtPrice:b,upperSqrtPrice:O,fix_amount_a:p,curSqrtPrice:y,slippage:x,rewarder_coin_types:P,id:l,liquidity:q,swapParams:A,isOnlyA:j,isOnlyB:h,sliderVal:s,positionInfo:C,maxLiquidity:$}=o;console.log(s,"sliderVal##");const V=await r(l),G=await a.Pool.getPool(V.pool_id);let I,R,Z,M,E,X,W;const Y=J.get_share_liquidity_by_amount(V,s==100?C.balance:o.lpTokenAmount);if(console.log(f,"##receiveAmount"),j||h){try{I=await n.Vaults.calculateRemoveSwapAmount({lowerTick:u,upperTick:d,curSqrtPrice:G.current_sqrt_price,fix_amount_a:p,receive_amount:f,coinTypeA:S,coinTypeB:B,clmm_pool:T,use_route:!0,priceSplitPoint:x,removeLiquidity:s==100?Y:"",maxLiquidity:$})}catch(Q){console.log(Q,"e251"),I=await n.Vaults.calculateRemoveSwapAmount({lowerTick:u,upperTick:d,curSqrtPrice:G.current_sqrt_price,fix_amount_a:p,receive_amount:f,coinTypeA:S,coinTypeB:B,clmm_pool:T,use_route:!1,priceSplitPoint:x,removeLiquidity:s==100?Y:"",maxLiquidity:$})}if(console.log(I,"swapResut###"),I){const Q=J.get_share_liquidity_by_amount(V,C.balance);R=go.getCoinAmountFromLiquidity(new F(s==100?Q:I.liquidity),new F(G.current_sqrt_price),b,O,!1),Z=J.get_protocol_fee_amount(V,R.coinA.toString()),M=J.get_protocol_fee_amount(V,R.coinB.toString()),E=s==100?C.balance:J.get_lp_amount_by_liquidity(V,I.liquidity),X=H(R.coinA.toString()).mul(H(1-o.slippage)),W=H(R.coinB.toString()).mul(H(1-o.slippage)),console.log(X.toString(),"##minAmountA"),console.log(W.toString(),"##minAmountA")}}else console.log(Y,"#removeLiquidity"),R=go.getCoinAmountFromLiquidity(new F(Y),y,b,O,!1),R=go.getCoinAmountFromLiquidity(new F(Y),y,b,O,!1),console.log(R,"#coinAmountscoinAmounts"),E=o.lpTokenAmount,X=H(R.coinA.toString()).mul(H(1-o.slippage)),W=H(R.coinB.toString()).mul(H(1-o.slippage)),console.log(Z,M,"##protocol_fee_amount_b"),console.log(X.toString(),"##minAmountA"),console.log(W.toString(),"##minAmountA"),console.log(o,"params###246");console.log(E,"lpTokenAmount remove");const D={vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,lp_token_amount:E,min_amount_a:bo(X,0)||"",min_amount_b:bo(W,0)||"",rewarder_coin_types:[],slippage:o.slippage};console.log(D,"##removeParams"),(j||h)&&(D.swapParams={a2b:!p,swap_amount:I==null?void 0:I.swapInAmount,route_obj:I.routeObj});const eo=await n.Vaults.remove(D);return i(eo)},getAutoPool:r,calculateDepositSwapAmount:async o=>{const{lowerTick:u,upperTick:d,curSqrtPrice:S,fix_amount_a:B,input_amount:f,coinTypeA:T,coinTypeB:b,clmm_pool:O,slippage:p,decimals:y,request_id:x}=o;console.log(o,"params###");let P;try{P=await n.Vaults.calculateDepositSwapAmount({lowerTick:u,upperTick:d,curSqrtPrice:S,fix_amount_a:B,input_amount:f,coinTypeA:T,coinTypeB:b,clmm_pool:O,use_route:!0,priceSplitPoint:p,request_id:x},!0)}catch(l){String(l)=="Error: route unavailable"&&(console.log(l,"e432"),P=await n.Vaults.calculateDepositSwapAmount({lowerTick:u,upperTick:d,curSqrtPrice:S,fix_amount_a:B,input_amount:f,coinTypeA:T,coinTypeB:b,clmm_pool:O,use_route:!1,priceSplitPoint:p,request_id:x},!0))}if(console.log(P,"##swapResut"),P){const l=new t(P.swapOutAmount);return{...P,swapOutAmountLimit:L(l.sub(l.mul(p)).toNumber(),y)}}return P},calculateRemoveSwapAmount:async o=>{const{lowerTick:u,upperTick:d,curSqrtPrice:S,fix_amount_a:B,receiveAmount:f,coinTypeA:T,coinTypeB:b,clmm_pool:O,slippage:p,decimals:y,liquidity:x,maxLiquidity:P,request_id:l}=o;console.log(o,"params###");let q;try{q=await n.Vaults.calculateRemoveSwapAmount({lowerTick:u,upperTick:d,curSqrtPrice:S,fix_amount_a:B,receive_amount:f,coinTypeA:T,coinTypeB:b,clmm_pool:O,use_route:!0,priceSplitPoint:p,removeLiquidity:x,maxLiquidity:P,request_id:l})}catch(A){String(A)=="Error: route unavailable"&&(console.log(A,"e432"),q=await n.Vaults.calculateRemoveSwapAmount({lowerTick:u,upperTick:d,curSqrtPrice:S,fix_amount_a:B,receive_amount:f,coinTypeA:T,coinTypeB:b,clmm_pool:O,use_route:!1,priceSplitPoint:p,removeLiquidity:x,maxLiquidity:P,request_id:l}))}if(console.log(q,"###swapResut calculateRemoveSwapAmount"),q){const A=new t(q.swapOutAmount);return console.log(A.toNumber(),"swapOutAmount.toNumber()"),{...q,swapOutAmountLimit:L(A.sub(A.mul(p)).toNumber(),y)}}return q}}}const Ro=vo("autoPool",{state:()=>({autoPoolList:[],autoPoolObj:{},positionInfoObj:{},positionInfoList:[],positionUSDObj:{},apyObj:{},currentAutoPoolStatus:"STATUS_RUNNING",slippage:localStorage.getItem("cetus-auto-slippage")||"0.1",autoPoolLoading:!1}),getters:{getPoolStore(){return Do()}},actions:{async getAutoPoolList(){const m=await Ao("Sui").getAutoPools();console.log(m,"list###");const _=this.getPoolStore,a=g.Sui.vaultFilter,{data:n}=await fetch(`${g.Sui.api}/v2/sui/auto_pools`).then(r=>r.json());console.log(n,"data##37");const c=(n==null?void 0:n.pools)||[],N=m.filter(r=>c.some(v=>v.object_id===r.id));console.log(N,"##openPoolList");const U=(a?N:m).map(r=>({..._.poolConfigObj[r.pool_id],id:r.id,lp_token_type:r.lp_token_type,autoPoolPositionInfo:r.positins[0],is_pause:r.is_pause,total_supply:r.total_supply,liquidity:r.liquidity,protocol_fee_rate:r.protocol_fee_rate,max_quota:r.max_quota,quota_based_type:Po(r.quota_based_type).full_address}));this.autoPoolList=U,this.autoPoolObj=Object.fromEntries(U.map((r,v)=>[r.address,r])),this.getMyAutoPoolPosition(),console.log(U,"##autoPoolList")},async getMyAutoPoolPosition(){var c,N,U,r;const e=Ao("Sui"),m=this.autoPoolList,_=qo("Sui"),a=[],{RATES:n}=this.getPoolStore;for(let v=0;v<m.length;v++){const i=m[v];console.log(i,"poolINfo###");const k=await _.getPool(i.address),w=await e.getLpBalance(m[v].lp_token_type);console.log(w,"balance##");const K=(await _.getTokenListByCoinType([m[v].lp_token_type]))[0];console.log(K,"lpInfo##");const to=((c=n[i.coinA.address])==null?void 0:c.price)||"",z=((N=n[i.coinB.address])==null?void 0:N.price)||"",o=i.autoPoolPositionInfo.tick_lower_index,u=i.autoPoolPositionInfo.tick_upper_index,d=Number(w)>0?J.get_share_liquidity_by_amount({liquidity:i==null?void 0:i.liquidity,total_supply:i==null?void 0:i.total_supply},w):0,S={tick_lower_index:o,tick_upper_index:u,current_sqrt_price:k==null?void 0:k.current_sqrt_price,liquidity:d};console.log(i,"poolInfo##94");const B=await _.getCoinAmountFromLiquidity({pool:{...i,current_sqrt_price:k==null?void 0:k.current_sqrt_price},position:S,roundUp:!1});console.log(B,"##amountInfo");const f=B.coinaAmount,T=B.coinbAmount,b=f,O=T,p=i.coinA.decimals,y=i.coinB.decimals,x=_.TickMath.tickIndexToPrice(Number(o),p,y).toString(),P=_.TickMath.tickIndexToPrice(Number(u),p,y).toString(),l=new t(to).mul(new t(f)).toNumber(),q=new t(z).mul(new t(T)).toNumber(),A=l>0&&l<.01?"<$0.01":`$${yo(L(l,2))}`,j=q>0&&q<.01?"<$0.01":`$${yo(L(q,2))}`,h=wo.sqrtPriceX64ToPrice(k.current_sqrt_price,p,y),s=await _.getCoinAmountFromLiquidity({pool:{...i,tick_lower_index:o,tick_upper_index:u,current_sqrt_price:k==null?void 0:k.current_sqrt_price},position:{...S,liquidity:i.liquidity},roundUp:!1}),C=new t(s.coinaAmount).toNumber(),$=new t(s.coinbAmount).toNumber();console.log(C,$,h.toString(),"###116");const V=L(new t(C).mul(new t(to)).toNumber(),2),G=L(new t($).mul(new t(z)).toNumber(),2);console.log(k,"newPool##"),console.log(C,$,to,z,Number(V)+Number(G),"###poolCoinBNum");const{ratioA:I,ratioB:R}=J.calculateDepositRatio(o,u,new F.BN(k==null?void 0:k.current_sqrt_price));console.log(I,R.toString(),"###139");const Z=I.mul(100).toNumber().toFixed(0),M=100-Number(Z);console.log(C,$,Z,M,"###147");let E=0;Number(w)>0&&(E=new t(w).div(Math.pow(10,K.decimals)));const X=new t(l).add(new t(q)).toNumber(),W=to&&z?X>0&&X<.01?"<0.01":L(new t(l).add(new t(q)).toString(),2):"--",Y=i.total_supply;let D=0;E>0&&Y>0&&(D=new t(E).mul(Math.pow(10,K.decimals)).div(new t(Y)).mul(100).toNumber()),console.log(D,"##myShare");const eo=new t(1).div(Math.pow(10,i.decimals)).toNumber();let Q=0;if(D>1)Q=L(D,2);else if(D>0&&D<eo)Q=`<${eo}`;else if(D==0)Q=0;else{const lo=fo(D),_o=lo==-1?2:lo+2;Q=L(D,_o)}console.log(w,E.toString(),"###balance");const oo=(await _.getTokenListByCoinType([i.quota_based_type]))[0],ao=ro(i.max_quota,oo.decimals);console.log(i.quota_based_type,oo,ao,"##quoteCoinInfo");const uo=oo.address==i.coin_b_address,so=uo?new t(s.coinaAmount).mul(i.price).add(s.coinbAmount):new t(s.coinaAmount).mul(1/i.price).add(s.coinbAmount),po=((U=n[oo.address])==null?void 0:U.price)||"",io=so.mul(new t(po)).toNumber();console.log(uo,io,"#isQuotaCoin");const no=ao,mo=uo?new t(s.coinaAmount).mul(i.price).add(s.coinbAmount):new t(s.coinaAmount).mul(1/i.price).add(s.coinbAmount),co=new t(no).sub(mo).mul(z).toNumber();console.log(co,"remainingTokenUSD##"),console.log(so.toNumber(),"#poolTokenNum"),this.positionInfoObj[i.id]={tick_lower_index:o,tick_upper_index:u,current_sqrt_price:k.current_sqrt_price,myLiquidity:ro(w,K.decimals),amountA:b,amountB:O,...i,lpInfo:K,myAmountAUSD:A,myAmountBUSD:j,myLiquidityUSD:W,myShare:Q,minPrice:x,maxPrice:P,poolCoinARatio:Z,poolCoinBRatio:M,poolCoinANum:C,poolCoinBNum:$,poolCoinAUSD:V,poolCoinBUSD:G,quoteUSD:no,poolUSD:io,balance:w,quoteCoinInfo:oo,remainingTokenUSD:co,currentDeposit:io,positionLiquidity:d},a.push({tick_lower_index:o,tick_upper_index:u,current_sqrt_price:(r=i==null?void 0:i.object)==null?void 0:r.current_sqrt_price,myLiquidity:ro(w,K.decimals),amountA:b,amountB:O,...i,lpInfo:K,myAmountAUSD:A,myAmountBUSD:j,myLiquidityUSD:W,myShare:Q,minPrice:x,maxPrice:P,poolCoinARatio:Z,poolCoinBRatio:M,poolCoinANum:C,poolCoinBNum:$,poolCoinAUSD:V,poolCoinBUSD:G,quoteUSD:no,poolUSD:io,balance:w})}this.positionInfoList=a,console.log(this.positionInfoObj,"this.positionInfoObj###"),console.log(this.positionInfoList,"###this.positionInfoList")},async updatePositionItem(e){var so,po,io,no,mo,co,lo,_o;const m=Ao("Sui"),_=qo("Sui"),a=await m.getAutoPool(e),n=await _.getPool(a.pool_id);console.log("newPoolInfo:",a),console.log("newPool:",n),console.log("this.positionInfoObj[id]:",this.positionInfoObj[e]);const c={...this.positionInfoObj[e],autoPoolPositionInfo:a.positins[0],...n},N=await m.getLpBalance(c.lp_token_type),U=(await _.getTokenListByCoinType([c.lp_token_type]))[0];console.log(N,"###balance updatePositionItem");const r=c.autoPoolPositionInfo.tick_lower_index,v=c.autoPoolPositionInfo.tick_upper_index,i=J.get_share_liquidity_by_amount({liquidity:a==null?void 0:a.liquidity,total_supply:a==null?void 0:a.total_supply},N),k={tick_lower_index:r,tick_upper_index:v,current_sqrt_price:n.current_sqrt_price,liquidity:i};console.log(c,"poolInfo##301");const w=_.getCoinAmountFromLiquidity({pool:{current_sqrt_price:n.current_sqrt_price,...c},position:k,roundUp:!1});console.log(w,"amountInfo###");const K=w.coinaAmount,to=w.coinbAmount,{RATES:z}=this.getPoolStore,o=a.total_supply,u=wo.sqrtPriceX64ToPrice(n.current_sqrt_price,(so=c==null?void 0:c.coinA)==null?void 0:so.decimals,(po=c==null?void 0:c.coinB)==null?void 0:po.decimals),d=2,S=2,B=((no=z[(io=c==null?void 0:c.coinA)==null?void 0:io.address])==null?void 0:no.price)||0,f=((co=z[(mo=c==null?void 0:c.coinB)==null?void 0:mo.address])==null?void 0:co.price)||0,T=new t(B).mul(new t(w==null?void 0:w.coinaAmount)).toNumber(),b=new t(f).mul(new t(w==null?void 0:w.coinbAmount)).toNumber(),O=T>0&&T<.01?"<$0.01":`$${yo(L(T,2))}`,p=b>0&&b<.01?"<$0.01":`$${yo(L(b,2))}`;let y=new t(0);Number(N)>0&&(y=new t(N).div(Math.pow(10,U==null?void 0:U.decimals)));const x=new t(T).add(new t(b)).toNumber(),P=B&&f?x>0&&x<.01?"<0.01":L(new t(T).add(new t(b)).toString(),2):"--",l=new t(y).mul(Math.pow(10,(lo=c.lpInfo)==null?void 0:lo.decimals)).div(new t(o)).mul(100).toNumber();console.log(l,"##myShare");const q=new t(1).div(Math.pow(10,c.decimals)).toNumber();let A=0;if(l>1)A=L(l,2);else if(l>0&&l<q)A=`<${q}`;else if(l==0)A=0;else{const So=fo(l),ko=So==-1?2:So+2;A=L(l,ko)}const j=wo.sqrtPriceX64ToPrice(n.current_sqrt_price,d,S),h=await _.getCoinAmountFromLiquidity({pool:{...c,tick_lower_index:r,tick_upper_index:v,current_sqrt_price:n==null?void 0:n.current_sqrt_price},position:{...k,liquidity:a.liquidity},roundUp:!1}),s=new t(h.coinaAmount).toNumber(),C=new t(h.coinbAmount).toNumber();console.log(s,C,j.toString(),"###116");const $=L(new t(s).mul(new t(B)).toNumber(),2),V=L(new t(C).mul(new t(f)).toNumber(),2);console.log(n,"newPool##"),console.log(s,C,B,f,Number($)+Number(V),"###poolCoinBNum");const{ratioA:G,ratioB:I}=J.calculateDepositRatio(r,v,new F.BN(n==null?void 0:n.current_sqrt_price));console.log(G,I.toString(),"###139");const R=G.mul(100).toNumber().toFixed(0),Z=100-Number(R),M=(await _.getTokenListByCoinType([a.quota_based_type]))[0],E=ro(a.max_quota,M.decimals);console.log(a.quota_based_type,M,E,"##quoteCoinInfo");const X=M.address==c.coin_b_address,W=X?new t(h.coinaAmount).mul(c.price).add(h.coinbAmount):new t(h.coinaAmount).mul(1/c.price).add(h.coinbAmount),Y=((_o=z[M.address])==null?void 0:_o.price)||"",D=W.mul(new t(Y)).toNumber(),eo=E,Q=X?new t(h.coinaAmount).mul(c.price).add(h.coinbAmount):new t(h.coinaAmount).mul(1/c.price).add(h.coinbAmount),oo=new t(eo).sub(Q).mul(f).toNumber();console.log(oo,"remainingTokenUSD##");const ao=_.TickMath.tickIndexToPrice(Number(r),d,S).toString(),uo=_.TickMath.tickIndexToPrice(Number(v),d,S).toString();this.positionInfoObj[e]={...c,tick_lower_index:r,tick_upper_index:v,current_sqrt_price:n.current_sqrt_price,myLiquidity:ro(N,U==null?void 0:U.decimals),amountA:K,amountB:to,myShare:A,myAmountAUSD:O,myAmountBUSD:p,myLiquidityUSD:P,poolCoinARatio:R,poolCoinBRatio:Z,poolCoinANum:s,poolCoinBNum:C,poolCoinAUSD:$,poolCoinBUSD:V,quoteUSD:eo,balance:N,price:u,quoteCoinInfo:M,remainingTokenUSD:oo,currentDeposit:D,poolUSD:D,positionLiquidity:i,liquidity:a==null?void 0:a.liquidity,minPrice:ao,maxPrice:uo},this.autoPoolLoading=!1,console.log(this.positionInfoObj[e],"###this.positionInfoObj[id]")},async getAutoPoolAPY(){try{const{data:e}=await fetch(`${g.Sui.api}/v2/sui/auto_pools`).then(m=>m.json());e&&e.pools&&e.pools.length>0&&(this.apyObj=Object.fromEntries(e.pools.map((m,_)=>[m.object_id,{...m,apr:m.apr.replace("%","")>0&&m.apr.replace("%","")<.01?"<0.01%":L(m.apr.replace("%",""),2)+"%",resultApr:m.apr.replace("%","")}])),console.log(this.apyObj,"data##"))}catch{this.apyObj={}}},async getVault(e){const m=Ao("Sui");this.autoPoolLoading=!0;const{status:_}=await m.getVault(e);this.currentAutoPoolStatus=_,this.updatePositionItem(e),console.log(_,"status##")},setSlippage(e){console.log(e,"slippage##"),this.slippage=e,localStorage.setItem("cetus-auto-slippage",e)}}});export{Ao as a,Ro as u};
