<template>
  <div class="material-icons book-image">image</div>
  <article class="book-content">
    <section class="book-info">
      <h1 class="book-title">安らぎの瞬間 - 動物たちの日常</h1>
      <p class="book-description">
        野生や家庭で暮らす動物たちのありのままの姿を捉えたフォトブック。心が和む瞬間から力強い生命の輝きまで、多彩な表情をお楽しみください。
      </p>
    </section>
    <section class="author-section">
      <h2 class="author-heading">著者</h2>
      <div class="author-content">
        <div class="material-icons author-icon">person</div>
        <div class="author-info">
          <h3 class="author-name">森野 光太郎</h3>
          <p class="author-biography">
            「森野光太郎」は幼少期から動物や自然に深い愛情を抱き、大学では生態学を専攻。卒業後は世界中を旅し、野生動物や風景を撮影し続けている。
          </p>
        </div>
      </div>
    </section>
    <section class="book-details">
      <div class="details-items">
        <section class="details-item">
          <h4 class="details-title">出版社</h4>
          <p>Berkley</p>
        </section>
        <section class="details-item">
          <h4 class="details-title">発売日</h4>
          <p>2024/02/01</p>
        </section>
      </div>
      <div class="details-items">
        <section class="details-item">
          <h4 class="details-title">言語</h4>
          <p>日本語</p>
        </section>
        <section class="details-item">
          <h4 class="details-title">ページ数</h4>
          <p>377</p>
        </section>
      </div>
      <div class="details-items">
        <section class="details-item">
          <h4 class="details-title">ISBN-13</h4>
          <p>978--451490889</p>
        </section>
        <section class="details-item">
          <h4 class="details-title">寸法</h4>
          <p>18.8 × 13 × 1.4 cm</p>
        </section>
      </div>
    </section>
    <section class="book-price-section">
      <h2 class="price-heading">価格</h2>
      <p class="book-price">
        <span class="price-notation">¥</span>1,500<span class="price-notation"
          >税込</span
        >
      </p>
    </section>
    <div class="cart-container">
      <button class="cart-button">カートに追加</button>
    </div>
  </article>
</template>
<script setup="ts"></script>
<style scoped>
.book-image {
  display: flex;
  justify-content: center;
  font-size: 700px;
}

.book-info {
  margin: 0 0 50px 0;
}

.book-title {
  font-size: 24px;
  margin-bottom: 15px;
}

.author-section {
  margin-bottom: 50px;
}

.author-heading {
  font-size: 22px;
  margin-bottom: 15px;
}

.author-content {
  display: flex;
  align-items: center;
}

.author-icon {
  font-size: 150px;
}

.author-name {
  font-size: 18px;
}

.book-details {
  margin-bottom: 50px;
}

.details-items {
  border-top: 1px solid rgb(218 220 222);
  display: flex;
  padding: 20px 0 20px 0;
}

.details-item {
  flex: 1;
}

.details-title {
  color: rgb(0, 88, 141);
}

.book-price-section {
  margin-bottom: 50px;
}

.price-heading {
  font-size: 22px;
  margin-bottom: 15px;
}

.book-price {
  font-size: 20px;
}

.price-notation {
  font-size: 12px;
  padding-left: 5px;
}

.cart-container {
  display: flex;
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
