var http = require('http'),
    url = require('url'),
    querystring = require('querystring');

var server = http.createServer(function handler(req, res) {
    var urlObj = url.parse(req.url),
        queryData = querystring.parse(urlObj.query);
    if (urlObj.pathname !== '/getTransasctions' || queryData == null){
        res.statusCode = 404;
        res.end();
        return;
    }
    res.write('test');
    res.end();
});

server.listen(9090);
server.on('listening', function(){
    console.log('app server listening on 9090!');
});