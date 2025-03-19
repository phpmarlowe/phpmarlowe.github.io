import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import { notes } from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "",

  appearance: true, // 配置 深色模式

  social: [
    {
      icon: "x",
      link: "http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes",
    },
    {
      icon: {
        svg: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#0F0F0F"/>
</svg>`,
        name: "telegram",
      },
      link: "http://wpa.qq.com/msgrd?v=3&uin=1548031817&site=qq&menu=yes",
    },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: false,

  // prevPage: true, // 是否启用上一页链接
  // nextPage: true, // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: false,

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: "https://p0.qhimg.com/t11cede5e7b4c1588e3c737e649.png",
    name: "sss",
    description: "",
    circle: false,
    location: "",
    organization: "",
    layout: "right",
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: "top-right",
  //   contentType: "markdown",
  //   title: "公告板标题",
  //   content: "公告板内容",
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true, // 启用 页面间跳转过渡动画
  //   postList: true, // 启用 博客文章列表过渡动画
  //   appearance: "fade", // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },
});
