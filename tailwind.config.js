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
			'blue-400': '#0088fa',
			'gray-200': '#f2f2f2',
			'gray-300': '#C2C2C2',
		},
		extend: {},
	},
	plugins: [],
};
