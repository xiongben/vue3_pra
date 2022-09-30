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
