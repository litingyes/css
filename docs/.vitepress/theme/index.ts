import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './index.scss'
import { SandBoxRun } from '@sandboxrun/vue'
import '@sandboxrun/vue/style'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SandBoxRun', SandBoxRun)
  },
} satisfies Theme
