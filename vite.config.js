import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/crypto-slaves",
  plugins: [react()],
  devServer: {
    historyApiFallback: true,
},
})
