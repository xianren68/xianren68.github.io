import { defineConfig } from 'vitepress'
import { golangRoutes,frontendRoutes,workRoutes } from './router/index.mts'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xianren's notes",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', link: '/frontend/' },
      { text: 'Go', link: '/go/' },
      {text: '工作中解决的问题', link:'/work/'}
    ],

    sidebar: {
      '/frontend/': frontendRoutes,
      '/go/': golangRoutes,
      '/work/': workRoutes
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
