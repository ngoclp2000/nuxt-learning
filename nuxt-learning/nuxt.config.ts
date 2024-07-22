// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components:[
    {
      path: '~/components',
      pathPrefix : false,
      global: true,
    },
  ],
  plugins:[
    '~/plugins/global-component.js'
  ],
  vite:{
    css:{
      preprocessorOptions:{
        scss: {
          additionalData: '@use "~/assets/styles/scss/_global.scss" as *;'
        }
      }
    }
  },

  app:{
    head:{
      charset : 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
})