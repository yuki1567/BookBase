<template>
  <div class="container">
    <main>
      <div class="main-body">
        <span class="material-icons book-logo">auto_stories</span>
        <form>
          <input type="text" placeholder="メールアドレス" class="text-field" />
          <input type="password" placeholder="パスワード" class="text-field" />
          <button @click="login" type="button" class="submit-button">
            ログイン
          </button>
        </form>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['login'])

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

main {
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .logo-img {
    display: block;
    width: 60px;
  }

  .main-body {
    background-color: rgb(255 255 255);
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .book-logo {
      color: rgb(0, 73, 117);
    }

    form {
      display: flex;
      flex-direction: column;
      width: 400px;

      .text-field {
        padding: 10px;
        margin: 20px;
        border: 1px solid rgb(218 220 222);
        border-radius: 5px;
      }

      .submit-button {
        background: rgb(0, 88, 141);
        border-radius: 30px;
        padding: 15px;
        width: 200px;
        display: block;
        margin: 10px auto;
        color: rgb(255, 255, 255);
      }

      .submit-button:active {
        background: rgb(174 175 177);
        transform: scale(0.98);
      }
    }
  }
}
</style>
