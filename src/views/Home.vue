<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p class="text1">{{data.selectGirl}}</p>
    <button v-for="(item,index) in data.girls" :key="index" v-on:click="data.selectGirlFn(index)">{{item}}</button>
    <p>=====</p>
    <button @click="data.changefn()">change</button>
    <div>{{ nowTime }}</div>
    <div><button @click="getNowTime">显示时间</button></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
    onRenderTriggered,
    watch,
} from "vue";
import {nowTime,getNowTime} from "@/hooks/time";

// @ is an alias to /src

interface DataProps{
  girls: string[];
  selectGirl: string;
  selectGirlFn: (index: number) => void;
  // value1: string;
  // changefn: () => void;
  [propName: string]: any;
}

export default ({
  name: "Home",
  setup(){
    console.log("开始创建组件")
    const data: DataProps = reactive({
      girls:["xiaohong","xiaoying","dajiao"],
      selectGirl:"",
      value1: "666",
      selectGirlFn:(index: number)=>{
        data.selectGirl = data.girls[index];
      },
      changefn:()=> {
        data.value1 = "8888";
        // document.title = data.value1;
      },
    })

    onBeforeMount(()=>{
       console.log("before mount ====")
    });

    onMounted(()=>{
      console.log("mount===>")
    })

    onBeforeUpdate(()=>{
      console.log("===before update===")
    })

    onUpdated(()=>{
      console.log("====update====")
    })

    // onRenderTracked((event)=>{
    //   console.log(event);
    // })

    onRenderTriggered((event)=>{
      console.log(event);
    })

    watch(()=> data.value1,(newVal,oldVal)=> {
      console.log(newVal,oldVal);
      document.title = data.value1;
    })

    const refData = toRefs(data);
    return {
      data,
      nowTime,
      getNowTime,
    };
    // return {
    //   ...refData,
    // };

  }



})
</script>
<style scoped>
  .text1{
    color:red;
  }
</style>
