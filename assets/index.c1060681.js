import{r as d,o as f,c as m,a as p,b as _,d as g,e as h}from"./vendor.6a216d86.js";const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}};v();var y=(r,t)=>{const i=r.__vccOpts||r;for(const[o,e]of t)i[o]=e;return i};const L={};function P(r,t){const i=d("router-view");return f(),m(i)}var k=y(L,[["render",P]]);const E="modulepreload",c={},O="./",a=function(t,i){return!i||i.length===0?t():Promise.all(i.map(o=>{if(o=`${O}${o}`,o in c)return;c[o]=!0;const e=o.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":E,e||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),e)return new Promise((l,u)=>{s.addEventListener("load",l),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},w=[{path:"/",name:"Home",component:()=>a(()=>import("./Home.a4ffa332.js"),["assets/Home.a4ffa332.js","assets/vendor.6a216d86.js","assets/useLogin.7cc6bb1b.js"])},{path:"/VideoDemo",name:"VideoDemo",component:()=>a(()=>import("./VideoDemo.ae63072c.js"),["assets/VideoDemo.ae63072c.js","assets/vendor.6a216d86.js","assets/useLogin.7cc6bb1b.js"])}],S=p({history:_("/tenoffer-video-demo"),routes:w}),b={user:{isLogin:!1},loginPending:!1},A={},N={setUserName(r,t){r.user.userName=t},setUserPassword(r,t){r.user.password=t},setAuthToken(r,t){r.user.userToken=t,localStorage.setItem("token",t)},setLogin(r,t){r.user.isLogin=t},setLoginPending(r,t){r.loginPending=t}},$={};var C={state:b,actions:A,mutations:N,getters:$,namespaced:!0},D=g({state:{},mutations:{},actions:{},modules:{user:C}});NodePlayer.load(()=>{h(k).use(S).use(D).mount("#app")});export{y as _};