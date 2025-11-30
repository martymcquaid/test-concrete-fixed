import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/65f8724a-f73c-41bc-85ad-16f0c72db25c/preview/',
  plugins: [react()],
  server: {
    port: 5125,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5125,
    }
  }
})
