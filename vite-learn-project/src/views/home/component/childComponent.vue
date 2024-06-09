<template>
  <div class="box">
    <p>son component part</p>
    <p>pageSize: {{pageSize}}</p>
    <p>pageNo: {{pageNo}}</p>
    <div @click="changeFn" class="w-40 p-2 flex justify-center items-center bg-blue-500 text-white cursor-pointer rounded-md">Change Number</div>
    <transition name="fade">
      <p v-if="show">木叶忍者学校</p>
    </transition>
    <div class="p-3 bg-pink-500" @click="toggle">toggle</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const $emit = defineEmits(['update:pageSize', 'update:pageNo'])

const props = defineProps(['pageSize', 'pageNo'])

const show = ref(false)

function changeFn () {
  $emit('update:pageSize', props.pageSize + 1)
  $emit('update:pageNo', props.pageNo + 1)
}

function toggle() {
  show.value = !show.value
}
</script>

<style scoped>
.box {
  border: 1px solid red;
  padding: 15px;
  margin: 15px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
