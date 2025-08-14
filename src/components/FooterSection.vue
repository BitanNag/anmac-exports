<template>
	<v-footer class="d-flex justify-center pa-4">
		<p class="mb-0">©{{ currentYear }} All Rights Reserved.</p>
	</v-footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
