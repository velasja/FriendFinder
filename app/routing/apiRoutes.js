app.get("/api/friends", function (req, res) {
	res.sendFile(); // This will be used to display a JSON of all possible friends.
});

app.post("/api/friends", function (req, res) {
	// This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
	res.sendFile();
});