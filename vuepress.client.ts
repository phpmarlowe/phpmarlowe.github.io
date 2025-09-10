import { defineClientConfig } from "vuepress/client";
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

import Landing from "./docs/.vuepress/theme/components/Landing/Landing.vue";

import "./docs/.vuepress/theme/styles/index.scss";
import "./docs/.vuepress/theme/styles/custom.css";
import "./docs/.vuepress/theme/styles/font.css";
import "./docs/.vuepress/theme/styles/plugins.css";
import "./docs/.vuepress/theme/styles/landing.css";
export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`
    // your custom components
    app.component("Landing", Landing);
  },
});
