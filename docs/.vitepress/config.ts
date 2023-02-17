import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  title: 'CSS Planet',
  description: 'A css knowledge collection',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/planet.svg' }],
  ],
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  vite: {
    plugins: [MarkdownPreview(), svgLoader({ defaultImport: 'component' })],
  },
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
            link: '/demo/basic/cloud',
          },
        ],
        sidebar: {
          '/demo/': [
            {
              text: 'Basic',
              items: [
                {
                  text: 'cloud',
                  link: '/demo/basic/cloud',
                },
                {
                  text: 'dazzle',
                  link: '/demo/basic/dazzle',
                },
                {
                  text: 'palette',
                  link: '/demo/basic/palette',
                },
                {
                  text: 'shadow',
                  link: '/demo/basic/shadow',
                },
                {
                  text: 'gradient text',
                  link: '/demo/basic/gradient-text',
                },
              ],
            },
            {
              text: 'Animation',
              items: [
                {
                  text: 'horse racing light',
                  link: '/demo/animation/horse-racing-light',
                },
                {
                  text: 'spin',
                  link: '/demo/animation/spin',
                },
                {
                  text: 'typewriter',
                  link: '/demo/animation/typewriter',
                },
                {
                  text: 'ripple',
                  link: '/demo/animation/ripple',
                },
              ],
            },
            {
              text: 'Interact',
              items: [
                {
                  text: 'dynamic background color',
                  link: '/demo/interact/dynamic-background-color',
                },
                {
                  text: 'dynamic border',
                  link: '/demo/interact/dynamic-border',
                },
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
            link: '/zh/demo/basic/cloud',
          },
        ],
        sidebar: {
          '/zh/demo/': [
            {
              text: '基础',
              items: [
                {
                  text: '云',
                  link: '/zh/demo/basic/cloud',
                },
                {
                  text: '炫彩',
                  link: '/zh/demo/basic/dazzle',
                },
                {
                  text: '色盘',
                  link: '/zh/demo/basic/palette',
                },
                {
                  text: '阴影',
                  link: '/zh/demo/basic/shadow',
                },
                {
                  text: '渐变文字',
                  link: '/zh/demo/basic/gradient-text',
                },
              ],
            },
            {
              text: '动画效果',
              items: [
                {
                  text: '走马灯',
                  link: '/zh/demo/animation/horse-racing-light',
                },
                {
                  text: '自旋',
                  link: '/zh/demo/animation/spin',
                },
                {
                  text: '打字机',
                  link: '/zh/demo/animation/typewriter',
                },
                {
                  text: '波纹',
                  link: '/zh/demo/animation/ripple',
                },
              ],
            },
            {
              text: '交互效果',
              items: [
                {
                  text: '动态背景',
                  link: '/zh/demo/interact/dynamic-background-color',
                },
                {
                  text: '动态边框',
                  link: '/zh/demo/interact/dynamic-border',
                },
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
    logo: '/planet.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liting-yes/css' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Liting Yes',
    },
    algolia: {
      appId: 'Z8V46C2WJ5',
      apiKey: 'ed3d81f7b62922b5b813b2225922a0e8',
      indexName: 'css-liting',
      locales: {
        zh: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    },
  },
})
