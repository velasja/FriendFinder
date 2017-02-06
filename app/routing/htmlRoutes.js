var path = require('path');
var app = express();

module.exports = function (app) {
	app.get("/survey", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/", function (req, res) {
		console.log("hello");
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};

console.log(module.exports);