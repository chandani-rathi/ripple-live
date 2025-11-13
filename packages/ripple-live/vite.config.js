import { defineConfig } from 'vite';
import { ripple } from '@ripple-ts/vite-plugin';
import path from 'node:path';
import dtsPlugin from 'vite-plugin-dts'; 
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
	plugins: [
		nodePolyfills({ 
			 protocolImports: true,
		}),
		ripple(),
		dtsPlugin({
			entryRoot: 'src',
			insertTypesEntry: true,
			copyDtsFiles: true,
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		manifest: false,
		minify: false,
		lib: {
			entry: 'src/index.ts',
			fileName: (format) => `ripple-live.${format}.js`,
			formats: ['es'],
		},
		rollupOptions: {
			input: 'src/index.ts',
			output: {
				dir: 'dist',
				globals: {},
				exports: 'named',
			},
			external: ['ripple', 'ripple/internal/client', 'ripple/compiler'],
			plugins: [],
		},
	},
});
