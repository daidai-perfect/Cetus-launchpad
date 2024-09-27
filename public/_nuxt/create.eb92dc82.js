import{_ as ia,a as aa,b as ta,c as ca,d as va}from"./new-liquidity-title.72b8afde.js";import{i as Me}from"./import-icon.de3e6c66.js";import{a as xe,P as da,m as B,e as eo,M as oo,o as y,c as Ie,w as We,h as t,f as M,v as we,p as ao,k as to,r as F,W as la,l as ma,G as ae,$ as pa,U as je,i as ge,x as V,B as fa,j as Pe,b as ga,E as ba,q as ka,J as Ca,z as _e,t as ha,u as wa,Z as ya}from"./entry.f1d335d0.js";/* empty css              */import{b as lo,u as na,c as ua,p as Yo,h as xo}from"./pool.73243d89.js";import{_ as Sa,a as _a,b as Na}from"./icon-Add-Liquidity_2x.163f545d.js";import{u as Pa,k as ea,g as Te,i as oa,m as Ee,c as sa,w as Ta,b as Aa}from"./index.b02d129f.js";import{D as n}from"./decimal.0bdeb344.js";import{amountLock as Ne,fromCoinAmount as l,toCoinAmount as s,fromCoin as m,toCoin as v,showFromCoinLock as ee,showToCoinLock as oe,fixedFromCoin as $,createPoolInfo as r,minPrice as k,maxPrice as d,currentPriceReverse as Ye,currentPrice as ve,initPrice as he,direction as b,createPoolFromCoin as ie,createPoolToCoin as ce,isFullRange as re,resetData as $a,defaultMinPrice as Ke,defaultMaxPrice as Qe}from"./create-pool-data.a1251d6c.js";import{u as Ra}from"./useDebounceFunction.86687629.js";import{_ as Ia}from"./icon-selected_3x.09e9a6f0.js";import"./img-lock_2x.a28135f4.js";import"./index.206efd4d.js";import"./token-warning.9bd2828a.js";/* empty css              *//* empty css              */import"./swap-setting.bbf29e0d.js";import"./icon-warning_2x.28d04e31.js";import"./icon-error_2x.5e1b70e6.js";import"./status-block.bc9eac3d.js";/* empty css              */import"./notifi.711bb630.js";import"./useWhale.9c5cce00.js";const qa=xe({components:{Modal:da},setup(){const e=lo(),u=B(()=>e);return{importIcon:Me,store:u}}}),La=""+new URL("img-Creat-success_2x.b6f0a395.png",import.meta.url).href,Ba=""+new URL("img-Creat-success.9734ad6f.png",import.meta.url).href;const Ma=e=>(ao("data-v-d7a9ceb3"),e=e(),to(),e),Fa=Ma(()=>t("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Oa={class:"create-success-container"},Ua={key:0,src:La,alt:""},Da={key:1,src:Ba,alt:""},Va={class:"waiting-title"};function ja(e,u,te,Z,ue,G){const S=oo("Modal");return y(),Ie(S,{visible:!0,class:"",centered:"",title:"",width:"400px",footer:null,onCancel:u[0]||(u[0]=W=>e.$emit("onClose"))},{closeIcon:We(()=>[Fa]),default:We(()=>[t("div",Oa,[e.store.theme=="default"?(y(),M("img",Ua)):(y(),M("img",Da)),t("p",Va,we(e.$t("newAdd.createPoolSuccessText")),1)])]),_:1})}const Ea=eo(qa,[["render",ja],["__scopeId","data-v-d7a9ceb3"]]),Wa=xe({components:{NewLiquidityTile:ia,NewLiquidityDepositRatio:aa},setup(e,u){const te=Pa(),Z=lo(),ue=B(()=>Z),G=B(()=>ue.value.chainName),S=B(()=>te),W=F(!1);F(),F(),F(),F(!1);const P=la(),{t:C,locale:K}=ma(),T=B(()=>G.value?ua(G.value):{}),Q=na(),i=B(()=>Q),ye=B(()=>ue.value.theme),O=B(()=>S.value.assets&&m.value&&S.value.assets[m.value.address]?Yo(S.value.assets[m.value.address].balance,m.value.decimals):"0"),N=B(()=>S.value.assets&&v.value&&S.value.assets[v.value.address]?Yo(S.value.assets[v.value.address].balance,v.value.decimals):"0"),qe=o=>{o==="fromCoin"?($.value=!0,G.value==="Aptos"?l.value=Number(O.value)>0?m.value.symbol=="APT"?new n(Number(O.value)).sub(new n(.1)).lt(new n(0))?"0":new n(Number(O.value)).sub(new n(.1)).toString():String(O.value):"":l.value=Number(O.value)>0?m.value.symbol=="SUI"?new n(Number(O.value)).sub(new n(.05)).lt(new n(0))?"0":new n(Number(O.value)).sub(new n(.05)).toString():String(O.value):""):($.value=!1,G.value==="Aptos"?s.value=Number(N.value)>0?v.value.symbol=="APT"?new n(Number(N.value)).sub(new n(.1)).lt(new n(0))?"0":new n(Number(N.value)).sub(new n(.1)).toString():String(N.value):"":s.value=Number(N.value)>0?v.value.symbol=="SUI"?new n(Number(N.value)).sub(new n(.05)).lt(new n(0))?"0":new n(Number(N.value)).sub(new n(.05)).toString():String(N.value):"")},ze=o=>{o==="fromCoin"?($.value=!0,l.value=Number(O.value)>0?ea(new n(Number(O.value)).div(2).toString(),m.value.decimals).toString():""):($.value=!1,s.value=Number(N.value)>0?ea(new n(Number(N.value)).div(2).toString(),v.value.decimals).toString():"")};ae(()=>[i.value.tokensObj,P.query],async([o])=>{if(o){const c=o;if(P&&P.query&&P.query.fromCoin&&P.query.fromCoin){const h=c[P.query.fromCoin]||await T.value.getTokenBySymbol(c,P.query.fromCoin);m.value=h,ie.value=h}if(P&&P.query&&P.query.toCoin&&P.query.toCoin){const h=c[P.query.toCoin]||await T.value.getTokenBySymbol(c,P.query.toCoin);v.value=h,ce.value=h}}},{immediate:!0,deep:!0});const ke=F("--"),se=B(()=>ue.value.slippage),He=F(),de=async()=>{if(!k.value&&!d.value)return!1;if(!l.value&&!s.value&&!k.value&&!d.value)return;const o=r.value||{};if(oa(o))return;const{TickUtil:c,TickMath:h,getNearestTickByTick:U}=T.value,A=o==null?void 0:o.token_a.decimals,j=o==null?void 0:o.token_b.decimals;let w,p,R,q,D,E,L=o.current_tick_index,z;if(o.token_a.address.toLowerCase()===m.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===v.value.address.toLowerCase()?z=!0:z=!1,k.value==="0"&&d.value==="∞")R=c.getMinIndex(Number(o.tickSpacing)),q=c.getMaxIndex(Number(o.tickSpacing));else{z?(w=Number(k.value),p=Number(d.value)):(w=new n(1).div(d.value).toString(),p=new n(1).div(k.value).toString());try{D=w==0?-443636:h.priceToTickIndex(new n(w),A,j)}catch{D=-443636}try{E=h.priceToTickIndex(new n(p),A,j)}catch{E=443636}R=U(D,Number(o.tickSpacing)),q=U(E,Number(o.tickSpacing))}if(d.value!=="∞"&&R>=q){ee.value=!0,l.value="",oe.value=!0,s.value="";return}if(L==q||L==R){ee.value=!0,oe.value=!0;return}if(d.value==="∞"||L>=R&&L<=q){ee.value=!1,oe.value=!1;let H;if(l.value||s.value){if($.value){const Re=new n(l.value).mul(Math.pow(10,m.value.decimals)).toString();H=new Ee(Re)}else{const Re=new n(s.value).mul(Math.pow(10,v.value.decimals)).toString();H=new Ee(Re)}const{liquidityAmount:X,tokenMaxA:ne,tokenMaxB:pe,tokenMaxAOrigin:De,tokenMaxBOrigin:Ve}=T.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:o.token_a,tokenB:o.token_b,lowerTick:R,upperTick:q,coinAmount:H,iscoinA:z?$.value:!$.value,roundUp:!0,slippage:Number(se.value)/100,curSqrtPrice:new Ee(o.current_sqrt_price)});He.value={liquidityAmount:X,tokenMaxA:ne,tokenMaxB:pe,tokenMaxAOrigin:De,tokenMaxBOrigin:Ve},z?$.value?s.value=Number(pe)>0?pe:"":l.value=Number(ne)>0?ne:"":$.value?s.value=ne:l.value=pe}}else L>q?(ee.value=!0,oe.value=!0):L<R?(ee.value=!0,oe.value=!0):(ee.value=!0,l.value="",oe.value=!0,s.value="")};ae(()=>he.value,o=>{o&&de()},{immediate:!0}),ae(l,(o,c)=>{o==""&&$.value&&(s.value=""),o&&$.value&&!W.value&&de()}),ae(s,(o,c)=>{o==""&&!$.value&&(l.value=""),o&&!$.value&&!W.value&&de()}),ae(()=>re.value,o=>{de()},{immediate:!0});const Xe=o=>{const c=o.replace(/[^\d.]/g,""),h="$"+Te(c);W.value=!0,ke.value=h,o>0?Fe():(l.value="",s.value="")};ae([k,d],([o,c])=>{Number(o)!==0&&Number(c)!==0&&!W.value?de():Number(o)!==0&&Number(c)!==0&&W.value?Fe():de()},{immediate:!0}),ae(()=>{var o;return(o=r)==null?void 0:o.value},o=>{de()},{deep:!0});const Ge=()=>{const o=Y.value&&Y.value[m.value.address]&&Y.value[m.value.address].price,c=Y.value&&Y.value[v.value.address]&&Y.value[v.value.address].price;if(o&&c){const h=new n(l.value>0?l.value:0).mul(o),U=new n(s.value>0?s.value:0).mul(c),A=h.add(U).toNumber();ke.value=A>0&&A<.01?"$<0.01":"$"+Te(A,2)}else ke.value="--"};ae(()=>[l.value,s.value,W.value],([o,c,h])=>{(o||c)&&!h?Ge():(!o||!c)&&!h&&(ke.value="--")},{immediate:!0});const Y=B(()=>i.value.RATES),Ae=F(),Fe=async()=>{if(!k.value&&!d.value)return!1;if(!l.value&&!s.value&&!k.value&&!d.value)return;const o=r.value||{};if(oa(o))return;const{TickUtil:c,TickMath:h,getNearestTickByTick:U}=T.value,A=o==null?void 0:o.token_a.decimals,j=o==null?void 0:o.token_b.decimals;let w,p,R,q,D,E,L;if(o.token_a.address.toLowerCase()===m.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===v.value.address.toLowerCase()?L=!0:L=!1,k.value==="0"&&d.value==="∞")R=c.getMinIndex(Number(o.tickSpacing)),q=c.getMaxIndex(Number(o.tickSpacing));else{L?(w=Number(k.value),p=Number(d.value)):(w=new n(1).div(d.value).toString(),p=new n(1).div(k.value).toString());try{D=w==0?-443636:h.priceToTickIndex(new n(w),A,j)}catch{D=-443636}try{E=h.priceToTickIndex(new n(p),A,j)}catch{E=443636}R=U(D,Number(o.tickSpacing)),q=U(E,Number(o.tickSpacing))}const z=Y.value[o==null?void 0:o.token_a.address].price,H=Y.value[o==null?void 0:o.token_b.address].price;try{const{amountA:X,amountB:ne,tokenAmountsInfo:pe}=await T.value.estCoinAmountsFromTotalAmount({lowerTick:R,upperTick:q,decimalsA:A,decimalsB:j,curSqrtPrice:new Ee(o.current_sqrt_price),totalAmount:ke.value,tokenPriceA:z,tokenPriceB:H});Ae.value=pe,o.needReverse?b.value?(l.value=X,s.value=ne):(l.value=ne,s.value=X):(l.value=X,s.value=ne)}catch(X){console.log(X,"e===>")}},Je=B(()=>{var h,U,A,j,w,p;const o=(A=Y.value[(U=(h=m)==null?void 0:h.value)==null?void 0:U.address])==null?void 0:A.price,c=(p=Y.value[(w=(j=v)==null?void 0:j.value)==null?void 0:w.address])==null?void 0:p.price;return!!(o&&c)}),a=()=>{u.emit("toggle")},f=F(!1),g=B(()=>{var o;return!m.value||!v.value?C("modal.selectTokenModalTitle"):!((o=P.query)!=null&&o.fee)&&sa[G.value].hasCreatePool?"Select fee tier":!Number(l.value)&&!Number(s.value)?C("button.enterAmount"):Number(l.value)>Number(O.value)?C("button.insufficientBalance",{name:m.value.symbol}):Number(s.value)>Number(N.value)?C("button.insufficientBalance",{name:v.value.symbol}):d.value!=="∞"&&Number(k.value)>=Number(d.value)?C("newAdd.invalidRange"):C("newAdd.preview")}),J=o=>{const c=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,2})?).*$");o.target.value=o.target.value.replace(c,"$1")},_=B(()=>{var o;return!!(!l.value&&!s.value||Number(l.value)>Number(O.value)||Number(s.value)>Number(N.value)||g.value!==C("newAdd.preview")||!r.value&&!((o=r.value)!=null&&o.currentPrice)||Number(l.value)<=0&&Number(s.value)<=0||ee.value||oe.value)}),{setTransactionTxid:I,setTransactionDesc:me,setIsShowWaiting:le,setIsShowSuccess:Ce,setIsShowRejected:x,setPositiomNum:Se}=Z,$e=()=>{G.value=="Sui"&&Ue()},{$notify:Oe}=pa(),Le=F(!1),Ue=async()=>{var z,H,X,ne,pe,De,Ve,Re,no,uo,so,ro,io,co,vo,mo,po,fo,go,bo,ko,Co,ho,wo,yo,So,_o,No,Po,To,Ao,$o,Ro,Io,qo,Lo,Bo,Mo,Fo,Oo,Uo,Do,Vo,jo,Eo,Wo,zo,Ho,Xo,Go,Jo,Zo,Ko,Qo;f.value=!1;let o=!1;T.value.getIsSortedSymbols(ie.value.address,ce.value.address)&&(o=!0),I("");const c=ee.value?"":`${l.value} ${(z=m.value)==null?void 0:z.symbol}`,h=oe.value?"":`${s.value} ${(H=v.value)==null?void 0:H.symbol}`;me(C("tips.increaseLiquiditySuccess",{from:!o&&!((ne=(X=r)==null?void 0:X.value)!=null&&ne.needReverse)||o&&((De=(pe=r)==null?void 0:pe.value)!=null&&De.needReverse)?c:h,and:!ee.value&&!oe.value?"and":"",to:!o&&!((Re=(Ve=r)==null?void 0:Ve.value)!=null&&Re.needReverse)||o&&((uo=(no=r)==null?void 0:no.value)!=null&&uo.needReverse)?h:c})),le(!0);let U="",A="",j="",w="",p="",R="",q=0,D=0,E=!1,L;if(o||(ro=(so=r)==null?void 0:so.value)!=null&&ro.needReverse){const fe=o&&!((co=(io=r)==null?void 0:io.value)!=null&&co.needReverse);U=fe?(bo=(go=(fo=r)==null?void 0:fo.value)==null?void 0:go.token_b)==null?void 0:bo.address:(po=(mo=(vo=r)==null?void 0:vo.value)==null?void 0:mo.token_a)==null?void 0:po.address,A=fe?(So=(yo=(wo=r)==null?void 0:wo.value)==null?void 0:yo.token_a)==null?void 0:So.address:(ho=(Co=(ko=r)==null?void 0:ko.value)==null?void 0:Co.token_b)==null?void 0:ho.address,j=fe?($o=(Ao=(To=r)==null?void 0:To.value)==null?void 0:Ao.token_b)==null?void 0:$o.decimals:(Po=(No=(_o=r)==null?void 0:_o.value)==null?void 0:No.token_a)==null?void 0:Po.decimals,w=fe?(Mo=(Bo=(Lo=r)==null?void 0:Lo.value)==null?void 0:Bo.token_a)==null?void 0:Mo.decimals:(qo=(Io=(Ro=r)==null?void 0:Ro.value)==null?void 0:Io.token_b)==null?void 0:qo.decimals,(Oo=(Fo=r)==null?void 0:Fo.value)!=null&&Oo.needReverse?(p=b.value?l.value:s.value,R=b.value?s.value:l.value,q=b.value?Number(k.value):1/Number(d.value),D=b.value?Number(d.value):1/Number(k.value),E=b.value?$.value:!$.value,L=b.value?ve.value:1/Number(ve.value)):(p=b.value?s.value:l.value,R=b.value?l.value:s.value,q=b.value?1/Number(d.value):Number(k.value),D=b.value?1/Number(k.value):Number(d.value),E=b.value?!$.value:$.value,L=b.value?1/Number(ve.value):ve.value)}else U=(Vo=(Do=(Uo=r)==null?void 0:Uo.value)==null?void 0:Do.token_a)==null?void 0:Vo.address,A=(Wo=(Eo=(jo=r)==null?void 0:jo.value)==null?void 0:Eo.token_b)==null?void 0:Wo.address,j=(Xo=(Ho=(zo=r)==null?void 0:zo.value)==null?void 0:Ho.token_a)==null?void 0:Xo.decimals,w=(Zo=(Jo=(Go=r)==null?void 0:Go.value)==null?void 0:Jo.token_b)==null?void 0:Zo.decimals,p=b.value?l.value:s.value,R=b.value?s.value:l.value,q=b.value?Number(k.value):1/Number(d.value),D=b.value?Number(d.value):1/Number(k.value),E=b.value?$.value:!$.value,L=b.value?ve.value:1/Number(ve.value);try{console.log("0501###toCreatePool###params###",{coinTypeA:U,coinTypeB:A,decimalsA:j,decimalsB:w,amountA:p,amountB:R,minPrice:q,maxPrice:D,fix_amount_a:E,tick_spacing:Number(r.value.tickSpacing),slippage:Number(se.value)/100,price:L});const fe=await T.value.getCreatPoolTransactionPayload({coinTypeA:U,coinTypeB:A,decimalsA:j,decimalsB:w,amountA:p,amountB:R,minPrice:k.value=="0"&&d.value=="∞"?"0":q,maxPrice:k.value=="0"&&d.value=="∞"?"∞":D,fix_amount_a:E,tick_spacing:Number(r.value.tickSpacing),slippage:Number(se.value)/100,price:L}),ra=await T.value.signAndExecuteTransactionBlock(S.value.currentWallet,fe),Be=T.value.handleTx(ra);if(Be&&Be.hash){I(Be.hash),le(!1),Ce(!0);const Ze={title:"Created pool",desc:"Pool created successfully ",hash:Be.hash,tit:"Pool Created",icon:"icon-icon-Position-Created",tokenInfo:{tokena:`${(Ko=m.value)==null?void 0:Ko.address}`,numa:ee.value?"":`- ${l.value}`,logoa:i.value.tokensObj&&m.value&&m.value.address&&i.value.tokensObj[m.value.address]&&i.value.tokensObj[m.value.address].logoURI,tokenb:`${(Qo=v.value)==null?void 0:Qo.address}`,numb:oe.value?"":`- ${s.value}`,logob:i.value.tokensObj&&v.value&&v.value.address&&i.value.tokensObj[v.value.address]&&i.value.tokensObj[v.value.address].logoURI},text:"Pool created successfully"};G.value!=="Aptos"&&(Ze.res=Be.res),T.value.showTransitionPending(Ze),(await T.value.watchTransaction(Ze,!0)).status&&(Ce(!1),Le.value=!0,setTimeout(()=>{Q.setPoolConfigList(G.value,ue.value.filterCoinsObj),T.value.getAccount(S.value.address)},1e3)),Se()}else le(!1),x(!0);l.value="",s.value=""}catch(fe){console.log("0407###createPool###error##",String(fe)),String(fe).indexOf('Some("create_pool_internal") }, 1')>-1&&Oe.error({icon:je("svg",{class:{icon:!0},"aria-hidden":!0},[je("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:je("div",{class:"notification-title"},[je("span",{innerHTML:"Pool already exists"},null)]),duration:4.5,description:"Something went wrong",class:"ant-notification-copy ant-notification-error"}),f.value=!1,Q.setPoolConfigList(G.value,ue.value.filterCoinsObj),l.value="",s.value="",le(!1),x(!0)}};return{amountLock:Ne,wallet:S,inputChange:J,fromCoinAmount:l,toCoinAmount:s,fromCoin:m,toCoin:v,maxBtnSelect:qe,halfBtnSelect:ze,showFromCoinLock:ee,showToCoinLock:oe,fromCoinBlance:O,toCoinBlance:N,fixedFromCoin:$,isInputTotalAmount:W,toggle:a,theme:ye,liquidityTotalAmount:ke,createPoolInfo:r,minPrice:k,maxPrice:d,currentPriceReverse:Ye,currentPrice:ve,onInput:Xe,initPrice:he,isShowtotalAmount:Je,direction:b,isShowLiquidityModal:f,createPoolBtnText:g,createPoolBtnDisabled:_,toCreatePool:$e,isCreateSuccess:Le}}});const za=e=>(ao("data-v-ea4e809b"),e=e(),to(),e),Ha={class:"create-pool-right"},Xa={class:"card-container"},Ga={key:0,class:"lock"},Ja={class:"card-item"},Za={class:"card-item"},Ka={key:0,class:"total-amount"},Qa=za(()=>t("span",null,"Total Amount",-1));function Ya(e,u,te,Z,ue,G){const S=oo("NewLiquidityTile"),W=ta,P=ca,C=aa,K=Na,T=fa,Q=Ea;return y(),M("div",Ha,[ge(S),t("div",Xa,[e.amountLock||e.showFromCoinLock||e.showToCoinLock?(y(),M("div",Ga,[ge(W)])):V("",!0),t("div",Ja,[ge(P,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":u[0]||(u[0]=i=>e.fromCoinAmount=i),"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:u[1]||(u[1]=i=>e.maxBtnSelect("fromCoin")),onOnHalf:u[2]||(u[2]=i=>e.halfBtnSelect("fromCoin")),onOnInput:u[3]||(u[3]=i=>{e.fromCoinAmount=i,e.fixedFromCoin=!0,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),t("div",Za,[ge(P,{modelValue:e.toCoinAmount,"onUpdate:modelValue":u[4]||(u[4]=i=>e.toCoinAmount=i),"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direct":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:u[5]||(u[5]=i=>e.maxBtnSelect("toCoin")),onOnHalf:u[6]||(u[6]=i=>e.halfBtnSelect("toCoin")),onOnInput:u[7]||(u[7]=i=>{e.toCoinAmount=i,e.fixedFromCoin=!1,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme=="default"?(y(),M("img",{key:1,class:"add",src:Sa,alt:"",onClick:u[8]||(u[8]=(...i)=>e.toggle&&e.toggle(...i))})):V("",!0),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme!=="default"?(y(),M("img",{key:2,class:"add",src:_a,alt:"",onClick:u[9]||(u[9]=(...i)=>e.toggle&&e.toggle(...i))})):V("",!0)]),e.isShowtotalAmount?(y(),M("div",Ka,[Qa,t("span",null,we(e.liquidityTotalAmount),1)])):V("",!0),e.initPrice?(y(),Ie(C,{key:1,"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"fixed-from-coin":e.fixedFromCoin,"is-input-total-amount":e.isInputTotalAmount,"create-pool-info":e.createPoolInfo,"min-price":e.minPrice,"max-price":e.maxPrice,"current-price-tab":"custom","current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse},null,8,["from-coin","to-coin","from-coin-amount","to-coin-amount","fixed-from-coin","is-input-total-amount","create-pool-info","min-price","max-price","current-price","current-price-reverse"])):V("",!0),e.isShowLiquidityModal?(y(),Ie(K,{key:2,"pool-info":e.createPoolInfo,title:e.$t("newAdd.preview"),"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"from-coin":e.fromCoin,"to-coin":e.toCoin,"fixed-from-coin":e.fixedFromCoin,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"current-price-tab":"custom","min-price":e.minPrice,"max-price":e.maxPrice,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"current-direct":e.direction,"is-increase":!1,"is-create":!0,onCreatePool:e.toCreatePool,onOnClose:u[10]||(u[10]=i=>e.isShowLiquidityModal=!1)},null,8,["pool-info","title","from-coin-amount","to-coin-amount","from-coin","to-coin","fixed-from-coin","current-price","current-price-reverse","min-price","max-price","show-from-coin-lock","show-to-coin-lock","current-direct","onCreatePool"])):V("",!0),e.wallet.connected?(y(),Ie(T,{key:4,class:"add-liquidity-btn",disabled:e.wallet.connected?e.createPoolBtnDisabled:!1,onClick:u[12]||(u[12]=i=>e.isShowLiquidityModal=!0)},{default:We(()=>[Pe(we(e.createPoolBtnText),1)]),_:1},8,["disabled"])):(y(),Ie(T,{key:3,class:"add-liquidity-btn",onClick:u[11]||(u[11]=i=>e.wallet.setIsShowWalletModal(!0))},{default:We(()=>[Pe(we(e.$t("button.connectWallet")),1)]),_:1})),e.isCreateSuccess?(y(),Ie(Q,{key:5,onOnClose:u[13]||(u[13]=i=>e.isCreateSuccess=!1)})):V("",!0)])}const xa=eo(Wa,[["render",Ya],["__scopeId","data-v-ea4e809b"]]),et={1e-4:2,5e-4:10,.002:60,.006:200},ot={1e-4:2,5e-4:10,.0025:60,.01:200},at=xe({components:{CreatePoolRight:xa},setup(e,u){const te=F(!0),Z=F(!0),ue=F(!0),G=F(!1),S=F("1"),W=F(!0),P=F(""),C=la(),K=ga(),T=lo(),Q=B(()=>T),i=na(),ye=B(()=>i),O=B(()=>Q.value.chainName),N=B(()=>O.value?ua(O.value):{}),qe=F("");ae(()=>[K,ye.value.tokensObj],async([a,f])=>{var g,J,_;((g=K==null?void 0:K.currentRoute)==null?void 0:g.value.name)=="liquidity-create"&&f&&(m.value=ye.value.tokensObj[C.query.fromCoin]||await N.value.getTokenBySymbol(f,C.query.fromCoin),v.value=ye.value.tokensObj[C.query.toCoin]||await N.value.getTokenBySymbol(f,C.query.toCoin),qe.value=C.query.fee!=="null"&&C.query.fee?C.query.fee:""),((J=K==null?void 0:K.currentRoute)==null?void 0:J.value.name)=="liquidity-create"&&((_=C==null?void 0:C.query)!=null&&_.fee)&&(he.value="",l.value="",s.value="",re.value=!0)},{immediate:!0,deep:!0}),ae(()=>[m.value,v.value,he.value,qe.value,k.value,d.value,l.value,s.value],([a,f,g,J,_,I,me])=>{!a||!f?(S.value="1",te.value=!0,Z.value=!0,Ne.value=!0):J?g?!_||!I?(S.value="4",te.value=!1,Z.value=!1,Ne.value=!0):me||(S.value="5",te.value=!1,Z.value=!1,Ne.value=!1):(S.value="3",te.value=!1,Z.value=!0,Ne.value=!0):(S.value="2",te.value=!0,Z.value=!0,Ne.value=!0)},{immediate:!0}),ae(()=>S.value,a=>{Number(a)<5&&(l.value="",s.value="")});const ze=a=>{var f;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((f=ye.value.tokensObj[a==null?void 0:a.address])==null?void 0:f.logo_url)||(Q.value.theme==="default"?Me("/image/coins/unknown.png"):Me("/image/coins/sui-unknown.png"))},ke=a=>{switch(a){case"1":return{top:"10%"};case"2":return{top:"29%"};case"3":return{top:"48%"};case"4":return{top:"67%"};case"5":return{top:"87%"}}};B(()=>sa[O.value].hasCreatePool);const se=async a=>{var le,Ce,x,Se,$e,Oe,Le,Ue,o,c,h,U,A,j;console.log("#####emitCurrentPrice",a),a?(he.value=a,ve.value=a,Ye.value=new n(1).div(new n(a)).toString()):(he.value="",ve.value="",Ye.value="");let f,g;const J=ye.value.poolConfigList;for(let w=0;w<J.length;w++){const p=J[w];if(p.token_a.address.toUpperCase()===((x=(Ce=(le=ie)==null?void 0:le.value)==null?void 0:Ce.address)==null?void 0:x.toUpperCase())&&p.token_b.address.toUpperCase()===((Oe=($e=(Se=ce)==null?void 0:Se.value)==null?void 0:$e.address)==null?void 0:Oe.toUpperCase())){f=p.needReverse,g=p;break}else if(p.token_b.address.toUpperCase()===((o=(Ue=(Le=ie)==null?void 0:Le.value)==null?void 0:Ue.address)==null?void 0:o.toUpperCase())&&p.token_a.address.toUpperCase()===((U=(h=(c=ce)==null?void 0:c.value)==null?void 0:h.address)==null?void 0:U.toUpperCase())){f=p.needReverse,g=p;break}}let _=!1;await N.value.getIsSortedSymbols((A=ie.value)==null?void 0:A.address,(j=ce.value)==null?void 0:j.address)&&(_=!0);let I;console.log(_,"###changeCurrentPrice createPoolNeedReverse 289"),console.log(b.value,"####changeCurrentPrice direction.value 290"),_&&!b.value?I=!0:_&&b.value||!_&&b.value?I=!1:I=!0,console.log(I,"###changeCurrentPrice newDirect 298");const me=O.value=="Aptos"?et:ot;if(m.value&&v.value&&a){const w=g?g==null?void 0:g.token_a.decimals:_?ce.value.decimals:ie.value.decimals,p=g?g==null?void 0:g.token_b.decimals:_?ie.value.decimals:ce.value.decimals,R=a&&N.value.TickMath.priceToSqrtPriceX64(I?new n(1/a):new n(a),w,p);console.log(R.toString(),"===>current_sqrt_price"),console.log(a&&a>0,"## emitCurrentPrice &&emitCurrentPrice>0");const q=a&&a>0&&N.value.TickMath.priceToSqrtPriceX64(new n(1).div(a),m.value.decimals,v.value.decimals);console.log(!I,a,"===>!newDirect"),console.log(w,p,"decimalsA,decimalsB===>");const D=a&&a>0&&N.value.TickMath.priceToTickIndex(I?new n(1).div(a):new n(a),w,p);console.log(D,"==>currentTickIndex");const E=D-me[C.query.fee]*5,L=D+me[C.query.fee]*5,z=N.value.TickMath.tickIndexToPrice(E,w,p).toString(),H=N.value.TickMath.tickIndexToPrice(L,w,p).toString();re.value?(k.value="0",d.value="∞"):I?(k.value=String(1/H),d.value=String(1/z),Ke.value=String(1/H),Qe.value=String(1/z)):(k.value=z,d.value=H,Ke.value=z,Qe.value=H),console.log("0518###c####createPoolFromCoin.value####",ie.value),console.log("0518###c####createPoolToCoin.value####",ce.value),console.log("0518###c####createPoolNeedReverse####",_);const X={token_a:g?g.token_a:_?ce.value:ie.value,token_b:g?g.token_b:_?ie.value:ce.value,isCreate:!0,tickSpacing:me[C.query.fee],currentPrice:a,current_sqrt_price:R,tick_lower:E,tick_upper:L,current_tick_index:D,currentPriceReverse:Ta(String(1/a),6),reverse_current_sqrt_price:q,needReverse:f,fee:C.query.fee};r.value=X,console.log("0518###c####poolInfos####",X)}else r.value=null,k.value="",d.value=""},He=()=>{re.value=!re.value,se(r.value.currentPrice)},de=a=>{console.log(a,"####0731 priceRangeChangeMin"),re.value?(re.value=!1,se(r.value.currentPrice)):k.value=a},Xe=a=>{re.value?(re.value=!1,se(r.value.currentPrice)):a=="0"?d.value="∞":d.value=a},Ge=()=>{var f,g;console.log(r.value,"==>createPoolInfo.value"),b.value=!b.value;const a=m.value;m.value=v.value,v.value=a,r.value&&(se(Aa(new n(1).div(r.value.currentPrice).toString(),(g=(f=v)==null?void 0:f.value)==null?void 0:g.decimals)),$.value?l.value=s.value:s.value=l.value),console.log(b.value,"####toggle direction.value")};ba(()=>{$a()});const Y=Ra(a=>{console.log("🚀 ~ file: create.vue:514 ~ updateDebouncedValue ~ value:",a),se(a)},500),Ae=F(""),Fe=a=>{const f=b.value?v.value.decimals:m.value.decimals,g=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${f}})?).*$`),J=a.target.value.replace(/,/g,"").replace(g,"$1");Y(J)},Je=a=>{var Se;const f=a.target.selectionStart,g=b.value?v.value.decimals:m.value.decimals,J=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${g}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",a.target.value);let _=a.target.value.replace(/,/g,"").replace(J,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",_);let I=_.includes(".")&&String(Te(_))==="0"?_:String(Te(_));const me=xo(a.target.value),le=xo(I),Ce=le.length-me.length;let x=f+Ce;if((Se=a==null?void 0:a.inputType)!=null&&Se.includes("delete")&&Ce>0&&f===le[le.length-1]){const $e=a.target.value.slice(0,f-1)+a.target.value.slice(f);I=String(Te($e.replace(/,/g,""))),x=x-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",I),Ae.value=I,setTimeout(()=>{a.target.setSelectionRange(x<0?0:x,x<0?0:x)},0)};return ae(()=>he.value,a=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",a);const f=a!=null&&a.includes(".")&&String(Te(a))==="0"?a:String(Te(a));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",f),f!==Ae.value&&(Ae.value=f)},{immediate:!0}),{amountLock:Ne,currentStep:S,sliderStyle:ke,coinAmount:G,pricerange:P,fromCoin:m,toCoin:v,fee:qe,direct:W,getCoinIcon:ze,isSelectFullRange:ue,store:Q,initPrice:he,inputPriceLock:te,specifyPriceLock:Z,changeCurrentPrice:se,minPrice:k,maxPrice:d,defaultMinPrice:Ke,defaultMaxPrice:Qe,clickFullRange:He,createPoolInfo:r,isFullRange:re,priceRangeChangeMin:de,priceRangeChangeMax:Xe,fromCoinAmount:l,toggle:Ge,showFromCoinLock:ee,showToCoinLock:oe,inputChange:Fe,currentPrice:ve,importIcon:Me,formattedValue:Ae,handleInput:Je}}});const be=e=>(ao("data-v-ae5d6c86"),e=e(),to(),e),tt={class:"creat-pool-container"},lt={class:"creat-pool-left"},nt={class:"progress"},ut=be(()=>t("div",{class:"slider-ratio-content"},null,-1)),st=[ut],rt={class:"progress-text"},it={key:0},ct={key:0},vt={key:0},dt={key:0},mt={key:0},pt={class:"creat-pool-center"},ft={class:"title"},gt=be(()=>t("div",{class:"left"},"Set Initial Price",-1)),bt={class:"right"},kt={key:0,class:"token-box"},Ct=be(()=>t("div",null,[t("svg",{class:"icon icon-up","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),ht=be(()=>t("div",null,[t("svg",{class:"icon icon-down","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),wt=[Ct,ht],yt={class:"content top-content"},St=be(()=>t("div",{class:"top"},[t("span",null,"💡"),t("span",null,"Please set an initial price for this new pool to start.")],-1)),_t={class:"bottom"},Nt={class:"input-div"},Pt={key:0,class:"lock"},Tt={class:"title"},At=be(()=>t("div",{class:"left"},"Set Price Range",-1)),$t={class:"right"},Rt={key:0,src:Ia},It=be(()=>t("span",null,"Full Range",-1)),qt={class:"content bottom-content"},Lt=be(()=>t("span",null,"💡",-1)),Bt=be(()=>t("span",null,"Please specify a price range that you want to provide your liquidity within.",-1)),Mt=[Lt,Bt],Ft={class:"bottom"},Ot={class:"set-price-box"},Ut={key:0,class:"lock"},Dt={key:1,class:"create-pool-warning"},Vt={key:2,class:"position-tips"},jt=["src"],Et={class:"error"},Wt={class:"creat-pool-right-container"};function zt(e,u,te,Z,ue,G){var T,Q;const S=ya,W=ta,P=va,C=oo("CreatePoolRight"),K=ka("image");return y(),M("div",tt,[t("div",lt,[t("div",nt,[t("div",{class:"slider-ratio",style:Ca(e.sliderStyle(e.currentStep))},st,4)]),t("div",rt,[t("div",{class:_e(["row",Number(e.currentStep)>=1?"":"color-text"])},[Number(e.currentStep)>=1&&e.fromCoin&&e.toCoin?(y(),M("span",it,"✓")):V("",!0),Pe(" Select Tokens ")],2),t("div",{class:_e(["row",Number(e.currentStep)>=2?"":"color-text"])},[Number(e.currentStep)>=2&&e.fee?(y(),M("span",ct,"✓")):V("",!0),Pe(" Select Fee Tier ")],2),t("div",{class:_e(["row",Number(e.currentStep)>=3?"":"color-text"])},[Number(e.currentStep)>=3&&e.initPrice?(y(),M("span",vt,"✓")):V("",!0),Pe(" Set Initial Price ")],2),t("div",{class:_e(["row",Number(e.currentStep)>=4?"":"color-text"])},[Number(e.currentStep)>=4&&e.minPrice&&e.maxPrice?(y(),M("span",dt,"✓")):V("",!0),Pe(" Select Price Range ")],2),t("div",{class:_e(["row",Number(e.currentStep)>=5?"":"color-text"])},[Number(e.currentStep)>=5&&e.fromCoinAmount?(y(),M("span",mt,"✓")):V("",!0),Pe(" Confirm Liquidity ")],2)])]),t("div",pt,[t("div",ft,[gt,t("div",bt,[e.fromCoin&&e.toCoin?(y(),M("div",kt,[ha(t("img",null,null,512),[[K,(T=e.fromCoin)==null?void 0:T.logo_url]]),t("span",null,we((Q=e.fromCoin)==null?void 0:Q.symbol),1),t("div",{class:"icon-change",onClick:u[0]||(u[0]=(...i)=>e.toggle&&e.toggle(...i))},wt)])):V("",!0)])]),t("div",yt,[St,t("div",_t,[t("div",Nt,[ge(S,{value:e.formattedValue,type:"text",placeholder:"0.0",onChange:e.inputChange,onInput:e.handleInput},null,8,["value","onChange","onInput"]),t("span",null,we(e.toCoin&&e.toCoin.symbol)+" per "+we(e.fromCoin&&e.fromCoin.symbol),1)]),e.inputPriceLock?(y(),M("div",Pt,[ge(W)])):V("",!0)])]),t("div",Tt,[At,t("div",$t,[t("div",{class:_e(["radio",e.isFullRange?"active-radio":""]),onClick:u[1]||(u[1]=(...i)=>e.clickFullRange&&e.clickFullRange(...i))},[e.isFullRange?(y(),M("img",Rt)):V("",!0)],2),It])]),t("div",qt,[t("div",{class:_e(["top",e.specifyPriceLock?"":"no-border"])},Mt,2),t("div",Ft,[t("div",Ot,[ge(P,{min:e.minPrice,max:e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,direct:e.direct,"default-min-price":e.defaultMinPrice,"default-max-price":e.defaultMaxPrice,"pool-info":e.createPoolInfo,loading:!1,"current-price-tab":"custom",onOnChangeMinPrice:e.priceRangeChangeMin,onOnChangeMaxPrice:e.priceRangeChangeMax},null,8,["min","max","from-coin","to-coin","direct","default-min-price","default-max-price","pool-info","onOnChangeMinPrice","onOnChangeMaxPrice"])]),e.specifyPriceLock?(y(),M("div",Ut,[ge(W)])):V("",!0),Number(e.currentStep)>=4&&(e.showFromCoinLock||e.showToCoinLock)&&Number(e.maxPrice)>Number(e.minPrice)?(y(),M("div",Dt," To create a new pool, the initial price you set must be within your price range. ")):V("",!0),Number(e.currentStep)>=4&&Number(e.minPrice)>Number(e.maxPrice)?(y(),M("div",Vt,[t("img",{src:("importIcon"in e?e.importIcon:wa(Me))("/image/icon-tips-error@2x.png"),alt:""},null,8,jt),t("p",Et,we(e.$t("tips.positionError")),1)])):V("",!0)])])]),t("div",Wt,[ge(C,{"create-pool-info":e.createPoolInfo,onToggle:e.toggle},null,8,["create-pool-info","onToggle"])])])}const fl=eo(at,[["render",zt],["__scopeId","data-v-ae5d6c86"]]);export{fl as default};
