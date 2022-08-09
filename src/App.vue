<script setup>
import Nav from './components/Nav.vue';
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <Nav />
  <div class="container flex justify-center items-center mt-10 flex-col">
   <RouterView />
  </div>
</template>


