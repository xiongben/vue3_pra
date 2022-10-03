<template>
  <div class="box">
    <p>{{ data.msg }}</p>
    <p>{{props.foo}}=={{props.bar}}</p>
    <p>year: {{year}}, month: {{month}}</p>
    <button @click="printProps">print props</button>
    <button @click="$emit('changefn', 1)">emit</button>
  </div>
</template>

<script lang="ts" setup>

import {reactive, defineProps, withDefaults, defineEmits, ref} from "vue";
import type { Ref } from 'vue'

interface Props {
  foo: string,
  bar: number
}

// 为props初始化赋值
const props = withDefaults(defineProps<Props>(), {
  foo: 'fooData init',
  bar: 0
})

// ref部分
const year: Ref<string | number> = ref(2022)
const month = ref<string | number>('12')

// const props = defineProps({
//   foo: {type: String, required: true},
//   bar: Number
// })

// emit
const emit = defineEmits(['changefn'])
// const emit = defineEmits<{
//   (e: 'changefn', value: number): void
// }>()



let data = reactive({
  name: 'mike',
  age: 18,
  msg: 'this is a child component'
})

function printProps(){
  // console.log(props.foo, props.bar)
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box{
  margin: 20px;
  padding: 20px;
  background: aquamarine;
}
</style>
