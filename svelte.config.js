import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite'
import sveltePreprocess from 'svelte-preprocess';
// import { compileString } from 'squint-cljs';
import { compileString } from 'squint-cljs/lib/compiler.node.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	preprocess: [vitePreprocess(),
		sveltePreprocess({
			aliases: [
			  ['cljs', 'clojurescript'],
			],
			/** Add a custom language preprocessor */
			cljs({ content, filename, attributes }) {
                          return compileString(content).then(res => {
                            let code = res.javascript;
                            return {code};
                          });
			},
		  })],

	kit: {
		adapter: adapter()
	}
};

export default config;
