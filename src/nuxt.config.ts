import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr無効化
  ssr: false,

  // 参照するフロントのディレクトリ設定
  srcDir: 'front',

  // Global CSS リセットCSS
  css: ['ress'],

  vite: {
    define: {
      __VUE_OPTIONS_API__: false, // Options APIを有効化
      __VUE_PROD_DEVTOOLS__: false, // 本番環境でDevTools無効
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // 本番環境でHydrationエラーログ無効
    },
  },
})
