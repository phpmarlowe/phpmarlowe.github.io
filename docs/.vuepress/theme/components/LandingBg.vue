<script setup lang="ts">
import { useSessionStorage } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";

const list = ref<string[]>([]);

const cache = useSessionStorage<string[]>("__VUEPRESS_HOME_BACKGROUND_LIST", []);

const active = ref(0);
const asyncActive = ref(0);

let interval: ReturnType<typeof setInterval> | null = null;
onMounted(async () => {
  list.value = ["https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/bird1.jpg", "https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/bird2.jpg"];
  if (list.value.length > 1) {
    interval = setInterval(() => {
      active.value = (active.value + 1) % list.value.length;
      setTimeout(() => {
        asyncActive.value = active.value;
      }, 1000);
    }, 10000);
  }
});

onUnmounted(() => {
  interval && clearInterval(interval);
});
</script>

<template>
  <div class="landing-bg">
    <div
      v-for="(item, index) in list"
      :key="item"
      class="landing-bg-inner"
      :class="{
        active: active === index,
        animation: active === index || asyncActive === index,
      }"
      :style="{ backgroundImage: `url(${item})`, zIndex: list.length - index }" />
  </div>
</template>

<style scoped>
.landing-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.landing-bg-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.landing-bg-inner.active {
  opacity: 1;
}

.landing-bg-inner.animation {
  transform: scale(1);
  animation: landing-bg-ani 12s ease-in-out;
}

@keyframes landing-bg-ani {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
}
</style>
