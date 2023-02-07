import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

export default defineConfig({
  vite: {
    plugins: [MarkdownPreview()],
  },
})
