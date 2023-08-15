import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import 'dotenv/config';



export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: process.env.PORT as unknown as number,
		proxy: {
			"/api": {
				target: process.env.BACKEND_HOST,
				rewrite: (path) => path.replace("/api", "")
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
