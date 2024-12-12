<template>
  <div class="container">
    <main>
      <div class="main-body">
        <img src="../assets/images/logo.svg" alt="ロゴ" class="logo-img" />
        <form>
          <input type="text" placeholder="メールアドレス" class="text-field" />
          <input type="password" placeholder="パスワード" class="text-field" />
          <button type="submit" class="submit-button">ログイン</button>
        </form>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts"></script>
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
    background-color: white;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      width: 400px;

      .text-field {
        padding: 10px;
        margin: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }

      .submit-button {
        background-color: rgb(0, 170, 0);
        border-radius: 30px;
        padding: 15px;
        margin: 30px 20px;
        width: 200px;
        display: block;
        margin: 10px auto;
      }
    }
  }
}
</style>
