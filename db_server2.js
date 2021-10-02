const http = require('http');
const fs = require('fs');
const mysql = require('mysql');

// connecting to database

var conn = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'test'
});
conn.connect(
    function(err){
        if(err) throw err;
        console.log('[*] connected to database')
})

const port = process.env.PORT || 4040;

var server = http.createServer((req, res)=>{
    console.log('requested url: ' + req.url);
    if (req.url == '/'){
        let data = fs.readFile('home.html',
        function(err, data){
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.write(data);
            return res.end(data);
        })
    }
});
server.listen(port,()=>{
    console.log('\n[*] server is started on port: ' + port);
})