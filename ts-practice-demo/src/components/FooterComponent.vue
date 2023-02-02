<template>
  <div class="foot-box">
    <p>footer</p>
    <p>{{ props.data}}: {{year}}: {{year2}}</p>
    <div class="btn" @click="changeFn">change</div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, ref, reactive, toRef, toRefs, Ref, withDefaults, defineEmits, computed, inject} from 'vue';

const foo = inject('jack')
console.log(foo)

// 为组件的 ref 标注类型
const year: Ref<string | number> = ref(2023)

// 为组件的 computed 标注类型
const year2 = computed<number>(() => {
  if (typeof year.value == "number") {
    return year.value * 100
  } else {
    return 100
  }
})

// 为组件的 props 标注类型
interface PropsTest {
  data?: number
  labelData?: {
    msg?: string
    labels?: string[]
  }
}

// const props = withDefaults(defineProps<PropsTest>(), {
//   msg: 'hello',
//   labels: () => ['one', 'two']
// })

const props = defineProps<PropsTest>()

console.log(props.labelData?.labels)

// 为组件的 emits 标注类型
const emit = defineEmits<{
  (e: 'change', val: string): void
}>()

function changeFn() {
  console.log("==== change ====")
  emit('change', 'this is emit function')
}

</script>

<style scoped>
.foot-box {
  width: 100%;
  /*height: 50px;*/
  background: #2c3e50;
  color: white;
}
.btn {
  color: white;
  padding: 5px;
  background: #42b983;
}
</style>