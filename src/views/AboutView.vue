<template>
  <div class="about">
    <h1>This is an about page</h1>
    <App-button>button 1</App-button>
  </div>
</template>

<script>
import AppButton from '../components/AppButton.js';

export default {
  
  components: {
    'App-button': AppButton
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
