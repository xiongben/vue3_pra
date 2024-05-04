<template>
    <div>
        <h1>home detail</h1>
    </div>
</template>

<script setup lang="ts">


import {numberToChinese} from "@pureadmin/utils";

let a:any
a = 22
a = 'this is a word'
a = true

let b:unknown
b = 33
b = 'this is b'
b = false

let c:string

// 注意any and unknown的区别
// c = a
// c = b as string
c = <string>b

// 对象声明
let obj1:{name:string, age?: number, [propName: string]: any}
obj1 = {
    name: '卡卡西',
    skill: '雷切'
}

let arr1:number[] = [1, 2, 3]

// 元组，长度固定的数组
let h1: [string, number] = ['name', 23]

// 枚举
enum Gender {
    Male = 0,
    Female = 1
}
let person1: {name: string, gender: Gender} = {
    name: 'jake',
    gender: Gender.Male
}

// 类型别名
type MyType = 1 | 2 | 3 | 4
let p2: MyType = 2

// 可变数目的函数参数
let getSum = (arr: number[], callback: (...args: number[]) => number): number => {
    return callback(...arr)
}

const getSum1 = getSum([1,2,3], (...args: number[]): number => args.reduce((a, b) => a + b, 0))

// 高级类型
// 1,类型保护  typeof instanceof

  //链式调用
class NumberCount {
    constructor(public count: number = 0) {}

    addCount(num: number) {
        this.count += num
        return this
    }

    delCount(num: number) {
        this.count -= num
        return this
    }
}

const numberCount1 = new NumberCount(10)
// console.log(numberCount1.addCount(10).delCount(5))

// keyof使用
function getValueFn<T, K extends keyof T>(obj: T, keys: K[]): Array<T[K]> {
    return keys.map((n) => obj[n])
}

const info1 = {
    name: 'jack',
    age: 18
}

console.log(getValueFn(info1, ['name', 'age']))

interface Obj1<K> {
    [key: number]: K
}

let keys1: keyof Obj1<number>
let keys2: keyof Obj1<string>

interface MyTypes {
    a: number
    b: string
    e: undefined
    f: never
    g: object
}

type MyTypesObj = MyTypes[keyof MyTypes]
let res1: MyTypesObj = 1

// 隐射类型demo
type MyTypesReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

type MyTypes2 = MyTypesReadOnly<MyTypes>

// Record
type Record<K extends keyof any, T> =  {
    [P in K]: T
}

type MyTypesRecord = Record<number, number>
let res3: MyTypesRecord = {
    1: 11
}

//unknown
type type3 = keyof unknown
type type4 = never extends unknown ? true : false

// Exclude
type Diff<D, U> = D extends U ? never : D
type type5 = Diff<string | number | boolean , number | undefined>
type type6 = Exclude<string | number | boolean , number | undefined>

type Part =  {
    id: never
    name: string
    age: number
    desc: never
    function1: Function
    function2: Function
}

type type7 = Part[keyof Part]

type Type8<T> = {
    [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

type type9 = Type8<Part>
type type10 = never extends Function ? true : false

// infer
type type11<T> = T extends Array<any> ? T[number] : T
type type12 = Array<string>
type type13 = type11<type12>

type infer1<T> = T extends Array<infer U> ? U : T
type type14 = infer1<type12>

// ReturnType<T>
type returnType1<T> = T extends () => infer R ? R : never
type type15 = () => string
type type16 = returnType1<type15>

// instanceType
type instanceType1<T extends new (...args:any[]) => any> = T extends new (...args:any[]) => infer U ? U : any
class AClass {
    constructor() {
    }
}
type type17 = instanceType1<typeof AClass>
type type18 = instanceType1<any>

// decoration demo
function classDecorator<T extends {new(...args: any[]): {}}>(target: T) {
    return class extends target {
        public newProperty = 'new property'
        public hello = 'override'
    }
}
@classDecorator
class Greeter {
    public property = 'property'
    public hello:string
    constructor(m: string) {
        this.hello = m
    }
}

// console.log(new Greeter('world'))



</script>

<style scoped>

</style>
