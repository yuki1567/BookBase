import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr無効化
  ssr: false,

  // Global CSS リセットCSS
  css: ['ress'],
})
