import{_ as z,o as _,c as M,a as P,b as w,f as j}from"./app-CDbV0mng.js";const I={name:"LorenzAttractor",mounted(){this.DrawLorenz()},methods:{DrawLorenz(){const e=this.$refs.canvas,o=e.getContext("2d"),l=.01,k=10,v=28,m=8/3;function C({x:n,y:t,z:c}){return n+=k*(t-n)*l,t+=(n*(v-c)-t)*l,c+=(n*t-m*c)*l,{x:n,y:t,z:c}}function q(n,t){return[...Array(t)].forEach(()=>{const c=n[n.length-1],u=C(c);n.push(u)}),n}function A(n,t,c){const u=Math.min(...n.map(({x:s,y:a,z:p})=>s)),i=Math.max(...n.map(({x:s,y:a,z:p})=>s)),b=Math.min(...n.map(({x:s,y:a,z:p})=>a)),f=Math.max(...n.map(({x:s,y:a,z:p})=>a)),y=Math.min(...n.map(({x:s,y:a,z:p})=>p)),g=Math.max(...n.map(({x:s,y:a,z:p})=>p)),r=(s,a,p)=>t*c*(s-a)/(p-a);return n.map(({x:s,y:a,z:p})=>(s=r(s,u,i),a=r(a,b,f),p=r(p,y,g),{x:s,y:a,z:p}))}var h=0;function S(n){h+=.01;const t=150,c=e.height/2,u=({x:i,y:b,z:f})=>{const y=(i-t)*Math.cos(h)-(b-c)*Math.sin(h)+t,g=e.height/9+f,r=Math.max(0,Math.min(e.width,y)),s=Math.max(0,Math.min(e.height,g));return[r,s]};o.strokeStyle="blue",o.lineWidth=1,o.beginPath(),n.map(u).forEach(i=>o.lineTo(i[0],i[1])),o.stroke()}const d=[{x:1,y:1,z:1}];function x(){o.clearRect(0,0,e.width,e.height),q(d,10);const n=A(d,600,.2);for(S(n);d.length>1600;)d.shift();setTimeout(x,1e3/60)}x()}}},L={ref:"canvas"};function T(e,o,l,k,v,m){return _(),M("canvas",L,null,512)}const $=z(I,[["render",T],["__scopeId","data-v-8874da1d"],["__file","LorenzAttractor.vue"]]),V={__name:"lorenz.html",setup(e,{expose:o}){o();const l={LorenzAttractor:$};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},D=w("h1",{id:"lorenz-attractor",tabindex:"-1"},[w("a",{class:"header-anchor",href:"#lorenz-attractor"},[w("span",null,"Lorenz Attractor")])],-1),E=j(`<p>&quot;The flapping of the wings of a butterfly can be felt on the other side of the world.&quot;</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>I was inspired to create this animation by a YouTuber named Veritasium, as seen in his video about <a href="https://www.youtube.com/watch?v=fDek6cYijxI" target="_blank" rel="noopener noreferrer">chaos theory</a>. The video sparked my curiosity about how small changes in the inputs of an equation can drastically alter the system&#39;s output. This behavior is evident in our daily lives, influencing our decisions, whether big or small. Chaotic equations offer a unique way of mapping such behavior.</p><h2 id="technical-details" tabindex="-1"><a class="header-anchor" href="#technical-details"><span>Technical Details</span></a></h2><p>To create this animation in JavaScript, I followed the steps in the video <a href="https://www.youtube.com/watch?v=AwlOq242GgI&amp;t" target="_blank" rel="noopener noreferrer">found here</a>. I made some adjustments to the code to integrate it with VuePress&#39; template syntax, and for correct styling, size ratios.</p><h3 id="challenges" tabindex="-1"><a class="header-anchor" href="#challenges"><span>Challenges</span></a></h3><p>Here are some specific challenges I faced and how I resolved them:</p><ul><li><strong>Compatibility</strong>: To get the Vue.js component to work with VuePress, some extra configurations were required in order to register it properly. In the config.js file I had to add the following code:</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">LorenzAttractor</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./components/LorenzAttractor.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Styling Adjustments</strong>: Ensuring the animation looks good within the constraints of VuePress required tweaking the CSS and layout.</li></ul><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code"><span>Source Code</span></a></h2><p>Again, the code below was adapted from the video <a href="https://www.youtube.com/watch?v=AwlOq242GgI&amp;t" target="_blank" rel="noopener noreferrer">found here</a>.</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;LorenzAttractor&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">DrawLorenz</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">DrawLorenz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>canvas<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">const</span> dt <span class="token operator">=</span> <span class="token number">0.01</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> sigma <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> rho <span class="token operator">=</span> <span class="token number">28</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> beta <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">integrate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                x <span class="token operator">+=</span> <span class="token punctuation">(</span>sigma <span class="token operator">*</span> <span class="token punctuation">(</span>y <span class="token operator">-</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> dt<span class="token punctuation">;</span></span>
<span class="line">                y <span class="token operator">+=</span> <span class="token punctuation">(</span>x <span class="token operator">*</span> <span class="token punctuation">(</span>rho <span class="token operator">-</span> z<span class="token punctuation">)</span> <span class="token operator">-</span> y<span class="token punctuation">)</span> <span class="token operator">*</span> dt<span class="token punctuation">;</span></span>
<span class="line">                z <span class="token operator">+=</span> <span class="token punctuation">(</span>x <span class="token operator">*</span> y <span class="token operator">-</span> beta <span class="token operator">*</span> z<span class="token punctuation">)</span> <span class="token operator">*</span> dt<span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">extendPath</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> steps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span>steps<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">const</span> lastP <span class="token operator">=</span> path<span class="token punctuation">[</span>path<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">integrate</span><span class="token punctuation">(</span>lastP<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> path<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token parameter">points<span class="token punctuation">,</span> size<span class="token punctuation">,</span> scaleFactor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">const</span> mx <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> Mx <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> my <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> My <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> mz <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> z<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> Mz <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> z<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">const</span> <span class="token function-variable function">s</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> mv<span class="token punctuation">,</span> Mv</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> size <span class="token operator">*</span> scaleFactor <span class="token operator">*</span> <span class="token punctuation">(</span>v <span class="token operator">-</span> mv<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>Mv <span class="token operator">-</span> mv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                    x <span class="token operator">=</span> <span class="token function">s</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> mx<span class="token punctuation">,</span> Mx<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    y <span class="token operator">=</span> <span class="token function">s</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> my<span class="token punctuation">,</span> My<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    z <span class="token operator">=</span> <span class="token function">s</span><span class="token punctuation">(</span>z<span class="token punctuation">,</span> mz<span class="token punctuation">,</span> Mz<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">var</span> q <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                q <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span> <span class="token comment">// Smaller increment value</span></span>
<span class="line">                <span class="token keyword">const</span> rotationCenterX <span class="token operator">=</span> <span class="token number">150</span><span class="token punctuation">;</span> <span class="token comment">// X-coordinate of the new rotation center</span></span>
<span class="line">                <span class="token keyword">const</span> rotationCenterY <span class="token operator">=</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// Y-coordinate of the new rotation center</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">const</span> <span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// Apply rotation around the new center point</span></span>
<span class="line">                    <span class="token keyword">const</span> xx <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">-</span> rotationCenterX<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>y <span class="token operator">-</span> rotationCenterY<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token operator">+</span> rotationCenterX<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">const</span> yy <span class="token operator">=</span> z<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                    <span class="token comment">// Clip to canvas bounds</span></span>
<span class="line">                    <span class="token keyword">const</span> xClipped <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> xx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">const</span> yClipped <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>height<span class="token punctuation">,</span> yy<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                    <span class="token keyword">return</span> <span class="token punctuation">[</span>xClipped<span class="token punctuation">,</span> yClipped<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// Set the strokeStyle to blue</span></span>
<span class="line">                ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                path<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">extendPath</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> scaled <span class="token operator">=</span> <span class="token function">scale</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">draw</span><span class="token punctuation">(</span>scaled<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">while</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1000</span><span class="token punctuation">)</span> path<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">setTimeout</span><span class="token punctuation">(</span>step<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token function">step</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">canvas</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function Y(e,o,l,k,v,m){return _(),M("div",null,[D,P(k.LorenzAttractor),E])}const N=z(V,[["render",Y],["__file","lorenz.html.vue"]]),O=JSON.parse('{"path":"/visuals/lorenz.html","title":"Lorenz Attractor","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Technical Details","slug":"technical-details","link":"#technical-details","children":[{"level":3,"title":"Challenges","slug":"challenges","link":"#challenges","children":[]}]},{"level":2,"title":"Source Code","slug":"source-code","link":"#source-code","children":[]}],"git":{"updatedTime":1718219589000,"contributors":[{"name":"ChazArvizu","email":"cryan018@gmail.com","commits":2}]},"filePathRelative":"visuals/lorenz.md"}');export{N as comp,O as data};