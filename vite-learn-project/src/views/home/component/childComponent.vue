<template>
  <div class="box">
    <p>son component part</p>
    <p>pageSize: {{pageSize}}</p>
    <p>pageNo: {{pageNo}}</p>
    <div @click="changeFn" class="w-40 p-2 flex justify-center items-center bg-blue-500 text-white cursor-pointer rounded-md">Change Number</div>
  </div>
</template>

<script setup lang="ts">

const $emit = defineEmits(['update:pageSize', 'update:pageNo'])

const props = defineProps(['pageSize', 'pageNo'])

function changeFn () {
  $emit('update:pageSize', props.pageSize + 1)
  $emit('update:pageNo', props.pageNo + 1)
}
</script>

<style scoped>
.box {
  border: 1px solid red;
  padding: 15px;
  margin: 15px;
}
</style>
