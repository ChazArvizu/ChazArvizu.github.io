import{_ as $,o as k,c as A}from"./app-B57wZ2HV.js";const b={name:"LorenzAttractor",mounted(){this.DrawLorenz()},methods:{DrawLorenz(){const s=this.$refs.canvas,r=s.getContext("2d"),d=.01,_=10,g=28,z=8/3;function w({x:t,y:o,z:c}){return t+=_*(o-t)*d,o+=(t*(g-c)-o)*d,c+=(t*o-z*c)*d,{x:t,y:o,z:c}}function y(t,o){return[...Array(o)].forEach(()=>{const c=t[t.length-1],i=w(c);t.push(i)}),t}function L(t,o,c){const i=Math.min(...t.map(({x:n,y:e,z:a})=>n)),h=Math.max(...t.map(({x:n,y:e,z:a})=>n)),f=Math.min(...t.map(({x:n,y:e,z:a})=>e)),p=Math.max(...t.map(({x:n,y:e,z:a})=>e)),x=Math.min(...t.map(({x:n,y:e,z:a})=>a)),M=Math.max(...t.map(({x:n,y:e,z:a})=>a)),m=(n,e,a)=>o*c*(n-e)/(a-e);return t.map(({x:n,y:e,z:a})=>(n=m(n,i,h),e=m(e,f,p),a=m(a,x,M),{x:n,y:e,z:a}))}var u=0;function C(t){u+=.01;const o=150,c=s.height/2,i=({x:h,y:f,z:p})=>{const x=(h-o)*Math.cos(u)-(f-c)*Math.sin(u)+o,M=s.height/9+p,m=Math.max(0,Math.min(s.width,x)),n=Math.max(0,Math.min(s.height,M));return[m,n]};r.strokeStyle="blue",r.lineWidth=1,r.beginPath(),t.map(i).forEach(h=>r.lineTo(h[0],h[1])),r.stroke()}const l=[{x:1,y:1,z:1}];function v(){r.clearRect(0,0,s.width,s.height),y(l,10);const t=L(l,600,.2);for(C(t);l.length>1600;)l.shift();setTimeout(v,1e3/60)}v()}}},E={ref:"canvas"};function P(s,r,d,_,g,z){return k(),A("canvas",E,null,512)}const D=$(b,[["render",P],["__scopeId","data-v-8874da1d"],["__file","LorenzAttractor.vue"]]);export{D as L};
