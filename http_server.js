/*
This is a simple http server wihtout database and without any template.
First node_js program of a simple http server.
*/

const http = require('http')

const port = process.env.PORT || 4040;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log('requested url : ' + req.url);
    // res.end('<h1>This is Vatsal_Kashyap</h1>');
    // console.log(req); 
    // console.log(res);
    // server.close(()=>{
    //     console.log('[*] server closed');
    // })
    if (req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end('<h2>This is Home Page</h2>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end('<h2>this is about page</h2>')
    }
    else{
        res.statusCode = 404;
        res.end("<h1><center>Not Found!!</center></h1>")
    }
})
server.listen(port, ()=>{
    console.log('[*] server is listening on ' + port);
})
