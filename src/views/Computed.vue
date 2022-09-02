<script setup>
import { reactive, computed, ref } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
// in component
function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}

const now = computed(() => Date.now())

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <span>{{ now }}</span>
  <span>{{ fullName }}</span>
  <span class="text-red-500">{{ calculateBooksMessage() }}</span>
  <ul>
    <li v-for="book, i in author.books" :key="i">
      {{ book }}
    </li>
  </ul>
</template>