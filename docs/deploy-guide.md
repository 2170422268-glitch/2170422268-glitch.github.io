---
title: 部署指南
layout: page
---

# 🚀 部署指南

## 三步上线流程

写完文章后，执行以下三步即可发布到 GitHub Pages：

### 第一步：添加文件到暂存区

```bash
git add -A
```

`-A` 表示添加所有变更的文件（新增、修改、删除）。

### 第二步：提交变更

```bash
git commit -m "写清楚这次改了什么"
```

提交信息要简洁明了，例如：

```bash
git commit -m "新增文章：理解 Vue 3 的 Composition API"
git commit -m "修复导航栏样式"
git commit -m "更新关于页面联系方式"
```

### 第三步：推送到 GitHub

```bash
git push origin main
```

---

## 完整示例

写完一篇文章后，在终端执行：

```bash
git add -A
git commit -m "新增文章：CSS Grid 布局完全指南"
git push origin main
```

---

## 查看部署状态

推送后，GitHub Actions 会自动构建并部署。

1. 打开 https://github.com/2170422268-glitch/2170422268-glitch.github.io
2. 点击顶部 **Actions** 标签
3. 可以看到正在运行或已完成的工作流
4. 绿色 ✓ 表示部署成功，一般需要 **1-2 分钟**

---

## 常用 Git 命令

| 命令 | 作用 |
|------|------|
| `git status` | 查看当前有哪些文件被修改 |
| `git add -A` | 添加所有变更到暂存区 |
| `git commit -m "信息"` | 提交变更 |
| `git push origin main` | 推送到 GitHub 主分支 |
| `git log --oneline` | 查看提交历史 |

---

## 注意事项

- 推送后等待 **1-2 分钟**，网站才会更新
- 如果 Actions 页面显示红色 ✗，点进去查看日志排查错误
- 网站地址：**https://2170422268-glitch.github.io**
