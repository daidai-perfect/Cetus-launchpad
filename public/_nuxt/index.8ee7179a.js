import{a as m,m as l,r as i,e as f,o as g,f as y,i as x,w as S,B as $,j as v,x as _}from"./entry.8c071894.js";import{u as C}from"./index.a960bb3c.js";import{u as h}from"./index.e235d647.js";import{c as n}from"./index.889f155e.js";import"./common.7b3188ac.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";const w=m({async setup(){console.log("this is test");const s=C();l(()=>s.chainName),l(()=>s);const r=h(),c=l(()=>r),p=(e,t)=>{try{const o=n.enc.Utf8.parse(t),d=n.enc.Utf8.parse(t.substring(0,16)),k=n.enc.Utf8.parse(e),a=n.AES.encrypt(e,o,{iv:d,mode:n.mode.CBC});return console.log("0614###encrypted###",a),console.log("0614###encrypted.toString()###",a.toString()),console.log("0614###encrypted###",a),a.toString()}catch(o){console.log(`0613###AES encrypting exception, msg is ${o}`)}return null};return i(!1),l(()=>{if(c.value.address){const e=`address=${c.value.address}&appId=eux4fx43yH39DsW0`,t=p(e,"J8Y2oKoFAKiw6OCq"),o=encodeURIComponent(t);return console.log("0614###sign###",o),`https://ramp.alchemypay.org/?network=SUI&appId=eux4fx43yH39DsW0&sign=${o}&address=${c.value.address}`}return""}),i(0),{consoleTest:e=>{console.log("🚀🚀🚀 ~ file: index.vue:137 ~ consoleTest ~ result:",0),console.log("🚀🚀🚀 ~ file: index.vue:136 ~ consoleTest ~ args:",e)}}}});function T(s,r,c,p,u,e){const t=$;return g(),y("div",null,[x(t,{type:"primary",onClick:r[0]||(r[0]=o=>s.consoleTest("log test"))},{default:S(()=>[v("test"+_(s.count),1)]),_:1})])}const W=f(w,[["render",T]]);export{W as default};
