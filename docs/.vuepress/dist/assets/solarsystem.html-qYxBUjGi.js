const __vite__fileDeps=["assets/SolarSystem-DnXzcRu1.js","assets/app-OlqwzTUn.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as l,r as a,o as c,c as r,a as n,w as p,b as s,d as e,e as u,u as d,f as h,g as m}from"./app-OlqwzTUn.js";const v=s("h1",{id:"solar-system-simulation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#solar-system-simulation"},[s("span",null,"Solar System Simulation")])],-1),g=s("p",null,"Explore the wonders of our solar system with this interactive simulation.",-1),k=s("h2",{id:"introduction",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#introduction"},[s("span",null,"Introduction")])],-1),f={href:"https://www.youtube.com/watch?v=pgFnZyL8zEA&t=0",target:"_blank",rel:"noopener noreferrer"},b=u(`<h2 id="technical-details" tabindex="-1"><a class="header-anchor" href="#technical-details"><span>Technical Details</span></a></h2><p>Implementing this component required several configurations to ensure it runs smoothly on VuePress 2. Here are the additional problems that needed solving:</p><h3 id="challenges" tabindex="-1"><a class="header-anchor" href="#challenges"><span>Challenges</span></a></h3><p><strong>Browser-Specific APIs</strong>: p5.js relies on browser-specific APIs such as <code>window</code> and <code>document</code>. These APIs are unavailable during Server-Side Rendering (SSR) in a Node.js environment, causing errors if accessed during the build process. To solve this issue the component had to be loaded asynchronously, we ensure it is only executed in the client-side environment via the <code>&lt;ClientOnly&gt;</code> tags where the necessary browser APIs are available. This prevents any SSR-related issues. Here&#39;s the code thats needed to get this type of behavior:</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SolarSystem</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> SolarSystem <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../../components/SolarSystem.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="equations-used" tabindex="-1"><a class="header-anchor" href="#equations-used"><span>Equations Used</span></a></h3><p><strong>Gravitational Attraction</strong>: The simulation uses Newton&#39;s law of universal gravitation to calculate the forces between the sun and planets.</p><p><strong>Orbital Mechanics</strong>: Planets&#39; initial positions and velocities are set to simulate realistic orbits around the sun.</p><h2 id="additional-customizations" tabindex="-1"><a class="header-anchor" href="#additional-customizations"><span>Additional Customizations</span></a></h2><p>To enhance this simulation, I made several customizations:</p><ul><li>Adjusting the initial positions and velocities of the planets for a more dynamic simulation.</li><li>Ensuring the colors of the planets are bright neon colors for better visual appeal.</li><li>Expanding the radius of planetary orbits for a more spacious simulation.</li></ul>`,11),y={__name:"solarsystem.html",setup(_){const t=h(()=>m(()=>import("./SolarSystem-DnXzcRu1.js"),__vite__mapDeps([0,1])));return(w,S)=>{const i=a("ClientOnly"),o=a("ExternalLinkIcon");return c(),r("div",null,[v,n(i,null,{default:p(()=>[n(d(t))]),_:1}),g,k,s("p",null,[e("I have always been fascinated with outer space and its limitless possibilities it provides for our future. To capture some of this fascination, I decided to create an interactive solar system simulation. I followed an excellent tutorial, which can be "),s("a",f,[e("found here"),n(o)]),e(". The tutorial provided the necessary JavaScript for the simulation, but additional steps were required to make additional customizations integrate it into VuePress 2.")]),b])}}},C=l(y,[["__file","solarsystem.html.vue"]]),A=JSON.parse('{"path":"/visuals/solarsystem.html","title":"Solar System Simulation","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Technical Details","slug":"technical-details","link":"#technical-details","children":[{"level":3,"title":"Challenges","slug":"challenges","link":"#challenges","children":[]},{"level":3,"title":"Equations Used","slug":"equations-used","link":"#equations-used","children":[]}]},{"level":2,"title":"Additional Customizations","slug":"additional-customizations","link":"#additional-customizations","children":[]}],"git":{"updatedTime":1718219589000,"contributors":[{"name":"ChazArvizu","email":"cryan018@gmail.com","commits":2}]},"filePathRelative":"visuals/solarsystem.md"}');export{C as comp,A as data};