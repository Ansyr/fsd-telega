import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({babel: {babelrc: true}})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    target: 'esnext',
  }
})
