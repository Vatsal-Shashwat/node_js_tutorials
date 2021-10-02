let http = require('http');
let fs = require('fs');
let mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'test'
});
conn.connect((err)=>{
    if(err) throw err;
    console.log('[*] connected to database')
})

let port = process.env.PORT || 4040;

let server = http.createServer((req, res)=>{
    console.log('[*] requested url: ' + url);
    if (req.url == '/'){
        let data = fs.readFile('home.html',(err, data)=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            return res.end();
        });

    }
})
server.listen(port, ()=> {
    console.log('\n[*] server is started on port: ' + port);
})