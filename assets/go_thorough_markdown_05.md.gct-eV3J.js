import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.C62L6tH-.js";const c=JSON.parse('{"title":"05_空结构体的妙用","description":"","frontmatter":{},"headers":[],"relativePath":"go/thorough/markdown/05.md","filePath":"go/thorough/markdown/05.md"}'),h={name:"go/thorough/markdown/05.md"},n=t(`<h1 id="_05-空结构体的妙用" tabindex="-1">05_空结构体的妙用 <a class="header-anchor" href="#_05-空结构体的妙用" aria-label="Permalink to &quot;05_空结构体的妙用&quot;">​</a></h1><blockquote><p>go语言中，每个值都有其大小，我们可以通过<code>unsafe.Sizeof</code>函数来获取某个值的尺寸</p></blockquote><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-TLwwn" id="tab-jrVaR_h" checked="checked"><label for="tab-jrVaR_h">go</label></div><div class="blocks"><div class="language-go vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(unsafe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(unsafe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><blockquote><p>如上,通过Sizeof 获取int类型与指针对应得尺寸,都为8个字节,在go中,int类型与指针的尺寸与环境有关,64位系统即为64位,8个字节,其实指针类型就对应着uint类型,随系统而变化</p></blockquote><h2 id="空结构体的尺寸" tabindex="-1">空结构体的尺寸 <a class="header-anchor" href="#空结构体的尺寸" aria-label="Permalink to &quot;空结构体的尺寸&quot;">​</a></h2><blockquote><p>在go语言中，空结构体占据的尺寸为0，并且每个独立的空结构体都指向同一个地址，zero base</p></blockquote><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HoI-b" id="tab-AmXKJSi" checked="checked"><label for="tab-AmXKJSi">go</label></div><div class="blocks"><div class="language-go vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> empty1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> empty2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(unsafe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">empty1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}), unsafe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">empty2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{})) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0，0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">empty1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">empty2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0x209580,0x209580</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><blockquote><p>查看一下在源码中<code>zerobase</code>的定义</p></blockquote><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-tp3yM" id="tab-H-HvB_U" checked="checked"><label for="tab-H-HvB_U">go</label></div><div class="blocks"><div class="language-go vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// base address for all 0-byte allocations</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zerobase </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uintptr</span></span></code></pre></div></div></div><blockquote><p>它是所有零字节类型的地址</p></blockquote><div class="info custom-block"><p class="custom-block-title">INFO</p><p>注意：独立的空结构体，如果是嵌套到别的（非空）结构体中的，则不会指向<code>zero base</code>,尺寸也不会为0</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-JWGHl" id="tab-q2zF8ZL" checked="checked"><label for="tab-q2zF8ZL">go</label></div><div class="blocks"><div class="language-go vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> empty2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> exp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	null </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">empty2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	e </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">empty2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xianren&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e.null, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">empty2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0xc000052260,0xeb8580</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="空结构体的用途" tabindex="-1">空结构体的用途 <a class="header-anchor" href="#空结构体的用途" aria-label="Permalink to &quot;空结构体的用途&quot;">​</a></h2><blockquote><p>尺寸为0，则代表它对于内存的占用很小，那我们通常会在哪里用到它呢？</p></blockquote><h3 id="hashset" tabindex="-1">hashset <a class="header-anchor" href="#hashset" aria-label="Permalink to &quot;hashset&quot;">​</a></h3><blockquote><p>在go语言中，只有map数据结构，没有set,我们只能用map来实现set功能，但map还需要值，会造成空间的浪费，这时我们就可以使用空结构体来作为值</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{})</span></span></code></pre></div><h3 id="传递消息" tabindex="-1">传递消息 <a class="header-anchor" href="#传递消息" aria-label="Permalink to &quot;传递消息&quot;">​</a></h3><blockquote><p>在协程间传递信息，我们用channel,但如果我们只想传递一个信号时，就可以使用空结构体管道，毕竟就算时bool类型也要占一个字节，但空结构体为0</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">chan</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{})</span></span></code></pre></div>`,20),l=[n];function p(k,e,d,r,E,o){return a(),i("div",null,l)}const y=s(h,[["render",p]]);export{c as __pageData,y as default};
