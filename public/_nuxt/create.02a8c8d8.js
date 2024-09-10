import{_ as ia,a as Qo,b as Yo,c as ca,d as va}from"./new-liquidity-title.2c44c051.js";import{i as Ee}from"./import-icon.de3e6c66.js";import{a as Zo,m as U,r as B,L as xo,z as da,A as oe,a1 as ma,a2 as Ve,e as ea,l as oa,o as N,f as j,i as ke,h as t,G as D,x as _e,c as Be,w as Ho,B as pa,j as Pe,p as aa,k as ta,b as fa,s as ga,C as ka,N as ba,y as Se,I as Ca,u as ha,K as wa}from"./entry.5e8d3f25.js";/* empty css              */import{u as la,a as na,b as ua}from"./index.cdb0d33c.js";import{_ as ya}from"./new-add-or-create.4f2ccfe0.js";import{_ as Sa,a as Na,s as Pa}from"./poolFee.40982eac.js";import{u as Ta,b as je,c as ra}from"./index.09a244f6.js";import{b as Xo,a as Te,c as Go,p as Ko,g as _a,d as Aa,y as Jo}from"./common.fc02fb4f.js";import"./decimal.a2826370.js";import{amountLock as Ne,fromCoinAmount as l,toCoinAmount as u,fromCoin as m,toCoin as v,showFromCoinLock as x,showToCoinLock as ee,fixedFromCoin as R,createPoolInfo as s,minPrice as b,maxPrice as d,currentPriceReverse as Ye,currentPrice as ce,initPrice as he,direction as k,createPoolFromCoin as se,createPoolToCoin as ie,isFullRange as re,resetData as Ra,defaultMinPrice as Je,defaultMaxPrice as Qe}from"./create-pool-data.87914cde.js";import{D as n}from"./decimal.765d8738.js";import{_ as qa}from"./icon-Add-Liquidity_2x.4f0e88dc.js";import{_ as Ia}from"./icon-Add-Liquidity_2x.5b1f94db.js";import{u as $a}from"./useDebounceFunction.0ecd5be5.js";import"./img-lock_2x.a28135f4.js";import"./lock.95a2fd34.js";import"./index.5d7d5c35.js";import"./token-warning.a42b07fd.js";/* empty css              *//* empty css              */import"./swap-setting.19a04fa8.js";import"./icon-error_2x.74346318.js";import"./status-block.3eeb1c7d.js";import"./deposit-ratio.caa7c496.js";/* empty css              */import"./notifi.ec7a23df.js";import"./useWhale.345946f7.js";const La=Zo({components:{NewLiquidityTile:ia,NewLiquidityDepositRatio:Qo},setup(e,r){const ne=Ta(),ae=la(),de=U(()=>ae),G=U(()=>de.value.chainName),P=U(()=>ne),X=B(!1);B(),B(),B(),B(!1);const T=xo(),{t:C,locale:J}=da(),_=U(()=>G.value?ua(G.value):{}),Q=na(),i=U(()=>Q),we=U(()=>de.value.theme),M=U(()=>P.value.assets&&m.value&&P.value.assets[m.value.address]?Ko(P.value.assets[m.value.address].balance,m.value.decimals):"0"),S=U(()=>P.value.assets&&v.value&&P.value.assets[v.value.address]?Ko(P.value.assets[v.value.address].balance,v.value.decimals):"0"),Ie=o=>{o==="fromCoin"?(R.value=!0,G.value==="Aptos"?l.value=Number(M.value)>0?m.value.symbol=="APT"?new n(Number(M.value)).sub(new n(.1)).lt(new n(0))?"0":new n(Number(M.value)).sub(new n(.1)).toString():String(M.value):"":l.value=Number(M.value)>0?m.value.symbol=="SUI"?new n(Number(M.value)).sub(new n(.05)).lt(new n(0))?"0":new n(Number(M.value)).sub(new n(.05)).toString():String(M.value):""):(R.value=!1,G.value==="Aptos"?u.value=Number(S.value)>0?v.value.symbol=="APT"?new n(Number(S.value)).sub(new n(.1)).lt(new n(0))?"0":new n(Number(S.value)).sub(new n(.1)).toString():String(S.value):"":u.value=Number(S.value)>0?v.value.symbol=="SUI"?new n(Number(S.value)).sub(new n(.05)).lt(new n(0))?"0":new n(Number(S.value)).sub(new n(.05)).toString():String(S.value):"")},We=o=>{o==="fromCoin"?(R.value=!0,l.value=Number(M.value)>0?Xo(new n(Number(M.value)).div(2).toString(),m.value.decimals).toString():""):(R.value=!1,u.value=Number(S.value)>0?Xo(new n(Number(S.value)).div(2).toString(),v.value.decimals).toString():"")};oe(()=>[i.value.tokensObj,T.query],async([o])=>{if(o){const c=o;if(T&&T.query&&T.query.fromCoin&&T.query.fromCoin){const h=c[T.query.fromCoin]||await _.value.getTokenBySymbol(c,T.query.fromCoin);m.value=h,se.value=h}if(T&&T.query&&T.query.toCoin&&T.query.toCoin){const h=c[T.query.toCoin]||await _.value.getTokenBySymbol(c,T.query.toCoin);v.value=h,ie.value=h}}},{immediate:!0,deep:!0});const be=B("--"),ue=U(()=>de.value.slippage),ze=B(),me=async()=>{if(!b.value&&!d.value)return!1;if(!l.value&&!u.value&&!b.value&&!d.value)return;const o=s.value||{};if(Go(o))return;const{TickUtil:c,TickMath:h,getNearestTickByTick:F}=_.value,A=o==null?void 0:o.token_a.decimals,V=o==null?void 0:o.token_b.decimals;let w,p,q,$,O,E,L=o.current_tick_index,W;if(o.token_a.address.toLowerCase()===m.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===v.value.address.toLowerCase()?W=!0:W=!1,b.value==="0"&&d.value==="∞")q=c.getMinIndex(Number(o.tickSpacing)),$=c.getMaxIndex(Number(o.tickSpacing));else{W?(w=Number(b.value),p=Number(d.value)):(w=new n(1).div(d.value).toString(),p=new n(1).div(b.value).toString());try{O=w==0?-443636:h.priceToTickIndex(new n(w),A,V)}catch{O=-443636}try{E=h.priceToTickIndex(new n(p),A,V)}catch{E=443636}q=F(O,Number(o.tickSpacing)),$=F(E,Number(o.tickSpacing))}if(d.value!=="∞"&&q>=$){x.value=!0,l.value="",ee.value=!0,u.value="";return}if(L==$||L==q){x.value=!0,ee.value=!0;return}if(d.value==="∞"||L>=q&&L<=$){x.value=!1,ee.value=!1;let z;if(l.value||u.value){if(R.value){const qe=new n(l.value).mul(Math.pow(10,m.value.decimals)).toString();z=new je(qe)}else{const qe=new n(u.value).mul(Math.pow(10,v.value.decimals)).toString();z=new je(qe)}const{liquidityAmount:H,tokenMaxA:le,tokenMaxB:fe,tokenMaxAOrigin:Ue,tokenMaxBOrigin:De}=_.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:o.token_a,tokenB:o.token_b,lowerTick:q,upperTick:$,coinAmount:z,iscoinA:W?R.value:!R.value,roundUp:!0,slippage:Number(ue.value)/100,curSqrtPrice:new je(o.current_sqrt_price)});ze.value={liquidityAmount:H,tokenMaxA:le,tokenMaxB:fe,tokenMaxAOrigin:Ue,tokenMaxBOrigin:De},W?R.value?u.value=Number(fe)>0?fe:"":l.value=Number(le)>0?le:"":R.value?u.value=le:l.value=fe}}else L>$?(x.value=!0,ee.value=!0):L<q?(x.value=!0,ee.value=!0):(x.value=!0,l.value="",ee.value=!0,u.value="")};oe(()=>he.value,o=>{o&&me()},{immediate:!0}),oe(l,(o,c)=>{o==""&&R.value&&(u.value=""),o&&R.value&&!X.value&&me()}),oe(u,(o,c)=>{o==""&&!R.value&&(l.value=""),o&&!R.value&&!X.value&&me()}),oe(()=>re.value,o=>{me()},{immediate:!0});const He=o=>{const c=o.replace(/[^\d.]/g,""),h="$"+Te(c);X.value=!0,be.value=h,o>0?Me():(l.value="",u.value="")};oe([b,d],([o,c])=>{Number(o)!==0&&Number(c)!==0&&!X.value?me():Number(o)!==0&&Number(c)!==0&&X.value?Me():me()},{immediate:!0}),oe(()=>{var o;return(o=s)==null?void 0:o.value},o=>{me()},{deep:!0});const Xe=()=>{const o=Y.value&&Y.value[m.value.address]&&Y.value[m.value.address].price,c=Y.value&&Y.value[v.value.address]&&Y.value[v.value.address].price;if(o&&c){const h=new n(l.value>0?l.value:0).mul(o),F=new n(u.value>0?u.value:0).mul(c),A=h.add(F).toNumber();be.value=A>0&&A<.01?"$<0.01":"$"+Te(A,2)}else be.value="--"};oe(()=>[l.value,u.value,X.value],([o,c,h])=>{(o||c)&&!h?Xe():(!o||!c)&&!h&&(be.value="--")},{immediate:!0});const Y=U(()=>i.value.RATES),Ae=B(),Me=async()=>{if(!b.value&&!d.value)return!1;if(!l.value&&!u.value&&!b.value&&!d.value)return;const o=s.value||{};if(Go(o))return;const{TickUtil:c,TickMath:h,getNearestTickByTick:F}=_.value,A=o==null?void 0:o.token_a.decimals,V=o==null?void 0:o.token_b.decimals;let w,p,q,$,O,E,L;if(o.token_a.address.toLowerCase()===m.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===v.value.address.toLowerCase()?L=!0:L=!1,b.value==="0"&&d.value==="∞")q=c.getMinIndex(Number(o.tickSpacing)),$=c.getMaxIndex(Number(o.tickSpacing));else{L?(w=Number(b.value),p=Number(d.value)):(w=new n(1).div(d.value).toString(),p=new n(1).div(b.value).toString());try{O=w==0?-443636:h.priceToTickIndex(new n(w),A,V)}catch{O=-443636}try{E=h.priceToTickIndex(new n(p),A,V)}catch{E=443636}q=F(O,Number(o.tickSpacing)),$=F(E,Number(o.tickSpacing))}const W=Y.value[o==null?void 0:o.token_a.address].price,z=Y.value[o==null?void 0:o.token_b.address].price;try{const{amountA:H,amountB:le,tokenAmountsInfo:fe}=await _.value.estCoinAmountsFromTotalAmount({lowerTick:q,upperTick:$,decimalsA:A,decimalsB:V,curSqrtPrice:new je(o.current_sqrt_price),totalAmount:be.value,tokenPriceA:W,tokenPriceB:z});Ae.value=fe,o.needReverse?k.value?(l.value=H,u.value=le):(l.value=le,u.value=H):(l.value=H,u.value=le)}catch(H){console.log(H,"e===>")}},Ge=U(()=>{var h,F,A,V,w,p;const o=(A=Y.value[(F=(h=m)==null?void 0:h.value)==null?void 0:F.address])==null?void 0:A.price,c=(p=Y.value[(w=(V=v)==null?void 0:V.value)==null?void 0:w.address])==null?void 0:p.price;return!!(o&&c)}),a=()=>{r.emit("toggle")},f=B(!1),g=U(()=>{var o;return!m.value||!v.value?C("modal.selectTokenModalTitle"):!((o=T.query)!=null&&o.fee)&&ra[G.value].hasCreatePool?"Select fee tier":!Number(l.value)&&!Number(u.value)?C("button.enterAmount"):Number(l.value)>Number(M.value)?C("button.insufficientBalance",{name:m.value.symbol}):Number(u.value)>Number(S.value)?C("button.insufficientBalance",{name:v.value.symbol}):d.value!=="∞"&&Number(b.value)>=Number(d.value)?C("newAdd.invalidRange"):C("newAdd.preview")}),K=o=>{const c=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,2})?).*$");o.target.value=o.target.value.replace(c,"$1")},y=U(()=>{var o;return!!(!l.value&&!u.value||Number(l.value)>Number(M.value)||Number(u.value)>Number(S.value)||g.value!==C("newAdd.preview")||!s.value&&!((o=s.value)!=null&&o.currentPrice)||Number(l.value)<=0&&Number(u.value)<=0||x.value||ee.value)}),{setTransactionTxid:I,setTransactionDesc:pe,setIsShowWaiting:te,setIsShowSuccess:Ce,setIsShowRejected:Z,setPositiomNum:ye}=ae,Re=()=>{G.value=="Sui"&&Oe()},{$notify:Fe}=ma(),$e=B(!1),Oe=async()=>{var W,z,H,le,fe,Ue,De,qe,Ze,xe,eo,oo,ao,to,lo,no,uo,ro,so,io,co,vo,mo,po,fo,go,ko,bo,Co,ho,wo,yo,So,No,Po,To,_o,Ao,Ro,qo,Io,$o,Lo,Bo,Mo,Fo,Oo,Uo,Do,Vo,jo,Eo,Wo,zo;f.value=!1;let o=!1;_.value.getIsSortedSymbols(se.value.address,ie.value.address)&&(o=!0),I("");const c=x.value?"":`${l.value} ${(W=m.value)==null?void 0:W.symbol}`,h=ee.value?"":`${u.value} ${(z=v.value)==null?void 0:z.symbol}`;pe(C("tips.increaseLiquiditySuccess",{from:!o&&!((le=(H=s)==null?void 0:H.value)!=null&&le.needReverse)||o&&((Ue=(fe=s)==null?void 0:fe.value)!=null&&Ue.needReverse)?c:h,and:!x.value&&!ee.value?"and":"",to:!o&&!((qe=(De=s)==null?void 0:De.value)!=null&&qe.needReverse)||o&&((xe=(Ze=s)==null?void 0:Ze.value)!=null&&xe.needReverse)?h:c})),te(!0);let F="",A="",V="",w="",p="",q="",$=0,O=0,E=!1,L;if(o||(oo=(eo=s)==null?void 0:eo.value)!=null&&oo.needReverse){const ge=o&&!((to=(ao=s)==null?void 0:ao.value)!=null&&to.needReverse);F=ge?(io=(so=(ro=s)==null?void 0:ro.value)==null?void 0:so.token_b)==null?void 0:io.address:(uo=(no=(lo=s)==null?void 0:lo.value)==null?void 0:no.token_a)==null?void 0:uo.address,A=ge?(go=(fo=(po=s)==null?void 0:po.value)==null?void 0:fo.token_a)==null?void 0:go.address:(mo=(vo=(co=s)==null?void 0:co.value)==null?void 0:vo.token_b)==null?void 0:mo.address,V=ge?(yo=(wo=(ho=s)==null?void 0:ho.value)==null?void 0:wo.token_b)==null?void 0:yo.decimals:(Co=(bo=(ko=s)==null?void 0:ko.value)==null?void 0:bo.token_a)==null?void 0:Co.decimals,w=ge?(Ao=(_o=(To=s)==null?void 0:To.value)==null?void 0:_o.token_a)==null?void 0:Ao.decimals:(Po=(No=(So=s)==null?void 0:So.value)==null?void 0:No.token_b)==null?void 0:Po.decimals,(qo=(Ro=s)==null?void 0:Ro.value)!=null&&qo.needReverse?(p=k.value?l.value:u.value,q=k.value?u.value:l.value,$=k.value?Number(b.value):1/Number(d.value),O=k.value?Number(d.value):1/Number(b.value),E=k.value?R.value:!R.value,L=k.value?ce.value:1/Number(ce.value)):(p=k.value?u.value:l.value,q=k.value?l.value:u.value,$=k.value?1/Number(d.value):Number(b.value),O=k.value?1/Number(b.value):Number(d.value),E=k.value?!R.value:R.value,L=k.value?1/Number(ce.value):ce.value)}else F=(Lo=($o=(Io=s)==null?void 0:Io.value)==null?void 0:$o.token_a)==null?void 0:Lo.address,A=(Fo=(Mo=(Bo=s)==null?void 0:Bo.value)==null?void 0:Mo.token_b)==null?void 0:Fo.address,V=(Do=(Uo=(Oo=s)==null?void 0:Oo.value)==null?void 0:Uo.token_a)==null?void 0:Do.decimals,w=(Eo=(jo=(Vo=s)==null?void 0:Vo.value)==null?void 0:jo.token_b)==null?void 0:Eo.decimals,p=k.value?l.value:u.value,q=k.value?u.value:l.value,$=k.value?Number(b.value):1/Number(d.value),O=k.value?Number(d.value):1/Number(b.value),E=k.value?R.value:!R.value,L=k.value?ce.value:1/Number(ce.value);try{console.log("0501###toCreatePool###params###",{coinTypeA:F,coinTypeB:A,decimalsA:V,decimalsB:w,amountA:p,amountB:q,minPrice:$,maxPrice:O,fix_amount_a:E,tick_spacing:Number(s.value.tickSpacing),slippage:Number(ue.value)/100,price:L});const ge=await _.value.getCreatPoolTransactionPayload({coinTypeA:F,coinTypeB:A,decimalsA:V,decimalsB:w,amountA:p,amountB:q,minPrice:b.value=="0"&&d.value=="∞"?"0":$,maxPrice:b.value=="0"&&d.value=="∞"?"∞":O,fix_amount_a:E,tick_spacing:Number(s.value.tickSpacing),slippage:Number(ue.value)/100,price:L}),sa=await _.value.signAndExecuteTransactionBlock(P.value.currentWallet,ge),Le=_.value.handleTx(sa);if(Le&&Le.hash){I(Le.hash),te(!1),Ce(!0);const Ke={title:"Created pool",desc:"Pool created successfully ",hash:Le.hash,tit:"Pool Created",icon:"icon-icon-Position-Created",tokenInfo:{tokena:`${(Wo=m.value)==null?void 0:Wo.address}`,numa:x.value?"":`- ${l.value}`,logoa:i.value.tokensObj&&m.value&&m.value.address&&i.value.tokensObj[m.value.address]&&i.value.tokensObj[m.value.address].logoURI,tokenb:`${(zo=v.value)==null?void 0:zo.address}`,numb:ee.value?"":`- ${u.value}`,logob:i.value.tokensObj&&v.value&&v.value.address&&i.value.tokensObj[v.value.address]&&i.value.tokensObj[v.value.address].logoURI},text:"Pool created successfully"};G.value!=="Aptos"&&(Ke.res=Le.res),_.value.showTransitionPending(Ke),(await _.value.watchTransaction(Ke,!0)).status&&(Ce(!1),$e.value=!0,setTimeout(()=>{Q.setPoolConfigList(G.value,de.value.filterCoinsObj),_.value.getAccount(P.value.address)},1e3)),ye()}else te(!1),Z(!0);l.value="",u.value=""}catch(ge){console.log("0407###createPool###error##",String(ge)),String(ge).indexOf('Some("create_pool_internal") }, 1')>-1&&Fe.error({icon:Ve("svg",{class:{icon:!0},"aria-hidden":!0},[Ve("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:Ve("div",{class:"notification-title"},[Ve("span",{innerHTML:"Pool already exists"},null)]),duration:4.5,description:"Something went wrong",class:"ant-notification-copy ant-notification-error"}),f.value=!1,Q.setPoolConfigList(G.value,de.value.filterCoinsObj),l.value="",u.value="",te(!1),Z(!0)}};return{amountLock:Ne,wallet:P,inputChange:K,fromCoinAmount:l,toCoinAmount:u,fromCoin:m,toCoin:v,maxBtnSelect:Ie,halfBtnSelect:We,showFromCoinLock:x,showToCoinLock:ee,fromCoinBlance:M,toCoinBlance:S,fixedFromCoin:R,isInputTotalAmount:X,toggle:a,theme:we,liquidityTotalAmount:be,createPoolInfo:s,minPrice:b,maxPrice:d,currentPriceReverse:Ye,currentPrice:ce,onInput:He,initPrice:he,isShowtotalAmount:Ge,direction:k,isShowLiquidityModal:f,createPoolBtnText:g,createPoolBtnDisabled:y,toCreatePool:Re,isCreateSuccess:$e}}});const Ba=e=>(aa("data-v-53922171"),e=e(),ta(),e),Ma={class:"create-pool-right"},Fa={class:"card-container"},Oa={key:0,class:"lock"},Ua={class:"card-item"},Da={class:"card-item"},Va={key:0,class:"total-amount"},ja=Ba(()=>t("span",null,"Total Amount",-1));function Ea(e,r,ne,ae,de,G){const P=oa("NewLiquidityTile"),X=Yo,T=ca,C=Qo,J=ya,_=pa,Q=Sa;return N(),j("div",Ma,[ke(P),t("div",Fa,[e.amountLock||e.showFromCoinLock||e.showToCoinLock?(N(),j("div",Oa,[ke(X)])):D("",!0),t("div",Ua,[ke(T,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":r[0]||(r[0]=i=>e.fromCoinAmount=i),"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:r[1]||(r[1]=i=>e.maxBtnSelect("fromCoin")),onOnHalf:r[2]||(r[2]=i=>e.halfBtnSelect("fromCoin")),onOnInput:r[3]||(r[3]=i=>{e.fromCoinAmount=i,e.fixedFromCoin=!0,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),t("div",Da,[ke(T,{modelValue:e.toCoinAmount,"onUpdate:modelValue":r[4]||(r[4]=i=>e.toCoinAmount=i),"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direct":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:r[5]||(r[5]=i=>e.maxBtnSelect("toCoin")),onOnHalf:r[6]||(r[6]=i=>e.halfBtnSelect("toCoin")),onOnInput:r[7]||(r[7]=i=>{e.toCoinAmount=i,e.fixedFromCoin=!1,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme=="default"?(N(),j("img",{key:1,class:"add",src:qa,alt:"",onClick:r[8]||(r[8]=(...i)=>e.toggle&&e.toggle(...i))})):D("",!0),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme!=="default"?(N(),j("img",{key:2,class:"add",src:Ia,alt:"",onClick:r[9]||(r[9]=(...i)=>e.toggle&&e.toggle(...i))})):D("",!0)]),e.isShowtotalAmount?(N(),j("div",Va,[ja,t("span",null,_e(e.liquidityTotalAmount),1)])):D("",!0),e.initPrice?(N(),Be(C,{key:1,"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"fixed-from-coin":e.fixedFromCoin,"is-input-total-amount":e.isInputTotalAmount,"create-pool-info":e.createPoolInfo,"min-price":e.minPrice,"max-price":e.maxPrice,"current-price-tab":"custom","current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse},null,8,["from-coin","to-coin","from-coin-amount","to-coin-amount","fixed-from-coin","is-input-total-amount","create-pool-info","min-price","max-price","current-price","current-price-reverse"])):D("",!0),e.isShowLiquidityModal?(N(),Be(J,{key:2,"pool-info":e.createPoolInfo,title:e.$t("newAdd.preview"),"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"from-coin":e.fromCoin,"to-coin":e.toCoin,"fixed-from-coin":e.fixedFromCoin,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"current-price-tab":"custom","min-price":e.minPrice,"max-price":e.maxPrice,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"current-direct":e.direction,"is-increase":!1,"is-create":!0,onCreatePool:e.toCreatePool,onOnClose:r[10]||(r[10]=i=>e.isShowLiquidityModal=!1)},null,8,["pool-info","title","from-coin-amount","to-coin-amount","from-coin","to-coin","fixed-from-coin","current-price","current-price-reverse","min-price","max-price","show-from-coin-lock","show-to-coin-lock","current-direct","onCreatePool"])):D("",!0),e.wallet.connected?(N(),Be(_,{key:4,class:"add-liquidity-btn",disabled:e.wallet.connected?e.createPoolBtnDisabled:!1,onClick:r[12]||(r[12]=i=>e.isShowLiquidityModal=!0)},{default:Ho(()=>[Pe(_e(e.createPoolBtnText),1)]),_:1},8,["disabled"])):(N(),Be(_,{key:3,class:"add-liquidity-btn",onClick:r[11]||(r[11]=i=>e.wallet.setIsShowWalletModal(!0))},{default:Ho(()=>[Pe(_e(e.$t("button.connectWallet")),1)]),_:1})),e.isCreateSuccess?(N(),Be(Q,{key:5,onOnClose:r[13]||(r[13]=i=>e.isCreateSuccess=!1)})):D("",!0)])}const Wa=ea(La,[["render",Ea],["__scopeId","data-v-53922171"]]),za=Zo({components:{CreatePoolRight:Wa},setup(e,r){const ne=B(!0),ae=B(!0),de=B(!0),G=B(!1),P=B("1"),X=B(!0),T=B(""),C=xo(),J=fa(),_=la(),Q=U(()=>_),i=na(),we=U(()=>i),M=U(()=>Q.value.chainName),S=U(()=>M.value?ua(M.value):{}),Ie=B("");oe(()=>[J,we.value.tokensObj],async([a,f])=>{var g,K,y;((g=J==null?void 0:J.currentRoute)==null?void 0:g.value.name)=="liquidity-create"&&f&&(m.value=we.value.tokensObj[C.query.fromCoin]||await S.value.getTokenBySymbol(f,C.query.fromCoin),v.value=we.value.tokensObj[C.query.toCoin]||await S.value.getTokenBySymbol(f,C.query.toCoin),Ie.value=C.query.fee!=="null"&&C.query.fee?C.query.fee:""),((K=J==null?void 0:J.currentRoute)==null?void 0:K.value.name)=="liquidity-create"&&((y=C==null?void 0:C.query)!=null&&y.fee)&&(he.value="",l.value="",u.value="",re.value=!0)},{immediate:!0,deep:!0}),oe(()=>[m.value,v.value,he.value,Ie.value,b.value,d.value,l.value,u.value],([a,f,g,K,y,I,pe])=>{!a||!f?(P.value="1",ne.value=!0,ae.value=!0,Ne.value=!0):K?g?!y||!I?(P.value="4",ne.value=!1,ae.value=!1,Ne.value=!0):pe||(P.value="5",ne.value=!1,ae.value=!1,Ne.value=!1):(P.value="3",ne.value=!1,ae.value=!0,Ne.value=!0):(P.value="2",ne.value=!0,ae.value=!0,Ne.value=!0)},{immediate:!0}),oe(()=>P.value,a=>{Number(a)<5&&(l.value="",u.value="")});const We=a=>{var f;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((f=we.value.tokensObj[a==null?void 0:a.address])==null?void 0:f.logo_url)||(Q.value.theme==="default"?Ee("/image/coins/unknown.png"):Ee("/image/coins/sui-unknown.png"))},be=a=>{switch(a){case"1":return{top:"10%"};case"2":return{top:"29%"};case"3":return{top:"48%"};case"4":return{top:"67%"};case"5":return{top:"87%"}}};U(()=>ra[M.value].hasCreatePool);const ue=async a=>{var te,Ce,Z,ye,Re,Fe,$e,Oe,o,c,h,F,A,V;console.log("#####emitCurrentPrice",a),a?(he.value=a,ce.value=a,Ye.value=new n(1).div(new n(a)).toString()):(he.value="",ce.value="",Ye.value="");let f,g;const K=we.value.poolConfigList;for(let w=0;w<K.length;w++){const p=K[w];if(p.token_a.address.toUpperCase()===((Z=(Ce=(te=se)==null?void 0:te.value)==null?void 0:Ce.address)==null?void 0:Z.toUpperCase())&&p.token_b.address.toUpperCase()===((Fe=(Re=(ye=ie)==null?void 0:ye.value)==null?void 0:Re.address)==null?void 0:Fe.toUpperCase())){f=p.needReverse,g=p;break}else if(p.token_b.address.toUpperCase()===((o=(Oe=($e=se)==null?void 0:$e.value)==null?void 0:Oe.address)==null?void 0:o.toUpperCase())&&p.token_a.address.toUpperCase()===((F=(h=(c=ie)==null?void 0:c.value)==null?void 0:h.address)==null?void 0:F.toUpperCase())){f=p.needReverse,g=p;break}}let y=!1;await S.value.getIsSortedSymbols((A=se.value)==null?void 0:A.address,(V=ie.value)==null?void 0:V.address)&&(y=!0);let I;console.log(y,"###changeCurrentPrice createPoolNeedReverse 289"),console.log(k.value,"####changeCurrentPrice direction.value 290"),y&&!k.value?I=!0:y&&k.value||!y&&k.value?I=!1:I=!0,console.log(I,"###changeCurrentPrice newDirect 298");const pe=M.value=="Aptos"?Na:Pa;if(m.value&&v.value&&a){const w=g?g==null?void 0:g.token_a.decimals:y?ie.value.decimals:se.value.decimals,p=g?g==null?void 0:g.token_b.decimals:y?se.value.decimals:ie.value.decimals,q=a&&S.value.TickMath.priceToSqrtPriceX64(I?new n(1/a):new n(a),w,p);console.log(q.toString(),"===>current_sqrt_price"),console.log(a&&a>0,"## emitCurrentPrice &&emitCurrentPrice>0");const $=a&&a>0&&S.value.TickMath.priceToSqrtPriceX64(new n(1).div(a),m.value.decimals,v.value.decimals);console.log(!I,a,"===>!newDirect"),console.log(w,p,"decimalsA,decimalsB===>");const O=a&&a>0&&S.value.TickMath.priceToTickIndex(I?new n(1).div(a):new n(a),w,p);console.log(O,"==>currentTickIndex");const E=O-pe[C.query.fee]*5,L=O+pe[C.query.fee]*5,W=S.value.TickMath.tickIndexToPrice(E,w,p).toString(),z=S.value.TickMath.tickIndexToPrice(L,w,p).toString();re.value?(b.value="0",d.value="∞"):I?(b.value=String(1/z),d.value=String(1/W),Je.value=String(1/z),Qe.value=String(1/W)):(b.value=W,d.value=z,Je.value=W,Qe.value=z),console.log("0518###c####createPoolFromCoin.value####",se.value),console.log("0518###c####createPoolToCoin.value####",ie.value),console.log("0518###c####createPoolNeedReverse####",y);const H={token_a:g?g.token_a:y?ie.value:se.value,token_b:g?g.token_b:y?se.value:ie.value,isCreate:!0,tickSpacing:pe[C.query.fee],currentPrice:a,current_sqrt_price:q,tick_lower:E,tick_upper:L,current_tick_index:O,currentPriceReverse:_a(String(1/a),6),reverse_current_sqrt_price:$,needReverse:f,fee:C.query.fee};s.value=H,console.log("0518###c####poolInfos####",H)}else s.value=null,b.value="",d.value=""},ze=()=>{re.value=!re.value,ue(s.value.currentPrice)},me=a=>{console.log(a,"####0731 priceRangeChangeMin"),re.value?(re.value=!1,ue(s.value.currentPrice)):b.value=a},He=a=>{re.value?(re.value=!1,ue(s.value.currentPrice)):a=="0"?d.value="∞":d.value=a},Xe=()=>{var f,g;console.log(s.value,"==>createPoolInfo.value"),k.value=!k.value;const a=m.value;m.value=v.value,v.value=a,s.value&&(ue(Aa(new n(1).div(s.value.currentPrice).toString(),(g=(f=v)==null?void 0:f.value)==null?void 0:g.decimals)),R.value?l.value=u.value:u.value=l.value),console.log(k.value,"####toggle direction.value")};ga(()=>{Ra()});const Y=$a(a=>{console.log("🚀 ~ file: create.vue:514 ~ updateDebouncedValue ~ value:",a),ue(a)},500),Ae=B(""),Me=a=>{const f=k.value?v.value.decimals:m.value.decimals,g=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${f}})?).*$`),K=a.target.value.replace(/,/g,"").replace(g,"$1");Y(K)},Ge=a=>{var ye;const f=a.target.selectionStart,g=k.value?v.value.decimals:m.value.decimals,K=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${g}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",a.target.value);let y=a.target.value.replace(/,/g,"").replace(K,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",y);let I=y.includes(".")&&String(Te(y))==="0"?y:String(Te(y));const pe=Jo(a.target.value),te=Jo(I),Ce=te.length-pe.length;let Z=f+Ce;if((ye=a==null?void 0:a.inputType)!=null&&ye.includes("delete")&&Ce>0&&f===te[te.length-1]){const Re=a.target.value.slice(0,f-1)+a.target.value.slice(f);I=String(Te(Re.replace(/,/g,""))),Z=Z-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",I),Ae.value=I,setTimeout(()=>{a.target.setSelectionRange(Z<0?0:Z,Z<0?0:Z)},0)};return oe(()=>he.value,a=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",a);const f=a!=null&&a.includes(".")&&String(Te(a))==="0"?a:String(Te(a));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",f),f!==Ae.value&&(Ae.value=f)},{immediate:!0}),{amountLock:Ne,currentStep:P,sliderStyle:be,coinAmount:G,pricerange:T,fromCoin:m,toCoin:v,fee:Ie,direct:X,getCoinIcon:We,isSelectFullRange:de,store:Q,initPrice:he,inputPriceLock:ne,specifyPriceLock:ae,changeCurrentPrice:ue,minPrice:b,maxPrice:d,defaultMinPrice:Je,defaultMaxPrice:Qe,clickFullRange:ze,createPoolInfo:s,isFullRange:re,priceRangeChangeMin:me,priceRangeChangeMax:He,fromCoinAmount:l,toggle:Xe,showFromCoinLock:x,showToCoinLock:ee,inputChange:Me,currentPrice:ce,importIcon:Ee,formattedValue:Ae,handleInput:Ge}}});const ve=e=>(aa("data-v-19a71a37"),e=e(),ta(),e),Ha={class:"creat-pool-container"},Xa={class:"creat-pool-left"},Ga={class:"progress"},Ka=ve(()=>t("div",{class:"slider-ratio-content"},null,-1)),Ja=[Ka],Qa={class:"progress-text"},Ya={key:0},Za={key:0},xa={key:0},et={key:0},ot={key:0},at={class:"creat-pool-center"},tt={class:"title"},lt=ve(()=>t("div",{class:"left"},"Set Initial Price",-1)),nt={class:"right"},ut={key:0,class:"token-box"},rt=ve(()=>t("div",null,[t("svg",{class:"icon icon-up","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),st=ve(()=>t("div",null,[t("svg",{class:"icon icon-down","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),it=[rt,st],ct={class:"content top-content"},vt=ve(()=>t("div",{class:"top"},[t("span",null,"💡"),t("span",null,"Please set an initial price for this new pool to start.")],-1)),dt={class:"bottom"},mt={class:"input-div"},pt={key:0,class:"lock"},ft={class:"title"},gt=ve(()=>t("div",{class:"left"},"Set Price Range",-1)),kt={class:"right"},bt={key:0,"aria-hidden":"true"},Ct=ve(()=>t("use",{"xlink:href":"#icon-icon_sel"},null,-1)),ht=[Ct],wt=ve(()=>t("span",null,"Full Range",-1)),yt={class:"content bottom-content"},St=ve(()=>t("span",null,"💡",-1)),Nt=ve(()=>t("span",null,"Please specify a price range that you want to provide your liquidity within.",-1)),Pt=[St,Nt],Tt={class:"bottom"},_t={class:"set-price-box"},At={key:0,class:"lock"},Rt={key:1,class:"create-pool-warning"},qt={key:2,class:"position-tips"},It=["src"],$t={class:"error"},Lt={class:"creat-pool-right-container"};function Bt(e,r,ne,ae,de,G){var _,Q;const P=wa,X=Yo,T=va,C=oa("CreatePoolRight"),J=ka("image");return N(),j("div",Ha,[t("div",Xa,[t("div",Ga,[t("div",{class:"slider-ratio",style:ba(e.sliderStyle(e.currentStep))},Ja,4)]),t("div",Qa,[t("div",{class:Se(["row",Number(e.currentStep)>=1?"":"color-text"])},[Number(e.currentStep)>=1&&e.fromCoin&&e.toCoin?(N(),j("span",Ya,"✓")):D("",!0),Pe(" Select Tokens ")],2),t("div",{class:Se(["row",Number(e.currentStep)>=2?"":"color-text"])},[Number(e.currentStep)>=2&&e.fee?(N(),j("span",Za,"✓")):D("",!0),Pe(" Select Fee Tier ")],2),t("div",{class:Se(["row",Number(e.currentStep)>=3?"":"color-text"])},[Number(e.currentStep)>=3&&e.initPrice?(N(),j("span",xa,"✓")):D("",!0),Pe(" Set Initial Price ")],2),t("div",{class:Se(["row",Number(e.currentStep)>=4?"":"color-text"])},[Number(e.currentStep)>=4&&e.minPrice&&e.maxPrice?(N(),j("span",et,"✓")):D("",!0),Pe(" Select Price Range ")],2),t("div",{class:Se(["row",Number(e.currentStep)>=5?"":"color-text"])},[Number(e.currentStep)>=5&&e.fromCoinAmount?(N(),j("span",ot,"✓")):D("",!0),Pe(" Confirm Liquidity ")],2)])]),t("div",at,[t("div",tt,[lt,t("div",nt,[e.fromCoin&&e.toCoin?(N(),j("div",ut,[Ca(t("img",null,null,512),[[J,(_=e.fromCoin)==null?void 0:_.logo_url]]),t("span",null,_e((Q=e.fromCoin)==null?void 0:Q.symbol),1),t("div",{class:"icon-change",onClick:r[0]||(r[0]=(...i)=>e.toggle&&e.toggle(...i))},it)])):D("",!0)])]),t("div",ct,[vt,t("div",dt,[t("div",mt,[ke(P,{value:e.formattedValue,type:"text",placeholder:"0.0",onChange:e.inputChange,onInput:e.handleInput},null,8,["value","onChange","onInput"]),t("span",null,_e(e.toCoin&&e.toCoin.symbol)+" per "+_e(e.fromCoin&&e.fromCoin.symbol),1)]),e.inputPriceLock?(N(),j("div",pt,[ke(X)])):D("",!0)])]),t("div",ft,[gt,t("div",kt,[t("div",{class:Se(["radio",e.isFullRange?"active-radio":""]),onClick:r[1]||(r[1]=(...i)=>e.clickFullRange&&e.clickFullRange(...i))},[e.isFullRange?(N(),j("svg",bt,ht)):D("",!0)],2),wt])]),t("div",yt,[t("div",{class:Se(["top",e.specifyPriceLock?"":"no-border"])},Pt,2),t("div",Tt,[t("div",_t,[ke(T,{min:e.minPrice,max:e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,direct:e.direct,"default-min-price":e.defaultMinPrice,"default-max-price":e.defaultMaxPrice,"pool-info":e.createPoolInfo,loading:!1,"current-price-tab":"custom",onOnChangeMinPrice:e.priceRangeChangeMin,onOnChangeMaxPrice:e.priceRangeChangeMax},null,8,["min","max","from-coin","to-coin","direct","default-min-price","default-max-price","pool-info","onOnChangeMinPrice","onOnChangeMaxPrice"])]),e.specifyPriceLock?(N(),j("div",At,[ke(X)])):D("",!0),Number(e.currentStep)>=4&&(e.showFromCoinLock||e.showToCoinLock)&&Number(e.maxPrice)>Number(e.minPrice)?(N(),j("div",Rt," To create a new pool, the initial price you set must be within your price range. ")):D("",!0),Number(e.currentStep)>=4&&Number(e.minPrice)>Number(e.maxPrice)?(N(),j("div",qt,[t("img",{src:("importIcon"in e?e.importIcon:ha(Ee))("/image/icon-tips-error@2x.png"),alt:""},null,8,It),t("p",$t,_e(e.$t("tips.positionError")),1)])):D("",!0)])])]),t("div",Lt,[ke(C,{"create-pool-info":e.createPoolInfo,onToggle:e.toggle},null,8,["create-pool-info","onToggle"])])])}const cl=ea(za,[["render",Bt],["__scopeId","data-v-19a71a37"]]);export{cl as default};
