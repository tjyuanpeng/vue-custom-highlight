import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import pac from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueCustomHighlight',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), dts()],
  define: {
    __VERSION__: JSON.stringify(pac.version),
  },
})
