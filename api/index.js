const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('API lista\n');
}).listen(port, ()=> console.log('API en port', port));
