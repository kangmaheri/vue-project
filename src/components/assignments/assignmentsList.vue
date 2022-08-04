<template>
  <section v-show="assignments.length">
    <h2 class="font-bold">
      {{  title  }}
      ({{ assignments.length }})
    </h2>
    <div class="flex gap-2">
      <button 
        @click="currentTag = tag"
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
    <ul class="mt-6">
      <Assignment 
        v-for="assignment in filteredAssignments" 
        :key="assignment.id"
        v-bind:assignment="assignment"
      ></Assignment>
    </ul>
  </section>
</template>

<script>
import Assignment from '../assignments/assignment.vue';
export default { 
  components: {
    Assignment,
  },
  
  props: {
    assignments: Array,
    title: String
  },
  
  data() {
    return {
      currentTag: 'all'
    };
  },

  computed: {
    filteredAssignments() {
      if(this.currentTag === 'all') {
        return this.assignments
      }
      return this.assignments.filter((a) => a.tag === this.currentTag);
    },

    tags() {
      return ['all', ...new Set(this.assignments.map(a => a.tag)) ];
    }
  }
 };
</script>