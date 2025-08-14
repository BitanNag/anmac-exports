<template>
	<v-toolbar color="#252525" class="nav-bar" rounded="lg">
		<v-spacer></v-spacer>
		<div class="d-flex justify-center flex-wrap">
			<div v-for="item in navItems" :key="item.id" class="nav-item-wrapper">
				<v-btn variant="text" :to="!isHomePage ? item.path : undefined" @click="isHomePage ? scrollToElement(item.hash) : undefined" class="nav-link" :block="true">
					{{ item.title }}
				</v-btn>
			</div>
		</div>
		<v-spacer></v-spacer>
	</v-toolbar>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { scrollToElement } from '@/utils/uiUtils';

const route = useRoute();
const isHomePage = computed(() => route.path === '/');

const navItems = [
	{ id: 'home', title: 'Home', path: '/', hash: '#home-section' },
	{ id: 'about', title: 'About', path: '/about', hash: '#about-section' },
	{ id: 'products', title: 'Products', path: '/products', hash: '#products-section' },
	{ id: 'contact', title: 'Contact', path: '/contact', hash: '#contact-section' },
];
</script>

<style scoped>
.nav-bar {
	width: 60%;
}

.nav-item-wrapper {
	padding: 6px 0;
	margin: 0 10px;
}

.nav-link.v-btn {
	background: transparent;
	outline: none;
	border: 1px solid transparent;
	padding: 8px 20px;
	color: white;
	font-size: 16px;
	font-family: 'Poppins', sans-serif;
	border-radius: 6px;
	cursor: pointer;
	text-decoration: none;
	transition: all 0.2s ease;
	text-transform: none;
	height: 100%;
}

.nav-link.v-btn:hover,
.nav-link.v-btn--active {
	background-color: white;
	color: black;
	border-color: black;
}

@media (max-width: 992px) {
	.nav-bar {
		width: 90%;
	}
}

@media (max-width: 863px) {
	.nav-bar.v-toolbar {
		height: auto !important;
	}

	.nav-bar.v-toolbar :deep(.v-toolbar__content) {
		height: auto !important;
		padding: 8px 0;
	}

	.nav-item-wrapper {
		margin: 0 5px;
	}
}
</style>
