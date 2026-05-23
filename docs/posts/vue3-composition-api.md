---
title: Vue 3 组合式 API 实战经验分享
date: 2026-05-10
tags:
  - Vue
  - 前端
cover: https://picsum.photos/seed/vue/800/400
excerpt: 组合式 API 是 Vue 3 最引人注目的新特性之一。本文分享在实际项目中使用组合式 API 的经验与最佳实践，帮助你写出更优雅、可维护的 Vue 代码。
author: ZERO
---

# Vue 3 组合式 API 实战经验分享

组合式 API（Composition API）是 Vue 3 中引入的一套全新的逻辑复用和组织方式。它解决了选项式 API（Options API）在复杂组件中逻辑分散的问题。

## 一、为什么需要组合式 API？

在选项式 API 中，同一个逻辑关注点的代码被分散在不同的选项中：

```javascript
// 选项式 API
export default {
  data() {
    return {
      users: [],
      searchQuery: '',
      loading: false,
    }
  },
  methods: {
    fetchUsers() { /* ... */ },
    handleSearch() { /* ... */ },
  },
  computed: {
    filteredUsers() { /* ... */ },
  },
}
```

而组合式 API 让我们可以按逻辑关注点组织代码：

```javascript
// 组合式 API
export default {
  setup() {
    const { users, loading, fetchUsers } = useUsers()
    const { searchQuery, filteredUsers } = useSearch(users)
    return { users, loading, searchQuery, filteredUsers, fetchUsers }
  },
}
```

## 二、核心函数

### 2.1 ref 和 reactive

```javascript
import { ref, reactive } from 'vue'

// ref 用于基本类型
const count = ref(0)
console.log(count.value) // 0

// reactive 用于对象
const state = reactive({
  name: 'Vue 3',
  version: '3.4',
})
```

### 2.2 computed 和 watch

```javascript
import { ref, computed, watch } from 'vue'

const price = ref(100)
const quantity = ref(2)

const total = computed(() => price.value * quantity.value)

watch(total, (newVal, oldVal) => {
  console.log(`总价从 ${oldVal} 变为 ${newVal}`)
})
```

## 三、自定义 Hook 实战

### 3.1 useFetch

```javascript
import { ref, onMounted } from 'vue'

function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  onMounted(async () => {
    try {
      const response = await fetch(url)
      data.value = await response.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  })

  return { data, error, loading }
}

// 使用
const { data, loading } = useFetch('/api/users')
```

### 3.2 useDebounce

```javascript
import { ref, watch } from 'vue'

function useDebounce(source, delay = 300) {
  const debouncedValue = ref(source.value)

  watch(source, () => {
    const timer = setTimeout(() => {
      debouncedValue.value = source.value
    }, delay)

    return () => clearTimeout(timer)
  })

  return debouncedValue
}
```

## 四、最佳实践

1. **按功能拆分 Hook**：每个 Hook 只负责一个功能点
2. **命名规范**：使用 `use` 前缀命名组合函数
3. **类型安全**：使用 TypeScript 提供更好的类型推导
4. **副作用管理**：在 `onUnmounted` 中清理副作用

## 五、总结

组合式 API 让 Vue 代码更加灵活和可维护。通过自定义 Hook，我们可以轻松实现逻辑复用，让组件代码更加清晰。建议在新项目中优先使用组合式 API。
