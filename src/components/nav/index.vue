<template>
	<section
		class="nav-container"
		:class="[{ active: isMenuActive }, `${props.theme}`]"
	>
		<div class="video-bg" v-show="hasFullBg">
			<video autoplay muted loop playsinline>
				<source
					src="//cheng-1253620824.cos.ap-chengdu.myqcloud.com/videos/nav-bg.mp4"
				/>
				<source
					src="//cheng-1253620824.cos.ap-chengdu.myqcloud.com/videos/nav-bg.webm"
				/>
			</video>
		</div>
		<div class="nav-wrap">
			<slot name="header"></slot>
			<div
				class="progress"
				:style="{
					'--progress-first-half': progressFirstHalf,
					'--progress-second-half': progressSecondHalf,
				}"
			>
				<span class="line top"></span>
				<span class="index">{{ indexStr }}</span>
				<span class="line bottom"></span>
			</div>
			<ul class="nav" v-if="props.list?.length">
				<li
					v-for="(item, idx) in props.list"
					:key="idx"
					@mouseenter="
						() => {
							isMenuActive = true;
							curIndex = idx;
						}
					"
					@mouseleave="
						() => {
							isMenuActive = false;
							curIndex = -1;
						}
					"
					@click="menuClick(curItem)"
				>
					<i class="corner">
						{{ idx + 1 >= 10 ? `${idx + 1}` : `0${idx + 1}` }}
					</i>
					<p>{{ item.desc }}</p>
					<span>{{ item.title }}</span>
				</li>
			</ul>
		</div>
		<div
			v-for="(item, idx) in props.list"
			:key="idx"
			class="img-box"
			:class="{ active: curIndex === idx }"
			:style="{ 'background-image': `url(${item?.navImg})` }"
		></div>
	</section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface MenuItem {
	title: string;
	id: number;
	desc: string;
	navImg: string;
}

const props = defineProps({
	list: {
		type: Array,
		required: true,
		defalut: [],
	},
	hasFullBg: {
		type: Boolean,
		defalut: false,
	},
	theme: {
		type: String,
		defalut: '',
	},
});
const emit = defineEmits(['onMenuClick']);
const menuClick = (item: MenuItem) => {
	emit('onMenuClick', item);
};

const isMenuActive = ref(false);
// 当前选中项
const curIndex = ref(-1);
const curItem = computed(() => {
	return props.list[curIndex.value];
});
const indexStr = computed(() => {
	const indexVal = curIndex.value + 1;
	return indexVal >= 10 ? indexVal + '' : '0' + indexVal;
});

/**
 * 计算 progress 的长度
 * progress 总长度450px，indexStr 长度22px + 12px * 2 = 46px，样式
 * progressFirst = progressSecond = (450 - 46) / 2 = 202px
 */
const getSingleProgressLength = () => {
	const progressLength = 450;
	const listLength: number = props.list.length;
	return progressLength / listLength;
};
const progressFirstHalf = computed(() => {
	if (curIndex.value === -1) {
		return 0;
	}
	const currentProgressLength: number =
		(curIndex.value + 1) * getSingleProgressLength();
	if (currentProgressLength <= 202) {
		return currentProgressLength / 202;
	}
	return 1;
});
const progressSecondHalf = computed(() => {
	if (curIndex.value === -1) {
		return 0;
	}
	const currentProgressLength: number =
		(curIndex.value + 1) * getSingleProgressLength();
	if (currentProgressLength >= 248) {
		return (currentProgressLength - 248) / 202;
	}
	return 0;
});
</script>

<style scoped lang="scss">
$distanceTop: 20vh;
// $paddingLeft: 18.75vw;
$paddingLeft: 264px;
.nav-container {
	position: fixed;
	left: 0;
	top: 0;
	overflow: hidden;
	width: 100%;
	height: 100%;
	.nav-wrap {
		position: relative;
		padding: 80px 0;
		margin: 0 120px;
		height: 100%;
		z-index: 20;

		.progress {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			height: 450px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			.line {
				display: inline-flex;
				width: 1px;
				flex-grow: 1;
				background: rgba($color: #fff, $alpha: 0.4);
			}

			.top::before,
			.bottom::before {
				content: '';
				display: block;
				flex: 1;
				width: 100%;
				transition: transform 0.25s ease-out 0.05s;
				background: rgba($color: #fff, $alpha: 1);
				transform-origin: left top;
			}

			.top::before {
				transform: scaleY(var(--progress-first-half));
			}

			.bottom::before {
				transform: scaleY(var(--progress-second-half));
			}

			.index {
				font-size: 14px;
				flex-shrink: 0;
				transform: rotate(-90deg);
				margin: 12px 0;
				letter-spacing: 3px;
				line-height: 22px;
			}
		}
		.nav {
			padding: 40px 0 0 154px;
			height: 100%;
			font-weight: 800;
			text-align: left;
			overflow-x: hidden;
			overflow-y: auto;
			li {
				position: relative;
				font-size: 32px;
				line-height: 46px;
				margin-bottom: 120px;
				cursor: pointer;
				display: flex;
				flex-direction: column;
				> p {
					font-size: 64px;
					line-height: 76px;
					transform-origin: left;
				}
				i.corner {
					position: relative;
					bottom: -10px;
					font-size: 20px;
					line-height: 24px;
					color: rgba($color: #fff, $alpha: 0.6);
					-webkit-text-stroke: 1px transparent;
				}
				span {
					flex: 1;
					font-size: 20px;
					line-height: 24px;
					font-family: PingFangSC-Semibold, sans-serif;
					color: rgba(255, 255, 255, 0.6);
					white-space: nowrap;
				}
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
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		// margin: $distanceTop auto 0;
		width: 75%;
		// 固定宽高比：16:9，70% * 56.25%
		padding-top: 39.375%;
		background-size: cover;
		transition: all 0.5s;
		opacity: 0;
		&.active {
			opacity: 1;
		}
	}

	.video-bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: all 0.5s;
		z-index: 10;
		> video {
			width: 100%;
			height: 100%;
			object-fit: cover;
			background-image: url(//cheng-1253620824.cos.ap-chengdu.myqcloud.com/videos/nav-bg-back.jpeg);
			background-size: cover;
		}
	}
}

.nav-container.vertical {
	.nav {
		li {
			flex-direction: column;
			> p {
				font-size: 40px;
				line-height: 57px;
			}
			> span {
				text-align: left;
				line-height: 17px;
			}
		}
	}
}
</style>

<style scoped lang="css">
@media only screen and (min-width: 1800px) {
	.nav-wrap {
		width: 1560px;
		margin: auto !important;
	}
	.img-box {
		/* 16:9 */
		width: 1350px !important;
		padding-top: 759.375px !important;
	}
}
</style>
