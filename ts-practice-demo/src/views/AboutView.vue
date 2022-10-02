<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

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

  moved(distance = 20){
    console.log(`animal moved ${distance} m`)
  }
}

interface animal {
  name?: string,
  age?: number,
  [propName: string]: any
}

class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {
  }
}


abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
    console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

  constructor() {
    super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

interface GenericIdentityFn<T>{
  (arg:T):T
}

function identity<T>(arg:T):T {
  return arg;
}

let myIdentity:GenericIdentityFn<number> = identity

function create1<T>(c:{new():T}):T {
  return new c()
}

let person3 = create1(Person)
console.log(person3)
person3.moved(6666)

export default defineComponent({
  name: 'AboutView',
  props: {
    msg: String,
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

    let animal1:animal = {name: 'dog', age: 1}

    let person2 = new Person()
    person2.moved(999)

    let octopus1 = new Octopus('tttt')
    console.log(octopus1.name)

    let department: AccountingDepartment;
    department = new AccountingDepartment();
    department.printName();
    department.printMeeting();
    department.generateReports();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
