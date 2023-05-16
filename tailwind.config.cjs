/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'rotate': 'rotate 2.5s linear infinite',
      },
      keyframes: {
        'rotate': {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'light': '0 0.2rem 0.3rem rgba(0, 0, 0, 0.109)',
        'medium': '0 0.6rem 0.9rem rgba(0, 0, 0, 0.15)',
        'stronger': '0 0.5rem 1.5rem rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'mountain-meadow': '#22d486',
        'mountain-meadow-dark': '#20bd78',
        'wild-strawberry': '#ff4081',
        'cerise-red': '#e73370',
        'white': '#ffffff',
        'limed-spruce': '#323c46',
        'black': '#000000',
        'iron': '#c9ced3',
        'regent-gray': '#949ea8',
        'mischka': '#d9dce1',
        'gray-chateau': '#a9aeb4',
        'athens-gray': '#f9f9fb',
        'ghost': '#c4c9d1',
        'nandor': '#565d5a',
        'boulder': '#7d7878',
        'outer-space': '#303942',
      },
      fontFamily: {
        primary: ['Hind', 'sans-serif'],
        secondary: ['Playfair'],
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 600,
      },
      screens: {
        'desktop': '1024px',
      },
      borderRadius: {
        'none': '0',
        'xs': '0.2rem',
        'sm': '0.4rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '2.8rem',
        '2xl': '10rem',
        'full': '100%',
      },
      fontSize: {
        'xs': '1.2rem',
        'ssm': '1.3rem',
        'sm': '1.4rem',
        'base': '1.6rem',
        'lg': '1.8rem',
        'xl': '2.2rem',
        '1xl': '2.4rem',
        '2xl': '2.8rem',
        '3xl': '3.6rem',
        '4xl': '4.2rem',
        '5xl': '4.8rem',
      },
      lineHeight: {
        'xs': '1.2rem',
        'sm': '1.4rem',
        'base': '1.6rem',
        'lg': '1.8rem',
        'xl': '2.2rem',
        '1xl': '2.4rem',
        '2xl': '2.8rem',
        '3xl': '3.6rem',
        '4xl': '4.2rem',
        '5xl': '4.8rem',
      },
      letterSpacing: {
        normal: '0',
        wide: '0.1rem',
        widest: '1rem',
      }
    },
  },
  plugins: [],
}
