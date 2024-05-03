import {
  defineComponent,
  h
} from "./chunk-2LH2CDUT.js";

// node_modules/.pnpm/@escook+vitepress-theme@1.2.10/node_modules/@escook/vitepress-theme/dist/index.js
import l from "vitepress/theme";
import { useData as p, defineClientComponent as i } from "vitepress";
var h2 = defineComponent({
  setup(B, { slots: n }) {
    const t = n, { Layout: a } = l, { site: r } = p(), e = r.value.themeConfig, m = e.musicBall && e.musicBall.enable && e.musicBall.src, u = i(() => import("./EscookMusicBall-CeEG26wP-EZW7MOW5.js"), [
      {
        style: { display: e.musicBall && e.musicBall.visible ? "" : "none" }
      }
    ]), c = i(() => import("./EscookHomeFeatureBefore-D_e5sYrO-SZH7NCQD.js"));
    return () => [h(a, null, { ...n, "home-features-before": () => {
      var s;
      return [h(c), (s = t["home-features-before"]) == null ? void 0 : s.call(t)];
    } }), m && h(u)];
  }
});
var b = {
  // extends: { ...DefaultTheme, Layout: EscookLayout },
  extends: { ...l },
  Layout: h2,
  enhanceApp({}) {
  }
};
export {
  b as default
};
//# sourceMappingURL=@escook_vitepress-theme.js.map
