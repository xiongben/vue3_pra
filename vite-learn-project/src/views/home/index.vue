<template>
  <div class="bg-blue-400 flex flex-col">
    home demo page
      <div class="w-1/6 h-8 leading-8 text-center bg-yellow-200 m-4 text-black">tabs page </div>
    <div class="w-1/6 h-8 leading-8 bg-blue-600 m-4 text-center rounded-md text-white" @click="logout">LogOut</div>
    <div class="w-1/6 h-8 leading-8 bg-blue-600 m-4 text-center rounded-md text-white" @click="tabsFn">tabs test</div>
  </div>
</template>

<script setup lang="ts">

import {useUserStoreHook} from "@/store/modules/user";
import router from "@/router";

function logout () {
  useUserStoreHook().logOut()
}

function tabsFn () {
  console.log(router.getRoutes())
  router.push("/tabs")
}
</script>

<style scoped>
</style>
