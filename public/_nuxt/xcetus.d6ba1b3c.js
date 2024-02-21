import{_ as vt}from"./xwhale-header.747a7f57.js";import{r as f,X as Xe,q as M,e as z,o as d,f as w,h as a,v as S,j as D,y as de,l as i,s as Ye,x as V,t as De,c as L,M as je,p as te,k as ne,i as W,F as Be,E as Re,w as Y,B as ce,Q as qe,u as Ee,A as Se,a as Pe,C as gt,L as ht,I as _t,a1 as pt,H as ft,K as wt,a9 as Ct,G as bt}from"./entry.99d20ac2.js";/* empty css              */import{a as le,u as me}from"./sha256.f7311d31.js";import{u as Le}from"./xcetus.b6f6b71e.js";import{i as Z}from"./import-icon.de3e6c66.js";import{a as P,s as Te,e as Ue,u as We,c as ee,p as J,z as ye}from"./pool.ec7155de.js";import{u as Me}from"./useWhale.1ab3a139.js";import{_ as Ge}from"./xWHALE-icon.2df34cd4.js";import{_ as ze}from"./WHALE-icon.28f954ba.js";import{_ as yt}from"./head-switch.0d05625b.js";/* empty css              */import{_ as St}from"./icon-selected_3x.09e9a6f0.js";/* empty css              *//* empty css              */import{D as He}from"./decimal.0bdeb344.js";import{u as Tt}from"./useTheme.d62497fd.js";import{_ as kt}from"./img-leverage_2x.1c577303.js";const $t={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=f("--"),n=f("--"),$=f("--"),y=f("--");let c=null;Xe(()=>{window.clearInterval(c)});const C=()=>{const p=new Date().getTime()/1e3;Number(p)<=Number(e.startTime)&&T(e.startTime),Number(p)>Number(e.startTime)&&Number(p)<=Number(e.endTime)&&T(e.endTime)},T=p=>{clearInterval(c),window.clearInterval(c),c=setInterval(()=>{let g=new Date().getTime()/1e3,m=p-parseInt(String(g));if(m==0){t.emit("countDown"),clearInterval(c),window.clearInterval(c),c=null;return}else m<0&&(clearInterval(c),window.clearInterval(c),t.emit("countDown"),c=null);m--;let v=parseInt(String(m/60/60/24));v=(v<10,v);let l=parseInt(String(m/60/60%24));l=(l<10,l);let k=parseInt(String(m/60%60));k=(k<10,k);let R=parseInt(String(m%60));R=R<10?+R:R,s.value=v,n.value=l,$.value=k,y.value=R},1e3)};return M(()=>e.startTime,(p,g)=>{p!==g&&C()},{immediate:!0}),{day:s,hour:n,min:$,sec:y}}};const It={class:"count-time"};function xt(e,t,s,n,$,y){return d(),w("div",It,[a("p",null,S(n.day)+"d",1),D(" : "),a("p",null,S(n.hour)+"h",1),D(" : "),a("p",null,S(n.min)+"m",1),D(" : "),a("p",null,S(n.sec)+"s",1)])}const At=z($t,[["render",xt],["__scopeId","data-v-ce10c596"]]),Nt={props:{titleText:{type:String,default:""},tipsText:{type:String,default:""},imgIcon:{type:String,default:""},value:{type:String,default:"--"},tokenSymbol:{type:String,default:""},logo:{type:String,default:""}},setup(e){const{t}=de();console.log(e.value,"props.value####");const s=le(),n=i(()=>s);return{t,wallet:n}}};const Bt=e=>(te("data-v-844310a2"),e=e(),ne(),e),Rt={class:"table-rewards"},Et={key:0,class:"logo"},Dt=["src"],Pt={class:"text-top-all"},Lt={key:0,class:"icon-hover-box"},Ut=Bt(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-information"})],-1)),Wt={class:"tips-text-box"},Mt={key:0},Ot={key:0,alt:""},Vt={key:2};function Ft(e,t,s,n,$,y){const c=je,C=Ye("image");return d(),w("div",Rt,[s.logo?(d(),w("div",Et,[a("img",{src:s.logo,alt:""},null,8,Dt)])):V("",!0),a("div",null,[a("div",Pt,[a("p",null,S(s.titleText),1),s.tipsText?(d(),w("div",Lt,[Ut,a("div",Wt,S(s.titleText=="est.APR"?"Estimated APR of the current epoch for all xCETUS holders.":"The number of qualified positions in this epoch."),1)])):V("",!0)]),a("span",null,[s.value!=="--"?(d(),w("p",Mt,[s.imgIcon?De((d(),w("img",Ot,null,512)),[[C,s.imgIcon]]):V("",!0),D(S(s.value)+" ",1),a("span",null,S(s.tokenSymbol),1)])):s.value=="--"&&n.wallet&&n.wallet.address?(d(),L(c,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(d(),w("p",Vt,"--"))])])])}const Ht=z(Nt,[["render",Ft],["__scopeId","data-v-844310a2"]]),Xt={setup(e){const{t}=de(),s=Le(),n=i(()=>s),$=i(()=>n.value.pendingAmount),y=i(()=>n.value.newPendingAmount),c=i(()=>n.value.rewardCoinAmount),C=i(()=>(console.log(n.value.nextStartTime,"===>xcetus.value.nextStartTime"),n.value.nextStartTime)),T=i(()=>1683094391),p=i(()=>n.value.xcetusShare&&P(n.value.xcetusShare,3)),g=le(),r=i(()=>g),m=i(()=>n.value.cetusApr&&n.value.cetusApr>.01?P(Te(n.value.cetusApr,2),2):P(n.value.cetusApr,2)),v=i(()=>n.value.pendingCoinInfo),l=i(()=>n.value.newPendingCoinInfo),k=i(()=>n.value.rewardCoin),R=f("");M(()=>v.value,_=>{_&&ee(_),R.value="Pending yield"},{immediate:!0});const se=f("");M(()=>l.value,_=>{_&&!ee(_)?se.value=`Pending yield (${_.symbol})`:se.value="Pending yield"},{immediate:!0});const ie=f();M(()=>k.value,_=>{_&&!ee(_)?ie.value=`Pending yield (${_.symbol})`:ie.value="Pending yield"},{immediate:!0});const $e=()=>{setTimeout(()=>{s.getDividendManager()},3e3)},he=i(()=>n.value.dividendManagerInfo),K=i(()=>{const _=parseInt(String(new Date().getTime()/1e3)),N=he.value.interval_day,h=(_-Number(he.value.start_time))/(N*60);return console.log(parseInt(String(h))>0,"====>(parseInt(String(time))) > 0"),parseInt(String(h))>0}),_e=me(),G=i(()=>_e),{setIsShowSuccess:Ie,setIsShowRejected:pe,setIsShowWaiting:I,setTransactionDesc:ae,setTransactionTxid:fe}=_e,xe=Me("Sui"),Q=f(!1),A=i(()=>n.value.venft_id),F=i(()=>G.value.chainName?Ue(G.value.chainName):{}),we=async()=>{Q.value=!0,I(!0),fe("");let _=`${t("tips.claimingPendingYield")} `,N="";j.value.forEach((h,X)=>{N=N+`${P(h.amount)} ${h.symbol} ${X==j.value.length-1?"":"and "}`}),console.log(_,"#desc"),ae(_+N);try{let h;const X=await xe.getRedeemDividendV2Payload(A.value);console.log(X,"payload==>");const O=await r.value.currentWallet.signAndExecuteTransactionBlock(X);if(h=F.value.handleTx(O),h&&h.hash){fe(h.hash),I(!1),Ie(!0);const oe={title:"Claim",desc:`Claimed ${N} successfully.`,hash:h.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:v.value.symbol,numa:`+ ${$.value}`,logoa:v.value.logo_url}};F.value.showTransitionPending(oe);const q=await F.value.watchTransaction(oe);console.log("0221###swap###transitionStatus####",q),q&&setTimeout(()=>{s.getVeNFTDividendInfo(),Q.value=!1},3e3),s.getOwnerLockCetuss(r.value.address)}else I(!1),pe(!0),Q.value=!1}catch(h){I(!1),pe(!0),Q.value=!1,console.log(h,"error===>")}},b=We(),Ce=i(()=>b),E=_=>{var N;return(_==null?void 0:_.logoURI)||(_==null?void 0:_.logo_url)||((N=Ce.value.tokensObj[_==null?void 0:_.address])==null?void 0:N.logo_url)},j=i(()=>n.value.xcetusRewardList);return{t,pendingAmount:$,nextStartTime:C,wallet:r,myShare:p,importIcon:Z,nextEndTime:T,pendingYieldText:R,cetusApr:m,pendingCoinInfo:v,getNextEpoch:$e,canClaim:K,claimPendingYield:we,claimLoading:Q,addCommom:P,newPendingCoinInfo:l,newPendingAmount:y,newPendingYieldText:se,rewardCoin:k,rewardCoinAmount:c,rewardCoinYieldText:ie,getCoinIcon:E,xcetusRewardList:j}}},Yt=""+new URL("staking-rewards-banner-h5.1c7401db.png",import.meta.url).href,jt=""+globalThis.__publicAssetsURL("sui-image/icon_pendingyield@2x.png");const ve=e=>(te("data-v-d9df3c33"),e=e(),ne(),e),qt={class:"top-banner"},Gt=ve(()=>a("img",{src:Yt,alt:""},null,-1)),zt=ve(()=>a("p",null,"Convert CETUS to xCETUS to start earning",-1)),Kt={class:"bot-count"},Qt=ve(()=>a("span",null,"Reward distribution in ",-1)),Jt={class:"holder-rewards"},Zt=ve(()=>a("div",{class:"title"},[a("div",{class:"left"},[a("span",null,"xCETUS Staking Rewards")])],-1)),en={class:"rewards-value"},tn={key:0,class:"pending-yield"},nn=ve(()=>a("div",{class:"pending-yield-title"},[a("img",{src:jt,alt:""}),a("span",null,"Pending Yield")],-1)),an={class:"pending-yield-list"},on={alt:""},ln={class:"claim-btn-box"};function sn(e,t,s,n,$,y){const c=At,C=Ht,T=ce,p=Ye("image");return d(),w("div",null,[a("div",qt,[Gt,zt,a("div",Kt,[Qt,W(c,{"start-time":n.nextStartTime,onCountDown:t[0]||(t[0]=g=>e.$emit("getNextEpoch"))},null,8,["start-time"])])]),a("div",Jt,[Zt,a("div",en,[W(C,{"title-text":"est.APR","tips-text":"good",value:"≈"+n.cetusApr+"%",logo:"/sui-image/icon_estapr@2x.png"},null,8,["title-text","value"]),W(C,{"title-text":"My share",value:n.myShare!=="--"?"≈"+n.myShare+"%":"--",logo:"/sui-image/icon_myshare@2x.png"},null,8,["value"]),n.xcetusRewardList&&n.xcetusRewardList.length==0?(d(),L(C,{key:0,"title-text":"Pending yield",value:n.wallet&&n.wallet.address?"0":"--",logo:"/sui-image/icon_pendingyield@2x.png"},null,8,["value"])):V("",!0)]),n.wallet&&n.wallet.address&&n.xcetusRewardList&&n.xcetusRewardList.length>0?(d(),w("div",tn,[nn,a("div",an,[(d(!0),w(Be,null,Re(n.xcetusRewardList,(g,r)=>(d(),w("div",{key:r,class:"pending-yield-item"},[a("div",null,[De(a("img",on,null,512),[[p,n.getCoinIcon(g)]]),a("span",null,S(g.symbol),1)]),a("div",null,S(n.addCommom(g.amount,6)),1)]))),128)),a("div",ln,[n.wallet&&n.wallet.address&&n.xcetusRewardList&&n.xcetusRewardList.length>0?(d(),L(T,{key:0,class:"claim-btn",loading:n.claimLoading,disabled:!n.canClaim||n.xcetusRewardList&&n.xcetusRewardList.length==0,onClick:n.claimPendingYield},{default:Y(()=>[D(" Claim ")]),_:1},8,["loading","disabled","onClick"])):V("",!0)])])])):V("",!0)])])}const rn=z(Xt,[["render",sn],["__scopeId","data-v-d9df3c33"]]),un={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=f("--"),n=f("--"),$=f("--"),y=f("--");let c=null;Xe(()=>{window.clearInterval(c)});const C=()=>{const p=new Date().getTime()/1e3;Number(p)<=Number(e.startTime)&&T(e.startTime),Number(p)>Number(e.startTime)&&Number(p)<=Number(e.endTime)&&T(e.endTime)},T=p=>{c=setInterval(()=>{let g=new Date().getTime()/1e3,m=p-parseInt(String(g));if(m==0){t.emit("countDown"),clearInterval(c),window.clearInterval(c),c=null;return}else m<0&&(clearInterval(c),window.clearInterval(c),t.emit("countDown"),c=null);m--;let v=parseInt(String(m/60/60/24));v=v<10?"0"+v:v;let l=parseInt(String(m/60/60%24));l=l<10?"0"+l:l;let k=parseInt(String(m/60%60));k=k<10?"0"+k:k;let R=parseInt(String(m%60));R=R<10?"0"+R:R,s.value=v,n.value=l,$.value=k,y.value=R},1e3)};return M(()=>e.startTime,(p,g)=>{p!==g&&C()},{immediate:!0}),{day:s,hour:n,min:$,sec:y}}};const ke=e=>(te("data-v-131b3f4e"),e=e(),ne(),e),dn={class:"count-down"},cn=ke(()=>a("span",null,"D : ",-1)),mn=ke(()=>a("span",null,"H : ",-1)),vn=ke(()=>a("span",null,"M : ",-1)),gn=ke(()=>a("span",null,"S",-1));function hn(e,t,s,n,$,y){return d(),w("div",dn,[D(S(n.day)+" ",1),cn,D(" "+S(n.hour)+" ",1),mn,D(" "+S(n.min)+" ",1),vn,D(" "+S(n.sec)+" ",1),gn])}const _n=z(un,[["render",hn],["__scopeId","data-v-131b3f4e"]]),pn={components:{WcountDown:_n},props:{vItem:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1}},setup(e,t){const{t:s}=de();console.log(e.vItem,"vItem");const n=Le(),$=me(),y=i(()=>$),c=v=>{t.emit("claim",v),n.setClaimLoading(v.id)},C=i(()=>n),T=i(()=>new Date().getTime()/1e3>e.vItem.locked_until_time),p=v=>{t.emit("cancelRedeemPayload",v),n.setClaimLoading(v.id)};i(()=>y.value.chainName),Me("Sui");const g=le();return i(()=>g),i(()=>C.value.venft_id),i(()=>y.value.chainName?Ue(y.value.chainName):{}),{t:s,prettyAmount:J,claimBoolean:T,toClaim:c,toCancel:p,claimWhale:v=>{t.emit("claimWhale",v)},cancelRedeemPayload:v=>{t.emit("cancelRedeemPayload",v)}}}};const Oe=e=>(te("data-v-22a782cd"),e=e(),ne(),e),fn={class:"vesting-box"},wn={class:"left"},Cn=Oe(()=>a("img",{src:Ge,alt:""},null,-1)),bn=Oe(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-swap2"})],-1)),yn=Oe(()=>a("img",{src:ze,alt:""},null,-1)),Sn={class:"available-all"},Tn={class:"available"},kn={key:0},$n={key:1};function In(e,t,s,n,$,y){const c=qe("WcountDown"),C=ce;return d(),w("div",fn,[a("div",wn,[a("p",null,[a("span",null,[Cn,D(" "+S(("addCommom"in e?e.addCommom:Ee(P))(n.prettyAmount(s.vItem.xcetus_amount,9),9))+" xCETUS ",1)]),bn,a("span",null,[yn,D(" "+S(("addCommom"in e?e.addCommom:Ee(P))(n.prettyAmount(s.vItem.cetus_amount,9),9))+" CETUS ",1)])]),a("div",Sn,[a("div",Tn,[a("span",null,S(n.claimBoolean?"Available":"Available in"),1),n.claimBoolean?V("",!0):(d(),L(c,{key:0,"start-time":s.vItem.locked_start_time,"end-time":s.vItem.locked_until_time,onCountDown:t[0]||(t[0]=T=>e.$emit("countDown"))},null,8,["start-time","end-time"]))]),a("div",{class:Se(n.claimBoolean?"highlight right-h5":"right-h5")},[n.claimBoolean?(d(),w("span",kn,"Claim")):(d(),w("span",$n,"Cancel"))],2)])]),n.claimBoolean?(d(),L(C,{key:0,disabled:!n.claimBoolean||s.loading,loading:s.loading,onClick:t[1]||(t[1]=T=>n.claimWhale(s.vItem))},{default:Y(()=>[D(S(n.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"])):(d(),L(C,{key:1,type:"text",class:"right",disabled:s.loading,loading:s.loading,onClick:t[2]||(t[2]=T=>n.cancelRedeemPayload(s.vItem))},{default:Y(()=>[D(S(n.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"]))])}const xn=z(pn,[["render",In],["__scopeId","data-v-22a782cd"]]),An=Pe({props:{inputValue:{type:String,default:""},coinSymbol:{type:String,default:""},whaleDirection:{type:String,default:""},address:{type:String,default:""},balance:{type:String,default:""}},setup(e,t){const{t:s,locale:n}=de(),$=me(),y=i(()=>$),c=gt(ht,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),C=le(),T=i(()=>C),p=We(),g=i(()=>p),r=v=>{const k=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,9})?).*$");v.target.value=v.target.value.replace(k,"$1")},m=i(()=>{var v;return g.value.tokensObj&&e.address&&g.value.tokensObj[e.address]&&((v=g.value.tokensObj[e.address])==null?void 0:v.decimals)});return M(()=>g.value.RATES,v=>{v&&console.log(v,"price====>")},{immediate:!0}),{pool:g,t:s,addCommom:P,store:y,wallet:T,indicator:c,inputChange:r,importIcon:Z,coinDecimals:m}}});const Nn=e=>(te("data-v-c5336450"),e=e(),ne(),e),Bn={class:"card"},Rn={class:"top"},En={class:"left"},Dn={class:"loading-token"},Pn={key:0,src:ze,alt:""},Ln={key:1,src:Ge,alt:""},Un={class:"bottom"},Wn=Nn(()=>a("div",null,null,-1)),Mn={class:"top"},On={class:"right"},Vn={key:0,class:"balance"},Fn={key:2,class:"balance"};function Hn(e,t,s,n,$,y){var p,g;const c=_t,C=je,T=ce;return d(),w("div",Bn,[a("div",Rn,[W(c,{value:e.inputValue,placeholder:"0.0",onChange:e.inputChange,onInput:t[0]||(t[0]=r=>e.$emit("onInput",r.target.value)),onFocus:t[1]||(t[1]=r=>e.$emit("onFocus"))},null,8,["value","onChange"]),a("div",En,[a("div",Dn,[e.coinSymbol=="CETUS"?(d(),w("img",Pn)):(d(),w("img",Ln)),a("div",null,[a("p",null,S(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1)])])])]),a("div",Un,[Wn,a("div",Mn,[a("div",On,[a("span",null,S(e.$t("common.balance")),1),e.balance!=="--"?(d(),w("span",Vn,S(e.balance>1?("addCommom"in e?e.addCommom:Ee(P))(e.balance):e.balance),1)):e.balance=="--"&&e.wallet&&e.wallet.address?(d(),L(C,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(d(),w("span",Fn,"--")),e.whaleDirection=="From"?(d(),L(T,{key:3,class:"max-btn",disabled:!e.balance||e.balance==0||!((p=e.wallet)!=null&&p.address),onClick:t[2]||(t[2]=r=>e.$emit("halfBalanne"))},{default:Y(()=>[D(S("Half"))]),_:1},8,["disabled"])):V("",!0),e.whaleDirection=="From"?(d(),L(T,{key:4,class:"max-btn",disabled:!e.balance||e.balance==0||!((g=e.wallet)!=null&&g.address),onClick:t[3]||(t[3]=r=>e.$emit("maxBalanne"))},{default:Y(()=>[D(S(e.$t("button.max")),1)]),_:1},8,["disabled"])):V("",!0)])])])])}const Xn=z(An,[["render",Hn],["__scopeId","data-v-c5336450"]]);const Yn=Pe({components:{Modal:pt},setup(e,t){const s=me(),n=f(!1);i(()=>s);const $=le(),y=i(()=>$);return{store:s,isSelect:n,clickConvert:()=>{n.value&&localStorage.setItem(`notRemind${y.value.address}`,!0),t.emit("clickConvert")}}}}),Ve=e=>(te("data-v-ee04003a"),e=e(),ne(),e),jn=Ve(()=>a("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),qn=[jn],Gn={class:"token-waring-conetnt"},zn=Ve(()=>a("div",{class:"tips-text"},[D(" Please note that after conversion, if you want to convert xCETUS back to CETUS, a vesting period will be applied & different vesting durations correspond to different redeem ratios. "),a("a",{href:"https://cetus-1.gitbook.io/cetus-docs/tokenomics/xcetus",target:"_blank"}," Learn more")],-1)),Kn={class:"read-text"},Qn={key:0,src:St},Jn=Ve(()=>a("span",null," Do not remind again. ",-1));function Zn(e,t,s,n,$,y){const c=ce,C=qe("Modal");return d(),L(C,{width:"440px",visible:!0,footer:null,title:null,"mask-closable":!0,onCancel:t[3]||(t[3]=T=>e.$emit("close"))},{closeIcon:Y(()=>[(d(),w("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:t[0]||(t[0]=T=>e.$emit("close"))},qn))]),default:Y(()=>[a("div",Gn,[zn,a("div",Kn,[a("div",{class:"radio",onClick:t[1]||(t[1]=T=>e.isSelect=!e.isSelect)},[e.isSelect?(d(),w("img",Qn)):V("",!0)]),Jn]),W(c,{class:"big-btn continue",onClick:t[2]||(t[2]=()=>e.clickConvert())},{default:Y(()=>[D("Convert")]),_:1})])]),_:1})}const ea=z(Yn,[["render",Zn],["__scopeId","data-v-ee04003a"]]),ta=Pe({setup(){const e=Le(),t=i(()=>e),s=i(()=>t.value.venft_id),n=i(()=>t.value.venftInfo),$=We(),y=i(()=>$),c=me(),C=i(()=>c),T=Tt();i(()=>y.value.tokensObj&&y.value.tokensObj["0x2a4f647bc73f070182436658bff75060246019857c769ad9268c22c4472bca7f::cetus::CETUS"]);const p=f("");let g=f(!1);const r=f(""),m=f(""),v=f(!1),l=f("convert"),{t:k}=de(),R=f([{time:"15 D",num:15},{time:"30 D",num:30},{time:"90 D",num:90},{time:"180 D",num:180}]),se=f([{name:"est.APR",value:"100.12%"},{name:"My share",value:"<0.1%"},{name:"Pending yield (USDC)",value:0}]),ie=f([{name:"My total locked",value:"$100.12"},{name:"Pending rewards (xCETUS)",value:"100.12"},{name:"",value:""}]),$e=f([{name:"My positions",value:"12"},{name:"My qualified positions",value:"0"},{name:"Pending rewards (xCETUS)",value:"100.12"}]),he=window.setInterval(()=>{e.getXcetusApr(),b.value.address&&(e.getMyShare(b.value.address),e.getVeNFTDividendInfo())},6e4);ft(()=>{document.addEventListener("visibilitychange",()=>{document.hidden||e.getDividendManager()}),e.getDividendManager()}),wt(()=>{window.clearInterval(he),document.removeEventListener("visibilitychange",()=>{console.log("移除监听")})}),M(()=>C.value.theme,o=>{o!=="sui"&&T.selectSuiTheme()},{immediate:!0});const K=i(()=>(console.log(t.value.whaleBalance,"==>xcetus.value.whaleBalance"),t.value.whaleBalance)),_e=i(()=>t.value.xWhaleBalance),G=i(()=>t.value.availableXwhale),Ie=i(()=>t.value.redeemingXwhale),pe=i(()=>{if(l.value=="convert"){if(Number(r.value)>Number(K.value))return!0}else if(Number(r.value)>Number(G.value))return!0;return!r.value||!m.value||Number(r.value)==0||Number(m.value)==0}),I=f("180"),ae=i(()=>(console.log(l.value=="convert","===>1212211"),l.value=="convert"&&Number(r.value)>Number(K.value)?k("button.insufficientBalance",{name:"CETUS"}):l.value!=="convert"&&Number(r.value)>Number(G.value)?k("button.insufficientBalance",{name:"xCETUS"}):Number(I.value)<15?"Minimum vesting duration is 15 days":l.value=="convert"&&s?"Convert":l.value!=="convert"&&s?"Redeem":"Convert"));console.log(ae.value,"btnText.value===>");const fe=o=>{r.value="",m.value="",l.value=o},xe=()=>{g.value=!0,setTimeout(()=>{g.value=!1},300)},Q=o=>{I.value=o},A=f(!1),F=Me("Sui"),we=le(),b=i(()=>we),Ce=i(()=>t.value.ownerLocks);M(()=>b.value.address,o=>{console.log("触发",o),o?(e.getOwnerVeNFT(o),e.getAccountWhaleBalance(o),e.getOwnerLockCetuss(o),e.getMyShare(o)):e.loginOut()},{immediate:!0});const E=i(()=>C.value.chainName?Ue(C.value.chainName):{}),j=i(()=>C.value.chainName),{setIsShowSuccess:_,setIsShowRejected:N,setIsShowWaiting:h,setTransactionDesc:X,setTransactionTxid:O}=c,oe=async()=>{A.value=!0,h(!0),O(""),X(k("tips.converting",{from:`${P(r.value,9)} CETUS`,and:"to",to:`${P(r.value,9)} xCETUS`}));try{let o;const u=ye(r.value,9);console.log(s.value,"===>venft_id.value");const x=await F.depositCetus(u,s.value);console.log(x,"payload==>");const U=await b.value.currentWallet.signAndExecuteTransactionBlock(x);if(o=E.value.handleTx(U),o&&o.hash){O(o.hash),h(!1),_(!0);const B={title:"Converted",desc:`Converted ${P(r.value,9)} xCETUS successfully`,hash:o.hash,tit:"Converted",icon:"icon-icon-Swap",tokenInfo:{tokena:"CETUS",numa:`- ${r.value}`,logoa:Z("/sui-image/WHALE-icon.png"),tokenb:"xCETUS",numb:`+ ${r.value}`,logob:Z("/sui-image/xWHALE-icon.png")}};j.value!=="Aptos"&&(B.res=o.res),E.value.showTransitionPending(B);const H=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getAccountWhaleBalance(b.value.address),e.getOwnerVeNFT(b.value.address),e.getOwnerLockCetuss(b.value.address),e.getMyShare(b.value.address)},3e3),A.value=!1}else h(!1),N(!0),A.value=!1;r.value=""}catch(o){h(!1),N(!0),A.value=!1,r.value="",console.log(o,"error===>")}},q=f(!0),Ae=f("0"),Ke=async()=>{const o=ye(r.value,9),u=await F.redeemNum(o,Number(I.value));m.value=J(u.amountOut,9),console.log("===>amount2222"),Ae.value=u.percent},Qe=async()=>{const o=ye(m.value,9),u=await F.reverseRedeemNum(o,Number(I.value));console.log(u,"===>amount111"),r.value=J(u.amountOut,9),Ae.value=u.percent};M(()=>[r.value,I.value,q.value],([o,u,x])=>{console.log(o,"===>>>>>>>fromCoinAmount",typeof o),o&&u&&x&&Number(u)>=15&&Ke(),!o&&x&&(m.value="")},{immediate:!0}),M(()=>[m.value,I.value,q.value],([o,u,x])=>{o&&u&&!x&&Number(u)>=15&&(Qe(),console.log(o,"===>toCoinAmount")),!o&&!x&&(r.value="")},{immediate:!0}),M(()=>[I.value,q.value],([o,u])=>{Number(o)>180?I.value="180":Number(o)<15?u?m.value="":r.value="":o||(u?r.value="":m.value="")},{immediate:!0});const Je=()=>{q.value=!0,r.value=Te(new He(l.value!=="convert"?G.value:K.value).div(new He(2)).toString(),9)},Ze=()=>{q.value=!0,r.value=l.value!=="convert"?Te(G.value,9):Te(K.value,9)},Fe=async()=>{A.value=!0,h(!0),O(""),X(k("tips.redeeming",{from:`${P(r.value,9)} xCETUS`,to:`${P(m.value,9)} CETUS`}));try{let o;const u=ye(r.value,9);console.log(u.toString(),"538====>");const x=await F.getRedeemLockPayload(u,s.value,Number(I.value));console.log(x,"payload==>");const U=await b.value.currentWallet.signAndExecuteTransactionBlock(x);if(o=E.value.handleTx(U),o&&o.hash){O(o.hash),h(!1),_(!0);const B={title:"Redemption",desc:"Redemption transaction submitted successfully.",hash:o.hash,tit:"Vesting",icon:"icon-icon-Removed",tokenInfo:{tokena:"xCETUS",numa:`- ${r.value}`,logoa:Z("/sui-image/xWHALE-icon.png")}};j.value!=="Aptos"&&(B.res=o.res),E.value.showTransitionPending(B);const H=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getAccountWhaleBalance(b.value.address),e.getOwnerVeNFT(b.value.address),e.getOwnerLockCetuss(b.value.address),e.getMyShare(b.value.address)},3e3),A.value=!1}else h(!1),N(!0),A.value=!1;r.value="",m.value=""}catch(o){h(!1),N(!0),A.value=!1,r.value="",m.value="",console.log(o,"error===>")}};M(()=>[s.value,Ce.value,n.value,b.value.address],([o,u,x,U])=>{U&&(o&&e.getVeNFTDividendInfo(),o&&!ee(x)&&u&&u.length>0&&(console.log("执行了",u),e.getAvailableXCetus()))},{immediate:!0,deep:!0});const et=async o=>{A.value=!0,h(!0),O(""),X("");try{let u;console.log(o.id,"==>vItem.id");const x=await F.getCancelRedeemPayload(o.id,s.value);console.log(x,"payload==>");const U=await b.value.currentWallet.signAndExecuteTransactionBlock(x);if(u=E.value.handleTx(U),u&&u.hash){O(u.hash),h(!1),_(!0);const B={title:"Cancelled Redemption",desc:"Cancelled redemption successfully.",hash:u.hash,tit:"Cancelled Redemption",icon:"icon-a-icon-Shutdown",tokenInfo:{tokena:"xCETUS",numa:`+ ${J(o.xcetus_amount,9)}`,logoa:Z("/sui-image/xWHALE-icon.png")}};j.value!=="Aptos"&&(B.res=u.res),E.value.showTransitionPending(B);const H=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getOwnerVeNFT(b.value.address),e.getOwnerLockCetuss(b.value.address),A.value=!1},3e3)}else h(!1),N(!0),A.value=!1;r.value="",m.value=""}catch(u){h(!1),N(!0),A.value=!1,r.value="",m.value="",e.setClaimLoading(""),console.log(u,"error===>")}},tt=f({}),nt=()=>{console.log("倒计时结束"),e.getOwnerLockCetuss(b.value.address)},at=async o=>{console.log(o,"vItem===>"),A.value=!0,h(!0),O(""),X(`${k("tips.claimingPendingYield")} ${P(J(o.cetus_amount,9),9)} CETUS`);try{let u;const x=await F.getRedeemPayload(o.id,s.value);console.log(x,"payload==>");const U=await b.value.currentWallet.signAndExecuteTransactionBlock(x);if(u=E.value.handleTx(U),u&&u.hash){O(u.hash),h(!1),_(!0);const B={title:"Claimed",desc:`Claimed ${P(J(o.cetus_amount,9),9)} CETUS successfully.`,hash:u.hash,tit:"CETUS Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:"CETUS",numa:`+ ${J(o.cetus_amount,9)}`,logoa:Z("/sui-image/WHALE-icon.png")}};j.value!=="Aptos"&&(B.res=u.res),E.value.showTransitionPending(B);const H=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getOwnerLockCetuss(b.value.address),e.getAccountWhaleBalance(b.value.address),e.getOwnerVeNFT(b.value.address),e.getMyShare(b.value.address),e.getAvailableXCetus(),A.value=!1},3e3)}else h(!1),N(!0),A.value=!1;r.value="",m.value=""}catch(u){h(!1),N(!0),A.value=!1,r.value="",m.value="",e.setClaimLoading(""),console.log(u,"error===>")}},Ne=f(!1),ot=()=>{!localStorage.getItem(`notRemind${b.value.address}`)&&ae.value=="Convert"?Ne.value=!0:ae.value=="Redeem"?Fe():oe()},lt=()=>{Ne.value=!1,oe()},re=i(()=>t.value.pendingCoinInfo),ue=i(()=>t.value.pendingAmount),be=f(!1),st=async()=>{be.value=!0,h(!0),O(""),X(`${k("tips.claimingPendingYield")} ${ue.value} ${re.value.symbol}`),console.log(`${k("tips.claimingPendingYield")} ${ue.value} ${re.value.symbol}`,"dsadas");try{let o;const u=await F.getRedeemDividendV2Payload(s.value);console.log(u,"payload==>");const x=await b.value.currentWallet.signAndExecuteTransactionBlock(u);if(o=E.value.handleTx(x),o&&o.hash){O(o.hash),h(!1),_(!0);const U={title:"Claim",desc:`Claimed ${ue.value} ${re.value.symbol} successfully.`,hash:o.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:re.value.symbol,numa:`+ ${ue.value}`,logoa:re.value.logo_url}};j.value!=="Aptos"&&(U.res=o.res),E.value.showTransitionPending(U);const B=await E.value.watchTransaction(U);console.log("0221###swap###transitionStatus####",B),B&&setTimeout(()=>{e.getVeNFTDividendInfo(),be.value=!1},3e3),e.getOwnerLockCetuss(b.value.address)}else h(!1),N(!0),be.value=!1,A.value=!1}catch(o){h(!1),N(!0),be.value=!1,console.log(o,"error===>")}},it=()=>{Number(I.value)<15&&(I.value="15")},rt=()=>{I.value&&(I.value=I.value.replace(/[^\d]/g,""),I.value.charAt(0)==="0"&&(I.value=I.value.slice(1)))},ut=()=>{e.getDividendManager()},dt=i(()=>y.value.tokensObj||{}),ct=i(()=>y.value.RATES||{}),mt=i(()=>t.value.dividendManagerInfo||{});return M(()=>[dt.value,ct.value,mt.value],([o,u,x])=>{!ee(o)&&!ee(u)&&!ee(x)&&e.getXcetusApr()},{immediate:!0}),{clickModalConvert:lt,openConfirmModal:Ne,validateInput:rt,countDown:nt,value:p,change:g,clickExchange:xe,fromCoinAmount:r,toCoinAmount:m,showCoinSelect:v,headSwitchValue:l,headSwitchChange:fe,vestingDateList:R,vestingParameter:I,vestingTab:Q,holderList:se,lockupList:ie,leaderboardList:$e,whaleBalance:K,depositCetus:oe,btnText:ae,loading:A,redeemRatio:Ae,halfBalanne:Je,maxBalanne:Ze,xWhaleBalance:_e,availableXwhale:G,redeemingXwhale:Ie,withdrawWhale:Fe,ownerLocks:Ce,cancelRedeemPayload:et,holderInfo:tt,btnDisabled:pe,fixedFromCoin:q,walletStore:we,claimWhale:at,wallet:b,depositOrWithdraw:ot,pendingAmount:ue,claimPendingYield:st,inputBlur:it,getNextEpoch:ut}}});const ge=e=>(te("data-v-6d7d0280"),e=e(),ne(),e),na={class:"dashboard-all"},aa={class:"dashboard-content"},oa={class:"content-left"},la={key:0,class:"vesting"},sa=ge(()=>a("p",null,"Vesting",-1)),ia={class:"content-right"},ra={key:0,class:"card-container"},ua={class:"card-item"},da={class:"card-item"},ca={class:"exchange"},ma=ge(()=>a("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),va=[ma],ga={key:1,class:"card-redeem"},ha={class:"card-item"},_a={class:"vesting-duration"},pa=ge(()=>a("p",null,"Vesting duration",-1)),fa={class:"vesting-content"},wa={class:"vesting-left"},Ca={class:"value-days"},ba=ge(()=>a("span",null,"days",-1)),ya={class:"vesting-right"},Sa=["onClick"],Ta={class:"card-item"},ka={class:"redeem-ratio"},$a=ge(()=>a("span",null,"Redeem ratio",-1));function Ia(e,t,s,n,$,y){const c=vt,C=rn,T=xn,p=yt,g=Xn,r=bt,m=ce,v=ea;return d(),w("div",na,[W(c,{title:"Dashboard","total-xwhale":e.xWhaleBalance,"available-xwhale":e.availableXwhale,"redeeming-xwhale":e.redeemingXwhale},null,8,["total-xwhale","available-xwhale","redeeming-xwhale"]),a("div",aa,[a("div",oa,[W(C,{"holder-info":e.holderInfo,"pending-amount":e.pendingAmount,"claim-loading":e.claimLoading,onClaimPendingYield:e.claimPendingYield,onGetNextEpoch:e.getNextEpoch},null,8,["holder-info","pending-amount","claim-loading","onClaimPendingYield","onGetNextEpoch"]),e.ownerLocks&&e.ownerLocks.length>0?(d(),w("div",la,[sa,(d(!0),w(Be,null,Re(e.ownerLocks,l=>(d(),L(T,{key:l,"v-item":l,loading:e.loading,onCountDown:e.countDown,onClaimWhale:e.claimWhale,onCancelRedeemPayload:e.cancelRedeemPayload},null,8,["v-item","loading","onCountDown","onClaimWhale","onCancelRedeemPayload"]))),128))])):V("",!0)]),a("div",ia,[W(p,{"head-switch-value":e.headSwitchValue,"left-text":"Get xCETUS","right-text":"Redeem CETUS",onHeadSwitchChange:t[0]||(t[0]=l=>{e.headSwitchChange(l)})},null,8,["head-switch-value"]),e.headSwitchValue=="convert"?(d(),w("div",ra,[a("div",ua,[W(g,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[1]||(t[1]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"CETUS","whale-direction":"From",balance:e.whaleBalance,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[2]||(t[2]=l=>{e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),a("div",da,[W(g,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[3]||(t[3]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"To",balance:e.availableXwhale,onOnInput:t[4]||(t[4]=l=>{e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance"])]),a("img",{class:Se(e.change?"gang animationex":"gang"),src:kt,alt:""},null,2),a("div",ca,[(d(),w("svg",{class:Se(e.change?"icon animationex":"icon"),"aria-hidden":"true"},va,2))])])):(d(),w("div",ga,[a("div",ha,[W(g,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[5]||(t[5]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"From",balance:e.availableXwhale,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[6]||(t[6]=l=>{e.fixedFromCoin=!0,e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),a("div",_a,[pa,a("div",fa,[a("div",wa,[a("div",Ca,[De(a("input",{"onUpdate:modelValue":t[7]||(t[7]=l=>e.vestingParameter=l),onInput:t[8]||(t[8]=(...l)=>e.validateInput&&e.validateInput(...l)),onBlur:t[9]||(t[9]=(...l)=>e.inputBlur&&e.inputBlur(...l))},null,544),[[Ct,e.vestingParameter]])]),ba]),a("div",ya,[(d(!0),w(Be,null,Re(e.vestingDateList,l=>(d(),w("div",{key:l.time,class:Se(["box-table",{"box-table-active":l.num===Number(e.vestingParameter)}]),onClick:k=>e.vestingTab(l.num)},S(l.time),11,Sa))),128))])]),W(r,{value:e.vestingParameter,"onUpdate:value":t[10]||(t[10]=l=>e.vestingParameter=l),max:180,min:15},null,8,["value"])]),a("div",Ta,[W(g,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[11]||(t[11]=l=>e.toCoinAmount=l),"input-value":e.toCoinAmount,"coin-symbol":"CETUS","whale-direction":"To",balance:e.whaleBalance,onOnInput:t[12]||(t[12]=l=>{e.fixedFromCoin=!1,e.toCoinAmount=l})},null,8,["modelValue","input-value","balance"])]),a("div",ka,[$a,a("p",null,S(e.redeemRatio)+"%",1)])])),e.wallet&&e.wallet.address?(d(),L(m,{key:2,class:"big-btn",loading:e.loading,disabled:e.btnDisabled,onClick:e.depositOrWithdraw},{default:Y(()=>[a("span",null,S(e.btnText),1)]),_:1},8,["loading","disabled","onClick"])):(d(),L(m,{key:3,class:"big-btn",onClick:t[13]||(t[13]=l=>e.walletStore.setIsShowWalletModal(!0))},{default:Y(()=>[a("span",null,S(e.$t("button.connectWallet")),1)]),_:1}))])]),e.openConfirmModal?(d(),L(v,{key:0,onClickConvert:e.clickModalConvert,onClose:t[14]||(t[14]=()=>e.openConfirmModal=!e.openConfirmModal)},null,8,["onClickConvert"])):V("",!0)])}const ja=z(ta,[["render",Ia],["__scopeId","data-v-6d7d0280"]]);export{ja as default};
