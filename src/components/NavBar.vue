<template>
	<nav class="nav-bar">
		<ul class="nav-list">
			<li class="nav-item">
				<button v-if="isHomePage" @click="scrollToElement('#home-section')" class="nav-link">Home</button>
				<router-link v-else class="nav-link" to="/">Home</router-link>
			</li>

			<li class="nav-item">
				<button v-if="isHomePage" @click="scrollToElement('#about-section')" class="nav-link">About</button>
				<router-link v-else class="nav-link" to="/about">About</router-link>
			</li>

			<li class="nav-item">
				<button v-if="isHomePage" @click="scrollToElement('#products-section')" class="nav-link">Products</button>
				<router-link v-else class="nav-link" to="/products">Products</router-link>
			</li>

			<!-- <li class="nav-item">
				<router-link class="nav-link" to="/testimonials">Testimonials</router-link>
			</li> -->

			<li class="nav-item">
				<button v-if="isHomePage" @click="scrollToElement('#contact-section')" class="nav-link">Contact</button>
				<router-link v-else class="nav-link" to="/contact">Contact</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { scrollToElement } from '@/utils/uiUtils';

// Get the current route information
const route = useRoute();

// Create a computed property to check if we are on the homepage
const isHomePage = computed(() => route.path === '/');
</script>

<style scoped>
/* The styles remain the same as the previous step */
.nav-bar {
	width: 60%;
	z-index: 1;
}
.nav-bar .nav-list {
	width: 100%;
	padding: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #252525;
	list-style-type: none;
	border-radius: 10px;
	gap: 30px;
}
.nav-bar .nav-list .nav-item {
	display: flex;
	justify-content: center;
	align-items: center;
}
/* Style both button and router-link to look identical */
.nav-bar .nav-list .nav-item .nav-link {
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
	text-align: center;
	transition: all 0.2s ease;
}
.nav-bar .nav-list .nav-item .nav-link:hover,
.nav-bar .nav-list .nav-item .nav-link.router-link-exact-active {
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
	.nav-bar .nav-list {
		flex-wrap: wrap;
		padding: 10px;
		gap: 10px;
	}
}
</style>
