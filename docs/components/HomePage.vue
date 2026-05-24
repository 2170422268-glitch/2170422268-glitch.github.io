<template>
  <div class="home-page">
    <div class="home-layout">
      <div class="home-main">
        <!-- ===== 相册画廊 ===== -->
        <section class="gallery-section">
          <div class="gallery-header">
            <h2 class="gallery-title">📸 光影集</h2>
            <p class="gallery-subtitle">你所热爱的就是你的生活</p>
          </div>
          <div class="gallery-grid">
            <div
              v-for="(photo, index) in photos"
              :key="index"
              class="gallery-item"
              @click="openLightbox(index)"
            >
              <img :src="photo.src" :alt="photo.alt" loading="lazy" />
              <div class="gallery-overlay">
                <span class="gallery-icon">🔍</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== 文章列表 ===== -->
        <section class="article-list">
          <article class="article-card" v-for="(post, index) in articles" :key="index">
            <div class="card-cover-wrap">
              <img class="card-cover" :src="post.cover" :alt="post.title" loading="lazy" />
              <div class="card-cover-gradient"></div>
              <span class="card-tag">{{ post.tag }}</span>
            </div>
            <div class="card-body">
              <div class="card-meta">
                <span>{{ post.date }}</span>
              </div>
              <h2 class="card-title">
                <a :href="post.url">{{ post.title }}</a>
              </h2>
              <p class="card-excerpt">{{ post.excerpt }}</p>
              <div class="card-footer">
                <a :href="post.url" class="read-more">阅读更多</a>
              </div>
            </div>
          </article>
        </section>
      </div>

      <aside class="sidebar">
        <div class="sidebar-widget profile-widget">
          <div class="avatar-wrap">
            <img class="avatar" src="/avatar.jpg" alt="头像" />
          </div>
          <h3 class="profile-name">ZERO ABYSS</h3>
          <p class="profile-bio">计算机本科在读大学生，游戏领域大神(划掉),动画领域大神(划掉)。联系邮箱：2170422268@qq.com</p>
        </div>

        <div class="sidebar-widget">
          <h3 class="widget-title">🏷️ 标签云</h3>
          <div class="tag-cloud">
            <a href="#" v-for="tag in tags" :key="tag">{{ tag }}</a>
          </div>
        </div>

        <div class="sidebar-widget">
          <h3 class="widget-title">📝 近期文章</h3>
          <ul class="recent-posts">
            <li v-for="(post, index) in articles.slice(0, 5)" :key="'recent-' + index">
              <a :href="post.url">{{ post.title }}</a>
              <div class="recent-date">{{ post.date }}</div>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    <!-- Lightbox -->
    <PhotoLightbox
      :visible="lightboxVisible"
      :photos="photos"
      :current-index="lightboxIndex"
      @close="lightboxVisible = false"
      @update:current-index="lightboxIndex = $event"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PhotoLightbox from './PhotoLightbox.vue'

const lightboxVisible = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index) {
  lightboxIndex.value = index
  lightboxVisible.value = true
}

const photos = [
  { src: '/photos/1.jpg', alt: '照片 1' },
  { src: '/photos/2.jpg', alt: '照片 2' },
  { src: '/photos/3.jpg', alt: '照片 3' },
]

const tags = ['JavaScript', 'CSS', 'Vue', 'React', 'Python', 'Git', 'TypeScript', 'Node.js', 'Docker', 'Linux', '算法', '数据库']

const articles = [
  {
    cover: 'https://picsum.photos/seed/js/800/400',
    title: '深入理解 JavaScript 异步编程',
    url: '/posts/javascript-async',
    date: '2026-05-20',
    tag: 'JavaScript',
    excerpt: '从回调函数到 Promise，再到 async/await，JavaScript 的异步编程模式经历了多次演变。本文将带你深入理解这些概念，并通过实际示例掌握异步编程的精髓。'
  },
  {
    cover: 'https://picsum.photos/seed/css/800/400',
    title: 'CSS Grid 布局完全指南',
    url: '/posts/css-grid-guide',
    date: '2026-05-15',
    tag: 'CSS',
    excerpt: 'CSS Grid 是现代 Web 布局中最强大的工具之一。本文从基础概念到高级技巧，全面讲解 Grid 布局的使用方法，助你轻松应对各种复杂布局需求。'
  },
  {
    cover: 'https://picsum.photos/seed/vue/800/400',
    title: 'Vue 3 组合式 API 实战经验分享',
    url: '/posts/vue3-composition-api',
    date: '2026-05-10',
    tag: 'Vue',
    excerpt: '组合式 API 是 Vue 3 最引人注目的新特性之一。本文分享在实际项目中使用组合式 API 的经验与最佳实践，帮助你写出更优雅、可维护的 Vue 代码。'
  },
  {
    cover: 'https://picsum.photos/seed/python/800/400',
    title: 'Python 装饰器：从入门到精通',
    url: '/posts/python-decorator',
    date: '2026-05-05',
    tag: 'Python',
    excerpt: '装饰器是 Python 中强大而优雅的特性。本文通过大量实例，从函数装饰器到类装饰器，带你彻底掌握装饰器的原理与应用场景。'
  },
  {
    cover: 'https://picsum.photos/seed/git/800/400',
    title: '高效 Git 工作流与团队协作实践',
    url: '/posts/git-workflow',
    date: '2026-04-28',
    tag: 'Git',
    excerpt: '合理的 Git 工作流能极大提升团队协作效率。本文介绍几种主流 Git 工作流模式，并分享在实际团队中落地执行的宝贵经验。'
  },
  {
    cover: 'https://picsum.photos/seed/react/800/400',
    title: 'React Hooks 进阶：自定义 Hook 设计模式',
    url: '/posts/react-hooks-advanced',
    date: '2026-04-20',
    tag: 'React',
    excerpt: '自定义 Hook 是 React 中复用状态逻辑的最佳方式。本文深入探讨自定义 Hook 的设计模式与最佳实践，帮助你构建可复用的逻辑单元。'
  }
]
</script>
