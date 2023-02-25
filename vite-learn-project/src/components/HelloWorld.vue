<template>
  <h1>{{ msg }}</h1>
  <div class="w-16 bg-gray-200">
    aaa2
  </div>
  <div class="sm:bg-gray-200 md:bg-gray-400 lg:bg-gray-600 hover:bg-red-700">red</div>
  <div class="sm:text-left md:text-center lg:text-right bg-gray-200">响应式测试</div>
  <!--  group-hover-->
  <div class="group border-indigo-600 hover:bg-amber-100 hover:shadow-amber-700 hover:border-transparent">
    <p class="text-blue-700 group-hover:text-amber-300">part1<span class="banana">banana</span></p>
    <p class="text-blue-700 group-hover:bg-yellow-200 group-hover:underline">part2</p>
  </div>
<!--  focus-within-->
  <div class="text-gray-400 focus-within:text-red-500">
    <input class="focus:ring-2 focus:ring-gray-300 bg-amber-100"><br/>
    <button class="disabled:opacity-50 disabled:text-blue-700 bg-amber-100" disabled>Submit</button><br/>
    <input type="checkbox" class="appearance-none checked:bg-blue-400 checked:border-transparent">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {skills} from '../common/common'

console.log(skills)

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
.read-the-docs {
  color: #888;
}
@variants group-hover {
  .banana {
    color: deeppink;
  }
}
</style>
