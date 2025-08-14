<template>
	<section class="about-section" id="about-section">
		<v-row align="center">
			<v-col cols="12" md="5" class="pa-0">
				<div class="image-wrapper">
					<v-img src="/images/about-img.jpeg" alt="About our business" class="about-img" />
				</div>
			</v-col>

			<v-col cols="12" md="7" class="detail-box">
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
				<v-btn @click="scrollToElement('#contact-section')" color="grey-darken-4" variant="flat" class="contact-button">Contact Us</v-btn>
			</v-col>
		</v-row>
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
	padding: 20px 0;
	margin-top: 100px;
	overflow-x: hidden;
}

.image-wrapper {
	background-color: #ececec;
	padding: 35px 0;
	width: 100%;
}

.about-img {
	transform: translateX(45px);
}

.detail-box {
	text-align: center;
	padding: 35px 45px;
}
.detail-box .title-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.detail-box .title-container hr {
	width: 1px;
	height: 145px;
	margin: 0;
	border: none;
	background-color: #b7b7b7;
	margin-bottom: 10px;
}
.detail-box .title-container h2 {
	font-size: 28px;
	font-weight: 500;
}
.detail-box p {
	margin-top: 10px;
	margin-bottom: 20px;
}

.contact-button.v-btn {
	border-radius: 0;
	text-transform: none;
	font-weight: normal;
}
.contact-button.v-btn:hover {
	color: black !important;
	background-color: white !important;
	border: 1px solid black !important;
}

@media (max-width: 991px) {
	.image-wrapper {
		width: 95%;
		padding: 0;
		margin: 0 auto 60px auto;
	}
	.about-img {
		transform: translateY(60px);
	}
}
</style>
