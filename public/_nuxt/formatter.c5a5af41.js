import"./decimal.0bdeb344.js";import{h as $,f,d as o}from"./index.c41a185a.js";function s(t,r="$",n=2){const i=Math.pow(10,-n);return o(t).gt(0)&&o(t).lt(i)?r==="%"?`<${i}${r}`:`<${r}${i}`:r==="%"?`${$(f(t,n))}${r}`:`${r}${$(f(t,n))}`}function a(t,r=2,n=!0){return n?$(f(t,r)):f(t,r)}export{a as f,s};
