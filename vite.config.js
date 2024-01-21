import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { imagetools } from 'vite-imagetools'
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
			include: '**/*.tsx'
		}),
		splitVendorChunkPlugin(),
		imagetools()
	],
	publicDir: 'static'
});