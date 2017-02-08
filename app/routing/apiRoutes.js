var friendData = require("../data/friends.js");
var path = require("path");

$("#submit").on("click", function(event) {
	event.preventDefault();

	var newFriend = {
		name: $("#name").val().trim(),
		photo: $("#photo").val().trim(),
		score: [
			parseInt($("#q1").val()),
			parseInt($("#q2").val()),
			parseInt($("#q3").val()),
			parseInt($("#q4").val()),
			parseInt($("#q5").val()),
			parseInt($("#q6").val()),
			parseInt($("#q7").val()),
			parseInt($("#q8").val()),
			parseInt($("#q9").val()),
			parseInt($("#q10").val())
		]
	};

	console.log(newFriend);

module.exports = function(app) {

	app.get("/api/friends", function (req, res) {
		res.json(friendData); // This will be used to display a JSON of all possible friends.
	});

	app.post("/api/friends", function (req, res) {
		// This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
		for (var i = 0; i < friendsData.length; i++) {
			thisArg = friendData[i];
			newFriend.score.forEach(subtract, thisArg);
		}

	});
}

function subtract(elem) {
	return Math.abs(elem - thisArg.scores);
}

// numbers.forEach(function(e, i, a) {
// 	var difference = Math.abs(e - otherNumbers[i]);
// 	console.log(difference);
// });