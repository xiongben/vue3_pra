<template>
  <h1>{{ msg }}</h1>
  <div class="bg-gray-200">
    aaa
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
.read-the-docs {
  color: #888;
}
</style>
