/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#2C3E50',    // Deep Slate - Confianza y seriedad
          secondary: '#E67E22',  // Soft Orange/Amber - Acción y energía (Calendly)
          accent: '#3498DB',     // Bright Blue - Detalles técnicos
          background: '#F8FAFC', // Slate 50 - Fondo suave, no blanco puro
          surface: '#FFFFFF',
          info: '#2980B9',
          success: '#27AE60',
          warning: '#F1C40F',
          error: '#E74C3C',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#3498DB',    // Un azul más brillante para dark mode para mejor contraste
          secondary: '#E67E22',
          accent: '#1ABC9C',
          background: '#0F172A', // Slate 900
          surface: '#1E293B',    // Slate 800 - Superficies claras para legibilidad
          'on-background': '#F8FAFC',
          'on-surface': '#F8FAFC',
          'on-primary': '#FFFFFF',
        },
      },
    },
  },
})
