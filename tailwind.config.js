/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#eefbf7',
          100: '#d4f4ea',
          200: '#abe8d6',
          300: '#74d3bc',
          400: '#3fb89b',
          500: '#1f9a80',
          600: '#137a66',
          700: '#106052',
          800: '#0f4d44',
          900: '#0d3e38',
          950: '#06231f',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b0b9c8',
          400: '#8593a8',
          500: '#677591',
          600: '#525e78',
          700: '#434c62',
          800: '#3a4253',
          900: '#343a48',
          950: '#22262f',
        },
        gold: {
          50: '#fbf7ed',
          100: '#f5ecd0',
          200: '#ebd79e',
          300: '#e0bd66',
          400: '#d6a43f',
          500: '#c4882a',
          600: '#a76b21',
          700: '#87501e',
          800: '#6f401f',
          900: '#5d361e',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15, 77, 68, 0.18)',
        glow: '0 0 0 1px rgba(31,154,128,0.15), 0 20px 50px -20px rgba(31,154,128,0.35)',
      },
      keyframes: {
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(31,154,128,0.45)' },
          '70%': { boxShadow: '0 0 0 14px rgba(31,154,128,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(31,154,128,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floatUp: 'floatUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
        pulseRing: 'pulseRing 2s infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
