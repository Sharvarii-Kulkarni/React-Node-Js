http = require('node:http');
listener = function(request,response)
{
response.writeHead(200, {'Content-type':'text/html'});

//send response as body
response.end('<h2 style="text-align:center;">Hello World</h2>');
};

server = http.createServer(listener);
server.listen(3000);

console.log('Server is running at http://127.0.0.1:3000/');