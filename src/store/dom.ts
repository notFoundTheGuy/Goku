import { defineStore } from 'pinia';

export const useDomCalStore = defineStore('domCal', {
	store: () => {
		return {
			factor: 0,
			oY: 0,
			xDistance: 0,
		};
	},
});
