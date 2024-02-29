/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], theme: {
        extend: {
            colors: {
                'fickson-color': {
                    DEFAULT: '#236A62',
                    50: '#74D1C6',
                    100: '#64CCC0',
                    200: '#46C2B4',
                    300: '#37A79B',
                    400: '#2D897E',
                    500: '#236A62',
                    600: '#15403B',
                    700: '#071614',
                    800: '#000000',
                    900: '#000000',
                    950: '#000000'
                },
            },
        },
    }, plugins: [],
}
