const http = require('http');

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Hello world!' }));
    } else if (req.method === 'POST' && req.url === '/') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200);
            res.end(JSON.stringify({ message: 'Data received', data: JSON.parse(body) }))
        })
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
};

const server = http.createServer(requestHandler);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});