<template>
  <div class="p-5">
    <h1>Father test page</h1>
    <p>vue version: {{version}}</p>
    <div class="page-box">
      <p>pageSize: {{pageSize}}</p>
      <p>pageNo: {{pageNo}}</p>
      <input v-model="userName.name"/>
      <span v-pre>{{ this will not be compiled }}</span>
      <customer-user name="jack"></customer-user>
    </div>
    <div class="flex">
      <child-component v-model:pageSize="pageSize" v-model:pageNo="pageNo"/>
      <child-component2>
        <p>这是火隐村哦</p>
        <template v-slot:a>
          <p>他是雾隐村的七人众之一，鬼人再不斩</p>
        </template>
      </child-component2>
      <child-component2 v-slot="{persons}">
        <div>
          <p v-for="(item, index) in persons" class="underline" :key="index">
            <span>name: {{item.name}} ; </span>
            <span>skill: {{item.skill}} ; </span>
          </p>
        </div>
      </child-component2>
      <div>
        <p>useModel practice demo</p>
        <p>testVal: {{testVal}}</p>
        <child-component3 ref="child3" v-model="testVal" />
        <button class="h-10 px-5 rounded-md border border-slate-200 text-slate-900" @click="testChildFn">say</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import ChildComponent from "@/views/home/component/childComponent.vue";
import { reactive, ref, version, defineAsyncComponent, toRefs } from "vue";
import ChildComponent2 from "@/views/home/component/childComponent2.vue";
import CustomerUser from "@/components/customElement/CustomerUser.vue";
import ChildComponent3 from "@/views/home/component/childComponent3.vue";

const ChildComponent = defineAsyncComponent({
  loader:() => import('@/views/home/component/childComponent.vue'),
  loadingComponent: {
    template: '<div>Loading...</div>'
  },
  errorComponent: {
    template: '<div>Error loading component.</div>'
  },
  delay: 3000,
  timeout: 3000
})

const child3 = ref()

let pageSize = ref(10)
let pageNo = ref(0)
let aa = 11
let userName = reactive({
  name: "Jack"
})

const testVal = ref('是宇智波的人')

testToRefs()

function testToRefs() {
  const state = reactive({
    foo: 1,
    bar: 2
  })
  const { foo, bar } = toRefs(state)
  console.log(foo.value, bar.value)
}

function testChildFn() {
  child3.value.sayFn()
}
</script>

<style scoped>
.page-box {
  padding: 15px;
  margin: 15px;
  border: 1px solid blue;
}
</style>
