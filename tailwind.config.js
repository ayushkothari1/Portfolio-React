/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          50:  '#eaeaef',
          100: '#c5c5d5',
          200: '#9f9fba',
          300: '#7a7a9f',
          400: '#555585',
          500: '#30306a',
          600: '#0a0a1a',
          700: '#08080f',
          800: '#06060c',
          900: '#040408',
          950: '#020204',
        },
        accent: {
          DEFAULT: '#6366f1',
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        neon: {
          blue:   '#3b82f6',
          purple: '#8b5cf6',
          pink:   '#ec4899',
          cyan:   '#06b6d4',
        },
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':     'linear-gradient(135deg, #0a0a1a 0%, #0f0f2e 50%, #0a0a1a 100%)',
        'accent-gradient':   'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
        'card-gradient':     'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.05) 100%)',
      },
      boxShadow: {
        'glow-sm':  '0 0 10px rgba(99,102,241,0.3)',
        'glow':     '0 0 20px rgba(99,102,241,0.4)',
        'glow-lg':  '0 0 40px rgba(99,102,241,0.5)',
        'glow-xl':  '0 0 60px rgba(99,102,241,0.6)',
        'neon':     '0 0 20px rgba(99,102,241,0.5), 0 0 40px rgba(139,92,246,0.3)',
        'glass':    '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        'card':     '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(99,102,241,0.3)',
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'pulse-glow':     'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow':      'spin 8s linear infinite',
        'bounce-slow':    'bounce 3s ease-in-out infinite',
        'fade-up':        'fadeUp 0.5s ease forwards',
        'slide-in-right': 'slideInRight 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.4)' },
          '50%':      { boxShadow: '0 0 40px rgba(99,102,241,0.8)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: 0, transform: 'translateX(30px)' },
          to:   { opacity: 1, transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
