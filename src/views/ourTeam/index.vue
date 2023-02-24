
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
				<div class="card-item" ref="cardItem">
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
const cardItem = ref(null)

const members = [
	{
		pic: pic1,
		name: 'Troyed',
		role: 'UX',
	},
	{
		pic: pic2,
		name: 'Sword',
		role: 'Development Director',
	},
	{
		pic: pic3,
		name: 'Ke',
		role: 'FE',
	},
	{
		pic: pic4,
		name: 'Zhou',
		role: 'Animator',
	},
];

watch(
	() => props.domToTop,
	(newVal) => {
		if (!props.txtTranslate) {
			return
		}
		const innerHeight = window.innerHeight
		cardItem.value.forEach((ele: Element) => {
			const top = ele.getBoundingClientRect().bottom
			const trans = 200 * top / innerHeight / 128
			ele.style.transform = `translateY(-${trans}rem)`
		})
		const toTop = mainTitle.value.getBoundingClientRect().bottom
		const trans = 200 * toTop / innerHeight / 128
		mainTitle.value.style.transform = `translateY(-${trans}rem)`
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
		top: 220px;
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
				position: absolute;
				opacity: 0.8;
				right: 0;
				top: 330px;
				transition: opacity 0.3s;
				margin-top: 290px;
				padding-left: 80px;
				cursor: pointer;

				&:hover {
					opacity: 1;
				}

				.pic {
					width: 240px;
					height: 330px;
					background-size: contain;
					vertical-align: bottom;
				}

				.main-title {
					font-size: 24px;
					font-weight: bolder;
					line-height: 28px;
					margin-top: 15px;
				}

				.sub-title {
					font-size: 14px;
				}
			}
			.vertical-line {
				position: absolute;
				top: 50%;
				right: 0;
				width: 1px;
				height: 80%;
				background-color: rgba(0, 0, 0, 0.1);
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
					background: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgb(29, 66, 255));
				}

				&::before {
					bottom: -12.5%;
					background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgb(29, 66, 255));
				}
			}
		}
	}
}
</style>
