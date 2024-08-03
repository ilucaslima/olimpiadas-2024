import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: {
      card_blue: '#090D45',
      card_blue_dark: '#090B27',
      card_red: '#C1082D'
    },
    keyframes: {
      slideDown: {
        from: { height: '0px' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      slideUp: {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0px' },
      },
      float: {
        '0%, 100%': {
          transform: 'translateY(0)',
        },
        '50%': {
          transform: 'translateY(15px)',
        },
      },
    },
    animation: {
      slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      float: 'float 1.5s ease-in-out infinite',
    }
  },
  plugins: [],
};
export default config;
