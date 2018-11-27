const expres = require('express')
const mongoose = require('mongoose')
const dbConfig = require('./config/database')
const routes = require('./routes')

class App {

    constructor(){
        this.express = express()
        this.isDev = process.env.NODE_ENV !== 'production'

        this.middlewares()
        this.database()
        this.routes()
    }

    middlewares(){
        this.express.use(express.json())
    }

    database(){
        mongoose.connect(dbConfig.uri, {
            useCreateIndex: true,
            useNewUrlParser: true
        })
    }

    routes(){
        this.expres.use(routes)
    }
}

module.exports = new App().express
