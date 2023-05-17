module.exports = {
	style: {
		postcss: {
			loaderOptions: (postcssLoaderOptions) => {
				postcssLoaderOptions.postcssOptions.plugins = {
					"postcss-import": {},
					"tailwindcss/nesting": {},
					tailwindcss: {},
					autoprefixer: {},
				};

				return postcssLoaderOptions;
			},
		},
	},
};
