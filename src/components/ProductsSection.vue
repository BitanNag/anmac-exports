<template>
	<div class="products-section" id="products-section">
		<div class="title-container">
			<hr />
			<router-link to="/products" class="section-title-link">
				<h2>Our Products</h2>
			</router-link>
		</div>

		<v-container fluid>
			<v-row>
				<v-col v-for="category in portfolioStore.productCategories" :key="category.id" cols="12" md="4">
					<v-hover v-slot="{ isHovering, props }">
						<v-card class="product-card" v-bind="props">
							<v-img :src="getImageUrl('products', category.mainImage)" height="550px" cover aspect-ratio="1"> </v-img>

							<div class="box-overlay" :class="{ 'is-active': isHovering }">
								<div class="overlay-content">
									<h5 class="text-uppercase mb-4">{{ category.name }}</h5>
									<p class="mb-2">{{ category.description }}</p>
									<ul class="item-variety mb-4" v-if="category.varieties.length > 0">
										<li v-for="element in category.varieties" :key="element">
											{{ element }}
										</li>
									</ul>

									<div class="button-group">
										<v-btn v-if="category.buttonText" @click="scrollToElement('#contact-section')" variant="outlined" color="white">
											{{ category.buttonText }}
										</v-btn>
										<router-link :to="`/products#${category.name.toLowerCase()}`" v-if="category.gallery.length > 0">
											<v-btn variant="outlined" color="white"> View Gallery </v-btn>
										</router-link>
									</div>
								</div>
							</div>
						</v-card>
					</v-hover>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '@/stores/portfolioStore';
import { scrollToElement } from '@/utils/uiUtils';
import { getImageUrl } from '@/utils/assetUtils';

const portfolioStore = usePortfolioStore();
</script>

<style scoped>
.section-title-link {
	text-decoration: none;
	color: inherit;
}
.products-section {
	overflow: hidden;
	padding: 40px 0;
	margin-top: 100px;
}
.products-section .title-container {
	display: flex;
	align-items: center;
	margin-bottom: 35px;
	transform: translateX(15%);
}
.products-section .title-container hr {
	width: 15%;
	height: 1px;
	border: none;
	margin: 0 10px;
	background-color: #b7b7b7;
}
.products-section .title-container h2 {
	margin: 0;
	font-weight: 500;
	font-size: 28px;
}

.product-card {
	overflow: hidden;
	border-radius: 0 !important;
}

.box-overlay {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	background-color: rgba(37, 37, 37, 0.9);
	color: white;
	transform: translateY(100%);
	transition: transform 0.3s ease-in-out;
}

.box-overlay.is-active {
	transform: translateY(0);
}

/* UPDATED RULE */
.overlay-content {
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center; /* This vertically centers the content block */
	height: 100%;
}
.overlay-content h5 {
	text-align: center;
}
.overlay-content p,
.overlay-content .item-variety {
	text-align: left;
}
.item-variety {
	list-style-position: inside;
	padding-left: 0;
}

.button-group {
	display: flex;
	justify-content: center;
	gap: 15px;
	padding-top: 20px;
}

.button-group :deep(.v-btn) {
	text-transform: none;
	letter-spacing: normal;
	border-radius: 0 !important;
}

.button-group :deep(.v-btn:hover) {
	background-color: rgba(255, 255, 255, 0.85);
	color: black !important;
}
</style>
