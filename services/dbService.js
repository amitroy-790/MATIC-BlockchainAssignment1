var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/maticdb";

function addBlock(blockobj) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("maticdb");
        dbo.collection("blocks").insertOne(blockobj, function(err, res) {
        if (err) throw err;
        db.close();
        });
    });
}

module.exports = { addBlock};