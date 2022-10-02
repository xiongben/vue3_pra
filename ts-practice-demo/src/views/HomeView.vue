<template>
  <div class="home">

    <button @click="aboutPage">to about page</button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRef, toRefs } from 'vue';
import { useRouter } from "vue-router"
import type { Ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// 索引类型
interface Objs<T>{
  [key: string]: T
}

const obj1: Objs<number> = {age: 18}
let keys: Objs<number>['ttt'] = 888
console.log(keys)

//隐射类型
interface Info {
  age: number,
  name: string,
  sex: string
}

type ReadOnlyType<T> = {
  readonly [p in keyof T]: T[p]
}

type ReadOnlyInfo1 = ReadOnlyType<Info>

type ReadOnlyInfo2 = Partial<Info>





export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  created() {
    console.log("=====create====")
    // window.onmousedown = function(mouseEvent) {
    //   console.log(mouseEvent);  //<- Error
    // };

  },
  setup(){
    const router = useRouter();
    let data = reactive({
      num1: 200,
      num2: 300,
      resNum: 0
    })

    let messNum = ref<number>(20)
    let messNum2 = ref<number>(10)
    let res = ref<number>(0)

    function addFn(){
      data.resNum = data.num1 + data.num2
      console.log(data.resNum)
    }

    function aboutPage(){
      console.log(router)
      router.push({path:'/about'})
    }

    return {
      ...toRefs(data),
      messNum,
      messNum2,
      addFn,
      aboutPage,
      res
    }
  }
});
</script>
