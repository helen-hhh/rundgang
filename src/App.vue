<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuView from './views/MenuView.vue'
</script>

<template>
  <div class="container">
    <MenuView class="menu"></MenuView>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
