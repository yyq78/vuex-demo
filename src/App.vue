<template>
  <div id="app">
    <h1> My Vue.js App</h1>
    <!--<img src="./assets/logo.png">-->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
h1 {
    font-size:2em;
    text-align: center;
    color:#409EFF;
}
</style>
