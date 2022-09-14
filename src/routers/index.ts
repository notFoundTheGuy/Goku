import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: () => import('views/home/index.vue') },
		{ path: '/detail', component: () => import('views/detail/index.vue') },
		{ path: '/directory', component: () => import('views/directory/index.vue') },
		{ path: '/us', component: () => import('views/aboutUs/index.vue') },
		{ path: '/team', component: () => import('views/ourTeam/index.vue') },
	],
});

export default router;
