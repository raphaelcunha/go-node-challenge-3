const expres = require('express')
const routes = require('./routes')

class App {

    constructor(){
        this.express = express()
        this.isDev = process.env.NODE_ENV !== 'production'

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.express.use(express.json())
    }

    routes(){
        this.expres.use(routes)
    }
}

module.exports = new App().express
