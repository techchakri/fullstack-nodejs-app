let mongo = require("mongodb");
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb+srv://chakrijallu7:chakrijallu7@react-cluster.7fmkr2r.mongodb.net/fullstack-app"
let db;

function dbConnect() {
    MongoClient.connect(mongoUrl, {useNewUrlParser:true},(err,client) => {
        if (err) console.log(`Error While Connecting to MongoDb: ${err}`)
        db = client.db('octnode')
    })
}

async function getData(colName,query){
    return await db.collection(colName).find(query).toArray()
}

module.exports = {
    dbConnect,
    getData
}