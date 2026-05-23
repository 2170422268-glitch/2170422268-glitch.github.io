---
title: Python 装饰器：从入门到精通
date: 2026-05-05
tags:
  - Python
  - 装饰器
cover: https://picsum.photos/seed/python/800/400
excerpt: 装饰器是 Python 中强大而优雅的特性。本文通过大量实例，从函数装饰器到类装饰器，带你彻底掌握装饰器的原理与应用场景。
author: ZERO
---

# Python 装饰器：从入门到精通

装饰器（Decorator）是 Python 中一种强大的编程工具，它允许我们在不修改原函数代码的情况下，动态地给函数添加新的功能。

## 一、装饰器基础

### 1.1 什么是装饰器？

装饰器本质上是一个函数，它接受一个函数作为参数，并返回一个新的函数：

```python
def my_decorator(func):
    def wrapper():
        print("在函数调用前执行")
        func()
        print("在函数调用后执行")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# 输出：
# 在函数调用前执行
# Hello!
# 在函数调用后执行
```

### 1.2 语法糖

`@my_decorator` 等价于 `say_hello = my_decorator(say_hello)`。

## 二、带参数的装饰器

### 2.1 装饰带参数的函数

```python
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"调用函数: {func.__name__}")
        print(f"参数: {args}, {kwargs}")
        result = func(*args, **kwargs)
        print(f"返回值: {result}")
        return result
    return wrapper

@logger
def add(a, b):
    return a + b

add(3, 5)
# 输出：
# 调用函数: add
# 参数: (3, 5), {}
# 返回值: 8
```

### 2.2 装饰器本身带参数

```python
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Python")
# 输出：
# Hello, Python!
# Hello, Python!
# Hello, Python!
```

## 三、类装饰器

```python
class CountCalls:
    def __init__(self, func):
        self.func = func
        self.count = 0

    def __call__(self, *args, **kwargs):
        self.count += 1
        print(f"函数已被调用 {self.count} 次")
        return self.func(*args, **kwargs)

@CountCalls
def say_hello():
    print("Hello!")

say_hello()  # 函数已被调用 1 次
say_hello()  # 函数已被调用 2 次
```

## 四、常用装饰器模式

### 4.1 计时装饰器

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} 执行耗时: {end - start:.4f} 秒")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "完成"

slow_function()
```

### 4.2 缓存装饰器

```python
from functools import wraps

def cache(func):
    memo = {}
    @wraps(func)
    def wrapper(*args):
        if args in memo:
            print("返回缓存结果")
            return memo[args]
        result = func(*args)
        memo[args] = result
        return result
    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

## 五、总结

装饰器是 Python 中非常优雅的特性，它遵循了开闭原则（对扩展开放，对修改关闭）。掌握装饰器能让你写出更加简洁、可复用的代码。在实际开发中，装饰器广泛应用于日志记录、性能测试、权限校验、缓存等场景。
