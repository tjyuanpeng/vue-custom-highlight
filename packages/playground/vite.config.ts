import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default ({ command }) => {
  return defineConfig({
    base: command === 'build' ? '/vue-custom-highlight' : '/',
    plugins: [
      vue(),
      vueJsx(),
      Pages({
        exclude: ['**/components/*.vue'],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 9001,
    },
  })
}
