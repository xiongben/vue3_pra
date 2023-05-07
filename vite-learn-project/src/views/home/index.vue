<template>
  <div class="bg-blue-100 flex flex-col">
    home demo page
      <child-component :name="childName" :detail="childParams" @changeSth="changeSth"/>
      <div class="w-1/6 h-8 leading-8 text-center bg-yellow-200 m-4 text-black">tabs page </div>
    <div class="btn" @click="logout">LogOut</div>
    <div class="btn" @click="tabsFn">tabs test</div>
      <div>
          <p>vue3 api</p>
          <p>{{person}}</p>
          <div class="btn" @click="showRawPerson">show raw person</div>
          <div class="btn" @click="addCar">add car</div>
          <div class="btn" @click="changeInfo">change info</div>
          <p>customRef</p>
          <h3>{{keyword}}</h3>
          <input type="text" v-model="keyword">
      </div>
  </div>
</template>

<script setup lang="ts">

import {useUserStoreHook} from "@/store/modules/user";
import router from "@/router";
import {ref, reactive, toRaw, markRaw, customRef, Ref, InjectionKey, provide, inject} from "vue";
import childComponent from "./component/childComponent.vue"
import ChildComponent from "@/views/home/component/childComponent.vue";

interface Skill {
    name: String;
}
interface Person {
    name: String;
    age: number;
    skill: {
        [name: string]: Skill
    },
    car?: any
}

let childName = ref("宇智波佐助")
let childParams = reactive<ChildParams>({
    name: "佐助",
    age: 22,
    remark: {skill: "火遁"}
})

// const key = Symbol() as InjectionKey<string>

provide('aa', 'foo') // 若提供的是非字符串值会导致错误



let person = reactive<Person>(
    {
        name: '佐助',
        age: 12,
        skill: {
            part1: {
                name: '豪火球之术'
            },
            part2: {
                name: '雷切'
            }
        },
        car: {}
    }
)

function myRef<T>(val: T): Ref<T> {
    return customRef((track, trigger) => {
        return {
            get(){
                console.log("======get====")
                track()
                return val
            },
            set(value:T){
                console.log("=====set=====")
                val = value
                trigger()
            }
        }
    })
}

let keyword = myRef("hello")

function showRawPerson() {
    const person1 = toRaw(person)
    console.log(person1)
}

function addCar() {
    let car = {name: 'Benzi', price: '20K'}
    // Object.assign(person, markRaw(car))
    person.car = markRaw(car) // 非响应式数据
    console.log(person)
}

function changeInfo() {
    person.car.name += "!"
    console.log(person)
}

function logout () {
  useUserStoreHook().logOut()
}

function tabsFn () {
  console.log(router.getRoutes())
  router.push("/tabs")
}

function changeSth (data: string) {
    console.log(data)
}
</script>

<style scoped>
.btn {
    @apply w-1/6 h-8 leading-8 bg-blue-600 m-4 text-center rounded-md text-white
}
</style>
