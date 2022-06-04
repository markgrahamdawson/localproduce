export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'localproduce-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/localProd'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }
    ],
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  env: {
    VUE_APP_LOCALPROD_API_VERSION: process.env.VUE_APP_LOCALPROD_API_VERSION,
    VUE_APP_LOCALPROD_API_BASE_URL: process.env.VUE_APP_LOCALPROD_API_BASE_URL,
  },

  axios: {
    baseURL: `${process.env.VUE_APP_LOCALPROD_API_BASE_URL}/v${process.env.VUE_APP_LOCALPROD_API_VERSION}`
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
