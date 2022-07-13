import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: () => import('views/home/index.vue') },
		{ path: '/detail', component: () => import('views/detail/index.vue') },
	],
});

export default router;
