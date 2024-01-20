import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	root: 'src',
	build: {
		outDir: '../dist',
		chunkSizeWarningLimit: 800
	},
	plugins: [
		react({
			include: '**/*.{jsx,tsx}'
		})
	],
	publicDir: 'static'
});