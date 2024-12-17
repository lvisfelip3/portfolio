/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#00171F',
				secondary: '#052736',
				tertiary: '#007EA7',
				quaternary: '#00A8E8',
				accent: '#FFFFFF',
			},
			screens: {
				sm: '640px',
				lp: '1080px',
				md: '1219px',
				lg: '1680px',
			}
		},
	},
	plugins: [],
}
