<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { ThemeHomeConfigBase } from "vuepress-theme-plume";
import { VPHomeBox } from "vuepress-theme-plume/client";
import { useRouter } from "vue-router";

const props = defineProps<
  ThemeHomeConfigBase & {
    // 组件 props, frontmatter 中的属性将会传递给组件
  }
>();
const wheel = ref([
  {
    name: "BTC",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png",
    title: "",
    desc: "",
  },
  {
    name: "SOLALA",
    src: "https://cdn-icons-png.flaticon.com/512/15208/15208206.png",
    title: "",
    desc: "",
  },
  {
    name: "eth",
    src: "https://cdn-icons-png.flaticon.com/512/14446/14446159.png",
    title: "",
    desc: "",
  },
  {
    name: "PEPE",
    src: "https://cryptologos.cc/logos/pepe-pepe-logo.png?v=040",
    title: ".",
    desc: "",
  },
  {
    name: "DOGE",
    src: "https://upload.wikimedia.org/wikipedia/zh/thumb/d/d0/Dogecoin_Logo.png/250px-Dogecoin_Logo.png",
    title: "",
    desc: "",
  },
  {
    name: "SHIB",
    src: "https://cdn-icons-png.flaticon.com/512/15301/15301760.png",
    title: "",
    desc: "",
  },
]);
</script>

<template>
  <section class="section">
    <div class="section-wrapper">
      <header class="header">
        <hgroup class="hgroup">
          <!-- <h1 class="headline" style="font-size: large">欢迎来到币圈参考消息</h1>
          <p class="tagline">信息收集&交易参考</p> -->
        </hgroup>
        <div style="display: flex; gap: 16px">
          <!-- <RouteLink class="section-link" to="/sites/">新手入门</RouteLink> -->
          <RouteLink class="section-link" to="/sites/">站点导航</RouteLink>
        </div>
      </header>
      <!-- nth-siblings = Total cards count - 1; update this whenever you add/remove a card  -->
      <ul class="cards" style="--nth-siblings: 5">
        <li v-for="(item, index) in wheel" class="card" :style="{ '--nth-child': index + 1 }">
          <a href="#" class="avatar-link-wrapper">
            <div class="visual">
              <img class="avatar-img" :src="item.src" width="144" height="144" alt="Ethan B., DevOps Engineer" />
            </div>
            <div class="tooltiptext">
              <h3 class="team-name">{{ item.name }}</h3>
              <div class="team-content-wrapper">
                <p class="team-title">{{ item.title }}</p>
                <p class="team-bio">{{ item.desc }}</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped lang="scss">
