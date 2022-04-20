export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'store',
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
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyA6jD6aY3ui52VH8F6pe3CzK8tYcu23CMg',
      authDomain: 'ztmburger-99fe4.firebaseapp.com',
      projectId: 'ztmburger-99fe4',
      storageBucket: 'ztmburger-99fe4.appspot.com',
      messagingSenderId: '769031634046',
      appId: '1:769031634046:web:a4afefaaa130bad0c7ac2f',
      measurementId: 'G-DDV1SBRCJE'
    },
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          // onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false
        },
        ssr: false, // default
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      Oswald: true,
      'Lilita+One': true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }
}
