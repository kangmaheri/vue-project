<template>
  <div class="about">
    <h1>This is an about page</h1>
    <App-button>button 1</App-button>
  </div>
</template>

<script>
export default {
  
  components: {
    'App-button': {
            data() {
          return {
            count: 0,
            processing: true
          }
        },
      /*html */
      template: `
          <button @click="count++" :disabled="processing">
            <slot />
            You clicked me {{ count }} times.
          </button>
        `
    },
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
