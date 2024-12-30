import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/revelations/',
  plugins: [react()],
  //build:{
  //  minify:false,
  //  sourcemap:true
  //}
})
