<template>
	<div class="scroll-dom" @scroll="scrollEvent($event)">
		<Header class="header" showLogo/>
		<section ref="menu" class="home">
			<home-menu :list="menuStore.menu ?? []" :domToTop="menuDomToTop"/>
		</section>
		<section ref="team" class="our-team">
			<team :txtTranslate="true" :domToTop="teamDomToTop" />
		</section>
		<section ref="aboutUs" class="connect-us">
			<about-us :txtTranslate="true" :domToTop="aboutUsDomToTop" />
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from 'comps/nav/Header.vue';
import AboutUs from 'views/aboutUs/index.vue';
import Team from 'views/ourTeam/index.vue';
import HomeMenu from 'views/homeMenu/index.vue';
import { useMenuStore } from '@/store/menu';
import { throttle } from '@/utils/function.js'

const menuStore = useMenuStore();

const team = ref(null)
const aboutUs = ref(null)
const menu = ref(null)
const teamDomToTop = ref(0)
const aboutUsDomToTop = ref(0)
const menuDomToTop = ref(0)

const scrollEvent = throttle((e: WheelEvent) => {
	// console.warn('222', e)
	const teamDom = team.value
	const aboutUsDom = aboutUs.value
	const menuDom = menu.value
	const teamDomRect = teamDom.getBoundingClientRect()
	const aboutUsDomRect = aboutUsDom.getBoundingClientRect()
	const menuDomRect = menuDom.getBoundingClientRect()
	teamDomToTop.value = teamDomRect.top
	aboutUsDomToTop.value = aboutUsDomRect.top
	menuDomToTop.value = menuDomRect.top
}, 40)

</script>

<style scoped lang="scss">

.scroll-dom {
	position: relative;
	height: 100%;
	overflow: scroll;

	.header {
		position: fixed;
		top: 80px;
		left: 120px;
	}
}
.our-team {
	height: 1000px;
	background: rgb(29, 66, 255);
}
.connect-us {
	height: 100vh;
	min-height: 800px;
	background: rgb(92, 0, 255);
}
</style>
