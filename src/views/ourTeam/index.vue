<template>
	<div class="about-us">
		<h3>我们的团队</h3>
		<p>Our Team</p>
		<ul class="gallery">
			<li
				v-for="(item, idx) in members"
				:key="idx"
				@mouseenter="curIndex = idx"
			>
				<div class="pic" :style="{ backgroundImage: `url(${item.pic})` }"></div>
				<p>{{ item.name }}</p>
				<p>{{ item.role }}</p>
			</li>
		</ul>
		<div class="progress">
			<span>{{ indexStr }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import pic1 from '@/assets/team-pic/troyed.png';
import pic2 from '@/assets/team-pic/lister.png';
import pic3 from '@/assets/team-pic/ke.png';
import pic4 from '@/assets/team-pic/azhi.png';

const curIndex = ref(0);
const indexStr = computed(() => {
	const indexVal = curIndex.value + 1;
	return indexVal >= 10 ? indexVal + '' : '0' + indexVal;
});
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
</script>

<style lang="scss" scoped>
.about-us {
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 8.33vw;

	h3 {
		margin-top: 4.93vw;
		& + p {
			opacity: 0.6;
		}
	}
	.gallery {
		width: 100%;
		margin-top: 9.31vw;
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		overflow-x: auto;
		li {
			text-align: left;
			opacity: 0.6;
			transition: all 0.3s;
			cursor: pointer;
			&:not(:last-child) {
				margin-right: 5.56vw;
			}
			&:hover {
				opacity: 1;
			}
			> p {
				&:first-of-type {
					font-size: 1.67vw;
					font-weight: bold;
					margin-top: 0.83vw;
				}
				&:last-of-type {
					font-size: 0.97vw;
					opacity: 0.4;
				}
			}
			> .pic {
				width: 19.44vw;
				height: 24.03vw;
				background-size: contain;
			}
		}
	}

	.progress {
		position: relative;
		height: 1px;
		width: 55vw;
		background: rgba($color: #fff, $alpha: 0.4);
		margin-top: 15vw;
		margin-bottom: 4.93vw;
		span {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
}
</style>
