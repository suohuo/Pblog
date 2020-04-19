export default ({
  app, redirect
}) => {
  app.router.afterEach((to, from) => {
    let needRedirect = false
    //路由允许通过
    const allowPathArr = ["/my", "/articles/", "/collect", "/home/category/"]
    const include = item => to.path.indexOf(item) == 0
    needRedirect = !allowPathArr.some(include)
    console.log(to.path + "是否需要跳转:" + needRedirect)
    if (needRedirect) {
      //全部跳转首页
      redirect("/home/category/0")
    }
  })
}
