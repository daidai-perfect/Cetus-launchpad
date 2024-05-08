import{_ as fo}from"./token-warning.792e98a7.js";import{_ as co}from"./status-block.1f7dc367.js";import{u as V,c as so,k as q,e as Io,a as _,d as R}from"./sha256.91c60824.js";import{a as z,y as io,r as L,l as b,e as H,s as to,o as d,f as m,h as e,i as I,w as O,t as U,v as i,x as w,A as M,u,M as ko,p as J,k as Q,q as no,b as ho,c as ao,j as F,z as vo,B as lo,$ as go,a1 as bo,Q as _o}from"./entry.a6654d09.js";import"./index.43c7dce9.js";import{u as ro}from"./pool.58e56ed3.js";import{i as A}from"./import-icon.de3e6c66.js";import{_ as uo}from"./icon-arrow_2x.948aedb2.js";import{_ as mo}from"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import{u as Co}from"./notifi.4fdf219a.js";const So=z({props:{positionInfo:{type:Object,required:!0,default:()=>({})}},setup(o){const{t:p}=io();let y=L(!1),$=L(!0);const k=V(),C=ro(),n=b(()=>C),l=b(()=>{var t,r,v,g,P,N,B,T;if(so(o.positionInfo))return" --";{const E=o.positionInfo.amountA*((r=n.value.RATES[(t=o.positionInfo)==null?void 0:t.token_a.address])==null?void 0:r.price),D=o.positionInfo.amountB*((g=n.value.RATES[(v=o.positionInfo)==null?void 0:v.token_b.address])==null?void 0:g.price);return(N=n.value.RATES[(P=o.positionInfo)==null?void 0:P.token_a.address])!=null&&N.price&&((T=n.value.RATES[(B=o.positionInfo)==null?void 0:B.token_b.address])!=null&&T.price)?E+D:" --"}}),h=b(()=>{var t,r,v,g;return(r=n.value.RATES[(t=o.positionInfo)==null?void 0:t.token_a.name.toUpperCase()])!=null&&r.price&&l.value!=="--"?(o.positionInfo.amountA*((g=n.value.RATES[(v=o.positionInfo)==null?void 0:v.token_a.name.toUpperCase()])==null?void 0:g.price)/l.value*100).toFixed(0):" --"}),f=b(()=>{var t,r,v,g;return(r=n.value.RATES[(t=o.positionInfo)==null?void 0:t.token_b.name.toUpperCase()])!=null&&r.price&&l.value!=="--"?(o.positionInfo.amountB*((g=n.value.RATES[(v=o.positionInfo)==null?void 0:v.token_b.name.toUpperCase()])==null?void 0:g.price)/l.value*100).toFixed(0):" --"}),s=b(()=>n.value.allTokenObj&&o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.address&&n.value.allTokenObj[o.positionInfo.token_a.address]&&n.value.allTokenObj[o.positionInfo.token_a.address].logoURI),a=b(()=>n.value.allTokenObj&&o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.address&&n.value.allTokenObj[o.positionInfo.token_b.address]&&n.value.allTokenObj[o.positionInfo.token_b.address].logoURI),c=b(()=>{var t,r;return(r=(t=o.positionInfo)==null?void 0:t.poolInfo)==null?void 0:r.needReverse}),S=t=>{var r;return(t==null?void 0:t.logoURI)||(t==null?void 0:t.logo_url)||((r=n.value.tokensObj[t==null?void 0:t.address])==null?void 0:r.logo_url)||(k.theme==="default"?A("/image/coins/unknown.png"):A("/image/coins/sui-unknown.png"))};return{tokensObj:b(()=>n.value.tokensObj),fromPercent:f,toPercent:h,amountUSD:l,showNum:q,t:p,importIcon:A,indexStore:k,rateChange:$,decimalFormat:Io,fromCoinUrl:s,toCoinUrl:a,pools:n,addCommom:_,isPc:y,needReverse:c,getCoinIcon:S,decimalUi:R}}});const po=o=>(J("data-v-6a18e63f"),o=o(),Q(),o),yo={key:0,class:"position-card"},wo={key:0,class:"coin-pair"},$o={class:"coin-a"},Uo={class:"coin-b"},Oo={key:1,class:"coin-pair"},Po={class:"coin-a"},Ro={key:0,class:"token-warning"},Ao={class:"coin-b"},jo={key:0,class:"token-warning"},No={class:"fee"},Bo={class:"right"},To={key:0,class:"status"},Eo={class:"min-and-max"},Do={key:0},qo={class:"text"},Lo={key:0,src:uo,alt:""},Mo={key:1,src:mo,alt:""},Fo={class:"text"},Vo={key:1},zo={class:"text"},Ho={key:0,src:uo,alt:""},Jo={key:1,src:mo,alt:""},Qo={class:"text"},Wo=po(()=>e("div",null,[e("svg",{class:"icon icon-up","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Ko=po(()=>e("div",null,[e("svg",{class:"icon icon-down","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Xo=[Wo,Ko],Yo={class:"liquidity"},Zo={class:"label"},Go={class:"value"},xo={class:"item"},oe={class:"rate"},ee={class:"item"},ne={class:"rate"};function se(o,p,y,$,k,C){const n=fo,l=ko,h=co,f=to("image");return o.positionInfo?(d(),m("div",yo,[e("div",{class:M(["left",`position-status-${o.positionInfo&&o.positionInfo.currentStatus&&o.positionInfo.currentStatus.toLowerCase()}`])},[I(l,{class:"left-skeleton",loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>{var s,a,c,S;return[o.needReverse?(d(),m("div",Oo,[e("div",null,[e("div",Po,[U(e("img",null,null,512),[[f,o.toCoinUrl||o.getCoinIcon(o.positionInfo.token_b)]]),o.tokensObj&&o.tokensObj[o.positionInfo.token_b.address]&&o.tokensObj[o.positionInfo.token_b.address].isSelfBuilt?(d(),m("div",Ro)):w("",!0)]),e("div",Ao,[U(e("img",null,null,512),[[f,o.fromCoinUrl||o.getCoinIcon(o.positionInfo.token_a)]]),o.tokensObj&&o.tokensObj[o.positionInfo.token_a.address]&&o.tokensObj[o.positionInfo.token_a.address].isSelfBuilt?(d(),m("div",jo)):w("",!0)])]),e("span",null,i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" - "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(d(),m("div",wo,[e("div",null,[e("div",$o,[U(e("img",null,null,512),[[f,o.fromCoinUrl||o.getCoinIcon(o.positionInfo.token_a)]]),I(n,{address:(a=(s=o.positionInfo)==null?void 0:s.token_a)==null?void 0:a.address,"style-params":{width:"16px",height:"16px",left:"25px",bottom:"10px"}},null,8,["address"])]),e("div",Uo,[U(e("img",null,null,512),[[f,o.toCoinUrl||o.getCoinIcon(o.positionInfo.token_b)]]),I(n,{address:(S=(c=o.positionInfo)==null?void 0:c.token_b)==null?void 0:S.address,"style-params":{width:"16px",height:"16px",left:"25px",bottom:"10px"}},null,8,["address"])])]),e("span",null,i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" - "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),e("div",No,i(o.$t("common.fee"))+" "+i(o.positionInfo.fee*100)+"% ",1)]}),_:1},8,["loading"])],2),e("div",Bo,[o.pools.currentPositionLoading?w("",!0):(d(),m("div",To,[I(h,{"current-status":o.positionInfo.currentStatus||"","block-name":"detail"},null,8,["current-status"])])),I(l,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>[e("div",Eo,[(o.needReverse?!o.rateChange:o.rateChange)?(d(),m("div",Do,[e("div",qo,i(("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(R))(String(o.positionInfo.minPrice),6))),1),o.indexStore.theme=="default"?(d(),m("img",Lo)):(d(),m("img",Mo)),e("div",Fo,i(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(R))(String(o.positionInfo.maxPrice),6)))+" "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" per "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(d(),m("div",Vo,[e("div",zo,i(("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(R))(String(1/Number(o.positionInfo.maxPrice)),6))),1),o.indexStore.theme=="default"?(d(),m("img",Ho)):(d(),m("img",Jo)),e("div",Qo,i(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(R))(String(1/Number(o.positionInfo.minPrice)),6)))+" "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" per "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),e("div",{class:"icon-change",onClick:p[0]||(p[0]=s=>o.rateChange=!o.rateChange)},Xo)])]),_:1},8,["loading"]),e("div",Yo,[I(l,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>[e("div",Zo,i(o.$t("common.liquidity")),1),e("div",Go," $"+i(o.amountUSD=="--"?"--":Number(o.amountUSD)==0?0:Number(o.amountUSD)<.01?"<0.01":("addCommom"in o?o.addCommom:u(_))(o.amountUSD,2)),1)]),_:1},8,["loading"])]),e("div",{class:M(o.needReverse?"token-num reverse":"token-num")},[I(l,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>{var s,a,c,S,j,t,r,v,g,P,N,B,T,E,D,W,K,X,Y,Z,G,x,oo,eo;return[e("div",xo,[e("div",null,[U(e("img",null,null,512),[[f,o.fromCoinUrl||o.getCoinIcon((s=o.positionInfo)==null?void 0:s.token_a)]]),I(n,{address:(c=(a=o.positionInfo)==null?void 0:a.token_a)==null?void 0:c.address,"style-params":{width:"12px",height:"12px",left:"15px",bottom:"0px"}},null,8,["address"]),e("p",null,i(("decimalUi"in o?o.decimalUi:u(R))((S=o.positionInfo)==null?void 0:S.amountA,(t=(j=o.positionInfo)==null?void 0:j.token_a)==null?void 0:t.decimals)),1),e("span",null,i((v=(r=o.positionInfo)==null?void 0:r.token_a)==null?void 0:v.symbol)+" "+i((P=(g=o.positionInfo)==null?void 0:g.token_a)!=null&&P.labels&&((B=(N=o.positionInfo)==null?void 0:N.token_a)!=null&&B.labels[0])?`(${o.positionInfo.token_a.labels[0]})`:""),1)]),e("div",oe,i(("addCommom"in o?o.addCommom:u(_))(o.positionInfo.fromPercent,0))+"% ",1)]),e("div",ee,[e("div",null,[U(e("img",null,null,512),[[f,o.toCoinUrl||o.getCoinIcon((T=o.positionInfo)==null?void 0:T.token_b)]]),I(n,{address:(D=(E=o.positionInfo)==null?void 0:E.token_b)==null?void 0:D.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),e("p",null,i(("decimalUi"in o?o.decimalUi:u(R))((W=o.positionInfo)==null?void 0:W.amountB,(X=(K=o.positionInfo)==null?void 0:K.token_b)==null?void 0:X.decimals)),1),e("span",null,i((Z=(Y=o.positionInfo)==null?void 0:Y.token_b)==null?void 0:Z.symbol)+" "+i((x=(G=o.positionInfo)==null?void 0:G.token_b)!=null&&x.labels&&((eo=(oo=o.positionInfo)==null?void 0:oo.token_b)!=null&&eo.labels[0])?`(${o.positionInfo.token_b.labels[0]})`:""),1)]),e("div",ne,i(("addCommom"in o?o.addCommom:u(_))(o.positionInfo.toPercent,0))+"%",1)])]}),_:1},8,["loading"])],2)])])):w("",!0)}const Ae=H(So,[["render",se],["__scopeId","data-v-6a18e63f"]]),ie=z({props:{positionInfo:{type:Object,default:()=>({})}},setup(o){const p=Co(),y=b(()=>p),$=b(()=>y.value.status),k=V(),C=L(!1);no(()=>$.value,s=>{s=="authenticated",C.value=!1},{immediate:!0});const n=L(!1),l=async()=>{n.value=!n.value;const s={pool_address:o.positionInfo.poolAddress,position_index:o.positionInfo.index},a=o.positionInfo.nftHash;try{await p.subscribePosition(s,a,n.value)}catch{n.value=!n.value}},h=s=>{const a=s.sources;n.value=a.some(c=>JSON.parse(c.blockchainAddress).pool_address==o.positionInfo.poolAddress&&Number(JSON.parse(c.blockchainAddress).position_index)==Number(o.positionInfo.index))},f=ho();return no(()=>[y.value.sourceGroups,o.positionInfo],([s,a])=>{var c,S,j;n.value=!1,s&&s.length>0&&s[0]&&a&&!so(a)&&((j=(S=(c=f==null?void 0:f.currentRoute)==null?void 0:c.value)==null?void 0:S.query)==null?void 0:j.token)==(a==null?void 0:a.name)&&h(s[0])},{immediate:!0,deep:!0}),{importIcon:A,isShowSetUp:C,changeSwitch:l,checked:n,notifiStatus:$,store:k}}});const te=o=>(J("data-v-f154a7c6"),o=o(),Q(),o),ae={class:"range-alerts"},le={class:"range-alerts-top"},de={class:"title"},re=te(()=>e("div",{class:"title-all"},[e("span",{class:"Range"},"Range Alerts")],-1)),ue={key:1,class:"h5-switch-box"},me={class:"range-alerts-bottom"},pe={key:0,class:"pc-switch-box"};function fe(o,p,y,$,k,C){const n=lo,l=go;return d(),m("div",ae,[e("div",le,[e("div",de,[re,o.isShowSetUp||o.notifiStatus!=="authenticated"?(d(),ao(n,{key:0,class:"range-alerts-button",onClick:p[0]||(p[0]=vo(h=>o.store.setIsShowNotifi(!0),["stop"]))},{default:O(()=>[F(" Set up ")]),_:1})):w("",!0),!o.isShowSetUp&&o.notifiStatus=="authenticated"?(d(),m("div",ue,[I(l,{class:"range-alerts-switch",checked:o.checked,disabled:o.notifiStatus!=="authenticated",onChange:o.changeSwitch},null,8,["checked","disabled","onChange"])])):w("",!0)])]),e("div",me,[F(" Receive alerts via Telegram, SMS, or email when this position goes out of range. "),!o.isShowSetUp&&o.notifiStatus=="authenticated"?(d(),m("div",pe,[I(l,{class:"range-alerts-switch",checked:o.checked,disabled:o.notifiStatus!=="authenticated",onChange:o.changeSwitch},null,8,["checked","disabled","onChange"])])):w("",!0)])])}const je=H(ie,[["render",fe],["__scopeId","data-v-f154a7c6"]]),ce=z({components:{Modal:bo},props:{positionInfo:{type:Object,required:!0},isLoading:{type:Boolean,required:!0},needReverse:{type:Boolean,required:!1}},setup(o,p){const{t:y,locale:$}=io(),k=V(),{copy:C}=k,n=()=>{p.emit("toClaim")},l=ro(),h=b(()=>l);return{showNum:q,toClaim:n,t:y,addCommom:_,importIcon:A,store:k,copy:C,getCoinIcon:s=>{var a;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((a=h.value.tokensObj[s==null?void 0:s.address])==null?void 0:a.logo_url)||(k.theme==="default"?A("/image/coins/unknown.png"):A("/image/coins/sui-unknown.png"))}}}});const Ie=o=>(J("data-v-aee0080d"),o=o(),Q(),o),ke=Ie(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),he={key:0,class:"pc-claim"},ve={key:1,class:"pc-claim"};function ge(o,p,y,$,k,C){const n=lo,l=_o("Modal"),h=to("image");return d(),ao(l,{visible:!0,class:"claim-fees",centered:"",closable:!0,title:o.$t("modal.claimFees"),width:"400px",footer:null,onCancel:p[0]||(p[0]=f=>o.$emit("onClose"))},{closeIcon:O(()=>[ke]),default:O(()=>[e("div",{class:M(o.needReverse?"claim-container reverse":"claim-container")},[o.positionInfo&&o.positionInfo.token_a.symbol?(d(),m("div",he,[U(e("img",null,null,512),[[h,o.getCoinIcon(o.positionInfo.token_a)]]),e("span",null,i(("showNum"in o?o.showNum:u(q))(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals))+" "+i(o.positionInfo.token_a.symbol),1)])):w("",!0),o.positionInfo&&o.positionInfo.token_b.symbol?(d(),m("div",ve,[U(e("img",null,null,512),[[h,o.getCoinIcon(o.positionInfo.token_b)]]),e("span",null,i(("showNum"in o?o.showNum:u(q))(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals))+" "+i(o.positionInfo.token_b.symbol),1)])):w("",!0)],2),I(n,{class:"big-btn claim-btn",disabled:o.isLoading||("addCommom"in o?o.addCommom:u(_))(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals)==0&&("addCommom"in o?o.addCommom:u(_))(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals)==0||o.positionInfo.poolInfo.is_pause,onClick:o.toClaim},{default:O(()=>[F(i(o.$t("common.claim")),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["title"])}const Ne=H(ce,[["render",ge],["__scopeId","data-v-aee0080d"]]);export{Ae as _,je as a,Ne as b};
