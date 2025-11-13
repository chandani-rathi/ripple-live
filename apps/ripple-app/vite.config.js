import { defineConfig } from 'vite';
import { ripple } from '@ripple-ts/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import path from "node:path";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
	plugins: [nodePolyfills(), ripple(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: 3000,
	}
});
