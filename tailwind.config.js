/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#1e293b',
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#8b5cf6',
        },
        secondary: {
          emerald: '#10b981',
          teal: '#14b8a6',
          amber: '#f59e0b',
          rose: '#f43f5e',
        },
        custom: {
          'header-light': '#B4C3DE',
          'header-center': '#F3F3F4',
          'hero-purple': '#3F2E6A',
          'hero-dark': '#1A0D4D',
          'hero-purple-alt': '#3F2D6A',
          'button-bg': '#031744',
          'button-text-light': '#A4B4CF',
          'button-text-center': '#F3F3F4',
          'button-text-alt': '#A4B3CE',
          'menu-text': '#180E4A',
          'heading-pink': '#EDBDD2',
          'subtitle-white': '#FFFFFFD9',
        }
      },
             fontFamily: {
         sans: ['Inter', 'system-ui', 'sans-serif'],
         display: ['Playfair Display', 'serif'],
         'roboto-slab': ['Roboto Slab', 'serif'],
         'montserrat': ['Montserrat', 'sans-serif'],
       },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3b82f6, #6366f1)',
        'gradient-secondary': 'linear-gradient(135deg, #10b981, #14b8a6)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b, #f43f5e)',
        'gradient-header': 'linear-gradient(120.69deg, #B4C3DE 36.16%, #F3F3F4 70.07%, #B4C3DE 99.7%)',
        'gradient-button-text': 'linear-gradient(120.69deg, #A4B4CF 36.16%, #F3F3F4 70.07%, #A4B3CE 99.7%)',
        'gradient-hero': 'radial-gradient(167.76% 268.34% at 99.98% 16.14%, #3F2E6A 10.58%, #1A0D4D 24.22%, #1A0D4D 49.96%, #3F2D6A 58.32%, #1A0D4D 89.42%)',
        'gradient-mesh': 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 50% 0%, #10b981 0%, transparent 50%)',
      },
      animation: {
        'neural-pulse': 'neuralPulse 3s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        neuralPulse: {
          '0%, 100%': { 
            opacity: '0.6',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2)'
          }
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
} 