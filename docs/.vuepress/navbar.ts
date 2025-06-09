import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "博客", link: "/blog/" },
  { text: "图片", link: "/image/markdown.md" },
  {
    text: "生活",
    items: [{ text: "杂记", link: "/personal/" }],
  },
  // { text: "时间线", link: "/notes/myself/README.md" },
  // { text: "关于", link: "/about/" },
]);
