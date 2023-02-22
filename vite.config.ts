import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import postCssPxToRem from 'postcss-pxtorem';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			comps: resolve(__dirname, 'src/components'),
			views: resolve(__dirname, 'src/views'),
			styles: resolve(__dirname, 'src/styles'),
		},
	},
	css: {
		postcss: {
			plugins: [
				postCssPxToRem({
					rootValue: 256, // 1rem的大小
					propList: ['font', 'font-size', 'line-height', 'letter-spacing'], // 需要转换的属性，这里选择全部都进行转换
				})
			]
		}
	},
});
