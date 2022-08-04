<template>
   <form @submit.prevent="add" class="border border-gray-600">
    <input type="text" v-model="newAssignment" placeholder="New Assignment..." />
    <button type="submit" class="border rounded">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newAssignment: '',
    };
  },

  methods: {
    add() {
      this.$emit('tambah', this.newAssignment);
      this.newAssignment = '';
      // this.assignments.push({
      //   name: this.newAssignment,
      //   completed: false,
      //   id: this.assignments.length + 1,
      // });
    },
  },
};
</script>