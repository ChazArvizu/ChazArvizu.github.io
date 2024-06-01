import{_ as M,o as C,c as A,r as P,a as h,b as s,d as l,e as q}from"./app-DoqGXxCF.js";const j={name:"LorenzAttractor",mounted(){this.DrawLorenz()},methods:{DrawLorenz(){const c=this.$refs.canvas,u=c.getContext("2d"),k=.01,i=10,x=28,_=8/3;function I({x:n,y:o,z:e}){return n+=i*(o-n)*k,o+=(n*(x-e)-o)*k,e+=(n*o-_*e)*k,{x:n,y:o,z:e}}function L(n,o){return[...Array(o)].forEach(()=>{const e=n[n.length-1],d=I(e);n.push(d)}),n}function S(n,o,e){const d=Math.min(...n.map(({x:a,y:t,z:p})=>a)),r=Math.max(...n.map(({x:a,y:t,z:p})=>a)),f=Math.min(...n.map(({x:a,y:t,z:p})=>t)),y=Math.max(...n.map(({x:a,y:t,z:p})=>t)),g=Math.min(...n.map(({x:a,y:t,z:p})=>p)),w=Math.max(...n.map(({x:a,y:t,z:p})=>p)),v=(a,t,p)=>o*e*(a-t)/(p-t);return n.map(({x:a,y:t,z:p})=>(a=v(a,d,r),t=v(t,f,y),p=v(p,g,w),{x:a,y:t,z:p}))}var b=0;function T(n){b+=.01;const o=150,e=c.height/2,d=({x:r,y:f,z:y})=>{const g=(r-o)*Math.cos(b)-(f-e)*Math.sin(b)+o,w=c.height/9+y,v=Math.max(0,Math.min(c.width,g)),a=Math.max(0,Math.min(c.height,w));return[v,a]};u.strokeStyle="blue",u.lineWidth=1,u.beginPath(),n.map(d).forEach(r=>u.lineTo(r[0],r[1])),u.stroke()}const m=[{x:1,y:1,z:1}];function z(){u.clearRect(0,0,c.width,c.height),L(m,10);const n=S(m,600,.2);for(T(n);m.length>1600;)m.shift();setTimeout(z,1e3/60)}z()}}},V={ref:"canvas"};function E(c,u,k,i,x,_){return C(),A("canvas",V,null,512)}const $=M(j,[["render",E],["__scopeId","data-v-8874da1d"],["__file","LorenzAttractor.vue"]]),D=s("h1",{id:"lorenz-attractor",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#lorenz-attractor"},[s("span",null,"Lorenz Attractor")])],-1),Y=s("p",null,'"The flapping of the wings of a butterfly can be felt on the other side of the world."',-1),N=s("h2",{id:"introduction",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#introduction"},[s("span",null,"Introduction")])],-1),X={href:"https://www.youtube.com/watch?v=fDek6cYijxI",target:"_blank",rel:"noopener noreferrer"},B=s("h2",{id:"technical-details",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#technical-details"},[s("span",null,"Technical Details")])],-1),O={href:"https://www.youtube.com/watch?v=AwlOq242GgI&t",target:"_blank",rel:"noopener noreferrer"},R=q(`<p>Here are some specific challenges I faced and how I resolved them:</p><ul><li><strong>Compatibility</strong>: To get the Vue.js component to work with VuePress, some extra configurations were required in order to register it properly. In the config.js file I had to add the following code:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">LorenzAttractor</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./components/LorenzAttractor.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Styling Adjustments</strong>: Ensuring the animation looks good within the constraints of VuePress required tweaking the CSS and layout.</li></ul><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code"><span>Source Code</span></a></h2>`,5),F={href:"https://www.youtube.com/watch?v=AwlOq242GgI&t",target:"_blank",rel:"noopener noreferrer"},G=q(`<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;LorenzAttractor&#39;</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">DrawLorenz</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">DrawLorenz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>canvas<span class="token punctuation">;</span>
            <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">const</span> dt <span class="token operator">=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> sigma <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> rho <span class="token operator">=</span> <span class="token number">28</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> beta <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>

            <span class="token keyword">function</span> <span class="token function">integrate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                x <span class="token operator">+=</span> <span class="token punctuation">(</span>sigma <span class="token operator">*</span> <span class="token punctuation">(</span>y <span class="token operator">-</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> dt<span class="token punctuation">;</span>
                y <span class="token operator">+=</span> <span class="token punctuation">(</span>x <span class="token operator">*</span> <span class="token punctuation">(</span>rho <span class="token operator">-</span> z<span class="token punctuation">)</span> <span class="token operator">-</span> y<span class="token punctuation">)</span> <span class="token operator">*</span> dt<span class="token punctuation">;</span>
                z <span class="token operator">+=</span> <span class="token punctuation">(</span>x <span class="token operator">*</span> y <span class="token operator">-</span> beta <span class="token operator">*</span> z<span class="token punctuation">)</span> <span class="token operator">*</span> dt<span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">function</span> <span class="token function">extendPath</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> steps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span>steps<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> lastP <span class="token operator">=</span> path<span class="token punctuation">[</span>path<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">integrate</span><span class="token punctuation">(</span>lastP<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> path<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">function</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token parameter">points<span class="token punctuation">,</span> size<span class="token punctuation">,</span> scaleFactor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> mx <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> Mx <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> my <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> My <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> mz <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> z<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> Mz <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> z<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">const</span> <span class="token function-variable function">s</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> mv<span class="token punctuation">,</span> Mv</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> size <span class="token operator">*</span> scaleFactor <span class="token operator">*</span> <span class="token punctuation">(</span>v <span class="token operator">-</span> mv<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>Mv <span class="token operator">-</span> mv<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> points<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    x <span class="token operator">=</span> <span class="token function">s</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> mx<span class="token punctuation">,</span> Mx<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    y <span class="token operator">=</span> <span class="token function">s</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> my<span class="token punctuation">,</span> My<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    z <span class="token operator">=</span> <span class="token function">s</span><span class="token punctuation">(</span>z<span class="token punctuation">,</span> mz<span class="token punctuation">,</span> Mz<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">var</span> q <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                q <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span> <span class="token comment">// Smaller increment value</span>
                <span class="token keyword">const</span> rotationCenterX <span class="token operator">=</span> <span class="token number">150</span><span class="token punctuation">;</span> <span class="token comment">// X-coordinate of the new rotation center</span>
                <span class="token keyword">const</span> rotationCenterY <span class="token operator">=</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// Y-coordinate of the new rotation center</span>

                <span class="token keyword">const</span> <span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">// Apply rotation around the new center point</span>
                    <span class="token keyword">const</span> xx <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">-</span> rotationCenterX<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>y <span class="token operator">-</span> rotationCenterY<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token operator">+</span> rotationCenterX<span class="token punctuation">;</span>
                    <span class="token keyword">const</span> yy <span class="token operator">=</span> z<span class="token punctuation">;</span>

                    <span class="token comment">// Clip to canvas bounds</span>
                    <span class="token keyword">const</span> xClipped <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> xx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">const</span> yClipped <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>height<span class="token punctuation">,</span> yy<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token keyword">return</span> <span class="token punctuation">[</span>xClipped<span class="token punctuation">,</span> yClipped<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>

                <span class="token comment">// Set the strokeStyle to blue</span>
                ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">;</span>

                ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

                ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                path<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">extendPath</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> scaled <span class="token operator">=</span> <span class="token function">scale</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">draw</span><span class="token punctuation">(</span>scaled<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1000</span><span class="token punctuation">)</span> path<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span>step<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">step</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">canvas</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),J={__name:"lorenz.html",setup(c){return(u,k)=>{const i=P("ExternalLinkIcon");return C(),A("div",null,[D,h($),Y,N,s("p",null,[l("I was inspired to create this animation by a YouTuber named Veritasium, as seen in his video about "),s("a",X,[l("chaos theory"),h(i)]),l(". The video sparked my curiosity about how small changes in the inputs of an equation can drastically alter the system's output. This behavior is evident in our daily lives, influencing our decisions, whether big or small. Chaotic equations offer a unique way of mapping such behavior.")]),B,s("p",null,[l("To create this animation in JavaScript, I followed the steps in the video "),s("a",O,[l("found here"),h(i)]),l(". I made some adjustments to the code for correct styling, size ratios, and to integrate it with VuePress' template syntax.")]),R,s("p",null,[l("Again, the code below was adapted from the video "),s("a",F,[l("found here"),h(i)]),l(".")]),G])}}},H=M(J,[["__file","lorenz.html.vue"]]),U=JSON.parse('{"path":"/lorenz.html","title":"Lorenz Attractor","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Technical Details","slug":"technical-details","link":"#technical-details","children":[]},{"level":2,"title":"Source Code","slug":"source-code","link":"#source-code","children":[]}],"git":{"updatedTime":1716679725000,"contributors":[{"name":"ChazArvizu","email":"cryan018@gmail.com","commits":4}]},"filePathRelative":"lorenz.md"}');export{H as comp,U as data};
