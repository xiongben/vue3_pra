<template>
  <div class="foot-box">
    <p>footer</p>
    <p>{{ props.data}}</p>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, ref, reactive, toRef, toRefs, Ref, withDefaults} from 'vue';
import { PropsTest } from '@/views/class/User'

let props = defineProps({
  data: {type: Number, required: true}
})

// let props = withDefaults(defineProps<PropsTest>(), {
//   msg: 'hello',
//   labels: () => ['one', 'two']
// })

</script>

<style scoped>
.foot-box {
  width: 100%;
  height: 50px;
  background: #2c3e50;
  color: white;
}
</style>