---
title: 归档
layout: page
---

<script setup>
import { data } from './posts.data.js'
</script>

# 📚 文章归档

<div class="archive-list">
  <div v-for="(post, index) in data" :key="index" class="archive-item">
    <span class="archive-date">{{ post.date }}</span>
    <a :href="post.url" class="archive-title">{{ post.title }}</a>
    <div class="archive-tags">
      <span v-for="tag in post.tags" :key="tag" class="archive-tag">{{ tag }}</span>
    </div>
  </div>
</div>

<style scoped>
.archive-list {
  margin-top: 24px;
}

.archive-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  flex-wrap: wrap;
}

.archive-item:last-child {
  border-bottom: none;
}

.archive-date {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  min-width: 100px;
}

.archive-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  flex: 1;
}

.archive-title:hover {
  color: var(--vp-c-brand-1);
}

.archive-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.archive-tag {
  font-size: 0.8rem;
  padding: 2px 10px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 20px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .archive-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .archive-date {
    min-width: auto;
  }
}
</style>
