<template>
  <div class="search-form-container">
    <form class="search-form">
      <input type="text" placeholder="検索" class="input-field" />
      <button type="submit" class="material-icons search-icon">search</button>
    </form>
  </div>
  <ul v-if="books.length > 0" class="book-list-items">
    <li v-for="book in books" :key="book.id" class="book-list-item">
      <NuxtLink :to="`/book/${book.id}`" class="book-details-link">
        <span class="material-icons book-image">image</span>
      </NuxtLink>
      <div class="book-description">
        <div class="book-container">
          <NuxtLink :to="`/book/${book.id}`" class="book-details-link">
            <div class="book-title">{{ book.title }}</div>
          </NuxtLink>
          <div class="book-price">{{ book.price }}</div>
        </div>
        <div class="cart-container">
          <button class="cart-button">カートに追加</button>
        </div>
      </div>
    </li>
  </ul>
  <div v-else>なし</div>
</template>
<script setup lang="ts">
import ApiService from '@/services/ApiService'
import { ref, onMounted } from 'vue'
import { Books } from '@shared/types/api/response/book'

const books = ref<Books[]>([])

const getBook = async () => {
  const output = await ApiService.getBook()
  books.value = output
}

onMounted(async () => {
  getBook()
})
</script>
<style scoped>
.search-form-container {
  display: flex;
  justify-content: end;
}

.search-form {
  display: flex;
  width: 210px;
  height: 40px;
  border: 1px solid rgb(218 220 222);
  border-radius: 5px;
  padding: 0 10px 0 10px;
}

.input-field::placeholder {
  color: rgb(200 203 209);
}

.search-icon {
  color: rgb(200 203 209);
}

.book-list-items {
  margin: 80px 0 80px 0;
  border-top: 1px solid rgb(229, 231, 235);
}

.book-list-item {
  padding: 30px 0;
  display: flex;
  border-bottom: 1px solid rgb(229, 231, 235);
}

.book-details-link {
  color: inherit;
}

.book-image {
  font-size: 200px;
}

.book-description {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
  margin: 24px 30px 24px 30px;
}

.book-container {
  display: flex;
  justify-content: space-between;
}

.cart-container {
  display: flex;
  justify-content: end;
}

.cart-button {
  display: block;
  background: rgb(0, 88, 141);
  color: rgb(255, 255, 255);
  padding: 13px 24px;
  border-radius: 30px;
}

.cart-button:hover {
  background: rgb(0, 73, 117);
}

.cart-button:active {
  transform: scale(0.98);
}
</style>
