<template>
  <div>vue yean good !!!</div>
  <div>count: {{count}}</div>
</template>

<script>
  import store from "../store";
  export default {
    name: 'App',
    data() {
      return {
        count: 1,
      };
    },
    mounted() {
      setInterval(() => {
        this.$data.count++
      }, 1000);
      console.log(store.getName())
    }
  }
</script>
