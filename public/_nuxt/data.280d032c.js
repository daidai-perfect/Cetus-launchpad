import{D as u}from"./decimal.0bdeb344.js";import{r as e}from"./entry.833e9675.js";const l=e(""),t=e(""),w=e(""),O=e(""),S=e(),x=e(),r=e(),d=e(),f=e(),g=e(),o=e(),i=e(),m=e(!0),c=e(!0),L=e(!1),T=e(!1),M=e(!1),D=()=>{m.value=!m.value;const v=r.value;if(r.value=d.value,d.value=v,c.value?(g.value=f.value,c.value=!1):(f.value=g.value,c.value=!0),l.value!==""&&t.value!==""){if(l.value=="0"&&t.value=="∞")return;if(l.value!=="0"&&t.value!=="∞"){const n=l.value,a=t.value;l.value=new u(1).div(a).toString(),t.value=new u(1).div(n).toString();const s=o.value,k=i.value;o.value=new u(1).div(k).toString(),i.value=new u(1).div(s).toString()}else if(t.value=="∞"){const n=l.value;l.value="0",t.value=new u(1).div(n).toString();const a=o.value;i.value,o.value="0",i.value=new u(1).div(a).toString()}else if(l.value=="0"){const n=t.value;l.value=new u(1).div(n).toString(),t.value="∞",o.value;const a=i.value;o.value=new u(1).div(a).toString(),i.value="∞"}}console.log("执行了吗776#")},P=e(),b=async(v,n)=>{console.log("0412###resetTickList####");const a=await v.value.getTicks(n.value);console.log("0412###resetTickList###result####",a);const s=a?v.value.getTickDataFromUrlData(a):[];P.value=s,console.log("0412###resetTickList###tickList####",s)},A=()=>{l.value="",t.value="",w.value="",O.value="",S.value="",x.value="",r.value=null,d.value=null,f.value="",g.value="",o.value="",i.value="",m.value=!0,c.value=!0,P.value=[],T.value=!1};export{S as currentPrice,x as currentPriceReverse,w as currentPriceTab,i as defaultMaxPrice,o as defaultMinPrice,m as direction,c as fixedFromCoin,r as fromCoin,f as fromCoinAmount,T as isInputTotalAmount,M as isStableFarmingRange,t as maxPrice,l as minPrice,L as positionError,O as priceConfigObj,A as resetData,b as resetTickList,P as tickList,d as toCoin,g as toCoinAmount,D as toggle};
