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
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.930492169466!2d88.36959527599011!3d22.76813422476579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b0121a8a295%3A0x3b3a302ad6255110!2sAnmac%20Exports!5e0!3m2!1sen!2sin!4v1722854082496!5m2!1sen!2sin',
	}),
});
