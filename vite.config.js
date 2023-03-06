import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

const usingLocalApi = process.env.VITE_API_SERVER?.trim() === 'local';
const apiTarget = usingLocalApi  ?
					'https://localhost:7195/' :
					'https://gidinstemme-back-test.azurewebsites.net/';

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
