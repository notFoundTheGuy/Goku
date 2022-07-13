<template>
	<section class="home">
		<Header />
		<Nav />
	</section>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import Nav from './Nav.vue';
</script>

<style scoped lang="scss">
.home {
	position: relative;
	text-align: center;
	display: flex;
	align-items: center;
	height: 100%;
}
</style>
