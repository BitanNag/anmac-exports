<template>
	<div class="carousel-wrapper">
		<div class="carousel-container">
			<v-btn class="nav-arrow left" icon="mdi-chevron-left" variant="flat" @click="prevSlide"></v-btn>

			<div class="carousel-track">
				<v-card v-for="(slide, index) in slides" :key="slide.id" :class="getCardClass(index)" class="card" @click="updateCarousel(index)">
					<v-img :src="`/images/products/${categoryName.toLowerCase()}/${slide.image}`" height="100%" cover></v-img>
				</v-card>
			</div>

			<v-btn class="nav-arrow right" icon="mdi-chevron-right" variant="flat" @click="nextSlide"></v-btn>
		</div>

		<div class="member-info">
			<h2 class="member-name">{{ categoryName }} Varieties</h2>
		</div>

		<div class="dots">
			<div v-for="(slide, index) in slides" :key="slide.id" :class="{ active: index === currentIndex }" class="dot" @click="updateCarousel(index)"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import type { ProductVariant } from '@/stores/portfolioStore';

// --- PROPS ---
const props = defineProps<{
	slides: ProductVariant[];
	categoryName: string;
}>();

// --- STATE ---
const currentIndex = ref(0);

// --- METHODS ---
const updateCarousel = (newIndex: number) => {
	currentIndex.value = (newIndex + props.slides.length) % props.slides.length;
};

const nextSlide = () => {
	currentIndex.value = (currentIndex.value + 1) % props.slides.length;
};

const prevSlide = () => {
	currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length;
};

const getCardClass = (index: number) => {
	const offset = (index - currentIndex.value + props.slides.length) % props.slides.length;
	const classes: { [key: number]: string } = {
		0: 'center',
		1: 'right-1',
		2: 'right-2',
		[props.slides.length - 1]: 'left-1',
		[props.slides.length - 2]: 'left-2',
	};
	return classes[offset] || 'hidden';
};

// --- LIFECYCLE HOOKS for keyboard events ---
const handleKeydown = (e: KeyboardEvent) => {
	if (e.key === 'ArrowLeft') prevSlide();
	if (e.key === 'ArrowRight') nextSlide();
};

onMounted(() => document.addEventListener('keydown', handleKeydown));

onBeforeUnmount(() => document.removeEventListener('keydown', handleKeydown));
</script>

<style scoped>
.carousel-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}
.carousel-container {
	width: 100%;
	max-width: 1200px;
	height: 450px;
	position: relative;
	perspective: 1000px;
	margin-top: 20px;
}
.carousel-track {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	transform-style: preserve-3d;
	transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.card {
	position: absolute;
	width: 280px;
	height: 380px;
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
	transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	cursor: pointer;
}
.card :deep(.v-img__img) {
	transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.card.center {
	z-index: 10;
	transform: scale(1.1) translateZ(0);
}
.card.center :deep(.v-img__img) {
	filter: none;
}
.card.left-2 {
	z-index: 1;
	transform: translateX(-400px) scale(0.8) translateZ(-300px);
	opacity: 0.7;
}
.card.left-2 :deep(.v-img__img) {
	filter: grayscale(100%);
}
.card.left-1 {
	z-index: 5;
	transform: translateX(-200px) scale(0.9) translateZ(-100px);
	opacity: 0.9;
}
.card.left-1 :deep(.v-img__img) {
	filter: grayscale(100%);
}
.card.right-1 {
	z-index: 5;
	transform: translateX(200px) scale(0.9) translateZ(-100px);
	opacity: 0.9;
}
.card.right-1 :deep(.v-img__img) {
	filter: grayscale(100%);
}
.card.right-2 {
	z-index: 1;
	transform: translateX(400px) scale(0.8) translateZ(-300px);
	opacity: 0.7;
}
.card.right-2 :deep(.v-img__img) {
	filter: grayscale(100%);
}
.card.hidden {
	opacity: 0;
	pointer-events: none;
}
.member-info {
	text-align: center;
	margin-top: 40px;
}
.member-name {
	color: #333;
	font-size: 2.5rem;
	font-weight: 700;
}
.dots {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-top: 40px;
	margin-bottom: 10px;
}
.dot {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: rgba(222, 160, 4, 0.2);
	cursor: pointer;
	transition: all 0.3s ease;
}
.dot.active {
	background: rgb(222, 160, 4);
	transform: scale(1.2);
}
.nav-arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(222, 160, 4, 0.6);
	color: white;
	z-index: 20;
}
.nav-arrow:hover {
	background: rgba(0, 0, 0, 0.3);
	transform: translateY(-50%) scale(1.1);
}
.nav-arrow.left {
	left: 20px;
}
.nav-arrow.right {
	right: 20px;
}

@media (max-width: 768px) {
	.dots {
		flex-wrap: wrap;
		padding: 0 20px;
	}
	.card {
		width: 200px;
		height: 280px;
	}
	.card.left-2 {
		transform: translateX(-250px) scale(0.8) translateZ(-300px);
	}
	.card.left-1 {
		transform: translateX(-120px) scale(0.9) translateZ(-100px);
	}
	.card.right-1 {
		transform: translateX(120px) scale(0.9) translateZ(-100px);
	}
	.card.right-2 {
		transform: translateX(250px) scale(0.8) translateZ(-300px);
	}
	.member-name {
		font-size: 2rem;
	}
}
</style>
