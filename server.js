const http = require('http');

const port = process.env.PORT || 4040;

//const server = http.createServer((req, res)=>{

const server = http.createServer(
	function(req, res){
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	console.log('requested url : ' + req.url);

	if (req.url == '/'){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		// res.writeHead('Content-Type', 'text/html');
		res.end('home page');
	}
	else if (req.url == '/about'){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end('about page');
	}
	else{
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/html');
		res.end('page not found');
	}
}).listen(port);
// server.listen(port, ()=>{
// 	console.log('[*] server is listening on port : ' + port);
// })
