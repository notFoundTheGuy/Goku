<template>
	<div class="detail-text">
		<div class="title">
			<h1>{{ title }}</h1>
			<h4>{{ subTitle }}</h4>
		</div>
		<div class="intro">
			<div>
				<p class="logo">
					<img :src="logo">
				</p>
				<ul class="members">
					<li v-for="(member, idx) in members" :key="idx">
						{{ member.role }}: {{ member.name }}
					</li>
				</ul>
				<p class="time">{{ time }}</p>
			</div>

			<div class="desc">
				<p>项目简介</p>
				{{ intro }}
			</div>
		</div>

		<div class="content" v-for="(sec, idx) in sections" :key="idx">
			<div>
				<p>{{ sec.subTitle }}</p>
				<h3>{{ idx + 1 }} {{ sec.title }}</h3>
			</div>
			<ul>
				<li v-for="(item, idx) in sec.contents" :key="idx">{{ item }}</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	logo?: any;
	title: string;
	subTitle: string;
	time: string;
	members: {
		name: string;
		role: string;
	}[];
	intro: string;
	sections: {
		title: string;
		subTitle: string;
		contents: string[];
	}[];
}

const { logo, title, subTitle, time, members, intro, sections } =
	defineProps<Props>();
</script>

<style lang="scss" scoped>
.detail-text {
	width: 100%;
	height: 100%;
	padding: 16.6vw 12.5vw 12.5vw;
	font-weight: 700;
	overflow-y: auto;
	h1,
	h3,
	h4 {
		font-weight: 800;
	}
	.title {
		padding-left: 30px;

		h4 {
			opacity: 0.6;
		}
	}
	.intro {
		position: relative;
		margin-top: 140px;
		padding-top: 78px;
		display: flex;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: -6vw;
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

		.desc {
			> p {
				margin-bottom: 35px;
			}
		}
	}

	.content {
		margin-top: 140px;
		position: relative;
		padding-top: 54px;
		display: flex;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 12px;
			height: 12px;
			background: #fff;
			border-radius: 12px;
		}

		> div,
		> ul {
			width: 50%;
		}

		> div {
			padding-right: 100px;
			> p {
				padding: 10px 0 20px;
			}
		}

		> ul {
			li {
				margin-bottom: 39px;
			}
		}
	}
}
</style>
