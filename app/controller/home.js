const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    const data = await this.ctx.service.shopui.cliententry()
    this.ctx.body = data
  }
}

module.exports = HomeController
