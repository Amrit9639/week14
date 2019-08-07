const http = require('http');

const site = http.createServer(function(req,res){
    console.log('hello world')
    res.setHeader('content-type','text/html');
    console.log(req.raw)

    res.write('yeah go http');
    res.setHeader('what should i do here');
})
site.listen(3000);

