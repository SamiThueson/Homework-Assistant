<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
