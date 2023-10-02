import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://CreatedByCC.github.io/markdown-previewer-freecodecamp',
  plugins: [react()],
})
