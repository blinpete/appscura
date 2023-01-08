// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
    'nuxt-icon',
  ],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    }
  }
  // windicss: {}
})
