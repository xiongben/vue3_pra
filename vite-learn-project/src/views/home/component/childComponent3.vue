<template>
  <div class="p-4 border-b border-gray-200">
    <input v-model="testVal" class="m-2 border border-black"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const testVal = defineModel<string>({default: ''})
const name = ref('开始起舞吧')
const sayFn = () => {
  console.log(name.value)
}

defineExpose({
  name,
  sayFn
})
</script>

<style scoped>

</style>
