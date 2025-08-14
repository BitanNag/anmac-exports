import { defineStore } from 'pinia';

export interface ProductVariant {
	id: number;
	image: string;
}

export interface ProductCategory {
	id: number;
	name: string;
	description: string;
	mainImage: string;
	buttonText: string;
	varieties: string[];
	gallery: ProductVariant[];
}

interface PortfolioState {
	productCategories: ProductCategory[];
}

export const usePortfolioStore = defineStore('portfolio', {
	state: (): PortfolioState => ({
		productCategories: [
			{
				id: 1,
				name: 'Rice',
				description: 'We supply premium quality rice. Our portfolio is as follows:',
				mainImage: 'rice-img-1.jpg',
				buttonText: 'Buy Now',
				varieties: ['All varieties of Basmati (1121, 1401, 1509, etc)', 'IR-64 raw and parboiled', 'Sona Masuri', 'Others'],
				gallery: [
					{ id: 1, image: 'Rice_01.jpeg' },
					{ id: 2, image: 'Rice_02.jpeg' },
					{ id: 3, image: 'Rice_03.jpeg' },
					{ id: 4, image: 'Rice_04.jpeg' },
					{ id: 5, image: 'Rice_05.jpeg' },
					{ id: 6, image: 'Rice_06.jpeg' },
					{ id: 7, image: 'Rice_07.jpeg' },
					{ id: 8, image: 'Rice_08.jpeg' },
					{ id: 9, image: 'Rice_09.jpeg' },
					{ id: 10, image: 'Rice_10.jpeg' },
					{ id: 11, image: 'Rice_11.jpeg' },
					{ id: 12, image: 'Rice_12.jpeg' },
					{ id: 13, image: 'Rice_13.jpeg' },
					{ id: 14, image: 'Rice_14.jpeg' },
					{ id: 15, image: 'Rice_15.jpeg' },
					{ id: 16, image: 'Rice_16.jpeg' },
					{ id: 17, image: 'Rice_17.jpeg' },
					{ id: 18, image: 'Rice_18.jpeg' },
					{ id: 19, image: 'Rice_19.jpeg' },
					{ id: 20, image: 'Rice_20.jpeg' },
					{ id: 21, image: 'Rice_21.jpeg' },
					{ id: 22, image: 'Rice_22.jpeg' },
					{ id: 23, image: 'Rice_23.jpeg' },
				],
			},
			{
				id: 2,
				name: 'Spices',
				description: 'We deal and export every spice available in India, of premium and export quality.',
				mainImage: 'spices-img-1.jpg',
				buttonText: 'Contact Us',
				varieties: ['Black Pepper', 'Cardamom'],
				gallery: [],
			},
			{
				id: 3,
				name: 'Millets',
				description: 'We deal in 3 major variants of millets: ',
				mainImage: 'millets-img-1.jpg',
				buttonText: 'Contact Us',
				varieties: ['Bajra / Pearl Millets', 'Jowar / Sorghum Millets', 'Ragi / Finger Millets'],
				gallery: [
					{ id: 1, image: 'Millets_01.jpg' },
					{ id: 2, image: 'Millets_02.jpg' },
					{ id: 3, image: 'Millets_03.jpg' },
					{ id: 4, image: 'Millets_04.jpg' },
					{ id: 5, image: 'Millets_05.jpg' },
					{ id: 6, image: 'Millets_06.jpg' },
					{ id: 7, image: 'Millets_07.jpg' },
					{ id: 8, image: 'Millets_08.jpg' },
					{ id: 9, image: 'Millets_09.jpg' },
					{ id: 10, image: 'Millets_10.jpg' },
					{ id: 11, image: 'Millets_11.jpg' },
					{ id: 12, image: 'Millets_12.jpg' },
					{ id: 13, image: 'Millets_13.jpg' },
					{ id: 14, image: 'Millets_14.jpg' },
				],
			},
		],
	}),
});
