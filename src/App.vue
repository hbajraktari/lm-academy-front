<template>
  <h1>
    {{ message }}
  </h1>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('Hysnije')

setTimeout(() => {
  message.value = 'Bajraktari'
}, 5000)
</script>

<style>
h1 {
  color: rgb(32, 19, 119);
}
</style>