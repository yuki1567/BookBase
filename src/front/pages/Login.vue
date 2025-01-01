<template>
  <div class="container">
    <main class="main">
      <div class="login-container">
        <span class="material-icons book-logo">auto_stories</span>
        <form class="login-form">
          <input type="text" placeholder="メールアドレス" class="text-field" />
          <input type="password" placeholder="パスワード" class="text-field" />
          <button @click="login" type="button" class="login-button">
            ログイン
          </button>
        </form>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
const emit = defineEmits()

const login = () => {
  emit('login')
}
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

.login-container {
  background-color: rgb(255 255 255);
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-logo {
  color: rgb(0, 73, 117);
}

.login-form {
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

.login-button {
  background: rgb(0, 88, 141);
  border-radius: 30px;
  padding: 13px 24px;
  width: 200px;
  display: block;
  margin: 20px auto 0px;
  color: rgb(255, 255, 255);
}

.login-button:hover {
  background: rgb(0, 73, 117);
}

.login-button:active {
  transform: scale(0.98);
}
</style>
