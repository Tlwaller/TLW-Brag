import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/tlw-brag/', // <-- use all lowercase to match your repo/folder name
  plugins: [react()],
})
