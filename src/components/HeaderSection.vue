<template>
	<div class="header-section">
		<div class="header-img">
			<img :src="getImageUrl('hero-display', uiStore.heroDisplay[0].picture)" alt="Header background" />
		</div>
		<div class="title">
			<h1>Anmac Exports</h1>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUiStore } from '@/stores/uiStore';
import { getImageUrl } from '@/utils/assetUtils';

const uiStore = useUiStore();
</script>

<style scoped>
.header-section {
	height: 200px;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	margin-bottom: 50px;
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
.title {
	z-index: 2;
}
h1 {
	font-size: 3rem;
	font-weight: bold;
}
</style>
