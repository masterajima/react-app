//require is nodejs module converted es6
let http=require('http');
const { listenerCount } = require('process');
//send request to server
http.createServer(function(req,res){
    //send response header to request
    res.writeHead(200,{'Content Type':'text\html'});
    res.end()
})
//listen for connection to server
.listen(8080);