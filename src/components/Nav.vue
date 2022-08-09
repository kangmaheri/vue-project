<template>
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" class="flex items-center">
        <img src="../assets/logo.svg" class="mr-3 h-6 sm:h-9" alt="Vue Logo">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Vue Vite
        </span>
    </a>
    <NavButton></NavButton>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <NavUl>
        <li>
          <NavLinks to="/" class="md:text-blue-700" aria-current="page">
            Home
          </NavLinks>
        </li>
        <li>
          <NavLinks to="/about">About</NavLinks>
        </li>
        <li>
            <NavLinks to="/house">House</NavLinks>
        </li>
        <li>
            <NavLinks to="/all">All</NavLinks>
        </li>
        <li>
          <NavLinks to="/counter">Counter</NavLinks>
        </li>
        <li>
          <NavLinks to="/mycounter">Counter</NavLinks>
        </li>
      </NavUl>
    </div>
  </div>
</nav>
</template>

<script setup>
import NavLinks from './NavLinks.vue'; 
import NavUl from './NavUl.vue';
import NavButton from './NavButton.vue';
</script>