import { defineConfig } from "vitepress";
import {
  golangRoutes,
  frontendRoutes,
  workRoutes,
  interviewRouter,
  zigRoutes,
  cRoutes,
} from "./router/index.mts";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xianren's notes",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "前端", link: "/frontend/" },
      { text: "Go", link: "/go/" },
      { text: "zig", link: "/zig/" },
      { text: "工作中解决的问题", link: "/work/" },
      { text: "面试", link: "/interview/" },
      { text: "C", link: "/c/" },
    ],

    sidebar: {
      "/frontend/": frontendRoutes,
      "/go/": golangRoutes,
      "/work/": workRoutes,
      "/zig/": zigRoutes,
      "/interview/": interviewRouter,
      "/c/": cRoutes,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
