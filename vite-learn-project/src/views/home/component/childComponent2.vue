<template>
  <div class="box">
    <p>son component part2</p>
    <slot></slot>
    <p>======具名插槽=======</p>
    <slot name="a"></slot>
    <p>======作用域插槽=======</p>
    <slot :persons="persons"></slot>
  </div>
</template>

<script setup lang="ts">
import { useUserStoreHook } from '@/store/modules/user'
import {ref} from "vue";

let userStore = useUserStoreHook()
userStore.SET_USERNAME('卡卡西旗木')
console.log(userStore.username)

let persons = ref([
  {id: 1, name: '漩涡鸣人', skill: '影分身之术', status: true},
  {id: 2, name: '宇智波佐助', skill: '须佐能乎', status: false},
  {id: 3, name: '春野樱', skill: '百豪之术', status: true},
  {id: 4, name: '卡卡西', skill: '雷切', status: false}
])
</script>

<style scoped>
.box {
  border: 1px solid red;
  padding: 15px;
  margin: 15px;
}
</style>
