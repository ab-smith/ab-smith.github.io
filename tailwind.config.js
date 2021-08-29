const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        enabled: true,
        content: ['./dist/**/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'light-blue': colors.sky,
                cyan: colors.cyan,
            },
        },
        container: {
            center: true,
            padding: '2rem'
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}