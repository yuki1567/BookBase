<template>
  <header class="header">
    <Header />
  </header>
  <main class="main">
    <BookList />
  </main>
  <footer class="footer">
    <Footer />
  </footer>
</template>

<script setup lang="ts">
import Header from '@/components/template/Header.vue'
import BookList from '@/components/template/BookList.vue'
import Footer from '@/components/template/Footer.vue'
</script>

<style scoped>
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
</style>
