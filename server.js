var http = require('http'),
    url = require('url'),
    reqHandler = require('./services/reqHandler'),
    notFoundHandler = require('./services/notFoundHandler'),
    app = require('./app');


app.use(reqHandler);
app.use(notFoundHandler);

var server = http.createServer(app);

server.listen(8080);
server.on('listening', function(){
    console.log('app server listening on 8080!');
});