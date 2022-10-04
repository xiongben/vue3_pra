<template>
 <div>
   <div class="container max-auto text-amber-300 bg-amber-800">
     <span class="block bg-blue-300">1</span>
     <span class="block bg-blue-500">2</span>
   </div>
   <div class="flow-root bg-blue-600">
     <div class="my-4 bg-amber-300">1</div>
   </div>
   <div class="flow-root">
     <div class="my-4 bg-amber-300">2</div>
   </div>
   <div class="inline-flex bg-yellow-100 space-x-24">
     <div class="flex-1 bg-blue-500 w-40">1</div>
     <div class="flex-2 bg-blue-300">2</div>
     <div class="flex-3 bg-blue-400">3</div>
   </div>
<!--   宽度-->
   <div class="w-40 h-20 bg-red-400">
     eee
   </div>
<!--   flex-->
   <div class="h-20 w-screen bg-blue-300 flex flex-row">
     <div class="w-1/3 bg-yellow-100 flex flex-col justify-center">
       <span class="bg-amber-800">w-1/3</span>
     </div>
     <div class="w-1/3 bg-yellow-200 flex flex-row items-center">
       <span class="bg-amber-800">w-1/3</span>
     </div>
     <div class="w-1/3 bg-yellow-300 flex items-end">
       <span class="bg-amber-800">w-1/3</span>
     </div>
   </div>
   <p>css practice demo</p>
 </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