@layer reset, base, utilities, components, layout, overrides;

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@property --direction {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@layer reset {
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  :where(:not(dialog)) {
    margin: 0;
  }

  :where(html) {
    -webkit-text-size-adjust: none;

    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  :where(body) {
    min-block-size: 100svb;
    -webkit-font-smoothing: antialiased;
  }
}

@layer base {
  html {
    --surface-1: oklch(20% 0.03 269);
    --surface-2: oklch(26% 0.04 269);
    --text-1: oklch(91% 0.03 61);
    --body: 400 1rem/1.5rem system-ui, sans-serif;
    --display: 400 3.562rem/4rem system-ui, sans-serif;
    --display-small: 400 2.25rem/2.75rem system-ui, sans-serif;
    --label: 500 0.875rem/1.25rem system-ui, sans-serif;
    --title: 400 1.375rem/1.75rem system-ui, sans-serif;
    color-scheme: dark;
  }

  body {
    background-color: var(--surface-1);
    color: var(--text-1);
    font: var(--body);
  }
}

@layer layout {
  .section {
    padding: 0 20px;
    display: grid;
    max-inline-size: 100%;
    overflow-x: clip;
    padding-block: 80px;
    place-items: center;
  }

  .section-wrapper {
    display: grid;
    place-items: center;
  }

  .header {
    display: grid;
    place-items: center;
    gap: 16px;
    z-index: 2;

    /* lg-n-above */
    @media (width >=1024px) {
      /* Placing header and cards in the same grid cell to stack them */
      /* Both elements use grid-area: 1/1 to overlap within the same area */
      grid-area: 1/1;
    }
  }

  .hgroup {
    display: grid;
    place-items: center;
    gap: 8px;
  }

  .headline {
    font: var(--display-small);

    /* lg-n-above */
    @media (width >=1200px) {
      font: var(--display);
    }
  }

  .section-link {
    // color: var(--text-1);
    text-decoration: underline !important;
    font: var(--label);

    /* lg-n-below */
    @media (width < 1024px) {
      display: none;
    }
  }

  .cards {
    list-style: none;
    padding: 0;

    /* lg-n-below */
    @media (width < 1024px) {
      display: grid;
      grid-auto-flow: column;
      gap: 32px;
      max-inline-size: 100%;
      overflow-x: scroll;
      padding-block: 32px;
      padding-inline: 32px;
    }

    /* lg-n-above */
    @media (width >=1024px) {
      --avatar-opacity: 1;
      --avatar-img-scale: 1;
      --tooltip-visibility: hidden;
      --tooltip-opacity: 0;
      --animation-state: running;

      display: grid;
      /* Placing header and cards in the same grid cell to stack them */
      /* Both elements use grid-area: 1/1 to overlap within the same area */
      grid-area: 1/1;
      min-block-size: 700px;
      place-items: center;

      &:has(.avatar-link-wrapper:is(:hover, :focus-visible, :active)) {
        --animation-state: paused;
        /* Reduces opacity of non-hovered avatars to create a layered effect */
        --avatar-opacity: 0.4;
      }
    }
  }

  .card {
    padding: 0;

    /* lg-n-above */
    @media (width >=1024px) {
      --radius: min(620px, 40cqi);
      --offset-per-child: calc(360deg / (var(--nth-siblings) + 1));
      --angle-offset: calc(var(--nth-child) * var(--offset-per-child));
      --inline-ratio: 1/1;
      /* Keeps the horizontal scaling unchanged */
      --block-ratio: 1/2;
      /* Reduces vertical scaling, making it an oval */

      /* Adjusts tooltip direction based on avatar position */
      /* Future improvement: Replace with the sign() CSS function when it becomes widely supported */
      /* Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/sign */
      --direction: min(max(calc(cos((var(--angle) + var(--angle-offset))) * -100), -1), 1);

      /* Stack all cards in the same grid cell */
      grid-area: 1/1;

      /* Based on Bramus' article, modified with inline/block ratios to create an oval shape */
      /* Source: https://web.dev/articles/css-trig-functions */

      translate: calc(cos((var(--angle) + var(--angle-offset))) * var(--radius) * var(--inline-ratio))
        calc(sin((var(--angle) + var(--angle-offset))) * var(--radius) * var(--block-ratio) * -1);

      animation: adjust-angle linear 40s infinite reverse var(--animation-state);
    }
  }

  /* Continuously rotates the avatars in a circular motion */
  @keyframes adjust-angle {
    to {
      --angle: 360deg;
    }
  }

  .avatar-link-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: var(--text-1);

    &:is(:hover, :focus-visible, :active) {
      --avatar-img-scale: 1.1;
      --avatar-opacity: 1;
      --tooltip-opacity: 1;
      --tooltip-visibility: visible;
    }

    /* lg-n-below */
    @media (width < 1024px) {
      flex-direction: column;
      gap: 16px;
    }
  }

  .visual {
    aspect-ratio: 1;
    border-radius: 1rem;
    box-shadow: 0 2px 4px 0 oklch(0 0 0 / 10%);
    inline-size: 240px;
    opacity: var(--avatar-opacity);
    overflow: clip;
    transition: opacity 0.3s ease;

    /* lg-n-above */
    @media (width >=1024px) {
      inline-size: 144px;
      border-radius: 1e5px;
    }
  }

  .avatar-img {
    background-color: var(--surface-2);
    block-size: 100%;
    display: block;
    inline-size: 100%;
    object-fit: cover;
    scale: var(--avatar-img-scale, 1);
    transition: scale 0.3s ease;
  }

  .tooltiptext {
    display: grid;
    gap: 4px;

    /* lg-n-above */
    @media (width >=1024px) {
      position: absolute;
      /* Adjusts tooltip placement based on avatar position */
      /* Moves the tooltip to the left or right depending on the avatar's location */
      /* --direction is either 1 (right) or -1 (left) */
      max-inline-size: 20ch;
      opacity: var(--tooltip-opacity);
      transition-duration: 0.3s;
      transition-property: opacity, visibility;
      transition-timing-function: ease;
      translate: 110% 0;
      visibility: var(--tooltip-visibility);

      /* make the tooltips non-interactive */
      pointer-events: none;
      user-select: none;

      /* Adjusts text alignment based on avatar position */
      /* Ensures the tooltip text aligns properly when shifted left or right */
      @container style(--direction: -1) {
        text-align: end;
        translate: -110% 0;
      }
    }
  }

  .team-name {
    font: var(--title);
  }
}
</style>
