<template>
	<div class="intro-box motion">
		<div>
			<p class="logo">
				<img :src="logo" />
			</p>
			<ul class="members">
				<li v-for="(member, idx) in members" :key="idx">
					{{ member.role }}: {{ member.name }}
				</li>
			</ul>
			<p class="time">{{ time }}</p>
		</div>

		<div class="detail">
			<p>{{ title }}</p>
			{{ detail }}
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	logo?: any;
	time: string;
	members: {
		name: string;
		role: string;
	}[];
	title: string;
	detail: string;
}

const { logo, time, members, detail, title } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.intro-box {
	position: relative;
	margin: 78px 180px 140px;
	display: flex;
	// line-height: 20px;
	&::before {
		content: '';
		position: absolute;
		top: -66px;
		left: -85px;
		width: 12px;
		height: 12px;
		background: #fff;
		border-radius: 12px;
	}

	> div {
		width: 50%;
	}
	.logo {
		img {
			width: 120px;
		}
	}
	.members {
		margin-top: 40px;
	}
	.time {
		margin-top: 28px;
		opacity: 0.4;
	}

	.detail {
		> p {
			margin-bottom: 35px;
		}
	}
}
</style>
