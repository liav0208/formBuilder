<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/nav/NavBar.vue"
export default {
  components:{
    NavBar,
  },
  
}
</script>

<style>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
  }

</style>
