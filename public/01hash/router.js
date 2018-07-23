class Router{
  constructor(option){
    this.routes = {}
    this.initListener()
    // 遍历参数，去做key-value关联
    option.forEach(item => {
      this.route(item.path,()=>{
        document.getElementById("content").innerHTML = item.component
      })
    });
  }
  // 监听load和hashchange事件做更新操作
  initListener(){
    window.addEventListener("load",this.updateView.bind(this),false)
    window.addEventListener("hashchange",this.updateView.bind(this),false)
  }
  // 更新视图
  updateView(){
    let hash = window.location.hash.slice(1) || "/"
    this.routes[hash] && this.routes[hash]()
  }
  // 将路由于回调赋值关联
  route(fn,cb){
    this.routes[fn] = cb 
  }
}