import{o as l,g as r,f as _,m as u,q as m,h as t,w as h,s as g,k as c,u as d,F as w}from"./vendor.6a216d86.js";import{_ as x}from"./index.c1060681.js";import{u as b}from"./useLogin.7cc6bb1b.js";const F={},V={class:"w-[200px] h-[200px] bg-[url('src/assets/images/videoLoading.svg')] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"};function $(i,s){return l(),r("div",V)}var A=x(F,[["render",$]]);const B={class:"vd w-[980px] mx-auto relative"},C={class:"fullscreen-video"},k=t("canvas",{id:"video",width:"980",height:"588"},null,-1),y=t("br",null,null,-1),D=_({setup(i){u("");const s=u("https://v1.gamenow.online/live?app=bwtc&stream=watch01"),n=u(!0);let e=new NodePlayer;m(()=>{console.log("\u521D\u59CB\u5316"),e.setView("video"),e.setScaleMode(1),e.setBufferTime(300),e.on("error",o=>{console.log("\u76F4\u64AD\u767C\u751F\u932F\u8AA4",o)}),e.on("videoInfo",o=>{console.log("\u986F\u793AVideo",o),n.value=!1}),e.on("stop",()=>{console.log("\u7D50\u675F\u64AD\u653EVideo"),n.value=!0}),a()});function a(){e.setKeepScreenOn(),e.start(s.value)}function f(){e.stop(),e.clearView()}function v(o){o.fullscreen()}return window.addEventListener("focus",()=>{e&&(console.log("\u57F7\u884C"),f(),a())}),(o,p)=>(l(),r("div",B,[t("div",C,[k,y,h(c(A,null,null,512),[[g,n.value]]),t("i",{class:"absolute right-[0.5%] bottom-[4%] text-white bi bi-arrows-fullscreen",onClick:p[0]||(p[0]=P=>v(d(e)))})])]))}}),S={class:"h-[100px] p-5"},L={class:"w-[100px] ml-auto"},E=_({setup(i){const{logOut:s}=b();return(n,e)=>(l(),r("div",S,[t("div",L,[t("button",{class:"primary-btn",onClick:e[0]||(e[0]=(...a)=>d(s)&&d(s)(...a))},"\u767B\u51FA")])]))}}),N={class:"flex items-center"},I=_({setup(i){return(s,n)=>(l(),r(w,null,[c(E),t("div",N,[c(D)])],64))}});export{I as default};