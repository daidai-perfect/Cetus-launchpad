import{_ as De}from"./back.b1b137fd.js";import{_ as Ee}from"./token-warning.11ff7cab.js";import{_ as We}from"./apr-tips.835e390d.js";import{_ as Ye}from"./coin-select.46a920a0.js";import{_ as He}from"./token-warning-modal.cdb1d9ac.js";import{u as Ve,c as H,a as _,s as fe,e as ze,T as Xe,d as qe}from"./pool.ec7155de.js";import{a as Ke,y as Qe,b as Ge,r as T,m as Je,l as b,H as Ze,K as xe,q as G,e as eo,Q as oo,s as so,o as t,f as u,h as n,i as W,A as U,z as J,x as q,t as Z,w as we,v as h,F as Ae,E as Pe,u as L,c as $e,M as no,j as lo,p as ao,k as io}from"./entry.99d20ac2.js";/* empty css              */import{u as ro,c as Se}from"./sha256.f7311d31.js";import{g as to}from"./common-fun.b05ef1ea.js";import{i as Ie}from"./import-icon.de3e6c66.js";import{direction as Me,createPoolFromCoin as uo,createPoolToCoin as co}from"./create-pool-data.27cef080.js";import{u as po}from"./farms.852b257b.js";import{D as j}from"./decimal.0bdeb344.js";import{_ as vo,a as fo}from"./img-no-data_2x.6bb29f71.js";import"./icon_rewards_2x.ad6df8fb.js";/* empty css              *//* empty css              */import"./img-no-Positions_2x.59bd36fa.js";import"./img-no-Positions_2x.be9f9259.js";import"./icon-selected_3x.09e9a6f0.js";import"./precision.a7a6c57b.js";const mo=Ke({setup(e,k){var Te;const{t:S,locale:Ne}=Qe(),a=Ge(),me=["Provide Liquidity","Your Liquidity","Analytics"],V=T(`${(Te=a==null?void 0:a.currentRoute)==null?void 0:Te.value.name.split("-")[1]}`||"Provide Liquidity"),x=T(!1),R=T(!1),pe=T(!0),ve=Ve(),z=ro(),y=Je(),P=T(""),c=T(null),p=T(null),X=T(null),w=T(y.query.poolAddress),K=T(""),$=b(()=>z),oe=b(()=>z.theme),f=b(()=>ve),se=b(()=>Se[$.value.chainName]),ne=b(()=>z.statsData),B=b(()=>$.value.chainName),D=b(()=>B.value?ze(B.value):null),le=b(()=>[{label:.01+"% "+S("common.feeTier"),title:.01+"% ",fee:1e-4,text:S("newAdd.bestVeryStablePairs")},{label:.05+"% "+S("common.feeTier"),title:.05+"% ",fee:5e-4,text:S("newAdd.bestStablePairs")},$.value.chainName=="Aptos"?{label:.2+"% "+S("common.feeTier"),title:.2+"% ",fee:.002,text:S("newAdd.bestMostPairs")}:{label:.25+"% "+S("common.feeTier"),title:.25+"% ",fee:.0025,text:S("newAdd.bestMostPairs")},$.value.chainName=="Aptos"?{label:.6+"% "+S("common.feeTier"),title:.6+"% ",fee:.006,text:S("newAdd.besteExoticPairs")}:{label:"1% "+S("common.feeTier"),title:"1% ",fee:.01,text:S("newAdd.besteExoticPairs")}]),ee=b(()=>{if(f.value.poolConfigList&&c.value&&p.value){const o=f.value.poolConfigList.filter(l=>{var C,m,i,v;return l.token_a.address.toUpperCase()===((C=c.value.address)==null?void 0:C.toUpperCase())&&l.token_b.address.toUpperCase()===((m=p.value.address)==null?void 0:m.toUpperCase())||l.token_b.address.toUpperCase()===((i=c.value.address)==null?void 0:i.toUpperCase())&&l.token_a.address.toUpperCase()===((v=p.value.address)==null?void 0:v.toUpperCase())}),s=[];return o.forEach(l=>{s.push(Number(l.fee))}),s}else return[]}),ae=o=>{const s={};let l=new j(0);o.forEach(r=>{var M;const g=(M=r==null?void 0:r.object)==null?void 0:M.liquidity;l=l.add(new j(g||0))});const C=[];let m=new j(0);o.forEach(r=>{const g=new j(r.object.liquidity),M=g.gt(0)?new j(g).div(l).mul(100).toString():0,N=fe(M,2);m=m.plus(N);const E=N.split(".");C.push({value:N,int:E[0],decimal:E[1],fee:r.fee})});let i=new j(100).minus(m).toNumber();const v=C.sort((r,g)=>Number(g.decimal)-Number(r.decimal));if(i)for(let r=0;r<v.length&&i;r++)v[r].value=new j(v[r].value).plus(.01).toString(),i=new j(i).minus(.01).toNumber();return o.forEach(r=>{var M;const g=(M=v.find(N=>r.fee===N.fee))==null?void 0:M.value;s[r.fee]={rateText:(g>0&&g<.01?"<0.01":g==0?0:fe(g,2))+"% select",rate:g}}),s},ie=b(()=>{if(f.value.poolConfigList&&c.value&&p.value){const o=f.value.poolConfigList.filter(l=>{var C,m,i,v;return l.token_a.address.toUpperCase()===((C=c.value.address)==null?void 0:C.toUpperCase())&&l.token_b.address.toUpperCase()===((m=p.value.address)==null?void 0:m.toUpperCase())||l.token_b.address.toUpperCase()===((i=c.value.address)==null?void 0:i.toUpperCase())&&l.token_a.address.toUpperCase()===((v=p.value.address)==null?void 0:v.toUpperCase())});return ae(o)}else return""}),Q=b(()=>{var o;return(o=$.value)==null?void 0:o.filterCreatePoolCoin});Ze(()=>{document.addEventListener("click",()=>{R.value=!1})}),xe(()=>{c.value=null,p.value=null,document.removeEventListener("click",()=>{R.value=!1})}),G(()=>[a,f.value.tokensObj],async([o,s])=>{var l,C;if(console.log("0727####491watch####  feeValue",y),o){const m=(l=a==null?void 0:a.currentRoute)==null?void 0:l.value.name.split("-")[1];V.value=!m||m=="privide"||m==""?"Provide Liquidity":m=="position"?"Your Liquidity":m=="analytics"?"Analytics":"Provide Liquidity",console.log(V.value,"##current.value")}(((C=a==null?void 0:a.currentRoute)==null?void 0:C.value.name)=="liquidity-create"||y.query.action=="newposition")&&s&&(c.value||(c.value=f.value.tokensObj[y.query.fromCoin]||await D.value.getTokenBySymbol(s,y.query.fromCoin)),p.value||(p.value=f.value.tokensObj[y.query.toCoin]||await D.value.getTokenBySymbol(s,y.query.toCoin)),console.log(y.query.fee!=="null","######558"),P.value=y.query.fee!=="null"&&y.query.fee?y.query.fee:"",console.log(P.value,"######558"))},{immediate:!0,deep:!0});const re=()=>{var l,C,m,i,v,r,g,M;let o=null;const s=f.value.poolConfigList;for(let N=0;N<s.length;N++){const E=s[N];if(E.token_a.address.toUpperCase()===((C=(l=c==null?void 0:c.value)==null?void 0:l.address)==null?void 0:C.toUpperCase())&&E.token_b.address.toUpperCase()===((i=(m=p==null?void 0:p.value)==null?void 0:m.address)==null?void 0:i.toUpperCase())||E.token_b.address.toUpperCase()===((r=(v=c==null?void 0:c.value)==null?void 0:v.address)==null?void 0:r.toUpperCase())&&E.token_a.address.toUpperCase()===((M=(g=p==null?void 0:p.value)==null?void 0:g.address)==null?void 0:M.toUpperCase())){o=E;break}}return o},te=o=>{var l;const s=re();if(s&&(uo.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,co.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,c.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,p.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,console.log("0524###test###11111###samePoolInfo###",s),console.log(p.value.address,"#####tokenB.value.address"),Me.value=c.value.address===((l=s==null?void 0:s.token_a)==null?void 0:l.address)),console.log(Me.value,"===>direction.value"),ee.value.includes(o.fee))X.value=o,P.value=o.fee,R.value=!1;else{if(B.value!=="Aptos"&&!Q.value[c.value.address]&&!Q.value[p.value.address])return;X.value=o,P.value=o.fee,R.value=!1}},d=T(!1),I=T(!1),F=o=>{K.value=o,o=="coinA"&&y.name=="liquidity-create"?(d.value=!0,I.value=!1):o=="coinB"&&y.name=="liquidity-create"&&(d.value=!1,I.value=!0),console.log(I.value,I.value,o,y.name,"#####selectToken"),x.value=!0},de=b(()=>Se[B.value].hasCreatePool);G(()=>[c.value,p.value,P.value,f.value.poolConfigList,de.value],([o,s,l,C,m])=>{if(console.log(o,s,l,"watch####  feeValue"),C.length>0){if(o&&s&&l){let i=null;i=C.find(v=>o.address==v.coinA.address&&s.address==v.coinB.address&&l==v.fee||o.address==v.coinB.address&&s.address==v.coinA.address&&l==v.fee),console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress1",i,i==null?void 0:i.fee,l),i?w.value=i?i.address:"":(w.value="",m?(console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress411"),a.replace(`/liquidity/create?fromCoin=${o.address}&toCoin=${s.address}&fee=${l}`)):a.replace(`/liquidity/deposit?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${l}&pool=notfount`))}else if(o&&s&&!l){let i=null;const v=C.filter(r=>(o==null?void 0:o.address)==r.coinA.address&&(s==null?void 0:s.address)==r.coinB.address||(o==null?void 0:o.address)==r.coinB.address&&(s==null?void 0:s.address)==r.coinA.address);console.log(v,"poolTvl sort######"),i=v.sort((r,g)=>{var M,N;return((M=g==null?void 0:g.object)==null?void 0:M.liquidity)-((N=r==null?void 0:r.object)==null?void 0:N.liquidity)})[0],console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress2",i,i==null?void 0:i.fee,l),i?w.value=i?i.address:"":(w.value="",a.replace(`/liquidity/deposit?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${l}&pool=notfount`))}}});const A=b(()=>{if(w.value){const o=w.value;return f.value.poolConfigObj[o]}else return null}),ue=b(()=>{if(w.value){const o=w.value;return f.value.poolsObj[o]}else return null}),Y=T("--"),ce=T("--");G(()=>[A.value,ue.value],async([o,s])=>{var l,C,m,i;if(o&&!H(o)){((l=a==null?void 0:a.currentRoute)==null?void 0:l.value.name)=="liquidity-deposit"||((C=a==null?void 0:a.currentRoute)==null?void 0:C.value.name)=="liquidity-create"?a.replace(`/liquidity/deposit?poolAddress=${o.address}`):((m=a==null?void 0:a.currentRoute)==null?void 0:m.value.name)=="liquidity-position"?a.replace(`/liquidity/position?poolAddress=${o.address}`):((i=a==null?void 0:a.currentRoute)==null?void 0:i.value.name)=="liquidity-analytics"&&a.replace(`/liquidity/analytics?poolAddress=${o.address}`),c.value=o.needReverse?o.coinB:o.coinA,p.value=o.needReverse?o.coinA:o.coinB,P.value=o.fee,w.value=o.address;const v=o.token_a.decimals,r=o.token_b.decimals;if($.value.chainName&&$.value.chainName.includes("Aptos")){const g=await D.value.getPool(o.address);Y.value=D.value.TickMath.sqrtPriceX64ToPrice(g.current_sqrt_price,v,r).toString(),ce.value=new j(1).div(D.value.TickMath.sqrtPriceX64ToPrice(g.current_sqrt_price,v,r)).toString()}else Y.value=o.price,H(s||{})||(ce.value=new j(1).div(Xe.sqrtPriceX64ToPrice(s.current_sqrt_price,v,r)).toString());console.log(Y.value,"currentPrice.value")}},{immediate:!0,deep:!0});const he=b(()=>f.value.currentPoolMoreInfo),Le=b(()=>ye.value.farmsPoolObj[w.value]);G(()=>[A.value,f.value.addressLpTokens],o=>{o&&to(A.value,f,$)},{immediate:!0,deep:!0}),console.log(he.value,"===>poolMoreInfo"),G(()=>$.value.chainName,(o,s)=>{o&&z.getStatsData(o,$.value.filterCoinsObj)},{immediate:!0});const Ue=o=>{P.value="",K.value=="coinA"?(c.value=o,(p.value&&p.value.address)==o.address&&(p.value=null,w.value="")):(p.value=o,(c.value&&c.value.address)==o.address&&(c.value=null,w.value=""))},je=o=>{var s;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((s=f.value.tokensObj[o==null?void 0:o.address])==null?void 0:s.logo_url)||($.value.theme==="default"?Ie("/image/coins/unknown.png"):Ie("/image/coins/sui-unknown.png"))},ge=T(),Ce=T(),be=T(!1),ke=(o,s)=>{console.log(o);const l=localStorage.getItem(o.address);console.log(f.value.tokensObj,"===>pools.value.tokensObj"),console.log(l,"===>coinLocak"),f.value.tokensObj&&f.value.tokensObj[o.address]&&f.value.tokensObj[o.address].isSelfBuilt&&!l&&(s=="fromCoin"&&(ge.value=o),s=="toCoin"&&(Ce.value=o),be.value=!0)};G(()=>[c.value,p.value],([o,s])=>{o&&!H(o)&&ke(o,"fromCoin"),s&&!H(s)&&ke(s,"toCoin")},{immediate:!0});const Oe=()=>{B.value!=="Aptos"?a.push("/pool/list"):a.push("/pools")},Fe=po(),ye=b(()=>Fe),Re=b(()=>ye.value.farmsPoolObj),Be=o=>{V.value=o,o=="Provide Liquidity"&&a.push(`/liquidity/deposit?poolAddress=${A==null?void 0:A.value.address}`),o=="Your Liquidity"&&a.push(`/liquidity/position?poolAddress=${A==null?void 0:A.value.address}`),o=="Analytics"&&a.push(`/liquidity/analytics?poolAddress=${A==null?void 0:A.value.address}`)},_e=b(()=>f.value.poolPositions);return{currentTab:V,changeTab:Be,tabList:me,currentPriceReverse:ce,Decimal:j,chainName:B,warningFromCoin:ge,warningToCoin:Ce,isShowTokenWarning:be,closeTokenWarning:Oe,direct:pe,currentPrice:Y,creatFeeItem:X,feeValue:P,checkNullObj:H,poolMoreInfo:he,poolTvl:ie,isShowFeeList:R,filterCreatePoolCoin:Q,route:y,selectFee:te,isCreatePool:ee,feeTierList:le,currentToken:K,tokenA:c,tokenB:p,selectToken:F,showCoinSelect:x,onCoinSelect:Ue,getCoinIcon:je,currentPoolAddress:w,poolInfo:A,store:$,config:se,t:S,router:a,addCommom:_,theme:oe,statsData:ne,pools:f,isCreatePoolFromCoin:d,isCreatePoolToCoin:I,farmsPoolObj:Re,sFixD:fe,farmsPoolInfo:Le,poolPositions:_e}}});const O=e=>(ao("data-v-70d356b4"),e=e(),io(),e),ho={class:"liquidity-container"},go={class:"back-div"},Co={class:"upgrade-liquidity-header"},bo={class:"left"},ko={class:"select-token-box"},yo={class:"loading-token"},To={class:"name-label"},qo={class:"label"},wo=O(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ao=[wo],Po={class:"select-token"},$o={class:"name-label"},So={class:"label"},Io=O(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),Mo=[Io],No={class:"fee-tier"},Lo=O(()=>n("span",null,"Fee tier",-1)),Uo={key:0,class:"icon edit-fee-icon","aria-hidden":"true"},jo=O(()=>n("use",{"xlink:href":"#icon-btn_edit"},null,-1)),Oo=[jo],Fo={key:0,class:"fee-tier-box"},Ro=["onClick"],Bo={key:0,class:"text-active"},_o={key:1},Do={key:0,class:"icon fee-disabled","aria-hidden":"true"},Eo=O(()=>n("use",{"xlink:href":"#icon-icon-disable"},null,-1)),Wo=[Eo],Yo={class:"right"},Ho={key:0,class:"price"},Vo={key:0,class:"coin"},zo={class:"pre-span"},Xo={key:1,class:"coin"},Ko={class:"pre-span"},Qo=O(()=>n("div",null,[n("svg",{class:"icon icon-up","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Go=O(()=>n("div",null,[n("svg",{class:"icon icon-down","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Jo=[Qo,Go],Zo={key:0,class:"header-left header-creat-pool"},xo={key:1,class:"header-left"},es=["onClick"],os={key:0},ss={key:1,class:"position-length"},ns={key:2,class:"header-right"},ls={class:"poolApr"},as={class:"item item-apr"},is=O(()=>n("div",{class:"label"},"Pool APR",-1)),rs={class:"value"},ts={class:"value-border"},ds={style:{color:"#fff",border:"none"}},us={key:0,style:{"font-size":"12px",border:"none"}},cs={key:1,class:"apr-hover-content"},ps={class:"item"},vs=O(()=>n("div",{class:"label"},"TVL",-1)),fs={class:"value"},ms={class:"item"},hs=O(()=>n("div",{class:"label"},"Volume (24H)",-1)),gs={class:"value"},Cs={key:0,class:"item"},bs=O(()=>n("div",{class:"label"},"Fees (24H)",-1)),ks={key:0,class:"skeleton-box"},ys={class:"value"},Ts={key:0,class:"no-pool-info"},qs={key:0,src:vo,alt:""},ws={key:1,src:fo,alt:""},As={key:1,class:"router-view-container"};function Ps(e,k,S,Ne,a,me){var c,p,X,w,K,$,oe,f,se,ne,B,D,le,ee,ae,ie,Q,re,te;const V=De,x=Ee,R=no,pe=We,ve=oo("router-view"),z=Ye,y=He,P=so("image");return t(),u("div",{class:U(["upgrade-liquidity-container",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none-container":""])},[n("div",ho,[n("div",go,[W(V,{label:"Pools",url:e.chainName=="Sui"?"/pool/list":"/pools"},null,8,["url"]),e.$route.name!=="liquidity-create"?(t(),u("div",{key:0,class:U(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:k[0]||(k[0]=J(d=>{var I,F;return e.router.push(`/swap?from=${(I=e.tokenA)==null?void 0:I.address}&to=${(F=e.tokenB)==null?void 0:F.address}`)},["stop"]))}," Trade → ",2)):q("",!0)]),n("div",Co,[n("div",bo,[n("div",ko,[n("div",{class:"select-token",onClick:k[1]||(k[1]=J(d=>e.pools.isTokenLoading?"":e.selectToken("coinA"),["stop"]))},[n("div",yo,[Z(n("img",null,null,512),[[P,e.getCoinIcon(e.tokenA)]]),W(x,{address:(c=e.tokenA)==null?void 0:c.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),n("div",To,[W(R,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:we(()=>[n("p",qo,h(e.tokenA?e.tokenA.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),n("span",null,h(e.tokenA?((X=e.pools.tokensObj[(p=e.tokenA)==null?void 0:p.address])==null?void 0:X.labels)&&((K=e.pools.tokensObj[(w=e.tokenA)==null?void 0:w.address])==null?void 0:K.labels[0]):""),1)]),(t(),u("svg",{class:U(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Ao,2))])]),n("div",Po,[n("div",{class:"loading-token",onClick:k[2]||(k[2]=J(d=>e.pools.isTokenLoading?"":e.selectToken("coinB"),["stop"]))},[Z(n("img",null,null,512),[[P,e.getCoinIcon(e.tokenB)]]),W(x,{address:($=e.tokenB)==null?void 0:$.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),n("div",$o,[W(R,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:we(()=>[n("p",So,h(e.tokenB?e.tokenB.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),n("span",null,h(e.tokenB?((f=e.pools.tokensObj[(oe=e.tokenB)==null?void 0:oe.address])==null?void 0:f.labels)&&((ne=e.pools.tokensObj[(se=e.tokenB)==null?void 0:se.address])==null?void 0:ne.labels[0]):""),1)]),(t(),u("svg",{class:U(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Mo,2))])])]),n("div",No,[n("div",{class:U(["fee-text",[{"fee-tier-action":e.store.chainName!=="Aptos"&&e.tokenA&&e.tokenB},{"no-cursor":e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB}]]),onClick:k[3]||(k[3]=J(d=>e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB?"":e.isShowFeeList=!e.isShowFeeList,["stop"]))},[Lo,n("div",null,[n("p",null,h(e.feeValue?e.feeValue*100:"--")+"%",1),e.store.chainName!=="Aptos"?(t(),u("svg",Uo,Oo)):q("",!0)])],2),e.isShowFeeList?(t(),u("div",Fo,[(t(!0),u(Ae,null,Pe(e.feeTierList,(d,I)=>{var F,de,A,ue,Y;return t(),u("div",{key:I,class:U(["fee-item",[e.feeValue==d.fee?"fee-item-active":"",e.isCreatePool.includes(d.fee)?" pool-created":" pool-not-created",e.store.chainName!=="Aptos"&&!e.isCreatePool.includes(d.fee)&&!e.filterCreatePoolCoin[(F=e.tokenA)==null?void 0:F.address]&&!e.filterCreatePoolCoin[(de=e.tokenB)==null?void 0:de.address]?"disabled":""]]),onClick:J(ce=>e.selectFee(d),["stop"])},[n("p",{class:U(e.isCreatePool&&e.isCreatePool.includes(d.fee)?"text-active":"text-default")},h(d.title),3),n("div",null,[e.isCreatePool&&e.isCreatePool.includes(d.fee)?(t(),u("p",Bo,h(e.poolTvl&&e.poolTvl[d.fee]&&((A=e.poolTvl[d.fee])==null?void 0:A.rateText)),1)):q("",!0),e.isCreatePool&&!e.isCreatePool.includes(d.fee)?(t(),u("p",_o,[lo(h(e.$t("newAdd.notCreated"))+" ",1),e.chainName!=="Aptos"&&!e.isCreatePool.includes(d.fee)&&!e.filterCreatePoolCoin[(ue=e.tokenA)==null?void 0:ue.address]&&!e.filterCreatePoolCoin[(Y=e.tokenB)==null?void 0:Y.address]?(t(),u("svg",Do,Wo)):q("",!0)])):q("",!0),n("span",null,h(d.text),1)])],10,Ro)}),128))])):q("",!0)])]),n("div",Yo,[e.$route.name!=="liquidity-deposit"&&e.$route.name!=="liquidity-create"?(t(),u("div",Ho,[((B=e.poolInfo)!=null&&B.needReverse?!e.direct:e.direct)?(t(),u("div",Vo,[Z(n("img",null,null,512),[[P,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),n("span",zo,"1 "+h(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol)+" ≈ ",1),Z(n("img",null,null,512),[[P,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),n("span",null,h(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:L(_))(("decimalUi"in e?e.decimalUi:L(qe))(e.currentPrice,6)))+" "+h(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)])):(t(),u("div",Xo,[Z(n("img",null,null,512),[[P,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),n("span",Ko,"1 "+h(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol)+" ≈ ",1),Z(n("img",null,null,512),[[P,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),n("span",null,h(e.currentPriceReverse=="--"?"--":("addCommom"in e?e.addCommom:L(_))(("decimalUi"in e?e.decimalUi:L(qe))(e.currentPriceReverse,6)))+" "+h(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)])),n("div",{class:"icon-change",onClick:k[4]||(k[4]=d=>e.direct=!e.direct)},Jo)])):q("",!0),e.$route.name!=="liquidity-create"?(t(),u("div",{key:1,class:U(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:k[5]||(k[5]=J(d=>{var I,F;return e.router.push(`/swap?from=${(I=e.tokenA)==null?void 0:I.address}&to=${(F=e.tokenB)==null?void 0:F.address}`)},["stop"]))}," Trade → ",2)):q("",!0)])]),n("div",{class:U(["upgrade-liquidity-tab",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""])},[e.$route.name==="liquidity-create"?(t(),u("div",Zo," Create Concentrated Pool ")):(t(),u("div",xo,[(t(!0),u(Ae,null,Pe(e.tabList,d=>(t(),u("div",{key:d,class:U(["tab-item",e.currentTab==d?"tab-item-active":""]),onClick:I=>e.changeTab(d)},[e.chainName!="Aptos"||d!=="Analytics"?(t(),u("span",os,h(d),1)):q("",!0),d=="Your Liquidity"&&e.currentTab=="Your Liquidity"?(t(),u("div",ss,h(e.poolPositions&&e.poolPositions.length),1)):q("",!0)],10,es))),128))])),e.$route.name!=="liquidity-create"?(t(),u("div",ns,[n("div",ls,[n("div",as,[is,n("div",rs,[n("div",ts,[n("div",{class:U(["apr-value",e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0||(le=(D=e.poolMoreInfo)==null?void 0:D.stable_farming)!=null&&le.stable_farming_pool?"":"noCursor"])},[n("i",ds,h(e.poolMoreInfo.is_display_rewarder?e.poolMoreInfo.aprTotal>0&&e.poolMoreInfo.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:L(_))(e.poolMoreInfo.aprTotal,2):e.poolMoreInfo.apr>0&&e.poolMoreInfo.apr<.01?"<0.01":("addCommom"in e?e.addCommom:L(_))(e.poolMoreInfo.apr,2))+"%",1),(ae=(ee=e.poolMoreInfo)==null?void 0:ee.stable_farming)!=null&&ae.stable_farming_pool?(t(),u("i",us," +"+h(("addCommom"in e?e.addCommom:L(_))(e.poolMoreInfo.stable_farming?(ie=e.farmsPoolInfo)==null?void 0:ie.stableFarmingApr:0,2))+"% ",1)):q("",!0),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0||(re=(Q=e.poolMoreInfo)==null?void 0:Q.stable_farming)!=null&&re.stable_farming_pool?(t(),u("div",cs,[W(pe,{"l-item":{...e.poolMoreInfo,stableFarmingApr:(te=e.farmsPoolInfo)==null?void 0:te.stableFarmingApr},"rewarder-info":e.poolMoreInfo.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):q("",!0)],2)])])])]),n("div",ps,[vs,n("div",fs,"$"+h(Number(e.poolMoreInfo.liqidity)!==0&&Number(e.poolMoreInfo.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:L(_))(e.poolMoreInfo.liqidity,2)),1)]),n("div",ms,[hs,n("div",gs,"$"+h(Number(e.poolMoreInfo.vol)!==0&&Number(e.poolMoreInfo.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:L(_))(e.poolMoreInfo.vol,2)),1)]),e.chainName=="Sui"?(t(),u("div",Cs,[bs,("checkNullObj"in e?e.checkNullObj:L(H))(e.store.statsData)||("checkNullObj"in e?e.checkNullObj:L(H))(e.poolMoreInfo)?(t(),u("div",ks,[W(R,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):q("",!0),n("div",ys,h(Number(e.poolMoreInfo.fee_24_h)!==0&&Number(e.poolMoreInfo.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:L(_))(e.poolMoreInfo.fee_24_h,2)}`),1)])):q("",!0)])):q("",!0)],2)]),!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?(t(),u("div",Ts,[e.store.theme=="default"?(t(),u("img",qs)):(t(),u("img",ws)),n("p",null,h(e.$t("newAdd.positionAppear")),1)])):(t(),u("div",As,[W(ve)])),e.showCoinSelect?(t(),$e(z,{key:2,"existing-coins":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"last-select-coin":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"is-create-pool-to-coin":e.isCreatePoolToCoin,"is-create-pool-from-coin":e.isCreatePoolFromCoin,onOnSelect:e.onCoinSelect,onOnClose:k[6]||(k[6]=d=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","is-create-pool-to-coin","is-create-pool-from-coin","onOnSelect"])):q("",!0),e.chainName=="Sui"&&e.isShowTokenWarning?(t(),$e(y,{key:3,"from-coin":e.warningFromCoin,"to-coin":e.warningToCoin,onClose:e.closeTokenWarning,onClickContinue:k[7]||(k[7]=d=>e.isShowTokenWarning=!1)},null,8,["from-coin","to-coin","onClose"])):q("",!0)],2)}const Qs=eo(mo,[["render",Ps],["__scopeId","data-v-70d356b4"]]);export{Qs as default};
