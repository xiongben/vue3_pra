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
  <div class="btn-xb">xb-btn</div>
<!--  布局-->
  <div class="container mx-auto bg-blue-400 border-4 border-gray-600">
    container
  </div>
<!--  <div class="decoration-clone bg-gradient-to-b from-amber-50 to-amber-900 text-blue-700 text-2xl">-->
<!--    Hello<br>-->
<!--    World-->
<!--  </div>-->
  <div class="space-y-4 bg-blue-400 w-12">
    <span class="block bg-amber-300">1</span>
    <span class="block bg-amber-300">2</span>
    <span class="block bg-amber-300">3</span>
  </div>
  <div class="space-x-4 bg-blue-400">
    <span class="inline-block bg-amber-300 hidden">1</span>
    <span class="inline-block bg-amber-300">2</span>
    <span class="inline-block bg-amber-300">3</span>
  </div>
  <div class="flex flex-row">
    <div class="w-16 h-16 mx-auto">
      <img class="object-contain w-10 h-16 bg-yellow-100" :src="getAssetImage('vue.svg')">
    </div>
    <div class="w-16 h-16 mx-auto">
      <img class="object-cover w-10 h-16 bg-yellow-100" :src="getAssetImage('vue.svg')">
    </div>
    <div class="w-16 h-16 mx-auto">
      <img class="object-fill w-10 h-16 bg-yellow-100" :src="getAssetImage('vue.svg')">
    </div>
  </div>
<!--  object position-->
  <div class="flex flex-row">
    <div class="w-16 h-16 mx-auto bg-yellow-100">
      <img class="object-none w-14 h-14 object-right-bottom bg-blue-400" :src="getAssetImage('vue.svg')">
    </div>
    <div class="w-16 h-16 mx-auto bg-yellow-100">
      <img class="object-none w-14 h-14 object-left-bottom" :src="getAssetImage('vue.svg')">
    </div>
    <div class="w-16 h-16 mx-auto bg-yellow-100">
      <img class="object-none w-14 h-14 object-right-top" :src="getAssetImage('vue.svg')">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {skills} from '../common/common'
import { getAssetImage } from "../common/common";

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
.btn-xb {
  width: 150px;
  @apply bg-blue-400 hover:bg-amber-300 text-white
}
</style>
