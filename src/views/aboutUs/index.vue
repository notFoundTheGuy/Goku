<template>
	<section class="about-us">
		<div ref="mainTitle" class="main-title">
			<h3>we provide</h3>
			<p class="service">Unique & Quality</p>
			<p class="service">UI / UE / Animation / FE / iOS / Android</p>
		</div>
		<div class="content" ref="content">
			<div class="content-left">
				<p class="email-title">Start a conversation</p>
				<div>
					<a class="email" href="mailto:TStudio@gmail.com">TStudio@gmail.com</a>
					<div class="email-line"></div>
				</div>
			</div>
			<div class="content-right">
				<us-item class="us-item" mainTitle="Service" :itemList="usList1"></us-item>
				<us-item class="us-item" mainTitle="Contact" :itemList="usList2" :showIcon="true"></us-item>
				<us-item class="us-item" mainTitle="Service" :itemList="usList3"></us-item>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import UsItem from './components/Item.vue';
import email from '@/assets/about-us-icon/email.png';
import telephone from '@/assets/about-us-icon/telephone.png';
import weChat from '@/assets/about-us-icon/weChat.png';

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

const usList1 = [
	{ txt: 'FE / iOS / Android', icon: '' },
	{ txt: 'UI / UE', icon: '' },
	{ txt: 'Animation', icon: '' }, 
	{ txt: 'Print Ads', icon: '' }
]
const usList2 = [
	{ txt: '18771090002', icon: telephone }, 
	{ txt: 'TR0YED', icon: weChat },
	{ txt: 'yuanyishe@163.com', icon: email }
]
const usList3 = [
	{ txt: 'HUBEI WUHAN', icon: '' }
]

const mainTitle = ref(null as unknown as HTMLElement)
const content = ref(null as unknown as HTMLElement)

watch(
	() => props.domToTop,
	(newVal) => {
		if (!props.txtTranslate) {
			return
		}
		const innerHeight = window.innerHeight
		const height1 = 0.157 * innerHeight
		const height2 = 0.393 * innerHeight
		const trans1 = height1 * newVal / innerHeight
		const trans2 = height2 * newVal / innerHeight
		mainTitle.value.style.transform = `translateY(-${trans1}px)`
		content.value.style.transform = `translateY(-${trans2}px)`
	}
)
</script>

