<template>
	<section class="header">
		<div class="logo-wrap" v-show="props.showLogo">
			<img src="../../assets/logo.png" alt="logo" />
		</div>
		<div class="title" v-show="props.title">
			<h1>{{ props.title }}</h1>
			<p>{{ props.subTitle }}</p>
		</div>
		<!-- <div class="music-bar">音乐 —— 开</div> -->
	</section>
</template>

<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	subTitle: {
		type: String,
	},
	showLogo: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss" scoped>
.header {
	position: relative;
	z-index: 30;
	height: 50px;
	width: 100%;
	font-size: 14px;
	.title {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		h1 {
			font-size: 32px;
			line-height: 46px;
			letter-spacing: 5px;
			+ p {
				font-size: 0.83vw;
				color: rgba($color: #fff, $alpha: 0.6);
			}
		}
	}
	.music-bar {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	.logo-wrap {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		img {
			width: 160px;
		}
	}
}
</style>
