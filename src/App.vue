<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>你的start是小编的学习的动力</p>
    <p>
        <!-- history 示例 （请修改router文件下的mode参数）-->
        <router-link to="/">home</router-link>
        <router-link to="/movie">movie</router-link>
        <router-link to="/book">book</router-link>
        <!-- hash 示例 （请修改router文件下的mode参数）-->
        <!-- <router-link to="#/">home</router-link>
        <router-link to="#/movie">movie</router-link>
        <router-link to="#/book">book</router-link> -->
    </p>
    <router-view></router-view>
    <h2>借助vue-cli和vue的插件功能，实现vue-router的简单功能（包含history和hash路由）</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to my router-plugin'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
