<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>hello, {{ss}} {{type}}</h1>
    <p>{{name}} {{age}}</p>
    <p>{{job.type}} : {{job.salary}}</p>
    <p>{{fullText}}</p>
    <div @click="test1">test fn</div>
    <ChildViewDemo></ChildViewDemo>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref, reactive, computed, watch, watchEffect, toRef, toRefs, provide} from "vue"
import ChildViewDemo from "@/components/ChildViewDemo";

export default {
  name: 'HomeView',
  components: {ChildViewDemo},
  setup () {
    let name = ref("jack")
    let age = ref(18)

    // let fullText = computed(()=>{
    //   return name.value + "----" +age.value
    // })

    let fullText = computed({
      get(){
        return name.value + "----" +age.value
      },
      set(val){
        fullText = val + "666"
      }
    })

    let job = reactive({
      type: 'web engineer',
      salary: '30k',
      some: {
        any: {
          ss: 11
        }
      }
    })

    provide('jobFile',job)

    watch(name, (newVal, oldVal)=>{
      console.log(newVal, oldVal)
    })

    watch(()=>job.type,(newVal, oldVal)=>{
      console.log(newVal,oldVal,"==")
    },{deep:true})

    watchEffect(()=>{
      const x1 = job.type
      console.log(x1,"--watch effect")
    })

    function test1() {
      name.value = "rose"
      age.value = 25
      job.salary = '70000'
      job.type = 'java engineer'
      console.log(name, age)
    }

    return {
      name,
      age,
      job,
      fullText,
      ...toRefs(job),
      ss: toRef(job.some.any,'ss'),
      test1
    }
  }
}
</script>
