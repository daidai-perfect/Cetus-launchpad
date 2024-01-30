import{r as c,Y as C,Z as T,_ as L,u as I,$ as N,G as z,j as i,e as A,a0 as M,a1 as P,a2 as B,a3 as U,f as l,a4 as E,a5 as k,a6 as d,a7 as S,V as H}from"./index-7d27320c.js";const R=C(T)(({theme:p})=>({...p.typography.body2,paddingLeft:12,paddingRight:12,height:48,borderRadius:24})),F=({className:p})=>{var f,y;const{list:r,loadMoreLoading:g,refreshLoading:h,getList:u,totalCount:x}=L(),[o,j]=c.useState(void 0),a=I(),{isMobile:v}=N(),b=e=>{const t=e=="dgen"?"https://suidgen.com/":e=="H2O2"?"https://twitter.com/H2O2_Sui":e=="SUId"?"https://twitter.com/SUId_Sui":"";window.open(t)},$=[{label:"Tick",key:"tick",render:e=>i.jsx(l,{display:"flex",alignItems:"center",padding:"4px 0",fontSize:"14px",justifyContent:v?"right":"left",color:"#BCA8FF",onClick:e.tick=="dgen"||e.tick=="H2O2"||e.tick=="SUId"?()=>b(e.tick):()=>null,children:e.tick},"tick")},{label:"Progress",key:"progess",align:"right",render:e=>{var n;const t=Number(e.minted/e.totalSupply*100);return i.jsxs("div",{className:"flex flex-row items-center gap-2 justify-end",children:[i.jsx(E,{variant:"determinate",value:t<100?t:100,className:"flex-auto",sx:{width:"60px",flex:"unset !important"}}),i.jsxs(l,{width:"50px",fontSize:"14px",textAlign:"right",padding:"4px 0",display:"flex",alignItems:"center",justifyContent:"flex-end",color:(n=a.palette.text)==null?void 0:n.primary,sx:{"@media (max-width:750px)":{width:"unset"}},children:[t===0?0:t<.01?"<0.01":k(t,2),"%"]},"fee")]})}},{label:"Protocol",key:"protocol",align:"right",render:e=>{var t;return i.jsx(l,{fontSize:"14px",textAlign:"right",padding:"4px 0",color:(t=a.palette.text)==null?void 0:t.primary,children:e.protocol},"protocol")}},{label:"Minted",key:"minted",align:"right",render:e=>{var t;return i.jsx(l,{fontSize:"14px",padding:"4px 0",textAlign:"right",color:(t=a.palette.text)==null?void 0:t.primary,children:d(e.minted,S(e.minted))},"minted")}},{label:"Total Supply",key:"totalSupply",align:"right",render:e=>{var t;return i.jsx(l,{fontSize:"14px",textAlign:"right",padding:"4px 0",color:(t=a.palette.text)==null?void 0:t.primary,children:d(e.totalSupply,S(e.totalSupply))},"totalSupply")}},{label:"Holders",key:"holders",align:"right",render:e=>{var t;return i.jsx(l,{fontSize:"14px",textAlign:"right",padding:"4px 0",color:(t=a.palette.text)==null?void 0:t.primary,children:d(e.holders)},"holders")}},{label:"Limit",key:"limit",align:"right",render:e=>{var t;return i.jsx(l,{fontSize:"14px",textAlign:"right",padding:"4px 0",color:(t=a.palette.text)==null?void 0:t.primary,children:d(e.limit)},"limit")}},{label:"Mint Fee",key:"fee",align:"right",render:e=>{var n;const t=H(e.fee).div(1e9).toString();return i.jsxs(l,{fontSize:"14px",whiteSpace:"nowrap",padding:"4px 0",align:"right",color:(n=a.palette.text)==null?void 0:n.primary,children:[k(t,9)," SUI"]},"fee")}}],s=e=>{u({search:e,refetch:!0})};c.useEffect(()=>{s()},[]);const m=c.useMemo(()=>(console.log("1231$$$$$  list.length",r.length),console.log("1231$$$$$  totalCount",x),r.length===x),[r,x]),w=z();return i.jsxs("div",{className:A("container mx-auto mt-[50px] flex flex-col gap-5 items-center",p,"h5-token-table"),children:[i.jsx("div",{className:"text-4xl text-center font-bold",style:{color:(y=(f=a.palette)==null?void 0:f.textActive)==null?void 0:y.main},children:"Explore Suirc20 tokens here."}),i.jsxs(R,{className:"w-[80%] flex items-center mt-[30px]",sx:{"@media (max-width:1024px)":{marginTop:"10px"}},children:[i.jsx(M,{sx:{ml:1,flex:1},placeholder:"Search ticks here",value:o,onBlur:()=>s(o),onChange:e=>{e.target.value||s(void 0),j(e.target.value)}}),i.jsx(P,{type:"button",sx:{p:"10px"},onClick:()=>s(o),children:i.jsx("img",{style:{width:"20px",height:"20px"},src:B,alt:""})})]}),i.jsx("div",{className:"w-full overflow-x-auto rounded-xl shadow-xl p-sm",children:i.jsx(U,{columns:$,data:r,loadMoreLoading:g,refreshLoading:h,onRowClick:e=>{w(`/tokens/token/detail?p=suirc-20&tick=${e.tick}`)},showNoMore:m,onLoadMore:()=>{!m&&!h&&!g&&u({search:o,cursor:r.length>0?r[r.length-1].cursor:void 0})}})})]})},_=c.memo(F);export{_ as default};
