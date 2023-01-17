/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			'white': '#ffffff',
			'marine-dark': '#212A3B',
			'blue-light': '#cbe0f7',
		},
		extend: {},
	},
	plugins: [],
};
