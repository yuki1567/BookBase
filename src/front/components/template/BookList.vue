<template>
  <h3 class="book-list-title">商品一覧</h3>
  <ul class="book-list-items">
    <li class="book-list-item">
      <span class="material-icons book-image">image</span>
      <div class="book-description">
        <div class="book-section1">
          <div class="book-title">Book1</div>
          <div class="book-price">¥1,000</div>
        </div>
        <div class="book-section2">
          <div class="cart-botton">カートに入れる</div>
        </div>
      </div>
    </li>
    <li class="book-list-item">
      <span class="material-icons book-image">image</span>
      <div class="book-description">
        <div class="book-section1">
          <div class="book-title">Book2</div>
          <div class="book-price">¥1,000</div>
        </div>
        <div class="book-section2">
          <div class="cart-botton">カートに入れる</div>
        </div>
      </div>
    </li>
  </ul>
  <!-- <p>{{ data }}</p> -->
</template>
<script setup lang="ts">
// import ApiService from '../../services/ApiService'
// import { ref, onMounted } from 'vue'

// const data = ref()
// const getUser = async (): Promise<void> => {
//   const output = await ApiService.getUser()
//   data.value = output.mail
// }

// onMounted(async () => {
//   getUser()
// })
</script>
<style scoped>
.book-list-title {
  text-align: center;
}

.book-list-items {
  margin-top: 50px;
  border-top: 1px solid rgb(229, 231, 235);
  border-bottom: 1px solid rgb(229, 231, 235);

  .book-list-item {
    padding: 30px 0;
    display: flex;
    border-bottom: 1px solid rgb(229, 231, 235);

    .book-image {
      font-size: 200px;
    }

    .book-description {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      flex-grow: 1;
      margin: 24px 0 24px 30px;

      .book-section1 {
        display: flex;
      }

      .book-section2 {
        display: flex;
        justify-content: end;
      }
    }
  }
}
</style>
