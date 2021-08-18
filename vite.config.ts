import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-md'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Pages(
      // {extensions: ['vue', 'md']}
    ),
    Layouts(),
    Markdown()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  }
})
