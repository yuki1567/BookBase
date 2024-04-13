<template>
  <ul>
    <li>Book1</li>
    <li>Book2</li>
    <li>Book3</li>
  </ul>
  <p>{{ data }}</p>
</template>
<script setup lang="ts">
import ApiService from '../services/ApiService'
import { ref, onMounted } from 'vue'

const data = ref()
const getUser = async () => {
  await ApiService.getUser().then((res) => {
    data.value = res.data.mail.user_email
  })
}

onMounted(async () => {
  getUser()
})
// const data = ApiService.getUser
</script>
<style></style>
