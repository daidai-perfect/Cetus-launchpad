import{a8 as fe,a9 as me,r as l,Y as F,aa as ye,ab as Ce,ac as E,ad as D,Z as ee,ae as ke,u as W,af as be,ag as je,j as e,ah as J,ai as Se,aj as we,d as ue,$ as he,ak as ve,a1 as G,al as ge,f as y,a3 as Te,i as re,C as Y,am as q,an as Ae,y as k,ao as De,ap as Be,B as Z,V as U,aq as Le,ar as Ee,H as te,a0 as We,a2 as Me,as as Ie,N as Re,at as le,J as Fe,l as ce,au as Pe,w as Oe,av as ze,aw as de,ax as Ne}from"./index-7d27320c.js";import{c as H,L as Ue,u as He,b as Ye,a as _e,i as Ke}from"./useTokenMetadata-f8eacf68.js";function Ve(t){return me("MuiDialog",t)}const $e=fe("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),X=$e,Qe=l.createContext({}),Je=Qe,Xe=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Ge=F(ye,{name:"MuiDialog",slot:"Backdrop",overrides:(t,i)=>i.backdrop})({zIndex:-1}),qe=t=>{const{classes:i,scroll:o,maxWidth:a,fullWidth:c,fullScreen:n}=t,x={root:["root"],container:["container",`scroll${E(o)}`],paper:["paper",`paperScroll${E(o)}`,`paperWidth${E(String(a))}`,c&&"paperFullWidth",n&&"paperFullScreen"]};return Se(x,Ve,i)},Ze=F(Ce,{name:"MuiDialog",slot:"Root",overridesResolver:(t,i)=>i.root})({"@media print":{position:"absolute !important"}}),et=F("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,i)=>{const{ownerState:o}=t;return[i.container,i[`scroll${E(o.scroll)}`]]}})(({ownerState:t})=>D({height:"100%","@media print":{height:"auto"},outline:0},t.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},t.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),tt=F(ee,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,i)=>{const{ownerState:o}=t;return[i.paper,i[`scrollPaper${E(o.scroll)}`],i[`paperWidth${E(String(o.maxWidth))}`],o.fullWidth&&i.paperFullWidth,o.fullScreen&&i.paperFullScreen]}})(({theme:t,ownerState:i})=>D({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},i.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},i.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!i.maxWidth&&{maxWidth:"calc(100% - 64px)"},i.maxWidth==="xs"&&{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${X.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},i.maxWidth&&i.maxWidth!=="xs"&&{maxWidth:`${t.breakpoints.values[i.maxWidth]}${t.breakpoints.unit}`,[`&.${X.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[i.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},i.fullWidth&&{width:"calc(100% - 64px)"},i.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${X.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),st=l.forwardRef(function(i,o){const a=ke({props:i,name:"MuiDialog"}),c=W(),n={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{"aria-describedby":x,"aria-labelledby":g,BackdropComponent:d,BackdropProps:p,children:r,className:C,disableEscapeKeyDown:j=!1,fullScreen:f=!1,fullWidth:s=!1,maxWidth:b="sm",onBackdropClick:u,onClose:m,open:w,PaperComponent:P=ee,PaperProps:S={},scroll:_="paper",TransitionComponent:O=we,transitionDuration:z=n,TransitionProps:K}=a,V=be(a,Xe),B=D({},a,{disableEscapeKeyDown:j,fullScreen:f,fullWidth:s,maxWidth:b,scroll:_}),v=qe(B),L=l.useRef(),M=T=>{L.current=T.target===T.currentTarget},$=T=>{L.current&&(L.current=null,u&&u(T),m&&m(T,"backdropClick"))},I=je(g),Q=l.useMemo(()=>({titleId:I}),[I]);return e.jsx(Ze,D({className:J(v.root,C),closeAfterTransition:!0,components:{Backdrop:Ge},componentsProps:{backdrop:D({transitionDuration:z,as:d},p)},disableEscapeKeyDown:j,onClose:m,open:w,ref:o,onClick:$,ownerState:B},V,{children:e.jsx(O,D({appear:!0,in:w,timeout:z,role:"presentation"},K,{children:e.jsx(et,{className:J(v.container),onMouseDown:M,ownerState:B,children:e.jsx(tt,D({as:P,elevation:24,role:"dialog","aria-describedby":x,"aria-labelledby":I},S,{className:J(v.paper,S.className),ownerState:B,children:e.jsx(Je.Provider,{value:Q,children:r})}))})}))}))}),it=st,nt="/assets/convert-bg-811d2046.png",ot="/assets/h5-convert-bg-463e67cb.png",at="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAm1JREFUWEftlc1qFEEQx6u644YcVDx4Fzz7AUKIiniIYm6u+BTiURbZme6d3pnp2XtA9DWUmIhBvIlZTXwEPepFiCYXk+mSEWYzDPOhaXeZw8xturqqfv2v6mqEhn/YcD5oAW0r1CrYKmirgK3/X/WgUqun5ub2bxOZcwbgZFFSBhBL6QaJbaj1MjNwzQDwOkBPuqpqTy1gAsf5zwcGYKEqUBYwCHTfAMzXwSV2a8AwHN2PyVyoS5YF9KPoOhi4SUSdOj9rwCDQj8rKmk2eBcxDERGG4eiuAbqct1kDDgNd2SNpwjLAKrj/UmIbwATO17oLhJfSg3Ck7ZjwSvo/MwWR48bAcbbSxEVwgLQ9cN01P4y8mQIWwWmtu3FGuRQOESlblakryADHUjrrWeXCcHTPAF086k/8KET/ZQL3Z05m+nqqgAxgN44PniilfiWJlVKM8063Ci7ZFwRaJkO86uanh6sd1JWXBOmTJ8TzNFgQjFYMmKXJKGHwYeA466ly6fpwqJcZg0VjYOx57hurl6QKkCO9FkK8OwLUjycvTglc3eDO2+0UZLDlue5GGtT3oxuIlCiz43nu23+FKdpvBcgAvwnRf5YvYT6R70dXCelOfp0BHEjp6qmVOAnMkV4JId6XJQnDcCkmXCmyzwQQEQ/BwKaU/XFWSaVUh/POLQO0WAY/E8DJOED6isS/ENEuIpwFoPMG4HRV+WYKeJwL0QIeR7WsT+MVRKTvAyFWpzpmbFRkgDtSOi8aCYiIewvzJ572er39RgEi0g8C+EyHZzaVerhXV4Hap64uwLTtLaCtwq2CrYK2Ctj6N74HfwOmIT846O+GRQAAAABJRU5ErkJggg==",pe=50;function rt(){const{address:t}=ue(),[i,o]=l.useState(!0),[a,c]=l.useState(!1),[n,x]=l.useState(!1),[g,d]=l.useState(void 0),[p,r]=l.useState([]);async function C(f){console.log("fetchMyTicketList query: ",f),f.cursor.length===0?o(!0):c(!0),x(!0),f.limit||(f.limit=pe);try{const s=await H.getOwnerTicketList(f);s.length>0&&d(s[s.length-1]);let b=[];f.cursor.length===0?b=[...s]:b=[...p,...s],b.sort((u,m)=>u.accepted_ts>0?m.accepted_ts-u.accepted_ts:m.created_ts-u.created_ts),r(b),o(!1),c(!1),x(s.length===pe)}catch(s){console.log("fetchMyTicketList error ",s),o(!1),c(!1)}finally{t||r([])}}return l.useEffect(()=>{t||r([])},[t]),{refreshLoading:i,loadMoreLoading:a,setRefreshLoading:o,hasMoreData:n,myTicketList:p,fetchMyTicketList:C,refreshList:f=>{t&&C({owner:t,cursor:f?[]:g?[g.id]:[]})}}}const lt=t=>{const{openConvertHistory:i,onClose:o}=t,{isMobile:a}=he(),{myTicketList:c,refreshLoading:n,loadMoreLoading:x,hasMoreData:g,refreshList:d}=rt();l.useEffect(()=>{i&&d(!0)},[i]);const p=[{label:"Tick",key:"tick",render:r=>e.jsx(y,{fontSize:"14px",style:{padding:"4px 0"},children:r.tick},"tick")},{label:"Amount",key:"amount",align:"right",render:r=>e.jsx(y,{textAlign:"right",fontSize:"14px",style:{padding:"4px 0"},children:Y(r.amount)},"amount")},{label:"Status",key:"status",align:"right",render:r=>r.status===q.TICKET_STATUS_CREATED?e.jsxs("div",{style:{display:"flex",position:"relative",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{style:{position:"absolute",left:"30px",top:"9px"},children:e.jsx(Ae,{size:"15px"})}),e.jsx("div",{}),e.jsx(y,{fontSize:"14px",style:{padding:"4px 0"},children:"Converting"})]},"status"):r.status===q.TICKET_STATUS_REJECTED?e.jsx(y,{fontSize:"14px",style:{padding:"4px 0"},textAlign:"right",children:"Rejected"},"status"):e.jsx(y,{fontSize:"14px",style:{padding:"4px 0"},textAlign:"right",children:"Confirmed"},"status")},{label:a?"Time":e.jsx("div",{children:"Time      "}),key:"time",align:"right",render:r=>e.jsxs(k,{style:{display:"flex",flexDirection:"row",justifyContent:"end",alignItems:"center"},children:[e.jsx(y,{textAlign:"right",fontSize:"14px",children:De(r.show_ts,!0,"YMD-HMS")}),e.jsx("div",{style:{width:"16px"}}),e.jsx(Ue,{link:re("object",r.id),norIcon:at})]},"time")}];return e.jsx(ve,{open:i,onClose:o,closeIcon:e.jsx(G,{children:e.jsx(ge,{})}),center:!0,closeOnOverlayClick:!0,classNames:{modal:"custom-scrollbar"},children:e.jsxs("div",{style:{maxHeight:"600px"},children:[e.jsx(y,{fontSize:"20px",children:" Convert history"}),e.jsx("div",{style:{height:"16px"}}),e.jsx(Te,{columns:p,data:c,loadMoreLoading:x,refreshLoading:n,onRowClick:r=>{window.open(re("object",r.id))},showNoMore:!g,onLoadMore:()=>{g&&!n&&!x&&d(!1)}})]})})},xe=t=>{var r,C,j;const i=W(),{inputText:o,onInputChange:a,isCoinType:c,balance:n,name:x,icon:g,label:d,onSelectClick:p}=t;return e.jsxs(k,{style:{width:"100%",border:"1px solid #373737",borderRadius:"8px",paddingTop:"16px",background:"#232526"},children:[e.jsxs(k,{style:{display:"flex",flexDirection:"row",paddingRight:"16px",justifyContent:"space-between"},children:[e.jsx(Be,{variant:"standard",value:o,placeholder:"0.0",onWheel:f=>f.target.blur(),onChange:f=>{a(f.target.value)},InputProps:{disableUnderline:!0,style:{height:"60px",paddingLeft:"16px",border:"none",boxShadow:"none"},inputProps:{style:{fontSize:"28px"}}}}),e.jsx("div",{style:{width:"10px"}}),e.jsx(ct,{isCoinType:c,name:x,label:d,icon:g,onSelectClick:p})]}),e.jsxs(k,{style:{height:"48px",marginTop:"15px",background:"#2D2F30",paddingLeft:"16px",paddingRight:"16px",display:"flex",flexDirection:"row",borderRadius:"8px",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs(k,{style:{display:"flex",flexDirection:"row"},children:[e.jsx(y,{fontSize:"16px",color:(r=i.palette.text)==null?void 0:r.secondary,children:"Balance"}),e.jsx("div",{className:"w-[8px]"}),e.jsx(y,{fontSize:"16px",color:(C=i.palette.text)==null?void 0:C.primary,children:Y(n)})]}),!c&&e.jsx(Z,{variant:"outlined",sx:{width:"40px",minWidth:"40px",height:"22px",fontSize:"12px",display:"flex",justifyContent:"center",alignItems:"center",textTransform:"none",color:(j=i.palette.text)==null?void 0:j.primary},disabled:U(n).equals(0),onClick:()=>{a(n)},children:"Max"})]})]})},ct=t=>{var r,C;const{name:i,label:o,isCoinType:a,onSelectClick:c,icon:n}=t,x=W(),[g,d]=l.useState(!1),{isMobile:p}=he();return e.jsxs(k,{style:{backgroundColor:a?"#1D1E1F":g?"#232526":"#1D1E1F",borderRadius:"8px",height:"60px",width:"unset",display:"flex",flexDirection:"row",paddingLeft:p?"4px":"16px",paddingRight:p?"4px":"16px",justifyContent:"center",alignItems:"center",border:"1px solid #373737",cursor:a?"inherit":"pointer"},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>{!a&&c&&c()},children:[n&&e.jsx("div",{className:"w-[28px] h-[28px]",children:e.jsx("img",{src:n,className:"w-[28px] h-[28px]"})}),e.jsxs(k,{style:{display:"flex",marginLeft:a?"8px":"0px",flexDirection:"column",justifyContent:"center"},children:[e.jsx(y,{fontSize:"18px",color:(r=x.palette.text)==null?void 0:r.primary,children:i}),!a&&e.jsx(y,{fontSize:"14px",color:(C=x.palette.text)==null?void 0:C.secondary,style:{whiteSpace:"nowrap"},children:o})]}),!a&&!p&&e.jsx("div",{className:"w-[10px]"}),!a&&e.jsx(Le,{direction:Ee.bottom})]})},dt=F(ee)(({theme:t})=>({...t.typography.body2,paddingLeft:12,paddingRight:12,height:48,borderRadius:20})),pt=t=>{var b;const i=W(),{selectBridgeId:o,openSelectBridegDialog:a,handleCallBack:c,bridgeList:n}=t,[x,g]=l.useState(""),[d,p]=l.useState([]),{fetchUserTickBalance:r,tickBalanceList:C,getTickBalanceValue:j}=te();l.useEffect(()=>{g(""),f(""),s(),a&&r(n.map(u=>u.tick))},[a]),l.useEffect(()=>{s()},[C||n]);const f=u=>{u.length===0?p([...n]):p([...n.filter(m=>m.tick.includes(u))])},s=()=>{const u=[...n];u.sort((m,w)=>m.id===o?-1:w.id===o?1:j(w.tick,w.p)-j(m.tick,m.p)),p([...u])};return e.jsxs(it,{open:a,fullWidth:!0,style:{overflow:"hidden"},PaperProps:{style:{overflow:"hidden"}},onClose:()=>{c()},children:[e.jsxs(G,{"aria-label":"openSelectTokenDialog",onClick:()=>{c()},sx:{position:"absolute",right:8,top:8},children:[" ",e.jsx(ge,{})," "]}),e.jsxs(k,{style:{paddingLeft:"16px",paddingTop:"12px",paddingRight:"16px"},children:[e.jsx(y,{fontSize:"20px",children:"Select"}),e.jsx(y,{fontSize:"14px",color:(b=i.palette.text)==null?void 0:b.secondary,children:"Only ticks in the supported list are displayed below."}),e.jsxs(dt,{className:"w-[100%] flex items-center mt-[20px]",children:[e.jsx(We,{sx:{ml:1,flex:1},placeholder:"Search ticks here",value:x,onBlur:()=>{},onChange:u=>{g(u.target.value),f(u.target.value)}}),e.jsx(G,{type:"button",sx:{p:"10px"},onClick:()=>{},children:e.jsx("img",{style:{width:"20px",height:"20px"},src:Me,alt:""})})]}),e.jsx("div",{style:{height:"8px"}}),e.jsx(Ie,{style:{maxHeight:"500px"},children:d.map((u,m)=>e.jsx(xt,{info:u,handleCallBack:c,selectBridgeId:o},m))}),d.length===0&&e.jsx(Re,{})]})]})},xt=t=>{var p;const i=W(),{getTickBalanceValue:o}=te(),[a,c]=l.useState(!1),{info:n,selectBridgeId:x,handleCallBack:g}=t,d=n.id===x;return e.jsxs(k,{style:{backgroundColor:a?"#232526":"#212224",height:"68px",width:"100%",paddingLeft:"16px",paddingRight:"16px",border:d?"1px solid #6E41FF":a?"1px solid #373737":"1px solid transparent",borderRadius:"8px",marginBottom:"8px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:()=>{g(n)},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[e.jsx(k,{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:e.jsxs(k,{style:{display:"flex",marginLeft:"8px",flexDirection:"column",justifyContent:"center"},children:[e.jsx(y,{children:n.tick}),e.jsx(y,{color:(p=i.palette.text)==null?void 0:p.secondary,children:n.p})]})}),e.jsx(y,{children:Y(o(n.tick,n.p))})]})},gt=()=>{var se,ie,ne,oe,ae;const t=W(),i=ue(),{bridgeList:o,feeAmount:a}=He(!0,[le.BRIDGE_STATUS_ONLY_ALLOW_I2C,le.BRIDGE_STATUS_ONLY_ALLOW_I2C]),c=window.innerWidth<=750,{account:n,connected:x,address:g}=i,[d,p]=l.useState(""),[r,C]=l.useState(""),[j,f]=l.useState(!0),[s,b]=l.useState(o.length>0?{...o[0]}:void 0),[u,m]=l.useState(!1),{getTickBalanceValue:w,fetchUserTickBalance:P}=te(),{metaData:S}=Ye(s==null?void 0:s.coin),[_,O]=l.useState(!1),{TransactionModalComps:z,signAndExecuteTransactionBlock:K,showSumbitLoading:V}=Fe(),{coinBalanceValue:B,fetchUserCoinBalance:v}=_e(s==null?void 0:s.coin),L=1;l.useEffect(()=>{s===void 0&&o.length>0&&b({...o[0]})},[o]),l.useEffect(()=>{s&&g&&(P([s.tick]),v())},[s,g]),l.useEffect(()=>{j?C(d?U(d).mul(L).toString():""):p(r?U(r).div(L).toString():"")},[d,r]);const M=w((s==null?void 0:s.tick)||"",(s==null?void 0:s.p)||""),$=l.useMemo(()=>d&&s?!U(d).lessThanOrEqualTo(M):!0,[d,M,s]),I=async(h,A)=>{if(h&&h.events){const N=H.getTicketIdByTicketCreatedEvent(h.events);if(N){const R=await H.getTicket(N);if(console.log("ticketInfo: ",{status:R==null?void 0:R.status,pollingCount:A}),R&&R.status===q.TICKET_STATUS_ACCEPTED)return v(),"Convert successful"}}return A===5&&setTimeout(()=>{v()},2e3),null},Q=async()=>{s&&await K({transactionConfig:{initialMsg:"Convert submited",successMsg:" Convert successful",pollingRepeat:5,queryState:async(h,A)=>await I(h,A)},buildPayload:async function(h){let A=[];a>0&&(A=await ze.getOwnerCoinAssets(g,de));const N=Ne.buildCoinForAmount(h,A,BigInt(a),de,!1);return h=H.crossInscriptionToCoin(s,d,N.targetCoin,h),h}})},T={display:"block",width:"100%",height:"100px",background:`url(${c?ot:nt}) 50% no-repeat`,backgroundSize:"cover",textAlign:"center",borderRadius:"20px",lineHeight:"100px",color:(se=t.palette.text)==null?void 0:se.primary,fontSize:"40px"};return e.jsxs("div",{className:"w-full flex flex-col items-center justify-center gap-4 mt-[50px]  h5-mint-page",children:[e.jsx(k,{className:"w-[1000px] rounded-[20px] pb-[60px] h5-mint",children:e.jsxs(k,{style:{width:"100%",display:"flex",flexDirection:"column",backgroundColor:(ie=t.palette.mintBg)==null?void 0:ie.main,minHeight:"120px",borderRadius:"20px",alignItems:"center",justifyContent:"center",border:`1px solid ${(ne=t.palette.borderColor)==null?void 0:ne.main}`},children:[e.jsx(y,{sx:{...T},children:"Convert"}),e.jsxs(k,{style:{width:"100% !important",position:"relative",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},sx:{"@media (max-width:750px)":{width:"90% !important"}},children:[e.jsx("div",{style:{height:"40px"}}),e.jsx(xe,{inputText:d,isCoinType:!1,balance:M.toString(),name:(s==null?void 0:s.tick)||"--",label:(s==null?void 0:s.p)||"--",onInputChange:h=>{f(!0),p(ce(h))},onSelectClick:()=>{m(!0)}}),e.jsx("div",{style:{height:"13px"}}),e.jsx(k,{style:{width:"36px",height:"36px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:`1px solid ${(oe=t.palette.borderColor)==null?void 0:oe.main}`,borderRadius:"8px",background:"#232526",top:"167px",position:"absolute"},children:e.jsx(Pe,{direction:"descend",clicked:!0,color:(ae=t.palette.primary)==null?void 0:ae.main,width:"30px",height:"30px"})}),e.jsx(xe,{inputText:r,onInputChange:h=>{f(!1),C(ce(h))},isCoinType:!0,icon:(S==null?void 0:S.iconUrl)||Ke,balance:Y(B),name:(S==null?void 0:S.symbol)||"--"}),e.jsx("div",{style:{height:"35px"}}),e.jsx("div",{className:"items-center justify-center flex",style:{width:"100%"},children:n!=null&&n.address&&x?e.jsx(Z,{variant:"contained",type:"submit",size:"large",className:"w-full bg-violet-700 rounded-[20px]",style:{width:"100%"},disabled:$,onClick:Q,children:V?"Loading...":"Convert"}):e.jsx("div",{className:"FullWalletButton",children:e.jsx(Oe,{children:"Connect Wallet"})})}),(n==null?void 0:n.address)&&x&&e.jsx(Z,{variant:"text",type:"submit",size:"large",sx:{width:"100%",fontSize:" 16px",color:"#BCA8FF",backgroundColor:"transparent",":hover":{color:"#6E41FF",backgroundColor:"transparent",opacity:"1"}},disabled:!(n!=null&&n.address&&x),onClick:()=>{O(!0)},children:"History"}),e.jsx("div",{style:{height:"40px"}})]})]})}),e.jsx(pt,{selectBridgeId:s==null?void 0:s.id,handleCallBack:h=>{console.log("select bridge: ",h),h&&h.id!==(s==null?void 0:s.id)&&(b({...h}),p("")),m(!1)},openSelectBridegDialog:u,bridgeList:o}),e.jsx(z,{onCloseModal:h=>{h&&s&&(p(""),setTimeout(()=>{P([s.tick])},2e3))}}),e.jsx(lt,{openConvertHistory:_,onClose:()=>{O(!1)}})]})};export{gt as default};
