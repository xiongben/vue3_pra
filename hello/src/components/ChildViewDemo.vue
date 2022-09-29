<template>
  <div class="box1">
    <h3>child box</h3>
    <SonView></SonView>
  </div>
</template>

<script>
import SonView from "@/components/SonView";
export default {
  name: "ChildViewDemo",
  components: {SonView}
}
</script>

<style scoped>
.box1 {
  background: #42b983;
}
</style>
