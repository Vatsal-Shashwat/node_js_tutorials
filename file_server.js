const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 4040;

const server = http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        if (req.url == '/'){
            // res.writeHead(200, {'Content-Type': 'text/html'});
            const data = fs.readFile('home.html',
            function(err, data){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            })
        }
    }
).listen(port);