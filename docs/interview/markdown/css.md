# css层叠样式表

## 1. 样式优先级

> 1. !important
> 2. inline style (行内样式) 1000
> 3. id选择器 (#elementId) 100
> 4. 类选择器 (.className)、属性选择器 ([attribute = xxx])、 伪类选择器 (:hover) 10
> 5. 元素选择器 (div)、 伪元素选择器 (::after) 1
> 6. 通用选择器 (*)、 组合选择器 (>)、 相邻选择器 (+)
> 7. 继承属性
> 8. 浏览器默认样式

### 多个选择器权重累加

```css
.name .age /* 10 + 10 */
.name > .age /* 10 + 10 */
.first + .second /* 10 + 10 */
input[type='text'] /* 1 + 10 */
```

## 2. 属性的继承性

### 可继承属性

#### 1. 字体相关

> 1. font-family 字体族
> 2. font-size 字体大小
> 3. font-style 字体样式
> 4. font-weight 字体粗细
> 5. font-stretch 字体拉伸

#### 2. 文本相关

> 1. color 文本颜色
> 2. text-align 文本对齐方式
> 3. text-indent 首行缩进
> 4. text-decoration 文本装饰
> 5. text-shadow 文本阴影
> 6. line-height 行高
> 7. letter-spacing 字符间距
> 8. word-spacing 单词间距
> 9. white-space 空白处理
> 10. direction 文本方向

#### 3.列表相关

> 1. list-style-type 列表样式
> 2. list-style-position 列表标记项位置
> 3. list-style-image 列表图片

#### 4. 其他

> 1. cursor 光标样式
> 2. visibility 可见性
> 3. care 文本连字规则

## 3. display属性

### 1. inline

> 1. 元素不会独占一行，多个元素会在一行显示
> 2. 元素的宽高设置无效
> 3. 元素的padding、margin的上下无效
> 4. 元素的宽度为内容宽度
> `<span></span>`

### 2. block

> 1. 元素独占一行,多个元素会在不同行显示
> 2. 元素的宽高设置有效
> `<div></div>`

### 3. inline-block

> 1. 元素不会独占一行，多个元素会在一行显示
> 2. 元素的宽高设置有效
> 3. 元素的padding、margin的上下有效

### 4. flex

> 弹性盒，可以使用弹性盒布局

### 5. grid

> 网格布局，可以使用网格布局

### 6. none

> 元素不显示

### 7. 其他(不常用)

> 1. inline-table
> 2. inline-flex
> 3. inline-grid
> 4. table
> 5. table-cell
> 6. table-row
> 7. table-column
> 8. table-column-group
> 9. list-item

## 4. 隐藏元素的方法

### 1. opacity: 0

> 1. 透明度为0，元素不可见
> 2. 元素仍占据空间
> 3. 事件仍会触发
> 4. 子元素可触发事件
> 5. 子元素透明度也会改变(继承)

### 2. visibility: hidden

> 1. 元素不可见
> 2. 元素仍占据空间
> 3. 事件不会触发
> 4. 子元素不可触发事件
> 5. 子元素透明度不会改变(不继承)

### 3. display: none

> 1. 元素不可见
> 2. 元素不占据空间
> 3. 事件不会触发

## 5. link 和 @import 的区别

### 1. 位置和加载时间

> link: 在html样式表中，通常写在`head`标签中，html加link标签时就会加载外部样式表，不会阻塞页面的渲染
>
> @import: 必须写在css文件的顶部，在浏览器在html页面加载完成后才会处理@import规则，可能会阻塞页面的渲染，导致闪烁或延迟

### 2. 兼容性

> link: 兼容所有浏览器，兼容性极好
>
> @import: 某些老款浏览器并不兼容

### 3. 性能

> link: 并行下载，速度快
>
> @import: 顺序下载，速度慢

### 4. 浏览器缓存

> link: 加载的样式表可以被缓存，减少请求次数
>
> @import: 每次都需要发送请求

### 5. 可操作性

> link: link是html的一部分，可以使用js控制
>
> @import：无法被控制

::: info
上述这些比较，几乎每一项都是link占优，更推荐使用link
:::

## 6. 水平垂直居中

### 1. flex布局

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 2. grid布局

```css
.container {
  display: grid;
  place-items: center;
}
```

### 3. position + transform

```css
.container {
  position: relative;
}
.item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 4. position + margin

```css
.container {
  position: relative;
}
.item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

### 5. text-align + line-height (仅适用于单行文本)

```css
.container {
  text-align: center;
  line-height: 100px;
}
.item {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
```

## 7. css尺寸单位

### 1. 绝对单位

> 1. px 像素
> 2. in 英寸
> 3. cm 厘米
> 4. mm 毫米
> 5. pt 点
> 6. pc 派卡

### 2. 相对单位

> 1. em 相对父元素的字体大小
> 2. rem 相对根元素的字体大小
> 3. vw 视口宽度的百分比
> 4. vh 视口高度的百分比