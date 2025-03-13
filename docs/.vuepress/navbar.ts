import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "博客", link: "/blog/" },
  { text: "标签", link: "/blog/tags/" },
  // { text: "归档", link: "/blog/archives/" },
  {
    text: "生活",
    items: [{ text: "杂记", link: "/myself/markdown.md" }],
  },
  { text: "时间线", link: "/notes/myself/README.md" },
  { text: "关于", link: "/about/" },
]);
