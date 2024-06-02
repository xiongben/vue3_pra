<template>
  <div>
    <h1>Father test page</h1>
    <div class="page-box">
      <p>pageSize: {{pageSize}}</p>
      <p>pageNo: {{pageNo}}</p>
    </div>
    <div class="flex">
      <child-component v-model:pageSize="pageSize" v-model:pageNo="pageNo"/>
      <child-component2>
        <p>这是火隐村哦</p>
        <template v-slot:a>
          <p>他是雾隐村的七人众之一，鬼人再不斩</p>
        </template>
      </child-component2>
      <child-component2 v-slot="{persons}">
        <div>
          <p v-for="(item, index) in persons" class="underline" :key="index">
            <span>name: {{item.name}} ; </span>
            <span>skill: {{item.skill}} ; </span>
          </p>
        </div>
      </child-component2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChildComponent from "@/views/home/component/childComponent.vue";
import { ref } from "vue";
import ChildComponent2 from "@/views/home/component/childComponent2.vue";


let pageSize = ref(10)
let pageNo = ref(0)
let aa = 11
</script>

<style scoped>
.page-box {
  padding: 15px;
  margin: 15px;
  border: 1px solid blue;
}
</style>
