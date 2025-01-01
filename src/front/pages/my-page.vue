<template>
  <div class="parsonal-container">
    <div class="parsonal-content">
      <section class="left-section">
        <h1 class="title">名前</h1>
        <div class="details">
          <p>山田 太郎</p>
          <div class="material-icons edit-icon">edit</div>
        </div>
      </section>
      <section class="right-section">
        <h1 class="title">住所</h1>
        <div class="details">
          <p>東京都千代田区丸の内1-1-1</p>
          <div class="material-icons edit-icon">edit</div>
        </div>
      </section>
    </div>

    <div class="parsonal-content">
      <section class="left-section">
        <h1 class="title">メールアドレス</h1>
        <div class="details">
          <p>taro.yamada@example.com</p>
          <div class="material-icons edit-icon">edit</div>
        </div>
      </section>
      <section class="right-section">
        <h1 class="title">パスワード</h1>
        <div class="details">
          <p>********</p>
          <div class="material-icons edit-icon">edit</div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.parsonal-container {
  margin-top: 100px;
  border-top: 1px solid rgb(218 220 222);
}

.parsonal-content {
  display: flex;
  border-bottom: 1px solid rgb(218 220 222);
  padding: 20px 0 20px 0;
}

.section {
  flex: 1;
  margin-left: 20px;
}

.left-section {
  flex: 1;
}

.right-section {
  flex: 1;
  margin-left: 200px;
}

.title {
  font-size: 16px;
  color: rgb(0, 88, 141);
}

.details {
  display: flex;
  justify-content: space-between;
}

.edit-icon {
  font-size: 16px;
}
</style>
