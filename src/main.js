/**
 * author haoxiaojun
 * on 2018-07
 * des 实现vue-router的简单功能
 */
import Vue from 'vue'
import App from './App.vue'
// 路由参数
import routerOptions from './router/index'
// 路由插件
import vueRouter from './lib/index'
// 注册插件
Vue.use(vueRouter,routerOptions)
// 实例
new Vue({
  el: '#app',
  render: h => h(App)
})
