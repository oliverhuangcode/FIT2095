var http = require("http");
var fs = require("fs");
const PORT_NUMBER = 8080;

http.createServer(function (req, res) {
		const url = new URL(req.url, `http://${req.headers.host}`);
		let fileName = "";
		switch (url.pathname) {
			case "/": //if a request like http://localhost:8080 arrives (no pathname)
				fileName = "./views/index.html";
				break;
			case "/assessments": //if a request like http://localhost:8080/info arrives
				fileName = "./views/assessments.html";
				break;
      case "/topics": //if a request like http://localhost:8080/info arrives
				fileName = "./views/topics.html";
				break;
			case "/whichweek": // if a request like http://localhost:8080/add?x=3&y=8 arrives
				q = url.searchParams; // get the list of parameters in the query string (i.e. x & y)
        const weekDiff = getDaysDiff(q.get("d"), q.get("m"), q.get("y"))
        if (weekDiff === -1) {
          msg = 'Input date is before the first day of the semester'
        }
        else {
          if (weekDiff >= 14) {
            msg = 'Input date is after week 14'
          } else {
            msg = `${weekDiff} weeks since first day of semester two (24th July 2023)`
          }
        }
				res.end(msg); // send it back to the client
				return; // end this callback
			default:
				fileName = "./views/404.html";
				break;
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
	}).listen(PORT_NUMBER, function () {
    console.log(`Server running at http://localhost:${PORT_NUMBER}`)
})

/**
 * 
 * @param {day} d 
 * @param {month} m 
 * @param {year} y 
 * @returns week number since August 3,2020; returns -1 if the input is before 3rd of August 2020
 */


function getDaysDiff(d, m, y) {
  let returnValue = -1;
  let currentDay = new Date();
  currentDay.setDate(parseInt(d));
  currentDay.setMonth(parseInt(m) - 1); // months start from 0
  currentDay.setYear(parseInt(y));

  let firstDay = new Date(2024,6,24); // first day in semester 2

  if (currentDay >= firstDay) {
      var diffDays = parseInt((currentDay - firstDay) / (1000 * 60 * 60 * 24)); //gives day difference 
      returnValue = (Math.floor(diffDays / 7) + 1);
  }
  return (returnValue);
}