const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3003;
const _db = fs.readFileSync("db.json");
const db = JSON.parse(_db);
//console.log(JSON.parse(db));

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    //console.log(res);
    //const url = req.url; // どこに
    //const method = req.method; // アクション

    let rdata = null;

    rdata = db["posts"];

    res.end(JSON.stringify(rdata));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
