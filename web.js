const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8002;
app.use(express.static("uploads"));

app.use(express.static(path.join(__dirname, "/buildn")));
app.use(express.static(path.join(__dirname, "/builde")));

app.get("/nympheia", function (req, res) {
	res.sendFile(path.join(__dirname, "/buildn/index.html"));
});

app.get("/echolang", function (req, res) {
	res.sendFile(path.join(__dirname, "/builde/index.html"));
});

app.get("/nympheia/*", function (req, res) {
	res.sendFile(path.join(__dirname, "/buildn/index.html"));
});

/*app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "/build/index.html"));
});*/

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});