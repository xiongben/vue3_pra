<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>hello, xb</h1>
    <p>{{name}} {{age}}</p>
    <p>{{job.type}} : {{job.salary}}</p>
    <div @click="test1">test fn</div>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref, reactive} from "vue"

export default {
  name: 'HomeView',
  setup () {
    let name = ref("jack")
    let age = ref(18)
    let job = reactive({
      type: 'web engineer',
      salary: '30k'
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
      test1
    }
  }
}
</script>
