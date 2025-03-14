import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { reactRouter } from "@react-router/dev/vite"
const ReactCompilerConfig = { /* ... */ };


// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter({
    babel: {
      plugins: [
        ["babel-plugin-react-compiler",ReactCompilerConfig]
      ]
    }
  })],
})
