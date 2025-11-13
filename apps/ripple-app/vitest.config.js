import { configDefaults, defineConfig } from 'vitest/config';
import { ripple } from '@ripple-ts/vite-plugin';
import path from 'node:path';

export default defineConfig({
	plugins: [ripple()],
	resolve: {
		conditions: process.env.VITEST ? ['browser'] : undefined,
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	test: {
		...configDefaults.test,
		include: ['tests/**/*.test(.ts|.js|.ripple)', 'src/**/*.test(.ts|.js|.ripple)'],
		environment: 'jsdom',
	},
});