<style lang="scss" scoped>
.about-us {
	position: relative;
	display: flex;
	height: 100%;
	flex-direction: column;
	padding: 0 0 0 120px;
	margin: auto;
	max-width: 1440px;

	.main-title {
		position: absolute;
		top: 16%;
	}

	h3 {
		font-size: 40px;
		line-height: 47px;
		font-weight: bolder;
		color: rgba(255,255,255,0.60);
	}

	.service {
		font-size: 60px;
		line-height: 71px;
		font-weight: bolder;
	}

	.content {
		position: absolute;
		top: 60%;
		width: calc(100% - 120px);
		display: flex;
		justify-content: space-between;

		.content-left {
			font-weight: bolder;
			.email-title {
				font-size: 16px;
				line-height: 19px;
			}

			.email {
				display: block;
				font-size: 36px;
				line-height: 42px;
				margin: 10px 0 10px;
				// TODO: 有兼容性问题
				background-image: linear-gradient(116deg, #B0E4B7 0%, #BADEAA 11%, #C1DBA2 18%, #C8D79A 25%, #CFD391 33%, #D9CE85 43%, #E1B96D 53%, #E6AD5F 58%, #EC9C4C 65%, #E28D4B 70%, #D88049 76%, #CB6E48 82%, #C05E47 88%, #B44D45 95%);
				-webkit-background-clip: text;
				color: transparent;
				animation-name: animationOne;
				animation-duration: 0.5s;
				animation-iteration-count: infinite;
			}

			.email-line {
				background-image: linear-gradient(116deg, #B0E4B7 0%, #BADEAA 11%, #C1DBA2 18%, #C8D79A 25%, #CFD391 33%, #D9CE85 43%, #E1B96D 53%, #E6AD5F 58%, #EC9C4C 65%, #E28D4B 70%, #D88049 76%, #CB6E48 82%, #C05E47 88%, #B44D45 95%);
				height: 1px;
				animation-name: animationOne;
				animation-duration: 0.5s;
				animation-iteration-count: infinite;
			}

			@keyframes animationOne {
				0% {
					background-image: linear-gradient(116deg, #B0E4B7 0%, #BADEAA 11%, #C1DBA2 18%, #C8D79A 25%, #CFD391 33%, #D9CE85 43%, #E1B96D 53%, #E6AD5F 58%, #EC9C4C 65%, #E28D4B 70%, #D88049 76%, #CB6E48 82%, #C05E47 88%, #B44D45 95%);
				}
				7.69% {
					background-image: linear-gradient(116deg, #B44D45 0%, #B0E4B7 11%, #BADEAA 18%, #C1DBA2 25%, #C8D79A 33%, #CFD391 43%, #D9CE85 53%, #E1B96D 58%, #E6AD5F 65%, #EC9C4C 70%, #E28D4B 76%, #D88049 82%, #CB6E48 88%, #C05E47 95%);
				}
				15.38% {
					background-image: linear-gradient(116deg, #C05E47 0%, #B44D45 11%, #B0E4B7 18%, #BADEAA 25%, #C1DBA2 33%, #C8D79A 43%, #CFD391 53%, #D9CE85 58%, #E1B96D 65%, #E6AD5F 70%, #EC9C4C 76%, #E28D4B 82%, #D88049 88%, #CB6E48 95%);
				}
				23.08% {
					background-image: linear-gradient(116deg, #CB6E48 0%, #C05E47 11%, #B44D45 18%, #B0E4B7 25%, #BADEAA 33%, #C1DBA2 43%, #C8D79A 53%, #CFD391 58%, #D9CE85 65%, #E1B96D 70%, #E6AD5F 76%, #EC9C4C 82%, #E28D4B 88%, #D88049 95%);
				}
				30.77% {
					background-image: linear-gradient(116deg, #D88049 0%, #CB6E48 11%, #C05E47 18%, #B44D45 25%, #B0E4B7 33%, #BADEAA 43%, #C1DBA2 53%, #C8D79A 58%, #CFD391 65%, #D9CE85 70%, #E1B96D 76%, #E6AD5F 82%, #EC9C4C 88%, #E28D4B 95%);
				}
				38.46% {
					background-image: linear-gradient(116deg, #E28D4B 0%, #D88049 11%, #CB6E48 18%, #C05E47 25%, #B44D45 33%, #B0E4B7 43%, #BADEAA 53%, #C1DBA2 58%, #C8D79A 65%, #CFD391 70%, #D9CE85 76%, #E1B96D 82%, #E6AD5F 88%, #EC9C4C 95%);
				}
				46.15% {
					background-image: linear-gradient(116deg, #EC9C4C 0%, #E28D4B 11%, #D88049 18%, #CB6E48 25%, #C05E47 33%, #B44D45 43%, #B0E4B7 53%, #BADEAA 58%, #C1DBA2 65%, #C8D79A 70%, #CFD391 76%, #D9CE85 82%, #E1B96D 88%, #E6AD5F 95%);
				}
				53.84% {
					background-image: linear-gradient(116deg, #E6AD5F 0%, #EC9C4C 11%, #E28D4B 18%, #D88049 25%, #CB6E48 33%, #C05E47 43%, #B44D45 53%, #B0E4B7 58%, #BADEAA 65%, #C1DBA2 70%, #C8D79A 76%, #CFD391 82%, #D9CE85 88%, #E1B96D 95%);
				}
				61.54% {
					background-image: linear-gradient(116deg, #E1B96D 0%, #E6AD5F 11%, #EC9C4C 18%, #E28D4B 25%, #D88049 33%, #CB6E48 43%, #C05E47 53%, #B44D45 58%, #B0E4B7 65%, #BADEAA 70%, #C1DBA2 76%, #C8D79A 82%, #CFD391 88%, #D9CE85 95%);
				}
				69.23% {
					background-image: linear-gradient(116deg, #D9CE85 0%, #E1B96D 11%, #E6AD5F 18%, #EC9C4C 25%, #E28D4B 33%, #D88049 43%, #CB6E48 53%, #C05E47 58%, #B44D45 65%, #B0E4B7 70%, #BADEAA 76%, #C1DBA2 82%, #C8D79A 88%, #CFD391 95%);
				}
				76.92% {
					background-image: linear-gradient(116deg, #CFD391 0%, #D9CE85 11%, #E1B96D 18%, #E6AD5F 25%, #EC9C4C 33%, #E28D4B 43%, #D88049 53%, #CB6E48 58%, #C05E47 65%, #B44D45 70%, #B0E4B7 76%, #BADEAA 82%, #C1DBA2 88%, #C8D79A 95%);
				}
				84.61% {
					background-image: linear-gradient(116deg, #C8D79A 0%, #CFD391 11%, #D9CE85 18%, #E1B96D 25%, #E6AD5F 33%, #EC9C4C 43%, #E28D4B 53%, #D88049 58%, #CB6E48 65%, #C05E47 70%, #B44D45 76%, #B0E4B7 82%, #BADEAA 88%, #C1DBA2 95%);
				}
				92.30% {
					background-image: linear-gradient(116deg, #C1DBA2 0%, #C8D79A 11%, #CFD391 18%, #D9CE85 25%, #E1B96D 33%, #E6AD5F 43%, #EC9C4C 53%, #E28D4B 58%, #D88049 65%, #CB6E48 70%, #C05E47 76%, #B44D45 82%, #B0E4B7 88%, #BADEAA 95%);
				}
				100% {
					background-image: linear-gradient(116deg, #BADEAA 0%, #C1DBA2 11%, #C8D79A 18%, #CFD391 25%, #D9CE85 33%, #E1B96D 43%, #E6AD5F 53%, #EC9C4C 58%, #E28D4B 65%, #D88049 70%, #CB6E48 76%, #C05E47 82%, #B44D45 88%, #B0E4B7 95%);
				}
			}

		}

		.content-right {
			display: flex;
			.us-item {
				margin-right: 20px;
			}
		}
	}
}
</style>
