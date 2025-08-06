<template>
	<section class="about-section" id="about-section">
		<div class="img-box">
			<img src="../assets/images/about-img.jpeg" alt="About our business" />
		</div>
		<div class="detail-box">
			<div class="title-container">
				<hr />
				<router-link to="/about" class="section-title-link">
					<h2>About our Business</h2>
				</router-link>
			</div>
			<p>
				Anmac has been a supplier of rice to various parts of India for many years, with a focus on matching and exceeding the expectations of our clients. Quality and transparency is our motto, and
				this reflects in our business as well as all our dealings and products.
			</p>
			<v-btn @click="scrollToElement('#contact-section')" color="grey-darken-4">Contact Us</v-btn>
		</div>
	</section>
</template>

<script setup lang="ts">
import { scrollToElement } from '@/utils/uiUtils';
</script>

<style scoped>
.section-title-link {
	text-decoration: none;
	color: inherit;
}
.about-section {
	display: flex;
	padding: 20px 0;
	margin-top: 100px;
}
.about-section .img-box {
	width: 40%;
	padding: 35px 0;
	background-color: #ececec;
}
.about-section .img-box img {
	width: 100%;
	-webkit-transform: translateX(45px);
	transform: translateX(45px);
}
.about-section .detail-box {
	text-align: center;
	width: 60%;
	padding: 35px 45px;
	margin: 0 20px;
}
.about-section .detail-box .title-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.about-section .detail-box .title-container hr {
	width: 1px;
	height: 145px;
	margin: 0;
	border: none;
	background-color: #b7b7b7;
	margin-bottom: 10px;
}
.about-section .detail-box .title-container h2 {
	font-size: 28px;
	font-weight: 500;
}
.about-section .detail-box p {
	margin-top: 10px;
	margin-bottom: 20px;
}
@media (max-width: 992px) {
	.about-section {
		flex-direction: column;
	}
	.about-section .img-box {
		width: 100%;
		padding: 0;
		display: flex;
		justify-content: center;
		margin: 0 0 60px 0;
	}
	.about-section .img-box img {
		width: 95%;
		transform: translate(0, 60px);
	}
	.about-section .detail-box {
		width: 100%;
		margin: 0;
	}
}
</style>
