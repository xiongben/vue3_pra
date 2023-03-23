<template>
  <div class="h-screen flex justify-center bg-blue-400">
    <div class="flex-col flex items-center w-1/2 justify-center">
      <div class="text-black font-bold">Login Page</div>
      <input class="w-1/3 m-4 h-8 rounded-md border-blue-600 border focus:text-blue-700 indent-2 focus:outline-none" placeholder="username" v-model="username"/>
      <input class="w-1/3 m-4 h-8 rounded-md border-blue-600 border focus:text-blue-700 indent-2 focus:outline-none" placeholder="password" v-model="pwd"/>
      <div class="w-1/3 h-8 leading-8 bg-blue-600 m-4 text-center rounded-md text-white">Login</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

let username = ref<string>()
let pwd = ref<string>()

username.value = "yyyyy"
pwd.value = "4455566"
</script>

<style scoped>

</style>
