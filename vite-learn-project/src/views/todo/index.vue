<template>
  <div class="list-box">
      <div class="flex flex-row gap-4 my-2">
        <p class="font-bold text-lg text-blue-600">todo list</p>
        <div class="bg-blue-400 text-white px-2 rounded-md" @click="addItem">add</div>
      </div>

      <TodoItem :detail="detailInfo"/>
    <TodoItem v-for="item in detailInfoList" :detail="item"/>
  </div>

</template>

<script setup lang="ts">
import TodoItem from "@/views/todo/component/todoItem.vue";
import {ref, Ref} from "vue";
import message from "@/views/components/message/message"

const detailInfo: Ref<DetailInfo> = ref({
  title: 'first one',
  name: 'Jack',
  score: 99,
  isEdit: false
})

message.success('这是一个成功报警')
message.error('这是一个错误报警')

const detailInfoList: Ref<DetailInfo[]> = ref([])

getListFn()

function getListFn() {
  for(let i = 0; i < 5; i++) {
    const item: DetailInfo = {
      title: 'this is ' + (i + 1),
      name: 'Mike',
      score: 99,
      isEdit: false
    }
    detailInfoList.value.push(item)
  }
}

function addItem() {
  const index: number = detailInfoList.value.length + 1
  const item: DetailInfo = {
    title: 'this is ' + index,
    name: 'Mike',
    score: 99,
    isEdit: false
  }
  detailInfoList.value.push(item)
}

</script>

<style scoped>
.list-box {
  width: 300px;
  margin: 0 auto;
}
</style>
