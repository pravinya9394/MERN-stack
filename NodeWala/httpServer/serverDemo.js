const http=require("http");
const { type } = require("os");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("<h1>Hello from the server side</h1>");
}).listen(8000);