class Router{
  constructor(option){
    this.routes = {}
    this.initListener()
    this.bindEvent()
    // 遍历参数，去做key-value关联
    option.forEach(item => {
      this.route(item.path,()=>{
        document.getElementById("content").innerHTML = item.component
      })
    });
  }
  // 绑定监听click事件
  bindEvent(){
    const _this = this;
    const alink = document.getElementsByTagName("a");
    Array.from(alink).forEach(link=>{
      link.addEventListener("click",function(){
        let url = this.getAttribute("data-href")
        _this.push(url)
      },false)
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
    let currentUrl = window.location.pathname || "/"
    this.routes[currentUrl] && this.routes[currentUrl]()
  }
  // 将路由于回调赋值关联
  route(fn,cb){
    this.routes[fn] = cb 
  }
}