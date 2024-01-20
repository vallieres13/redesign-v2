import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/',
	root: 'src',
	build: {
		outDir: '../dist',
		chunkSizeWarningLimit: 800
	},
	plugins: [
		react({
			include: '**/*.{jsx,tsx}'
		}),
		splitVendorChunkPlugin()
	],
	publicDir: 'static'
});