/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	daisyui: {
		themes: [
			{
				hugo: {
					primary: '#f59e0b',
					secondary: '#fbbf24',
					accent: '#374151',
					neutral: '#18182f',
					'base-100': '#ffffff',
					info: '#3abff8',
					success: '#36d399',
					warning: '#fdba74',
					error: '#f87272'
				}
			}
		]
	}
};
