import{a as Re}from"./pools-list-item.f64a78ec.js";import{c as L}from"./index.6288ac24.js";import{i as q}from"./import-icon.de3e6c66.js";import{u as Be,a as Ee,f as F,h as Y,d as qe}from"./pool.2587b8e2.js";import{a as Fe,l as ze,b as Ue,r as h,m as w,y as Ze,D as x,e as He,M as ve,o as a,f as i,h as s,v as d,u as g,x as v,K as E,z as P,t as ee,aa as me,G as Ge,F as K,s as R,j as B,i as _,w as O,U as Je,S as Qe,J as We,c as Xe,p as Ye,k as xe,V as es}from"./entry.a4db0d61.js";/* empty css              */import"./index.b10985b1.js";/* empty css              *//* empty css              */import{p as ss}from"./precision.a7a6c57b.js";import{_ as J}from"./icon_on_2x.5e96733d.js";import{_ as os}from"./img-no-Positions_2x.03349b71.js";import{_ as ls}from"./img-no-Positions_2x.dac445b1.js";import"./nuxt-link.5f3bcca1.js";import"./icon_autopools_2x.e198b988.js";import"./token-warning_2x.9203e937.js";import"./apr-tips.e150f6bb.js";import"./farms.133aede2.js";import"./decimal.a2826370.js";import"./decimal.765d8738.js";import"./icon_fee_2x.2835f470.js";import"./icon_rewards_2x.5f9847a6.js";import"./icon_farms_2x.ee5d6380.js";import"./farms.e6aa98f0.js";const ts=Fe({setup(){const{t:e,locale:o}=ze(),V=Ue(),z=h(!1),U=h(!1),D=h(!1),C=h("VOL"),M=h(["APR","TVL"]),I=h(!1),S=h(e("tab.all")),T=h([e("tab.layerZero"),e("tab.wormhole"),e("tab.celer")]),b=h([]),A=h(""),l=h(["pools"]),k=Be(),y=Ee(),Z=h(!0),Q=h(""),c=w(()=>y),he=w(()=>y.theme),$=w(()=>k),fe=w(()=>y.statsData),ge=(t,r)=>r.liqidity-t.liqidity,ke=(t,r)=>r.vol-t.vol,ye=(t,r)=>r.aprNum-t.aprNum,j=h(!1),be=()=>{localStorage.setItem(`pools-${X.value}-selectall`,j.value?"":"true"),j.value=!j.value};Ze(()=>{var p,f,G;const t=(G=(f=(p=V==null?void 0:V.currentRoute)==null?void 0:p.value)==null?void 0:f.query)==null?void 0:G.language;t&&we(t),Q.value=o.value,document.addEventListener("click",()=>{H("")});const r=localStorage.getItem(`pools-${X.value}-selectall`);j.value=r==="true"});const{setLang:$e}=y,we=t=>{$e(t),o.value=t},Ce=(t,r)=>t&&r?ss.plus(Y(t),Y(r)):t||0,se=t=>{let r=0;return t&&t.forEach(p=>{r+=Y(String(p))}),String(qe(String(r),2))},Se=(t=[])=>{const r=t&&t.length>0?t:Object.values($.value.poolsObj);console.log("🚀🚀🚀 ~ file: pools.vue:438 ~ watchPools ~ newPoolList:",r);const p=[];r.forEach(u=>{var ne,ie,re,ue,de,ce,pe;const n=c.value.addressLpTokens[u.address],N=$.value.poolsObj[u.address];let oe,le,te,ae;n&&(oe=n.rewarder_apr[0]?Number(n.rewarder_apr[0].substring(0,n.rewarder_apr[0].length-1)):0,le=n.rewarder_apr[1]?Number(n.rewarder_apr[1].substring(0,n.rewarder_apr[1].length-1)):0,te=n.rewarder_apr[2]?Number(n.rewarder_apr[2].substring(0,n.rewarder_apr[2].length-1)):0,ae=oe+le+te);const Te=u.needReverse?((ie=$.value.tokensObj[u.coinB.address])==null?void 0:ie.labels)||[]:((ne=$.value.tokensObj[u.coinA.address])==null?void 0:ne.labels)||[],je=u.needReverse?((re=$.value.tokensObj[u.coinA.address])==null?void 0:re.labels)||[]:((ue=$.value.tokensObj[u.coinB.address])==null?void 0:ue.labels)||[],Ke=[...new Set(Te.concat(je))];p.push({...u,liqidity:n?n.tvl_in_usd:"0.00000000001",vol:n?n.vol_in_usd_24h:"0",apr:n&&n.apr_7day?(de=n.apr_7day)==null?void 0:de.replace("%",""):"--",fee:u.fee?u.fee:N!=null&&N.fee?N.fee:"--",aprNum:n&&n.apr_7day?String(Number(n.apr_7day.substring(0,n.apr_7day.length-1))+ae):"0",rewarder_apr:se(n&&n.rewarder_apr),aprTotal:Ce(n&&n.apr_7day,n&&se(n.rewarder_apr)),rewarders0:n&&n.rewarder_apr[0],rewarders1:n&&n.rewarder_apr[1],rewarders2:n&&n.rewarder_apr[2],labels:Ke,isFarming:u==null?void 0:u.isFarming,fee_24_h:n&&n.fee_24_h,isAuthorized:!!(W.value[(ce=u==null?void 0:u.token_a)==null?void 0:ce.address]&&W.value[(pe=u==null?void 0:u.token_b)==null?void 0:pe.address]),rewarderInfo:c.value.chainName=="Aptos"?N==null?void 0:N.rewarder_infos:[]})});let f=[];if(C.value=="APR"?f=p.sort(ye):C.value=="VOL"?f=p.sort(ke):f=p.sort(ge),S.value!=e("tab.all")){const u=[];f.forEach(n=>{n.labels.indexOf(S.value)!==-1&&u.push(n)}),b.value=u}else b.value=f;if(A.value){var G=new RegExp("[\\u4E00-\\u9FFF]+","g");if(G.test(A.value)){A.value="";return}const u=b.value.filter(n=>n.symbol.toLowerCase().includes(A.value.toLowerCase()));console.log("🚀🚀🚀 ~ file: pools.vue:542 ~ watchPools ~ result:",u),b.value=u}Z.value=!1},W=w(()=>$.value.tokensObj);x(()=>[W.value,$.value.poolConfigList,c.value.chainName,c.value.addressLpTokens,A.value,C.value,S.value],([t,r,p,f])=>{t&&r&&(r==null?void 0:r.length)>0&&r[0]&&p&&(p!=null&&p.toLowerCase().includes(r[0].chain))&&Se(r)},{immediate:!0,deep:!0});const Ae=t=>{if(!Z.value&&(z.value=!0,t)){const r=b.value.filter(p=>p.symbol.toLowerCase().includes(t.toLowerCase()));b.value=r,z.value=!1}},_e=()=>{Z.value=!0,U.value=!0,y.getStatsData(c.value.chainName,c.value.filterCoinsObj),k.setPoolConfigList(c.value.chainName,c.value.filterCoinsObj),setTimeout(()=>{U.value=!1},1e3)},Le=t=>{const r=[];r.push(C.value),M.value.forEach((p,f)=>{p!=t&&r.push(p)}),M.value=r,C.value=t},Ve=t=>{const r=[];T.value.forEach((p,f)=>{p==t?r[f]=S.value:r[f]=p}),T.value=r,S.value=t};x(()=>y.lang,t=>{Q.value=t});const H=t=>{t=="label"?(y.setIsSelect("pools"),I.value=!I.value,D.value=!1,c.value.setIsShowMore(!1)):t=="select"?(y.setIsSelect("pools"),D.value=!D.value,I.value=!1,c.value.setIsShowMore(!1)):(D.value=!1,I.value=!1)},Ie=()=>{V&&V.push("/position")},Ne=w(()=>L[c.value.chainName]);x(()=>c.value.isSelect,t=>{t!=="pools"&&H("")},{immediate:!0});const Pe=w(()=>$.value.poolConfigList.filter(r=>r.address==L[c.value.chainName].newPositionAddress)[0]),Oe=()=>{c.value.setIsShowMore(!c.value.isShowMore),c.value.setOpenMore(!1),c.value.setOpenSwitchLang(!1),c.value.setOpenH5Icon(!1),c.value.setOpenSwitchChain(!1),H("")},De=w(()=>L[c.value.chainName].hasCreatePool),X=w(()=>c.value.chainName),Me=w(()=>{const t=b.value.filter(r=>r.isAuthorized);return j.value?4-b.value.length%4:4-t.length%4});return{clickDisplayAll:be,isSelectAll:j,chainName:X,hasCreatePool:De,store:c,showMore:Oe,lpInfo:Pe,config:Ne,toPositionList:Ie,t:e,router:V,loading:z,clickRefresh:_e,refresh:U,updateLpList:Ae,searchKey:A,current:l,addCommom:F,list:b,theme:he,statsData:fe,pools:$,select:D,selectValue:C,selectList:M,label:I,labelValue:S,labelList:T,changeSort:Le,changeSortLabel:Ve,reviseValue:H,listLoading:Z,languageValue:Q,importIcon:q,patchNumber:Me}}});const m=e=>(Ye("data-v-21cb9859"),e=e(),xe(),e),as={class:"pools-list-container"},ns={class:"right-link"},is=["href"],rs=m(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-jump"})],-1)),us=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),ds=[us],cs={key:0,class:"more-list"},ps=["href"],vs={key:2,class:"sui-createPool position"},ms=m(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-add1"})],-1)),hs={class:"search-refresh"},fs={class:"my-position position-h5"},gs=["placeholder"],ks=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),ys=[ks],bs={key:0,class:"select-item"},$s=["onClick"],ws={key:0,class:"search-select display-all-box"},Cs=["src"],Ss=["src"],As=m(()=>s("span",null,"Display all pools",-1)),_s=m(()=>s("img",{src:J,alt:""},null,-1)),Ls=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Vs=[Ls],Is={key:0,class:"select-item"},Ns=["onClick"],Ps=m(()=>s("img",{src:J,alt:""},null,-1)),Os=m(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Ds=[Os],Ms={class:"search-tab"},Ts={class:"my-position position-pc"},js=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ks=[js],Rs={key:0,class:"select-item"},Bs=["onClick"],Es={key:1,class:"search-select display-all-box"},qs=["src"],Fs=["src"],zs=m(()=>s("span",null,"Display all pools",-1)),Us=m(()=>s("img",{src:J,alt:""},null,-1)),Zs=m(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),Hs=[Zs],Gs={key:0,class:"select-item"},Js=["onClick"],Qs=m(()=>s("img",{src:J,alt:""},null,-1)),Ws=["placeholder"],Xs=m(()=>s("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Ys=[Xs],xs={class:"item item-left"},eo={class:"value"},so={class:"label"},oo={class:"item item-right"},lo={class:"value"},to={class:"label"},ao={key:0,class:"loading-spin"},no={key:2,class:"no-data"},io={key:0,src:os},ro={key:1,src:ls};function uo(e,o,V,z,U,D){const C=ve("mail-outlined"),M=es,I=ve("appstore-outlined"),S=Je,T=Qe,b=We,A=Re;return a(),i("div",as,[s("div",{class:"pools-title",onClick:o[4]||(o[4]=l=>e.reviseValue(""))},[s("div",null,d(e.$t("common.concentratedPools")),1),s("div",ns,[!e.hasCreatePool&&e.store&&e.store.chainName==="Aptos"?(a(),i("a",{key:0,href:`${("config"in e?e.config:g(L)).ammSite}/pools?language=${e.languageValue}&chain=aptos`,class:"ammSite"},[s("span",null,d(e.$t("common.ammPools")),1),rs],8,is)):v("",!0),e.store&&e.store.chainName==="Aptos"&&e.hasCreatePool?(a(),i("div",{key:1,class:"more",onClick:o[1]||(o[1]=E((...l)=>e.showMore&&e.showMore(...l),["stop"]))},[s("span",null,d(e.$t("newAdd.more")),1),(a(),i("svg",{class:P([e.store.isShowMore?"icon-open":"","icon"]),"aria-hidden":"true"},ds,2)),e.store.isShowMore?(a(),i("div",cs,[s("p",null,[s("a",{href:`${("config"in e?e.config:g(L)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},d(e.$t("common.ammPools")),9,ps)]),s("p",{onClick:o[0]||(o[0]=l=>e.router.push(`/liquidity/create?toCoin=${("config"in e?e.config:g(L)).currentChainTokenAddress}`))},d(e.$t("newAdd.createPool")),1)])):v("",!0)])):v("",!0),e.store&&e.store.chainName==="Sui"&&e.hasCreatePool?(a(),i("div",vs,[s("span",{onClick:o[2]||(o[2]=l=>e.router.push(`/liquidity/create?toCoin=${("config"in e?e.config:g(L)).currentChainTokenAddress}`))},d(e.$t("newAdd.createPool")),1)])):v("",!0),s("div",{class:"position",onClick:o[3]||(o[3]=l=>e.router.push(`/liquidity/deposit?action=newposition&toCoin=${("config"in e?e.config:g(L)).currentChainTokenAddress}`))},[s("span",null,d(e.$t("button.addLiquidity")),1),ms])])]),s("div",hs,[s("div",fs,[s("div",{class:"search-input",onClick:o[8]||(o[8]=l=>e.reviseValue(""))},[ee(s("input",{"onUpdate:modelValue":o[5]||(o[5]=l=>e.searchKey=l),oninput:"value=value.match(/^[A-Za-z0-9-]+$/g,'')",placeholder:e.$t("inputPlaceholder.myPositionInput")},null,8,gs),[[me,e.searchKey]]),e.searchKey?(a(),i("div",{key:0,class:"out-icon",onClick:o[6]||(o[6]=l=>e.searchKey="")})):v("",!0),s("div",{class:"search-icon",onClick:o[7]||(o[7]=l=>e.updateLpList(e.searchKey))})]),ee(s("div",{class:"search-select search-label",onClick:o[9]||(o[9]=E(l=>e.reviseValue("label"),["stop"]))},[s("span",null,d(e.$t("newAdd.label")),1),s("div",null,d(e.labelValue),1),(a(),i("svg",{"aria-hidden":"true",class:P(e.label?"show-icon icon":"icon")},ys,2)),e.label?(a(),i("div",bs,[(a(!0),i(K,null,R(e.labelList,(l,k)=>(a(),i("div",{key:k,class:"select-menu-item",onClick:y=>e.changeSortLabel(l)},d(l),9,$s))),128))])):v("",!0)],512),[[Ge,e.chainName=="Aptos"]]),e.store.chainName!=="Aptos"?(a(),i("div",ws,[s("div",{class:"radio",onClick:o[10]||(o[10]=l=>e.clickDisplayAll())},[e.isSelectAll&&e.store.theme=="default"?(a(),i("img",{key:0,src:("importIcon"in e?e.importIcon:g(q))("/image/icon-check@2x.png"),alt:""},null,8,Cs)):v("",!0),e.isSelectAll&&e.store.theme!=="default"?(a(),i("img",{key:1,src:("importIcon"in e?e.importIcon:g(q))("/sui-image/checked.png"),alt:""},null,8,Ss)):v("",!0)]),As])):v("",!0),s("div",{class:"search-select",onClick:o[11]||(o[11]=E(l=>e.reviseValue("select"),["stop"]))},[s("span",null,d(e.$t("newAdd.sortBy")),1),s("div",null,[B(d(e.selectValue)+" ",1),_s]),(a(),i("svg",{"aria-hidden":"true",class:P(e.select?"show-icon icon":"icon")},Vs,2)),e.select?(a(),i("div",Is,[(a(!0),i(K,null,R(e.selectList,(l,k)=>(a(),i("div",{key:k,class:"select-menu-item",onClick:y=>e.changeSort(l)},[B(d(l)+" ",1),Ps],8,Ns))),128))])):v("",!0)]),(a(),i("svg",{"aria-hidden":"true",class:P(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:o[12]||(o[12]=(...l)=>e.clickRefresh&&e.clickRefresh(...l))},Ds,2))]),s("div",Ms,[_(S,{selectedKeys:e.current,"onUpdate:selectedKeys":o[13]||(o[13]=l=>e.current=l),mode:"horizontal"},{default:O(()=>[_(M,{key:"pools"},{icon:O(()=>[_(C)]),default:O(()=>[B(" "+d(e.$t("menu.pools")),1)]),_:1}),_(M,{key:"position",onClick:e.toPositionList},{icon:O(()=>[_(I)]),default:O(()=>[B(" "+d(e.$t("common.myPosition")),1)]),_:1},8,["onClick"])]),_:1},8,["selectedKeys"])]),s("div",Ts,[e.store.theme=="default"?(a(),i("div",{key:0,class:"search-select search-label",onClick:o[14]||(o[14]=E(l=>e.reviseValue("label"),["stop"]))},[s("span",null,d(e.$t("newAdd.label")),1),s("div",null,d(e.labelValue),1),(a(),i("svg",{"aria-hidden":"true",class:P(e.label?"show-icon icon":"icon")},Ks,2)),e.label?(a(),i("div",Rs,[(a(!0),i(K,null,R(e.labelList,(l,k)=>(a(),i("div",{key:k,class:"select-menu-item",onClick:y=>e.changeSortLabel(l)},d(l),9,Bs))),128))])):v("",!0)])):v("",!0),e.store.chainName!=="Aptos"?(a(),i("div",Es,[s("div",{class:"radio",onClick:o[15]||(o[15]=l=>e.clickDisplayAll())},[e.isSelectAll&&e.store.theme=="default"?(a(),i("img",{key:0,src:("importIcon"in e?e.importIcon:g(q))("/image/icon-check@2x.png"),alt:""},null,8,qs)):v("",!0),e.isSelectAll&&e.store.theme!=="default"?(a(),i("img",{key:1,src:("importIcon"in e?e.importIcon:g(q))("/sui-image/checked.png"),alt:""},null,8,Fs)):v("",!0)]),zs])):v("",!0),s("div",{class:"search-select",onClick:o[16]||(o[16]=E(l=>e.reviseValue("select"),["stop"]))},[s("span",null,d(e.$t("newAdd.sortBy")),1),s("div",null,[B(d(e.selectValue)+" ",1),Us]),(a(),i("svg",{"aria-hidden":"true",class:P(e.select?"show-icon icon":"icon")},Hs,2)),e.select?(a(),i("div",Gs,[(a(!0),i(K,null,R(e.selectList,(l,k)=>(a(),i("div",{key:k,class:"select-menu-item",onClick:y=>e.changeSort(l)},[B(d(l)+" ",1),Qs],8,Js))),128))])):v("",!0)]),s("div",{class:"search-input",onClick:o[20]||(o[20]=l=>e.reviseValue(""))},[ee(s("input",{"onUpdate:modelValue":o[17]||(o[17]=l=>e.searchKey=l),oninput:"value=value.match(/^[A-Za-z0-9-]+$/g,'')",placeholder:e.$t("inputPlaceholder.myPositionInput")},null,8,Ws),[[me,e.searchKey]]),e.searchKey?(a(),i("div",{key:0,class:"out-icon",onClick:o[18]||(o[18]=l=>e.searchKey="")})):v("",!0),s("div",{class:"search-icon",onClick:o[19]||(o[19]=l=>e.updateLpList(e.searchKey))})]),(a(),i("svg",{"aria-hidden":"true",class:P(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:o[21]||(o[21]=(...l)=>e.clickRefresh&&e.clickRefresh(...l))},Ys,2))])]),s("div",{class:"tvl-vol",onClick:o[22]||(o[22]=l=>e.reviseValue(""))},[s("div",xs,[_(T,{loading:e.listLoading,active:"",paragraph:!1},{default:O(()=>[s("div",eo," $ "+d(e.store.chainName==="Aptos"?("addCommom"in e?e.addCommom:g(F))(e.statsData&&e.statsData.tvl_in_usd_sum_v1,2):("addCommom"in e?e.addCommom:g(F))(e.statsData&&e.statsData.pure_tvl_in_usd,2)),1)]),_:1},8,["loading"]),s("div",so,d(e.$t("common.totalValueLocked")),1)]),s("div",oo,[_(T,{loading:e.listLoading,active:"",paragraph:!1},{default:O(()=>[s("div",lo," $ "+d(e.store.chainName==="Aptos"?("addCommom"in e?e.addCommom:g(F))(e.statsData&&e.statsData.vol_in_usd_24h_sum_v1,2):("addCommom"in e?e.addCommom:g(F))(e.statsData&&e.statsData.vol_in_usd_24h,2)),1)]),_:1},8,["loading"]),s("div",to,d(e.$t("common.volume24H")),1)])]),s("div",{class:"item-container",onClick:o[23]||(o[23]=l=>e.reviseValue(""))},[e.listLoading?(a(),i("div",ao,[_(b)])):e.list&&e.list.length>0?(a(!0),i(K,{key:1},R(e.list,(l,k)=>(a(),Xe(A,{key:k,"l-item":l,"is-select-all":e.isSelectAll},null,8,["l-item","is-select-all"]))),128)):(a(),i("div",no,[e.theme=="default"?(a(),i("img",io)):(a(),i("img",ro)),s("span",null,d(e.$t("common.poolsNotFound")),1)])),(a(!0),i(K,null,R(e.patchNumber,l=>(a(),i("div",{key:l,class:"patch-item"}))),128))])])}const To=He(ts,[["render",uo],["__scopeId","data-v-21cb9859"]]);export{To as default};
