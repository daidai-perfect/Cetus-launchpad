import{u as Ee,_ as gt}from"./xwhale-header.96292f99.js";import{r as f,T as je,D as W,e as te,o as d,f as _,h as n,v as T,j as L,l as pe,m as i,q as Ye,x as H,t as Te,c as V,S as qe,p as ue,k as re,i as O,F as xe,s as Ne,w as G,B as fe,M as ze,u as Re,z as ge,a as Pe,a2 as ht,a3 as pt,I as ft,Y as _t,y as wt,C as bt,a9 as Oe,a8 as Ct}from"./entry.da4c0921.js";import"./index.c393a8c2.js";import{u as he}from"./index.5a49e4b8.js";import{i as se}from"./import-icon.de3e6c66.js";import{b as x,s as Se,c as ie,p as le,x as Fe,l as ye}from"./index.8b32493c.js";import{a as _e,u as De,b as Le}from"./pool.4bfe4d80.js";import{u as Ue}from"./useWhale.c31bb533.js";import{_ as Ge}from"./xWHALE-icon.2df34cd4.js";import{_ as Je}from"./WHALE-icon.28f954ba.js";import{_ as yt}from"./head-switch.19bd681d.js";/* empty css              */import{u as St}from"./useDebounceFunction.85dacf37.js";import{_ as Tt}from"./icon-selected_3x.873560ed.js";/* empty css              *//* empty css              */import"./decimal.a2826370.js";import{u as kt}from"./useTheme.02ac2f69.js";import{D as He}from"./decimal.765d8738.js";import{_ as Xe}from"./img-leverage_2x.1c577303.js";const It={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=f("--"),a=f("--"),I=f("--"),S=f("--");let m=null;je(()=>{window.clearInterval(m)});const b=()=>{const w=new Date().getTime()/1e3;Number(w)<=Number(e.startTime)&&k(e.startTime),Number(w)>Number(e.startTime)&&Number(w)<=Number(e.endTime)&&k(e.endTime)},k=w=>{clearInterval(m),window.clearInterval(m),m=setInterval(()=>{let g=new Date().getTime()/1e3,r=w-parseInt(String(g));if(r==0){t.emit("countDown"),clearInterval(m),window.clearInterval(m),m=null;return}else r<0&&(clearInterval(m),window.clearInterval(m),t.emit("countDown"),m=null);r--;let h=parseInt(String(r/60/60/24));h=(h<10,h);let o=parseInt(String(r/60/60%24));o=(o<10,o);let C=parseInt(String(r/60%60));C=(C<10,C);let P=parseInt(String(r%60));P=P<10?+P:P,s.value=h,a.value=o,I.value=C,S.value=P},1e3)};return W(()=>e.startTime,(w,g)=>{w!==g&&b()},{immediate:!0}),{day:s,hour:a,min:I,sec:S}}};const $t={class:"count-time"};function At(e,t,s,a,I,S){return d(),_("div",$t,[n("p",null,T(a.day)+"d",1),L(" : "),n("p",null,T(a.hour)+"h",1),L(" : "),n("p",null,T(a.min)+"m",1),L(" : "),n("p",null,T(a.sec)+"s",1)])}const Bt=te(It,[["render",At],["__scopeId","data-v-ce10c596"]]),xt={props:{titleText:{type:String,default:""},tipsText:{type:String,default:""},imgIcon:{type:String,default:""},value:{type:String,default:"--"},tokenSymbol:{type:String,default:""},logo:{type:String,default:""}},setup(e){const{t}=pe(),s=he(),a=i(()=>s);return{t,wallet:a}}};const Nt=e=>(ue("data-v-16905b90"),e=e(),re(),e),Rt={class:"table-rewards"},Et={key:0,class:"logo"},Pt=["src"],Dt={class:"text-top-all"},Lt={key:0,class:"icon-hover-box"},Ut=Nt(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-information"})],-1)),Wt={class:"tips-text-box"},Mt={key:0},Vt={key:0,alt:""},Ot={key:2};function Ft(e,t,s,a,I,S){const m=qe,b=Ye("image");return d(),_("div",Rt,[s.logo?(d(),_("div",Et,[n("img",{src:s.logo,alt:""},null,8,Pt)])):H("",!0),n("div",null,[n("div",Dt,[n("p",null,T(s.titleText),1),s.tipsText?(d(),_("div",Lt,[Ut,n("div",Wt,T(s.titleText=="est.APR"?"Estimated APR of the current epoch for all xCETUS holders.":"The number of qualified positions in this epoch."),1)])):H("",!0)]),n("span",null,[s.value!=="--"?(d(),_("p",Mt,[s.imgIcon?Te((d(),_("img",Vt,null,512)),[[b,s.imgIcon]]):H("",!0),L(T(s.value)+" ",1),n("span",null,T(s.tokenSymbol),1)])):s.value=="--"&&a.wallet&&a.wallet.address?(d(),V(m,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(d(),_("p",Ot,"--"))])])])}const Ht=te(xt,[["render",Ft],["__scopeId","data-v-16905b90"]]),Xt={setup(e){const{t}=pe(),s=Ee(),a=i(()=>s),I=i(()=>a.value.pendingAmount),S=i(()=>a.value.newPendingAmount),m=i(()=>a.value.rewardCoinAmount),b=i(()=>a.value.nextStartTime),k=i(()=>1683094391),w=i(()=>a.value.xcetusShare&&x(a.value.xcetusShare,3)),g=he(),u=i(()=>g),r=i(()=>a.value.cetusApr&&a.value.cetusApr>.01?x(Se(a.value.cetusApr,2),2):x(a.value.cetusApr,2)),h=i(()=>a.value.pendingCoinInfo),o=i(()=>a.value.newPendingCoinInfo),C=i(()=>a.value.rewardCoin),P=f("");W(()=>h.value,y=>{y&&ie(y),P.value="Pending yield"},{immediate:!0});const v=f("");W(()=>o.value,y=>{y&&!ie(y)?v.value=`Pending yield (${y.symbol})`:v.value="Pending yield"},{immediate:!0});const D=f();W(()=>C.value,y=>{y&&!ie(y)?D.value=`Pending yield (${y.symbol})`:D.value="Pending yield"},{immediate:!0});const ne=()=>{setTimeout(()=>{s.getDividendManager()},3e3)},F=i(()=>a.value.dividendManagerInfo),Q=i(()=>{const y=parseInt(String(new Date().getTime()/1e3)),M=F.value.interval_day,N=(y-Number(F.value.start_time))/(M*60);return parseInt(String(N))>0}),q=_e(),Z=i(()=>q),{setIsShowSuccess:z,setIsShowRejected:X,setIsShowWaiting:J,setTransactionDesc:A,setTransactionTxid:ae}=q,Ie=Ue("Sui"),oe=f(!1),$e=i(()=>a.value.venft_id),B=i(()=>Z.value.chainName?Le(Z.value.chainName):{}),ee=async()=>{oe.value=!0,J(!0),ae("");let y=`${t("tips.claimingPendingYield")} `,M="";E.value.forEach((N,R)=>{M=M+`${x(N.amount)} ${N.symbol} ${R==E.value.length-1?"":"and "}`}),A(y+M);try{let N;const R=await Ie.getRedeemDividendV2Payload($e.value),ce=await B.value.signAndExecuteTransactionBlock(u.value.currentWallet,R.txb,R.payloadParams);if(N=B.value.handleTx(ce),N&&N.hash){ae(N.hash),J(!1),z(!0);const j={title:"Claim",desc:`Claimed ${M} successfully.`,hash:N.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:h.value.symbol,numa:`+ ${I.value}`,logoa:h.value.logo_url}};B.value.showTransitionPending(j);const me=await B.value.watchTransaction(j);console.log("0221###swap###transitionStatus####",me),me&&setTimeout(()=>{s.getVeNFTDividendInfo(),oe.value=!1},3e3),s.getOwnerLockCetuss(u.value.address)}else J(!1),X(!0),oe.value=!1}catch(N){J(!1),X(!0),oe.value=!1,console.log(N,"error===>")}},be=De(),$=i(()=>be),Ce=y=>{var M;return(y==null?void 0:y.logoURI)||(y==null?void 0:y.logo_url)||((M=$.value.tokensObj[y==null?void 0:y.address])==null?void 0:M.logo_url)},E=i(()=>a.value.xcetusRewardList);return{t,pendingAmount:I,nextStartTime:b,wallet:u,myShare:w,importIcon:se,nextEndTime:k,pendingYieldText:P,cetusApr:r,pendingCoinInfo:h,getNextEpoch:ne,canClaim:Q,claimPendingYield:ee,claimLoading:oe,addCommom:x,newPendingCoinInfo:o,newPendingAmount:S,newPendingYieldText:v,rewardCoin:C,rewardCoinAmount:m,rewardCoinYieldText:D,getCoinIcon:Ce,xcetusRewardList:E}}},jt=""+new URL("staking-rewards-banner-h5.1c7401db.png",import.meta.url).href,Yt=""+globalThis.__publicAssetsURL("sui-image/icon_pendingyield@2x.png");const we=e=>(ue("data-v-122dcd43"),e=e(),re(),e),qt={class:"top-banner"},zt=we(()=>n("img",{src:jt,alt:""},null,-1)),Gt=we(()=>n("p",null,"Convert CETUS to xCETUS to start earning",-1)),Jt={class:"bot-count"},Kt=we(()=>n("span",null,"Reward distribution in ",-1)),Qt={class:"holder-rewards"},Zt=we(()=>n("div",{class:"title"},[n("div",{class:"left"},[n("span",null,"xCETUS Staking Rewards")])],-1)),en={class:"rewards-value"},tn={key:0,class:"pending-yield"},nn=we(()=>n("div",{class:"pending-yield-title"},[n("img",{src:Yt,alt:""}),n("span",null,"Pending Yield")],-1)),an={class:"pending-yield-list"},on={alt:""},ln={class:"claim-btn-box"};function sn(e,t,s,a,I,S){const m=Bt,b=Ht,k=fe,w=Ye("image");return d(),_("div",null,[n("div",qt,[zt,Gt,n("div",Jt,[Kt,O(m,{"start-time":a.nextStartTime,onCountDown:t[0]||(t[0]=g=>e.$emit("getNextEpoch"))},null,8,["start-time"])])]),n("div",Qt,[Zt,n("div",en,[O(b,{"title-text":"est.APR","tips-text":"good",value:"≈"+a.cetusApr+"%",logo:"/sui-image/icon_estapr@2x.png"},null,8,["value"]),O(b,{"title-text":"My share",value:a.myShare!=="--"?"≈"+a.myShare+"%":"--",logo:"/sui-image/icon_myshare@2x.png"},null,8,["value"]),a.xcetusRewardList&&a.xcetusRewardList.length==0?(d(),V(b,{key:0,"title-text":"Pending yield",value:a.wallet&&a.wallet.address?"0":"--",logo:"/sui-image/icon_pendingyield@2x.png"},null,8,["value"])):H("",!0)]),a.wallet&&a.wallet.address&&a.xcetusRewardList&&a.xcetusRewardList.length>0?(d(),_("div",tn,[nn,n("div",an,[(d(!0),_(xe,null,Ne(a.xcetusRewardList,(g,u)=>(d(),_("div",{key:u,class:"pending-yield-item"},[n("div",null,[Te(n("img",on,null,512),[[w,a.getCoinIcon(g)]]),n("span",null,T(g.symbol),1)]),n("div",null,T(a.addCommom(g.amount,6)),1)]))),128)),n("div",ln,[a.wallet&&a.wallet.address&&a.xcetusRewardList&&a.xcetusRewardList.length>0?(d(),V(k,{key:0,class:"claim-btn",loading:a.claimLoading,disabled:!a.canClaim||a.xcetusRewardList&&a.xcetusRewardList.length==0,onClick:a.claimPendingYield},{default:G(()=>[L(" Claim ")]),_:1},8,["loading","disabled","onClick"])):H("",!0)])])])):H("",!0)])])}const un=te(Xt,[["render",sn],["__scopeId","data-v-122dcd43"]]),rn={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=f("--"),a=f("--"),I=f("--"),S=f("--");let m=null;je(()=>{window.clearInterval(m)});const b=()=>{const w=new Date().getTime()/1e3;Number(w)<=Number(e.startTime)&&k(e.startTime),Number(w)>Number(e.startTime)&&Number(w)<=Number(e.endTime)&&k(e.endTime)},k=w=>{m=setInterval(()=>{let g=new Date().getTime()/1e3,r=w-parseInt(String(g));if(r==0){t.emit("countDown"),clearInterval(m),window.clearInterval(m),m=null;return}else r<0&&(clearInterval(m),window.clearInterval(m),t.emit("countDown"),m=null);r--;let h=parseInt(String(r/60/60/24));h=h<10?"0"+h:h;let o=parseInt(String(r/60/60%24));o=o<10?"0"+o:o;let C=parseInt(String(r/60%60));C=C<10?"0"+C:C;let P=parseInt(String(r%60));P=P<10?"0"+P:P,s.value=h,a.value=o,I.value=C,S.value=P},1e3)};return W(()=>e.startTime,(w,g)=>{w!==g&&b()},{immediate:!0}),{day:s,hour:a,min:I,sec:S}}};const ke=e=>(ue("data-v-131b3f4e"),e=e(),re(),e),dn={class:"count-down"},cn=ke(()=>n("span",null,"D : ",-1)),mn=ke(()=>n("span",null,"H : ",-1)),vn=ke(()=>n("span",null,"M : ",-1)),gn=ke(()=>n("span",null,"S",-1));function hn(e,t,s,a,I,S){return d(),_("div",dn,[L(T(a.day)+" ",1),cn,L(" "+T(a.hour)+" ",1),mn,L(" "+T(a.min)+" ",1),vn,L(" "+T(a.sec)+" ",1),gn])}const pn=te(rn,[["render",hn],["__scopeId","data-v-131b3f4e"]]),fn={components:{WcountDown:pn},props:{vItem:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1}},setup(e,t){const{t:s}=pe(),a=Ee(),I=_e(),S=i(()=>I),m=h=>{t.emit("claim",h),a.setClaimLoading(h.id)},b=i(()=>a),k=i(()=>new Date().getTime()/1e3>e.vItem.locked_until_time),w=h=>{t.emit("cancelRedeemPayload",h),a.setClaimLoading(h.id)};i(()=>S.value.chainName),Ue("Sui");const g=he();return i(()=>g),i(()=>b.value.venft_id),i(()=>S.value.chainName?Le(S.value.chainName):{}),{t:s,prettyAmount:le,claimBoolean:k,toClaim:m,toCancel:w,claimWhale:h=>{t.emit("claimWhale",h)},cancelRedeemPayload:h=>{t.emit("cancelRedeemPayload",h)}}}};const We=e=>(ue("data-v-6f4aa7a5"),e=e(),re(),e),_n={class:"vesting-box"},wn={class:"left"},bn=We(()=>n("img",{src:Ge,alt:""},null,-1)),Cn=We(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-swap2"})],-1)),yn=We(()=>n("img",{src:Je,alt:""},null,-1)),Sn={class:"available-all"},Tn={class:"available"},kn={key:0},In={key:1};function $n(e,t,s,a,I,S){const m=ze("WcountDown"),b=fe;return d(),_("div",_n,[n("div",wn,[n("p",null,[n("span",null,[bn,L(" "+T(("addCommom"in e?e.addCommom:Re(x))(a.prettyAmount(s.vItem.xcetus_amount,9),9))+" xCETUS ",1)]),Cn,n("span",null,[yn,L(" "+T(("addCommom"in e?e.addCommom:Re(x))(a.prettyAmount(s.vItem.cetus_amount,9),9))+" CETUS ",1)])]),n("div",Sn,[n("div",Tn,[n("span",null,T(a.claimBoolean?"Available":"Available in"),1),a.claimBoolean?H("",!0):(d(),V(m,{key:0,"start-time":s.vItem.locked_start_time,"end-time":s.vItem.locked_until_time,onCountDown:t[0]||(t[0]=k=>e.$emit("countDown"))},null,8,["start-time","end-time"]))]),n("div",{class:ge(a.claimBoolean?"highlight right-h5":"right-h5")},[a.claimBoolean?(d(),_("span",kn,"Claim")):(d(),_("span",In,"Cancel"))],2)])]),a.claimBoolean?(d(),V(b,{key:0,disabled:!a.claimBoolean||s.loading,loading:s.loading,onClick:t[1]||(t[1]=k=>a.claimWhale(s.vItem))},{default:G(()=>[L(T(a.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"])):(d(),V(b,{key:1,type:"text",class:"right",disabled:s.loading,loading:s.loading,onClick:t[2]||(t[2]=k=>a.cancelRedeemPayload(s.vItem))},{default:G(()=>[L(T(a.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"]))])}const An=te(fn,[["render",$n],["__scopeId","data-v-6f4aa7a5"]]),Bn=Pe({props:{inputValue:{type:String,default:""},coinSymbol:{type:String,default:""},whaleDirection:{type:String,default:""},address:{type:String,default:""},balance:{type:String,default:""}},setup(e,t){const{t:s,locale:a}=pe(),I=_e(),S=i(()=>I),m=ht(pt,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),b=he(),k=i(()=>b),w=De(),g=i(()=>w),u=St(v=>{t.emit("onInput",v),t.emit("onInputLoading",!1)},500),r=f(""),h=v=>{const ne=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,9})?).*$"),F=v.target.value.replace(/,/g,"").replace(ne,"$1");t.emit("onInputLoading",!0),u(F)},o=v=>{var J;const D=v.target.selectionStart,ne=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(C==null?void 0:C.value)&&(C==null?void 0:C.value)}})?).*$`);console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ event.target.value:",v.target.value);let F=v.target.value.replace(/,/g,"").replace(ne,"$1");console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ value:",F);let Q=F.includes(".")&&String(x(F))==="0"?F:String(x(F));const q=Fe(v.target.value),Z=Fe(Q),z=Z.length-q.length;let X=D+z;if((J=v==null?void 0:v.inputType)!=null&&J.includes("delete")&&z>0&&D===Z[Z.length-1]){const A=v.target.value.slice(0,D-1)+v.target.value.slice(D);Q=String(x(A.replace(/,/g,""))),X=X-2}console.log("🚀 ~ file: assets-card.vue:287 ~ handleInput ~ fValue:",Q),r.value=Q,setTimeout(()=>{v.target.setSelectionRange(X<0?0:X,X<0?0:X)},0)};W(()=>e.inputValue,v=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",v);const D=v.includes(".")?v:String(x(v));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",D),D!==r.value&&(r.value=D)},{immediate:!0}),W(()=>e.inputValue,v=>{console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ newValue:",v);const D=v.includes(".")&&String(x(v))==="0"?v:String(x(v));console.log("🚀 ~ file: assets-card.vue:287 ~ setup ~ fValue:",D),D!==r.value&&(r.value=D)},{immediate:!0});const C=i(()=>{var v;return g.value.tokensObj&&e.address&&g.value.tokensObj[e.address]&&((v=g.value.tokensObj[e.address])==null?void 0:v.decimals)});let P=f({});return W(()=>g.value.RATES,v=>{v&&(P.value=v)},{immediate:!0}),{pool:g,t:s,addCommom:x,store:S,wallet:k,indicator:m,inputChange:h,importIcon:se,coinDecimals:C,handleInput:o,formattedValue:r}}});const xn=e=>(ue("data-v-7bb30d80"),e=e(),re(),e),Nn={class:"card"},Rn={class:"top"},En={class:"left"},Pn={class:"loading-token"},Dn={key:0,src:Je,alt:""},Ln={key:1,src:Ge,alt:""},Un={class:"bottom"},Wn=xn(()=>n("div",null,null,-1)),Mn={class:"top"},Vn={class:"right"},On={key:0,class:"balance"},Fn={key:2,class:"balance"};function Hn(e,t,s,a,I,S){var w,g;const m=ft,b=qe,k=fe;return d(),_("div",Nn,[n("div",Rn,[O(m,{value:e.formattedValue,placeholder:"0.0",onChange:e.inputChange,onInput:e.handleInput,onFocus:t[0]||(t[0]=u=>e.$emit("onFocus"))},null,8,["value","onChange","onInput"]),n("div",En,[n("div",Pn,[e.coinSymbol=="CETUS"?(d(),_("img",Dn)):(d(),_("img",Ln)),n("div",null,[n("p",null,T(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1)])])])]),n("div",Un,[Wn,n("div",Mn,[n("div",Vn,[n("span",null,T(e.$t("common.balance")),1),e.balance!=="--"?(d(),_("span",On,T(e.balance>1?("addCommom"in e?e.addCommom:Re(x))(e.balance):e.balance),1)):e.balance=="--"&&e.wallet&&e.wallet.address?(d(),V(b,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(d(),_("span",Fn,"--")),e.whaleDirection=="From"?(d(),V(k,{key:3,class:"max-btn",disabled:!e.balance||e.balance==0||!((w=e.wallet)!=null&&w.address),onClick:t[1]||(t[1]=u=>e.$emit("halfBalanne"))},{default:G(()=>[L(T("Half"))]),_:1},8,["disabled"])):H("",!0),e.whaleDirection=="From"?(d(),V(k,{key:4,class:"max-btn",disabled:!e.balance||e.balance==0||!((g=e.wallet)!=null&&g.address),onClick:t[2]||(t[2]=u=>e.$emit("maxBalanne"))},{default:G(()=>[L(T(e.$t("button.max")),1)]),_:1},8,["disabled"])):H("",!0)])])])])}const Xn=te(Bn,[["render",Hn],["__scopeId","data-v-7bb30d80"]]);const jn=Pe({components:{Modal:_t},setup(e,t){const s=_e(),a=f(!1);i(()=>s);const I=he(),S=i(()=>I);return{store:s,isSelect:a,clickConvert:()=>{a.value&&localStorage.setItem(`notRemind${S.value.address}`,!0),t.emit("clickConvert")}}}}),Me=e=>(ue("data-v-b06def84"),e=e(),re(),e),Yn=Me(()=>n("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),qn=[Yn],zn={class:"token-waring-conetnt"},Gn=Me(()=>n("div",{class:"tips-text"},[L(" Please note that after conversion, if you want to convert xCETUS back to CETUS, a vesting period will be applied & different vesting durations correspond to different redeem ratios. "),n("a",{href:"https://cetus-1.gitbook.io/cetus-docs/tokenomics/xcetus",target:"_blank"}," Learn more")],-1)),Jn={class:"read-text"},Kn={key:0,src:Tt},Qn=Me(()=>n("span",null," Do not remind again. ",-1));function Zn(e,t,s,a,I,S){const m=fe,b=ze("Modal");return d(),V(b,{width:"440px",visible:!0,footer:null,title:null,"mask-closable":!0,onCancel:t[3]||(t[3]=k=>e.$emit("close"))},{closeIcon:G(()=>[(d(),_("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:t[0]||(t[0]=k=>e.$emit("close"))},qn))]),default:G(()=>[n("div",zn,[Gn,n("div",Jn,[n("div",{class:"radio",onClick:t[1]||(t[1]=k=>e.isSelect=!e.isSelect)},[e.isSelect?(d(),_("img",Kn)):H("",!0)]),Qn]),O(m,{class:"big-btn continue",onClick:t[2]||(t[2]=()=>e.clickConvert())},{default:G(()=>[L("Convert")]),_:1})])]),_:1})}const ea=te(jn,[["render",Zn],["__scopeId","data-v-b06def84"]]),ta=Pe({setup(){const e=Ee(),t=i(()=>e),s=i(()=>t.value.venft_id),a=i(()=>t.value.venftInfo),I=De(),S=i(()=>I),m=_e(),b=i(()=>m),k=kt();i(()=>S.value.tokensObj&&S.value.tokensObj["0x2a4f647bc73f070182436658bff75060246019857c769ad9268c22c4472bca7f::cetus::CETUS"]);const w=f("");let g=f(!1);const u=f(""),r=f(""),h=f(!1),o=f("convert"),{t:C}=pe(),P=f([{time:"15 D",num:15},{time:"30 D",num:30},{time:"90 D",num:90},{time:"180 D",num:180}]),v=f([{name:"est.APR",value:"100.12%"},{name:"My share",value:"<0.1%"},{name:"Pending yield (USDC)",value:0}]),D=f([{name:"My total locked",value:"$100.12"},{name:"Pending rewards (xCETUS)",value:"100.12"},{name:"",value:""}]),ne=f([{name:"My positions",value:"12"},{name:"My qualified positions",value:"0"},{name:"Pending rewards (xCETUS)",value:"100.12"}]),F=window.setInterval(()=>{e.getXcetusApr(),$.value.address&&(e.getMyShare($.value.address),e.getVeNFTDividendInfo())},6e4),Q=window.setInterval(async()=>{await e.getAccountWhaleBalance($.value.address)},1e4);wt(()=>{document.addEventListener("visibilitychange",()=>{document.hidden||e.getDividendManager()}),e.getDividendManager()}),bt(()=>{window.clearInterval(F),window.clearInterval(Q),document.removeEventListener("visibilitychange",()=>{console.log("removeEventListener visibilitychange")})}),W(()=>b.value.theme,(l,c)=>{l!=="sui"&&k.selectSuiTheme(),c&&l!==c&&I.setChainPoolConfigList([])},{immediate:!0});const q=i(()=>(console.log(t.value.whaleBalance,"==>xcetus.value.whaleBalance"),t.value.whaleBalance)),Z=i(()=>t.value.xWhaleBalance),z=i(()=>t.value.availableXwhale),X=i(()=>t.value.redeemingXwhale),J=i(()=>{if(o.value=="convert"){if(Number(u.value)>Number(q.value))return!0}else if(Number(u.value)>Number(z.value))return!0;return!u.value||!r.value||Number(u.value)==0||Number(r.value)==0}),A=f("180"),ae=i(()=>(console.log(o.value=="convert","===>1212211"),o.value=="convert"&&Number(u.value)>Number(q.value)?C("button.insufficientBalance",{name:"CETUS"}):o.value!=="convert"&&Number(u.value)>Number(z.value)?C("button.insufficientBalance",{name:"xCETUS"}):Number(A.value)<15?"Minimum vesting duration is 15 days":o.value=="convert"&&s?"Convert":o.value!=="convert"&&s?"Redeem":"Convert"));console.log(ae.value,"btnText.value===>");const Ie=l=>{u.value="",r.value="",o.value=l},oe=()=>{g.value=!0,setTimeout(()=>{g.value=!1},300)},$e=l=>{A.value=l},B=f(!1),ee=Ue("Sui"),be=he(),$=i(()=>be),Ce=i(()=>t.value.ownerLocks);W(()=>$.value.address,l=>{l?(e.getOwnerVeNFT(l),e.getAccountWhaleBalance(l),e.getMyShare(l),e.getAccountWhaleBalance(l)):e.loginOut()},{immediate:!0});const E=i(()=>b.value.chainName?Le(b.value.chainName):{}),y=i(()=>b.value.chainName),{setIsShowSuccess:M,setIsShowRejected:N,setIsShowWaiting:R,setTransactionDesc:ce,setTransactionTxid:j}=m,me=async()=>{B.value=!0,R(!0),j(""),ce(C("tips.converting",{from:`${x(u.value,9)} CETUS`,and:"to",to:`${x(u.value,9)} xCETUS`}));try{let l;const c=ye(u.value,9);console.log(s.value,"===>venft_id.value");const p=await ee.depositCetus(c,s.value);console.log(p,"payload==>");const K=await E.value.signAndExecuteTransactionBlock($.value.currentWallet,p.txb,p.payloadParams);if(l=E.value.handleTx(K),l&&l.hash){j(l.hash),R(!1),M(!0);const U={title:"Converted",desc:`Converted ${x(u.value,9)} xCETUS successfully`,hash:l.hash,tit:"Converted",icon:"icon-icon-Swap",tokenInfo:{tokena:"CETUS",numa:`- ${u.value}`,logoa:se("/sui-image/WHALE-icon.png"),tokenb:"xCETUS",numb:`+ ${u.value}`,logob:se("/sui-image/xWHALE-icon.png")}};y.value!=="Aptos"&&(U.res=l.res),E.value.showTransitionPending(U);const Y=await E.value.watchTransaction(U);console.log("0221###swap###transitionStatus####",Y),Y&&setTimeout(()=>{e.getAccountWhaleBalance($.value.address),e.getOwnerVeNFT($.value.address),e.getMyShare($.value.address)},3e3),B.value=!1}else R(!1),N(!0),B.value=!1;u.value=""}catch(l){R(!1),N(!0),B.value=!1,u.value="",console.log(l,"error===>")}},ve=f(!0),Ae=f("0"),Ke=async()=>{const l=ye(u.value,9),c=await ee.redeemNum(l,Number(A.value));r.value=le(c.amountOut,9),console.log("===>amount2222"),Ae.value=c.percent},Qe=async()=>{const l=ye(r.value,9),c=await ee.reverseRedeemNum(l,Number(A.value));console.log(c,"===>amount111"),u.value=le(c.amountOut,9),Ae.value=c.percent};W(()=>[u.value,A.value,ve.value],([l,c,p])=>{console.log(l,"===>>>>>>>fromCoinAmount",typeof l),l&&c&&p&&Number(c)>=15&&Ke(),!l&&p&&(r.value="")},{immediate:!0}),W(()=>[r.value,A.value,ve.value],([l,c,p])=>{l&&c&&!p&&Number(c)>=15&&(Qe(),console.log(l,"===>toCoinAmount")),!l&&!p&&(u.value="")},{immediate:!0}),W(()=>[A.value,ve.value],([l,c])=>{Number(l)>180?A.value="180":Number(l)<15?c?r.value="":u.value="":l||(c?u.value="":r.value="")},{immediate:!0});const Ze=()=>{ve.value=!0,u.value=Se(new He(o.value!=="convert"?z.value:q.value).div(new He(2)).toString(),9)},et=()=>{ve.value=!0,u.value=o.value!=="convert"?Se(z.value,9):Se(q.value,9)},Ve=async()=>{B.value=!0,R(!0),j(""),ce(C("tips.redeeming",{from:`${x(u.value,9)} xCETUS`,to:`${x(r.value,9)} CETUS`}));try{let l;const c=ye(u.value,9);console.log(c.toString(),"538====>");const p=await ee.getRedeemLockPayload(c,s.value,Number(A.value));console.log(p,"payload==>");const K=await E.value.signAndExecuteTransactionBlock($.value.currentWallet,p.txb,p.payloadParams);if(l=E.value.handleTx(K),l&&l.hash){j(l.hash),R(!1),M(!0);const U={title:"Redemption",desc:"Redemption transaction submitted successfully.",hash:l.hash,tit:"Vesting",icon:"icon-icon-Removed",tokenInfo:{tokena:"xCETUS",numa:`- ${u.value}`,logoa:se("/sui-image/xWHALE-icon.png")}};y.value!=="Aptos"&&(U.res=l.res),E.value.showTransitionPending(U);const Y=await E.value.watchTransaction(U);console.log("0221###swap###transitionStatus####",Y),Y&&setTimeout(()=>{e.getAccountWhaleBalance($.value.address),e.getOwnerVeNFT($.value.address),e.getMyShare($.value.address)},3e3),B.value=!1}else R(!1),N(!0),B.value=!1;u.value="",r.value=""}catch(l){R(!1),N(!0),B.value=!1,u.value="",r.value="",console.log(l,"error===>")}};W(()=>[s.value,Ce.value,a.value,$.value.address],([l,c,p,K])=>{K&&(l&&e.getVeNFTDividendInfo(),l&&!ie(p)&&e.getAvailableXCetus())},{immediate:!0,deep:!0});const tt=async l=>{B.value=!0,R(!0),j(""),ce("");try{let c;console.log(l.id,"==>vItem.id");const p=await ee.getCancelRedeemPayload(l.id,s.value);console.log(p,"payload==>");const K=await E.value.signAndExecuteTransactionBlock($.value.currentWallet,p==null?void 0:p.txb,p==null?void 0:p.payloadParams);if(c=E.value.handleTx(K),c&&c.hash){j(c.hash),R(!1),M(!0);const U={title:"Cancelled Redemption",desc:"Cancelled redemption successfully.",hash:c.hash,tit:"Cancelled Redemption",icon:"icon-a-icon-Shutdown",tokenInfo:{tokena:"xCETUS",numa:`+ ${le(l.xcetus_amount,9)}`,logoa:se("/sui-image/xWHALE-icon.png")}};y.value!=="Aptos"&&(U.res=c.res),E.value.showTransitionPending(U);const Y=await E.value.watchTransaction(U);console.log("0221###swap###transitionStatus####",Y),Y&&setTimeout(()=>{e.getOwnerVeNFT($.value.address),B.value=!1},3e3)}else R(!1),N(!0),B.value=!1;u.value="",r.value=""}catch(c){R(!1),N(!0),B.value=!1,u.value="",r.value="",e.setClaimLoading(""),console.log(c,"error===>")}},nt=f({}),at=()=>{e.getOwnerLockCetuss($.value.address)},ot=async l=>{console.log(l,"vItem===>"),B.value=!0,R(!0),j(""),ce(`${C("tips.claimingPendingYield")} ${x(le(l.cetus_amount,9),9)} CETUS`);try{let c;const p=await ee.getRedeemPayload(l.id,s.value);console.log(p,"payload==>");const K=await E.value.signAndExecuteTransactionBlock($.value.currentWallet,p==null?void 0:p.txb,p==null?void 0:p.payloadParams);if(c=E.value.handleTx(K),c&&c.hash){j(c.hash),R(!1),M(!0);const U={title:"Claimed",desc:`Claimed ${x(le(l.cetus_amount,9),9)} CETUS successfully.`,hash:c.hash,tit:"CETUS Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:"CETUS",numa:`+ ${le(l.cetus_amount,9)}`,logoa:se("/sui-image/WHALE-icon.png")}};y.value!=="Aptos"&&(U.res=c.res),E.value.showTransitionPending(U);const Y=await E.value.watchTransaction(U);console.log("0221###swap###transitionStatus####",Y),Y&&setTimeout(()=>{e.getAccountWhaleBalance($.value.address),e.getOwnerVeNFT($.value.address),e.getMyShare($.value.address),e.getAvailableXCetus(),B.value=!1},3e3)}else R(!1),N(!0),B.value=!1;u.value="",r.value=""}catch(c){R(!1),N(!0),B.value=!1,u.value="",r.value="",e.setClaimLoading(""),console.log(c,"error===>")}},Be=f(!1),lt=()=>{!localStorage.getItem(`notRemind${$.value.address}`)&&ae.value=="Convert"?Be.value=!0:ae.value=="Redeem"?Ve():me()},st=()=>{Be.value=!1,me()};i(()=>t.value.pendingCoinInfo);const it=i(()=>t.value.pendingAmount),ut=()=>{Number(A.value)<15&&(A.value="15")},rt=()=>{A.value&&(A.value=A.value.replace(/[^\d]/g,""),A.value.charAt(0)==="0"&&(A.value=A.value.slice(1)))},dt=()=>{e.getDividendManager()},ct=i(()=>S.value.tokensObj||{}),mt=i(()=>S.value.RATES||{}),vt=i(()=>t.value.dividendManagerInfo||{});return W(()=>[ct.value,mt.value,vt.value],([l,c,p])=>{!ie(l)&&!ie(c)&&!ie(p)&&e.getXcetusApr()},{immediate:!0}),{clickModalConvert:st,openConfirmModal:Be,validateInput:rt,countDown:at,value:w,change:g,clickExchange:oe,fromCoinAmount:u,toCoinAmount:r,showCoinSelect:h,headSwitchValue:o,headSwitchChange:Ie,vestingDateList:P,vestingParameter:A,vestingTab:$e,holderList:v,lockupList:D,leaderboardList:ne,whaleBalance:q,depositCetus:me,btnText:ae,loading:B,redeemRatio:Ae,halfBalanne:Ze,maxBalanne:et,xWhaleBalance:Z,availableXwhale:z,redeemingXwhale:X,withdrawWhale:Ve,ownerLocks:Ce,cancelRedeemPayload:tt,holderInfo:nt,btnDisabled:J,fixedFromCoin:ve,walletStore:be,claimWhale:ot,wallet:$,depositOrWithdraw:lt,pendingAmount:it,inputBlur:ut,getNextEpoch:dt}}});const de=e=>(ue("data-v-d330a7d0"),e=e(),re(),e),na={class:"dashboard-all"},aa={class:"dashboard-content"},oa={class:"content-left"},la={key:0,class:"vesting"},sa=de(()=>n("p",null,"Vesting",-1)),ia={class:"content-right"},ua={key:0,class:"card-container"},ra={class:"card-item"},da={class:"card-item"},ca={class:"exchange"},ma=de(()=>n("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),va=[ma],ga={key:1,class:"card-redeem"},ha={class:"card-item"},pa={class:"vesting-duration"},fa={class:"vesting-title"},_a=de(()=>n("p",null,"Vesting duration",-1)),wa={class:"vesting-left h5-vesting-left"},ba={class:"value-days"},Ca=de(()=>n("span",null,"days",-1)),ya={class:"vesting-content"},Sa={class:"vesting-left pc-vesting-left"},Ta={class:"value-days"},ka=de(()=>n("span",null,"days",-1)),Ia={class:"vesting-right"},$a=["onClick"],Aa={class:"card-item"},Ba={class:"redeem-ratio"},xa=de(()=>n("span",null,"Redeem ratio",-1)),Na={class:"exchange"},Ra=de(()=>n("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),Ea=[Ra];function Pa(e,t,s,a,I,S){const m=gt,b=un,k=An,w=yt,g=Xn,u=Ct,r=fe,h=ea;return d(),_("div",na,[O(m,{title:"Dashboard","total-xwhale":e.xWhaleBalance,"available-xwhale":e.availableXwhale,"redeeming-xwhale":e.redeemingXwhale},null,8,["total-xwhale","available-xwhale","redeeming-xwhale"]),n("div",aa,[n("div",oa,[O(b,{"holder-info":e.holderInfo,"pending-amount":e.pendingAmount,"claim-loading":e.claimLoading,onGetNextEpoch:e.getNextEpoch},null,8,["holder-info","pending-amount","claim-loading","onGetNextEpoch"]),e.ownerLocks&&e.ownerLocks.length>0?(d(),_("div",la,[sa,(d(!0),_(xe,null,Ne(e.ownerLocks,o=>(d(),V(k,{key:o,"v-item":o,loading:e.loading,onCountDown:e.countDown,onClaimWhale:e.claimWhale,onCancelRedeemPayload:e.cancelRedeemPayload},null,8,["v-item","loading","onCountDown","onClaimWhale","onCancelRedeemPayload"]))),128))])):H("",!0)]),n("div",ia,[O(w,{"head-switch-value":e.headSwitchValue,"left-text":"Get xCETUS","right-text":"Redeem CETUS",onHeadSwitchChange:t[0]||(t[0]=o=>{e.headSwitchChange(o)})},null,8,["head-switch-value"]),e.headSwitchValue=="convert"?(d(),_("div",ua,[n("div",ra,[O(g,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[1]||(t[1]=o=>e.fromCoinAmount=o),"input-value":e.fromCoinAmount,"coin-symbol":"CETUS","whale-direction":"From",balance:e.whaleBalance,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[2]||(t[2]=o=>{e.fromCoinAmount=o})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),n("div",da,[O(g,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[3]||(t[3]=o=>e.fromCoinAmount=o),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"To",balance:e.availableXwhale,onOnInput:t[4]||(t[4]=o=>{e.fromCoinAmount=o})},null,8,["modelValue","input-value","balance"])]),n("img",{class:ge(e.change?"gang animationex":"gang"),src:Xe,alt:""},null,2),n("div",ca,[(d(),_("svg",{class:ge(e.change?"icon animationex":"icon"),"aria-hidden":"true"},va,2))])])):(d(),_("div",ga,[n("div",ha,[O(g,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[5]||(t[5]=o=>e.fromCoinAmount=o),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"From",balance:e.availableXwhale,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[6]||(t[6]=o=>{e.fixedFromCoin=!0,e.fromCoinAmount=o})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),n("div",pa,[n("div",fa,[_a,n("div",wa,[n("div",ba,[Te(n("input",{"onUpdate:modelValue":t[7]||(t[7]=o=>e.vestingParameter=o),onInput:t[8]||(t[8]=(...o)=>e.validateInput&&e.validateInput(...o)),onBlur:t[9]||(t[9]=(...o)=>e.inputBlur&&e.inputBlur(...o))},null,544),[[Oe,e.vestingParameter]])]),Ca])]),n("div",ya,[n("div",Sa,[n("div",Ta,[Te(n("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>e.vestingParameter=o),onInput:t[11]||(t[11]=(...o)=>e.validateInput&&e.validateInput(...o)),onBlur:t[12]||(t[12]=(...o)=>e.inputBlur&&e.inputBlur(...o))},null,544),[[Oe,e.vestingParameter]])]),ka]),n("div",Ia,[(d(!0),_(xe,null,Ne(e.vestingDateList,o=>(d(),_("div",{key:o.time,class:ge(["box-table",{"box-table-active":o.num===Number(e.vestingParameter)}]),onClick:C=>e.vestingTab(o.num)},T(o.time),11,$a))),128))])]),O(u,{value:e.vestingParameter,"onUpdate:value":t[13]||(t[13]=o=>e.vestingParameter=o),max:180,min:15},null,8,["value"])]),n("div",Aa,[O(g,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[14]||(t[14]=o=>e.toCoinAmount=o),"input-value":e.toCoinAmount,"coin-symbol":"CETUS","whale-direction":"To",balance:e.whaleBalance,onOnInput:t[15]||(t[15]=o=>{e.fixedFromCoin=!1,e.toCoinAmount=o})},null,8,["modelValue","input-value","balance"])]),n("div",Ba,[xa,n("p",null,T(e.redeemRatio)+"%",1)]),n("img",{class:ge(e.change?"gang animationex":"gang"),src:Xe,alt:""},null,2),n("div",Na,[(d(),_("svg",{class:ge(e.change?"icon animationex":"icon"),"aria-hidden":"true"},Ea,2))])])),e.wallet&&e.wallet.address?(d(),V(r,{key:2,class:"big-btn",loading:e.loading,disabled:e.btnDisabled,onClick:e.depositOrWithdraw},{default:G(()=>[n("span",null,T(e.btnText),1)]),_:1},8,["loading","disabled","onClick"])):(d(),V(r,{key:3,class:"big-btn",onClick:t[16]||(t[16]=o=>e.walletStore.setIsShowWalletModal(!0))},{default:G(()=>[n("span",null,T(e.$t("button.connectWallet")),1)]),_:1}))])]),e.openConfirmModal?(d(),V(h,{key:0,onClickConvert:e.clickModalConvert,onClose:t[17]||(t[17]=()=>e.openConfirmModal=!e.openConfirmModal)},null,8,["onClickConvert"])):H("",!0)])}const to=te(ta,[["render",Pa],["__scopeId","data-v-d330a7d0"]]);export{to as default};
