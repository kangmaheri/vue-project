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

  <AssignmentCreate @tambah="add"></AssignmentCreate>
  
</template>

<script>
import AssignmentsList from '../assignments/assignmentsList.vue';
import AssignmentCreate from '../assignments/assignmentCreate.vue';
export default {
  components: {
    AssignmentsList,
    AssignmentCreate
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

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
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