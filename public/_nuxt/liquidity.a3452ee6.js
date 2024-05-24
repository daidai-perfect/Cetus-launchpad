import{_ as We}from"./back.f015f583.js";import{_ as Ee}from"./token-warning.115c35a1.js";import{_ as Ve}from"./apr-tips.969eb8cf.js";import{_ as Ye}from"./coin-select.c909c344.js";import{_ as He}from"./token-warning-modal.aa854058.js";import{u as ze,c as B,a as E,s as ye,h as Ae,d as we}from"./sha256.53e029c3.js";import{a as Xe,y as Ke,b as Qe,r as k,m as Ge,l as y,H as Je,K as Ze,q as se,e as xe,Q as eo,s as oo,o as t,f as d,h as a,i as H,A as U,z as G,x as T,t as J,w as Pe,v as C,F as $e,E as Se,u as L,c as Me,M as so,j as ao,p as io,k as lo}from"./entry.ac59db95.js";import"./index.d3440e33.js";import{g as no}from"./common-fun.e7599dab.js";import{u as ro,a as to,T as uo}from"./pool.de3eaf08.js";import{i as Ne}from"./import-icon.de3e6c66.js";import{createPoolFromCoin as po,createPoolToCoin as co,direction as vo}from"./create-pool-data.56a035b7.js";import{u as fo}from"./farms.bbd3c976.js";import{D as j}from"./decimal.0bdeb344.js";import{_ as mo,a as ho}from"./img-no-data_2x.be341565.js";import"./icon_rewards_2x.6ca5f54d.js";/* empty css              *//* empty css              */import"./img-no-Positions_2x.c97a9e2b.js";import"./img-no-Positions_2x.542c4991.js";import"./icon-selected_3x.09e9a6f0.js";import"./precision.a7a6c57b.js";const Co=Xe({setup(e,q){var Te;const{t:P,locale:Ie}=Ke(),l=Qe(),be=["Provide Liquidity","Your Liquidity","Analytics"],Z=k(`${(Te=l==null?void 0:l.currentRoute)==null?void 0:Te.value.name.split("-")[1]}`||"Provide Liquidity"),x=k(!1),_=k(!1),Ce=k(!0),ge=ro(),ee=ze(),A=Ge(),$=k(""),u=k(null),c=k(null),z=k(null),w=k(A.query.poolAddress),X=k(""),S=y(()=>ee),ae=y(()=>ee.theme),g=y(()=>ge),ie=y(()=>Ae[S.value.chainName]),le=y(()=>ee.statsData),D=y(()=>S.value.chainName),V=y(()=>D.value?to(D.value):null),ne=y(()=>[{label:.01+"% "+P("common.feeTier"),title:.01+"% ",fee:1e-4,text:P("newAdd.bestVeryStablePairs")},{label:.05+"% "+P("common.feeTier"),title:.05+"% ",fee:5e-4,text:P("newAdd.bestStablePairs")},S.value.chainName=="Aptos"?{label:.2+"% "+P("common.feeTier"),title:.2+"% ",fee:.002,text:P("newAdd.bestMostPairs")}:{label:.25+"% "+P("common.feeTier"),title:.25+"% ",fee:.0025,text:P("newAdd.bestMostPairs")},S.value.chainName=="Aptos"?{label:.6+"% "+P("common.feeTier"),title:.6+"% ",fee:.006,text:P("newAdd.besteExoticPairs")}:{label:"1% "+P("common.feeTier"),title:"1% ",fee:.01,text:P("newAdd.besteExoticPairs")}]),oe=y(()=>{if(g.value.poolConfigList&&u.value&&c.value){const o=g.value.poolConfigList.filter(i=>{var m,f,p,v;return i.token_a.address.toUpperCase()===((m=u.value.address)==null?void 0:m.toUpperCase())&&i.token_b.address.toUpperCase()===((f=c.value.address)==null?void 0:f.toUpperCase())||i.token_b.address.toUpperCase()===((p=u.value.address)==null?void 0:p.toUpperCase())&&i.token_a.address.toUpperCase()===((v=c.value.address)==null?void 0:v.toUpperCase())}),s=[];return o.forEach(i=>{s.push(Number(i.fee))}),s}else return[]}),re=o=>{const s={};let i=new j(0);o.forEach(n=>{var N;const h=(N=n==null?void 0:n.object)==null?void 0:N.liquidity;i=i.add(new j(h||0))});const m=[];let f=new j(0);o.forEach(n=>{const h=new j(n.object.liquidity),N=h.gt(0)?new j(h).div(i).mul(100).toString():0,I=ye(N,2);f=f.plus(I);const Y=I.split(".");m.push({value:I,int:Y[0],decimal:Y[1],fee:n.fee})});let p=new j(100).minus(f).toNumber();const v=m.sort((n,h)=>Number(h.decimal)-Number(n.decimal));if(p)for(let n=0;n<v.length&&p;n++)v[n].value=new j(v[n].value).plus(.01).toString(),p=new j(p).minus(.01).toNumber();return o.forEach(n=>{var N;const h=(N=v.find(I=>n.fee===I.fee))==null?void 0:N.value;s[n.fee]={rateText:(h>0&&h<.01?"<0.01":h==0?0:ye(h,2))+"% select",rate:h}}),s},te=y(()=>{if(g.value.poolConfigList&&u.value&&c.value){const o=g.value.poolConfigList.filter(i=>{var m,f,p,v;return i.token_a.address.toUpperCase()===((m=u.value.address)==null?void 0:m.toUpperCase())&&i.token_b.address.toUpperCase()===((f=c.value.address)==null?void 0:f.toUpperCase())||i.token_b.address.toUpperCase()===((p=u.value.address)==null?void 0:p.toUpperCase())&&i.token_a.address.toUpperCase()===((v=c.value.address)==null?void 0:v.toUpperCase())});return re(o)}else return""}),K=y(()=>{var o;return(o=S.value)==null?void 0:o.filterCreatePoolCoin});Je(()=>{document.addEventListener("click",()=>{_.value=!1})}),Ze(()=>{u.value=null,c.value=null,document.removeEventListener("click",()=>{_.value=!1})}),se(()=>[l,g.value.tokensObj],async([o,s])=>{var i,m;if(o){const f=(i=l==null?void 0:l.currentRoute)==null?void 0:i.value.name.split("-")[1];Z.value=!f||f=="privide"||f==""?"Provide Liquidity":f=="position"?"Your Liquidity":f=="analytics"?"Analytics":"Provide Liquidity"}(((m=l==null?void 0:l.currentRoute)==null?void 0:m.value.name)=="liquidity-create"||A.query.action=="newposition")&&s&&(u.value||(u.value=g.value.tokensObj[A.query.fromCoin]||await V.value.getTokenBySymbol(s,A.query.fromCoin)),c.value||(c.value=g.value.tokensObj[A.query.toCoin]||await V.value.getTokenBySymbol(s,A.query.toCoin)),$.value=A.query.fee!=="null"&&A.query.fee?A.query.fee:"")},{immediate:!0,deep:!0});const de=()=>{var i,m,f,p,v,n,h,N;let o=null;const s=g.value.poolConfigList;for(let I=0;I<s.length;I++){const Y=s[I];if(Y.token_a.address.toUpperCase()===((m=(i=u==null?void 0:u.value)==null?void 0:i.address)==null?void 0:m.toUpperCase())&&Y.token_b.address.toUpperCase()===((p=(f=c==null?void 0:c.value)==null?void 0:f.address)==null?void 0:p.toUpperCase())||Y.token_b.address.toUpperCase()===((n=(v=u==null?void 0:u.value)==null?void 0:v.address)==null?void 0:n.toUpperCase())&&Y.token_a.address.toUpperCase()===((N=(h=c==null?void 0:c.value)==null?void 0:h.address)==null?void 0:N.toUpperCase())){o=Y;break}}return o},ue=o=>{var i;const s=de();if(s&&(po.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,co.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,u.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,c.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,vo.value=u.value.address===((i=s==null?void 0:s.token_a)==null?void 0:i.address)),oe.value.includes(o.fee))z.value=o,$.value=o.fee,_.value=!1;else{if(D.value!=="Aptos"&&!K.value[u.value.address]&&!K.value[c.value.address])return;z.value=o,$.value=o.fee,_.value=!1}},r=k(!1),M=k(!1),R=o=>{X.value=o,o=="coinA"&&(A.name=="liquidity-create"||!b.value)?(r.value=!0,M.value=!1):o=="coinB"&&(A.name=="liquidity-create"||!b.value)?(r.value=!1,M.value=!0):(o=="coinA"&&A.name=="liquidity-deposit"||o=="coinB"&&A.name=="liquidity-deposit")&&(r.value=!1,M.value=!1),x.value=!0},pe=y(()=>Ae[D.value].hasCreatePool);se(()=>[u.value,c.value,$.value,g.value.poolConfigList,pe.value],([o,s,i,m,f])=>{if(m.length>0){if(o&&s&&i){let p=null;p=m.find(v=>o.address==v.coinA.address&&s.address==v.coinB.address&&i==v.fee||o.address==v.coinB.address&&s.address==v.coinA.address&&i==v.fee),p?w.value=p?p.address:"":(w.value="",f?l.replace(`/liquidity/create?fromCoin=${o.address}&toCoin=${s.address}&fee=${i}`):l.replace(`/liquidity/deposit?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${i}&pool=notfount`))}else if(o&&s&&!i){let p=null;p=m.filter(n=>(o==null?void 0:o.address)==n.coinA.address&&(s==null?void 0:s.address)==n.coinB.address||(o==null?void 0:o.address)==n.coinB.address&&(s==null?void 0:s.address)==n.coinA.address).sort((n,h)=>{var N,I;return((N=h==null?void 0:h.object)==null?void 0:N.liquidity)-((I=n==null?void 0:n.object)==null?void 0:I.liquidity)})[0],p?w.value=p?p.address:"":(w.value="",l.replace(`/liquidity/deposit?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${i}&pool=notfount`))}}});const b=y(()=>{if(w.value){const o=w.value;return g.value.poolConfigObj[o]}else return null}),ce=y(()=>{if(w.value){const o=w.value;return g.value.poolsObj[o]}else return null}),Q=k("--"),ve=k("--");se(()=>[b.value,ce.value],async([o,s])=>{var i,m,f,p;if(o&&!B(o)){((i=l==null?void 0:l.currentRoute)==null?void 0:i.value.name)=="liquidity-deposit"||((m=l==null?void 0:l.currentRoute)==null?void 0:m.value.name)=="liquidity-create"?l.replace(`/liquidity/deposit?poolAddress=${o.address}`):((f=l==null?void 0:l.currentRoute)==null?void 0:f.value.name)=="liquidity-position"?l.replace(`/liquidity/position?poolAddress=${o.address}`):((p=l==null?void 0:l.currentRoute)==null?void 0:p.value.name)=="liquidity-analytics"&&l.replace(`/liquidity/analytics?poolAddress=${o.address}`),u.value=o.needReverse?o.coinB:o.coinA,c.value=o.needReverse?o.coinA:o.coinB,$.value=o.fee,w.value=o.address;const v=o.token_a.decimals,n=o.token_b.decimals;if(S.value.chainName&&S.value.chainName.includes("Aptos")){const h=await V.value.getPool(o.address);Q.value=V.value.TickMath.sqrtPriceX64ToPrice(h.current_sqrt_price,v,n).toString(),ve.value=new j(1).div(V.value.TickMath.sqrtPriceX64ToPrice(h.current_sqrt_price,v,n)).toString()}else Q.value=o.price,B(s||{})||(ve.value=new j(1).div(uo.sqrtPriceX64ToPrice(s.current_sqrt_price||(s==null?void 0:s.object.current_sqrt_price),v,n)).toString())}},{immediate:!0,deep:!0});const Le=y(()=>g.value.currentPoolMoreInfo),Ue=y(()=>qe.value.farmsPoolObj[w.value]);se(()=>[b.value,g.value.addressLpTokens],o=>{o&&no(b.value,g,S)},{immediate:!0,deep:!0});const je=o=>{$.value="",he.value=!1,W.value={},F.value={},X.value=="coinA"?(u.value=o,me(o,"fromCoin"),(c.value&&c.value.address)==o.address&&(c.value=null,w.value="")):(c.value=o,me(o,"toCoin"),(u.value&&u.value.address)==o.address&&(u.value=null,w.value=""))},Oe=o=>{var s;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((s=g.value.tokensObj[o==null?void 0:o.address])==null?void 0:s.logo_url)||(S.value.theme==="default"?Ne("/image/coins/unknown.png"):Ne("/image/coins/sui-unknown.png"))},W=k(),F=k(),ke=k(!1),fe=y(()=>g.value.tokensWarningObj),me=(o,s)=>{var p,v,n,h;const i=localStorage.getItem(o==null?void 0:o.address),m=S.value.importTokenListObj,f=fe.value&&!B(fe.value)&&!fe.value[o.address];(he.value?f&&!i:f&&!(m!=null&&m.hasOwnProperty(o==null?void 0:o.address)))&&(s=="fromCoin"&&(W.value=o),s=="toCoin"&&(F.value=o),((p=W==null?void 0:W.value)==null?void 0:p.address)==((v=F==null?void 0:F.value)==null?void 0:v.address)&&(F.value={}),((n=W==null?void 0:W.value)!=null&&n.address||(h=F==null?void 0:F.value)!=null&&h.address)&&(ke.value=!0))};let he=k(!0);se(()=>[u.value,c.value,fe.value],([o,s,i])=>{he.value&&(o&&!B(o)&&!B(i)&&me(o,"fromCoin"),s&&!B(s)&&!B(i)&&me(s,"toCoin"))},{immediate:!0});const Re=()=>{D.value!=="Aptos"?l.push("/pool/list"):l.push("/pools")},Fe=fo(),qe=y(()=>Fe),Be=y(()=>qe.value.farmsPoolObj),_e=o=>{Z.value=o,o=="Provide Liquidity"&&l.push(`/liquidity/deposit?poolAddress=${b==null?void 0:b.value.address}`),o=="Your Liquidity"&&l.push(`/liquidity/position?poolAddress=${b==null?void 0:b.value.address}`),o=="Analytics"&&l.push(`/liquidity/analytics?poolAddress=${b==null?void 0:b.value.address}`)},De=y(()=>g.value.poolPositions);return{firstWarning:he,currentTab:Z,changeTab:_e,tabList:be,currentPriceReverse:ve,Decimal:j,chainName:D,warningFromCoin:W,warningToCoin:F,isShowTokenWarning:ke,closeTokenWarning:Re,direct:Ce,currentPrice:Q,creatFeeItem:z,feeValue:$,checkNullObj:B,poolMoreInfo:Le,poolTvl:te,isShowFeeList:_,filterCreatePoolCoin:K,route:A,selectFee:ue,isCreatePool:oe,feeTierList:ne,currentToken:X,tokenA:u,tokenB:c,selectToken:R,showCoinSelect:x,onCoinSelect:je,getCoinIcon:Oe,currentPoolAddress:w,poolInfo:b,store:S,config:ie,t:P,router:l,addCommom:E,theme:ae,statsData:le,pools:g,isCreatePoolFromCoin:r,isCreatePoolToCoin:M,farmsPoolObj:Be,sFixD:ye,farmsPoolInfo:Ue,poolPositions:De}}});const O=e=>(io("data-v-7d7038ca"),e=e(),lo(),e),go={class:"liquidity-container"},yo={class:"back-div"},bo={class:"upgrade-liquidity-header"},ko={class:"left"},qo={class:"select-token-box"},To={class:"loading-token"},Ao={class:"name-label"},wo={class:"label"},Po=O(()=>a("use",{"xlink:href":"#icon-icon_on"},null,-1)),$o=[Po],So={class:"select-token"},Mo={class:"name-label"},No={class:"label"},Io=O(()=>a("use",{"xlink:href":"#icon-icon_on"},null,-1)),Lo=[Io],Uo={class:"fee-tier"},jo=O(()=>a("span",null,"Fee tier",-1)),Oo={key:0,class:"icon edit-fee-icon","aria-hidden":"true"},Ro=O(()=>a("use",{"xlink:href":"#icon-btn_edit"},null,-1)),Fo=[Ro],Bo={key:0,class:"fee-tier-box"},_o=["onClick"],Do={key:0,class:"text-active"},Wo={key:1},Eo={key:0,class:"icon fee-disabled","aria-hidden":"true"},Vo=O(()=>a("use",{"xlink:href":"#icon-icon-disable"},null,-1)),Yo=[Vo],Ho={class:"right"},zo={key:0,class:"price"},Xo={key:0,class:"coin"},Ko={class:"pre-span"},Qo={key:1,class:"coin"},Go={class:"pre-span"},Jo=O(()=>a("div",null,[a("svg",{class:"icon icon-up","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Zo=O(()=>a("div",null,[a("svg",{class:"icon icon-down","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),xo=[Jo,Zo],es={key:0,class:"header-left header-creat-pool"},os={key:1,class:"header-left"},ss=["onClick"],as={key:0},is={key:1,class:"position-length"},ls={key:2,class:"header-right"},ns={class:"poolApr"},rs={class:"item item-apr"},ts=O(()=>a("div",{class:"label"},"Pool APR",-1)),ds={class:"value"},us={class:"value-border"},ps={style:{color:"#fff",border:"none"}},cs={key:0,style:{"font-size":"12px",border:"none"}},vs={key:1,class:"apr-hover-content"},fs={class:"item"},ms=O(()=>a("div",{class:"label"},"TVL",-1)),hs={class:"value"},Cs={class:"item"},gs=O(()=>a("div",{class:"label"},"Volume (24H)",-1)),ys={class:"value"},bs={key:0,class:"item"},ks=O(()=>a("div",{class:"label"},"Fees (24H)",-1)),qs={key:0,class:"skeleton-box"},Ts={class:"value"},As={key:0,class:"no-pool-info"},ws={key:0,src:mo,alt:""},Ps={key:1,src:ho,alt:""},$s={key:1,class:"router-view-container"};function Ss(e,q,P,Ie,l,be){var u,c,z,w,X,S,ae,g,ie,le,D,V,ne,oe,re,te,K,de,ue;const Z=We,x=Ee,_=so,Ce=Ve,ge=eo("router-view"),ee=Ye,A=He,$=oo("image");return t(),d("div",{class:U(["upgrade-liquidity-container",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none-container":""])},[a("div",go,[a("div",yo,[H(Z,{label:"Pools",url:e.chainName=="Sui"?"/pool/list":"/pools"},null,8,["url"]),e.$route.name!=="liquidity-create"?(t(),d("div",{key:0,class:U(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:q[0]||(q[0]=G(r=>{var M,R;return e.router.push(`/swap?from=${(M=e.tokenA)==null?void 0:M.address}&to=${(R=e.tokenB)==null?void 0:R.address}`)},["stop"]))}," Trade → ",2)):T("",!0)]),a("div",bo,[a("div",ko,[a("div",qo,[a("div",{class:"select-token",onClick:q[1]||(q[1]=G(r=>e.pools.isTokenLoading?"":e.selectToken("coinA"),["stop"]))},[a("div",To,[J(a("img",null,null,512),[[$,e.getCoinIcon(e.tokenA)]]),H(x,{address:(u=e.tokenA)==null?void 0:u.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),a("div",Ao,[H(_,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:Pe(()=>[a("p",wo,C(e.tokenA?e.tokenA.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),a("span",null,C(e.tokenA?((z=e.pools.tokensObj[(c=e.tokenA)==null?void 0:c.address])==null?void 0:z.labels)&&((X=e.pools.tokensObj[(w=e.tokenA)==null?void 0:w.address])==null?void 0:X.labels[0]):""),1)]),(t(),d("svg",{class:U(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},$o,2))])]),a("div",So,[a("div",{class:"loading-token",onClick:q[2]||(q[2]=G(r=>e.pools.isTokenLoading?"":e.selectToken("coinB"),["stop"]))},[J(a("img",null,null,512),[[$,e.getCoinIcon(e.tokenB)]]),H(x,{address:(S=e.tokenB)==null?void 0:S.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),a("div",Mo,[H(_,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:Pe(()=>[a("p",No,C(e.tokenB?e.tokenB.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),a("span",null,C(e.tokenB?((g=e.pools.tokensObj[(ae=e.tokenB)==null?void 0:ae.address])==null?void 0:g.labels)&&((le=e.pools.tokensObj[(ie=e.tokenB)==null?void 0:ie.address])==null?void 0:le.labels[0]):""),1)]),(t(),d("svg",{class:U(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Lo,2))])])]),a("div",Uo,[a("div",{class:U(["fee-text",[{"fee-tier-action":e.store.chainName!=="Aptos"&&e.tokenA&&e.tokenB},{"no-cursor":e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB}]]),onClick:q[3]||(q[3]=G(r=>e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB?"":e.isShowFeeList=!e.isShowFeeList,["stop"]))},[jo,a("div",null,[a("p",null,C(e.feeValue?e.feeValue*100:"--")+"%",1),e.store.chainName!=="Aptos"?(t(),d("svg",Oo,Fo)):T("",!0)])],2),e.isShowFeeList?(t(),d("div",Bo,[(t(!0),d($e,null,Se(e.feeTierList,(r,M)=>{var R,pe,b,ce,Q;return t(),d("div",{key:M,class:U(["fee-item",[e.feeValue==r.fee?"fee-item-active":"",e.isCreatePool.includes(r.fee)?" pool-created":" pool-not-created",e.store.chainName!=="Aptos"&&!e.isCreatePool.includes(r.fee)&&!e.filterCreatePoolCoin[(R=e.tokenA)==null?void 0:R.address]&&!e.filterCreatePoolCoin[(pe=e.tokenB)==null?void 0:pe.address]?"disabled":""]]),onClick:G(ve=>e.selectFee(r),["stop"])},[a("p",{class:U(e.isCreatePool&&e.isCreatePool.includes(r.fee)?"text-active":"text-default")},C(r.title),3),a("div",null,[e.isCreatePool&&e.isCreatePool.includes(r.fee)?(t(),d("p",Do,C(e.poolTvl&&e.poolTvl[r.fee]&&((b=e.poolTvl[r.fee])==null?void 0:b.rateText)),1)):T("",!0),e.isCreatePool&&!e.isCreatePool.includes(r.fee)?(t(),d("p",Wo,[ao(C(e.$t("newAdd.notCreated"))+" ",1),e.chainName!=="Aptos"&&!e.isCreatePool.includes(r.fee)&&!e.filterCreatePoolCoin[(ce=e.tokenA)==null?void 0:ce.address]&&!e.filterCreatePoolCoin[(Q=e.tokenB)==null?void 0:Q.address]?(t(),d("svg",Eo,Yo)):T("",!0)])):T("",!0),a("span",null,C(r.text),1)])],10,_o)}),128))])):T("",!0)])]),a("div",Ho,[e.$route.name!=="liquidity-deposit"&&e.$route.name!=="liquidity-create"?(t(),d("div",zo,[((D=e.poolInfo)!=null&&D.needReverse?!e.direct:e.direct)?(t(),d("div",Xo,[J(a("img",null,null,512),[[$,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),a("span",Ko,"1 "+C(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol)+" ≈ ",1),J(a("img",null,null,512),[[$,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),a("span",null,C(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:L(E))(("decimalUi"in e?e.decimalUi:L(we))(e.currentPrice,6)))+" "+C(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)])):(t(),d("div",Qo,[J(a("img",null,null,512),[[$,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),a("span",Go,"1 "+C(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol)+" ≈ ",1),J(a("img",null,null,512),[[$,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),a("span",null,C(e.currentPriceReverse=="--"?"--":("addCommom"in e?e.addCommom:L(E))(("decimalUi"in e?e.decimalUi:L(we))(e.currentPriceReverse,6)))+" "+C(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)])),a("div",{class:"icon-change",onClick:q[4]||(q[4]=r=>e.direct=!e.direct)},xo)])):T("",!0),e.$route.name!=="liquidity-create"?(t(),d("div",{key:1,class:U(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:q[5]||(q[5]=G(r=>{var M,R;return e.router.push(`/swap?from=${(M=e.tokenA)==null?void 0:M.address}&to=${(R=e.tokenB)==null?void 0:R.address}`)},["stop"]))}," Trade → ",2)):T("",!0)])]),a("div",{class:U(["upgrade-liquidity-tab",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""])},[e.$route.name==="liquidity-create"?(t(),d("div",es," Create Concentrated Pool ")):(t(),d("div",os,[(t(!0),d($e,null,Se(e.tabList,r=>(t(),d("div",{key:r,class:U(["tab-item",e.currentTab==r?"tab-item-active":""]),onClick:M=>e.changeTab(r)},[e.chainName!="Aptos"||r!=="Analytics"?(t(),d("span",as,C(r),1)):T("",!0),r=="Your Liquidity"&&e.currentTab=="Your Liquidity"?(t(),d("div",is,C(e.poolPositions&&e.poolPositions.length),1)):T("",!0)],10,ss))),128))])),e.$route.name!=="liquidity-create"?(t(),d("div",ls,[a("div",ns,[a("div",rs,[ts,a("div",ds,[a("div",us,[a("div",{class:U(["apr-value",e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0||(ne=(V=e.poolMoreInfo)==null?void 0:V.stable_farming)!=null&&ne.stable_farming_pool?"":"noCursor"])},[a("i",ps,C(e.poolMoreInfo.is_display_rewarder?e.poolMoreInfo.aprTotal>0&&e.poolMoreInfo.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:L(E))(e.poolMoreInfo.aprTotal,2):e.poolMoreInfo.apr>0&&e.poolMoreInfo.apr<.01?"<0.01":("addCommom"in e?e.addCommom:L(E))(e.poolMoreInfo.apr,2))+"%",1),(re=(oe=e.poolMoreInfo)==null?void 0:oe.stable_farming)!=null&&re.stable_farming_pool?(t(),d("i",cs," +"+C(("addCommom"in e?e.addCommom:L(E))(e.poolMoreInfo.stable_farming?(te=e.farmsPoolInfo)==null?void 0:te.stableFarmingApr:0,2))+"% ",1)):T("",!0),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0||(de=(K=e.poolMoreInfo)==null?void 0:K.stable_farming)!=null&&de.stable_farming_pool?(t(),d("div",vs,[H(Ce,{"l-item":{...e.poolMoreInfo,stableFarmingApr:(ue=e.farmsPoolInfo)==null?void 0:ue.stableFarmingApr},"rewarder-info":e.poolMoreInfo.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):T("",!0)],2)])])])]),a("div",fs,[ms,a("div",hs,"$"+C(Number(e.poolMoreInfo.liqidity)!==0&&Number(e.poolMoreInfo.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:L(E))(e.poolMoreInfo.liqidity,2)),1)]),a("div",Cs,[gs,a("div",ys,"$"+C(Number(e.poolMoreInfo.vol)!==0&&Number(e.poolMoreInfo.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:L(E))(e.poolMoreInfo.vol,2)),1)]),e.chainName=="Sui"?(t(),d("div",bs,[ks,("checkNullObj"in e?e.checkNullObj:L(B))(e.store.statsData)||("checkNullObj"in e?e.checkNullObj:L(B))(e.poolMoreInfo)?(t(),d("div",qs,[H(_,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):T("",!0),a("div",Ts,C(Number(e.poolMoreInfo.fee_24_h)!==0&&Number(e.poolMoreInfo.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:L(E))(e.poolMoreInfo.fee_24_h,2)}`),1)])):T("",!0)])):T("",!0)],2)]),!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?(t(),d("div",As,[e.store.theme=="default"?(t(),d("img",ws)):(t(),d("img",Ps)),a("p",null,C(e.$t("newAdd.positionAppear")),1)])):(t(),d("div",$s,[H(ge)])),e.showCoinSelect?(t(),Me(ee,{key:2,"existing-coins":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"last-select-coin":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"is-create-pool-to-coin":e.isCreatePoolToCoin,"is-create-pool-from-coin":e.isCreatePoolFromCoin,"have-import-btn":!0,onOnSelect:e.onCoinSelect,onOnClose:q[6]||(q[6]=r=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","is-create-pool-to-coin","is-create-pool-from-coin","onOnSelect"])):T("",!0),e.chainName=="Sui"&&e.isShowTokenWarning?(t(),Me(A,{key:3,"from-coin":e.warningFromCoin,"to-coin":e.warningToCoin,"is-import-modal":!e.firstWarning,onClose:e.closeTokenWarning,onClickContinue:q[7]||(q[7]=()=>{e.firstWarning=!1,e.isShowTokenWarning=!1})},null,8,["from-coin","to-coin","is-import-modal","onClose"])):T("",!0)],2)}const Js=xe(Co,[["render",Ss],["__scopeId","data-v-7d7038ca"]]);export{Js as default};
