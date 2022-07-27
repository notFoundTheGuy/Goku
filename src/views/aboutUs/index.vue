<template>
	<section class="about-us">
		<h3>联系我们</h3>
		<p>Contact us</p>
		<div class="us-pic">
			<img src="../../assets/us.png" />
		</div>
		<h2>致力于提供极具品质的产品服务</h2>
		<h4>Committed to providing the highest quality product services</h4>
		<div class="content">
			<ul>
				<li>服务类型</li>
				<li>产品研发</li>
				<li>UI/UE设计</li>
				<li>影视动画</li>
				<li>平面设计</li>
			</ul>
			<ul>
				<li>主理人联系方式</li>
				<li>TR0YED</li>
				<li>yuanyishe@163.com</li>
			</ul>
			<ul>
				<li>工作室地址</li>
				<li>湖北省武汉市</li>
				<li>武昌区中南国际汇A17-1</li>
			</ul>
		</div>
	</section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.about-us {
	display: flex;
	align-items: center;
	flex-direction: column;
	text-align: center;
	padding: 4.93vw 22vw;

	h3 + p {
		opacity: 0.6;
	}
	.us-pic {
		margin-top: 1.39vw;
		width: 50.83vw;
		margin-bottom: -9vw;
		img {
			width: 100%;
		}
	}

	h2 {
		& + h4 {
			opacity: 0.6;
		}
	}

	.content {
		margin-top: 2.78vw;
		padding-bottom: 5vw;
		display: flex;
		justify-content: space-between;
		width: 100%;
		li {
			text-align: left;
			&:not(:last-child) {
				margin-bottom: 1.39vw;
			}
			&:first-child {
				margin-bottom: 2.08vw;
				opacity: 0.6;
			}
		}
	}
}
</style>
