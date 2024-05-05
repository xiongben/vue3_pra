<template>
  <div class="list-box">
      <p class="font-bold text-lg text-blue-600">todo list</p>
      <TodoItem :detail="detailInfo"/>
    <TodoItem v-for="item in detailInfoList" :detail="item"/>
  </div>

</template>

<script setup lang="ts">
import TodoItem from "@/views/todo/component/todoItem.vue";
import {ref, Ref} from "vue";

const detailInfo: Ref<DetailInfo> = ref({
  title: 'first one',
  name: 'Jack',
  score: 99,
  isEdit: false
})

const detailInfoList: Ref<DetailInfo[]> = ref([])

getListFn()

function getListFn() {
  for(let i = 0; i < 10; i++) {
    const item: DetailInfo = {
      title: 'this is ' + (i + 1),
      name: 'Mike',
      score: 99,
      isEdit: false
    }
    detailInfoList.value.push(item)
  }
}

</script>

<style scoped>
.list-box {
  width: 300px;
  margin: 0 auto;
}
</style>
