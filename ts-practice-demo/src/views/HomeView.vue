<template>
  <div class="home">
    <p>person: {{person1.name}}--{{person1.age}}</p>
    <p>num1:{{num1}} -- mum2:{{num2}} -- res:{{resNum}}</p>
    <p>{{messNum}} -- {{messNum2}}</p>
    <p>res: {{res}}</p>
    <button @click="addFn">add</button>
    <button @click="printPerson">print person</button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRef, toRefs } from 'vue';
import type { Ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


class Person {
  name: string;
  age: number;
  skill: string[];

  constructor(name?: string, age?: number, skill?: string[]) {
    this.name = name?name:""
    this.age = age?age:0
    this.skill = skill?skill:[]
  }

  introduce(): string {
    return "my name is" + this.name + ",i'm " + this.age
  }
}

interface animal {
  name: string,
  age: number
}


export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  created() {
    let name: string
    let age: number
    name = 'jack'
    age = 18
    console.log(`hello,my name is ${name}, age ${age}`)
    let list1:number[]
    list1 = [1,2,3,4]
    let x:[number , string]
    x = [34, 'hello']

    enum Color {Red, Blue, Yellow}
    let color1: Color
    color1 = Color.Blue

    let someVal = "eeerrrr"
    let len1 = (someVal as string).length

    let input = [1,2,3]
    let [first, second, third] = input
    let obj1 = {name: 'jack', age: 19, skill: 'soccer'}
    let {name: name2, age: age2, skill} = obj1

    console.log(name2, age2)

  },
  setup(){
    let data = reactive({
      num1: 200,
      num2: 300,
      resNum: 0
    })

    let messNum = ref<number>(20)
    let messNum2 = ref<number>(10)
    let res = ref<number>(0)

    let person1 = reactive<Person>(new Person("jack", 19, ["football"]))

    function printPerson(){
      person1.name = "rose"
      person1.age = 30
      console.log(person1.name, person1.age)
    }

    function addFn(){
      data.resNum = data.num1 + data.num2
      console.log(data.resNum)
    }

    return {
      ...toRefs(data),
      messNum,
      messNum2,
      addFn,
      printPerson,
      person1,
      res
    }
  }
});
</script>
