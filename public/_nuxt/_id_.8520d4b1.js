import{_ as ae}from"./new-position-title.1a363ca6.js";import{_ as ue}from"./token-warning.11ff7cab.js";import{_ as re}from"./status-block.8157eea8.js";import{_ as Go}from"./auto-pool-apy-tips.18fe3d85.js";import{u as jo,g as de,a as D,d as Do,c as ao,s as to,b as Z,p as Vo,e as Zo,T as bo,f as ce,h as me,V as Ho,C as Yo}from"./pool.ec7155de.js";import{u as Ro,a as No}from"./sha256.f7311d31.js";import{i as ko}from"./import-icon.de3e6c66.js";import{u as Lo,a as Jo}from"./autoPool.14882d02.js";import{a as Co,l as c,r as q,m as So,q as x,e as wo,s as Uo,o as m,f as T,h as e,t as vo,i as Q,v as f,j as To,x as po,u as E,p as Bo,k as Oo,y as zo,z as Ko,A as Xo,c as z,w as $o,B as Qo,C as ve,L as pe,I as fe,S as xo,D as _e,b as oe,F as be,E as ge,G as ye}from"./entry.99d20ac2.js";import{_ as he}from"./assets-card.dd5e1791.js";import{_ as Ie}from"./coin-lock.95407b72.js";import{_ as ee,a as ne}from"./auto-pool-remove-modal.3d5024a4.js";import{D as p}from"./decimal.0bdeb344.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./back.b1b137fd.js";import"./swap-setting.d31df86e.js";/* empty css              */import"./icon-error_2x.3cd9b14e.js";/* empty css              */import"./img-lock_2x.a28135f4.js";import"./img-lock_2x.d387d12e.js";const $e=Co({components:{AutoPoolApyTips:Go},setup(){const o=Ro(),n=c(()=>o),B=jo(),N=c(()=>B),O=c(()=>n.value.theme),I=i=>{var t;return(i==null?void 0:i.logoURI)||(i==null?void 0:i.logo_url)||((t=N.value.tokensObj[i==null?void 0:i.address])==null?void 0:t.logo_url)||(O.value==="default"?ko("/image/coins/unknown.png"):ko("/image/coins/sui-unknown.png"))},y=q(!0),_=Lo(),v=c(()=>_),C=So(),l=q();x(()=>[v.value.positionInfoObj,C.params.id],([i,t])=>{i&&!ao(i)&&t&&(l.value=i[t],console.log(l.value,"##positionInfo.value"))},{immediate:!0,deep:!0});const s=c(()=>{var i;return(i=l.value)==null?void 0:i.needReverse}),$=c(()=>{var i,t;return v.value.apyObj&&((t=v.value.apyObj[(i=l.value)==null?void 0:i.id])==null?void 0:t.tvl)||"--"}),u=c(()=>{var i,t;return v.value.apyObj&&((t=v.value.apyObj[(i=l.value)==null?void 0:i.id])==null?void 0:t.apr)||"--"});return{positionInfo:l,tvl:$,store:n,indexStore:o,needReverse:s,getCoinIcon:I,getExplorerUrl:de,addCommom:D,decimalUi:Do,direct:y,apy:u}}});const Ao=o=>(Bo("data-v-0002f507"),o=o(),Oo(),o),ke={class:"auto-position-info"},Ce={class:"pool-info"},Se={class:"left"},we={class:"coin-a"},Ae={alt:""},Pe={class:"coin-b"},qe={alt:""},Te={class:"position-name"},Re={key:0,class:"pool-fee"},Ne=Ao(()=>e("span",null,"Fee tier",-1)),Le={class:"right"},Be={class:"price-info"},Oe={class:"current-price"},Me=Ao(()=>e("span",null,"Current Price",-1)),De={class:"coin-rate"},je=Ao(()=>e("div",null,[e("svg",{class:"icon icon-up","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Ue=Ao(()=>e("div",null,[e("svg",{class:"icon icon-down","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Fe=[je,Ue],Ee={key:0},We={key:1},Xe={class:"apy-and-tvl"},ze={class:"apy"},Ve=Ao(()=>e("div",{class:"apy-title"},"APY",-1)),He={class:"apy-text"},Ye={class:"tvl"},Ge=Ao(()=>e("div",{class:"tvl-title"},"TVL",-1)),Ze={class:"tvl-text"};function Je(o,n,B,N,O,I){var l,s,$,u,i,t,a,h,w,g,Y,L,A,H,W,X,R,no,oo,J,G,K,so,io,Po,uo,lo,ro,yo,fo,co,d,M;const y=ue,_=re,v=Go,C=Uo("image");return m(),T("div",ke,[e("div",Ce,[e("div",Se,[e("div",we,[vo(e("img",Ae,null,512),[[C,o.needReverse?o.getCoinIcon((s=o.positionInfo)==null?void 0:s.token_b):o.getCoinIcon((l=o.positionInfo)==null?void 0:l.token_a)]]),Q(y,{address:o.needReverse?(t=(i=o.positionInfo)==null?void 0:i.token_b)==null?void 0:t.address:(u=($=o.positionInfo)==null?void 0:$.token_a)==null?void 0:u.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"4px"}},null,8,["address"])]),e("div",Pe,[vo(e("img",qe,null,512),[[C,o.needReverse?o.getCoinIcon((h=o.positionInfo)==null?void 0:h.token_a):o.getCoinIcon((a=o.positionInfo)==null?void 0:a.token_b)]]),Q(y,{address:o.needReverse?(L=(Y=o.positionInfo)==null?void 0:Y.token_a)==null?void 0:L.address:(g=(w=o.positionInfo)==null?void 0:w.token_b)==null?void 0:g.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"4px"}},null,8,["address"])]),e("div",Te,f(o.needReverse?(H=(A=o.positionInfo)==null?void 0:A.token_b)==null?void 0:H.symbol:(X=(W=o.positionInfo)==null?void 0:W.token_a)==null?void 0:X.symbol)+" - "+f(o.needReverse?(no=(R=o.positionInfo)==null?void 0:R.token_a)==null?void 0:no.symbol:(J=(oo=o.positionInfo)==null?void 0:oo.token_b)==null?void 0:J.symbol),1),(G=o.positionInfo)!=null&&G.fee?(m(),T("div",Re,[Ne,To(" "+f(((K=o.positionInfo)==null?void 0:K.fee)*100)+"% ",1)])):po("",!0)]),e("div",Le,[Q(_,{"current-status":(so=o.positionInfo)==null?void 0:so.currentStatus},null,8,["current-status"])])]),e("div",Be,[e("div",Oe,[e("div",null,[Me,e("div",De,[e("div",{onClick:n[0]||(n[0]=mo=>o.direct=!o.direct)},Fe)])]),(o.needReverse?!o.direct:o.direct)?(m(),T("div",Ee,[To(f(("addCommom"in o?o.addCommom:E(D))(("decimalUi"in o?o.decimalUi:E(Do))((io=o.positionInfo)==null?void 0:io.price,6)))+"   ",1),e("span",null,f((uo=(Po=o.positionInfo)==null?void 0:Po.token_b)==null?void 0:uo.symbol)+" per "+f((ro=(lo=o.positionInfo)==null?void 0:lo.token_a)==null?void 0:ro.symbol),1)])):(m(),T("div",We,[To(f(("addCommom"in o?o.addCommom:E(D))(("decimalUi"in o?o.decimalUi:E(Do))(1/((yo=o.positionInfo)==null?void 0:yo.price),6)))+"   ",1),e("span",null,f((co=(fo=o.positionInfo)==null?void 0:fo.token_a)==null?void 0:co.symbol)+" per "+f((M=(d=o.positionInfo)==null?void 0:d.token_b)==null?void 0:M.symbol),1)]))]),e("div",Xe,[e("div",ze,[Ve,e("div",He,[To(f(o.apy)+" ",1),Q(v)])]),e("div",Ye,[Ge,e("div",Ze,"$"+f(("addCommom"in o?o.addCommom:E(D))(o.tvl,2)),1)])])])])}const te=wo($e,[["render",Je],["__scopeId","data-v-0002f507"]]),Ke=Co({setup(){const o=Lo(),n=c(()=>o),B=So(),N=c(()=>(console.log(n.value.positionInfoObj[B.params.id],"autoPool.value.positionInfoObj[route.params.id]###"),n.value.positionInfoObj[B.params.id])),O=c(()=>{var v;return(v=N.value)==null?void 0:v.needReverse}),I=No(),y=c(()=>I);return{positionInfo:N,needReverse:O,addCommom:D,wallet:y,getCoinIcon:v=>(v==null?void 0:v.logoURI)||(v==null?void 0:v.logo_url)||ko("/image/coins/sui-unknown.png")}}});const go=o=>(Bo("data-v-ddd2440b"),o=o(),Oo(),o),Qe={class:"auto-position-liquidity"},xe={class:"my-liquidity"},on={class:"left"},en=go(()=>e("div",null,"My Liquidity",-1)),nn={key:0},tn={key:1},sn={class:"right"},ln=go(()=>e("div",null,"My share",-1)),an={key:0},un={key:1},rn={class:"my-liquidity-info"},dn={class:"lp-info"},cn={class:"lp-bg"},mn={alt:""},vn={key:0,class:"lp-num"},pn={key:1,class:"lp-num"},fn=go(()=>e("div",{class:"assets-pooled-title"}," Pooled Assets ",-1)),_n={class:"assets-pooled"},bn={alt:""},gn={key:0},yn={key:1},hn=go(()=>e("p",null,"--",-1)),In=go(()=>e("p",null,"--",-1)),$n=[hn,In],kn={alt:""},Cn={key:0},Sn={key:1},wn=go(()=>e("p",null,"--",-1)),An=go(()=>e("p",null,"--",-1)),Pn=[wn,An];function qn(o,n,B,N,O,I){var _,v,C,l,s,$,u,i,t,a,h,w,g,Y,L,A,H,W,X,R,no,oo,J,G,K,so,io;const y=Uo("image");return m(),T("div",Qe,[e("div",xe,[e("div",on,[en,(_=o.wallet)!=null&&_.connected?(m(),T("div",nn,"$"+f(("addCommom"in o?o.addCommom:E(D))((v=o.positionInfo)==null?void 0:v.myLiquidityUSD)),1)):(m(),T("div",tn,"--"))]),e("div",sn,[ln,(C=o.wallet)!=null&&C.connected?(m(),T("div",an,f((l=o.positionInfo)==null?void 0:l.myShare)+"%",1)):(m(),T("div",un,"--%"))])]),e("div",rn,[e("div",dn,[e("div",cn,[vo(e("img",mn,null,512),[[y,(($=(s=o.positionInfo)==null?void 0:s.lpInfo)==null?void 0:$.logo_url)||o.getCoinIcon((u=o.positionInfo)==null?void 0:u.lpInfo)]])]),(i=o.wallet)!=null&&i.connected?(m(),T("div",vn,f(("addCommom"in o?o.addCommom:E(D))((t=o.positionInfo)==null?void 0:t.myLiquidity))+" LP",1)):(m(),T("div",pn,"-- LP"))]),fn,e("div",_n,[e("div",null,[vo(e("img",bn,null,512),[[y,o.needReverse?o.getCoinIcon((a=o.positionInfo)==null?void 0:a.token_b):o.getCoinIcon((h=o.positionInfo)==null?void 0:h.token_a)]]),(w=o.wallet)!=null&&w.connected?(m(),T("div",gn,[e("p",null,f((g=o.positionInfo)==null?void 0:g.myAmountAUSD),1),e("p",null,f(("addCommom"in o?o.addCommom:E(D))((Y=o.positionInfo)==null?void 0:Y.amountA))+" "+f(o.needReverse?(A=(L=o.positionInfo)==null?void 0:L.token_b)==null?void 0:A.symbol:(W=(H=o.positionInfo)==null?void 0:H.token_a)==null?void 0:W.symbol),1)])):(m(),T("div",yn,$n))]),e("div",null,[vo(e("img",kn,null,512),[[y,o.needReverse?o.getCoinIcon((X=o.positionInfo)==null?void 0:X.token_a):o.getCoinIcon((R=o.positionInfo)==null?void 0:R.token_b)]]),(no=o.wallet)!=null&&no.connected?(m(),T("div",Cn,[e("p",null,f((oo=o.positionInfo)==null?void 0:oo.myAmountBUSD),1),e("p",null,f(("addCommom"in o?o.addCommom:E(D))((J=o.positionInfo)==null?void 0:J.amountB))+" "+f(o.needReverse?(K=(G=o.positionInfo)==null?void 0:G.token_a)==null?void 0:K.symbol:(io=(so=o.positionInfo)==null?void 0:so.token_b)==null?void 0:io.symbol),1)])):(m(),T("div",Sn,Pn))])])])])}const se=wo(Ke,[["render",qn],["__scopeId","data-v-ddd2440b"]]),Tn=Co({components:{AutoPoolAddModal:ee},setup(){const o=No(),n=q(!1),B=Ro(),N=c(()=>B),O=c(()=>N.value.chainName),I=c(()=>o),y=Lo(),_=c(()=>y),v=jo(),C=c(()=>v),l=q(),s=So();x(()=>[_.value.positionInfoObj,s.params.id],([r,b])=>{r&&!ao(r)&&b&&(l.value=r[b],console.log(l.value,"##positionInfo.value"))},{immediate:!0,deep:!0});const $=c(()=>{var r,b;return console.log((r=l.value)==null?void 0:r.needReverse,"##positionInfo.value?.needReverse"),(b=l.value)==null?void 0:b.needReverse}),u=q(),i=q(),t=q(),a=q(),h=q(!0),w=c(()=>I.value.assets&&u.value&&I.value.assets[u.value.address]?Vo(I.value.assets[u.value.address].balance,u.value.decimals):0),g=c(()=>I.value.assets&&i.value&&I.value.assets[i.value.address]?Vo(I.value.assets[i.value.address].balance,i.value.decimals):0),Y=r=>{r==="fromCoin"?(h.value=!0,t.value=w.value>0?u.value.symbol=="SUI"?new p(Number(w.value)).sub(new p(.05)).lt(new p(0))?"0":new p(Number(w.value)).sub(new p(.05)).toString():String(w.value):""):(h.value=!1,a.value=g.value>0?i.value.symbol=="SUI"?new p(Number(g.value)).sub(new p(.05)).lt(new p(0))?"0":new p(Number(g.value)).sub(new p(.05)).toString():String(g.value):"")},L=r=>{r==="fromCoin"?(h.value=!0,t.value=w.value>0?to(new p(Number(w.value)).div(2).toString(),u.value.decimals).toString():""):(h.value=!1,a.value=g.value>0?to(new p(Number(g.value)).div(2).toString(),i.value.decimals).toString():"")},A=c(()=>O.value?Zo(O.value):{}),H=c(()=>N.value.slippage),W=q("--"),X=q("--"),R=r=>{const b=new p(l.value.autoPoolPositionInfo.liquidity),S=new p(r.toString());if(console.log(b.toString(),S.toString(),"getShareOfPool##"),b.toNumber()>0&&S.toNumber()>0){const k=S.add(b);console.log("totalLiquidity:",S.div(k).mul(100).toString());const U=S.div(k).mul(100).toString();console.log(U,"lp##");const P=ce(U),F=P==-1?2:P+2,eo=to(S.div(k).mul(100).toString(),F);console.log(l.value.decimals,"##positionInfo.value.decimal");const V=new p(1).div(new p(Math.pow(10,l.value.lpInfo.decimals))).toString();console.log(eo,V,"###288"),Number(eo)<Number(V)?W.value=`<${V}`:W.value=eo}else S.toNumber()>0&&b.toNumber()<=0?W.value="100":W.value="--"},no=r=>{const b=new p(r.toString());console.log(r.toString(),"##liquidityAmount.toString()");const S=b.mul(new p(H.value).div(100)),k=new p(Math.pow(10,l.value.lpInfo.decimals));console.log(b.minus(S).div(k).toString(),"##liquidity.minus(minimum).div(decimals).toString()"),X.value=to(b.minus(S).div(k).toString(),l.value.lpInfo.decimals)},oo=q(!1),J=q(!1),G=()=>{if(console.log(l.value,"238##"),!l.value)return;const r=l.value.autoPoolPositionInfo.tick_lower_index,b=l.value.autoPoolPositionInfo.tick_upper_index;console.log(l.value,"###467");const S=bo.sqrtPriceX64ToTickIndex(new Z(l.value.current_sqrt_price));console.log(r,S,b,"###324"),S<r&&($.value?oo.value=!0:J.value=!0),S>b&&($.value?J.value=!0:oo.value=!0);let k;if(t.value||a.value){if(h.value){const j=new p(t.value).mul(Math.pow(10,u.value.decimals)).toString();k=new Z(j)}else{const j=new p(a.value).mul(Math.pow(10,i.value.decimals)).toString();k=new Z(j)}const{liquidityAmount:U,tokenMaxA:P,tokenMaxB:F,tokenMaxAOrigin:eo,tokenMaxBOrigin:V}=A.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:u.value,tokenB:i.value,lowerTick:r,upperTick:b,coinAmount:k,iscoinA:h.value,roundUp:!0,slippage:Number(H.value)/100,curSqrtPrice:new Z(l.value.current_sqrt_price)});console.log(l.value.current_sqrt_price,"##positionInfo.value.current_sqrt_price"),console.log(F.toString(),P.toString(),l.value,"###323"),h.value?a.value=Number(F)>0?F:"":t.value=Number(P)>0?P:"",R(U),no(U)}};x(()=>l.value,r=>{r&&!ao(r)&&(u.value=r==null?void 0:r.token_a,i.value=r==null?void 0:r.token_b,oo.value=!1,J.value=!1,G())},{immediate:!0});const K=c(()=>C.value.RATES),so=c(()=>{var r,b,S,k,U,P,F,eo,V,j;if((b=K.value[(r=u.value)==null?void 0:r.address])!=null&&b.price&&((k=K.value[(S=i.value)==null?void 0:S.address])!=null&&k.price)){console.log((P=K.value[(U=u.value)==null?void 0:U.address])==null?void 0:P.price,"RATES.value[fromCoin.value?.address]?.price");const qo=new p(t.value||0).mul(new p((eo=K.value[(F=u.value)==null?void 0:F.address])==null?void 0:eo.price)),Eo=new p(a.value||0).mul(new p((j=K.value[(V=i.value)==null?void 0:V.address])==null?void 0:j.price));return Do(qo.add(Eo).toString(),2)}else return"--"});x(t,(r,b)=>{r&&G(),r==""&&(W.value="--",a.value="",X.value="--")}),x(a,(r,b)=>{r&&G(),r==""&&(t.value="",W.value="--",X.value="--")});const{t:io,locale:Po}=zo(),uo=c(()=>{const r=Number(t.value)>Number(w.value),b=Number(a.value)>Number(g.value);return!t.value&&!a.value?io("button.enterAmount"):r?io("button.insufficientBalance",{name:u.value.symbol}):b?io("button.insufficientBalance",{name:i.value.symbol}):"Add Liquidity"}),lo=c(()=>{const r=Number(t.value)>Number(w.value),b=Number(a.value)>Number(g.value);return!!(!t.value&&!a.value||r||b||t.value<=0&&a.value<=0)}),ro=q(!0),{setIsShowSuccess:yo,setIsShowRejected:fo,setIsShowWaiting:co,setTransactionDesc:d,setTransactionTxid:M,setPositiomNum:mo}=B,_o=Jo("Sui");return{wallet:I,positionInfo:l,isShowAddModal:n,needReverse:$,fromCoin:u,toCoin:i,fromCoinAmount:t,toCoinAmount:a,fromCoinBlance:w,toCoinBlance:g,fixedFromCoin:h,maxBtnSelect:Y,halfBtnSelect:L,totalAmountUSD:so,addCommom:D,shareOfPool:W,minimumReceivedLP:X,addLiquidityBtnText:uo,addLiquidityBtnDisabled:lo,toAdd:async()=>{var eo,V;n.value=!1,ro.value=!0,M("");const r=`${D(t.value)} ${(eo=u.value)==null?void 0:eo.symbol}`,b=`${D(a.value)} ${(V=i.value)==null?void 0:V.symbol}`;d(`Deposit ${t.value>0?r:""} ${a.value>0&&t.value>0?"and":""} ${a.value>0?b:""}`),co(!0);const S=h.value,k=l.value.autoPoolPositionInfo.tick_lower_index,U=l.value.autoPoolPositionInfo.tick_upper_index;let P;if(h.value){const j=new p(t.value).mul(Math.pow(10,u.value.decimals)).toString();P=new Z(j)}else{const j=new p(a.value).mul(Math.pow(10,i.value.decimals)).toString();P=new Z(j)}const F=l.value.rewarderInfo.map(j=>j.coinAddress);try{const j={lowerTick:k,upperTick:U,coinAmount:P,fix_amount_a:S,slippage:Number(H.value)/100,curSqrtPrice:new Z(l.value.current_sqrt_price),id:l.value.id,clmm_pool:l.value.autoPoolPositionInfo.pool,lp_token_type:l.value.lp_token_type,coinTypeA:l.value.autoPoolPositionInfo.coin_type_a,coinTypeB:l.value.autoPoolPositionInfo.coin_type_b,rewarder_coin_types:F},qo=await _o.deposit(j);console.log(qo,"===>payloadAdd11111");const Eo=await I.value.currentWallet.signAndExecuteTransactionBlock(qo);let Io=A.value.handleTx(Eo);if(console.log("toAdd###tx###",Io),Io&&Io.hash){M(Io.hash),co(!1),yo(!0),console.log(l,"===>positionInfo");const Wo={title:"Supplied",desc:`Deposit ${t.value>0?r:""} ${a.value>0&&t.value>0?"and":""} ${a.value>0?b:""}`,hash:Io.hash,tit:"Liquidity Increased",icon:"icon-icon-Increased",text:`Deposit ${t.value>0?r:""} ${a.value>0&&t.value>0?"and":""} ${a.value>0?b:""}`};O.value!=="Aptos"&&(Wo.res=Io.res),A.value.showTransitionPending(Wo),await A.value.watchTransaction(Wo)&&setTimeout(()=>{y.updatePositionItem(l.value.id),A.value.getAccount(I.value.address)},1e3),mo()}else co(!1),fo(!0);t.value="",a.value="",ro.value=!1}catch(j){t.value="",a.value="",console.log("addError###",j),ro.value=!1,co(!1),fo(!0)}},showToCoinLock:J,showFromCoinLock:oo}}});const Mo=o=>(Bo("data-v-3857f699"),o=o(),Oo(),o),Rn={class:"auto-pool-add"},Nn={class:"auto-pool-add-content"},Ln={class:"liquidity-action-tab"},Bn=Mo(()=>e("div",{class:"increase tab-active"},"Add",-1)),On={class:"card-item"},Mn={class:"card-item"},Dn={class:"add-info"},jn={class:"total-amount"},Un=Mo(()=>e("span",null,"Total Amount",-1)),Fn={class:"total-amount"},En=Mo(()=>e("span",null,"Share of Pool",-1)),Wn={class:"total-amount"},Xn=Mo(()=>e("span",null,"Minimum Received LP",-1)),zn=Mo(()=>e("span",null,"Pool Closed",-1));function Vn(o,n,B,N,O,I){var l,s,$,u,i;const y=he,_=Ie,v=Qo,C=ee;return m(),T("div",Rn,[e("div",Nn,[e("div",Ln,[Bn,e("div",{class:"remove",onClick:n[0]||(n[0]=Ko(t=>o.$emit("changeCurrentTab"),["stop"]))},"Remove")]),e("div",{class:Xo(o.needReverse?"card-container reverse":"card-container")},[e("div",On,[Q(y,{modelValue:o.fromCoinAmount,"onUpdate:modelValue":n[1]||(n[1]=t=>o.fromCoinAmount=t),"input-value":o.fromCoinAmount,"coin-symbol":o.fromCoin?o.fromCoin.symbol:null,"coin-name":o.fromCoin?o.fromCoin.name:null,balance:o.fromCoinBlance,"coin-icon":o.fromCoin?o.fromCoin.logoURI:"",address:o.fromCoin?o.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:n[2]||(n[2]=t=>o.maxBtnSelect("fromCoin")),onOnHalf:n[3]||(n[3]=t=>o.halfBtnSelect("fromCoin")),onOnInput:n[4]||(n[4]=t=>{o.fromCoinAmount=t}),onOnFocus:n[5]||(n[5]=()=>{o.fixedFromCoin=!0})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),o.showFromCoinLock?(m(),z(_,{key:0})):po("",!0)]),e("div",Mn,[Q(y,{modelValue:o.toCoinAmount,"onUpdate:modelValue":n[6]||(n[6]=t=>o.toCoinAmount=t),"input-value":o.toCoinAmount,"coin-symbol":o.toCoin?o.toCoin.symbol:null,"coin-name":o.toCoin?o.toCoin.name:null,balance:o.toCoinBlance,"swap-direct":"To","coin-icon":o.toCoin?o.toCoin.logoURI:"",address:o.toCoin?o.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:n[7]||(n[7]=t=>o.maxBtnSelect("toCoin")),onOnHalf:n[8]||(n[8]=t=>o.halfBtnSelect("toCoin")),onOnInput:n[9]||(n[9]=t=>{o.toCoinAmount=t}),onOnFocus:n[10]||(n[10]=()=>{o.fixedFromCoin=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),o.showToCoinLock?(m(),z(_,{key:0})):po("",!0)])],2),e("div",Dn,[e("div",jn,[Un,e("span",null,"$"+f(("addCommom"in o?o.addCommom:E(D))(o.totalAmountUSD)),1)]),e("div",Fn,[En,e("span",null,f(o.shareOfPool)+"%",1)]),e("div",Wn,[Xn,e("span",null,f(("addCommom"in o?o.addCommom:E(D))(o.minimumReceivedLP))+" "+f(o.needReverse?(l=o.toCoin)==null?void 0:l.symbol:(s=o.fromCoin)==null?void 0:s.symbol)+"-"+f(o.needReverse?($=o.fromCoin)==null?void 0:$.symbol:(u=o.toCoin)==null?void 0:u.symbol),1)])])]),(i=o.positionInfo)!=null&&i.is_pause?(m(),z(v,{key:0,class:"big-btn liquidity-btn",disabled:!0},{default:$o(()=>[zn]),_:1})):o.wallet.connected?(m(),z(v,{key:1,class:"big-btn liquidity-btn",disabled:o.addLiquidityBtnDisabled,onClick:n[11]||(n[11]=t=>o.isShowAddModal=!0)},{default:$o(()=>[e("span",null,f(o.addLiquidityBtnText),1)]),_:1},8,["disabled"])):(m(),z(v,{key:2,class:"big-btn",onClick:n[12]||(n[12]=t=>o.wallet.setIsShowWalletModal(!0))},{default:$o(()=>[e("span",null,f(o.$t("button.connectWallet")),1)]),_:1})),o.isShowAddModal?(m(),z(C,{key:3,"pool-info":o.positionInfo,"from-coin":o.needReverse?o.positionInfo.token_b:o.positionInfo.token_a,"to-coin":o.needReverse?o.positionInfo.token_a:o.positionInfo.token_b,"from-coin-amount":o.needReverse?o.toCoinAmount:o.fromCoinAmount,"to-coin-amount":o.needReverse?o.fromCoinAmount:o.toCoinAmount,"total-amount":o.totalAmountUSD,"share-of-pool":o.shareOfPool,"minimum-received-l-p":o.minimumReceivedLP,onOnClose:n[13]||(n[13]=t=>o.isShowAddModal=!1),onToAdd:o.toAdd},null,8,["pool-info","from-coin","to-coin","from-coin-amount","to-coin-amount","total-amount","share-of-pool","minimum-received-l-p","onToAdd"])):po("",!0)])}const ie=wo(Tn,[["render",Vn],["__scopeId","data-v-3857f699"]]),Hn=Co({props:{inputValue:{type:String,default:""},balance:{type:String,default:""},lpDecimals:{type:String,default:""},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},inputDisabled:{type:Boolean,default:!1},positionInfo:{default:()=>({})}},setup(o,n){const{t:B,locale:N}=zo(),O=Ro(),I=c(()=>O),y=c(()=>new p(Number(o.balance)).div(2)),_=ve(pe,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function v(){this.$emit("onSelect")}const C=g=>{const Y=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${o.lpDecimals&&o.lpDecimals}})?).*$`);g.target.value=g.target.value.replace(Y,"$1")},l=No(),s=c(()=>l),$=jo(),u=c(()=>$),i=c(()=>u.value.tokensWarningObj);x(()=>u.value.RATES,g=>{g&&console.log(g,"price====>")},{immediate:!0});const t=c(()=>u.value.tokensObj),a=c(()=>I.value.theme),h=So(),w=g=>(g==null?void 0:g.logoURI)||(g==null?void 0:g.logo_url)||ko("/image/coins/sui-unknown.png");return console.log(o,"props###158"),{route:h,theme:a,tokensObj:t,pool:u,halfBalance:y,t:B,addCommom:D,store:I,wallet:s,indicator:_,inputChange:C,importIcon:ko,selectCoin:v,formatNumber:me,tokensWarningObj:i,checkNullObj:ao,getCoinIcon:w}}});const Yn=o=>(Bo("data-v-afb7957e"),o=o(),Oo(),o),Gn={class:"card"},Zn={class:"top"},Jn={key:1,class:"input-div"},Kn={key:0},Qn={class:"left"},xn={class:"loading-token"},ot={class:"lp-bg"},et={key:0,alt:""},nt={class:"bottom"},tt=Yn(()=>e("div",null,null,-1)),st={class:"top"},it={class:"right"};function lt(o,n,B,N,O,I){const y=fe,_=xo,v=Uo("image");return m(),T("div",Gn,[e("div",Zn,[o.inputDisabled?(m(),T("div",Jn,[o.inputValue?(m(),T("span",Kn,f(o.inputValue),1)):(m(),z(_,{key:1,indicator:o.indicator},null,8,["indicator"]))])):(m(),z(y,{key:0,value:o.inputValue=="InsufficientLiquidity"?"":o.inputValue,placeholder:"0.0",disabled:o.inputDisabled,onChange:o.inputChange,onInput:n[0]||(n[0]=C=>o.$emit("onInput",C.target.value)),onFocus:n[1]||(n[1]=C=>o.$emit("onFocus"))},null,8,["value","disabled","onChange"])),e("div",Qn,[e("div",xn,[e("div",ot,[o.positionInfo&&!("checkNullObj"in o?o.checkNullObj:E(ao))(o.positionInfo)&&o.positionInfo.lpInfo?vo((m(),T("img",et,null,512)),[[v,o.getCoinIcon(o.positionInfo.lpInfo)]]):po("",!0)]),e("p",null,f(o.fromCoin.symbol)+" - "+f(o.toCoin.symbol),1)])])]),e("div",nt,[tt,e("div",st,[e("div",it,[To(f(o.$t("common.balance"))+" ",1),e("span",{class:"balance",onClick:n[2]||(n[2]=C=>o.$emit("onMax"))},f(o.wallet.connected?("addCommom"in o?o.addCommom:E(D))(o.balance,o.lpDecimals):"0"),1)])])])])}const at=wo(Hn,[["render",lt],["__scopeId","data-v-afb7957e"]]),ut=Co({components:{AutoPoolRemoveModal:ne},setup(){const o=No(),n=c(()=>o),B=Ro(),N=c(()=>B),O=c(()=>N.value.slippage),I=c(()=>N.value.chainName),y=[{name:"25%",value:25},{name:"50%",value:50},{name:"75%",value:75},{name:"MAX",value:100}],_=q(25),v=So(),C=Lo(),l=c(()=>C),s=c(()=>(console.log(l.value.positionInfoObj[v.params.id],"autoPool.value.positionInfoObj[route.params.id]###"),l.value.positionInfoObj[v.params.id])),$=c(()=>{var d;return(d=s.value)==null?void 0:d.needReverse}),u=q(),i=q(),t=q(!1),a=q(),h=c(()=>{var d;return(d=s.value)==null?void 0:d.myLiquidity}),w=q(!0),g=c(()=>I.value?Zo(I.value):{}),Y=Jo("Sui"),L=q("--"),A=q("--"),H=q("--"),W=()=>{if(w.value||!s.value)return;if(!a.value){L.value="--",A.value="--",_.value=0;return}if(Number(a.value)>Number(h.value))return;if(Number(a.value)*Math.pow(10,s.value.decimals)==Number(h.value)){_.value=100,R({value:1}),w.value=!0;return}const d=new p(a.value).mul(Math.pow(10,s.value.lpInfo.decimals)).toString();console.log(a.value,h.value,"##lpBalance.value");const M=new p(a.value).div(new p(h.value)).mul(100);console.log(new p("0.000000001").div(new p("5.092202763")).toString(),"3333");const mo=s.value.tick_lower_index,_o=s.value.tick_upper_index,ho=s.value.token_a.decimals,r=s.value.token_b.decimals,b=bo.tickIndexToSqrtPriceX64(mo),S=bo.tickIndexToSqrtPriceX64(_o);console.log(s.value.object.current_sqrt_price,"##positionInfo.value.object.current_sqrt_price"),console.log(d.toString(),s.value.total_supply,"amount.toString");const k=Ho.get_share_liquidity_by_amount({liquidity:s.value.liquidity,total_supply:s.value.total_supply},d.toString());console.log(k,"###liquidity");const U=Yo.getCoinAmountFromLiquidity(new Z(k),new Z(s.value.object.current_sqrt_price),b,S,!1),P=new p(U.coinA.toString()).div(Math.pow(10,ho)).toString(),F=new p(U.coinB.toString()).div(Math.pow(10,r)).toString();L.value=Number(P)>0?P:"--",A.value=Number(F)>0?F:"--",console.log(M.toString(),"##ratio"),_.value=M.toString(),H.value=to(d,0),X.value=to(k,0)},X=q(),R=d=>{if(!w.value)return;w.value=!0;const M=s.value.token_a.decimals,mo=s.value.token_b.decimals,_o=s.value.tick_lower_index,ho=s.value.tick_upper_index,r=bo.tickIndexToSqrtPriceX64(_o),b=bo.tickIndexToSqrtPriceX64(ho);let S="",k;console.log(s.value,"positionInfo.value.myLiquidity###"),d.value!==1?k=new p(s.value.myLiquidity).mul(Math.pow(10,s.value.lpInfo.decimals)).mul(d.value).toString():k=new p(s.value.myLiquidity).mul(Math.pow(10,s.value.lpInfo.decimals)).toString(),a.value=new p(k).div(Math.pow(10,s.value.lpInfo.decimals)),S=Ho.get_share_liquidity_by_amount({liquidity:s.value.liquidity,total_supply:s.value.total_supply},k),H.value=to(k,0),X.value=to(S,0),console.log(s.value.myLiquidity,"##positionInfo.value.myLiquidity");const U=Yo.getCoinAmountFromLiquidity(new Z(S),new Z(s.value.object.current_sqrt_price),r,b,!1),P=new p(U.coinA.toString()).div(Math.pow(10,M)).toString(),F=new p(U.coinB.toString()).div(Math.pow(10,mo)).toString();console.log(P,F,"amountA121212"),L.value=Number(P)>0?P:"--",A.value=Number(F)>0?F:"--"};x(_,_e((d,M)=>{d!==M&&(Number(d)>100?_.value=100:d&&s.value?(console.log("687===>"),_.value=d,R({value:_.value/100})):(L.value="--",A.value="--"))},300)),x(()=>a.value,d=>{W()},{immediate:!0});const no=oe(),{setIsShowSuccess:oo,setIsShowRejected:J,setIsShowWaiting:G,setTransactionDesc:K,setTransactionTxid:so,setPositiomNum:io,setTransactionDescText:Po}=B,uo=q(!1),{t:lo}=zo(),ro=async()=>{var k,U;uo.value=!0,so("");const d=Number(L.value)>0?`${D(L.value,u.value.decimals)} ${u.value.symbol}`:"",M=Number(A.value)>0?`${D(A.value,i.value.decimals)} ${i.value.symbol}`:"";console.log(d,M,"###transactionDescTo"),K(lo("tips.removeLiquidiyText",{from:$.value?M:d,and:Number(L.value)>0&&Number(A.value)>0?"and":"",to:$.value?d:M})),G(!0);const mo=lo("modal.removeLiquidityText2");Po(mo);const _o=s.value.autoPoolPositionInfo.tick_lower_index,ho=s.value.autoPoolPositionInfo.tick_upper_index,r=bo.tickIndexToSqrtPriceX64(_o),b=bo.tickIndexToSqrtPriceX64(ho),S=s.value.rewarderInfo.map(P=>P.coinAddress);console.log(X.value,"##liquidityVal.value");try{const P={lowerSqrtPrice:r,upperSqrtPrice:b,lpTokenAmount:new Z(H.value),liquidity:new Z(X.value),curSqrtPrice:new Z(s.value.object.current_sqrt_price),slippage:Number(O.value)/100,id:s.value.id,clmm_pool:s.value.autoPoolPositionInfo.pool,lp_token_type:s.value.lp_token_type,coinTypeA:s.value.autoPoolPositionInfo.coin_type_a,coinTypeB:s.value.autoPoolPositionInfo.coin_type_b,rewarder_coin_types:S},F=await Y.remove(P),eo=await n.value.currentWallet.signAndExecuteTransactionBlock(F);let V=g.value.handleTx(eo);if(console.log("0331###remove###tx####",V),V&&V.hash){so(V.hash),G(!1),oo(!0);const j={title:lo("common.removeLiquidity"),desc:"",hash:V.hash,descTransactions:`Remove ${d} ${Number(L.value)>0&&Number(A.value)>0?"and":""} ${M} from the pool`,sender:n.value.address,chainName:"Sui",tit:"Liquidity Removed",icon:"icon-icon-Removed",text:`Withdraw ${L.value} ${(k=u.value)==null?void 0:k.symbol} and ${A.value} ${(U=i.value)==null?void 0:U.symbol}`};j.res=V.res,g.value.showTransitionPending(j),await g.value.watchTransaction(j)&&(L.value="",A.value="",a.value="",_.value=0,setTimeout(()=>{C.updatePositionItem(s.value.id),g.value.getAccount(n.value.address)},1e3),Number(_.value)==100&&v.name=="auto-pool-detail"&&no.push("/vaults"))}else G(!1),J(!0);uo.value=!1}catch(P){console.log("Remove error",P),uo.value=!1,G(!1),J(!0)}};x(()=>s.value,(d,M)=>{d&&!ao(d)&&(u.value=d==null?void 0:d.token_a,i.value=d==null?void 0:d.token_b,console.log("触发###"),(!M||M&&M.address!==d.address)&&R({value:_.value/100}))},{immediate:!0});const yo=c(()=>{const d=Number(a.value)>Number(h.value);return!a.value||a.value<=0?lo("button.enterAmount"):d?"Invalid Amount":lo("button.remove")}),fo=c(()=>{const d=Number(a.value)>Number(h.value);return!!(!a.value||a.value<=0||d)});return{removeLiquidityBtnText:yo,removeLiquidityBtnDisabled:fo,wallet:n,ratioArr:y,positionInfo:s,isShowRemoveModal:t,needReverse:$,fromCoin:u,toCoin:i,lpAmount:a,lpBalance:h,sliderVal:_,sFixD:to,isSlider:w,fromCoinAmount:L,toCoinAmount:A,setPercent:R,toRemove:ro,addCommom:D,getCoinIcon:d=>(d==null?void 0:d.logoURI)||(d==null?void 0:d.logo_url)||ko("/image/coins/sui-unknown.png")}}});const Fo=o=>(Bo("data-v-a476b0c1"),o=o(),Oo(),o),rt={class:"auto-pool-add"},dt={class:"auto-pool-add-content"},ct={class:"liquidity-action-tab"},mt=Fo(()=>e("div",{class:"remove tab-active"},"Remove",-1)),vt={class:"card-item"},pt={class:"remove-ratio"},ft=Fo(()=>e("div",{class:"remove-ratio-title"},"Amount",-1)),_t={class:"remove-ratio-select"},bt={key:0,class:"ratio"},gt={key:1,class:"ratio"},yt={class:"ratio-list"},ht=["onClick"],It={class:"est-receive"},$t=Fo(()=>e("div",{class:"est-receive-title"},"Estimated Receive",-1)),kt={class:"token-a"},Ct={alt:""},St={class:"token-a"},wt={alt:""},At=Fo(()=>e("span",null,"Pool Closed",-1));function Pt(o,n,B,N,O,I){var s,$,u,i,t,a,h,w,g,Y,L,A,H,W,X;const y=at,_=ye,v=Qo,C=ne,l=Uo("image");return m(),T("div",rt,[e("div",dt,[e("div",ct,[e("div",{class:"increase",onClick:n[0]||(n[0]=Ko(R=>o.$emit("changeCurrentTab"),["stop"]))},"Add"),mt]),e("div",{class:Xo(o.needReverse?"card-container reverse":"card-container")},[e("div",vt,[Q(y,{modelValue:o.lpAmount,"onUpdate:modelValue":n[1]||(n[1]=R=>o.lpAmount=R),"input-value":o.lpAmount,balance:o.lpBalance,"from-coin":o.needReverse?o.toCoin:o.fromCoin,"to-coin":o.needReverse?o.fromCoin:o.toCoin,"position-info":o.positionInfo,"lp-decimals":($=(s=o.positionInfo)==null?void 0:s.lpInfo)==null?void 0:$.decimals,onOnMax:n[2]||(n[2]=()=>{o.sliderVal=100,o.setPercent({value:1})}),onOnInput:n[3]||(n[3]=R=>{o.isSlider=!1,o.lpAmount=R})},null,8,["modelValue","input-value","balance","from-coin","to-coin","position-info","lp-decimals"])])],2),e("div",pt,[ft,e("div",_t,[Number(o.lpBalance)>=Number(o.lpAmount)?(m(),T("div",bt,f(o.sliderVal>0&&Number(("sFixD"in o?o.sFixD:E(to))(o.sliderVal,2))<.01?"<0.01":("sFixD"in o?o.sFixD:E(to))(o.sliderVal,2))+"% ",1)):(m(),T("div",gt,"--")),e("div",yt,[(m(!0),T(be,null,ge(o.ratioArr,(R,no)=>(m(),T("div",{key:no,class:Xo(["ratio-item",o.sliderVal==R.value?"ratio-item-active":""]),onClick:()=>{o.isSlider=!0,o.sliderVal=R.value}},f(R.name),11,ht))),128))])]),Q(_,{value:o.sliderVal,"onUpdate:value":n[4]||(n[4]=R=>o.sliderVal=R)},null,8,["value"])]),e("div",It,[$t,e("div",kt,[e("div",null,f(("addCommom"in o?o.addCommom:E(D))(o.fromCoinAmount)),1),e("div",null,[vo(e("img",Ct,null,512),[[l,o.needReverse?o.getCoinIcon((u=o.positionInfo)==null?void 0:u.token_b):o.getCoinIcon((i=o.positionInfo)==null?void 0:i.token_a)]]),e("span",null,f(o.needReverse?(a=(t=o.positionInfo)==null?void 0:t.token_b)==null?void 0:a.symbol:(w=(h=o.positionInfo)==null?void 0:h.token_a)==null?void 0:w.symbol),1)])]),e("div",St,[e("div",null,f(("addCommom"in o?o.addCommom:E(D))(o.toCoinAmount)),1),e("div",null,[vo(e("img",wt,null,512),[[l,o.needReverse?o.getCoinIcon((g=o.positionInfo)==null?void 0:g.token_a):o.getCoinIcon((Y=o.positionInfo)==null?void 0:Y.token_b)]]),e("span",null,f(o.needReverse?(A=(L=o.positionInfo)==null?void 0:L.token_a)==null?void 0:A.symbol:(W=(H=o.positionInfo)==null?void 0:H.token_b)==null?void 0:W.symbol),1)])])])]),(X=o.positionInfo)!=null&&X.is_pause?(m(),z(v,{key:0,class:"big-btn liquidity-btn",disabled:!0},{default:$o(()=>[At]),_:1})):o.wallet.connected?(m(),z(v,{key:1,class:"big-btn liquidity-btn",disabled:o.removeLiquidityBtnDisabled,onClick:o.toRemove},{default:$o(()=>[e("span",null,f(o.removeLiquidityBtnText),1)]),_:1},8,["disabled","onClick"])):(m(),z(v,{key:2,class:"big-btn",onClick:n[5]||(n[5]=R=>o.wallet.setIsShowWalletModal(!0))},{default:$o(()=>[e("span",null,f(o.$t("button.connectWallet")),1)]),_:1})),o.isShowRemoveModal?(m(),z(C,{key:3,"pool-info":o.positionInfo,"from-coin":o.positionInfo.token_a,"to-coin":o.positionInfo.token_b,onOnClose:n[6]||(n[6]=R=>o.isShowRemoveModal=!1)},null,8,["pool-info","from-coin","to-coin"])):po("",!0)])}const le=wo(ut,[["render",Pt],["__scopeId","data-v-a476b0c1"]]),qt=Co({components:{AutoPoolAdd:ie,AutoPositionInfo:te,AutoPositionLiquidity:se,AutoPoolRemove:le},setup(){const o=q("add"),n=No(),B=c(()=>n),N=Lo(),O=c(()=>N),I=jo(),y=c(()=>I);x(()=>y.value.poolConfigList,u=>{u&&u.length>0&&N.getAutoPoolList()},{immediate:!0}),x(()=>[B.value.address,O.value.autoPoolList,y.value.poolConfigList],([u,i,t])=>{u&&i&&i.length>0&&t&&t.length>0&&N.getMyAutoPoolPosition()},{immediate:!0});const _=So(),v=c(()=>(console.log(O.value.positionInfoObj[_.params.id],"autoPool.value.positionInfoObj[route.params.id]###"),O.value.positionInfoObj[_.params.id]||{}));x(()=>_.query.action,u=>{u&&(o.value=u)},{immediate:!0});const C=oe();x(()=>B.value.address,u=>{u||C.push("/vaults")},{immediate:!0});const l=Ro(),s=c(()=>l);return{currentTab:o,positionInfo:v,clickRefresh:()=>{N.getAutoPoolAPY(),N.getAutoPoolList(),I.setPoolConfigList(s.value.chainName,s.value.filterCoinsObj)},checkNullObj:ao}}});const Tt={class:"auto-increase-liquidity"},Rt={class:"auto-increase-liquidity-content pc-content"},Nt={class:"left"},Lt={class:"right"},Bt={class:"auto-increase-liquidity-content h5-content"},Ot={class:"left"},Mt={class:"right"};function Dt(o,n,B,N,O,I){const y=ae,_=te,v=se,C=ie,l=le,s=xo;return m(),T("div",Tt,[Q(y,{onClickRefresh:o.clickRefresh},null,8,["onClickRefresh"]),e("div",Rt,[e("div",Nt,[Q(_),Q(v)]),e("div",Lt,[o.currentTab=="add"?(m(),z(C,{key:0,onChangeCurrentTab:n[0]||(n[0]=$=>o.currentTab="remove")})):(m(),z(l,{key:1,onChangeCurrentTab:n[1]||(n[1]=$=>o.currentTab="add")}))]),("checkNullObj"in o?o.checkNullObj:E(ao))(o.positionInfo)?(m(),z(s,{key:0})):po("",!0)]),e("div",Bt,[e("div",Ot,[Q(_),o.currentTab=="add"?(m(),z(C,{key:0,onChangeCurrentTab:n[2]||(n[2]=$=>o.currentTab="remove")})):(m(),z(l,{key:1,onChangeCurrentTab:n[3]||(n[3]=$=>o.currentTab="add")}))]),e("div",Mt,[Q(v)]),("checkNullObj"in o?o.checkNullObj:E(ao))(o.positionInfo)?(m(),z(s,{key:0})):po("",!0)])])}const rs=wo(qt,[["render",Dt],["__scopeId","data-v-f53d3908"]]);export{rs as default};
