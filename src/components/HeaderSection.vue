<template>
	<div class="header-section">
		<div class="header-img">
			<img :src="getImageUrl('hero-display', uiStore.heroDisplay[0].picture)" alt="Header background" />
		</div>
		<div class="title">
			<h1>Anmac Exports</h1>
		</div>
		<NavBar class="header-nav" />
	</div>
</template>

<script setup lang="ts">
import { useUiStore } from '@/stores/uiStore';
import { getImageUrl } from '@/utils/assetUtils';
import NavBar from '@/components/NavBar.vue';

const uiStore = useUiStore();
</script>

<style scoped>
.header-section {
	height: 250px;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
}
.header-img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}
.header-img img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: brightness(0.5);
}
.title,
.header-nav {
	z-index: 2;
}
h1 {
	font-size: 3rem;
	font-weight: bold;
	margin-bottom: 40px;
}
.header-nav {
	position: absolute;
	bottom: -35px;
}
</style>
