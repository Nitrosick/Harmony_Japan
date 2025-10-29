const title = 'Harmony Technologies'

export default defineNuxtConfig({
  compatibilityDate: '2025-09-20',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      title: title,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [{ textContent: 'JavaScript is required' }]
    },
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  components: {
    dirs: [
      'components/ui',
      'components/app',
      'components/section'
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          silenceDeprecations: ['import'],
          additionalData: '@import "@/assets/style/variables.scss";'
        },
      },
    },
  },
  css: [
    '@/assets/style/normalize.scss',
    '@/assets/style/main.scss'
  ],
  imports: {
    dirs: ['store']
  },
  modules: [
    '@nuxtjs/i18n',
    'motion-v/nuxt',
    'nuxt-gtag'
  ],
  i18n: {
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    strategy: 'prefix',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json' }
    ],
    langDir: '../locales/',
    experimental: {
      typedOptionsAndMessages: 'default',
    }
  },
  gtag: {
    id: 'G-0QJHDP20Y3',
    enabled: process.env.NODE_ENV === 'production',
    config: { anonymize_ip: true }
  }
})
