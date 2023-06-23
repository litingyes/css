import { defineConfig } from 'vite'
import vuePreview from 'vite-plugin-vue-preview'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    vuePreview({
      props: {
        previewBodyStyle: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        previewAppStyle: {
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
        },
      },
    }),
    svgLoader(),
  ],
})
