import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  title: 'CSS World',
  description: 'A css knowledge collection',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  vite: {
    plugins: [MarkdownPreview(), svgLoader({ defaultImport: 'component' })],
  },
  head: [
    [
      'link',
      {
        rel: 'prefetch',
        as: 'font',
        href: 'https://unpkg.com/@chinese-fonts/lxgwwenkai@1.1.0/dist/LXGWWenKai-Bold/result.css',
      },
    ],
    [
      'link',
      {
        rel: 'prefetch',
        as: 'font',
        href: 'https://unpkg.com/@chinese-fonts/dyh@1.1.0/dist/SmileySans-Oblique/result.css',
      },
    ],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/liting-yes/css/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },
        nav: [
          {
            text: 'Demo',
            link: '/demo/animation/typewriter',
          },
        ],
        sidebar: {
          '/demo/': [
            {
              text: 'Animation',
              items: [
                {
                  text: 'typewriter',
                  link: '/demo/animation/typewriter',
                },
              ],
            },
            {
              text: 'Interact',
              items: [
                {
                  text: 'neon',
                  link: '/demo/interact/neon',
                },
              ],
            },
          ],
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/liting-yes/css/edit/main/docs/:path',
          text: '在GitHub上编辑此页面',
        },
        nav: [
          {
            text: '演示',
            link: '/zh/demo/animation/typewriter',
          },
        ],
        sidebar: {
          '/zh/demo/': [
            {
              text: '动画效果',
              items: [
                {
                  text: '打字机',
                  link: '/zh/demo/animation/typewriter',
                },
              ],
            },
            {
              text: '交互效果',
              items: [
                {
                  text: '霓虹',
                  link: '/zh/demo/interact/neon',
                },
              ],
            },
          ],
        },
      },
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liting-yes/css' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Liting Yes',
    },
  },
})
