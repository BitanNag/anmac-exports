<template>
	<div>
		<HeaderSection />

		<v-container class="py-12">
			<div v-for="category in portfolioStore.productCategories" :key="category.id" class="category-wrapper">
				<template v-if="category.gallery.length > 0">
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
import CoverCarousel from '@/components/CoverCarousel.vue'; // Import the new component
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore();
</script>

<style scoped>
.category-wrapper {
	margin-bottom: 60px;
}
</style>
