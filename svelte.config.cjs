const static = require('@sveltejs/adapter-static');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		adapter: static({
            assets: 'build/wwwroot',
            pages: 'build/wwwroot'
        }),
        files:{
            assets: 'src/app/assets',
            lib: 'src/app/components',
            routes: 'src/app/pages',
            template: 'src/app/app.html'
        },
		target: '#app'
	}
};
