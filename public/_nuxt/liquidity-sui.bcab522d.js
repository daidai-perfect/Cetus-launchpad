import{_ as Je}from"./back.c3fdc7a8.js";import{_ as Ke}from"./apr-tips.1d887d0c.js";import{c as U,a as F,b as ve,d as ke}from"./common.edf9ae9c.js";import{a as pe,L as me,o as r,f as b,h as n,u as T,y as Q,x as I,G as P,i as H,c as D,S as Qe,p as $e,k as Pe,e as ye,m as C,z as Ze,b as xe,r as g,q as eo,s as oo,A as se,l as le,D as fe,F as Te,E as so,j as io}from"./entry.66997069.js";import"./index.91906b25.js";import{_ as ao}from"./coin-select.26ae76b8.js";import{_ as to}from"./token-warning-modal.69c443c7.js";import{a as lo,u as no,b as ro}from"./index.5f9fac2e.js";import{g as uo}from"./common-fun.6e77680b.js";import{c as Se,T as co}from"./index.ecba1457.js";import{i as we}from"./import-icon.de3e6c66.js";import"./decimal.a2826370.js";import{createPoolFromCoin as vo,createPoolToCoin as fo,direction as po}from"./create-pool-data.cfba3248.js";import{u as mo}from"./farms.d4f74a02.js";import{T as yo}from"./token-dropdown-select.ef0efa17.js";import{S as ho}from"./select-tab.d0fce5d4.js";import{C as Co}from"./current-price.4ac13da7.js";import{u as bo}from"./pool.c08eaf24.js";import{u as go}from"./useWindowWidth.62f53e34.js";import{D as N}from"./decimal.765d8738.js";import{S as qo}from"./sui-no-data.735543f2.js";import"./icon_fee_2x.aef97bd6.js";import"./icon_rewards_2x.c8ea54c6.js";/* empty css              *//* empty css              */import"./icon-tooltip.7cf05514.js";import"./token-warning_2x.e658e677.js";import"./img-no-Positions_2x.f49235e9.js";import"./img-no-Positions_2x.9a0741d8.js";import"./check-box.26023b8c.js";import"./precision.c92e897d.js";import"./coin-img-warning.8d73ac35.js";import"./token.c41b5710.js";import"./coin-img.e1d02306.js";const ne=e=>($e("data-v-c38b3768"),e=e(),Pe(),e),ko={class:"header-right"},To={class:"poolApr"},So={class:"item item-apr"},wo=ne(()=>n("div",{class:"label"},"Pool APR",-1)),$o={key:0,class:"value"},Po={class:"value-border"},Mo={style:{color:"#fff",border:"none"}},Lo={key:0,style:{"font-size":"12px",border:"none"}},Ao={key:1,class:"apr-hover-content"},No={class:"item"},Oo=ne(()=>n("div",{class:"label"},"TVL",-1)),_o={key:0,class:"value"},jo={class:"item"},Uo=ne(()=>n("div",{class:"label"},"Volume (24H)",-1)),Io={key:0,class:"value"},Ro={class:"item"},Fo=ne(()=>n("div",{class:"label"},"Fees (24H)",-1)),Do={key:0,class:"value"},Wo=pe({__name:"liquidity-top-stats",props:{poolMoreInfo:{type:Object,default:()=>null},poolInfo:{type:Object,default:()=>null},farmsPoolInfo:{type:Object,default:()=>null}},setup(e){return me(),(i,Z)=>{var q,B,t,V,W,Y,O,G;const X=Ke,R=Qe;return r(),b("div",ko,[n("div",To,[n("div",So,[wo,!("checkNullObj"in i?i.checkNullObj:T(U))(e.poolMoreInfo)&&!("checkNullObj"in i?i.checkNullObj:T(U))(e.poolInfo)?(r(),b("div",$o,[n("div",Po,[n("div",{class:Q(["apr-value",e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0||(B=(q=e.poolMoreInfo)==null?void 0:q.stable_farming)!=null&&B.stable_farming_pool?"":"noCursor"])},[n("i",Mo,I(e.poolMoreInfo.is_display_rewarder?e.poolMoreInfo.aprTotal>0&&e.poolMoreInfo.aprTotal<.01?"<0.01":("addCommom"in i?i.addCommom:T(F))(e.poolMoreInfo.aprTotal,2):e.poolMoreInfo.apr>0&&e.poolMoreInfo.apr<.01?"<0.01":("addCommom"in i?i.addCommom:T(F))(e.poolMoreInfo.apr,2))+"%",1),(V=(t=e.poolMoreInfo)==null?void 0:t.stable_farming)!=null&&V.stable_farming_pool?(r(),b("i",Lo," +"+I(("addCommom"in i?i.addCommom:T(F))(e.poolMoreInfo.stable_farming?(W=e.farmsPoolInfo)==null?void 0:W.stableFarmingApr:0,2))+"% ",1)):P("",!0),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0||(O=(Y=e.poolMoreInfo)==null?void 0:Y.stable_farming)!=null&&O.stable_farming_pool?(r(),b("div",Ao,[H(X,{"l-item":{...e.poolMoreInfo,stableFarmingApr:(G=e.farmsPoolInfo)==null?void 0:G.stableFarmingApr},"rewarder-info":e.poolMoreInfo.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):P("",!0)],2)])])):(r(),D(R,{key:1,class:"skeleton",loading:!0,size:"large",active:"",paragraph:!1}))])]),n("div",No,[Oo,!("checkNullObj"in i?i.checkNullObj:T(U))(e.poolMoreInfo)&&e.poolMoreInfo.liqidity!=="--"?(r(),b("div",_o," $"+I(Number(e.poolMoreInfo.liqidity)!==0&&Number(e.poolMoreInfo.liqidity)<.01?"<0.01":("addCommom"in i?i.addCommom:T(F))(e.poolMoreInfo.liqidity,2)),1)):(r(),D(R,{key:1,loading:!0,class:"skeleton",size:"large",active:"",paragraph:!1}))]),n("div",jo,[Uo,!("checkNullObj"in i?i.checkNullObj:T(U))(e.poolMoreInfo)&&e.poolMoreInfo.vol!=="--"?(r(),b("div",Io," $"+I(Number(e.poolMoreInfo.vol)!==0&&Number(e.poolMoreInfo.vol)<.01?"<0.01":("addCommom"in i?i.addCommom:T(F))(e.poolMoreInfo.vol,2)),1)):(r(),D(R,{key:1,loading:!0,class:"skeleton",size:"large",active:"",paragraph:!1}))]),n("div",Ro,[Fo,!("checkNullObj"in i?i.checkNullObj:T(U))(e.poolMoreInfo)&&e.poolMoreInfo.fee_24_h!=="--"?(r(),b("div",Do,I(Number(e.poolMoreInfo.fee_24_h)!==0&&Number(e.poolMoreInfo.fee_24_h)<.01?"<$0.01":`$${("addCommom"in i?i.addCommom:T(F))(e.poolMoreInfo.fee_24_h,2)}`),1)):(r(),D(R,{key:1,loading:!0,class:"skeleton",size:"large",active:"",paragraph:!1}))])])}}});const Me=ye(Wo,[["__scopeId","data-v-c38b3768"]]),Eo=pe({components:{TokenDropdownSelect:yo,LiquidityTopStats:Me,SelectTab:ho,CurrentPrice:Co},setup(e,i){var ge;const Z=go(),X=bo(),R=C(()=>X.poolPositionsObj),{t:q,locale:B}=Ze(),t=xe(),V=C(()=>{var o,s;return[{name:"Provide Liquidity",logo:""},{name:"Your Liquidity",logo:"",num:(s=(o=R.value[h.query.poolAddress])==null?void 0:o.positionList)==null?void 0:s.length},{name:"Analytics",logo:""}]}),W=g(`${(ge=t==null?void 0:t.currentRoute)==null?void 0:ge.value.name.split("-")[1]}`||"Provide Liquidity"),Y=g(!1),O=g(!1),G=g(!0),y=lo(),E=no(),h=me(),_=g(""),d=g(null),c=g(null),J=g(null),w=g(h.query.poolAddress),re=g(""),L=C(()=>E),Le=C(()=>E.theme),k=C(()=>y),Ae=C(()=>Se[L.value.chainName]),Ne=C(()=>E.statsData),K=C(()=>L.value.chainName),x=C(()=>K.value?ro(K.value):null),Oe=C(()=>[{label:.01+"% "+q("common.feeTier"),title:.01+"% ",fee:1e-4,text:q("newAdd.bestVeryStablePairs")},{label:.05+"% "+q("common.feeTier"),title:.05+"% ",fee:5e-4,text:q("newAdd.bestStablePairs")},L.value.chainName=="Aptos"?{label:.2+"% "+q("common.feeTier"),title:.2+"% ",fee:.002,text:q("newAdd.bestMostPairs")}:{label:.25+"% "+q("common.feeTier"),title:.25+"% ",fee:.0025,text:q("newAdd.bestMostPairs")},L.value.chainName=="Aptos"?{label:.6+"% "+q("common.feeTier"),title:.6+"% ",fee:.006,text:q("newAdd.besteExoticPairs")}:{label:"1% "+q("common.feeTier"),title:"1% ",fee:.01,text:q("newAdd.besteExoticPairs")}]),he=C(()=>{if(k.value.poolConfigList&&d.value&&c.value){const o=k.value.poolConfigList.filter(a=>{var p,f,u,v;return a.token_a.address.toUpperCase()===((p=d.value.address)==null?void 0:p.toUpperCase())&&a.token_b.address.toUpperCase()===((f=c.value.address)==null?void 0:f.toUpperCase())||a.token_b.address.toUpperCase()===((u=d.value.address)==null?void 0:u.toUpperCase())&&a.token_a.address.toUpperCase()===((v=c.value.address)==null?void 0:v.toUpperCase())}),s=[];return o.forEach(a=>{s.push(Number(a.fee))}),s}else return[]}),_e=o=>{const s={};let a=new N(0);o.forEach(l=>{var $;const m=($=l==null?void 0:l.object)==null?void 0:$.liquidity;a=a.add(new N(m||0))});const p=[];let f=new N(0);o.forEach(l=>{var qe;const m=new N(((qe=l==null?void 0:l.object)==null?void 0:qe.liquidity)||0),$=m.gt(0)?new N(m||0).div(a).mul(100).toString():0,M=ve($,2);f=f.plus(M);const z=M.split(".");p.push({value:M,int:z[0],decimal:z[1],fee:l.fee})});let u=new N(100).minus(f).toNumber();const v=p.sort((l,m)=>Number(m.decimal)-Number(l.decimal));if(u)for(let l=0;l<v.length&&u;l++)v[l].value=new N(v[l].value).plus(.01).toString(),u=new N(u).minus(.01).toNumber();return o.forEach(l=>{var $;const m=($=v.find(M=>l.fee===M.fee))==null?void 0:$.value;s[l.fee]={rateText:(m>0&&m<.01?"<0.01":m==0?0:ve(m,2))+"% select",rate:m}}),s},je=C(()=>{if(k.value.poolConfigList&&d.value&&c.value){const o=k.value.poolConfigList.filter(a=>{var p,f,u,v;return a.token_a.address.toUpperCase()===((p=d.value.address)==null?void 0:p.toUpperCase())&&a.token_b.address.toUpperCase()===((f=c.value.address)==null?void 0:f.toUpperCase())||a.token_b.address.toUpperCase()===((u=d.value.address)==null?void 0:u.toUpperCase())&&a.token_a.address.toUpperCase()===((v=c.value.address)==null?void 0:v.toUpperCase())});return _e(o)}else return""}),de=C(()=>{var o;return(o=L.value)==null?void 0:o.filterCreatePoolCoin});eo(()=>{document.addEventListener("click",()=>{O.value=!1})}),oo(()=>{d.value=null,c.value=null,document.removeEventListener("click",()=>{O.value=!1})}),se(()=>[t,k.value.tokensObj],async([o,s])=>{var a,p;if(o){const f=(a=t==null?void 0:t.currentRoute)==null?void 0:a.value.name.split("-")[1];W.value=!f||f=="privide"||f==""?"Provide Liquidity":f=="position"?"Your Liquidity":f=="analytics"?"Analytics":"Provide Liquidity"}(((p=t==null?void 0:t.currentRoute)==null?void 0:p.value.name)=="liquidity-create"||h.query.action=="newposition")&&s&&(d.value||(d.value=k.value.tokensObj[h.query.fromCoin]||await x.value.getTokenBySymbol(s,h.query.fromCoin)),c.value||(c.value=k.value.tokensObj[h.query.toCoin]||await x.value.getTokenBySymbol(s,h.query.toCoin)),_.value=h.query.fee!=="null"&&h.query.fee?h.query.fee:"")},{immediate:!0,deep:!0});const Ue=()=>{var a,p,f,u,v,l,m,$;let o=null;const s=k.value.poolConfigList;for(let M=0;M<s.length;M++){const z=s[M];if(z.token_a.address.toUpperCase()===((p=(a=d==null?void 0:d.value)==null?void 0:a.address)==null?void 0:p.toUpperCase())&&z.token_b.address.toUpperCase()===((u=(f=c==null?void 0:c.value)==null?void 0:f.address)==null?void 0:u.toUpperCase())||z.token_b.address.toUpperCase()===((l=(v=d==null?void 0:d.value)==null?void 0:v.address)==null?void 0:l.toUpperCase())&&z.token_a.address.toUpperCase()===(($=(m=c==null?void 0:c.value)==null?void 0:m.address)==null?void 0:$.toUpperCase())){o=z;break}}return o},Ie=o=>{var a;const s=Ue();if(s&&(vo.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,fo.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,d.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,c.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,po.value=d.value.address===((a=s==null?void 0:s.token_a)==null?void 0:a.address)),he.value.includes(o.fee))J.value=o,_.value=o.fee,O.value=!1;else{if(K.value!=="Aptos"&&!de.value[d.value.address]&&!de.value[c.value.address])return;J.value=o,_.value=o.fee,O.value=!1}},ee=g(!1),oe=g(!1),Re=o=>{re.value=o,o=="coinA"&&(h.name=="liquidity-create"||!S.value)?(ee.value=!0,oe.value=!1):o=="coinB"&&(h.name=="liquidity-create"||!S.value)?(ee.value=!1,oe.value=!0):(o=="coinA"&&h.name=="liquidity-deposit"||o=="coinB"&&h.name=="liquidity-deposit")&&(ee.value=!1,oe.value=!1),Y.value=!0},Fe=C(()=>{var o;return(o=Se[K.value])==null?void 0:o.hasCreatePool});se(()=>[d.value,c.value,_.value,k.value.poolConfigList,Fe.value],([o,s,a,p,f])=>{if(p.length>0){if(o&&s&&a){let u=null;u=p.find(v=>o.address==v.coinA.address&&s.address==v.coinB.address&&a==v.fee||o.address==v.coinB.address&&s.address==v.coinA.address&&a==v.fee),u?w.value=u?u.address:"":(w.value="",f?t.replace(`/liquidity/create?fromCoin=${o.address}&toCoin=${s.address}&fee=${a}`):t.replace(`/liquidity/deposit?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${a}&pool=notfount`))}else if(o&&s&&!a){let u=null;u=p.filter(l=>(o==null?void 0:o.address)==l.coinA.address&&(s==null?void 0:s.address)==l.coinB.address||(o==null?void 0:o.address)==l.coinB.address&&(s==null?void 0:s.address)==l.coinA.address).sort((l,m)=>{var $,M;return(($=m==null?void 0:m.object)==null?void 0:$.liquidity)-((M=l==null?void 0:l.object)==null?void 0:M.liquidity)})[0],u?w.value=u?u.address:"":(w.value="",t.replace(`/liquidity/deposit?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${a}&pool=notfount`))}}});const S=C(()=>{if(w.value){const o=w.value;return k.value.poolConfigObj[o]}else return null}),De=C(()=>{if(w.value){const o=w.value;return k.value.poolsObj[o]}else return null}),ue=g("--"),ce=g("--");se(()=>[S.value,De.value],async([o,s])=>{var a,p,f,u;if(o&&!U(o)){((a=t==null?void 0:t.currentRoute)==null?void 0:a.value.name)=="liquidity-deposit"||((p=t==null?void 0:t.currentRoute)==null?void 0:p.value.name)=="liquidity-create"?t.replace(`/liquidity/deposit?poolAddress=${o.address}`):((f=t==null?void 0:t.currentRoute)==null?void 0:f.value.name)=="liquidity-position"?t.replace(`/liquidity/position?poolAddress=${o.address}`):((u=t==null?void 0:t.currentRoute)==null?void 0:u.value.name)=="liquidity-analytics"&&t.replace(`/liquidity/analytics?poolAddress=${o.address}`),d.value=o.needReverse?o.coinB:o.coinA,c.value=o.needReverse?o.coinA:o.coinB,_.value=o.fee,w.value=o.address;const v=o.token_a.decimals,l=o.token_b.decimals;if(L.value.chainName&&L.value.chainName.includes("Aptos")){const m=await x.value.getPool(o.address);ue.value=x.value.TickMath.sqrtPriceX64ToPrice(m.current_sqrt_price,v,l).toString(),ce.value=new N(1).div(x.value.TickMath.sqrtPriceX64ToPrice(m.current_sqrt_price,v,l)).toString()}else ue.value=o.price,U(s||{})||(ce.value=new N(1).div(co.sqrtPriceX64ToPrice(s.current_sqrt_price||(s==null?void 0:s.object.current_sqrt_price),v,l)).toString())}},{immediate:!0,deep:!0});const We=C(()=>k.value.currentPoolMoreInfo),Ee=C(()=>be.value.farmsPoolObj[w.value]);se(()=>[S.value,k.value.addressLpTokens],o=>{o&&uo(S.value,k,L)},{immediate:!0,deep:!0});const ze=o=>{_.value="",te.value=!1,j.value={},A.value={},re.value=="coinA"?(d.value=o,ae(o,"fromCoin"),(c.value&&c.value.address)==o.address&&(c.value=null,w.value="")):(c.value=o,ae(o,"toCoin"),(d.value&&d.value.address)==o.address&&(d.value=null,w.value=""))},Be=o=>{var s,a;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((a=(s=k.value.tokensObj)==null?void 0:s[o==null?void 0:o.address])==null?void 0:a.logo_url)||(L.value.theme==="default"?we("/image/coins/unknown.png"):we("/image/coins/sui-unknown.png"))},j=g(),A=g(),Ce=g(!1),ae=(o,s)=>{var u,v,l,m;console.log("🚀🚀🚀 ~ file: liquidity.vue:919 ~ getTokenSource ~ token:",o);const a=localStorage.getItem(o==null?void 0:o.address),p=L.value.importTokenListObj,f=o==null?void 0:o.isSelfBuilt;(te.value?f&&!a:f&&!(p!=null&&p.hasOwnProperty(o==null?void 0:o.address)))&&(s=="fromCoin"&&(j.value=o),s=="toCoin"&&(A.value=o),console.log("🚀🚀🚀 ~ file: liquidity.vue:919 ~ getTokenSource ~ warningFromCoin.value:",j.value),console.log("🚀🚀🚀 ~ file: liquidity.vue:922 ~ getTokenSource ~ warningToCoin.value:",A.value),((u=j==null?void 0:j.value)==null?void 0:u.address)==((v=A==null?void 0:A.value)==null?void 0:v.address)&&(A.value={}),((l=j==null?void 0:j.value)!=null&&l.address||(m=A==null?void 0:A.value)!=null&&m.address)&&(Ce.value=!0))};let te=g(!0);se(()=>[d.value,c.value],([o,s])=>{te.value&&(o&&!U(o)&&ae(o,"fromCoin"),s&&!U(s)&&ae(s,"toCoin"))},{immediate:!0});const Ve=()=>{K.value!=="Aptos"?t.push("/pool/list"):t.push("/pools")},Ye=mo(),be=C(()=>Ye),He=C(()=>be.value.farmsPoolObj),Xe=o=>{W.value=o.name,o.name=="Provide Liquidity"&&t.push(`/liquidity/deposit?poolAddress=${S==null?void 0:S.value.address}`),o.name=="Your Liquidity"&&t.push(`/liquidity/position?poolAddress=${S==null?void 0:S.value.address}`),o.name=="Analytics"&&t.push(`/liquidity/analytics?poolAddress=${S==null?void 0:S.value.address}`)},Ge=C(()=>k.value.poolPositions);return{windowWidth:Z,firstWarning:te,currentTab:W,changeTab:Xe,tabList:V,currentPriceReverse:ce,Decimal:N,chainName:K,warningFromCoin:j,warningToCoin:A,isShowTokenWarning:Ce,closeTokenWarning:Ve,direct:G,currentPrice:ue,creatFeeItem:J,feeValue:_,checkNullObj:U,poolMoreInfo:We,poolTvl:je,isShowFeeList:O,filterCreatePoolCoin:de,route:h,selectFee:Ie,isCreatePool:he,feeTierList:Oe,currentToken:re,tokenA:d,tokenB:c,selectToken:Re,showCoinSelect:Y,onCoinSelect:ze,getCoinIcon:Be,currentPoolAddress:w,poolInfo:S,store:L,config:Ae,t:q,router:t,addCommom:F,theme:Le,statsData:Ne,pools:k,isCreatePoolFromCoin:ee,isCreatePoolToCoin:oe,farmsPoolObj:He,sFixD:ve,farmsPoolInfo:Ee,poolPositions:Ge}}});const ie=e=>($e("data-v-3b68e809"),e=e(),Pe(),e),zo={class:"liquidity-top-container"},Bo={class:"back-div"},Vo={class:"right"},Yo={key:0,class:"current-price"},Ho=ie(()=>n("svg",{class:"swap-icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon_swap2"})],-1)),Xo=ie(()=>n("span",null,"Trade",-1)),Go=[Ho,Xo],Jo={class:"liquidity-header"},Ko={class:"header-left"},Qo={class:"select-token-box"},Zo={class:"fee-tier"},xo=ie(()=>n("span",null,"Fee tier",-1)),es={key:0,class:"icon edit-fee-icon","aria-hidden":"true"},os=ie(()=>n("use",{"xlink:href":"#icon-icon_arrow"},null,-1)),ss=[os],is={key:0,class:"fee-tier-box"},as=["onClick"],ts={key:0,class:"text-active"},ls={key:1},ns={key:0,class:"icon fee-disabled","aria-hidden":"true"},rs=ie(()=>n("use",{"xlink:href":"#icon-icon-disable"},null,-1)),ds=[rs],us={key:0,class:"header-creat-pool"},cs={key:1,class:"tab-box"};function vs(e,i,Z,X,R,q){const B=Je,t=le("CurrentPrice"),V=le("TokenDropdownSelect"),W=Me,Y=le("SelectTab"),O=ao,G=to;return r(),b(Te,null,[n("div",zo,[n("div",Bo,[H(B,{url:"/pool/list",label:"Pools"}),n("div",Vo,[e.windowWidth>750&&e.currentPrice&&e.currentPriceReverse&&e.currentTab!=="Provide Liquidity"?(r(),b("div",Yo,[H(t,{"from-coin":e.tokenA,"to-coin":e.tokenB,"one-to-amount":("addCommom"in e?e.addCommom:T(F))(("decimalUi"in e?e.decimalUi:T(ke))(e.currentPriceReverse,6)),"one-from-amount":("addCommom"in e?e.addCommom:T(F))(("decimalUi"in e?e.decimalUi:T(ke))(e.currentPrice,6))},null,8,["from-coin","to-coin","one-to-amount","one-from-amount"])])):P("",!0),e.$route.name!=="liquidity-create"?(r(),b("div",{key:1,class:Q(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:i[0]||(i[0]=fe(y=>{var E,h;return e.router.push(`/swap?from=${(E=e.tokenA)==null?void 0:E.address}&to=${(h=e.tokenB)==null?void 0:h.address}`)},["stop"]))},Go,2)):P("",!0)])]),n("div",Jo,[n("div",Ko,[n("div",Qo,[H(V,{"token-info":e.tokenA,"has-opcity":!0,"coin-size":"32px","is-loading":e.pools.isTokenLoading,onOnSelect:i[1]||(i[1]=y=>e.pools.isTokenLoading?"":e.selectToken("coinA"))},null,8,["token-info","is-loading"]),H(V,{"token-info":e.tokenB,"has-opcity":!0,"coin-size":"32px","is-loading":e.pools.isTokenLoading,onOnSelect:i[2]||(i[2]=y=>e.pools.isTokenLoading?"":e.selectToken("coinB"))},null,8,["token-info","is-loading"])]),n("div",Zo,[n("div",{class:Q(["fee-text",[{"fee-tier-action":e.tokenA&&e.tokenB},{"no-cursor":!e.tokenA||!e.tokenB}]]),onClick:i[3]||(i[3]=fe(y=>!e.tokenA||!e.tokenB?"":e.isShowFeeList=!e.isShowFeeList,["stop"]))},[xo,n("div",null,[n("p",null,I(e.feeValue?e.feeValue*100:"--")+"%",1),e.store.chainName!=="Aptos"?(r(),b("svg",es,ss)):P("",!0)])],2),e.isShowFeeList?(r(),b("div",is,[(r(!0),b(Te,null,so(e.feeTierList,(y,E)=>{var h,_,d,c,J;return r(),b("div",{key:E,class:Q(["fee-item",[e.feeValue==y.fee?"fee-item-active":"",e.isCreatePool.includes(y.fee)?" pool-created":" pool-not-created",e.store.chainName!=="Aptos"&&!e.isCreatePool.includes(y.fee)&&!e.filterCreatePoolCoin[(h=e.tokenA)==null?void 0:h.address]&&!e.filterCreatePoolCoin[(_=e.tokenB)==null?void 0:_.address]?"disabled":""]]),onClick:fe(w=>e.selectFee(y),["stop"])},[n("p",{class:Q(e.isCreatePool&&e.isCreatePool.includes(y.fee)?"text-active":"text-default")},I(y.title),3),n("div",null,[e.isCreatePool&&e.isCreatePool.includes(y.fee)?(r(),b("p",ts,I(e.poolTvl&&e.poolTvl[y.fee]&&((d=e.poolTvl[y.fee])==null?void 0:d.rateText)),1)):P("",!0),e.isCreatePool&&!e.isCreatePool.includes(y.fee)?(r(),b("p",ls,[io(I(e.$t("newAdd.notCreated"))+" ",1),!e.isCreatePool.includes(y.fee)&&!e.filterCreatePoolCoin[(c=e.tokenA)==null?void 0:c.address]&&!e.filterCreatePoolCoin[(J=e.tokenB)==null?void 0:J.address]?(r(),b("svg",ns,ds)):P("",!0)])):P("",!0),n("span",null,I(y.text),1)])],10,as)}),128))])):P("",!0)])]),e.$route.name!=="liquidity-create"&&e.tokenA&&e.tokenB&&e.route.query.pool!=="notfount"?(r(),D(W,{key:0,"pool-more-info":e.poolMoreInfo,"pool-info":e.poolInfo,"farms-pool-info":e.farmsPoolInfo},null,8,["pool-more-info","pool-info","farms-pool-info"])):P("",!0)]),n("div",{class:Q(["upgrade-liquidity-tab",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""])},[e.$route.name==="liquidity-create"?(r(),b("div",us," Create Concentrated Pool ")):(r(),b("div",cs,[H(Y,{"tab-list":e.tabList,"current-tab":e.currentTab,onOnClick:i[4]||(i[4]=y=>e.changeTab(y))},null,8,["tab-list","current-tab"])]))],2)]),e.showCoinSelect?(r(),D(O,{key:0,"existing-coins":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"last-select-coin":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"is-create-pool-to-coin":e.isCreatePoolToCoin,"is-create-pool-from-coin":e.isCreatePoolFromCoin,"have-import-btn":!0,onOnSelect:e.onCoinSelect,onOnClose:i[5]||(i[5]=y=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","is-create-pool-to-coin","is-create-pool-from-coin","onOnSelect"])):P("",!0),e.currentTab=="Provide Liquidity"&&e.isShowTokenWarning?(r(),D(G,{key:1,"from-coin":e.warningFromCoin,"to-coin":e.warningToCoin,"is-import-modal":!e.firstWarning,onClose:e.closeTokenWarning,onClickContinue:i[6]||(i[6]=()=>{e.isShowTokenWarning=!1,e.warningFromCoin="",e.warningToCoin=""})},null,8,["from-coin","to-coin","is-import-modal","onClose"])):P("",!0)],64)}const fs=ye(Eo,[["render",vs],["__scopeId","data-v-3b68e809"]]),ps={class:"new-liquidity-container"},ms={key:2,class:"router-view-container"},ys=pe({__name:"liquidity-sui",setup(e){const i=g("1"),Z=g("2"),X=me();return(R,q)=>{const B=le("router-view");return r(),b("div",ps,[R.$route.name!=="liquidity-create"?(r(),D(fs,{key:0})):P("",!0),!i.value||!Z.value||T(X).query.pool=="notfount"?(r(),D(qo,{key:1,url:"/sui-image/img-no-data@2x.png",text:"Your position will appear here"})):(r(),b("div",ms,[H(B)]))])}}});const Qs=ye(ys,[["__scopeId","data-v-013d46f2"]]);export{Qs as default};
