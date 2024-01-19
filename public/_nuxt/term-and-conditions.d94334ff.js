import{e as g,a as _,r as m,l as v,o as t,f as i,h as s,v as p,z as u,x as n,j as A,i as k,w as C,B as I,p as R,k as y}from"./entry.833e9675.js";import{u as B}from"./sha256.5af084c7.js";import{_ as h}from"./icon-selected_3x.09e9a6f0.js";const E=""+new URL("img-Sui-Term-and-Conditions_3x.503ac44e.png",import.meta.url).href,M=""+new URL("img-Term-and-Conditions_2x.1a415d6a.png",import.meta.url).href,S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAADo0lEQVRYCe1WWUhUURj+/zujtlEUET0ELab5aA8REgWNGtEKQgstUBTVjBW0QNFD2FMvReY2CkUPbSRUD20YmT0EBQVFRTkjtmouLRYWZTn37zvC6J3rPTdrciTwwOX+5z//8p3v/Pe/h2hw/GcM8EDh3SZ1KT/JPOclo7CE025FcRhRIZHvApFkgLlAJEsjFLm8VWpnRfMnHBDAeJspXAkwCxQIIRreSXQtX8Iz1TyhR1Yp4qmh0FmAWKaSWwcTfyLy5CQMEJgxWih0EmBWWYFYZYCpSciRiQjjmI67gcFhPfWSZ4XXirA/ZAUmQOFyVMs6XXwwE2JKzi7mye/6nSE/hYuEZJMODJipH0KcXcaTm5VNvzLkl9BhgNmqB0MvU8jrO8KpjVGbfmMoIKGDALMzmqj3mxvAhu8op762rvUCVCGSZDX4GxnMHDBJ9rr4NiWDmRLOeGG3iQG0RUJrH1D43i4JjbUb9nUOMPvAzH6dPfpNq5fYV8SpdU423X0IFK8wiU7ja/DA6SHREF+QJ7Y5Oel02NAu+B/SraOA36P5zS3nqU90Nl0MBSSch12dUmCUIeRMou9Ve6R+lM7RrvdLeJsbGOy8zSDOdQOjYnJA6habFDkP2al27hg0Zl4Zj/tiB2CdY0ObTTLRa3SDP3vJm1PCqfd1FlG9gUAbMHECo2yyhNquFsjbYVEH+xvMrEcBB+16y7ydyZjfFzDKxxhPyStBVLUlQIyI45vdQu2XdsiboTELmPildg2O6Rie7lq02kD5FfW4MMhpd616N7krkGKgmdqvIfAcnTEMq/CvWVrMaR3KJl9ql0eIz8Cnq+7sfgDyDZtZVM4ZN+1rbvPunQWkdYRJH6/DOEvngCSXMyk97xGFF+GYKvGzdOz0sOvAMS0p4zQV749GNyDlhWvlyE4yb2BnM3RRkOw21tVlSld3PwAmL8jpV3Qx3PQxgJShX16NxidfjaTT3Ryd1hCsE5/28lKedtFpvS+6mE6tHFQzNGh4LsTHfQnQY8MRBFsdDxgVqxcgpSzlCR9QHrhO8jM1/92Ancm475RyBu7K8Q1HQCokOmprCqVkQ3T85/SkZdQ2bwxyBjp9/EMLSIUu5ElNSeTxgYHnulSoGT8K+IRu/U/1roBUMPSdBoOSfBBf24Pja9pexukVdn08898CUsFLecorJJ+Lo2nsSca7wUxxz3wApHypT8fvokndeQYgvXPKeC5vzhEHtYMM/FsGfgH3viNAzmmZhgAAAABJRU5ErkJggg==";const Q=_({props:{idoInfo:{type:Object,required:!1,default:()=>({})}},setup(e){const o=m(!1),a=m(!e.idoInfo.link),d=B(),c=v(()=>d);return{isSelect:o,isIdoSelect:a,store:c,counter:d}}}),r=e=>(R("data-v-088cdc18"),e=e(),y(),e),U={class:"term-and-conditions"},T={class:"box"},b={class:"tit-top"},D={class:"title"},w=r(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),J=[w],V={class:"img-box"},F={key:0,src:E},O={key:1,src:M},j=r(()=>s("p",{class:"note"},"Please read & accept terms before using this site.",-1)),Y={class:"accept"},z={key:0,src:S},N={key:1,src:h},P=r(()=>s("span",null,[A("I accept the "),s("a",{href:"https://www.cetus.zone/terms",target:"_blank"}," Cetus Protocol Terms & Conditions")],-1)),G={key:0,class:"accept"},K={key:0,src:S},L={key:1,src:h},H=["href"];function W(e,o,a,d,c,q){const f=I;return t(),i("div",U,[s("div",{class:"term-and-conditions-content",onClick:o[4]||(o[4]=u(()=>{},["stop"]))},[s("div",T,[s("div",b,[s("h3",D,p(e.$t("newAdd.termTitle")),1),e.idoInfo.isIdo?(t(),i("svg",{key:0,class:"icon modal-icon-close","aria-hidden":"true",onClick:o[0]||(o[0]=u(()=>e.counter.setIsIdoOpenTerm(!1),["stop"]))},J)):n("",!0)]),s("div",V,[e.store.theme=="sui"?(t(),i("img",F)):(t(),i("img",O))]),j,s("div",Y,[s("div",{class:"radio",onClick:o[1]||(o[1]=l=>e.isSelect=!e.isSelect)},[e.isSelect&&e.store.theme!=="sui"?(t(),i("img",z)):n("",!0),e.isSelect&&e.store.theme=="sui"?(t(),i("img",N)):n("",!0)]),P]),e.idoInfo.link?(t(),i("div",G,[s("div",{class:"radio",onClick:o[2]||(o[2]=l=>e.isIdoSelect=!e.isIdoSelect)},[e.isIdoSelect&&e.store.theme!=="sui"?(t(),i("img",K)):n("",!0),e.isIdoSelect&&e.store.theme=="sui"?(t(),i("img",L)):n("",!0)]),s("span",null,[A("I accept the "),s("a",{href:e.idoInfo.link,target:"_blank"},p(e.idoInfo.name)+" Terms & Conditions",9,H)])])):n("",!0)]),k(f,{disabled:!e.isSelect||!e.isIdoSelect,class:"big-btn continue",onClick:o[3]||(o[3]=l=>e.$emit("close"))},{default:C(()=>[A("Continue")]),_:1},8,["disabled"])])])}const $=g(Q,[["render",W],["__scopeId","data-v-088cdc18"]]);export{$ as _};
