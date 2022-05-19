const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
    // Solution 1
    // fs.readFile("Test-file.txt", (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data)
    // }); 


    // solution2
    // const readable = fs.createReadStream('Test-file.txt')
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // })
    // readable.on("end", () => {
    //     res.end();
    // })
    // readable.on("error", err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("file not found");
    // });


    // Solution3
    const readable = fs.createReadStream("Test-file.txt");
    readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening...")
});