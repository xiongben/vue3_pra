<template>
  <div class="flex text-blue-300 bg-sky-blue-200 border-solid border-2 my-2">
    <span>{{props.detail.title}}</span> --
    <span>{{props.detail.name}}</span> --
    <span>{{props.detail.score}}</span>
  </div>
</template>

<script setup lang="tsx">

interface Item {
    text: string
    complete: boolean
}

const props = defineProps<{
  detail: DetailInfo
}>()




</script>

<style scoped>

</style>
