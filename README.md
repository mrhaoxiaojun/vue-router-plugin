# vue-router-plugin

> A Vue pulgin to vueRouter

## 使用说明

小编借助vue-cli和vue的插件功能，实现vue-router的简单功能（包含history和hash路由）主要目的是为了熟悉主流的这两种方式的实现方式，代码示例中有由浅入深的代码，从单纯的history和hash实现动态路由到添加vue的实现，再到混合在一起使用vue.use 将其包装为一个插件，并上传npm官网

**public目录中为history和hash由浅入深的实现**

## 使用方法

``` bash

import vueRouterPlugin from 'vue-router-plugin'
// 路由参数
import routerOptions from './router/index'
// 通过use挂载
Vue.use(vueRouterPlugin,routerOptions)
```

**./router/index.js**（支持history和hash两种模式）

```
const home = {template:"<div style='background: red;color: #fff;font-size: 38px;'>home</div>"}
const movie = {template:"<div style='background: yellow;color: #000;font-size: 38px;'>movie</div>"}
const book = {template:"<div style='background: blue;color: #fff;font-size: 38px;'>book</div>"}

export default {
  mode: 'history',
  routes:[
    {
      path:"/",
      component:home
    },
    {
      path:"/movie",
      component:movie
    },
    {
      path:"/book",
      component:book
    }
  ]
}
```

感谢您的阅读，[欢迎start](https://github.com/mrhaoxiaojun/vue-router-plugin.git)一起学习，1458149969@qq.com