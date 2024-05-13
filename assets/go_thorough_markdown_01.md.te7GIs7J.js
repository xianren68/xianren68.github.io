import{_ as t,c as d,o as e,a2 as o}from"./chunks/framework.C62L6tH-.js";const g=JSON.parse('{"title":"01.何为runtime？","description":"","frontmatter":{},"headers":[],"relativePath":"go/thorough/markdown/01.md","filePath":"go/thorough/markdown/01.md"}'),a={name:"go/thorough/markdown/01.md"},r=o('<h1 id="_01-何为runtime" tabindex="-1">01.何为runtime？ <a class="header-anchor" href="#_01-何为runtime" aria-label="Permalink to &quot;01.何为runtime？&quot;">​</a></h1><blockquote><p>go runtime是一种在编译时静态链接到 Go 二进制文件的运行库。它是 Go 语言运行时的一部分，负责管理程序的内存分配、垃圾收集、调度、线程、锁和其他底层功能。 Go runtime 还实现了一些高级功能，例如 goroutine 和 channel。</p></blockquote><p><em><strong>runtime 即为程序运行时的环境</strong></em></p><p>go <code>runtime</code>对于<code>go</code>,类似于<code>jvm</code>对于<code>java</code>,<code>v8</code>引擎对于<code>js</code></p><h2 id="go-runtime的特点" tabindex="-1">go runtime的特点 <a class="header-anchor" href="#go-runtime的特点" aria-label="Permalink to &quot;go runtime的特点&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><ol><li>运行程序不需要虚拟机</li><li>runtime作为程序的一部分被打包进二进制文件中</li><li>随用户程序一同运行</li><li>有一定的屏蔽系统调用的能力</li><li>许多go关键字都是runtime中的函数</li></ol></div><table><thead><tr><th>关键字</th><th>函数</th></tr></thead><tbody><tr><td>go</td><td>newproc</td></tr><tr><td>new</td><td>newobject</td></tr><tr><td>make</td><td>makeslice,makechain,makemap…</td></tr><tr><td>←</td><td>chansend1,chanrecv1</td></tr></tbody></table><h2 id="go-runtime的能力" tabindex="-1">go runtime的能力 <a class="header-anchor" href="#go-runtime的能力" aria-label="Permalink to &quot;go runtime的能力&quot;">​</a></h2><ul><li>内存管理能力</li><li>垃圾回收（GC）</li><li>超强的并发能力（协程调度）</li></ul><h2 id="与其他语言的对比" tabindex="-1">与其他语言的对比 <a class="header-anchor" href="#与其他语言的对比" aria-label="Permalink to &quot;与其他语言的对比&quot;">​</a></h2><table><thead><tr><th></th><th>一次编码</th><th>一次编译</th><th>不需要运行环境</th><th>没有虚拟化损失</th><th>不需要自行处理 GC</th><th>面向对象</th><th>非常易用的并发能力</th></tr></thead><tbody><tr><td>C</td><td>X</td><td>√</td><td>X</td><td>√</td><td>X</td><td>X</td><td>X</td></tr><tr><td>C++</td><td>X</td><td>√</td><td>X</td><td>√</td><td>X</td><td>√</td><td>X</td></tr><tr><td>Java</td><td>√</td><td>X</td><td>√</td><td>X</td><td>√</td><td>√</td><td>X</td></tr><tr><td>JavaScript</td><td>√</td><td>O</td><td>√</td><td>X</td><td>√</td><td>√</td><td>X</td></tr><tr><td>Go</td><td>√</td><td>X</td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td></tr></tbody></table>',11),i=[r];function n(h,l,c,m,u,s){return e(),d("div",null,i)}const p=t(a,[["render",n]]);export{g as __pageData,p as default};
