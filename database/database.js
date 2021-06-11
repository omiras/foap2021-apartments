const uri = "mongodb+srv://root:root@cluster0.lo8dg.mongodb.net/?retryWrites=true&w=majority";

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


class DataBase {

    static _db;

    static connect() {
        client.connect(err => {
            if (err) throw err;
            this._db = client.db('foap-apartments')
        })
    }
}

module.exports = DataBase;