<template>
  <li>
    {{ assignment.name }}
    <input type="checkbox" v-model="assignment.complete" />
  </li>
</template>

<script>
export default { 
  props: {
    assignment: Object
  }
 }
</script>