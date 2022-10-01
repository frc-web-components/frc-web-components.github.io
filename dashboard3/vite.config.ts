import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'fwc',
      entry: 'src/index.ts',
      formats: ['es', 'umd']
    }
  }
})
