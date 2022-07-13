<template>
	<div class="detail-img">
		<img :src="value" />
	</div>
</template>

<script setup lang="ts">
interface Props {
	value: any;
}

const { value } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.detail-img {
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	width: 100%;
	height: 100%;
	img {
		width: 100%;
	}
}
</style>
