import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

export default defineConfig({
  title: 'CSS World',
  description: 'A css knowledge collection',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  vite: {
    plugins: [MarkdownPreview()],
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liting-yes/css' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Liting Yes',
    },
    editLink: {
      pattern: 'https://github.com/liting-yes/css/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
