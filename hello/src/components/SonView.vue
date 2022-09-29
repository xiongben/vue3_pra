<template>
 <div class="box">
   <h3>son box</h3>
   <p>{{job.type}}-- {{job.salary}}</p>
 </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "SonView",
  setup(){
    let job = inject('jobFile')
    return {job}
  }
}
</script>

<style scoped>
.box {
  background: aqua;
}
</style>
