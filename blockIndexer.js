const Web3 = require("web3");
const MongoClient = require('mongodb').MongoClient;

const {kovanrpc,dburl,blockcount,dbname,dbcollection} = require("./param/config");

const web3 = new Web3(kovanrpc);

async function addblock() {
    console.log('[@Client] triggering the service');
    var latest = await web3.eth.getBlockNumber();
    console.log(latest);
    var db = await MongoClient.connect(dburl);
    var dbo = db.db(dbname);
    for(i=latest-blockcount;i<=latest;i++){
        var blockobj = await web3.eth.getBlock(i);
        dbo.collection(dbcollection).insertOne(blockobj, function(err, res) {
            if (err) throw err;
            });
    }
    db.close();
}

addblock();