class VueRouter{
  constructor(Vue,options){
    this.$opts = options || []
    this.$vm = Vue
    this.routeMap = {}
    this.app = new Vue({
      data:{
        routerCurrent:"#/"
      }
    })
    this.initLlistener()
    this.createRouteMap()
    this.initComponent()
  }
  // 监听事件
  initLlistener(){
    window.addEventListener("load",this.onHashChange.bind(this),false)
    window.addEventListener("hashchange",this.onHashChange.bind(this),false)
  }
  // 创建路由的对应关系
  createRouteMap(){
    this.$opts.forEach(item => {
      this.routeMap[item.path] = item.component
    });
  }
  // 初始化组件
  initComponent(){
    const self = this;
    this.$vm.component("router-link",{
      props:{
        to:String
      },
      template:"<a :href='to'><slot></slot></a>"
    })

    // 当数据routerCurrent改变，组件将更换
    this.$vm.component("router-view",{
      render(h){
        let component = self.routeMap[self.app.routerCurrent]
        return h(component)
      }
    })
  }
  // 通过vue数据双向绑定特性修改当前组件
  onHashChange(){
    this.app.routerCurrent = window.location.hash.slice(1) || '/'
  }
}