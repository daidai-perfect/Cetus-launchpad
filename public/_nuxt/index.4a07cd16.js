import{a as b,l as c,r as g,e as w,o as C,f as U,i as _,w as v,B as $,j as k,v as R}from"./entry.833e9675.js";import{u as I,a as B}from"./sha256.5af084c7.js";import{g as D,c as n}from"./index.5900349b.js";const E=b({async setup(){console.log("this is test");const o=I(),i=c(()=>o.chainName),p=c(()=>o),u=B(),s=c(()=>u),f=()=>{const e=D({appId:"d2baaf93-cda5-404c-9be2-36695a530d02",destinationWallets:[{address:"0xabcdef",blockchains:["sui"]},{address:"0x123456",assets:["ETH","USDC"]}]});console.log("0629###testfun###onRampURL###",e),window.open(e,"Coinbase Pay","height=600, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")},l=(e,a)=>{try{const t=n.enc.Utf8.parse(a),S=n.enc.Utf8.parse(a.substring(0,16)),W=n.enc.Utf8.parse(e),r=n.AES.encrypt(e,t,{iv:S,mode:n.mode.CBC});return console.log("0614###encrypted###",r),console.log("0614###encrypted.toString()###",r.toString()),console.log("0614###encrypted###",r),r.toString()}catch(t){console.log(`0613###AES encrypting exception, msg is ${t}`)}return null},d=g(!1),y=c(()=>{if(s.value.address){const e=`address=${s.value.address}&appId=eux4fx43yH39DsW0`,a=l(e,"J8Y2oKoFAKiw6OCq"),t=encodeURIComponent(a);return console.log("0614###sign###",t),`https://ramp.alchemypay.org/?network=SUI&appId=eux4fx43yH39DsW0&sign=${t}&address=${s.value.address}`}return""}),x=()=>{d.value=!0},h=()=>{d.value=!0},m=g(0);return{testfun:f,chainName:i,testShow:d,iframeUrl:y,openTestModal:x,closeTestModal:h,index:p,count:m,add:()=>{m.value++}}}});function N(o,i,p,u,s,f){const l=$;return C(),U("div",null,[_(l,{type:"primary",onClick:o.add},{default:v(()=>[k("test"+R(o.count),1)]),_:1},8,["onClick"])])}const M=w(E,[["render",N]]);export{M as default};
