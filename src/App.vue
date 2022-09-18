<template>
	<div class="main-layout">
		<Loading
			:progress="progress"
			v-if="isLoading"
			@loaded="isLoading = false"
		></Loading>
		<div v-show="!isLoading">
			<Back v-show="!hideBackBtn" />
			<transition name="fade">
				<router-view />
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Back from 'comps/Back.vue';
import Loading from 'comps/Loading.vue';
import { useRoute } from 'vue-router';
import { watch, ref, onMounted } from 'vue';

import { imgsPreloader } from '@/utils/imgPreloader.js';
import { fetchMenu, fetchArticles } from './common/service';
import { useMenuStore } from '@/store/menu';
import { useArticleStore } from '@/store/articles';

const isLoading = ref(true);
let progressInterval: any = null;
const progress = ref(0);

const menuStore = useMenuStore();
const articlesStore = useArticleStore();

// 获取源数据 & 设置到store中
const initData = () => {
	return Promise.all([fetchMenu(), fetchArticles()])
		.then((res) => {
			const [menuRes, articlesRes] = res;
			menuStore.menu = menuRes.list;
			articlesStore.articles = articlesRes.list;
		})
		.catch((err) => {
			alert('乖～去检查检查配置的格式');
			console.error('拉取信息失败：', err);
		});
};

// 预加载部分主图
const preloadNavImgs = () => {
	const imgs: Array<string> = [];
	menuStore.menu.forEach((item: { navImg: any; subMenu: any[] }) => {
		item.navImg && imgs.push(item.navImg);
		item.subMenu?.forEach((sub) => {
			sub.navImg && imgs.push(sub.navImg);
		});
	});

	return imgsPreloader([...new Set(imgs)]);
};

onMounted(async () => {
	const fakeLoad = () => {
		if (progressInterval) clearInterval(progressInterval);

		progressInterval = setInterval(() => {
			progress.value += 2;
			if (progress.value >= 100) {
				clearInterval(progressInterval);
			}
		}, 100);
	};
	fakeLoad();
	await initData();
	await preloadNavImgs();
	// TODO: 做真是的加载进度
	// progress.value = 100;
	// isLoading.value = false;
});

const HideBackRoutes = ['/'];
const route = useRoute();
const hideBackBtn = ref(false);
watch(
	() => route.path,
	(newPath) => {
		console.log('=====', newPath);
		hideBackBtn.value = HideBackRoutes.some((item) => item === newPath);
	},
	{
		immediate: true,
	}
);
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
#app {
	height: 100%;
	width: 100%;
}
.loading {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.main-layout {
	width: 100%;
	height: 100%;
	> section {
		width: 100%;
		height: 100%;
	}
}
</style>
