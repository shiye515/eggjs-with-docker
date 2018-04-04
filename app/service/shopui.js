const Service = require('egg').Service

class ShopUIService extends Service {
  async cliententry () {
    // read config
    // const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    const url = 'http://waimai.baidu.com/shopui/mobile/cliententry?request_time=1522827249382&third_party=&lat=4844754.560000&lng=12948202.340000&loc_lat=4844754.560000&loc_lng=12948202.340000&from=webapp&client_from=webapp&city_id=131&return_type=refresh&count=20&page=1&promotion=&sortby='
    const { data } = await this.ctx.curl(url, {
      data: {},
      dataType: 'json'
    })

    return data.result.shop_info.map(v => v.shop_name)
  }
}

module.exports = ShopUIService
