/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand Blue — derived from the "capsule" blue in the White Capsule logo
        brand: {
          50:  '#e8f6fc',
          100: '#c4e7f7',
          200: '#90d0f0',
          300: '#52b7e8',
          400: '#1fa4de',
          500: '#0092ce',   // logo blue core
          600: '#007fb8',
          700: '#006a9b',
          800: '#005580',
          900: '#003d5c',
          950: '#00253a',
        },
        // ── Brand grey — derived from the "white" dark-grey text in the logo
        grey: {
          50:  '#f7f7f7',
          100: '#efefef',
          200: '#dcdcdc',
          300: '#c4c4c4',
          400: '#9e9e9e',
          500: '#767676',
          600: '#5a5a5a',   // logo dark grey core
          700: '#444444',
          800: '#2e2e2e',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        // Keep neutral as alias for existing compatibility
        neutral: {
          50:  '#f8f9fa',
          100: '#f1f3f4',
          200: '#e2e5e8',
          300: '#c8cdd2',
          400: '#9aa1a9',
          500: '#6b7280',
          600: '#505763',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px 0 rgba(0,146,206,0.12), 0 1px 4px 0 rgba(0,0,0,0.06)',
        'nav': '0 1px 0 0 #e2e5e8, 0 2px 8px 0 rgba(0,0,0,0.04)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
