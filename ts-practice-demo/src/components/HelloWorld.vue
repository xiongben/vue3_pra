<template>
  <div class="box">
    <p>{{ data.msg }}</p>
    <p>{{props.foo}}=={{props.bar}}</p>
    <p>year: {{year}}, month: {{month}}</p>
    <p ref="el">book: {{book.title}}--count: {{count}}</p>
    <button @click="printProps">print props</button>
    <button @click="$emit('changefn', 1)">emit</button>
    <SonTest/>
  </div>
</template>

<script lang="ts" setup>

import {reactive, defineProps, withDefaults, defineEmits, ref, computed, provide, inject, defineExpose} from "vue";
import type { Ref, InjectionKey } from 'vue'

import SonTest from './SonTest.vue'

// prop部分
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

// reactive部分
interface Book{
  title: string,
  year?: number
}
const book: Book = reactive({title: 'vue3指导书籍'})

// computed部分
const count =computed<number>(()=>{
  return 555
})


// const foo1 = inject(key)
// console.log(foo1)

//模版引用
let el = ref<HTMLElement | null>(null)
// console.log(el)

// emit部分
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

defineExpose({
  data
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box{
  margin: 20px;
  padding: 20px;
  background: aquamarine;
}
</style>
