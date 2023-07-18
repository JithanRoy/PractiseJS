const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /></form></body>'
        )
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk.toString());
            body.push(chunk);
        });
        req.on('end', () => {
            console.log("stream finished");
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('thank you for submitting');
            res.end();
        });

    }else{
        console.log("Data not found");
    }
})

server.listen(3000);

console.log('listening on port 3000');