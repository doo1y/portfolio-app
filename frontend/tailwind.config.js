/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xsm: "400px",
			// => @media (min-width: 400px) { ... }
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			"timeline-color": "#ccd1d9",
		},
	},
	variants: {
		extend: {
			colors: {
				"off-white": "#edece9",
			},
		},
	},
	plugins: [],
};
