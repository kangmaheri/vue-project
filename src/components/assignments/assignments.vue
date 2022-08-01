<template>
  <AssignmentsList 
    :assignments="filters.inProgress" 
    title="In Progress Assignments"
  >
  </AssignmentsList>
  <br />
  <AssignmentsList 
    :assignments="filters.completed" 
    title="Completed Assignment"
  ></AssignmentsList>

  <form @submit.prevent="add" class="border border-gray-600">
    <input type="text" v-model="newAssignment" placeholder="New Assignment..." />
    <button type="submit" class="border rounded">Add</button>
  </form>
</template>

<script>
import AssignmentsList from '../assignments/assignmentsList.vue';
export default {
  components: {
    AssignmentsList,
  },
  
  data() {
    return {
      assignments: [
        { id: 1, name: "Finish Project", complete: false },
        { id: 2, name: "Read Chapter 4", complete: false },
        { id: 3, name: "Turn in Homework", complete: false },
      ],

      newAssignment: '',
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => a.complete),
        completed: this.assignments.filter((a) => !a.complete),
      };
    },
  },

  methods: {
    add() {
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length + 1,
      });
      this.newAssignment = '';
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