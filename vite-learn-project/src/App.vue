<template>
<!--  <HelloWorld msg="Hello World!" />-->
  <router-view />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import CssDemo1 from "./components/CssDemo1.vue";
import Hello from "./components/Hello.vue";
console.log('test')
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
