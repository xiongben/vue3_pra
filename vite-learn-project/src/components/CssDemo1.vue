<template>
  <h1>css demo</h1>
<!--  flex -->
  <div class="flex flex-row">
    <div class="flex flex-row bg-amber-200 w-64 justify-between">
      <div class="w-16 h-16 bg-blue-400 text-sm font-bold leading-tight">part 1</div>
      <div class="w-16 h-16 bg-blue-400 text-xb1 text-center">part 2</div>
      <div class="w-16 h-16 bg-blue-400 text-base">part 3</div>
    </div>

    <div class="flex flex-col bg-amber-200 h-64 w-32 justify-between items-center">
      <div class="w-16 h-16 bg-blue-400">part 1</div>
      <div class="w-16 h-16 bg-blue-400">part 2</div>
      <div class="w-16 h-16 bg-blue-400">part 3</div>
    </div>

    <div class="flex flex-row space-x-4">
      <div class="w-12 h-12 bg-blue-400">1</div>
      <div class="w-12 h-12 bg-blue-400">1</div>
      <div class="w-12 h-12 bg-blue-400">1</div>
    </div>

    <div class="bg-pink-50 w-32 h-16 flex flex-row items-center justify-center">
       <span class="bg-amber-200">8888</span>
    </div>
  </div>

  <div class="flex flex-row">
    <div class="bg-pink-50 grid grid-cols-3 gap-4 w-1/2">
      <div class="bg-blue-400 p-4">part 3</div>
      <div class="bg-blue-400 text-center capitalize">part 3</div>
      <div class="bg-blue-400">part 3</div>
      <div class="bg-blue-400">part 3</div>
      <div class="bg-blue-400 h-14 truncate">part 3 sadfjkdsa sfhasdf sadfasdjf dsfhasdjhfads dsafhasdj fasjf sdfsd dsfsad sadfasdd sdf</div>
      <div class="bg-blue-400 inline-block leading-10 h-16 text-red-500 text-center underline">
        part 3
        <span class="bg-amber-200 leading-10 text-xb1">999</span>
      </div>
    </div>

    <div class="bg-pink-50 grid grid-cols-3 gap-2 w-1/2">
      <div class="w-16 h-16 bg-blue-400">part 3</div>
      <div class="w-12 h-12 bg-blue-400 place-self-center">part 3</div>
      <div class="w-16 h-16 bg-blue-400">part 3</div>
      <div class="w-16 h-16 bg-blue-400">part 3</div>
      <div class="w-16 h-16 bg-blue-400">part 3</div>
      <div class="w-16 h-16 bg-blue-400">part 3</div>
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
</style>
