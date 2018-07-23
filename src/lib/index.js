/**
 * author haoxiaojun
 * on 2018-07
 * des 实现vue-router的简单功能
 */
const vueRouter = {
  /**
   * vue.js 的插件应当有一个公开方法 install 
   * https://cn.vuejs.org/v2/guide/plugins.html
   *
   * @param {*} Vue Vue 构造器
   * @param {*} options 可选的选项对象
   */
  install (Vue, options) {
     new VueRouter(Vue,options)
  }
}
class VueRouter{
  constructor(Vue,options){
    this.routeMap = {}
    this.$vm = Vue
    this.routes = options.routes || []
    this.mode = options.mode || 'hash'
    this.init(this.$vm)
    this.initListener()
    this.initComponent()
  }
  init(Vue){
    // 创建实例
    this.app = new Vue({
      data:{
        currentUrl:"/"
      }
    })
    // 区分模式
    this.updateMethods = this.mode == 'history' ? 'popstate' : 'hashchange'

    // 创建路由的对应关系
    this.routes.forEach(item => {
      this.routeMap[item.path] = item.component
    });
  }
  // 绑定监听click事件
  bindEvent(e){
    let url = e.getAttribute("data-href")
    this.push(url)
  }
  // 编译组件
  initComponent(){
    var self = this;
    if(this.mode == 'history'){
      this.$vm.component("router-link",{
        functional: true,
        props:{
          to:String
        },
        // template:'<a href="javascript:;" :data-href="to" ><slot></slot></a>'
        render(h,context){
          return h(
            'a',
            {
              attrs: {
                href:"javascript:;",
                "data-href": context.props.to
              },
              on:{
                click: function (e){
                  self.bindEvent(e.target)
                }
              },
            },
            context.children
          )
        }
  
      })
    }else{
      this.$vm.component("router-link",{
        props:{
          to:String
        },
        template:"<a :href='to'><slot></slot></a>"
      })
    }
    
    this.$vm.component("router-view",{
      render(createElement){
        let component = self.routeMap[self.app.currentUrl]
        return createElement(component)
      }
    })
  }
  
  // pushState
  push(url){
    window.history.pushState({},null,url)
    this.updateView()
  }
  // 监听load和popstate事件做更新操作
  initListener(){
    window.addEventListener("load",this.updateView.bind(this),false)
    window.addEventListener(this.updateMethods,this.updateView.bind(this),false)
  }
  // 更新视图
  updateView(){
    this.app.currentUrl = this.mode == 'history' ? (window.location.pathname || "/") : (window.location.hash.slice(1) || '/')
  }
}

// 因为直接用script的方式 我们并不可能使用use
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueRouter);
}
export default vueRouter // 导出..