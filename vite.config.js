import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://entrega-salvati-react-f30b53qhf-francosalvati.vercel.app/'
})
