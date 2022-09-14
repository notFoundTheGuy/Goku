<template>
	<section class="nav-container" :class="{ active: isMenuActive }">
		<div class="video-bg">
			<video autoplay muted loop playsinline>
				<source src="../../assets/nav-bg.mp4" />
				<source src="../../assets/nav-bg.webm" />
			</video>
		</div>
		<div class="progress">
			<span class="line top"></span>
			<span class="index">{{ indexStr }}</span>
			<span class="line bottom"></span>
		</div>
		<ul class="nav" ref="navEl" v-if="source.navList.length">
			<li
				v-for="(item, idx) in source.navList"
				:key="idx"
				@mouseenter="
					() => {
						isMenuActive = true;
						curIndex = idx;
					}
				"
				@mouseleave="isMenuActive = false"
				@click="goto(curItem.link)"
			>
				<i class="corner">
					{{ idx + 1 >= 10 ? idx + 1 + '' : '0' + (idx + 1) }}
				</i>
				<p>{{ item.title }}</p>
				<span>{{ item.desc }}</span>
			</li>
		</ul>
		<div
			class="img-box"
			:style="{ 'background-image': `url(${curItem?.navImg})` }"
		></div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, reactive } from 'vue';
import router from '@/routers';

const goto = (link: string) => {
	router.push(link || '/detail');
};
const source = reactive({
	navList: [],
});

const navEl = ref();
const isMenuActive = ref(false);
const curIndex = ref(0);
const curItem = computed(() => {
	return source.navList[curIndex.value];
});

const indexStr = computed(() => {
	const indexVal = curIndex.value + 1;
	return indexVal >= 10 ? indexVal + '' : '0' + indexVal;
});

const calcEleRatio = (ele: HTMLElement) => {
	const container = navEl.value;
	const height = container.offsetHeight;
	const midY = container.getBoundingClientRect().top + height / 2;
	// 只有中间的1/3内容出现变换
	const transLimit = height / (2 * 3);
	// const eleY = ele?.offsetTop || 0;
	const eleY = ele.getBoundingClientRect().top;

	const distance = Math.abs(midY - eleY);
	if (distance <= transLimit) {
		return (1 - distance / transLimit) * 0.7 + 1;
	}
	return 1;
};

const layoutEles = () => {
	navEl.value.querySelectorAll('li').forEach((item) => {
		const ratio = calcEleRatio(item);
		const nameEle = item.querySelector('p');
		nameEle.style.transform = `scale(${ratio})`;
	});
};

const scrollHandle = (e) => {
	layoutEles();
};

onMounted(() => {
	// 滚动特效
	// layoutEles();
	// navEl.value.addEventListener('scroll', scrollHandle);
});
</script>

<style scoped lang="scss">
$distanceTop: 20vh;
$paddingLeft: 18.75vw;
.nav-container {
	position: fixed;
	left: 0;
	top: 0;
	overflow: hidden;
	width: 100%;
	height: 100%;
	.nav {
		padding-top: $distanceTop;
		padding-bottom: 5vw;
		position: absolute;
		left: $paddingLeft;
		top: 0;
		height: 100%;
		width: 40%;
		font-size: 2.7vw;
		font-weight: 800;
		text-align: left;
		overflow-x: visible;
		overflow-y: auto;
		li {
			position: relative;
			height: 7.6vw;
			line-height: 7.6vw;
			padding-left: 1vw;
			cursor: pointer;
			> p {
				transform-origin: left;
			}
			i.corner {
				position: absolute;
				top: 1.6vw;
				left: 0;
				font-size: 1.11vw;
				line-height: 1;
				color: rgba($color: #fff, $alpha: 0.6);
				-webkit-text-stroke: 1px transparent;
			}
			span {
				font-size: 0.8vw;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				text-align: right;
				right: 0;
			}
		}
	}
	&.active {
		.video-bg {
			opacity: 0;
		}

		.nav {
			li {
				color: transparent;
				opacity: 0.6;
				-webkit-text-stroke: 1px #fff;
				&:hover {
					color: #fff;
					opacity: 1;
					-webkit-text-stroke: 0px transparent;
					// span {
					// 	opacity: 1;
					// }
				}
			}
		}
	}
	.img-box {
		margin-top: $distanceTop;
		margin: $distanceTop auto 0;
		width: 70%;
		// 固定宽高比：16:9，70% * 56.25%
		padding-top: 39.375%;
		background-size: cover;
		transition: all 0.5s;
	}

	.video-bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: all 0.5s;
		> video {
			width: 100%;
			height: 100%;
			object-fit: cover;
			background-image: url(../../assets/nav-bg-back.jpeg);
			background-size: cover;
		}
	}

	.progress {
		position: absolute;
		top: 50%;
		left: 9vw;
		transform: translateY(-50%);
		height: 450px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		.line {
			display: inline-block;
			width: 1px;
			flex-grow: 1;
			background: rgba($color: #fff, $alpha: 0.4);
		}

		.index {
			flex-shrink: 0;
			transform: rotate(-90deg);
			margin: 12px 0;
		}
	}
}
</style>
