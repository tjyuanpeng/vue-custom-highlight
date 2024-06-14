<script setup lang="ts">
import { version } from 'vue-custom-highlight'

console.log(`version: ${version}`)
</script>
<template>
  <a-card title="@vue-custom-highlight/playground" class="main">
    <a-space direction="vertical">
      <a-button @click="$router.push('/component')">Component</a-button>
      <a-button @click="$router.push('/hook')">Hook</a-button>
    </a-space>
  </a-card>
</template>
<style scoped>
.main {
  width: 100%;
  max-width: 768px;
}
</style>
