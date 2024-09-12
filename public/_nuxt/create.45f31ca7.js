import{_ as Be,a as Oe}from"./new-liquidity-title.0c0ec09a.js";import{i as ne}from"./import-icon.de3e6c66.js";import{a as je,r as k,L as Ee,b as ze,m as G,A as se,s as Xe,e as Ge,l as Ke,C as He,o as c,f as u,h as a,N as Je,y as M,G as v,j as K,I as Qe,x as le,i as H,u as We,K as Ye,p as Ze,k as xe}from"./entry.acdca605.js";/* empty css              */import{u as eo,a as oo,b as ao}from"./index.694816b3.js";import{C as to}from"./new-create-pool-right.4e320eee.js";import{resetData as so,amountLock as $,fromCoin as C,toCoin as p,initPrice as V,minPrice as L,maxPrice as w,defaultMinPrice as ce,defaultMaxPrice as ue,createPoolInfo as S,isFullRange as y,fromCoinAmount as B,showFromCoinLock as lo,showToCoinLock as no,currentPrice as de,currentPriceReverse as Ie,createPoolFromCoin as R,createPoolToCoin as I,direction as P,fixedFromCoin as io,toCoinAmount as J}from"./create-pool-data.6711e4ae.js";import"./decimal.a2826370.js";import{g as ro,d as co,a as Q,y as Te}from"./common.f371ec22.js";import{a as uo,s as vo}from"./poolFee.8dba1e07.js";import{c as po}from"./index.be8ffb7b.js";import{u as mo}from"./useDebounceFunction.0382450c.js";import{D as T}from"./decimal.765d8738.js";import"./img-lock_2x.a28135f4.js";import"./lock.472d1615.js";import"./index.8f6ad64c.js";import"./token-warning.4623ef64.js";/* empty css              *//* empty css              */import"./swap-setting.41512485.js";import"./icon-error_2x.51894fef.js";import"./new-add-or-create.df326852.js";import"./status-block.01428d60.js";import"./deposit-ratio.af300874.js";/* empty css              */import"./notifi.4c97ad81.js";import"./useWhale.a7105bed.js";import"./icon-Add-Liquidity_2x.0acb06cb.js";const go=je({components:{CreatePoolRight:to},setup(o,O){const N=k(!0),q=k(!0),ve=k(!0),pe=k(!1),g=k("1"),W=k(!0),ie=k(""),n=Ee(),f=ze(),Y=eo(),A=G(()=>Y),j=oo(),E=G(()=>j),Z=G(()=>A.value.chainName),b=G(()=>Z.value?ao(Z.value):{}),re=k("");se(()=>[f,E.value.tokensObj],async([e,t])=>{var s,d,l;((s=f==null?void 0:f.currentRoute)==null?void 0:s.value.name)=="liquidity-create"&&t&&(C.value=E.value.tokensObj[n.query.fromCoin]||await b.value.getTokenBySymbol(t,n.query.fromCoin),p.value=E.value.tokensObj[n.query.toCoin]||await b.value.getTokenBySymbol(t,n.query.toCoin),re.value=n.query.fee!=="null"&&n.query.fee?n.query.fee:""),((d=f==null?void 0:f.currentRoute)==null?void 0:d.value.name)=="liquidity-create"&&((l=n==null?void 0:n.query)!=null&&l.fee)&&(V.value="",B.value="",J.value="",y.value=!0)},{immediate:!0,deep:!0}),se(()=>[C.value,p.value,V.value,re.value,L.value,w.value,B.value,J.value],([e,t,s,d,l,i,F])=>{!e||!t?(g.value="1",N.value=!0,q.value=!0,$.value=!0):d?s?!l||!i?(g.value="4",N.value=!1,q.value=!1,$.value=!0):F||(g.value="5",N.value=!1,q.value=!1,$.value=!1):(g.value="3",N.value=!1,q.value=!0,$.value=!0):(g.value="2",N.value=!0,q.value=!0,$.value=!0)},{immediate:!0}),se(()=>g.value,e=>{Number(e)<5&&(B.value="",J.value="")});const Ne=e=>{var t;return(e==null?void 0:e.logoURI)||(e==null?void 0:e.logo_url)||((t=E.value.tokensObj[e==null?void 0:e.address])==null?void 0:t.logo_url)||(A.value.theme==="default"?ne("/image/coins/unknown.png"):ne("/image/coins/sui-unknown.png"))},qe=e=>{switch(e){case"1":return{top:"10%"};case"2":return{top:"29%"};case"3":return{top:"48%"};case"4":return{top:"67%"};case"5":return{top:"87%"}}};G(()=>po[Z.value].hasCreatePool);const D=async e=>{var U,z,h,X,ee,me,ge,fe,he,_e,ke,Ce,Se,ye;console.log("#####emitCurrentPrice",e),e?(V.value=e,de.value=e,Ie.value=new T(1).div(new T(e)).toString()):(V.value="",de.value="",Ie.value="");let t,s;const d=E.value.poolConfigList;for(let _=0;_<d.length;_++){const r=d[_];if(r.token_a.address.toUpperCase()===((h=(z=(U=R)==null?void 0:U.value)==null?void 0:z.address)==null?void 0:h.toUpperCase())&&r.token_b.address.toUpperCase()===((me=(ee=(X=I)==null?void 0:X.value)==null?void 0:ee.address)==null?void 0:me.toUpperCase())){t=r.needReverse,s=r;break}else if(r.token_b.address.toUpperCase()===((he=(fe=(ge=R)==null?void 0:ge.value)==null?void 0:fe.address)==null?void 0:he.toUpperCase())&&r.token_a.address.toUpperCase()===((Ce=(ke=(_e=I)==null?void 0:_e.value)==null?void 0:ke.address)==null?void 0:Ce.toUpperCase())){t=r.needReverse,s=r;break}}let l=!1;await b.value.getIsSortedSymbols((Se=R.value)==null?void 0:Se.address,(ye=I.value)==null?void 0:ye.address)&&(l=!0);let i;console.log(l,"###changeCurrentPrice createPoolNeedReverse 289"),console.log(P.value,"####changeCurrentPrice direction.value 290"),l&&!P.value?i=!0:l&&P.value||!l&&P.value?i=!1:i=!0,console.log(i,"###changeCurrentPrice newDirect 298");const F=Z.value=="Aptos"?uo:vo;if(C.value&&p.value&&e){const _=s?s==null?void 0:s.token_a.decimals:l?I.value.decimals:R.value.decimals,r=s?s==null?void 0:s.token_b.decimals:l?R.value.decimals:I.value.decimals,Pe=e&&b.value.TickMath.priceToSqrtPriceX64(i?new T(1/e):new T(e),_,r);console.log(Pe.toString(),"===>current_sqrt_price"),console.log(e&&e>0,"## emitCurrentPrice &&emitCurrentPrice>0");const Ve=e&&e>0&&b.value.TickMath.priceToSqrtPriceX64(new T(1).div(e),C.value.decimals,p.value.decimals);console.log(!i,e,"===>!newDirect"),console.log(_,r,"decimalsA,decimalsB===>");const oe=e&&e>0&&b.value.TickMath.priceToTickIndex(i?new T(1).div(e):new T(e),_,r);console.log(oe,"==>currentTickIndex");const be=oe-F[n.query.fee]*5,we=oe+F[n.query.fee]*5,ae=b.value.TickMath.tickIndexToPrice(be,_,r).toString(),te=b.value.TickMath.tickIndexToPrice(we,_,r).toString();y.value?(L.value="0",w.value="∞"):i?(L.value=String(1/te),w.value=String(1/ae),ce.value=String(1/te),ue.value=String(1/ae)):(L.value=ae,w.value=te,ce.value=ae,ue.value=te),console.log("0518###c####createPoolFromCoin.value####",R.value),console.log("0518###c####createPoolToCoin.value####",I.value),console.log("0518###c####createPoolNeedReverse####",l);const Re={token_a:s?s.token_a:l?I.value:R.value,token_b:s?s.token_b:l?R.value:I.value,isCreate:!0,tickSpacing:F[n.query.fee],currentPrice:e,current_sqrt_price:Pe,tick_lower:be,tick_upper:we,current_tick_index:oe,currentPriceReverse:ro(String(1/e),6),reverse_current_sqrt_price:Ve,needReverse:t,fee:n.query.fee};S.value=Re,console.log("0518###c####poolInfos####",Re)}else S.value=null,L.value="",w.value=""},Fe=()=>{y.value=!y.value,D(S.value.currentPrice)},Me=e=>{console.log(e,"####0731 priceRangeChangeMin"),y.value?(y.value=!1,D(S.value.currentPrice)):L.value=e},Le=e=>{y.value?(y.value=!1,D(S.value.currentPrice)):e=="0"?w.value="∞":w.value=e},Ae=()=>{var t,s;console.log(S.value,"==>createPoolInfo.value"),P.value=!P.value;const e=C.value;C.value=p.value,p.value=e,S.value&&(D(co(new T(1).div(S.value.currentPrice).toString(),(s=(t=p)==null?void 0:t.value)==null?void 0:s.decimals)),io.value?B.value=J.value:J.value=B.value),console.log(P.value,"####toggle direction.value")};Xe(()=>{so()});const De=mo(e=>{console.log("🚀 ~ file: create.vue:514 ~ updateDebouncedValue ~ value:",e),D(e)},500),x=k(""),Ue=e=>{const t=P.value?p.value.decimals:C.value.decimals,s=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${t}})?).*$`),d=e.target.value.replace(/,/g,"").replace(s,"$1");De(d)},$e=e=>{var X;const t=e.target.selectionStart,s=P.value?p.value.decimals:C.value.decimals,d=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${s}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",e.target.value);let l=e.target.value.replace(/,/g,"").replace(d,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",l);let i=l.includes(".")&&String(Q(l))==="0"?l:String(Q(l));const F=Te(e.target.value),U=Te(i),z=U.length-F.length;let h=t+z;if((X=e==null?void 0:e.inputType)!=null&&X.includes("delete")&&z>0&&t===U[U.length-1]){const ee=e.target.value.slice(0,t-1)+e.target.value.slice(t);i=String(Q(ee.replace(/,/g,""))),h=h-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",i),x.value=i,setTimeout(()=>{e.target.setSelectionRange(h<0?0:h,h<0?0:h)},0)};return se(()=>V.value,e=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",e);const t=e!=null&&e.includes(".")&&String(Q(e))==="0"?e:String(Q(e));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",t),t!==x.value&&(x.value=t)},{immediate:!0}),{amountLock:$,currentStep:g,sliderStyle:qe,coinAmount:pe,pricerange:ie,fromCoin:C,toCoin:p,fee:re,direct:W,getCoinIcon:Ne,isSelectFullRange:ve,store:A,initPrice:V,inputPriceLock:N,specifyPriceLock:q,changeCurrentPrice:D,minPrice:L,maxPrice:w,defaultMinPrice:ce,defaultMaxPrice:ue,clickFullRange:Fe,createPoolInfo:S,isFullRange:y,priceRangeChangeMin:Me,priceRangeChangeMax:Le,fromCoinAmount:B,toggle:Ae,showFromCoinLock:lo,showToCoinLock:no,inputChange:Ue,currentPrice:de,importIcon:ne,formattedValue:x,handleInput:$e}}});const m=o=>(Ze("data-v-19a71a37"),o=o(),xe(),o),fo={class:"creat-pool-container"},ho={class:"creat-pool-left"},_o={class:"progress"},ko=m(()=>a("div",{class:"slider-ratio-content"},null,-1)),Co=[ko],So={class:"progress-text"},yo={key:0},Po={key:0},bo={key:0},wo={key:0},Ro={key:0},Io={class:"creat-pool-center"},To={class:"title"},No=m(()=>a("div",{class:"left"},"Set Initial Price",-1)),qo={class:"right"},Fo={key:0,class:"token-box"},Mo=m(()=>a("div",null,[a("svg",{class:"icon icon-up","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Lo=m(()=>a("div",null,[a("svg",{class:"icon icon-down","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Ao=[Mo,Lo],Do={class:"content top-content"},Uo=m(()=>a("div",{class:"top"},[a("span",null,"💡"),a("span",null,"Please set an initial price for this new pool to start.")],-1)),$o={class:"bottom"},Vo={class:"input-div"},Bo={key:0,class:"lock"},Oo={class:"title"},jo=m(()=>a("div",{class:"left"},"Set Price Range",-1)),Eo={class:"right"},zo={key:0,"aria-hidden":"true"},Xo=m(()=>a("use",{"xlink:href":"#icon-icon_sel"},null,-1)),Go=[Xo],Ko=m(()=>a("span",null,"Full Range",-1)),Ho={class:"content bottom-content"},Jo=m(()=>a("span",null,"💡",-1)),Qo=m(()=>a("span",null,"Please specify a price range that you want to provide your liquidity within.",-1)),Wo=[Jo,Qo],Yo={class:"bottom"},Zo={class:"set-price-box"},xo={key:0,class:"lock"},ea={key:1,class:"create-pool-warning"},oa={key:2,class:"position-tips"},aa=["src"],ta={class:"error"},sa={class:"creat-pool-right-container"};function la(o,O,N,q,ve,pe){var Y,A;const g=Ye,W=Be,ie=Oe,n=Ke("CreatePoolRight"),f=He("image");return c(),u("div",fo,[a("div",ho,[a("div",_o,[a("div",{class:"slider-ratio",style:Je(o.sliderStyle(o.currentStep))},Co,4)]),a("div",So,[a("div",{class:M(["row",Number(o.currentStep)>=1?"":"color-text"])},[Number(o.currentStep)>=1&&o.fromCoin&&o.toCoin?(c(),u("span",yo,"✓")):v("",!0),K(" Select Tokens ")],2),a("div",{class:M(["row",Number(o.currentStep)>=2?"":"color-text"])},[Number(o.currentStep)>=2&&o.fee?(c(),u("span",Po,"✓")):v("",!0),K(" Select Fee Tier ")],2),a("div",{class:M(["row",Number(o.currentStep)>=3?"":"color-text"])},[Number(o.currentStep)>=3&&o.initPrice?(c(),u("span",bo,"✓")):v("",!0),K(" Set Initial Price ")],2),a("div",{class:M(["row",Number(o.currentStep)>=4?"":"color-text"])},[Number(o.currentStep)>=4&&o.minPrice&&o.maxPrice?(c(),u("span",wo,"✓")):v("",!0),K(" Select Price Range ")],2),a("div",{class:M(["row",Number(o.currentStep)>=5?"":"color-text"])},[Number(o.currentStep)>=5&&o.fromCoinAmount?(c(),u("span",Ro,"✓")):v("",!0),K(" Confirm Liquidity ")],2)])]),a("div",Io,[a("div",To,[No,a("div",qo,[o.fromCoin&&o.toCoin?(c(),u("div",Fo,[Qe(a("img",null,null,512),[[f,(Y=o.fromCoin)==null?void 0:Y.logo_url]]),a("span",null,le((A=o.fromCoin)==null?void 0:A.symbol),1),a("div",{class:"icon-change",onClick:O[0]||(O[0]=(...j)=>o.toggle&&o.toggle(...j))},Ao)])):v("",!0)])]),a("div",Do,[Uo,a("div",$o,[a("div",Vo,[H(g,{value:o.formattedValue,type:"text",placeholder:"0.0",onChange:o.inputChange,onInput:o.handleInput},null,8,["value","onChange","onInput"]),a("span",null,le(o.toCoin&&o.toCoin.symbol)+" per "+le(o.fromCoin&&o.fromCoin.symbol),1)]),o.inputPriceLock?(c(),u("div",Bo,[H(W)])):v("",!0)])]),a("div",Oo,[jo,a("div",Eo,[a("div",{class:M(["radio",o.isFullRange?"active-radio":""]),onClick:O[1]||(O[1]=(...j)=>o.clickFullRange&&o.clickFullRange(...j))},[o.isFullRange?(c(),u("svg",zo,Go)):v("",!0)],2),Ko])]),a("div",Ho,[a("div",{class:M(["top",o.specifyPriceLock?"":"no-border"])},Wo,2),a("div",Yo,[a("div",Zo,[H(ie,{min:o.minPrice,max:o.maxPrice,"from-coin":o.fromCoin,"to-coin":o.toCoin,direct:o.direct,"default-min-price":o.defaultMinPrice,"default-max-price":o.defaultMaxPrice,"pool-info":o.createPoolInfo,loading:!1,"current-price-tab":"custom",onOnChangeMinPrice:o.priceRangeChangeMin,onOnChangeMaxPrice:o.priceRangeChangeMax},null,8,["min","max","from-coin","to-coin","direct","default-min-price","default-max-price","pool-info","onOnChangeMinPrice","onOnChangeMaxPrice"])]),o.specifyPriceLock?(c(),u("div",xo,[H(W)])):v("",!0),Number(o.currentStep)>=4&&(o.showFromCoinLock||o.showToCoinLock)&&Number(o.maxPrice)>Number(o.minPrice)?(c(),u("div",ea," To create a new pool, the initial price you set must be within your price range. ")):v("",!0),Number(o.currentStep)>=4&&Number(o.minPrice)>Number(o.maxPrice)?(c(),u("div",oa,[a("img",{src:("importIcon"in o?o.importIcon:We(ne))("/image/icon-tips-error@2x.png"),alt:""},null,8,aa),a("p",ta,le(o.$t("tips.positionError")),1)])):v("",!0)])])]),a("div",sa,[H(n,{"create-pool-info":o.createPoolInfo,onToggle:o.toggle},null,8,["create-pool-info","onToggle"])])])}const Aa=Ge(go,[["render",la],["__scopeId","data-v-19a71a37"]]);export{Aa as default};
