<template>
	<div class="hero-section" id="home-section">
		<v-carousel cycle height="700" hide-delimiters show-arrows="hover">
			<v-carousel-item v-for="slide in uiStore.heroDisplay" :key="slide.id" :src="getImageUrl('hero-display', slide.picture)" cover></v-carousel-item>
		</v-carousel>

		<NavBar class="hero-nav" />
	</div>
</template>

<script setup lang="ts">
import { useUiStore } from '@/stores/uiStore';
import { getImageUrl } from '@/utils/assetUtils';
import NavBar from '@/components/NavBar.vue';

const uiStore = useUiStore();
</script>

<style scoped>
.hero-section {
	height: 700px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 50px;
	position: relative;
}

.hero-nav {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 50%);
	z-index: 5;
}

:deep(.v-window__right),
:deep(.v-window__left) {
	opacity: 0.6;
}
</style>
