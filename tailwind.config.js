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
        'card-price': '3px 8px 30px rgba(0, 0, 0, 0.09);',
        'inner-shadow': 'inset 0px -1px 0px #525252;',
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },

      blur: {
        full: '43px',
      },
    },
  },
  plugins: [],
}
