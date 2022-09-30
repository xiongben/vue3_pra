<template>
  <div class="home">
    <p>{{messNum}}</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup(){
    let messNum = ref(20)

    return {
      messNum
    }
  }
});
</script>
