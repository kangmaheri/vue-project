<script>
export default {
  data() {
    return {
      count: 0,
      processing: false
    }
  }
}
</script>


<template>
  <button @click="count++" :disabled="processing">
    <slot />
    You clicked me {{ count }} times. 
  </button>
</template>