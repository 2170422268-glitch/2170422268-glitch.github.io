import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  includeSrc: false,
  render: false,
  excerpt: true,
  transform(rawData) {
    console.log('Raw data:', JSON.stringify(rawData.map(r => ({ url: r.url, title: r.frontmatter?.title }))))
    if (!rawData || rawData.length === 0) {
      return []
    }
    return rawData
      .filter(item => item && item.frontmatter)
      .sort((a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      })
      .map((page) => ({
        title: page.frontmatter.title || '',
        url: page.url || '',
        date: page.frontmatter.date || '',
        tags: Array.isArray(page.frontmatter.tags) ? page.frontmatter.tags : [],
        cover: page.frontmatter.cover || 'https://picsum.photos/seed/default/800/400',
        excerpt: page.frontmatter.excerpt || '',
      }))
  },
})
