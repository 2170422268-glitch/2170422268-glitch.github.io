import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ProgressBar from './components/ProgressBar.vue'
import BackToTop from './components/BackToTop.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ProgressBar),
      'doc-before': () => h(BackToTop),
    })
  },
  enhanceApp({ app }) {
    // 注册全局组件
  },
}

// 在客户端动态创建背景图元素
if (typeof window !== 'undefined') {
  const bg = document.createElement('div')
  bg.className = 'bg-parallax'
  document.body.appendChild(bg)

  let ticking = false
  window.addEventListener('mousemove', (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8
        const y = (e.clientY / window.innerHeight - 0.5) * 8
        bg.style.transform = `translate(${x}px, ${y}px)`
        ticking = false
      })
      ticking = true
    }
  })
}
