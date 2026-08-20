/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Light mode (violet-tinted editorial)
        light: {
          bg: '#faf9ff',
          text: '#17152a',
          border: '#e7e3f5',
          muted: '#57516f',
          subtle: '#403b5b',
          card: '#ffffff',
          chip: '#f4f1ff',
          chipHover: '#ede9fe',
        },
        // Dark mode (midnight indigo)
        dark: {
          bg: '#0b1020',
          text: '#e9e7ff',
          heading: '#fbfaff',
          border: 'rgba(196, 181, 253, 0.17)',
          muted: '#bbb9d5',
          subtle: '#9692b5',
          card: 'rgba(20, 27, 51, 0.84)',
          chip: 'rgba(196, 181, 253, 0.10)',
          chipHover: 'rgba(167, 139, 250, 0.18)',
        },
        accent: {
          DEFAULT: '#7c3aed',
          light: '#6d28d9',
          soft: '#c4b5fd',
          softer: '#ddd6fe',
        },
      },
      letterSpacing: {
        tightest2: '-2.4px',
      },
      keyframes: {
        gridDrift: {
          to: { backgroundPosition: '48px 48px' },
        },
        auroraDrift: {
          from: { transform: 'translate3d(-2%, -2%, 0) scale(0.94)' },
          to: { transform: 'translate3d(7%, 5%, 0) scale(1.08)' },
        },
      },
      animation: {
        'grid-drift': 'gridDrift 18s linear infinite',
        'aurora-drift': 'auroraDrift 16s ease-in-out infinite alternate',
        'aurora-drift-slow': 'auroraDrift 21s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
