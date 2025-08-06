<template>
	<div>
		<HeaderSection />

		<v-container class="py-12">
			<div v-for="category in portfolioStore.productCategories" :key="category.id" class="category-wrapper">
				<template v-if="category.gallery.length > 0">
					<h1 class="background-title">Our {{ category.name }}</h1>

					<CoverCarousel :slides="category.gallery" :category-name="category.name" />
				</template>
			</div>
		</v-container>

		<InfoSection />
		<FooterSection />
	</div>
</template>

<script setup lang="ts">
import HeaderSection from '@/components/HeaderSection.vue';
import InfoSection from '@/components/InfoSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import CoverCarousel from '@/components/CoverCarousel.vue';
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore();
</script>

<style scoped>
.category-wrapper {
	margin-bottom: 60px;
	position: relative;
	padding-top: 100px;
}

.background-title {
	font-size: 7.5rem;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: -0.02em;
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	pointer-events: none;
	white-space: nowrap;
	font-family: 'Arial Black', 'Arial Bold', Arial, sans-serif;
	background: linear-gradient(to bottom, rgba(222, 160, 4, 0.2) 50%, rgba(222, 160, 4, 0) 96%);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
}
</style>
