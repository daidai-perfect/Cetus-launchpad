import{c as u,j as O,a as E,k as w,d as R}from"./pool.b1ddb447.js";import{p as F}from"./precision.a7a6c57b.js";const D=(r,e)=>r&&e?F.plus(w(r),w(e)):r||0,T=r=>{let e=0;return r&&r.forEach(o=>{e+=w(String(o))}),String(R(String(e),2))};function P(r,e,o){var h;const f=[],a=r?o.value.addressLpTokens[r.address]:null;let p,c,g,b,_=[],s=[],t,y;if(a&&(p=a.rewarder_apr[0]?Number(a.rewarder_apr[0].substring(0,a.rewarder_apr[0].length-1)):0,c=a.rewarder_apr[1]?Number(a.rewarder_apr[1].substring(0,a.rewarder_apr[1].length-1)):0,g=a.rewarder_apr[2]?Number(a.rewarder_apr[2].substring(0,a.rewarder_apr[2].length-1)):0,b=p+c+g,a.stable_farming&&a.stable_farming.stable_rewarder.map(n=>{n.amount_second>0&&(t=!0)}),y=a.stable_farming&&a.stable_farming.apr*100),r!=null&&r.rewarder_infos||r!=null&&r.rewarderInfo?s=(r==null?void 0:r.rewarder_infos)||(r==null?void 0:r.rewarderInfo):!u(e.value.addressLpTokens)&&!u(e.value.tokensObj)&&!u(e.value.RATES)&&!u(o.value.newTopPoolsObj)&&(s=(r==null?void 0:r.address)&&e.value.addressLpTokens[r==null?void 0:r.address]&&e.value.addressLpTokens[r==null?void 0:r.address].rewarder_infos||[]),console.log(s,"###rewarderInfos"),s&&s.length>0){s.forEach((d,i)=>{var S,A,N;const k=(S=e.value.tokensObj[d.coinAddress])==null?void 0:S.decimals,l=O(d.emissionsEveryDay/Math.pow(10,k),4),j=Number(l)>0?E(l):l,I=O(Number(l)*e.value.RATES[d.coinAddress]&&e.value.RATES[d.coinAddress].price,4);f.push({...d,logoUrl:(A=e.value.tokensObj[d.coinAddress])==null?void 0:A.logoURI,day:j,dayUSD:I,symbol:(N=e.value.tokensObj[d.coinAddress])==null?void 0:N.symbol,rewarders:a?a.rewarder_apr[i].replace("%",""):"",rewarder_display:r[`rewarder_display${i+1}`],resultDay:l})});const n=f.filter(d=>d.rewarder_display);(!s||s.length<1||JSON.stringify(s)!==JSON.stringify(n))&&(_=n),console.log(_,n,JSON.stringify(s)!==JSON.stringify(n),"resultresult")}const v={...r,rewardes:_,liqidity:a?a.tvl_in_usd:"--",vol:a?a.vol_in_usd_24h:"--",apr:a&&a.apr_7day?(h=a.apr_7day)==null?void 0:h.replace("%",""):"--",fee:r&&r.fee?r.fee:"--",aprNum:a&&a.apr_7day?String(Number(a.apr_7day.substring(0,a.apr_7day.length-1))+b):"--",rewarder_apr:T(a&&a.rewarder_apr),aprTotal:D(a&&a.apr_7day,a&&T(a.rewarder_apr)),rewarders0:a&&a.rewarder_apr[0],rewarders1:a&&a.rewarder_apr[1],rewarders2:a&&a.rewarder_apr[2],labels:r!=null&&r.labels?r.labels:[],isFarming:r==null?void 0:r.isFarming,fee_24_h:a?a.fee_24_h:"--",isStableFarming:t,stableFarmingApr:y};return e.value.setCurrentPoolMoreInfo(v),v}export{P as g};
