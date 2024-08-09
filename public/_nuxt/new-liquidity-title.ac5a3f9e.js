import{a as Q,b as ce,d as oe,u as ie,f as F,F as de,c as ae,E as se,l as ye}from"./pool.2587b8e2.js";import{a as X,m as y,e as Y,o as f,f as P,r as k,E as te,D as B,h as l,v as S,i as W,w as z,z as H,S as me,x as E,I as fe,y as pe,B as ve,j as K,l as Pe,a3 as Se,a4 as Ce,q as $e,c as G,t as Ie,u as x,J as Te,a5 as we,p as ge,k as be,H as ue,L as Ne,C as Ae,b as Me}from"./entry.a4db0d61.js";import{_ as Oe}from"./img-lock_2x.a28135f4.js";import{_ as je}from"./lock.6d90b618.js";import"./index.b10985b1.js";/* empty css              */import"./decimal.a2826370.js";import{D as A}from"./decimal.765d8738.js";import{i as ee}from"./import-icon.de3e6c66.js";import{_ as ke}from"./token-warning.aafe8d13.js";/* empty css              */import{u as Be,b as ne}from"./index.6288ac24.js";import{u as Re}from"./useDebounceFunction.2335f32c.js";/* empty css              */import{_ as qe}from"./swap-setting.e196717e.js";const Le=X({setup(){const e=Q();return{storeIndex:y(()=>e)}}});const Ve={class:"create-pool-lock"},De={key:0,src:Oe,alt:""},Fe={key:1,src:je,alt:""};function Ue(e,t,s,p,g,c){return f(),P("div",Ve,[e.storeIndex.theme=="default"?(f(),P("img",De)):(f(),P("img",Fe))])}const tn=Y(Le,[["render",Ue],["__scopeId","data-v-fb497971"]]),Ee=X({props:{inputValue:{type:String,default:""},pType:{type:String,required:!0},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},dirction:{type:Boolean,default:!0},defaultMaxPrice:{type:String,default:""},defaultMinPrice:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},loading:{type:Boolean,default:!1},intPrice:{type:String,default:""}},emits:["onInput"],setup(e,t){const s=k(""),p=k("");let g=k(""),c=k("");const a=te(),b=Q(),d=y(()=>b),M=y(()=>d.value.chainName?ce(d.value.chainName):{}),C=()=>{var o,r,_,j;if(!(Number.isNaN(s.value)||Number(s.value)!==0&&!s.value||!e.poolInfo.tickSpacing))try{const{TickUtil:v,TickMath:R,getNearestTickByTick:T}=M.value,I=R.priceToTickIndex(new A(s.value.toString()),(o=m.value.token_a)==null?void 0:o.decimals,(r=m.value.token_b)==null?void 0:r.decimals),w=T(I,Number(m.value.tickSpacing),!0);let i;if(i=R.tickIndexToPrice(w+Number(m.value.tickSpacing),(_=m.value.token_a)==null?void 0:_.decimals,(j=m.value.token_b)==null?void 0:j.decimals),e.pType=="Min"&&Number(i.toString())>Number(c.value.toString()))return;const u=i.toString();t.emit("onInput",u)}catch{t.emit("onInput","")}},V=()=>{var o,r,_,j;try{if(Number.isNaN(s.value)||!s.value||!e.poolInfo.tickSpacing)return;const{TickUtil:v,TickMath:R,getNearestTickByTick:T}=M.value,I=R.priceToTickIndex(new A(s.value.toString()),(o=m.value.token_a)==null?void 0:o.decimals,(r=m.value.token_b)==null?void 0:r.decimals),w=T(I,Number(m.value.tickSpacing),!0);let i;i=R.tickIndexToPrice(w-Number(m.value.tickSpacing),(_=m.value.token_a)==null?void 0:_.decimals,(j=m.value.token_b)==null?void 0:j.decimals);const u=i.toString();if(e.pType=="Max"&&Number(i)<Number(g.value))return;t.emit("onInput",u)}catch{t.emit("onInput","")}},$=o=>{let r=o.toString().replace(/[^\d.]/g,"");const _=/^\d+(\.\d+)?$/;r.split(".").length>2&&!_.exec(r)&&(r=r.substr(0,r.length-1)),p.value=String(r)},h=o=>{if(o&&o!=="0"&&o!=="∞"){s.value=o;const _=o.toString().split(".")[1];p.value=o!=="0"&&o!=="∞"&&_&&_.length>6?oe(o.toString(),6):o.toString()}else(o=="0"||o=="∞"||a.query.action)&&(p.value=o)},O=o=>{var T,I,w,i;const{TickUtil:r,TickMath:_,getNearestTickByTick:j}=M.value,v=o.target.value;let R;if(v==="0"){R=-443636,t.emit("onInput","0");return}else if(v!=="0"&&v){const u=_.priceToTickIndex(new A(v),(T=m.value.token_a)==null?void 0:T.decimals,(I=m.value.token_b)==null?void 0:I.decimals);R=j(Number(u),Number(m.value.tickSpacing),!0);const q=_.tickIndexToPrice(new A(R),(w=m.value.token_a)==null?void 0:w.decimals,(i=m.value.token_b)==null?void 0:i.decimals);h(q.toString()),t.emit("onInput",q.toString())}else t.emit("onInput")};B(()=>e.defaultMinPrice,(o,r)=>{o!==r&&(g.value=e.defaultMinPrice)},{immediate:!0}),B(()=>e.defaultMaxPrice,(o,r)=>{o!==r&&(c.value=e.defaultMaxPrice)},{immediate:!0}),B(()=>[e.inputValue,a.query.action],([o])=>{h(o)},{immediate:!0});const m=k({});B(()=>e.poolInfo,(o,r)=>{o&&(m.value=o)},{immediate:!0});const n=k("");return B(()=>e.currentPriceTab,o=>{n.value=o},{immediate:!0}),{addPrice:C,minusPrice:V,oValue:p,changeValue:$,isDisabled:n,route:a,onBlur:O}}});const We={class:"set-price-item"},ze={class:"title"},He={class:"input-box"},Je={key:0,class:"minus-btn"},Ge={key:1,class:"plus-btn"};function Ke(e,t,s,p,g,c){const a=fe,b=me;return f(),P("div",We,[l("div",ze,S(e.pType=="Max"?e.$t("common.maxPrice"):e.pType=="Min"?e.$t("common.minPrice"):""),1),W(b,{loading:e.loading,active:"",paragraph:!1},{default:z(()=>[l("div",He,[e.currentPriceTab!=="full range"?(f(),P("a",Je,[l("div",{class:H(!e.fromCoin&&!e.toCoin||e.poolInfo&&!e.poolInfo.tickSpacing&&!e.$route.query.action?"reductionDis":"reduction"),onClick:t[0]||(t[0]=(...d)=>e.minusPrice&&e.minusPrice(...d))},"-",2)])):E("",!0),W(a,{id:"pValu",value:e.oValue,"onUpdate:value":t[1]||(t[1]=d=>e.oValue=d),disabled:e.route.query.action&&!e.intPrice,autocomplete:"off",placeholder:"0",onChange:t[2]||(t[2]=d=>e.changeValue(d.target.value)),onBlur:t[3]||(t[3]=d=>e.onBlur(d))},null,8,["value","disabled"]),e.currentPriceTab!=="full range"?(f(),P("a",Ge,[l("div",{class:H(!e.fromCoin&&!e.toCoin||e.poolInfo&&!e.poolInfo.tickSpacing&&!e.$route.query.action?"addDis":"add"),onClick:t[4]||(t[4]=(...d)=>e.addPrice&&e.addPrice(...d))},"+",2)])):E("",!0)])]),_:1},8,["loading"]),l("p",{class:H(["per-text",!e.toCoin&&!e.fromCoin?"per-text-disabled":""])},S(e.toCoin&&e.toCoin.symbol)+" per "+S(e.fromCoin&&e.fromCoin.symbol),3)])}const _e=Y(Ee,[["render",Ke],["__scopeId","data-v-c24339c0"]]),Qe=X({components:{NewLiquiditySetPrice:_e},props:{min:{type:String,default:""},max:{type:String,default:""},defaultMinPrice:{type:String,default:""},defaultMaxPrice:{type:String,default:""},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},dirction:{type:Boolean,default:!0},invalidPriceRange:{type:Boolean,default:!1},poolInfo:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},loading:{type:Boolean,default:!1},intPrice:{type:String,default:""}},setup(e,t){let s=k(""),p=k(""),g=k(),c=k(!1),a=k(!1);const b=k({}),d=Q(),M=y(()=>d);pe(()=>{s.value=e.min,p.value=e.max}),B(()=>e.currentPriceTab,(n,o)=>{n!==o&&(g.value=e.currentPriceTab)},{immediate:!0}),B(()=>e.min,(n,o)=>{n!==o&&(s.value=n)}),B(()=>e.max,(n,o)=>{n!==o&&(p.value=n)}),B(()=>e.poolInfo,(n,o)=>{n&&(b.value=n)},{immediate:!0});const C=k("");B(()=>e.intPrice,n=>{C.value=n},{immediate:!0,deep:!0});const V=n=>{s.value=n,t.emit("onChangeMinPrice",n)},$=n=>{p.value=n,t.emit("onChangeMaxPrice",n)};B(c,(n,o)=>{n!==o&&t.emit("onChangeFullRange",n)});const h=()=>{s.value=e.defaultMinPrice,p.value=e.defaultMaxPrice,a.value=!1,c.value=!1},O=()=>{a.value=!1,s.value="0",p.value="∞"};return B(c,(n,o)=>{n!==o&&t.emit("onChangeFullRange",n)}),{store:M,changeMinPrice:V,changeMaxPrice:$,importIcon:ee,resetPrice:h,changeShowUnderStand:()=>{c.value=!c.value,c.value?a.value=!0:h(),a.value||(s.value=e.defaultMinPrice,p.value=e.defaultMaxPrice)},showUnderStand:a,minPrice:s,maxPrice:p,understand:O,isRadio:c,initPirce:C}}});const Xe={class:"set-price"},Ye={class:"card-container"},Ze={key:0,class:"card"},xe={key:1,class:"understand"},et={class:"left"},tt={class:"right"};function nt(e,t,s,p,g,c){const a=_e,b=ve;return f(),P("div",Xe,[l("div",Ye,[e.showUnderStand?(f(),P("div",xe,[l("div",et,[l("p",null,S(e.$t("common.lowerEfficiency")),1),l("p",null,S(e.$t("common.lowerEfficiencyTips")),1)]),l("div",tt,[W(b,{onClick:e.understand},{default:z(()=>[K(S(e.$t("common.understand")),1)]),_:1},8,["onClick"])])])):(f(),P("div",Ze,[W(a,{value:e.minPrice,"onUpdate:value":t[0]||(t[0]=d=>e.minPrice=d),"input-value":e.minPrice,"p-type":"Min","default-max-price":e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,dirction:e.dirction,"pool-info":e.poolInfo,loading:e.loading,"current-price-tab":e.currentPriceTab,"int-price":e.initPirce,onOnInput:e.changeMinPrice,onAddValue:e.changeMinPrice,onDelValue:e.changeMinPrice},null,8,["value","input-value","default-max-price","from-coin","to-coin","dirction","pool-info","loading","current-price-tab","int-price","onOnInput","onAddValue","onDelValue"]),W(a,{value:e.maxPrice,"onUpdate:value":t[1]||(t[1]=d=>e.maxPrice=d),"input-value":e.maxPrice,"p-type":"Max","default-min-price":e.minPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,dirction:e.dirction,"pool-info":e.poolInfo,loading:e.loading,"int-price":e.initPirce,"current-price-tab":e.currentPriceTab,onOnInput:e.changeMaxPrice,onAddValue:e.changeMaxPrice,onDelValue:e.changeMaxPrice},null,8,["value","input-value","default-min-price","from-coin","to-coin","dirction","pool-info","loading","int-price","current-price-tab","onOnInput","onAddValue","onDelValue"])]))])])}const nn=Y(Qe,[["render",nt],["__scopeId","data-v-cd90a1d8"]]),ot=X({components:{TokenWarning:ke},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""}},setup(e,t){const{t:s,locale:p}=Pe(),g=Q(),c=y(()=>g),a=y(()=>new A(Number(e.balance)).div(2)),b=Se(Ce,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function d(){this.$emit("onSelect")}const M=Re(i=>{t.emit("onInput",i),t.emit("onInputLoading",!1)},500),C=k(""),V=i=>{const u=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(v==null?void 0:v.value)&&(v==null?void 0:v.value)}})?).*$`),q=i.target.value.replace(/,/g,"").replace(u,"$1");t.emit("onInputLoading",!0),M(q)},$=i=>{var re;const u=i.target.selectionStart,q=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(v==null?void 0:v.value)&&(v==null?void 0:v.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",i.target.value);let N=i.target.value.replace(/,/g,"").replace(q,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",N);let L=N.includes(".")&&String(F(N))==="0"?N:String(F(N));const D=se(i.target.value),U=se(L),Z=U.length-D.length;let J=u+Z;if((re=i==null?void 0:i.inputType)!=null&&re.includes("delete")&&Z>0&&u===U[U.length-1]){const he=i.target.value.slice(0,u-1)+i.target.value.slice(u);L=String(F(he.replace(/,/g,""))),J=J-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",L),C.value=L,setTimeout(()=>{i.target.setSelectionRange(J<0?0:J,J<0?0:J)},0)};B(()=>e.inputValue,i=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",i);const u=i.includes(".")&&String(F(i))==="0"?i:String(F(i));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",u),console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ addCommom(newValue):",F(i)),u!==C.value&&(C.value=u)},{immediate:!0});const h=Be(),O=y(()=>h),m=ie(),n=y(()=>m),o=y(()=>n.value.tokensWarningObj);let r=k({});B(()=>n.value.RATES,i=>{i&&(r.value=i)},{immediate:!0,deep:!0});const _=y(()=>{var i,u,q;return ye(Number(e.inputValue)*Number((r==null?void 0:r.value)&&((i=r==null?void 0:r.value)==null?void 0:i[e.address])&&((q=(u=r==null?void 0:r.value)==null?void 0:u[e.address])==null?void 0:q.price)),2)}),j=y(()=>{var i,u;return n.value.tokensObj&&e.address&&n.value.tokensObj[e.address]&&((i=n.value.tokensObj[e.address])==null?void 0:i.labels)&&((u=n.value.tokensObj[e.address])==null?void 0:u.labels[0])}),v=y(()=>{var i;return n.value.tokensObj&&e.address&&n.value.tokensObj[e.address]&&((i=n.value.tokensObj[e.address])==null?void 0:i.decimals)}),R=y(()=>{var i,u,q,N;return e.coinIcon||((u=(i=n==null?void 0:n.value)==null?void 0:i.tokensObj[e.address])==null?void 0:u.logo_url)||((N=(q=n==null?void 0:n.value)==null?void 0:q.tokensObj[e.address])==null?void 0:N.logoURI)||(c.value.theme==="default"?ee("/image/coins/unknown.png"):ee("/image/coins/sui-unknown.png"))}),T=y(()=>n.value.tokensObj),I=y(()=>c.value.theme);return{route:te(),theme:I,currentIcon:R,tokensObj:T,pool:n,halfBalance:a,coinLabels:j,t:s,addCommom:F,store:c,wallet:O,indicator:b,inputChange:V,importIcon:ee,selectCoin:d,amountPirce:_,coinDecimals:v,formatNumber:de,tokensWarningObj:o,checkNullObj:ae,handleInput:$,formattedValue:C}}});const it=e=>(ge("data-v-2cb78902"),e=e(),be(),e),at={class:"card"},lt={class:"top"},rt={key:1,class:"input-div"},st={key:0},ut={class:"loading-token"},ct={key:1},dt={key:0},mt=it(()=>l("use",{"xlink:href":"#icon-icon_on"},null,-1)),ft=[mt],pt={class:"bottom"},vt={key:0,class:"amount-price"},gt={key:1},bt={class:"top"},kt={class:"right"},_t={class:"balance"};function ht(e,t,s,p,g,c){const a=fe,b=Te,d=we,M=ke,C=me,V=ve,$=$e("image");return f(),P("div",at,[l("div",lt,[e.inputDisabled?(f(),P("div",rt,[e.inputValue?(f(),P("span",st,S(e.inputValue),1)):(f(),G(b,{key:1,indicator:e.indicator},null,8,["indicator"]))])):(f(),G(a,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.formattedValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:e.handleInput,onFocus:t[0]||(t[0]=h=>e.$emit("onFocus"))},null,8,["value","disabled","onChange","onInput"])),l("div",{class:H(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"?"left-opcity":""].join("")]),onClick:t[1]||(t[1]=h=>e.pool.isTokenLoading?"":e.selectCoin())},[l("div",ut,[e.pool.isTokenLoading?(f(),G(d,{key:0,active:"",size:"small",paragraph:!1})):e.address?Ie((f(),P("img",ct,null,512)),[[$,e.currentIcon]]):E("",!0),W(M,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),W(C,{loading:e.pool.isTokenLoading,class:"loading-token-skeleton",active:"",paragraph:!1},{default:z(()=>[l("div",null,[l("p",null,S(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(f(),P("p",dt,S(e.coinLabels),1)):E("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(f(),P("svg",{key:0,class:H(["icon",e.pool.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},ft,2)):E("",!0)],2)]),l("div",pt,[e.inputValue&&e.amountPirce!="--"?(f(),P("div",vt," $"+S(("formatNumber"in e?e.formatNumber:x(de))(e.amountPirce)),1)):(f(),P("div",gt)),l("div",bt,[l("div",kt,[K(S(e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),l("span",_t,S(e.wallet.connected?("addCommom"in e?e.addCommom:x(F))(e.balance,e.coinDecimals):"0"),1),e.havemax&&e.wallet.connected?(f(),G(V,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:x(F))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[2]||(t[2]=h=>e.$emit("onHalf"))},{default:z(()=>[K(S("Half"))]),_:1},8,["disabled"])):E("",!0),e.havemax&&e.wallet.connected?(f(),G(V,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:x(F))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=h=>e.$emit("onMax"))},{default:z(()=>[K(S(e.$t("button.max")),1)]),_:1},8,["disabled"])):E("",!0)])])])])}const on=Y(ot,[["render",ht],["__scopeId","data-v-2cb78902"]]),yt=X({props:{fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},fixedFromCoin:{type:Boolean,defalut:!0},isInputTotalAmount:{type:Boolean,default:!1},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},createPoolInfo:{type:Object,default:()=>({})},currentPrice:{type:Number,default:0},currentPriceReverse:{type:Number,default:0},currentPriceTab:{type:String,default:""}},setup(e){const t=ie(),s=y(()=>t),p=Q(),g=y(()=>p),c=te(),a=y(()=>{let $=null;if(c.name=="liquidity-create")$=e.createPoolInfo;else for(const h in s.value.poolsObj){const O=s.value.poolsObj[h];O.address==c.query.poolAddress&&($=O)}return $}),b=y(()=>g.value.chainName?ce(g.value.chainName):{}),d=y(()=>g.value.slippage),M=k(),C=k(),V=async()=>{var q;if(!e.minPrice&&!e.maxPrice)return;console.log("🚀🚀🚀 ~ file: new-liquidity-deposit-ratio.vue:170 ~ getRatio ~ poolInfo.value:",a.value);const{TickUtil:$,TickMath:h,getNearestTickByTick:O}=b.value,m=a.value.token_a.decimals,n=a.value.token_b.decimals;let o,r,_,j,v,R,T,I=1,w=1;const i=a.value.current_tick_index;let u=s.value.poolPriceConfigObj&&s.value.poolPriceConfigObj[a.value.address]&&s.value.poolPriceConfigObj[a.value.address].recommend_ranges||{};if(a.value.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&a.value.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?T=!0:T=!1,e.minPrice==="0"&&e.maxPrice==="∞")_=$.getMinIndex(a.value.tickSpacing),j=$.getMaxIndex(a.value.tickSpacing);else if(e.currentPriceTab=="custom"){T?(o=e.minPrice,r=e.maxPrice):(o=e.maxPrice!=="∞"?new A(1).div(e.maxPrice).toString():1/0,r=new A(1).div(e.minPrice).toString());try{v=h.priceToTickIndex(new A(o),m,n)}catch{v=-443636}try{R=h.priceToTickIndex(new A(r),m,n)}catch{R=443636}o==0&&(v=-443636),_=O(v,Number(a.value.tickSpacing),!0),j=O(R,Number(a.value.tickSpacing),!0)}else _=u&&u[e.currentPriceTab]&&u[e.currentPriceTab].lower,j=u&&u[e.currentPriceTab]&&u[e.currentPriceTab].upper;if(e.maxPrice==="∞"||i>=_&&i<=j){let N;if(e.fixedFromCoin){const U=new A(Number(e.fromCoinAmount)==0?1:e.fromCoinAmount).mul(Math.pow(10,e.fromCoin.decimals)).toString();N=new ne(U)}else{const U=new A(Number(e.toCoinAmount)==0?1:e.toCoinAmount).mul(Math.pow(10,e.toCoin.decimals)).toString();N=new ne(U)}if(console.log("🚀🚀🚀 ~ file: new-liquidity-deposit-ratio.vue:262 ~ getRatio ~ poolInfo.value.current_sqrt_price:",a.value.current_sqrt_price),((q=a==null?void 0:a.value)==null?void 0:q.current_sqrt_price)<=0)return!1;const{tokenMaxA:L,tokenMaxB:D}=await b.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:a.value.token_a,tokenB:a.value.token_b,lowerTick:_,upperTick:j,coinAmount:N,iscoinA:T?e.fixedFromCoin:!e.fixedFromCoin,roundUp:!0,slippage:Number(d.value)/100,curSqrtPrice:new ne(a.value.current_sqrt_price)});T?e.fixedFromCoin?(w=Number(D)>0?D:"",I=Number(L)>0?L:""):(I=Number(L)>0?L:"",w=Number(D)>0?D:""):(e.fixedFromCoin,w=L,I=D)}else i>j?T?(w=1,I=0):(I=1,w=0):i<_&&(T?(w=0,I=1):(w=1,I=0));if(e.minPrice=="0"&&e.maxPrice=="∞")M.value=50,C.value=50;else{const N=I?Number(I):0,L=w?Number(w):0,D=new A(L).add(new A(T?new A(N*e.currentPrice):new A(N*e.currentPriceReverse))),U=oe(new A(N).mul(new A(T?e.currentPrice:e.currentPriceReverse)).div(D).mul(100).toNumber().toFixed(2),2),Z=oe(new A(L).div(D).mul(100).toNumber().toFixed(2),2);M.value=U,C.value=Z}};return B(()=>[a.value,e.minPrice,e.maxPrice,e.fromCoinAmount,e.toCoinAmount,e.isInputTotalAmount],([$,h,O,m,n])=>{h&&O&&$&&!ae($)&&(h!=="0"||O!=="0")?V():(M.value="",C.value="")},{immediate:!0,deep:!0}),{fromCoinRatio:M,toCoinRatio:C}}});const Pt={class:"deposit-ratio"},St={class:"deposit-ratio-text"},Ct=l("span",null,"Deposit Ratio",-1),$t=l("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-icon-tips1"})],-1),It={class:"deposit-ratio-content"},Tt={class:"coin-ratio"},wt={class:"coin-a-ratio"},Nt={class:"coin-b-ratio"},At={class:"ratio-progress"};function Mt(e,t,s,p,g,c){var b,d;const a=Ne;return f(),P("div",Pt,[l("div",St,[Ct,W(a,{placement:"bottom","arrow-point-at-center":""},{title:z(()=>[l("span",null,S(e.$t("newAdd.depositRatioTips")),1)]),default:z(()=>[$t]),_:1})]),l("div",It,[l("div",Tt,[l("div",wt,[l("span",null,S((b=e.fromCoin)==null?void 0:b.symbol),1),K(" "+S(e.fromCoinRatio)+"% ",1)]),l("div",Nt,[l("span",null,S((d=e.toCoin)==null?void 0:d.symbol),1),K(" "+S(e.toCoinRatio)+"% ",1)])]),l("div",At,[l("div",{class:"from-percent",style:ue({width:e.fromCoinRatio+"%"})},null,4),l("div",{class:"to-percent",style:ue({width:e.toCoinRatio+"%"})},null,4)])])])}const an=Y(yt,[["render",Mt]]),Ot=X({props:{poolInfo:{type:Object,default:()=>({})}},setup(e,t){const s=k(!1),p=k(null),g=k(0);let c=k(!1);const a=k(20),b=ie(),d=Q(),M=k(!1);pe(()=>{}),Ae(()=>{clearInterval(p.value)});const C=()=>{c.value=!1,p.value=setInterval(()=>{var n;M.value||g.value<a.value&&(g.value+=1,g.value===a.value&&(c.value=!0,(n=e==null?void 0:e.poolInfo)!=null&&n.poolAddress&&b.updateCurrentPools(e.poolInfo.poolAddress,d.chainName),g.value=0,setTimeout(()=>{c.value=!1},1e3)))},1e3)},V=y(()=>d.slippage),$=()=>{t.emit("clearAll")},h=()=>{c.value||(c.value=!0,g.value=0,t.emit("clickRefresh"),setTimeout(()=>{c.value=!1,C()},1e3))};B(()=>e.poolInfo,n=>{n&&!p.value&&C()},{immediate:!0});const O=Me(),m=te();return{refresh:c,clickRefresh:h,isShowSwapSetting:s,countdown:g,autoRefreshTime:a,slippage:V,clearAll:$,checkNullObj:ae,router:O,route:m}}});const le=e=>(ge("data-v-906fb979"),e=e(),be(),e),jt={class:"title"},Bt=le(()=>l("div",{class:"left"},[l("span",null,"Deposit Amounts")],-1)),Rt=le(()=>l("svg",{class:"icon","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),qt={key:0,class:"deposit-progress"},Lt=le(()=>l("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Vt=[Lt];function Dt(e,t,s,p,g,c){const a=qe;return f(),P("div",jt,[Bt,l("div",{class:H(["right title-right deposit-setting",e.poolInfo?"havePoolInfo":"noPoolInfo"])},[l("div",{class:"slippage-icon",onClick:t[0]||(t[0]=b=>e.isShowSwapSetting=!0)},[Rt,l("span",null,S(e.slippage)+"%",1)]),e.route.name!=="liquidity-create"?(f(),P("div",qt,[(f(),P("svg",{"aria-hidden":"true",class:H(e.refresh?"refresh-icon refresh":"refresh-icon"),onClick:t[1]||(t[1]=(...b)=>e.clickRefresh&&e.clickRefresh(...b))},Vt,2))])):E("",!0)],2),e.isShowSwapSetting?(f(),G(a,{key:0,onOnClose:t[2]||(t[2]=b=>e.isShowSwapSetting=!1)})):E("",!0)])}const ln=Y(Ot,[["render",Dt],["__scopeId","data-v-906fb979"]]);export{ln as _,an as a,tn as b,on as c,nn as d};
