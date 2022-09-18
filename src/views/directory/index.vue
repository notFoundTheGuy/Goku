<template>
	<section class="directory">
		<Nav theme="vertical" :list="articleList" :title="selectMenu?.title" @onMenuClick="onMenuClick" >
			<template #header>
				<Header :title="selectMenu?.title" :subTitle="selectMenu?.desc" />
			</template>
		</Nav>
	</section>
</template>

<script setup lang="ts">
import Header from 'comps/nav/Header.vue';
import { computed } from 'vue';
import Nav from 'comps/nav/index.vue';
import router from '@/routers';
import { useMenuStore } from '@/store/menu';

// 根据路由参数，获取目录
const menuStore = useMenuStore();
const $route = router.currentRoute;
const selectMenu = computed(() => {
	const curId = Number($route.value.query?.dir);
	return menuStore.menu?.find((item) => item.id === curId);
});
const articleList = computed(() => {
	console.log(selectMenu)
	return selectMenu.value?.subMenu ?? [];
});

const onMenuClick = (menu) => {
	const link = `/detail?aid=${menu.articleId}`;
	router.push(link);
};
</script>

<style scoped lang="scss">
.directory {
	position: relative;
	text-align: center;
	display: flex;
	align-items: center;
	height: 100%;
}
</style>
