<script setup lang="ts">
  import "reflect-metadata"
  
  const { data } = useFetch('/api/user');
</script>
<template>
  <h1>HELLO</h1>
  <Book />
  <h2>{{ data }}</h2>
</template>
<style></style>