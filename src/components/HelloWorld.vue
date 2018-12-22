<template>
  <div>
     <h1> My Vue.js App</h1>
    <router-link to="/signIn"><el-button icon="el-icon-search" round>explore</el-button></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top:225px;
  padding-bottom:16px;
  font-size:2em;
  text-align: center;
  color:#88ada6;
}
a {
  font-size:1.2em;
  /*color:lightblue;;*/
}
div{
  line-height:100px;
  text-align:center;
}
button{
    width:248px;
    background-color:#f3f9f1;
    border-color:#fffbf0;
}
button:hover{
  color:#75878a;
  background-color:#f3f9f1;
  border-color:#75878a;
}
</style>
