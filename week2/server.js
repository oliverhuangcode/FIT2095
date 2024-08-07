let http = require("http");
let fs = require("fs");
let fileName = "index.html";
const PORT_NUMBER = 8080;
http
    .createServer(function (request, response) {
        console.log("request ", request.url);
        let url = request.url;
        console.log("request ", url);
        switch (url) {
            case "/":
                fileName = "index.html";
                break;
            case "/about":
                fileName = "about.html";
                break;
            case "/contact":
                fileName = "contact.html";
                break;
            default:
                fileName = "error.html";
                break;
        }
        fs.readFile(fileName, function (error, content) {
            response.writeHead(200, {
                "Content-Type": "text/html",
            });
            response.end(content, "utf-8");
        });
    })
    .listen(PORT_NUMBER, function () {
        console.log(`Server running at http://localhost:${PORT_NUMBER}`)
    })
