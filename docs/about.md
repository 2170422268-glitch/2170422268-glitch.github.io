---
title: 关于我
layout: page
---

<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<div class="about-page">
  <div class="about-hero">
    <img
      class="about-avatar"
      src="https://picsum.photos/seed/avatar/240/240"
      alt="头像"
    >
    <h1>ZERO</h1>
    <p class="about-subtitle">全栈开发者 · 技术博主 · 开源爱好者</p>
  </div>

  <section class="about-section">
    <h2>👋 关于我</h2>
    <p>
      你好！我是ZERO，一名热爱技术的全栈开发者。从大学时期开始接触编程，至今已有 5 年多的开发经验。我专注于 Web 前端开发，同时也涉猎后端、DevOps 等领域。
    </p>
    <p>
      这个博客是我分享技术知识和个人思考的地方。我希望通过文字记录自己的学习历程，同时也希望能帮助到更多在技术道路上探索的朋友。
    </p>
    <p>
      工作之余，我喜欢阅读、摄影和户外运动。我相信保持好奇心和持续学习是成为一名优秀开发者的关键。
    </p>
  </section>

  <section class="about-section">
    <h2>🛠️ 技能</h2>
    <div class="skills-grid">
      <div class="skill-item">HTML5 & CSS3</div>
      <div class="skill-item">JavaScript</div>
      <div class="skill-item">TypeScript</div>
      <div class="skill-item">Vue.js</div>
      <div class="skill-item">React</div>
      <div class="skill-item">Node.js</div>
      <div class="skill-item">Python</div>
      <div class="skill-item">Git</div>
      <div class="skill-item">Docker</div>
      <div class="skill-item">Linux</div>
      <div class="skill-item">MySQL</div>
      <div class="skill-item">MongoDB</div>
    </div>
  </section>

  <section class="about-section">
    <h2>💼 经历</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">2024 - 至今</div>
        <div class="timeline-title">高级前端工程师 · 某科技公司</div>
        <div class="timeline-desc">
          负责核心产品的前端架构设计与开发，主导了从 Vue 2 到 Vue 3 的技术升级，优化了构建流程和性能。
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2022 - 2024</div>
        <div class="timeline-title">前端工程师 · 某互联网公司</div>
        <div class="timeline-desc">
          参与多个 B 端和 C 端项目的开发，积累了丰富的组件化开发和性能优化经验。
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2021 - 2022</div>
        <div class="timeline-title">初级开发工程师 · 某创业公司</div>
        <div class="timeline-desc">
          从零开始搭建公司官网和管理后台，独立负责前端开发工作，快速成长。
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2017 - 2021</div>
        <div class="timeline-title">计算机科学与技术 · 本科</div>
        <div class="timeline-desc">
          在校期间积极参与编程竞赛和开源项目，打下了扎实的计算机基础。
        </div>
      </div>
    </div>
  </section>

  <section class="about-section">
    <h2>📫 联系我</h2>
    <p>
      如果你有任何问题、建议或者合作意向，欢迎通过以下方式联系我：
    </p>
    <p>
      📧 邮箱：<a href="mailto:hello@zeroblog.com">hello@zeroblog.com</a><br>
      🐙 GitHub：<a href="https://github.com" target="_blank">github.com/zeroblog</a><br>
      💬 微信：zero博客
    </p>
  </section>
</div>
