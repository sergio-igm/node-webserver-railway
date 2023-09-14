import http from 'http'

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" }) 
    res.write(JSON.stringify({
        a: 4,
        b: {
            a: 3
        }
    }));


    res.end()
})
    .listen(8080)