---
title: React Hooks 进阶：自定义 Hook 设计模式
date: 2026-04-20
tags:
  - React
  - Hooks
cover: https://picsum.photos/seed/react/800/400
excerpt: 自定义 Hook 是 React 中复用状态逻辑的最佳方式。本文深入探讨自定义 Hook 的设计模式与最佳实践，帮助你构建可复用的逻辑单元。
author: ZERO
---

# React Hooks 进阶：自定义 Hook 设计模式

React Hooks 自 16.8 版本引入以来，彻底改变了 React 组件的编写方式。而自定义 Hook 则是 Hooks 中最强大的特性之一。

## 一、为什么需要自定义 Hook？

自定义 Hook 让我们能够将组件逻辑提取到可复用的函数中：

```javascript
// 不使用自定义 Hook
function UserProfile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>加载中...</div>
  return <div>{user.name}</div>
}

// 使用自定义 Hook
function useUser(id) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/user/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
  }, [id])

  return { user, loading }
}

function UserProfile({ id }) {
  const { user, loading } = useUser(id)
  if (loading) return <div>加载中...</div>
  return <div>{user.name}</div>
}
```

## 二、常用自定义 Hook 模式

### 2.1 useLocalStorage

```javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
```

### 2.2 useMediaQuery

```javascript
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  )

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (e) => setMatches(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

// 使用
function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return isMobile ? <MobileView /> : <DesktopView />
}
```

### 2.3 useIntersectionObserver

```javascript
function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref, options])

  return isIntersecting
}
```

## 三、自定义 Hook 设计原则

1. **单一职责**：每个 Hook 只做一件事
2. **命名规范**：以 `use` 开头
3. **纯函数**：避免副作用，或将副作用封装在 Hook 内部
4. **可组合**：Hook 之间可以互相调用

## 四、总结

自定义 Hook 是 React 生态中最强大的抽象工具之一。通过合理的设计和封装，我们可以构建出高度可复用的逻辑单元，让代码更加清晰和可维护。
