const sveltePreprocess = require("svelte-preprocess");
const pkg = require("./package.json");
const static = require("@sveltejs/adapter-static");
const dev = process.env.NODE_ENV == "development"

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		adapter: static({
            assets: 'svelte-build',
            pages: 'svelte-build'
        }),
        files:{
            assets: 'src/app/assets',
            lib: 'src/app/components',
            routes: 'src/app/pages',
            template: 'src/app/app.html'
        },
		target: '#app',
        vite: {
            compilerOptions: { dev },
            ssr: { noExternal: Object.keys(pkg.dependencies || {}) },
        }
	},
    preprocess: sveltePreprocess()
};
