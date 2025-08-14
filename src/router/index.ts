import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import ClientsView from '../views/ClientsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
	{ path: '/', name: 'home', component: HomeView },
	{ path: '/products', name: 'products', component: ProductsView },
	{ path: '/about', name: 'about', component: AboutView },
	{ path: '/testimonials', name: 'testimonials', component: ClientsView },
	{ path: '/contact', name: 'contact', component: ContactView },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) return savedPosition;
		else return { top: 0 };
	},
});

export default router;
