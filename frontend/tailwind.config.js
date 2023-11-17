/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
        },
        extend: {
            colors: {
                sharedride: {
                    '50': '#f6f9f9',
                    '100': '#ecf1f2',
                    '200': '#d5e1e2',
                    '300': '#b0c7c9',
                    '400': '#98b6b8',
                    '500': '#668f91',
                    '600': '#517578',
                    '700': '#425f62',
                    '800': '#3a5052',
                    '900': '#334547',
                    '950': '#222d2f',
                },
            }
        }
    },
    plugins: [],
}
