<template>
  <div>
    <div class="operator-box">
      <div class="add-btn">Delete</div>
      <div>User List</div>
      <div class="add-btn" @click="addFn">Add</div>
    </div>
    <div class="list-box">
      <div class="list-item">
        <img src="../assets/avatar1.png" class="avatar-img">
        <div class="user-name">{{user1.name}}</div>
        <div class="user-number">{{user1.tel}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, reactive, toRef, toRefs } from 'vue';
import { useRouter } from "vue-router"
import User from './class/User'

const router = useRouter();

let data = reactive({
  name: 'jack',
  tel: 3022201121,
})

let user = new User("mike", 3333333)
let user1 = ref(user)
console.log(user1.value.name)
console.log(user1.value.tel)

function addFn () {
  router.push({path:'/phoneAdd'})
}



</script>

<style scoped>
.operator-box {
  padding: 0 15px;
  height: 40px;
  border-bottom: 1px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.add-btn {
  width: 60px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: cornflowerblue;
  color: #fff;
  border-radius: 5px;
  font-weight: bolder;
}
.list-box {

}
.list-item {
  display: flex;
  flex-direction: row;
  padding: 5px 15px;
  border-bottom: 1px solid grey;
}
.avatar-img {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
.user-name {
  line-height: 40px;
  font-size: 18px;
  font-weight: bolder;
}
.user-number {
  line-height: 40px;
  margin-left: 15px;
}
</style>
