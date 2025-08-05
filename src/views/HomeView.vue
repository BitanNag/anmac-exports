<template>
	<HeroSection />

	<div class="display-section">
		<v-container>
			<div class="box">
				<div class="detail-box">
					<h2>Anmac Exports</h2>
					<p>Member of FIEO (Federation of Indian Exporters Organisation)</p>
				</div>
			</div>
		</v-container>
	</div>

	<AboutSection />
	<ProductsSection />
	<ContactSection />
	<InfoSection />
	<FooterSection />
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ProductsSection from '@/components/ProductsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import InfoSection from '@/components/InfoSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<style scoped>
.display-section {
	padding: 30px 0;
}
.display-section .box {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}
.display-section .box .detail-box h2 {
	font-weight: bold;
	font-size: 3rem;
	text-transform: uppercase;
	margin-top: 5px;
}
.display-section .box .detail-box p {
	margin-bottom: 0;
}
@media (max-width: 992px) {
	.display-section {
		margin-top: 115px;
	}
}
</style>
