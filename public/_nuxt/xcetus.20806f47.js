import{u as Pe,_ as bt}from"./xwhale-header.81303a27.js";import{r as f,a1 as ze,G as M,e as ae,o as c,f as w,h as a,v as T,j as L,l as _e,m as u,q as Ze,x as j,t as Te,c as O,Y as Je,p as ie,k as ue,i as F,F as Ee,s as Be,w as G,B as we,M as Ke,u as Re,z as ge,a as De,U as St,V as Ct,Z as yt,P as Tt,y as kt,E as It,N as je,a6 as $t}from"./entry.7dcfbd3d.js";import"./index.c581952a.js";import{u as he,g as x,k as ye,i as fe,d as te,c as Ye,ab as xt}from"./index.33b6d0c7.js";import{i as se}from"./import-icon.de3e6c66.js";import{b as be,u as Le,c as Ue,p as ne,h as qe,m as Ce}from"./pool.3fc49680.js";import{u as Me}from"./useWhale.d0286035.js";import{_ as Qe}from"./xWHALE-icon.2df34cd4.js";import{_ as et}from"./WHALE-icon.28f954ba.js";import{_ as At}from"./head-switch.21a03ec1.js";/* empty css              */import{u as Nt}from"./useDebounceFunction.ae1c5629.js";import{_ as Et}from"./icon-selected_3x.09e9a6f0.js";/* empty css              *//* empty css              */import{u as Bt}from"./useTheme.f7d39642.js";import{_ as Ge}from"./img-leverage_2x.1c577303.js";import"./decimal.0bdeb344.js";const Rt={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const l=f("--"),n=f("--"),_=f("--"),I=f("--");let m=null;ze(()=>{window.clearInterval(m)});const k=()=>{const b=new Date().getTime()/1e3;Number(b)<=Number(e.startTime)&&S(e.startTime),Number(b)>Number(e.startTime)&&Number(b)<=Number(e.endTime)&&S(e.endTime)},S=b=>{clearInterval(m),window.clearInterval(m),m=setInterval(()=>{let p=new Date().getTime()/1e3,s=b-parseInt(String(p));if(s==0){t.emit("countDown"),clearInterval(m),window.clearInterval(m),m=null;return}else s<0&&(clearInterval(m),window.clearInterval(m),t.emit("countDown"),m=null);s--;let d=parseInt(String(s/60/60/24));d=(d<10,d);let i=parseInt(String(s/60/60%24));i=(i<10,i);let h=parseInt(String(s/60%60));h=(h<10,h);let $=parseInt(String(s%60));$=$<10?+$:$,l.value=d,n.value=i,_.value=h,I.value=$},1e3)};return M(()=>e.startTime,(b,p)=>{b!==p&&k()},{immediate:!0}),{day:l,hour:n,min:_,sec:I}}};const Pt={class:"count-time"};function Dt(e,t,l,n,_,I){return c(),w("div",Pt,[a("p",null,T(n.day)+"d",1),L(" : "),a("p",null,T(n.hour)+"h",1),L(" : "),a("p",null,T(n.min)+"m",1),L(" : "),a("p",null,T(n.sec)+"s",1)])}const Lt=ae(Rt,[["render",Dt],["__scopeId","data-v-ce10c596"]]),Ut={props:{titleText:{type:String,default:""},tipsText:{type:String,default:""},imgIcon:{type:String,default:""},value:{type:String,default:"--"},tokenSymbol:{type:String,default:""},logo:{type:String,default:""}},setup(e){const{t}=_e(),l=he(),n=u(()=>l);return{t,wallet:n}}};const Mt=e=>(ie("data-v-3a7e8049"),e=e(),ue(),e),Vt={class:"table-rewards"},Wt={key:0,class:"logo"},Ot=["src"],Ft={class:"text-top-all"},Ht={key:0,class:"icon-hover-box"},Xt=Mt(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-information"})],-1)),jt={class:"tips-text-box"},Yt={key:0},qt={key:0,alt:""},Gt={key:2};function zt(e,t,l,n,_,I){const m=Je,k=Ze("image");return c(),w("div",Vt,[l.logo?(c(),w("div",Wt,[a("img",{src:l.logo,alt:""},null,8,Ot)])):j("",!0),a("div",null,[a("div",Ft,[a("p",null,T(l.titleText),1),l.tipsText?(c(),w("div",Ht,[Xt,a("div",jt,T(l.titleText=="est.APR"?"Estimated APR of the current epoch for all xCETUS holders.":"The number of qualified positions in this epoch."),1)])):j("",!0)]),a("span",null,[l.value!=="--"?(c(),w("p",Yt,[l.imgIcon?Te((c(),w("img",qt,null,512)),[[k,l.imgIcon]]):j("",!0),L(T(l.value)+" ",1),a("span",null,T(l.tokenSymbol),1)])):l.value=="--"&&n.wallet&&n.wallet.address?(c(),O(m,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(c(),w("p",Gt,"--"))])])])}const Zt=ae(Ut,[["render",zt],["__scopeId","data-v-3a7e8049"]]),Jt={setup(e){const{t}=_e(),l=Pe(),n=u(()=>l),_=u(()=>n.value.pendingAmount),I=u(()=>n.value.newPendingAmount),m=u(()=>n.value.rewardCoinAmount),k=u(()=>n.value.nextStartTime),S=u(()=>1683094391),b=u(()=>n.value.xcetusShare&&x(n.value.xcetusShare,3)),p=he(),P=u(()=>p),s=u(()=>n.value.cetusApr&&n.value.cetusApr>.01?x(ye(n.value.cetusApr,2),2):x(n.value.cetusApr,2)),d=u(()=>n.value.pendingCoinInfo),i=u(()=>n.value.newPendingCoinInfo),h=u(()=>n.value.rewardCoin),$=f("");M(()=>d.value,C=>{C&&fe(C),$.value="Pending yield"},{immediate:!0});const g=f("");M(()=>i.value,C=>{C&&!fe(C)?g.value=`Pending yield (${C.symbol})`:g.value="Pending yield"},{immediate:!0});const E=f();M(()=>h.value,C=>{C&&!fe(C)?E.value=`Pending yield (${C.symbol})`:E.value="Pending yield"},{immediate:!0});const oe=()=>{console.log("🚀🚀🚀 ~ file: holder-rewards-banner.vue:232 ~ getNextEpoch ~ getNextEpoch:"),setTimeout(()=>{l.getDividendManager()},3e3)},H=u(()=>n.value.dividendManagerInfo),Y=u(()=>{const C=parseInt(String(new Date().getTime()/1e3)),D=H.value.interval_day,y=(C-Number(H.value.start_time))/(D*60);return parseInt(String(y))>0}),K=be(),X=u(()=>K),{setIsShowSuccess:de,setIsShowRejected:U,setIsShowWaiting:z,setTransactionDesc:pe,setTransactionTxid:A}=K,ce=Me("Sui"),le=f(!1),Ie=u(()=>n.value.venft_id),me=u(()=>X.value.chainName?Ue(X.value.chainName):{}),B=async()=>{le.value=!0,z(!0),A("");let C=`${t("tips.claimingPendingYield")} `,D="";ee.value.forEach((y,Z)=>{D=D+`${x(y.amount)} ${y.symbol} ${Z==ee.value.length-1?"":"and "}`}),pe(C+D);try{let y;const Z=await ce.getRedeemDividendV2Payload(Ie.value),q=await me.value.signAndExecuteTransactionBlock(P.value.currentWallet,Z.txb,Z.payloadParams);if(y=me.value.handleTx(q),y&&y.hash){A(y.hash),z(!1),de(!0);const ve={title:"Claim",desc:`Claimed ${D} successfully.`,hash:y.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:d.value.symbol,numa:`+ ${_.value}`,logoa:d.value.logo_url}};me.value.showTransitionPending(ve);const J=await me.value.watchTransaction(ve);console.log("0221###swap###transitionStatus####",J),J&&setTimeout(()=>{l.getVeNFTDividendInfo(),le.value=!1},3e3)}else z(!1),U(!0),le.value=!1}catch(y){z(!1),U(!0),le.value=!1,console.log(y,"error===>")}},Q=Le(),$e=u(()=>Q),N=C=>{var D;return(C==null?void 0:C.logoURI)||(C==null?void 0:C.logo_url)||((D=$e.value.tokensObj[C==null?void 0:C.address])==null?void 0:D.logo_url)},ee=u(()=>n.value.xcetusRewardList);return{t,pendingAmount:_,nextStartTime:k,wallet:P,myShare:b,importIcon:se,nextEndTime:S,pendingYieldText:$,cetusApr:s,pendingCoinInfo:d,getNextEpoch:oe,canClaim:Y,claimPendingYield:B,claimLoading:le,addCommom:x,newPendingCoinInfo:i,newPendingAmount:I,newPendingYieldText:g,rewardCoin:h,rewardCoinAmount:m,rewardCoinYieldText:E,getCoinIcon:N,xcetusRewardList:ee}}},Kt=""+new URL("staking-rewards-banner-h5.1c7401db.png",import.meta.url).href,Qt=""+globalThis.__publicAssetsURL("sui-image/icon_pendingyield@2x.png");const Se=e=>(ie("data-v-7aa6ce40"),e=e(),ue(),e),en={class:"top-banner"},tn=Se(()=>a("img",{src:Kt,alt:""},null,-1)),nn=Se(()=>a("p",null,"Convert CETUS to xCETUS to start earning",-1)),an={class:"bot-count"},on=Se(()=>a("span",null,"Reward distribution in ",-1)),ln={class:"holder-rewards"},sn=Se(()=>a("div",{class:"title"},[a("div",{class:"left"},[a("span",null,"xCETUS Staking Rewards")])],-1)),un={class:"rewards-value"},rn={key:0,class:"pending-yield"},dn=Se(()=>a("div",{class:"pending-yield-title"},[a("img",{src:Qt,alt:""}),a("span",null,"Pending Yield")],-1)),cn={class:"pending-yield-list"},mn={alt:""},vn={class:"claim-btn-box"};function gn(e,t,l,n,_,I){const m=Lt,k=Zt,S=we,b=Ze("image");return c(),w("div",null,[a("div",en,[tn,nn,a("div",an,[on,F(m,{"start-time":n.nextStartTime,onCountDown:t[0]||(t[0]=p=>e.$emit("getNextEpoch"))},null,8,["start-time"])])]),a("div",ln,[sn,a("div",un,[F(k,{"title-text":"est.APR","tips-text":"good",value:"≈"+n.cetusApr+"%",logo:"/sui-image/icon_estapr@2x.png"},null,8,["value"]),F(k,{"title-text":"My share",value:n.myShare!=="--"?"≈"+n.myShare+"%":"--",logo:"/sui-image/icon_myshare@2x.png"},null,8,["value"]),n.xcetusRewardList&&n.xcetusRewardList.length==0?(c(),O(k,{key:0,"title-text":"Pending yield",value:n.wallet&&n.wallet.address?"0":"--",logo:"/sui-image/icon_pendingyield@2x.png"},null,8,["value"])):j("",!0)]),n.wallet&&n.wallet.address&&n.xcetusRewardList&&n.xcetusRewardList.length>0?(c(),w("div",rn,[dn,a("div",cn,[(c(!0),w(Ee,null,Be(n.xcetusRewardList,(p,P)=>(c(),w("div",{key:P,class:"pending-yield-item"},[a("div",null,[Te(a("img",mn,null,512),[[b,n.getCoinIcon(p)]]),a("span",null,T(p.symbol),1)]),a("div",null,T(n.addCommom(p.amount,p.decimals)),1)]))),128)),a("div",vn,[n.wallet&&n.wallet.address&&n.xcetusRewardList&&n.xcetusRewardList.length>0?(c(),O(S,{key:0,class:"claim-btn",loading:n.claimLoading,disabled:!n.canClaim||n.xcetusRewardList&&n.xcetusRewardList.length==0,onClick:n.claimPendingYield},{default:G(()=>[L(" Claim ")]),_:1},8,["loading","disabled","onClick"])):j("",!0)])])])):j("",!0)])])}const hn=ae(Jt,[["render",gn],["__scopeId","data-v-7aa6ce40"]]),pn={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const l=f("--"),n=f("--"),_=f("--"),I=f("--");let m=null;ze(()=>{window.clearInterval(m)});const k=()=>{const b=new Date().getTime()/1e3;Number(b)<=Number(e.startTime)&&S(e.startTime),Number(b)>Number(e.startTime)&&Number(b)<=Number(e.endTime)&&S(e.endTime)},S=b=>{m=setInterval(()=>{let p=new Date().getTime()/1e3,s=b-parseInt(String(p));if(s==0){t.emit("countDown"),clearInterval(m),window.clearInterval(m),m=null;return}else s<0&&(clearInterval(m),window.clearInterval(m),t.emit("countDown"),m=null);s--;let d=parseInt(String(s/60/60/24));d=d<10?"0"+d:d;let i=parseInt(String(s/60/60%24));i=i<10?"0"+i:i;let h=parseInt(String(s/60%60));h=h<10?"0"+h:h;let $=parseInt(String(s%60));$=$<10?"0"+$:$,l.value=d,n.value=i,_.value=h,I.value=$},1e3)};return M(()=>e.startTime,(b,p)=>{b!==p&&k()},{immediate:!0}),{day:l,hour:n,min:_,sec:I}}};const ke=e=>(ie("data-v-131b3f4e"),e=e(),ue(),e),fn={class:"count-down"},_n=ke(()=>a("span",null,"D : ",-1)),wn=ke(()=>a("span",null,"H : ",-1)),bn=ke(()=>a("span",null,"M : ",-1)),Sn=ke(()=>a("span",null,"S",-1));function Cn(e,t,l,n,_,I){return c(),w("div",fn,[L(T(n.day)+" ",1),_n,L(" "+T(n.hour)+" ",1),wn,L(" "+T(n.min)+" ",1),bn,L(" "+T(n.sec)+" ",1),Sn])}const yn=ae(pn,[["render",Cn],["__scopeId","data-v-131b3f4e"]]),Tn={components:{WcountDown:yn},props:{vItem:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1}},setup(e,t){const{t:l}=_e(),n=Pe(),_=be(),I=u(()=>_),m=d=>{t.emit("claim",d),n.setClaimLoading(d.id)},k=u(()=>n),S=u(()=>new Date().getTime()/1e3>e.vItem.locked_until_time),b=d=>{t.emit("cancelRedeemPayload",d),n.setClaimLoading(d.id)};u(()=>I.value.chainName),Me("Sui");const p=he();return u(()=>p),u(()=>k.value.venft_id),u(()=>I.value.chainName?Ue(I.value.chainName):{}),{t:l,prettyAmount:ne,claimBoolean:S,toClaim:m,toCancel:b,claimWhale:d=>{t.emit("claimWhale",d)},cancelRedeemPayload:d=>{t.emit("cancelRedeemPayload",d)}}}};const Ve=e=>(ie("data-v-67fc6972"),e=e(),ue(),e),kn={class:"vesting-box"},In={class:"left"},$n=Ve(()=>a("img",{src:Qe,alt:""},null,-1)),xn=Ve(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-swap2"})],-1)),An=Ve(()=>a("img",{src:et,alt:""},null,-1)),Nn={class:"available-all"},En={class:"available"},Bn={key:0},Rn={key:1};function Pn(e,t,l,n,_,I){const m=Ke("WcountDown"),k=we;return c(),w("div",kn,[a("div",In,[a("p",null,[a("span",null,[$n,L(" "+T(("addCommom"in e?e.addCommom:Re(x))(n.prettyAmount(l.vItem.xcetus_amount,9),9))+" xCETUS ",1)]),xn,a("span",null,[An,L(" "+T(("addCommom"in e?e.addCommom:Re(x))(n.prettyAmount(l.vItem.cetus_amount,9),9))+" CETUS ",1)])]),a("div",Nn,[a("div",En,[a("span",null,T(n.claimBoolean?"Available":"Available in"),1),n.claimBoolean?j("",!0):(c(),O(m,{key:0,"start-time":l.vItem.locked_start_time,"end-time":l.vItem.locked_until_time,onCountDown:t[0]||(t[0]=S=>e.$emit("countDown"))},null,8,["start-time","end-time"]))]),a("div",{class:ge(n.claimBoolean?"highlight right-h5":"right-h5")},[n.claimBoolean?(c(),w("span",Bn,"Claim")):(c(),w("span",Rn,"Cancel"))],2)])]),n.claimBoolean?(c(),O(k,{key:0,disabled:!n.claimBoolean||l.loading,loading:l.loading,onClick:t[1]||(t[1]=S=>n.claimWhale(l.vItem))},{default:G(()=>[L(T(n.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"])):(c(),O(k,{key:1,type:"text",class:"right",disabled:l.loading,loading:l.loading,onClick:t[2]||(t[2]=S=>n.cancelRedeemPayload(l.vItem))},{default:G(()=>[L(T(n.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"]))])}const Dn=ae(Tn,[["render",Pn],["__scopeId","data-v-67fc6972"]]),Ln=De({props:{inputValue:{type:String,default:""},coinSymbol:{type:String,default:""},whaleDirection:{type:String,default:""},address:{type:String,default:""},balance:{type:String,default:""}},setup(e,t){const{t:l,locale:n}=_e(),_=be(),I=u(()=>_),m=St(Ct,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),k=he(),S=u(()=>k),b=Le(),p=u(()=>b),P=Nt(g=>{t.emit("onInput",g),t.emit("onInputLoading",!1)},500),s=f(""),d=g=>{const oe=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,9})?).*$"),H=g.target.value.replace(/,/g,"").replace(oe,"$1");t.emit("onInputLoading",!0),P(H)},i=g=>{var z;const E=g.target.selectionStart,oe=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(h==null?void 0:h.value)&&(h==null?void 0:h.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",g.target.value);let H=g.target.value.replace(/,/g,"").replace(oe,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",H);let Y=H.includes(".")&&String(x(H))==="0"?H:String(x(H));const K=qe(g.target.value),X=qe(Y),de=X.length-K.length;let U=E+de;if((z=g==null?void 0:g.inputType)!=null&&z.includes("delete")&&de>0&&E===X[X.length-1]){const pe=g.target.value.slice(0,E-1)+g.target.value.slice(E);Y=String(x(pe.replace(/,/g,""))),U=U-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",Y),s.value=Y,setTimeout(()=>{g.target.setSelectionRange(U<0?0:U,U<0?0:U)},0)};M(()=>e.inputValue,g=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",g);const E=g.includes(".")?g:String(x(g));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",E),E!==s.value&&(s.value=E)},{immediate:!0}),M(()=>e.inputValue,g=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",g);const E=g.includes(".")&&String(x(g))==="0"?g:String(x(g));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",E),E!==s.value&&(s.value=E)},{immediate:!0});const h=u(()=>{var g;return p.value.tokensObj&&e.address&&p.value.tokensObj[e.address]&&((g=p.value.tokensObj[e.address])==null?void 0:g.decimals)});let $=f({});return M(()=>p.value.RATES,g=>{g&&($.value=g)},{immediate:!0}),{pool:p,t:l,addCommom:x,store:I,wallet:S,indicator:m,inputChange:d,importIcon:se,coinDecimals:h,handleInput:i,formattedValue:s}}});const Un=e=>(ie("data-v-7bb30d80"),e=e(),ue(),e),Mn={class:"card"},Vn={class:"top"},Wn={class:"left"},On={class:"loading-token"},Fn={key:0,src:et,alt:""},Hn={key:1,src:Qe,alt:""},Xn={class:"bottom"},jn=Un(()=>a("div",null,null,-1)),Yn={class:"top"},qn={class:"right"},Gn={key:0,class:"balance"},zn={key:2,class:"balance"};function Zn(e,t,l,n,_,I){var b,p;const m=yt,k=Je,S=we;return c(),w("div",Mn,[a("div",Vn,[F(m,{value:e.formattedValue,placeholder:"0.0",onChange:e.inputChange,onInput:e.handleInput,onFocus:t[0]||(t[0]=P=>e.$emit("onFocus"))},null,8,["value","onChange","onInput"]),a("div",Wn,[a("div",On,[e.coinSymbol=="CETUS"?(c(),w("img",Fn)):(c(),w("img",Hn)),a("div",null,[a("p",null,T(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1)])])])]),a("div",Xn,[jn,a("div",Yn,[a("div",qn,[a("span",null,T(e.$t("common.balance")),1),e.balance!=="--"?(c(),w("span",Gn,T(e.balance>1?("addCommom"in e?e.addCommom:Re(x))(e.balance):e.balance),1)):e.balance=="--"&&e.wallet&&e.wallet.address?(c(),O(k,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(c(),w("span",zn,"--")),e.whaleDirection=="From"?(c(),O(S,{key:3,class:"max-btn",disabled:!e.balance||e.balance==0||!((b=e.wallet)!=null&&b.address),onClick:t[1]||(t[1]=P=>e.$emit("halfBalanne"))},{default:G(()=>[L(T("Half"))]),_:1},8,["disabled"])):j("",!0),e.whaleDirection=="From"?(c(),O(S,{key:4,class:"max-btn",disabled:!e.balance||e.balance==0||!((p=e.wallet)!=null&&p.address),onClick:t[2]||(t[2]=P=>e.$emit("maxBalanne"))},{default:G(()=>[L(T(e.$t("button.max")),1)]),_:1},8,["disabled"])):j("",!0)])])])])}const Jn=ae(Ln,[["render",Zn],["__scopeId","data-v-7bb30d80"]]);const Kn=De({components:{Modal:Tt},setup(e,t){const l=be(),n=f(!1);u(()=>l);const _=he(),I=u(()=>_);return{store:l,isSelect:n,clickConvert:()=>{n.value&&localStorage.setItem(`notRemind${I.value.address}`,!0),t.emit("clickConvert")}}}}),We=e=>(ie("data-v-ee04003a"),e=e(),ue(),e),Qn=We(()=>a("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),ea=[Qn],ta={class:"token-waring-conetnt"},na=We(()=>a("div",{class:"tips-text"},[L(" Please note that after conversion, if you want to convert xCETUS back to CETUS, a vesting period will be applied & different vesting durations correspond to different redeem ratios. "),a("a",{href:"https://cetus-1.gitbook.io/cetus-docs/tokenomics/xcetus",target:"_blank"}," Learn more")],-1)),aa={class:"read-text"},oa={key:0,src:Et},la=We(()=>a("span",null," Do not remind again. ",-1));function sa(e,t,l,n,_,I){const m=we,k=Ke("Modal");return c(),O(k,{width:"440px",visible:!0,footer:null,title:null,"mask-closable":!0,onCancel:t[3]||(t[3]=S=>e.$emit("close"))},{closeIcon:G(()=>[(c(),w("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:t[0]||(t[0]=S=>e.$emit("close"))},ea))]),default:G(()=>[a("div",ta,[na,a("div",aa,[a("div",{class:"radio",onClick:t[1]||(t[1]=S=>e.isSelect=!e.isSelect)},[e.isSelect?(c(),w("img",oa)):j("",!0)]),la]),F(m,{class:"big-btn continue",onClick:t[2]||(t[2]=()=>e.clickConvert())},{default:G(()=>[L("Convert")]),_:1})])]),_:1})}const ia=ae(Kn,[["render",sa],["__scopeId","data-v-ee04003a"]]),ua=De({setup(){const e=he(),t=u(()=>e),l=Pe(),n=u(()=>l),_=u(()=>n.value.venft_id);u(()=>n.value.venftInfo);const I=Le(),m=u(()=>I),k=be(),S=u(()=>k),b=Bt(),p=f("");let P=f(!1);const s=f(""),d=f(""),i=f(!1),h=f("convert"),{t:$}=_e(),g=f([{time:"15 D",num:15},{time:"30 D",num:30},{time:"90 D",num:90},{time:"180 D",num:180}]),E=f([{name:"est.APR",value:"100.12%"},{name:"My share",value:"<0.1%"},{name:"Pending yield (USDC)",value:0}]),oe=f([{name:"My total locked",value:"$100.12"},{name:"Pending rewards (xCETUS)",value:"100.12"},{name:"",value:""}]),H=f([{name:"My positions",value:"12"},{name:"My qualified positions",value:"0"},{name:"Pending rewards (xCETUS)",value:"100.12"}]);let Y=window.setInterval(()=>{l.getXcetusApr(),t.value.address&&l.getMyShare(t.value.address)},6e4),K=f(!0);kt(()=>{document.addEventListener("visibilitychange",()=>{if(console.log("🚀🚀🚀 ~ file: xcetus.vue:309 ~ document.addEventListener ~ !document.hidden:",!document.hidden),document.hidden)Y=null,window.clearInterval(Y);else{const o=te(new Date().getTime()).div(1e3).floor();console.log("🚀 ~ file: xcetus.vue:315 ~ document.addEventListener ~ currentTime:",o.toString()),console.log("🚀 ~ file: xcetus.vue:315 ~ document.addEventListener ~ xcetus.value.nextStartTime:",n.value.nextStartTime),!n.value.nextStartTime||o.gte(n.value.nextStartTime)?(console.log("🚀 ~ file: xcetus.vue:315 ~ document.addEventListener ~ visibilitychange have request getDividendManager:"),l.getDividendManager(),K.value=!0):K.value=!1}}),l.getXcetusApr(),l.getDividendManager()}),It(()=>{console.log("🚀 ~ file: xcetus.vue:331 ~ onUnmounted ~ onUnmounted:"),window.clearInterval(Y),document.removeEventListener("visibilitychange",()=>{console.log("removeEventListener visibilitychange")})}),M(()=>S.value.theme,(o,r)=>{o!=="sui"&&b.selectSuiTheme(),r&&o!==r&&I.setChainPoolConfigList([])},{immediate:!0});const X=u(()=>{const o=Ye.Sui.xcetusTokenAddress;return console.log("🚀🚀🚀 ~ file: xcetus.vue:363 ~ whaleBalance ~ cetusAddress:",o),console.log("🚀🚀🚀 ~ file: xcetus.vue:369 ~ whaleBalance ~  wallet.value.assets:",t.value.assets),t.value.assets&&o&&t.value.assets[o]?ne(t.value.assets[o].balance,9):0}),de=u(()=>n.value.xWhaleBalance),U=u(()=>n.value.availableXwhale),z=u(()=>n.value.redeemingXwhale),pe=u(()=>{if(h.value=="convert"){if(Number(s.value)>Number(X.value))return!0}else if(Number(s.value)>Number(U.value))return!0;return!s.value||!d.value||Number(s.value)==0||Number(d.value)==0}),A=f("180"),ce=u(()=>(console.log(h.value=="convert","===>1212211"),h.value=="convert"&&Number(s.value)>Number(X.value)?$("button.insufficientBalance",{name:"CETUS"}):h.value!=="convert"&&Number(s.value)>Number(U.value)?$("button.insufficientBalance",{name:"xCETUS"}):Number(A.value)<15?"Minimum vesting duration is 15 days":h.value=="convert"&&_?"Convert":h.value!=="convert"&&_?"Redeem":"Convert"));console.log(ce.value,"btnText.value===>");const le=o=>{s.value="",d.value="",h.value=o},Ie=()=>{P.value=!0,setTimeout(()=>{P.value=!1},300)},me=o=>{A.value=o},B=f(!1),Q=Me("Sui"),$e=u(()=>n.value.ownerLocks);M(()=>t.value.address,o=>{o?(l.getOwnerVeNFT(o),l.getMyShare(o)):l.loginOut()},{immediate:!0});const N=u(()=>S.value.chainName?Ue(S.value.chainName):{}),ee=u(()=>S.value.chainName),{setIsShowSuccess:C,setIsShowRejected:D,setIsShowWaiting:y,setTransactionDesc:Z,setTransactionTxid:q}=k,ve=async()=>{B.value=!0,y(!0),q(""),Z($("tips.converting",{from:`${x(s.value,9)} CETUS`,and:"to",to:`${x(s.value,9)} xCETUS`}));try{let o;const r=Ce(s.value,9);console.log(_.value,"===>venft_id.value");const v=await Q.depositCetus(r,_.value);console.log(v,"payload==>");const V=await N.value.signAndExecuteTransactionBlock(t.value.currentWallet,v.txb,v.payloadParams);if(o=N.value.handleTx(V),o&&o.hash){q(o.hash),y(!1),C(!0);const R={title:"Converted",desc:`Converted ${x(s.value,9)} xCETUS successfully`,hash:o.hash,tit:"Converted",icon:"icon-icon-Swap",tokenInfo:{tokena:"CETUS",numa:`- ${s.value}`,logoa:se("/sui-image/WHALE-icon.png"),tokenb:"xCETUS",numb:`+ ${s.value}`,logob:se("/sui-image/xWHALE-icon.png")}};ee.value!=="Aptos"&&(R.res=o.res),N.value.showTransitionPending(R);const W=await N.value.watchTransaction(R);console.log("0221###swap###transitionStatus####",W),W&&setTimeout(()=>{N.value.getAccount(t.value.address),l.getOwnerVeNFT(t.value.address),l.getMyShare(t.value.address)},3e3),B.value=!1}else y(!1),D(!0),B.value=!1;s.value=""}catch(o){y(!1),D(!0),B.value=!1,s.value="",console.log(o,"error===>")}},J=f(!0),xe=f("0"),tt=async()=>{const o=Ce(s.value,9),r=await Q.redeemNum(o,Number(A.value));d.value=ne(r.amountOut,9),console.log("===>amount2222"),xe.value=r.percent},nt=async()=>{const o=Ce(d.value,9),r=await Q.reverseRedeemNum(o,Number(A.value));console.log(r,"===>amount111"),s.value=ne(r.amountOut,9),xe.value=r.percent};M(()=>[s.value,A.value,J.value],([o,r,v])=>{console.log(o,"===>>>>>>>fromCoinAmount",typeof o),o&&r&&v&&Number(r)>=15&&tt(),!o&&v&&(d.value="")},{immediate:!0}),M(()=>[d.value,A.value,J.value],([o,r,v])=>{o&&r&&!v&&Number(r)>=15&&(nt(),console.log(o,"===>toCoinAmount")),!o&&!v&&(s.value="")},{immediate:!0}),M(()=>[A.value,J.value],([o,r])=>{Number(o)>180?A.value="180":Number(o)<15?r?d.value="":s.value="":o||(r?s.value="":d.value="")},{immediate:!0});const at=()=>{J.value=!0,s.value=ye(te(h.value!=="convert"?U.value:X.value).div(te(2)).toString(),9)},ot=()=>{J.value=!0,s.value=h.value!=="convert"?ye(U.value,9):ye(X.value,9)},Oe=async()=>{B.value=!0,y(!0),q(""),Z($("tips.redeeming",{from:`${x(s.value,9)} xCETUS`,to:`${x(d.value,9)} CETUS`}));try{let o;const r=Ce(s.value,9);console.log(r.toString(),"538====>");const v=await Q.getRedeemLockPayload(r,_.value,Number(A.value));console.log(v,"payload==>");const V=await N.value.signAndExecuteTransactionBlock(t.value.currentWallet,v.txb,v.payloadParams);if(o=N.value.handleTx(V),o&&o.hash){q(o.hash),y(!1),C(!0);const R={title:"Redemption",desc:"Redemption transaction submitted successfully.",hash:o.hash,tit:"Vesting",icon:"icon-icon-Removed",tokenInfo:{tokena:"xCETUS",numa:`- ${s.value}`,logoa:se("/sui-image/xWHALE-icon.png")}};ee.value!=="Aptos"&&(R.res=o.res),N.value.showTransitionPending(R);const W=await N.value.watchTransaction(R);console.log("0221###swap###transitionStatus####",W),W&&setTimeout(()=>{N.value.getAccount(t.value.address),l.getOwnerVeNFT(t.value.address),l.getMyShare(t.value.address)},3e3),B.value=!1}else y(!1),D(!0),B.value=!1;s.value="",d.value=""}catch(o){y(!1),D(!0),B.value=!1,s.value="",d.value="",console.log(o,"error===>")}},lt=u(()=>n.value.dividendManagerInfo||{});M(()=>{var o,r;return[_.value,t.value.address,(r=(o=lt.value)==null?void 0:o.venft_dividends)==null?void 0:r.id,K.value]},([o,r,v,V])=>{console.log("🚀 ~ file: xcetus.vue:746 ~ watch ~  start getVeNFTDividendInfo haveToGetVeNFTDividendInfo:  ",V),o&&r&&v&&V&&(console.log("🚀 ~ file: xcetus.vue:746 ~ watch ~  start getVeNFTDividendInfo: ",v),l.getVeNFTDividendInfo())});const st=async o=>{B.value=!0,y(!0),q(""),Z("");try{let r;console.log(o.id,"==>vItem.id");const v=await Q.getCancelRedeemPayload(o.id,_.value);console.log(v,"payload==>");const V=await N.value.signAndExecuteTransactionBlock(t.value.currentWallet,v==null?void 0:v.txb,v==null?void 0:v.payloadParams);if(r=N.value.handleTx(V),r&&r.hash){q(r.hash),y(!1),C(!0);const R={title:"Cancelled Redemption",desc:"Cancelled redemption successfully.",hash:r.hash,tit:"Cancelled Redemption",icon:"icon-a-icon-Shutdown",tokenInfo:{tokena:"xCETUS",numa:`+ ${ne(o.xcetus_amount,9)}`,logoa:se("/sui-image/xWHALE-icon.png")}};ee.value!=="Aptos"&&(R.res=r.res),N.value.showTransitionPending(R);const W=await N.value.watchTransaction(R);console.log("0221###swap###transitionStatus####",W),W&&setTimeout(()=>{l.getOwnerVeNFT(t.value.address),B.value=!1},3e3)}else y(!1),D(!0),B.value=!1;s.value="",d.value=""}catch(r){y(!1),D(!0),B.value=!1,s.value="",d.value="",l.setClaimLoading(""),console.log(r,"error===>")}},it=f({}),ut=()=>{l.getOwnerLockCetuss(t.value.address)},rt=async o=>{console.log(o,"vItem===>"),B.value=!0,y(!0),q(""),Z(`${$("tips.claimingPendingYield")} ${x(ne(o.cetus_amount,9),9)} CETUS`);try{let r;const v=await Q.getRedeemPayload(o.id,_.value);console.log(v,"payload==>");const V=await N.value.signAndExecuteTransactionBlock(t.value.currentWallet,v==null?void 0:v.txb,v==null?void 0:v.payloadParams);if(r=N.value.handleTx(V),r&&r.hash){q(r.hash),y(!1),C(!0);const R={title:"Claimed",desc:`Claimed ${x(ne(o.cetus_amount,9),9)} CETUS successfully.`,hash:r.hash,tit:"CETUS Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:"CETUS",numa:`+ ${ne(o.cetus_amount,9)}`,logoa:se("/sui-image/WHALE-icon.png")}};ee.value!=="Aptos"&&(R.res=r.res),N.value.showTransitionPending(R);const W=await N.value.watchTransaction(R);console.log("0221###swap###transitionStatus####",W),W&&setTimeout(()=>{N.value.getAccount(t.value.address),l.getOwnerVeNFT(t.value.address),l.getMyShare(t.value.address),l.getAvailableXCetus(),B.value=!1},3e3)}else y(!1),D(!0),B.value=!1;s.value="",d.value=""}catch(r){y(!1),D(!0),B.value=!1,s.value="",d.value="",l.setClaimLoading(""),console.log(r,"error===>")}},Ae=f(!1),dt=()=>{!localStorage.getItem(`notRemind${t.value.address}`)&&ce.value=="Convert"?Ae.value=!0:ce.value=="Redeem"?Oe():ve()},ct=()=>{Ae.value=!1,ve()};u(()=>n.value.pendingCoinInfo);const mt=u(()=>n.value.pendingAmount),vt=()=>{Number(A.value)<15&&(A.value="15")},gt=()=>{A.value&&(A.value=A.value.replace(/[^\d]/g,""),A.value.charAt(0)==="0"&&(A.value=A.value.slice(1)))},ht=()=>{console.log("🚀🚀🚀 ~ file: xcetus.vue:948 ~ getNextEpoch ~ getNextEpoch:"),l.getDividendManager()},Fe=u(()=>m.value.tokensObj||{}),Ne=u(()=>m.value.RATES||{}),He=u(()=>n.value.phaseDividendInfoBonus),Xe=u(()=>n.value.treasury),pt=()=>{let o=te(0);He.value.forEach(R=>{const W=R.name=="0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":xt(R.name,!1),ft=Fe.value[W].decimals,_t=Ne.value[W].price,wt=te(R.value).mul(te(_t)).div(te(Math.pow(10,ft)));o=o.add(wt)});const r=Ne.value[Ye.Sui.xcetusTokenAddress].price,v=o.div(7).mul(365).div(te(Xe.value).mul(r).div(Math.pow(10,9))).toNumber()*100,V=Number(v)>0&&Number(v)<.01?"<0.01":v;l.setCetusApr(V)};return M(()=>[Fe.value,Ne.value,He.value,Xe.value],([o,r,v,V])=>{!fe(o)&&!fe(r)&&v&&v.length>0&&V&&pt()},{immediate:!0}),{clickModalConvert:ct,openConfirmModal:Ae,validateInput:gt,countDown:ut,value:p,change:P,clickExchange:Ie,fromCoinAmount:s,toCoinAmount:d,showCoinSelect:i,headSwitchValue:h,headSwitchChange:le,vestingDateList:g,vestingParameter:A,vestingTab:me,holderList:E,lockupList:oe,leaderboardList:H,whaleBalance:X,depositCetus:ve,btnText:ce,loading:B,redeemRatio:xe,halfBalanne:at,maxBalanne:ot,xWhaleBalance:de,availableXwhale:U,redeemingXwhale:z,withdrawWhale:Oe,ownerLocks:$e,cancelRedeemPayload:st,holderInfo:it,btnDisabled:pe,fixedFromCoin:J,walletStore:e,claimWhale:rt,wallet:t,depositOrWithdraw:dt,pendingAmount:mt,inputBlur:vt,getNextEpoch:ht}}});const re=e=>(ie("data-v-8a6e132b"),e=e(),ue(),e),ra={class:"dashboard-all"},da={class:"dashboard-content"},ca={class:"content-left"},ma={key:0,class:"vesting"},va=re(()=>a("p",null,"Vesting",-1)),ga={class:"content-right"},ha={key:0,class:"card-container"},pa={class:"card-item"},fa={class:"card-item"},_a={class:"exchange"},wa=re(()=>a("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),ba=[wa],Sa={key:1,class:"card-redeem"},Ca={class:"card-item"},ya={class:"vesting-duration"},Ta={class:"vesting-title"},ka=re(()=>a("p",null,"Vesting duration",-1)),Ia={class:"vesting-left h5-vesting-left"},$a={class:"value-days"},xa=re(()=>a("span",null,"days",-1)),Aa={class:"vesting-content"},Na={class:"vesting-left pc-vesting-left"},Ea={class:"value-days"},Ba=re(()=>a("span",null,"days",-1)),Ra={class:"vesting-right"},Pa=["onClick"],Da={class:"card-item"},La={class:"redeem-ratio"},Ua=re(()=>a("span",null,"Redeem ratio",-1)),Ma={class:"exchange"},Va=re(()=>a("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),Wa=[Va];function Oa(e,t,l,n,_,I){const m=bt,k=hn,S=Dn,b=At,p=Jn,P=$t,s=we,d=ia;return c(),w("div",ra,[F(m,{title:"Dashboard","total-xwhale":e.xWhaleBalance,"available-xwhale":e.availableXwhale,"redeeming-xwhale":e.redeemingXwhale},null,8,["total-xwhale","available-xwhale","redeeming-xwhale"]),a("div",da,[a("div",ca,[F(k,{"holder-info":e.holderInfo,"pending-amount":e.pendingAmount,"claim-loading":e.claimLoading,onGetNextEpoch:e.getNextEpoch},null,8,["holder-info","pending-amount","claim-loading","onGetNextEpoch"]),e.ownerLocks&&e.ownerLocks.length>0?(c(),w("div",ma,[va,(c(!0),w(Ee,null,Be(e.ownerLocks,i=>(c(),O(S,{key:i,"v-item":i,loading:e.loading,onCountDown:e.countDown,onClaimWhale:e.claimWhale,onCancelRedeemPayload:e.cancelRedeemPayload},null,8,["v-item","loading","onCountDown","onClaimWhale","onCancelRedeemPayload"]))),128))])):j("",!0)]),a("div",ga,[F(b,{"head-switch-value":e.headSwitchValue,"left-text":"Get xCETUS","right-text":"Redeem CETUS",onHeadSwitchChange:t[0]||(t[0]=i=>{e.headSwitchChange(i)})},null,8,["head-switch-value"]),e.headSwitchValue=="convert"?(c(),w("div",ha,[a("div",pa,[F(p,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[1]||(t[1]=i=>e.fromCoinAmount=i),"input-value":e.fromCoinAmount,"coin-symbol":"CETUS","whale-direction":"From",balance:e.whaleBalance,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[2]||(t[2]=i=>{e.fromCoinAmount=i})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),a("div",fa,[F(p,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[3]||(t[3]=i=>e.fromCoinAmount=i),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"To",balance:e.availableXwhale,onOnInput:t[4]||(t[4]=i=>{e.fromCoinAmount=i})},null,8,["modelValue","input-value","balance"])]),a("img",{class:ge(e.change?"gang animationex":"gang"),src:Ge,alt:""},null,2),a("div",_a,[(c(),w("svg",{class:ge(e.change?"icon animationex":"icon"),"aria-hidden":"true"},ba,2))])])):(c(),w("div",Sa,[a("div",Ca,[F(p,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[5]||(t[5]=i=>e.fromCoinAmount=i),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"From",balance:e.availableXwhale,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[6]||(t[6]=i=>{e.fixedFromCoin=!0,e.fromCoinAmount=i})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),a("div",ya,[a("div",Ta,[ka,a("div",Ia,[a("div",$a,[Te(a("input",{"onUpdate:modelValue":t[7]||(t[7]=i=>e.vestingParameter=i),onInput:t[8]||(t[8]=(...i)=>e.validateInput&&e.validateInput(...i)),onBlur:t[9]||(t[9]=(...i)=>e.inputBlur&&e.inputBlur(...i))},null,544),[[je,e.vestingParameter]])]),xa])]),a("div",Aa,[a("div",Na,[a("div",Ea,[Te(a("input",{"onUpdate:modelValue":t[10]||(t[10]=i=>e.vestingParameter=i),onInput:t[11]||(t[11]=(...i)=>e.validateInput&&e.validateInput(...i)),onBlur:t[12]||(t[12]=(...i)=>e.inputBlur&&e.inputBlur(...i))},null,544),[[je,e.vestingParameter]])]),Ba]),a("div",Ra,[(c(!0),w(Ee,null,Be(e.vestingDateList,i=>(c(),w("div",{key:i.time,class:ge(["box-table",{"box-table-active":i.num===Number(e.vestingParameter)}]),onClick:h=>e.vestingTab(i.num)},T(i.time),11,Pa))),128))])]),F(P,{value:e.vestingParameter,"onUpdate:value":t[13]||(t[13]=i=>e.vestingParameter=i),max:180,min:15},null,8,["value"])]),a("div",Da,[F(p,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[14]||(t[14]=i=>e.toCoinAmount=i),"input-value":e.toCoinAmount,"coin-symbol":"CETUS","whale-direction":"To",balance:e.whaleBalance,onOnInput:t[15]||(t[15]=i=>{e.fixedFromCoin=!1,e.toCoinAmount=i})},null,8,["modelValue","input-value","balance"])]),a("div",La,[Ua,a("p",null,T(e.redeemRatio)+"%",1)]),a("img",{class:ge(e.change?"gang animationex":"gang"),src:Ge,alt:""},null,2),a("div",Ma,[(c(),w("svg",{class:ge(e.change?"icon animationex":"icon"),"aria-hidden":"true"},Wa,2))])])),e.wallet&&e.wallet.address?(c(),O(s,{key:2,class:"big-btn",loading:e.loading,disabled:e.btnDisabled,onClick:e.depositOrWithdraw},{default:G(()=>[a("span",null,T(e.btnText),1)]),_:1},8,["loading","disabled","onClick"])):(c(),O(s,{key:3,class:"big-btn",onClick:t[16]||(t[16]=i=>e.walletStore.setIsShowWalletModal(!0))},{default:G(()=>[a("span",null,T(e.$t("button.connectWallet")),1)]),_:1}))])]),e.openConfirmModal?(c(),O(d,{key:0,onClickConvert:e.clickModalConvert,onClose:t[17]||(t[17]=()=>e.openConfirmModal=!e.openConfirmModal)},null,8,["onClickConvert"])):j("",!0)])}const so=ae(ua,[["render",Oa],["__scopeId","data-v-8a6e132b"]]);export{so as default};
