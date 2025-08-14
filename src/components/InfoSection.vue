<template>
	<v-sheet class="info-section" color="#2e2e2e" theme="dark">
		<div class="info-logo">
			<h1>Anmac Exports</h1>
		</div>

		<v-row class="contact-info-row" justify="center">
			<v-col cols="12" md="4" class="px-md-8">
				<v-list-item class="mb-4" prepend-icon="mdi-map-marker">
					<v-list-item-title>212, SN Banerjee Road, Manirampore, PO&PS Barrackpore, Kolkata-700120</v-list-item-title>
				</v-list-item>
				<v-list-item class="mb-4" prepend-icon="mdi-phone">
					<v-list-item-title>(+91)8777421268</v-list-item-title>
				</v-list-item>
				<v-list-item class="mb-4" prepend-icon="mdi-email">
					<v-list-item-title>anmacexports@gmail.com</v-list-item-title>
				</v-list-item>
			</v-col>

			<v-col cols="12" md="4" class="social-links-col">
				<a class="link" href="https://www.facebook.com/profile.php?id=100094229394107&mibextid=ZbWKwL">
					<v-icon>mdi-facebook</v-icon>
					<span class="d-none d-md-inline">  Facebook</span>
				</a>
				<a class="link" href="https://www.instagram.com/anmacexports?igsh=eWgycjg2Zjg2MW5v">
					<v-icon>mdi-instagram</v-icon>
					<span class="d-none d-md-inline">  Instagram</span>
				</a>
				<a class="link" href="https://www.linkedin.com/in/anol-chaki-749583367">
					<v-icon>mdi-linkedin</v-icon>
					<span class="d-none d-md-inline">  LinkedIn</span>
				</a>
			</v-col>

			<v-col cols="12" md="4" class="page-links-col d-none d-md-flex">
				<v-btn variant="text" @click="scrollToElement('#home-section')">Home</v-btn>
				<v-btn variant="text" @click="scrollToElement('#about-section')">About Us</v-btn>
				<v-btn variant="text" @click="scrollToElement('#products-section')">Our Products</v-btn>
				<v-btn variant="text" @click="scrollToElement('#contact-section')">Contact Us</v-btn>
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script setup lang="ts">
import { scrollToElement } from '@/utils/uiUtils';
</script>

<style scoped>
.info-section {
	padding: 90px 20px;
	margin-top: 50px;
}

.info-logo {
	text-align: center;
	padding: 20px 0;
	margin-bottom: 20px;
}

.info-logo > h1 {
	font-size: 36px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: -2px;
}

.contact-info-row :deep(.v-list-item-title) {
	white-space: normal;
	line-height: 1.5;
}

.social-links-col {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;
}

.link {
	color: white;
	text-decoration: none;
	display: flex;
	align-items: center;
	width: 120px;
}

.page-links-col {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
}

.page-links-col :deep(.v-btn) {
	text-transform: none;
	font-size: 16px;
}

@media (max-width: 991px) {
	.social-links-col {
		flex-direction: row;
		justify-content: center;
		gap: 100px;
		margin-top: 40px;
	}

	.link {
		width: auto;
	}
}
</style>
