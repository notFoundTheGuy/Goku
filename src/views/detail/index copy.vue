<template>
	<swiper
		class="goku-swiper"
		:pagination="{
			type: 'progressbar',
		}"
		:modules="[Pagination, Mousewheel]"
		direction="vertical"
    mousewheel
	>
		<swiper-slide>
			<ImgBox />
		</swiper-slide>
		<swiper-slide>
			<VideoBox />
		</swiper-slide>
		<swiper-slide>
			<ArticleBox
				:logo="textDetail.logo"
				:title="textDetail.title"
				:subTitle="textDetail.subTitle"
				:time="textDetail.time"
				:members="textDetail.members"
				:intro="textDetail.intro"
				:sections="textDetail.sections"
			/>
		</swiper-slide>
	</swiper>
</template>

<!-- direction="vertical" -->
<script setup lang="ts">
import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from 'swiper';
import logo from '@/assets/logo.png';
import ImgBox from './ImgBox.vue';
import VideoBox from './VideoBox.vue';
import ArticleBox from './ArticleBox.vue';
import 'swiper/css';
import 'swiper/css/pagination';

const textDetail = reactive({
	logo: logo,
	title: 'TOS人机交互系统设计',
	subTitle: 'TOS Human-Computer Interaction System Design',
	time: '2022年11月',
	members: [
		{
			name: 'Troyed',
			role: '设计',
		},
		{
			name: 'lister & ke',
			role: '开发',
		},
		{
			name: 'Troyed',
			role: '后期 & 动画',
		},
	],
	intro:
		'这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥.',
	sections: [
		{
			title: '产品工作流介绍如何如何',
      subTitle: '工作流',
			contents: [
				'这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个',
				'这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个',
				'这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目',
			],
		},
	],
});
</script>

<style lang="scss" scoped>
.goku-swiper {
	height: 100%;
	width: 100%;
	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.swiper-pagination {
		left: unset;
		right: 0;
	}
}
</style>
