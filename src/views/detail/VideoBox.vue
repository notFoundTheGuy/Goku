<template>
	<div class="video-box">
		<video autoplay muted loop playsinline>
			<source :src="value" />
			<!-- <source src="../../assets/nav-bg.mp4" />
			<source src="../../assets/nav-bg.webm" /> -->
		</video>
	</div>
</template>

<script setup lang="ts">
interface Props {
	value: any;
}

const { value } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.video-box {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	video {
		width: 100%;
	}
}
</style>
