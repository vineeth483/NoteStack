import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> 2b6054c8d26229f4a51a364eb8f4604f0086ec7a
})
