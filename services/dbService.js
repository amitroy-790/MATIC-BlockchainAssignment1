var MongoClient = require('mongodb').MongoClient;
const {dburl,dbname,dbcollection} = require("../param/config");

async function getTxData(address, res, next) {
    var db = await MongoClient.connect(dburl);
    var dbo = db.db(dbname);
    dbo.collection(dbcollection).find({from: address}).toArray(function(err, result) {
            if (err) {
                console.log(err);
            }
            db.close();
            //console.log(result)
            if (result.length !=0) {
                res.write(JSON.stringify(result));
                res.end();
            }
            next();        
        });
};


module.exports = { getTxData};