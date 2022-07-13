import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			comps: resolve(__dirname, 'src/components'),
			views: resolve(__dirname, 'src/views'),
			styles: resolve(__dirname, 'src/styles'),
		},
	},
});
