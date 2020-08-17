export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    vueI18n: {
      messages: {
        en: {
          headline: 'Simple Blog Example',
          createdBy: 'Created by:',
          comments: 'Comments:',
          says: 'says',
          english: 'English',
          german: 'German',
          previous: 'Previous',
          next: 'Next',
        },
        de: {
          headline: 'Einfaches Blog Beispiel',
          createdBy: 'Erstellt von:',
          comments: 'Kommentare:',
          says: 'sagt',
          english: 'Englisch',
          german: 'Deutsch',
          previous: 'Zurück',
          next: 'Weiter',
        },
      },
    },
  },

  bootstrapVue: {
    icons: true,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend() {},
  },
};
