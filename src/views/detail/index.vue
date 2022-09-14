<template>
	<div ref="container" class="detail">
		<template v-for="(item, idx) in article" :key="idx">
			<div v-if="item.type === 'base'">
				<ArticleBox
					:logo="item.content.logo"
					:title="item.content.title"
					:subTitle="item.content.subTitle"
					:time="item.content.time"
					:members="item.content.members"
					:intro="item.content.intro"
					:sections="item.content.blocks"
				/>
			</div>
			<article v-if="item.type === 'img'">
				<ImgBox :value="item.content" />
			</article>
			<article v-if="item.type === 'video'">
				<VideoBox :value="item.content" />
			</article>
		</template>
	</div>
</template>

<!-- direction="vertical" -->
<script setup lang="ts">
import { reactive, computed } from 'vue';
import ImgBox from './ImgBox.vue';
import VideoBox from './VideoBox.vue';
import ArticleBox from './ArticleBox.vue';
import { ref, onMounted } from 'vue';
import { useArticleStore } from '@/store/articles';
import router from '@/routers';

// 根据路由参数，获取目录
const articleStore = useArticleStore();
const $route = router.currentRoute;
const article = computed(() => {
	const curId = Number($route.value.query?.aid);
	console.log(curId);
	console.log(curId);
	return (
		articleStore.articles?.find((item) => item.id === curId)?.sections ?? []
	);
});

const container = ref(null as unknown as HTMLElement);

const calcArticleSize = () => {
	container.value.querySelectorAll('article')?.forEach((ele: HTMLElement) => {
		ele.style.width = window.innerWidth + 'px';
		ele.style.height = window.innerHeight + 'px';
	});
};
onMounted(() => {
	// TODO: 节流
	calcArticleSize();
	window.onresize = calcArticleSize;
});
</script>
