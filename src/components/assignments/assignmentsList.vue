<template>
  <section v-show="assignments.length">
    <h2 class="font-bold">{{  title  }}</h2>
    <ul>
      <Assignment 
        v-for="assignment in assignments" 
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
 };
</script>