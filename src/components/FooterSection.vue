<template>
	<div class="footer-section">
		<p>©{{ currentYear }} All Rights Reserved.</p>
	</div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-section {
	display: flex;
	justify-content: center;
	align-items: center;
}

.footer-section > p {
	margin: 0;
	padding: 15px 0;
}
</style>
