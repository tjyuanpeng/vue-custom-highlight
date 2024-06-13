<script setup lang="ts"></script>
<template>
  <a-card class="main">
    <a-space direction="vertical">
      <a-button @click="$router.push('/component')">component</a-button>
      <a-button @click="$router.push('/hook')">hook</a-button>
    </a-space>
  </a-card>
</template>
<style scoped>
.main {
  max-width: 1200px;
  margin: 100px auto;
}
</style>
