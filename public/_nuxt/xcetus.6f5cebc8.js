import{_ as lt}from"./xwhale-header.4ffa7bdb.js";import{r as f,X as He,q as O,e as z,o as d,f as w,h as a,v as y,j as D,y as ue,l as i,s as st,x as V,t as Xe,c as L,M as Ye,p as ee,k as te,i as W,F as Be,E as Re,w as Y,B as de,Q as je,u as Ee,A as ye,a as De,C as it,L as rt,I as ut,$ as dt,H as ct,K as mt,a9 as vt,G as gt}from"./entry.7346a543.js";/* empty css              */import{a as oe,u as ce}from"./sha256.24785cd7.js";import{u as Pe}from"./xcetus.b2851bb9.js";import{i as Z}from"./import-icon.de3e6c66.js";import{a as P,s as Se,e as Le,u as Ue,c as Te,p as J,z as Ce}from"./pool.982f9ef8.js";import{u as We}from"./useWhale.7838c24e.js";import{_ as qe}from"./xWHALE-icon.2df34cd4.js";import{_ as Ge}from"./WHALE-icon.28f954ba.js";import{_ as ht}from"./head-switch.f592ebdb.js";/* empty css              */import{_ as pt}from"./icon-selected_3x.09e9a6f0.js";/* empty css              *//* empty css              */import{D as Fe}from"./decimal.0bdeb344.js";import{u as _t}from"./useTheme.e2b2805a.js";import{_ as ft}from"./img-leverage_2x.1c577303.js";const wt={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=f("--"),n=f("--"),$=f("--"),S=f("--");let c=null;He(()=>{window.clearInterval(c)});const b=()=>{const h=new Date().getTime()/1e3;Number(h)<=Number(e.startTime)&&T(e.startTime),Number(h)>Number(e.startTime)&&Number(h)<=Number(e.endTime)&&T(e.endTime)},T=h=>{clearInterval(c),window.clearInterval(c),c=setInterval(()=>{let p=new Date().getTime()/1e3,m=h-parseInt(String(p));if(m==0){t.emit("countDown"),clearInterval(c),window.clearInterval(c),c=null;return}else m<0&&(clearInterval(c),window.clearInterval(c),t.emit("countDown"),c=null);m--;let v=parseInt(String(m/60/60/24));v=(v<10,v);let l=parseInt(String(m/60/60%24));l=(l<10,l);let k=parseInt(String(m/60%60));k=(k<10,k);let R=parseInt(String(m%60));R=R<10?+R:R,s.value=v,n.value=l,$.value=k,S.value=R},1e3)};return O(()=>e.startTime,(h,p)=>{h!==p&&b()},{immediate:!0}),{day:s,hour:n,min:$,sec:S}}};const bt={class:"count-time"};function Ct(e,t,s,n,$,S){return d(),w("div",bt,[a("p",null,y(n.day)+"d",1),D(" : "),a("p",null,y(n.hour)+"h",1),D(" : "),a("p",null,y(n.min)+"m",1),D(" : "),a("p",null,y(n.sec)+"s",1)])}const yt=z(wt,[["render",Ct],["__scopeId","data-v-ce10c596"]]),St={props:{titleText:{type:String,default:""},tipsText:{type:String,default:""},imgIcon:{type:String,default:""},value:{type:String,default:"--"},tokenSymbol:{type:String,default:""},logo:{type:String,default:""}},setup(e){const{t}=ue();console.log(e.value,"props.value####");const s=oe(),n=i(()=>s);return{t,wallet:n}}};const Tt=e=>(ee("data-v-844310a2"),e=e(),te(),e),kt={class:"table-rewards"},$t={key:0,class:"logo"},It=["src"],xt={class:"text-top-all"},Nt={key:0,class:"icon-hover-box"},At=Tt(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-information"})],-1)),Bt={class:"tips-text-box"},Rt={key:0},Et={key:0,alt:""},Dt={key:2};function Pt(e,t,s,n,$,S){const c=Ye,b=st("image");return d(),w("div",kt,[s.logo?(d(),w("div",$t,[a("img",{src:s.logo,alt:""},null,8,It)])):V("",!0),a("div",null,[a("div",xt,[a("p",null,y(s.titleText),1),s.tipsText?(d(),w("div",Nt,[At,a("div",Bt,y(s.titleText=="est.APR"?"Estimated APR of the current epoch for all xCETUS holders.":"The number of qualified positions in this epoch."),1)])):V("",!0)]),a("span",null,[s.value!=="--"?(d(),w("p",Rt,[s.imgIcon?Xe((d(),w("img",Et,null,512)),[[b,s.imgIcon]]):V("",!0),D(y(s.value)+" ",1),a("span",null,y(s.tokenSymbol),1)])):s.value=="--"&&n.wallet&&n.wallet.address?(d(),L(c,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(d(),w("p",Dt,"--"))])])])}const Lt=z(St,[["render",Pt],["__scopeId","data-v-844310a2"]]),Ut={setup(e){const{t}=ue(),s=Pe(),n=i(()=>s),$=i(()=>n.value.pendingAmount),S=i(()=>n.value.newPendingAmount),c=i(()=>n.value.rewardCoinAmount),b=i(()=>(console.log(n.value.nextStartTime,"===>xcetus.value.nextStartTime"),n.value.nextStartTime)),T=i(()=>1683094391),h=i(()=>n.value.xcetusShare&&P(n.value.xcetusShare,3)),p=oe(),r=i(()=>p),m=i(()=>n.value.cetusApr&&n.value.cetusApr>.01?P(Se(n.value.cetusApr,2),2):P(n.value.cetusApr,2)),v=i(()=>n.value.pendingCoinInfo),l=i(()=>n.value.newPendingCoinInfo),k=i(()=>n.value.rewardCoin),R=f("");O(()=>v.value,_=>{_&&Te(_),R.value="Pending yield"},{immediate:!0});const le=f("");O(()=>l.value,_=>{_&&!Te(_)?le.value=`Pending yield (${_.symbol})`:le.value="Pending yield"},{immediate:!0});const se=f();O(()=>k.value,_=>{_&&!Te(_)?se.value=`Pending yield (${_.symbol})`:se.value="Pending yield"},{immediate:!0});const $e=()=>{setTimeout(()=>{s.getDividendManager()},3e3)},ge=i(()=>n.value.dividendManagerInfo),K=i(()=>{const _=parseInt(String(new Date().getTime()/1e3)),A=ge.value.interval_day,g=(_-Number(ge.value.start_time))/(A*60);return console.log(parseInt(String(g))>0,"====>(parseInt(String(time))) > 0"),parseInt(String(g))>0}),he=ce(),G=i(()=>he),{setIsShowSuccess:Ie,setIsShowRejected:pe,setIsShowWaiting:I,setTransactionDesc:ne,setTransactionTxid:_e}=he,xe=We("Sui"),Q=f(!1),N=i(()=>n.value.venft_id),F=i(()=>G.value.chainName?Le(G.value.chainName):{}),fe=async()=>{Q.value=!0,I(!0),_e("");let _=`${t("tips.claimingPendingYield")} `,A="";j.value.forEach((g,X)=>{A=A+`${P(g.amount)} ${g.symbol} ${X==j.value.length-1?"":"and "}`}),console.log(_,"#desc"),ne(_+A);try{let g;const X=await xe.getRedeemDividendV2Payload(N.value);console.log(X,"payload==>");const M=await r.value.currentWallet.signAndExecuteTransactionBlock(X);if(g=F.value.handleTx(M),g&&g.hash){_e(g.hash),I(!1),Ie(!0);const ae={title:"Claim",desc:`Claimed ${A} successfully.`,hash:g.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:v.value.symbol,numa:`+ ${$.value}`,logoa:v.value.logo_url}};F.value.showTransitionPending(ae);const q=await F.value.watchTransaction(ae);console.log("0221###swap###transitionStatus####",q),q&&setTimeout(()=>{s.getVeNFTDividendInfo(),Q.value=!1},3e3),s.getOwnerLockCetuss(r.value.address)}else I(!1),pe(!0),Q.value=!1}catch(g){I(!1),pe(!0),Q.value=!1,console.log(g,"error===>")}},C=Ue(),we=i(()=>C),E=_=>{var A;return(_==null?void 0:_.logoURI)||(_==null?void 0:_.logo_url)||((A=we.value.tokensObj[_==null?void 0:_.address])==null?void 0:A.logo_url)},j=i(()=>n.value.xcetusRewardList);return{t,pendingAmount:$,nextStartTime:b,wallet:r,myShare:h,importIcon:Z,nextEndTime:T,pendingYieldText:R,cetusApr:m,pendingCoinInfo:v,getNextEpoch:$e,canClaim:K,claimPendingYield:fe,claimLoading:Q,addCommom:P,newPendingCoinInfo:l,newPendingAmount:S,newPendingYieldText:le,rewardCoin:k,rewardCoinAmount:c,rewardCoinYieldText:se,getCoinIcon:E,xcetusRewardList:j}}},Wt=""+new URL("staking-rewards-banner-h5.1c7401db.png",import.meta.url).href,Mt=""+globalThis.__publicAssetsURL("sui-image/icon_pendingyield@2x.png");const me=e=>(ee("data-v-7d698edb"),e=e(),te(),e),Ot={class:"top-banner"},Vt=me(()=>a("img",{src:Wt,alt:""},null,-1)),Ft=me(()=>a("p",null,"Convert CETUS to xCETUS to start earning",-1)),Ht={class:"bot-count"},Xt=me(()=>a("span",null,"Reward distribution in ",-1)),Yt={class:"holder-rewards"},jt=me(()=>a("div",{class:"title"},[a("div",{class:"left"},[a("span",null,"xCETUS Staking Rewards")])],-1)),qt={class:"rewards-value"},Gt={key:0,class:"pending-yield"},zt=me(()=>a("div",{class:"pending-yield-title"},[a("img",{src:Mt,alt:""}),a("span",null,"Pending Yield")],-1)),Kt={class:"pending-yield-list"},Qt=["src"],Jt={class:"claim-btn-box"};function Zt(e,t,s,n,$,S){const c=yt,b=Lt,T=de;return d(),w("div",null,[a("div",Ot,[Vt,Ft,a("div",Ht,[Xt,W(c,{"start-time":n.nextStartTime,onCountDown:t[0]||(t[0]=h=>e.$emit("getNextEpoch"))},null,8,["start-time"])])]),a("div",Yt,[jt,a("div",qt,[W(b,{"title-text":"est.APR","tips-text":"good",value:"≈"+n.cetusApr+"%",logo:"/sui-image/icon_estapr@2x.png"},null,8,["title-text","value"]),W(b,{"title-text":"My share",value:n.myShare!=="--"?"≈"+n.myShare+"%":"--",logo:"/sui-image/icon_myshare@2x.png"},null,8,["value"]),n.xcetusRewardList&&n.xcetusRewardList.length==0?(d(),L(b,{key:0,"title-text":"Pending yield",value:n.wallet&&n.wallet.address?"0":"--",logo:"/sui-image/icon_pendingyield@2x.png"},null,8,["value"])):V("",!0)]),n.wallet&&n.wallet.address&&n.xcetusRewardList&&n.xcetusRewardList.length>0?(d(),w("div",Gt,[zt,a("div",Kt,[(d(!0),w(Be,null,Re(n.xcetusRewardList,(h,p)=>(d(),w("div",{key:p,class:"pending-yield-item"},[a("div",null,[a("img",{src:n.getCoinIcon(h),alt:""},null,8,Qt),a("span",null,y(h.symbol),1)]),a("div",null,y(n.addCommom(h.amount,6)),1)]))),128)),a("div",Jt,[n.wallet&&n.wallet.address&&n.xcetusRewardList&&n.xcetusRewardList.length>0?(d(),L(T,{key:0,class:"claim-btn",loading:n.claimLoading,disabled:!n.canClaim||n.xcetusRewardList&&n.xcetusRewardList.length==0,onClick:n.claimPendingYield},{default:Y(()=>[D(" Claim ")]),_:1},8,["loading","disabled","onClick"])):V("",!0)])])])):V("",!0)])])}const en=z(Ut,[["render",Zt],["__scopeId","data-v-7d698edb"]]),tn={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=f("--"),n=f("--"),$=f("--"),S=f("--");let c=null;He(()=>{window.clearInterval(c)});const b=()=>{const h=new Date().getTime()/1e3;Number(h)<=Number(e.startTime)&&T(e.startTime),Number(h)>Number(e.startTime)&&Number(h)<=Number(e.endTime)&&T(e.endTime)},T=h=>{c=setInterval(()=>{let p=new Date().getTime()/1e3,m=h-parseInt(String(p));if(m==0){t.emit("countDown"),clearInterval(c),window.clearInterval(c),c=null;return}else m<0&&(clearInterval(c),window.clearInterval(c),t.emit("countDown"),c=null);m--;let v=parseInt(String(m/60/60/24));v=v<10?"0"+v:v;let l=parseInt(String(m/60/60%24));l=l<10?"0"+l:l;let k=parseInt(String(m/60%60));k=k<10?"0"+k:k;let R=parseInt(String(m%60));R=R<10?"0"+R:R,s.value=v,n.value=l,$.value=k,S.value=R},1e3)};return O(()=>e.startTime,(h,p)=>{h!==p&&b()},{immediate:!0}),{day:s,hour:n,min:$,sec:S}}};const ke=e=>(ee("data-v-131b3f4e"),e=e(),te(),e),nn={class:"count-down"},an=ke(()=>a("span",null,"D : ",-1)),on=ke(()=>a("span",null,"H : ",-1)),ln=ke(()=>a("span",null,"M : ",-1)),sn=ke(()=>a("span",null,"S",-1));function rn(e,t,s,n,$,S){return d(),w("div",nn,[D(y(n.day)+" ",1),an,D(" "+y(n.hour)+" ",1),on,D(" "+y(n.min)+" ",1),ln,D(" "+y(n.sec)+" ",1),sn])}const un=z(tn,[["render",rn],["__scopeId","data-v-131b3f4e"]]),dn={components:{WcountDown:un},props:{vItem:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1}},setup(e,t){const{t:s}=ue();console.log(e.vItem,"vItem");const n=Pe(),$=ce(),S=i(()=>$),c=v=>{t.emit("claim",v),n.setClaimLoading(v.id)},b=i(()=>n),T=i(()=>new Date().getTime()/1e3>e.vItem.locked_until_time),h=v=>{t.emit("cancelRedeemPayload",v),n.setClaimLoading(v.id)};i(()=>S.value.chainName),We("Sui");const p=oe();return i(()=>p),i(()=>b.value.venft_id),i(()=>S.value.chainName?Le(S.value.chainName):{}),{t:s,prettyAmount:J,claimBoolean:T,toClaim:c,toCancel:h,claimWhale:v=>{t.emit("claimWhale",v)},cancelRedeemPayload:v=>{t.emit("cancelRedeemPayload",v)}}}};const Me=e=>(ee("data-v-22a782cd"),e=e(),te(),e),cn={class:"vesting-box"},mn={class:"left"},vn=Me(()=>a("img",{src:qe,alt:""},null,-1)),gn=Me(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-swap2"})],-1)),hn=Me(()=>a("img",{src:Ge,alt:""},null,-1)),pn={class:"available-all"},_n={class:"available"},fn={key:0},wn={key:1};function bn(e,t,s,n,$,S){const c=je("WcountDown"),b=de;return d(),w("div",cn,[a("div",mn,[a("p",null,[a("span",null,[vn,D(" "+y(("addCommom"in e?e.addCommom:Ee(P))(n.prettyAmount(s.vItem.xcetus_amount,9),9))+" xCETUS ",1)]),gn,a("span",null,[hn,D(" "+y(("addCommom"in e?e.addCommom:Ee(P))(n.prettyAmount(s.vItem.cetus_amount,9),9))+" CETUS ",1)])]),a("div",pn,[a("div",_n,[a("span",null,y(n.claimBoolean?"Available":"Available in"),1),n.claimBoolean?V("",!0):(d(),L(c,{key:0,"start-time":s.vItem.locked_start_time,"end-time":s.vItem.locked_until_time,onCountDown:t[0]||(t[0]=T=>e.$emit("countDown"))},null,8,["start-time","end-time"]))]),a("div",{class:ye(n.claimBoolean?"highlight right-h5":"right-h5")},[n.claimBoolean?(d(),w("span",fn,"Claim")):(d(),w("span",wn,"Cancel"))],2)])]),n.claimBoolean?(d(),L(b,{key:0,disabled:!n.claimBoolean||s.loading,loading:s.loading,onClick:t[1]||(t[1]=T=>n.claimWhale(s.vItem))},{default:Y(()=>[D(y(n.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"])):(d(),L(b,{key:1,type:"text",class:"right",disabled:s.loading,loading:s.loading,onClick:t[2]||(t[2]=T=>n.cancelRedeemPayload(s.vItem))},{default:Y(()=>[D(y(n.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"]))])}const Cn=z(dn,[["render",bn],["__scopeId","data-v-22a782cd"]]),yn=De({props:{inputValue:{type:String,default:""},coinSymbol:{type:String,default:""},whaleDirection:{type:String,default:""},address:{type:String,default:""},balance:{type:String,default:""}},setup(e,t){const{t:s,locale:n}=ue(),$=ce(),S=i(()=>$),c=it(rt,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),b=oe(),T=i(()=>b),h=Ue(),p=i(()=>h),r=v=>{const k=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,9})?).*$");v.target.value=v.target.value.replace(k,"$1")},m=i(()=>{var v;return p.value.tokensObj&&e.address&&p.value.tokensObj[e.address]&&((v=p.value.tokensObj[e.address])==null?void 0:v.decimals)});return O(()=>p.value.RATES,v=>{v&&console.log(v,"price====>")},{immediate:!0}),{pool:p,t:s,addCommom:P,store:S,wallet:T,indicator:c,inputChange:r,importIcon:Z,coinDecimals:m}}});const Sn=e=>(ee("data-v-c5336450"),e=e(),te(),e),Tn={class:"card"},kn={class:"top"},$n={class:"left"},In={class:"loading-token"},xn={key:0,src:Ge,alt:""},Nn={key:1,src:qe,alt:""},An={class:"bottom"},Bn=Sn(()=>a("div",null,null,-1)),Rn={class:"top"},En={class:"right"},Dn={key:0,class:"balance"},Pn={key:2,class:"balance"};function Ln(e,t,s,n,$,S){var h,p;const c=ut,b=Ye,T=de;return d(),w("div",Tn,[a("div",kn,[W(c,{value:e.inputValue,placeholder:"0.0",onChange:e.inputChange,onInput:t[0]||(t[0]=r=>e.$emit("onInput",r.target.value)),onFocus:t[1]||(t[1]=r=>e.$emit("onFocus"))},null,8,["value","onChange"]),a("div",$n,[a("div",In,[e.coinSymbol=="CETUS"?(d(),w("img",xn)):(d(),w("img",Nn)),a("div",null,[a("p",null,y(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1)])])])]),a("div",An,[Bn,a("div",Rn,[a("div",En,[a("span",null,y(e.$t("common.balance")),1),e.balance!=="--"?(d(),w("span",Dn,y(e.balance>1?("addCommom"in e?e.addCommom:Ee(P))(e.balance):e.balance),1)):e.balance=="--"&&e.wallet&&e.wallet.address?(d(),L(b,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(d(),w("span",Pn,"--")),e.whaleDirection=="From"?(d(),L(T,{key:3,class:"max-btn",disabled:!e.balance||e.balance==0||!((h=e.wallet)!=null&&h.address),onClick:t[2]||(t[2]=r=>e.$emit("halfBalanne"))},{default:Y(()=>[D(y("Half"))]),_:1},8,["disabled"])):V("",!0),e.whaleDirection=="From"?(d(),L(T,{key:4,class:"max-btn",disabled:!e.balance||e.balance==0||!((p=e.wallet)!=null&&p.address),onClick:t[3]||(t[3]=r=>e.$emit("maxBalanne"))},{default:Y(()=>[D(y(e.$t("button.max")),1)]),_:1},8,["disabled"])):V("",!0)])])])])}const Un=z(yn,[["render",Ln],["__scopeId","data-v-c5336450"]]);const Wn=De({components:{Modal:dt},setup(e,t){const s=ce(),n=f(!1);i(()=>s);const $=oe(),S=i(()=>$);return{store:s,isSelect:n,clickConvert:()=>{n.value&&localStorage.setItem(`notRemind${S.value.address}`,!0),t.emit("clickConvert")}}}}),Oe=e=>(ee("data-v-ee04003a"),e=e(),te(),e),Mn=Oe(()=>a("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),On=[Mn],Vn={class:"token-waring-conetnt"},Fn=Oe(()=>a("div",{class:"tips-text"},[D(" Please note that after conversion, if you want to convert xCETUS back to CETUS, a vesting period will be applied & different vesting durations correspond to different redeem ratios. "),a("a",{href:"https://cetus-1.gitbook.io/cetus-docs/tokenomics/xcetus",target:"_blank"}," Learn more")],-1)),Hn={class:"read-text"},Xn={key:0,src:pt},Yn=Oe(()=>a("span",null," Do not remind again. ",-1));function jn(e,t,s,n,$,S){const c=de,b=je("Modal");return d(),L(b,{width:"440px",visible:!0,footer:null,title:null,"mask-closable":!0,onCancel:t[3]||(t[3]=T=>e.$emit("close"))},{closeIcon:Y(()=>[(d(),w("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:t[0]||(t[0]=T=>e.$emit("close"))},On))]),default:Y(()=>[a("div",Vn,[Fn,a("div",Hn,[a("div",{class:"radio",onClick:t[1]||(t[1]=T=>e.isSelect=!e.isSelect)},[e.isSelect?(d(),w("img",Xn)):V("",!0)]),Yn]),W(c,{class:"big-btn continue",onClick:t[2]||(t[2]=()=>e.clickConvert())},{default:Y(()=>[D("Convert")]),_:1})])]),_:1})}const qn=z(Wn,[["render",jn],["__scopeId","data-v-ee04003a"]]),Gn=De({setup(){const e=Pe(),t=i(()=>e),s=i(()=>t.value.venft_id),n=i(()=>t.value.venftInfo),$=Ue(),S=i(()=>$),c=ce(),b=i(()=>c),T=_t();i(()=>S.value.tokensObj&&S.value.tokensObj["0x2a4f647bc73f070182436658bff75060246019857c769ad9268c22c4472bca7f::cetus::CETUS"]);const h=f("");let p=f(!1);const r=f(""),m=f(""),v=f(!1),l=f("convert"),{t:k}=ue(),R=f([{time:"15 D",num:15},{time:"30 D",num:30},{time:"90 D",num:90},{time:"180 D",num:180}]),le=f([{name:"est.APR",value:"100.12%"},{name:"My share",value:"<0.1%"},{name:"Pending yield (USDC)",value:0}]),se=f([{name:"My total locked",value:"$100.12"},{name:"Pending rewards (xCETUS)",value:"100.12"},{name:"",value:""}]),$e=f([{name:"My positions",value:"12"},{name:"My qualified positions",value:"0"},{name:"Pending rewards (xCETUS)",value:"100.12"}]),ge=window.setInterval(()=>{e.getXcetusApr(),C.value.address&&(e.getMyShare(C.value.address),e.getVeNFTDividendInfo())},6e4);ct(()=>{document.addEventListener("visibilitychange",()=>{document.hidden||e.getDividendManager()}),e.getXcetusApr(),e.getDividendManager()}),mt(()=>{window.clearInterval(ge),document.removeEventListener("visibilitychange",()=>{console.log("移除监听")})}),O(()=>b.value.theme,o=>{o!=="sui"&&T.selectSuiTheme()},{immediate:!0});const K=i(()=>(console.log(t.value.whaleBalance,"==>xcetus.value.whaleBalance"),t.value.whaleBalance)),he=i(()=>t.value.xWhaleBalance),G=i(()=>t.value.availableXwhale),Ie=i(()=>t.value.redeemingXwhale),pe=i(()=>{if(l.value=="convert"){if(Number(r.value)>Number(K.value))return!0}else if(Number(r.value)>Number(G.value))return!0;return!r.value||!m.value||Number(r.value)==0||Number(m.value)==0}),I=f("180"),ne=i(()=>(console.log(l.value=="convert","===>1212211"),l.value=="convert"&&Number(r.value)>Number(K.value)?k("button.insufficientBalance",{name:"CETUS"}):l.value!=="convert"&&Number(r.value)>Number(G.value)?k("button.insufficientBalance",{name:"xCETUS"}):Number(I.value)<15?"Minimum vesting duration is 15 days":l.value=="convert"&&s?"Convert":l.value!=="convert"&&s?"Redeem":"Convert"));console.log(ne.value,"btnText.value===>");const _e=o=>{r.value="",m.value="",l.value=o},xe=()=>{p.value=!0,setTimeout(()=>{p.value=!1},300)},Q=o=>{I.value=o},N=f(!1),F=We("Sui"),fe=oe(),C=i(()=>fe),we=i(()=>t.value.ownerLocks);O(()=>C.value.address,o=>{console.log("触发",o),o?(e.getOwnerVeNFT(o),e.getAccountWhaleBalance(o),e.getOwnerLockCetuss(o),e.getMyShare(o)):e.loginOut()},{immediate:!0});const E=i(()=>b.value.chainName?Le(b.value.chainName):{}),j=i(()=>b.value.chainName),{setIsShowSuccess:_,setIsShowRejected:A,setIsShowWaiting:g,setTransactionDesc:X,setTransactionTxid:M}=c,ae=async()=>{N.value=!0,g(!0),M(""),X(k("tips.converting",{from:`${P(r.value,9)} CETUS`,and:"to",to:`${P(r.value,9)} xCETUS`}));try{let o;const u=Ce(r.value,9);console.log(s.value,"===>venft_id.value");const x=await F.depositCetus(u,s.value);console.log(x,"payload==>");const U=await C.value.currentWallet.signAndExecuteTransactionBlock(x);if(o=E.value.handleTx(U),o&&o.hash){M(o.hash),g(!1),_(!0);const B={title:"Converted",desc:`Converted ${P(r.value,9)} xCETUS successfully`,hash:o.hash,tit:"Converted",icon:"icon-icon-Swap",tokenInfo:{tokena:"CETUS",numa:`- ${r.value}`,logoa:Z("/sui-image/WHALE-icon.png"),tokenb:"xCETUS",numb:`+ ${r.value}`,logob:Z("/sui-image/xWHALE-icon.png")}};j.value!=="Aptos"&&(B.res=o.res),E.value.showTransitionPending(B);const H=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getAccountWhaleBalance(C.value.address),e.getOwnerVeNFT(C.value.address),e.getOwnerLockCetuss(C.value.address),e.getMyShare(C.value.address)},3e3),N.value=!1}else g(!1),A(!0),N.value=!1;r.value=""}catch(o){g(!1),A(!0),N.value=!1,r.value="",console.log(o,"error===>")}},q=f(!0),Ne=f("0"),ze=async()=>{const o=Ce(r.value,9),u=await F.redeemNum(o,Number(I.value));m.value=J(u.amountOut,9),console.log("===>amount2222"),Ne.value=u.percent},Ke=async()=>{const o=Ce(m.value,9),u=await F.reverseRedeemNum(o,Number(I.value));console.log(u,"===>amount111"),r.value=J(u.amountOut,9),Ne.value=u.percent};O(()=>[r.value,I.value,q.value],([o,u,x])=>{console.log(o,"===>>>>>>>fromCoinAmount",typeof o),o&&u&&x&&Number(u)>=15&&ze(),!o&&x&&(m.value="")},{immediate:!0}),O(()=>[m.value,I.value,q.value],([o,u,x])=>{o&&u&&!x&&Number(u)>=15&&(Ke(),console.log(o,"===>toCoinAmount")),!o&&!x&&(r.value="")},{immediate:!0}),O(()=>[I.value,q.value],([o,u])=>{Number(o)>180?I.value="180":Number(o)<15?u?m.value="":r.value="":o||(u?r.value="":m.value="")},{immediate:!0});const Qe=()=>{q.value=!0,r.value=Se(new Fe(l.value!=="convert"?G.value:K.value).div(new Fe(2)).toString(),9)},Je=()=>{q.value=!0,r.value=l.value!=="convert"?Se(G.value,9):Se(K.value,9)},Ve=async()=>{N.value=!0,g(!0),M(""),X(k("tips.redeeming",{from:`${P(r.value,9)} xCETUS`,to:`${P(m.value,9)} CETUS`}));try{let o;const u=Ce(r.value,9);console.log(u.toString(),"538====>");const x=await F.getRedeemLockPayload(u,s.value,Number(I.value));console.log(x,"payload==>");const U=await C.value.currentWallet.signAndExecuteTransactionBlock(x);if(o=E.value.handleTx(U),o&&o.hash){M(o.hash),g(!1),_(!0);const B={title:"Redemption",desc:"Redemption transaction submitted successfully.",hash:o.hash,tit:"Vesting",icon:"icon-icon-Removed",tokenInfo:{tokena:"xCETUS",numa:`- ${r.value}`,logoa:Z("/sui-image/xWHALE-icon.png")}};j.value!=="Aptos"&&(B.res=o.res),E.value.showTransitionPending(B);const H=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getAccountWhaleBalance(C.value.address),e.getOwnerVeNFT(C.value.address),e.getOwnerLockCetuss(C.value.address),e.getMyShare(C.value.address)},3e3),N.value=!1}else g(!1),A(!0),N.value=!1;r.value="",m.value=""}catch(o){g(!1),A(!0),N.value=!1,r.value="",m.value="",console.log(o,"error===>")}};O(()=>[s.value,we.value,n.value,C.value.address],([o,u,x,U])=>{U&&(o&&e.getVeNFTDividendInfo(),o&&!Te(x)&&u&&u.length>0&&(console.log("执行了",u),e.getAvailableXCetus()))},{immediate:!0,deep:!0});const Ze=async o=>{N.value=!0,g(!0),M(""),X("");try{let u;console.log(o.id,"==>vItem.id");const x=await F.getCancelRedeemPayload(o.id,s.value);console.log(x,"payload==>");const U=await C.value.currentWallet.signAndExecuteTransactionBlock(x);if(u=E.value.handleTx(U),u&&u.hash){M(u.hash),g(!1),_(!0);const B={title:"Cancelled Redemption",desc:"Cancelled redemption successfully.",hash:u.hash,tit:"Cancelled Redemption",icon:"icon-a-icon-Shutdown",tokenInfo:{tokena:"xCETUS",numa:`+ ${J(o.xcetus_amount,9)}`,logoa:Z("/sui-image/xWHALE-icon.png")}};j.value!=="Aptos"&&(B.res=u.res),E.value.showTransitionPending(B);const H=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getOwnerVeNFT(C.value.address),e.getOwnerLockCetuss(C.value.address),N.value=!1},3e3)}else g(!1),A(!0),N.value=!1;r.value="",m.value=""}catch(u){g(!1),A(!0),N.value=!1,r.value="",m.value="",e.setClaimLoading(""),console.log(u,"error===>")}},et=f({}),tt=()=>{console.log("倒计时结束"),e.getOwnerLockCetuss(C.value.address)},nt=async o=>{console.log(o,"vItem===>"),N.value=!0,g(!0),M(""),X(`${k("tips.claimingPendingYield")} ${P(J(o.cetus_amount,9),9)} CETUS`);try{let u;const x=await F.getRedeemPayload(o.id,s.value);console.log(x,"payload==>");const U=await C.value.currentWallet.signAndExecuteTransactionBlock(x);if(u=E.value.handleTx(U),u&&u.hash){M(u.hash),g(!1),_(!0);const B={title:"Claimed",desc:`Claimed ${P(J(o.cetus_amount,9),9)} CETUS successfully.`,hash:u.hash,tit:"CETUS Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:"CETUS",numa:`+ ${J(o.cetus_amount,9)}`,logoa:Z("/sui-image/WHALE-icon.png")}};j.value!=="Aptos"&&(B.res=u.res),E.value.showTransitionPending(B);const H=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getOwnerLockCetuss(C.value.address),e.getAccountWhaleBalance(C.value.address),e.getOwnerVeNFT(C.value.address),e.getMyShare(C.value.address),e.getAvailableXCetus(),N.value=!1},3e3)}else g(!1),A(!0),N.value=!1;r.value="",m.value=""}catch(u){g(!1),A(!0),N.value=!1,r.value="",m.value="",e.setClaimLoading(""),console.log(u,"error===>")}},Ae=f(!1),at=()=>{!localStorage.getItem(`notRemind${C.value.address}`)&&ne.value=="Convert"?Ae.value=!0:ne.value=="Redeem"?Ve():ae()},ot=()=>{Ae.value=!1,ae()},ie=i(()=>t.value.pendingCoinInfo),re=i(()=>t.value.pendingAmount),be=f(!1);return{clickModalConvert:ot,openConfirmModal:Ae,validateInput:()=>{I.value&&(I.value=I.value.replace(/[^\d]/g,""),I.value.charAt(0)==="0"&&(I.value=I.value.slice(1)))},countDown:tt,value:h,change:p,clickExchange:xe,fromCoinAmount:r,toCoinAmount:m,showCoinSelect:v,headSwitchValue:l,headSwitchChange:_e,vestingDateList:R,vestingParameter:I,vestingTab:Q,holderList:le,lockupList:se,leaderboardList:$e,whaleBalance:K,depositCetus:ae,btnText:ne,loading:N,redeemRatio:Ne,halfBalanne:Qe,maxBalanne:Je,xWhaleBalance:he,availableXwhale:G,redeemingXwhale:Ie,withdrawWhale:Ve,ownerLocks:we,cancelRedeemPayload:Ze,holderInfo:et,btnDisabled:pe,fixedFromCoin:q,walletStore:fe,claimWhale:nt,wallet:C,depositOrWithdraw:at,pendingAmount:re,claimPendingYield:async()=>{be.value=!0,g(!0),M(""),X(`${k("tips.claimingPendingYield")} ${re.value} ${ie.value.symbol}`),console.log(`${k("tips.claimingPendingYield")} ${re.value} ${ie.value.symbol}`,"dsadas");try{let o;const u=await F.getRedeemDividendV2Payload(s.value);console.log(u,"payload==>");const x=await C.value.currentWallet.signAndExecuteTransactionBlock(u);if(o=E.value.handleTx(x),o&&o.hash){M(o.hash),g(!1),_(!0);const U={title:"Claim",desc:`Claimed ${re.value} ${ie.value.symbol} successfully.`,hash:o.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:ie.value.symbol,numa:`+ ${re.value}`,logoa:ie.value.logo_url}};j.value!=="Aptos"&&(U.res=o.res),E.value.showTransitionPending(U);const B=await E.value.watchTransaction(U);console.log("0221###swap###transitionStatus####",B),B&&setTimeout(()=>{e.getVeNFTDividendInfo(),be.value=!1},3e3),e.getOwnerLockCetuss(C.value.address)}else g(!1),A(!0),be.value=!1,N.value=!1}catch(o){g(!1),A(!0),be.value=!1,console.log(o,"error===>")}},inputBlur:()=>{Number(I.value)<15&&(I.value="15")},getNextEpoch:()=>{e.getDividendManager()}}}});const ve=e=>(ee("data-v-821c97a6"),e=e(),te(),e),zn={class:"dashboard-all"},Kn={class:"dashboard-content"},Qn={class:"content-left"},Jn={key:0,class:"vesting"},Zn=ve(()=>a("p",null,"Vesting",-1)),ea={class:"content-right"},ta={key:0,class:"card-container"},na={class:"card-item"},aa={class:"card-item"},oa={class:"exchange"},la=ve(()=>a("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),sa=[la],ia={key:1,class:"card-redeem"},ra={class:"card-item"},ua={class:"vesting-duration"},da=ve(()=>a("p",null,"Vesting duration",-1)),ca={class:"vesting-content"},ma={class:"vesting-left"},va={class:"value-days"},ga=ve(()=>a("span",null,"days",-1)),ha={class:"vesting-right"},pa=["onClick"],_a={class:"card-item"},fa={class:"redeem-ratio"},wa=ve(()=>a("span",null,"Redeem ratio",-1));function ba(e,t,s,n,$,S){const c=lt,b=en,T=Cn,h=ht,p=Un,r=gt,m=de,v=qn;return d(),w("div",zn,[W(c,{title:"Dashboard","total-xwhale":e.xWhaleBalance,"available-xwhale":e.availableXwhale,"redeeming-xwhale":e.redeemingXwhale},null,8,["total-xwhale","available-xwhale","redeeming-xwhale"]),a("div",Kn,[a("div",Qn,[W(b,{"holder-info":e.holderInfo,"pending-amount":e.pendingAmount,"claim-loading":e.claimLoading,onClaimPendingYield:e.claimPendingYield,onGetNextEpoch:e.getNextEpoch},null,8,["holder-info","pending-amount","claim-loading","onClaimPendingYield","onGetNextEpoch"]),e.ownerLocks&&e.ownerLocks.length>0?(d(),w("div",Jn,[Zn,(d(!0),w(Be,null,Re(e.ownerLocks,l=>(d(),L(T,{key:l,"v-item":l,loading:e.loading,onCountDown:e.countDown,onClaimWhale:e.claimWhale,onCancelRedeemPayload:e.cancelRedeemPayload},null,8,["v-item","loading","onCountDown","onClaimWhale","onCancelRedeemPayload"]))),128))])):V("",!0)]),a("div",ea,[W(h,{"head-switch-value":e.headSwitchValue,"left-text":"Get xCETUS","right-text":"Redeem CETUS",onHeadSwitchChange:t[0]||(t[0]=l=>{e.headSwitchChange(l)})},null,8,["head-switch-value"]),e.headSwitchValue=="convert"?(d(),w("div",ta,[a("div",na,[W(p,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[1]||(t[1]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"CETUS","whale-direction":"From",balance:e.whaleBalance,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[2]||(t[2]=l=>{e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),a("div",aa,[W(p,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[3]||(t[3]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"To",balance:e.availableXwhale,onOnInput:t[4]||(t[4]=l=>{e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance"])]),a("img",{class:ye(e.change?"gang animationex":"gang"),src:ft,alt:""},null,2),a("div",oa,[(d(),w("svg",{class:ye(e.change?"icon animationex":"icon"),"aria-hidden":"true"},sa,2))])])):(d(),w("div",ia,[a("div",ra,[W(p,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[5]||(t[5]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"From",balance:e.availableXwhale,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[6]||(t[6]=l=>{e.fixedFromCoin=!0,e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),a("div",ua,[da,a("div",ca,[a("div",ma,[a("div",va,[Xe(a("input",{"onUpdate:modelValue":t[7]||(t[7]=l=>e.vestingParameter=l),onInput:t[8]||(t[8]=(...l)=>e.validateInput&&e.validateInput(...l)),onBlur:t[9]||(t[9]=(...l)=>e.inputBlur&&e.inputBlur(...l))},null,544),[[vt,e.vestingParameter]])]),ga]),a("div",ha,[(d(!0),w(Be,null,Re(e.vestingDateList,l=>(d(),w("div",{key:l.time,class:ye(["box-table",{"box-table-active":l.num===Number(e.vestingParameter)}]),onClick:k=>e.vestingTab(l.num)},y(l.time),11,pa))),128))])]),W(r,{value:e.vestingParameter,"onUpdate:value":t[10]||(t[10]=l=>e.vestingParameter=l),max:180,min:15},null,8,["value"])]),a("div",_a,[W(p,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[11]||(t[11]=l=>e.toCoinAmount=l),"input-value":e.toCoinAmount,"coin-symbol":"CETUS","whale-direction":"To",balance:e.whaleBalance,onOnInput:t[12]||(t[12]=l=>{e.fixedFromCoin=!1,e.toCoinAmount=l})},null,8,["modelValue","input-value","balance"])]),a("div",fa,[wa,a("p",null,y(e.redeemRatio)+"%",1)])])),e.wallet&&e.wallet.address?(d(),L(m,{key:2,class:"big-btn",loading:e.loading,disabled:e.btnDisabled,onClick:e.depositOrWithdraw},{default:Y(()=>[a("span",null,y(e.btnText),1)]),_:1},8,["loading","disabled","onClick"])):(d(),L(m,{key:3,class:"big-btn",onClick:t[13]||(t[13]=l=>e.walletStore.setIsShowWalletModal(!0))},{default:Y(()=>[a("span",null,y(e.$t("button.connectWallet")),1)]),_:1}))])]),e.openConfirmModal?(d(),L(v,{key:0,onClickConvert:e.clickModalConvert,onClose:t[14]||(t[14]=()=>e.openConfirmModal=!e.openConfirmModal)},null,8,["onClickConvert"])):V("",!0)])}const Ha=z(Gn,[["render",ba],["__scopeId","data-v-821c97a6"]]);export{Ha as default};
