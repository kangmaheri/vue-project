<script>
export default {
  data() {
    return {
      greeting: "Hello Big World",
    };
  },
  mounted() {
    setTimeout(() => {
      this.greeting = "Changed";
    }, 3000);
  },
};
</script>

<template>
  <input type="text" v-model="greeting" />
  <p>{{ greeting }} ({{ greeting.length }})</p>
</template>
