const router = require("express").Router();

router.route("/").get((req, res) => {
	console.log("get user information");
});

router.route("/add").post((req, res) => {
	console.log("add user information");
});