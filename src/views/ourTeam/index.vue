
<template>
	<div class="our-team">
		<div class="team-intro" ref="mainTitle">
			<h3>Our Team</h3>
			<h5>The team members are from Fortune 500 companies and have sufficient experience in building products from 0 to 1</h5>
		</div>
		<ul class="gallery">
			<li
				v-for="(item, idx) in members"
				:key="idx"
				class="gallery-item"
			>
				<div class="card-item">
					<img class="pic" :src="item.pic" alt="团队成员照片" />
					<p class="main-title">{{ item.name }}</p>
					<p class="sub-title">{{ item.role }}</p>
				</div>
				<div class="vertical-line"></div>
				<!-- <div class="horizontal-line"></div> -->
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import pic1 from '@/assets/team-pic/troyed.png';
import pic2 from '@/assets/team-pic/lister.png';
import pic3 from '@/assets/team-pic/ke.png';
import pic4 from '@/assets/team-pic/azhi.png';

import { ref, watch } from 'vue';

const props = defineProps({
	txtTranslate: {
		type: Boolean,
		default: false,
	},
	domToTop: {
		type: Number,
		default: 0
	}
})

const mainTitle = ref(null)

const members = [
	{
		pic: pic1,
		name: 'troyed',
		role: '主理人/产品用户体验设计',
	},
	{
		pic: pic1,
		name: 'lister',
		role: '技术总监',
	},
	{
		pic: pic1,
		name: 'troyed',
		role: 'ke',
	},
	{
		pic: pic1,
		name: 'troyed',
		role: 'azhi',
	},
];

watch(
	() => props.domToTop,
	(newVal) => {
		if (!props.txtTranslate) {
			return
		}
		const innerHeight = window.innerHeight
		const x = newVal / innerHeight
		const trans = 200 * newVal / innerHeight
		mainTitle.value.style.transform = `translateY(-${trans}px)`
	}
)
</script>

<style lang="scss" scoped>
.our-team {
	position: relative;
	display: flex;
	flex-direction: column;
	box-sizing: content-box;
	margin: auto;
	max-width: 1440px;
	height: 100%;

	.team-intro {
		position: absolute;
		top: 176px;
		left: 120px;
		color: #000;
		font-weight: bolder;
		z-index: 2;
	}

	h3 {
		line-height: 120px;
		font-size: 100px;
	}
	h5 {
		line-height: 28px;
		font-size: 24px;
		width: 800px;
	}
	.gallery {
		position: relative;
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		height: 100%;
		overflow-x: auto;
		padding: 0 40px;
		z-index: 1;

		.gallery-item {
			position: relative;
			width: 320px;
			height: 100%;
			box-sizing: border-box;

			.card-item {
				position: relative;
				opacity: 0.6;
				transition: opacity 0.3s;
				margin-top: 290px;
				padding-left: 80px;
				cursor: pointer;

				&:hover {
					opacity: 1;
				}

				.pic {
					width: 240px;
					height: 300px;
					background-size: contain;
					vertical-align: bottom;
				}

				.main-title {
					font-size: 24px;
					font-weight: bolder;
					line-height: 28px;
					margin-top: 15px;
				}

				.sub-title {}
			}
			.vertical-line {
				position: absolute;
				top: 50%;
				right: 0;
				width: 1px;
				height: 80%;
				background-color: #000;
				transform: translateY(-50%);

				&::after,
				&::before {
					content: "";
					position: absolute;
					width: 1px;
					height: 12.5%;
				}

				&::after {
					top: -12.5%;
					background: linear-gradient(to top, #000, rgb(29, 66, 255));
				}

				&::before {
					bottom: -12.5%;
					background: linear-gradient(to bottom, #000, rgb(29, 66, 255));
				}
			}

			.horizontal-line {
				position: relative;
				top: -64px; // TODO: subtitle 的大小和行高
				width: 100%;
				height: 1px;
				background-color: #000;

				&::after,
				&::before {
					content: "";
					position: absolute;
					width: 40px;
					height: 1px;
				}

				&::after {
					right: -40px;
					background: linear-gradient(to right, #000, rgb(29, 66, 255));
				}
				&::before {
					left: -40px;
					background: linear-gradient(to left, #000, rgb(29, 66, 255));
					z-index: -1;
				}
			}
		}
	}
}
</style>
