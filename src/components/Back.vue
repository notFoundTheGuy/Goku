<template>
	<div class="back-btn" @click="goBack">
		<img src="../assets/back.svg" />
	</div>
</template>

<script setup lang="ts">
const goBack = () => {
	history.back();
};
</script>

<style lang="scss" scoped>
.back-btn {
	position: fixed;
	z-index: 99;
	top: -50px;
	left: -50px;
	width: 172px;
	height: 172px;
	border-radius: 24vw;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(255, 255, 255, 0.4);
	cursor: pointer;
	transition: all 0.3s;
	img {
		width: 32px;
		position: relative;
		top: 15px;
		left: 15px;
		transform: rotate(45deg);
		transition: all 0.3s;
	}
	&:hover {
		transform: scale(1.2);
		img {
			transform: rotate(0);
		}
	}
}
</style>
