import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.C62L6tH-.js";const l="/assets/17221e1a3789bcf9~tplv-t2oaga2asx-zoom-in-crop-mark_3024_0_0_0.BBaMGGLk.webp",p="/assets/image.C79-dLRz.png",m=JSON.parse('{"title":"06_map","description":"","frontmatter":{},"headers":[],"relativePath":"go/base/markdown/06.md","filePath":"go/base/markdown/06.md"}'),h={name:"go/base/markdown/06.md"},k=n('<h1 id="_06-map" tabindex="-1">06_map <a class="header-anchor" href="#_06-map" aria-label="Permalink to &quot;06_map&quot;">​</a></h1><blockquote><p>map 是一种特殊的数据结构：一种元素对（pair）的无序集合，pair 的一个元素是 key，对应的另一个元素是 value，所以这个结构也称为关联数组或字典。这是一种快速寻找值的理想结构：给定 key，对应的 value 可以迅速定位。 map 这种数据结构在其他编程语言中也称为字典（Python）、hash 和 HashTable 等</p></blockquote><div class="info custom-block"><p class="custom-block-title">INFO</p><ol><li>map是无序的、长度不固定、不能通过下标获取，只能通过key来访问</li><li>map的长度不固定 ，也是一种引用类型。可以通过内置函数 len(map)来获取map长度。</li><li>创建map的时候也是通过make函数创建。</li><li>map的key不能重复，如果重复新增加的会覆盖原来的key的值。</li></ol></div><p><img src="'+l+`" alt="map"></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-e75Xy" id="tab-bbITKP4" checked="checked"><label for="tab-bbITKP4">创建map</label></div><div class="blocks"><div class="language-go vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//1, 声明map 默认值是nil</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">key_data_type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value_data_type</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">声明  变量名称 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">key的数据类型</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//2，使用make声明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">key_data_type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">value_data_type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//3,直接声明并初始化赋值map方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;语文&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">89</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;数学&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;英语&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>map在初始化之前值为nil，无法使用，直接赋值会报错</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--U0Iq" id="tab-H31Nbnm" checked="checked"><label for="tab-H31Nbnm">go</label></div><div class="blocks"><div class="language-go vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始化</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> initialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始化map</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xianren&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// map[0:xianren]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>map虽然可以动态扩容，但为了性能考虑，对于大的 map 或者会快速扩张的 map，即使只是大概知道容量，也最好先标明。</p></div><h2 id="key和value取值" tabindex="-1">key和value取值 <a class="header-anchor" href="#key和value取值" aria-label="Permalink to &quot;key和value取值&quot;">​</a></h2><blockquote><p>key 可以是任意可以用 == 或者 != 操作符比较的类型，比如 string、int、float value 可以是任意值</p></blockquote><p><img src="`+p+`" alt="key类型"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在go 1.18版本中引入了泛型,这种类型我们通常称为可比较类型,一般这样约束<code>[T comparable]</code></p></div><h2 id="对map内容操作" tabindex="-1">对map内容操作 <a class="header-anchor" href="#对map内容操作" aria-label="Permalink to &quot;对map内容操作&quot;">​</a></h2><h3 id="获取对应值" tabindex="-1">获取对应值 <a class="header-anchor" href="#获取对应值" aria-label="Permalink to &quot;获取对应值&quot;">​</a></h3><p><code>x := maplist[key]</code></p><h3 id="判断键值对是否存在" tabindex="-1">判断键值对是否存在 <a class="header-anchor" href="#判断键值对是否存在" aria-label="Permalink to &quot;判断键值对是否存在&quot;">​</a></h3><p><code>val,ok := maplist[key]</code></p><blockquote><p>返回两个值，val为当前键对应的值，ok是一个bool,判断键值对是否存在</p></blockquote><h3 id="赋值或修改值" tabindex="-1">赋值或修改值 <a class="header-anchor" href="#赋值或修改值" aria-label="Permalink to &quot;赋值或修改值&quot;">​</a></h3><p><code>maplist[key] = value</code></p><h3 id="删除值" tabindex="-1">删除值 <a class="header-anchor" href="#删除值" aria-label="Permalink to &quot;删除值&quot;">​</a></h3><p><code>delete(map,key)</code></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-lUvF3" id="tab-fH1BNKD" checked="checked"><label for="tab-fH1BNKD">go</label></div><div class="blocks"><div class="language-go vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// map操作</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> operateMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 判断是否存在</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    val, ok </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(val, ok)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 获取值与赋值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;xianren&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 删除键值对</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        map[0:xianren] xianren</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        map[] 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h3 id="map的遍历" tabindex="-1">map的遍历 <a class="header-anchor" href="#map的遍历" aria-label="Permalink to &quot;map的遍历&quot;">​</a></h3><blockquote><p>通过for-range来获取key和value</p></blockquote><p><code>for key,value := range map{}</code></p>`,26),t=[k];function e(d,E,r,o,g,c){return a(),i("div",null,t)}const F=s(h,[["render",e]]);export{m as __pageData,F as default};
