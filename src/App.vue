<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterView from './views/FooterView.vue';
import NavbarView from './views/NavbarView.vue';
</script>

<template>
  <header>
    <NavbarView />
  </header>

  <RouterView />
  <FooterView />
</template>

<style scoped>
</style>