import { defineConfig } from 'vitepress'
import { sidebarEn, sidebarZh } from './config/sidebar'

const ogImage = 'https://og.lovelliu.me/api/og?author=CSS%20Planet&backgroundImage=https%3A%2F%2Fres.craft.do%2Fuser%2Ffull%2Fa00fc09b-5dd0-bc21-aaeb-f7e491dce279%2Fdoc%2F64794A65-FAEC-4DDA-BD02-BD49D1E508D4%2F863192D1-8B51-4E4F-8ADA-090F036486DB_2%2FHeMRoxgkVNShNDzuxLGAwU3UNxsHwI2ZCfxDUFQW7R0z%2Fbg.svg&border=none&extra=%20&logo=https%3A%2F%2Fres.craft.do%2Fuser%2Ffull%2Fa00fc09b-5dd0-bc21-aaeb-f7e491dce279%2Fdoc%2F64794A65-FAEC-4DDA-BD02-BD49D1E508D4%2FC3C42ED6-11C7-43D5-9AEE-DBED0A117DB1_2%2Fx9U57uyeF3jYtJyzHNoflQriJyWo1VsSOl5AU6BSgX0z%2Fplanet.svg&ogType=og&rounded=none&theme=dark&title=The%20collection%20of%20CSS%20knowledge'

const ogURL = 'https://css.liting.ink'

export default defineConfig({
  title: 'CSS Planet',
  description: 'A css knowledge collection',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/planet.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'CSS Planet' }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogURL }],
    ['meta', { property: 'og:description', content: 'The collection of CSS knowledge' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'CSS Planet' }],
    ['meta', { name: 'twitter:description', content: 'The collection of CSS knowledge' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
  ],
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
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
        sidebar: sidebarEn,
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
        sidebar: sidebarZh,
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
