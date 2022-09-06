import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	},
	files: {
		assets: 'static',
		hooks: 'src/hooks',
		lib: 'src/lib',
		params: 'src/params',
		routes: 'src/routes',
		serviceWorker: 'src/service-worker',
		appTemplate: 'src/app.html',
		errorTemplate: 'src/error.html'
	  },
	
};

export default config;
