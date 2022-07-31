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