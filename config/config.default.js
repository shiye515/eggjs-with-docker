const path = require('path')

exports.keys = 'Cookie'

exports.static = {
  prefix: '/static/',
  dir: path.join(__dirname, '..', 'app', 'static')
}

exports.cluster = {
  listen: {
    port: 8080
  }
}
