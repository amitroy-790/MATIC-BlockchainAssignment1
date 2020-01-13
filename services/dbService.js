var MongoClient = require('mongodb').MongoClient;
const {dburl,dbname,dbcollection} = require("../param/config");

async function getTxData(address) {
    var db = await MongoClient.connect(dburl);
    var dbo = db.db(dbname);
    var p = new Promise(function(resolveFn, rejectFn){
        dbo.collection(dbcollection).find({from: address}).toArray(function(err, result) {
            if (err) {
                return rejectFn(err);
            }
            var data = JSON.parse(result);
            return resolveFn(data);
        });
        
    });
    db.close();
    return p;
};


module.exports = { getTxData};