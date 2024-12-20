import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/',  // Ensure this is correct for GitHub Pages
  plugins: [react()],
})
