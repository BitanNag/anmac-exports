<template>
	<div class="contact-section" id="contact-section">
		<div class="title">
			<div class="title-container">
				<hr />
				<router-link to="/contact" class="section-title-link">
					<h2>Request a Callback</h2>
				</router-link>
			</div>
		</div>

		<v-row no-gutters>
			<v-col cols="12" md="1"></v-col>
			<v-col cols="12" md="5">
				<v-form ref="form" v-model="isFormValid" @submit.prevent="submitInput" class="form-wrapper">
					<v-alert v-if="alertText.content" :type="alertText.type" :text="alertText.content" density="compact" class="mb-4"></v-alert>

					<v-text-field v-model="name" :rules="validationRules.name" label="Full Name" variant="outlined" density="compact"></v-text-field>

					<v-text-field v-model="email" :rules="validationRules.email" label="Email" variant="outlined" density="compact"></v-text-field>

					<v-text-field v-model="phoneNumber" :rules="validationRules.phone" label="Phone Number" type="number" variant="outlined" density="compact"></v-text-field>

					<v-textarea v-model="message" :rules="validationRules.message" label="Message" variant="outlined" density="compact"></v-textarea>

					<v-btn type="submit" :disabled="!isFormValid" color="grey-darken-4" variant="flat" class="action-button mt-2">Send</v-btn>
				</v-form>
			</v-col>

			<v-col cols="12" md="6" class="map-container">
				<iframe :src="uiStore.mapLink" width="600" height="450" style="border: 0" allow="fullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</v-col>
		</v-row>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useUiStore } from '@/stores/uiStore';

const uiStore = useUiStore();

const form = ref();
const isFormValid = ref(false);
const name = ref('');
const email = ref('');
const phoneNumber = ref('');
const message = ref('');
const alertText = ref<{ type: 'success' | 'error' | undefined; content: string | null }>({
	type: undefined,
	content: null,
});

const validationRules = {
	name: [(value: string) => !!value || 'Name is required.'],
	email: [(value: string) => !!value || 'Email is required.', (value: string) => /.+@.+\..+/.test(value) || 'Email must be valid.'],
	phone: [(value: string) => !!value || 'Phone number is required.', (value: string) => value?.length >= 10 || 'Phone number must be at least 10 digits.'],
	message: [(value: string) => !!value || 'Message is required.'],
};

const submitInput = async () => {
	alertText.value = { type: undefined, content: null };

	try {
		const currentDate = new Date().toLocaleString('en-IN');
		axios.defaults.headers.post['Content-Type'] = 'application/json';

		const result = await axios.post('https://formsubmit.co/ajax/anmacexports@gmail.com', {
			name: name.value,
			email: email.value,
			phone: phoneNumber.value,
			message: message.value,
			submittedOn: currentDate,
		});

		if (result.status === 200) {
			const firstName = name.value.split(' ')[0];
			alertText.value = { type: 'success', content: `Thank you, ${firstName}! We will contact you shortly.` };

			form.value?.reset();
		} else throw new Error('Form submission failed');
	} catch (error) {
		alertText.value = { type: 'error', content: 'There was an error submitting your form. Please try again later.' };
		console.error(error);
	}
};
</script>

<style scoped>
.section-title-link {
	text-decoration: none;
	color: inherit;
}
.contact-section {
	position: relative;
	overflow: hidden;
	margin-top: 100px;
	padding: 20px 0;
}
.contact-section .title .title-container {
	display: flex;
	align-items: center;
	margin-bottom: 35px;
	transform: translateX(15%);
	padding: 0 0 40px 0;
}
.contact-section .title .title-container hr {
	width: 20%;
	height: 1px;
	border: none;
	margin: 0 10px;
	background-color: #b7b7b7;
}
.contact-section .title .title-container h2 {
	margin: 0;
	font-size: 28px;
	font-weight: 500;
}

.form-wrapper {
	width: 80%;
	margin: 0 auto;
}

.map-container iframe {
	width: 100%;
	height: 100%;
	min-height: 400px;
}

.action-button.v-btn {
	border-radius: 0;
	text-transform: none;
	font-weight: normal;
}

.action-button.v-btn:hover {
	color: black !important;
	background-color: white !important;
	border: 1px solid black !important;
}

@media (max-width: 992px) {
	.contact-section .title .title-container {
		transform: translate(20px, 0);
		margin: 40px auto 0 auto;
	}
	.contact-section .title .title-container hr {
		width: 10%;
		height: 1px;
		border: none;
		margin: 0 10px;
		background-color: #b7b7b7;
	}
	.form-wrapper {
		width: 90%;
		margin-bottom: 20px;
	}
}
</style>
