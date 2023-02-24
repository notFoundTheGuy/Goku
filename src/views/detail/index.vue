<template>
	<div ref="container" class="detail">
		<template v-for="(item, idx) in article" :key="idx">
			<div v-if="item.type === 'title'">
				<TitleBox
					:title="item.content.title"
					:subTitle="item.content.subTitle"
				/>
			</div>
			<div v-if="item.type === 'intro'">
				<IntroBox
					:logo="item.content.logo"
					:time="item.content.time"
					:members="item.content.members"
					:title="item.content.introTitle"
					:detail="item.content.detail"
				/>
			</div>
			<div v-if="item.type === 'text'">
				<TextBox
					:title="item.content.title"
					:subTitle="item.content.subTitle"
					:desc="item.content.desc"
				/>
			</div>
			<article v-if="ImgBoxTypes.indexOf(item.type) > -1">
				<ImgBox
					:type="item.type"
					:primers="item.content.primers"
					:title="item.content.title"
					:subTitle="item.content.subTitle"
					:source="item.content.source"
				/>
			</article>
			<article v-if="VideoBoxTypes.indexOf(item.type) > -1">
				<VideoBox
					:type="item.type"
					:primers="item.content.primers"
					:title="item.content.title"
					:subTitle="item.content.subTitle"
					:source="item.content.source"
				/>
			</article>
			<!-- 长图格式，内容不限制在一屏中 -->
			<section v-if="LongBoxTypes.indexOf(item.type) > -1">
				<LongBox :type="item.type" :source="item.content.source" />
			</section>
		</template>
	</div>
</template>

<!-- direction="vertical" -->
<script setup lang="ts">
import { computed } from 'vue';
import TitleBox from './boxes/Title.vue';
import IntroBox from './boxes/Intro.vue';
import TextBox from './boxes/Text.vue';
import ImgBox from './boxes/Image.vue';
import VideoBox from './boxes/Video.vue';
import LongBox from './boxes/LongBox.vue';
import { ref, onMounted } from 'vue';
import { useArticleStore } from '@/store/articles';
import router from '@/routers';

// 根据路由参数，获取目录
const articleStore = useArticleStore();
const $route = router.currentRoute;
const article = computed(() => {
	const curId = Number($route.value.query?.aid);
	return (
		articleStore.articles?.find((item) => item.id === curId)?.sections ?? []
	);
});

const ImgBoxTypes = ['text-full-img', 'full-img', 'center-img'];
const VideoBoxTypes = ['text-full-video', 'full-video', 'center-video'];
const LongBoxTypes = ['long-img'];
const container = ref(null as unknown as HTMLElement);

const calcArticleSize = () => {
	container.value.querySelectorAll('article')?.forEach((ele: HTMLElement) => {
		ele.style.width = window.innerWidth + 'px';
		ele.style.height = window.innerHeight + 'px';
	});
};
onMounted(() => {
	// TODO: 节流
	setTimeout(() => {
		// 因为加了1s的router的切换动画，所以这里稍微延迟一下计算
		calcArticleSize();
	}, 1000);
	window.onresize = calcArticleSize;
});
</script>

<style lang="scss" scoped>
.detail {
	> article,
	> section {
		margin-bottom: 140px;
		box-sizing: content-box;
	}
}
</style>
