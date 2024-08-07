var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
		const url = new URL(req.url, `http://${req.headers.host}`);
		let fileName = "";
		switch (url.pathname) {
			case "/": //if a request like http://localhost:8080 arrives (no pathname)
				fileName = "./views/index.html";
				break;
			case "/run": // if a request like http://localhost:8080/add?x=3&y=8 arrives
				q = url.searchParams; // get the list of parameters in the query string (i.e. x & y)
				n1 = parseInt(q.get("n1")); // get the value of x
				n2 = parseInt(q.get("n2")); // get the value of y
				switch (q.get("opt")) {
          case "div":
            result = n1 / n2
            operator = "/"
            break;
          case "multi":
            result = n1 * n2
            operator = "x"
            break;
          case "add":
            result = n1 + n2
            operator = "+"
            break;
          case "sub":
            result = n1 - n2
            operator = "-"
            break;
        }
				msg = `The result is ${result}`; // build the response using JS template
				res.end(msg); // send it back to the client
				return; // end this callback
			default:
				return; // if a request with unknown pathname arrives, simply ignore it.
		}
		fs.readFile(fileName, function (error, content) {
			if (error) {
				// if an error (not null) occurred while reading the file such as file not found
				console.log("Sorry we got an error");
			} else {
				// there is no error
				res.end(content); // send the content of the file (either index or info) to the client
			}
		});
	}).listen(8080); // this is the port
