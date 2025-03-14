---
pageLayout: home
externalLinkIcon: false
config:
  - type: banner
    banner: "/back-ground/wave.png"
    bannerMask:
      light: 0.1
      dark: 0.3
    hero:
      name: xxx
      tagline: Keep It Simple
      text: 如无必要，勿增实体。
      actions:
        - theme: brand
          text: 进入博客
          link: /blog/
        - theme: brand
          text: 😶 关于我
          link: /about-me/
        - theme: alt
          text: Github ->
          link: xxx
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
