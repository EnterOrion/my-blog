const __vite__fileDeps=["../chunks/first-blog-post.CGhvwzBJ.js","../chunks/scheduler.CtbWrGNo.js","../chunks/index.CyDL9MQL.js","../chunks/second-blog-post.utg1s92-.js","../chunks/third-blog-post.BuJ-AfB3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as O}from"../chunks/preload-helper.D6kgxu3v.js";import{s as W}from"../chunks/scheduler.CtbWrGNo.js";import{S as B,i as F,z as k,e as f,t as R,s as q,p as L,c as h,a as v,b as T,d as u,f as S,q as G,l as H,g as J,h as i,r as M,j as z,o as C,w as K,n as x,u as U,y as N}from"../chunks/index.CyDL9MQL.js";/* empty css                     */const Q=(s,e)=>{const o=s[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})},X=async({data:s})=>{const e=await Q(Object.assign({"../../../lib/posts/first-blog-post.md":()=>O(()=>import("../chunks/first-blog-post.CGhvwzBJ.js"),__vite__mapDeps([0,1,2]),import.meta.url),"../../../lib/posts/second-blog-post.md":()=>O(()=>import("../chunks/second-blog-post.utg1s92-.js"),__vite__mapDeps([3,1,2]),import.meta.url),"../../../lib/posts/third-blog-post.md":()=>O(()=>import("../chunks/third-blog-post.BuJ-AfB3.js"),__vite__mapDeps([4,1,2]),import.meta.url)}),`../../../lib/posts/${s.post.slug}.md`);return{post:s.post,component:e.default,layout:{fullWidth:!0}}},st=Object.freeze(Object.defineProperty({__proto__:null,load:X},Symbol.toStringTag,{value:"Module"}));function Y(s){let e,o,n,r,g=s[0].post.title+"",E,P,_,w,b=s[0].post.date+"",$,D,c,t,d;var p=s[0].component;function V(a,l){return{}}return p&&(t=k(p,V())),{c(){e=f("div"),o=f("article"),n=f("header"),r=f("h1"),E=R(g),P=q(),_=f("div"),w=R("Published on "),$=R(b),D=q(),c=f("div"),t&&L(t.$$.fragment),this.h()},l(a){e=h(a,"DIV",{});var l=v(e);o=h(l,"ARTICLE",{});var m=v(o);n=h(m,"HEADER",{});var y=v(n);r=h(y,"H1",{class:!0});var A=v(r);E=T(A,g),A.forEach(u),P=S(y),_=h(y,"DIV",{});var I=v(_);w=T(I,"Published on "),$=T(I,b),I.forEach(u),y.forEach(u),D=S(m),c=h(m,"DIV",{class:!0});var j=v(c);t&&G(t.$$.fragment,j),j.forEach(u),m.forEach(u),l.forEach(u),this.h()},h(){H(r,"class","post-header"),H(c,"class","post-body")},m(a,l){J(a,e,l),i(e,o),i(o,n),i(n,r),i(r,E),i(n,P),i(n,_),i(_,w),i(_,$),i(o,D),i(o,c),t&&M(t,c,null),d=!0},p(a,[l]){if((!d||l&1)&&g!==(g=a[0].post.title+"")&&z(E,g),(!d||l&1)&&b!==(b=a[0].post.date+"")&&z($,b),l&1&&p!==(p=a[0].component)){if(t){N();const m=t;C(m.$$.fragment,1,0,()=>{U(m,1)}),K()}p?(t=k(p,V()),L(t.$$.fragment),x(t.$$.fragment,1),M(t,c,null)):t=null}},i(a){d||(t&&x(t.$$.fragment,a),d=!0)},o(a){t&&C(t.$$.fragment,a),d=!1},d(a){a&&u(e),t&&U(t)}}}function Z(s,e,o){let{data:n}=e;return s.$$set=r=>{"data"in r&&o(0,n=r.data)},[n]}class nt extends B{constructor(e){super(),F(this,e,Z,Y,W,{data:0})}}export{nt as component,st as universal};
