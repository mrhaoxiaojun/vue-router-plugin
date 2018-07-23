class VueRouter{
  constructor(Vue,option){
    this.routeMap = {}
    this.$vm = Vue
    this.initListener()
    this.initComponent()
    // this.bindEvent()
    this.app = new Vue({
      data:{
        currentUrl:"/"
      }
    })
    // 遍历参数，去做key-value关联
    option.forEach(item => {
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
    window.addEventListener("popstate",this.updateView.bind(this),false)
  }
  // 更新视图
  updateView(){
    this.app.currentUrl = window.location.pathname || "/"
  }
}