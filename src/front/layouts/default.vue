<template>
  <header class="header">
    <Header />
  </header>
  <main class="main">
    <slot />
  </main>
  <footer class="footer">
    <Footer />
  </footer>
</template>
<script setup lang="ts">
import 'material-icons/iconfont/material-icons.css'
import Header from '@/components/template/Header.vue'
import Footer from '@/components/template/Footer.vue'
</script>
<style>
body {
  font-family: Arial, sans-serif;
  background: rgb(255 255 255);
  color: rgb(51 51 51);
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.header {
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.main {
  margin: 60px 120px 60px 120px;
}

.footer {
  padding: 12px;
  background: rgb(248, 248, 248);
  text-align: center;
}

/* 
カラー
ヘッダー、本アイコン: rgb(0, 73, 117)
ボタン: rgb(0, 88, 141)
ユーザーアイコン、カートアイコン: rgb(174 175 177)
しろ文字: rgb(255, 255, 255)
枠線: 1px solid rgb(218 220 222)
本一覧: 1px solid rgb(229, 231, 235)
*/
</style>
