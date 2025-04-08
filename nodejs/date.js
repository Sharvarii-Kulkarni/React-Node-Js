var http =  require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res){
res.writeHead(200, {'Content-type':'text/html'});
res.write("The date time currently is: "+dt.myDateTime());
res.end();
}).listen(8080);