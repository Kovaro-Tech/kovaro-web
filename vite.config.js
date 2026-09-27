import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { getPage, renderHead } from './src/lib/seo.js'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss(), {
    name: 'development-metadata',
    apply: 'serve',
    transformIndexHtml(html, context) {
      return html.replace('<!--seo-head-->', renderHead(getPage(context.path)))
    },
  }],
  build: {
    rollupOptions: { output: { manualChunks: isSsrBuild ? undefined : { 'react-vendor': ['react', 'react-dom'], framer: ['framer-motion'] } } },
    chunkSizeWarningLimit: 600,
    minify: 'esbuild',
  },
}))
