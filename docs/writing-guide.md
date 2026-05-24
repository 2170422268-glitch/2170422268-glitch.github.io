---
title: 写作指南
layout: page
---

# 📝 写作指南

## 文章 Frontmatter

每篇文章开头必须用 `---` 包裹的 Frontmatter 元数据：

```yaml
---
title: 文章标题
date: 2026-05-24
tags:
  - Vue
  - 前端
cover: /images/cover.jpg   # 可选：封面图
description: 文章简介，会显示在首页卡片上
---
```

---

## 基本 Markdown 语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 文字样式

```markdown
**加粗**  *斜体*  ~~删除线~~  `行内代码`
```

### 列表

```markdown
- 无序列表项 1
- 无序列表项 2
  - 嵌套列表

1. 有序列表项 1
2. 有序列表项 2
```

### 引用

```markdown
> 这是一段引用文字
> 可以换行继续
```

### 链接

```markdown
[链接文字](https://example.com)
```

---

## 插入图片

### 方式一：放在 `/images/` 目录（推荐）

图片放到 `docs/public/images/` 文件夹，然后引用：

```markdown
![图片描述](/images/你的图片名.jpg)
```

示例：

```markdown
![Vue 3 架构图](/images/vue3-arch.png)
```

### 方式二：放在文章同级目录

在 `docs/posts/` 下建文件夹，文章和图片放一起：

```
docs/posts/my-article/
├── index.md
└── diagram.png
```

引用方式：

```markdown
![架构图](./diagram.png)
```

### 图片尺寸控制

```markdown
![图片](/images/example.jpg =800x)       <!-- 宽 800px，高度自适应 -->
![图片](/images/example.jpg =800x400)    <!-- 宽 800px，高 400px -->
```

---

## 代码块

### 带语言高亮

````markdown
```javascript
function hello() {
  console.log('Hello World!')
}
```
````

支持的语言：`javascript`、`typescript`、`vue`、`html`、`css`、`python`、`java`、`go`、`rust`、`bash`、`json`、`yaml` 等。

### 显示行号

````markdown
```typescript {1,3-5}
// 第 1 行和第 3-5 行会高亮
interface User {
  name: string
  age: number
  email: string
}
```
````

### 文件名标题

````markdown
```javascript [utils.js]
export function formatDate(date) {
  return date.toLocaleDateString()
}
```
````

---

## 完整文章示例

```markdown
---
title: 理解 Vue 3 的 Composition API
date: 2026-05-24
tags:
  - Vue
  - JavaScript
cover: /images/vue3-cover.jpg
description: 深入浅出地讲解 Vue 3 Composition API 的核心概念和最佳实践。
---

# 理解 Vue 3 的 Composition API

## 为什么需要 Composition API？

在 Vue 2 中，我们使用 Options API 组织代码：

```vue
<script>
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() { this.count++ }
  }
}
</script>
```

## setup 函数

Composition API 的核心是 `setup` 函数：

```vue
<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log('组件已挂载')
})
</script>
```

<!-- 图片示例：将图片放在 docs/public/images/ 目录后取消注释 -->
<!-- ![Composition API 示意图](/images/composition-api.png) -->

> Composition API 让逻辑复用变得更加优雅。

## 总结

- `ref` 和 `reactive` 用于创建响应式数据
- `computed` 用于派生状态
- `watch` 用于监听变化
- `onMounted` 等生命周期钩子
```

---

## 文章存放位置

所有文章放在 `docs/posts/` 目录下，文件名用英文小写 + 连字符：

```
docs/posts/
├── vue3-composition-api.md
├── javascript-async.md
├── css-grid-guide.md
├── react-hooks-advanced.md
├── python-decorator.md
└── git-workflow.md
```

---

## 图片存放位置

所有文章图片放在 `docs/public/images/` 目录下：

```
docs/public/images/
├── vue3-cover.jpg
├── composition-api.png
├── async-js.png
└── ...
```

引用时路径为 `/images/文件名`。

---

## 📋 可复制的范文模板

直接复制下面内容，替换成你自己的文章即可：

```markdown
---
title: 你的文章标题
date: 2026-05-24
tags:
  - 标签1
  - 标签2
cover: /images/你的封面图.jpg
description: 文章简介，会显示在首页卡片上
---

# 你的文章标题

## 引言

在这里写文章的引入段落，介绍你要讲的内容。

## 正文

### 第一部分

这里是正文内容。可以插入代码：

```javascript
console.log('Hello World!')
```

### 第二部分

可以插入图片（将图片放在 docs/public/images/ 目录后取消注释）：

<!-- ![图片描述](/images/你的图片.jpg) -->

> 这是一段引用

## 总结

总结文章的主要内容。
```
