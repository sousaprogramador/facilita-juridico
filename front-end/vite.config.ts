import * as path from 'path'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: { output: { inlineDynamicImports: false } },
  },
})
