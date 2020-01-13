const Web3 = require("web3");
const MongoClient = require('mongodb').MongoClient;

const {kovanrpc,dburl,blockcount,dbname,dbcollection} = require("./param/config");

const web3 = new Web3(kovanrpc);

async function addTransactions() {

    var db = await MongoClient.connect(dburl);
    var dbo = db.db(dbname);

    latest = await web3.eth.getBlockNumber();
    for(i = latest;i>latest-blockcount;i--){
        let block = await web3.eth.getBlock(i);
        let txns = [];
        if ("transactions" in block === true) {
            let txhlist = block['transactions'];
            if (txhlist.length>0) {
                    await Promise.all(txhlist.map(async (txh) => {
                        let tx = await web3.eth.getTransaction(txh);
                        let txobj = new Object({
                            'hash':tx.hash,
                            'blockNumber':tx.blockNumber,
                            'from':tx.from,
                            'to':tx.to,
                            'value':tx.value
                        })
                        txns.push(txobj);
                }));
                dbo.collection(dbcollection).insertMany(txns, function(err, res) {
                    if (err) 
                    {
                        //db error log writter
                    }
                });
            }
        }
        console.log(i);
        
    }
    db.close();
}

addTransactions();