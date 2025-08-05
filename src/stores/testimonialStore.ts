import { defineStore } from 'pinia';

export interface Client {
	picture: string;
	name: string;
	testimonial: string;
}

interface TestimonialState {
	clients: Client[];
}

export const useTestimonialStore = defineStore('testimonial', {
	state: (): TestimonialState => ({
		clients: [
			{
				picture: 'client1.jpg',
				name: 'Anirban Hazra',
				testimonial:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
			},
			{
				picture: 'client2.jpg',
				name: 'Aritra Banerjee',
				testimonial:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
			},
			{
				picture: 'client3.jpg',
				name: 'Subhadeep Datta',
				testimonial:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
			},
		],
	}),
});
