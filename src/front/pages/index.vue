<script setup lang="ts">
import BookList from '../template/BookList.vue'
import Header from '../template/Header.vue'
import Footer from '../template/Footer.vue'
import Login from '../template/Login.vue'
import Sample from '../template/sample.vue'

const isLogin = false
</script>
<template>
  <div id="app">
    <Login />
    <template v-if="isLogin">
      <Header />
      <BookList />
      <Footer />
    </template>
    <!-- <Sample /> -->
  </div>
</template>
<style>
#app {
  font-family: Arial, sans-serif;
  background-color: #f7f9fc;
  height: 100vh;
  color: #333;
}
a {
  text-decoration: none;
}
</style>
