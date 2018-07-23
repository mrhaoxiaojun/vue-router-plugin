/**
 * author haoxiaojun
 * on 2018-07
 * des 实现vue-router的简单功能
 */
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