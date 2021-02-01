export default {
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'iAdmin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    ,
    // script: [
    //  
    //]
    script: [
      {
        src: '/js/jquery.min.js',
      },
      {
        src: '/js/vendors.min.js',
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/css/app.min.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-confirm.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/moment'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/strapi',
    '@nuxtjs/axios'
  ],
  strapi: {
    url: 'http://localhost:3001',
    //url: 'https://iadminstrapi.herokuapp.com',
    entities: [
      'accounts',
      'hopdongs',
      'khos',
      'loaitaisans',
      'nhatkihopdongs',
      'nhatkitruycaps',
      'taisancams',
      'trackings',
      'listuseronlines',
      'socaitienmats',
      'chungtus',
      'notifications',
      'cauhinh',
      'tienquy',
      'decalcamdos',
      'hinhanhs',
      'reviews'

    ]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  },
}
