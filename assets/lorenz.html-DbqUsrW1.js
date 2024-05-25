import{L as p}from"./LorenzAttractor-DcGVS5Ty.js";import{_ as o,r as e,o as c,c as u,a,b as n,d as s,e as l}from"./app-C1qi45iS.js";const i=n("h1",{id:"lorenz-attractor",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lorenz-attractor"},[n("span",null,"Lorenz Attractor")])],-1),k=n("p",null,'"The flapping of the wings of a butterfly can be felt on the other side of the world."',-1),r={href:"https://www.youtube.com/watch?v=AwlOq242GgI&t",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.youtube.com/watch?v=fDek6cYijxI",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.youtube.com/watch?v=AwlOq242GgI&t",target:"_blank",rel:"noopener noreferrer"},m=l(`<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={__name:"lorenz.html",setup(h){return(y,f)=>{const t=e("ExternalLinkIcon");return c(),u("div",null,[i,a(p),k,n("p",null,[s("To create this animation in javascript I followed the steps in the video "),n("a",r,[s("found here"),a(t)]),s(". I only had to make some small adjustments in the code to get the correct styling, size ratios and to get the animation to work with VuePress' template syntax.")]),n("p",null,[s("I took inspiration to create this little animation from a youtuber by the name of Veritasium, as seen in his video about "),n("a",d,[s("chaos theory"),a(t)]),s(". This video sparked my curiosity about chaos theory and how small changes to the inputs of an equation can drastically change the output of a system. This sort of behavior is present in our everyday life and takes the shape of whatever decisions we make, whether they are big or small. Our decisions are what define us, and chaotic equations offer a special way of mapping such behavior.")]),n("p",null,[s("Again, the code below was adapted from the video "),n("a",v,[s("found here"),a(t)]),s(".")]),m])}}},x=o(b,[["__file","lorenz.html.vue"]]),z=JSON.parse('{"path":"/lorenz.html","title":"Lorenz Attractor","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1715626914000,"contributors":[{"name":"ChazArvizu","email":"cryan018@gmail.com","commits":3}]},"filePathRelative":"lorenz.md"}');export{x as comp,z as data};