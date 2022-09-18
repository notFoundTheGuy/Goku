<template>
	<section class="header">
		{{props.showLogo}}
		<div class="logo-wrap" v-show="props.showLogo">
			<img src="../../assets/logo.png" alt="logo" />
		</div>
		<div class="music-bar">音乐  ——  开</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
	showLogo: {
		type: Boolean,
		defalut: false,
	}
});
// defineProps<{ msg: string }>();

const count = ref(0);
const test = ref('asdf');
</script>

<style lang="scss" scoped>
.header {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	padding: 0 8vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	margin-top: 80px;
	width: 100%;
	.logo-wrap {
		img {
			width: 160px;
		}
	}
}
</style>
