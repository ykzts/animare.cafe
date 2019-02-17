const routes = [
  '/ja',
  '/ja/member/haneru-inaba',
  '/ja/member/hinako-umori',
  '/ja/member/ichika-souya',
  '/ja/member/ran-hinokuma',
  '/en',
  '/en/member/haneru-inaba',
  '/en/member/hinako-umori',
  '/en/member/ichika-souya',
  '/en/member/ran-hinokuma'
]

export default {
  build: {
    html: {
      minify: {
        caseSensitive: false,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        minifyCSS: true,
        minifyJS: true,
        preserveLineBreaks: false,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: false
      }
    }
  },
  css: ['~/assets/css/main.css'],
  dev: process.env.NODE_ENV !== 'production',
  generate: {
    fallback: true,
    routes
  },
  loading: {
    color: '#b00020'
  },
  mode: 'universal',
  modern: 'client',
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        dev: false,
        id: 'UA-134662561-1'
      }
    ],
    '@nuxtjs/axios',
    [
      '@nuxtjs/sitemap',
      {
        generate: true,
        hostname: 'https://animare.cafe',
        routes
      }
    ],
    [
      'nuxt-i18n',
      {
        baseUrl: 'https://animare.cafe',
        defaultLocale: 'en',
        detectBrowserLanguage: false,
        langDir: './locales/',
        locales: [
          {
            code: 'en',
            file: 'en.json',
            iso: 'en-US',
            name: 'English'
          },
          {
            code: 'ja',
            file: 'ja.json',
            iso: 'ja-JP',
            name: '日本語'
          }
        ],
        lazy: true,
        parsePages: false,
        seo: true,
        strategy: 'prefix',
        vueI18n: {},
        vueI18nLoader: false,
        vuex: true
      }
    ]
  ]
}
