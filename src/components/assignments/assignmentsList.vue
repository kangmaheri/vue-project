<template>
  <section v-show="assignments.length">
    <h2 class="font-bold">
      {{  title  }}
      ({{ assignments.length }})
    </h2>
    
    <AssignmentTags 
      :initialTags="assignments.map((a) => a.tag)" 
      :currentTag="currentTag"
      @change="currentTag = $event"
    />
    
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
import AssignmentTags from '../assignments/AssignmentTags.vue';

export default { 
  components: {
    Assignment,
    AssignmentTags,
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
  }
 };
</script>