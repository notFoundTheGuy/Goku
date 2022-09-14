<template>
	<div class="back-btn" @click="goBack">
		<img src="../assets/back.svg">
	</div>
</template>

<script setup lang="ts">
const goBack = () => {
	history.back();
}
</script>

<style lang="scss" scoped>
.back-btn {
	position: fixed;
	z-index: 99;
	top: -4vw;
	left: -4vw;
	width: 15vw;
	height: 15vw;
	border-radius: 24vw;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(255, 255, 255, .4);
	cursor: pointer;
	transition: all 0.3s;
	img {
		width: 3vw;
		position: relative;
		top: 1vw;
		left: 1vw;
	}
	&:hover {
		transform: scale(1.2);
	}
}
</style>
