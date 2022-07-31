<template>
  <div class="about">
    <h1>This is an about page</h1>
    <App-button type="muted" :processing="true">button 1</App-button>
  </div>
</template>

<script>
import AppButton from '../components/AppButton.js';

export default {
  components: {
   AppButton
  },
}
</script>

<style>
.is-loading {
  display: inline-block;
  color: transparent;
}
.is-loading:after {
  content: " ";
  display: block;
  width: 24px;
  height: 24px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.blue{
  background: blue;
}
.default{
  border: 1px solid black;
}
.maroon{
  background: maroon;
}
.grey{
  background: grey;
}
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
