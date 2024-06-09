<script setup lang="ts">
const props = defineProps(['name'])

</script>

<template>
  <div class="box flex justify-center items-center">
    {{name}}
  </div>
</template>

<style scoped>
.box {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 4px solid #646cff;
}
</style>
