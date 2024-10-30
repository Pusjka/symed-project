import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",
  // esbuild: {
  //   loader: 'jsx', // Ensures JSX is handled as JavaScript
  //   include: /\.jsx?$/,
  // }
})
