/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-image':
          'linear-gradient(219.24deg, rgba(0, 138, 146, 0.22) -2.45%, #008A92 34.53%, rgba(255, 226, 73, 0.26) 57.28%, rgba(255, 161, 73, 0.29) 71.53%);',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'first-mockup': "url('../assets/mockupFirstSection.svg')",
      },

      backgroundColor: {
        'glasmorphism-opacity': 'rgba(255, 255, 255, 0.11);',
      },

      boxShadow: {
        'glasmorphosm-shadow': '8px 8px 8px rgba(0, 0, 0, 0.16);',
      },

      blur: {
        full: '43px',
      },
    },
  },
  plugins: [],
}
