const config = require('./config.json')

module.exports = {
    getConnectionStringOnline() {
        return `mongodb://${config.username}:${config.password}@ds151820.mlab.com:51820/shop-cart`
    }
}