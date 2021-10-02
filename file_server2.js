const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 4040;

const server = http.createServer(
    function(req, res){
        if (req.url == '/'){
            const data = fs.readFile('home.html', 
            function(err, data){
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                // res.write(data);
                return res.end(data);
            });
                }
    }
).listen(port);