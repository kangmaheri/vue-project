export default {
  data() {
  return {
    count: 0,
    processing: false
  }
  },
  /*html */
  template: `
  <button @click="count++" :disabled="processing">
    <slot />
    You clicked me {{ count }} times. 
  </button>
  `
}