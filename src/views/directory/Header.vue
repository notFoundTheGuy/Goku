<template>
	<section class="header">
		<div class="title">
			<h1>{{ props.title }}</h1>
			<p>{{ props.subTitle }}</p>
		</div>
		<div class="music-bar">音乐 —— 开</div>
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
});
</script>

<style lang="scss" scoped>
.header {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	padding: 0 8vw;
	height: 50px;
	margin-top: 80px;
	width: 100%;
	.title {
		h1 {
			font-size: 2.22vw;
			line-height: 1.1;
			letter-spacing: 0.8vw;
			+ p {
				font-sieze: 0.83vw;
				color: rgba($color: #fff, $alpha: 0.6);
			}
		}
	}

	.music-bar {
		position: absolute;
		right: 8vw;
		top: 50%;
		transform: translateY(-50%);
	}
}
</style>
