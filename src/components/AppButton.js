export default {
  data() {
    return {
      count: 0
    }
  },
  /*html */
  template: `
  <button 
    @click="count++" 
    :disabled="processing" 
    :class="{
      'default' : true,
      'blue' : type === 'primary',
      'maroon' : type === 'secondary',  
      'grey' : type === 'muted',
      'is-loading': processing
    }"
  >
    <slot />
    You clicked me {{ count }} times. 
  </button>
  `,

  props: {
    type: {
      type: String,
      default: 'primary'
    },

    processing: {
      type: Boolean,
      default: false,
    }
  },
}