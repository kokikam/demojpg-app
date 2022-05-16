import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@vueuse/nuxt',
        "@nuxtjs/tailwindcss",
        "@nuxtclub/feathericons",
      ],
      tailwindcss: {
        jit: true,
        // add '~tailwind.config` alias
        exposeConfig: true
      }
})

