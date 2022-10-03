<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{name}}'s age : {{age}}</h3>
    <HelloWorld :foo="fooData" :bar="barData" @changefn="changeFn"/>
    <button @click="changeInfo">change info</button>
  </div>
</template>
<script lang="ts" setup>
import {ref, onMounted, defineEmits, provide} from "vue";
import HelloWorld from './../components/HelloWorld.vue'
import {key1} from "@/common/common";

let name = ref('jack')
let age = ref(18)
let fooData = ref('this is foodata string')
let barData = ref(22)


//provide inject部分
// const key = Symbol() as InjectionKey<number>


provide(key1, 888)

function changeInfo(){
  name.value = "Mike"
  age.value = 24
}

function changeFn(data: number) {
  console.log('子元素调用父元素的方法，参数：' + data)
}

onMounted(() => {
  console.log('==== onmounted ===')
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
