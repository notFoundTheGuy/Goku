<template>
	<div class="our-team">
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
			<span class="line top"></span>
			<span class="index">{{ indexStr }}</span>
			<span class="line bottom"></span>
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
.our-team {
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: content-box;
	padding: 71px 120px;
	margin: auto;
	max-width: 1440px;

	h3 {
		margin-top: 71px;
		& + p {
			opacity: 0.6;
		}
	}
	.gallery {
		width: 100%;
		margin-top: 134px;
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
				margin-right: 80px;
			}
			&:hover {
				opacity: 1;
			}
			> p {
				&:first-of-type {
					font-size: 24px;
					line-height: 35px;
					font-weight: bold;
					margin-top: 12px;
				}
				&:last-of-type {
					opacity: 0.4;
				}
			}
			> .pic {
				width: 280px;
				height: 340px;
				background-size: contain;
			}
		}
	}

	.progress {
		position: relative;
		height: 1px;
		width: 800px;
		display: flex;
		// background: rgba($color: #fff, $alpha: 0.4);
		margin-top: 215px;
		justify-content: space-between;
		align-items: center;

		.line {
			display: inline-block;
			height: 1px;
			flex-grow: 1;
			background: rgba($color: #fff, $alpha: 0.4);
		}

		.index {
			font-size: 14px;
			flex-shrink: 0;
			margin: 0 12px;
		}
	}
}
</style>
