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

type test1<T> = T extends number | string ? T : unknown
type test2 = test1<string>


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
