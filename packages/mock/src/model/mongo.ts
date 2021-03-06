
const config = require('../config/mongo')
const MongoClient = config.MongoClient
const url = config.url
const dbName = config.dbName

class Db {
    client = null
    db: any = new Object()
    constructor() {
        this.client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true })
        this.connect()
    }
    get_id(id) {
        return require('mongodb').ObjectID(id)
    } 
    connect() {
        let that: any = this
        return new Promise((resolve, reject) => {
            that.client.connect((err, client) => {
                if (err) {
                    reject(err)
                } else {
                    console.log('connected successful to mongo server')
                    const db = client.db(dbName)
                    that.db = db
                    resolve(db)
                }
            })
        })
    }
    async insert(tableName, option) {
        return new Promise((resolve, reject) => {
            this.db.collection(tableName).insertOne(option, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
    async find(tableName, option?, others?) {
        let other = Object.assign({}, others)
        let options = Object.assign({}, option)
        return new Promise((resolve, reject) => {
            this.db.collection(tableName).find(options, other).toArray((err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
    async findOne(tableName, options) {
        return new Promise( (resolve, reject) => {
            this.db.collection(tableName).findOne(options, (err, result) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(result)
                }
            })
        })
    }
    async updateOne(tableName, selector, document, options?) {
        let option = Object.assign(options, {})
        return new Promise( (resolve, reject) => {
            this.db.collection(tableName).updateOne(selector, document, option, (err, result) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(result)
                }
            })
        }) 
    }
    async save(tableName, document, options?) {
        let option = Object.assign(options, {})
        return new Promise( (resolve, reject) => {
            this.db.collection(tableName).save(document, option, (err, result) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(result)
                }
            })
        }) 
    }
    async count(tableName, options?) {
        let option = Object.assign({}, options)
        return new Promise( (resolve, reject) => {
            this.db.collection(tableName).count(option, (err, result) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(result)
                }
            })
        })
    }
}

let db = new Db()

export default db