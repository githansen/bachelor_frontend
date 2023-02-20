import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: [
			{ find: '@', replacement: '/src' },
		],
	},
	server: {
		proxy: {
			'/api': {
				target: 'https://localhost:7195/',
				changeOrigin: true,
				secure: false,
				ws: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			}
		}
	}
});
