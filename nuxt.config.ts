// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/assets/css/global.css'],
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    //unstyled: true,
    importPT: { 
      as: 'Tailwind', 
      from: path.resolve(__dirname, './presets/lara/') 
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
