
<template>
  <ul
    class="nav"
    :class="{ 'nav-active': isMenuActive }"
    v-if="props.list?.length"
  >
    <li
      v-for="(item, idx) in props.list"
      class="nav-item"
      :key="idx"
      @click="menuClick(curItem)"
      @mouseenter="
        () => {
          isMenuActive = true;
          curIndex = idx;
        }
      "
      @mouseleave="
        () => {
          isMenuActive = false;
          curIndex = -1;
        }
      "
      ref="menuRefs"
    >
      <i class="corner">
        {{ idx + 1 >= 10 ? `${idx + 1}` : `0${idx + 1}` }}
      </i>
      <p>{{ item.desc }}</p>
      <span>{{ item.title }}</span>
    </li>
  </ul>
  <div
    class="img-box"
    :class="{ active: curItem?.navImg }"
    :style="{ 'background-image': `url(${curItem?.navImg})` }"
  ></div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from "vue";
import router from "@/routers";
import { useMenuStore } from "@/store/menu";

const menuStore = useMenuStore();
const curIndex = ref(-1);
const curItem = computed(() => {
  return props.list[curIndex.value];
});
const menuRefs = ref([]);

interface MenuItem {
  title: string;
  id: number;
  desc: string;
  navImg: string;
  link?: string;
}

const props = defineProps({
  list: {
    type: Array<MenuItem>,
    required: true,
    defalut: [],
  },
  domToTop: {
    type: Number,
    default: 0,
  },
});

const menuClick = (menu: MenuItem) => {
  const link = menu.link ? menu.link : `/directory?dir=${menu.id}`;
  router.push(link);
};

const domAddStyle = () => {
  menuRefs.value.forEach((element: Element) => {
    const innerHeight = window.innerHeight;
    const toTop = element.getBoundingClientRect().top;
    const x = toTop / innerHeight;
    let scale = -0.8 * Math.pow(x, 2) + 0.8 * x + 1;
    if (scale <= 0) {
      scale = 1;
    }
    const translateX = -80 * Math.pow(x, 2) + 80 * x;
    element.style.transform = `scale(${scale}) translateX(${translateX}px)`;
  });
};

watch(
  () => props.domToTop,
  () => {
    domAddStyle();
  }
);
watch(
  () => menuStore.isLoading,
  (newVal) => {
    if (newVal) {
      return;
    }
    setTimeout(domAddStyle, 0);
  }
);
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  margin: 120px 0 0 160px;
  font-weight: 800;
  text-align: left;
  overflow-x: visible;
  overflow-y: auto;
  z-index: 1;
  &.nav-active .nav-item {
    opacity: 0.2;
  }
  .nav-item {
    position: relative;
    font-size: 32px;
    line-height: 46px;
    margin-bottom: 132px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transform-origin: 0 center;
    &:hover {
      opacity: 1;
    }
    > p {
      font-size: 64px;
      line-height: 76px;
      transform-origin: left;
    }
    i.corner {
      position: relative;
      bottom: -10px;
      font-size: 20px;
      line-height: 24px;
      color: rgba($color: #fff, $alpha: 0.6);
      -webkit-text-stroke: 1px transparent;
    }
    span {
      flex: 1;
      font-size: 20px;
      line-height: 24px;
      font-family: PingFangSC-Semibold, sans-serif;
      color: rgba(255, 255, 255, 0.6);
      white-space: nowrap;
    }
  }
}
.img-box {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 0;
  transform: translate(-50%, -50%);
  // margin: $distanceTop auto 0;
  width: 80%;
  // 固定宽高比：16:9，70% * 56.25%
  padding-top: 39.375%;
  background-size: cover;
  transition: all 0.2s;
  &.active {
    display: block;
  }
}
</style>
