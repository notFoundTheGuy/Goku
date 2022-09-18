<template>
	<div class="video-box" :class="type">
		<video autoplay muted loop playsinline>
			<source :src="source" />
		</video>
		<div class="text-wrap">
			<ul v-if="primers?.length">
				<li v-for="(item, idx) in primers" :key="idx">{{ item }}</li>
			</ul>
			<p class="title" v-if="title">{{ title }}</p>
			<p class="sub-title" v-if="subTitle">{{ subTitle }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	primers?: string[];
	title?: string;
	subTitle?: string;
	source: string;
	type: string;
}

const { primers, title, subTitle, source, type } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.video-box {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	width: 100%;
	height: 100%;
	.text-wrap {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;

		ul {
			font-size: 18px;
			line-height: 26px;
			li:nth-child(1) {
				color: rgba($color: #fff, $alpha: 0.8);
			}
		}

		.title {
			font-size: 48px;
			line-height: 69px;
		}
		.sub-title {
			font-size: 18px;
			line-height: 26px;
			color: rgba($color: #fff, $alpha: 0.6);
		}
	}
	video {
		width: 100%;
	}

	&.center-video {
		padding: 140px 0;
		video {
			width: 75%;
			max-width: 1440px;
		}
	}
}
</style>
