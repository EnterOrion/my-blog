const __vite__fileDeps=["_app/immutable/chunks/first-blog-post.CLEFEEWR.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.Q1tFLSaQ.js","_app/immutable/chunks/second-blog-post.DFPJ8w0Y.js","_app/immutable/chunks/third-blog-post.Br1aTSBg.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as L}from"../chunks/preload-helper.BqjOJQfC.js";import{s as F}from"../chunks/scheduler.CtbWrGNo.js";import{S as G,i as J,z as C,e as u,s as R,t as V,n as x,c as m,a as $,k as K,f as A,b as H,d as p,o as Q,p as M,g as X,h as s,q as z,j as U,m as B,w as Y,l as N,r as W,y as Z}from"../chunks/index.Q1tFLSaQ.js";/* empty css                     */import{b as tt}from"../chunks/paths.O2ylrA2K.js";const et=(n,e)=>{const o=n[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((f,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})},ot=async({data:n})=>{const e=await et(Object.assign({"../../../lib/posts/first-blog-post.md":()=>L(()=>import("../chunks/first-blog-post.CLEFEEWR.js"),__vite__mapDeps([0,1,2])),"../../../lib/posts/second-blog-post.md":()=>L(()=>import("../chunks/second-blog-post.DFPJ8w0Y.js"),__vite__mapDeps([3,1,2])),"../../../lib/posts/third-blog-post.md":()=>L(()=>import("../chunks/third-blog-post.Br1aTSBg.js"),__vite__mapDeps([4,1,2]))}),`../../../lib/posts/${n.post.slug}.md`);return{post:n.post,component:e.default,layout:{fullWidth:!0}}},_t=Object.freeze(Object.defineProperty({__proto__:null,load:ot},Symbol.toStringTag,{value:"Module"}));function at(n){let e,o,f=`<a href="${`${tt}/blog`}">←</a>`,i,l,c,v,E=n[0].post.title+"",P,D,h,I,y=n[0].post.date+"",T,O,_,t,b;var g=n[0].component;function j(a,r){return{}}return g&&(t=C(g,j())),{c(){e=u("div"),o=u("button"),o.innerHTML=f,i=R(),l=u("article"),c=u("header"),v=u("h1"),P=V(E),D=R(),h=u("div"),I=V("Published on "),T=V(y),O=R(),_=u("div"),t&&x(t.$$.fragment),this.h()},l(a){e=m(a,"DIV",{});var r=$(e);o=m(r,"BUTTON",{class:!0,"data-svelte-h":!0}),K(o)!=="svelte-1dd2rmg"&&(o.innerHTML=f),i=A(r),l=m(r,"ARTICLE",{});var d=$(l);c=m(d,"HEADER",{});var w=$(c);v=m(w,"H1",{class:!0});var q=$(v);P=H(q,E),q.forEach(p),D=A(w),h=m(w,"DIV",{});var k=$(h);I=H(k,"Published on "),T=H(k,y),k.forEach(p),w.forEach(p),O=A(d),_=m(d,"DIV",{class:!0});var S=$(_);t&&Q(t.$$.fragment,S),S.forEach(p),d.forEach(p),r.forEach(p),this.h()},h(){M(o,"class","back-button"),M(v,"class","post-header"),M(_,"class","post-body")},m(a,r){X(a,e,r),s(e,o),s(e,i),s(e,l),s(l,c),s(c,v),s(v,P),s(c,D),s(c,h),s(h,I),s(h,T),s(l,O),s(l,_),t&&z(t,_,null),b=!0},p(a,[r]){if((!b||r&1)&&E!==(E=a[0].post.title+"")&&U(P,E),(!b||r&1)&&y!==(y=a[0].post.date+"")&&U(T,y),r&1&&g!==(g=a[0].component)){if(t){Z();const d=t;B(d.$$.fragment,1,0,()=>{W(d,1)}),Y()}g?(t=C(g,j()),x(t.$$.fragment),N(t.$$.fragment,1),z(t,_,null)):t=null}},i(a){b||(t&&N(t.$$.fragment,a),b=!0)},o(a){t&&B(t.$$.fragment,a),b=!1},d(a){a&&p(e),t&&W(t)}}}function st(n,e,o){let{data:f}=e;return n.$$set=i=>{"data"in i&&o(0,f=i.data)},[f]}class dt extends G{constructor(e){super(),J(this,e,st,at,F,{data:0})}}export{dt as component,_t as universal};
