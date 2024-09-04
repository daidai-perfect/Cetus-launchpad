import{_ as ia,a as Qo,b as Yo,c as ca,d as va}from"./new-liquidity-title.d8ae0c33.js";import{i as Ee}from"./import-icon.de3e6c66.js";import{a as Zo,m as U,r as B,E as xo,l as da,D as oe,a1 as ma,a2 as Ve,e as ea,M as oa,o as N,f as j,i as ge,h as t,x as D,v as _e,c as Be,w as Ho,B as pa,j as Pe,p as aa,k as ta,b as fa,C as ga,q as ba,H as ka,z as Se,t as Ca,u as ha,I as wa}from"./entry.431efe71.js";/* empty css              */import{a as la,u as na,b as ua}from"./pool.99bcacdb.js";import{a as ya}from"./new-add-or-create.fc41417d.js";import{_ as Sa,a as Na,s as Pa}from"./poolFee.5fe8fce7.js";import{u as Ta,b as je,c as ra}from"./index.3f649e82.js";import{s as Xo,b as Te,c as Go,p as Jo,a as _a,d as Aa,x as Ko}from"./index.5e61be46.js";import"./decimal.a2826370.js";import{amountLock as Ne,fromCoinAmount as l,toCoinAmount as u,fromCoin as m,toCoin as v,showFromCoinLock as x,showToCoinLock as ee,fixedFromCoin as q,createPoolInfo as s,minPrice as k,maxPrice as d,currentPriceReverse as Ye,currentPrice as ce,initPrice as he,direction as b,createPoolFromCoin as se,createPoolToCoin as ie,isFullRange as re,resetData as qa,defaultMinPrice as Ke,defaultMaxPrice as Qe}from"./create-pool-data.bfe4fed8.js";import{D as n}from"./decimal.765d8738.js";import{_ as Ra,a as Ia}from"./icon-Add-Liquidity_2x.0acb06cb.js";import{u as $a}from"./useDebounceFunction.47f0ec84.js";import{_ as La}from"./icon-selected_3x.873560ed.js";import"./img-lock_2x.a28135f4.js";import"./lock.3614665e.js";import"./index.a86a85b0.js";import"./token-warning.2795a8d7.js";/* empty css              *//* empty css              */import"./swap-setting.1f0b49c7.js";import"./icon-error_2x.4e9fd9ee.js";import"./status-block.e611397b.js";/* empty css              */import"./notifi.ea615629.js";import"./useWhale.9dc47b1a.js";const Ba=Zo({components:{NewLiquidityTile:ia,NewLiquidityDepositRatio:Qo},setup(e,r){const ne=Ta(),ae=la(),ve=U(()=>ae),G=U(()=>ve.value.chainName),P=U(()=>ne),X=B(!1);B(),B(),B(),B(!1);const T=xo(),{t:C,locale:K}=da(),_=U(()=>G.value?ua(G.value):{}),Q=na(),i=U(()=>Q),we=U(()=>ve.value.theme),M=U(()=>P.value.assets&&m.value&&P.value.assets[m.value.address]?Jo(P.value.assets[m.value.address].balance,m.value.decimals):"0"),S=U(()=>P.value.assets&&v.value&&P.value.assets[v.value.address]?Jo(P.value.assets[v.value.address].balance,v.value.decimals):"0"),Ie=o=>{o==="fromCoin"?(q.value=!0,G.value==="Aptos"?l.value=Number(M.value)>0?m.value.symbol=="APT"?new n(Number(M.value)).sub(new n(.1)).lt(new n(0))?"0":new n(Number(M.value)).sub(new n(.1)).toString():String(M.value):"":l.value=Number(M.value)>0?m.value.symbol=="SUI"?new n(Number(M.value)).sub(new n(.05)).lt(new n(0))?"0":new n(Number(M.value)).sub(new n(.05)).toString():String(M.value):""):(q.value=!1,G.value==="Aptos"?u.value=Number(S.value)>0?v.value.symbol=="APT"?new n(Number(S.value)).sub(new n(.1)).lt(new n(0))?"0":new n(Number(S.value)).sub(new n(.1)).toString():String(S.value):"":u.value=Number(S.value)>0?v.value.symbol=="SUI"?new n(Number(S.value)).sub(new n(.05)).lt(new n(0))?"0":new n(Number(S.value)).sub(new n(.05)).toString():String(S.value):"")},We=o=>{o==="fromCoin"?(q.value=!0,l.value=Number(M.value)>0?Xo(new n(Number(M.value)).div(2).toString(),m.value.decimals).toString():""):(q.value=!1,u.value=Number(S.value)>0?Xo(new n(Number(S.value)).div(2).toString(),v.value.decimals).toString():"")};oe(()=>[i.value.tokensObj,T.query],async([o])=>{if(o){const c=o;if(T&&T.query&&T.query.fromCoin&&T.query.fromCoin){const h=c[T.query.fromCoin]||await _.value.getTokenBySymbol(c,T.query.fromCoin);m.value=h,se.value=h}if(T&&T.query&&T.query.toCoin&&T.query.toCoin){const h=c[T.query.toCoin]||await _.value.getTokenBySymbol(c,T.query.toCoin);v.value=h,ie.value=h}}},{immediate:!0,deep:!0});const ke=B("--"),ue=U(()=>ve.value.slippage),ze=B(),de=async()=>{if(!k.value&&!d.value)return!1;if(!l.value&&!u.value&&!k.value&&!d.value)return;const o=s.value||{};if(Go(o))return;const{TickUtil:c,TickMath:h,getNearestTickByTick:F}=_.value,A=o==null?void 0:o.token_a.decimals,V=o==null?void 0:o.token_b.decimals;let w,p,R,$,O,E,L=o.current_tick_index,W;if(o.token_a.address.toLowerCase()===m.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===v.value.address.toLowerCase()?W=!0:W=!1,k.value==="0"&&d.value==="∞")R=c.getMinIndex(Number(o.tickSpacing)),$=c.getMaxIndex(Number(o.tickSpacing));else{W?(w=Number(k.value),p=Number(d.value)):(w=new n(1).div(d.value).toString(),p=new n(1).div(k.value).toString());try{O=w==0?-443636:h.priceToTickIndex(new n(w),A,V)}catch{O=-443636}try{E=h.priceToTickIndex(new n(p),A,V)}catch{E=443636}R=F(O,Number(o.tickSpacing)),$=F(E,Number(o.tickSpacing))}if(d.value!=="∞"&&R>=$){x.value=!0,l.value="",ee.value=!0,u.value="";return}if(L==$||L==R){x.value=!0,ee.value=!0;return}if(d.value==="∞"||L>=R&&L<=$){x.value=!1,ee.value=!1;let z;if(l.value||u.value){if(q.value){const Re=new n(l.value).mul(Math.pow(10,m.value.decimals)).toString();z=new je(Re)}else{const Re=new n(u.value).mul(Math.pow(10,v.value.decimals)).toString();z=new je(Re)}const{liquidityAmount:H,tokenMaxA:le,tokenMaxB:pe,tokenMaxAOrigin:Ue,tokenMaxBOrigin:De}=_.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:o.token_a,tokenB:o.token_b,lowerTick:R,upperTick:$,coinAmount:z,iscoinA:W?q.value:!q.value,roundUp:!0,slippage:Number(ue.value)/100,curSqrtPrice:new je(o.current_sqrt_price)});ze.value={liquidityAmount:H,tokenMaxA:le,tokenMaxB:pe,tokenMaxAOrigin:Ue,tokenMaxBOrigin:De},W?q.value?u.value=Number(pe)>0?pe:"":l.value=Number(le)>0?le:"":q.value?u.value=le:l.value=pe}}else L>$?(x.value=!0,ee.value=!0):L<R?(x.value=!0,ee.value=!0):(x.value=!0,l.value="",ee.value=!0,u.value="")};oe(()=>he.value,o=>{o&&de()},{immediate:!0}),oe(l,(o,c)=>{o==""&&q.value&&(u.value=""),o&&q.value&&!X.value&&de()}),oe(u,(o,c)=>{o==""&&!q.value&&(l.value=""),o&&!q.value&&!X.value&&de()}),oe(()=>re.value,o=>{de()},{immediate:!0});const He=o=>{const c=o.replace(/[^\d.]/g,""),h="$"+Te(c);X.value=!0,ke.value=h,o>0?Me():(l.value="",u.value="")};oe([k,d],([o,c])=>{Number(o)!==0&&Number(c)!==0&&!X.value?de():Number(o)!==0&&Number(c)!==0&&X.value?Me():de()},{immediate:!0}),oe(()=>{var o;return(o=s)==null?void 0:o.value},o=>{de()},{deep:!0});const Xe=()=>{const o=Y.value&&Y.value[m.value.address]&&Y.value[m.value.address].price,c=Y.value&&Y.value[v.value.address]&&Y.value[v.value.address].price;if(o&&c){const h=new n(l.value>0?l.value:0).mul(o),F=new n(u.value>0?u.value:0).mul(c),A=h.add(F).toNumber();ke.value=A>0&&A<.01?"$<0.01":"$"+Te(A,2)}else ke.value="--"};oe(()=>[l.value,u.value,X.value],([o,c,h])=>{(o||c)&&!h?Xe():(!o||!c)&&!h&&(ke.value="--")},{immediate:!0});const Y=U(()=>i.value.RATES),Ae=B(),Me=async()=>{if(!k.value&&!d.value)return!1;if(!l.value&&!u.value&&!k.value&&!d.value)return;const o=s.value||{};if(Go(o))return;const{TickUtil:c,TickMath:h,getNearestTickByTick:F}=_.value,A=o==null?void 0:o.token_a.decimals,V=o==null?void 0:o.token_b.decimals;let w,p,R,$,O,E,L;if(o.token_a.address.toLowerCase()===m.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===v.value.address.toLowerCase()?L=!0:L=!1,k.value==="0"&&d.value==="∞")R=c.getMinIndex(Number(o.tickSpacing)),$=c.getMaxIndex(Number(o.tickSpacing));else{L?(w=Number(k.value),p=Number(d.value)):(w=new n(1).div(d.value).toString(),p=new n(1).div(k.value).toString());try{O=w==0?-443636:h.priceToTickIndex(new n(w),A,V)}catch{O=-443636}try{E=h.priceToTickIndex(new n(p),A,V)}catch{E=443636}R=F(O,Number(o.tickSpacing)),$=F(E,Number(o.tickSpacing))}const W=Y.value[o==null?void 0:o.token_a.address].price,z=Y.value[o==null?void 0:o.token_b.address].price;try{const{amountA:H,amountB:le,tokenAmountsInfo:pe}=await _.value.estCoinAmountsFromTotalAmount({lowerTick:R,upperTick:$,decimalsA:A,decimalsB:V,curSqrtPrice:new je(o.current_sqrt_price),totalAmount:ke.value,tokenPriceA:W,tokenPriceB:z});Ae.value=pe,o.needReverse?b.value?(l.value=H,u.value=le):(l.value=le,u.value=H):(l.value=H,u.value=le)}catch(H){console.log(H,"e===>")}},Ge=U(()=>{var h,F,A,V,w,p;const o=(A=Y.value[(F=(h=m)==null?void 0:h.value)==null?void 0:F.address])==null?void 0:A.price,c=(p=Y.value[(w=(V=v)==null?void 0:V.value)==null?void 0:w.address])==null?void 0:p.price;return!!(o&&c)}),a=()=>{r.emit("toggle")},f=B(!1),g=U(()=>{var o;return!m.value||!v.value?C("modal.selectTokenModalTitle"):!((o=T.query)!=null&&o.fee)&&ra[G.value].hasCreatePool?"Select fee tier":!Number(l.value)&&!Number(u.value)?C("button.enterAmount"):Number(l.value)>Number(M.value)?C("button.insufficientBalance",{name:m.value.symbol}):Number(u.value)>Number(S.value)?C("button.insufficientBalance",{name:v.value.symbol}):d.value!=="∞"&&Number(k.value)>=Number(d.value)?C("newAdd.invalidRange"):C("newAdd.preview")}),J=o=>{const c=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,2})?).*$");o.target.value=o.target.value.replace(c,"$1")},y=U(()=>{var o;return!!(!l.value&&!u.value||Number(l.value)>Number(M.value)||Number(u.value)>Number(S.value)||g.value!==C("newAdd.preview")||!s.value&&!((o=s.value)!=null&&o.currentPrice)||Number(l.value)<=0&&Number(u.value)<=0||x.value||ee.value)}),{setTransactionTxid:I,setTransactionDesc:me,setIsShowWaiting:te,setIsShowSuccess:Ce,setIsShowRejected:Z,setPositiomNum:ye}=ae,qe=()=>{G.value=="Sui"&&Oe()},{$notify:Fe}=ma(),$e=B(!1),Oe=async()=>{var W,z,H,le,pe,Ue,De,Re,Ze,xe,eo,oo,ao,to,lo,no,uo,ro,so,io,co,vo,mo,po,fo,go,bo,ko,Co,ho,wo,yo,So,No,Po,To,_o,Ao,qo,Ro,Io,$o,Lo,Bo,Mo,Fo,Oo,Uo,Do,Vo,jo,Eo,Wo,zo;f.value=!1;let o=!1;_.value.getIsSortedSymbols(se.value.address,ie.value.address)&&(o=!0),I("");const c=x.value?"":`${l.value} ${(W=m.value)==null?void 0:W.symbol}`,h=ee.value?"":`${u.value} ${(z=v.value)==null?void 0:z.symbol}`;me(C("tips.increaseLiquiditySuccess",{from:!o&&!((le=(H=s)==null?void 0:H.value)!=null&&le.needReverse)||o&&((Ue=(pe=s)==null?void 0:pe.value)!=null&&Ue.needReverse)?c:h,and:!x.value&&!ee.value?"and":"",to:!o&&!((Re=(De=s)==null?void 0:De.value)!=null&&Re.needReverse)||o&&((xe=(Ze=s)==null?void 0:Ze.value)!=null&&xe.needReverse)?h:c})),te(!0);let F="",A="",V="",w="",p="",R="",$=0,O=0,E=!1,L;if(o||(oo=(eo=s)==null?void 0:eo.value)!=null&&oo.needReverse){const fe=o&&!((to=(ao=s)==null?void 0:ao.value)!=null&&to.needReverse);F=fe?(io=(so=(ro=s)==null?void 0:ro.value)==null?void 0:so.token_b)==null?void 0:io.address:(uo=(no=(lo=s)==null?void 0:lo.value)==null?void 0:no.token_a)==null?void 0:uo.address,A=fe?(go=(fo=(po=s)==null?void 0:po.value)==null?void 0:fo.token_a)==null?void 0:go.address:(mo=(vo=(co=s)==null?void 0:co.value)==null?void 0:vo.token_b)==null?void 0:mo.address,V=fe?(yo=(wo=(ho=s)==null?void 0:ho.value)==null?void 0:wo.token_b)==null?void 0:yo.decimals:(Co=(ko=(bo=s)==null?void 0:bo.value)==null?void 0:ko.token_a)==null?void 0:Co.decimals,w=fe?(Ao=(_o=(To=s)==null?void 0:To.value)==null?void 0:_o.token_a)==null?void 0:Ao.decimals:(Po=(No=(So=s)==null?void 0:So.value)==null?void 0:No.token_b)==null?void 0:Po.decimals,(Ro=(qo=s)==null?void 0:qo.value)!=null&&Ro.needReverse?(p=b.value?l.value:u.value,R=b.value?u.value:l.value,$=b.value?Number(k.value):1/Number(d.value),O=b.value?Number(d.value):1/Number(k.value),E=b.value?q.value:!q.value,L=b.value?ce.value:1/Number(ce.value)):(p=b.value?u.value:l.value,R=b.value?l.value:u.value,$=b.value?1/Number(d.value):Number(k.value),O=b.value?1/Number(k.value):Number(d.value),E=b.value?!q.value:q.value,L=b.value?1/Number(ce.value):ce.value)}else F=(Lo=($o=(Io=s)==null?void 0:Io.value)==null?void 0:$o.token_a)==null?void 0:Lo.address,A=(Fo=(Mo=(Bo=s)==null?void 0:Bo.value)==null?void 0:Mo.token_b)==null?void 0:Fo.address,V=(Do=(Uo=(Oo=s)==null?void 0:Oo.value)==null?void 0:Uo.token_a)==null?void 0:Do.decimals,w=(Eo=(jo=(Vo=s)==null?void 0:Vo.value)==null?void 0:jo.token_b)==null?void 0:Eo.decimals,p=b.value?l.value:u.value,R=b.value?u.value:l.value,$=b.value?Number(k.value):1/Number(d.value),O=b.value?Number(d.value):1/Number(k.value),E=b.value?q.value:!q.value,L=b.value?ce.value:1/Number(ce.value);try{console.log("0501###toCreatePool###params###",{coinTypeA:F,coinTypeB:A,decimalsA:V,decimalsB:w,amountA:p,amountB:R,minPrice:$,maxPrice:O,fix_amount_a:E,tick_spacing:Number(s.value.tickSpacing),slippage:Number(ue.value)/100,price:L});const fe=await _.value.getCreatPoolTransactionPayload({coinTypeA:F,coinTypeB:A,decimalsA:V,decimalsB:w,amountA:p,amountB:R,minPrice:k.value=="0"&&d.value=="∞"?"0":$,maxPrice:k.value=="0"&&d.value=="∞"?"∞":O,fix_amount_a:E,tick_spacing:Number(s.value.tickSpacing),slippage:Number(ue.value)/100,price:L}),sa=await _.value.signAndExecuteTransactionBlock(P.value.currentWallet,fe),Le=_.value.handleTx(sa);if(Le&&Le.hash){I(Le.hash),te(!1),Ce(!0);const Je={title:"Created pool",desc:"Pool created successfully ",hash:Le.hash,tit:"Pool Created",icon:"icon-icon-Position-Created",tokenInfo:{tokena:`${(Wo=m.value)==null?void 0:Wo.address}`,numa:x.value?"":`- ${l.value}`,logoa:i.value.tokensObj&&m.value&&m.value.address&&i.value.tokensObj[m.value.address]&&i.value.tokensObj[m.value.address].logoURI,tokenb:`${(zo=v.value)==null?void 0:zo.address}`,numb:ee.value?"":`- ${u.value}`,logob:i.value.tokensObj&&v.value&&v.value.address&&i.value.tokensObj[v.value.address]&&i.value.tokensObj[v.value.address].logoURI},text:"Pool created successfully"};G.value!=="Aptos"&&(Je.res=Le.res),_.value.showTransitionPending(Je),(await _.value.watchTransaction(Je,!0)).status&&(Ce(!1),$e.value=!0,setTimeout(()=>{Q.setPoolConfigList(G.value,ve.value.filterCoinsObj),_.value.getAccount(P.value.address)},1e3)),ye()}else te(!1),Z(!0);l.value="",u.value=""}catch(fe){console.log("0407###createPool###error##",String(fe)),String(fe).indexOf('Some("create_pool_internal") }, 1')>-1&&Fe.error({icon:Ve("svg",{class:{icon:!0},"aria-hidden":!0},[Ve("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:Ve("div",{class:"notification-title"},[Ve("span",{innerHTML:"Pool already exists"},null)]),duration:4.5,description:"Something went wrong",class:"ant-notification-copy ant-notification-error"}),f.value=!1,Q.setPoolConfigList(G.value,ve.value.filterCoinsObj),l.value="",u.value="",te(!1),Z(!0)}};return{amountLock:Ne,wallet:P,inputChange:J,fromCoinAmount:l,toCoinAmount:u,fromCoin:m,toCoin:v,maxBtnSelect:Ie,halfBtnSelect:We,showFromCoinLock:x,showToCoinLock:ee,fromCoinBlance:M,toCoinBlance:S,fixedFromCoin:q,isInputTotalAmount:X,toggle:a,theme:we,liquidityTotalAmount:ke,createPoolInfo:s,minPrice:k,maxPrice:d,currentPriceReverse:Ye,currentPrice:ce,onInput:He,initPrice:he,isShowtotalAmount:Ge,direction:b,isShowLiquidityModal:f,createPoolBtnText:g,createPoolBtnDisabled:y,toCreatePool:qe,isCreateSuccess:$e}}});const Ma=e=>(aa("data-v-ea4e809b"),e=e(),ta(),e),Fa={class:"create-pool-right"},Oa={class:"card-container"},Ua={key:0,class:"lock"},Da={class:"card-item"},Va={class:"card-item"},ja={key:0,class:"total-amount"},Ea=Ma(()=>t("span",null,"Total Amount",-1));function Wa(e,r,ne,ae,ve,G){const P=oa("NewLiquidityTile"),X=Yo,T=ca,C=Qo,K=ya,_=pa,Q=Sa;return N(),j("div",Fa,[ge(P),t("div",Oa,[e.amountLock||e.showFromCoinLock||e.showToCoinLock?(N(),j("div",Ua,[ge(X)])):D("",!0),t("div",Da,[ge(T,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":r[0]||(r[0]=i=>e.fromCoinAmount=i),"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:r[1]||(r[1]=i=>e.maxBtnSelect("fromCoin")),onOnHalf:r[2]||(r[2]=i=>e.halfBtnSelect("fromCoin")),onOnInput:r[3]||(r[3]=i=>{e.fromCoinAmount=i,e.fixedFromCoin=!0,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),t("div",Va,[ge(T,{modelValue:e.toCoinAmount,"onUpdate:modelValue":r[4]||(r[4]=i=>e.toCoinAmount=i),"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direct":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:r[5]||(r[5]=i=>e.maxBtnSelect("toCoin")),onOnHalf:r[6]||(r[6]=i=>e.halfBtnSelect("toCoin")),onOnInput:r[7]||(r[7]=i=>{e.toCoinAmount=i,e.fixedFromCoin=!1,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme=="default"?(N(),j("img",{key:1,class:"add",src:Ra,alt:"",onClick:r[8]||(r[8]=(...i)=>e.toggle&&e.toggle(...i))})):D("",!0),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme!=="default"?(N(),j("img",{key:2,class:"add",src:Ia,alt:"",onClick:r[9]||(r[9]=(...i)=>e.toggle&&e.toggle(...i))})):D("",!0)]),e.isShowtotalAmount?(N(),j("div",ja,[Ea,t("span",null,_e(e.liquidityTotalAmount),1)])):D("",!0),e.initPrice?(N(),Be(C,{key:1,"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"fixed-from-coin":e.fixedFromCoin,"is-input-total-amount":e.isInputTotalAmount,"create-pool-info":e.createPoolInfo,"min-price":e.minPrice,"max-price":e.maxPrice,"current-price-tab":"custom","current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse},null,8,["from-coin","to-coin","from-coin-amount","to-coin-amount","fixed-from-coin","is-input-total-amount","create-pool-info","min-price","max-price","current-price","current-price-reverse"])):D("",!0),e.isShowLiquidityModal?(N(),Be(K,{key:2,"pool-info":e.createPoolInfo,title:e.$t("newAdd.preview"),"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"from-coin":e.fromCoin,"to-coin":e.toCoin,"fixed-from-coin":e.fixedFromCoin,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"current-price-tab":"custom","min-price":e.minPrice,"max-price":e.maxPrice,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"current-direct":e.direction,"is-increase":!1,"is-create":!0,onCreatePool:e.toCreatePool,onOnClose:r[10]||(r[10]=i=>e.isShowLiquidityModal=!1)},null,8,["pool-info","title","from-coin-amount","to-coin-amount","from-coin","to-coin","fixed-from-coin","current-price","current-price-reverse","min-price","max-price","show-from-coin-lock","show-to-coin-lock","current-direct","onCreatePool"])):D("",!0),e.wallet.connected?(N(),Be(_,{key:4,class:"add-liquidity-btn",disabled:e.wallet.connected?e.createPoolBtnDisabled:!1,onClick:r[12]||(r[12]=i=>e.isShowLiquidityModal=!0)},{default:Ho(()=>[Pe(_e(e.createPoolBtnText),1)]),_:1},8,["disabled"])):(N(),Be(_,{key:3,class:"add-liquidity-btn",onClick:r[11]||(r[11]=i=>e.wallet.setIsShowWalletModal(!0))},{default:Ho(()=>[Pe(_e(e.$t("button.connectWallet")),1)]),_:1})),e.isCreateSuccess?(N(),Be(Q,{key:5,onOnClose:r[13]||(r[13]=i=>e.isCreateSuccess=!1)})):D("",!0)])}const za=ea(Ba,[["render",Wa],["__scopeId","data-v-ea4e809b"]]),Ha=Zo({components:{CreatePoolRight:za},setup(e,r){const ne=B(!0),ae=B(!0),ve=B(!0),G=B(!1),P=B("1"),X=B(!0),T=B(""),C=xo(),K=fa(),_=la(),Q=U(()=>_),i=na(),we=U(()=>i),M=U(()=>Q.value.chainName),S=U(()=>M.value?ua(M.value):{}),Ie=B("");oe(()=>[K,we.value.tokensObj],async([a,f])=>{var g,J,y;((g=K==null?void 0:K.currentRoute)==null?void 0:g.value.name)=="liquidity-create"&&f&&(m.value=we.value.tokensObj[C.query.fromCoin]||await S.value.getTokenBySymbol(f,C.query.fromCoin),v.value=we.value.tokensObj[C.query.toCoin]||await S.value.getTokenBySymbol(f,C.query.toCoin),Ie.value=C.query.fee!=="null"&&C.query.fee?C.query.fee:""),((J=K==null?void 0:K.currentRoute)==null?void 0:J.value.name)=="liquidity-create"&&((y=C==null?void 0:C.query)!=null&&y.fee)&&(he.value="",l.value="",u.value="",re.value=!0)},{immediate:!0,deep:!0}),oe(()=>[m.value,v.value,he.value,Ie.value,k.value,d.value,l.value,u.value],([a,f,g,J,y,I,me])=>{!a||!f?(P.value="1",ne.value=!0,ae.value=!0,Ne.value=!0):J?g?!y||!I?(P.value="4",ne.value=!1,ae.value=!1,Ne.value=!0):me||(P.value="5",ne.value=!1,ae.value=!1,Ne.value=!1):(P.value="3",ne.value=!1,ae.value=!0,Ne.value=!0):(P.value="2",ne.value=!0,ae.value=!0,Ne.value=!0)},{immediate:!0}),oe(()=>P.value,a=>{Number(a)<5&&(l.value="",u.value="")});const We=a=>{var f;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((f=we.value.tokensObj[a==null?void 0:a.address])==null?void 0:f.logo_url)||(Q.value.theme==="default"?Ee("/image/coins/unknown.png"):Ee("/image/coins/sui-unknown.png"))},ke=a=>{switch(a){case"1":return{top:"10%"};case"2":return{top:"29%"};case"3":return{top:"48%"};case"4":return{top:"67%"};case"5":return{top:"87%"}}};U(()=>ra[M.value].hasCreatePool);const ue=async a=>{var te,Ce,Z,ye,qe,Fe,$e,Oe,o,c,h,F,A,V;console.log("#####emitCurrentPrice",a),a?(he.value=a,ce.value=a,Ye.value=new n(1).div(new n(a)).toString()):(he.value="",ce.value="",Ye.value="");let f,g;const J=we.value.poolConfigList;for(let w=0;w<J.length;w++){const p=J[w];if(p.token_a.address.toUpperCase()===((Z=(Ce=(te=se)==null?void 0:te.value)==null?void 0:Ce.address)==null?void 0:Z.toUpperCase())&&p.token_b.address.toUpperCase()===((Fe=(qe=(ye=ie)==null?void 0:ye.value)==null?void 0:qe.address)==null?void 0:Fe.toUpperCase())){f=p.needReverse,g=p;break}else if(p.token_b.address.toUpperCase()===((o=(Oe=($e=se)==null?void 0:$e.value)==null?void 0:Oe.address)==null?void 0:o.toUpperCase())&&p.token_a.address.toUpperCase()===((F=(h=(c=ie)==null?void 0:c.value)==null?void 0:h.address)==null?void 0:F.toUpperCase())){f=p.needReverse,g=p;break}}let y=!1;await S.value.getIsSortedSymbols((A=se.value)==null?void 0:A.address,(V=ie.value)==null?void 0:V.address)&&(y=!0);let I;console.log(y,"###changeCurrentPrice createPoolNeedReverse 289"),console.log(b.value,"####changeCurrentPrice direction.value 290"),y&&!b.value?I=!0:y&&b.value||!y&&b.value?I=!1:I=!0,console.log(I,"###changeCurrentPrice newDirect 298");const me=M.value=="Aptos"?Na:Pa;if(m.value&&v.value&&a){const w=g?g==null?void 0:g.token_a.decimals:y?ie.value.decimals:se.value.decimals,p=g?g==null?void 0:g.token_b.decimals:y?se.value.decimals:ie.value.decimals,R=a&&S.value.TickMath.priceToSqrtPriceX64(I?new n(1/a):new n(a),w,p);console.log(R.toString(),"===>current_sqrt_price"),console.log(a&&a>0,"## emitCurrentPrice &&emitCurrentPrice>0");const $=a&&a>0&&S.value.TickMath.priceToSqrtPriceX64(new n(1).div(a),m.value.decimals,v.value.decimals);console.log(!I,a,"===>!newDirect"),console.log(w,p,"decimalsA,decimalsB===>");const O=a&&a>0&&S.value.TickMath.priceToTickIndex(I?new n(1).div(a):new n(a),w,p);console.log(O,"==>currentTickIndex");const E=O-me[C.query.fee]*5,L=O+me[C.query.fee]*5,W=S.value.TickMath.tickIndexToPrice(E,w,p).toString(),z=S.value.TickMath.tickIndexToPrice(L,w,p).toString();re.value?(k.value="0",d.value="∞"):I?(k.value=String(1/z),d.value=String(1/W),Ke.value=String(1/z),Qe.value=String(1/W)):(k.value=W,d.value=z,Ke.value=W,Qe.value=z),console.log("0518###c####createPoolFromCoin.value####",se.value),console.log("0518###c####createPoolToCoin.value####",ie.value),console.log("0518###c####createPoolNeedReverse####",y);const H={token_a:g?g.token_a:y?ie.value:se.value,token_b:g?g.token_b:y?se.value:ie.value,isCreate:!0,tickSpacing:me[C.query.fee],currentPrice:a,current_sqrt_price:R,tick_lower:E,tick_upper:L,current_tick_index:O,currentPriceReverse:_a(String(1/a),6),reverse_current_sqrt_price:$,needReverse:f,fee:C.query.fee};s.value=H,console.log("0518###c####poolInfos####",H)}else s.value=null,k.value="",d.value=""},ze=()=>{re.value=!re.value,ue(s.value.currentPrice)},de=a=>{console.log(a,"####0731 priceRangeChangeMin"),re.value?(re.value=!1,ue(s.value.currentPrice)):k.value=a},He=a=>{re.value?(re.value=!1,ue(s.value.currentPrice)):a=="0"?d.value="∞":d.value=a},Xe=()=>{var f,g;console.log(s.value,"==>createPoolInfo.value"),b.value=!b.value;const a=m.value;m.value=v.value,v.value=a,s.value&&(ue(Aa(new n(1).div(s.value.currentPrice).toString(),(g=(f=v)==null?void 0:f.value)==null?void 0:g.decimals)),q.value?l.value=u.value:u.value=l.value),console.log(b.value,"####toggle direction.value")};ga(()=>{qa()});const Y=$a(a=>{console.log("🚀 ~ file: create.vue:514 ~ updateDebouncedValue ~ value:",a),ue(a)},500),Ae=B(""),Me=a=>{const f=b.value?v.value.decimals:m.value.decimals,g=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${f}})?).*$`),J=a.target.value.replace(/,/g,"").replace(g,"$1");Y(J)},Ge=a=>{var ye;const f=a.target.selectionStart,g=b.value?v.value.decimals:m.value.decimals,J=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${g}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",a.target.value);let y=a.target.value.replace(/,/g,"").replace(J,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",y);let I=y.includes(".")&&String(Te(y))==="0"?y:String(Te(y));const me=Ko(a.target.value),te=Ko(I),Ce=te.length-me.length;let Z=f+Ce;if((ye=a==null?void 0:a.inputType)!=null&&ye.includes("delete")&&Ce>0&&f===te[te.length-1]){const qe=a.target.value.slice(0,f-1)+a.target.value.slice(f);I=String(Te(qe.replace(/,/g,""))),Z=Z-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",I),Ae.value=I,setTimeout(()=>{a.target.setSelectionRange(Z<0?0:Z,Z<0?0:Z)},0)};return oe(()=>he.value,a=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",a);const f=a!=null&&a.includes(".")&&String(Te(a))==="0"?a:String(Te(a));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",f),f!==Ae.value&&(Ae.value=f)},{immediate:!0}),{amountLock:Ne,currentStep:P,sliderStyle:ke,coinAmount:G,pricerange:T,fromCoin:m,toCoin:v,fee:Ie,direct:X,getCoinIcon:We,isSelectFullRange:ve,store:Q,initPrice:he,inputPriceLock:ne,specifyPriceLock:ae,changeCurrentPrice:ue,minPrice:k,maxPrice:d,defaultMinPrice:Ke,defaultMaxPrice:Qe,clickFullRange:ze,createPoolInfo:s,isFullRange:re,priceRangeChangeMin:de,priceRangeChangeMax:He,fromCoinAmount:l,toggle:Xe,showFromCoinLock:x,showToCoinLock:ee,inputChange:Me,currentPrice:ce,importIcon:Ee,formattedValue:Ae,handleInput:Ge}}});const be=e=>(aa("data-v-c4e00a4d"),e=e(),ta(),e),Xa={class:"creat-pool-container"},Ga={class:"creat-pool-left"},Ja={class:"progress"},Ka=be(()=>t("div",{class:"slider-ratio-content"},null,-1)),Qa=[Ka],Ya={class:"progress-text"},Za={key:0},xa={key:0},et={key:0},ot={key:0},at={key:0},tt={class:"creat-pool-center"},lt={class:"title"},nt=be(()=>t("div",{class:"left"},"Set Initial Price",-1)),ut={class:"right"},rt={key:0,class:"token-box"},st=be(()=>t("div",null,[t("svg",{class:"icon icon-up","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),it=be(()=>t("div",null,[t("svg",{class:"icon icon-down","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),ct=[st,it],vt={class:"content top-content"},dt=be(()=>t("div",{class:"top"},[t("span",null,"💡"),t("span",null,"Please set an initial price for this new pool to start.")],-1)),mt={class:"bottom"},pt={class:"input-div"},ft={key:0,class:"lock"},gt={class:"title"},bt=be(()=>t("div",{class:"left"},"Set Price Range",-1)),kt={class:"right"},Ct={key:0,src:La},ht=be(()=>t("span",null,"Full Range",-1)),wt={class:"content bottom-content"},yt=be(()=>t("span",null,"💡",-1)),St=be(()=>t("span",null,"Please specify a price range that you want to provide your liquidity within.",-1)),Nt=[yt,St],Pt={class:"bottom"},Tt={class:"set-price-box"},_t={key:0,class:"lock"},At={key:1,class:"create-pool-warning"},qt={key:2,class:"position-tips"},Rt=["src"],It={class:"error"},$t={class:"creat-pool-right-container"};function Lt(e,r,ne,ae,ve,G){var _,Q;const P=wa,X=Yo,T=va,C=oa("CreatePoolRight"),K=ba("image");return N(),j("div",Xa,[t("div",Ga,[t("div",Ja,[t("div",{class:"slider-ratio",style:ka(e.sliderStyle(e.currentStep))},Qa,4)]),t("div",Ya,[t("div",{class:Se(["row",Number(e.currentStep)>=1?"":"color-text"])},[Number(e.currentStep)>=1&&e.fromCoin&&e.toCoin?(N(),j("span",Za,"✓")):D("",!0),Pe(" Select Tokens ")],2),t("div",{class:Se(["row",Number(e.currentStep)>=2?"":"color-text"])},[Number(e.currentStep)>=2&&e.fee?(N(),j("span",xa,"✓")):D("",!0),Pe(" Select Fee Tier ")],2),t("div",{class:Se(["row",Number(e.currentStep)>=3?"":"color-text"])},[Number(e.currentStep)>=3&&e.initPrice?(N(),j("span",et,"✓")):D("",!0),Pe(" Set Initial Price ")],2),t("div",{class:Se(["row",Number(e.currentStep)>=4?"":"color-text"])},[Number(e.currentStep)>=4&&e.minPrice&&e.maxPrice?(N(),j("span",ot,"✓")):D("",!0),Pe(" Select Price Range ")],2),t("div",{class:Se(["row",Number(e.currentStep)>=5?"":"color-text"])},[Number(e.currentStep)>=5&&e.fromCoinAmount?(N(),j("span",at,"✓")):D("",!0),Pe(" Confirm Liquidity ")],2)])]),t("div",tt,[t("div",lt,[nt,t("div",ut,[e.fromCoin&&e.toCoin?(N(),j("div",rt,[Ca(t("img",null,null,512),[[K,(_=e.fromCoin)==null?void 0:_.logo_url]]),t("span",null,_e((Q=e.fromCoin)==null?void 0:Q.symbol),1),t("div",{class:"icon-change",onClick:r[0]||(r[0]=(...i)=>e.toggle&&e.toggle(...i))},ct)])):D("",!0)])]),t("div",vt,[dt,t("div",mt,[t("div",pt,[ge(P,{value:e.formattedValue,type:"text",placeholder:"0.0",onChange:e.inputChange,onInput:e.handleInput},null,8,["value","onChange","onInput"]),t("span",null,_e(e.toCoin&&e.toCoin.symbol)+" per "+_e(e.fromCoin&&e.fromCoin.symbol),1)]),e.inputPriceLock?(N(),j("div",ft,[ge(X)])):D("",!0)])]),t("div",gt,[bt,t("div",kt,[t("div",{class:Se(["radio",e.isFullRange?"active-radio":""]),onClick:r[1]||(r[1]=(...i)=>e.clickFullRange&&e.clickFullRange(...i))},[e.isFullRange?(N(),j("img",Ct)):D("",!0)],2),ht])]),t("div",wt,[t("div",{class:Se(["top",e.specifyPriceLock?"":"no-border"])},Nt,2),t("div",Pt,[t("div",Tt,[ge(T,{min:e.minPrice,max:e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,direct:e.direct,"default-min-price":e.defaultMinPrice,"default-max-price":e.defaultMaxPrice,"pool-info":e.createPoolInfo,loading:!1,"current-price-tab":"custom",onOnChangeMinPrice:e.priceRangeChangeMin,onOnChangeMaxPrice:e.priceRangeChangeMax},null,8,["min","max","from-coin","to-coin","direct","default-min-price","default-max-price","pool-info","onOnChangeMinPrice","onOnChangeMaxPrice"])]),e.specifyPriceLock?(N(),j("div",_t,[ge(X)])):D("",!0),Number(e.currentStep)>=4&&(e.showFromCoinLock||e.showToCoinLock)&&Number(e.maxPrice)>Number(e.minPrice)?(N(),j("div",At," To create a new pool, the initial price you set must be within your price range. ")):D("",!0),Number(e.currentStep)>=4&&Number(e.minPrice)>Number(e.maxPrice)?(N(),j("div",qt,[t("img",{src:("importIcon"in e?e.importIcon:ha(Ee))("/image/icon-tips-error@2x.png"),alt:""},null,8,Rt),t("p",It,_e(e.$t("tips.positionError")),1)])):D("",!0)])])]),t("div",$t,[ge(C,{"create-pool-info":e.createPoolInfo,onToggle:e.toggle},null,8,["create-pool-info","onToggle"])])])}const sl=ea(Ha,[["render",Lt],["__scopeId","data-v-c4e00a4d"]]);export{sl as default};
