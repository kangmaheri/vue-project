<template>
  <section v-show="uncompletedAssignments.length">
    <h2>Assignments</h2>
    <ul>
      <li v-for="assignment in uncompletedAssignments" :key="assignment.id">
        {{ assignment.name }}
        <input type="checkbox" v-model="assignment.complete" />
      </li>
    </ul>
  </section>
  <br />
  <section v-show="completedAssignments.length">
    <h2>Completed Assignments</h2>
    <ul>
      <li v-for="assignment in completedAssignments" :key="assignment.id">
        {{ assignment.name }}
        <input type="checkbox" v-model="assignment.complete" />
      </li>
    </ul>
  </section>

</template>

<script>
export default {
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
    completedAssignments() {
      return this.assignments.filter((a) => a.complete);
    },
    uncompletedAssignments() {
      return this.assignments.filter((a) => !a.complete);
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
