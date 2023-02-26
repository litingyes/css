import DefaultTheme from 'vitepress/theme'
import './index.scss'
import { VuePreview } from 'vite-plugin-vue-preview'
import 'vite-plugin-vue-preview/style.css'

export default {
  ...DefaultTheme,
  // @ts-expect-error ctx type
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('VuePreview', VuePreview)
  },
}
