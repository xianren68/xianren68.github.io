import { defineConfig } from 'vitepress'
import { golangRoutes,frontendRoutes } from './router/index.mts'
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
    ],

    sidebar: {
      '/frontend/': frontendRoutes,
      '/go/': golangRoutes,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
