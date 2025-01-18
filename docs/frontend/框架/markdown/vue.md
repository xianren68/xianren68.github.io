# vue记录

> 用来记录一些与vue原理相关的东西，或者让人感到困惑的知识

## 1. vue触发依赖与渲染页面的时机

> 相信每个了解过vue的人都知道，vue是一个响应式系统，当数据发生变化时，会触发依赖，然后重新渲染页面，那么vue是如何触发依赖的，又是如何重新渲染页面的呢？

> 有时候，在写代码时会对某个响应式变量在函数中做多次变化，这让我有点性能焦虑，是不是每次变化都会触发依赖，然后重新渲染页面，这是否有点浪费性能，还是说vue做了优化？

### 1. 触发依赖

> 写一段简单的代码，来验证在一个函数中对一个响应式变量做多次变化时，是否会触发多次依赖

```js
import {effect, ref} from 'vue'

// 响应式变量
const count = ref(0)

// 响应式副作用
effect(() => {
  console.log('count:', count.value)
})

// 修改响应式变量
for(let i = 0; i < 10; i++) {
  count.value++
}
```

> 上面代码中，我们定义了一个响应式变量`count`，然后定义了一个响应式副作用，当`count`变化时，会触发副作用，然后打印`count`的值，接着我们修改了`count`的值10次，那么会触发多少次依赖呢？

> 答案是10次，也就是说每次修改`count`的值，都会触发一次依赖，所以每次响应式值的变化都会触发依赖，这是vue的响应式系统的工作原理。

::: info
所以，在vue中，对响应式变量的修改最好能够减少次数，批量修改，这样可以减少触发依赖的次数，从而提高性能。
:::

### 2. 渲染页面

> 触发依赖是每次变化时触发，那么每次触发依赖后，虚拟dom都会重新渲染吗？依然写一段代码来验证

```html
<template>
  <div>
    <h1 @click="fn">{{count}}</h1>
  </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue'

const count = ref(0)

const fn = () => {
  for(let i = 0; i < 10; i++) {
    count.value++
  }
}
onUpdated(()=>{
  console.log('组件更新了')
})
</script>
```

> 上面代码中，我们定义了一个响应式变量`count`, 通过点击来触发它的修改，我们通过`onUpdate`钩子来监听组件的更新，当组件更新时，会打印`组件更新了`，那么我们点击一次，会触发多少次组件更新呢？
> 答案是一次，也就是说并非每次触发依赖都会进行对应的页面渲染

### 原理

> vue的所有依赖变更会存储到一个微队列中，所以在函数中的批量修改，会在函数执行完毕后，一次性触发所有不重复的依赖变更，然后进行页面渲染，并不会触发多次进而影响性能。


## 2. 插槽

> 相信很多人使用插槽的时候都会有些疑惑，为什么在父组件中可以设置子组件的内容，这到底是如何实现的呢？

> 插槽的本质其实是一个函数，写代码如下

> 子组件
```html
<template>
  <slot>默认内容</slot>
  <slot name="header" :title="title"></slot>
  <slot name="footer"></slot>
</template>

<script setup>
const title = 'hello world'
</script>

<style lang="scss" scoped>

</style>
```

> 父组件

```html
<template>
  <HelloWorld>
    <div>hello</div>
    <template #header="scope">
      <h2>{{scope.title}}</h2>
    </template>
    <template #footer>
      <div>footer</div>
    </template>
  </HelloWorld>
</template>

<script setup>
import { onUpdated, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
</script>
```

> 上面是常见的slot用法，我们都知道，.vue文件在经过编译后其实就是js文件，模板会被渲染为render函数
> 那么我们简单对父组件进行一些修改使其更接近编译后的结果

```js
import { h } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const App = () => {
  return h(HelloWorld, null, {
    default: () => h('div', null, 'hello'),
    header: ({ title }) => h('h2', null, title),
    footer: () => h('div', null, 'footer'),
  })
}
export default App
```

> 将父组件转换为函数式组件，可以直观的看到插槽其实就是一个函数，通过h函数创建虚拟dom时会传递给子组件，子组件在渲染时，会根据传递的插槽函数来渲染对应的插槽内容，这就是插槽的原理。
> 将子组件也稍稍改造,使其更接近编译后的结果

```ts
import { FunctionalComponent } from 'vue'
import { h } from 'vue'

const HelloWorld: FunctionalComponent = (_props, { slots }) => {
  return h('div', null, [
    slots.default ? slots.default('hello') : '默认内容',
    slots.header ? slots.header({ title: 'hello, world' }) : null,
    slots.footer ? slots.footer({ title: 'footer' }) : null,
  ])
}
export default HelloWorld
```

> 在子组件中，通过setup函数的context参数即可获取slots,然后根据slots中的函数来渲染对应的插槽内容，这就是插槽的原理。