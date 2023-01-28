<template>
  <div>
    <p>手机add页面</p>
    <div class="input-box">
      <span>name: </span>
      <input v-model="user.name" class="input-item"/>
    </div>
    <div class="input-box">
      <span>tel: </span>
      <input v-model="user.tel" type="number" class="input-item"/>
    </div>
    <div @click="submitFn" class="submitBtn">Submit</div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, reactive, toRef, toRefs } from 'vue';
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import User from './class/User'

const router = useRouter();
let store = useStore()

let user = reactive({
  name: '',
  tel: 0
})

function submitFn () {
  console.log(user)
  let userAdded = new User(user.name, user.tel)
  store.commit('addUser', userAdded)
  router.push({path:'/phoneIndex'})
}
</script>

<style scoped>
.input-box {
  margin: 10px 0;
}
.input-item {
  border: 1px solid blue;
  text-indent: 10px;
}
.submitBtn {
  width: 200px;
  background: #42b983;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  margin: 0 auto;
}
</style>
