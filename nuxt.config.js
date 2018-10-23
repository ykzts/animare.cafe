const talents = [
  'haneru-inaba',
  'hinako-umori',
  'ichika-souya',
  'kuromu-inari',
  'ran-hinokuma'
]

const routes = talents.reduce(
  (routes, talent) => [
    ...routes,
    `/en/member/${talent}`,
    `/ja/member/${talent}`
  ],
  ['/en/', '/ja/']
)

export default {
  build: {
    extend(config, { isClient, isDev }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          exclude: /\/node_modules\//,
          loader: 'eslint-loader',
          test: /\.(js|ts|vue)$/
        })
      }
    },
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
  head: {
    meta: [
      { charset: 'UTF-8' },
      {
        content: 'initial-scale=1.0,width=device-width',
        name: 'viewport'
      }
    ]
  },
  generate: {
    fallback: true,
    routes
  },
  loading: {
    color: '#fff'
  },
  mode: 'universal',
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/sitemap',
      {
        generate: true,
        hostname: 'https://animare.cafe',
        routes: routes.map(url => ({
          changefreq: 'daily',
          priority: 1.0,
          url
        }))
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
        vuex: false
      }
    ],
    '~/modules/typescript',
    '~/modules/generate'
  ],
  plugins: ['~/plugins/axios'],
  router: {
    extendRoutes(routes) {
      for (const route of routes) {
        if (!route.path.endsWith('/')) continue

        route.pathToRegexpOptions = {
          strict: true
        }
      }
    }
  }
}
