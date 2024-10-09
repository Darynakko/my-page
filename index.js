var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
    console.log(req);
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyPage</title>
</head>
<body>
    <h1>Some content</h1>
    <h2>Some other content</h2>
    <p>Even more content</p>
</body>
</html>`);

}).listen(port,function(){
    console.log('Node server is running on port ${port}...');
    
});