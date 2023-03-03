import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

const usingLocalApi = process.env.API_SERVER?.trim() === 'local';
const apiTarget = usingLocalApi  ?
					'https://gidinstemme-back-test.azurewebsites.net/' :
					'https://localhost:7195/';

console.info('Using API server at: ' + apiTarget);

export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
	server: {
		proxy: {
			'/api': {
				target: apiTarget,
				changeOrigin: true,
				secure: usingLocalApi ? false : true,
				ws: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			} 
		},
	},
});
