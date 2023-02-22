
<template>
	<ul class="nav" v-if="props.list?.length">
        <li
            v-for="(item, idx) in props.list"
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
        :style="{ 'background-image': `url(${curItem?.navImg})` }"
    ></div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue';
import router from '@/routers';
import { useMenuStore } from '@/store/menu';

const menuStore = useMenuStore();
const curIndex = ref(-1);
const curItem = computed(() => {
    return props.list[curIndex.value];
});
const menuRefs = ref([])

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
		defalut: []
	},
    domToTop: {
        type: Number,
        default: 0
    }
});

const menuClick = (menu: MenuItem) => {
	const link = menu.link ? menu.link : `/directory?dir=${menu.id}`;
	router.push(link);
};

// 计算放大的值
const calcScale = (toTop: number, direction: -1 | 1): number => {
    const innerHeight = window.innerHeight
    const a = direction * 0.4 / innerHeight
    const b = direction > 0 ? 0.9 : 1.3
    return a * toTop + b
    // return Math.pow(toTop / innerHeight, 1.5)
}

// 计算X轴的偏移量
const calcTranslateX = (toTop: number, direction: -1 | 1): number => {
    const innerHeight = window.innerHeight
    const a = direction * 40 / innerHeight
    const b = direction > 0 ? 0 : 40
    return a * toTop + b
}

const domAddStyle = () => {
    menuRefs.value.forEach((element: Element) => {
        const innerHeight = window.innerHeight
        const toTop = element.getBoundingClientRect().top
        const x = toTop / innerHeight
        const scale = -0.8 * Math.pow(x, 2) + 0.8 * x + 1
        const translateX = -80 * Math.pow(x, 2) + 80 * x

        // 原方案
        // const onMidLine = toTop <= (innerHeight / 2)
        // const scale = onMidLine ? calcScale(toTop, 1) : calcScale(toTop, -1)
        // const translateX = onMidLine ? calcTranslateX(toTop, 1) : calcTranslateX(toTop, -1)
        element.style.transform = `scale(${scale}) translateX(${translateX}px)`
    });
}

watch(
    () => props.domToTop,
	(newVal) => {
        // 判断方向，向上为1，向下滚动为-1
        const direction = newVal > 0 ? -1 : 1
        domAddStyle()
	},
)
watch(
	() => menuStore.isLoading,
	(newVal) => {
        if (newVal) {
            return
        }
        setTimeout(domAddStyle, 0);
	}
)
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
    li {
        position: relative;
        font-size: 32px;
        line-height: 46px;
        padding-bottom: 120px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        transform-origin: 0 center;
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
            color: rgba(255, 255, 255, 0.60);
            white-space: nowrap;
        }
    }
}
.img-box {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
    // margin: $distanceTop auto 0;
    width: 75%;
    // 固定宽高比：16:9，70% * 56.25%
    padding-top: 39.375%;
    background-size: cover;
    transition: all 0.5s;
}
</style>
