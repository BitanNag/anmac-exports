<template>
	<div class="hero-section" id="home-section">
		<v-carousel cycle height="700" hide-delimiters show-arrows="hover">
			<v-carousel-item v-for="slide in uiStore.heroDisplay" :key="slide.id" :src="getImageUrl('hero-display', slide.picture)" cover></v-carousel-item>
		</v-carousel>

		<nav class="nav-bar">
			<ul class="nav-list">
				<li class="nav-item">
					<button @click="scrollToElement('#home-section')">Home</button>
				</li>
				<li class="nav-item">
					<button @click="scrollToElement('#about-section')">About</button>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/products">Products</router-link>
				</li>
				<li class="nav-item">
					<button @click="scrollToElement('#contact-section')">Contact</button>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup lang="ts">
import { useUiStore } from '@/stores/uiStore';

const uiStore = useUiStore();

const getImageUrl = (folder: string, name: string) => {
	return new URL(`../assets/images/${folder}/${name}`, import.meta.url).href;
};

const scrollToElement = (selector: string) => {
	const element = document.querySelector(selector);
	if (element) element.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.hero-section {
	height: 700px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 0 50px 0;
	position: relative;
}

.nav-bar {
	position: absolute;
	bottom: 20px;
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

.nav-bar .nav-list .nav-item button,
.nav-bar .nav-list .nav-item .nav-link {
	background: transparent;
	outline: none;
	border: none;
	padding: 10px;
	width: 100px;
	color: white;
	font-size: 16px;
	border-radius: 10px;
	cursor: pointer;
	text-decoration: none;
	text-align: center;
	transition: background-color 0.2s ease;
}

.nav-bar .nav-list .nav-item button:hover,
.nav-bar .nav-list .nav-item .nav-link:hover {
	background-color: lightgray;
	color: black;
}

@media (max-width: 992px) and (min-width: 863px) {
	.nav-bar {
		width: 90%;
	}
}

@media (max-width: 863px) {
	.nav-bar {
		width: 90%;
		bottom: 5%;
	}
	.nav-bar .nav-list {
		flex-wrap: wrap;
		padding: 10px;
		gap: 10px;
	}
}
</style>
