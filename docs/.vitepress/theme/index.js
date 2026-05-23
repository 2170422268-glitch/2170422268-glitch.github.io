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
