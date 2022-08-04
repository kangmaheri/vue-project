<template>
  <div class="flex gap-2">
      <button 
        @click="$emit('change', tag)"
        v-for="tag, index in tags" 
        :key="index" 
        class="border rounded px-1 py-px text-xs hover:bg-slate-500 hover:text-white"
        :class="{
          'border-blue-500 text-blue-500' : tag === currentTag
        }"
      >
        {{ tag }}
      </button>
    </div>
</template>

<script>
export default { 
  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.initialTags)]; 
    },

  }
}
</script>