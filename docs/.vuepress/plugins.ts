import { dynamicTitlePlugin } from "@vuepress-denaro/vuepress-plugin-dynamic-title";

export default [
  dynamicTitlePlugin({
    showIcon: "", // The icon displayed when the document is in the current tab.
    showText: "(/≧▽≦/)咦！又好了！", // The title displayed when the document is in the current tab.
    hideIcon: "", // The icon displayed when the document is not in the current tab.
    hideText: "(●—●)喔哟, 崩溃啦！", // The title displayed when the document is not in the current tab.
    recoverTime: 2000, // The time to recover the title after the tab is changed.
  }),
];
