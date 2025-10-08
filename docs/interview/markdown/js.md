# js

## 闭包

### 1. 如何产生闭包？

> 闭包就是一个外部函数返回了一个内部函数，这个被返回的内部函数中还引用着外部函数的值，可以被内部函数访问

### 2. 闭包的使用场景

> 防抖，节流函数，还有函数式编程中的函数柯里化，聚合函数等的实现也可能需要用到闭包

### 3. 闭包的内存泄露如何处理

> 在最后一次执行内部函数后，将引用的值置空

### 4. weak代表什么意思？

> weak代表弱引用，弱引用不会阻止被引用的对象被垃圾回收器回收


### 5. map和对象的区别

#### 1. 键的类型

> `Map`的键支持任何类型
> `Object`支持`string`和`symbol`,非`string`类型的值会调用`.toString()`转化为字符串

```js
const a = {b: 1}
const b = {a: 1}

const m = new Map()

m.set(a,1)
m.set(b, 2)
console.log(m) // Map(2) { { b: 1 } => 1, { a: 1 } => 2 }

const o = {}

o[a] = 1
o[b] = 2

console.log(a.toString()) // [object Object]
console.log(o) // { '[object Object]': 2 }
```

#### 2. 迭代顺序

> `Map`保证迭代顺序与插入顺序一致， `Object`无法保证

#### 3. 获取大小和性能

> `Map`可以直接通过`.size`属性获取长度，而`Object`必须通过`Object.keys(O).length`这样的间接方式获取
> 在频繁的插入删除中，`Map`的性能更好

#### 4. 原型链干扰

> `Object`获取属性可能会受到其原型链上继承属性的干扰，`Map`没有原型链，插入的是什么就是什么


### 6. for..in 和 for..of的区别

> `for .. in` 用于遍历对象的可枚举属性(键)，包括原型链上的属性，通常用`hasOwnProperty()`过滤掉原型链上的属性
> `for .. of` 用于遍历可迭代对象(`Symbol.iterator`)的值，如`Array`、`Map`、`Set`、`String`、`TypedArray`、`arguments`等
