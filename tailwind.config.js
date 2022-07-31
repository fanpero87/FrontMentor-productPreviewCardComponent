/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "mobile": "url('/src/images/image-product-mobile.jpg')",
        "desktop": "url('/src/images/image-product-desktop.jpg')",
      }),
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'cream': 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        heading: ["Fraunces", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}