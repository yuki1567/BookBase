<template>
  <div class="container">
    <main class="main">
      <div class="register-container">
        <span class="material-icons book-logo">auto_stories</span>
        <form class="register-form">
          <input type="text" placeholder="名前" class="text-field" />
          <input type="text" placeholder="メールアドレス" class="text-field" />
          <input type="password" placeholder="パスワード" class="text-field" />
          <button type="button" class="register-button">新規登録</button>
        </form>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: auto;
  height: 100vh;
}

.main {
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.register-container {
  background-color: rgb(255 255 255);
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-logo {
  color: rgb(0, 73, 117);
}

.register-form {
  display: flex;
  flex-direction: column;
  width: 400px;
}

.text-field {
  padding: 10px;
  margin: 20px;
  border: 1px solid rgb(218 220 222);
  border-radius: 5px;
}

.register-button {
  background: rgb(0, 88, 141);
  border-radius: 30px;
  padding: 13px 24px;
  width: 200px;
  display: block;
  margin: 20px auto 0px;
  color: rgb(255, 255, 255);
}

.register-button:hover {
  background: rgb(0, 73, 117);
}

.register-button:active {
  transform: scale(0.98);
}
</style>
