<template>
  <h1>css demo</h1>
<!--  flex -->
  <div class="flex flex-row">
    <div class="flex flex-row bg-amber-200 w-64 justify-between">
      <div class="w-16 h-16 bg-blue-400 text-sm font-bold leading-tight">part 1</div>
      <div class="w-16 h-16 bg-blue-400 text-xb1 text-center">part 2</div>
      <div class="w-16 h-16 bg-blue-400 text-base">part 3</div>
    </div>

    <div class="flex flex-col bg-amber-200 h-64 w-32 justify-between items-center">
      <div class="w-16 h-16 bg-blue-400">part 1</div>
      <div class="w-16 h-16 bg-blue-400">part 2</div>
      <div class="w-16 h-16 bg-blue-400">part 3</div>
    </div>

    <div class="flex flex-row space-x-4">
      <div class="w-12 h-12 bg-blue-400">1</div>
      <div class="w-12 h-12 bg-blue-400">1</div>
      <div class="w-12 h-12 bg-blue-400">1</div>
    </div>

    <div class="bg-pink-50 w-32 h-16 flex flex-row items-center justify-center">
       <span class="bg-amber-200">8888</span>
    </div>
  </div>

  <div class="flex flex-row">
    <div class="bg-pink-50 grid grid-cols-3 gap-4 w-1/2">
      <div class="bg-blue-400 p-4">part 3</div>
      <div class="bg-blue-400 text-center capitalize">part 3</div>
      <div class="bg-blue-400">part 3</div>
      <div class="bg-blue-400">part 3</div>
      <div class="bg-blue-400 h-14 truncate">part 3 sadfjkdsa sfhasdf sadfasdjf dsfhasdjhfads dsafhasdj fasjf sdfsd dsfsad sadfasdd sdf</div>
      <div class="bg-blue-400 inline-block leading-10 h-16 text-red-500 text-center underline">
        part 3
        <span class="bg-amber-200 leading-10 text-xb1">999</span>
      </div>
    </div>

    <div class="bg-pink-50 grid grid-cols-3 gap-2 w-1/2">
      <div class="w-16 h-16 bg-blue-400">part 3</div>
      <div class="w-12 h-12 bg-blue-400 place-self-center">part 3</div>
      <div class="w-16 h-16 bg-blue-400">part 3</div>
      <div class="w-16 h-16 bg-blue-400">part 3</div>
      <div class="w-16 h-16 bg-blue-400">part 3</div>
      <div class="w-16 h-16 bg-blue-400">part 3</div>
    </div>
  </div>

  <div class="p-6 mx-auto max-w-sm bg-white rounded-xl shadow-md flex items-center mt-4 space-x-4 hidden">
    <div class="w-12 h-12 bg-blue-400"></div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>

  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hidden">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <div class="h-48 w-full md:h-full md:w-48 bg-blue-400"></div>
      </div>
      <div class="p-8">
        <div>Case study</div>
        <a class="hover:underline">Finding customers for your new business</a>
        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
      </div>
    </div>
  </div>
<!--  pinia-->
  <div class="bg-amber-500 p-4">
    <p>token: {{userData.username}}</p>
    <div class="flex flex-row space-x-4">
      <div class="bg-blue-400 px-4 py-2 w-32 flex items-center justify-center text-white rounded-md" @click="setToken">set token</div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {skills} from '../common/common'
import { getAssetImage } from "../common/common";
import { useUserStoreHook } from "../store/modules/user";
import axios from "axios";
import {getCardList} from "../api/list";

const userData = useUserStoreHook()

defineProps<{ msg: string }>()

const count = ref(0)
getList()

function setToken () {
  userData.SET_USERNAME('宇智波佐助')
}
function getList () {
  getCardList().then(res => {
    console.log(res)
  })
  // axios.post("/getCardList").then((response) => {
  //   console.log(response.data)
  // })
}

</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
