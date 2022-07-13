<template>
	<div
		class="detail-img"
		:style="{
			'background-image': `url(${testImg})`
		}"
	>
		<!-- <img :src="testImg" alt="" /> -->
	</div>
</template>

<script setup lang="ts">
import testImg from '@/assets/nav-img/1.png';
</script>

<style lang="scss" scoped>
.detail-img {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
  }
	// width: 100%;
	// // height: 100%;
	// background-repeat: no-repeat;
	// // background-size: cover;
	// background-size: contain;
	background-position: center;
}
</style>
