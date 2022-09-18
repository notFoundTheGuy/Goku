<template>
	<div class="title-box">
		<h1>{{ title }}</h1>
		<h4>{{ subTitle }}</h4>
	</div>
</template>

<script setup lang="ts">
interface Props {
	title: string;
	subTitle: string;
}

const { title, subTitle } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.title-box {
  padding: 240px 210px 140px;
  h1,h4 {
    font-weight: 800;
  }

	h4 {
		opacity: 0.6;
	}
}
</style>
