<template>
	<section class="home">
		<Nav
			:list="menuStore.menu ?? []"
			@onMenuClick="onMenuClick"
			hasFullBg
			showLogo
		>
			<template #header>
				<Header showLogo/>
			</template>
		</Nav>
	</section>
</template>

<script setup lang="ts">
import Header from 'comps/nav/Header.vue';
import Nav from 'comps/nav/index.vue';
import router from '@/routers';
import { useMenuStore } from '@/store/menu';

const menuStore = useMenuStore();
const onMenuClick = (menu) => {
	const link = menu.link ? menu.link : `/directory?dir=${menu.id}`;
	router.push(link);
};

// const goto = (link: string) => {

// };
</script>

<style scoped lang="scss">
.home {
	position: relative;
	text-align: center;
	display: flex;
	align-items: center;
	height: 100%;
}
</style>
