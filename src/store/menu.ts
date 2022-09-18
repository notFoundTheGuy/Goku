import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menuStore', {
	store: () => {
		return { menu: [] };
	},
});
