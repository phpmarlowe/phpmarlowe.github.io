---
pageLayout: home
title: note示例
pageClass: page-memorandum
config:
  - type: doc-hero
    hero:
      name: 参考手册
      tagline: 日常交易中，所使用的各交易所、工具使用方式和专有名词的解释。
      image: /images/memorandum.svg

  - type: features
    features:
      - title: 快速入门
        icon: mdi:ssh
        details: 小白如何快速完成第一笔交易
        link: ./ssh.md
      - title: 名词解释
        icon: cil:find-in-page
        details: 现货、合约、web3土狗、链上
        link: ./grep.md
      - title: 打狗辅助工具
        icon: logos:git-icon
        details: 工欲善其事，必先利其器
        link: ./git.md
      - title: 交易所和web3钱包
        icon: logos:pm2-icon
        details: 钱包的使用
        link: ./pm2.md
  - type: custom
permalink: /demo-note/
createTime: 2024/06/20 22:02:04
---

<style>
.page-memorandum {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #ff8736 30%, #ffdf85);
  --vp-home-hero-image-background-image: linear-gradient(
    45deg,
    rgb(255, 246, 215) 50%,
    rgb(239, 216, 177) 50%
  );
  --vp-home-hero-image-filter: blur(44px);
}

[data-theme="dark"] .page-memorandum {
  --vp-home-hero-image-background-image: linear-gradient(
    45deg,
    rgba(255, 246, 215, 0.07) 50%,
    rgba(239, 216, 177, 0.15) 50%
  );
}
</style>
