import DefaultTheme from 'vitepress/theme'
import './index.scss'
import CodePreview from './components/CodePreview.vue'

export default {
  ...DefaultTheme,
  // @ts-expect-error ctx type
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('CodePreview', CodePreview)
  },
}
