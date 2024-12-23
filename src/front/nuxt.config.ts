import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr無効化
  ssr: false,

  // 参照するフロントのディレクトリ設定
  srcDir: 'front',

  // Global CSS リセットCSS
  css: ['ress'],
})
