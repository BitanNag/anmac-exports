<template>
	<div class="products-section" id="products-section">
		<div class="title-container">
			<hr />
			<router-link to="/products" class="section-title-link">
				<h2>Our Products</h2>
			</router-link>
		</div>
		<div class="products-container">
			<div class="product-box" v-for="category in portfolioStore.productCategories" :key="category.id">
				<img :src="getImageUrl('products', category.mainImage)" alt="" />
				<div class="box-overlay">
					<h5>{{ category.name }}</h5>
					<span>
						<p>{{ category.description }}</p>
						<ul class="item-variety" v-if="category.varieties.length > 0">
							<li v-for="element in category.varieties" :key="element">
								{{ element }}
							</li>
						</ul>
					</span>

					<div class="button-group">
						<v-btn v-if="category.buttonText" @click="scrollToElement('#contact-section')" variant="outlined" color="white">
							{{ category.buttonText }}
						</v-btn>

						<router-link to="/products" v-if="category.gallery.length > 0">
							<v-btn variant="outlined" color="white"> View Gallery </v-btn>
						</router-link>
					</div>
				</div>
			</div>
		</div>
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
.products-section .products-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.products-section .products-container .product-box {
	flex: 0 0 31.33%;
	height: 550px;
	margin: 1%;
	position: relative;
	overflow: hidden;
}
.products-section .products-container .product-box img {
	width: 100%;
	height: 100%;
}
.products-section .products-container .product-box .box-overlay {
	position: absolute;
	left: 0;
	top: 100%;
	width: 100%;
	height: 100%;
	opacity: 0;
	background-color: #252525;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	padding: 20px;
}
.products-section .products-container .product-box .box-overlay h5 {
	text-transform: uppercase;
	margin-bottom: 25px;
}
.products-section .products-container .product-box .box-overlay span {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	width: 100%;
	height: fit-content;
	margin-bottom: 25px;
	gap: 20px;
}
.products-section .products-container .product-box .box-overlay span > p {
	width: 100%;
	text-align: left;
}
.products-section .products-container .product-box .box-overlay span .item-variety li {
	margin-left: 15px;
}
.products-section .products-container .product-box:hover .box-overlay {
	top: 0;
	opacity: 0.9;
}
.button-group {
	display: flex;
	gap: 15px;
	margin-top: 30px;
}
@media (max-width: 992px) {
	.products-section .products-container .product-box {
		flex: 0 0 90%;
		margin: 1.5%;
	}
}
</style>
