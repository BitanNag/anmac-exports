import { defineStore } from 'pinia';

interface HeroItem {
	id: number;
	picture: string;
}

interface UiState {
	heroDisplay: HeroItem[];
	mapLink: string;
}

export const useUiStore = defineStore('ui', {
	state: (): UiState => ({
		heroDisplay: [
			{
				id: 1,
				picture: 'slider-img-rice.jpg',
			},
			{
				id: 2,
				picture: 'slider-img-spices.jpg',
			},
			{
				id: 3,
				picture: 'slider-img-millets.jpg',
			},
		],
		mapLink:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.791965926584!2d88.3355280508284!3d22.773100431246387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b8d5d9f488f%3A0xe024e1517f9196ac!2sBong%20Bawarchi!5e0!3m2!1sen!2sin!4v1673199321435!5m2!1sen!2sin',
	}),
});
