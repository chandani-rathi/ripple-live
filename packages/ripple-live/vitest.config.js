import { configDefaults, defineConfig } from 'vitest/config';
import { ripple } from '@ripple-ts/vite-plugin';
import path from 'node:path';

export default defineConfig({
	plugins: [ripple({})],
	resolve: {
		conditions: process.env.VITEST ? ['browser'] : undefined,
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	test: {
		include: ['tests/*.test.ts','tests/*.test.ripple'],
		environment: 'jsdom',
		...configDefaults.test,
	},
	build: {
		rollupOptions: {
			external: [],
		},
	},
});
