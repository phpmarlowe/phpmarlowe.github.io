import { defineClientConfig } from "vuepress/client";
import Swiper from "vuepress-theme-plume/features/Swiper.vue";
import Landing from "./theme/components/Landing.vue";

import "./theme/styles/custom.css";
import "./theme/styles/font.css";
import "./theme/styles/plugins.css";
import "./theme/styles/Landing.css";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Swiper", Swiper); // you should install `swiper`
    // your custom components
    app.component("Landing", Landing);
  },
});
