export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // target: 'static',
  head: {
    title: 'Muslimat Hidayatullah - Organisasi Wanita Islam Indonesia',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Website resmi Muslimat Hidayatullah (Mushida) — organisasi pendukung yang berinduk pada ormas Islam nasional Hidayatullah yang dideklarasikan pada tahun 2000 di Gunung Tembak, Balikpapan, Kalimantan Timur.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'mushida, muslimat hidayatullah, hidayatullah, organisasi wanita, organisasi wanit islam indonesia, organisasi wanita indonesia, islam, sistematika nuzulnya wahyu, snw',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'mahdiyya',
      },
      {
        hid: 'publisher',
        name: 'publisher',
        content: 'Muslimat Hidayatullah',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'canonical',
        href: 'https://www.mushida.org/',
      },
    ],
  },

  // Global CSS
  css: ['swiper/css/swiper.css', '~/assets/css/style'],

  // Plugins to run before rendering page
  plugins: [
    {
      src: '@/plugins/nuxt-swiper-plugin.js',
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
    '@nuxtjs/google-fonts',
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
    baseURL: 'https://admin.mushida.org/wp-json/wp/v2',
  },

  // PWA module configuration
  pwa: {
    manifest: {
      lang: 'en',
      theme_color: '#0C4524',
      useWebmanifestExtension: false,
      name: 'Muslimat Hidayatullah',
      short_name: 'Mushida',
    },
  },
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      'Playfair+Display': [700, 900],
      Montserrat: {
        wght: [400, 500, 700],
        ital: [300, 700],
      },
    },
  },

  // Build Configuration
  build: {
    // extend(config, ctx) {
    //   config.module.rules.push({
    //     enforce: 'pre',
    //     test: /\.(js|vue)$/,
    //     loader: 'eslint-loader',
    //     exclude: /(node_modules)/,
    //     options: {
    //       fix: true,
    //     },
    //   })
    // },
  },
}
