<template>
  <h1>css demo</h1>
<!--  flex -->
  <div class="flex flex-row bg-amber-200 w-64 justify-between">
    <div class="w-16 h-16 bg-blue-400">part 1</div>
    <div class="w-16 h-16 bg-blue-400">part 2</div>
    <div class="w-16 h-16 bg-blue-400">part 3</div>
  </div>

  <div class="flex flex-col bg-amber-200 h-64 w-32 justify-between items-center">
    <div class="w-16 h-16 bg-blue-400">part 1</div>
    <div class="w-16 h-16 bg-blue-400">part 2</div>
    <div class="w-16 h-16 bg-blue-400">part 3</div>
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
