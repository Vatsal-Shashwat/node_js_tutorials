const http = require('http');
const fs = require('fs');
const mysql = require('mysql');

// connecting to mysql database
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    db: "test"
});
// conn.connect();
conn.connect(function(err){
    if(err) throw err;
    console.log("[*] connected to database");
})

const port = process.env.PORT || 4040;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log('requested url : ' + req.url);
    
    if (req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        // res.writeHead('Content-Type', 'text/html');
        res.end('home page')
    }
    else if (req.url == '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('about page')
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('error: page not found on this server');
    }
})//.listen(port);
server.listen(port, ()=>{
    console.log('\n[*] server is started on port : ' + port);
})