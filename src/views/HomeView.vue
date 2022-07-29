<template>
  <button :class="active ? 'text-red' : 'text-green'" @click="toggle">
    Click Me
  </button>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },

  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.text-green {
  color: green;
}
.text-red {
  color: red;
}
</style>
