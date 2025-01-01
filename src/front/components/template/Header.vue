<template>
  <div class="header-line"></div>
  <nav class="header-navigation">
    <span class="material-icons header-logo">auto_stories</span>
    <div class="header-actions">
      <nuxt-link to="/login" class="material-icons mypage-icon">
        account_circle
      </nuxt-link>
      <div class="material-icons cart-icon">shopping_cart</div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-line {
  background: rgb(0, 73, 117);
  height: 6px;
}

.header-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 60px;
}

.header-logo {
  color: rgb(0, 73, 117);
}

.mypage-icon {
  color: rgb(174 175 177);
}

.cart-icon {
  color: rgb(174 175 177);
  padding-left: 20px;
}
</style>
