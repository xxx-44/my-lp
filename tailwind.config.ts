import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				'fade-in-up': 'fade-in-up 2s ease',
				'fade-in-down': 'fade-in-down 1s ease forwards',
				'fade-out-down': 'fade-out-down 1s ease forwards',
				'fade-in': 'fade-in 1s ease forwards',
				'fade-in-bg': 'fade-in 3s ease forwards',
				'fade-out': 'fade-out 1s ease forwards',
				'pop-out': 'pop-out 1s ease forwards',
				'pop-in': 'pop-in 1s ease forwards',
			},
			keyframes: {
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-30px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-out-down': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(-30px)',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				'fade-out': {
					'0%': {
						opacity: '1',
					},
					'100%': {
						opacity: '0',
					},
				},
				'pop-in': {
					'0%': {
						transform: 'translateX(60px)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				'pop-out': {
					'0%': {
						transform: 'translateX(0)',
					},
					'100%': {
						transform: 'translateX(60px)',
						display: 'none',
					},
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
