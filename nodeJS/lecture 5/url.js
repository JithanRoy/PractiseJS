const httpreq = require('http');

 const server = httpreq.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello programmers!');
        res.write('How about you?');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about page!');
        res.end();
    } else {
        res.write('Not found!');
        res.end();
    }
})

server.listen(3000);

console.log('listening on port 3000');