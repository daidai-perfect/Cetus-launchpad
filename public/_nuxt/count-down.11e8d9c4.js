import{r as p,q as D,A as T,V as q,m as x,b as A,e as L,o as P,f as j,j as m,x as _,G as k,p as V,k as R,h}from"./entry.c4f565bb.js";import{u as C}from"./index.4eaea48a.js";import{u as M}from"./launchpad.3b88bab8.js";const E={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0},isProject:{type:Boolean,require:!1,default:!1},isShow:{type:Boolean,require:!1,default:!0}},setup(e){const S=p("--"),u=p("--"),a=p("--"),I=p("--");let n=null;D(()=>{i()}),T(e,t=>{t&&e.isProject&&i()}),q(()=>{window.clearInterval(n)});const i=()=>{const t=new Date().getTime()/1e3;parseInt(String(t))<Number(e.startTime)&&g(e.startTime),parseInt(String(t))>=Number(e.startTime)&&parseInt(String(t))<Number(e.endTime)&&g(e.endTime)},y=C();x(()=>y);const d=M(),b=x(()=>d),w=A();T(()=>b.value.currentTab,t=>{t&&(clearInterval(n),window.clearInterval(n),i())});const g=t=>{n=setInterval(()=>{let N=new Date().getTime()/1e3,r=t-parseInt(String(N));if(clearInterval(n),window.clearInterval(n),n=null,i(),r==0){const v=w.currentRoute.value.path,B=w.currentRoute.value.params.id||"";v.includes("/launchpad")&&d.setLaunchpadAllPools(),(v.includes("/launchpad-detail")||v.includes("/launchpad-project-detail"))&&(d.setLaunchpadPoolsLoading(!0),d.getCurrentLaunchpadPoolInfo(B));return}r--;let o=parseInt(String(r/60/60/24));o=o<10?"0"+o:o;let s=parseInt(String(r/60/60%24));s=s<10?"0"+s:s;let c=parseInt(String(r/60%60));c=c<10?"0"+c:c;let l=parseInt(String(r%60));l=l<10?"0"+l:l,S.value=o,u.value=s,a.value=c,I.value=l},1e3)};return{day:S,hour:u,min:a,sec:I}}};const f=e=>(V("data-v-1403cbe3"),e=e(),R(),e),G={key:0,class:"count-down"},H=f(()=>h("span",null,"D : ",-1)),U=f(()=>h("span",null,"H : ",-1)),W=f(()=>h("span",null,"M : ",-1)),z=f(()=>h("span",null,"S",-1));function F(e,S,u,a,I,n){return u.isShow?(P(),j("div",G,[m(_(a.day)+" ",1),H,m(" "+_(a.hour)+" ",1),U,m(" "+_(a.min)+" ",1),W,m(" "+_(a.sec)+" ",1),z])):k("",!0)}const X=L(E,[["render",F],["__scopeId","data-v-1403cbe3"]]);export{X as _};
