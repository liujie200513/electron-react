const http = require('http');
const path = require('path');
const fs = require("fs")
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("./public/index.html",function(err,data){
           if(err){
                //如果此文件不存在，就应该用404返回
                res.statusCode = 404;
                res.setHeader('Content-Type', '·/html');
                res.end(err);
                return;
            };
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
         });
      
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});   