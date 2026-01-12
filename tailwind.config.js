module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Professional Electrical Blue
        primary: {
          DEFAULT: "#1E3A8A", // blue-900
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        // Secondary Colors - Supporting Blue
        secondary: {
          DEFAULT: "#3B82F6", // blue-500
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
        },
        // Accent Colors - Emergency Orange
        accent: {
          DEFAULT: "#EA580C", // orange-600
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#F97316", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
        },
        // Background Colors
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        "text-primary": "#1F2937", // gray-800
        "text-secondary": "#6B7280", // gray-500
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
        },
        warning: {
          DEFAULT: "#DC2626", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
        },
        error: {
          DEFAULT: "#DC2626", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['PT Sans', 'sans-serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      fontWeight: {
        'heading-semibold': '600',
        'heading-bold': '700',
        'heading-extrabold': '800',
        'body-normal': '400',
        'body-medium': '500',
        'body-semibold': '600',
        'cta-bold': '700',
        'accent-normal': '400',
        'accent-bold': '700',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      borderWidth: {
        'minimal': '1px',
      },
      transitionDuration: {
        'fast': '250ms',
        'base': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'fade-in-up': 'fadeInUp 300ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}