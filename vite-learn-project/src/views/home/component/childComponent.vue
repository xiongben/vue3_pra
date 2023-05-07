<template>
  <div>
     <h3>home child component</h3>
      <h4>{{name}} {{detail.remark}}</h4>
      <div @click="changeFn">change sth</div>
  </div>
</template>

<script setup lang="ts">

import {inject} from "vue";

const emits = defineEmits(['changeSth'])

const foo = inject<string>('aa')
console.log(foo)

const props = withDefaults(
    defineProps<{
        name: string
        detail?: ChildParams
    }>(),
    {
        name: "kaka",
    }
)

function changeFn () {
    emits('changeSth', '===666===')
}
</script>

<style scoped>

</style>