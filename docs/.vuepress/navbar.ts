import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "推文精选", link: "/blog/", activeMatch: "^/(blog|article)/" }, // 集思广益 3.23前 麦总、慧姐、巫师 三篇
  // { text: "参考手册", link: "/demo-note/" },
  { text: "站点导航", link: "/sites/" },
  // {
  //   text: "入门文档", // 这个模块算是简单，周末话
  //   items: [
  //     { text: "新手必看", link: "/start" },
  //     {
  //       text: "名词字典",
  //       link: "/noun",
  //     },
  //     // {
  //     //   text: "交易所",
  //     //   link: "/trade", // 不急，八九月份都行，先把其他板块弄掉
  //     // },
  //   ],
  // },
  // {
  //   text: "工具库教程", // 四月份启动
  //   link: "/tool",
  // },
  // { text: "大事件", link: "/timeline" }, //四月份启动
  // { text: "友情链接", link: "/friends/" },
  // { text: "关于本站", link: "/about/" }, // 找时间先做出来，五月份放开
]);
