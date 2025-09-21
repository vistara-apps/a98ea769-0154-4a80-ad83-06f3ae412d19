/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180, 70%, 40%)',
        accent: 'hsl(280, 70%, 50%)',
        bg: 'hsl(210, 20%, 95%)',
        surface: 'hsl(0, 0%, 100%)',
        text: 'hsl(210, 20%, 10%)',
        muted: 'hsl(210, 20%, 60%)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      spacing: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'card': '0 2px 8px hsla(0, 0%, 0%, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
