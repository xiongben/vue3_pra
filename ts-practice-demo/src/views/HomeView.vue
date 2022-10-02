<template>
  <div class="home">

    <button @click="aboutPage">to about page</button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRef, toRefs } from 'vue';
import { useRouter } from "vue-router"
import type { Ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// 索引类型
interface Objs<T>{
  [key: string]: T
}

const obj1: Objs<number> = {age: 18}
let keys: Objs<number>['ttt'] = 888
console.log(keys)

//隐射类型
interface Info {
  age: number,
  name: string,
  sex: string
}

type ReadOnlyType<T> = {
  readonly [p in keyof T]: T[p]
}

type ReadOnlyInfo1 = ReadOnlyType<Info>

type ReadOnlyInfo2 = Partial<Info>

type PickInfo1 = Pick<Info, 'name'>
type RecordInfo1 = Record<any, string>

// 获取数组类型
type typeTest1<T> = T[]
type typeTest2 = typeTest1<string>[number]


const recordTest1: RecordInfo1 = {223: 'dddd', 'ddd': 'ttt'}

const pickinfo1: PickInfo1 = {
  name: 'jack'
}
console.log(pickinfo1)

// pick实现
interface Info2{
  name: string,
  age: number,
  address: string
}

const info5: Info2 = {
  name: 'lison',
  age: 18,
  address: 'beijing'
}

function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>{
  let res:any = {}
  keys.map(key => {
    res[key] = obj[key]
  })
  return res
}

const nameAddress = pick(info5, ['name', 'age'])
console.log(nameAddress)

// record例子
function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U>{
  let res:any = {}
  for(const key in obj) {
    res[key] = f(obj[key])
  }
  return res
}
// unknown类型
type type1 = string & unknown
type type2 = unknown | string
type type3 = never extends unknown ? true : false

// infer
type type4<T> = T extends any[] ? T[number] : T
type Test2 = type4<string[]>

type type5<T> = T extends Array<infer U> ? U : T
type Test3 = type5<string[]>

// 类装饰器
function classDecorator<T extends {new(...args: any[]): object}>(target: T){
  return class extends target {
    public newProperty = 'new property'
    public hello = 'override'
  }
}

@classDecorator
class Greeter {
  public newProperty = 'property'
  public hello:string
  constructor(m: string) {
    this.hello = m
  }
}

console.log(new Greeter('world'))

// 方法装饰器
function enumerable(bool: boolean){
  return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
    console.log(target, propertyName)
    descriptor.enumerable = bool
  }
}

class ClassF{
  constructor(public age:number) {
  }

  @enumerable(false)
  getAge(){
    return this.age
  }
}

const classf = new ClassF(18)
console.log(classf)



export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  created() {
    console.log("=====create====")
    // window.onmousedown = function(mouseEvent) {
    //   console.log(mouseEvent);  //<- Error
    // };

  },
  setup(){
    const router = useRouter();
    let data = reactive({
      num1: 200,
      num2: 300,
      resNum: 0
    })

    let messNum = ref<number>(20)
    let messNum2 = ref<number>(10)
    let res = ref<number>(0)

    function addFn(){
      data.resNum = data.num1 + data.num2
      console.log(data.resNum)
    }

    function aboutPage(){
      console.log(router)
      router.push({path:'/about'})
    }

    return {
      ...toRefs(data),
      messNum,
      messNum2,
      addFn,
      aboutPage,
      res
    }
  }
});
</script>
