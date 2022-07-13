<template>
	<div class="main-layout">
		<router-view />
	</div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style lang="scss">
#app {
	height: 100%;
	width: 100%;
}
.main-layout {
	width: 100%;
	height: 100%;
	> section {
		width: 100%;
		height: 100%;
	}
}
</style>
