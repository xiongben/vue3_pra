<template>
  <div class="sonBox">
    <p>this is son component!</p>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import {key1} from "@/common/common";

let val = inject(key1)
console.log(val)
</script>

<style scoped>
.sonBox{
  padding: 20px;
  background: aqua;
}
</style>
