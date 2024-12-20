<template>
  <div class="header-line"></div>
  <nav class="header-nav">
    <span class="header-logo material-icons">auto_stories</span>
    <div class="header-right">
      <nuxt-link to="/login" class="header-mypage material-icons">
        account_circle
      </nuxt-link>
      <div class="header-cart material-icons">shopping_cart</div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-line {
  background: rgb(0, 73, 117);
  height: 20px;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 60px;
}

.header-logo {
  color: rgb(0, 73, 117);
}

.header-mypage {
  color: rgb(174 175 177);
}

.header-cart {
  color: rgb(174 175 177);
  padding-left: 20px;
}
</style>
