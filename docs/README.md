---
pageLayout: home
externalLinkIcon: true
config:
  - type: doc-hero
    hero:
      name: Theme Plume
      text: VuePress Next Theme
      tagline: 一个简约易用的，功能丰富的 vuepress 文档&博客 主题
      image: /plume.png
      actions:
        - theme: brand
          text: 快速开始 →
          link: /guide/intro/
        - theme: alt
          text: Github
          link: https://github.com/pengzhanbo/vuepress-theme-plume
  - type: custom

  - type: features
    features:
      - title: 论文笔记
        icon: 📖
        details: 樊文飞院士的论文解读
        link: /paperNote/
      - title: 数据库
        icon: 📈
        details: 关系型，NoSQL，中间件的讲解
        link: /blog/categories/?id=4b16fb
      - title: 数据挖掘
        icon: 📍
        details: 从数据处理到关联规则发现
        link: /dataMining/
      - title: 设计原则
        icon: 📦
        details: 面向对象编程的代码设计经验总结
        link: /designModel/
  - type: blog
---

::: center

# 快速导航

<SocialShare 
  :networks="['twitter', 'facebook']" 
  :tags="['SocialShare', 'VuePress']" 
/>

### xxx

:::

<!--
自定义域名编译后失效需重新手动配置？
--CNAME 文件不是放在库的根目录，而是项目编译后网站的根目录下
字体文件不生效？
.ttf 太大 转换为 .woff2 格式。如果是中文字集可能还是会有几MB的体积，可能拆分为诸多小文件，使用同一个font-family
 -->
<!-- 动态更改标签插件 @vuepress-denaro/vuepress-plugin-dynamic-title-->
