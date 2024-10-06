/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      // Your custom colors
      'bg': '#8D8D8D',
      'headline': '#fff',
      'accent': '#f9a30b',
      'primary': '#00AEEF',
      "text": '#212121',
      
      
  

    },
    extend: {

      fontFamily: {
        'sans': ['montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],

         'serif': [ 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      
      },
    },
  },
  plugins: [],
}

