<template>
  <div>
    <div class="operator-box">
      <div class="add-btn">Delete</div>
      <div>User List</div>
      <div class="add-btn" @click="addFn">Add</div>
    </div>
    <div class="list-box">
      <div class="list-item" v-for="item in data.userList" :key="item">
        <img src="../assets/avatar1.png" class="avatar-img">
        <div class="user-name">{{item.name}}</div>
        <div class="user-number">{{item.tel}}</div>
        <div class="del-btn" @click="delFn(item)">delete</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, reactive, toRef, toRefs } from 'vue';
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import User from './class/User'

const router = useRouter();
let store = useStore()

console.log(store.getters.getUserList)

let data = reactive({
  userList: store.state.userList
})

// let user = new User("mike", 3333333)
// let user1 = ref(user)


function addFn () {
  let user2 = new User("jack li", 22445566)
  store.commit('addUser', user2)
  // router.push({path:'/phoneAdd'})
}

function delFn (item: User) {
  let newList = store.getters.getUserList
  for(let i = 0; i < newList.length; i++) {
    if (newList[i].tel == item.tel) {
      newList.splice(i, 1)
      store.commit('uploadUserList', newList)
      return
    }
  }
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
  justify-content: space-between;
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
.del-btn {
  color: red;
  line-height: 40px;
  padding: 0 6px;
  border: 1px solid grey;
  border-radius: 5px;
}
</style>
