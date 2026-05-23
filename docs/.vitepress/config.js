import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ZERO博客',
  description: '个人技术博客 - 分享 Web 开发、前端工程化与用户体验优化',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { property: 'og:title', content: 'ZERO博客' }],
    ['meta', { property: 'og:description', content: '个人技术博客 - 分享 Web 开发、前端工程化与用户体验优化' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  themeConfig: {
    logo: '/avatar.png',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '归档', link: '/archives' },
      { text: '关于', link: '/about' },
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/2170422268-glitch' },
    ],

    // 搜索
    search: {
      provider: 'local',
    },

    // 页脚
    footer: {
      message: '用 ❤️ 和 Markdown 书写 · 联系邮箱：2170422268@qq.com',
      copyright: 'Copyright © 2026 ZERO博客',
    },

    // 文章元数据
    editLink: {
      pattern: 'https://github.com/2170422268-glitch/2170422268-glitch.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    // 上次更新时间
    lastUpdated: {
      text: '最后更新于',
    },

    // 文档页脚 - 上一篇/下一篇
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    // 大纲
    outline: {
      label: '目录',
      level: [2, 3],
    },

    // 返回顶部
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  // 最后更新时间
  lastUpdated: true,

  // 代码行号
  markdown: {
    lineNumbers: true,
  },

  // Sitemap
  sitemap: {
    hostname: 'https://2170422268-glitch.github.io',
  },
})
