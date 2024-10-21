import{_ as e,c as a,o as t,a2 as i}from"./chunks/framework.C62L6tH-.js";const k=JSON.parse('{"title":"框架","description":"","frontmatter":{},"headers":[],"relativePath":"interview/markdown/框架.md","filePath":"interview/markdown/框架.md"}'),o={name:"interview/markdown/框架.md"},s=i(`<h1 id="框架" tabindex="-1">框架 <a class="header-anchor" href="#框架" aria-label="Permalink to &quot;框架&quot;">​</a></h1><h2 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;vue&quot;">​</a></h2><h3 id="vue2-和-vue3的区别" tabindex="-1">vue2 和 vue3的区别？ <a class="header-anchor" href="#vue2-和-vue3的区别" aria-label="Permalink to &quot;vue2 和 vue3的区别？&quot;">​</a></h3><h4 id="_1-写法" tabindex="-1">1. 写法 <a class="header-anchor" href="#_1-写法" aria-label="Permalink to &quot;1. 写法&quot;">​</a></h4><blockquote><p>vue2采用选项式(options) api，vue3采用组合式（composition) api</p><p>相比于选项式api，组合式api更灵活，业务逻辑更加清晰，而且代码重用和维护也更加方便</p></blockquote><h4 id="_2-大小和性能" tabindex="-1">2. 大小和性能 <a class="header-anchor" href="#_2-大小和性能" aria-label="Permalink to &quot;2. 大小和性能&quot;">​</a></h4><blockquote><p>vue3相比于vue2，重写了虚拟dom的实现，并优化了模板编译，组件初始化等，取得了速度的提升</p><p>而且vue3采用tree-sharking功能，很多模块例如ref,onMounted等都可以进行按需加载，进一步减小了包的体积</p></blockquote><h4 id="_3-类型支持" tabindex="-1">3. 类型支持 <a class="header-anchor" href="#_3-类型支持" aria-label="Permalink to &quot;3. 类型支持&quot;">​</a></h4><blockquote><p>vue3使ts构建的，相比于vue2，vue3的类型系统更加完善，对ts的支持也更好</p></blockquote><h4 id="_4-响应式原理" tabindex="-1">4. 响应式原理 <a class="header-anchor" href="#_4-响应式原理" aria-label="Permalink to &quot;4. 响应式原理&quot;">​</a></h4><h5 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h5><blockquote><p>vue2使用Object.defineProperty来对data中的数据递归进行响应式监听，但这导致后续如果想添加响应式数据就要调用vue api来完成</p><p>而且对于数组元素的变化就只能通过重写数组方法来完成响应式的监听，有些不方便</p></blockquote><h5 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;vue3&quot;">​</a></h5><blockquote><p>vue3使用es6的proxy api来对数据进行响应式的监听，它可以很方便的对数组，对象进行监听，同时将响应式api(ref, reactive)提取出来，不再像以前一样都必须写再data中，而可以根据逻辑定义其所在位置</p></blockquote><h4 id="_5-是否支持多个根节点" tabindex="-1">5. 是否支持多个根节点 <a class="header-anchor" href="#_5-是否支持多个根节点" aria-label="Permalink to &quot;5. 是否支持多个根节点&quot;">​</a></h4><blockquote><p>vue2组件中只能有一个根节点，而vue3可以有多个</p></blockquote><h3 id="vue自定义指令" tabindex="-1">vue自定义指令 <a class="header-anchor" href="#vue自定义指令" aria-label="Permalink to &quot;vue自定义指令&quot;">​</a></h3><h4 id="_1-vue自定义指令是什么" tabindex="-1">1. vue自定义指令是什么？ <a class="header-anchor" href="#_1-vue自定义指令是什么" aria-label="Permalink to &quot;1. vue自定义指令是什么？&quot;">​</a></h4><blockquote><p>自定义指令是vue提供的，允许开发者可以在vue模板中以命令式的方式拓展dom，自定以指定可以钩入vue生命周期，对dom进行一些底层的操作</p></blockquote><h4 id="_2-例子" tabindex="-1">2. 例子 <a class="header-anchor" href="#_2-例子" aria-label="Permalink to &quot;2. 例子&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 定义一个自动获取聚焦框的指令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.directive(&#39;focus&#39;, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    inserted:(e) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        e.focus()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,21),n=[s];function r(l,u,h,c,d,p){return t(),a("div",null,n)}const b=e(o,[["render",r]]);export{k as __pageData,b as default};
