var url = require('url'),
    querystring = require('querystring')
    dbService = require('./dbService');
    
module.exports = function(req, res, next){
    var urlObj = url.parse(req.url);
    console.log(urlObj);
    if (urlObj.pathname === '/getTransasctions'){
        
        var queryData = querystring.parse(urlObj.query);
        var result = dbService.getTxData(queryData)
        result.then(res.write(result.toString()))
        .then(res.end())
        .then(next());
    } else {
        next();
    }
}