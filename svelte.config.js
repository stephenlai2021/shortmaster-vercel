import adapter from '@sveltejs/adapter-vercel';
import preprocess from "svelte-preprocess";
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		preprocess()
	],

	kit: {
		adapter: adapter(
			{
				edge: true 
			}
		)
	}
};

export default config;
