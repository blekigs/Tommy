import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite-Konfiguration: React-Plugin + fester Dev-Port für die Preview.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
