import{a as W,q as ye,o as u,f as _,F as I,s as ee,x as Y,h as e,t as ie,v as y,u as h,e as K,r as p,m as N,c as M,w as j,i as D,j as V,Y as Se,B as ce,p as se,k as te,D as de,z as Ce,K as De,W as Le,I as xe,L as Re,H as Oe,S as Ye}from"./entry.c708ef7e.js";import"./index.199bdb95.js";import{B as L,u as Pe,b as ue}from"./index.df8ba82f.js";import{a as Ae,c as Te,b as je,u as re}from"./pool.961328c5.js";/* empty css              *//* empty css              *//* empty css              */import{_ as be}from"./icon-selected_3x.09e9a6f0.js";import{_ as Ee}from"./coin-pair-name.e8f9b1c8.js";import{D as r}from"./decimal.0bdeb344.js";import{N as Be}from"./no-data.823abde6.js";const Fe={key:0,class:"claim-list"},qe={class:"left"},He={alt:""},ze={class:"right"},Me=W({__name:"claim-list",props:{myClaimList:{type:Object,default:()=>[]}},setup(o){return(b,v)=>{const w=ye("image");return o.myClaimList&&o.myClaimList.length>0?(u(),_("div",Fe,[(u(!0),_(I,null,ee(o.myClaimList,i=>(u(),_("div",{key:i,class:"claim-item"},[e("div",qe,[ie(e("img",He,null,512),[[w,i.logo_url]]),e("span",null,y(i.symbol),1)]),e("div",ze,[e("span",null,y(h(L)(i.amount,i.decimals,!0,!1,!1)),1),e("span",null,y(h(L)(i.amountUSD,2,!1,!1)),1)])]))),128))])):Y("",!0)}}});const ke=K(Me,[["__scopeId","data-v-fd55443f"]]),B=p(!1),z=p(!1),$e=Ae(),{setIsShowSuccess:Ve,setIsShowRejected:pe,setIsShowWaiting:Q,setTransactionDesc:We,setTransactionTxid:we}=$e,Ke=Te("Sui"),X=je("Sui"),Ze=Pe(),ge=N(()=>Ze),Ne=re(),Ge=N(()=>Ne),Je=N(()=>$e),Qe=async o=>{z.value=!0;try{const b=[],v=[];o.forEach(c=>{const P=c.rewarderInfo.filter(U=>U.emissionsEveryDay>0).map(U=>U.coinAddress);c.positionSource=="clmm"?b.push({pool_id:c.pool,pos_id:c.pos_object_id,collect_fee:!0,rewarder_coin_types:P,coinTypeA:c.coin_type_a,coinTypeB:c.coin_type_b}):v.push({pool_id:c.pool_id,position_nft_id:c.id,clmm_pool_id:c.clmm_pool_id,collect_fee:!0,collect_frams_rewarder:!1,clmm_rewarder_types:P,coinTypeA:c.coinTypeA,coinTypeB:c.coinTypeB})}),we(""),We("Claim Yield"),Q(!0);const w=await Ke.batchHarvestAndClmmFee(v,b),i=await X.signAndExecuteTransactionBlock(ge.value.currentWallet,w.txb,w.payloadParams),C=X.handleTx(i);if(C&&C.hash){we(C.hash),Q(!1),Ve(!0);const c={title:"Claim",desc:"Claim Yield",hash:C.hash};c.res=C.res,X.showTransitionPending(c),await X.watchTransaction(c)&&setTimeout(()=>{Ne.getMyPositons(ge.value.address,Ge.value.poolsObj,Je.value.chainName)},1e3)}else Q(!1),pe(!0);z.value=!1,B.value=!1}catch(b){z.value=!1,Q(!1),pe(!0),B.value=!1,console.log("batchHarvestAndClmmFee error:",b)}},_e=o=>(se("data-v-9942617d"),o=o(),te(),o),Xe={class:"claim-yield-content"},Ie={class:"total-claim"},es=_e(()=>e("div",null,"Total Claim",-1)),ss={class:"total-claim-usd"},ts=_e(()=>e("svg",{"aria-hidden":"true",class:"back-icon"},[e("use",{"xlink:href":"#icon-icon-back"})],-1)),as=_e(()=>e("span",null,"Back",-1)),ls=[ts,as],os=W({__name:"claim-yield",props:{pendingYield:{type:Number,default:0},myClaimList:{type:Object,default:()=>[]},myClaimPositionList:{type:Object,default:()=>[]}},setup(o){return(b,v)=>{const w=ce;return u(),M(h(Se),{class:"new-modal-have-btn",title:"Claim Yield",visible:!0,footer:null,width:"440px",onCancel:v[2]||(v[2]=i=>b.$emit("close"))},{default:j(()=>[e("div",Xe,[e("div",Ie,[es,e("div",ss,y(o.pendingYield>0&&o.pendingYield<.01?"<$0.01":`$${h(ue)(o.pendingYield,2)}`),1)]),D(ke,{"my-claim-list":o.myClaimList},null,8,["my-claim-list"]),e("div",{class:"choose-amount",onClick:v[0]||(v[0]=i=>b.$emit("chooseAmount"))},ls),D(w,{class:"confirm-btn modal-bottom-btn",loading:h(z),onClick:v[1]||(v[1]=i=>h(Qe)(o.myClaimPositionList))},{default:j(()=>[V("Confirm")]),_:1},8,["loading"])])]),_:1})}}});const ns=K(os,[["__scopeId","data-v-9942617d"]]),Ue=o=>(se("data-v-b3ccd801"),o=o(),te(),o),is={class:"fees-and-reward"},ds={key:0,class:"fees"},us={class:"fees-title"},cs=Ue(()=>e("div",null,"Fees",-1)),rs={alt:""},_s={class:"symbol"},vs={class:"amount"},ms={class:"amount-usd"},fs={key:1,class:"fees"},hs={class:"fees-title"},ps=Ue(()=>e("div",null,"Mining rewards",-1)),ws={alt:""},gs={class:"symbol"},ys={class:"amount"},Ss={class:"amount-usd"},bs=W({__name:"fees-and-reward",props:{pendingRewarderList:{type:Object,default:()=>[]},pendingFeesList:{type:Object,default:()=>[]},rewarderUsd:{type:String,default:""},feeOwedUsd:{type:String,default:""}},setup(o){return(b,v)=>{const w=ye("image");return u(),_("div",is,[o.feeOwedUsd&&o.feeOwedUsd>0?(u(),_("div",ds,[e("div",us,[cs,e("div",null,y(h(L)(o.feeOwedUsd,2,!1,!1)),1)]),(u(!0),_(I,null,ee(o.pendingFeesList,i=>(u(),_("div",{key:i,class:"fees-details"},[e("div",null,[ie(e("img",rs,null,512),[[w,i.logo_url]]),e("span",_s,y(i.symbol),1)]),e("div",null,[e("span",vs,y(h(L)(i.amount,i.decimals,!0,!1,!1)),1),e("span",ms,"("+y(h(L)(i.amountUSD,2,!1,!1))+")",1)])]))),128))])):Y("",!0),o.rewarderUsd&&o.rewarderUsd>0?(u(),_("div",fs,[e("div",hs,[ps,e("div",null,y(h(L)(o.rewarderUsd,2,!1,!1)),1)]),(u(!0),_(I,null,ee(o.pendingRewarderList,i=>(u(),_("div",{key:i,class:"fees-details"},[e("div",null,[ie(e("img",ws,null,512),[[w,i.logo_url]]),e("span",gs,y(i.symbol),1)]),e("div",null,[e("span",ys,y(h(L)(i.amount,i.decimals,!0,!1,!1)),1),e("span",Ss,"("+y(h(L)(i.amountUSD,2,!1,!1))+")",1)])]))),128))])):Y("",!0)])}}});const ks=K(bs,[["__scopeId","data-v-b3ccd801"]]),F=o=>(se("data-v-8f2f212b"),o=o(),te(),o),$s={class:"yield-details-box"},Ns={class:"yield-details"},Us={class:"total-claim"},Cs=F(()=>e("div",null,"Pending Yield",-1)),Ds={class:"total-claim-usd"},Ls={class:"position-detail"},xs={class:"position-detail-top"},Rs=F(()=>e("div",{class:"left"},"Position",-1)),Os={class:"right plus-switch plus-liquidity-switch"},Ys=F(()=>e("span",null,"Hide yield < ",-1)),Ps={class:"position-detail-bottom"},As={class:"item-top"},Ts={class:"left"},js={class:"bottom"},Es={class:"right"},Bs=["onClick"],Fs={key:0,src:be},qs={class:"item-bottom"},Hs=F(()=>e("div",{class:"left"}," Liquidity ",-1)),zs={class:"right"},Ms={key:0,class:"yield-amount"},Vs={key:1,class:"yield-amount-zero"},Ws={class:"select"},Ks={class:"all"},Zs=F(()=>e("span",null,"Select all",-1)),Gs={class:"amount-selected"},Js=F(()=>e("div",null,"Amount selected",-1)),Qs=W({__name:"yield-details",props:{positionShowList:{type:Object,default:()=>[]},isShowYiedlDetails:{type:Boolean,default:!1}},emits:["showClaimYiedl"],setup(o,{emit:b}){const v=p(!0),w=p(!0),i=b,C=o,c=p(.01),P=p(),U=p([]),le=re(),R=N(()=>le),k=N(()=>R.value.rewarderObj),O=N(()=>R.value.feeOwedObj),g=p([]),$=p("all"),q=p([]),Z=l=>{const a=[];g.value=[];let s=new r(0);const t=[];l.forEach(d=>{var A,T,ve,me,fe,he;const f=((A=k.value[d.tokenName])==null?void 0:A.pendingRewarder)||0,n=((T=O.value[d.tokenName])==null?void 0:T.feeOwed)||0,x=new r(isNaN(f)?0:f).add(new r(isNaN(n)?0:n)).toString();s=s.add(new r(isNaN(f)?0:f)).add(new r(isNaN(n)?0:n)),Number(x)>0&&t.push(d),v.value&&Number(x)>Number(c.value)&&a.push({...d,totalRewardUsd:x,pendingRewarderList:(ve=k.value[d.tokenName])==null?void 0:ve.pendingRewarderArr,pendingFeesList:(me=O.value[d.tokenName])==null?void 0:me.feesResult,rewarderUsd:f,feeOwedUsd:n}),v.value||a.push({...d,totalRewardUsd:x,pendingRewarderList:(fe=k.value[d.tokenName])==null?void 0:fe.pendingRewarderArr,pendingFeesList:(he=O.value[d.tokenName])==null?void 0:he.feesResult,rewarderUsd:f,feeOwedUsd:n})}),q.value=t,a.forEach(d=>{d.totalRewardUsd>0&&g.value.push(d.tokenName)}),v.value?g.value.length!==a.length?$.value="":$.value="all":g.value.length!==t.length?$.value="":$.value="all",w.value=!1,P.value=s,U.value=a.sort((d,f)=>f.totalRewardUsd-d.totalRewardUsd)},oe=N(()=>R.value.getPendingFeeSuccess),G=N(()=>R.value.getRewardSuccess);de(()=>[C.positionShowList,c.value,oe.value,G.value,v.value],([l,a,s,t])=>{l&&l.length>0&&s&&t&&Z(l)},{immediate:!0});const J=l=>{const a=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,4})?).*$");l.target.value=l.target.value.replace(a,"$1"),c.value=l.target.value},ne=()=>{(!c.value||c.value<.01)&&(c.value=.01)},H=l=>{const a=l.tokenName,s=g.value.indexOf(a);s>-1?g.value.splice(s,1):g.value.push(a),v.value?g.value.length!==U.value.length?$.value="":$.value="all":g.value.length!==q.value.length?$.value="":$.value="all"},E=()=>{$.value="all",U.value.forEach(l=>{!g.value.includes(l.tokenName)&&l.totalRewardUsd>0&&g.value.push(l.tokenName)})},S=N(()=>{let l=new r(0);return $.value=="all"?U.value.forEach(a=>{var d,f;const s=((d=k.value[a.tokenName])==null?void 0:d.pendingRewarder)||0,t=((f=O.value[a.tokenName])==null?void 0:f.feeOwed)||0;l=l.add(new r(isNaN(s)?0:s)).add(new r(isNaN(t)?0:t))}):g.value.forEach(a=>{var d,f;const s=((d=k.value[a])==null?void 0:d.pendingRewarder)||0,t=((f=O.value[a])==null?void 0:f.feeOwed)||0;l=l.add(new r(isNaN(s)?0:s)).add(new r(isNaN(t)?0:t))}),l.toString()}),m=()=>{const l=[];U.value.forEach(a=>{g.value.includes(a.tokenName)&&l.push(a)}),i("showClaimYiedl",l)};return(l,a)=>{const s=Le,t=xe,d=Re,f=ce;return u(),M(h(Se),{title:"Details",footer:null,visible:o.isShowYiedlDetails,width:"440px","wrap-class-name":"details-modal",class:"new-modal-have-btn",onCancel:a[2]||(a[2]=n=>l.$emit("close"))},{default:j(()=>[e("div",$s,[e("div",Ns,[e("div",Us,[Cs,e("div",Ds,[e("span",null,y(h(L)(P.value,2,!1,!1)),1)])]),e("div",Ls,[e("div",xs,[Rs,e("div",Os,[D(s,{class:"range-alerts-switch",checked:v.value,onClick:a[0]||(a[0]=()=>{v.value=!v.value,w.value=!1})},null,8,["checked"]),Ys,D(t,{value:`$${c.value}`,onChange:J,onBlur:ne},null,8,["value"])])]),e("div",Ps,[U.value&&U.value.length>0?(u(!0),_(I,{key:0},ee(U.value,n=>(u(),_("div",{key:n,class:"position-item"},[e("div",As,[e("div",Ts,[D(Ee,{"from-coin":n.needReverse?n.token_b:n.token_a,"to-coin":n.needReverse?n.token_a:n.token_b,"fee-tier":n.fee*1e3},null,8,["from-coin","to-coin","fee-tier"]),e("div",js,y(n.tokenName),1)]),e("div",Es,[e("div",{class:Ce(["radio",n.totalRewardUsd<=0?"radio-disable":""]),onClick:x=>n.totalRewardUsd>0?H(n):""},[($.value=="all"||g.value.includes(n.tokenName))&&n.totalRewardUsd>0?(u(),_("img",Fs)):Y("",!0)],10,Bs)])]),e("div",qs,[Hs,e("div",zs,[n.totalRewardUsd>0?(u(),_("div",Ms,[D(d,{placement:"bottomRight","overlay-class-name":"yield-amount-tooltip"},{title:j(()=>[D(ks,{"pending-fees-list":n.pendingFeesList,"pending-rewarder-list":n.pendingRewarderList,"rewarder-usd":n.rewarderUsd,"fee-owed-usd":n.feeOwedUsd},null,8,["pending-fees-list","pending-rewarder-list","rewarder-usd","fee-owed-usd"])]),default:j(()=>[V(y(h(L)(n.totalRewardUsd,2,!1,!1))+" ",1)]),_:2},1024)])):(u(),_("div",Vs,y(h(L)(n.totalRewardUsd,2,!1,!1)),1))])])]))),128)):(u(),M(Be,{key:1,"no-data-img":"/sui-image/img-no-Positions@2x.png",desc:"No Position Found"}))])])]),e("div",Ws,[e("div",Ks,[e("div",{class:"radio",onClick:E},[$.value=="all"?(u(),_("img",{key:0,src:be,onClick:a[1]||(a[1]=De(()=>{g.value=[],$.value=""},["stop"]))})):Y("",!0)]),Zs]),e("div",Gs,[Js,e("div",null,y(h(L)(S.value,2,!1,!1)),1)])]),D(f,{class:"claim-yield-btn modal-bottom-btn",disabled:S.value=="0",onClick:m},{default:j(()=>[V("Claim Yield")]),_:1},8,["disabled"])])]),_:1},8,["visible"])}}});const Xs=K(Qs,[["__scopeId","data-v-8f2f212b"]]),ae=o=>(se("data-v-758345d0"),o=o(),te(),o),Is={class:"total-info"},et={class:"total-liquidity"},st=ae(()=>e("span",{class:"total-liquidity-text"},"Total Liquidity",-1)),tt={key:0,class:"skeleton-box"},at={key:1,class:"total-liquidity-usd"},lt={class:"pending-yield"},ot=ae(()=>e("div",{class:"pending-yield-text"},"Pending Yield",-1)),nt={key:0,class:"skeleton-box"},it={key:1,class:"pending-yield-show-value"},dt={class:"pending-yield-value-box"},ut={key:0,class:"claim-list-box"},ct={class:"claim-list-content"},rt=ae(()=>e("use",{"xlink:href":"#icon-icon_expand"},null,-1)),_t=[rt],vt=ae(()=>e("use",{"xlink:href":"#icon-icon_expand"},null,-1)),mt=[vt],ft=W({__name:"total-position",setup(o){const b=p(!1),v=re(),w=N(()=>v),i=N(()=>w.value.rewarderObj),C=N(()=>w.value.feeOwedObj),c=N(()=>w.value.positionShowList),P=N(()=>w.value.myPositionsLoading),U=N(()=>w.value.getPendingFeeSuccess),le=N(()=>w.value.getRewardSuccess),R=p(0),k=p(0),O=p(!0),g=p([]),$=p([]),q=p([]),Z=S=>{let m=new r(0);const l=[];S.forEach(a=>{m=m.add(new r(isNaN(a.amountUSD)?0:a.amountUSD)),l.push(a.tokenName)}),g.value=l,R.value=m.toNumber()},oe=(S,m)=>{let l=new r(0);const a=[];g.value.forEach(t=>{var n,x,A,T;const d=((n=S[t])==null?void 0:n.pendingRewarder)||0,f=((x=m[t])==null?void 0:x.feeOwed)||0;l=l.add(new r(isNaN(d)?0:d)).add(new r(isNaN(f)?0:f)),(A=S[t])!=null&&A.pendingRewarderArr&&a.push(...S[t].pendingRewarderArr),(T=m[t])!=null&&T.feesResult&&a.push(...m[t].feesResult)});const s={};a.forEach(t=>{s[t.address]?s[t.address]={...t,amountUSD:new r(s[t.address].amountUSD).add(isNaN(t.amountUSD)?0:t.amountUSD).toString(),amount:new r(s[t.address].amount).add(isNaN(t.amountUSD)?0:t.amountUSD).toString()}:(s[t.address]={},s[t.address]={...t,amountUSD:new r(0).add(isNaN(t.amountUSD)?0:t.amountUSD).toString(),amount:new r(0).add(t.amount).toString()})}),q.value=Object.values(s).filter(t=>t.amount>0).sort((t,d)=>d.amountUSD-t.amountUSD),k.value=l.toNumber(),O.value=!1};de(()=>c.value,S=>{S&&S.length>0?Z(S):Z([])},{immediate:!0}),de(()=>[U.value,le.value,g.value,i.value,C.value],([S,m,l,a,s])=>{S&&m?oe(a,s):O.value=!0},{immediate:!0,deep:!0});const G=p(),J=p(),ne=S=>{b.value=!1,B.value=!0;let m=new r(0);const l=[],a={};S.forEach(s=>{var n,x,A,T;const t=s.tokenName,d=((n=i.value[t])==null?void 0:n.pendingRewarder)||0,f=((x=C.value[t])==null?void 0:x.feeOwed)||0;m=m.add(new r(d)).add(new r(f)),(A=i.value[t])!=null&&A.pendingRewarderArr&&l.push(...i.value[t].pendingRewarderArr),(T=C.value[t])!=null&&T.feesResult&&l.push(...C.value[t].feesResult)}),l.forEach(s=>{a[s.address]?a[s.address]={...s,amountUSD:new r(a[s.address].amountUSD).add(isNaN(s.amountUSD)?0:s.amountUSD).toString(),amount:new r(a[s.address].amount).add(isNaN(s.amountUSD)?0:s.amountUSD).toString()}:(a[s.address]={},a[s.address]={...s,amountUSD:new r(0).add(isNaN(s.amountUSD)?0:s.amountUSD).toString(),amount:new r(0).add(s.amount).toString()})}),G.value=m.toNumber(),$.value=Object.values(a).filter(s=>s.amount>0).sort((s,t)=>t.amountUSD-s.amountUSD),J.value=S},H=p(1),E=()=>{k.value>0&&(b.value=!0,H.value=H.value==1?2:1)};return(S,m)=>{const l=Ye,a=ce;return u(),_("div",Is,[e("div",et,[st,!R.value&&P.value?(u(),_("div",tt,[D(l,{class:"upgrade-text-skeleton",active:"",paragraph:!1})])):(u(),_("span",at,y(R.value>0&&R.value<.01?"<$0.01":`$${h(ue)(R.value,2)}`),1))]),e("div",lt,[ot,O.value?(u(),_("div",nt,[D(l,{class:"upgrade-text-skeleton",active:"",paragraph:!1})])):(u(),_("div",it,[e("div",dt,[e("span",{class:"pending-yield-usd",style:Oe(k.value<=0?{border:"none"}:{}),onClick:E},[V(y(k.value>0&&k.value<.01?"<$0.01":`$${h(ue)(k.value,2)}`)+" ",1),k.value>0?(u(),_("div",ut,[e("div",ct,[D(ke,{"my-claim-list":q.value},null,8,["my-claim-list"])])])):Y("",!0)],4),k.value>0?(u(),_("svg",{key:0,class:"icon route-icon pc-icon","aria-hidden":"true",onClick:E},_t)):Y("",!0),D(a,{class:"claim-all-btn",disabled:k.value<=0,loading:h(z),onClick:E},{default:j(()=>[V("Claim All")]),_:1},8,["disabled","loading"])]),k.value>0?(u(),_("svg",{key:0,class:"icon route-icon h5-icon","aria-hidden":"true",onClick:E},mt)):Y("",!0)]))]),h(B)?(u(),M(ns,{key:0,"pending-yield":G.value,"my-claim-list":$.value,"my-claim-position-list":J.value,onClose:m[0]||(m[0]=s=>B.value=!1),onChooseAmount:m[1]||(m[1]=()=>{B.value=!1,b.value=!0})},null,8,["pending-yield","my-claim-list","my-claim-position-list"])):Y("",!0),(u(),M(Xs,{key:H.value,"position-show-list":c.value,"is-show-yiedl-details":b.value,onClose:m[2]||(m[2]=()=>{b.value=!1}),onShowClaimYiedl:ne},null,8,["position-show-list","is-show-yiedl-details"]))])}}});const Ct=K(ft,[["__scopeId","data-v-758345d0"]]);export{Ct as T};
