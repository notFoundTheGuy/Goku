<template>
	<div class="video-box">
		<video autoplay muted loop playsinline>
			<source src="../../assets/nav-bg.mp4" />
			<source src="../../assets/nav-bg.webm" />
		</video>
	</div>
</template>

<script setup lang="ts">
import testImg from '@/assets/nav-img/1.png';
</script>

<style lang="scss" scoped>
.video-box {
	// width: 100%;
	// height: 100%;
	// display: flex;
	// align-items: center;
	// justify-content: center;

	video {
		width: 100%;
		// height: 100%;
		// object-fit: contain;
		// object-fit: cover;
	}
}
</style>
