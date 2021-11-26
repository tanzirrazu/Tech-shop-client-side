module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'sans': ['Josefin Sans', 'system-ui'],
			'serif': ['Ubuntu', 'Georgia'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
