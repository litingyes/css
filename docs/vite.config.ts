import { defineConfig } from 'vite'
import vuePreview from 'vite-plugin-vue-preview'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vuePreview(), svgLoader()],
})
