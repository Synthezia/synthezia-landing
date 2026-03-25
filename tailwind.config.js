/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0a0a0f',
        'bg-surface': '#12121a',
        'bg-elevated': '#1a1a26',
        'border-subtle': '#262630',
        'border-default': '#333346',
        'text-primary': '#f5f6fb',
        'text-secondary': '#c0c0d8',
        'text-muted': '#8a8aa0',
        'primary-300': '#7de3f4',
        'primary-500': '#0ea5c9',
        'primary-600': '#0880a1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'ui': '4px',
        'card': '8px',
      },
      transitionDuration: {
        'default': '200ms',
      },
      backdropBlur: {
        'glass': '12px',
      },
    },
  },
  plugins: [],
};
