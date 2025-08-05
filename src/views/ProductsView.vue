<template>
	<div>
		<HeaderSection />

		<v-container>
			<div v-for="category in portfolioStore.productCategories" :key="category.id" class="category-wrapper">
				<template v-if="category.gallery.length > 0">
					<h2 class="category-title">{{ category.name }} Varieties</h2>
					<v-carousel height="400" show-arrows="hover" hide-delimiter-background cycle>
						<v-carousel-item v-for="item in category.gallery" :key="item.id" :src="getImageUrl('products', item.image)" cover></v-carousel-item>
					</v-carousel>
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
import { usePortfolioStore } from '@/stores/portfolioStore';
import { getImageUrl } from '@/utils/assetUtils';

const portfolioStore = usePortfolioStore();
</script>

<style scoped>
.category-wrapper {
	margin: 60px 0;
}
.category-title {
	font-size: 2rem;
	font-weight: 500;
	margin-bottom: 20px;
}
</style>
