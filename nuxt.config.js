export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // target: 'static',
  head: {
    title: 'mushida',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS
  css: ['swiper/css/swiper.css'],

  // Plugins to run before rendering page
  plugins: [
    {
      src:
        '@/plugins/nuxt-swiper-plugin.js',
      mode: 'client',
    },
  ],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
  ],

  // Modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration
  axios: {
    baseURL:
      'https://admin.mushida.org/wp-json/wp/v2',
  },

  // PWA module configuration
  pwa: {
    manifest: {
      lang: 'en',
      theme_color: '#0C4524',
    },
  },

  // Build Configuration
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      })
    },
  },
}
