import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "干货收录", link: "/blog/" }, // 3.23前 麦总、慧姐、巫师 三篇
  {
    text: "入门文档", // 这个模块算是简单，周末话
    items: [
      { text: "新手必看", link: "/start" },
      {
        text: "名词字典",
        link: "/noun",
      },
      // {
      //   text: "交易所",
      //   link: "/trade", // 不急，八九月份都行，先把其他板块弄掉
      // },
    ],
  },
  // {
  //   text: "工具库教程", // 四月份启动
  //   link: "/tool",
  // },
  // { text: "大事件", link: "/timeline" }, //四月份启动
  // { text: "关于", link: "/about/" },// 找时间先做出来，五月份放开
  // { text: "友情链接", link: "/friends/" }, 不着急可考虑三个月后即6月启动
]);
