<template>
  <div class="home">
    <button @click="aboutPage">to about page</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRef, toRefs } from 'vue';
import { useRouter } from "vue-router"


export default defineComponent({
  name: 'HomeView',
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
