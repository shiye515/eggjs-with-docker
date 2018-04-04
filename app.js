// 我们常常需要在应用启动期间进行一些初始化工作，等初始化完成后应用才可以启动成功，并开始对外提供服务。
module.exports = app => {
  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    console.log('应用初始化完成')
  })
}
