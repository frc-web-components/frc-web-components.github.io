import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './dash',
    lib: {
      name: 'fwc',
      entry: 'src/index.ts',
      formats: ['es']
    }
  }
})
