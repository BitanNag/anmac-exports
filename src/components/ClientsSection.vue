<template>
	<div class="client-section">
		<div class="title-container">
			<h2>What our Customers Say</h2>
			<hr />
		</div>

		<v-carousel cycle height="550" hide-delimiter-background show-arrows="hover" class="testimonial-carousel">
			<v-carousel-item v-for="client in testimonialStore.clients" :key="client.name">
				<div class="testimonial-item">
					<v-avatar size="200" class="mb-4">
						<v-img :src="getImageUrl('client-pictures', client.picture)" :alt="client.name" cover></v-img>
					</v-avatar>
					<h3>{{ client.name }}</h3>
					<p class="testimonial-text">
						<img src="@/assets/images/quotation-marks/left-quote.png" alt="quote" />
						{{ client.testimonial }}
						<img src="@/assets/images/quotation-marks/right-quote.png" alt="quote" />
					</p>
				</div>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>

<script setup lang="ts">
import { useTestimonialStore } from '@/stores/testimonialStore';
import { getImageUrl } from '@/utils/assetUtils';

const testimonialStore = useTestimonialStore();
</script>

<style scoped>
.client-section {
	padding: 10px 0;
}
.client-section .title-container {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 100px;
	padding: 10px 0;
}
.client-section .title-container h2 {
	font-size: 28px;
	font-weight: 500;
}
.client-section .title-container hr {
	width: 20%;
	height: 1px;
	border: none;
	margin: 0;
	margin-left: 10px;
	background-color: #b7b7b7;
}

.testimonial-carousel {
	margin-top: 40px;
}

.testimonial-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 0 15%;
	height: 100%;
}

.testimonial-text {
	font-style: italic;
}

.testimonial-text img {
	width: 20px;
	vertical-align: top;
}
</style>
