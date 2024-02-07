// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/assets/css/global.css'],
  modules: [
    'nuxt-primevue',
    '@nuxtjs/supabase',
  ],
  supabase: { 
    redirect: false
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  
  }, 

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
  routeRules: {
    '/' : { redirect: '/login' },
  }
 
  
  
})
