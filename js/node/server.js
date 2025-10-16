const http = require('http');
const data= require('./data.json');
const PORT = 3000;
const server = http.createServer(
    (req, res) => {
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify(data));
        if(req.url === '/'){
            res.write('hi');
            res.end('Home Page');
        }
        if(req.url === '/about'){
            res.end('About Page');
        }
         if(req.url === '/posts'){
           res.end(JSON.stringify(data));
        }
    }
);

console.log(server);




server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

