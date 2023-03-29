<template>
  <div class="bg-blue-400 flex flex-col">
    home demo page
    <div class="w-1/6 h-8 leading-8 bg-blue-600 m-4 text-center rounded-md text-white" @click="logout">LogOut</div>
  </div>
</template>

<script setup lang="ts">

import {useUserStoreHook} from "@/store/modules/user";

function logout () {
  useUserStoreHook().logOut()
}
</script>

<style scoped>

</style>
