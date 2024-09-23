import{_ as sa,a as ra}from"./new-liquidity-price.33d35653.js";import{i as je}from"./import-icon.de3e6c66.js";import{a as xo,m as U,r as $,L as ea,z as ca,A as ee,a1 as va,a2 as Ue,e as oa,l as Ee,o as j,f as le,i as Ce,G as oe,h as t,y as he,x as Ne,c as Le,w as Ho,B as da,j as Ko,p as aa,k as ta,b as ma,s as pa,C as fa,I as ga,u as ka,K as ba}from"./entry.81366e87.js";/* empty css              */import{u as la,a as na,b as ua}from"./index.ab348efd.js";import{_ as ha}from"./new-add-or-create.c9d8a0ac.js";import{_ as wa,a as Ca,s as _a}from"./poolFee.6a57076f.js";import{S as ya,a as Sa}from"./sui-liquidity-deposit-ratio.4f7abfb0.js";import{u as Na,b as Ve,c as Pa}from"./index.3a5cc2eb.js";import{b as Jo,a as Se,c as Qo,p as Yo,g as Ta,d as Aa,y as Zo}from"./common.831588b7.js";import"./decimal.a2826370.js";import{amountLock as ye,fromCoinAmount as l,toCoinAmount as u,fromCoin as d,toCoin as c,showFromCoinLock as Z,showToCoinLock as x,fixedFromCoin as A,createPoolInfo as i,minPrice as b,maxPrice as v,currentPriceReverse as Ze,currentPrice as de,initPrice as we,direction as f,createPoolFromCoin as ce,createPoolToCoin as ve,isFullRange as re,resetData as Ia,defaultMinPrice as Qe,defaultMaxPrice as Ye}from"./create-pool-data.82fce1e6.js";import{T as qa}from"./token-input-block.26ae0d9b.js";import{D as n}from"./decimal.765d8738.js";import{_ as Ra}from"./lock.35e1d915.js";import{u as La}from"./useDebounceFunction.838360ca.js";import"./img-lock_2x.a28135f4.js";import"./index.ca5a11a6.js";import"./token-warning.f7842a11.js";import"./status-block.8c47b717.js";/* empty css              */import"./deposit-ratio.748950b7.js";/* empty css              */import"./notifi.06c83939.js";import"./useWhale.fdd57c64.js";import"./icon-slippage.ffccdfb9.js";import"./swap-setting.ac3e2f84.js";import"./icon-error_2x.60df6f3d.js";import"./icon-refresh.0b3e3937.js";import"./icon-tooltip.ffac3883.js";import"./coin-img-warning.f87df7b5.js";import"./token.bc796087.js";import"./coin-img.160e8bd2.js";import"./token-dropdown-select.2714c356.js";const $a=xo({components:{NewLiquidityTile:ya,SuiLiquidityDepositRatio:Sa,TokenInputBlock:qa},setup(e,s){const ne=Na(),ae=la(),me=U(()=>ae),G=U(()=>me.value.chainName),P=U(()=>ne),E=$(!1);$(),$(),$(),$(!1);const I=ea(),{t:h,locale:H}=ca(),q=U(()=>G.value?ua(G.value):{}),C=na(),z=U(()=>C),_e=U(()=>me.value.theme),D=U(()=>P.value.assets&&d.value&&P.value.assets[d.value.address]?Yo(P.value.assets[d.value.address].balance,d.value.decimals):"0"),S=U(()=>P.value.assets&&c.value&&P.value.assets[c.value.address]?Yo(P.value.assets[c.value.address].balance,c.value.decimals):"0"),Ae=o=>{o==="fromCoin"?(A.value=!0,G.value==="Aptos"?l.value=Number(D.value)>0?d.value.symbol=="APT"?new n(Number(D.value)).sub(new n(.1)).lt(new n(0))?"0":new n(Number(D.value)).sub(new n(.1)).toString():String(D.value):"":l.value=Number(D.value)>0?d.value.symbol=="SUI"?new n(Number(D.value)).sub(new n(.05)).lt(new n(0))?"0":new n(Number(D.value)).sub(new n(.05)).toString():String(D.value):""):(A.value=!1,G.value==="Aptos"?u.value=Number(S.value)>0?c.value.symbol=="APT"?new n(Number(S.value)).sub(new n(.1)).lt(new n(0))?"0":new n(Number(S.value)).sub(new n(.1)).toString():String(S.value):"":u.value=Number(S.value)>0?c.value.symbol=="SUI"?new n(Number(S.value)).sub(new n(.05)).lt(new n(0))?"0":new n(Number(S.value)).sub(new n(.05)).toString():String(S.value):"")},We=o=>{o==="fromCoin"?(A.value=!0,l.value=Number(D.value)>0?Jo(new n(Number(D.value)).div(2).toString(),d.value.decimals).toString():""):(A.value=!1,u.value=Number(S.value)>0?Jo(new n(Number(S.value)).div(2).toString(),c.value.decimals).toString():"")};ee(()=>[z.value.tokensObj,I.query],async([o])=>{if(o){const r=o;if(I&&I.query&&I.query.fromCoin&&I.query.fromCoin){const w=r[I.query.fromCoin]||await q.value.getTokenBySymbol(r,I.query.fromCoin);d.value=w,ce.value=w}if(I&&I.query&&I.query.toCoin&&I.query.toCoin){const w=r[I.query.toCoin]||await q.value.getTokenBySymbol(r,I.query.toCoin);c.value=w,ve.value=w}}},{immediate:!0,deep:!0});const K=$("--"),Ie=U(()=>me.value.slippage),ze=$(),pe=async()=>{if(!b.value&&!v.value)return!1;if(!l.value&&!u.value&&!b.value&&!v.value)return;const o=i.value||{};if(Qo(o))return;const{TickUtil:r,TickMath:w,getNearestTickByTick:M}=q.value,k=o==null?void 0:o.token_a.decimals,p=o==null?void 0:o.token_b.decimals;let R,F,N,L,V,O,T=o.current_tick_index,J;if(o.token_a.address.toLowerCase()===d.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===c.value.address.toLowerCase()?J=!0:J=!1,b.value==="0"&&v.value==="∞")N=r.getMinIndex(Number(o.tickSpacing)),L=r.getMaxIndex(Number(o.tickSpacing));else{J?(R=Number(b.value),F=Number(v.value)):(R=new n(1).div(v.value).toString(),F=new n(1).div(b.value).toString());try{V=R==0?-443636:w.priceToTickIndex(new n(R),k,p)}catch{V=-443636}try{O=w.priceToTickIndex(new n(F),k,p)}catch{O=443636}N=M(V,Number(o.tickSpacing)),L=M(O,Number(o.tickSpacing))}if(v.value!=="∞"&&N>=L){Z.value=!0,l.value="",x.value=!0,u.value="";return}if(T==L||T==N){Z.value=!0,x.value=!0;return}if(v.value==="∞"||T>=N&&T<=L){Z.value=!1,x.value=!1;let se;if(l.value||u.value){if(A.value){const Te=new n(l.value).mul(Math.pow(10,d.value.decimals)).toString();se=new Ve(Te)}else{const Te=new n(u.value).mul(Math.pow(10,c.value.decimals)).toString();se=new Ve(Te)}const{liquidityAmount:Y,tokenMaxA:te,tokenMaxB:fe,tokenMaxAOrigin:Oe,tokenMaxBOrigin:De}=q.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:o.token_a,tokenB:o.token_b,lowerTick:N,upperTick:L,coinAmount:se,iscoinA:J?A.value:!A.value,roundUp:!0,slippage:Number(Ie.value)/100,curSqrtPrice:new Ve(o.current_sqrt_price)});ze.value={liquidityAmount:Y,tokenMaxA:te,tokenMaxB:fe,tokenMaxAOrigin:Oe,tokenMaxBOrigin:De},J?A.value?u.value=Number(fe)>0?fe:"":l.value=Number(te)>0?te:"":A.value?u.value=te:l.value=fe}}else T>L?(Z.value=!0,x.value=!0):T<N?(Z.value=!0,x.value=!0):(Z.value=!0,l.value="",x.value=!0,u.value="")};ee(()=>we.value,o=>{o&&pe()},{immediate:!0}),ee(l,(o,r)=>{o==""&&A.value&&(u.value=""),o&&A.value&&!E.value&&pe()}),ee(u,(o,r)=>{o==""&&!A.value&&(l.value=""),o&&!A.value&&!E.value&&pe()}),ee(()=>re.value,o=>{pe()},{immediate:!0});const Xe=o=>{const r=o.replace(/[^\d.]/g,""),w="$"+Se(r);E.value=!0,K.value=w,o>0?$e():(l.value="",u.value="")};ee([b,v],([o,r])=>{Number(o)!==0&&Number(r)!==0&&!E.value?pe():Number(o)!==0&&Number(r)!==0&&E.value?$e():pe()},{immediate:!0}),ee(()=>{var o;return(o=i)==null?void 0:o.value},o=>{pe()},{deep:!0});const Ge=()=>{const o=W.value&&W.value[d.value.address]&&W.value[d.value.address].price,r=W.value&&W.value[c.value.address]&&W.value[c.value.address].price;if(o&&r){const w=new n(l.value>0?l.value:0).mul(o),M=new n(u.value>0?u.value:0).mul(r),k=w.add(M).toNumber();K.value=k>0&&k<.01?"$<0.01":"$"+Se(k,2)}else K.value="--"};ee(()=>[l.value,u.value,E.value],([o,r,w])=>{(o||r)&&!w?Ge():(!o||!r)&&!w&&(K.value="--")},{immediate:!0});const W=U(()=>z.value.RATES),He=$(),$e=async()=>{if(!b.value&&!v.value)return!1;if(!l.value&&!u.value&&!b.value&&!v.value)return;const o=i.value||{};if(Qo(o))return;const{TickUtil:r,TickMath:w,getNearestTickByTick:M}=q.value,k=o==null?void 0:o.token_a.decimals,p=o==null?void 0:o.token_b.decimals;let R,F,N,L,V,O,T;if(o.token_a.address.toLowerCase()===d.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===c.value.address.toLowerCase()?T=!0:T=!1,b.value==="0"&&v.value==="∞")N=r.getMinIndex(Number(o.tickSpacing)),L=r.getMaxIndex(Number(o.tickSpacing));else{T?(R=Number(b.value),F=Number(v.value)):(R=new n(1).div(v.value).toString(),F=new n(1).div(b.value).toString());try{V=R==0?-443636:w.priceToTickIndex(new n(R),k,p)}catch{V=-443636}try{O=w.priceToTickIndex(new n(F),k,p)}catch{O=443636}N=M(V,Number(o.tickSpacing)),L=M(O,Number(o.tickSpacing))}const J=W.value[o==null?void 0:o.token_a.address].price,se=W.value[o==null?void 0:o.token_b.address].price;try{const{amountA:Y,amountB:te,tokenAmountsInfo:fe}=await q.value.estCoinAmountsFromTotalAmount({lowerTick:N,upperTick:L,decimalsA:k,decimalsB:p,curSqrtPrice:new Ve(o.current_sqrt_price),totalAmount:K.value,tokenPriceA:J,tokenPriceB:se});He.value=fe,o.needReverse?f.value?(l.value=Y,u.value=te):(l.value=te,u.value=Y):(l.value=Y,u.value=te)}catch(Y){console.log(Y,"e===>")}},a=U(()=>{var w,M,k,p,R,F;const o=(k=W.value[(M=(w=d)==null?void 0:w.value)==null?void 0:M.address])==null?void 0:k.price,r=(F=W.value[(R=(p=c)==null?void 0:p.value)==null?void 0:R.address])==null?void 0:F.price;return!!(o&&r)}),g=()=>{s.emit("toggle")},m=$(!1),X=U(()=>{var o;return!d.value||!c.value?h("modal.selectTokenModalTitle"):!((o=I.query)!=null&&o.fee)&&Pa[G.value].hasCreatePool?"Select fee tier":!Number(l.value)&&!Number(u.value)?h("button.enterAmount"):Number(l.value)>Number(D.value)?h("button.insufficientBalance",{name:d.value.symbol}):Number(u.value)>Number(S.value)?h("button.insufficientBalance",{name:c.value.symbol}):v.value!=="∞"&&Number(b.value)>=Number(v.value)?h("newAdd.invalidRange"):h("newAdd.preview")}),_=o=>{const r=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,2})?).*$");o.target.value=o.target.value.replace(r,"$1")},B=U(()=>{var o;return!!(!l.value&&!u.value||Number(l.value)>Number(D.value)||Number(u.value)>Number(S.value)||X.value!==h("newAdd.preview")||!i.value&&!((o=i.value)!=null&&o.currentPrice)||Number(l.value)<=0&&Number(u.value)<=0||Z.value||x.value)}),{setTransactionTxid:ue,setTransactionDesc:ke,setIsShowWaiting:ie,setIsShowSuccess:Q,setIsShowRejected:be,setPositiomNum:Pe}=ae,Be=()=>{G.value=="Sui"&&Fe()},{$notify:Me}=va(),qe=$(!1),Fe=async()=>{var J,se,Y,te,fe,Oe,De,Te,eo,oo,ao,to,lo,no,uo,io,so,ro,co,vo,mo,po,fo,go,ko,bo,ho,wo,Co,_o,yo,So,No,Po,To,Ao,Io,qo,Ro,Lo,$o,Bo,Mo,Fo,Oo,Do,Uo,Vo,jo,Eo,Wo,zo,Xo,Go;m.value=!1;let o=!1;q.value.getIsSortedSymbols(ce.value.address,ve.value.address)&&(o=!0),ue("");const r=Z.value?"":`${l.value} ${(J=d.value)==null?void 0:J.symbol}`,w=x.value?"":`${u.value} ${(se=c.value)==null?void 0:se.symbol}`;ke(h("tips.increaseLiquiditySuccess",{from:!o&&!((te=(Y=i)==null?void 0:Y.value)!=null&&te.needReverse)||o&&((Oe=(fe=i)==null?void 0:fe.value)!=null&&Oe.needReverse)?r:w,and:!Z.value&&!x.value?"and":"",to:!o&&!((Te=(De=i)==null?void 0:De.value)!=null&&Te.needReverse)||o&&((oo=(eo=i)==null?void 0:eo.value)!=null&&oo.needReverse)?w:r})),ie(!0);let M="",k="",p="",R="",F="",N="",L=0,V=0,O=!1,T;if(o||(to=(ao=i)==null?void 0:ao.value)!=null&&to.needReverse){const ge=o&&!((no=(lo=i)==null?void 0:lo.value)!=null&&no.needReverse);M=ge?(vo=(co=(ro=i)==null?void 0:ro.value)==null?void 0:co.token_b)==null?void 0:vo.address:(so=(io=(uo=i)==null?void 0:uo.value)==null?void 0:io.token_a)==null?void 0:so.address,k=ge?(bo=(ko=(go=i)==null?void 0:go.value)==null?void 0:ko.token_a)==null?void 0:bo.address:(fo=(po=(mo=i)==null?void 0:mo.value)==null?void 0:po.token_b)==null?void 0:fo.address,p=ge?(So=(yo=(_o=i)==null?void 0:_o.value)==null?void 0:yo.token_b)==null?void 0:So.decimals:(Co=(wo=(ho=i)==null?void 0:ho.value)==null?void 0:wo.token_a)==null?void 0:Co.decimals,R=ge?(qo=(Io=(Ao=i)==null?void 0:Ao.value)==null?void 0:Io.token_a)==null?void 0:qo.decimals:(To=(Po=(No=i)==null?void 0:No.value)==null?void 0:Po.token_b)==null?void 0:To.decimals,(Lo=(Ro=i)==null?void 0:Ro.value)!=null&&Lo.needReverse?(F=f.value?l.value:u.value,N=f.value?u.value:l.value,L=f.value?Number(b.value):1/Number(v.value),V=f.value?Number(v.value):1/Number(b.value),O=f.value?A.value:!A.value,T=f.value?de.value:1/Number(de.value)):(F=f.value?u.value:l.value,N=f.value?l.value:u.value,L=f.value?1/Number(v.value):Number(b.value),V=f.value?1/Number(b.value):Number(v.value),O=f.value?!A.value:A.value,T=f.value?1/Number(de.value):de.value)}else M=(Mo=(Bo=($o=i)==null?void 0:$o.value)==null?void 0:Bo.token_a)==null?void 0:Mo.address,k=(Do=(Oo=(Fo=i)==null?void 0:Fo.value)==null?void 0:Oo.token_b)==null?void 0:Do.address,p=(jo=(Vo=(Uo=i)==null?void 0:Uo.value)==null?void 0:Vo.token_a)==null?void 0:jo.decimals,R=(zo=(Wo=(Eo=i)==null?void 0:Eo.value)==null?void 0:Wo.token_b)==null?void 0:zo.decimals,F=f.value?l.value:u.value,N=f.value?u.value:l.value,L=f.value?Number(b.value):1/Number(v.value),V=f.value?Number(v.value):1/Number(b.value),O=f.value?A.value:!A.value,T=f.value?de.value:1/Number(de.value);try{console.log("0501###toCreatePool###params###",{coinTypeA:M,coinTypeB:k,decimalsA:p,decimalsB:R,amountA:F,amountB:N,minPrice:L,maxPrice:V,fix_amount_a:O,tick_spacing:Number(i.value.tickSpacing),slippage:Number(Ie.value)/100,price:T});const ge=await q.value.getCreatPoolTransactionPayload({coinTypeA:M,coinTypeB:k,decimalsA:p,decimalsB:R,amountA:F,amountB:N,minPrice:b.value=="0"&&v.value=="∞"?"0":L,maxPrice:b.value=="0"&&v.value=="∞"?"∞":V,fix_amount_a:O,tick_spacing:Number(i.value.tickSpacing),slippage:Number(Ie.value)/100,price:T}),ia=await q.value.signAndExecuteTransactionBlock(P.value.currentWallet,ge),Re=q.value.handleTx(ia);if(Re&&Re.hash){ue(Re.hash),ie(!1),Q(!0);const Je={title:"Created pool",desc:"Pool created successfully ",hash:Re.hash,tit:"Pool Created",icon:"icon-icon-Position-Created",tokenInfo:{tokena:`${(Xo=d.value)==null?void 0:Xo.address}`,numa:Z.value?"":`- ${l.value}`,logoa:z.value.tokensObj&&d.value&&d.value.address&&z.value.tokensObj[d.value.address]&&z.value.tokensObj[d.value.address].logoURI,tokenb:`${(Go=c.value)==null?void 0:Go.address}`,numb:x.value?"":`- ${u.value}`,logob:z.value.tokensObj&&c.value&&c.value.address&&z.value.tokensObj[c.value.address]&&z.value.tokensObj[c.value.address].logoURI},text:"Pool created successfully"};G.value!=="Aptos"&&(Je.res=Re.res),q.value.showTransitionPending(Je),(await q.value.watchTransaction(Je,!0)).status&&(Q(!1),qe.value=!0,setTimeout(()=>{C.setPoolConfigList(G.value,me.value.filterCoinsObj),q.value.getAccount(P.value.address)},1e3)),Pe()}else ie(!1),be(!0);l.value="",u.value=""}catch(ge){console.log("0407###createPool###error##",String(ge)),String(ge).indexOf('Some("create_pool_internal") }, 1')>-1&&Me.error({icon:Ue("svg",{class:{icon:!0},"aria-hidden":!0},[Ue("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:Ue("div",{class:"notification-title"},[Ue("span",{innerHTML:"Pool already exists"},null)]),duration:4.5,description:"Something went wrong",class:"ant-notification-copy ant-notification-error"}),m.value=!1,C.setPoolConfigList(G.value,me.value.filterCoinsObj),l.value="",u.value="",ie(!1),be(!0)}};return{isInputActive:$(!1),amountLock:ye,wallet:P,inputChange:_,fromCoinAmount:l,toCoinAmount:u,fromCoin:d,toCoin:c,maxBtnSelect:Ae,halfBtnSelect:We,showFromCoinLock:Z,showToCoinLock:x,fromCoinBlance:D,toCoinBlance:S,fixedFromCoin:A,isInputTotalAmount:E,toggle:g,theme:_e,liquidityTotalAmount:K,createPoolInfo:i,minPrice:b,maxPrice:v,currentPriceReverse:Ze,currentPrice:de,onInput:Xe,initPrice:we,isShowtotalAmount:a,direction:f,isShowLiquidityModal:m,createPoolBtnText:X,createPoolBtnDisabled:B,toCreatePool:Be,isCreateSuccess:qe}}});const xe=e=>(aa("data-v-2be14568"),e=e(),ta(),e),Ba={class:"create-pool-right"},Ma={key:0,class:"create-pool-lock"},Fa=xe(()=>t("img",{class:"lock",src:Ra,alt:""},null,-1)),Oa=[Fa],Da=xe(()=>t("div",{class:"exchange-new"},[t("svg",{class:"icon icon-down","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_add1"})])],-1)),Ua=[Da],Va={key:1,class:"total-amount"},ja=xe(()=>t("span",null,"Total Amount",-1));function Ea(e,s,ne,ae,me,G){const P=Ee("NewLiquidityTile"),E=Ee("TokenInputBlock"),I=Ee("SuiLiquidityDepositRatio"),h=ha,H=da,q=wa;return j(),le("div",Ba,[Ce(P),e.amountLock||e.showFromCoinLock||e.showToCoinLock?(j(),le("div",Ma,Oa)):oe("",!0),t("div",{class:he(["card-container",e.isInputActive?e.fixedFromCoin?"input-block-add-top":"input-block-add-bottom":"input-block-add-top input-block-inactive"])},[Ce(E,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":s[0]||(s[0]=C=>e.fromCoinAmount=C),"input-value":e.fromCoinAmount,"token-info":e.fromCoin||null,"has-arrow":!1,onOnInput:s[1]||(s[1]=C=>{e.isInputActive=!0,e.fromCoinAmount=C,e.fixedFromCoin=!0,e.isInputTotalAmount=!1}),onOnFocus:s[2]||(s[2]=()=>{e.isInputActive=!0,e.fixedFromCoin=!0}),onOnBlur:s[3]||(s[3]=()=>{e.isInputActive=!1})},null,8,["modelValue","input-value","token-info"]),Ce(E,{modelValue:e.toCoinAmount,"onUpdate:modelValue":s[4]||(s[4]=C=>e.toCoinAmount=C),"input-value":e.toCoinAmount,"token-info":e.toCoin||null,"has-arrow":!1,onOnInput:s[5]||(s[5]=C=>{e.isInputActive=!0,e.toCoinAmount=C,e.fixedFromCoin=!1,e.isInputTotalAmount=!1}),onOnFocus:s[6]||(s[6]=()=>{e.isInputActive=!0,e.fixedFromCoin=!1}),onOnBlur:s[7]||(s[7]=()=>{e.isInputActive=!1})},null,8,["modelValue","input-value","token-info"]),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock?(j(),le("div",{key:0,class:"new-sui-exchange to-add-logo",onClick:s[8]||(s[8]=(...C)=>e.toggle&&e.toggle(...C))},Ua)):oe("",!0)],2),e.isShowtotalAmount?(j(),le("div",Va,[ja,t("span",null,Ne(e.liquidityTotalAmount),1)])):oe("",!0),e.initPrice?(j(),Le(I,{key:2,"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"fixed-from-coin":e.fixedFromCoin,"is-input-total-amount":e.isInputTotalAmount,"min-price":e.minPrice,"max-price":e.maxPrice,"current-price-tab":e.custom,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse},null,8,["from-coin","to-coin","from-coin-amount","to-coin-amount","fixed-from-coin","is-input-total-amount","min-price","max-price","current-price-tab","current-price","current-price-reverse"])):oe("",!0),e.isShowLiquidityModal?(j(),Le(h,{key:3,"pool-info":e.createPoolInfo,title:e.$t("newAdd.preview"),"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"from-coin":e.fromCoin,"to-coin":e.toCoin,"fixed-from-coin":e.fixedFromCoin,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"current-price-tab":"custom","min-price":e.minPrice,"max-price":e.maxPrice,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"current-direct":e.direction,"is-increase":!1,"is-create":!0,onCreatePool:e.toCreatePool,onOnClose:s[9]||(s[9]=C=>e.isShowLiquidityModal=!1)},null,8,["pool-info","title","from-coin-amount","to-coin-amount","from-coin","to-coin","fixed-from-coin","current-price","current-price-reverse","min-price","max-price","show-from-coin-lock","show-to-coin-lock","current-direct","onCreatePool"])):oe("",!0),e.wallet.connected?(j(),Le(H,{key:5,class:"add-liquidity-btn",disabled:e.wallet.connected?e.createPoolBtnDisabled:!1,onClick:s[11]||(s[11]=C=>e.isShowLiquidityModal=!0)},{default:Ho(()=>[Ko(Ne(e.createPoolBtnText),1)]),_:1},8,["disabled"])):(j(),Le(H,{key:4,class:"add-liquidity-btn",onClick:s[10]||(s[10]=C=>e.wallet.setIsShowWalletModal(!0))},{default:Ho(()=>[Ko(Ne(e.$t("button.connectWallet")),1)]),_:1})),e.isCreateSuccess?(j(),Le(q,{key:6,onOnClose:s[12]||(s[12]=C=>e.isCreateSuccess=!1)})):oe("",!0)])}const Wa=oa($a,[["render",Ea],["__scopeId","data-v-2be14568"]]),za=xo({components:{CreatePoolRight:Wa},setup(e,s){const ne=$(!0),ae=$(!0),me=$(!0),G=$(!1),P=$("1"),E=$(!0),I=$(""),h=ea(),H=ma(),q=la(),C=U(()=>q),z=na(),_e=U(()=>z),D=U(()=>C.value.chainName),S=U(()=>D.value?ua(D.value):{}),Ae=$("");ee(()=>[H,_e.value.tokensObj],async([a,g])=>{var m,X,_;((m=H==null?void 0:H.currentRoute)==null?void 0:m.value.name)=="liquidity-create"&&g&&(d.value=_e.value.tokensObj[h.query.fromCoin]||await S.value.getTokenBySymbol(g,h.query.fromCoin),c.value=_e.value.tokensObj[h.query.toCoin]||await S.value.getTokenBySymbol(g,h.query.toCoin),Ae.value=h.query.fee!=="null"&&h.query.fee?h.query.fee:""),((X=H==null?void 0:H.currentRoute)==null?void 0:X.value.name)=="liquidity-create"&&((_=h==null?void 0:h.query)!=null&&_.fee)&&(we.value="",l.value="",u.value="",re.value=!0)},{immediate:!0,deep:!0}),ee(()=>[d.value,c.value,we.value,Ae.value,b.value,v.value,l.value,u.value],([a,g,m,X,_,B,ue])=>{!a||!g?(P.value="1",ne.value=!0,ae.value=!0,ye.value=!0):X?m?!_||!B?(P.value="4",ne.value=!1,ae.value=!1,ye.value=!0):ue||(P.value="5",ne.value=!1,ae.value=!1,ye.value=!1):(P.value="3",ne.value=!1,ae.value=!0,ye.value=!0):(P.value="2",ne.value=!0,ae.value=!0,ye.value=!0)},{immediate:!0}),ee(()=>P.value,a=>{Number(a)<5&&(l.value="",u.value="")});const We=a=>{var g;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((g=_e.value.tokensObj[a==null?void 0:a.address])==null?void 0:g.logo_url)||(C.value.theme==="default"?je("/image/coins/unknown.png"):je("/image/coins/sui-unknown.png"))},K=async a=>{var ke,ie,Q,be,Pe,Be,Me,qe,Fe,Ke,o,r,w,M;console.log("#####emitCurrentPrice",a),a?(we.value=a,de.value=a,Ze.value=new n(1).div(new n(a)).toString()):(we.value="",de.value="",Ze.value="");let g,m;const X=_e.value.poolConfigList;for(let k=0;k<X.length;k++){const p=X[k];if(p.token_a.address.toUpperCase()===((Q=(ie=(ke=ce)==null?void 0:ke.value)==null?void 0:ie.address)==null?void 0:Q.toUpperCase())&&p.token_b.address.toUpperCase()===((Be=(Pe=(be=ve)==null?void 0:be.value)==null?void 0:Pe.address)==null?void 0:Be.toUpperCase())){g=p.needReverse,m=p;break}else if(p.token_b.address.toUpperCase()===((Fe=(qe=(Me=ce)==null?void 0:Me.value)==null?void 0:qe.address)==null?void 0:Fe.toUpperCase())&&p.token_a.address.toUpperCase()===((r=(o=(Ke=ve)==null?void 0:Ke.value)==null?void 0:o.address)==null?void 0:r.toUpperCase())){g=p.needReverse,m=p;break}}let _=!1;await S.value.getIsSortedSymbols((w=ce.value)==null?void 0:w.address,(M=ve.value)==null?void 0:M.address)&&(_=!0);let B;console.log(_,"###changeCurrentPrice createPoolNeedReverse 289"),console.log(f.value,"####changeCurrentPrice direction.value 290"),_&&!f.value?B=!0:_&&f.value||!_&&f.value?B=!1:B=!0,console.log(B,"###changeCurrentPrice newDirect 298");const ue=D.value=="Aptos"?Ca:_a;if(d.value&&c.value&&a){const k=m?m==null?void 0:m.token_a.decimals:_?ve.value.decimals:ce.value.decimals,p=m?m==null?void 0:m.token_b.decimals:_?ce.value.decimals:ve.value.decimals,R=a&&S.value.TickMath.priceToSqrtPriceX64(B?new n(1/a):new n(a),k,p);console.log(R.toString(),"===>current_sqrt_price"),console.log(a&&a>0,"## emitCurrentPrice &&emitCurrentPrice>0");const F=a&&a>0&&S.value.TickMath.priceToSqrtPriceX64(new n(1).div(a),d.value.decimals,c.value.decimals);console.log(!B,a,"===>!newDirect"),console.log(k,p,"decimalsA,decimalsB===>");const N=a&&a>0&&S.value.TickMath.priceToTickIndex(B?new n(1).div(a):new n(a),k,p);console.log(N,"==>currentTickIndex");const L=N-ue[h.query.fee]*5,V=N+ue[h.query.fee]*5,O=S.value.TickMath.tickIndexToPrice(L,k,p).toString(),T=S.value.TickMath.tickIndexToPrice(V,k,p).toString();re.value?(b.value="0",v.value="∞"):B?(b.value=String(1/T),v.value=String(1/O),Qe.value=String(1/T),Ye.value=String(1/O)):(b.value=O,v.value=T,Qe.value=O,Ye.value=T),console.log("0518###c####createPoolFromCoin.value####",ce.value),console.log("0518###c####createPoolToCoin.value####",ve.value),console.log("0518###c####createPoolNeedReverse####",_);const J={token_a:m?m.token_a:_?ve.value:ce.value,token_b:m?m.token_b:_?ce.value:ve.value,isCreate:!0,tickSpacing:ue[h.query.fee],currentPrice:a,current_sqrt_price:R,tick_lower:L,tick_upper:V,current_tick_index:N,currentPriceReverse:Ta(String(1/a),6),reverse_current_sqrt_price:F,needReverse:g,fee:h.query.fee};i.value=J,console.log("0518###c####poolInfos####",J)}else i.value=null,b.value="",v.value=""},Ie=()=>{re.value=!re.value,K(i.value.currentPrice)},ze=a=>{console.log(a,"####0731 priceRangeChangeMin"),re.value?(re.value=!1,K(i.value.currentPrice)):b.value=a},pe=a=>{re.value?(re.value=!1,K(i.value.currentPrice)):a=="0"?v.value="∞":v.value=a},Xe=()=>{var g,m;console.log(i.value,"==>createPoolInfo.value"),f.value=!f.value;const a=d.value;d.value=c.value,c.value=a,i.value&&(K(Aa(new n(1).div(i.value.currentPrice).toString(),(m=(g=c)==null?void 0:g.value)==null?void 0:m.decimals)),A.value?l.value=u.value:u.value=l.value),console.log(f.value,"####toggle direction.value")};pa(()=>{Ia()});const Ge=La(a=>{console.log("🚀 ~ file: create.vue:514 ~ updateDebouncedValue ~ value:",a),K(a)},500),W=$(""),He=a=>{const g=f.value?c.value.decimals:d.value.decimals,m=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${g}})?).*$`),X=a.target.value.replace(/,/g,"").replace(m,"$1");Ge(X)},$e=a=>{var be;const g=a.target.selectionStart,m=f.value?c.value.decimals:d.value.decimals,X=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${m}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",a.target.value);let _=a.target.value.replace(/,/g,"").replace(X,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",_);let B=_.includes(".")&&String(Se(_))==="0"?_:String(Se(_));const ue=Zo(a.target.value),ke=Zo(B),ie=ke.length-ue.length;let Q=g+ie;if((be=a==null?void 0:a.inputType)!=null&&be.includes("delete")&&ie>0&&g===ke[ke.length-1]){const Pe=a.target.value.slice(0,g-1)+a.target.value.slice(g);B=String(Se(Pe.replace(/,/g,""))),Q=Q-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",B),W.value=B,setTimeout(()=>{a.target.setSelectionRange(Q<0?0:Q,Q<0?0:Q)},0)};return ee(()=>we.value,a=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",a);const g=a!=null&&a.includes(".")&&String(Se(a))==="0"?a:String(Se(a));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",g),g!==W.value&&(W.value=g)},{immediate:!0}),{amountLock:ye,currentStep:P,coinAmount:G,pricerange:I,fromCoin:d,toCoin:c,fee:Ae,direct:E,getCoinIcon:We,isSelectFullRange:me,store:C,initPrice:we,inputPriceLock:ne,specifyPriceLock:ae,changeCurrentPrice:K,minPrice:b,maxPrice:v,defaultMinPrice:Qe,defaultMaxPrice:Ye,clickFullRange:Ie,createPoolInfo:i,isFullRange:re,priceRangeChangeMin:ze,priceRangeChangeMax:pe,fromCoinAmount:l,toggle:Xe,showFromCoinLock:Z,showToCoinLock:x,inputChange:He,currentPrice:de,importIcon:je,formattedValue:W,handleInput:$e}}});const y=e=>(aa("data-v-b337b250"),e=e(),ta(),e),Xa={class:"create-pool-container"},Ga={class:"create-pool-top"},Ha={class:"progress-text"},Ka=y(()=>t("span",null,"1",-1)),Ja=y(()=>t("div",{class:"text"},"Select Tokens",-1)),Qa=[Ka,Ja],Ya=y(()=>t("svg",{class:"icon icon-up","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_descending_nor"})],-1)),Za=y(()=>t("span",null,"2",-1)),xa=y(()=>t("div",{class:"text"},"Select Fee Tier",-1)),et=[Za,xa],ot=y(()=>t("svg",{class:"icon icon-up","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_descending_nor"})],-1)),at=y(()=>t("span",null,"3",-1)),tt=y(()=>t("div",{class:"text"}," Set Initial Price",-1)),lt=[at,tt],nt=y(()=>t("svg",{class:"icon icon-up","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_descending_nor"})],-1)),ut=y(()=>t("span",null,"4",-1)),it=y(()=>t("div",{class:"text"},"Select Price Range",-1)),st=[ut,it],rt=y(()=>t("svg",{class:"icon icon-up","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon_descending_nor"})],-1)),ct=y(()=>t("span",null,"5",-1)),vt=y(()=>t("div",{class:"text"},"Confirm Liquidity",-1)),dt=[ct,vt],mt={class:"create-pool-bottom"},pt={class:"bottom-left"},ft={class:"title"},gt=y(()=>t("div",{class:"left"},"Set Initial Price",-1)),kt={class:"right"},bt={key:0,class:"token-box"},ht=y(()=>t("div",null,[t("svg",{class:"icon icon-up","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),wt=y(()=>t("div",null,[t("svg",{class:"icon icon-down","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Ct=[ht,wt],_t={class:"content top-content"},yt=y(()=>t("div",{class:"top"},[t("span",null,"💡"),t("span",null,"Please set an initial price for this new pool to start.")],-1)),St={class:"bottom"},Nt={class:"input-div"},Pt={key:0,class:"lock"},Tt={class:"title"},At=y(()=>t("div",{class:"left"},"Set Price Range",-1)),It={class:"right"},qt={key:0,"aria-hidden":"true"},Rt=y(()=>t("use",{"xlink:href":"#icon-icon_sel"},null,-1)),Lt=[Rt],$t=y(()=>t("span",null,"Full Range",-1)),Bt={class:"content bottom-content"},Mt=y(()=>t("span",null,"💡",-1)),Ft=y(()=>t("span",null,"Please specify a price range that you want to provide your liquidity within.",-1)),Ot=[Mt,Ft],Dt={class:"bottom"},Ut={class:"set-price-box"},Vt={key:0,class:"lock"},jt={key:1,class:"create-pool-warning"},Et={key:2,class:"position-tips"},Wt=["src"],zt={class:"error"},Xt={class:"bottom-right"};function Gt(e,s,ne,ae,me,G){var q,C;const P=ba,E=sa,I=ra,h=Ee("CreatePoolRight"),H=fa("image");return j(),le("div",Xa,[t("div",Ga,[t("div",Ha,[t("div",{class:he(["row",Number(e.currentStep)>=1&&e.fromCoin&&e.toCoin?"color-text":""])},Qa,2),Ya,t("div",{class:he(["row",Number(e.currentStep)>=2&&e.fee?"color-text":""])},et,2),ot,t("div",{class:he(["row",Number(e.currentStep)>=3&&e.initPrice?"color-text":""])},lt,2),nt,t("div",{class:he(["row",Number(e.currentStep)>=4&&e.minPrice&&e.maxPrice?"color-text":""])},st,2),rt,t("div",{class:he(["row",Number(e.currentStep)>=5&&e.fromCoinAmount?"color-text":""])},dt,2)])]),t("div",mt,[t("div",pt,[t("div",ft,[gt,t("div",kt,[e.fromCoin&&e.toCoin?(j(),le("div",bt,[ga(t("img",null,null,512),[[H,(q=e.fromCoin)==null?void 0:q.logo_url]]),t("span",null,Ne((C=e.fromCoin)==null?void 0:C.symbol),1),t("div",{class:"icon-change",onClick:s[0]||(s[0]=(...z)=>e.toggle&&e.toggle(...z))},Ct)])):oe("",!0)])]),t("div",_t,[yt,t("div",St,[t("div",Nt,[Ce(P,{value:e.formattedValue,type:"text",placeholder:"0.0",onChange:e.inputChange,onInput:e.handleInput},null,8,["value","onChange","onInput"]),t("span",null,Ne(e.toCoin&&e.toCoin.symbol)+" per "+Ne(e.fromCoin&&e.fromCoin.symbol),1)]),e.inputPriceLock?(j(),le("div",Pt,[Ce(E)])):oe("",!0)])]),t("div",Tt,[At,t("div",It,[t("div",{class:he(["radio",e.isFullRange?"active-radio":""]),onClick:s[1]||(s[1]=(...z)=>e.clickFullRange&&e.clickFullRange(...z))},[e.isFullRange?(j(),le("svg",qt,Lt)):oe("",!0)],2),$t])]),t("div",Bt,[t("div",{class:he(["top",e.specifyPriceLock?"":"no-border"])},Ot,2),t("div",Dt,[t("div",Ut,[Ce(I,{min:e.minPrice,max:e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,direct:e.direct,"default-min-price":e.defaultMinPrice,"default-max-price":e.defaultMaxPrice,"pool-info":e.createPoolInfo,loading:!1,"current-price-tab":"custom",onOnChangeMinPrice:e.priceRangeChangeMin,onOnChangeMaxPrice:e.priceRangeChangeMax},null,8,["min","max","from-coin","to-coin","direct","default-min-price","default-max-price","pool-info","onOnChangeMinPrice","onOnChangeMaxPrice"])]),e.specifyPriceLock?(j(),le("div",Vt,[Ce(E)])):oe("",!0),Number(e.currentStep)>=4&&(e.showFromCoinLock||e.showToCoinLock)&&Number(e.maxPrice)>Number(e.minPrice)?(j(),le("div",jt," To create a new pool, the initial price you set must be within your price range. ")):oe("",!0),Number(e.currentStep)>=4&&Number(e.minPrice)>Number(e.maxPrice)?(j(),le("div",Et,[t("img",{src:("importIcon"in e?e.importIcon:ka(je))("/image/icon-tips-error@2x.png"),alt:""},null,8,Wt),t("p",zt,Ne(e.$t("tips.positionError")),1)])):oe("",!0)])])]),t("div",Xt,[Ce(h,{"create-pool-info":e.createPoolInfo,onToggle:e.toggle},null,8,["create-pool-info","onToggle"])])])])}const Al=oa(za,[["render",Gt],["__scopeId","data-v-b337b250"]]);export{Al as default};
