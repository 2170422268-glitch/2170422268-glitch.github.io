---
title: CSS Grid 布局完全指南
date: 2026-05-15
tags:
  - CSS
  - 布局
cover: https://picsum.photos/seed/css/800/400
excerpt: CSS Grid 是现代 Web 布局中最强大的工具之一。本文从基础概念到高级技巧，全面讲解 Grid 布局的使用方法，助你轻松应对各种复杂布局需求。
author: ZERO
---

# CSS Grid 布局完全指南

CSS Grid 布局是 CSS 中最强大的布局系统之一。它让我们能够轻松创建复杂的二维布局，而无需使用浮动或定位等 hack 技巧。

## 一、Grid 基础概念

### 1.1 Grid Container

要使用 Grid 布局，首先需要将容器元素的 `display` 属性设置为 `grid` 或 `inline-grid`：

```css
.container {
  display: grid;
}
```

### 1.2 Grid 行与列

使用 `grid-template-columns` 和 `grid-template-rows` 定义网格的结构：

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
}
```

### 1.3 fr 单位

`fr` 是 Grid 布局中特有的弹性单位，代表可用空间的一部分：

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  /* 三列，中间列占两倍宽度 */
}
```

## 二、Grid 属性详解

### 2.1 容器属性

| 属性 | 作用 |
|------|------|
| `grid-template-columns` | 定义列的数量和大小 |
| `grid-template-rows` | 定义行的数量和大小 |
| `gap` | 设置网格间距 |
| `justify-items` | 控制子项在列轴上的对齐 |
| `align-items` | 控制子项在行轴上的对齐 |
| `grid-template-areas` | 定义网格区域模板 |

### 2.2 项目属性

```css
.item {
  grid-column: 1 / 3;  /* 从第1列到第3列 */
  grid-row: 1 / 2;     /* 从第1行到第2行 */
}
```

## 三、实战示例

### 3.1 圣杯布局

```css
.holy-grail {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  min-height: 100vh;
  gap: 16px;
}

.header { grid-area: header; }
.nav    { grid-area: nav; }
.main   { grid-area: main; }
.aside  { grid-area: aside; }
.footer { grid-area: footer; }
```

### 3.2 响应式图片画廊

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}
```

## 四、Grid 与 Flexbox 的选择

- **Grid**：适用于二维布局（行和列同时控制）
- **Flexbox**：适用于一维布局（单行或单列）

> **最佳实践：** 页面级布局使用 Grid，组件级布局使用 Flexbox。

## 五、总结

CSS Grid 是现代 Web 布局的革命性工具。掌握 Grid 布局，能让你更高效地实现各种复杂的页面结构。建议在实际项目中多加练习，将 Grid 与 Flexbox 结合使用，发挥各自的优势。
