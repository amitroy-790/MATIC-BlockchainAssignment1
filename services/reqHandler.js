var url = require('url'),
    querystring = require('querystring')
    dbService = require('./dbService');
    
module.exports = async function(req, res, next){
    var urlObj = url.parse(req.url);
    //console.log(urlObj);
    var queryData = querystring.parse(urlObj.query);
    if (urlObj.pathname === '/getTransasctions' && queryData.addr!=(""||null)){
        //console.log(queryData);
        dbService.getTxData(queryData.addr, res, next);
    } else {
        next();
    }
}